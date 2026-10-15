// Generated file based on workflow_shadower_worker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as list from "@goscript/container/list/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as worker from "@goscript/go.uber.org/cadence/internal/worker/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as rate from "@goscript/golang.org/x/time/rate/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_activity from "./activity.gs.ts"

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

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"

import * as __goscript_workflow_shadower_activities from "./workflow_shadower_activities.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/container/list/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/worker/index.js"
import "@goscript/golang.org/x/time/rate/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./activity.gs.ts"
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
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"
import "./workflow_shadower.gs.ts"
import "./workflow_shadower_activities.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.shadowWorker"])

export class shadowWorker {
	public get activityWorker(): __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null {
		return this._fields.activityWorker
	}

	public set activityWorker(value: __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null) {
		this._fields.activityWorker = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get taskList(): string {
		return this._fields.taskList
	}

	public set taskList(value: string) {
		this._fields.taskList = value
	}

	public get options(): __goscript_workflow_shadower.ShadowOptions {
		return this._fields.options
	}

	public set options(value: __goscript_workflow_shadower.ShadowOptions) {
		this._fields.options = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		activityWorker: __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null
		service: workflowserviceclient.Interface | null
		domain: string
		taskList: string
		options: __goscript_workflow_shadower.ShadowOptions
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{activityWorker?: __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null, service?: workflowserviceclient.Interface | null, domain?: string, taskList?: string, options?: __goscript_workflow_shadower.ShadowOptions, logger?: zap.Logger | $.VarRef<zap.Logger> | null, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			activityWorker: init?.activityWorker ?? (null! as __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			taskList: init?.taskList ?? ("" as string),
			options: init?.options ? init.options.clone() : new __goscript_workflow_shadower.ShadowOptions(undefined, true),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): shadowWorker {
		return new shadowWorker(this, true)
	}

	public __goscriptAssign(source: shadowWorker): void {
		const target = this._fields
		const values = source._fields
		target.activityWorker = values.activityWorker
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.domain = values.domain
		target.taskList = values.taskList
		$.assignStruct(target.options, values.options)
		target.logger = values.logger
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const sw: shadowWorker | $.VarRef<shadowWorker> | null = this;
		const sw$: shadowWorker = sw == null ? $.pointerTarget<shadowWorker>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<shadowWorker>(sw)
		{
			let err = await (sw$ as shadowWorker).options.validateAndPopulateFields()
			if (err != null) {
				return err
			}
		}

		{
			let err = await __goscript_internal_worker.verifyDomainExist((sw$ as shadowWorker).service, (sw$ as shadowWorker).domain, (sw$ as shadowWorker).logger, ((sw$ as shadowWorker).featureFlags).clone())
			if (err != null) {
				return err
			}
		}

		if ($.stringLen((sw$ as shadowWorker).taskList) == 0) {
			return __goscript_workflow.errTaskListNotSet
		}

		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as shadowWorker).startShadowWorkflow() : shadowWorker.prototype.startShadowWorkflow.call(sw))
			if (err != null) {
				return err
			}
		}

		return __goscript_internal_worker.activityWorker.prototype.Start.call((sw$ as shadowWorker).activityWorker)
	}

	public async Stop(): globalThis.Promise<void> {
		const sw: shadowWorker | $.VarRef<shadowWorker> | null = this;
		await __goscript_internal_worker.activityWorker.prototype.Stop.call($.pointerValue<shadowWorker>(sw).activityWorker)
	}

