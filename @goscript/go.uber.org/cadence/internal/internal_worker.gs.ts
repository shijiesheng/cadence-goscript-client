// Generated file based on internal_worker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as md5 from "@goscript/crypto/md5/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as isolationgroup from "@goscript/go.uber.org/cadence/internal/common/isolationgroup/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as worker2 from "@goscript/go.uber.org/cadence/internal/worker/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as rate from "@goscript/golang.org/x/time/rate/index.js"

import * as hash from "@goscript/hash/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_activity_task_handler from "./activity_task_handler.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import type * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"

import * as __goscript_version from "./version.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"

import * as __goscript_workflow_shadower_worker from "./workflow_shadower_worker.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/md5/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/common/isolationgroup/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/container/list/index.js"
import "@goscript/go.uber.org/cadence/internal/worker/index.js"
import "@goscript/golang.org/x/time/rate/index.js"
import "@goscript/hash/index.js"
import "./activity.gs.ts"
import "./activity_task_handler.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_retry.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./tracer.gs.ts"
import "./version.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"
import "./workflow_shadower_worker.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.workflowWorker", "internal.activityWorker", "internal.sessionWorker", "internal.workerOverrides", "internal.workerExecutionParameters", "internal.workflowExecutor", "internal.activityExecutor", "internal.aggregatedWorker"])

export class workerExecutionParameters {
	public get WorkerOptions(): __goscript_worker.WorkerOptions {
		return this._fields.WorkerOptions
	}

	public set WorkerOptions(value: __goscript_worker.WorkerOptions) {
		this._fields.WorkerOptions = value
	}

