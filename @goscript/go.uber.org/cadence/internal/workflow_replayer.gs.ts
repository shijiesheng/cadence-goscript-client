// Generated file based on workflow_replayer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as os from "@goscript/os/index.js"

import * as gomock from "@goscript/github.com/golang/mock/gomock/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as workflowservicetest from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowservicetest/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as serializer from "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

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

import * as __goscript_tracer from "./tracer.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/os/index.js"
import "@goscript/github.com/golang/mock/gomock/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowservicetest/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"
import "@goscript/container/list/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
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
import "./tracer.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.WorkflowReplayer", "internal.ReplayOptions"])

export class ReplayOptions {
	// Optional: Sets DataConverter to customize serialization/deserialization of arguments in Cadence
	// default: defaultDataConverter, an combination of thriftEncoder and jsonEncoder
	public get DataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.DataConverter
	}

	public set DataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.DataConverter = value
	}

	// Optional: Specifies factories used to instantiate workflow interceptor chain
	// The chain is instantiated per each replay of a workflow execution
	public get WorkflowInterceptorChainFactories(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		return this._fields.WorkflowInterceptorChainFactories
	}

	public set WorkflowInterceptorChainFactories(value: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>) {
		this._fields.WorkflowInterceptorChainFactories = value
	}

	// Optional: Sets ContextPropagators that allows users to control the context information passed through a workflow
	// default: no ContextPropagators
	public get ContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.ContextPropagators
	}

	public set ContextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.ContextPropagators = value
	}

	// Optional: Sets opentracing Tracer that is to be used to emit tracing information
	// default: no tracer - opentracing.NoopTracer
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	// Optional: flags to turn on/off some features on server side
	// default: all features under the struct is turned off
	public get FeatureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.FeatureFlags
	}

	public set FeatureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.FeatureFlags = value
	}

	public _fields: {
		DataConverter: __goscript_encoded.DataConverter | null
		WorkflowInterceptorChainFactories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
		ContextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		Tracer: opentracing.Tracer | null
		FeatureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{DataConverter?: __goscript_encoded.DataConverter | null, WorkflowInterceptorChainFactories?: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, ContextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, Tracer?: opentracing.Tracer | null, FeatureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			DataConverter: init?.DataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			WorkflowInterceptorChainFactories: init?.WorkflowInterceptorChainFactories ?? (null! as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>),
			ContextPropagators: init?.ContextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			FeatureFlags: init?.FeatureFlags ? init.FeatureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReplayOptions {
		return new ReplayOptions(this, true)
	}

	public __goscriptAssign(source: ReplayOptions): void {
		const target = this._fields
		const values = source._fields
		target.DataConverter = $.assignFieldValue(target.DataConverter, values.DataConverter, "internal.DataConverter")
		target.WorkflowInterceptorChainFactories = values.WorkflowInterceptorChainFactories
		target.ContextPropagators = values.ContextPropagators
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		$.assignStruct(target.FeatureFlags, values.FeatureFlags)
	}

	static __typeInfo = $.registerStructType(
		"internal.ReplayOptions",
		() => new ReplayOptions(),
		() => [],
		ReplayOptions,
		() => [/* @__PURE__ */ $.structField("DataConverter", "internal.DataConverter", [0], 0, true), /* @__PURE__ */ $.structField("WorkflowInterceptorChainFactories", /* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory"), [1], 16, true), /* @__PURE__ */ $.structField("ContextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [2], 40, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [3], 64, true), /* @__PURE__ */ $.structField("FeatureFlags", "internal.FeatureFlags", [4], 80, true)]
	)
}

export class WorkflowReplayer {
	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get options(): ReplayOptions {
		return this._fields.options
	}

	public set options(value: ReplayOptions) {
		this._fields.options = value
	}

	public _fields: {
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		options: ReplayOptions
	}

	constructor(init?: Partial<{registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, options?: ReplayOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			options: init?.options ? init.options.clone() : new ReplayOptions(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowReplayer {
		return new WorkflowReplayer(this, true)
	}

	public __goscriptAssign(source: WorkflowReplayer): void {
		const target = this._fields
		const values = source._fields
		target.registry = values.registry
		$.assignStruct(target.options, values.options)
	}

	public async GetRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		let activities: $.Slice<__goscript_internal_activity.activity | null> = await __goscript_registry.registry.prototype.getRegisteredActivities.call($.pointerValue<WorkflowReplayer>(r).registry)
		let result: $.Slice<__goscript_activity.RegistryActivityInfo | null> = null! as $.Slice<__goscript_activity.RegistryActivityInfo | null>
		for (let __goscriptRangeTarget0 = activities, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_internal_activity.activity | null)
			result = $.appendOne(result, (a as __goscript_activity.RegistryActivityInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		let workflows: $.Slice<__goscript_internal_workflow.workflow | null> = await __goscript_registry.registry.prototype.GetRegisteredWorkflows.call($.pointerValue<WorkflowReplayer>(r).registry)
		let result: $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> = null! as $.Slice<__goscript_workflow.RegistryWorkflowInfo | null>
		for (let __goscriptRangeTarget1 = workflows, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let wf = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_internal_workflow.workflow | null)
			result = $.appendOne(result, (wf as __goscript_workflow.RegistryWorkflowInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public async RegisterActivity(a: any): globalThis.Promise<void> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivity.call($.pointerValue<WorkflowReplayer>(r).registry, a)
	}

	public async RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call($.pointerValue<WorkflowReplayer>(r).registry, a, options)
	}

	public async RegisterWorkflow(w: any): globalThis.Promise<void> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflow.call($.pointerValue<WorkflowReplayer>(r).registry, w)
	}

	public async RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflowWithOptions.call($.pointerValue<WorkflowReplayer>(r).registry, w, options)
	}

	public async ReplayPartialWorkflowHistoryFromJSON(logger: zap.Logger | $.VarRef<zap.Logger> | null, reader: io.Reader | null, lastEventID: bigint): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		let __goscriptTuple0: any = await extractHistoryFromReader(reader, lastEventID)
		let __goscriptShadow0: shared.History | $.VarRef<shared.History> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]

		if (err != null) {
			return err
		}

		if (logger == null) {
			logger = zap.NewNop()
		}

		let __goscriptShadow1: zap.SugaredLogger | $.VarRef<zap.SugaredLogger> | null = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Sugar() : zap.Logger.prototype.Sugar.call(logger))
		let controller: gomock.Controller | $.VarRef<gomock.Controller> | null = await gomock.NewController($.interfaceValue<gomock.TestReporter | null>(__goscriptShadow1, "*zap.SugaredLogger", /* @__PURE__ */ $.pointerType("zap.SugaredLogger")))
		let service: workflowservicetest.MockClient | $.VarRef<workflowservicetest.MockClient> | null = workflowservicetest.NewMockClient(controller)

		return WorkflowReplayer.prototype.replayWorkflowHistory.call(r, logger, $.interfaceValue<workflowserviceclient.Interface | null>(service, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ReplayDomain", null, __goscriptShadow0, null)
	}

	public async ReplayPartialWorkflowHistoryFromJSONFile(logger: zap.Logger | $.VarRef<zap.Logger> | null, jsonfileName: string, lastEventID: bigint): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple1: any = await os.Open(jsonfileName)
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return fmt.Errorf("could not open file: %w", (err as any))
		}
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await os.File.prototype.Close.call($.pointerValue<os.File>(file))
		})() })
		return await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as WorkflowReplayer).ReplayPartialWorkflowHistoryFromJSON(logger, $.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), lastEventID) : WorkflowReplayer.prototype.ReplayPartialWorkflowHistoryFromJSON.call(r, logger, $.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), lastEventID))
	}

	public async ReplayWorkflowExecution(ctx: context.Context | null, service: workflowserviceclient.Interface | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, domain: string, __goscriptParam0: __goscript_workflow.WorkflowExecution): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		let execution: $.VarRef<__goscript_workflow.WorkflowExecution> = $.varRef(__goscriptParam0)
		let sharedExecution: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null = (() => { const __goscriptLiteralField0 = common.StringPtr(execution.value.RunID); const __goscriptLiteralField1 = common.StringPtr(execution.value.ID); return new shared.WorkflowExecution({RunId: __goscriptLiteralField0, WorkflowId: __goscriptLiteralField1}) })()
		let request: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null = (() => { const __goscriptLiteralField2 = common.StringPtr(domain); return new shared.GetWorkflowExecutionHistoryRequest({Domain: __goscriptLiteralField2, Execution: sharedExecution}) })()

		let hResponse: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = null! as shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null
		{
			let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
				let __goscriptTuple2: any = await __goscript_internal_utils.newChannelContext(ctx, ($.pointerValue<WorkflowReplayer>(r).options.FeatureFlags).clone(), null)
				let tchCtx = __goscriptTuple2[0]
				let cancel = __goscriptTuple2[1]
				let opt: $.Slice<yarpc.CallOption> = __goscriptTuple2[2]

				let __goscriptShadow2: $.GoError = null! as $.GoError
				let __goscriptTuple3: any = await (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).GetWorkflowExecutionHistory(tchCtx, request, opt)
				hResponse = __goscriptTuple3[0]
				__goscriptShadow2 = __goscriptTuple3[1]
				void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				return __goscriptShadow2
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), $.functionValue((err: $.GoError): boolean => {
				{
					let [, ok] = $.typeAssertTuple<shared.InternalServiceError | $.VarRef<shared.InternalServiceError> | null>(err, /* @__PURE__ */ $.pointerType("shared.InternalServiceError"))
					if (ok) {
						// treat InternalServiceError as non-retryable, as the workflow history may be corrupted
						return false
					}
				}
				return __goscript_internal_retry.isServiceTransientError(err)
			}, ({ kind: $.TypeKind.Function, params: ["error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
			if (err != null) {
				return err
			}
		}

		if ($.pointerValue<shared.GetWorkflowExecutionHistoryResponse>(hResponse).RawHistory != null) {
			let __goscriptTuple4: any = await serializer.DeserializeBlobDataToHistoryEvents($.pointerValue<shared.GetWorkflowExecutionHistoryResponse>(hResponse).RawHistory, 0)
			let __goscriptShadow3: shared.History | $.VarRef<shared.History> | null = __goscriptTuple4[0]
			let err = __goscriptTuple4[1]
			if (err != null) {
				return err
			}

			$.pointerValue<shared.GetWorkflowExecutionHistoryResponse>(hResponse).History = __goscriptShadow3
		}

		return WorkflowReplayer.prototype.replayWorkflowHistory.call(r, logger, service, domain, execution, $.pointerValue<shared.GetWorkflowExecutionHistoryResponse>(hResponse).History, $.pointerValue<shared.GetWorkflowExecutionHistoryResponse>(hResponse).NextPageToken)
	}

	public async ReplayWorkflowHistory(logger: zap.Logger | $.VarRef<zap.Logger> | null, history: shared.History | $.VarRef<shared.History> | null): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		if (logger == null) {
			logger = zap.NewNop()
		}

		let __goscriptShadow4: zap.SugaredLogger | $.VarRef<zap.SugaredLogger> | null = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Sugar() : zap.Logger.prototype.Sugar.call(logger))
		let controller: gomock.Controller | $.VarRef<gomock.Controller> | null = await gomock.NewController($.interfaceValue<gomock.TestReporter | null>(__goscriptShadow4, "*zap.SugaredLogger", /* @__PURE__ */ $.pointerType("zap.SugaredLogger")))
		let service: workflowservicetest.MockClient | $.VarRef<workflowservicetest.MockClient> | null = workflowservicetest.NewMockClient(controller)

		return WorkflowReplayer.prototype.replayWorkflowHistory.call(r, logger, $.interfaceValue<workflowserviceclient.Interface | null>(service, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ReplayDomain", null, history, null)
	}

	public async ReplayWorkflowHistoryFromJSON(logger: zap.Logger | $.VarRef<zap.Logger> | null, reader: io.Reader | null): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as WorkflowReplayer).ReplayPartialWorkflowHistoryFromJSON(logger, reader, 0n) : WorkflowReplayer.prototype.ReplayPartialWorkflowHistoryFromJSON.call(r, logger, reader, 0n))
	}

	public async ReplayWorkflowHistoryFromJSONFile(logger: zap.Logger | $.VarRef<zap.Logger> | null, jsonfileName: string): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as WorkflowReplayer).ReplayPartialWorkflowHistoryFromJSONFile(logger, jsonfileName, 0n) : WorkflowReplayer.prototype.ReplayPartialWorkflowHistoryFromJSONFile.call(r, logger, jsonfileName, 0n))
	}

	public async replayWorkflowHistory(logger: zap.Logger | $.VarRef<zap.Logger> | null, service: workflowserviceclient.Interface | null, domain: string, execution: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, history: shared.History | $.VarRef<shared.History> | null, nextPageToken: $.Slice<number>): globalThis.Promise<$.GoError> {
		const r: WorkflowReplayer | $.VarRef<WorkflowReplayer> | null = this;
		const r$: WorkflowReplayer = r == null ? $.pointerTarget<WorkflowReplayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<WorkflowReplayer>(r)
		let events: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> = $.pointerValue<shared.History>(history).Events
		if (events == null) {
			return errReplayEmptyHistory
		}
		if ($.sliceLen(events) < 3) {
			return errReplayHistoryTooShort
		}
		let first: shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null = $.arrayIndex(events!, 0)
		let first$: shared.HistoryEvent = first == null ? $.pointerTarget<shared.HistoryEvent>(first) : (first as any).__isVarRef === true ? (first as any).value : (first as any).__goValue === undefined ? (first as any) : $.pointerTarget<shared.HistoryEvent>(first)
		if ((first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as shared.HistoryEvent).GetEventType() : shared.HistoryEvent.prototype.GetEventType.call(first)) != 0) {
			return errReplayInvalidFirstEvent
		}
		let last: shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null = $.arrayIndex(events!, $.sliceLen(events) - 1)

		let attr: shared.WorkflowExecutionStartedEventAttributes | $.VarRef<shared.WorkflowExecutionStartedEventAttributes> | null = (first$ as shared.HistoryEvent).WorkflowExecutionStartedEventAttributes
		if (attr == null) {
			return errReplayCorruptedStartedEvent
		}
		let workflowType: shared.WorkflowType | $.VarRef<shared.WorkflowType> | null = $.pointerValue<shared.WorkflowExecutionStartedEventAttributes>(attr).WorkflowType
		if (execution == null) {
			execution = (await (async () => { const __goscriptLiteralField3 = uuid.UUID_String((await uuid.NewRandom())); return new __goscript_workflow.WorkflowExecution({ID: "ReplayId", RunID: __goscriptLiteralField3}) })())
			if (!$.stringEqual(shared.WorkflowExecutionStartedEventAttributes.prototype.GetOriginalExecutionRunId.call((first$ as shared.HistoryEvent).WorkflowExecutionStartedEventAttributes), "")) {
				$.pointerValue<__goscript_workflow.WorkflowExecution>(execution).RunID = shared.WorkflowExecutionStartedEventAttributes.prototype.GetOriginalExecutionRunId.call((first$ as shared.HistoryEvent).WorkflowExecutionStartedEventAttributes)
			}
		}

		let task: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = (() => { const __goscriptLiteralField4 = common.Int64Ptr($.int64((attr !== null && (attr as any).__isVarRef !== true && (attr as any).__goValue === undefined ? ((attr as any) as shared.WorkflowExecutionStartedEventAttributes).GetAttempt() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetAttempt.call(attr)))); const __goscriptLiteralField7 = common.Int64Ptr(9223372036854775807n); return new shared.PollForDecisionTaskResponse({Attempt: __goscriptLiteralField4, TaskToken: new Uint8Array([82, 101, 112, 108, 97, 121, 84, 97, 115, 107, 84, 111, 107, 101, 110]), WorkflowType: workflowType, WorkflowExecution: (() => { const __goscriptLiteralField5 = common.StringPtr($.pointerValue<__goscript_workflow.WorkflowExecution>(execution).ID); const __goscriptLiteralField6 = common.StringPtr($.pointerValue<__goscript_workflow.WorkflowExecution>(execution).RunID); return new shared.WorkflowExecution({WorkflowId: __goscriptLiteralField5, RunId: __goscriptLiteralField6}) })(), History: history, PreviousStartedEventId: __goscriptLiteralField7, NextPageToken: nextPageToken}) })()
		let task$: shared.PollForDecisionTaskResponse = task == null ? $.pointerTarget<shared.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<shared.PollForDecisionTaskResponse>(task)
		if (logger == null) {
			logger = zap.NewNop()
		}
		let workerParams = new __goscript_internal_worker.workerExecutionParameters({WorkerOptions: new __goscript_worker.WorkerOptions({Identity: "replayID", DataConverter: (r$ as WorkflowReplayer).options.DataConverter, ContextPropagators: (r$ as WorkflowReplayer).options.ContextPropagators, WorkflowInterceptorChainFactories: (r$ as WorkflowReplayer).options.WorkflowInterceptorChainFactories, Tracer: (r$ as WorkflowReplayer).options.Tracer, Logger: logger, DisableStickyExecution: true}, true), TaskList: (() => { const __goscriptLiteralField8 = common.StringPtr("ReplayTaskList"); const __goscriptLiteralField9 = shared.TaskListKind_Ptr(shared.TaskListKindNormal); return new shared.TaskList({Name: __goscriptLiteralField8, Kind: __goscriptLiteralField9}) })()}, true)

		let metricScope = (await tally.__goscript_init_NoopScope(), tally.__goscript_get_NoopScope())
		let iterator: __goscript_internal_task_pollers.historyIteratorImpl | $.VarRef<__goscript_internal_task_pollers.historyIteratorImpl> | null = (() => { const __goscriptLiteralField10 = (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForDecisionTaskResponse).GetStartedEventId() : shared.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(task)); return new __goscript_internal_task_pollers.historyIteratorImpl({nextPageToken: (task$ as shared.PollForDecisionTaskResponse).NextPageToken, execution: (task$ as shared.PollForDecisionTaskResponse).WorkflowExecution, domain: domain, service: service, metricsScope: metricScope, startedEventID: __goscriptLiteralField10, featureFlags: (r$ as WorkflowReplayer).options.FeatureFlags}) })()
		let taskHandler = await __goscript_internal_task_handlers.newWorkflowTaskHandler(domain, (workerParams).clone(), null, (r$ as WorkflowReplayer).registry)
		let [resp, err] = await (taskHandler !== null && (taskHandler as any).__isVarRef !== true && (taskHandler as any).__goValue === undefined ? (taskHandler as Exclude<__goscript_internal_public.WorkflowTaskHandler, null>) : $.pointerValue<Exclude<__goscript_internal_public.WorkflowTaskHandler, null>>(taskHandler)).ProcessWorkflowTask(new __goscript_internal_task_handlers.workflowTask({task: task, historyIterator: $.interfaceValue<__goscript_internal_public.HistoryIterator | null>(iterator, "*internal.historyIteratorImpl", /* @__PURE__ */ $.pointerType("internal.historyIteratorImpl"))}), (null as __goscript_internal_public.decisionHeartbeatFunc | null))
		if (err != null) {
			return err
		}

		//Technically speaking we do not need extra validations for the continue as new cases as they are equivalent to that case getting completed.
		if ((last !== null && (last as any).__isVarRef !== true && (last as any).__goValue === undefined ? ((last as any) as shared.HistoryEvent).GetEventType() : shared.HistoryEvent.prototype.GetEventType.call(last)) != 1) {
			return null
		}
		// TODO: the following result will not be executed if nextPageToken is not nil, which is probably fine as the actual workflow task
		// processing logic does not have such check. If we want to always execute this check for closed workflows, we need to dump the
		// entire history before starting the replay as otherwise we can't get the last event here.
		// compare workflow results
		if (resp != null) {
			let __goscriptTuple5: any = $.typeAssertTuple<shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null>(resp, /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest"))
			let completeReq: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				for (let __goscriptRangeTarget2 = $.pointerValue<shared.RespondDecisionTaskCompletedRequest>(completeReq).Decisions, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let d = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as shared.Decision | $.VarRef<shared.Decision> | null)
					if (((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as shared.Decision).GetDecisionType() : shared.Decision.prototype.GetDecisionType.call(d)) == 3) && ((last !== null && (last as any).__isVarRef !== true && (last as any).__goValue === undefined ? ((last as any) as shared.HistoryEvent).GetEventType() : shared.HistoryEvent.prototype.GetEventType.call(last)) == 1)) {
						let resultA: $.Slice<number> = $.pointerValue<shared.WorkflowExecutionCompletedEventAttributes>($.pointerValue<shared.HistoryEvent>(last).WorkflowExecutionCompletedEventAttributes).Result
						let resultB: $.Slice<number> = $.pointerValue<shared.CompleteWorkflowExecutionDecisionAttributes>($.pointerValue<shared.Decision>(d).CompleteWorkflowExecutionDecisionAttributes).Result
						if (bytes.Compare(resultA, resultB) == 0) {
							return null
						}
					}
				}
			}
		}
		return fmt.Errorf("replay workflow doesn't return the same result as the last event, resp: %v, last: %v", resp, $.interfaceValue(last, "*shared.HistoryEvent", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")))
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowReplayer",
		() => new WorkflowReplayer(),
		() => [$.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")], true), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")], true), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("ReplayPartialWorkflowHistoryFromJSON", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["reader", "io.Reader"], ["lastEventID", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("ReplayPartialWorkflowHistoryFromJSONFile", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["jsonfileName", /* @__PURE__ */ $.basicType("string")], ["lastEventID", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("ReplayWorkflowExecution", [["ctx", "context.Context"], ["service", "workflowserviceclient.Interface"], ["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["domain", /* @__PURE__ */ $.basicType("string")], ["execution", "internal.WorkflowExecution"]], ["error"], true), $.methodSignature("ReplayWorkflowHistory", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["history", /* @__PURE__ */ $.pointerType("shared.History")]], ["error"], true), $.methodSignature("ReplayWorkflowHistoryFromJSON", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["reader", "io.Reader"]], ["error"], true), $.methodSignature("ReplayWorkflowHistoryFromJSONFile", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["jsonfileName", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("replayWorkflowHistory", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")], ["service", "workflowserviceclient.Interface"], ["domain", /* @__PURE__ */ $.basicType("string")], ["execution", /* @__PURE__ */ $.pointerType("internal.WorkflowExecution")], ["history", /* @__PURE__ */ $.pointerType("shared.History")], ["nextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		WorkflowReplayer,
		() => [/* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("options", "internal.ReplayOptions", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const replayDomainName: string = "ReplayDomain"

export const replayTaskListName: string = "ReplayTaskList"

export const replayWorkflowID: string = "ReplayId"

export const replayWorkerIdentity: string = "replayID"

export const replayPreviousStartedEventID: number = 9223372036854775807

export const replayTaskToken: string = "ReplayTaskToken"

export let errReplayEmptyHistory: $.GoError = errors.New("empty events")

export function __goscript_set_errReplayEmptyHistory(__goscriptValue: $.GoError): void {
	errReplayEmptyHistory = __goscriptValue
}

export let errReplayHistoryTooShort: $.GoError = errors.New("at least 3 events expected in the history")

export function __goscript_set_errReplayHistoryTooShort(__goscriptValue: $.GoError): void {
	errReplayHistoryTooShort = __goscriptValue
}

export let errReplayInvalidFirstEvent: $.GoError = errors.New("first event is not WorkflowExecutionStarted")

export function __goscript_set_errReplayInvalidFirstEvent(__goscriptValue: $.GoError): void {
	errReplayInvalidFirstEvent = __goscriptValue
}

export let errReplayCorruptedStartedEvent: $.GoError = errors.New("corrupted WorkflowExecutionStarted")

export function __goscript_set_errReplayCorruptedStartedEvent(__goscriptValue: $.GoError): void {
	errReplayCorruptedStartedEvent = __goscriptValue
}

export function IsReplayDomain(dn: string): boolean {
	return $.stringEqual("ReplayDomain", dn)
}

export async function NewWorkflowReplayer(): globalThis.Promise<WorkflowReplayer | $.VarRef<WorkflowReplayer> | null> {
	return NewWorkflowReplayerWithOptions(new ReplayOptions(undefined, true))
}

export async function NewWorkflowReplayerWithOptions(__goscriptParam1: ReplayOptions): globalThis.Promise<WorkflowReplayer | $.VarRef<WorkflowReplayer> | null> {
	let options: $.VarRef<ReplayOptions> = $.varRef(__goscriptParam1)
	augmentReplayOptions(options)
	return (await (async () => { const __goscriptLiteralField11 = await __goscript_registry.newRegistry(); return new WorkflowReplayer({registry: __goscriptLiteralField11, options: options.value}) })())
}

export async function extractHistoryFromReader(r: io.Reader | null, lastEventID: bigint): globalThis.Promise<[shared.History | $.VarRef<shared.History> | null, $.GoError]> {
	let __goscriptTuple6: any = await io.ReadAll($.pointerValueOrNil(r)!)
	let raw: $.Slice<number> = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to read data: %w", (err as any))]
	}

	let deserializedEvents: $.VarRef<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>> = $.varRef(null! as $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>)
	err = await json.Unmarshal(raw, $.interfaceValue(deserializedEvents, "*[]*shared.HistoryEvent", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")))))

	if (err != null) {
		return [null, fmt.Errorf("invalid json contents: %w", (err as any))]
	}

	if (lastEventID <= 0n) {
		return [new shared.History({Events: deserializedEvents.value}), null]
	}

	// Caller is potentially asking for subset of history instead of all history events
	let events: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> = null! as $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>
	for (let __goscriptRangeTarget3 = deserializedEvents.value, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let event = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null)
		events = $.appendOne(events, event, $.appendZeros.nil)
		if ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as shared.HistoryEvent).GetEventId() : shared.HistoryEvent.prototype.GetEventId.call(event)) == lastEventID) {
			// Copy history up to last event (inclusive)
			break
		}
	}

	return [new shared.History({Events: events}), null]
}

export function augmentReplayOptions(options: ReplayOptions | $.VarRef<ReplayOptions> | null): void {
	const options$: ReplayOptions = options == null ? $.pointerTarget<ReplayOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<ReplayOptions>(options)
	// if the user passes in a tracer then add a tracing context propagator
	if ((options$ as ReplayOptions).Tracer != null) {
		;(options$ as ReplayOptions).ContextPropagators = $.appendOne((options$ as ReplayOptions).ContextPropagators, __goscript_tracer.NewTracingContextPropagator(zap.NewNop(), (options$ as ReplayOptions).Tracer), $.appendZeros.nil)
	} else {
		;(options$ as ReplayOptions).Tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}
}

var __goscriptAwait: any
