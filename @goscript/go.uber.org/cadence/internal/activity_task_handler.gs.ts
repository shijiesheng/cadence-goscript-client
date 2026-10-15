// Generated file based on activity_task_handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as clockwork from "@goscript/github.com/jonboulle/clockwork/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_auto_heartbeater from "./auto_heartbeater.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import type * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_propagation from "./propagation.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/jonboulle/clockwork/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./auto_heartbeater.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_workflow.gs.ts"
import "./propagation.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.activityTaskHandlerImpl"])

export class activityTaskHandlerImpl {
	public get clock(): clockwork.Clock | null {
		return this._fields.clock
	}

	public set clock(value: clockwork.Clock | null) {
		this._fields.clock = value
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

	public get userContext(): context.Context | null {
		return this._fields.userContext
	}

	public set userContext(value: context.Context | null) {
		this._fields.userContext = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get activityProvider(): ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null {
		return this._fields.activityProvider
	}

	public set activityProvider(value: ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null) {
		this._fields.activityProvider = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get workerStopCh(): $.Channel<{}> | null {
		return this._fields.workerStopCh
	}

	public set workerStopCh(value: $.Channel<{}> | null) {
		this._fields.workerStopCh = value
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

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public get activityTracker(): debug.ActivityTracker | null {
		return this._fields.activityTracker
	}

	public set activityTracker(value: debug.ActivityTracker | null) {
		this._fields.activityTracker = value
	}

	public get enableLifecycleLogging(): boolean {
		return this._fields.enableLifecycleLogging
	}

	public set enableLifecycleLogging(value: boolean) {
		this._fields.enableLifecycleLogging = value
	}

	public _fields: {
		clock: clockwork.Clock | null
		taskListName: string
		identity: string
		service: workflowserviceclient.Interface | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		userContext: context.Context | null
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		activityProvider: ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null
		dataConverter: __goscript_encoded.DataConverter | null
		workerStopCh: $.Channel<{}> | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
		featureFlags: __goscript_internal_utils.FeatureFlags
		activityTracker: debug.ActivityTracker | null
		enableLifecycleLogging: boolean
	}

	constructor(init?: Partial<{clock?: clockwork.Clock | null, taskListName?: string, identity?: string, service?: workflowserviceclient.Interface | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, userContext?: context.Context | null, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, activityProvider?: ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null, dataConverter?: __goscript_encoded.DataConverter | null, workerStopCh?: $.Channel<{}> | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null, featureFlags?: __goscript_internal_utils.FeatureFlags, activityTracker?: debug.ActivityTracker | null, enableLifecycleLogging?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			clock: init?.clock ?? (null! as clockwork.Clock | null),
			taskListName: init?.taskListName ?? ("" as string),
			identity: init?.identity ?? ("" as string),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			userContext: init?.userContext ?? (null! as context.Context | null),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			activityProvider: init?.activityProvider ?? (null! as ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			workerStopCh: init?.workerStopCh ?? (null! as $.Channel<{}> | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true),
			activityTracker: init?.activityTracker ?? (null! as debug.ActivityTracker | null),
			enableLifecycleLogging: init?.enableLifecycleLogging ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityTaskHandlerImpl {
		return new activityTaskHandlerImpl(this, true)
	}

	public __goscriptAssign(source: activityTaskHandlerImpl): void {
		const target = this._fields
		const values = source._fields
		target.clock = $.assignFieldValue(target.clock, values.clock, "clockwork.Clock")
		target.taskListName = values.taskListName
		target.identity = values.identity
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.metricsScope = values.metricsScope
		target.logger = values.logger
		target.userContext = $.assignFieldValue(target.userContext, values.userContext, "context.Context")
		target.registry = values.registry
		target.activityProvider = values.activityProvider
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.workerStopCh = values.workerStopCh
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		$.assignStruct(target.featureFlags, values.featureFlags)
		target.activityTracker = $.assignFieldValue(target.activityTracker, values.activityTracker, "debug.ActivityTracker")
		target.enableLifecycleLogging = values.enableLifecycleLogging
	}

	public async Execute(taskList: string, t: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null): globalThis.Promise<[any, $.GoError]> {
		const ath: activityTaskHandlerImpl | $.VarRef<activityTaskHandlerImpl> | null = this;
		let result: any = null! as any
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const ath$: activityTaskHandlerImpl = ath == null ? $.pointerTarget<activityTaskHandlerImpl>(ath) : (ath as any).__isVarRef === true ? (ath as any).value : (ath as any).__goValue === undefined ? (ath as any) : $.pointerTarget<activityTaskHandlerImpl>(ath)
			const t$: s.PollForActivityTaskResponse = t == null ? $.pointerTarget<s.PollForActivityTaskResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<s.PollForActivityTaskResponse>(t)
			let logger: zap.Logger | $.VarRef<zap.Logger> | null = await zap.Logger.prototype.With.call((ath$ as activityTaskHandlerImpl).logger, $.arrayToSlice<zap.Field>([zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetWorkflowExecution() : s.PollForActivityTaskResponse.prototype.GetWorkflowExecution.call(t)))), zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetWorkflowType() : s.PollForActivityTaskResponse.prototype.GetWorkflowType.call(t)))), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetWorkflowExecution() : s.PollForActivityTaskResponse.prototype.GetWorkflowExecution.call(t)))), zap.String("ActivityID", (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetActivityId() : s.PollForActivityTaskResponse.prototype.GetActivityId.call(t))), zap.String("ActivityType", s.ActivityType.prototype.GetName.call((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetActivityType() : s.PollForActivityTaskResponse.prototype.GetActivityType.call(t)))), zap.Int32("Attempt", (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetAttempt() : s.PollForActivityTaskResponse.prototype.GetAttempt.call(t)))]))
			await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
				await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Debug("Processing new activity task", null) : zap.Logger.prototype.Debug.call(logger, "Processing new activity task", null))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

			if ((ath$ as activityTaskHandlerImpl).enableLifecycleLogging) {
				await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Info("Activity started.", null) : zap.Logger.prototype.Info.call(logger, "Activity started.", null))
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					let fields: $.Slice<zap.Field> = $.arrayToSlice<zap.Field>([zap.String("ActivityOutcome", activityOutcome(result, err))])
					if (err != null) {
						fields = $.appendOne(fields, zap.Error(err))
					}
					await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Info("Activity completed.", fields) : zap.Logger.prototype.Info.call(logger, "Activity completed.", fields))
				})() })
			}

			let rootCtx = (ath$ as activityTaskHandlerImpl).userContext
			if (rootCtx == null) {
				rootCtx = context.Background()
			}
			let [canCtx, cancel] = context.WithCancel($.pointerValueOrNil(rootCtx)!)
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let workflowType = s.WorkflowType.prototype.GetName.call((t$ as s.PollForActivityTaskResponse).WorkflowType)
			let activityType = s.ActivityType.prototype.GetName.call((t$ as s.PollForActivityTaskResponse).ActivityType)
			let invoker = __goscript_internal_task_handlers.newServiceInvoker((t$ as s.PollForActivityTaskResponse).TaskToken, (ath$ as activityTaskHandlerImpl).identity, (ath$ as activityTaskHandlerImpl).service, cancel, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as s.PollForActivityTaskResponse).GetHeartbeatTimeoutSeconds() : s.PollForActivityTaskResponse.prototype.GetHeartbeatTimeoutSeconds.call(t)), (ath$ as activityTaskHandlerImpl).workerStopCh, (ath$ as activityTaskHandlerImpl).featureFlags, (ath$ as activityTaskHandlerImpl).logger, workflowType, activityType)
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				let [, activityCompleted] = $.typeAssertTuple<s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null>(result, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest"))
				void (__goscriptAwait = (invoker !== null && (invoker as any).__isVarRef !== true && (invoker as any).__goValue === undefined ? (invoker as Exclude<__goscript_activity.ServiceInvoker, null>) : $.pointerValue<Exclude<__goscript_activity.ServiceInvoker, null>>(invoker)).Close(!activityCompleted), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			})() })

			let metricsScope = await __goscript_internal_utils.getMetricsScopeForActivity((ath$ as activityTaskHandlerImpl).metricsScope, workflowType, activityType)
			let ctx = await __goscript_activity.WithActivityTask(canCtx, t, taskList, invoker, (ath$ as activityTaskHandlerImpl).logger, metricsScope, (ath$ as activityTaskHandlerImpl).dataConverter, (ath$ as activityTaskHandlerImpl).workerStopCh, (ath$ as activityTaskHandlerImpl).contextPropagators, (ath$ as activityTaskHandlerImpl).tracer)

			let activityImplementation = await (ath !== null && (ath as any).__isVarRef !== true && (ath as any).__goValue === undefined ? ((ath as any) as activityTaskHandlerImpl).getActivity(activityType) : activityTaskHandlerImpl.prototype.getActivity.call(ath, activityType))
			if (activityImplementation == null) {
				// Report the failure to the server instead of returning an error, so the
				// activity fails now rather than at its schedule-to-close timeout.
				let supported = strings.Join(await (ath !== null && (ath as any).__isVarRef !== true && (ath as any).__goValue === undefined ? ((ath as any) as activityTaskHandlerImpl).getRegisteredActivityNames() : activityTaskHandlerImpl.prototype.getRegisteredActivityNames.call(ath)), ", ")
				let notRegistered = fmt.Errorf("unable to find activityType=%v. Supported types: [%v]", activityType, supported)
				await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Activity error.", $.arrayToSlice<zap.Field>([zap.Error(notRegistered)])) : zap.Logger.prototype.Error.call(logger, "Activity error.", $.arrayToSlice<zap.Field>([zap.Error(notRegistered)])))
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityExecutionFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				const __goscriptReturn0: [any, $.GoError] = [await __goscript_internal_task_pollers.convertActivityResultToRespondRequest((ath$ as activityTaskHandlerImpl).identity, (t$ as s.PollForActivityTaskResponse).TaskToken, null, notRegistered, (ath$ as activityTaskHandlerImpl).dataConverter), null]
				result = __goscriptReturn0[0]
				err = __goscriptReturn0[1]
				await __defer.dispose()
				return [result, err]
			}

			// panic handler
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let p = $.recover()
					if (p != null) {
						let topLine = await fmt.Sprintf("activity for %s [panic]:", (ath$ as activityTaskHandlerImpl).taskListName)
						let st = await __goscript_internal_workflow.getStackTraceRaw(topLine, 7, 0)
						await zap.Logger.prototype.Error.call(logger, "Activity panic.", $.arrayToSlice<zap.Field>([zap.String("PanicError", await fmt.Sprintf("%v", p)), zap.String("PanicStack", st)]))
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.ActivityTaskPanicCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						let panicErr: __goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null = __goscript_error.newPanicError(p, st)
						let __goscriptAssign0_0: any = await __goscript_internal_task_pollers.convertActivityResultToRespondRequest((ath$ as activityTaskHandlerImpl).identity, (t$ as s.PollForActivityTaskResponse).TaskToken, null, $.interfaceValue<$.GoError>(panicErr, "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError")), (ath$ as activityTaskHandlerImpl).dataConverter)
						let __goscriptAssign0_1: $.GoError = null
						result = __goscriptAssign0_0
						err = __goscriptAssign0_1
					}
				}
			})() })

			// propagate context information into the activity context from the headers
			for (let __goscriptRangeTarget0 = (ath$ as activityTaskHandlerImpl).contextPropagators, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let ctxProp = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
				let __goscriptShadow0: $.GoError = null! as $.GoError
				{
					let __goscriptTuple0: any = await (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).Extract(ctx, __goscript_headers.NewHeaderReader((t$ as s.PollForActivityTaskResponse).Header))
					ctx = __goscriptTuple0[0]
					__goscriptShadow0 = __goscriptTuple0[1]
					if (__goscriptShadow0 != null) {
						const __goscriptReturn1: [any, $.GoError] = [null, fmt.Errorf("unable to propagate context %w", (__goscriptShadow0 as any))]
						result = __goscriptReturn1[0]
						err = __goscriptReturn1[1]
						await __defer.dispose()
						return [result, err]
					}
				}
			}

			let info: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = $.mustTypeAssert<__goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.activityEnvironment"))
			let __goscriptTuple1: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_internal_activity.activityEnvironment>(info).deadline)))
			ctx = __goscriptTuple1[0]
			let dlCancelFunc = __goscriptTuple1[1]
			const __goscriptDeferCallee1 = dlCancelFunc
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let __goscriptTuple2: any = await __goscript_propagation.createOpenTracingSpanFromHeaders(ctx, (ath$ as activityTaskHandlerImpl).tracer, $.markAsStructValue($.cloneStructValue(time.Now())), "cadence-ExecuteActivity", $.makeMap<string, any>([["cadenceWorkflowType", s.WorkflowType.prototype.GetName.call((t$ as s.PollForActivityTaskResponse).WorkflowType)], ["cadenceWorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((t$ as s.PollForActivityTaskResponse).WorkflowExecution)], ["cadenceRunID", s.WorkflowExecution.prototype.GetRunId.call((t$ as s.PollForActivityTaskResponse).WorkflowExecution)], ["cadenceActivityType", activityType]]))
			ctx = __goscriptTuple2[0]
			let span = __goscriptTuple2[1]
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			if ((((__goscriptAwait = (activityImplementation !== null && (activityImplementation as any).__isVarRef !== true && (activityImplementation as any).__goValue === undefined ? (activityImplementation as Exclude<__goscript_internal_activity.activity, null>) : $.pointerValue<Exclude<__goscript_internal_activity.activity, null>>(activityImplementation)).GetOptions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_activity.RegisterActivityOptions).EnableAutoHeartbeat && ((t$ as s.PollForActivityTaskResponse).HeartbeatTimeoutSeconds != null)) && ($.pointerValue<number>((t$ as s.PollForActivityTaskResponse).HeartbeatTimeoutSeconds) > 0)) {
				let heartBeater: __goscript_auto_heartbeater.autoHeartbeater | $.VarRef<__goscript_auto_heartbeater.autoHeartbeater> | null = __goscript_auto_heartbeater.newHeartbeater((ath$ as activityTaskHandlerImpl).workerStopCh, invoker, (ath$ as activityTaskHandlerImpl).logger, (ath$ as activityTaskHandlerImpl).clock, activityType, (t$ as s.PollForActivityTaskResponse).WorkflowExecution)
				const __goscriptDeferArg0 = ctx
				const __goscriptDeferArg1 = $.int64Mul($.int64($.pointerValue<number>((t$ as s.PollForActivityTaskResponse).HeartbeatTimeoutSeconds)), 1000000000n)
				queueMicrotask(async () => { await (heartBeater !== null && (heartBeater as any).__isVarRef !== true && (heartBeater as any).__goValue === undefined ? ((heartBeater as any) as __goscript_auto_heartbeater.autoHeartbeater).Run(__goscriptDeferArg0, __goscriptDeferArg1) : __goscript_auto_heartbeater.autoHeartbeater.prototype.Run.call(heartBeater, __goscriptDeferArg0, __goscriptDeferArg1)) })
			}
			let __goscriptShadow1 = new debug.ActivityInfo({TaskList: (ath$ as activityTaskHandlerImpl).taskListName, ActivityType: activityType}, true)
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<debug.Stopper, null>>((__goscriptAwait = $.pointerValue<Exclude<debug.ActivityTracker, null>>((ath$ as activityTaskHandlerImpl).activityTracker).Start((__goscriptShadow1).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal/common/debug.Stopper.Stop-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple3: any = await (activityImplementation !== null && (activityImplementation as any).__isVarRef !== true && (activityImplementation as any).__goValue === undefined ? (activityImplementation as Exclude<__goscript_internal_activity.activity, null>) : $.pointerValue<Exclude<__goscript_internal_activity.activity, null>>(activityImplementation)).Execute(ctx, (t$ as s.PollForActivityTaskResponse).Input)
			let output: $.Slice<number> = __goscriptTuple3[0]
			err = __goscriptTuple3[1]

			void (__goscriptAwait = dlCancelFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				await $.chanRecv(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null))
				if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.DeadlineExceeded)) {
					await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Warn("Activity timeout.", null) : zap.Logger.prototype.Warn.call(logger, "Activity timeout.", null))
					const __goscriptReturn2: [any, $.GoError] = [null, (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
					result = __goscriptReturn2[0]
					err = __goscriptReturn2[1]
					await __defer.dispose()
					return [result, err]
				}
			}
			if (((err != null) && (!$.comparableEqual(err, __goscript_error.ErrActivityResultPending))) && !isFailureCategoryPoll(err)) {
				await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Activity error.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Activity error.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
			}
			const __goscriptReturn3: [any, $.GoError] = [await __goscript_internal_task_pollers.convertActivityResultToRespondRequest((ath$ as activityTaskHandlerImpl).identity, (t$ as s.PollForActivityTaskResponse).TaskToken, output, err, (ath$ as activityTaskHandlerImpl).dataConverter), null]
			result = __goscriptReturn3[0]
			err = __goscriptReturn3[1]
			await __defer.dispose()
			return [result, err]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [result, err]
	}

	public async getActivity(name: string): globalThis.Promise<__goscript_internal_activity.activity | null> {
		const ath: activityTaskHandlerImpl | $.VarRef<activityTaskHandlerImpl> | null = this;
		const ath$: activityTaskHandlerImpl = ath == null ? $.pointerTarget<activityTaskHandlerImpl>(ath) : (ath as any).__isVarRef === true ? (ath as any).value : (ath as any).__goValue === undefined ? (ath as any) : $.pointerTarget<activityTaskHandlerImpl>(ath)
		if ((ath$ as activityTaskHandlerImpl).activityProvider != null) {
			return (ath$ as activityTaskHandlerImpl).activityProvider!(name)
		}

		{
			let [a, ok] = await __goscript_registry.registry.prototype.GetActivity.call((ath$ as activityTaskHandlerImpl).registry, name)
			if (ok) {
				return a
			}
		}

		return null
	}

	public async getRegisteredActivityNames(): globalThis.Promise<$.Slice<string>> {
		const ath: activityTaskHandlerImpl | $.VarRef<activityTaskHandlerImpl> | null = this;
		let activityNames: $.Slice<string> = null! as $.Slice<string>
		for (let __goscriptRangeTarget1 = await __goscript_registry.registry.prototype.getRegisteredActivities.call($.pointerValue<activityTaskHandlerImpl>(ath).registry), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_internal_activity.activity | null)
			activityNames = $.appendOne(activityNames, ((__goscriptAwait = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? (a as Exclude<__goscript_internal_activity.activity, null>) : $.pointerValue<Exclude<__goscript_internal_activity.activity, null>>(a)).ActivityType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_activity.ActivityType).Name)
		}
		return activityNames
	}

	static __typeInfo = $.registerStructType(
		"internal.activityTaskHandlerImpl",
		() => new activityTaskHandlerImpl(),
		() => [$.methodSignature("Execute", [["taskList", /* @__PURE__ */ $.basicType("string")], ["t", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse")]], [["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], true), $.methodSignature("getActivity", [["name", /* @__PURE__ */ $.basicType("string")]], ["internal.activity"], true), $.methodSignature("getRegisteredActivityNames", [], [["activityNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], true)],
		activityTaskHandlerImpl,
		() => [/* @__PURE__ */ $.structField("clock", "clockwork.Clock", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskListName", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("userContext", "context.Context", [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [7], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityProvider", ({ kind: $.TypeKind.Function, name: "internal.activityProvider", params: [/* @__PURE__ */ $.basicType("string")], results: ["internal.activity"] } as $.FunctionTypeInfo), [8], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [9], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerStopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [10], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [11], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [12], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [13], 176, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityTracker", "debug.ActivityTracker", [14], 192, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("enableLifecycleLogging", /* @__PURE__ */ $.basicType("bool"), [15], 208, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export async function newActivityTaskHandler(service: workflowserviceclient.Interface | null, params: __goscript_internal_worker.workerExecutionParameters, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<__goscript_internal_public.ActivityTaskHandler | null> {
	return newActivityTaskHandlerWithCustomProvider(service, (params).clone(), registry, (null as __goscript_internal_task_handlers.activityProvider | null), clockwork.NewRealClock())
}

export async function newActivityTaskHandlerWithCustomProvider(service: workflowserviceclient.Interface | null, params: __goscript_internal_worker.workerExecutionParameters, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, activityProvider: ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null, clock: clockwork.Clock | null): globalThis.Promise<__goscript_internal_public.ActivityTaskHandler | null> {
	if (params.WorkerOptions.Tracer == null) {
		params.WorkerOptions.Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}
	if (params.WorkerOptions.WorkerStats.ActivityTracker == null) {
		params.WorkerOptions.WorkerStats.ActivityTracker = debug.NewNoopActivityTracker()
	}
	return $.interfaceValue<__goscript_internal_public.ActivityTaskHandler | null>((await (async () => { const __goscriptLiteralField0 = s.TaskList.prototype.GetName.call(params.TaskList); const __goscriptLiteralField1 = await metrics.NewTaggedScope(params.WorkerOptions.MetricsScope); return new activityTaskHandlerImpl({clock: clock, taskListName: __goscriptLiteralField0, identity: params.WorkerOptions.Identity, service: service, logger: params.WorkerOptions.Logger, metricsScope: __goscriptLiteralField1, userContext: params.UserContext, registry: registry, activityProvider: activityProvider, dataConverter: params.WorkerOptions.DataConverter, workerStopCh: params.WorkerStopChannel, contextPropagators: params.WorkerOptions.ContextPropagators, tracer: params.WorkerOptions.Tracer, featureFlags: params.WorkerOptions.FeatureFlags, activityTracker: params.WorkerOptions.WorkerStats.ActivityTracker, enableLifecycleLogging: params.WorkerOptions.EnableWorkflowLifecycleLogging}) })()), "*internal.activityTaskHandlerImpl", /* @__PURE__ */ $.pointerType("internal.activityTaskHandlerImpl"))
}

export function isFailureCategoryPoll(err: $.GoError): boolean {
	let __goscriptTuple4: any = $.typeAssertTuple<__goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CustomError"))
	let asCustom: __goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null = __goscriptTuple4[0]
	let ok = __goscriptTuple4[1]
	return ok && ((asCustom !== null && (asCustom as any).__isVarRef !== true && (asCustom as any).__goValue === undefined ? ((asCustom as any) as __goscript_error.CustomError).GetFailureCategory() : __goscript_error.CustomError.prototype.GetFailureCategory.call(asCustom)) == 0)
}

export function activityOutcome(result: any, err: $.GoError): string {
	switch ((true as boolean)) {
		case $.comparableEqual(err, context.DeadlineExceeded):
		{
			return "timeout"
			break
		}
		case err != null:
		{
			return "failed_to_report"
			break
		}
		case $.comparableEqual(result, __goscript_error.ErrActivityResultPending):
		{
			return "pending"
			break
		}
	}
	{
		const __goscriptTypeSwitchValue = result
		switch (true) {
			case $.typeAssert<s.RespondActivityTaskCompletedRequest | $.VarRef<s.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).ok:
				{
					return "succeeded"
				}
				break
			case $.typeAssert<s.RespondActivityTaskCanceledRequest | $.VarRef<s.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).ok:
				{
					return "canceled"
				}
				break
			case $.typeAssert<s.RespondActivityTaskFailedRequest | $.VarRef<s.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).ok:
				{
					return "failed"
				}
				break
			default:
				{
					return "unknown"
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