	// Task list name to poll.
	public get TaskList(): shared.TaskList | $.VarRef<shared.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: shared.TaskList | $.VarRef<shared.TaskList> | null) {
		this._fields.TaskList = value
	}

	// Context to store user provided key/value pairs
	public get UserContext(): context.Context | null {
		return this._fields.UserContext
	}

	public set UserContext(value: context.Context | null) {
		this._fields.UserContext = value
	}

	// Context cancel function to cancel user context
	public get UserContextCancel(): (() => void) | null {
		return this._fields.UserContextCancel
	}

	public set UserContextCancel(value: (() => void) | null) {
		this._fields.UserContextCancel = value
	}

	// WorkerStopTimeout is the time delay before hard terminate worker
	public get WorkerStopTimeout(): time.Duration {
		return this._fields.WorkerStopTimeout
	}

	public set WorkerStopTimeout(value: time.Duration) {
		this._fields.WorkerStopTimeout = value
	}

	// WorkerStopChannel is a read only channel listen on worker close. The worker will close the channel before exit.
	public get WorkerStopChannel(): $.Channel<{}> | null {
		return this._fields.WorkerStopChannel
	}

	public set WorkerStopChannel(value: $.Channel<{}> | null) {
		this._fields.WorkerStopChannel = value
	}

	// SessionResourceID is a unique identifier of the resource the session will consume
	public get SessionResourceID(): string {
		return this._fields.SessionResourceID
	}

	public set SessionResourceID(value: string) {
		this._fields.SessionResourceID = value
	}

	public _fields: {
		WorkerOptions: __goscript_worker.WorkerOptions
		TaskList: shared.TaskList | $.VarRef<shared.TaskList> | null
		UserContext: context.Context | null
		UserContextCancel: (() => void) | null
		WorkerStopTimeout: time.Duration
		WorkerStopChannel: $.Channel<{}> | null
		SessionResourceID: string
	}

	constructor(init?: Partial<{WorkerOptions?: __goscript_worker.WorkerOptions, TaskList?: shared.TaskList | $.VarRef<shared.TaskList> | null, UserContext?: context.Context | null, UserContextCancel?: (() => void) | null, WorkerStopTimeout?: time.Duration, WorkerStopChannel?: $.Channel<{}> | null, SessionResourceID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkerOptions: init?.WorkerOptions ? init.WorkerOptions.clone() : new __goscript_worker.WorkerOptions(undefined, true),
			TaskList: init?.TaskList ?? (null! as shared.TaskList | $.VarRef<shared.TaskList> | null),
			UserContext: init?.UserContext ?? (null! as context.Context | null),
			UserContextCancel: init?.UserContextCancel ?? (null! as (() => void) | null),
			WorkerStopTimeout: init?.WorkerStopTimeout ?? (0n as time.Duration),
			WorkerStopChannel: init?.WorkerStopChannel ?? (null! as $.Channel<{}> | null),
			SessionResourceID: init?.SessionResourceID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workerExecutionParameters {
		return new workerExecutionParameters(this, true)
	}

	public __goscriptAssign(source: workerExecutionParameters): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.WorkerOptions, values.WorkerOptions)
		target.TaskList = values.TaskList
		target.UserContext = $.assignFieldValue(target.UserContext, values.UserContext, "context.Context")
		target.UserContextCancel = values.UserContextCancel
		target.WorkerStopTimeout = values.WorkerStopTimeout
		target.WorkerStopChannel = values.WorkerStopChannel
		target.SessionResourceID = values.SessionResourceID
	}

	public Validate(): any {
		return $.pointerValue<__goscript_worker.WorkerOptions>(this.WorkerOptions).Validate()
	}

	static __typeInfo = $.registerStructType(
		"internal.workerExecutionParameters",
		() => new workerExecutionParameters(),
		() => [$.methodSignature("Validate", [], ["error"])],
		workerExecutionParameters,
		() => [/* @__PURE__ */ $.structField("WorkerOptions", "internal.WorkerOptions", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("shared.TaskList"), [1], 688, true), /* @__PURE__ */ $.structField("UserContext", "context.Context", [2], 696, true), /* @__PURE__ */ $.structField("UserContextCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 712, true), /* @__PURE__ */ $.structField("WorkerStopTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 720, true), /* @__PURE__ */ $.structField("WorkerStopChannel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [5], 728, true), /* @__PURE__ */ $.structField("SessionResourceID", /* @__PURE__ */ $.basicType("string"), [6], 736, true)]
	)
}

export class workflowWorker {
	public get executionParameters(): workerExecutionParameters {
		return this._fields.executionParameters
	}

	public set executionParameters(value: workerExecutionParameters) {
		this._fields.executionParameters = value
	}

	public get workflowService(): workflowserviceclient.Interface | null {
		return this._fields.workflowService
	}

	public set workflowService(value: workflowserviceclient.Interface | null) {
		this._fields.workflowService = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get poller(): __goscript_internal_task_pollers.taskPoller | null {
		return this._fields.poller
	}

	public set poller(value: __goscript_internal_task_pollers.taskPoller | null) {
		this._fields.poller = value
	}

	public get worker(): __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null {
		return this._fields.worker
	}

	public set worker(value: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null) {
		this._fields.worker = value
	}

	public get localActivityWorker(): __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null {
		return this._fields.localActivityWorker
	}

	public set localActivityWorker(value: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null) {
		this._fields.localActivityWorker = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get stopC(): $.Channel<{}> | null {
		return this._fields.stopC
	}

	public set stopC(value: $.Channel<{}> | null) {
		this._fields.stopC = value
	}

	public _fields: {
		executionParameters: workerExecutionParameters
		workflowService: workflowserviceclient.Interface | null
		domain: string
		poller: __goscript_internal_task_pollers.taskPoller | null
		worker: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null
		localActivityWorker: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null
		identity: string
		stopC: $.Channel<{}> | null
	}

	constructor(init?: Partial<{executionParameters?: workerExecutionParameters, workflowService?: workflowserviceclient.Interface | null, domain?: string, poller?: __goscript_internal_task_pollers.taskPoller | null, worker?: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null, localActivityWorker?: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null, identity?: string, stopC?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			executionParameters: init?.executionParameters ? init.executionParameters.clone() : new workerExecutionParameters(undefined, true),
			workflowService: init?.workflowService ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			poller: init?.poller ?? (null! as __goscript_internal_task_pollers.taskPoller | null),
			worker: init?.worker ?? (null! as __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null),
			localActivityWorker: init?.localActivityWorker ?? (null! as __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null),
			identity: init?.identity ?? ("" as string),
			stopC: init?.stopC ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowWorker {
		return new workflowWorker(this, true)
	}

	public __goscriptAssign(source: workflowWorker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.executionParameters, values.executionParameters)
		target.workflowService = $.assignFieldValue(target.workflowService, values.workflowService, "workflowserviceclient.Interface")
		target.domain = values.domain
		target.poller = $.assignFieldValue(target.poller, values.poller, "internal.taskPoller")
		target.worker = values.worker
		target.localActivityWorker = values.localActivityWorker
		target.identity = values.identity
		target.stopC = values.stopC
	}

	public async Run(): globalThis.Promise<$.GoError> {
		const ww: workflowWorker | $.VarRef<workflowWorker> | null = this;
		const ww$: workflowWorker = ww == null ? $.pointerTarget<workflowWorker>(ww) : (ww as any).__isVarRef === true ? (ww as any).value : (ww as any).__goValue === undefined ? (ww as any) : $.pointerTarget<workflowWorker>(ww)
		let err = await verifyDomainExist((ww$ as workflowWorker).workflowService, (ww$ as workflowWorker).domain, $.pointerValue<__goscript_internal_worker_base.baseWorker>((ww$ as workflowWorker).worker).logger, ((ww$ as workflowWorker).executionParameters.WorkerOptions.FeatureFlags).clone())
		if (err != null) {
			return err
		}
		await __goscript_internal_worker_base.baseWorker.prototype.Start.call((ww$ as workflowWorker).localActivityWorker)
		await __goscript_internal_worker_base.baseWorker.prototype.Run.call((ww$ as workflowWorker).worker)
		return null
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const ww: workflowWorker | $.VarRef<workflowWorker> | null = this;
		const ww$: workflowWorker = ww == null ? $.pointerTarget<workflowWorker>(ww) : (ww as any).__isVarRef === true ? (ww as any).value : (ww as any).__goValue === undefined ? (ww as any) : $.pointerTarget<workflowWorker>(ww)
		let err = await verifyDomainExist((ww$ as workflowWorker).workflowService, (ww$ as workflowWorker).domain, $.pointerValue<__goscript_internal_worker_base.baseWorker>((ww$ as workflowWorker).worker).logger, ((ww$ as workflowWorker).executionParameters.WorkerOptions.FeatureFlags).clone())
		if (err != null) {
			return err
		}
		await __goscript_internal_worker_base.baseWorker.prototype.Start.call((ww$ as workflowWorker).localActivityWorker)
		await __goscript_internal_worker_base.baseWorker.prototype.Start.call((ww$ as workflowWorker).worker)
		return null
	}

	public async Stop(): globalThis.Promise<void> {
		const ww: workflowWorker | $.VarRef<workflowWorker> | null = this;
		const ww$: workflowWorker = ww == null ? $.pointerTarget<workflowWorker>(ww) : (ww as any).__isVarRef === true ? (ww as any).value : (ww as any).__goValue === undefined ? (ww as any) : $.pointerTarget<workflowWorker>(ww)
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (ww$ as workflowWorker).stopC,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					void (ww$ as workflowWorker).stopC!.close()
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		// TODO: remove the stop methods in favor of the workerStopChannel
		await __goscript_internal_worker_base.baseWorker.prototype.Stop.call((ww$ as workflowWorker).localActivityWorker)
		await __goscript_internal_worker_base.baseWorker.prototype.Stop.call((ww$ as workflowWorker).worker)
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowWorker",
		() => new workflowWorker(),
		() => [$.methodSignature("Run", [], ["error"], true), $.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], [], true)],
		workflowWorker,
		() => [/* @__PURE__ */ $.structField("executionParameters", "internal.workerExecutionParameters", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowService", "workflowserviceclient.Interface", [1], 752, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [2], 768, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("poller", "internal.taskPoller", [3], 784, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("worker", /* @__PURE__ */ $.pointerType("internal.baseWorker"), [4], 800, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("localActivityWorker", /* @__PURE__ */ $.pointerType("internal.baseWorker"), [5], 808, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [6], 816, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stopC", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [7], 832, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityWorker {
	public get executionParameters(): workerExecutionParameters {
		return this._fields.executionParameters
	}

	public set executionParameters(value: workerExecutionParameters) {
		this._fields.executionParameters = value
	}

	public get workflowService(): workflowserviceclient.Interface | null {
		return this._fields.workflowService
	}

	public set workflowService(value: workflowserviceclient.Interface | null) {
		this._fields.workflowService = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get poller(): __goscript_internal_task_pollers.taskPoller | null {
		return this._fields.poller
	}

	public set poller(value: __goscript_internal_task_pollers.taskPoller | null) {
		this._fields.poller = value
	}

	public get worker(): __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null {
		return this._fields.worker
	}

	public set worker(value: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null) {
		this._fields.worker = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get stopC(): $.Channel<{}> | null {
		return this._fields.stopC
	}

	public set stopC(value: $.Channel<{}> | null) {
		this._fields.stopC = value
	}

	public _fields: {
		executionParameters: workerExecutionParameters
		workflowService: workflowserviceclient.Interface | null
		domain: string
		poller: __goscript_internal_task_pollers.taskPoller | null
		worker: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null
		identity: string
		stopC: $.Channel<{}> | null
	}

	constructor(init?: Partial<{executionParameters?: workerExecutionParameters, workflowService?: workflowserviceclient.Interface | null, domain?: string, poller?: __goscript_internal_task_pollers.taskPoller | null, worker?: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null, identity?: string, stopC?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			executionParameters: init?.executionParameters ? init.executionParameters.clone() : new workerExecutionParameters(undefined, true),
			workflowService: init?.workflowService ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			poller: init?.poller ?? (null! as __goscript_internal_task_pollers.taskPoller | null),
			worker: init?.worker ?? (null! as __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null),
			identity: init?.identity ?? ("" as string),
			stopC: init?.stopC ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityWorker {
		return new activityWorker(this, true)
	}

	public __goscriptAssign(source: activityWorker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.executionParameters, values.executionParameters)
		target.workflowService = $.assignFieldValue(target.workflowService, values.workflowService, "workflowserviceclient.Interface")
		target.domain = values.domain
		target.poller = $.assignFieldValue(target.poller, values.poller, "internal.taskPoller")
		target.worker = values.worker
		target.identity = values.identity
		target.stopC = values.stopC
	}

	public async Run(): globalThis.Promise<$.GoError> {
		const aw: activityWorker | $.VarRef<activityWorker> | null = this;
		const aw$: activityWorker = aw == null ? $.pointerTarget<activityWorker>(aw) : (aw as any).__isVarRef === true ? (aw as any).value : (aw as any).__goValue === undefined ? (aw as any) : $.pointerTarget<activityWorker>(aw)
		let err = await verifyDomainExist((aw$ as activityWorker).workflowService, (aw$ as activityWorker).domain, $.pointerValue<__goscript_internal_worker_base.baseWorker>((aw$ as activityWorker).worker).logger, ((aw$ as activityWorker).executionParameters.WorkerOptions.FeatureFlags).clone())
		if (err != null) {
			return err
		}
		await __goscript_internal_worker_base.baseWorker.prototype.Run.call((aw$ as activityWorker).worker)
		return null
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const aw: activityWorker | $.VarRef<activityWorker> | null = this;
		const aw$: activityWorker = aw == null ? $.pointerTarget<activityWorker>(aw) : (aw as any).__isVarRef === true ? (aw as any).value : (aw as any).__goValue === undefined ? (aw as any) : $.pointerTarget<activityWorker>(aw)
		let err = await verifyDomainExist((aw$ as activityWorker).workflowService, (aw$ as activityWorker).domain, $.pointerValue<__goscript_internal_worker_base.baseWorker>((aw$ as activityWorker).worker).logger, ((aw$ as activityWorker).executionParameters.WorkerOptions.FeatureFlags).clone())
		if (err != null) {
			return err
		}
		await __goscript_internal_worker_base.baseWorker.prototype.Start.call((aw$ as activityWorker).worker)
		return null
	}

	public async Stop(): globalThis.Promise<void> {
		const aw: activityWorker | $.VarRef<activityWorker> | null = this;
		const aw$: activityWorker = aw == null ? $.pointerTarget<activityWorker>(aw) : (aw as any).__isVarRef === true ? (aw as any).value : (aw as any).__goValue === undefined ? (aw as any) : $.pointerTarget<activityWorker>(aw)
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (aw$ as activityWorker).stopC,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect1Result) => {
					void (aw$ as activityWorker).stopC!.close()
				}
			}
		], true)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		await __goscript_internal_worker_base.baseWorker.prototype.Stop.call((aw$ as activityWorker).worker)
	}

	static __typeInfo = $.registerStructType(
		"internal.activityWorker",
		() => new activityWorker(),
		() => [$.methodSignature("Run", [], ["error"], true), $.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], [], true)],
		activityWorker,
		() => [/* @__PURE__ */ $.structField("executionParameters", "internal.workerExecutionParameters", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowService", "workflowserviceclient.Interface", [1], 752, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [2], 768, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("poller", "internal.taskPoller", [3], 784, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("worker", /* @__PURE__ */ $.pointerType("internal.baseWorker"), [4], 800, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [5], 808, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stopC", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 824, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class sessionWorker {
	public get creationWorker(): activityWorker | $.VarRef<activityWorker> | null {
		return this._fields.creationWorker
	}

	public set creationWorker(value: activityWorker | $.VarRef<activityWorker> | null) {
		this._fields.creationWorker = value
	}

	public get activityWorker(): activityWorker | $.VarRef<activityWorker> | null {
		return this._fields.activityWorker
	}

	public set activityWorker(value: activityWorker | $.VarRef<activityWorker> | null) {
		this._fields.activityWorker = value
	}

	public _fields: {
		creationWorker: activityWorker | $.VarRef<activityWorker> | null
		activityWorker: activityWorker | $.VarRef<activityWorker> | null
	}

	constructor(init?: Partial<{creationWorker?: activityWorker | $.VarRef<activityWorker> | null, activityWorker?: activityWorker | $.VarRef<activityWorker> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			creationWorker: init?.creationWorker ?? (null! as activityWorker | $.VarRef<activityWorker> | null),
			activityWorker: init?.activityWorker ?? (null! as activityWorker | $.VarRef<activityWorker> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sessionWorker {
		return new sessionWorker(this, true)
	}

	public __goscriptAssign(source: sessionWorker): void {
		const target = this._fields
		const values = source._fields
		target.creationWorker = values.creationWorker
		target.activityWorker = values.activityWorker
	}

	public async Run(): globalThis.Promise<$.GoError> {
		const sw: sessionWorker | $.VarRef<sessionWorker> | null = this;
		const sw$: sessionWorker = sw == null ? $.pointerTarget<sessionWorker>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<sessionWorker>(sw)
		let err = await activityWorker.prototype.Start.call((sw$ as sessionWorker).creationWorker)
		if (err != null) {
			return err
		}
		return activityWorker.prototype.Run.call((sw$ as sessionWorker).activityWorker)
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const sw: sessionWorker | $.VarRef<sessionWorker> | null = this;
		const sw$: sessionWorker = sw == null ? $.pointerTarget<sessionWorker>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<sessionWorker>(sw)
		let err = await activityWorker.prototype.Start.call((sw$ as sessionWorker).creationWorker)
		if (err != null) {
			return err
		}

		err = await activityWorker.prototype.Start.call((sw$ as sessionWorker).activityWorker)
		if (err != null) {
			await activityWorker.prototype.Stop.call((sw$ as sessionWorker).creationWorker)
			return err
		}
		return null
	}

	public async Stop(): globalThis.Promise<void> {
		const sw: sessionWorker | $.VarRef<sessionWorker> | null = this;
		const sw$: sessionWorker = sw == null ? $.pointerTarget<sessionWorker>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<sessionWorker>(sw)
		await activityWorker.prototype.Stop.call((sw$ as sessionWorker).creationWorker)
		await activityWorker.prototype.Stop.call((sw$ as sessionWorker).activityWorker)
	}

	static __typeInfo = $.registerStructType(
		"internal.sessionWorker",
		() => new sessionWorker(),
		() => [$.methodSignature("Run", [], ["error"], true), $.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], [], true)],
		sessionWorker,
		() => [/* @__PURE__ */ $.structField("creationWorker", /* @__PURE__ */ $.pointerType("internal.activityWorker"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityWorker", /* @__PURE__ */ $.pointerType("internal.activityWorker"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workerOverrides {
	public get workflowTaskHandler(): __goscript_internal_public.WorkflowTaskHandler | null {
		return this._fields.workflowTaskHandler
	}

	public set workflowTaskHandler(value: __goscript_internal_public.WorkflowTaskHandler | null) {
		this._fields.workflowTaskHandler = value
	}

	public get activityTaskHandler(): __goscript_internal_public.ActivityTaskHandler | null {
		return this._fields.activityTaskHandler
	}

	public set activityTaskHandler(value: __goscript_internal_public.ActivityTaskHandler | null) {
		this._fields.activityTaskHandler = value
	}

	public get useLocallyDispatchedActivityPoller(): boolean {
		return this._fields.useLocallyDispatchedActivityPoller
	}

	public set useLocallyDispatchedActivityPoller(value: boolean) {
		this._fields.useLocallyDispatchedActivityPoller = value
	}

	public _fields: {
		workflowTaskHandler: __goscript_internal_public.WorkflowTaskHandler | null
		activityTaskHandler: __goscript_internal_public.ActivityTaskHandler | null
		useLocallyDispatchedActivityPoller: boolean
	}

	constructor(init?: Partial<{workflowTaskHandler?: __goscript_internal_public.WorkflowTaskHandler | null, activityTaskHandler?: __goscript_internal_public.ActivityTaskHandler | null, useLocallyDispatchedActivityPoller?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowTaskHandler: init?.workflowTaskHandler ?? (null! as __goscript_internal_public.WorkflowTaskHandler | null),
			activityTaskHandler: init?.activityTaskHandler ?? (null! as __goscript_internal_public.ActivityTaskHandler | null),
			useLocallyDispatchedActivityPoller: init?.useLocallyDispatchedActivityPoller ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workerOverrides {
		return new workerOverrides(this, true)
	}

	public __goscriptAssign(source: workerOverrides): void {
		const target = this._fields
		const values = source._fields
		target.workflowTaskHandler = $.assignFieldValue(target.workflowTaskHandler, values.workflowTaskHandler, "internal.WorkflowTaskHandler")
		target.activityTaskHandler = $.assignFieldValue(target.activityTaskHandler, values.activityTaskHandler, "internal.ActivityTaskHandler")
		target.useLocallyDispatchedActivityPoller = values.useLocallyDispatchedActivityPoller
	}

	static __typeInfo = $.registerStructType(
		"internal.workerOverrides",
		() => new workerOverrides(),
		() => [],
		workerOverrides,
		() => [/* @__PURE__ */ $.structField("workflowTaskHandler", "internal.WorkflowTaskHandler", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityTaskHandler", "internal.ActivityTaskHandler", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("useLocallyDispatchedActivityPoller", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowExecutor {
	public get workflowType(): string {
		return this._fields.workflowType
	}

	public set workflowType(value: string) {
		this._fields.workflowType = value
	}

	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public get path(): string {
		return this._fields.path
	}

	public set path(value: string) {
		this._fields.path = value
	}

	public _fields: {
		workflowType: string
		fn: any
		path: string
	}

	constructor(init?: Partial<{workflowType?: string, fn?: any, path?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowType: init?.workflowType ?? ("" as string),
			fn: init?.fn ?? (null! as any),
			path: init?.path ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowExecutor {
		return new workflowExecutor(this, true)
	}

	public __goscriptAssign(source: workflowExecutor): void {
		const target = this._fields
		const values = source._fields
		target.workflowType = values.workflowType
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
		target.path = values.path
	}

	public async Execute(ctx: __goscript_context.Context | null, input: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const we: workflowExecutor | $.VarRef<workflowExecutor> | null = this;
		const we$: workflowExecutor = we == null ? $.pointerTarget<workflowExecutor>(we) : (we as any).__isVarRef === true ? (we as any).value : (we as any).__goValue === undefined ? (we as any) : $.pointerTarget<workflowExecutor>(we)
		let args: $.Slice<any> = null! as $.Slice<any>
		let dataConverter = $.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx)).dataConverter
		let fnType = reflect.TypeOf((we$ as workflowExecutor).fn)
		if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) && util.IsTypeByteSlice((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			// Do not deserialize input if workflow has a single byte slice argument (besides ctx)
			args = $.appendOne(args, $.interfaceValue(input, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.appendZeros.nil)
		} else {
			let __goscriptTuple5: any = await decodeArgsToValues(dataConverter, fnType, input)
			let decoded: $.Slice<any> = __goscriptTuple5[0]
			let err = __goscriptTuple5[1]
			if (err != null) {
				return [null, fmt.Errorf("unable to decode the workflow function input bytes with error: %v, function name: %v", (err as any), (we$ as workflowExecutor).workflowType)]
			}
			args = $.appendSlice(args, decoded, $.appendZeros.nil)
		}
		let envInterceptor: __goscript_internal_workflow.workflowEnvironmentInterceptor | $.VarRef<__goscript_internal_workflow.workflowEnvironmentInterceptor> | null = await __goscript_internal_workflow.getEnvInterceptor(ctx)
		let envInterceptor$: __goscript_internal_workflow.workflowEnvironmentInterceptor = envInterceptor == null ? $.pointerTarget<__goscript_internal_workflow.workflowEnvironmentInterceptor>(envInterceptor) : (envInterceptor as any).__isVarRef === true ? (envInterceptor as any).value : (envInterceptor as any).__goValue === undefined ? (envInterceptor as any) : $.pointerTarget<__goscript_internal_workflow.workflowEnvironmentInterceptor>(envInterceptor);
		;(envInterceptor$ as __goscript_internal_workflow.workflowEnvironmentInterceptor).fn = (we$ as workflowExecutor).fn
		let results: $.Slice<any> = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>((envInterceptor$ as __goscript_internal_workflow.workflowEnvironmentInterceptor).interceptorChainHead).ExecuteWorkflow(ctx, (we$ as workflowExecutor).workflowType, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<any>)
		return __goscript_internal_activity.serializeResults((we$ as workflowExecutor).fn, results, dataConverter)
	}

	public GetFunction(): any {
		const we: workflowExecutor | $.VarRef<workflowExecutor> | null = this;
		return $.pointerValue<workflowExecutor>(we).fn
	}

	public WorkflowType(): __goscript_workflow.WorkflowType {
		const we: workflowExecutor | $.VarRef<workflowExecutor> | null = this;
		const we$: workflowExecutor = we == null ? $.pointerTarget<workflowExecutor>(we) : (we as any).__isVarRef === true ? (we as any).value : (we as any).__goValue === undefined ? (we as any) : $.pointerTarget<workflowExecutor>(we)
		return new __goscript_workflow.WorkflowType({Name: (we$ as workflowExecutor).workflowType, Path: (we$ as workflowExecutor).path}, true)
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowExecutor",
		() => new workflowExecutor(),
		() => [$.methodSignature("Execute", [["ctx", "internal.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("WorkflowType", [], ["internal.WorkflowType"], true)],
		workflowExecutor,
		() => [/* @__PURE__ */ $.structField("workflowType", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("path", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityExecutor {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public get options(): __goscript_activity.RegisterActivityOptions {
		return this._fields.options
	}

	public set options(value: __goscript_activity.RegisterActivityOptions) {
		this._fields.options = value
	}

	public get path(): string {
		return this._fields.path
	}

	public set path(value: string) {
		this._fields.path = value
	}

	public _fields: {
		name: string
		fn: any
		options: __goscript_activity.RegisterActivityOptions
		path: string
	}

	constructor(init?: Partial<{name?: string, fn?: any, options?: __goscript_activity.RegisterActivityOptions, path?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			fn: init?.fn ?? (null! as any),
			options: init?.options ? init.options.clone() : new __goscript_activity.RegisterActivityOptions(undefined, true),
			path: init?.path ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityExecutor {
		return new activityExecutor(this, true)
	}

	public __goscriptAssign(source: activityExecutor): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
		$.assignStruct(target.options, values.options)
		target.path = values.path
	}

	public ActivityType(): __goscript_activity.ActivityType {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		const ae$: activityExecutor = ae == null ? $.pointerTarget<activityExecutor>(ae) : (ae as any).__isVarRef === true ? (ae as any).value : (ae as any).__goValue === undefined ? (ae as any) : $.pointerTarget<activityExecutor>(ae)
		return new __goscript_activity.ActivityType({Name: (ae$ as activityExecutor).name, Path: (ae$ as activityExecutor).path}, true)
	}

	public async Execute(ctx: context.Context | null, input: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		const ae$: activityExecutor = ae == null ? $.pointerTarget<activityExecutor>(ae) : (ae as any).__isVarRef === true ? (ae as any).value : (ae as any).__goValue === undefined ? (ae as any) : $.pointerTarget<activityExecutor>(ae)
		let fnType = reflect.TypeOf((ae$ as activityExecutor).fn)
		let args: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
		let dataConverter = await getDataConverterFromActivityCtx(ctx)

		// activities optionally might not take context.
		if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) && await __goscript_internal_activity.isActivityContext((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ctx as any)))))
		}

		if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) && util.IsTypeByteSlice((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(input, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
		} else {
			let __goscriptTuple6: any = await decodeArgs(dataConverter, fnType, input)
			let decoded: $.Slice<reflect.Value> = __goscriptTuple6[0]
			let err = __goscriptTuple6[1]
			if (err != null) {
				return [null, fmt.Errorf("unable to decode the activity function input bytes with error: %v for function name: %v", (err as any), (ae$ as activityExecutor).name)]
			}
			args = $.appendSlice(args, decoded)
		}

		let fnValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ae$ as activityExecutor).fn)))
		let retValues: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(fnValue)).Call(args)
		return __goscript_internal_activity.validateFunctionAndGetResults((ae$ as activityExecutor).fn, retValues, dataConverter)
	}

	public async ExecuteWithActualArgs(ctx: context.Context | null, actualArgs: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		let retValues: $.Slice<reflect.Value> = await (ae !== null && (ae as any).__isVarRef !== true && (ae as any).__goValue === undefined ? ((ae as any) as activityExecutor).executeWithActualArgsWithoutParseResult(ctx, actualArgs) : activityExecutor.prototype.executeWithActualArgsWithoutParseResult.call(ae, ctx, actualArgs))
		let dataConverter = await getDataConverterFromActivityCtx(ctx)

		return __goscript_internal_activity.validateFunctionAndGetResults($.pointerValue<activityExecutor>(ae).fn, retValues, dataConverter)
	}

	public GetFunction(): any {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		return $.pointerValue<activityExecutor>(ae).fn
	}

	public GetOptions(): __goscript_activity.RegisterActivityOptions {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		return ($.pointerValue<activityExecutor>(ae).options).clone()
	}

	public async executeWithActualArgsWithoutParseResult(ctx: context.Context | null, actualArgs: $.Slice<any>): globalThis.Promise<$.Slice<reflect.Value>> {
		const ae: activityExecutor | $.VarRef<activityExecutor> | null = this;
		const ae$: activityExecutor = ae == null ? $.pointerTarget<activityExecutor>(ae) : (ae as any).__isVarRef === true ? (ae as any).value : (ae as any).__goValue === undefined ? (ae as any) : $.pointerTarget<activityExecutor>(ae)
		let fnType = reflect.TypeOf((ae$ as activityExecutor).fn)
		let args: $.Slice<reflect.Value> = $.arrayToSlice<reflect.Value>([])

		// activities optionally might not take context.
		let argsOffeset = 0
		if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) && await __goscript_internal_activity.isActivityContext((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ctx as any)))))
			argsOffeset = 1
		}

		for (let __goscriptRangeTarget0 = actualArgs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any)
			if (arg == null) {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(i + argsOffeset), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem())))
			} else {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg))))
			}
		}

		let fnValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ae$ as activityExecutor).fn)))
		let retValues: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(fnValue)).Call(args)
		return retValues
	}

	static __typeInfo = $.registerStructType(
		"internal.activityExecutor",
		() => new activityExecutor(),
		() => [$.methodSignature("ActivityType", [], ["internal.ActivityType"], true), $.methodSignature("Execute", [["ctx", "context.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ExecuteWithActualArgs", [["ctx", "context.Context"], ["actualArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("GetOptions", [], ["internal.RegisterActivityOptions"], true), $.methodSignature("executeWithActualArgsWithoutParseResult", [["ctx", "context.Context"], ["actualArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType("reflect.Value")], true)],
		activityExecutor,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("options", "internal.RegisterActivityOptions", [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("path", /* @__PURE__ */ $.basicType("string"), [3], 56, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class aggregatedWorker {
	public get workflowWorker(): workflowWorker | $.VarRef<workflowWorker> | null {
		return this._fields.workflowWorker
	}

	public set workflowWorker(value: workflowWorker | $.VarRef<workflowWorker> | null) {
		this._fields.workflowWorker = value
	}

	public get activityWorker(): activityWorker | $.VarRef<activityWorker> | null {
		return this._fields.activityWorker
	}

	public set activityWorker(value: activityWorker | $.VarRef<activityWorker> | null) {
		this._fields.activityWorker = value
	}

	public get locallyDispatchedActivityWorker(): activityWorker | $.VarRef<activityWorker> | null {
		return this._fields.locallyDispatchedActivityWorker
	}

	public set locallyDispatchedActivityWorker(value: activityWorker | $.VarRef<activityWorker> | null) {
		this._fields.locallyDispatchedActivityWorker = value
	}

	public get sessionWorker(): sessionWorker | $.VarRef<sessionWorker> | null {
		return this._fields.sessionWorker
	}

	public set sessionWorker(value: sessionWorker | $.VarRef<sessionWorker> | null) {
		this._fields.sessionWorker = value
	}

	public get shadowWorker(): __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null {
		return this._fields.shadowWorker
	}

	public set shadowWorker(value: __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null) {
		this._fields.shadowWorker = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get workerstats(): debug.WorkerStats {
		return this._fields.workerstats
	}

	public set workerstats(value: debug.WorkerStats) {
		this._fields.workerstats = value
	}

	public _fields: {
		workflowWorker: workflowWorker | $.VarRef<workflowWorker> | null
		activityWorker: activityWorker | $.VarRef<activityWorker> | null
		locallyDispatchedActivityWorker: activityWorker | $.VarRef<activityWorker> | null
		sessionWorker: sessionWorker | $.VarRef<sessionWorker> | null
		shadowWorker: __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		workerstats: debug.WorkerStats
	}

	constructor(init?: Partial<{workflowWorker?: workflowWorker | $.VarRef<workflowWorker> | null, activityWorker?: activityWorker | $.VarRef<activityWorker> | null, locallyDispatchedActivityWorker?: activityWorker | $.VarRef<activityWorker> | null, sessionWorker?: sessionWorker | $.VarRef<sessionWorker> | null, shadowWorker?: __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, workerstats?: debug.WorkerStats}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowWorker: init?.workflowWorker ?? (null! as workflowWorker | $.VarRef<workflowWorker> | null),
			activityWorker: init?.activityWorker ?? (null! as activityWorker | $.VarRef<activityWorker> | null),
			locallyDispatchedActivityWorker: init?.locallyDispatchedActivityWorker ?? (null! as activityWorker | $.VarRef<activityWorker> | null),
			sessionWorker: init?.sessionWorker ?? (null! as sessionWorker | $.VarRef<sessionWorker> | null),
			shadowWorker: init?.shadowWorker ?? (null! as __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			workerstats: init?.workerstats ? init.workerstats.clone() : new debug.WorkerStats(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): aggregatedWorker {
		return new aggregatedWorker(this, true)
	}

	public __goscriptAssign(source: aggregatedWorker): void {
		const target = this._fields
		const values = source._fields
		target.workflowWorker = values.workflowWorker
		target.activityWorker = values.activityWorker
		target.locallyDispatchedActivityWorker = values.locallyDispatchedActivityWorker
		target.sessionWorker = values.sessionWorker
		target.shadowWorker = values.shadowWorker
		target.logger = values.logger
		target.registry = values.registry
		$.assignStruct(target.workerstats, values.workerstats)
	}

	public async GetRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		let activities: $.Slice<__goscript_internal_activity.activity | null> = await __goscript_registry.registry.prototype.getRegisteredActivities.call($.pointerValue<aggregatedWorker>(aw).registry)
		let result: $.Slice<__goscript_activity.RegistryActivityInfo | null> = null! as $.Slice<__goscript_activity.RegistryActivityInfo | null>
		for (let __goscriptRangeTarget1 = activities, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_internal_activity.activity | null)
			result = $.appendOne(result, (a as __goscript_activity.RegistryActivityInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		let workflows: $.Slice<__goscript_internal_workflow.workflow | null> = await __goscript_registry.registry.prototype.GetRegisteredWorkflows.call($.pointerValue<aggregatedWorker>(aw).registry)
		let result: $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> = null! as $.Slice<__goscript_workflow.RegistryWorkflowInfo | null>
		for (let __goscriptRangeTarget2 = workflows, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let wf = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_internal_workflow.workflow | null)
			result = $.appendOne(result, (wf as __goscript_workflow.RegistryWorkflowInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public GetWorkerStats(): debug.WorkerStats {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		return ($.pointerValue<aggregatedWorker>(aw).workerstats).clone()
	}

	public async RegisterActivity(a: any): globalThis.Promise<void> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivity.call($.pointerValue<aggregatedWorker>(aw).registry, a)
	}

	public async RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call($.pointerValue<aggregatedWorker>(aw).registry, a, options)
	}

	public async RegisterWorkflow(w: any): globalThis.Promise<void> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflow.call($.pointerValue<aggregatedWorker>(aw).registry, w)
	}

	public async RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflowWithOptions.call($.pointerValue<aggregatedWorker>(aw).registry, w, options)
	}

	public async Run(): globalThis.Promise<$.GoError> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		{
			let err = await (aw !== null && (aw as any).__isVarRef !== true && (aw as any).__goValue === undefined ? ((aw as any) as aggregatedWorker).Start() : aggregatedWorker.prototype.Start.call(aw))
			if (err != null) {
				return err
			}
		}
		let d = await $.chanRecv(await __goscript_internal_utils.getKillSignal())
		await zap.Logger.prototype.Info.call($.pointerValue<aggregatedWorker>(aw).logger, "Worker has been killed", $.arrayToSlice<zap.Field>([zap.String("Signal", (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<os.Signal, null>) : $.pointerValue<Exclude<os.Signal, null>>(d)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
		await (aw !== null && (aw as any).__isVarRef !== true && (aw as any).__goValue === undefined ? ((aw as any) as aggregatedWorker).Stop() : aggregatedWorker.prototype.Stop.call(aw))
		return null
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		const aw$: aggregatedWorker = aw == null ? $.pointerTarget<aggregatedWorker>(aw) : (aw as any).__isVarRef === true ? (aw as any).value : (aw as any).__goValue === undefined ? (aw as any) : $.pointerTarget<aggregatedWorker>(aw)
		{
			let [, err] = await initBinaryChecksum()
			if (err != null) {
				return fmt.Errorf("failed to get executable checksum: %v", (err as any))
			}
		}

		if ((aw$ as aggregatedWorker).workflowWorker != null) {
			if ($.sliceLen(await __goscript_registry.registry.prototype.GetRegisteredWorkflowTypes.call((aw$ as aggregatedWorker).registry)) == 0) {
				await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Worker has no workflows registered, so workflow worker will not be started.", null)
			} else {
				{
					let err = await workflowWorker.prototype.Start.call((aw$ as aggregatedWorker).workflowWorker)
					if (err != null) {
						return err
					}
				}
			}
			await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Started Workflow Worker", null)
		}
		if ((aw$ as aggregatedWorker).activityWorker != null) {
			if ($.sliceLen(await __goscript_registry.registry.prototype.getRegisteredActivities.call((aw$ as aggregatedWorker).registry)) == 0) {
				await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Worker has no activities registered, so activity worker will not be started.", null)
			} else {
				{
					let err = await activityWorker.prototype.Start.call((aw$ as aggregatedWorker).activityWorker)
					if (err != null) {
						// stop workflow worker.
						if ((aw$ as aggregatedWorker).workflowWorker != null) {
							await workflowWorker.prototype.Stop.call((aw$ as aggregatedWorker).workflowWorker)
						}
						return err
					}
				}
				if ((aw$ as aggregatedWorker).locallyDispatchedActivityWorker != null) {
					{
						let err = await activityWorker.prototype.Start.call((aw$ as aggregatedWorker).locallyDispatchedActivityWorker)
						if (err != null) {
							// stop workflow worker.
							if ((aw$ as aggregatedWorker).workflowWorker != null) {
								await workflowWorker.prototype.Stop.call((aw$ as aggregatedWorker).workflowWorker)
							}
							await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).activityWorker)
							return err
						}
					}
				}
				await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Started Activity Worker", null)
			}
		}

		if ((aw$ as aggregatedWorker).sessionWorker != null) {
			{
				let err = await sessionWorker.prototype.Start.call((aw$ as aggregatedWorker).sessionWorker)
				if (err != null) {
					// stop workflow worker and activity worker.
					if ((aw$ as aggregatedWorker).workflowWorker != null) {
						await workflowWorker.prototype.Stop.call((aw$ as aggregatedWorker).workflowWorker)
					}
					if ((aw$ as aggregatedWorker).activityWorker != null) {
						await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).activityWorker)
					}
					if ((aw$ as aggregatedWorker).locallyDispatchedActivityWorker != null) {
						await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).locallyDispatchedActivityWorker)
					}
					return err
				}
			}
			await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Started Session Worker", null)
		}

		if ((aw$ as aggregatedWorker).shadowWorker != null) {
			{
				let err = await __goscript_workflow_shadower_worker.shadowWorker.prototype.Start.call((aw$ as aggregatedWorker).shadowWorker)
				if (err != null) {
					if ((aw$ as aggregatedWorker).workflowWorker != null) {
						await workflowWorker.prototype.Stop.call((aw$ as aggregatedWorker).workflowWorker)
					}
					if ((aw$ as aggregatedWorker).activityWorker != null) {
						await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).activityWorker)
					}
					if ((aw$ as aggregatedWorker).locallyDispatchedActivityWorker != null) {
						await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).locallyDispatchedActivityWorker)
					}
					if ((aw$ as aggregatedWorker).sessionWorker != null) {
						await sessionWorker.prototype.Stop.call((aw$ as aggregatedWorker).sessionWorker)
					}
					return err
				}
			}
			await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Started Shadow Worker", null)
		}

		return null
	}

	public async Stop(): globalThis.Promise<void> {
		const aw: aggregatedWorker | $.VarRef<aggregatedWorker> | null = this;
		const aw$: aggregatedWorker = aw == null ? $.pointerTarget<aggregatedWorker>(aw) : (aw as any).__isVarRef === true ? (aw as any).value : (aw as any).__goValue === undefined ? (aw as any) : $.pointerTarget<aggregatedWorker>(aw)
		if ((aw$ as aggregatedWorker).workflowWorker != null) {
			await workflowWorker.prototype.Stop.call((aw$ as aggregatedWorker).workflowWorker)
		}
		if ((aw$ as aggregatedWorker).activityWorker != null) {
			await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).activityWorker)
		}
		if ((aw$ as aggregatedWorker).locallyDispatchedActivityWorker != null) {
			await activityWorker.prototype.Stop.call((aw$ as aggregatedWorker).locallyDispatchedActivityWorker)
		}
		if ((aw$ as aggregatedWorker).sessionWorker != null) {
			await sessionWorker.prototype.Stop.call((aw$ as aggregatedWorker).sessionWorker)
		}
		if ((aw$ as aggregatedWorker).shadowWorker != null) {
			await __goscript_workflow_shadower_worker.shadowWorker.prototype.Stop.call((aw$ as aggregatedWorker).shadowWorker)
		}
		await zap.Logger.prototype.Info.call((aw$ as aggregatedWorker).logger, "Stopped Worker", null)
	}

	static __typeInfo = $.registerStructType(
		"internal.aggregatedWorker",
		() => new aggregatedWorker(),
		() => [$.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")], true), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")], true), $.methodSignature("GetWorkerStats", [], ["debug.WorkerStats"], true), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("Run", [], ["error"], true), $.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], [], true)],
		aggregatedWorker,
		() => [/* @__PURE__ */ $.structField("workflowWorker", /* @__PURE__ */ $.pointerType("internal.workflowWorker"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityWorker", /* @__PURE__ */ $.pointerType("internal.activityWorker"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("locallyDispatchedActivityWorker", /* @__PURE__ */ $.pointerType("internal.activityWorker"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionWorker", /* @__PURE__ */ $.pointerType("internal.sessionWorker"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shadowWorker", /* @__PURE__ */ $.pointerType("internal.shadowWorker"), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [6], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerstats", "debug.WorkerStats", [7], 56, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const defaultConcurrentPollRoutineSize: number = 2

export const defaultMaxConcurrentActivityExecutionSize: number = 1000

export const defaultWorkerActivitiesPerSecond: number = 100000

export const defaultMaxConcurrentLocalActivityExecutionSize: number = 1000

export const defaultWorkerLocalActivitiesPerSecond: number = 100000

export const defaultTaskListActivitiesPerSecond: number = 100000

export const defaultMaxConcurrentTaskExecutionSize: number = 1000

export const defaultWorkerTaskExecutionRate: number = 100000

export const defaultPollerRate: number = 1000

export const defaultMaxConcurrentSessionExecutionSize: number = 1000

export const testTagsContextKey: string = "cadence-testTags"

export const clientVersionTag: string = "cadence_client_version"

export const clientGauge: string = "client_version_metric"

export let startVersionMetric: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_startVersionMetric(__goscriptValue: sync.Once): void {
	$.assignStruct(startVersionMetric.value, __goscriptValue)
}

export let StopMetrics: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")

export function __goscript_set_StopMetrics(__goscriptValue: $.Channel<{}> | null): void {
	StopMetrics = __goscriptValue
}

export async function newWorkflowWorker(service: workflowserviceclient.Interface | null, domain: string, params: workerExecutionParameters, ppMgr: __goscript_internal_pressure_points.pressurePointMgr | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, ldaTunnel: __goscript_internal_task_pollers.locallyDispatchedActivityTunnel | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel> | null): globalThis.Promise<workflowWorker | $.VarRef<workflowWorker> | null> {
	return newWorkflowWorkerInternal(service, domain, (params).clone(), ppMgr, null, registry, ldaTunnel)
}

export async function ensureRequiredParams(params: workerExecutionParameters | $.VarRef<workerExecutionParameters> | null): globalThis.Promise<void> {
	const params$: workerExecutionParameters = params == null ? $.pointerTarget<workerExecutionParameters>(params) : (params as any).__isVarRef === true ? (params as any).value : (params as any).__goValue === undefined ? (params as any) : $.pointerTarget<workerExecutionParameters>(params)
	if ((params$ as workerExecutionParameters).WorkerOptions.Tracer == null) {
		;(params$ as workerExecutionParameters).WorkerOptions.Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}
	// A caller-provided Identity isn't guaranteed to be unique, but a generated one is.
	// If Identity was generated here, reuse it for UniqueIdentity to keep them consistent.
	// If Identity was provided by the caller, generate UniqueIdentity independently instead.
	let identityWasSet = !$.stringEqual((params$ as workerExecutionParameters).WorkerOptions.Identity, "")
	if ($.stringEqual((params$ as workerExecutionParameters).WorkerOptions.Identity, "")) {
		;(params$ as workerExecutionParameters).WorkerOptions.Identity = await __goscript_internal_utils.getWorkerIdentity(shared.TaskList.prototype.GetName.call((params$ as workerExecutionParameters).TaskList))
	}
	if ($.stringEqual((params$ as workerExecutionParameters).WorkerOptions.UniqueIdentity, "")) {
		if (identityWasSet) {
			;(params$ as workerExecutionParameters).WorkerOptions.UniqueIdentity = await __goscript_internal_utils.getWorkerIdentity(shared.TaskList.prototype.GetName.call((params$ as workerExecutionParameters).TaskList))
		} else {
			;(params$ as workerExecutionParameters).WorkerOptions.UniqueIdentity = (params$ as workerExecutionParameters).WorkerOptions.Identity
		}
	}
	if ((params$ as workerExecutionParameters).WorkerOptions.Logger == null) {
		// create default logger if user does not supply one.
		let config = zap.NewProductionConfig()
		// set default time formatter to "2006-01-02T15:04:05.000Z0700"
		config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder
		// config.Level.SetLevel(zapcore.DebugLevel)
		let __goscriptTuple0: any = await config.Build(null)
		let logger: zap.Logger | $.VarRef<zap.Logger> | null = __goscriptTuple0[0];
		;(params$ as workerExecutionParameters).WorkerOptions.Logger = logger
		await zap.Logger.prototype.Info.call((params$ as workerExecutionParameters).WorkerOptions.Logger, "No logger configured for cadence worker. Created default one.", null)
	}
	if ((params$ as workerExecutionParameters).WorkerOptions.MetricsScope == null) {
		;(params$ as workerExecutionParameters).WorkerOptions.MetricsScope = (await tally.__goscript_init_NoopScope(), tally.__goscript_get_NoopScope())
		await zap.Logger.prototype.Info.call((params$ as workerExecutionParameters).WorkerOptions.Logger, "No metrics scope configured for cadence worker. Use NoopScope as default.", null)
	}
	if ((params$ as workerExecutionParameters).WorkerOptions.DataConverter == null) {
		;(params$ as workerExecutionParameters).WorkerOptions.DataConverter = __goscript_encoded.getDefaultDataConverter()
		await zap.Logger.prototype.Info.call((params$ as workerExecutionParameters).WorkerOptions.Logger, "No DataConverter configured for cadence worker. Use default one.", null)
	}
	if ((params$ as workerExecutionParameters).UserContext == null) {
		;(params$ as workerExecutionParameters).UserContext = context.Background()
	}
	if ((params$ as workerExecutionParameters).WorkerOptions.WorkerStats.PollerTracker == null) {
		;(params$ as workerExecutionParameters).WorkerOptions.WorkerStats.PollerTracker = debug.NewNoopPollerTracker()
		await zap.Logger.prototype.Debug.call((params$ as workerExecutionParameters).WorkerOptions.Logger, "No PollerTracker configured for WorkerStats option. Will use the default.", null)
	}
	if ((params$ as workerExecutionParameters).WorkerOptions.WorkerStats.ActivityTracker == null) {
		;(params$ as workerExecutionParameters).WorkerOptions.WorkerStats.ActivityTracker = debug.NewNoopActivityTracker()
		await zap.Logger.prototype.Debug.call((params$ as workerExecutionParameters).WorkerOptions.Logger, "No ActivityTracker configured for WorkerStats option. Will use the default.", null)
	}
}

export async function verifyDomainExist(client: workflowserviceclient.Interface | null, __goscriptParam0: string, logger: zap.Logger | $.VarRef<zap.Logger> | null, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	let domain: $.VarRef<string> = $.varRef(__goscriptParam0)
	let ctx = context.Background()
	let descDomainOp: (() => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (): globalThis.Promise<$.GoError> => {
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple1: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
		let tchCtx = __goscriptTuple1[0]
		let cancel = __goscriptTuple1[1]
		let opt: $.Slice<yarpc.CallOption> = __goscriptTuple1[2]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		let [, err] = await (client !== null && (client as any).__isVarRef !== true && (client as any).__goValue === undefined ? (client as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(client)).DescribeDomain(tchCtx, new shared.DescribeDomainRequest({Name: domain}), opt)
		if (err != null) {
			{
				let [, ok] = $.typeAssertTuple<shared.EntityNotExistsError | $.VarRef<shared.EntityNotExistsError> | null>(err, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))
				if (ok) {
					await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("domain does not exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "domain does not exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])))
					return err
				}
			}
			{
				let [, ok] = $.typeAssertTuple<shared.BadRequestError | $.VarRef<shared.BadRequestError> | null>(err, /* @__PURE__ */ $.pointerType("shared.BadRequestError"))
				if (ok) {
					await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("domain does not exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "domain does not exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])))
					return err
				}
			}
			// on any other error, just return true
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Warn("unable to verify if domain exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])) : zap.Logger.prototype.Warn.call(logger, "unable to verify if domain exist", $.arrayToSlice<zap.Field>([zap.String("domain", domain.value), zap.Error(err)])))
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))

	if ($.stringLen(domain.value) == 0) {
		return errors.New("domain cannot be empty")
	}

	// exponential backoff retry for upto a minute
	return backoff.Retry(ctx, descDomainOp, await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
}

export async function newWorkflowWorkerInternal(service: workflowserviceclient.Interface | null, domain: string, __goscriptParam1: workerExecutionParameters, ppMgr: __goscript_internal_pressure_points.pressurePointMgr | null, overrides: workerOverrides | $.VarRef<workerOverrides> | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, ldaTunnel: __goscript_internal_task_pollers.locallyDispatchedActivityTunnel | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel> | null): globalThis.Promise<workflowWorker | $.VarRef<workflowWorker> | null> {
	let params: $.VarRef<workerExecutionParameters> = $.varRef(__goscriptParam1)
	const overrides$: workerOverrides = overrides == null ? $.pointerTarget<workerOverrides>(overrides) : (overrides as any).__isVarRef === true ? (overrides as any).value : (overrides as any).__goValue === undefined ? (overrides as any) : $.pointerTarget<workerOverrides>(overrides)
	let workerStopChannel: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
	params.value.WorkerStopChannel = getReadOnlyChannel(workerStopChannel)
	// Get a workflow task handler.
	await ensureRequiredParams(params)
	let taskHandler: __goscript_internal_public.WorkflowTaskHandler | null = null! as __goscript_internal_public.WorkflowTaskHandler | null
	if ((overrides != null) && ((overrides$ as workerOverrides).workflowTaskHandler != null)) {
		taskHandler = (overrides$ as workerOverrides).workflowTaskHandler
	} else {
		taskHandler = await __goscript_internal_task_handlers.newWorkflowTaskHandler(domain, (params.value).clone(), ppMgr, registry)
	}
	return newWorkflowTaskWorkerInternal(taskHandler, service, domain, (params.value).clone(), workerStopChannel, ldaTunnel)
}

export async function newWorkflowTaskWorkerInternal(taskHandler: __goscript_internal_public.WorkflowTaskHandler | null, service: workflowserviceclient.Interface | null, domain: string, __goscriptParam2: workerExecutionParameters, stopC: $.Channel<{}> | null, ldaTunnel: __goscript_internal_task_pollers.locallyDispatchedActivityTunnel | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel> | null): globalThis.Promise<workflowWorker | $.VarRef<workflowWorker> | null> {
	let params: $.VarRef<workerExecutionParameters> = $.varRef(__goscriptParam2)
	await ensureRequiredParams(params)
	let poller: __goscript_internal_task_pollers.workflowTaskPoller | $.VarRef<__goscript_internal_task_pollers.workflowTaskPoller> | null = await __goscript_internal_task_pollers.newWorkflowTaskPoller(taskHandler, ldaTunnel, service, domain, (params.value).clone())
	let worker: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null = await __goscript_internal_worker_base.newBaseWorker(new __goscript_internal_worker_base.baseWorkerOptions({pollerAutoScaler: params.value.WorkerOptions.AutoScalerOptions, pollerCountWithoutAutoScaling: params.value.WorkerOptions.MaxConcurrentDecisionTaskPollers, pollerRate: 1000, maxConcurrentTask: params.value.WorkerOptions.MaxConcurrentDecisionTaskExecutionSize, maxTaskPerSecond: params.value.WorkerOptions.WorkerDecisionTasksPerSecond, taskWorker: $.interfaceValue<__goscript_internal_task_pollers.taskPoller | null>(poller, "*internal.workflowTaskPoller", /* @__PURE__ */ $.pointerType("internal.workflowTaskPoller")), identity: params.value.WorkerOptions.Identity, workerType: "DecisionWorker", shutdownTimeout: params.value.WorkerStopTimeout, pollerTracker: params.value.WorkerOptions.WorkerStats.PollerTracker}, true), params.value.WorkerOptions.Logger, params.value.WorkerOptions.MetricsScope, null)

	// laTunnel is the glue that hookup 3 parts
	let laTunnel: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null = __goscript_internal_task_pollers.newLocalActivityTunnel(params.value.WorkerStopChannel)

	// 1) workflow handler will send local activity task to laTunnel
	{
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_internal_task_handlers.workflowTaskHandlerImpl | $.VarRef<__goscript_internal_task_handlers.workflowTaskHandlerImpl> | null>(taskHandler, /* @__PURE__ */ $.pointerType("internal.workflowTaskHandlerImpl"))
		let handlerImpl: __goscript_internal_task_handlers.workflowTaskHandlerImpl | $.VarRef<__goscript_internal_task_handlers.workflowTaskHandlerImpl> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			$.pointerValue<__goscript_internal_task_handlers.workflowTaskHandlerImpl>(handlerImpl).laTunnel = laTunnel
		}
	}

	// 2) local activity task poller will poll from laTunnel, and result will be pushed to laTunnel
	let __goscriptShadow0: __goscript_internal_task_pollers.localActivityTaskPoller | $.VarRef<__goscript_internal_task_pollers.localActivityTaskPoller> | null = await __goscript_internal_task_pollers.newLocalActivityPoller((params.value).clone(), laTunnel)
	let localActivityWorker: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null = await __goscript_internal_worker_base.newBaseWorker(new __goscript_internal_worker_base.baseWorkerOptions({pollerCountWithoutAutoScaling: 1, maxConcurrentTask: params.value.WorkerOptions.MaxConcurrentLocalActivityExecutionSize, maxTaskPerSecond: params.value.WorkerOptions.WorkerLocalActivitiesPerSecond, taskWorker: $.interfaceValue<__goscript_internal_task_pollers.taskPoller | null>(__goscriptShadow0, "*internal.localActivityTaskPoller", /* @__PURE__ */ $.pointerType("internal.localActivityTaskPoller")), identity: params.value.WorkerOptions.Identity, workerType: "LocalActivityWorker", shutdownTimeout: params.value.WorkerStopTimeout, pollerTracker: params.value.WorkerOptions.WorkerStats.PollerTracker}, true), params.value.WorkerOptions.Logger, params.value.WorkerOptions.MetricsScope, null)

	// 3) the result pushed to laTunnel will be send as task to workflow worker to process.
	$.pointerValue<__goscript_internal_worker_base.baseWorker>(worker).taskQueueCh = $.pointerValue<__goscript_internal_task_pollers.localActivityTunnel>(laTunnel).resultCh

	return new workflowWorker({executionParameters: params.value, workflowService: service, poller: $.interfaceValue<__goscript_internal_task_pollers.taskPoller | null>(poller, "*internal.workflowTaskPoller", /* @__PURE__ */ $.pointerType("internal.workflowTaskPoller")), worker: worker, localActivityWorker: localActivityWorker, identity: params.value.WorkerOptions.Identity, domain: domain, stopC: stopC})
}

