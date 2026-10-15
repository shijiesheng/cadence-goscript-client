// Generated file based on internal_task_pollers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff2 from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as serializer from "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as reflect from "@goscript/reflect/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

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

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_propagation from "./propagation.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"
import "@goscript/container/list/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/sync/atomic/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
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
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./propagation.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.taskPoller", "internal.basePoller", "internal.workflowTaskPoller", "internal.activityTaskPoller", "internal.locallyDispatchedActivityTaskPoller", "internal.historyIteratorImpl", "internal.localActivityTaskPoller", "internal.localActivityTaskHandler", "internal.localActivityResult", "internal.localActivityTunnel", "internal.locallyDispatchedActivityTunnel", "internal.localDispatcher", "internal.pollFunc"])

export type taskPoller = {
	PollTask(): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	ProcessTask(_p0: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.taskPoller",
	null,
	[$.methodSignature("PollTask", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ProcessTask", [{ kind: $.TypeKind.Interface, methods: [] }], ["error"])]
);

export type localDispatcher = {
	SendTask(task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"internal.localDispatcher",
	null,
	[$.methodSignature("SendTask", [["task", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type pollFunc = ((ctx: context.Context | null) => [s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError] | globalThis.Promise<[s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]>) | null

export class basePoller {
	public get shutdownC(): $.Channel<{}> | null {
		return this._fields.shutdownC
	}

	public set shutdownC(value: $.Channel<{}> | null) {
		this._fields.shutdownC = value
	}

	public _fields: {
		shutdownC: $.Channel<{}> | null
	}

	constructor(init?: Partial<{shutdownC?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			shutdownC: init?.shutdownC ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): basePoller {
		return new basePoller(this, true)
	}

	public __goscriptAssign(source: basePoller): void {
		const target = this._fields
		const values = source._fields
		target.shutdownC = values.shutdownC
	}

	public async doPoll(featureFlags: __goscript_internal_utils.FeatureFlags, pollFunc: ((ctx: context.Context | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<[any, $.GoError]> {
		const bp: basePoller | $.VarRef<basePoller> | null = this;
		if (await (bp !== null && (bp as any).__isVarRef !== true && (bp as any).__goValue === undefined ? ((bp as any) as basePoller).shuttingDown() : basePoller.prototype.shuttingDown.call(bp))) {
			return [null, __goscript_internal_worker_base.errShutdown]
		}

		let err: $.GoError = null! as $.GoError
		let result: any = null! as any

		let doneC: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		let [ctx, cancel, ] = await __goscript_internal_utils.newChannelContext(context.Background(), (featureFlags).clone(), $.arrayToSlice<((builder: __goscript_internal_utils.contextBuilder | $.VarRef<__goscript_internal_utils.contextBuilder> | null) => void) | null>([__goscript_internal_utils.chanTimeout(150000000000n)]))

		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let __goscriptTuple0: any = await pollFunc!(ctx)
			result = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			doneC!.close()
		})() })

		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [any, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: doneC,
				onSelected: async (__goscriptSelect0Result) => {
					return [result, err]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<basePoller>(bp).shutdownC,
				onSelected: async (__goscriptSelect0Result) => {
					void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return [null, __goscript_internal_worker_base.errShutdown]
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async shuttingDown(): globalThis.Promise<boolean> {
		const bp: basePoller | $.VarRef<basePoller> | null = this;
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<basePoller>(bp).shutdownC,
				onSelected: async (__goscriptSelect1Result) => {
					return true
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect1Result) => {
					return false
				}
			}
		], true)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.basePoller",
		() => new basePoller(),
		() => [$.methodSignature("doPoll", [["featureFlags", "internal.FeatureFlags"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("shuttingDown", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		basePoller,
		() => [/* @__PURE__ */ $.structField("shutdownC", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowTaskPoller {
	public get basePoller(): basePoller {
		return this._fields.basePoller
	}

	public set basePoller(value: basePoller) {
		this._fields.basePoller = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get taskListName(): string {
		return this._fields.taskListName
	}

	public set taskListName(value: string) {
		this._fields.taskListName = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get taskHandler(): __goscript_internal_public.WorkflowTaskHandler | null {
		return this._fields.taskHandler
	}

	public set taskHandler(value: __goscript_internal_public.WorkflowTaskHandler | null) {
		this._fields.taskHandler = value
	}

	public get ldaTunnel(): localDispatcher | null {
		return this._fields.ldaTunnel
	}

	public set ldaTunnel(value: localDispatcher | null) {
		this._fields.ldaTunnel = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get stickyTaskList(): string {
		return this._fields.stickyTaskList
	}

	public set stickyTaskList(value: string) {
		this._fields.stickyTaskList = value
	}

	public get disableStickyExecution(): boolean {
		return this._fields.disableStickyExecution
	}

	public set disableStickyExecution(value: boolean) {
		this._fields.disableStickyExecution = value
	}

	public get StickyScheduleToStartTimeout(): time.Duration {
		return this._fields.StickyScheduleToStartTimeout
	}

	public set StickyScheduleToStartTimeout(value: time.Duration) {
		this._fields.StickyScheduleToStartTimeout = value
	}

	public get pendingRegularPollCount(): number {
		return this._fields.pendingRegularPollCount
	}

	public set pendingRegularPollCount(value: number) {
		this._fields.pendingRegularPollCount = value
	}

	public get pendingStickyPollCount(): number {
		return this._fields.pendingStickyPollCount
	}

	public set pendingStickyPollCount(value: number) {
		this._fields.pendingStickyPollCount = value
	}

	public get stickyBacklog(): bigint {
		return this._fields.stickyBacklog
	}

	public set stickyBacklog(value: bigint) {
		this._fields.stickyBacklog = value
	}

	public get requestLock(): sync.Mutex {
		return this._fields.requestLock
	}

	public set requestLock(value: sync.Mutex) {
		this._fields.requestLock = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		basePoller: basePoller
		domain: string
		taskListName: string
		identity: string
		service: workflowserviceclient.Interface | null
		taskHandler: __goscript_internal_public.WorkflowTaskHandler | null
		ldaTunnel: localDispatcher | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		stickyTaskList: string
		disableStickyExecution: boolean
		StickyScheduleToStartTimeout: time.Duration
		pendingRegularPollCount: number
		pendingStickyPollCount: number
		stickyBacklog: bigint
		requestLock: sync.Mutex
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{basePoller?: basePoller, domain?: string, taskListName?: string, identity?: string, service?: workflowserviceclient.Interface | null, taskHandler?: __goscript_internal_public.WorkflowTaskHandler | null, ldaTunnel?: localDispatcher | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, stickyTaskList?: string, disableStickyExecution?: boolean, StickyScheduleToStartTimeout?: time.Duration, pendingRegularPollCount?: number, pendingStickyPollCount?: number, stickyBacklog?: bigint, requestLock?: sync.Mutex, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			basePoller: init?.basePoller ? init.basePoller.clone() : new basePoller(undefined, true),
			domain: init?.domain ?? ("" as string),
			taskListName: init?.taskListName ?? ("" as string),
			identity: init?.identity ?? ("" as string),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			taskHandler: init?.taskHandler ?? (null! as __goscript_internal_public.WorkflowTaskHandler | null),
			ldaTunnel: init?.ldaTunnel ?? (null! as localDispatcher | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			stickyTaskList: init?.stickyTaskList ?? ("" as string),
			disableStickyExecution: init?.disableStickyExecution ?? (false as boolean),
			StickyScheduleToStartTimeout: init?.StickyScheduleToStartTimeout ?? (0n as time.Duration),
			pendingRegularPollCount: init?.pendingRegularPollCount ?? (0 as number),
			pendingStickyPollCount: init?.pendingStickyPollCount ?? (0 as number),
			stickyBacklog: init?.stickyBacklog ?? (0n as bigint),
			requestLock: init?.requestLock ? $.markAsStructValue($.cloneStructValue(init.requestLock)) : $.markAsStructValue(new sync.Mutex()),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowTaskPoller {
		return new workflowTaskPoller(this, true)
	}

	public __goscriptAssign(source: workflowTaskPoller): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.basePoller, values.basePoller)
		target.domain = values.domain
		target.taskListName = values.taskListName
		target.identity = values.identity
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.taskHandler = $.assignFieldValue(target.taskHandler, values.taskHandler, "internal.WorkflowTaskHandler")
		target.ldaTunnel = $.assignFieldValue(target.ldaTunnel, values.ldaTunnel, "internal.localDispatcher")
		target.metricsScope = values.metricsScope
		target.logger = values.logger
		target.stickyTaskList = values.stickyTaskList
		target.disableStickyExecution = values.disableStickyExecution
		target.StickyScheduleToStartTimeout = values.StickyScheduleToStartTimeout
		target.pendingRegularPollCount = values.pendingRegularPollCount
		target.pendingStickyPollCount = values.pendingStickyPollCount
		target.stickyBacklog = values.stickyBacklog
		$.assignStruct(target.requestLock, values.requestLock)
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async PollTask(): globalThis.Promise<[any, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		// Get the task.
		let [__goscriptShadow0, err] = await $.pointerValue<workflowTaskPoller>(wtp).basePoller.doPoll(($.pointerValue<workflowTaskPoller>(wtp).featureFlags).clone(), $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.poll(ctx))($.pointerValue<workflowTaskPoller>(wtp)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*workflowTaskPoller).poll-fm"))
		if (err != null) {
			return [null, err]
		}

		return [__goscriptShadow0, null]
	}

	public async ProcessTask(task: any): globalThis.Promise<$.GoError> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		if (await $.pointerValue<workflowTaskPoller>(wtp).basePoller.shuttingDown()) {
			return __goscript_internal_worker_base.errShutdown
		}

		{
			const __goscriptTypeSwitchValue = task
			switch (true) {
				case $.typeAssert<__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.workflowTask")).ok:
					{
						return workflowTaskPoller.prototype.processWorkflowTask.call(wtp, ((task as any)?.__goType === "*internal.workflowTask" && (task as any).__goValue === undefined && (task as any).__isTypedNil !== true ? ((task as any) as __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null) : $.mustTypeAssert<__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.workflowTask"))))
					}
					break
				case $.typeAssert<__goscript_internal_task_handlers.resetStickinessTask | $.VarRef<__goscript_internal_task_handlers.resetStickinessTask> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.resetStickinessTask")).ok:
					{
						return workflowTaskPoller.prototype.processResetStickinessTask.call(wtp, ((task as any)?.__goType === "*internal.resetStickinessTask" && (task as any).__goValue === undefined && (task as any).__isTypedNil !== true ? ((task as any) as __goscript_internal_task_handlers.resetStickinessTask | $.VarRef<__goscript_internal_task_handlers.resetStickinessTask> | null) : $.mustTypeAssert<__goscript_internal_task_handlers.resetStickinessTask | $.VarRef<__goscript_internal_task_handlers.resetStickinessTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.resetStickinessTask"))))
					}
					break
				default:
					{
						$.panic("unknown task type.")
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async RespondTaskCompletedWithMetrics(completedRequest: any, taskErr: $.GoError, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, startTime: time.Time): globalThis.Promise<[s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		let response: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = null! as s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null
		let err: $.GoError = null! as $.GoError
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		let metricsScope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wtp$ as workflowTaskPoller).metricsScope, $.arrayToSlice<string>(["WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)]))
		if (taskErr != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.DecisionExecutionFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await zap.Logger.prototype.Warn.call((wtp$ as workflowTaskPoller).logger, "Failed to process decision task.", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.Error(taskErr)]))
			// convert err to DecisionTaskFailed
			completedRequest = $.interfaceValue(await __goscript_internal_task_handlers.errorToFailDecisionTask((task$ as s.PollForDecisionTaskResponse).TaskToken, taskErr, (wtp$ as workflowTaskPoller).identity), "*shared.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest"))
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.DecisionTaskCompletedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await metrics.EmitLatency(metricsScope, metrics.DecisionExecutionLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(startTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())

		let responseStartTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		{
			let __goscriptTuple1: any = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).respondTaskCompleted(completedRequest, task) : workflowTaskPoller.prototype.respondTaskCompleted.call(wtp, completedRequest, task))
			response = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.DecisionResponseFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [response, err]
			}
		}
		await metrics.EmitLatency(metricsScope, metrics.DecisionResponseLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(responseStartTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())

		return [response, err]
	}

	public async getNextPollRequest(): globalThis.Promise<s.PollForDecisionTaskRequest | $.VarRef<s.PollForDecisionTaskRequest> | null> {
		let wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		let request: s.PollForDecisionTaskRequest | $.VarRef<s.PollForDecisionTaskRequest> | null = null! as s.PollForDecisionTaskRequest | $.VarRef<s.PollForDecisionTaskRequest> | null
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		let taskList = (() => { const __goscriptLiteralField0 = common.StringPtr((wtp$ as workflowTaskPoller).taskListName); const __goscriptLiteralField1 = common.TaskListKindPtr(0); return new s.TaskList({Name: __goscriptLiteralField0, Kind: __goscriptLiteralField1}, true) })()
		if (!(wtp$ as workflowTaskPoller).disableStickyExecution) {
			await (wtp$ as workflowTaskPoller).requestLock.Lock()
			if (((wtp$ as workflowTaskPoller).stickyBacklog > 0n) || ((wtp$ as workflowTaskPoller).pendingStickyPollCount <= (wtp$ as workflowTaskPoller).pendingRegularPollCount)) {
				;(wtp$ as workflowTaskPoller).pendingStickyPollCount++
				taskList = $.assignStruct(taskList, (() => { const __goscriptLiteralField2 = common.StringPtr((wtp$ as workflowTaskPoller).stickyTaskList); const __goscriptLiteralField3 = common.TaskListKindPtr(1); const __goscriptLiteralField4 = common.StringPtr((wtp$ as workflowTaskPoller).taskListName); return new s.TaskList({Name: __goscriptLiteralField2, Kind: __goscriptLiteralField3, BaseName: __goscriptLiteralField4}, true) })())
			} else {
				;(wtp$ as workflowTaskPoller).pendingRegularPollCount++
			}
			void (wtp$ as workflowTaskPoller).requestLock.Unlock()
		}

		return (await (async () => { const __goscriptLiteralField5 = common.StringPtr((wtp$ as workflowTaskPoller).domain); const __goscriptLiteralField6 = common.TaskListPtr(taskList); const __goscriptLiteralField7 = common.StringPtr((wtp$ as workflowTaskPoller).identity); const __goscriptLiteralField8 = common.StringPtr(await __goscript_internal_worker.getBinaryChecksum()); return new s.PollForDecisionTaskRequest({Domain: __goscriptLiteralField5, TaskList: __goscriptLiteralField6, Identity: __goscriptLiteralField7, BinaryChecksum: __goscriptLiteralField8}) })())
	}

	public async handleDecisionFailedRequest(ctx: context.Context | null, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, request: s.RespondDecisionTaskFailedRequest | $.VarRef<s.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		// Only fail decision on first attempt, subsequent failure on the same decision task will timeout.
		// This is to avoid spin on the failed decision task. Checking Attempt not nil for older server.
		if (($.pointerValue<s.PollForDecisionTaskResponse>(task).Attempt != null) && ((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetAttempt() : s.PollForDecisionTaskResponse.prototype.GetAttempt.call(task)) == 0n)) {
			return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowTaskPoller>(wtp).service).RespondDecisionTaskFailed(ctx, request, opts)
		}
		return null
	}

	public async handleDecisionTaskCompletedRequest(ctx: context.Context | null, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, request: s.RespondDecisionTaskCompletedRequest | $.VarRef<s.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		let response: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = null! as s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		const request$: s.RespondDecisionTaskCompletedRequest = request == null ? $.pointerTarget<s.RespondDecisionTaskCompletedRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<s.RespondDecisionTaskCompletedRequest>(request)
		if (((request$ as s.RespondDecisionTaskCompletedRequest).StickyAttributes == null) && !(wtp$ as workflowTaskPoller).disableStickyExecution) {
			;(request$ as s.RespondDecisionTaskCompletedRequest).StickyAttributes = (() => { const __goscriptLiteralField10 = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds((wtp$ as workflowTaskPoller).StickyScheduleToStartTimeout))); return new s.StickyExecutionAttributes({WorkerTaskList: (() => { const __goscriptLiteralField9 = common.StringPtr((wtp$ as workflowTaskPoller).stickyTaskList); return new s.TaskList({Name: __goscriptLiteralField9}) })(), ScheduleToStartTimeoutSeconds: __goscriptLiteralField10}) })()
		} else {
			;(request$ as s.RespondDecisionTaskCompletedRequest).ReturnNewDecisionTask = common.BoolPtr(false)
		}

		if ((wtp$ as workflowTaskPoller).ldaTunnel != null) {
			let activityTasks: $.Slice<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> = null! as $.Slice<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null>
			for (let __goscriptRangeTarget0 = (request$ as s.RespondDecisionTaskCompletedRequest).Decisions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let decision = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as s.Decision | $.VarRef<s.Decision> | null)
				let attr: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null = $.pointerValue<s.Decision>(decision).ScheduleActivityTaskDecisionAttributes
				let attr$: s.ScheduleActivityTaskDecisionAttributes = attr == null ? $.pointerTarget<s.ScheduleActivityTaskDecisionAttributes>(attr) : (attr as any).__isVarRef === true ? (attr as any).value : (attr as any).__goValue === undefined ? (attr as any) : $.pointerTarget<s.ScheduleActivityTaskDecisionAttributes>(attr)
				if ((attr != null) && ($.stringEqual((wtp$ as workflowTaskPoller).taskListName, s.TaskList.prototype.GetName.call((attr$ as s.ScheduleActivityTaskDecisionAttributes).TaskList)))) {
					// assume the activity type is in registry otherwise the activity would be failed and retried from server
					let __goscriptShadow1: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null = (() => { const __goscriptLiteralField11 = common.StringPtr((wtp$ as workflowTaskPoller).domain); return new __goscript_internal_event_handlers.locallyDispatchedActivityTask({readyCh: $.makeChannel<boolean>(1, false, "both"), ActivityID: (attr$ as s.ScheduleActivityTaskDecisionAttributes).ActivityId, ActivityType: (attr$ as s.ScheduleActivityTaskDecisionAttributes).ActivityType, Input: (attr$ as s.ScheduleActivityTaskDecisionAttributes).Input, Header: (attr$ as s.ScheduleActivityTaskDecisionAttributes).Header, WorkflowDomain: __goscriptLiteralField11, ScheduleToCloseTimeoutSeconds: (attr$ as s.ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeoutSeconds, StartToCloseTimeoutSeconds: (attr$ as s.ScheduleActivityTaskDecisionAttributes).StartToCloseTimeoutSeconds, HeartbeatTimeoutSeconds: (attr$ as s.ScheduleActivityTaskDecisionAttributes).HeartbeatTimeoutSeconds, WorkflowExecution: (task$ as s.PollForDecisionTaskResponse).WorkflowExecution, WorkflowType: (task$ as s.PollForDecisionTaskResponse).WorkflowType}) })()
					if ((__goscriptAwait = $.pointerValue<Exclude<localDispatcher, null>>((wtp$ as workflowTaskPoller).ldaTunnel).SendTask(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.ActivityLocalDispatchSucceedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						$.pointerValue<s.ScheduleActivityTaskDecisionAttributes>($.pointerValue<s.Decision>(decision).ScheduleActivityTaskDecisionAttributes).RequestLocalDispatch = common.BoolPtr(true)
						activityTasks = $.appendOne(activityTasks, __goscriptShadow1, $.appendZeros.nil)
					} else {
						// all pollers are busy - no room to optimize
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.ActivityLocalDispatchFailedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				for (let __goscriptRangeTarget1 = activityTasks, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let at = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null)
					let started = false
					if ((response != null) && (err == null)) {
						{
							let __goscriptTuple2: any = $.mapGet<string, s.ActivityLocalDispatchInfo | $.VarRef<s.ActivityLocalDispatchInfo> | null, s.ActivityLocalDispatchInfo | $.VarRef<s.ActivityLocalDispatchInfo> | null>($.pointerValue<s.RespondDecisionTaskCompletedResponse>(response).ActivitiesToDispatchLocally, $.pointerValue<string>($.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).ActivityID), null)
							let adl: s.ActivityLocalDispatchInfo | $.VarRef<s.ActivityLocalDispatchInfo> | null = __goscriptTuple2[0]
							let ok = __goscriptTuple2[1]
							if (ok) {
								$.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).ScheduledTimestamp = $.pointerValue<s.ActivityLocalDispatchInfo>(adl).ScheduledTimestamp
								$.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).StartedTimestamp = $.pointerValue<s.ActivityLocalDispatchInfo>(adl).StartedTimestamp
								$.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).ScheduledTimestampOfThisAttempt = $.pointerValue<s.ActivityLocalDispatchInfo>(adl).ScheduledTimestampOfThisAttempt
								$.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).TaskToken = $.pointerValue<s.ActivityLocalDispatchInfo>(adl).TaskToken
								started = true
							}
						}
					}
					await $.chanSend($.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(at).readyCh, started)
				}
			})() })
		}

		const __goscriptReturn1: [s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null, $.GoError] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wtp$ as workflowTaskPoller).service).RespondDecisionTaskCompleted(ctx, request, opts)
		response = __goscriptReturn1[0]
		err = __goscriptReturn1[1]
		await __defer.dispose()
		return [response, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async poll(ctx: context.Context | null): globalThis.Promise<[any, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionPollCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			await zap.Logger.prototype.Debug.call((wtp$ as workflowTaskPoller).logger, "workflowTaskPoller::Poll", null)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		let request: s.PollForDecisionTaskRequest | $.VarRef<s.PollForDecisionTaskRequest> | null = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).getNextPollRequest() : workflowTaskPoller.prototype.getNextPollRequest.call(wtp))
		let request$: s.PollForDecisionTaskRequest = request == null ? $.pointerTarget<s.PollForDecisionTaskRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<s.PollForDecisionTaskRequest>(request)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (kind: s.TaskListKind) => __receiver.release(kind))((wtp$ as workflowTaskPoller)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32", "shared.TaskListKind")], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*workflowTaskPoller).release-fm")
		const __goscriptDeferArg0 = s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList)
		__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0) })

		let __goscriptTuple3: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wtp$ as workflowTaskPoller).service).PollForDecisionTask(ctx, request, await __goscript_internal_utils.getYarpcCallOptions(((wtp$ as workflowTaskPoller).featureFlags).clone()))
		let response: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		let response$: s.PollForDecisionTaskResponse = response == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(response)
		if (err != null) {
			let retryable = __goscript_internal_retry.isServiceTransientError(err)

			if (retryable) {
				{
					let target: $.VarRef<s.ServiceBusyError | $.VarRef<s.ServiceBusyError> | null> = $.varRef(null)
					if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.ServiceBusyError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.ServiceBusyError"))))) {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Tagged($.makeMap<string, string>([["pollerrorcause", "serviceBusy"]])))).Counter(metrics.DecisionPollTransientFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionPollTransientFailedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionPollFailedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).updateBacklog(s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList), 0n) : workflowTaskPoller.prototype.updateBacklog.call(wtp, s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList), 0n))

			// pause for the retry delay if present.
			// failures also have an exponential backoff, implemented at a higher level,
			// but this ensures a minimum is respected.
			let retryAfter = backoff2.ErrRetryableAfter(err)
			if (retryAfter > 0n) {
				let t: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(retryAfter)
				const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [any, $.GoError]>([
					{
						id: 0,
						isSend: false,
						channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect2Result) => {
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(t))
						}
					},
					{
						id: 1,
						isSend: false,
						channel: $.pointerValue<time.Timer>(t).C,
					}
				], false)
				if (__goscriptSelect2HasReturn) {
					return __goscriptSelect2Value
				}
			}

			return [null, err]
		}

		if ((response == null) || ($.sliceLen((response$ as s.PollForDecisionTaskResponse).TaskToken) == 0)) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionPollNoTaskCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).updateBacklog(s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList), 0n) : workflowTaskPoller.prototype.updateBacklog.call(wtp, s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList), 0n))
			return [$.interfaceValue((() => { const __goscriptLiteralField12 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetAutoConfigHint() : s.PollForDecisionTaskResponse.prototype.GetAutoConfigHint.call(response)); return new __goscript_internal_task_handlers.workflowTask({autoConfigHint: __goscriptLiteralField12}) })(), "*internal.workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")), null]
		}

		await workflowTaskPoller.prototype.updateBacklog.call(wtp, s.TaskList.prototype.GetKind.call((request$ as s.PollForDecisionTaskRequest).TaskList), (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetBacklogCountHint() : s.PollForDecisionTaskResponse.prototype.GetBacklogCountHint.call(response)))

		let task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).toWorkflowTask(response) : workflowTaskPoller.prototype.toWorkflowTask.call(wtp, response))
		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			let firstEventID: bigint = -1n
			if (((response$ as s.PollForDecisionTaskResponse).History != null) && ($.sliceLen($.pointerValue<s.History>((response$ as s.PollForDecisionTaskResponse).History).Events) > 0)) {
				firstEventID = s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>((response$ as s.PollForDecisionTaskResponse).History).Events!, 0))
			}
			await zap.Logger.prototype.Debug.call((wtp$ as workflowTaskPoller).logger, "workflowTaskPoller::Poll Succeed", $.arrayToSlice<zap.Field>([zap.Int64("StartedEventID", (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(response))), zap.Int64("Attempt", (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetAttempt() : s.PollForDecisionTaskResponse.prototype.GetAttempt.call(response))), zap.Int64("FirstEventID", firstEventID), zap.Bool("IsQueryTask", (response$ as s.PollForDecisionTaskResponse).Query != null)]))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		let metricsScope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wtp$ as workflowTaskPoller).metricsScope, $.arrayToSlice<string>(["WorkflowType", s.WorkflowType.prototype.GetName.call((response$ as s.PollForDecisionTaskResponse).WorkflowType)]))
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.DecisionPollSucceedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await metrics.EmitLatency(metricsScope, metrics.DecisionPollLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(startTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())

		let scheduledToStartLatency = $.int64($.int64Sub((response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetStartedTimestamp() : s.PollForDecisionTaskResponse.prototype.GetStartedTimestamp.call(response)), (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetScheduledTimestamp() : s.PollForDecisionTaskResponse.prototype.GetScheduledTimestamp.call(response))))
		await metrics.EmitLatency(metricsScope, metrics.DecisionScheduledToStartLatency, scheduledToStartLatency, ($.pointerValue<metrics.SubsettableHistogram>(metrics.High1ms24h)).clone())
		return [$.interfaceValue(task, "*internal.workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")), null]
	}

	public async processResetStickinessTask(rst: __goscript_internal_task_handlers.resetStickinessTask | $.VarRef<__goscript_internal_task_handlers.resetStickinessTask> | null): globalThis.Promise<$.GoError> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		const rst$: __goscript_internal_task_handlers.resetStickinessTask = rst == null ? $.pointerTarget<__goscript_internal_task_handlers.resetStickinessTask>(rst) : (rst as any).__isVarRef === true ? (rst as any).value : (rst as any).__goValue === undefined ? (rst as any) : $.pointerTarget<__goscript_internal_task_handlers.resetStickinessTask>(rst)
		let __goscriptTuple4: any = await __goscript_internal_utils.newChannelContext(context.Background(), ((wtp$ as workflowTaskPoller).featureFlags).clone(), null)
		let tchCtx = __goscriptTuple4[0]
		let cancel = __goscriptTuple4[1]
		let opt: $.Slice<yarpc.CallOption> = __goscriptTuple4[2]
		const __goscriptDeferCallee1 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.StickyCacheEvict))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [, err] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wtp$ as workflowTaskPoller).service).ResetStickyTaskList(tchCtx, (rst$ as __goscript_internal_task_handlers.resetStickinessTask).task, opt)
			if (err != null) {
				await zap.Logger.prototype.Warn.call((wtp$ as workflowTaskPoller).logger, "ResetStickyTaskList failed", $.arrayToSlice<zap.Field>([zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<s.ResetStickyTaskListRequest>((rst$ as __goscript_internal_task_handlers.resetStickinessTask).task).Execution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call($.pointerValue<s.ResetStickyTaskListRequest>((rst$ as __goscript_internal_task_handlers.resetStickinessTask).task).Execution)), zap.Error(err)]))
				return err
			}
		}

		return null
	}

	public async processWorkflowTask(task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null): globalThis.Promise<$.GoError> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		using __defer = new $.DisposableStack()
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		if ($.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task == null) {
			// We didn't have task, poll might have timeout.
			await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
				await zap.Logger.prototype.Debug.call((wtp$ as workflowTaskPoller).logger, "Workflow task unavailable", null)
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return null
		}
		let doneCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		let laResultCh: $.Channel<localActivityResult | $.VarRef<localActivityResult> | null> | null = $.makeChannel<localActivityResult | $.VarRef<localActivityResult> | null>(0, null! as localActivityResult | $.VarRef<localActivityResult> | null, "both")
		// close doneCh so local activity worker won't get blocked forever when trying to send back result to laResultCh.
		const __goscriptDeferArg1 = doneCh
		__defer.defer(() => { __goscriptDeferArg1!.close() })

		while (true) {
			let response: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = null! as s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null
			let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))
			$.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).doneCh = doneCh
			$.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).laResultCh = laResultCh
			// Process the task.
			let __goscriptTuple6: any = await $.pointerValue<Exclude<__goscript_internal_public.WorkflowTaskHandler, null>>((wtp$ as workflowTaskPoller).taskHandler).ProcessWorkflowTask(task, $.functionValue(async (response: any, startTime: time.Time): globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]> => {
				await zap.Logger.prototype.Debug.call((wtp$ as workflowTaskPoller).logger, "Force RespondDecisionTaskCompleted.", $.arrayToSlice<zap.Field>([zap.Int64("TaskStartedEventID", s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call($.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task))]))
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionTaskForceCompleted))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let __goscriptTuple5: any = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).RespondTaskCompletedWithMetrics(response, null, $.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task, startTime) : workflowTaskPoller.prototype.RespondTaskCompletedWithMetrics.call(wtp, response, null, $.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task, startTime))
				let heartbeatResponse: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple5[0]
				let __goscriptShadow2 = __goscriptTuple5[1]
				let heartbeatResponse$: s.RespondDecisionTaskCompletedResponse = heartbeatResponse == null ? $.pointerTarget<s.RespondDecisionTaskCompletedResponse>(heartbeatResponse) : (heartbeatResponse as any).__isVarRef === true ? (heartbeatResponse as any).value : (heartbeatResponse as any).__goValue === undefined ? (heartbeatResponse as any) : $.pointerTarget<s.RespondDecisionTaskCompletedResponse>(heartbeatResponse)
				if (__goscriptShadow2 != null) {
					return [null, __goscriptShadow2]
				}
				if ((heartbeatResponse == null) || ((heartbeatResponse$ as s.RespondDecisionTaskCompletedResponse).DecisionTask == null)) {
					return [null, null]
				}
				let __goscriptShadow3: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).toWorkflowTask((heartbeatResponse$ as s.RespondDecisionTaskCompletedResponse).DecisionTask) : workflowTaskPoller.prototype.toWorkflowTask.call(wtp, (heartbeatResponse$ as s.RespondDecisionTaskCompletedResponse).DecisionTask))
				$.pointerValue<__goscript_internal_task_handlers.workflowTask>(__goscriptShadow3).doneCh = doneCh
				$.pointerValue<__goscript_internal_task_handlers.workflowTask>(__goscriptShadow3).laResultCh = laResultCh
				return [__goscriptShadow3, null]
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)))
			let completedRequest = __goscriptTuple6[0]
			let err = __goscriptTuple6[1]
			if ((completedRequest == null) && (err == null)) {
				return null
			}
			if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue($.varRef<__goscript_internal_task_handlers.decisionHeartbeatError | $.VarRef<__goscript_internal_task_handlers.decisionHeartbeatError> | null>(null! as __goscript_internal_task_handlers.decisionHeartbeatError | $.VarRef<__goscript_internal_task_handlers.decisionHeartbeatError> | null), "**internal.decisionHeartbeatError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("internal.decisionHeartbeatError"))))) {
				return err
			}
			let __goscriptTuple7: any = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).RespondTaskCompletedWithMetrics(completedRequest, err, $.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task, startTime) : workflowTaskPoller.prototype.RespondTaskCompletedWithMetrics.call(wtp, completedRequest, err, $.pointerValue<__goscript_internal_task_handlers.workflowTask>(task).task, startTime))
			response = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return err
			}

			if ((response == null) || ($.pointerValue<s.RespondDecisionTaskCompletedResponse>(response).DecisionTask == null)) {
				return null
			}

			// we are getting new decision task, so reset the workflowTask and continue process the new one
			task = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).toWorkflowTask($.pointerValue<s.RespondDecisionTaskCompletedResponse>(response).DecisionTask) : workflowTaskPoller.prototype.toWorkflowTask.call(wtp, $.pointerValue<s.RespondDecisionTaskCompletedResponse>(response).DecisionTask))
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async release(kind: s.TaskListKind): globalThis.Promise<void> {
		let wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		if ((wtp$ as workflowTaskPoller).disableStickyExecution) {
			return
		}

		await (wtp$ as workflowTaskPoller).requestLock.Lock()
		if (kind == 1) {
			;(wtp$ as workflowTaskPoller).pendingStickyPollCount--
		} else {
			;(wtp$ as workflowTaskPoller).pendingRegularPollCount--
		}
		void (wtp$ as workflowTaskPoller).requestLock.Unlock()
	}

	public async respondTaskCompleted(completedRequest: any, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null): globalThis.Promise<[s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		let response: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = null! as s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null
		let err: $.GoError = null! as $.GoError
		let ctx = context.Background()
		// Respond task completion.
		err = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			let __goscriptTuple8: any = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).respondTaskCompletedAttempt(completedRequest, task) : workflowTaskPoller.prototype.respondTaskCompletedAttempt.call(wtp, completedRequest, task))
			response = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			return err
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		return [response, err]
	}

	public async respondTaskCompletedAttempt(completedRequest: any, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null): globalThis.Promise<[s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		let __goscriptTuple9: any = await __goscript_internal_utils.newChannelContext(context.Background(), ((wtp$ as workflowTaskPoller).featureFlags).clone(), null)
		let ctx = __goscriptTuple9[0]
		let cancel = __goscriptTuple9[1]
		let opts: $.Slice<yarpc.CallOption> = __goscriptTuple9[2]
		const __goscriptDeferCallee2 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		let err: $.GoError = null! as $.GoError
		let response: s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null = null! as s.RespondDecisionTaskCompletedResponse | $.VarRef<s.RespondDecisionTaskCompletedResponse> | null
		let operation: string = ""
		{
			const __goscriptTypeSwitchValue = completedRequest
			switch (true) {
				case $.typeAssert<s.RespondDecisionTaskFailedRequest | $.VarRef<s.RespondDecisionTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")).ok:
					{
						let request: s.RespondDecisionTaskFailedRequest | $.VarRef<s.RespondDecisionTaskFailedRequest> | null = $.typeAssert<s.RespondDecisionTaskFailedRequest | $.VarRef<s.RespondDecisionTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")).value
						err = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).handleDecisionFailedRequest(ctx, task, request, opts) : workflowTaskPoller.prototype.handleDecisionFailedRequest.call(wtp, ctx, task, request, opts))
						operation = "RespondDecisionTaskFailed"
					}
					break
				case $.typeAssert<s.RespondDecisionTaskCompletedRequest | $.VarRef<s.RespondDecisionTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")).ok:
					{
						let request: s.RespondDecisionTaskCompletedRequest | $.VarRef<s.RespondDecisionTaskCompletedRequest> | null = $.typeAssert<s.RespondDecisionTaskCompletedRequest | $.VarRef<s.RespondDecisionTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")).value
						let __goscriptTuple10: any = await (wtp !== null && (wtp as any).__isVarRef !== true && (wtp as any).__goValue === undefined ? ((wtp as any) as workflowTaskPoller).handleDecisionTaskCompletedRequest(ctx, task, request, opts) : workflowTaskPoller.prototype.handleDecisionTaskCompletedRequest.call(wtp, ctx, task, request, opts))
						response = __goscriptTuple10[0]
						err = __goscriptTuple10[1]
						operation = "RespondDecisionTaskCompleted"
					}
					break
				case $.typeAssert<s.RespondQueryTaskCompletedRequest | $.VarRef<s.RespondQueryTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")).ok:
					{
						let request: s.RespondQueryTaskCompletedRequest | $.VarRef<s.RespondQueryTaskCompletedRequest> | null = $.typeAssert<s.RespondQueryTaskCompletedRequest | $.VarRef<s.RespondQueryTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")).value
						err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wtp$ as workflowTaskPoller).service).RespondQueryTaskCompleted(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						operation = "RespondQueryTaskCompleted"
					}
					break
				default:
					{
						let request: any = __goscriptTypeSwitchValue
						$.panic("unknown request type from ProcessWorkflowTask()")
					}
					break
			}
		}

		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			if (err != null) {
				await zap.Logger.prototype.Debug.call((wtp$ as workflowTaskPoller).logger, await fmt.Sprintf("%s failed.", operation), $.arrayToSlice<zap.Field>([zap.Error(err)]))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		return [response, err]
	}

	public async toWorkflowTask(response: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null): globalThis.Promise<__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null> {
		const wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		const response$: s.PollForDecisionTaskResponse = response == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(response)
		let startEventID = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(response))
		let nextEventID = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetNextEventId() : s.PollForDecisionTaskResponse.prototype.GetNextEventId.call(response))
		if ((nextEventID != 0n) && (startEventID != 0n)) {
			// first case is for normal decision, the second is for transient decision
			if ((($.int64Sub(nextEventID, 1n)) != startEventID) && (($.int64Add(nextEventID, 1n)) != startEventID)) {
				await zap.Logger.prototype.Warn.call((wtp$ as workflowTaskPoller).logger, "Invalid PollForDecisionTaskResponse, nextEventID doesn't match startedEventID", $.arrayToSlice<zap.Field>([zap.Int64("StartedEventID", startEventID), zap.Int64("NextEventID", nextEventID)]))
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((wtp$ as workflowTaskPoller).metricsScope).Scope).Counter(metrics.DecisionPollInvalidCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				// in transient decision case, set nextEventID to be one more than startEventID in case
				// we can need to use the field to truncate history for decision task (check comments in newGetHistoryPageFunc)
				// this is safe as
				// - currently we are not using nextEventID for decision task
				// - for query task, startEventID is not assigned, so we won't reach here.
				nextEventID = $.int64Add(startEventID, 1n)
			}
		}
		let historyIterator: historyIteratorImpl | $.VarRef<historyIteratorImpl> | null = new historyIteratorImpl({nextPageToken: (response$ as s.PollForDecisionTaskResponse).NextPageToken, execution: (response$ as s.PollForDecisionTaskResponse).WorkflowExecution, domain: (wtp$ as workflowTaskPoller).domain, service: (wtp$ as workflowTaskPoller).service, metricsScope: $.interfaceValue<tally.Scope | null>((wtp$ as workflowTaskPoller).metricsScope, "*metrics.TaggedScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope")), startedEventID: startEventID, maxEventID: $.int64Sub(nextEventID, 1n), featureFlags: (wtp$ as workflowTaskPoller).featureFlags})
		let task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null = (() => { const __goscriptLiteralField13 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForDecisionTaskResponse).GetAutoConfigHint() : s.PollForDecisionTaskResponse.prototype.GetAutoConfigHint.call(response)); return new __goscript_internal_task_handlers.workflowTask({task: response, historyIterator: $.interfaceValue<__goscript_internal_public.HistoryIterator | null>(historyIterator, "*internal.historyIteratorImpl", /* @__PURE__ */ $.pointerType("internal.historyIteratorImpl")), autoConfigHint: __goscriptLiteralField13}) })()
		return task
	}

	public async updateBacklog(taskListKind: s.TaskListKind, backlogCountHint: bigint): globalThis.Promise<void> {
		let wtp: workflowTaskPoller | $.VarRef<workflowTaskPoller> | null = this;
		const wtp$: workflowTaskPoller = wtp == null ? $.pointerTarget<workflowTaskPoller>(wtp) : (wtp as any).__isVarRef === true ? (wtp as any).value : (wtp as any).__goValue === undefined ? (wtp as any) : $.pointerTarget<workflowTaskPoller>(wtp)
		if ((taskListKind == 0) || (wtp$ as workflowTaskPoller).disableStickyExecution) {
			// we only care about sticky backlog for now.
			return
		}
		await (wtp$ as workflowTaskPoller).requestLock.Lock();
		;(wtp$ as workflowTaskPoller).stickyBacklog = backlogCountHint
		void (wtp$ as workflowTaskPoller).requestLock.Unlock()
	}

	public async doPoll(featureFlags: any, pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).doPoll(featureFlags, pollFunc)
	}

	public async shuttingDown(): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).shuttingDown()
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowTaskPoller",
		() => new workflowTaskPoller(),
		() => [$.methodSignature("PollTask", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("ProcessTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("RespondTaskCompletedWithMetrics", [["completedRequest", { kind: $.TypeKind.Interface, methods: [] }], ["taskErr", "error"], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["startTime", "time.Time"]], [["response", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse")], ["err", "error"]], true), $.methodSignature("getNextPollRequest", [], [["request", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")]], true), $.methodSignature("handleDecisionFailedRequest", [["ctx", "context.Context"], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("handleDecisionTaskCompletedRequest", [["ctx", "context.Context"], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["response", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse")], ["err", "error"]], true), $.methodSignature("poll", [["ctx", "context.Context"]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("processResetStickinessTask", [["rst", /* @__PURE__ */ $.pointerType("internal.resetStickinessTask")]], ["error"], true), $.methodSignature("processWorkflowTask", [["task", /* @__PURE__ */ $.pointerType("internal.workflowTask")]], ["error"], true), $.methodSignature("release", [["kind", /* @__PURE__ */ $.basicType("int32", "shared.TaskListKind")]], [], true), $.methodSignature("respondTaskCompleted", [["completedRequest", { kind: $.TypeKind.Interface, methods: [] }], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]], [["response", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse")], ["err", "error"]], true), $.methodSignature("respondTaskCompletedAttempt", [["completedRequest", { kind: $.TypeKind.Interface, methods: [] }], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]], [/* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse"), "error"], true), $.methodSignature("toWorkflowTask", [["response", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]], [/* @__PURE__ */ $.pointerType("internal.workflowTask")], true), $.methodSignature("updateBacklog", [["taskListKind", /* @__PURE__ */ $.basicType("int32", "shared.TaskListKind")], ["backlogCountHint", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("doPoll", [["featureFlags", "internal.FeatureFlags"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("shuttingDown", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		workflowTaskPoller,
		() => [/* @__PURE__ */ $.structField("basePoller", "internal.basePoller", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskListName", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [4], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskHandler", "internal.WorkflowTaskHandler", [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("ldaTunnel", "internal.localDispatcher", [6], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [7], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [8], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stickyTaskList", /* @__PURE__ */ $.basicType("string"), [9], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("disableStickyExecution", /* @__PURE__ */ $.basicType("bool"), [10], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("StickyScheduleToStartTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [11], 144, true), /* @__PURE__ */ $.structField("pendingRegularPollCount", /* @__PURE__ */ $.basicType("int"), [12], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pendingStickyPollCount", /* @__PURE__ */ $.basicType("int"), [13], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stickyBacklog", /* @__PURE__ */ $.basicType("int64"), [14], 168, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("requestLock", "sync.Mutex", [15], 176, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [16], 184, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityTaskPoller {
	public get basePoller(): basePoller {
		return this._fields.basePoller
	}

	public set basePoller(value: basePoller) {
		this._fields.basePoller = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get taskList(): s.TaskList | $.VarRef<s.TaskList> | null {
		return this._fields.taskList
	}

	public set taskList(value: s.TaskList | $.VarRef<s.TaskList> | null) {
		this._fields.taskList = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get taskHandler(): __goscript_internal_public.ActivityTaskHandler | null {
		return this._fields.taskHandler
	}

	public set taskHandler(value: __goscript_internal_public.ActivityTaskHandler | null) {
		this._fields.taskHandler = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get activitiesPerSecond(): number {
		return this._fields.activitiesPerSecond
	}

	public set activitiesPerSecond(value: number) {
		this._fields.activitiesPerSecond = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		basePoller: basePoller
		domain: string
		taskList: s.TaskList | $.VarRef<s.TaskList> | null
		identity: string
		service: workflowserviceclient.Interface | null
		taskHandler: __goscript_internal_public.ActivityTaskHandler | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		activitiesPerSecond: number
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{basePoller?: basePoller, domain?: string, taskList?: s.TaskList | $.VarRef<s.TaskList> | null, identity?: string, service?: workflowserviceclient.Interface | null, taskHandler?: __goscript_internal_public.ActivityTaskHandler | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, activitiesPerSecond?: number, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			basePoller: init?.basePoller ? init.basePoller.clone() : new basePoller(undefined, true),
			domain: init?.domain ?? ("" as string),
			taskList: init?.taskList ?? (null! as s.TaskList | $.VarRef<s.TaskList> | null),
			identity: init?.identity ?? ("" as string),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			taskHandler: init?.taskHandler ?? (null! as __goscript_internal_public.ActivityTaskHandler | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			activitiesPerSecond: init?.activitiesPerSecond ?? (0 as number),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityTaskPoller {
		return new activityTaskPoller(this, true)
	}

	public __goscriptAssign(source: activityTaskPoller): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.basePoller, values.basePoller)
		target.domain = values.domain
		target.taskList = values.taskList
		target.identity = values.identity
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.taskHandler = $.assignFieldValue(target.taskHandler, values.taskHandler, "internal.ActivityTaskHandler")
		target.metricsScope = values.metricsScope
		target.logger = values.logger
		target.activitiesPerSecond = values.activitiesPerSecond
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async PollTask(): globalThis.Promise<[any, $.GoError]> {
		const atp: activityTaskPoller | $.VarRef<activityTaskPoller> | null = this;
		// Get the task.
		let [__goscriptShadow4, err] = await $.pointerValue<activityTaskPoller>(atp).basePoller.doPoll(($.pointerValue<activityTaskPoller>(atp).featureFlags).clone(), await activityTaskPoller.prototype.pollWithMetricsFunc.call(atp, $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.poll(ctx))($.pointerValue<activityTaskPoller>(atp)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*activityTaskPoller).poll-fm")))
		if (err != null) {
			return [null, err]
		}
		return [__goscriptShadow4, null]
	}

	public async ProcessTask(task: any): globalThis.Promise<$.GoError> {
		const atp: activityTaskPoller | $.VarRef<activityTaskPoller> | null = this;
		const atp$: activityTaskPoller = atp == null ? $.pointerTarget<activityTaskPoller>(atp) : (atp as any).__isVarRef === true ? (atp as any).value : (atp as any).__goValue === undefined ? (atp as any) : $.pointerTarget<activityTaskPoller>(atp)
		if (await (atp$ as activityTaskPoller).basePoller.shuttingDown()) {
			return __goscript_internal_worker_base.errShutdown
		}

		let __goscriptShadow5: __goscript_internal_task_handlers.activityTask | $.VarRef<__goscript_internal_task_handlers.activityTask> | null = ((task as any)?.__goType === "*internal.activityTask" && (task as any).__goValue === undefined && (task as any).__isTypedNil !== true ? ((task as any) as __goscript_internal_task_handlers.activityTask | $.VarRef<__goscript_internal_task_handlers.activityTask> | null) : $.mustTypeAssert<__goscript_internal_task_handlers.activityTask | $.VarRef<__goscript_internal_task_handlers.activityTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.activityTask")))
		if ($.pointerValue<__goscript_internal_task_handlers.activityTask>(__goscriptShadow5).task == null) {
			// We didn't have task, poll might have timeout.
			await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
				await zap.Logger.prototype.Debug.call((atp$ as activityTaskPoller).logger, "Activity task unavailable", null)
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return null
		}

		let workflowType = s.WorkflowType.prototype.GetName.call($.pointerValue<s.PollForActivityTaskResponse>($.pointerValue<__goscript_internal_task_handlers.activityTask>(__goscriptShadow5).task).WorkflowType)
		let activityType = s.ActivityType.prototype.GetName.call($.pointerValue<s.PollForActivityTaskResponse>($.pointerValue<__goscript_internal_task_handlers.activityTask>(__goscriptShadow5).task).ActivityType)
		let metricsScope = await __goscript_internal_utils.getMetricsScopeForActivity((atp$ as activityTaskPoller).metricsScope, workflowType, activityType)

		let executionStartTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		// Process the activity task.
		let [request, err] = await $.pointerValue<Exclude<__goscript_internal_public.ActivityTaskHandler, null>>((atp$ as activityTaskPoller).taskHandler).Execute(s.TaskList.prototype.GetName.call((atp$ as activityTaskPoller).taskList), $.pointerValue<__goscript_internal_task_handlers.activityTask>(__goscriptShadow5).task)
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityExecutionFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return err
		}
		await metrics.EmitLatency(metricsScope, metrics.ActivityExecutionLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(executionStartTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.High1ms24h)).clone())

		if ($.comparableEqual(request, __goscript_error.ErrActivityResultPending)) {
			return null
		}

		// if worker is shutting down, don't bother reporting activity completion
		if (await (atp$ as activityTaskPoller).basePoller.shuttingDown()) {
			return __goscript_internal_worker_base.errShutdown
		}

		let responseStartTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		let reportErr = await reportActivityComplete(context.Background(), (atp$ as activityTaskPoller).service, request, metricsScope, ((atp$ as activityTaskPoller).featureFlags).clone())
		if (reportErr != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityResponseFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
				await zap.Logger.prototype.Debug.call((atp$ as activityTaskPoller).logger, "reportActivityComplete failed", $.arrayToSlice<zap.Field>([zap.Error(reportErr)]))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return reportErr
		}

		await metrics.EmitLatency(metricsScope, metrics.ActivityResponseLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(responseStartTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())
		await metrics.EmitLatency(metricsScope, metrics.ActivityEndToEndLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_internal_task_handlers.activityTask>(__goscriptShadow5).pollStartTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.High1ms24h)).clone())
		return null
	}

	public async poll(ctx: context.Context | null): globalThis.Promise<[s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]> {
		const atp: activityTaskPoller | $.VarRef<activityTaskPoller> | null = this;
		const atp$: activityTaskPoller = atp == null ? $.pointerTarget<activityTaskPoller>(atp) : (atp as any).__isVarRef === true ? (atp as any).value : (atp as any).__goValue === undefined ? (atp as any) : $.pointerTarget<activityTaskPoller>(atp)

		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as activityTaskPoller).metricsScope).Scope).Counter(metrics.ActivityPollCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))

		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			await zap.Logger.prototype.Debug.call((atp$ as activityTaskPoller).logger, "activityTaskPoller::Poll", null)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		let request: s.PollForActivityTaskRequest | $.VarRef<s.PollForActivityTaskRequest> | null = (() => { const __goscriptLiteralField14 = common.StringPtr((atp$ as activityTaskPoller).domain); const __goscriptLiteralField15 = common.StringPtr((atp$ as activityTaskPoller).identity); return new s.PollForActivityTaskRequest({Domain: __goscriptLiteralField14, TaskList: (atp$ as activityTaskPoller).taskList, Identity: __goscriptLiteralField15, TaskListMetadata: new s.TaskListMetadata({MaxTasksPerSecond: $.fieldRef((atp$ as activityTaskPoller)._fields, "activitiesPerSecond")})}) })()
		let __goscriptTuple11: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((atp$ as activityTaskPoller).service).PollForActivityTask(ctx, request, await __goscript_internal_utils.getYarpcCallOptions(((atp$ as activityTaskPoller).featureFlags).clone()))
		let response: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]

		if (err != null) {
			let retryable = __goscript_internal_retry.isServiceTransientError(err)
			if (retryable) {

				{
					let target: $.VarRef<s.ServiceBusyError | $.VarRef<s.ServiceBusyError> | null> = $.varRef(null)
					if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.ServiceBusyError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.ServiceBusyError"))))) {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as activityTaskPoller).metricsScope).Scope).Tagged($.makeMap<string, string>([["pollerrorcause", "serviceBusy"]])))).Counter(metrics.ActivityPollTransientFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as activityTaskPoller).metricsScope).Scope).Counter(metrics.ActivityPollTransientFailedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as activityTaskPoller).metricsScope).Scope).Counter(metrics.ActivityPollFailedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			// pause for the retry delay if present.
			// failures also have an exponential backoff, implemented at a higher level,
			// but this ensures a minimum is respected.
			let retryAfter = backoff2.ErrRetryableAfter(err)
			if (retryAfter > 0n) {
				let t: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(retryAfter)
				const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]>([
					{
						id: 0,
						isSend: false,
						channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect3Result) => {
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(t))
						}
					},
					{
						id: 1,
						isSend: false,
						channel: $.pointerValue<time.Timer>(t).C,
					}
				], false)
				if (__goscriptSelect3HasReturn) {
					return __goscriptSelect3Value
				}
			}

			return [null, $.markAsStructValue($.cloneStructValue(startTime)), err]
		}
		if ((response == null) || ($.sliceLen($.pointerValue<s.PollForActivityTaskResponse>(response).TaskToken) == 0)) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as activityTaskPoller).metricsScope).Scope).Counter(metrics.ActivityPollNoTaskCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [response, $.markAsStructValue($.cloneStructValue(startTime)), null]
		}

		return [response, $.markAsStructValue($.cloneStructValue(startTime)), err]
	}

	public async pollWithMetrics(ctx: context.Context | null, pollFunc: ((ctx: context.Context | null) => [s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError] | globalThis.Promise<[s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]>) | null): globalThis.Promise<[any, $.GoError]> {
		const atp: activityTaskPoller | $.VarRef<activityTaskPoller> | null = this;

		let __goscriptTuple12: any = await pollFunc!(ctx)
		let response: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null = __goscriptTuple12[0]
		let startTime = __goscriptTuple12[1]
		let err = __goscriptTuple12[2]
		let response$: s.PollForActivityTaskResponse = response == null ? $.pointerTarget<s.PollForActivityTaskResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<s.PollForActivityTaskResponse>(response)
		if (err != null) {
			return [null, err]
		}
		if ((response == null) || ($.sliceLen((response$ as s.PollForActivityTaskResponse).TaskToken) == 0)) {
			return [$.interfaceValue((() => { const __goscriptLiteralField16 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForActivityTaskResponse).GetAutoConfigHint() : s.PollForActivityTaskResponse.prototype.GetAutoConfigHint.call(response)); return new __goscript_internal_task_handlers.activityTask({autoConfigHint: __goscriptLiteralField16}) })(), "*internal.activityTask", /* @__PURE__ */ $.pointerType("internal.activityTask")), null]
		}

		let workflowType = s.WorkflowType.prototype.GetName.call((response$ as s.PollForActivityTaskResponse).WorkflowType)
		let activityType = s.ActivityType.prototype.GetName.call((response$ as s.PollForActivityTaskResponse).ActivityType)
		let metricsScope = await __goscript_internal_utils.getMetricsScopeForActivity($.pointerValue<activityTaskPoller>(atp).metricsScope, workflowType, activityType)
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityPollSucceedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await metrics.EmitLatency(metricsScope, metrics.ActivityPollLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(startTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())

		let scheduledToStartLatency = $.int64($.int64Sub((response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForActivityTaskResponse).GetStartedTimestamp() : s.PollForActivityTaskResponse.prototype.GetStartedTimestamp.call(response)), (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForActivityTaskResponse).GetScheduledTimestampOfThisAttempt() : s.PollForActivityTaskResponse.prototype.GetScheduledTimestampOfThisAttempt.call(response))))
		await metrics.EmitLatency(metricsScope, metrics.ActivityScheduledToStartLatency, scheduledToStartLatency, ($.pointerValue<metrics.SubsettableHistogram>(metrics.High1ms24h)).clone())

		return [$.interfaceValue((() => { const __goscriptLiteralField17 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.PollForActivityTaskResponse).GetAutoConfigHint() : s.PollForActivityTaskResponse.prototype.GetAutoConfigHint.call(response)); return new __goscript_internal_task_handlers.activityTask({task: response, pollStartTime: $.markAsStructValue($.cloneStructValue(startTime)), autoConfigHint: __goscriptLiteralField17}) })(), "*internal.activityTask", /* @__PURE__ */ $.pointerType("internal.activityTask")), null]
	}

	public async pollWithMetricsFunc(pollFunc: ((ctx: context.Context | null) => [s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError] | globalThis.Promise<[s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]>) | null): globalThis.Promise<((ctx: context.Context | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null> {
		const atp: activityTaskPoller | $.VarRef<activityTaskPoller> | null = this;
		return $.functionValue(async (ctx: context.Context | null): globalThis.Promise<[any, $.GoError]> => {
			return await (atp !== null && (atp as any).__isVarRef !== true && (atp as any).__goValue === undefined ? ((atp as any) as activityTaskPoller).pollWithMetrics(ctx, pollFunc) : activityTaskPoller.prototype.pollWithMetrics.call(atp, ctx, pollFunc))
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))
	}

	public async doPoll(featureFlags: any, pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).doPoll(featureFlags, pollFunc)
	}

	public async shuttingDown(): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).shuttingDown()
	}

	static __typeInfo = $.registerStructType(
		"internal.activityTaskPoller",
		() => new activityTaskPoller(),
		() => [$.methodSignature("PollTask", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("ProcessTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("poll", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"], true), $.methodSignature("pollWithMetrics", [["ctx", "context.Context"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("pollWithMetricsFunc", [["pollFunc", ({ kind: $.TypeKind.Function, name: "internal.pollFunc", params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo)]], [({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], true), $.methodSignature("doPoll", [["featureFlags", "internal.FeatureFlags"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("shuttingDown", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		activityTaskPoller,
		() => [/* @__PURE__ */ $.structField("basePoller", "internal.basePoller", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskList", /* @__PURE__ */ $.pointerType("shared.TaskList"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskHandler", "internal.ActivityTaskHandler", [5], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [7], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activitiesPerSecond", /* @__PURE__ */ $.basicType("float64"), [8], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [9], 104, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class locallyDispatchedActivityTaskPoller {
	public get activityTaskPoller(): activityTaskPoller {
		return this._fields.activityTaskPoller
	}

	public set activityTaskPoller(value: activityTaskPoller) {
		this._fields.activityTaskPoller = value
	}

	public get ldaTunnel(): locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null {
		return this._fields.ldaTunnel
	}

	public set ldaTunnel(value: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null) {
		this._fields.ldaTunnel = value
	}

	public _fields: {
		activityTaskPoller: activityTaskPoller
		ldaTunnel: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null
	}

	constructor(init?: Partial<{activityTaskPoller?: activityTaskPoller, ldaTunnel?: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			activityTaskPoller: init?.activityTaskPoller ? init.activityTaskPoller.clone() : new activityTaskPoller(undefined, true),
			ldaTunnel: init?.ldaTunnel ?? (null! as locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): locallyDispatchedActivityTaskPoller {
		return new locallyDispatchedActivityTaskPoller(this, true)
	}

	public __goscriptAssign(source: locallyDispatchedActivityTaskPoller): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.activityTaskPoller, values.activityTaskPoller)
		target.ldaTunnel = values.ldaTunnel
	}

	public async PollTask(): globalThis.Promise<[any, $.GoError]> {
		const atp: locallyDispatchedActivityTaskPoller | $.VarRef<locallyDispatchedActivityTaskPoller> | null = this;
		// Get the task.
		let [__goscriptShadow6, err] = await $.pointerValue<locallyDispatchedActivityTaskPoller>(atp).activityTaskPoller.basePoller.doPoll(($.pointerValue<locallyDispatchedActivityTaskPoller>(atp).activityTaskPoller.featureFlags).clone(), await $.pointerValue<locallyDispatchedActivityTaskPoller>(atp).activityTaskPoller.pollWithMetricsFunc($.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.pollLocallyDispatchedActivity(ctx))($.pointerValue<locallyDispatchedActivityTaskPoller>(atp)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*locallyDispatchedActivityTaskPoller).pollLocallyDispatchedActivity-fm")))
		if (err != null) {
			return [null, err]
		}

		return [__goscriptShadow6, null]
	}

	public async pollLocallyDispatchedActivity(ctx: context.Context | null): globalThis.Promise<[s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, time.Time, $.GoError]> {
		const atp: locallyDispatchedActivityTaskPoller | $.VarRef<locallyDispatchedActivityTaskPoller> | null = this;
		const atp$: locallyDispatchedActivityTaskPoller = atp == null ? $.pointerTarget<locallyDispatchedActivityTaskPoller>(atp) : (atp as any).__isVarRef === true ? (atp as any).value : (atp as any).__goValue === undefined ? (atp as any) : $.pointerTarget<locallyDispatchedActivityTaskPoller>(atp)
		let task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null = await locallyDispatchedActivityTunnel.prototype.getTask.call((atp$ as locallyDispatchedActivityTaskPoller).ldaTunnel)
		let task$: __goscript_internal_event_handlers.locallyDispatchedActivityTask = task == null ? $.pointerTarget<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(task)
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as locallyDispatchedActivityTaskPoller).activityTaskPoller.metricsScope).Scope).Counter(metrics.LocallyDispatchedActivityPollCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// consider to remove the poll latency metric for local dispatch as unnecessary
		let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		if (task == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as locallyDispatchedActivityTaskPoller).activityTaskPoller.metricsScope).Scope).Counter(metrics.LocallyDispatchedActivityPollNoTaskCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, $.markAsStructValue($.cloneStructValue(startTime)), null]
		}
		// to be backwards compatible, update total poll counter if optimization succeeded only
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as locallyDispatchedActivityTaskPoller).activityTaskPoller.metricsScope).Scope).Counter(metrics.ActivityPollCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<metrics.TaggedScope>((atp$ as locallyDispatchedActivityTaskPoller).activityTaskPoller.metricsScope).Scope).Counter(metrics.LocallyDispatchedActivityPollSucceedCounter))).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let response: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null = new s.PollForActivityTaskResponse()
		let response$: s.PollForActivityTaskResponse = response == null ? $.pointerTarget<s.PollForActivityTaskResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<s.PollForActivityTaskResponse>(response);
		;(response$ as s.PollForActivityTaskResponse).ActivityId = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).ActivityID;
		;(response$ as s.PollForActivityTaskResponse).ActivityType = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).ActivityType;
		;(response$ as s.PollForActivityTaskResponse).Header = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).Header;
		;(response$ as s.PollForActivityTaskResponse).Input = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).Input;
		;(response$ as s.PollForActivityTaskResponse).WorkflowExecution = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).WorkflowExecution;
		;(response$ as s.PollForActivityTaskResponse).ScheduledTimestampOfThisAttempt = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).ScheduledTimestampOfThisAttempt;
		;(response$ as s.PollForActivityTaskResponse).ScheduledTimestamp = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).ScheduledTimestamp;
		;(response$ as s.PollForActivityTaskResponse).ScheduleToCloseTimeoutSeconds = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).ScheduleToCloseTimeoutSeconds;
		;(response$ as s.PollForActivityTaskResponse).StartedTimestamp = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).StartedTimestamp;
		;(response$ as s.PollForActivityTaskResponse).StartToCloseTimeoutSeconds = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).StartToCloseTimeoutSeconds;
		;(response$ as s.PollForActivityTaskResponse).HeartbeatTimeoutSeconds = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).HeartbeatTimeoutSeconds;
		;(response$ as s.PollForActivityTaskResponse).TaskToken = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).TaskToken;
		;(response$ as s.PollForActivityTaskResponse).WorkflowType = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).WorkflowType;
		;(response$ as s.PollForActivityTaskResponse).WorkflowDomain = (task$ as __goscript_internal_event_handlers.locallyDispatchedActivityTask).WorkflowDomain;
		;(response$ as s.PollForActivityTaskResponse).Attempt = common.Int32Ptr(0)
		return [response, $.markAsStructValue($.cloneStructValue(startTime)), null]
	}

	public async ProcessTask(task: any): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).ProcessTask(task)
	}

	public async doPoll(featureFlags: any, pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).basePoller.doPoll(featureFlags, pollFunc)
	}

	public async poll(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).poll(ctx)
	}

	public async pollWithMetrics(ctx: any, pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).pollWithMetrics(ctx, pollFunc)
	}

	public async pollWithMetricsFunc(pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).pollWithMetricsFunc(pollFunc)
	}

	public async shuttingDown(): globalThis.Promise<any> {
		return await $.pointerValue<activityTaskPoller>(this.activityTaskPoller).basePoller.shuttingDown()
	}

	static __typeInfo = $.registerStructType(
		"internal.locallyDispatchedActivityTaskPoller",
		() => new locallyDispatchedActivityTaskPoller(),
		() => [$.methodSignature("PollTask", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("pollLocallyDispatchedActivity", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"], true), $.methodSignature("ProcessTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("doPoll", [["featureFlags", "internal.FeatureFlags"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("poll", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"], true), $.methodSignature("pollWithMetrics", [["ctx", "context.Context"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("pollWithMetricsFunc", [["pollFunc", ({ kind: $.TypeKind.Function, name: "internal.pollFunc", params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "time.Time", "error"] } as $.FunctionTypeInfo)]], [({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], true), $.methodSignature("shuttingDown", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		locallyDispatchedActivityTaskPoller,
		() => [/* @__PURE__ */ $.structField("activityTaskPoller", "internal.activityTaskPoller", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("ldaTunnel", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTunnel"), [1], 120, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class historyIteratorImpl {
	public get iteratorFunc(): ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null {
		return this._fields.iteratorFunc
	}

	public set iteratorFunc(value: ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null) {
		this._fields.iteratorFunc = value
	}

	public get execution(): s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null {
		return this._fields.execution
	}

	public set execution(value: s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null) {
		this._fields.execution = value
	}

	public get nextPageToken(): $.Slice<number> {
		return this._fields.nextPageToken
	}

	public set nextPageToken(value: $.Slice<number>) {
		this._fields.nextPageToken = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get metricsScope(): tally.Scope | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: tally.Scope | null) {
		this._fields.metricsScope = value
	}

	public get startedEventID(): bigint {
		return this._fields.startedEventID
	}

	public set startedEventID(value: bigint) {
		this._fields.startedEventID = value
	}

	public get maxEventID(): bigint {
		return this._fields.maxEventID
	}

	public set maxEventID(value: bigint) {
		this._fields.maxEventID = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		iteratorFunc: ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null
		execution: s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null
		nextPageToken: $.Slice<number>
		domain: string
		service: workflowserviceclient.Interface | null
		metricsScope: tally.Scope | null
		startedEventID: bigint
		maxEventID: bigint
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{iteratorFunc?: ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null, execution?: s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null, nextPageToken?: $.Slice<number>, domain?: string, service?: workflowserviceclient.Interface | null, metricsScope?: tally.Scope | null, startedEventID?: bigint, maxEventID?: bigint, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			iteratorFunc: init?.iteratorFunc ?? (null! as ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null),
			execution: init?.execution ?? (null! as s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null),
			nextPageToken: init?.nextPageToken ?? (null! as $.Slice<number>),
			domain: init?.domain ?? ("" as string),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			startedEventID: init?.startedEventID ?? (0n as bigint),
			maxEventID: init?.maxEventID ?? (0n as bigint),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): historyIteratorImpl {
		return new historyIteratorImpl(this, true)
	}

	public __goscriptAssign(source: historyIteratorImpl): void {
		const target = this._fields
		const values = source._fields
		target.iteratorFunc = values.iteratorFunc
		target.execution = values.execution
		target.nextPageToken = values.nextPageToken
		target.domain = values.domain
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.startedEventID = values.startedEventID
		target.maxEventID = values.maxEventID
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public GetHistoryCount(): bigint {
		const h: historyIteratorImpl | $.VarRef<historyIteratorImpl> | null = this;
		return $.pointerValue<historyIteratorImpl>(h).maxEventID
	}

	public async GetNextPage(): globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.GoError]> {
		let h: historyIteratorImpl | $.VarRef<historyIteratorImpl> | null = this;
		const h$: historyIteratorImpl = h == null ? $.pointerTarget<historyIteratorImpl>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<historyIteratorImpl>(h)
		if ((h$ as historyIteratorImpl).iteratorFunc == null) {
			;(h$ as historyIteratorImpl).iteratorFunc = newGetHistoryPageFunc(context.Background(), (h$ as historyIteratorImpl).service, (h$ as historyIteratorImpl).domain, (h$ as historyIteratorImpl).execution, (h$ as historyIteratorImpl).startedEventID, (h$ as historyIteratorImpl).maxEventID, (h$ as historyIteratorImpl).metricsScope, ((h$ as historyIteratorImpl).featureFlags).clone())
		}

		let __goscriptTuple13: any = await (h$ as historyIteratorImpl).iteratorFunc!((h$ as historyIteratorImpl).nextPageToken)
		let __goscriptShadow7: s.History | $.VarRef<s.History> | null = __goscriptTuple13[0]
		let token: $.Slice<number> = __goscriptTuple13[1]
		let err = __goscriptTuple13[2]
		if (err != null) {
			return [null, err]
		}
		;(h$ as historyIteratorImpl).nextPageToken = token
		return [__goscriptShadow7, null]
	}

	public HasNextPage(): boolean {
		const h: historyIteratorImpl | $.VarRef<historyIteratorImpl> | null = this;
		return $.pointerValue<historyIteratorImpl>(h).nextPageToken != null
	}

	public Reset(): void {
		let h: historyIteratorImpl | $.VarRef<historyIteratorImpl> | null = this;
		$.pointerValue<historyIteratorImpl>(h).nextPageToken = null
	}

	static __typeInfo = $.registerStructType(
		"internal.historyIteratorImpl",
		() => new historyIteratorImpl(),
		() => [$.methodSignature("GetHistoryCount", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetNextPage", [], [/* @__PURE__ */ $.pointerType("shared.History"), "error"], true), $.methodSignature("HasNextPage", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Reset", [], [], true)],
		historyIteratorImpl,
		() => [/* @__PURE__ */ $.structField("iteratorFunc", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("shared.History"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("execution", /* @__PURE__ */ $.pointerType("shared.WorkflowExecution"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [4], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startedEventID", /* @__PURE__ */ $.basicType("int64"), [6], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("maxEventID", /* @__PURE__ */ $.basicType("int64"), [7], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [8], 104, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityTaskPoller {
	public get basePoller(): basePoller {
		return this._fields.basePoller
	}

	public set basePoller(value: basePoller) {
		this._fields.basePoller = value
	}

	public get handler(): localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null {
		return this._fields.handler
	}

	public set handler(value: localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null) {
		this._fields.handler = value
	}

	public get metricsScope(): tally.Scope | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: tally.Scope | null) {
		this._fields.metricsScope = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get laTunnel(): localActivityTunnel | $.VarRef<localActivityTunnel> | null {
		return this._fields.laTunnel
	}

	public set laTunnel(value: localActivityTunnel | $.VarRef<localActivityTunnel> | null) {
		this._fields.laTunnel = value
	}

	public _fields: {
		basePoller: basePoller
		handler: localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null
		metricsScope: tally.Scope | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		laTunnel: localActivityTunnel | $.VarRef<localActivityTunnel> | null
	}

	constructor(init?: Partial<{basePoller?: basePoller, handler?: localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null, metricsScope?: tally.Scope | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, laTunnel?: localActivityTunnel | $.VarRef<localActivityTunnel> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			basePoller: init?.basePoller ? init.basePoller.clone() : new basePoller(undefined, true),
			handler: init?.handler ?? (null! as localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			laTunnel: init?.laTunnel ?? (null! as localActivityTunnel | $.VarRef<localActivityTunnel> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityTaskPoller {
		return new localActivityTaskPoller(this, true)
	}

	public __goscriptAssign(source: localActivityTaskPoller): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.basePoller, values.basePoller)
		target.handler = values.handler
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.logger = values.logger
		target.laTunnel = values.laTunnel
	}

	public async PollTask(): globalThis.Promise<[any, $.GoError]> {
		const latp: localActivityTaskPoller | $.VarRef<localActivityTaskPoller> | null = this;
		return [$.interfaceValue(await localActivityTunnel.prototype.getTask.call($.pointerValue<localActivityTaskPoller>(latp).laTunnel), "*internal.localActivityTask", /* @__PURE__ */ $.pointerType("internal.localActivityTask")), null]
	}

	public async ProcessTask(task: any): globalThis.Promise<$.GoError> {
		const latp: localActivityTaskPoller | $.VarRef<localActivityTaskPoller> | null = this;
		if (await $.pointerValue<localActivityTaskPoller>(latp).basePoller.shuttingDown()) {
			return __goscript_internal_worker_base.errShutdown
		}

		let result: localActivityResult | $.VarRef<localActivityResult> | null = await localActivityTaskHandler.prototype.executeLocalActivityTask.call($.pointerValue<localActivityTaskPoller>(latp).handler, ((task as any)?.__goType === "*internal.localActivityTask" && (task as any).__goValue === undefined && (task as any).__isTypedNil !== true ? ((task as any) as __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null) : $.mustTypeAssert<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.localActivityTask"))))
		let result$: localActivityResult = result == null ? $.pointerTarget<localActivityResult>(result) : (result as any).__isVarRef === true ? (result as any).value : (result as any).__goValue === undefined ? (result as any) : $.pointerTarget<localActivityResult>(result)
		// We need to send back the local activity result to unblock workflowTaskPoller.processWorkflowTask() which is
		// synchronously listening on the laResultCh. We also want to make sure we don't block here forever in case
		// processWorkflowTask() already returns and nobody is receiving from laResultCh. We guarantee that doneCh is closed
		// before returning from workflowTaskPoller.processWorkflowTask().
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<__goscript_internal_task_handlers.workflowTask>($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((result$ as localActivityResult).task).workflowTask).laResultCh,
				value: result,
				onSelected: async (__goscriptSelect4Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<__goscript_internal_task_handlers.workflowTask>($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((result$ as localActivityResult).task).workflowTask).doneCh,
				onSelected: async (__goscriptSelect4Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async doPoll(featureFlags: any, pollFunc: any): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).doPoll(featureFlags, pollFunc)
	}

	public async shuttingDown(): globalThis.Promise<any> {
		return await $.pointerValue<basePoller>(this.basePoller).shuttingDown()
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityTaskPoller",
		() => new localActivityTaskPoller(),
		() => [$.methodSignature("PollTask", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("ProcessTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("doPoll", [["featureFlags", "internal.FeatureFlags"], ["pollFunc", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("shuttingDown", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		localActivityTaskPoller,
		() => [/* @__PURE__ */ $.structField("basePoller", "internal.basePoller", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("handler", /* @__PURE__ */ $.pointerType("internal.localActivityTaskHandler"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("laTunnel", /* @__PURE__ */ $.pointerType("internal.localActivityTunnel"), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityTaskHandler {
	public get userContext(): context.Context | null {
		return this._fields.userContext
	}

	public set userContext(value: context.Context | null) {
		this._fields.userContext = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get contextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.contextPropagators
	}

	public set contextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.contextPropagators = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public get activityTracker(): debug.ActivityTracker | null {
		return this._fields.activityTracker
	}

	public set activityTracker(value: debug.ActivityTracker | null) {
		this._fields.activityTracker = value
	}

	public _fields: {
		userContext: context.Context | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		dataConverter: __goscript_encoded.DataConverter | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
		activityTracker: debug.ActivityTracker | null
	}

	constructor(init?: Partial<{userContext?: context.Context | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, dataConverter?: __goscript_encoded.DataConverter | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null, activityTracker?: debug.ActivityTracker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			userContext: init?.userContext ?? (null! as context.Context | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			activityTracker: init?.activityTracker ?? (null! as debug.ActivityTracker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityTaskHandler {
		return new localActivityTaskHandler(this, true)
	}

	public __goscriptAssign(source: localActivityTaskHandler): void {
		const target = this._fields
		const values = source._fields
		target.userContext = $.assignFieldValue(target.userContext, values.userContext, "context.Context")
		target.metricsScope = values.metricsScope
		target.logger = values.logger
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.activityTracker = $.assignFieldValue(target.activityTracker, values.activityTracker, "debug.ActivityTracker")
	}

	public async executeLocalActivityTask(task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null): globalThis.Promise<localActivityResult | $.VarRef<localActivityResult> | null> {
		const lath: localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null = this;
		let result: localActivityResult | $.VarRef<localActivityResult> | null = null! as localActivityResult | $.VarRef<localActivityResult> | null
		const __defer = new $.AsyncDisposableStack()
		try {
			const lath$: localActivityTaskHandler = lath == null ? $.pointerTarget<localActivityTaskHandler>(lath) : (lath as any).__isVarRef === true ? (lath as any).value : (lath as any).__goValue === undefined ? (lath as any) : $.pointerTarget<localActivityTaskHandler>(lath)
			const task$: __goscript_internal_event_handlers.localActivityTask = task == null ? $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task)
			let workflowType = $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowType.Name
			let activityType = $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).ActivityType
			let metricsScope = await __goscript_internal_utils.getMetricsScopeForLocalActivity((lath$ as localActivityTaskHandler).metricsScope, workflowType, activityType)

			// keep in sync with regular activity logger tags
			let logger: zap.Logger | $.VarRef<zap.Logger> | null = await zap.Logger.prototype.With.call((lath$ as localActivityTaskHandler).logger, $.arrayToSlice<zap.Field>([zap.String("LocalActivityID", (task$ as __goscript_internal_event_handlers.localActivityTask).activityID), zap.String("LocalActivityType", activityType), zap.String("WorkflowType", workflowType), zap.String("WorkflowID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowExecution.ID), zap.String("RunID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowExecution.RunID), zap.Int64("Attempt", $.int64((task$ as __goscript_internal_event_handlers.localActivityTask).attempt))]))

			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.LocalActivityTotalCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			let ae = $.varRef(new __goscript_internal_worker.activityExecutor({name: activityType, fn: $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).ActivityFn}, true))

			let rootCtx = (lath$ as localActivityTaskHandler).userContext
			if (rootCtx == null) {
				rootCtx = context.Background()
			}

			let workflowTypeLocal = $.varRef(($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowType).clone())

			let ctx: context.Context | null = context.WithValue($.pointerValueOrNil(rootCtx)!, $.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue((await (async () => { const __goscriptLiteralField18 = await fmt.Sprintf("%v", (task$ as __goscript_internal_event_handlers.localActivityTask).activityID); return new __goscript_internal_activity.activityEnvironment({workflowType: workflowTypeLocal, workflowDomain: $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).Domain, taskList: $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).TaskListName, activityType: new __goscript_activity.ActivityType({Name: activityType}, true), activityID: __goscriptLiteralField18, workflowExecution: $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowExecution, logger: logger, metricsScope: metricsScope, isLocalActivity: true, dataConverter: (lath$ as localActivityTaskHandler).dataConverter, attempt: (task$ as __goscript_internal_event_handlers.localActivityTask).attempt}) })()), "*internal.activityEnvironment", /* @__PURE__ */ $.pointerType("internal.activityEnvironment")))

			// propagate context information into the local activity activity context from the headers
			for (let __goscriptRangeTarget2 = (lath$ as localActivityTaskHandler).contextPropagators, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let ctxProp = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
				let err: $.GoError = null! as $.GoError
				{
					let __goscriptTuple14: any = await (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).Extract(ctx, __goscript_headers.NewHeaderReader((task$ as __goscript_internal_event_handlers.localActivityTask).header))
					ctx = __goscriptTuple14[0]
					err = __goscriptTuple14[1]
					if (err != null) {
						result = (() => { const __goscriptLiteralField19 = fmt.Errorf("unable to propagate context %v", (err as any)); return new localActivityResult({task: task, result: null, err: __goscriptLiteralField19}) })()
						return result
					}
				}
			}

			// count all failures beyond this point, as they come from the activity itself
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				if ($.pointerValue<localActivityResult>(result).err != null) {
					void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.LocalActivityFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			})() })

			let timeoutDuration = $.int64Mul($.int64($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).localActivityOptions.ScheduleToCloseTimeoutSeconds), 1000000000n)
			let deadline = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(timeoutDuration)))
			if ((((task$ as __goscript_internal_event_handlers.localActivityTask).attempt > 0) && !$.markAsStructValue($.cloneStructValue((task$ as __goscript_internal_event_handlers.localActivityTask).expireTime)).IsZero()) && $.markAsStructValue($.cloneStructValue((task$ as __goscript_internal_event_handlers.localActivityTask).expireTime)).Before($.markAsStructValue($.cloneStructValue(deadline)))) {
				// this is attempt and expire time is before SCHEDULE_TO_CLOSE timeout
				deadline = $.assignStruct(deadline, (task$ as __goscript_internal_event_handlers.localActivityTask).expireTime)
			}

			let __goscriptTuple15: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue(deadline)))
			ctx = __goscriptTuple15[0]
			let cancel = __goscriptTuple15[1]
			const __goscriptDeferCallee3 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			await (task$ as __goscript_internal_event_handlers.localActivityTask).Mutex.Lock()
			if ((task$ as __goscript_internal_event_handlers.localActivityTask).canceled) {
				void (task$ as __goscript_internal_event_handlers.localActivityTask).Mutex.Unlock()
				const __goscriptReturn3: localActivityResult | $.VarRef<localActivityResult> | null = new localActivityResult({err: $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")), task: task})
				result = __goscriptReturn3
				await __defer.dispose()
				return result
			}
			;(task$ as __goscript_internal_event_handlers.localActivityTask).cancelFunc = cancel
			void (task$ as __goscript_internal_event_handlers.localActivityTask).Mutex.Unlock()

			let laResult: $.Slice<number> = null! as $.Slice<number>
			let err: $.GoError = null! as $.GoError
			let doneCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
			const __goscriptDeferArg2 = doneCh
			queueMicrotask(async () => { await (async (ch: $.Channel<{}> | null): globalThis.Promise<void> => {
				const __defer = new $.AsyncDisposableStack()
				try {
					const __goscriptDeferArg3 = ch
					__defer.defer(() => { __goscriptDeferArg3!.close() })

					__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
						{
							let p = $.recover()
							if (p != null) {
								let topLine = await fmt.Sprintf("local activity for %s [panic]:", activityType)
								let st = await __goscript_internal_workflow.getStackTraceRaw(topLine, 7, 0)
								await zap.Logger.prototype.Error.call(logger, "LocalActivity panic.", $.arrayToSlice<zap.Field>([zap.String("PanicError", await fmt.Sprintf("%v", p)), zap.String("PanicStack", st)]))
								void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.LocalActivityPanicCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								err = $.interfaceValue<$.GoError>(__goscript_error.newPanicError(p, st), "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))
							}
						}
					})() })

					let laStartTime = $.markAsStructValue($.cloneStructValue(time.Now()))
					let __goscriptShadow8 = ctx
					let __goscriptTuple16: any = await __goscript_propagation.createOpenTracingSpanFromHeaders(__goscriptShadow8, (lath$ as localActivityTaskHandler).tracer, $.markAsStructValue($.cloneStructValue(time.Now())), "cadence-ExecuteLocalActivity", $.makeMap<string, any>([["cadenceWorkflowType", workflowType], ["cadenceWorkflowID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowExecution.ID], ["cadenceRunID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).WorkflowExecution.RunID], ["cadenceActivityType", $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).ActivityType]]))
					let __goscriptShadow9 = __goscriptTuple16[0]
					let span = __goscriptTuple16[1]
					let __goscriptShadow10 = new debug.ActivityInfo({TaskList: $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).WorkflowInfo).TaskListName, ActivityType: activityType}, true)
					const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<debug.Stopper, null>>((__goscriptAwait = $.pointerValue<Exclude<debug.ActivityTracker, null>>((lath$ as localActivityTaskHandler).activityTracker).Start((__goscriptShadow10).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal/common/debug.Stopper.Stop-fm")
					__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
					__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee5(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					let __goscriptTuple17: any = await ae.value.ExecuteWithActualArgs(__goscriptShadow9, $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).InputArgs)
					laResult = __goscriptTuple17[0]
					err = __goscriptTuple17[1]
					let executionLatency = $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(laStartTime)))
					await metrics.EmitLatency(metricsScope, metrics.LocalActivityExecutionLatency, executionLatency, ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())
					if (executionLatency > timeoutDuration) {
						// If local activity takes longer than expected timeout, the context would already be DeadlineExceeded and
						// the result would be discarded. Print a warning in this case.
						await zap.Logger.prototype.Warn.call(logger, "LocalActivity takes too long to complete.", $.arrayToSlice<zap.Field>([zap.Int32("ScheduleToCloseTimeoutSeconds", $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).localActivityOptions.ScheduleToCloseTimeoutSeconds), zap.Duration("ActualExecutionDuration", executionLatency)]))
					}
					await __defer.dispose()
				} catch (e) {
					await __defer.disposePanic(e)
					if (!$.recovered(e)) {
						throw e
					}
				}
			})(__goscriptDeferArg2) })

			Wait_Result: {
				const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, any>([
					{
						id: 0,
						isSend: false,
						channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					},
					{
						id: 1,
						isSend: false,
						channel: doneCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					}
				], false)
				switch (__goscriptSelect5Value?.id) {
					case 0:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, any>([
								{
									id: 0,
									isSend: false,
									channel: doneCh,
									onSelected: async (__goscriptSelect6Result) => {
										return __goscriptSelect6Result
									}
								},
								{
									id: -1,
									isSend: false,
									channel: null,
									onSelected: async (__goscriptSelect6Result) => {
										return __goscriptSelect6Result
									}
								}
							], true)
							switch (__goscriptSelect6Value?.id) {
								case 0:
									{
										const __goscriptSelect6Result = __goscriptSelect6Value
										break Wait_Result
										break
									}
								case -1:
									{
										const __goscriptSelect6Result = __goscriptSelect6Value
										break
									}
							}

							// context is done
							if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.Canceled)) {
								void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.LocalActivityCanceledCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								const __goscriptReturn4: localActivityResult | $.VarRef<localActivityResult> | null = new localActivityResult({err: $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")), task: task})
								result = __goscriptReturn4
								await __defer.dispose()
								return result
							} else {
								if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.DeadlineExceeded)) {
									void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.LocalActivityTimeoutCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									const __goscriptReturn5: localActivityResult | $.VarRef<localActivityResult> | null = new localActivityResult({err: $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrDeadlineExceeded(), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError")), task: task})
									result = __goscriptReturn5
									await __defer.dispose()
									return result
								} else {
									// should not happen
									const __goscriptReturn6: localActivityResult | $.VarRef<localActivityResult> | null = (await (async () => { const __goscriptLiteralField20 = $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError("unexpected context done", null), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError")); return new localActivityResult({err: __goscriptLiteralField20, task: task}) })())
									result = __goscriptReturn6
									await __defer.dispose()
									return result
								}
							}
							break
						}
					case 1:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							break
						}
				}
			}

			const __goscriptReturn7: localActivityResult | $.VarRef<localActivityResult> | null = new localActivityResult({result: laResult, err: err, task: task})
			result = __goscriptReturn7
			await __defer.dispose()
			return result
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return result
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityTaskHandler",
		() => new localActivityTaskHandler(),
		() => [$.methodSignature("executeLocalActivityTask", [["task", /* @__PURE__ */ $.pointerType("internal.localActivityTask")]], [["result", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], true)],
		localActivityTaskHandler,
		() => [/* @__PURE__ */ $.structField("userContext", "context.Context", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityTracker", "debug.ActivityTracker", [6], 88, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityResult {
	public get result(): $.Slice<number> {
		return this._fields.result
	}

	public set result(value: $.Slice<number>) {
		this._fields.result = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get task(): __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null {
		return this._fields.task
	}

	public set task(value: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null) {
		this._fields.task = value
	}

	public get backoff(): time.Duration {
		return this._fields.backoff
	}

	public set backoff(value: time.Duration) {
		this._fields.backoff = value
	}

	public _fields: {
		result: $.Slice<number>
		err: $.GoError
		task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null
		backoff: time.Duration
	}

	constructor(init?: Partial<{result?: $.Slice<number>, err?: $.GoError, task?: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, backoff?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			result: init?.result ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError),
			task: init?.task ?? (null! as __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null),
			backoff: init?.backoff ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityResult {
		return new localActivityResult(this, true)
	}

	public __goscriptAssign(source: localActivityResult): void {
		const target = this._fields
		const values = source._fields
		target.result = values.result
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.task = values.task
		target.backoff = values.backoff
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityResult",
		() => new localActivityResult(),
		() => [],
		localActivityResult,
		() => [/* @__PURE__ */ $.structField("result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("task", /* @__PURE__ */ $.pointerType("internal.localActivityTask"), [2], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("backoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityTunnel {
	public get taskCh(): $.Channel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null {
		return this._fields.taskCh
	}

	public set taskCh(value: $.Channel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null) {
		this._fields.taskCh = value
	}

	public get resultCh(): $.Channel<any> | null {
		return this._fields.resultCh
	}

	public set resultCh(value: $.Channel<any> | null) {
		this._fields.resultCh = value
	}

	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	public _fields: {
		taskCh: $.Channel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null
		resultCh: $.Channel<any> | null
		stopCh: $.Channel<{}> | null
	}

	constructor(init?: Partial<{taskCh?: $.Channel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null, resultCh?: $.Channel<any> | null, stopCh?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			taskCh: init?.taskCh ?? (null! as $.Channel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null),
			resultCh: init?.resultCh ?? (null! as $.Channel<any> | null),
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityTunnel {
		return new localActivityTunnel(this, true)
	}

	public __goscriptAssign(source: localActivityTunnel): void {
		const target = this._fields
		const values = source._fields
		target.taskCh = values.taskCh
		target.resultCh = values.resultCh
		target.stopCh = values.stopCh
	}

	public async getTask(): globalThis.Promise<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> {
		const lat: localActivityTunnel | $.VarRef<localActivityTunnel> | null = this;
		const lat$: localActivityTunnel = lat == null ? $.pointerTarget<localActivityTunnel>(lat) : (lat as any).__isVarRef === true ? (lat as any).value : (lat as any).__goValue === undefined ? (lat as any) : $.pointerTarget<localActivityTunnel>(lat)
		const [__goscriptSelect7HasReturn, __goscriptSelect7Value] = await $.selectStatement<any, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>([
			{
				id: 0,
				isSend: false,
				channel: (lat$ as localActivityTunnel).taskCh,
				onSelected: async (__goscriptSelect7Result) => {
					let task = __goscriptSelect7Result.value
					return task
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (lat$ as localActivityTunnel).stopCh,
				onSelected: async (__goscriptSelect7Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect7HasReturn) {
			return __goscriptSelect7Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async sendTask(task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null): globalThis.Promise<boolean> {
		const lat: localActivityTunnel | $.VarRef<localActivityTunnel> | null = this;
		const lat$: localActivityTunnel = lat == null ? $.pointerTarget<localActivityTunnel>(lat) : (lat as any).__isVarRef === true ? (lat as any).value : (lat as any).__goValue === undefined ? (lat as any) : $.pointerTarget<localActivityTunnel>(lat)
		const [__goscriptSelect8HasReturn, __goscriptSelect8Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: true,
				channel: (lat$ as localActivityTunnel).taskCh,
				value: task,
				onSelected: async (__goscriptSelect8Result) => {
					return true
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (lat$ as localActivityTunnel).stopCh,
				onSelected: async (__goscriptSelect8Result) => {
					return false
				}
			}
		], false)
		if (__goscriptSelect8HasReturn) {
			return __goscriptSelect8Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityTunnel",
		() => new localActivityTunnel(),
		() => [$.methodSignature("getTask", [], [/* @__PURE__ */ $.pointerType("internal.localActivityTask")], true), $.methodSignature("sendTask", [["task", /* @__PURE__ */ $.pointerType("internal.localActivityTask")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		localActivityTunnel,
		() => [/* @__PURE__ */ $.structField("taskCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("internal.localActivityTask"), "both"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("resultCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "both"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class locallyDispatchedActivityTunnel {
	public get taskCh(): $.Channel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> | null {
		return this._fields.taskCh
	}

	public set taskCh(value: $.Channel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> | null) {
		this._fields.taskCh = value
	}

	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public _fields: {
		taskCh: $.Channel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> | null
		stopCh: $.Channel<{}> | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
	}

	constructor(init?: Partial<{taskCh?: $.Channel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> | null, stopCh?: $.Channel<{}> | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			taskCh: init?.taskCh ?? (null! as $.Channel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> | null),
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): locallyDispatchedActivityTunnel {
		return new locallyDispatchedActivityTunnel(this, true)
	}

	public __goscriptAssign(source: locallyDispatchedActivityTunnel): void {
		const target = this._fields
		const values = source._fields
		target.taskCh = values.taskCh
		target.stopCh = values.stopCh
		target.metricsScope = values.metricsScope
	}

	public async SendTask(task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null): globalThis.Promise<boolean> {
		const ldat: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null = this;
		const [__goscriptSelect9HasReturn, __goscriptSelect9Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<locallyDispatchedActivityTunnel>(ldat).taskCh,
				value: task,
				onSelected: async (__goscriptSelect9Result) => {
					return true
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect9Result) => {
					return false
				}
			}
		], true)
		if (__goscriptSelect9HasReturn) {
			return __goscriptSelect9Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async getTask(): globalThis.Promise<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null> {
		const ldat: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null = this;
		const ldat$: locallyDispatchedActivityTunnel = ldat == null ? $.pointerTarget<locallyDispatchedActivityTunnel>(ldat) : (ldat as any).__isVarRef === true ? (ldat as any).value : (ldat as any).__goValue === undefined ? (ldat as any) : $.pointerTarget<locallyDispatchedActivityTunnel>(ldat)
		let task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null = null! as __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null
		const [__goscriptSelect10HasReturn, __goscriptSelect10Value] = await $.selectStatement<any, __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null>([
			{
				id: 0,
				isSend: false,
				channel: (ldat$ as locallyDispatchedActivityTunnel).taskCh,
				onSelected: async (__goscriptSelect10Result) => {
					task = __goscriptSelect10Result.value
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (ldat$ as locallyDispatchedActivityTunnel).stopCh,
				onSelected: async (__goscriptSelect10Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect10HasReturn) {
			return __goscriptSelect10Value
		}

		const [__goscriptSelect11HasReturn, __goscriptSelect11Value] = await $.selectStatement<any, __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<__goscript_internal_event_handlers.locallyDispatchedActivityTask>(task).readyCh,
				onSelected: async (__goscriptSelect11Result) => {
					let ready = __goscriptSelect11Result.value
					if (ready) {
						return task
					}
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (ldat$ as locallyDispatchedActivityTunnel).stopCh,
				onSelected: async (__goscriptSelect11Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect11HasReturn) {
			return __goscriptSelect11Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.locallyDispatchedActivityTunnel",
		() => new locallyDispatchedActivityTunnel(),
		() => [$.methodSignature("SendTask", [["task", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getTask", [], [/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")], true)],
		locallyDispatchedActivityTunnel,
		() => [/* @__PURE__ */ $.structField("taskCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask"), "both"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const pollTaskServiceTimeOut: time.Duration = 150000000000n

export const stickyDecisionScheduleToStartTimeoutSeconds: number = 5

export const ratioToForceCompleteDecisionTaskComplete: number = 4/5

export const serviceBusy: string = "serviceBusy"

export function newLocalActivityTunnel(stopCh: $.Channel<{}> | null): localActivityTunnel | $.VarRef<localActivityTunnel> | null {
	return new localActivityTunnel({taskCh: $.makeChannel<__goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>(1000, null! as __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, "both"), resultCh: $.makeChannel<any>(0, null! as any, "both"), stopCh: stopCh})
}

export function newLocallyDispatchedActivityTunnel(stopCh: $.Channel<{}> | null): locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null {
	return new locallyDispatchedActivityTunnel({taskCh: $.makeChannel<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null>(0, null! as __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null, "both"), stopCh: stopCh})
}

export function isClientSideError(err: $.GoError): boolean {
	// If an activity execution exceeds deadline.
	if ($.comparableEqual(err, context.DeadlineExceeded)) {
		return true
	}

	return false
}

export async function newWorkflowTaskPoller(taskHandler: __goscript_internal_public.WorkflowTaskHandler | null, ldaTunnel: locallyDispatchedActivityTunnel | $.VarRef<locallyDispatchedActivityTunnel> | null, service: workflowserviceclient.Interface | null, domain: string, params: __goscript_internal_worker.workerExecutionParameters): globalThis.Promise<workflowTaskPoller | $.VarRef<workflowTaskPoller> | null> {
	/*
			Explicit nil handling is needed here. Otherwise, poller.ldaTunnel would not return a nil result
		*/
	let ldaTunnelInterface: localDispatcher | null = null! as localDispatcher | null
	if (ldaTunnel != null) {
		ldaTunnelInterface = $.interfaceValue<localDispatcher | null>(ldaTunnel, "*internal.locallyDispatchedActivityTunnel", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTunnel"))
	}

	return (await (async () => { const __goscriptLiteralField21 = s.TaskList.prototype.GetName.call(params.TaskList); const __goscriptLiteralField22 = await metrics.NewTaggedScope(params.WorkerOptions.MetricsScope); return new workflowTaskPoller({basePoller: new basePoller({shutdownC: params.WorkerStopChannel}, true), service: service, domain: domain, taskListName: __goscriptLiteralField21, identity: params.WorkerOptions.Identity, taskHandler: taskHandler, ldaTunnel: ldaTunnelInterface, metricsScope: __goscriptLiteralField22, logger: params.WorkerOptions.Logger, stickyTaskList: params.WorkerOptions.UniqueIdentity, disableStickyExecution: params.WorkerOptions.DisableStickyExecution, StickyScheduleToStartTimeout: params.WorkerOptions.StickyScheduleToStartTimeout, featureFlags: params.WorkerOptions.FeatureFlags}) })())
}

export async function newLocalActivityPoller(params: __goscript_internal_worker.workerExecutionParameters, laTunnel: localActivityTunnel | $.VarRef<localActivityTunnel> | null): globalThis.Promise<localActivityTaskPoller | $.VarRef<localActivityTaskPoller> | null> {
	if (params.WorkerOptions.Tracer == null) {
		params.WorkerOptions.Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}
	if (params.WorkerOptions.WorkerStats.ActivityTracker == null) {
		params.WorkerOptions.WorkerStats.ActivityTracker = debug.NewNoopActivityTracker()
	}
	let handler: localActivityTaskHandler | $.VarRef<localActivityTaskHandler> | null = (await (async () => { const __goscriptLiteralField23 = await metrics.NewTaggedScope(params.WorkerOptions.MetricsScope); return new localActivityTaskHandler({userContext: params.UserContext, metricsScope: __goscriptLiteralField23, logger: params.WorkerOptions.Logger, dataConverter: params.WorkerOptions.DataConverter, contextPropagators: params.WorkerOptions.ContextPropagators, tracer: params.WorkerOptions.Tracer, activityTracker: params.WorkerOptions.WorkerStats.ActivityTracker}) })())
	return new localActivityTaskPoller({basePoller: new basePoller({shutdownC: params.WorkerStopChannel}, true), handler: handler, metricsScope: params.WorkerOptions.MetricsScope, logger: params.WorkerOptions.Logger, laTunnel: laTunnel})
}

export function newGetHistoryPageFunc(ctx: context.Context | null, service: workflowserviceclient.Interface | null, domain: string, execution: s.WorkflowExecution | $.VarRef<s.WorkflowExecution> | null, atDecisionTaskCompletedEventID: bigint, maxEventID: bigint, metricsScope: tally.Scope | null, featureFlags: __goscript_internal_utils.FeatureFlags): ((nextPageToken: $.Slice<number>) => [s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]>) | null {
	return $.functionValue(async (nextPageToken: $.Slice<number>): globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.Slice<number>, $.GoError]> => {
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowGetHistoryCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))
		let resp: s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null = null! as s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null
		let err = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple18: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
			let tchCtx = __goscriptTuple18[0]
			let cancel = __goscriptTuple18[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple18[2]
			const __goscriptDeferCallee6 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee6!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple19: any = await (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).GetWorkflowExecutionHistory(tchCtx, (() => { const __goscriptLiteralField24 = common.StringPtr(domain); return new s.GetWorkflowExecutionHistoryRequest({Domain: __goscriptLiteralField24, Execution: execution, NextPageToken: nextPageToken}) })(), opt)
			resp = __goscriptTuple19[0]
			err1 = __goscriptTuple19[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowGetHistoryFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, null, err]
		}

		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowGetHistorySucceedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await metrics.EmitLatency(metricsScope, metrics.WorkflowGetHistoryLatency, $.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue(startTime))), ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())

		let h: s.History | $.VarRef<s.History> | null = null! as s.History | $.VarRef<s.History> | null

		if ($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(resp).RawHistory != null) {
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple20: any = await serializer.DeserializeBlobDataToHistoryEvents($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(resp).RawHistory, 0)
			h = __goscriptTuple20[0]
			err1 = __goscriptTuple20[1]
			if (err1 != null) {
				return [null, null, err1]
			}
		} else {
			h = $.pointerValue<s.GetWorkflowExecutionHistoryResponse>(resp).History
		}

		// TODO: is this check valid/useful? atDecisionTaskCompletedEventID is startedEventID in pollForDecisionTaskResponse and
		// - For decision tasks, since there's only one inflight decision task, there won't be any event after startEventID.
		//   Those events will be buffered. If there're too many buffer events, the current decision will be failed and events passed
		//   startEventID may be returned. In that case, the last event after truncation is still decision task started event not completed.
		// - For query tasks startEventID is not assigned so this check is never executed.
		if (shouldTruncateHistory(h, atDecisionTaskCompletedEventID)) {
			let first = s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>(h).Events!, 0))
			$.pointerValue<s.History>(h).Events = $.goSlice($.pointerValue<s.History>(h).Events, undefined, globalThis.Number($.int64Add(($.int64Sub(atDecisionTaskCompletedEventID, first)), 1n)))
			if (s.HistoryEvent.prototype.GetEventType.call($.arrayIndex($.pointerValue<s.History>(h).Events!, $.sliceLen($.pointerValue<s.History>(h).Events) - 1)) != 6) {
				return [null, null, fmt.Errorf($.concatString("newGetHistoryPageFunc: atDecisionTaskCompletedEventID(%v) ", "points to event that is not DecisionTaskCompleted"), $.basicInterfaceValue(atDecisionTaskCompletedEventID, "int64"))]
			}
			return [h, null, null]
		}

		// TODO: Apply the check to decision tasks (remove the last condition)
		// after validating maxEventID always equal to atDecisionTaskCompletedEventID (startedEventID).
		// For now only apply to query task to be safe.
		if (shouldTruncateHistory(h, maxEventID) && isQueryTask(atDecisionTaskCompletedEventID)) {
			let first = s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>(h).Events!, 0))
			$.pointerValue<s.History>(h).Events = $.goSlice($.pointerValue<s.History>(h).Events, undefined, globalThis.Number($.int64Add(($.int64Sub(maxEventID, first)), 1n)))
			return [h, null, null]
		}

		return [h, $.pointerValue<s.GetWorkflowExecutionHistoryResponse>(resp).NextPageToken, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("shared.History"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function shouldTruncateHistory(h: s.History | $.VarRef<s.History> | null, maxEventID: bigint): boolean {
	const h$: s.History = h == null ? $.pointerTarget<s.History>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<s.History>(h)
	let size = $.sliceLen((h$ as s.History).Events)
	return ((size > 0) && (maxEventID > 0n)) && (s.HistoryEvent.prototype.GetEventId.call($.arrayIndex((h$ as s.History).Events!, size - 1)) > maxEventID)
}

export function isQueryTask(atDecisionTaskCompletedEventID: bigint): boolean {
	return atDecisionTaskCompletedEventID == 0n
}

export async function newActivityTaskPoller(taskHandler: __goscript_internal_public.ActivityTaskHandler | null, service: workflowserviceclient.Interface | null, domain: string, params: __goscript_internal_worker.workerExecutionParameters): globalThis.Promise<activityTaskPoller | $.VarRef<activityTaskPoller> | null> {

	let __goscriptShadow11: activityTaskPoller | $.VarRef<activityTaskPoller> | null = (await (async () => { const __goscriptLiteralField25 = await metrics.NewTaggedScope(params.WorkerOptions.MetricsScope); return new activityTaskPoller({basePoller: new basePoller({shutdownC: params.WorkerStopChannel}, true), taskHandler: taskHandler, service: service, domain: domain, taskList: params.TaskList, identity: params.WorkerOptions.Identity, logger: params.WorkerOptions.Logger, metricsScope: __goscriptLiteralField25, activitiesPerSecond: params.WorkerOptions.TaskListActivitiesPerSecond, featureFlags: params.WorkerOptions.FeatureFlags}) })())
	return __goscriptShadow11
}

export async function newLocallyDispatchedActivityTaskPoller(taskHandler: __goscript_internal_public.ActivityTaskHandler | null, service: workflowserviceclient.Interface | null, domain: string, params: __goscript_internal_worker.workerExecutionParameters): globalThis.Promise<locallyDispatchedActivityTaskPoller | $.VarRef<locallyDispatchedActivityTaskPoller> | null> {
	let __goscriptShadow12: locallyDispatchedActivityTaskPoller | $.VarRef<locallyDispatchedActivityTaskPoller> | null = (await (async () => { const __goscriptLiteralField26 = $.pointerValue<activityTaskPoller>(await newActivityTaskPoller(taskHandler, service, domain, params)); const __goscriptLiteralField27 = newLocallyDispatchedActivityTunnel(params.WorkerStopChannel); return new locallyDispatchedActivityTaskPoller({activityTaskPoller: __goscriptLiteralField26, ldaTunnel: __goscriptLiteralField27}) })())
	return __goscriptShadow12
}

export async function reportActivityComplete(ctx: context.Context | null, service: workflowserviceclient.Interface | null, request: any, metricsScope: tally.Scope | null, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	if (request == null) {
		// nothing to report
		return null
	}

	let reportErr: $.GoError = null! as $.GoError
	{
		const __goscriptTypeSwitchValue = request
		switch (true) {
			case $.typeAssert<s.RespondActivityTaskCanceledRequest | $.VarRef<s.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).ok:
				{
					let request: s.RespondActivityTaskCanceledRequest | $.VarRef<s.RespondActivityTaskCanceledRequest> | null = $.typeAssert<s.RespondActivityTaskCanceledRequest | $.VarRef<s.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple21: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple21[0]
						let cancel = __goscriptTuple21[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple21[2]
						const __goscriptDeferCallee7 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskCanceled(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
			case $.typeAssert<s.RespondActivityTaskFailedRequest | $.VarRef<s.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).ok:
				{
					let request: s.RespondActivityTaskFailedRequest | $.VarRef<s.RespondActivityTaskFailedRequest> | null = $.typeAssert<s.RespondActivityTaskFailedRequest | $.VarRef<s.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple22: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple22[0]
						let cancel = __goscriptTuple22[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple22[2]
						const __goscriptDeferCallee8 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee8!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskFailed(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
			case $.typeAssert<s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).ok:
				{
					let request: s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null = $.typeAssert<s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple23: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple23[0]
						let cancel = __goscriptTuple23[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple23[2]
						const __goscriptDeferCallee9 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskCompleted(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
		}
	}
	if (reportErr == null) {
		{
			const __goscriptTypeSwitchValue = request
			switch (true) {
				case $.typeAssert<s.RespondActivityTaskCanceledRequest | $.VarRef<s.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskCanceledCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						// Also emit failed counter for canceled activities since they represent failures
						// from a customer monitoring perspective (e.g., heartbeat timeouts)
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<s.RespondActivityTaskFailedRequest | $.VarRef<s.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskCompletedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
	}

	return reportErr
}

export async function reportActivityCompleteByID(ctx: context.Context | null, service: workflowserviceclient.Interface | null, request: any, metricsScope: tally.Scope | null, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	if (request == null) {
		// nothing to report
		return null
	}

	let reportErr: $.GoError = null! as $.GoError
	{
		const __goscriptTypeSwitchValue = request
		switch (true) {
			case $.typeAssert<s.RespondActivityTaskCanceledByIDRequest | $.VarRef<s.RespondActivityTaskCanceledByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")).ok:
				{
					let request: s.RespondActivityTaskCanceledByIDRequest | $.VarRef<s.RespondActivityTaskCanceledByIDRequest> | null = $.typeAssert<s.RespondActivityTaskCanceledByIDRequest | $.VarRef<s.RespondActivityTaskCanceledByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple24: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple24[0]
						let cancel = __goscriptTuple24[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple24[2]
						const __goscriptDeferCallee10 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee10!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskCanceledByID(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
			case $.typeAssert<s.RespondActivityTaskFailedByIDRequest | $.VarRef<s.RespondActivityTaskFailedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")).ok:
				{
					let request: s.RespondActivityTaskFailedByIDRequest | $.VarRef<s.RespondActivityTaskFailedByIDRequest> | null = $.typeAssert<s.RespondActivityTaskFailedByIDRequest | $.VarRef<s.RespondActivityTaskFailedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple25: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple25[0]
						let cancel = __goscriptTuple25[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple25[2]
						const __goscriptDeferCallee11 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee11!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskFailedByID(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
			case $.typeAssert<s.RespondActivityTaskCompletedByIDRequest | $.VarRef<s.RespondActivityTaskCompletedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")).ok:
				{
					let request: s.RespondActivityTaskCompletedByIDRequest | $.VarRef<s.RespondActivityTaskCompletedByIDRequest> | null = $.typeAssert<s.RespondActivityTaskCompletedByIDRequest | $.VarRef<s.RespondActivityTaskCompletedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")).value
					reportErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
						await using __defer = new $.AsyncDisposableStack()
						let __goscriptTuple26: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
						let tchCtx = __goscriptTuple26[0]
						let cancel = __goscriptTuple26[1]
						let opt: $.Slice<yarpc.CallOption> = __goscriptTuple26[2]
						const __goscriptDeferCallee12 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee12!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

						return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RespondActivityTaskCompletedByID(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
				}
				break
		}
	}
	if (reportErr == null) {
		{
			const __goscriptTypeSwitchValue = request
			switch (true) {
				case $.typeAssert<s.RespondActivityTaskCanceledByIDRequest | $.VarRef<s.RespondActivityTaskCanceledByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskCanceledByIDCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						// Also emit failed counter for canceled activities since they represent failures
						// from a customer monitoring perspective (e.g., heartbeat timeouts)
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskFailedByIDCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<s.RespondActivityTaskFailedByIDRequest | $.VarRef<s.RespondActivityTaskFailedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskFailedByIDCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<s.RespondActivityTaskCompletedByIDRequest | $.VarRef<s.RespondActivityTaskCompletedByIDRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")).ok:
					{
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskCompletedByIDCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
	}

	return reportErr
}

export async function convertActivityResultToRespondRequest(identity: string, taskToken: $.Slice<number>, result: $.Slice<number>, err: $.GoError, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<any> {
	if ($.comparableEqual(err, __goscript_error.ErrActivityResultPending)) {
		// activity result is pending and will be completed asynchronously.
		// nothing to report at this point
		return (__goscript_error.ErrActivityResultPending as any)
	}

	if (err == null) {
		return $.interfaceValue((() => { const __goscriptLiteralField28 = common.StringPtr(identity); return new s.RespondActivityTaskCompletedRequest({TaskToken: taskToken, Result: result, Identity: __goscriptLiteralField28}) })(), "*shared.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest"))
	}

	let __goscriptTuple27: any = await __goscript_internal_utils.getErrorDetails(err, dataConverter)
	let reason = __goscriptTuple27[0]
	let details: $.Slice<number> = __goscriptTuple27[1]
	{
		let [, ok] = $.typeAssertTuple<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
		if (ok || ($.comparableEqual(err, context.Canceled))) {
			return $.interfaceValue((() => { const __goscriptLiteralField29 = common.StringPtr(identity); return new s.RespondActivityTaskCanceledRequest({TaskToken: taskToken, Details: details, Identity: __goscriptLiteralField29}) })(), "*shared.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest"))
		}
	}

	return $.interfaceValue((() => { const __goscriptLiteralField30 = common.StringPtr(reason); const __goscriptLiteralField31 = common.StringPtr(identity); const __goscriptLiteralField32 = __goscript_internal_utils.getFailureOptions(err); return new s.RespondActivityTaskFailedRequest({TaskToken: taskToken, Reason: __goscriptLiteralField30, Details: details, Identity: __goscriptLiteralField31, FailureOptions: __goscriptLiteralField32}) })(), "*shared.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest"))
}

export async function convertActivityResultToRespondRequestByID(identity: string, domain: string, workflowID: string, runID: string, activityID: string, result: $.Slice<number>, err: $.GoError, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<any> {
	if ($.comparableEqual(err, __goscript_error.ErrActivityResultPending)) {
		// activity result is pending and will be completed asynchronously.
		// nothing to report at this point
		return null
	}

	if (err == null) {
		return $.interfaceValue((() => { const __goscriptLiteralField33 = common.StringPtr(domain); const __goscriptLiteralField34 = common.StringPtr(workflowID); const __goscriptLiteralField35 = common.StringPtr(runID); const __goscriptLiteralField36 = common.StringPtr(activityID); const __goscriptLiteralField37 = common.StringPtr(identity); return new s.RespondActivityTaskCompletedByIDRequest({Domain: __goscriptLiteralField33, WorkflowID: __goscriptLiteralField34, RunID: __goscriptLiteralField35, ActivityID: __goscriptLiteralField36, Result: result, Identity: __goscriptLiteralField37}) })(), "*shared.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest"))
	}

	let __goscriptTuple28: any = await __goscript_internal_utils.getErrorDetails(err, dataConverter)
	let reason = __goscriptTuple28[0]
	let details: $.Slice<number> = __goscriptTuple28[1]
	{
		let [, ok] = $.typeAssertTuple<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
		if (ok || ($.comparableEqual(err, context.Canceled))) {
			return $.interfaceValue((() => { const __goscriptLiteralField38 = common.StringPtr(domain); const __goscriptLiteralField39 = common.StringPtr(workflowID); const __goscriptLiteralField40 = common.StringPtr(runID); const __goscriptLiteralField41 = common.StringPtr(activityID); const __goscriptLiteralField42 = common.StringPtr(identity); return new s.RespondActivityTaskCanceledByIDRequest({Domain: __goscriptLiteralField38, WorkflowID: __goscriptLiteralField39, RunID: __goscriptLiteralField40, ActivityID: __goscriptLiteralField41, Details: details, Identity: __goscriptLiteralField42}) })(), "*shared.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest"))
		}
	}

	return $.interfaceValue((() => { const __goscriptLiteralField43 = common.StringPtr(domain); const __goscriptLiteralField44 = common.StringPtr(workflowID); const __goscriptLiteralField45 = common.StringPtr(runID); const __goscriptLiteralField46 = common.StringPtr(activityID); const __goscriptLiteralField47 = common.StringPtr(reason); const __goscriptLiteralField48 = common.StringPtr(identity); const __goscriptLiteralField49 = __goscript_internal_utils.getFailureOptions(err); return new s.RespondActivityTaskFailedByIDRequest({Domain: __goscriptLiteralField43, WorkflowID: __goscriptLiteralField44, RunID: __goscriptLiteralField45, ActivityID: __goscriptLiteralField46, Reason: __goscriptLiteralField47, Details: details, Identity: __goscriptLiteralField48, FailureOptions: __goscriptLiteralField49}) })(), "*shared.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest"))
}

var __goscriptAwait: any
