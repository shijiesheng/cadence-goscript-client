import * as $ from "@goscript/builtin/index.js"
import * as context from "@goscript/context/index.js"
import * as time from "@goscript/time/index.js"
import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import {
	NewClient,
	StartWorkflowOptions,
} from "@goscript/go.uber.org/cadence/internal/index.js"
import type { Client } from "@goscript/go.uber.org/cadence/internal/index.js"

import {
	connectCadence,
	DefaultClientName,
	DefaultDomain,
	DefaultFrontendAddress,
	DefaultTaskList,
} from "./main.js"
import { HelloWorldWorkflowDefinition } from "./workflow.js"

export interface StartOptions {
	domain?: string
	taskList?: string
	frontendAddress?: string
	clientName?: string
	workflowID?: string
	name?: string
}

export interface StartedWorkflow {
	workflowID: string
	runID: string
}

export interface CompletedWorkflow extends StartedWorkflow {
	closeEventType: shared.EventType
}

async function waitForWorkflowCompletion(
	client: Client,
	workflowID: string,
	runID: string,
): globalThis.Promise<shared.EventType> {
	const history = client.GetWorkflowHistory(
		context.Background(),
		workflowID,
		runID,
		true,
		shared.HistoryEventFilterTypeCloseEvent,
	)
	if (history == null) {
		throw new globalThis.Error("failed to create workflow history iterator")
	}

	while (await history.HasNext()) {
		const [event, err] = await history.Next()
		if (err != null) {
			throw new globalThis.Error(
				`failed to get workflow history: ${await err.Error()}`,
			)
		}
		if (event != null) {
			const eventType = $.pointerValue(event).EventType
			if (eventType == null) {
				throw new globalThis.Error("workflow close event has no event type")
			}
			return $.pointerValue(eventType)
		}
	}

	throw new globalThis.Error("workflow history ended without a close event")
}

/** Starts a HelloWorld workflow execution and waits for its close event. */
export async function startWorkflow(
	options: StartOptions = {},
): globalThis.Promise<CompletedWorkflow> {
	const domain = options.domain ?? DefaultDomain
	const connection = await connectCadence(
		options.frontendAddress ?? DefaultFrontendAddress,
		options.clientName ?? DefaultClientName,
	)
	try {
		const client = await NewClient(connection.service, domain, null)
		if (client == null) {
			throw new globalThis.Error("failed to create Cadence client")
		}

		const [execution, err] = await client.StartWorkflow(
			context.Background(),
			new StartWorkflowOptions({
				ID: options.workflowID ?? `hello-world-${globalThis.crypto.randomUUID()}`,
				TaskList: options.taskList ?? DefaultTaskList,
				ExecutionStartToCloseTimeout: time.Minute,
				DecisionTaskStartToCloseTimeout: 10n * time.Second,
			}, true),
			HelloWorldWorkflowDefinition,
			$.arrayToSlice<any>([options.name ?? "Cadence"]),
		)
		if (err != null) {
			throw new globalThis.Error(
				`failed to start workflow: ${await err.Error()}`,
			)
		}

		const started = $.pointerValue(execution)
		const closeEventType = await waitForWorkflowCompletion(
			client,
			started.ID,
			started.RunID,
		)
		return {
			workflowID: started.ID,
			runID: started.RunID,
			closeEventType,
		}
	} finally {
		await connection.close()
	}
}

const isMain = (() => {
	const metadata = import.meta as ImportMeta & { main?: boolean }
	if (metadata.main != null) {
		return metadata.main
	}
	const entrypoint = (globalThis as { process?: { argv: string[] } }).process?.argv[1]
	return entrypoint != null
		&& import.meta.url === new URL(`file://${entrypoint}`).href
})()

if (isMain) {
	const process = (
		globalThis as typeof globalThis & {
			process?: { argv: string[]; exitCode?: number }
		}
	).process
	try {
		const started = await startWorkflow({ name: process?.argv[2] })
		const closeEvent = await shared.EventType_String(started.closeEventType)
		globalThis.console.log(
			`Workflow closed: WorkflowID=${started.workflowID} RunID=${started.runID} EventType=${closeEvent}`,
		)
	} catch (err) {
		globalThis.console.error(err)
		if (process != null) {
			process.exitCode = 1
		}
	}
}