	public async startShadowWorkflow(): globalThis.Promise<$.GoError> {
		const sw: shadowWorker | $.VarRef<shadowWorker> | null = this;
		const sw$: shadowWorker = sw == null ? $.pointerTarget<shadowWorker>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<shadowWorker>(sw)
		let workflowParams = (await (async () => { const __goscriptLiteralField0 = common.StringPtr((sw$ as shadowWorker).domain); const __goscriptLiteralField1 = common.StringPtr((sw$ as shadowWorker).taskList); const __goscriptLiteralField2 = common.StringPtr((sw$ as shadowWorker).options.WorkflowQuery); const __goscriptLiteralField3 = common.Float64Ptr((sw$ as shadowWorker).options.SamplingRate); const __goscriptLiteralField4 = await __goscript_workflow_shadower.ShadowMode_toThriftPtr((sw$ as shadowWorker).options.Mode); const __goscriptLiteralField5 = (sw$ as shadowWorker).options.ExitCondition.toThriftPtr(); const __goscriptLiteralField6 = common.Int32Ptr($.int((sw$ as shadowWorker).options.Concurrency, 32)); return new shadower.WorkflowParams({Domain: __goscriptLiteralField0, TaskList: __goscriptLiteralField1, WorkflowQuery: __goscriptLiteralField2, SamplingRate: __goscriptLiteralField3, ShadowMode: __goscriptLiteralField4, ExitCondition: __goscriptLiteralField5, Concurrency: __goscriptLiteralField6}, true) })())

		let ctx = context.Background()

		let __goscriptTuple0: any = await __goscript_internal_workflow.getValidatedWorkflowFunction(shadower.WorkflowName, $.arrayToSlice<any>([$.interfaceValue((workflowParams).clone(), "shadower.WorkflowParams", "shadower.WorkflowParams")]), __goscript_encoded.getDefaultDataConverter(), null)
		let workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple0[0]
		let input: $.Slice<number> = __goscriptTuple0[1]
		let err = __goscriptTuple0[2]
		if (err != null) {
			return err
		}

		let startWorkflowRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null = (await (async () => { const __goscriptLiteralField7 = common.StringPtr(shadower.LocalDomainName); const __goscriptLiteralField8 = common.StringPtr($.concatString((sw$ as shadowWorker).domain, shadower.WorkflowIDSuffix)); const __goscriptLiteralField9 = __goscript_internal_utils.workflowTypePtr($.pointerValue<__goscript_workflow.WorkflowType>(workflowType)); const __goscriptLiteralField11 = common.Int32Ptr(864000); const __goscriptLiteralField12 = common.Int32Ptr(60); const __goscriptLiteralField13 = common.StringPtr(await uuid.New()); const __goscriptLiteralField14 = shared.WorkflowIdReusePolicy_Ptr(shared.WorkflowIdReusePolicyAllowDuplicate); return new shared.StartWorkflowExecutionRequest({Domain: __goscriptLiteralField7, WorkflowId: __goscriptLiteralField8, WorkflowType: __goscriptLiteralField9, TaskList: (() => { const __goscriptLiteralField10 = common.StringPtr(shadower.TaskList); return new shared.TaskList({Name: __goscriptLiteralField10}) })(), Input: input, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField11, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField12, RequestId: __goscriptLiteralField13, WorkflowIdReusePolicy: __goscriptLiteralField14}) })())

		let startWorkflowOp: (() => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple1: any = await __goscript_internal_utils.newChannelContext(ctx, ((sw$ as shadowWorker).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple1[0]
			let cancel = __goscriptTuple1[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple1[2]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, __goscriptShadow0] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sw$ as shadowWorker).service).StartWorkflowExecution(tchCtx, startWorkflowRequest, opt)
			if (__goscriptShadow0 != null) {
				{
					let [, ok] = $.typeAssertTuple<shared.WorkflowExecutionAlreadyStartedError | $.VarRef<shared.WorkflowExecutionAlreadyStartedError> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))
					if (ok) {
						return null
					}
				}
			}