export async function newSessionWorker(service: workflowserviceclient.Interface | null, domain: string, __goscriptParam3: workerExecutionParameters, overrides: workerOverrides | $.VarRef<workerOverrides> | null, env: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, maxConcurrentSessionExecutionSize: number): globalThis.Promise<sessionWorker | $.VarRef<sessionWorker> | null> {
	let params: $.VarRef<workerExecutionParameters> = $.varRef(__goscriptParam3)
	await ensureRequiredParams(params)
	// For now resourceID is hidden from user so we will always create a unique one for each worker.
	if ($.stringEqual(params.value.SessionResourceID, "")) {
		params.value.SessionResourceID = await uuid.New()
	}
	let __goscriptShadow1 = __goscript_session.newSessionEnvironment(params.value.SessionResourceID, maxConcurrentSessionExecutionSize)

	let creationTasklist = __goscript_session.getCreationTasklist(shared.TaskList.prototype.GetName.call(params.value.TaskList))
	params.value.UserContext = context.WithValue($.pointerValueOrNil(params.value.UserContext)!, $.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), (__goscriptShadow1 as any))
	let resourceSpecificTasklist = (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_session.sessionEnvironment, null>) : $.pointerValue<Exclude<__goscript_session.sessionEnvironment, null>>(__goscriptShadow1)).GetResourceSpecificTasklist(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (params.value.WorkerOptions.FeatureFlags.EphemeralTaskListsEnabled) {
		params.value.TaskList = (() => { const __goscriptLiteralField0 = common.StringPtr(resourceSpecificTasklist); const __goscriptLiteralField1 = shared.TaskListKind_Ptr(shared.TaskListKindEphemeral); return new shared.TaskList({Name: __goscriptLiteralField0, Kind: __goscriptLiteralField1}) })()
	} else {
		params.value.TaskList = (() => { const __goscriptLiteralField2 = common.StringPtr(resourceSpecificTasklist); const __goscriptLiteralField3 = shared.TaskListKind_Ptr(shared.TaskListKindNormal); return new shared.TaskList({Name: __goscriptLiteralField2, Kind: __goscriptLiteralField3}) })()
	}
	let __goscriptShadow2: activityWorker | $.VarRef<activityWorker> | null = await newActivityWorker(service, domain, (params.value).clone(), overrides, env, null)

	params.value.WorkerOptions.MaxConcurrentActivityTaskPollers = 1
	params.value.TaskList = (() => { const __goscriptLiteralField4 = common.StringPtr(creationTasklist); const __goscriptLiteralField5 = shared.TaskListKind_Ptr(shared.TaskListKindNormal); return new shared.TaskList({Name: __goscriptLiteralField4, Kind: __goscriptLiteralField5}) })()
	let creationWorker: activityWorker | $.VarRef<activityWorker> | null = await newActivityWorker(service, domain, (params.value).clone(), overrides, env, ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_session.sessionEnvironment, null>) : $.pointerValue<Exclude<__goscript_session.sessionEnvironment, null>>(__goscriptShadow1)).GetTokenBucket(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null))

	return new sessionWorker({creationWorker: creationWorker, activityWorker: __goscriptShadow2})
}

