// Generated file based on internal_workflow_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as time from "@goscript/time/index.js"

import * as serializer from "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import type * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import * as __goscript_internal_schedule_client from "./internal_schedule_client.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_propagation from "./propagation.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_schedule from "./schedule.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/common/serializer/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./convert.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_retry.gs.ts"
import "./internal_schedule_client.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./propagation.gs.ts"
import "./registry.gs.ts"
import "./schedule.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.workflowClient", "internal.WorkflowRun", "internal.workflowRunImpl", "internal.HistoryEventIterator", "internal.historyEventIteratorImpl", "internal.GetWorkflowHistoryWithOptionsRequest", "internal.DescribeWorkflowExecutionWithOptionsRequest", "internal.QueryWorkflowWithOptionsRequest", "internal.QueryWorkflowWithOptionsResponse"])

export type WorkflowRun = {
	Get(ctx: context.Context | null, valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	GetID(): string
	GetRunID(): string
}

$.registerInterfaceType(
	"internal.WorkflowRun",
	null,
	[$.methodSignature("Get", [["ctx", "context.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("GetID", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetRunID", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type HistoryEventIterator = {
	HasNext(): boolean | globalThis.Promise<boolean>
	Next(): [s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, $.GoError] | globalThis.Promise<[s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, $.GoError]>
}

$.registerInterfaceType(
	"internal.HistoryEventIterator",
	null,
	[$.methodSignature("HasNext", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Next", [], [/* @__PURE__ */ $.pointerType("shared.HistoryEvent"), "error"])]
);

export class workflowClient {
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

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
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

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		workflowService: workflowserviceclient.Interface | null
		domain: string
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		identity: string
		dataConverter: __goscript_encoded.DataConverter | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{workflowService?: workflowserviceclient.Interface | null, domain?: string, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, identity?: string, dataConverter?: __goscript_encoded.DataConverter | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowService: init?.workflowService ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			identity: init?.identity ?? ("" as string),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowClient {
		return new workflowClient(this, true)
	}

	public __goscriptAssign(source: workflowClient): void {
		const target = this._fields
		const values = source._fields
		target.workflowService = $.assignFieldValue(target.workflowService, values.workflowService, "workflowserviceclient.Interface")
		target.domain = values.domain
		target.registry = values.registry
		target.metricsScope = values.metricsScope
		target.identity = values.identity
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async CancelWorkflow(ctx: context.Context | null, workflowID: string, runID: string, opts: $.Slice<__goscript_client.Option | null>): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let request: s.RequestCancelWorkflowExecutionRequest | $.VarRef<s.RequestCancelWorkflowExecutionRequest> | null = (await (async () => { const __goscriptLiteralField0 = common.StringPtr((wc$ as workflowClient).domain); const __goscriptLiteralField3 = common.StringPtr((wc$ as workflowClient).identity); const __goscriptLiteralField4 = common.StringPtr(await uuid.New()); return new s.RequestCancelWorkflowExecutionRequest({Domain: __goscriptLiteralField0, WorkflowExecution: (() => { const __goscriptLiteralField1 = common.StringPtr(workflowID); const __goscriptLiteralField2 = getRunID(runID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField1, RunId: __goscriptLiteralField2}) })(), Identity: __goscriptLiteralField3, RequestId: __goscriptLiteralField4}) })())

		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_client.Option | null)
			{
				const __goscriptTypeSwitchValue = opt
				switch (true) {
					case $.typeAssert<__goscript_client.CancelReason>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "internal.CancelReason")).ok:
						{
							let o: __goscript_client.CancelReason = $.typeAssert<__goscript_client.CancelReason>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "internal.CancelReason")).value
							let cause = $.varRef(o)
							$.pointerValue<s.RequestCancelWorkflowExecutionRequest>(request).Cause = cause
						}
						break
				}
			}
		}

		return backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple0: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple0[0]
			let cancel = __goscriptTuple0[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple0[2]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).RequestCancelWorkflowExecution(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
	}

	public async CompleteActivity(ctx: context.Context | null, taskToken: $.Slice<number>, result: any, err: $.GoError): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if (taskToken == null) {
			return errors.New("invalid task token provided")
		}

		let data: $.Slice<number> = null! as $.Slice<number>
		if (result != null) {
			let err0: $.GoError = null! as $.GoError
			let __goscriptTuple1: any = await __goscript_internal_worker.encodeArg((wc$ as workflowClient).dataConverter, result)
			data = __goscriptTuple1[0]
			err0 = __goscriptTuple1[1]
			if (err0 != null) {
				return err0
			}
		}
		let request = await __goscript_internal_task_pollers.convertActivityResultToRespondRequest((wc$ as workflowClient).identity, taskToken, data, err, (wc$ as workflowClient).dataConverter)
		return __goscript_internal_task_pollers.reportActivityComplete(ctx, (wc$ as workflowClient).workflowService, request, $.interfaceValue<tally.Scope | null>((wc$ as workflowClient).metricsScope, "*metrics.TaggedScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope")), ((wc$ as workflowClient).featureFlags).clone())
	}

	public async CompleteActivityByID(ctx: context.Context | null, domain: string, workflowID: string, runID: string, activityID: string, result: any, err: $.GoError): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		if ((($.stringEqual(activityID, "")) || ($.stringEqual(workflowID, ""))) || ($.stringEqual(domain, ""))) {
			return errors.New("empty activity or workflow id or domainName")
		}

		let data: $.Slice<number> = null! as $.Slice<number>
		if (result != null) {
			let err0: $.GoError = null! as $.GoError
			let __goscriptTuple2: any = await __goscript_internal_worker.encodeArg((wc$ as workflowClient).dataConverter, result)
			data = __goscriptTuple2[0]
			err0 = __goscriptTuple2[1]
			if (err0 != null) {
				return err0
			}
		}

		let request = await __goscript_internal_task_pollers.convertActivityResultToRespondRequestByID((wc$ as workflowClient).identity, domain, workflowID, runID, activityID, data, err, (wc$ as workflowClient).dataConverter)
		return __goscript_internal_task_pollers.reportActivityCompleteByID(ctx, (wc$ as workflowClient).workflowService, request, $.interfaceValue<tally.Scope | null>((wc$ as workflowClient).metricsScope, "*metrics.TaggedScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope")), ((wc$ as workflowClient).featureFlags).clone())
	}

	public async CountWorkflow(ctx: context.Context | null, request: s.CountWorkflowExecutionsRequest | $.VarRef<s.CountWorkflowExecutionsRequest> | null): globalThis.Promise<[s.CountWorkflowExecutionsResponse | $.VarRef<s.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.CountWorkflowExecutionsRequest).GetDomain() : s.CountWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.CountWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.CountWorkflowExecutionsResponse | $.VarRef<s.CountWorkflowExecutionsResponse> | null = null! as s.CountWorkflowExecutionsResponse | $.VarRef<s.CountWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple3: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple3[0]
			let cancel = __goscriptTuple3[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple3[2]
			const __goscriptDeferCallee1 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple4: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).CountWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple4[0]
			err1 = __goscriptTuple4[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async DescribeTaskList(ctx: context.Context | null, tasklist: string, __goscriptParam0: s.TaskListType): globalThis.Promise<[s.DescribeTaskListResponse | $.VarRef<s.DescribeTaskListResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		let tasklistType: $.VarRef<s.TaskListType> = $.varRef(__goscriptParam0)
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let request: s.DescribeTaskListRequest | $.VarRef<s.DescribeTaskListRequest> | null = (() => { const __goscriptLiteralField5 = common.StringPtr((wc$ as workflowClient).domain); return new s.DescribeTaskListRequest({Domain: __goscriptLiteralField5, TaskList: (() => { const __goscriptLiteralField6 = common.StringPtr(tasklist); return new s.TaskList({Name: __goscriptLiteralField6}) })(), TaskListType: tasklistType}) })()

		let resp: s.DescribeTaskListResponse | $.VarRef<s.DescribeTaskListResponse> | null = null! as s.DescribeTaskListResponse | $.VarRef<s.DescribeTaskListResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple5: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple5[0]
			let cancel = __goscriptTuple5[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple5[2]
			const __goscriptDeferCallee2 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptShadow0: $.GoError = null! as $.GoError
			let __goscriptTuple6: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).DescribeTaskList(tchCtx, request, opt)
			resp = __goscriptTuple6[0]
			__goscriptShadow0 = __goscriptTuple6[1]
			return __goscriptShadow0
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}

		return [resp, null]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, workflowID: string, runID: string): globalThis.Promise<[s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		let request: DescribeWorkflowExecutionWithOptionsRequest | $.VarRef<DescribeWorkflowExecutionWithOptionsRequest> | null = new DescribeWorkflowExecutionWithOptionsRequest({WorkflowID: workflowID, RunID: runID, QueryConsistencyLevel: 0})
		return (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).DescribeWorkflowExecutionWithOptions(ctx, request) : workflowClient.prototype.DescribeWorkflowExecutionWithOptions.call(wc, ctx, request))
	}

	public async DescribeWorkflowExecutionWithOptions(ctx: context.Context | null, request: DescribeWorkflowExecutionWithOptionsRequest | $.VarRef<DescribeWorkflowExecutionWithOptionsRequest> | null): globalThis.Promise<[s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		const request$: DescribeWorkflowExecutionWithOptionsRequest = request == null ? $.pointerTarget<DescribeWorkflowExecutionWithOptionsRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<DescribeWorkflowExecutionWithOptionsRequest>(request)
		let req: s.DescribeWorkflowExecutionRequest | $.VarRef<s.DescribeWorkflowExecutionRequest> | null = (() => { const __goscriptLiteralField7 = common.StringPtr((wc$ as workflowClient).domain); const __goscriptLiteralField10 = __goscript_convert.convertQueryConsistencyLevel((request$ as DescribeWorkflowExecutionWithOptionsRequest).QueryConsistencyLevel); return new s.DescribeWorkflowExecutionRequest({Domain: __goscriptLiteralField7, Execution: (() => { const __goscriptLiteralField8 = common.StringPtr((request$ as DescribeWorkflowExecutionWithOptionsRequest).WorkflowID); const __goscriptLiteralField9 = common.StringPtr((request$ as DescribeWorkflowExecutionWithOptionsRequest).RunID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField8, RunId: __goscriptLiteralField9}) })(), QueryConsistencyLevel: __goscriptLiteralField10}) })()
		let response: s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null = null! as s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple7: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple7[0]
			let cancel = __goscriptTuple7[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple7[2]
			const __goscriptDeferCallee3 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple8: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).DescribeWorkflowExecution(tchCtx, req, opt)
			response = __goscriptTuple8[0]
			err1 = __goscriptTuple8[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async ExecuteWorkflow(ctx: context.Context | null, options: __goscript_client.StartWorkflowOptions, workflow: any, args: $.Slice<any>): globalThis.Promise<[WorkflowRun | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		// start the workflow execution
		let runID: string = ""
		let workflowID: string = ""
		let __goscriptTuple9: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).StartWorkflow(ctx, (options).clone(), workflow, args) : workflowClient.prototype.StartWorkflow.call(wc, ctx, (options).clone(), workflow, args))
		let executionInfo: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		let executionInfo$: __goscript_workflow.WorkflowExecution = executionInfo == null ? $.pointerTarget<__goscript_workflow.WorkflowExecution>(executionInfo) : (executionInfo as any).__isVarRef === true ? (executionInfo as any).value : (executionInfo as any).__goValue === undefined ? (executionInfo as any) : $.pointerTarget<__goscript_workflow.WorkflowExecution>(executionInfo)
		if (err != null) {
			{
				let __goscriptTuple10: any = $.typeAssertTuple<s.WorkflowExecutionAlreadyStartedError | $.VarRef<s.WorkflowExecutionAlreadyStartedError> | null>(err, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))
				let alreadyStartedErr: s.WorkflowExecutionAlreadyStartedError | $.VarRef<s.WorkflowExecutionAlreadyStartedError> | null = __goscriptTuple10[0]
				let ok = __goscriptTuple10[1]
				if (ok) {
					runID = (alreadyStartedErr !== null && (alreadyStartedErr as any).__isVarRef !== true && (alreadyStartedErr as any).__goValue === undefined ? ((alreadyStartedErr as any) as s.WorkflowExecutionAlreadyStartedError).GetRunId() : s.WorkflowExecutionAlreadyStartedError.prototype.GetRunId.call(alreadyStartedErr))
					// Assumption is that AlreadyStarted is never returned when options.ID is empty as UUID generated by
					// StartWorkflow is not going to collide ever.
					workflowID = options.ID
				} else {
					return [null, err]
				}
			}
		} else {
			runID = (executionInfo$ as __goscript_workflow.WorkflowExecution).RunID
			workflowID = (executionInfo$ as __goscript_workflow.WorkflowExecution).ID
		}

		let iterFn: ((fnCtx: context.Context | null, fnRunID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null = $.functionValue((fnCtx: context.Context | null, fnRunID: string): HistoryEventIterator | null => {
			return (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).GetWorkflowHistory(fnCtx, workflowID, fnRunID, true, 1) : workflowClient.prototype.GetWorkflowHistory.call(wc, fnCtx, workflowID, fnRunID, true, 1))
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["internal.HistoryEventIterator"] } as $.FunctionTypeInfo))

		return [$.interfaceValue<WorkflowRun | null>(new workflowRunImpl({workflowFn: workflow, workflowID: workflowID, firstRunID: runID, currentRunID: runID, iterFn: iterFn, dataConverter: (wc$ as workflowClient).dataConverter, registry: (wc$ as workflowClient).registry}), "*internal.workflowRunImpl", /* @__PURE__ */ $.pointerType("internal.workflowRunImpl")), null]
	}

	public async GetSearchAttributes(ctx: context.Context | null): globalThis.Promise<[s.GetSearchAttributesResponse | $.VarRef<s.GetSearchAttributesResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let response: s.GetSearchAttributesResponse | $.VarRef<s.GetSearchAttributesResponse> | null = null! as s.GetSearchAttributesResponse | $.VarRef<s.GetSearchAttributesResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple11: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple11[0]
			let cancel = __goscriptTuple11[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple11[2]
			const __goscriptDeferCallee4 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple12: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).GetSearchAttributes(tchCtx, opt)
			response = __goscriptTuple12[0]
			err1 = __goscriptTuple12[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public GetWorkflow(ctx: context.Context | null, workflowID: string, runID: string): WorkflowRun | null {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		let iterFn: ((fnCtx: context.Context | null, fnRunID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null = $.functionValue((fnCtx: context.Context | null, fnRunID: string): HistoryEventIterator | null => {
			return (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).GetWorkflowHistory(fnCtx, workflowID, fnRunID, true, 1) : workflowClient.prototype.GetWorkflowHistory.call(wc, fnCtx, workflowID, fnRunID, true, 1))
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["internal.HistoryEventIterator"] } as $.FunctionTypeInfo))

		return $.interfaceValue<WorkflowRun | null>(new workflowRunImpl({workflowID: workflowID, firstRunID: runID, currentRunID: runID, iterFn: iterFn, dataConverter: (wc$ as workflowClient).dataConverter, registry: (wc$ as workflowClient).registry}), "*internal.workflowRunImpl", /* @__PURE__ */ $.pointerType("internal.workflowRunImpl"))
	}

	public GetWorkflowHistory(ctx: context.Context | null, workflowID: string, runID: string, isLongPoll: boolean, filterType: s.HistoryEventFilterType): HistoryEventIterator | null {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		let request: GetWorkflowHistoryWithOptionsRequest | $.VarRef<GetWorkflowHistoryWithOptionsRequest> | null = new GetWorkflowHistoryWithOptionsRequest({WorkflowID: workflowID, RunID: runID, IsLongPoll: isLongPoll, FilterType: filterType, QueryConsistencyLevel: 0})
		let iter = (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).GetWorkflowHistoryWithOptions(ctx, request) : workflowClient.prototype.GetWorkflowHistoryWithOptions.call(wc, ctx, request))
		return iter
	}

	public GetWorkflowHistoryWithOptions(ctx: context.Context | null, request: GetWorkflowHistoryWithOptionsRequest | $.VarRef<GetWorkflowHistoryWithOptionsRequest> | null): HistoryEventIterator | null {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		const request$: GetWorkflowHistoryWithOptionsRequest = request == null ? $.pointerTarget<GetWorkflowHistoryWithOptionsRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<GetWorkflowHistoryWithOptionsRequest>(request)
		let domain = (wc$ as workflowClient).domain
		let paginate: ((nextToken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null = $.functionValue(async (nextToken: $.Slice<number>): globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> => {
			let req: s.GetWorkflowExecutionHistoryRequest | $.VarRef<s.GetWorkflowExecutionHistoryRequest> | null = (() => { const __goscriptLiteralField11 = common.StringPtr(domain); const __goscriptLiteralField14 = common.BoolPtr((request$ as GetWorkflowHistoryWithOptionsRequest).IsLongPoll); const __goscriptLiteralField15 = common.BoolPtr((request$ as GetWorkflowHistoryWithOptionsRequest).IsLongPoll); const __goscriptLiteralField16 = __goscript_convert.convertQueryConsistencyLevel((request$ as GetWorkflowHistoryWithOptionsRequest).QueryConsistencyLevel); return new s.GetWorkflowExecutionHistoryRequest({Domain: __goscriptLiteralField11, Execution: (() => { const __goscriptLiteralField12 = common.StringPtr((request$ as GetWorkflowHistoryWithOptionsRequest).WorkflowID); const __goscriptLiteralField13 = getRunID((request$ as GetWorkflowHistoryWithOptionsRequest).RunID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField12, RunId: __goscriptLiteralField13}) })(), WaitForNewEvent: __goscriptLiteralField14, HistoryEventFilterType: $.fieldRef((request$ as GetWorkflowHistoryWithOptionsRequest)._fields, "FilterType"), NextPageToken: nextToken, SkipArchival: __goscriptLiteralField15, QueryConsistencyLevel: __goscriptLiteralField16}) })()

			let response: s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null = null! as s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null
			let err: $.GoError = null! as $.GoError
			Loop: while (true) {
				let isFinalLongPoll: boolean = false
				err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
					await using __defer = new $.AsyncDisposableStack()
					let err1: $.GoError = null! as $.GoError
					let __goscriptTuple13: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), $.arrayToSlice<((builder: __goscript_internal_utils.contextBuilder | $.VarRef<__goscript_internal_utils.contextBuilder> | null) => void) | null>([$.functionValue(async (builder: __goscript_internal_utils.contextBuilder | $.VarRef<__goscript_internal_utils.contextBuilder> | null): globalThis.Promise<void> => {
						if ((request$ as GetWorkflowHistoryWithOptionsRequest).IsLongPoll) {
							$.pointerValue<__goscript_internal_utils.contextBuilder>(builder).Timeout = 25000000000n
							let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
							if (ok && $.markAsStructValue($.cloneStructValue(deadline)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add($.pointerValue<__goscript_internal_utils.contextBuilder>(builder).Timeout))))) {
								// insufficient time for another poll, so this needs to be the last attempt
								isFinalLongPoll = true
							}
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.contextBuilder")], results: [] } as $.FunctionTypeInfo))]))
					let tchCtx = __goscriptTuple13[0]
					let cancel = __goscriptTuple13[1]
					let opt: $.Slice<yarpc.CallOption> = __goscriptTuple13[2]
					const __goscriptDeferCallee5 = cancel
					__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee5!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					let __goscriptTuple14: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).GetWorkflowExecutionHistory(tchCtx, req, opt)
					response = __goscriptTuple14[0]
					err1 = __goscriptTuple14[1]

					if (err1 != null) {
						return err1
					}

					if ($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).RawHistory != null) {
						let __goscriptTuple15: any = await serializer.DeserializeBlobDataToHistoryEvents($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).RawHistory, (request$ as GetWorkflowHistoryWithOptionsRequest).FilterType)
						let __goscriptShadow1: s.History | $.VarRef<s.History> | null = __goscriptTuple15[0]
						let __goscriptShadow2 = __goscriptTuple15[1]
						if (__goscriptShadow2 != null) {
							return __goscriptShadow2
						}
						$.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).History = __goscriptShadow1
					}
					return err1
				}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), $.functionValue((err: $.GoError): boolean => {
					return __goscript_internal_retry.isServiceTransientError(err) || isEntityNonExistFromPassive(err)
				}, ({ kind: $.TypeKind.Function, params: ["error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

				if (err != null) {
					return [null, err]
				}
				if (((request$ as GetWorkflowHistoryWithOptionsRequest).IsLongPoll && ($.sliceLen($.pointerValue<s.History>($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).History).Events) == 0)) && ($.sliceLen($.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).NextPageToken) != 0)) {
					if (isFinalLongPoll) {
						// essentially a deadline exceeded, the last attempt did not get a result.
						// this is necessary because the server does not know if we are able to try again,
						// so it returns an empty result slightly before a timeout occurs, so the next
						// attempt's token can be returned if it wishes to retry.
						return [null, fmt.Errorf("timed out waiting for the workflow to finish: %w", (context.DeadlineExceeded as any))]
					}
					$.pointerValue<s.GetWorkflowExecutionHistoryRequest>(req).NextPageToken = $.pointerValue<s.GetWorkflowExecutionHistoryResponse>(response).NextPageToken
					continue Loop
				}
				break Loop
			}
			return [response, null]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"), "error"] } as $.FunctionTypeInfo))

		return $.interfaceValue<HistoryEventIterator | null>(new historyEventIteratorImpl({paginate: paginate}), "*internal.historyEventIteratorImpl", /* @__PURE__ */ $.pointerType("internal.historyEventIteratorImpl"))
	}

	public async ListArchivedWorkflow(ctx: context.Context | null, request: s.ListArchivedWorkflowExecutionsRequest | $.VarRef<s.ListArchivedWorkflowExecutionsRequest> | null): globalThis.Promise<[s.ListArchivedWorkflowExecutionsResponse | $.VarRef<s.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ListArchivedWorkflowExecutionsRequest).GetDomain() : s.ListArchivedWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ListArchivedWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ListArchivedWorkflowExecutionsResponse | $.VarRef<s.ListArchivedWorkflowExecutionsResponse> | null = null! as s.ListArchivedWorkflowExecutionsResponse | $.VarRef<s.ListArchivedWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let timeout = maxListArchivedWorkflowTimeout
			let now = $.markAsStructValue($.cloneStructValue(time.Now()))
			if (ctx != null) {
				{
					let [expiration, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
					if (ok && $.markAsStructValue($.cloneStructValue(expiration)).After($.markAsStructValue($.cloneStructValue(now)))) {
						timeout = $.markAsStructValue($.cloneStructValue(expiration)).Sub($.markAsStructValue($.cloneStructValue(now)))
						if (timeout > maxListArchivedWorkflowTimeout) {
							timeout = maxListArchivedWorkflowTimeout
						} else {
							if (timeout < 1000000000n) {
								timeout = 1000000000n
							}
						}
					}
				}
			}
			let __goscriptTuple16: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), $.arrayToSlice<((builder: __goscript_internal_utils.contextBuilder | $.VarRef<__goscript_internal_utils.contextBuilder> | null) => void) | null>([__goscript_internal_utils.chanTimeout(timeout)]))
			let tchCtx = __goscriptTuple16[0]
			let cancel = __goscriptTuple16[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple16[2]
			const __goscriptDeferCallee6 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee6!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple17: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ListArchivedWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple17[0]
			err1 = __goscriptTuple17[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async ListClosedWorkflow(ctx: context.Context | null, request: s.ListClosedWorkflowExecutionsRequest | $.VarRef<s.ListClosedWorkflowExecutionsRequest> | null): globalThis.Promise<[s.ListClosedWorkflowExecutionsResponse | $.VarRef<s.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ListClosedWorkflowExecutionsRequest).GetDomain() : s.ListClosedWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ListClosedWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ListClosedWorkflowExecutionsResponse | $.VarRef<s.ListClosedWorkflowExecutionsResponse> | null = null! as s.ListClosedWorkflowExecutionsResponse | $.VarRef<s.ListClosedWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple18: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple18[0]
			let cancel = __goscriptTuple18[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple18[2]
			const __goscriptDeferCallee7 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple19: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ListClosedWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple19[0]
			err1 = __goscriptTuple19[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async ListOpenWorkflow(ctx: context.Context | null, request: s.ListOpenWorkflowExecutionsRequest | $.VarRef<s.ListOpenWorkflowExecutionsRequest> | null): globalThis.Promise<[s.ListOpenWorkflowExecutionsResponse | $.VarRef<s.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ListOpenWorkflowExecutionsRequest).GetDomain() : s.ListOpenWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ListOpenWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ListOpenWorkflowExecutionsResponse | $.VarRef<s.ListOpenWorkflowExecutionsResponse> | null = null! as s.ListOpenWorkflowExecutionsResponse | $.VarRef<s.ListOpenWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple20: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple20[0]
			let cancel = __goscriptTuple20[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple20[2]
			const __goscriptDeferCallee8 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee8!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple21: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ListOpenWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple21[0]
			err1 = __goscriptTuple21[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async ListWorkflow(ctx: context.Context | null, request: s.ListWorkflowExecutionsRequest | $.VarRef<s.ListWorkflowExecutionsRequest> | null): globalThis.Promise<[s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ListWorkflowExecutionsRequest).GetDomain() : s.ListWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ListWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null = null! as s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple22: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple22[0]
			let cancel = __goscriptTuple22[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple22[2]
			const __goscriptDeferCallee9 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple23: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ListWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple23[0]
			err1 = __goscriptTuple23[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async QueryWorkflow(ctx: context.Context | null, workflowID: string, runID: string, queryType: string, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		let queryWorkflowWithOptionsRequest: QueryWorkflowWithOptionsRequest | $.VarRef<QueryWorkflowWithOptionsRequest> | null = new QueryWorkflowWithOptionsRequest({WorkflowID: workflowID, RunID: runID, QueryType: queryType, Args: args})
		let __goscriptTuple24: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).QueryWorkflowWithOptions(ctx, queryWorkflowWithOptionsRequest) : workflowClient.prototype.QueryWorkflowWithOptions.call(wc, ctx, queryWorkflowWithOptionsRequest))
		let result: QueryWorkflowWithOptionsResponse | $.VarRef<QueryWorkflowWithOptionsResponse> | null = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.pointerValue<QueryWorkflowWithOptionsResponse>(result).QueryResult, null]
	}

	public async QueryWorkflowWithOptions(ctx: context.Context | null, request: QueryWorkflowWithOptionsRequest | $.VarRef<QueryWorkflowWithOptionsRequest> | null): globalThis.Promise<[QueryWorkflowWithOptionsResponse | $.VarRef<QueryWorkflowWithOptionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		const request$: QueryWorkflowWithOptionsRequest = request == null ? $.pointerTarget<QueryWorkflowWithOptionsRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<QueryWorkflowWithOptionsRequest>(request)
		let input: $.Slice<number> = null! as $.Slice<number>
		if ($.sliceLen((request$ as QueryWorkflowWithOptionsRequest).Args) > 0) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple25: any = await __goscript_internal_worker.encodeArgs((wc$ as workflowClient).dataConverter, (request$ as QueryWorkflowWithOptionsRequest).Args)
				input = __goscriptTuple25[0]
				err = __goscriptTuple25[1]
				if (err != null) {
					return [null, err]
				}
			}
		}
		let req: s.QueryWorkflowRequest | $.VarRef<s.QueryWorkflowRequest> | null = (() => { const __goscriptLiteralField17 = common.StringPtr((wc$ as workflowClient).domain); return new s.QueryWorkflowRequest({Domain: __goscriptLiteralField17, Execution: (() => { const __goscriptLiteralField18 = common.StringPtr((request$ as QueryWorkflowWithOptionsRequest).WorkflowID); const __goscriptLiteralField19 = getRunID((request$ as QueryWorkflowWithOptionsRequest).RunID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField18, RunId: __goscriptLiteralField19}) })(), Query: (() => { const __goscriptLiteralField20 = common.StringPtr((request$ as QueryWorkflowWithOptionsRequest).QueryType); return new s.WorkflowQuery({QueryType: __goscriptLiteralField20, QueryArgs: input}) })(), QueryRejectCondition: (request$ as QueryWorkflowWithOptionsRequest).QueryRejectCondition, QueryConsistencyLevel: (request$ as QueryWorkflowWithOptionsRequest).QueryConsistencyLevel}) })()

		let resp: s.QueryWorkflowResponse | $.VarRef<s.QueryWorkflowResponse> | null = null! as s.QueryWorkflowResponse | $.VarRef<s.QueryWorkflowResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple26: any = await __goscript_internal_utils.newChannelContextForQuery(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple26[0]
			let cancel = __goscriptTuple26[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple26[2]
			const __goscriptDeferCallee10 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee10!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptShadow3: $.GoError = null! as $.GoError
			let __goscriptTuple27: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).QueryWorkflow(tchCtx, req, opt)
			resp = __goscriptTuple27[0]
			__goscriptShadow3 = __goscriptTuple27[1]
			return __goscriptShadow3
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}

		if ($.pointerValue<s.QueryWorkflowResponse>(resp).QueryRejected != null) {
			return [new QueryWorkflowWithOptionsResponse({QueryRejected: $.pointerValue<s.QueryWorkflowResponse>(resp).QueryRejected, QueryResult: null}), null]
		}
		return [(() => { const __goscriptLiteralField21 = __goscript_workflow.newEncodedValue($.pointerValue<s.QueryWorkflowResponse>(resp).QueryResult, (wc$ as workflowClient).dataConverter); return new QueryWorkflowWithOptionsResponse({QueryRejected: null, QueryResult: __goscriptLiteralField21}) })(), null]
	}

	public async RecordActivityHeartbeat(ctx: context.Context | null, taskToken: $.Slice<number>, details: $.Slice<any>): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let __goscriptTuple28: any = await __goscript_internal_worker.encodeArgs((wc$ as workflowClient).dataConverter, details)
		let data: $.Slice<number> = __goscriptTuple28[0]
		let err = __goscriptTuple28[1]
		if (err != null) {
			return err
		}
		return __goscript_internal_task_handlers.recordActivityHeartbeat(ctx, (wc$ as workflowClient).workflowService, (wc$ as workflowClient).identity, taskToken, data, ((wc$ as workflowClient).featureFlags).clone())
	}

	public async RecordActivityHeartbeatByID(ctx: context.Context | null, domain: string, workflowID: string, runID: string, activityID: string, details: $.Slice<any>): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let __goscriptTuple29: any = await __goscript_internal_worker.encodeArgs((wc$ as workflowClient).dataConverter, details)
		let data: $.Slice<number> = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		if (err != null) {
			return err
		}
		return __goscript_internal_task_handlers.recordActivityHeartbeatByID(ctx, (wc$ as workflowClient).workflowService, (wc$ as workflowClient).identity, domain, workflowID, runID, activityID, data, ((wc$ as workflowClient).featureFlags).clone())
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, workflowID: string, runID: string): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let request: s.RefreshWorkflowTasksRequest | $.VarRef<s.RefreshWorkflowTasksRequest> | null = (() => { const __goscriptLiteralField22 = common.StringPtr((wc$ as workflowClient).domain); return new s.RefreshWorkflowTasksRequest({Domain: __goscriptLiteralField22, Execution: (() => { const __goscriptLiteralField23 = common.StringPtr(workflowID); const __goscriptLiteralField24 = getRunID(runID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField23, RunId: __goscriptLiteralField24}) })()}) })()

		return backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple30: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple30[0]
			let cancel = __goscriptTuple30[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple30[2]
			const __goscriptDeferCallee11 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee11!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).RefreshWorkflowTasks(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
	}

	public async ResetWorkflow(ctx: context.Context | null, request: s.ResetWorkflowExecutionRequest | $.VarRef<s.ResetWorkflowExecutionRequest> | null): globalThis.Promise<[s.ResetWorkflowExecutionResponse | $.VarRef<s.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ResetWorkflowExecutionRequest).GetDomain() : s.ResetWorkflowExecutionRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ResetWorkflowExecutionRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ResetWorkflowExecutionResponse | $.VarRef<s.ResetWorkflowExecutionResponse> | null = null! as s.ResetWorkflowExecutionResponse | $.VarRef<s.ResetWorkflowExecutionResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple31: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple31[0]
			let cancel = __goscriptTuple31[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple31[2]
			const __goscriptDeferCallee12 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee12!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple32: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ResetWorkflowExecution(tchCtx, request, opt)
			response = __goscriptTuple32[0]
			err1 = __goscriptTuple32[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async ScanWorkflow(ctx: context.Context | null, request: s.ListWorkflowExecutionsRequest | $.VarRef<s.ListWorkflowExecutionsRequest> | null): globalThis.Promise<[s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		if ($.stringLen((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as s.ListWorkflowExecutionsRequest).GetDomain() : s.ListWorkflowExecutionsRequest.prototype.GetDomain.call(request))) == 0) {
			$.pointerValue<s.ListWorkflowExecutionsRequest>(request).Domain = common.StringPtr((wc$ as workflowClient).domain)
		}
		let response: s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null = null! as s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null
		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple33: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple33[0]
			let cancel = __goscriptTuple33[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple33[2]
			const __goscriptDeferCallee13 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee13!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple34: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).ScanWorkflowExecutions(tchCtx, request, opt)
			response = __goscriptTuple34[0]
			err1 = __goscriptTuple34[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public ScheduleClient(): __goscript_internal_schedule_client.ScheduleClient | null {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		return $.interfaceValue<__goscript_internal_schedule_client.ScheduleClient | null>(new __goscript_internal_schedule_client.scheduleClient({workflowService: (wc$ as workflowClient).workflowService, domain: (wc$ as workflowClient).domain, identity: (wc$ as workflowClient).identity, dataConverter: (wc$ as workflowClient).dataConverter, featureFlags: (wc$ as workflowClient).featureFlags}), "*internal.scheduleClient", /* @__PURE__ */ $.pointerType("internal.scheduleClient"))
	}

	public async SignalWithStartWorkflow(ctx: context.Context | null, workflowID: string, signalName: string, signalArg: any, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, workflowArgs: $.Slice<any>): globalThis.Promise<[__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		let __goscriptTuple35: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getSignalWithStartRequest(ctx, "SignalWithStartWorkflow", workflowID, signalName, signalArg, (options).clone(), workflowFunc, workflowArgs) : workflowClient.prototype.getSignalWithStartRequest.call(wc, ctx, "SignalWithStartWorkflow", workflowID, signalName, signalArg, (options).clone(), workflowFunc, workflowArgs))
		let signalWithStartRequest: s.SignalWithStartWorkflowExecutionRequest | $.VarRef<s.SignalWithStartWorkflowExecutionRequest> | null = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		if (err != null) {
			return [null, err]
		}

		let response: s.StartWorkflowExecutionResponse | $.VarRef<s.StartWorkflowExecutionResponse> | null = null! as s.StartWorkflowExecutionResponse | $.VarRef<s.StartWorkflowExecutionResponse> | null

		// Start creating workflow request.
		err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple36: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple36[0]
			let cancel = __goscriptTuple36[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple36[2]
			const __goscriptDeferCallee14 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee14!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple37: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).SignalWithStartWorkflowExecution(tchCtx, signalWithStartRequest, opt)
			response = __goscriptTuple37[0]
			err1 = __goscriptTuple37[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		if (err != null) {
			return [null, err]
		}

		if ((wc$ as workflowClient).metricsScope != null) {
			let scope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wc$ as workflowClient).metricsScope, $.arrayToSlice<string>(["TaskList", options.TaskList, "WorkflowType", $.pointerValue<string>($.pointerValue<s.WorkflowType>($.pointerValue<s.SignalWithStartWorkflowExecutionRequest>(signalWithStartRequest).WorkflowType).Name)]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.WorkflowSignalWithStartCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let executionInfo: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null = (() => { const __goscriptLiteralField25 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.StartWorkflowExecutionResponse).GetRunId() : s.StartWorkflowExecutionResponse.prototype.GetRunId.call(response)); return new __goscript_workflow.WorkflowExecution({ID: options.ID, RunID: __goscriptLiteralField25}) })()
		return [executionInfo, null]
	}

	public async SignalWithStartWorkflowAsync(ctx: context.Context | null, workflowID: string, signalName: string, signalArg: any, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, workflowArgs: $.Slice<any>): globalThis.Promise<[__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		let __goscriptTuple38: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getSignalWithStartRequest(ctx, "SignalWithStartWorkflow", workflowID, signalName, signalArg, (options).clone(), workflowFunc, workflowArgs) : workflowClient.prototype.getSignalWithStartRequest.call(wc, ctx, "SignalWithStartWorkflow", workflowID, signalName, signalArg, (options).clone(), workflowFunc, workflowArgs))
		let signalWithStartRequest: s.SignalWithStartWorkflowExecutionRequest | $.VarRef<s.SignalWithStartWorkflowExecutionRequest> | null = __goscriptTuple38[0]
		let err = __goscriptTuple38[1]
		if (err != null) {
			return [null, err]
		}

		let asyncSignalWithStartRequest: s.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<s.SignalWithStartWorkflowExecutionAsyncRequest> | null = new s.SignalWithStartWorkflowExecutionAsyncRequest({Request: signalWithStartRequest})

		err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple39: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple39[0]
			let cancel = __goscriptTuple39[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple39[2]
			const __goscriptDeferCallee15 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee15!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple40: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).SignalWithStartWorkflowExecutionAsync(tchCtx, asyncSignalWithStartRequest, opt)
			err1 = __goscriptTuple40[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		if (err != null) {
			return [null, err]
		}

		if ((wc$ as workflowClient).metricsScope != null) {
			let scope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wc$ as workflowClient).metricsScope, $.arrayToSlice<string>(["TaskList", options.TaskList, "WorkflowType", $.pointerValue<string>($.pointerValue<s.WorkflowType>($.pointerValue<s.SignalWithStartWorkflowExecutionRequest>(signalWithStartRequest).WorkflowType).Name)]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.WorkflowSignalWithStartAsyncCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let executionInfo: __goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null = new __goscript_workflow.WorkflowExecutionAsync({ID: options.ID})
		return [executionInfo, null]
	}

	public async SignalWorkflow(ctx: context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let __goscriptTuple41: any = await __goscript_internal_worker.encodeArg((wc$ as workflowClient).dataConverter, arg)
		let input: $.Slice<number> = __goscriptTuple41[0]
		let err = __goscriptTuple41[1]
		if (err != null) {
			return err
		}
		return __goscript_internal_task_handlers.signalWorkflow(ctx, (wc$ as workflowClient).workflowService, (wc$ as workflowClient).identity, (wc$ as workflowClient).domain, workflowID, runID, signalName, input, ((wc$ as workflowClient).featureFlags).clone())
	}

	public async StartWorkflow(ctx: context.Context | null, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, args: $.Slice<any>): globalThis.Promise<[__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let __goscriptTuple42: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getWorkflowStartRequest(ctx, "StartWorkflow", (options).clone(), workflowFunc, args) : workflowClient.prototype.getWorkflowStartRequest.call(wc, ctx, "StartWorkflow", (options).clone(), workflowFunc, args))
		let startRequest: s.StartWorkflowExecutionRequest | $.VarRef<s.StartWorkflowExecutionRequest> | null = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		let startRequest$: s.StartWorkflowExecutionRequest = startRequest == null ? $.pointerTarget<s.StartWorkflowExecutionRequest>(startRequest) : (startRequest as any).__isVarRef === true ? (startRequest as any).value : (startRequest as any).__goValue === undefined ? (startRequest as any) : $.pointerTarget<s.StartWorkflowExecutionRequest>(startRequest)
		if (err != null) {
			return [null, err]
		}

		let response: s.StartWorkflowExecutionResponse | $.VarRef<s.StartWorkflowExecutionResponse> | null = null! as s.StartWorkflowExecutionResponse | $.VarRef<s.StartWorkflowExecutionResponse> | null

		// Start creating workflow request.
		err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple43: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple43[0]
			let cancel = __goscriptTuple43[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple43[2]
			const __goscriptDeferCallee16 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee16!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple44: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).StartWorkflowExecution(tchCtx, startRequest, opt)
			response = __goscriptTuple44[0]
			err1 = __goscriptTuple44[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		if (err != null) {
			return [null, err]
		}

		if ((wc$ as workflowClient).metricsScope != null) {
			let scope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wc$ as workflowClient).metricsScope, $.arrayToSlice<string>(["TaskList", options.TaskList, "WorkflowType", $.pointerValue<string>($.pointerValue<s.WorkflowType>((startRequest$ as s.StartWorkflowExecutionRequest).WorkflowType).Name)]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.WorkflowStartCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let executionInfo: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null = (() => { const __goscriptLiteralField26 = (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as s.StartWorkflowExecutionResponse).GetRunId() : s.StartWorkflowExecutionResponse.prototype.GetRunId.call(response)); return new __goscript_workflow.WorkflowExecution({ID: $.pointerValue<string>((startRequest$ as s.StartWorkflowExecutionRequest).WorkflowId), RunID: __goscriptLiteralField26}) })()
		return [executionInfo, null]
	}

	public async StartWorkflowAsync(ctx: context.Context | null, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, args: $.Slice<any>): globalThis.Promise<[__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let __goscriptTuple45: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getWorkflowStartRequest(ctx, "StartWorkflowAsync", (options).clone(), workflowFunc, args) : workflowClient.prototype.getWorkflowStartRequest.call(wc, ctx, "StartWorkflowAsync", (options).clone(), workflowFunc, args))
		let startRequest: s.StartWorkflowExecutionRequest | $.VarRef<s.StartWorkflowExecutionRequest> | null = __goscriptTuple45[0]
		let err = __goscriptTuple45[1]
		let startRequest$: s.StartWorkflowExecutionRequest = startRequest == null ? $.pointerTarget<s.StartWorkflowExecutionRequest>(startRequest) : (startRequest as any).__isVarRef === true ? (startRequest as any).value : (startRequest as any).__goValue === undefined ? (startRequest as any) : $.pointerTarget<s.StartWorkflowExecutionRequest>(startRequest)
		if (err != null) {
			return [null, err]
		}

		let asyncStartRequest: s.StartWorkflowExecutionAsyncRequest | $.VarRef<s.StartWorkflowExecutionAsyncRequest> | null = new s.StartWorkflowExecutionAsyncRequest({Request: startRequest})

		// Start creating workflow request.
		err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple46: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple46[0]
			let cancel = __goscriptTuple46[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple46[2]
			const __goscriptDeferCallee17 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee17!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let err1: $.GoError = null! as $.GoError
			let __goscriptTuple47: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).StartWorkflowExecutionAsync(tchCtx, asyncStartRequest, opt)
			err1 = __goscriptTuple47[1]
			return err1
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		if (err != null) {
			return [null, err]
		}

		if ((wc$ as workflowClient).metricsScope != null) {
			let scope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wc$ as workflowClient).metricsScope, $.arrayToSlice<string>(["TaskList", options.TaskList, "WorkflowType", $.pointerValue<string>($.pointerValue<s.WorkflowType>((startRequest$ as s.StartWorkflowExecutionRequest).WorkflowType).Name)]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.WorkflowStartAsyncCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let executionInfo: __goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null = new __goscript_workflow.WorkflowExecutionAsync({ID: $.pointerValue<string>((startRequest$ as s.StartWorkflowExecutionRequest).WorkflowId)})
		return [executionInfo, null]
	}

	public async TerminateWorkflow(ctx: context.Context | null, workflowID: string, runID: string, reason: string, details: $.Slice<number>): globalThis.Promise<$.GoError> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let request: s.TerminateWorkflowExecutionRequest | $.VarRef<s.TerminateWorkflowExecutionRequest> | null = (() => { const __goscriptLiteralField27 = common.StringPtr((wc$ as workflowClient).domain); const __goscriptLiteralField30 = common.StringPtr(reason); const __goscriptLiteralField31 = common.StringPtr((wc$ as workflowClient).identity); return new s.TerminateWorkflowExecutionRequest({Domain: __goscriptLiteralField27, WorkflowExecution: (() => { const __goscriptLiteralField28 = common.StringPtr(workflowID); const __goscriptLiteralField29 = getRunID(runID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField28, RunId: __goscriptLiteralField29}) })(), Reason: __goscriptLiteralField30, Details: details, Identity: __goscriptLiteralField31}) })()

		let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple48: any = await __goscript_internal_utils.newChannelContext(ctx, ((wc$ as workflowClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple48[0]
			let cancel = __goscriptTuple48[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple48[2]
			const __goscriptDeferCallee18 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee18!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((wc$ as workflowClient).workflowService).TerminateWorkflowExecution(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

		return err
	}

	public async getSignalWithStartRequest(ctx: context.Context | null, tracePrefix: string, workflowID: string, signalName: string, signalArg: any, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, workflowArgs: $.Slice<any>): globalThis.Promise<[s.SignalWithStartWorkflowExecutionRequest | $.VarRef<s.SignalWithStartWorkflowExecutionRequest> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)

		let __goscriptTuple49: any = await __goscript_internal_worker.encodeArg((wc$ as workflowClient).dataConverter, signalArg)
		let signalInput: $.Slice<number> = __goscriptTuple49[0]
		let err = __goscriptTuple49[1]
		if (err != null) {
			return [null, err]
		}

		if ($.stringEqual(workflowID, "")) {
			workflowID = uuid.UUID_String((await uuid.NewRandom()))
		}

		if ($.stringEqual(options.TaskList, "")) {
			return [null, errors.New("missing TaskList")]
		}

		let executionTimeout = common.Int32Ceil(time.Duration_Seconds(options.ExecutionStartToCloseTimeout))
		if (executionTimeout <= 0) {
			return [null, errors.New("missing or invalid ExecutionStartToCloseTimeout")]
		}

		let decisionTaskTimeout = common.Int32Ceil(time.Duration_Seconds(options.DecisionTaskStartToCloseTimeout))
		if (decisionTaskTimeout < 0) {
			return [null, errors.New("negative DecisionTaskStartToCloseTimeout provided")]
		}
		if (decisionTaskTimeout == 0) {
			decisionTaskTimeout = 10
		}

		{
			let __goscriptShadow4 = validateRequestID(options.RequestID)
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
		}

		// Validate type and its arguments.
		let __goscriptTuple50: any = await __goscript_internal_workflow.getValidatedWorkflowFunction(workflowFunc, workflowArgs, (wc$ as workflowClient).dataConverter, (wc$ as workflowClient).registry)
		let workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple50[0]
		let input: $.Slice<number> = __goscriptTuple50[1]
		err = __goscriptTuple50[2]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple51: any = await getWorkflowMemo(options.Memo, (wc$ as workflowClient).dataConverter)
		let memo: s.Memo | $.VarRef<s.Memo> | null = __goscriptTuple51[0]
		err = __goscriptTuple51[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple52: any = await serializeSearchAttributes(options.SearchAttributes)
		let searchAttr: s.SearchAttributes | $.VarRef<s.SearchAttributes> | null = __goscriptTuple52[0]
		err = __goscriptTuple52[1]
		if (err != null) {
			return [null, err]
		}

		let delayStartSeconds = common.Int32Ceil(time.Duration_Seconds(options.DelayStart))
		if (delayStartSeconds < 0) {
			return [null, errors.New("Invalid DelayStart option")]
		}

		let jitterStartSeconds = common.Int32Ceil(time.Duration_Seconds(options.JitterStart))
		if (jitterStartSeconds < 0) {
			return [null, errors.New("Invalid JitterStart option")]
		}

		let firstRunAtTimestamp = $.markAsStructValue($.cloneStructValue(options.FirstRunAt)).UnixNano()
		if ($.markAsStructValue($.cloneStructValue(options.FirstRunAt)).IsZero()) {
			firstRunAtTimestamp = 0n
		}
		if (firstRunAtTimestamp < 0n) {
			return [null, errors.New("Invalid FirstRunAt option")]
		}

		let __goscriptTuple53: any = __goscript_convert.convertActiveClusterSelectionPolicy(options.ActiveClusterSelectionPolicy)
		let activeClusterSelectionPolicy: s.ActiveClusterSelectionPolicy | $.VarRef<s.ActiveClusterSelectionPolicy> | null = __goscriptTuple53[0]
		err = __goscriptTuple53[1]
		if (err != null) {
			return [null, err]
		}

		// create a workflow start span and attach it to the context object. finish it immediately
		let __goscriptTuple54: any = await __goscript_propagation.createOpenTracingWorkflowSpan(ctx, (wc$ as workflowClient).tracer, $.markAsStructValue($.cloneStructValue(time.Now())), await fmt.Sprintf("%s-%s", tracePrefix, $.pointerValue<__goscript_workflow.WorkflowType>(workflowType).Name), workflowID, !$.stringEqual(options.CronSchedule, ""))
		ctx = __goscriptTuple54[0]
		let span = __goscriptTuple54[1]
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// get workflow headers from the context
		let header: s.Header | $.VarRef<s.Header> | null = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getWorkflowHeader(ctx) : workflowClient.prototype.getWorkflowHeader.call(wc, ctx))

		let signalWithStartRequest: s.SignalWithStartWorkflowExecutionRequest | $.VarRef<s.SignalWithStartWorkflowExecutionRequest> | null = (await (async () => { const __goscriptLiteralField32 = common.StringPtr((wc$ as workflowClient).domain); const __goscriptLiteralField33 = common.StringPtr(await requestIDOrNew(options.RequestID)); const __goscriptLiteralField34 = common.StringPtr(workflowID); const __goscriptLiteralField35 = __goscript_internal_utils.workflowTypePtr($.pointerValue<__goscript_workflow.WorkflowType>(workflowType)); const __goscriptLiteralField37 = common.TaskListPtr((() => { const __goscriptLiteralField36 = common.StringPtr(options.TaskList); return new s.TaskList({Name: __goscriptLiteralField36}, true) })()); const __goscriptLiteralField38 = common.Int32Ptr(executionTimeout); const __goscriptLiteralField39 = common.Int32Ptr(decisionTaskTimeout); const __goscriptLiteralField40 = common.StringPtr(signalName); const __goscriptLiteralField41 = common.StringPtr((wc$ as workflowClient).identity); const __goscriptLiteralField42 = __goscript_convert.convertRetryPolicy(options.RetryPolicy); const __goscriptLiteralField43 = common.StringPtr(options.CronSchedule); const __goscriptLiteralField44 = await __goscript_client.WorkflowIDReusePolicy_toThriftPtr(options.WorkflowIDReusePolicy); const __goscriptLiteralField45 = common.Int32Ptr(delayStartSeconds); const __goscriptLiteralField46 = common.Int32Ptr(jitterStartSeconds); const __goscriptLiteralField47 = common.Int64Ptr(firstRunAtTimestamp); const __goscriptLiteralField48 = common.CronOverlapPolicyPtr(options.CronOverlapPolicy); return new s.SignalWithStartWorkflowExecutionRequest({Domain: __goscriptLiteralField32, RequestId: __goscriptLiteralField33, WorkflowId: __goscriptLiteralField34, WorkflowType: __goscriptLiteralField35, TaskList: __goscriptLiteralField37, Input: input, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField38, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField39, SignalName: __goscriptLiteralField40, SignalInput: signalInput, Identity: __goscriptLiteralField41, RetryPolicy: __goscriptLiteralField42, CronSchedule: __goscriptLiteralField43, Memo: memo, SearchAttributes: searchAttr, WorkflowIdReusePolicy: __goscriptLiteralField44, Header: header, DelayStartSeconds: __goscriptLiteralField45, JitterStartSeconds: __goscriptLiteralField46, FirstRunAtTimestamp: __goscriptLiteralField47, CronOverlapPolicy: __goscriptLiteralField48, ActiveClusterSelectionPolicy: activeClusterSelectionPolicy}) })())

		return [signalWithStartRequest, null]
	}

	public async getWorkflowHeader(ctx: context.Context | null): globalThis.Promise<s.Header | $.VarRef<s.Header> | null> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		let header: s.Header | $.VarRef<s.Header> | null = new s.Header({Fields: $.makeMap<string, $.Slice<number>>()})
		let writer = __goscript_headers.NewHeaderWriter(header)
		for (let __goscriptRangeTarget1 = $.pointerValue<workflowClient>(wc).contextPropagators, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ctxProp = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
			void (__goscriptAwait = (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).Inject(ctx, writer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return header
	}

	public async getWorkflowStartRequest(ctx: context.Context | null, tracePrefix: string, options: __goscript_client.StartWorkflowOptions, workflowFunc: any, args: $.Slice<any>): globalThis.Promise<[s.StartWorkflowExecutionRequest | $.VarRef<s.StartWorkflowExecutionRequest> | null, $.GoError]> {
		const wc: workflowClient | $.VarRef<workflowClient> | null = this;
		const wc$: workflowClient = wc == null ? $.pointerTarget<workflowClient>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowClient>(wc)
		let workflowID = options.ID
		if ($.stringLen(workflowID) == 0) {
			workflowID = uuid.UUID_String((await uuid.NewRandom()))
		}

		if ($.stringEqual(options.TaskList, "")) {
			return [null, errors.New("missing TaskList")]
		}

		let executionTimeout = common.Int32Ceil(time.Duration_Seconds(options.ExecutionStartToCloseTimeout))
		if (executionTimeout <= 0) {
			return [null, errors.New("missing or invalid ExecutionStartToCloseTimeout")]
		}

		let decisionTaskTimeout = common.Int32Ceil(time.Duration_Seconds(options.DecisionTaskStartToCloseTimeout))
		if (decisionTaskTimeout < 0) {
			return [null, errors.New("negative DecisionTaskStartToCloseTimeout provided")]
		}
		if (decisionTaskTimeout == 0) {
			decisionTaskTimeout = 10
		}

		{
			let err = validateRequestID(options.RequestID)
			if (err != null) {
				return [null, err]
			}
		}

		// Validate type and its arguments.
		let __goscriptTuple55: any = await __goscript_internal_workflow.getValidatedWorkflowFunction(workflowFunc, args, (wc$ as workflowClient).dataConverter, (wc$ as workflowClient).registry)
		let workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple55[0]
		let input: $.Slice<number> = __goscriptTuple55[1]
		let err = __goscriptTuple55[2]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple56: any = await getWorkflowMemo(options.Memo, (wc$ as workflowClient).dataConverter)
		let memo: s.Memo | $.VarRef<s.Memo> | null = __goscriptTuple56[0]
		err = __goscriptTuple56[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple57: any = await serializeSearchAttributes(options.SearchAttributes)
		let searchAttr: s.SearchAttributes | $.VarRef<s.SearchAttributes> | null = __goscriptTuple57[0]
		err = __goscriptTuple57[1]
		if (err != null) {
			return [null, err]
		}

		let delayStartSeconds = common.Int32Ceil(time.Duration_Seconds(options.DelayStart))
		if (delayStartSeconds < 0) {
			return [null, errors.New("Invalid DelayStart option")]
		}

		let jitterStartSeconds = common.Int32Ceil(time.Duration_Seconds(options.JitterStart))
		if (jitterStartSeconds < 0) {
			return [null, errors.New("Invalid JitterStart option")]
		}

		let firstRunAtTimestamp = $.markAsStructValue($.cloneStructValue(options.FirstRunAt)).UnixNano()
		if ($.markAsStructValue($.cloneStructValue(options.FirstRunAt)).IsZero()) {
			firstRunAtTimestamp = 0n
		}
		if (firstRunAtTimestamp < 0n) {
			return [null, errors.New("Invalid FirstRunAt option")]
		}

		let __goscriptTuple58: any = __goscript_convert.convertActiveClusterSelectionPolicy(options.ActiveClusterSelectionPolicy)
		let activeClusterSelectionPolicy: s.ActiveClusterSelectionPolicy | $.VarRef<s.ActiveClusterSelectionPolicy> | null = __goscriptTuple58[0]
		err = __goscriptTuple58[1]
		if (err != null) {
			return [null, err]
		}

		// create a workflow start span and attach it to the context object.
		// N.B. we need to finish this immediately as jaeger does not give us a way
		// to recreate a span given a span context - which means we will run into
		// issues during replay. we work around this by creating and ending the
		// workflow start span and passing in that context to the workflow. So
		// everything beginning with the StartWorkflowExecutionRequest will be
		// parented by the created start workflow span.
		let __goscriptTuple59: any = await __goscript_propagation.createOpenTracingWorkflowSpan(ctx, (wc$ as workflowClient).tracer, $.markAsStructValue($.cloneStructValue(time.Now())), await fmt.Sprintf("%s-%s", tracePrefix, $.pointerValue<__goscript_workflow.WorkflowType>(workflowType).Name), workflowID, !$.stringEqual(options.CronSchedule, ""))
		ctx = __goscriptTuple59[0]
		let span = __goscriptTuple59[1]
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// get workflow headers from the context
		let header: s.Header | $.VarRef<s.Header> | null = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowClient).getWorkflowHeader(ctx) : workflowClient.prototype.getWorkflowHeader.call(wc, ctx))

		// run propagators to extract information about tracing and other stuff, store in headers field
		let startRequest: s.StartWorkflowExecutionRequest | $.VarRef<s.StartWorkflowExecutionRequest> | null = (await (async () => { const __goscriptLiteralField49 = common.StringPtr((wc$ as workflowClient).domain); const __goscriptLiteralField50 = common.StringPtr(await requestIDOrNew(options.RequestID)); const __goscriptLiteralField51 = common.StringPtr(workflowID); const __goscriptLiteralField52 = __goscript_internal_utils.workflowTypePtr($.pointerValue<__goscript_workflow.WorkflowType>(workflowType)); const __goscriptLiteralField54 = common.TaskListPtr((() => { const __goscriptLiteralField53 = common.StringPtr(options.TaskList); return new s.TaskList({Name: __goscriptLiteralField53}, true) })()); const __goscriptLiteralField55 = common.Int32Ptr(executionTimeout); const __goscriptLiteralField56 = common.Int32Ptr(decisionTaskTimeout); const __goscriptLiteralField57 = common.StringPtr((wc$ as workflowClient).identity); const __goscriptLiteralField58 = await __goscript_client.WorkflowIDReusePolicy_toThriftPtr(options.WorkflowIDReusePolicy); const __goscriptLiteralField59 = __goscript_convert.convertRetryPolicy(options.RetryPolicy); const __goscriptLiteralField60 = common.StringPtr(options.CronSchedule); const __goscriptLiteralField61 = common.Int32Ptr(delayStartSeconds); const __goscriptLiteralField62 = common.Int32Ptr(jitterStartSeconds); const __goscriptLiteralField63 = common.Int64Ptr(firstRunAtTimestamp); const __goscriptLiteralField64 = common.CronOverlapPolicyPtr(options.CronOverlapPolicy); return new s.StartWorkflowExecutionRequest({Domain: __goscriptLiteralField49, RequestId: __goscriptLiteralField50, WorkflowId: __goscriptLiteralField51, WorkflowType: __goscriptLiteralField52, TaskList: __goscriptLiteralField54, Input: input, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField55, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField56, Identity: __goscriptLiteralField57, WorkflowIdReusePolicy: __goscriptLiteralField58, RetryPolicy: __goscriptLiteralField59, CronSchedule: __goscriptLiteralField60, Memo: memo, SearchAttributes: searchAttr, Header: header, DelayStartSeconds: __goscriptLiteralField61, JitterStartSeconds: __goscriptLiteralField62, FirstRunAtTimestamp: __goscriptLiteralField63, CronOverlapPolicy: __goscriptLiteralField64, ActiveClusterSelectionPolicy: activeClusterSelectionPolicy}) })())

		return [startRequest, null]
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowClient",
		() => new workflowClient(),
		() => [$.methodSignature("CancelWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("internal.Option")]], ["error"], true), $.methodSignature("CompleteActivity", [["ctx", "context.Context"], ["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"], true), $.methodSignature("CompleteActivityByID", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["activityID", /* @__PURE__ */ $.basicType("string")], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"], true), $.methodSignature("CountWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"), "error"], true), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["tasklist", /* @__PURE__ */ $.basicType("string")], ["tasklistType", /* @__PURE__ */ $.basicType("int32", "shared.TaskListType")]], [/* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"), "error"], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"], true), $.methodSignature("DescribeWorkflowExecutionWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.DescribeWorkflowExecutionWithOptionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"], true), $.methodSignature("ExecuteWorkflow", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.WorkflowRun", "error"], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"), "error"], true), $.methodSignature("GetWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["internal.WorkflowRun"], true), $.methodSignature("GetWorkflowHistory", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["isLongPoll", /* @__PURE__ */ $.basicType("bool")], ["filterType", /* @__PURE__ */ $.basicType("int32", "shared.HistoryEventFilterType")]], ["internal.HistoryEventIterator"], true), $.methodSignature("GetWorkflowHistoryWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.GetWorkflowHistoryWithOptionsRequest")]], ["internal.HistoryEventIterator"], true), $.methodSignature("ListArchivedWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListClosedWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListOpenWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["queryType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("QueryWorkflowWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.QueryWorkflowWithOptionsRequest")]], [/* @__PURE__ */ $.pointerType("internal.QueryWorkflowWithOptionsResponse"), "error"], true), $.methodSignature("RecordActivityHeartbeat", [["ctx", "context.Context"], ["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["details", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("RecordActivityHeartbeatByID", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["activityID", /* @__PURE__ */ $.basicType("string")], ["details", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("ResetWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")]], [/* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"), "error"], true), $.methodSignature("ScanWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ScheduleClient", [], ["internal.ScheduleClient"], true), $.methodSignature("SignalWithStartWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalArg", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["workflowArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecution"), "error"], true), $.methodSignature("SignalWithStartWorkflowAsync", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalArg", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["workflowArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecutionAsync"), "error"], true), $.methodSignature("SignalWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("StartWorkflow", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecution"), "error"], true), $.methodSignature("StartWorkflowAsync", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecutionAsync"), "error"], true), $.methodSignature("TerminateWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")], ["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("getSignalWithStartRequest", [["ctx", "context.Context"], ["tracePrefix", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalArg", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["workflowArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest"), "error"], true), $.methodSignature("getWorkflowHeader", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.Header")], true), $.methodSignature("getWorkflowStartRequest", [["ctx", "context.Context"], ["tracePrefix", /* @__PURE__ */ $.basicType("string")], ["options", "internal.StartWorkflowOptions"], ["workflowFunc", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest"), "error"], true)],
		workflowClient,
		() => [/* @__PURE__ */ $.structField("workflowService", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [5], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [7], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [8], 120, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowRunImpl {
	public get workflowFn(): any {
		return this._fields.workflowFn
	}

	public set workflowFn(value: any) {
		this._fields.workflowFn = value
	}

	public get workflowID(): string {
		return this._fields.workflowID
	}

	public set workflowID(value: string) {
		this._fields.workflowID = value
	}

	public get firstRunID(): string {
		return this._fields.firstRunID
	}

	public set firstRunID(value: string) {
		this._fields.firstRunID = value
	}

	public get currentRunID(): string {
		return this._fields.currentRunID
	}

	public set currentRunID(value: string) {
		this._fields.currentRunID = value
	}

	public get iterFn(): ((ctx: context.Context | null, runID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null {
		return this._fields.iterFn
	}

	public set iterFn(value: ((ctx: context.Context | null, runID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null) {
		this._fields.iterFn = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public _fields: {
		workflowFn: any
		workflowID: string
		firstRunID: string
		currentRunID: string
		iterFn: ((ctx: context.Context | null, runID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null
		dataConverter: __goscript_encoded.DataConverter | null
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
	}

	constructor(init?: Partial<{workflowFn?: any, workflowID?: string, firstRunID?: string, currentRunID?: string, iterFn?: ((ctx: context.Context | null, runID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null, dataConverter?: __goscript_encoded.DataConverter | null, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowFn: init?.workflowFn ?? (null! as any),
			workflowID: init?.workflowID ?? ("" as string),
			firstRunID: init?.firstRunID ?? ("" as string),
			currentRunID: init?.currentRunID ?? ("" as string),
			iterFn: init?.iterFn ?? (null! as ((ctx: context.Context | null, runID: string) => HistoryEventIterator | null | globalThis.Promise<HistoryEventIterator | null>) | null),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowRunImpl {
		return new workflowRunImpl(this, true)
	}

	public __goscriptAssign(source: workflowRunImpl): void {
		const target = this._fields
		const values = source._fields
		target.workflowFn = $.assignFieldValue(target.workflowFn, values.workflowFn, { kind: $.TypeKind.Interface, methods: [] })
		target.workflowID = values.workflowID
		target.firstRunID = values.firstRunID
		target.currentRunID = values.currentRunID
		target.iterFn = values.iterFn
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.registry = values.registry
	}

	public async Get(ctx: context.Context | null, valuePtr: any): globalThis.Promise<$.GoError> {
		let workflowRun: workflowRunImpl | $.VarRef<workflowRunImpl> | null = this;
		const workflowRun$: workflowRunImpl = workflowRun == null ? $.pointerTarget<workflowRunImpl>(workflowRun) : (workflowRun as any).__isVarRef === true ? (workflowRun as any).value : (workflowRun as any).__goValue === undefined ? (workflowRun as any) : $.pointerTarget<workflowRunImpl>(workflowRun)

		let iter = (__goscriptAwait = (workflowRun$ as workflowRunImpl).iterFn!(ctx, (workflowRun$ as workflowRunImpl).currentRunID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!(__goscriptAwait = (iter !== null && (iter as any).__isVarRef !== true && (iter as any).__goValue === undefined ? (iter as Exclude<HistoryEventIterator, null>) : $.pointerValue<Exclude<HistoryEventIterator, null>>(iter)).HasNext(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			$.panic("could not get last history event for workflow")
		}
		let __goscriptTuple60: any = await (iter !== null && (iter as any).__isVarRef !== true && (iter as any).__goValue === undefined ? (iter as Exclude<HistoryEventIterator, null>) : $.pointerValue<Exclude<HistoryEventIterator, null>>(iter)).Next()
		let closeEvent: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null = __goscriptTuple60[0]
		let err = __goscriptTuple60[1]
		let closeEvent$: s.HistoryEvent = closeEvent == null ? $.pointerTarget<s.HistoryEvent>(closeEvent) : (closeEvent as any).__isVarRef === true ? (closeEvent as any).value : (closeEvent as any).__goValue === undefined ? (closeEvent as any) : $.pointerTarget<s.HistoryEvent>(closeEvent)
		if (err != null) {
			return err
		}

		switch ((closeEvent !== null && (closeEvent as any).__isVarRef !== true && (closeEvent as any).__goValue === undefined ? ((closeEvent as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(closeEvent))) {
			case s.EventTypeWorkflowExecutionCompleted:
			{
				let attributes: s.WorkflowExecutionCompletedEventAttributes | $.VarRef<s.WorkflowExecutionCompletedEventAttributes> | null = (closeEvent$ as s.HistoryEvent).WorkflowExecutionCompletedEventAttributes
				let attributes$: s.WorkflowExecutionCompletedEventAttributes = attributes == null ? $.pointerTarget<s.WorkflowExecutionCompletedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<s.WorkflowExecutionCompletedEventAttributes>(attributes)
				if ((valuePtr == null) || ((attributes$ as s.WorkflowExecutionCompletedEventAttributes).Result == null)) {
					return null
				}
				let rf = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(valuePtr)))
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rf)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
					return errors.New("value parameter is not a pointer")
				}
				err = await __goscript_internal_activity.deSerializeFunctionResult((workflowRun$ as workflowRunImpl).workflowFn, (attributes$ as s.WorkflowExecutionCompletedEventAttributes).Result, valuePtr, (workflowRun$ as workflowRunImpl).dataConverter, (workflowRun$ as workflowRunImpl).registry)
				break
			}
			case s.EventTypeWorkflowExecutionFailed:
			{
				let attributes: s.WorkflowExecutionFailedEventAttributes | $.VarRef<s.WorkflowExecutionFailedEventAttributes> | null = (closeEvent$ as s.HistoryEvent).WorkflowExecutionFailedEventAttributes
				err = await __goscript_internal_utils.constructError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionFailedEventAttributes).GetReason() : s.WorkflowExecutionFailedEventAttributes.prototype.GetReason.call(attributes)), $.pointerValue<s.WorkflowExecutionFailedEventAttributes>(attributes).Details, (workflowRun$ as workflowRunImpl).dataConverter)
				break
			}
			case s.EventTypeWorkflowExecutionCanceled:
			{
				let attributes: s.WorkflowExecutionCanceledEventAttributes | $.VarRef<s.WorkflowExecutionCanceledEventAttributes> | null = (closeEvent$ as s.HistoryEvent).WorkflowExecutionCanceledEventAttributes
				let details = __goscript_workflow_testsuite.newEncodedValues($.pointerValue<s.WorkflowExecutionCanceledEventAttributes>(attributes).Details, (workflowRun$ as workflowRunImpl).dataConverter)
				err = $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError($.arrayToSlice<any>([(details as any)])), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
				break
			}
			case s.EventTypeWorkflowExecutionTerminated:
			{
				err = $.interfaceValue<$.GoError>(__goscript_error.newTerminatedError(), "*internal.TerminatedError", /* @__PURE__ */ $.pointerType("internal.TerminatedError"))
				break
			}
			case s.EventTypeWorkflowExecutionTimedOut:
			{
				let attributes: s.WorkflowExecutionTimedOutEventAttributes | $.VarRef<s.WorkflowExecutionTimedOutEventAttributes> | null = (closeEvent$ as s.HistoryEvent).WorkflowExecutionTimedOutEventAttributes
				err = $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionTimedOutEventAttributes).GetTimeoutType() : s.WorkflowExecutionTimedOutEventAttributes.prototype.GetTimeoutType.call(attributes)), null), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
				break
			}
			case s.EventTypeWorkflowExecutionContinuedAsNew:
			{
				let attributes: s.WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<s.WorkflowExecutionContinuedAsNewEventAttributes> | null = (closeEvent$ as s.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes;
				;(workflowRun$ as workflowRunImpl).currentRunID = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionContinuedAsNewEventAttributes).GetNewExecutionRunId() : s.WorkflowExecutionContinuedAsNewEventAttributes.prototype.GetNewExecutionRunId.call(attributes))
				return (workflowRun !== null && (workflowRun as any).__isVarRef !== true && (workflowRun as any).__goValue === undefined ? ((workflowRun as any) as workflowRunImpl).Get(ctx, valuePtr) : workflowRunImpl.prototype.Get.call(workflowRun, ctx, valuePtr))
				break
			}
			default:
			{
				err = fmt.Errorf("Unexpected event type %s when handling workflow execution result", $.namedValueInterfaceValue<any>((closeEvent !== null && (closeEvent as any).__isVarRef !== true && (closeEvent as any).__goValue === undefined ? ((closeEvent as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(closeEvent)), "shared.EventType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				break
			}
		}
		return err
	}

	public GetID(): string {
		const workflowRun: workflowRunImpl | $.VarRef<workflowRunImpl> | null = this;
		return $.pointerValue<workflowRunImpl>(workflowRun).workflowID
	}

	public GetRunID(): string {
		const workflowRun: workflowRunImpl | $.VarRef<workflowRunImpl> | null = this;
		return $.pointerValue<workflowRunImpl>(workflowRun).firstRunID
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowRunImpl",
		() => new workflowRunImpl(),
		() => [$.methodSignature("Get", [["ctx", "context.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("GetID", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetRunID", [], [/* @__PURE__ */ $.basicType("string")], true)],
		workflowRunImpl,
		() => [/* @__PURE__ */ $.structField("workflowFn", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowID", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("firstRunID", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("currentRunID", /* @__PURE__ */ $.basicType("string"), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("iterFn", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["internal.HistoryEventIterator"] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [6], 88, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class historyEventIteratorImpl {
	// whether this iterator is initialized
	public get initialized(): boolean {
		return this._fields.initialized
	}

	public set initialized(value: boolean) {
		this._fields.initialized = value
	}

	// local cached history events and corresponding consuming index
	public get nextEventIndex(): number {
		return this._fields.nextEventIndex
	}

	public set nextEventIndex(value: number) {
		this._fields.nextEventIndex = value
	}

	public get events(): $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> {
		return this._fields.events
	}

	public set events(value: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>) {
		this._fields.events = value
	}

	// token to get next page of history events
	public get nexttoken(): $.Slice<number> {
		return this._fields.nexttoken
	}

	public set nexttoken(value: $.Slice<number>) {
		this._fields.nexttoken = value
	}

	// err when getting next page of history events
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// func which use a next token to get next page of history events
	public get paginate(): ((nexttoken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null {
		return this._fields.paginate
	}

	public set paginate(value: ((nexttoken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null) {
		this._fields.paginate = value
	}

	public _fields: {
		initialized: boolean
		nextEventIndex: number
		events: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		nexttoken: $.Slice<number>
		err: $.GoError
		paginate: ((nexttoken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{initialized?: boolean, nextEventIndex?: number, events?: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, nexttoken?: $.Slice<number>, err?: $.GoError, paginate?: ((nexttoken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			initialized: init?.initialized ?? (false as boolean),
			nextEventIndex: init?.nextEventIndex ?? (0 as number),
			events: init?.events ?? (null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>),
			nexttoken: init?.nexttoken ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError),
			paginate: init?.paginate ?? (null! as ((nexttoken: $.Slice<number>) => [s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): historyEventIteratorImpl {
		return new historyEventIteratorImpl(this, true)
	}

	public __goscriptAssign(source: historyEventIteratorImpl): void {
		const target = this._fields
		const values = source._fields
		target.initialized = values.initialized
		target.nextEventIndex = values.nextEventIndex
		target.events = values.events
		target.nexttoken = values.nexttoken
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.paginate = values.paginate
	}

	public async HasNext(): globalThis.Promise<boolean> {
		let iter: historyEventIteratorImpl | $.VarRef<historyEventIteratorImpl> | null = this;
		const iter$: historyEventIteratorImpl = iter == null ? $.pointerTarget<historyEventIteratorImpl>(iter) : (iter as any).__isVarRef === true ? (iter as any).value : (iter as any).__goValue === undefined ? (iter as any) : $.pointerTarget<historyEventIteratorImpl>(iter)
		if (((iter$ as historyEventIteratorImpl).nextEventIndex < $.sliceLen((iter$ as historyEventIteratorImpl).events)) || ((iter$ as historyEventIteratorImpl).err != null)) {
			return true
		} else {
			if (!(iter$ as historyEventIteratorImpl).initialized || ($.sliceLen((iter$ as historyEventIteratorImpl).nexttoken) != 0)) {
				;(iter$ as historyEventIteratorImpl).initialized = true
				let __goscriptTuple61: any = await (iter$ as historyEventIteratorImpl).paginate!((iter$ as historyEventIteratorImpl).nexttoken)
				let response: s.GetWorkflowExecutionHistoryResponse | $.VarRef<s.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple61[0]
				let err = __goscriptTuple61[1]
				let response$: s.GetWorkflowExecutionHistoryResponse = response == null ? $.pointerTarget<s.GetWorkflowExecutionHistoryResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<s.GetWorkflowExecutionHistoryResponse>(response);
				;(iter$ as historyEventIteratorImpl).nextEventIndex = 0
				if (err == null) {
					;(iter$ as historyEventIteratorImpl).events = $.pointerValue<s.History>((response$ as s.GetWorkflowExecutionHistoryResponse).History).Events;
					;(iter$ as historyEventIteratorImpl).nexttoken = (response$ as s.GetWorkflowExecutionHistoryResponse).NextPageToken;
					;(iter$ as historyEventIteratorImpl).err = null
				} else {
					;(iter$ as historyEventIteratorImpl).events = null;
					;(iter$ as historyEventIteratorImpl).nexttoken = null;
					;(iter$ as historyEventIteratorImpl).err = err
				}

				if (((iter$ as historyEventIteratorImpl).nextEventIndex < $.sliceLen((iter$ as historyEventIteratorImpl).events)) || ((iter$ as historyEventIteratorImpl).err != null)) {
					return true
				}
				return false
			}
		}

		return false
	}

	public async Next(): globalThis.Promise<[s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, $.GoError]> {
		let iter: historyEventIteratorImpl | $.VarRef<historyEventIteratorImpl> | null = this;
		const iter$: historyEventIteratorImpl = iter == null ? $.pointerTarget<historyEventIteratorImpl>(iter) : (iter as any).__isVarRef === true ? (iter as any).value : (iter as any).__goValue === undefined ? (iter as any) : $.pointerTarget<historyEventIteratorImpl>(iter)
		// if caller call the Next() when iteration is over, just return nil, nil
		if (!await (iter !== null && (iter as any).__isVarRef !== true && (iter as any).__goValue === undefined ? ((iter as any) as historyEventIteratorImpl).HasNext() : historyEventIteratorImpl.prototype.HasNext.call(iter))) {
			$.panic("HistoryEventIterator Next() called without checking HasNext()")
		}

		// we have cached events
		if ((iter$ as historyEventIteratorImpl).nextEventIndex < $.sliceLen((iter$ as historyEventIteratorImpl).events)) {
			let index = (iter$ as historyEventIteratorImpl).nextEventIndex;
			;(iter$ as historyEventIteratorImpl).nextEventIndex++
			return [$.arrayIndex((iter$ as historyEventIteratorImpl).events!, index), null]
		} else {
			if ((iter$ as historyEventIteratorImpl).err != null) {
				// we have err, clear that iter.err and return err
				let err = (iter$ as historyEventIteratorImpl).err;
				;(iter$ as historyEventIteratorImpl).err = null
				return [null, err]
			}
		}

		$.panic("HistoryEventIterator Next() should return either a history event or a err")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.historyEventIteratorImpl",
		() => new historyEventIteratorImpl(),
		() => [$.methodSignature("HasNext", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Next", [], [/* @__PURE__ */ $.pointerType("shared.HistoryEvent"), "error"], true)],
		historyEventIteratorImpl,
		() => [/* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nextEventIndex", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nexttoken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("paginate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"), "error"] } as $.FunctionTypeInfo), [5], 80, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class GetWorkflowHistoryWithOptionsRequest {
	// WorkflowID specifies the workflow to request. Required.
	public get WorkflowID(): string {
		return this._fields.WorkflowID
	}

	public set WorkflowID(value: string) {
		this._fields.WorkflowID = value
	}

	// RunID is an optional field used to identify a specific run of the workflow.
	// If RunID is not provided the latest run will be used.
	public get RunID(): string {
		return this._fields.RunID
	}

	public set RunID(value: string) {
		this._fields.RunID = value
	}

	// IsLongPoll is an optional field indicating whether to continue polling for new events until the workflow is terminal.
	// If IsLongPoll is true, the client can continue to iterate on new events that occur after the initial request.
	// Note that this means the client request will remain open until the workflow is terminal.
	public get IsLongPoll(): boolean {
		return this._fields.IsLongPoll
	}

	public set IsLongPoll(value: boolean) {
		this._fields.IsLongPoll = value
	}

	// FilterType is an optional field used to specify which events to return.
	// CloseEvent will only return the last event in the workflow history.
	public get FilterType(): s.HistoryEventFilterType {
		return this._fields.FilterType
	}

	public set FilterType(value: s.HistoryEventFilterType) {
		this._fields.FilterType = value
	}

	// QueryConsistencyLevel is an optional field used to specify the consistency level for the query.
	// QueryConsistencyLevelStrong will query the currently active cluster for this workflow - at the potential cost of additional latency.
	// If not set, server will use the default consistency level.
	public get QueryConsistencyLevel(): __goscript_client.QueryConsistencyLevel {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: __goscript_client.QueryConsistencyLevel) {
		this._fields.QueryConsistencyLevel = value
	}

	public _fields: {
		WorkflowID: string
		RunID: string
		IsLongPoll: boolean
		FilterType: s.HistoryEventFilterType
		QueryConsistencyLevel: __goscript_client.QueryConsistencyLevel
	}

	constructor(init?: Partial<{WorkflowID?: string, RunID?: string, IsLongPoll?: boolean, FilterType?: s.HistoryEventFilterType, QueryConsistencyLevel?: __goscript_client.QueryConsistencyLevel}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowID: init?.WorkflowID ?? ("" as string),
			RunID: init?.RunID ?? ("" as string),
			IsLongPoll: init?.IsLongPoll ?? (false as boolean),
			FilterType: init?.FilterType ?? (0 as s.HistoryEventFilterType),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (0 as __goscript_client.QueryConsistencyLevel)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetWorkflowHistoryWithOptionsRequest {
		return new GetWorkflowHistoryWithOptionsRequest(this, true)
	}

	public __goscriptAssign(source: GetWorkflowHistoryWithOptionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowID = values.WorkflowID
		target.RunID = values.RunID
		target.IsLongPoll = values.IsLongPoll
		target.FilterType = values.FilterType
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
	}

	static __typeInfo = $.registerStructType(
		"internal.GetWorkflowHistoryWithOptionsRequest",
		() => new GetWorkflowHistoryWithOptionsRequest(),
		() => [],
		GetWorkflowHistoryWithOptionsRequest,
		() => [/* @__PURE__ */ $.structField("WorkflowID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RunID", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("IsLongPoll", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("FilterType", /* @__PURE__ */ $.basicType("int32", "shared.HistoryEventFilterType"), [3], 36, true), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.basicType("int", "internal.QueryConsistencyLevel"), [4], 40, true)]
	)
}

export class DescribeWorkflowExecutionWithOptionsRequest {
	// WorkflowID specifies the workflow to request. Required.
	public get WorkflowID(): string {
		return this._fields.WorkflowID
	}

	public set WorkflowID(value: string) {
		this._fields.WorkflowID = value
	}

	// RunID is an optional field used to identify a specific run of the workflow.
	// If RunID is not provided the latest run will be used.
	public get RunID(): string {
		return this._fields.RunID
	}

	public set RunID(value: string) {
		this._fields.RunID = value
	}

	// QueryConsistencyLevel is an optional field used to specify the consistency level for the query.
	// QueryConsistencyLevelStrong will query the currently active cluster for this workflow - at the potential cost of additional latency.
	// If not set, server will use the default consistency level.
	public get QueryConsistencyLevel(): __goscript_client.QueryConsistencyLevel {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: __goscript_client.QueryConsistencyLevel) {
		this._fields.QueryConsistencyLevel = value
	}

	public _fields: {
		WorkflowID: string
		RunID: string
		QueryConsistencyLevel: __goscript_client.QueryConsistencyLevel
	}

	constructor(init?: Partial<{WorkflowID?: string, RunID?: string, QueryConsistencyLevel?: __goscript_client.QueryConsistencyLevel}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowID: init?.WorkflowID ?? ("" as string),
			RunID: init?.RunID ?? ("" as string),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (0 as __goscript_client.QueryConsistencyLevel)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeWorkflowExecutionWithOptionsRequest {
		return new DescribeWorkflowExecutionWithOptionsRequest(this, true)
	}

	public __goscriptAssign(source: DescribeWorkflowExecutionWithOptionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowID = values.WorkflowID
		target.RunID = values.RunID
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
	}

	static __typeInfo = $.registerStructType(
		"internal.DescribeWorkflowExecutionWithOptionsRequest",
		() => new DescribeWorkflowExecutionWithOptionsRequest(),
		() => [],
		DescribeWorkflowExecutionWithOptionsRequest,
		() => [/* @__PURE__ */ $.structField("WorkflowID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RunID", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.basicType("int", "internal.QueryConsistencyLevel"), [2], 32, true)]
	)
}

export class QueryWorkflowWithOptionsRequest {
	// WorkflowID is a required field indicating the workflow which should be queried.
	public get WorkflowID(): string {
		return this._fields.WorkflowID
	}

	public set WorkflowID(value: string) {
		this._fields.WorkflowID = value
	}

	// RunID is an optional field used to identify a specific run of the queried workflow.
	// If RunID is not provided the latest run will be used.
	public get RunID(): string {
		return this._fields.RunID
	}

	public set RunID(value: string) {
		this._fields.RunID = value
	}

	// QueryType is a required field which specifies the query you want to run.
	// By default, cadence supports "__stack_trace" as a standard query type, which will return string value
	// representing the call stack of the target workflow. The target workflow could also setup different query handler to handle custom query types.
	// See comments at workflow.SetQueryHandler(ctx Context, queryType string, handler interface{}) for more details on how to setup query handler within the target workflow.
	public get QueryType(): string {
		return this._fields.QueryType
	}

	public set QueryType(value: string) {
		this._fields.QueryType = value
	}

	// Args is an optional field used to identify the arguments passed to the query.
	public get Args(): $.Slice<any> {
		return this._fields.Args
	}

	public set Args(value: $.Slice<any>) {
		this._fields.Args = value
	}

	// QueryRejectCondition is an optional field used to reject queries based on workflow state.
	// QueryRejectConditionNotOpen will reject queries to workflows which are not open
	// QueryRejectConditionNotCompletedCleanly will reject queries to workflows which completed in any state other than completed (e.g. terminated, canceled timeout etc...)
	public get QueryRejectCondition(): $.VarRef<s.QueryRejectCondition> | null {
		return this._fields.QueryRejectCondition
	}

	public set QueryRejectCondition(value: $.VarRef<s.QueryRejectCondition> | null) {
		this._fields.QueryRejectCondition = value
	}

	// QueryConsistencyLevel is an optional field used to control the consistency level.
	// QueryConsistencyLevelEventual means that query will eventually reflect up to date state of a workflow.
	// QueryConsistencyLevelStrong means that query will reflect a workflow state of having applied all events which came before the query.
	public get QueryConsistencyLevel(): $.VarRef<s.QueryConsistencyLevel> | null {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: $.VarRef<s.QueryConsistencyLevel> | null) {
		this._fields.QueryConsistencyLevel = value
	}

	public _fields: {
		WorkflowID: string
		RunID: string
		QueryType: string
		Args: $.Slice<any>
		QueryRejectCondition: $.VarRef<s.QueryRejectCondition> | null
		QueryConsistencyLevel: $.VarRef<s.QueryConsistencyLevel> | null
	}

	constructor(init?: Partial<{WorkflowID?: string, RunID?: string, QueryType?: string, Args?: $.Slice<any>, QueryRejectCondition?: $.VarRef<s.QueryRejectCondition> | null, QueryConsistencyLevel?: $.VarRef<s.QueryConsistencyLevel> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowID: init?.WorkflowID ?? ("" as string),
			RunID: init?.RunID ?? ("" as string),
			QueryType: init?.QueryType ?? ("" as string),
			Args: init?.Args ?? (null! as $.Slice<any>),
			QueryRejectCondition: init?.QueryRejectCondition ?? (null! as $.VarRef<s.QueryRejectCondition> | null),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (null! as $.VarRef<s.QueryConsistencyLevel> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QueryWorkflowWithOptionsRequest {
		return new QueryWorkflowWithOptionsRequest(this, true)
	}

	public __goscriptAssign(source: QueryWorkflowWithOptionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowID = values.WorkflowID
		target.RunID = values.RunID
		target.QueryType = values.QueryType
		target.Args = values.Args
		target.QueryRejectCondition = values.QueryRejectCondition
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
	}

	static __typeInfo = $.registerStructType(
		"internal.QueryWorkflowWithOptionsRequest",
		() => new QueryWorkflowWithOptionsRequest(),
		() => [],
		QueryWorkflowWithOptionsRequest,
		() => [/* @__PURE__ */ $.structField("WorkflowID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RunID", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("QueryType", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [3], 48, true), /* @__PURE__ */ $.structField("QueryRejectCondition", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.QueryRejectCondition")), [4], 72, true), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.QueryConsistencyLevel")), [5], 80, true)]
	)
}

export class QueryWorkflowWithOptionsResponse {
	// QueryResult contains the result of executing the query.
	// This will only be set if the query was completed successfully and not rejected.
	public get QueryResult(): __goscript_encoded.Value | null {
		return this._fields.QueryResult
	}

	public set QueryResult(value: __goscript_encoded.Value | null) {
		this._fields.QueryResult = value
	}

	// QueryRejected contains information about the query rejection.
	public get QueryRejected(): s.QueryRejected | $.VarRef<s.QueryRejected> | null {
		return this._fields.QueryRejected
	}

	public set QueryRejected(value: s.QueryRejected | $.VarRef<s.QueryRejected> | null) {
		this._fields.QueryRejected = value
	}

	public _fields: {
		QueryResult: __goscript_encoded.Value | null
		QueryRejected: s.QueryRejected | $.VarRef<s.QueryRejected> | null
	}

	constructor(init?: Partial<{QueryResult?: __goscript_encoded.Value | null, QueryRejected?: s.QueryRejected | $.VarRef<s.QueryRejected> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			QueryResult: init?.QueryResult ?? (null! as __goscript_encoded.Value | null),
			QueryRejected: init?.QueryRejected ?? (null! as s.QueryRejected | $.VarRef<s.QueryRejected> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QueryWorkflowWithOptionsResponse {
		return new QueryWorkflowWithOptionsResponse(this, true)
	}

	public __goscriptAssign(source: QueryWorkflowWithOptionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.QueryResult = $.assignFieldValue(target.QueryResult, values.QueryResult, "internal.Value")
		target.QueryRejected = values.QueryRejected
	}

	static __typeInfo = $.registerStructType(
		"internal.QueryWorkflowWithOptionsResponse",
		() => new QueryWorkflowWithOptionsResponse(),
		() => [],
		QueryWorkflowWithOptionsResponse,
		() => [/* @__PURE__ */ $.structField("QueryResult", "internal.Value", [0], 0, true), /* @__PURE__ */ $.structField("QueryRejected", /* @__PURE__ */ $.pointerType("shared.QueryRejected"), [1], 16, true)]
	)
}

export const defaultDecisionTaskTimeoutInSecs: number = 10

export const defaultGetHistoryTimeoutInSecs: number = 25

export let maxListArchivedWorkflowTimeout: time.Duration = 180000000000n

export function __goscript_set_maxListArchivedWorkflowTimeout(__goscriptValue: time.Duration): void {
	maxListArchivedWorkflowTimeout = __goscriptValue
}

export function isEntityNonExistFromPassive(err: $.GoError): boolean {
	{
		let __goscriptTuple62: any = $.typeAssertTuple<s.EntityNotExistsError | $.VarRef<s.EntityNotExistsError> | null>(err, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))
		let nonExistError: s.EntityNotExistsError | $.VarRef<s.EntityNotExistsError> | null = __goscriptTuple62[0]
		let ok = __goscriptTuple62[1]
		if (ok) {
			return ((!$.stringEqual((nonExistError !== null && (nonExistError as any).__isVarRef !== true && (nonExistError as any).__goValue === undefined ? ((nonExistError as any) as s.EntityNotExistsError).GetActiveCluster() : s.EntityNotExistsError.prototype.GetActiveCluster.call(nonExistError)), "")) && (!$.stringEqual((nonExistError !== null && (nonExistError as any).__isVarRef !== true && (nonExistError as any).__goValue === undefined ? ((nonExistError as any) as s.EntityNotExistsError).GetCurrentCluster() : s.EntityNotExistsError.prototype.GetCurrentCluster.call(nonExistError)), ""))) && (!$.stringEqual((nonExistError !== null && (nonExistError as any).__isVarRef !== true && (nonExistError as any).__goValue === undefined ? ((nonExistError as any) as s.EntityNotExistsError).GetActiveCluster() : s.EntityNotExistsError.prototype.GetActiveCluster.call(nonExistError)), (nonExistError !== null && (nonExistError as any).__isVarRef !== true && (nonExistError as any).__goValue === undefined ? ((nonExistError as any) as s.EntityNotExistsError).GetCurrentCluster() : s.EntityNotExistsError.prototype.GetCurrentCluster.call(nonExistError))))
		}
	}

	return false
}

export function getRunID(runID: string): $.VarRef<string> | null {
	if ($.stringEqual(runID, "")) {
		// Cadence Server will pick current runID if provided empty.
		return null
	}
	return common.StringPtr(runID)
}

export async function requestIDOrNew(requestID: string): globalThis.Promise<string> {
	if ($.stringEqual(requestID, "")) {
		return uuid.New()
	}
	return requestID
}

export function validateRequestID(requestID: string): $.GoError {
	if ($.stringEqual(requestID, "")) {
		return null
	}
	if (uuid.Parse(requestID) == null) {
		return errors.New("invalid RequestID")
	}
	return null
}

export async function getWorkflowMemo(input: globalThis.Map<string, any> | null, dc: __goscript_encoded.DataConverter | null): globalThis.Promise<[s.Memo | $.VarRef<s.Memo> | null, $.GoError]> {
	if (input == null) {
		return [null, null]
	}

	let memo: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [k, v] of input?.entries() ?? []) {
		let __goscriptTuple63: any = await __goscript_internal_worker.encodeArg(dc, v)
		let memoBytes: $.Slice<number> = __goscriptTuple63[0]
		let err = __goscriptTuple63[1]
		if (err != null) {
			return [null, fmt.Errorf("encode workflow memo error: %v", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
		}
		$.mapSet(memo, k, memoBytes)
	}
	return [new s.Memo({Fields: memo}), null]
}

export async function serializeSearchAttributes(input: globalThis.Map<string, any> | null): globalThis.Promise<[s.SearchAttributes | $.VarRef<s.SearchAttributes> | null, $.GoError]> {
	if (input == null) {
		return [null, null]
	}

	let attr: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [k, v] of input?.entries() ?? []) {
		let __goscriptTuple64: any = await json.Marshal(v)
		let attrBytes: $.Slice<number> = __goscriptTuple64[0]
		let err = __goscriptTuple64[1]
		if (err != null) {
			return [null, fmt.Errorf("encode search attribute [%s] error: %v", k, (err as any))]
		}
		$.mapSet(attr, k, attrBytes)
	}
	return [new s.SearchAttributes({IndexedFields: attr}), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (s.EventType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.EventType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.EventType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.EventType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.EventType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.EventType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.EventType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.EventType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.EventType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.EventType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EventType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