			return __goscriptShadow0
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))

		return backoff.Retry(ctx, startWorkflowOp, await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
	}

	static __typeInfo = $.registerStructType(
		"internal.shadowWorker",
		() => new shadowWorker(),
		() => [$.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], [], true), $.methodSignature("startShadowWorkflow", [], ["error"], true)],
		shadowWorker,
		() => [/* @__PURE__ */ $.structField("activityWorker", /* @__PURE__ */ $.pointerType("internal.activityWorker"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskList", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("options", "internal.ShadowOptions", [4], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 280, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [6], 288, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export async function newShadowWorker(service: workflowserviceclient.Interface | null, domain: string, shadowOptions: __goscript_workflow_shadower.ShadowOptions, __goscriptParam0: __goscript_internal_worker.workerExecutionParameters, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<shadowWorker | $.VarRef<shadowWorker> | null> {
	let params: $.VarRef<__goscript_internal_worker.workerExecutionParameters> = $.varRef(__goscriptParam0)
	await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(registry, $.interfaceValue($.goFunc(__goscript_workflow_shadower_activities.scanWorkflowActivity, "go.uber.org/cadence/internal.scanWorkflowActivity"), "func(ctx context.Context, params shadower.ScanWorkflowActivityParams) (shadower.ScanWorkflowActivityResult, error)", ({ kind: $.TypeKind.Function, params: ["context.Context", "shadower.ScanWorkflowActivityParams"], results: ["shadower.ScanWorkflowActivityResult", "error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: shadower.ScanWorkflowActivityName}, true))
	await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(registry, $.interfaceValue($.goFunc(__goscript_workflow_shadower_activities.replayWorkflowActivity, "go.uber.org/cadence/internal.replayWorkflowActivity"), "func(ctx context.Context, params shadower.ReplayWorkflowActivityParams) (shadower.ReplayWorkflowActivityResult, error)", ({ kind: $.TypeKind.Function, params: ["context.Context", "shadower.ReplayWorkflowActivityParams"], results: ["shadower.ReplayWorkflowActivityResult", "error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: shadower.ReplayWorkflowActivityName, EnableAutoHeartbeat: true}, true))

	let replayer: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = await __goscript_workflow_replayer.NewWorkflowReplayerWithOptions(new __goscript_workflow_replayer.ReplayOptions({DataConverter: params.value.WorkerOptions.DataConverter, ContextPropagators: params.value.WorkerOptions.ContextPropagators, WorkflowInterceptorChainFactories: params.value.WorkerOptions.WorkflowInterceptorChainFactories, Tracer: params.value.WorkerOptions.Tracer, FeatureFlags: params.value.WorkerOptions.FeatureFlags}, true))
	$.pointerValue<__goscript_workflow_replayer.WorkflowReplayer>(replayer).registry = registry

	await __goscript_internal_worker.ensureRequiredParams(params)
	if (!$.stringEqual(shared.TaskList.prototype.GetName.call(params.value.TaskList), "")) {
		// include domain name in tasklist to avoid confliction
		// since all shadow workflow will be run in a single system domain
		params.value.TaskList = (() => { const __goscriptLiteralField15 = common.StringPtr(generateShadowTaskList(domain, shared.TaskList.prototype.GetName.call(params.value.TaskList))); const __goscriptLiteralField16 = shared.TaskListKind_Ptr(shared.TaskList.prototype.GetKind.call(params.value.TaskList)); return new shared.TaskList({Name: __goscriptLiteralField15, Kind: __goscriptLiteralField16}) })()
		params.value.WorkerOptions.MetricsScope = await __goscript_internal_worker.tagScope(params.value.WorkerOptions.MetricsScope, $.arrayToSlice<string>(["TaskList", shared.TaskList.prototype.GetName.call(params.value.TaskList)]))
		params.value.WorkerOptions.Logger = await zap.Logger.prototype.With.call(params.value.WorkerOptions.Logger, $.arrayToSlice<zap.Field>([zap.String("TaskList", shared.TaskList.prototype.GetName.call(params.value.TaskList))]))
	}

	params.value.UserContext = context.WithValue($.pointerValueOrNil(params.value.UserContext)!, $.namedValueInterfaceValue<any>("serviceClient", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), (service as any))
	params.value.UserContext = context.WithValue($.pointerValueOrNil(params.value.UserContext)!, $.namedValueInterfaceValue<any>("workflowReplayer", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue(replayer, "*internal.WorkflowReplayer", /* @__PURE__ */ $.pointerType("internal.WorkflowReplayer")))

	// data converter, interceptors, context propagators, tracers provided by user is for replay
	// for the actual shadowing workflow use default values.
	// this is required for data converter, for the other three, it should be ok to still use
	// the value provided by user.
	params.value.WorkerOptions.DataConverter = __goscript_encoded.getDefaultDataConverter()
	params.value.WorkerOptions.WorkflowInterceptorChainFactories = $.arrayToSlice<__goscript_interceptors.WorkflowInterceptorFactory | null>([])
	params.value.WorkerOptions.ContextPropagators = $.arrayToSlice<__goscript_headers.ContextPropagator | null>([])
	params.value.WorkerOptions.Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")

	let __goscriptShadow1: __goscript_internal_worker.activityWorker | $.VarRef<__goscript_internal_worker.activityWorker> | null = await __goscript_internal_worker.newActivityWorker(service, shadower.LocalDomainName, (params.value).clone(), null, registry, null)
	return (() => { const __goscriptLiteralField17 = shared.TaskList.prototype.GetName.call(params.value.TaskList); return new shadowWorker({activityWorker: __goscriptShadow1, service: service, domain: domain, taskList: __goscriptLiteralField17, options: shadowOptions, logger: params.value.WorkerOptions.Logger, featureFlags: params.value.WorkerOptions.FeatureFlags}) })()
}

export function generateShadowTaskList(domain: string, taskList: string): string {
	return $.concatString(($.concatString(domain, "-")), taskList)
}

var __goscriptAwait: any