export async function newActivityWorker(service: workflowserviceclient.Interface | null, domain: string, __goscriptParam4: workerExecutionParameters, overrides: workerOverrides | $.VarRef<workerOverrides> | null, env: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, sessionTokenBucket: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null): globalThis.Promise<activityWorker | $.VarRef<activityWorker> | null> {
	let params: $.VarRef<workerExecutionParameters> = $.varRef(__goscriptParam4)
	const overrides$: workerOverrides = overrides == null ? $.pointerTarget<workerOverrides>(overrides) : (overrides as any).__isVarRef === true ? (overrides as any).value : (overrides as any).__goValue === undefined ? (overrides as any) : $.pointerTarget<workerOverrides>(overrides)
	let workerStopChannel: $.Channel<{}> | null = $.makeChannel<{}>(1, {}, "both")
	params.value.WorkerStopChannel = getReadOnlyChannel(workerStopChannel)
	await ensureRequiredParams(params)
	let workerType = "ActivityWorker"
	// Get a activity task handler.
	let taskHandler: __goscript_internal_public.ActivityTaskHandler | null = null! as __goscript_internal_public.ActivityTaskHandler | null
	if ((overrides != null) && ((overrides$ as workerOverrides).activityTaskHandler != null)) {
		taskHandler = (overrides$ as workerOverrides).activityTaskHandler
	} else {
		taskHandler = await __goscript_activity_task_handler.newActivityTaskHandler(service, (params.value).clone(), env)
	}
	// Get an activity task poller.
	let __goscriptShadow3: __goscript_internal_task_pollers.taskPoller | null = null! as __goscript_internal_task_pollers.taskPoller | null
	if ((overrides != null) && (overrides$ as workerOverrides).useLocallyDispatchedActivityPoller) {
		__goscriptShadow3 = $.interfaceValue<__goscript_internal_task_pollers.taskPoller | null>(await __goscript_internal_task_pollers.newLocallyDispatchedActivityTaskPoller(taskHandler, service, domain, (params.value).clone()), "*internal.locallyDispatchedActivityTaskPoller", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTaskPoller"))
		workerType = "LocallyDispatchedActivityWorker"
	} else {
		__goscriptShadow3 = $.interfaceValue<__goscript_internal_task_pollers.taskPoller | null>(await __goscript_internal_task_pollers.newActivityTaskPoller(taskHandler, service, domain, (params.value).clone()), "*internal.activityTaskPoller", /* @__PURE__ */ $.pointerType("internal.activityTaskPoller"))
	}
	return newActivityTaskWorker(service, domain, (params.value).clone(), sessionTokenBucket, workerStopChannel, __goscriptShadow3, workerType)
}

export async function newActivityTaskWorker(service: workflowserviceclient.Interface | null, domain: string, __goscriptParam5: workerExecutionParameters, sessionTokenBucket: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null, stopC: $.Channel<{}> | null, poller: __goscript_internal_task_pollers.taskPoller | null, workerType: string): globalThis.Promise<activityWorker | $.VarRef<activityWorker> | null> {
	let workerParams: $.VarRef<workerExecutionParameters> = $.varRef(__goscriptParam5)
	let worker: activityWorker | $.VarRef<activityWorker> | null = null! as activityWorker | $.VarRef<activityWorker> | null
	await ensureRequiredParams(workerParams)
	let base: __goscript_internal_worker_base.baseWorker | $.VarRef<__goscript_internal_worker_base.baseWorker> | null = await __goscript_internal_worker_base.newBaseWorker(new __goscript_internal_worker_base.baseWorkerOptions({pollerAutoScaler: workerParams.value.WorkerOptions.AutoScalerOptions, pollerCountWithoutAutoScaling: workerParams.value.WorkerOptions.MaxConcurrentActivityTaskPollers, pollerRate: 1000, maxConcurrentTask: workerParams.value.WorkerOptions.MaxConcurrentActivityExecutionSize, maxTaskPerSecond: workerParams.value.WorkerOptions.WorkerActivitiesPerSecond, taskWorker: poller, identity: workerParams.value.WorkerOptions.Identity, workerType: workerType, shutdownTimeout: workerParams.value.WorkerStopTimeout, userContextCancel: workerParams.value.UserContextCancel, pollerTracker: workerParams.value.WorkerOptions.WorkerStats.PollerTracker}, true), workerParams.value.WorkerOptions.Logger, workerParams.value.WorkerOptions.MetricsScope, sessionTokenBucket)

	return new activityWorker({executionParameters: workerParams.value, workflowService: service, worker: base, poller: poller, identity: workerParams.value.WorkerOptions.Identity, domain: domain, stopC: stopC})
}

export async function validateFnFormat(fnType: reflect.Type | null, isWorkflow: boolean): globalThis.Promise<$.GoError> {
	if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
		return fmt.Errorf("expected a func as input but was %s", $.namedValueInterfaceValue<any>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	if (isWorkflow) {
		if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < 1) {
			return fmt.Errorf("expected at least one argument of type workflow.Context in function, found %d input arguments", $.basicInterfaceValue((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"))
		}
		if (!await isWorkflowContext((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return fmt.Errorf("expected first argument to be workflow.Context but found %s", ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
		}
	}

	// Return values
	// We expect either
	// 	<result>, error
	//	(or) just error
	if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < 1) || ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 2)) {
		return fmt.Errorf("expected function to return result, error or just error, but found %d return values", $.basicInterfaceValue((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"))
	}
	if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 1) && !await isValidResultType((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return fmt.Errorf("expected function first return value to return valid type but found: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	if (!await isError((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return fmt.Errorf("expected function second return value to return error but found %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return null
}

export async function encodeArgs(dc: __goscript_encoded.DataConverter | null, args: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (dc == null) {
		return $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(__goscript_encoded.getDefaultDataConverter()).ToData(args)
	}
	return (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).ToData(args)
}

export async function decodeArgs(dc: __goscript_encoded.DataConverter | null, fnType: reflect.Type | null, data: $.Slice<number>): globalThis.Promise<[$.Slice<reflect.Value>, $.GoError]> {
	let result: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple3: any = await decodeArgsToValues(dc, fnType, data)
	let r: $.Slice<any> = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [result, err]
	}
	for (let __goscriptSliceWindow0 = $.sliceRange(r), i = 0; i < __goscriptSliceWindow0.length; i++) {
		result = $.appendOne(result, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)))).Elem())))
	}
	return [result, err]
}

export async function decodeArgsToValues(dc: __goscript_encoded.DataConverter | null, fnType: reflect.Type | null, data: $.Slice<number>): globalThis.Promise<[$.Slice<any>, $.GoError]> {
	let result: $.Slice<any> = null! as $.Slice<any>
	let err: $.GoError = null! as $.GoError
	if (dc == null) {
		dc = __goscript_encoded.getDefaultDataConverter()
	}
	argsLoop: for (let i = 0; i < (__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let argT = (__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((i == 0) && (await __goscript_internal_activity.isActivityContext(argT) || await isWorkflowContext(argT))) {
			continue argsLoop
		}
		let arg = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(argT)!))).Interface()
		result = $.appendOne(result, arg, $.appendZeros.nil)
	}
	err = (__goscriptAwait = (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).FromData(data, result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (err != null) {
		return [result, err]
	}
	return [result, err]
}

export async function encodeArg(dc: __goscript_encoded.DataConverter | null, arg: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (dc == null) {
		return $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(__goscript_encoded.getDefaultDataConverter()).ToData($.arrayToSlice<any>([arg]))
	}
	return (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).ToData($.arrayToSlice<any>([arg]))
}

export async function decodeArg(dc: __goscript_encoded.DataConverter | null, data: $.Slice<number>, to: any): globalThis.Promise<$.GoError> {
	if (dc == null) {
		return $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(__goscript_encoded.getDefaultDataConverter()).FromData(data, $.arrayToSlice<any>([to]))
	}
	return (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).FromData(data, $.arrayToSlice<any>([to]))
}

export async function decodeAndAssignValue(dc: __goscript_encoded.DataConverter | null, _from: any, toValuePtr: any): globalThis.Promise<$.GoError> {
	if (toValuePtr == null) {
		return null
	}
	{
		let rf = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(toValuePtr)))
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rf)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return errors.New("value parameter provided is not a pointer")
		}
	}
	{
		let __goscriptTuple4: any = $.typeAssertTuple<$.Slice<number>>(_from, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		let data: $.Slice<number> = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (ok) {
			{
				let err = await decodeArg(dc, data, toValuePtr)
				if (err != null) {
					return err
				}
			}
		} else {
			{
				let fv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_from)))
				if ($.markAsStructValue($.cloneStructValue(fv)).IsValid()) {
					let fromType = $.markAsStructValue($.cloneStructValue(fv)).Type()
					let toType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(toValuePtr)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let assignable = (__goscriptAwait = (fromType !== null && (fromType as any).__isVarRef !== true && (fromType as any).__goValue === undefined ? (fromType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fromType)).AssignableTo($.pointerValueOrNil(toType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (!assignable) {
						return fmt.Errorf("%s is not assignable to  %s", (__goscriptAwait = (fromType !== null && (fromType as any).__isVarRef !== true && (fromType as any).__goValue === undefined ? (fromType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fromType)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (toType !== null && (toType as any).__isVarRef !== true && (toType as any).__goValue === undefined ? (toType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(toType)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(toValuePtr))).Elem())).Set($.markAsStructValue($.cloneStructValue(fv)))
				}
			}
		}
	}
	return null
}

export async function getDataConverterFromActivityCtx(ctx: context.Context | null): globalThis.Promise<__goscript_encoded.DataConverter | null> {
	if ((ctx == null) || ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null)) {
		return __goscript_encoded.getDefaultDataConverter()
	}
	let info: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = $.mustTypeAssert<__goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.activityEnvironment"))
	let info$: __goscript_internal_activity.activityEnvironment = info == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(info)
	if ((info$ as __goscript_internal_activity.activityEnvironment).dataConverter == null) {
		return __goscript_encoded.getDefaultDataConverter()
	}
	return (info$ as __goscript_internal_activity.activityEnvironment).dataConverter
}

export let binaryChecksum: $.VarRef<atomic.Value> = $.varRef($.markAsStructValue(new atomic.Value()))

export function __goscript_set_binaryChecksum(__goscriptValue: atomic.Value): void {
	$.assignStruct(binaryChecksum.value, __goscriptValue)
}

export let binaryChecksumLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_binaryChecksumLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(binaryChecksumLock.value, __goscriptValue)
}

