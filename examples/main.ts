import * as $ from "@goscript/builtin/index.js"
import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import * as compatibility from "@goscript/go.uber.org/cadence/compatibility/index.js"
import type { Interface as WorkflowService } from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import {
	NewWorker,
	WorkerOptions,
} from "@goscript/go.uber.org/cadence/internal/index.js"
import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"
import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import * as grpcTransport from "@goscript/go.uber.org/yarpc/transport/grpc/index.js"

import {
	HelloActivityDefinition,
	HelloWorldWorkflowDefinition,
} from "./workflow.js"

export const DefaultDomain = "default"
export const DefaultTaskList = "hello-world"
export const DefaultFrontendAddress = "127.0.0.1:7833"
export const DefaultClientName = "goscript-cadence-worker"
export const CadenceServiceName = "cadence-frontend"

export interface MainOptions {
	domain?: string
	taskList?: string
	frontendAddress?: string
	clientName?: string
}

interface SignalProcess {
	once(signal: "SIGTERM", listener: () => void): void
	removeListener(signal: "SIGTERM", listener: () => void): void
}

interface RuntimeProcess extends SignalProcess {
	argv: string[]
	exitCode?: number
}

function runtimeProcess(): RuntimeProcess | undefined {
	return (
		globalThis as typeof globalThis & { process?: RuntimeProcess }
	).process
}

function waitForSIGTERM(): {
	received: globalThis.Promise<void>
	dispose: () => void
} {
	const process = runtimeProcess()
	if (process == null) {
		throw new globalThis.Error("SIGTERM handling requires a Node.js runtime")
	}

	let listener = (): void => {}
	const received = new globalThis.Promise<void>((resolve) => {
		listener = resolve
		process.once("SIGTERM", listener)
	})

	return {
		received,
		dispose: () => process.removeListener("SIGTERM", listener),
	}
}

async function workerError(
	action: string,
	err: Exclude<$.GoError, null>,
): globalThis.Promise<globalThis.Error> {
	return new globalThis.Error(`${action}: ${await err.Error()}`)
}

export interface CadenceConnection {
	service: WorkflowService
	close(): globalThis.Promise<void>
}

/** Connect to Cadence's gRPC frontend through a YARPC gRPC dispatcher. */
export async function connectCadence(
	frontendAddress = DefaultFrontendAddress,
	clientName = DefaultClientName,
): globalThis.Promise<CadenceConnection> {
	const grpc = await grpcTransport.NewTransport(null)
	if (grpc == null) {
		throw new globalThis.Error("failed to create YARPC gRPC transport")
	}

	const outbound = await $.pointerValue(grpc).NewSingleOutbound(
		frontendAddress,
		null,
	)
	if (outbound == null) {
		throw new globalThis.Error("failed to create YARPC gRPC outbound")
	}

	const dispatcher = await yarpc.NewDispatcher(
		new yarpc.Config({
			Name: clientName,
			Outbounds: $.makeMap<string, transport.Outbounds>([
				[
					CadenceServiceName,
					new transport.Outbounds({
						Unary: $.interfaceValue<transport.UnaryOutbound | null>(
							outbound,
							"*grpc.Outbound",
							$.pointerType("grpc.Outbound"),
						),
					}, true),
				],
			]),
		}, true),
	)
	if (dispatcher == null) {
		throw new globalThis.Error("failed to create YARPC dispatcher")
	}

	const startErr = await $.pointerValue(dispatcher).Start()
	if (startErr != null) {
		throw await workerError("failed to start YARPC dispatcher", startErr)
	}

	try {
		const clientConfig = await $.pointerValue(dispatcher).ClientConfig(
			CadenceServiceName,
		)
		const domain = await apiv1.NewDomainAPIYARPCClient(clientConfig, null)
		const workflow = await apiv1.NewWorkflowAPIYARPCClient(clientConfig, null)
		const worker = await apiv1.NewWorkerAPIYARPCClient(clientConfig, null)
		const visibility = await apiv1.NewVisibilityAPIYARPCClient(
			clientConfig,
			null,
		)
		const schedule = await apiv1.NewScheduleAPIYARPCClient(
			clientConfig,
			null,
		)

		const service = compatibility.NewThrift2ProtoAdapter(
			new compatibility.AdapterClients({
				Domain: domain,
				Workflow: workflow,
				Worker: worker,
				Visibility: visibility,
				Schedule: schedule,
			}, true),
		)
		if (service == null) {
			throw new globalThis.Error(
				"failed to create Cadence gRPC compatibility adapter",
			)
		}

		return {
			service,
			close: async () => {
				const stopErr = await $.pointerValue(dispatcher).Stop()
				if (stopErr != null) {
					throw await workerError(
						"failed to stop YARPC dispatcher",
						stopErr,
					)
				}
			},
		}
	} catch (err) {
		await $.pointerValue(dispatcher).Stop()
		throw err
	}
}

/**
 * Starts a Cadence worker and keeps it alive until the process receives
 * SIGTERM. The caller owns the workflow-service client's transport lifecycle.
 */
export async function runWorker(
	service: WorkflowService,
	options: MainOptions = {},
): globalThis.Promise<void> {
	const domain = options.domain ?? DefaultDomain
	const taskList = options.taskList ?? DefaultTaskList

	const [cadenceWorker, createErr] = await NewWorker(
		service,
		domain,
		taskList,
		new WorkerOptions(undefined, true),
	)
	if (createErr != null) {
		throw await workerError("failed to create Cadence worker", createErr)
	}
	if (cadenceWorker == null) {
		throw new globalThis.Error("Cadence returned no worker")
	}

	await cadenceWorker.RegisterWorkflow(HelloWorldWorkflowDefinition)
	await cadenceWorker.RegisterActivity(HelloActivityDefinition)

	const sigterm = waitForSIGTERM()
	let started = false
	try {
		const startErr = await cadenceWorker.Start()
		if (startErr != null) {
			throw await workerError("failed to start Cadence worker", startErr)
		}
		started = true
		await sigterm.received
	} finally {
		sigterm.dispose()
		if (started) {
			await cadenceWorker.Stop()
		}
	}
}

/** Connects to the local gRPC frontend, runs the worker, and closes the client. */
export async function main(options: MainOptions = {}): globalThis.Promise<void> {
	const connection = await connectCadence(
		options.frontendAddress ?? DefaultFrontendAddress,
		options.clientName ?? DefaultClientName,
	)
	try {
		await runWorker(connection.service, options)
	} finally {
		await connection.close()
	}
}

function isMainModule(): boolean {
	const metadata = import.meta as ImportMeta & { main?: boolean }
	if (metadata.main != null) {
		return metadata.main
	}

	const entrypoint = runtimeProcess()?.argv[1]
	return entrypoint != null
		&& import.meta.url === new URL(`file://${entrypoint}`).href
}

if (isMainModule()) {
	try {
		await main()
	} catch (err) {
		globalThis.console.error(err)
		const process = runtimeProcess()
		if (process != null) {
			process.exitCode = 1
		}
	}
}