export function SetBinaryChecksum(checksum: string): void {
	binaryChecksum.value.Store(checksum)
}

export async function initBinaryChecksum(): globalThis.Promise<[string, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	// initBinaryChecksum may be called multiple times concurrently during worker startup.
	// To avoid reading and hashing the contents of the binary multiple times acquire mutex here.
	await binaryChecksumLock.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(binaryChecksumLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })

	// check if binaryChecksum already set/initialized.
	{
		let [bcsVal, ok] = $.typeAssertTuple<string>(binaryChecksum.value.Load(), /* @__PURE__ */ $.basicType("string"))
		if (ok) {
			return [bcsVal, null]
		}
	}

	let [exec, err] = os.Executable()
	if (err != null) {
		return ["", err]
	}

	let __goscriptTuple7: any = await os.Open(exec)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return ["", err]
	}
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		await os.File.prototype.Close.call($.pointerValue<os.File>(f))
	})() })

	let h = md5.New()
	{
		let [, __goscriptShadow4] = await io.Copy($.pointerValueOrNil((h as io.Writer | null))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!)
		if (__goscriptShadow4 != null) {
			return ["", __goscriptShadow4]
		}
	}

	let checksum: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(h)).Sum(null)
	let bcsVal = hex.EncodeToString($.goSlice(checksum, undefined, undefined))
	binaryChecksum.value.Store(bcsVal)

	return [bcsVal, err]
}

export async function getBinaryChecksum(): globalThis.Promise<string> {
	let [bcsVal, ok] = $.typeAssertTuple<string>(binaryChecksum.value.Load(), /* @__PURE__ */ $.basicType("string"))
	if (ok) {
		return bcsVal
	}

	let __goscriptTuple8: any = await initBinaryChecksum()
	bcsVal = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	if (err != null) {
		$.panic((err as any))
	}

	return bcsVal
}

export async function newAggregatedWorker(service: workflowserviceclient.Interface | null, domain: string, taskList: string, options: __goscript_worker.WorkerOptions): globalThis.Promise<[aggregatedWorker | $.VarRef<aggregatedWorker> | null, $.GoError]> {
	let worker: aggregatedWorker | $.VarRef<aggregatedWorker> | null = null! as aggregatedWorker | $.VarRef<aggregatedWorker> | null
	let err: $.GoError = null! as $.GoError
	let wOptions = $.varRef(AugmentWorkerOptions((options).clone()))
	{
		let __goscriptShadow5 = options.Validate()
		if (__goscriptShadow5 != null) {
			return [null, fmt.Errorf("worker options validation error: %w", (__goscriptShadow5 as any))]
		}
	}

	// Wire up MetricEmitMode feature flag to control timer/histogram emission
	metrics.SetEmitMode(wOptions.value.FeatureFlags.MetricEmitMode)

	let ctx = wOptions.value.BackgroundActivityContext
	if (ctx == null) {
		ctx = context.Background()
	}
	let [backgroundActivityContext, backgroundActivityContextCancel] = context.WithCancel($.pointerValueOrNil(ctx)!)

	let workerParams = $.varRef(new workerExecutionParameters({WorkerOptions: wOptions.value, TaskList: (() => { const __goscriptLiteralField6 = common.StringPtr(taskList); const __goscriptLiteralField7 = shared.TaskListKind_Ptr(shared.TaskListKindNormal); return new shared.TaskList({Name: __goscriptLiteralField6, Kind: __goscriptLiteralField7}) })(), UserContext: backgroundActivityContext, UserContextCancel: backgroundActivityContextCancel}, true))

	await ensureRequiredParams(workerParams)
	workerParams.value.WorkerOptions.MetricsScope = await tagScope(workerParams.value.WorkerOptions.MetricsScope, $.arrayToSlice<string>(["Domain", domain, "TaskList", taskList, "cadence-client-name", "uber-go", "cadence-caller-type", "sdk"]))
	workerParams.value.WorkerOptions.Logger = await zap.Logger.prototype.With.call(workerParams.value.WorkerOptions.Logger, $.arrayToSlice<zap.Field>([new zapcore.Field({Key: "Domain", Type: 15, String: domain}, true), new zapcore.Field({Key: "TaskList", Type: 15, String: taskList}, true), new zapcore.Field({Key: "WorkerID", Type: 15, String: workerParams.value.WorkerOptions.Identity}, true)]))
	let logger: zap.Logger | $.VarRef<zap.Logger> | null = workerParams.value.WorkerOptions.Logger
	if (options.Authorization != null) {
		service = auth.NewWorkflowServiceWrapper(service, options.Authorization)
	}
	if (!$.stringEqual(options.IsolationGroup, "")) {
		service = isolationgroup.NewWorkflowServiceWrapper(service, options.IsolationGroup)
	}
	service = metrics.NewWorkflowServiceWrapper(service, workerParams.value.WorkerOptions.MetricsScope)
	await processTestTags(wOptions, workerParams)

	// worker specific registry
	let __goscriptShadow6: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await __goscript_registry.newRegistry()

	// ldaTunnel is a one way tunnel to dispatch activity tasks from workflow poller to activity poller
	let ldaTunnel: __goscript_internal_task_pollers.locallyDispatchedActivityTunnel | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel> | null = null! as __goscript_internal_task_pollers.locallyDispatchedActivityTunnel | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel> | null

	// activity types.
	let __goscriptShadow7: activityWorker | $.VarRef<activityWorker> | null = null! as activityWorker | $.VarRef<activityWorker> | null
	let locallyDispatchedActivityWorker: activityWorker | $.VarRef<activityWorker> | null = null! as activityWorker | $.VarRef<activityWorker> | null

	if (!wOptions.value.DisableActivityWorker) {
		__goscriptShadow7 = await newActivityWorker(service, domain, (workerParams.value).clone(), null, __goscriptShadow6, null)

		// do not dispatch locally if TaskListActivitiesPerSecond is set
		if (workerParams.value.WorkerOptions.TaskListActivitiesPerSecond == 100000) {
			// TODO update taskPoller interface so one activity worker can multiplex on multiple pollers
			locallyDispatchedActivityWorker = await newActivityWorker(service, domain, (workerParams.value).clone(), new workerOverrides({useLocallyDispatchedActivityPoller: true}), __goscriptShadow6, null)
			ldaTunnel = $.pointerValue<__goscript_internal_task_pollers.locallyDispatchedActivityTaskPoller>($.mustTypeAssert<__goscript_internal_task_pollers.locallyDispatchedActivityTaskPoller | $.VarRef<__goscript_internal_task_pollers.locallyDispatchedActivityTaskPoller> | null>($.pointerValue<activityWorker>(locallyDispatchedActivityWorker).poller, /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTaskPoller"))).ldaTunnel
			$.pointerValue<__goscript_internal_task_pollers.locallyDispatchedActivityTunnel>(ldaTunnel).metricsScope = await metrics.NewTaggedScope(workerParams.value.WorkerOptions.MetricsScope)
		}
	}

	// workflow factory.
	let __goscriptShadow8: workflowWorker | $.VarRef<workflowWorker> | null = null! as workflowWorker | $.VarRef<workflowWorker> | null
	if (!wOptions.value.DisableWorkflowWorker) {
		let testTags: globalThis.Map<string, globalThis.Map<string, string> | null> | null = await getTestTags(wOptions.value.BackgroundActivityContext)
		if ($.len(testTags) > 0) {
			__goscriptShadow8 = await __goscript_internal_pressure_points.newWorkflowWorkerWithPressurePoints(service, domain, (workerParams.value).clone(), testTags, __goscriptShadow6)
		} else {
			__goscriptShadow8 = await newWorkflowWorker(service, domain, (workerParams.value).clone(), null, __goscriptShadow6, ldaTunnel)
		}
	}

	let __goscriptShadow9: sessionWorker | $.VarRef<sessionWorker> | null = null! as sessionWorker | $.VarRef<sessionWorker> | null
	if (wOptions.value.EnableSessionWorker) {
		__goscriptShadow9 = await newSessionWorker(service, domain, (workerParams.value).clone(), null, __goscriptShadow6, wOptions.value.MaxConcurrentSessionExecutionSize)
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(__goscriptShadow6, $.interfaceValue($.goFunc(__goscript_session.sessionCreationActivity, "go.uber.org/cadence/internal.sessionCreationActivity"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: "internalSessionCreationActivity"}, true))
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(__goscriptShadow6, $.interfaceValue($.goFunc(__goscript_session.sessionCompletionActivity, "go.uber.org/cadence/internal.sessionCompletionActivity"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: "internalSessionCompletionActivity"}, true))
	}

	let __goscriptShadow10: __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null = null! as __goscript_workflow_shadower_worker.shadowWorker | $.VarRef<__goscript_workflow_shadower_worker.shadowWorker> | null
	if (wOptions.value.EnableShadowWorker) {
		__goscriptShadow10 = await __goscript_workflow_shadower_worker.newShadowWorker(service, domain, (wOptions.value.ShadowOptions).clone(), (workerParams.value).clone(), __goscriptShadow6)
	}

	return [new aggregatedWorker({workflowWorker: __goscriptShadow8, activityWorker: __goscriptShadow7, locallyDispatchedActivityWorker: locallyDispatchedActivityWorker, sessionWorker: __goscriptShadow9, shadowWorker: __goscriptShadow10, logger: logger, registry: __goscriptShadow6, workerstats: workerParams.value.WorkerOptions.WorkerStats}), null]
}

export async function tagScope(metricsScope: tally.Scope | null, keyValueinPairs: $.Slice<string>): globalThis.Promise<tally.Scope | null> {
	if (metricsScope == null) {
		metricsScope = (await tally.__goscript_init_NoopScope(), tally.__goscript_get_NoopScope())
	}
	if (($.sliceLen(keyValueinPairs) % 2) != 0) {
		$.panic("tagScope key value are not in pairs")
	}
	let tagsMap: globalThis.Map<string, string> | null = $.makeMap<string, string>([])
	for (let __goscriptSliceWindow1 = $.sliceRange(keyValueinPairs), i = 0; i < __goscriptSliceWindow1.length; i = i + (2)) {
		$.mapSet(tagsMap, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as string))
	}
	return (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Tagged(tagsMap)
}

export async function processTestTags(wOptions: __goscript_worker.WorkerOptions | $.VarRef<__goscript_worker.WorkerOptions> | null, ep: workerExecutionParameters | $.VarRef<workerExecutionParameters> | null): globalThis.Promise<void> {
	const ep$: workerExecutionParameters = ep == null ? $.pointerTarget<workerExecutionParameters>(ep) : (ep as any).__isVarRef === true ? (ep as any).value : (ep as any).__goValue === undefined ? (ep as any) : $.pointerTarget<workerExecutionParameters>(ep)
	let testTags: globalThis.Map<string, globalThis.Map<string, string> | null> | null = await getTestTags($.pointerValue<__goscript_worker.WorkerOptions>(wOptions).BackgroundActivityContext)
	if (testTags != null) {
		{
			let __goscriptTuple9: any = $.mapGet<string, globalThis.Map<string, string> | null, globalThis.Map<string, string> | null>(testTags, "worker-options", null)
			let paramsOverride: globalThis.Map<string, string> | null = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				for (const [key, val] of paramsOverride?.entries() ?? []) {
					switch (key) {
						case "ConcurrentPollRoutineSize":
						{
							{
								let [size, err] = strconv.Atoi(val)
								if (err == null) {
									;(ep$ as workerExecutionParameters).WorkerOptions.MaxConcurrentActivityTaskPollers = size;
									;(ep$ as workerExecutionParameters).WorkerOptions.MaxConcurrentDecisionTaskPollers = size
								}
							}
							break
						}
					}
				}
			}
		}
	}
}

export async function isWorkflowContext(inType: reflect.Type | null): globalThis.Promise<boolean> {
	// NOTE: We don't expect any one to derive from workflow context.
	return $.comparableEqual(inType, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*internal.Context", /* @__PURE__ */ $.pointerType("internal.Context")))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function isValidResultType(inType: reflect.Type | null): globalThis.Promise<boolean> {
	// https://golang.org/pkg/reflect/#Kind
	switch ((__goscriptAwait = (inType !== null && (inType as any).__isVarRef !== true && (inType as any).__goValue === undefined ? (inType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(inType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Func:
		case reflect.Chan:
		case reflect.UnsafePointer:
		{
			return false
			break
		}
	}

	return true
}

export async function isError(inType: reflect.Type | null): globalThis.Promise<boolean> {
	let errorElem = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*error", /* @__PURE__ */ $.pointerType("error")))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return (inType != null) && (__goscriptAwait = (inType !== null && (inType as any).__isVarRef !== true && (inType as any).__goValue === undefined ? (inType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(inType)).Implements($.pointerValueOrNil(errorElem)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function getFunctionName(i: any): string {
	{
		let [fullName, ok] = $.typeAssertTuple<string>(i, /* @__PURE__ */ $.basicType("string"))
		if (ok) {
			return fullName
		}
	}
	let fullName = runtime.Func.prototype.Name.call($.pointerValueOrNil(runtime.FuncForPC($.markAsStructValue($.cloneStructValue(reflect.ValueOf(i))).Pointer())))
	// This allows to call activities by method pointer
	// Compiler adds -fm suffix to a function name which has a receiver
	// Note that this works even if struct pointer used to get the function is nil
	// It is possible because nil receivers are allowed.
	// For example:
	// var a *Activities
	// ExecuteActivity(ctx, a.Foo)
	// will call this function which is going to return "Foo"
	return strings.TrimSuffix(fullName, "-fm")
}

export async function getActivityFunctionName(r: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, i: any): globalThis.Promise<string> {
	let result = getFunctionName(i)
	{
		let [alias, ok] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_registry.registry).getActivityAlias(result) : __goscript_registry.registry.prototype.getActivityAlias.call(r, result))
		if (ok) {
			result = alias
		}
	}
	return result
}

export async function getWorkflowFunctionName(r: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, i: any): globalThis.Promise<string> {
	let result = getFunctionName(i)
	{
		let [alias, ok] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_registry.registry).getWorkflowAlias(result) : __goscript_registry.registry.prototype.getWorkflowAlias.call(r, result))
		if (ok) {
			result = alias
		}
	}
	return result
}

export function getReadOnlyChannel(c: $.Channel<{}> | null): $.Channel<{}> | null {
	return c
}

export function AugmentWorkerOptions(options: __goscript_worker.WorkerOptions): __goscript_worker.WorkerOptions {
	if (options.MaxConcurrentActivityExecutionSize == 0) {
		options.MaxConcurrentActivityExecutionSize = 1000
	}
	if (options.WorkerActivitiesPerSecond == 0) {
		options.WorkerActivitiesPerSecond = 100000
	}
	if (options.MaxConcurrentActivityTaskPollers <= 0) {
		options.MaxConcurrentActivityTaskPollers = 2
	}
	if (options.MaxConcurrentDecisionTaskExecutionSize == 0) {
		options.MaxConcurrentDecisionTaskExecutionSize = 1000
	}
	if (options.WorkerDecisionTasksPerSecond == 0) {
		options.WorkerDecisionTasksPerSecond = 100000
	}
	if (options.MaxConcurrentDecisionTaskPollers <= 0) {
		options.MaxConcurrentDecisionTaskPollers = 2
	}
	if (options.MaxConcurrentLocalActivityExecutionSize == 0) {
		options.MaxConcurrentLocalActivityExecutionSize = 1000
	}
	if (options.WorkerLocalActivitiesPerSecond == 0) {
		options.WorkerLocalActivitiesPerSecond = 100000
	}
	if (options.TaskListActivitiesPerSecond == 0) {
		options.TaskListActivitiesPerSecond = 100000
	}
	if (time.Duration_Seconds(options.StickyScheduleToStartTimeout) == 0) {
		options.StickyScheduleToStartTimeout = 5000000000n
	}
	if (options.DataConverter == null) {
		options.DataConverter = __goscript_encoded.getDefaultDataConverter()
	}
	if (options.MaxConcurrentSessionExecutionSize == 0) {
		options.MaxConcurrentSessionExecutionSize = 1000
	}
	$.assignStruct(options.AutoScalerOptions, augmentAutoScalerOptions((options.AutoScalerOptions).clone()))

	// if the user passes in a tracer then add a tracing context propagator
	if (options.Tracer != null) {
		options.ContextPropagators = $.appendOne(options.ContextPropagators, __goscript_tracer.NewTracingContextPropagator(options.Logger, options.Tracer), $.appendZeros.nil)
	} else {
		options.Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}

	if (options.EnableShadowWorker) {
		options.DisableActivityWorker = true
		options.DisableWorkflowWorker = true
		options.EnableSessionWorker = false
	}

	// Set default MetricEmitMode to EmitHistogramsOnly if not explicitly configured
	if (options.FeatureFlags.MetricEmitMode == 0) {
		options.FeatureFlags.MetricEmitMode = 3
	}

	return (options).clone()
}

export function augmentAutoScalerOptions(options: __goscript_internal_poller_autoscaler.AutoScalerOptions): __goscript_internal_poller_autoscaler.AutoScalerOptions {
	// need at least 2 for sticky task polling to work
	if (options.PollerMinCount <= 1) {
		options.PollerMinCount = 2
	}
	if (options.PollerMaxCount <= 1) {
		options.PollerMaxCount = 20
	}
	if (options.PollerInitCount <= 1) {
		options.PollerInitCount = 2
	}
	if (options.Cooldown == 0n) {
		options.Cooldown = 10000000000n
	}
	if (options.PollerWaitTimeUpperBound == 0n) {
		options.PollerWaitTimeUpperBound = 256000000n
	}
	if (options.PollerWaitTimeLowerBound == 0n) {
		options.PollerWaitTimeLowerBound = 16000000n
	}
	return (options).clone()
}

export async function getTestTags(ctx: context.Context | null): globalThis.Promise<globalThis.Map<string, globalThis.Map<string, string> | null> | null> {
	if (ctx != null) {
		let env = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value("cadence-testTags"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (env != null) {
			return $.mustTypeAssert<globalThis.Map<string, globalThis.Map<string, string> | null> | null>(env, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))))
		}
	}
	return null
}

export async function StartVersionMetrics(metricsScope: tally.Scope | null): globalThis.Promise<void> {
	await startVersionMetric.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(60000000000n)
			let versionTags: globalThis.Map<string, string> | null = $.makeMap<string, string>([["cadence_client_version", "1.3.0"]])
			while (true) {
				const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: StopMetrics,
						onSelected: async (__goscriptSelect2Result) => {
							return $.selectVoidReturn()
						}
					},
					{
						id: 1,
						isSend: false,
						channel: $.pointerValue<time.Ticker>(ticker).C,
						onSelected: async (__goscriptSelect2Result) => {
							void (__goscriptAwait = $.pointerValue<Exclude<tally.Gauge, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Tagged(versionTags), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Gauge("client_version_metric"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Update(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				], false)
				if (__goscriptSelect2HasReturn) {
					return __goscriptSelect2Value
				}
			}
		})() })
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
