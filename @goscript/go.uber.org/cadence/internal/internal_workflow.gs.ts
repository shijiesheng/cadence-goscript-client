// Generated file based on internal_workflow.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as cron from "@goscript/github.com/robfig/cron/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as s2 from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_propagation from "./propagation.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/robfig/cron/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./propagation.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.syncWorkflowDefinition", "internal.workflowResult", "internal.futureImpl", "internal.waitGroupImpl", "internal.dispatcher", "internal.workflow", "internal.sendCallback", "internal.receiveCallback", "internal.channelImpl", "internal.selectCase", "internal.selectorImpl", "internal.unblockFunc", "internal.coroutineState", "internal.dispatcherImpl", "internal.workflowOptions", "internal.executeWorkflowParams", "internal.decodeFutureImpl", "internal.childWorkflowFutureImpl", "internal.asyncFuture", "internal.queryHandler", "internal.workflowEnvironmentInterceptor"])

export type dispatcher = {
	Close(): void
	ExecuteUntilAllBlocked(): $.GoError | globalThis.Promise<$.GoError>
	IsDone(): boolean
	StackTrace(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"internal.dispatcher",
	null,
	[$.methodSignature("Close"), $.methodSignature("ExecuteUntilAllBlocked", [], [["err", "error"]]), $.methodSignature("IsDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type workflow = {
	Execute(ctx: __goscript_context.Context | null, input: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	GetFunction(): any
	WorkflowType(): __goscript_workflow.WorkflowType
}

$.registerInterfaceType(
	"internal.workflow",
	null,
	[$.methodSignature("Execute", [["ctx", "internal.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("WorkflowType", [], ["internal.WorkflowType"])]
);

export type unblockFunc = ((status: string, stackDepth: number) => boolean | globalThis.Promise<boolean>) | null

export type asyncFuture = {
	ChainFuture(f: __goscript_workflow.Future | null): void
	Get(ctx: __goscript_context.Context | null, valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	GetAsync(callback: receiveCallback | $.VarRef<receiveCallback> | null): [any, boolean, $.GoError] | globalThis.Promise<[any, boolean, $.GoError]>
	GetValueAndError(): [any, $.GoError]
	IsReady(): boolean | globalThis.Promise<boolean>
	RemoveReceiveCallback(callback: receiveCallback | $.VarRef<receiveCallback> | null): void
	Set(value: any, err: $.GoError): void
}

$.registerInterfaceType(
	"internal.asyncFuture",
	null,
	[$.methodSignature("ChainFuture", [["f", "internal.Future"]]), $.methodSignature("Get", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("GetAsync", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("GetValueAndError", [], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("RemoveReceiveCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]]), $.methodSignature("Set", [["value", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]])]
);

export class syncWorkflowDefinition {
	public get workflow(): workflow | null {
		return this._fields.workflow
	}

	public set workflow(value: workflow | null) {
		this._fields.workflow = value
	}

	public get dispatcher(): dispatcher | null {
		return this._fields.dispatcher
	}

	public set dispatcher(value: dispatcher | null) {
		this._fields.dispatcher = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get rootCtx(): __goscript_context.Context | null {
		return this._fields.rootCtx
	}

	public set rootCtx(value: __goscript_context.Context | null) {
		this._fields.rootCtx = value
	}

	public _fields: {
		workflow: workflow | null
		dispatcher: dispatcher | null
		cancel: (() => void) | null
		rootCtx: __goscript_context.Context | null
	}

	constructor(init?: Partial<{workflow?: workflow | null, dispatcher?: dispatcher | null, cancel?: (() => void) | null, rootCtx?: __goscript_context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			workflow: init?.workflow ?? (null! as workflow | null),
			dispatcher: init?.dispatcher ?? (null! as dispatcher | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			rootCtx: init?.rootCtx ?? (null! as __goscript_context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): syncWorkflowDefinition {
		return new syncWorkflowDefinition(this, true)
	}

	public __goscriptAssign(source: syncWorkflowDefinition): void {
		const target = this._fields
		const values = source._fields
		target.workflow = $.assignFieldValue(target.workflow, values.workflow, "internal.workflow")
		target.dispatcher = $.assignFieldValue(target.dispatcher, values.dispatcher, "internal.dispatcher")
		target.cancel = values.cancel
		target.rootCtx = $.assignFieldValue(target.rootCtx, values.rootCtx, "internal.Context")
	}

	public async Close(): globalThis.Promise<void> {
		const d: syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null = this;
		const d$: syncWorkflowDefinition = d == null ? $.pointerTarget<syncWorkflowDefinition>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<syncWorkflowDefinition>(d)
		if ((d$ as syncWorkflowDefinition).dispatcher != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<dispatcher, null>>((d$ as syncWorkflowDefinition).dispatcher).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Execute(env: __goscript_internal_worker_base.workflowEnvironment | null, header: s2.Header | $.VarRef<s2.Header> | null, input: $.Slice<number>): globalThis.Promise<void> {
		let d: syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null = this;
		const d$: syncWorkflowDefinition = d == null ? $.pointerTarget<syncWorkflowDefinition>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<syncWorkflowDefinition>(d)
		let __goscriptTuple0: any = await newWorkflowInterceptors(env, ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetWorkflowInterceptors(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>))
		let interceptors = __goscriptTuple0[0]
		let envInterceptor: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = __goscriptTuple0[1]
		let __goscriptTuple2: any = await newDispatcher(await newWorkflowContext(env, interceptors, envInterceptor), $.functionValue(async (ctx: __goscript_context.Context | null): globalThis.Promise<void> => {
			await using __defer = new $.AsyncDisposableStack()
			let r: workflowResult | $.VarRef<workflowResult> | null = new workflowResult()
			let r$: workflowResult = r == null ? $.pointerTarget<workflowResult>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<workflowResult>(r)

			// We want to execute the user workflow definition from the first decision task started,
			// so they can see everything before that. Here we would have all initialization done, hence
			// we are yielding.
			let state: coroutineState | $.VarRef<coroutineState> | null = await getState((d$ as syncWorkflowDefinition).rootCtx)
			await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState)["yield"]("yield before executing to setup state") : coroutineState.prototype.yield.call(state, "yield before executing to setup state"))

			let wfEnv = await getWorkflowEnvironment((d$ as syncWorkflowDefinition).rootCtx)
			let execCtx = (d$ as syncWorkflowDefinition).rootCtx
			if (!(__goscriptAwait = (wfEnv !== null && (wfEnv as any).__isVarRef !== true && (wfEnv as any).__goValue === undefined ? (wfEnv as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(wfEnv)).IsReplaying(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				let winfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = ((__goscriptAwait = (wfEnv !== null && (wfEnv as any).__isVarRef !== true && (wfEnv as any).__goValue === undefined ? (wfEnv as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(wfEnv)).WorkflowInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null)
				let winfo$: __goscript_workflow.WorkflowInfo = winfo == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(winfo) : (winfo as any).__isVarRef === true ? (winfo as any).value : (winfo as any).__goValue === undefined ? (winfo as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(winfo)
				let spanCtx: context.Context | null = context.Background()
				{
					let parent = await __goscript_context.GetSpanContext((d$ as syncWorkflowDefinition).rootCtx)
					if (parent != null) {
						spanCtx = context.WithValue($.pointerValueOrNil(spanCtx)!, $.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), (parent as any))
					}
				}
				let [, span] = await __goscript_propagation.createOpenTracingSpanFromHeaders(spanCtx, (__goscriptAwait = (wfEnv !== null && (wfEnv as any).__isVarRef !== true && (wfEnv as any).__goValue === undefined ? (wfEnv as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(wfEnv)).GetTracer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue($.cloneStructValue(time.Now())), "cadence-ExecuteWorkflow", $.makeMap<string, any>([["cadenceWorkflowType", (winfo$ as __goscript_workflow.WorkflowInfo).WorkflowType.Name], ["cadenceWorkflowID", (winfo$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.ID], ["cadenceRunID", (winfo$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.RunID]]))
				const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
				// Only seed the workflow span context when a real tracer produced it.
				// A NoopTracer yields a noop span context that carries no tracing value,
				// and seeding it forces workflows that use their own real tracer (e.g. a
				// mocktracer in the testsuite) to build children from a foreign span
				// context, which panics. Skipping it leaves GetSpanContext returning nil,
				// matching the behavior established for NoopTracer in #1516.
				{
					let [, ok] = $.typeAssertTuple<opentracing.NoopTracer>((__goscriptAwait = (wfEnv !== null && (wfEnv as any).__isVarRef !== true && (wfEnv as any).__goValue === undefined ? (wfEnv as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(wfEnv)).GetTracer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "opentracing.NoopTracer")
					if (!ok) {
						execCtx = __goscript_context.WithSpanContext((d$ as syncWorkflowDefinition).rootCtx, (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
				}
			}
			let __goscriptTuple1: any = await $.pointerValue<Exclude<workflow, null>>((d$ as syncWorkflowDefinition).workflow).Execute(execCtx, input);
			;(r$ as workflowResult).workflowResult = __goscriptTuple1[0];
			;(r$ as workflowResult).error = __goscriptTuple1[1]
			let rpp = await getWorkflowResultPointerPointer(ctx)
			rpp!.value = r
		}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))
		let __goscriptShadow0: dispatcherImpl | $.VarRef<dispatcherImpl> | null = __goscriptTuple2[0]
		let rootCtx = __goscriptTuple2[1]

		// set the information from the headers that is to be propagated in the workflow context
		for (let __goscriptRangeTarget0 = ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetContextPropagators(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_headers.ContextPropagator | null>), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let ctxProp = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple3: any = await (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).ExtractToWorkflow(rootCtx, __goscript_headers.NewHeaderReader(header))
				rootCtx = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					$.panic(await fmt.Sprintf("Unable to propagate context %v", (err as any)))
				}
			}
		}

		let __goscriptTuple4: any = await __goscript_context.WithCancel(rootCtx);
		;(d$ as syncWorkflowDefinition).rootCtx = __goscriptTuple4[0];
		;(d$ as syncWorkflowDefinition).cancel = __goscriptTuple4[1];
		;(d$ as syncWorkflowDefinition).dispatcher = $.interfaceValue<dispatcher | null>(__goscriptShadow0, "*internal.dispatcherImpl", /* @__PURE__ */ $.pointerType("internal.dispatcherImpl"))

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment((d$ as syncWorkflowDefinition).rootCtx))).RegisterCancelHandler($.functionValue(async (): globalThis.Promise<void> => {
			// It is ok to call this method multiple times.
			// it doesn't do anything new, the context remains cancelled.
			await (d$ as syncWorkflowDefinition).cancel!()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment((d$ as syncWorkflowDefinition).rootCtx))).RegisterSignalHandler($.functionValue(async (name: string, result: $.Slice<number>): globalThis.Promise<void> => {
			let eo: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions((d$ as syncWorkflowDefinition).rootCtx)
			// We don't want this code to be blocked ever, using sendAsync().
			let ch: channelImpl | $.VarRef<channelImpl> | null = $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(await (eo !== null && (eo as any).__isVarRef !== true && (eo as any).__goValue === undefined ? ((eo as any) as workflowOptions).getSignalChannel((d$ as syncWorkflowDefinition).rootCtx, name) : workflowOptions.prototype.getSignalChannel.call(eo, (d$ as syncWorkflowDefinition).rootCtx, name)), /* @__PURE__ */ $.pointerType("internal.channelImpl"))
			let ok = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as channelImpl).SendAsync($.interfaceValue(result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))) : channelImpl.prototype.SendAsync.call(ch, $.interfaceValue(result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
			if (!ok) {
				$.panic(await fmt.Sprintf("Exceeded channel buffer size for signal: %v", name))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment((d$ as syncWorkflowDefinition).rootCtx))).RegisterQueryHandler($.functionValue(async (queryType: string, queryArgs: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			let eo: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions((d$ as syncWorkflowDefinition).rootCtx)
			let [handler, ok] = $.mapGet<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null>($.pointerValue<workflowOptions>(eo).queryHandlers, queryType, null)
			if (!ok) {
				return [null, fmt.Errorf("unknown queryType %v. KnownQueryTypes=%v", queryType, $.interfaceValue((eo !== null && (eo as any).__isVarRef !== true && (eo as any).__goValue === undefined ? ((eo as any) as workflowOptions).KnownQueryTypes() : workflowOptions.prototype.KnownQueryTypes.call(eo)), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
			}
			return handler!(queryArgs)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async KnownQueryTypes(): globalThis.Promise<$.Slice<string>> {
		const d: syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null = this;
		return workflowOptions.prototype.KnownQueryTypes.call(await getWorkflowEnvOptions($.pointerValue<syncWorkflowDefinition>(d).rootCtx))
	}

	public async OnDecisionTaskStarted(): globalThis.Promise<void> {
		const d: syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null = this;
		const d$: syncWorkflowDefinition = d == null ? $.pointerTarget<syncWorkflowDefinition>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<syncWorkflowDefinition>(d)
		await executeDispatcher((d$ as syncWorkflowDefinition).rootCtx, (d$ as syncWorkflowDefinition).dispatcher)
	}

	public async StackTrace(): globalThis.Promise<string> {
		const d: syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null = this;
		return $.pointerValue<Exclude<dispatcher, null>>($.pointerValue<syncWorkflowDefinition>(d).dispatcher).StackTrace()
	}

	static __typeInfo = $.registerStructType(
		"internal.syncWorkflowDefinition",
		() => new syncWorkflowDefinition(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("Execute", [["env", "internal.workflowEnvironment"], ["header", /* @__PURE__ */ $.pointerType("shared.Header")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("KnownQueryTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("OnDecisionTaskStarted", [], [], true), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")], true)],
		syncWorkflowDefinition,
		() => [/* @__PURE__ */ $.structField("workflow", "internal.workflow", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dispatcher", "internal.dispatcher", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "internal.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("rootCtx", "internal.Context", [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowResult {
	public get workflowResult(): $.Slice<number> {
		return this._fields.workflowResult
	}

	public set workflowResult(value: $.Slice<number>) {
		this._fields.workflowResult = value
	}

	public get error(): $.GoError {
		return this._fields.error
	}

	public set error(value: $.GoError) {
		this._fields.error = value
	}

	public _fields: {
		workflowResult: $.Slice<number>
		error: $.GoError
	}

	constructor(init?: Partial<{workflowResult?: $.Slice<number>, error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowResult: init?.workflowResult ?? (null! as $.Slice<number>),
			error: init?.error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowResult {
		return new workflowResult(this, true)
	}

	public __goscriptAssign(source: workflowResult): void {
		const target = this._fields
		const values = source._fields
		target.workflowResult = values.workflowResult
		target.error = $.assignFieldValue(target.error, values.error, "error")
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowResult",
		() => new workflowResult(),
		() => [],
		workflowResult,
		() => [/* @__PURE__ */ $.structField("workflowResult", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("error", "error", [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class futureImpl {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get ready(): boolean {
		return this._fields.ready
	}

	public set ready(value: boolean) {
		this._fields.ready = value
	}

	public get channel(): channelImpl | $.VarRef<channelImpl> | null {
		return this._fields.channel
	}

	public set channel(value: channelImpl | $.VarRef<channelImpl> | null) {
		this._fields.channel = value
	}

	public get chained(): $.Slice<asyncFuture | null> {
		return this._fields.chained
	}

	public set chained(value: $.Slice<asyncFuture | null>) {
		this._fields.chained = value
	}

	public _fields: {
		value: any
		err: $.GoError
		ready: boolean
		channel: channelImpl | $.VarRef<channelImpl> | null
		chained: $.Slice<asyncFuture | null>
	}

	constructor(init?: Partial<{value?: any, err?: $.GoError, ready?: boolean, channel?: channelImpl | $.VarRef<channelImpl> | null, chained?: $.Slice<asyncFuture | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			err: init?.err ?? (null! as $.GoError),
			ready: init?.ready ?? (false as boolean),
			channel: init?.channel ?? (null! as channelImpl | $.VarRef<channelImpl> | null),
			chained: init?.chained ?? (null! as $.Slice<asyncFuture | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): futureImpl {
		return new futureImpl(this, true)
	}

	public __goscriptAssign(source: futureImpl): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.ready = values.ready
		target.channel = values.channel
		target.chained = values.chained
	}

	public async Chain(future: __goscript_workflow.Future | null): globalThis.Promise<void> {
		let f: futureImpl | $.VarRef<futureImpl> | null = this;
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f)
		if ((f$ as futureImpl).ready) {
			$.panic("already set")
		}

		let [ch, ok] = $.typeAssertTuple<asyncFuture | null>(future, "internal.asyncFuture")
		if (!ok) {
			$.panic("cannot chain Future that wasn't created with workflow.NewFuture")
		}
		if (!(__goscriptAwait = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? (ch as Exclude<asyncFuture, null>) : $.pointerValue<Exclude<asyncFuture, null>>(ch)).IsReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? (ch as Exclude<asyncFuture, null>) : $.pointerValue<Exclude<asyncFuture, null>>(ch)).ChainFuture($.interfaceValue<__goscript_workflow.Future | null>(f, "*internal.futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		let [val, err] = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? (ch as Exclude<asyncFuture, null>) : $.pointerValue<Exclude<asyncFuture, null>>(ch)).GetValueAndError();
		;(f$ as futureImpl).value = val;
		;(f$ as futureImpl).err = err;
		;(f$ as futureImpl).ready = true
		return
	}

	public ChainFuture(future: __goscript_workflow.Future | null): void {
		let f: futureImpl | $.VarRef<futureImpl> | null = this;
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f);
		;(f$ as futureImpl).chained = $.appendOne((f$ as futureImpl).chained, $.mustTypeAssert<asyncFuture | null>(future, "internal.asyncFuture"), $.appendZeros.nil)
	}

	public async Get(ctx: __goscript_context.Context | null, value: any): globalThis.Promise<$.GoError> {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f)
		let more = await channelImpl.prototype.Receive.call((f$ as futureImpl).channel, ctx, null)
		if (more) {
			$.panic("not closed")
		}
		if (!(f$ as futureImpl).ready) {
			$.panic("not ready")
		}
		if ((((f$ as futureImpl).err != null) || ((f$ as futureImpl).value == null)) || (value == null)) {
			return (f$ as futureImpl).err
		}
		let rf = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(value)))
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rf)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return errors.New("value parameter is not a pointer")
		}

		{
			let __goscriptTuple5: any = $.typeAssertTuple<$.Slice<number>>((f$ as futureImpl).value, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			let blob: $.Slice<number> = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok && !util.IsTypeByteSlice(reflect.TypeOf(value))) {
				{
					let err = await __goscript_internal_worker.decodeArg(await getDataConverterFromWorkflowContext(ctx), blob, value)
					if (err != null) {
						return err
					}
				}
				return (f$ as futureImpl).err
			}
		}

		let fv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((f$ as futureImpl).value)))
		if ($.markAsStructValue($.cloneStructValue(fv)).IsValid()) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rf)).Elem())).Set($.markAsStructValue($.cloneStructValue(fv)))
		}
		return (f$ as futureImpl).err
	}

	public async GetAsync(callback: receiveCallback | $.VarRef<receiveCallback> | null): globalThis.Promise<[any, boolean, $.GoError]> {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		let v: any = null! as any
		let ok: boolean = false
		let err: $.GoError = null! as $.GoError
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f)
		let [, , more] = await channelImpl.prototype.receiveAsyncImpl.call((f$ as futureImpl).channel, callback)
		// Future uses Channel.Close to indicate that it is ready.
		// So more being true (channel is still open) indicates future is not ready.
		if (more) {
			return [null, false, null]
		}
		if (!(f$ as futureImpl).ready) {
			$.panic("not ready")
		}
		return [(f$ as futureImpl).value, true, (f$ as futureImpl).err]
	}

	public GetValueAndError(): [any, $.GoError] {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f)
		return [(f$ as futureImpl).value, (f$ as futureImpl).err]
	}

	public IsReady(): boolean {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		return $.pointerValue<futureImpl>(f).ready
	}

	public RemoveReceiveCallback(callback: receiveCallback | $.VarRef<receiveCallback> | null): void {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		channelImpl.prototype.removeReceiveCallback.call($.pointerValue<futureImpl>(f).channel, callback)
	}

	public async Set(value: any, err: $.GoError): globalThis.Promise<void> {
		let f: futureImpl | $.VarRef<futureImpl> | null = this;
		const f$: futureImpl = f == null ? $.pointerTarget<futureImpl>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<futureImpl>(f)
		if ((f$ as futureImpl).ready) {
			$.panic("already set")
		}
		;(f$ as futureImpl).value = value;
		;(f$ as futureImpl).err = err;
		;(f$ as futureImpl).ready = true
		await channelImpl.prototype.Close.call((f$ as futureImpl).channel)
		for (let __goscriptRangeTarget1 = (f$ as futureImpl).chained, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ch = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as asyncFuture | null)
			void (__goscriptAwait = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? (ch as Exclude<asyncFuture, null>) : $.pointerValue<Exclude<asyncFuture, null>>(ch)).Set((f$ as futureImpl).value, (f$ as futureImpl).err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async SetError(err: $.GoError): globalThis.Promise<void> {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		if ($.pointerValue<futureImpl>(f).ready) {
			$.panic("already set")
		}
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as futureImpl).Set(null, err) : futureImpl.prototype.Set.call(f, null, err))
	}

	public async SetValue(value: any): globalThis.Promise<void> {
		const f: futureImpl | $.VarRef<futureImpl> | null = this;
		if ($.pointerValue<futureImpl>(f).ready) {
			$.panic("already set")
		}
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as futureImpl).Set(value, null) : futureImpl.prototype.Set.call(f, value, null))
	}

	static __typeInfo = $.registerStructType(
		"internal.futureImpl",
		() => new futureImpl(),
		() => [$.methodSignature("Chain", [["future", "internal.Future"]], [], true), $.methodSignature("ChainFuture", [["future", "internal.Future"]], [], true), $.methodSignature("Get", [["ctx", "internal.Context"], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("GetAsync", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("GetValueAndError", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RemoveReceiveCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [], true), $.methodSignature("Set", [["value", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], [], true), $.methodSignature("SetError", [["err", "error"]], [], true), $.methodSignature("SetValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]], [], true)],
		futureImpl,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("ready", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("channel", /* @__PURE__ */ $.pointerType("internal.channelImpl"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("chained", /* @__PURE__ */ $.sliceType("internal.asyncFuture"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class waitGroupImpl {
	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public get waiting(): boolean {
		return this._fields.waiting
	}

	public set waiting(value: boolean) {
		this._fields.waiting = value
	}

	public get future(): __goscript_workflow.Future | null {
		return this._fields.future
	}

	public set future(value: __goscript_workflow.Future | null) {
		this._fields.future = value
	}

	public get settable(): __goscript_workflow.Settable | null {
		return this._fields.settable
	}

	public set settable(value: __goscript_workflow.Settable | null) {
		this._fields.settable = value
	}

	public _fields: {
		n: number
		waiting: boolean
		future: __goscript_workflow.Future | null
		settable: __goscript_workflow.Settable | null
	}

	constructor(init?: Partial<{n?: number, waiting?: boolean, future?: __goscript_workflow.Future | null, settable?: __goscript_workflow.Settable | null}>, __goscriptValue?: boolean) {
		this._fields = {
			n: init?.n ?? (0 as number),
			waiting: init?.waiting ?? (false as boolean),
			future: init?.future ?? (null! as __goscript_workflow.Future | null),
			settable: init?.settable ?? (null! as __goscript_workflow.Settable | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): waitGroupImpl {
		return new waitGroupImpl(this, true)
	}

	public __goscriptAssign(source: waitGroupImpl): void {
		const target = this._fields
		const values = source._fields
		target.n = values.n
		target.waiting = values.waiting
		target.future = $.assignFieldValue(target.future, values.future, "internal.Future")
		target.settable = $.assignFieldValue(target.settable, values.settable, "internal.Settable")
	}

	public async Add(delta: number): globalThis.Promise<void> {
		let wg: waitGroupImpl | $.VarRef<waitGroupImpl> | null = this;
		const wg$: waitGroupImpl = wg == null ? $.pointerTarget<waitGroupImpl>(wg) : (wg as any).__isVarRef === true ? (wg as any).value : (wg as any).__goValue === undefined ? (wg as any) : $.pointerTarget<waitGroupImpl>(wg);
		;(wg$ as waitGroupImpl).n = (wg$ as waitGroupImpl).n + delta
		if ((wg$ as waitGroupImpl).n < 0) {
			$.panic("negative WaitGroup counter")
		}
		if (((wg$ as waitGroupImpl).n > 0) || (!(wg$ as waitGroupImpl).waiting)) {
			return
		}
		if ((wg$ as waitGroupImpl).n == 0) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_workflow.Settable, null>>((wg$ as waitGroupImpl).settable).Set(false, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Done(): globalThis.Promise<void> {
		const wg: waitGroupImpl | $.VarRef<waitGroupImpl> | null = this;
		await (wg !== null && (wg as any).__isVarRef !== true && (wg as any).__goValue === undefined ? ((wg as any) as waitGroupImpl).Add(-1) : waitGroupImpl.prototype.Add.call(wg, -1))
	}

	public async Wait(ctx: __goscript_context.Context | null): globalThis.Promise<void> {
		let wg: waitGroupImpl | $.VarRef<waitGroupImpl> | null = this;
		const wg$: waitGroupImpl = wg == null ? $.pointerTarget<waitGroupImpl>(wg) : (wg as any).__isVarRef === true ? (wg as any).value : (wg as any).__goValue === undefined ? (wg as any) : $.pointerTarget<waitGroupImpl>(wg)
		if ((wg$ as waitGroupImpl).n <= 0) {
			return
		}
		if ((wg$ as waitGroupImpl).waiting) {
			$.panic("WaitGroup is reused before previous Wait has returned")
		}

		;(wg$ as waitGroupImpl).waiting = true
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_workflow.Future, null>>((wg$ as waitGroupImpl).future).Get(ctx, $.interfaceValue($.fieldRef((wg$ as waitGroupImpl)._fields, "waiting"), "*bool", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				$.panic((err as any))
			}
		}
		let __goscriptTuple6: any = await __goscript_workflow.NewFuture(ctx);
		;(wg$ as waitGroupImpl).future = __goscriptTuple6[0];
		;(wg$ as waitGroupImpl).settable = __goscriptTuple6[1]
	}

	static __typeInfo = $.registerStructType(
		"internal.waitGroupImpl",
		() => new waitGroupImpl(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Done", [], [], true), $.methodSignature("Wait", [["ctx", "internal.Context"]], [], true)],
		waitGroupImpl,
		() => [/* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("waiting", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("future", "internal.Future", [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("settable", "internal.Settable", [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class sendCallback {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get fn(): (() => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.fn
	}

	public set fn(value: (() => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.fn = value
	}

	public _fields: {
		value: any
		fn: (() => boolean | globalThis.Promise<boolean>) | null
	}

	constructor(init?: Partial<{value?: any, fn?: (() => boolean | globalThis.Promise<boolean>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			fn: init?.fn ?? (null! as (() => boolean | globalThis.Promise<boolean>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sendCallback {
		return new sendCallback(this, true)
	}

	public __goscriptAssign(source: sendCallback): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.fn = values.fn
	}

	static __typeInfo = $.registerStructType(
		"internal.sendCallback",
		() => new sendCallback(),
		() => [],
		sendCallback,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("fn", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class receiveCallback {
	// false result means that callback didn't accept the value and it is still up for delivery
	public get fn(): ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.fn
	}

	public set fn(value: ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.fn = value
	}

	public _fields: {
		fn: ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null
	}

	constructor(init?: Partial<{fn?: ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fn: init?.fn ?? (null! as ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): receiveCallback {
		return new receiveCallback(this, true)
	}

	public __goscriptAssign(source: receiveCallback): void {
		const target = this._fields
		const values = source._fields
		target.fn = values.fn
	}

	static __typeInfo = $.registerStructType(
		"internal.receiveCallback",
		() => new receiveCallback(),
		() => [],
		receiveCallback,
		() => [/* @__PURE__ */ $.structField("fn", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class channelImpl {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get buffer(): $.Slice<any> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<any>) {
		this._fields.buffer = value
	}

	public get blockedSends(): $.Slice<sendCallback | $.VarRef<sendCallback> | null> {
		return this._fields.blockedSends
	}

	public set blockedSends(value: $.Slice<sendCallback | $.VarRef<sendCallback> | null>) {
		this._fields.blockedSends = value
	}

	public get blockedReceives(): $.Slice<receiveCallback | $.VarRef<receiveCallback> | null> {
		return this._fields.blockedReceives
	}

	public set blockedReceives(value: $.Slice<receiveCallback | $.VarRef<receiveCallback> | null>) {
		this._fields.blockedReceives = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public get recValue(): $.VarRef<any> | null {
		return this._fields.recValue
	}

	public set recValue(value: $.VarRef<any> | null) {
		this._fields.recValue = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get env(): __goscript_internal_worker_base.workflowEnvironment | null {
		return this._fields.env
	}

	public set env(value: __goscript_internal_worker_base.workflowEnvironment | null) {
		this._fields.env = value
	}

	public _fields: {
		name: string
		size: number
		buffer: $.Slice<any>
		blockedSends: $.Slice<sendCallback | $.VarRef<sendCallback> | null>
		blockedReceives: $.Slice<receiveCallback | $.VarRef<receiveCallback> | null>
		closed: boolean
		recValue: $.VarRef<any> | null
		dataConverter: __goscript_encoded.DataConverter | null
		env: __goscript_internal_worker_base.workflowEnvironment | null
	}

	constructor(init?: Partial<{name?: string, size?: number, buffer?: $.Slice<any>, blockedSends?: $.Slice<sendCallback | $.VarRef<sendCallback> | null>, blockedReceives?: $.Slice<receiveCallback | $.VarRef<receiveCallback> | null>, closed?: boolean, recValue?: $.VarRef<any> | null, dataConverter?: __goscript_encoded.DataConverter | null, env?: __goscript_internal_worker_base.workflowEnvironment | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			size: init?.size ?? (0 as number),
			buffer: init?.buffer ?? (null! as $.Slice<any>),
			blockedSends: init?.blockedSends ?? (null! as $.Slice<sendCallback | $.VarRef<sendCallback> | null>),
			blockedReceives: init?.blockedReceives ?? (null! as $.Slice<receiveCallback | $.VarRef<receiveCallback> | null>),
			closed: init?.closed ?? (false as boolean),
			recValue: init?.recValue ?? (null! as $.VarRef<any> | null),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			env: init?.env ?? (null! as __goscript_internal_worker_base.workflowEnvironment | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): channelImpl {
		return new channelImpl(this, true)
	}

	public __goscriptAssign(source: channelImpl): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.size = values.size
		target.buffer = values.buffer
		target.blockedSends = values.blockedSends
		target.blockedReceives = values.blockedReceives
		target.closed = values.closed
		target.recValue = values.recValue
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.env = $.assignFieldValue(target.env, values.env, "internal.workflowEnvironment")
	}

	public async Close(): globalThis.Promise<void> {
		let c: channelImpl | $.VarRef<channelImpl> | null = this;
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c);
		;(c$ as channelImpl).closed = true
		// Use a copy of blockedReceives for iteration as invoking callback could result in modification
		let copy: $.Slice<receiveCallback | $.VarRef<receiveCallback> | null> = $.appendSlice($.goSlice((c$ as channelImpl).blockedReceives, undefined, 0, 0), (c$ as channelImpl).blockedReceives, $.appendZeros.nil)
		for (let __goscriptRangeTarget2 = copy, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let callback = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as receiveCallback | $.VarRef<receiveCallback> | null)
			void (__goscriptAwait = $.pointerValue<receiveCallback>(callback).fn!(null, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Receive(ctx: __goscript_context.Context | null, valuePtr: any): globalThis.Promise<boolean> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		let more: boolean = false
		let state: coroutineState | $.VarRef<coroutineState> | null = await getState(ctx)
		let hasResult = false
		let result: any = null! as any
		let callback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback({fn: $.functionValue((v: any, m: boolean): boolean => {
			result = v
			hasResult = true
			more = m
			return true
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))})

		while (true) {
			hasResult = false
			let [v, ok, m] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).receiveAsyncImpl(callback) : channelImpl.prototype.receiveAsyncImpl.call(c, callback))

			if (!ok && !m) {
				return m
			}

			if (ok || !m) {
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).assignValue(v, valuePtr) : channelImpl.prototype.assignValue.call(c, v, valuePtr))
				if (err == null) {
					void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState).unblocked() : coroutineState.prototype.unblocked.call(state))
					return m
				}
				continue
			}
			while (true) {
				if (hasResult) {
					let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).assignValue(result, valuePtr) : channelImpl.prototype.assignValue.call(c, result, valuePtr))
					if (err == null) {
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState).unblocked() : coroutineState.prototype.unblocked.call(state))
						return more
					}
					break
				}
				await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState)["yield"](await fmt.Sprintf("blocked on %s.Receive", $.pointerValue<channelImpl>(c).name)) : coroutineState.prototype.yield.call(state, await fmt.Sprintf("blocked on %s.Receive", $.pointerValue<channelImpl>(c).name)))
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReceiveAsync(valuePtr: any): globalThis.Promise<boolean> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		let ok: boolean = false
		let __goscriptTuple7: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).ReceiveAsyncWithMoreFlag(valuePtr) : channelImpl.prototype.ReceiveAsyncWithMoreFlag.call(c, valuePtr))
		ok = __goscriptTuple7[0]
		return ok
	}

	public async ReceiveAsyncWithMoreFlag(valuePtr: any): globalThis.Promise<[boolean, boolean]> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		let ok: boolean = false
		let more: boolean = false
		while (true) {
			let [v, __goscriptShadow1, __goscriptShadow2] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).receiveAsyncImpl(null) : channelImpl.prototype.receiveAsyncImpl.call(c, null))
			if (!__goscriptShadow1 && !__goscriptShadow2) {
				return [__goscriptShadow1, __goscriptShadow2]
			}

			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).assignValue(v, valuePtr) : channelImpl.prototype.assignValue.call(c, v, valuePtr))
			if (err != null) {
				continue
			}
			return [__goscriptShadow1, __goscriptShadow2]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Send(ctx: __goscript_context.Context | null, v: any): globalThis.Promise<void> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		let state: coroutineState | $.VarRef<coroutineState> | null = await getState(ctx)
		let valueConsumed = false
		let callback: sendCallback | $.VarRef<sendCallback> | null = new sendCallback({value: v, fn: $.functionValue((): boolean => {
			valueConsumed = true
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))})
		let ok = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).sendAsyncImpl(v, callback) : channelImpl.prototype.sendAsyncImpl.call(c, v, callback))
		if (ok) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState).unblocked() : coroutineState.prototype.unblocked.call(state))
			return
		}
		while (true) {
			if (valueConsumed) {
				void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState).unblocked() : coroutineState.prototype.unblocked.call(state))
				return
			}

			// Check for closed in the loop as close can be called when send is blocked
			if ((c$ as channelImpl).closed) {
				$.panic("Closed channel")
			}
			await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState)["yield"](await fmt.Sprintf("blocked on %s.Send", (c$ as channelImpl).name)) : coroutineState.prototype.yield.call(state, await fmt.Sprintf("blocked on %s.Send", (c$ as channelImpl).name)))
		}
	}

	public async SendAsync(v: any): globalThis.Promise<boolean> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		let ok: boolean = false
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).sendAsyncImpl(v, null) : channelImpl.prototype.sendAsyncImpl.call(c, v, null))
	}

	public async assignValue(_from: any, to: any): globalThis.Promise<$.GoError> {
		const c: channelImpl | $.VarRef<channelImpl> | null = this;
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		let err = await __goscript_internal_worker.decodeAndAssignValue((c$ as channelImpl).dataConverter, _from, to)
		// add to metrics
		if (err != null) {
			await zap.Logger.prototype.Error.call(((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((c$ as channelImpl).env).GetLogger(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as zap.Logger | $.VarRef<zap.Logger> | null), await fmt.Sprintf("Corrupt signal received on channel %s. Error deserializing", (c$ as channelImpl).name), $.arrayToSlice<zap.Field>([zap.Error(err)]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((c$ as channelImpl).env).GetMetricsScope(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Counter(metrics.CorruptedSignalsCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async receiveAsyncImpl(callback: receiveCallback | $.VarRef<receiveCallback> | null): globalThis.Promise<[any, boolean, boolean]> {
		let c: channelImpl | $.VarRef<channelImpl> | null = this;
		let v: any = null! as any
		let ok: boolean = false
		let more: boolean = false
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		if ((c$ as channelImpl).recValue != null) {
			let r = $.pointerValue<any>((c$ as channelImpl).recValue);
			;(c$ as channelImpl).recValue = null
			return [r, true, true]
		}
		if ($.sliceLen((c$ as channelImpl).buffer) > 0) {
			let r = $.arrayIndex((c$ as channelImpl).buffer!, 0)
			$.sliceElems((c$ as channelImpl).buffer!)[$.sliceSlot((c$ as channelImpl).buffer!, 0)] = null;
			;(c$ as channelImpl).buffer = $.goSlice((c$ as channelImpl).buffer, 1, undefined)

			// Move blocked sends into buffer
			while ($.sliceLen((c$ as channelImpl).blockedSends) > 0) {
				let b: sendCallback | $.VarRef<sendCallback> | null = $.arrayIndex((c$ as channelImpl).blockedSends!, 0)
				let b$: sendCallback = b == null ? $.pointerTarget<sendCallback>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<sendCallback>(b)
				$.sliceElems((c$ as channelImpl).blockedSends!)[$.sliceSlot((c$ as channelImpl).blockedSends!, 0)] = null;
				;(c$ as channelImpl).blockedSends = $.goSlice((c$ as channelImpl).blockedSends, 1, undefined)
				if ((__goscriptAwait = (b$ as sendCallback).fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					;(c$ as channelImpl).buffer = $.appendOne((c$ as channelImpl).buffer, (b$ as sendCallback).value, $.appendZeros.nil)
					break
				}
			}

			return [r, true, true]
		}
		if ((c$ as channelImpl).closed) {
			return [null, false, false]
		}
		while ($.sliceLen((c$ as channelImpl).blockedSends) > 0) {
			let b: sendCallback | $.VarRef<sendCallback> | null = $.arrayIndex((c$ as channelImpl).blockedSends!, 0)
			let b$: sendCallback = b == null ? $.pointerTarget<sendCallback>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<sendCallback>(b)
			$.sliceElems((c$ as channelImpl).blockedSends!)[$.sliceSlot((c$ as channelImpl).blockedSends!, 0)] = null;
			;(c$ as channelImpl).blockedSends = $.goSlice((c$ as channelImpl).blockedSends, 1, undefined)
			if ((__goscriptAwait = (b$ as sendCallback).fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return [(b$ as sendCallback).value, true, true]
			}
		}
		if (callback != null) {
			;(c$ as channelImpl).blockedReceives = $.appendOne((c$ as channelImpl).blockedReceives, callback, $.appendZeros.nil)
		}
		return [null, false, true]
	}

	public removeReceiveCallback(callback: receiveCallback | $.VarRef<receiveCallback> | null): void {
		let c: channelImpl | $.VarRef<channelImpl> | null = this;
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		for (let __goscriptRangeTarget3 = (c$ as channelImpl).blockedReceives, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let blockedCallback = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as receiveCallback | $.VarRef<receiveCallback> | null)
			if ($.pointerEqual(callback, blockedCallback)) {
				;(c$ as channelImpl).blockedReceives = $.appendSlice($.goSlice((c$ as channelImpl).blockedReceives, undefined, i), $.goSlice((c$ as channelImpl).blockedReceives, i + 1, undefined), $.appendZeros.nil)
				break
			}
		}
	}

	public removeSendCallback(callback: sendCallback | $.VarRef<sendCallback> | null): void {
		let c: channelImpl | $.VarRef<channelImpl> | null = this;
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		for (let __goscriptRangeTarget4 = (c$ as channelImpl).blockedSends, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let blockedCallback = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as sendCallback | $.VarRef<sendCallback> | null)
			if ($.pointerEqual(callback, blockedCallback)) {
				;(c$ as channelImpl).blockedSends = $.appendSlice($.goSlice((c$ as channelImpl).blockedSends, undefined, i), $.goSlice((c$ as channelImpl).blockedSends, i + 1, undefined), $.appendZeros.nil)
				break
			}
		}
	}

	public async sendAsyncImpl(v: any, pair: sendCallback | $.VarRef<sendCallback> | null): globalThis.Promise<boolean> {
		let c: channelImpl | $.VarRef<channelImpl> | null = this;
		let ok: boolean = false
		const c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
		if ((c$ as channelImpl).closed) {
			$.panic("Closed channel")
		}
		while ($.sliceLen((c$ as channelImpl).blockedReceives) > 0) {
			let blockedGet: ((v: any, more: boolean) => boolean | globalThis.Promise<boolean>) | null = $.pointerValue<receiveCallback>($.arrayIndex((c$ as channelImpl).blockedReceives!, 0)).fn
			$.sliceElems((c$ as channelImpl).blockedReceives!)[$.sliceSlot((c$ as channelImpl).blockedReceives!, 0)] = null;
			;(c$ as channelImpl).blockedReceives = $.goSlice((c$ as channelImpl).blockedReceives, 1, undefined)
			// false from callback indicates that value wasn't consumed
			if ((__goscriptAwait = blockedGet!(v, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return true
			}
		}
		if ($.sliceLen((c$ as channelImpl).buffer) < (c$ as channelImpl).size) {
			;(c$ as channelImpl).buffer = $.appendOne((c$ as channelImpl).buffer, v, $.appendZeros.nil)
			return true
		}
		if (pair != null) {
			;(c$ as channelImpl).blockedSends = $.appendOne((c$ as channelImpl).blockedSends, pair, $.appendZeros.nil)
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"internal.channelImpl",
		() => new channelImpl(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("Receive", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["more", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("ReceiveAsync", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("ReceiveAsyncWithMoreFlag", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")], ["more", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Send", [["ctx", "internal.Context"], ["v", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("SendAsync", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("assignValue", [["from", { kind: $.TypeKind.Interface, methods: [] }], ["to", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("receiveAsyncImpl", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")], ["more", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("removeReceiveCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [], true), $.methodSignature("removeSendCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.sendCallback")]], [], true), $.methodSignature("sendAsyncImpl", [["v", { kind: $.TypeKind.Interface, methods: [] }], ["pair", /* @__PURE__ */ $.pointerType("internal.sendCallback")]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true)],
		channelImpl,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("blockedSends", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.sendCallback")), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("blockedReceives", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.receiveCallback")), [4], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [5], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("recValue", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), [6], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [7], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("env", "internal.workflowEnvironment", [8], 128, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class selectCase {
	public get channel(): channelImpl | $.VarRef<channelImpl> | null {
		return this._fields.channel
	}

	public set channel(value: channelImpl | $.VarRef<channelImpl> | null) {
		this._fields.channel = value
	}

	public get receiveFunc(): $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> | null {
		return this._fields.receiveFunc
	}

	public set receiveFunc(value: $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> | null) {
		this._fields.receiveFunc = value
	}

	public get sendFunc(): $.VarRef<(() => void) | null> | null {
		return this._fields.sendFunc
	}

	public set sendFunc(value: $.VarRef<(() => void) | null> | null) {
		this._fields.sendFunc = value
	}

	public get sendValue(): $.VarRef<any> | null {
		return this._fields.sendValue
	}

	public set sendValue(value: $.VarRef<any> | null) {
		this._fields.sendValue = value
	}

	public get future(): asyncFuture | null {
		return this._fields.future
	}

	public set future(value: asyncFuture | null) {
		this._fields.future = value
	}

	public get futureFunc(): $.VarRef<((f: __goscript_workflow.Future | null) => void) | null> | null {
		return this._fields.futureFunc
	}

	public set futureFunc(value: $.VarRef<((f: __goscript_workflow.Future | null) => void) | null> | null) {
		this._fields.futureFunc = value
	}

	public _fields: {
		channel: channelImpl | $.VarRef<channelImpl> | null
		receiveFunc: $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> | null
		sendFunc: $.VarRef<(() => void) | null> | null
		sendValue: $.VarRef<any> | null
		future: asyncFuture | null
		futureFunc: $.VarRef<((f: __goscript_workflow.Future | null) => void) | null> | null
	}

	constructor(init?: Partial<{channel?: channelImpl | $.VarRef<channelImpl> | null, receiveFunc?: $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> | null, sendFunc?: $.VarRef<(() => void) | null> | null, sendValue?: $.VarRef<any> | null, future?: asyncFuture | null, futureFunc?: $.VarRef<((f: __goscript_workflow.Future | null) => void) | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			channel: init?.channel ?? (null! as channelImpl | $.VarRef<channelImpl> | null),
			receiveFunc: init?.receiveFunc ?? (null! as $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> | null),
			sendFunc: init?.sendFunc ?? (null! as $.VarRef<(() => void) | null> | null),
			sendValue: init?.sendValue ?? (null! as $.VarRef<any> | null),
			future: init?.future ?? (null! as asyncFuture | null),
			futureFunc: init?.futureFunc ?? (null! as $.VarRef<((f: __goscript_workflow.Future | null) => void) | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): selectCase {
		return new selectCase(this, true)
	}

	public __goscriptAssign(source: selectCase): void {
		const target = this._fields
		const values = source._fields
		target.channel = values.channel
		target.receiveFunc = values.receiveFunc
		target.sendFunc = values.sendFunc
		target.sendValue = values.sendValue
		target.future = $.assignFieldValue(target.future, values.future, "internal.asyncFuture")
		target.futureFunc = values.futureFunc
	}

	static __typeInfo = $.registerStructType(
		"internal.selectCase",
		() => new selectCase(),
		() => [],
		selectCase,
		() => [/* @__PURE__ */ $.structField("channel", /* @__PURE__ */ $.pointerType("internal.channelImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("receiveFunc", /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo)), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sendFunc", /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sendValue", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("future", "internal.asyncFuture", [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("futureFunc", /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, params: ["internal.Future"], results: [] } as $.FunctionTypeInfo)), [5], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class selectorImpl {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get cases(): $.Slice<selectCase | $.VarRef<selectCase> | null> {
		return this._fields.cases
	}

	public set cases(value: $.Slice<selectCase | $.VarRef<selectCase> | null>) {
		this._fields.cases = value
	}

	public get defaultFunc(): $.VarRef<(() => void) | null> | null {
		return this._fields.defaultFunc
	}

	public set defaultFunc(value: $.VarRef<(() => void) | null> | null) {
		this._fields.defaultFunc = value
	}

	public _fields: {
		name: string
		cases: $.Slice<selectCase | $.VarRef<selectCase> | null>
		defaultFunc: $.VarRef<(() => void) | null> | null
	}

	constructor(init?: Partial<{name?: string, cases?: $.Slice<selectCase | $.VarRef<selectCase> | null>, defaultFunc?: $.VarRef<(() => void) | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			cases: init?.cases ?? (null! as $.Slice<selectCase | $.VarRef<selectCase> | null>),
			defaultFunc: init?.defaultFunc ?? (null! as $.VarRef<(() => void) | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): selectorImpl {
		return new selectorImpl(this, true)
	}

	public __goscriptAssign(source: selectorImpl): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.cases = values.cases
		target.defaultFunc = values.defaultFunc
	}

	public AddDefault(__goscriptParam0: (() => void) | null): void {
		let s: selectorImpl | $.VarRef<selectorImpl> | null = this;
		let f: $.VarRef<(() => void) | null> = $.varRef(__goscriptParam0)
		$.pointerValue<selectorImpl>(s).defaultFunc = f
	}

	public AddFuture(future: __goscript_workflow.Future | null, __goscriptParam1: ((future: __goscript_workflow.Future | null) => void) | null): __goscript_workflow.Selector | null {
		let s: selectorImpl | $.VarRef<selectorImpl> | null = this;
		let f: $.VarRef<((future: __goscript_workflow.Future | null) => void) | null> = $.varRef(__goscriptParam1)
		const s$: selectorImpl = s == null ? $.pointerTarget<selectorImpl>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<selectorImpl>(s)
		let [asyncF, ok] = $.typeAssertTuple<asyncFuture | null>(future, "internal.asyncFuture")
		if (!ok) {
			$.panic("cannot chain Future that wasn't created with workflow.NewFuture")
		}
		;(s$ as selectorImpl).cases = $.appendOne((s$ as selectorImpl).cases, new selectCase({future: asyncF, futureFunc: f}), $.appendZeros.nil)
		return $.interfaceValue<__goscript_workflow.Selector | null>(s, "*internal.selectorImpl", /* @__PURE__ */ $.pointerType("internal.selectorImpl"))
	}

	public AddReceive(c: __goscript_workflow.Channel | null, __goscriptParam2: ((c: __goscript_workflow.Channel | null, more: boolean) => void) | null): __goscript_workflow.Selector | null {
		let s: selectorImpl | $.VarRef<selectorImpl> | null = this;
		let f: $.VarRef<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null> = $.varRef(__goscriptParam2)
		const s$: selectorImpl = s == null ? $.pointerTarget<selectorImpl>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<selectorImpl>(s);
		;(s$ as selectorImpl).cases = $.appendOne((s$ as selectorImpl).cases, new selectCase({channel: ((c as any)?.__goType === "*internal.channelImpl" && (c as any).__goValue === undefined && (c as any).__isTypedNil !== true ? ((c as any) as channelImpl | $.VarRef<channelImpl> | null) : $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(c, /* @__PURE__ */ $.pointerType("internal.channelImpl"))), receiveFunc: f}), $.appendZeros.nil)
		return $.interfaceValue<__goscript_workflow.Selector | null>(s, "*internal.selectorImpl", /* @__PURE__ */ $.pointerType("internal.selectorImpl"))
	}

	public AddSend(c: __goscript_workflow.Channel | null, __goscriptParam3: any, __goscriptParam4: (() => void) | null): __goscript_workflow.Selector | null {
		let s: selectorImpl | $.VarRef<selectorImpl> | null = this;
		let v: $.VarRef<any> = $.varRef(__goscriptParam3)
		let f: $.VarRef<(() => void) | null> = $.varRef(__goscriptParam4)
		const s$: selectorImpl = s == null ? $.pointerTarget<selectorImpl>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<selectorImpl>(s);
		;(s$ as selectorImpl).cases = $.appendOne((s$ as selectorImpl).cases, new selectCase({channel: ((c as any)?.__goType === "*internal.channelImpl" && (c as any).__goValue === undefined && (c as any).__isTypedNil !== true ? ((c as any) as channelImpl | $.VarRef<channelImpl> | null) : $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(c, /* @__PURE__ */ $.pointerType("internal.channelImpl"))), sendFunc: f, sendValue: v}), $.appendZeros.nil)
		return $.interfaceValue<__goscript_workflow.Selector | null>(s, "*internal.selectorImpl", /* @__PURE__ */ $.pointerType("internal.selectorImpl"))
	}

	public async Select(ctx: __goscript_context.Context | null): globalThis.Promise<void> {
		const s: selectorImpl | $.VarRef<selectorImpl> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: selectorImpl = s == null ? $.pointerTarget<selectorImpl>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<selectorImpl>(s)
		let state: coroutineState | $.VarRef<coroutineState> | null = await getState(ctx)
		let readyBranch: $.VarRef<(() => void) | null> = $.varRef(null! as (() => void) | null)
		let cleanups: $.Slice<(() => void) | null> = null! as $.Slice<(() => void) | null>
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			for (let __goscriptRangeTarget5 = cleanups, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let c = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as (() => void) | null)
				void (__goscriptAwait = c!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })

		for (let __goscriptRangeTarget6 = (s$ as selectorImpl).cases, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let pair = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as selectCase | $.VarRef<selectCase> | null)
			if ($.pointerValue<selectCase>(pair).receiveFunc != null) {
				let f: ((c: __goscript_workflow.Channel | null, more: boolean) => void) | null = $.pointerValue<((c: __goscript_workflow.Channel | null, more: boolean) => void) | null>($.pointerValue<selectCase>(pair).receiveFunc)
				let c: channelImpl | $.VarRef<channelImpl> | null = $.pointerValue<selectCase>(pair).channel
				let c$: channelImpl = c == null ? $.pointerTarget<channelImpl>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelImpl>(c)
				let callback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback({fn: $.functionValue(async (__goscriptParam5: any, more: boolean): globalThis.Promise<boolean> => {
					let v: $.VarRef<any> = $.varRef(__goscriptParam5)
					if (readyBranch.value != null) {
						return false
					}
					readyBranch.value = $.functionValue(async (): globalThis.Promise<void> => {
						;(c$ as channelImpl).recValue = v
						void (__goscriptAwait = f!($.interfaceValue<__goscript_workflow.Channel | null>(c, "*internal.channelImpl", /* @__PURE__ */ $.pointerType("internal.channelImpl")), more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
					return true
				}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))})
				let __goscriptTuple8: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).receiveAsyncImpl(callback) : channelImpl.prototype.receiveAsyncImpl.call(c, callback))
				let v = $.varRef(__goscriptTuple8[0])
				let ok = __goscriptTuple8[1]
				let more = __goscriptTuple8[2]
				if (ok || !more) {
					// Select() returns in this case/branch. The callback won't be called for this case. However, callback
					// will be called for previous cases/branches. We should set readyBranch so that when other case/branch
					// become ready they won't consume the value for this Select() call.
					readyBranch.value = $.functionValue((): void => {
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
					// Avoid assigning pointer to nil interface which makes
					// c.RecValue != nil and breaks the nil check at the beginning of receiveAsyncImpl
					if (more) {
						;(c$ as channelImpl).recValue = v
					}
					void (__goscriptAwait = f!($.interfaceValue<__goscript_workflow.Channel | null>(c, "*internal.channelImpl", /* @__PURE__ */ $.pointerType("internal.channelImpl")), more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return
				}
				// callback closure is added to channel's blockedReceives, we need to clean it up to avoid closure leak
				cleanups = $.appendOne(cleanups, $.functionValue((): void => {
					void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).removeReceiveCallback(callback) : channelImpl.prototype.removeReceiveCallback.call(c, callback))
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), $.appendZeros.nil)
			} else {
				if ($.pointerValue<selectCase>(pair).sendFunc != null) {
					let f: (() => void) | null = $.pointerValue<(() => void) | null>($.pointerValue<selectCase>(pair).sendFunc)
					let c: channelImpl | $.VarRef<channelImpl> | null = $.pointerValue<selectCase>(pair).channel
					let callback: sendCallback | $.VarRef<sendCallback> | null = new sendCallback({value: $.pointerValue<any>($.pointerValue<selectCase>(pair).sendValue), fn: $.functionValue(async (): globalThis.Promise<boolean> => {
						if (readyBranch.value != null) {
							return false
						}
						readyBranch.value = $.functionValue(async (): globalThis.Promise<void> => {
							void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
						return true
					}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))})
					let ok = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).sendAsyncImpl($.pointerValue<any>($.pointerValue<selectCase>(pair).sendValue), callback) : channelImpl.prototype.sendAsyncImpl.call(c, $.pointerValue<any>($.pointerValue<selectCase>(pair).sendValue), callback))
					if (ok) {
						// Select() returns in this case/branch. The callback won't be called for this case. However, callback
						// will be called for previous cases/branches. We should set readyBranch so that when other case/branch
						// become ready they won't consume the value for this Select() call.
						readyBranch.value = $.functionValue((): void => {
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
						void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return
					}
					// callback closure is added to channel's blockedSends, we need to clean it up to avoid closure leak
					cleanups = $.appendOne(cleanups, $.functionValue((): void => {
						void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelImpl).removeSendCallback(callback) : channelImpl.prototype.removeSendCallback.call(c, callback))
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), $.appendZeros.nil)
				} else {
					if ($.pointerValue<selectCase>(pair).futureFunc != null) {
						let p: selectCase | $.VarRef<selectCase> | null = pair
						let p$: selectCase = p == null ? $.pointerTarget<selectCase>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<selectCase>(p)
						let f: ((f: __goscript_workflow.Future | null) => void) | null = $.pointerValue<((f: __goscript_workflow.Future | null) => void) | null>((p$ as selectCase).futureFunc)
						let callback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback({fn: $.functionValue(async (v: any, more: boolean): globalThis.Promise<boolean> => {
							if (readyBranch.value != null) {
								return false
							}
							readyBranch.value = $.functionValue(async (): globalThis.Promise<void> => {
								;(p$ as selectCase).futureFunc = null
								void (__goscriptAwait = f!(((p$ as selectCase).future as __goscript_workflow.Future | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
							return true
						}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))})

						let [, ok, ] = await $.pointerValue<Exclude<asyncFuture, null>>((p$ as selectCase).future).GetAsync(callback)
						if (ok) {
							// Select() returns in this case/branch. The callback won't be called for this case. However, callback
							// will be called for previous cases/branches. We should set readyBranch so that when other case/branch
							// become ready they won't consume the value for this Select() call.
							readyBranch.value = $.functionValue((): void => {
							}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo));
							;(p$ as selectCase).futureFunc = null
							void (__goscriptAwait = f!(((p$ as selectCase).future as __goscript_workflow.Future | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							return
						}
						// callback closure is added to future's channel's blockedReceives, need to clean up to avoid leak
						cleanups = $.appendOne(cleanups, $.functionValue(async (): globalThis.Promise<void> => {
							void (__goscriptAwait = $.pointerValue<Exclude<asyncFuture, null>>((p$ as selectCase).future).RemoveReceiveCallback(callback), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), $.appendZeros.nil)
					}
				}
			}
		}
		if ((s$ as selectorImpl).defaultFunc != null) {
			let f: (() => void) | null = $.pointerValue<(() => void) | null>((s$ as selectorImpl).defaultFunc)
			void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		while (true) {
			if (readyBranch.value != null) {
				void (__goscriptAwait = readyBranch.value!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState).unblocked() : coroutineState.prototype.unblocked.call(state))
				return
			}
			await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as coroutineState)["yield"](await fmt.Sprintf("blocked on %s.Select", (s$ as selectorImpl).name)) : coroutineState.prototype.yield.call(state, await fmt.Sprintf("blocked on %s.Select", (s$ as selectorImpl).name)))
		}
	}

	static __typeInfo = $.registerStructType(
		"internal.selectorImpl",
		() => new selectorImpl(),
		() => [$.methodSignature("AddDefault", [["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddFuture", [["future", "internal.Future"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Future"], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"], true), $.methodSignature("AddReceive", [["c", "internal.Channel"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"], true), $.methodSignature("AddSend", [["c", "internal.Channel"], ["v", { kind: $.TypeKind.Interface, methods: [] }], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"], true), $.methodSignature("Select", [["ctx", "internal.Context"]], [], true)],
		selectorImpl,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cases", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.selectCase")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("defaultFunc", /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), [2], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class coroutineState {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get dispatcher(): dispatcherImpl | $.VarRef<dispatcherImpl> | null {
		return this._fields.dispatcher
	}

	public set dispatcher(value: dispatcherImpl | $.VarRef<dispatcherImpl> | null) {
		this._fields.dispatcher = value
	}

	public get aboutToBlock(): $.Channel<boolean> | null {
		return this._fields.aboutToBlock
	}

	public set aboutToBlock(value: $.Channel<boolean> | null) {
		this._fields.aboutToBlock = value
	}

	public get unblock(): $.Channel<unblockFunc | null> | null {
		return this._fields.unblock
	}

	public set unblock(value: $.Channel<unblockFunc | null> | null) {
		this._fields.unblock = value
	}

	public get keptBlocked(): boolean {
		return this._fields.keptBlocked
	}

	public set keptBlocked(value: boolean) {
		this._fields.keptBlocked = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public get blocked(): atomic.Bool {
		return this._fields.blocked
	}

	public set blocked(value: atomic.Bool) {
		this._fields.blocked = value
	}

	public get panicError(): __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null {
		return this._fields.panicError
	}

	public set panicError(value: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null) {
		this._fields.panicError = value
	}

	public _fields: {
		name: string
		dispatcher: dispatcherImpl | $.VarRef<dispatcherImpl> | null
		aboutToBlock: $.Channel<boolean> | null
		unblock: $.Channel<unblockFunc | null> | null
		keptBlocked: boolean
		closed: boolean
		blocked: atomic.Bool
		panicError: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null
	}

	constructor(init?: Partial<{name?: string, dispatcher?: dispatcherImpl | $.VarRef<dispatcherImpl> | null, aboutToBlock?: $.Channel<boolean> | null, unblock?: $.Channel<unblockFunc | null> | null, keptBlocked?: boolean, closed?: boolean, blocked?: atomic.Bool, panicError?: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			dispatcher: init?.dispatcher ?? (null! as dispatcherImpl | $.VarRef<dispatcherImpl> | null),
			aboutToBlock: init?.aboutToBlock ?? (null! as $.Channel<boolean> | null),
			unblock: init?.unblock ?? (null! as $.Channel<unblockFunc | null> | null),
			keptBlocked: init?.keptBlocked ?? (false as boolean),
			closed: init?.closed ?? (false as boolean),
			blocked: init?.blocked ? init.blocked.clone() : new atomic.Bool(undefined, true),
			panicError: init?.panicError ?? (null! as __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): coroutineState {
		return new coroutineState(this, true)
	}

	public __goscriptAssign(source: coroutineState): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.dispatcher = values.dispatcher
		target.aboutToBlock = values.aboutToBlock
		target.unblock = values.unblock
		target.keptBlocked = values.keptBlocked
		target.closed = values.closed
		$.assignStruct(target.blocked, values.blocked)
		target.panicError = values.panicError
	}

	public async call(): globalThis.Promise<void> {
		const s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s)
		await $.chanSend((s$ as coroutineState).unblock, $.functionValue((status: string, stackDepth: number): boolean => {
			return false
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		await $.chanRecv((s$ as coroutineState).aboutToBlock)
	}

	public async close(): globalThis.Promise<void> {
		let s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s);
		;(s$ as coroutineState).closed = true
		await $.chanSend((s$ as coroutineState).aboutToBlock, true)
	}

	public async exit(): globalThis.Promise<void> {
		const s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s)
		if (!(s$ as coroutineState).closed) {
			await $.chanSend((s$ as coroutineState).unblock, $.functionValue((status: string, stackDepth: number): boolean => {
				runtime.Goexit()
				return true
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		}
	}

	public async initialYield(stackDepth: number, status: string): globalThis.Promise<void> {
		const s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s)
		if ((s$ as coroutineState).blocked.Swap(true)) {
			$.panic($.concatString("trying to block on coroutine which is already blocked, most likely a wrong Context is used to do blocking", " call (like Future.Get() or Channel.Receive()"))
		}
		let keepBlocked = true
		while (keepBlocked) {
			let f = await $.chanRecv((s$ as coroutineState).unblock)
			keepBlocked = (__goscriptAwait = f!(status, stackDepth + 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (s$ as coroutineState).blocked.Swap(false)
	}

	public async stackTrace(): globalThis.Promise<string> {
		const s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s)
		if ((s$ as coroutineState).closed) {
			return ""
		}
		let stackCh: $.Channel<string> | null = $.makeChannel<string>(1, "", "both")
		await $.chanSend((s$ as coroutineState).unblock, $.functionValue(async (status: string, stackDepth: number): globalThis.Promise<boolean> => {
			await $.chanSend(stackCh, await getStackTrace((s$ as coroutineState).name, status, stackDepth + 2))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return await $.chanRecv(stackCh)
	}

	public unblocked(): void {
		let s: coroutineState | $.VarRef<coroutineState> | null = this;
		$.pointerValue<coroutineState>(s).keptBlocked = false
	}

	public async ["yield"](status: string): globalThis.Promise<void> {
		let s: coroutineState | $.VarRef<coroutineState> | null = this;
		const s$: coroutineState = s == null ? $.pointerTarget<coroutineState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<coroutineState>(s)
		await $.chanSend((s$ as coroutineState).aboutToBlock, true)
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as coroutineState).initialYield(3, status) : coroutineState.prototype.initialYield.call(s, 3, status));
		;(s$ as coroutineState).keptBlocked = true
	}

	static __typeInfo = $.registerStructType(
		"internal.coroutineState",
		() => new coroutineState(),
		() => [$.methodSignature("call", [], [], true), $.methodSignature("close", [], [], true), $.methodSignature("exit", [], [], true), $.methodSignature("initialYield", [["stackDepth", /* @__PURE__ */ $.basicType("int")], ["status", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("stackTrace", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("unblocked", [], [], true), $.methodSignature("yield", [["status", /* @__PURE__ */ $.basicType("string")]], [], true)],
		coroutineState,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dispatcher", /* @__PURE__ */ $.pointerType("internal.dispatcherImpl"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("aboutToBlock", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "both"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("unblock", /* @__PURE__ */ $.channelType(({ kind: $.TypeKind.Function, name: "internal.unblockFunc", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), "both"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("keptBlocked", /* @__PURE__ */ $.basicType("bool"), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [5], 41, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("blocked", "atomic.Bool", [6], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("panicError", /* @__PURE__ */ $.pointerType("internal.workflowPanicError"), [7], 56, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class dispatcherImpl {
	public get sequence(): number {
		return this._fields.sequence
	}

	public set sequence(value: number) {
		this._fields.sequence = value
	}

	public get channelSequence(): number {
		return this._fields.channelSequence
	}

	public set channelSequence(value: number) {
		this._fields.channelSequence = value
	}

	public get selectorSequence(): number {
		return this._fields.selectorSequence
	}

	public set selectorSequence(value: number) {
		this._fields.selectorSequence = value
	}

	public get coroutines(): $.Slice<coroutineState | $.VarRef<coroutineState> | null> {
		return this._fields.coroutines
	}

	public set coroutines(value: $.Slice<coroutineState | $.VarRef<coroutineState> | null>) {
		this._fields.coroutines = value
	}

	public get executing(): boolean {
		return this._fields.executing
	}

	public set executing(value: boolean) {
		this._fields.executing = value
	}

	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public _fields: {
		sequence: number
		channelSequence: number
		selectorSequence: number
		coroutines: $.Slice<coroutineState | $.VarRef<coroutineState> | null>
		executing: boolean
		mutex: sync.Mutex
		closed: boolean
	}

	constructor(init?: Partial<{sequence?: number, channelSequence?: number, selectorSequence?: number, coroutines?: $.Slice<coroutineState | $.VarRef<coroutineState> | null>, executing?: boolean, mutex?: sync.Mutex, closed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			sequence: init?.sequence ?? (0 as number),
			channelSequence: init?.channelSequence ?? (0 as number),
			selectorSequence: init?.selectorSequence ?? (0 as number),
			coroutines: init?.coroutines ?? (null! as $.Slice<coroutineState | $.VarRef<coroutineState> | null>),
			executing: init?.executing ?? (false as boolean),
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex()),
			closed: init?.closed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dispatcherImpl {
		return new dispatcherImpl(this, true)
	}

	public __goscriptAssign(source: dispatcherImpl): void {
		const target = this._fields
		const values = source._fields
		target.sequence = values.sequence
		target.channelSequence = values.channelSequence
		target.selectorSequence = values.selectorSequence
		target.coroutines = values.coroutines
		target.executing = values.executing
		$.assignStruct(target.mutex, values.mutex)
		target.closed = values.closed
	}

	public async Close(): globalThis.Promise<void> {
		let d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		const d$: dispatcherImpl = d == null ? $.pointerTarget<dispatcherImpl>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dispatcherImpl>(d)
		await (d$ as dispatcherImpl).mutex.Lock()
		if ((d$ as dispatcherImpl).closed) {
			void (d$ as dispatcherImpl).mutex.Unlock()
			return
		}
		;(d$ as dispatcherImpl).closed = true
		void (d$ as dispatcherImpl).mutex.Unlock()
		for (let i = 0; i < $.sliceLen((d$ as dispatcherImpl).coroutines); i++) {
			let c: coroutineState | $.VarRef<coroutineState> | null = $.arrayIndex((d$ as dispatcherImpl).coroutines!, i)
			if (!$.pointerValue<coroutineState>(c).closed) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as coroutineState).exit() : coroutineState.prototype.exit.call(c))
			}
		}
	}

	public async ExecuteUntilAllBlocked(): globalThis.Promise<$.GoError> {
		let d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const d$: dispatcherImpl = d == null ? $.pointerTarget<dispatcherImpl>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dispatcherImpl>(d)
		await (d$ as dispatcherImpl).mutex.Lock()
		if ((d$ as dispatcherImpl).closed) {
			$.panic("dispatcher is closed")
		}
		if ((d$ as dispatcherImpl).executing) {
			$.panic("call to ExecuteUntilAllBlocked (possibly from a coroutine) while it is already running")
		}
		;(d$ as dispatcherImpl).executing = true
		void (d$ as dispatcherImpl).mutex.Unlock()
		__defer.defer(() => { ((): void => {
			;(d$ as dispatcherImpl).executing = false
		})() })
		let allBlocked = false
		// Keep executing until at least one goroutine made some progress
		while (!allBlocked) {
			// Give every coroutine chance to execute removing closed ones
			allBlocked = true
			let lastSequence = (d$ as dispatcherImpl).sequence
			for (let i = 0; i < $.sliceLen((d$ as dispatcherImpl).coroutines); i++) {
				let c: coroutineState | $.VarRef<coroutineState> | null = $.arrayIndex((d$ as dispatcherImpl).coroutines!, i)
				let c$: coroutineState = c == null ? $.pointerTarget<coroutineState>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<coroutineState>(c)
				if (!(c$ as coroutineState).closed) {
					// TODO: Support handling of panic in a coroutine by dispatcher.
					// TODO: Dump all outstanding coroutines if one of them panics
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as coroutineState).call() : coroutineState.prototype.call.call(c))
				}
				// c.call() can close the context so check again
				if ((c$ as coroutineState).closed) {
					// remove the closed one from the slice
					;(d$ as dispatcherImpl).coroutines = $.appendSlice($.goSlice((d$ as dispatcherImpl).coroutines, undefined, i), $.goSlice((d$ as dispatcherImpl).coroutines, i + 1, undefined), $.appendZeros.nil)
					i--
					if ((c$ as coroutineState).panicError != null) {
						const __goscriptReturn1: $.GoError = $.interfaceValue<$.GoError>((c$ as coroutineState).panicError, "*internal.workflowPanicError", /* @__PURE__ */ $.pointerType("internal.workflowPanicError"))
						err = __goscriptReturn1
						__defer.dispose()
						return err
					}
					allBlocked = false
				} else {
					allBlocked = allBlocked && ((c$ as coroutineState).keptBlocked || (c$ as coroutineState).closed)
				}
			}
			// Set allBlocked to false if new coroutines where created
			allBlocked = allBlocked && (lastSequence == (d$ as dispatcherImpl).sequence)
			if ($.sliceLen((d$ as dispatcherImpl).coroutines) == 0) {
				break
			}
		}
		const __goscriptReturn2: $.GoError = null
		err = __goscriptReturn2
		__defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public IsDone(): boolean {
		const d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		return $.sliceLen($.pointerValue<dispatcherImpl>(d).coroutines) == 0
	}

	public async StackTrace(): globalThis.Promise<string> {
		const d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		const d$: dispatcherImpl = d == null ? $.pointerTarget<dispatcherImpl>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dispatcherImpl>(d)
		let result: string = ""
		for (let i = 0; i < $.sliceLen((d$ as dispatcherImpl).coroutines); i++) {
			let c: coroutineState | $.VarRef<coroutineState> | null = $.arrayIndex((d$ as dispatcherImpl).coroutines!, i)
			if (!$.pointerValue<coroutineState>(c).closed) {
				if ($.stringLen(result) > 0) {
					result = $.concatString(result, "\n\n")
				}
				result = $.concatString(result, await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as coroutineState).stackTrace() : coroutineState.prototype.stackTrace.call(c)))
			}
		}
		return result
	}

	public async newCoroutine(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<__goscript_context.Context | null> {
		const d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dispatcherImpl).newNamedCoroutine(ctx, await fmt.Sprintf("%v", $.basicInterfaceValue($.pointerValue<dispatcherImpl>(d).sequence + 1, "int")), f) : dispatcherImpl.prototype.newNamedCoroutine.call(d, ctx, await fmt.Sprintf("%v", $.basicInterfaceValue($.pointerValue<dispatcherImpl>(d).sequence + 1, "int")), f))
	}

	public async newNamedCoroutine(ctx: __goscript_context.Context | null, name: string, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<__goscript_context.Context | null> {
		const d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		let state: coroutineState | $.VarRef<coroutineState> | null = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dispatcherImpl).newState(name) : dispatcherImpl.prototype.newState.call(d, name))
		let spawned = __goscript_context.WithValue(ctx, "coroutines", $.interfaceValue(state, "*internal.coroutineState", /* @__PURE__ */ $.pointerType("internal.coroutineState")))
		const __goscriptDeferArg0 = state
		queueMicrotask(async () => { await (async (crt: coroutineState | $.VarRef<coroutineState> | null): globalThis.Promise<void> => {
			const __defer = new $.AsyncDisposableStack()
			try {
				const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.close())($.pointerValue<coroutineState>(crt)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*coroutineState).close-fm")
				__defer.defer(async () => { await __goscriptDeferCallee1() })
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					{
						let r = $.recover()
						if (r != null) {
							let st = await getStackTrace(name, "panic", 4)
							$.pointerValue<coroutineState>(crt).panicError = __goscript_error.newWorkflowPanicError(r, st)
						}
					}
				})() })
				await (crt !== null && (crt as any).__isVarRef !== true && (crt as any).__goValue === undefined ? ((crt as any) as coroutineState).initialYield(1, "") : coroutineState.prototype.initialYield.call(crt, 1, ""))
				void (__goscriptAwait = f!(spawned), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await __defer.dispose()
			} catch (e) {
				await __defer.disposePanic(e)
				if (!$.recovered(e)) {
					throw e
				}
			}
		})(__goscriptDeferArg0) })
		return spawned
	}

	public newState(name: string): coroutineState | $.VarRef<coroutineState> | null {
		let d: dispatcherImpl | $.VarRef<dispatcherImpl> | null = this;
		const d$: dispatcherImpl = d == null ? $.pointerTarget<dispatcherImpl>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dispatcherImpl>(d)
		let c: coroutineState | $.VarRef<coroutineState> | null = new coroutineState({name: name, dispatcher: d, aboutToBlock: $.makeChannel<boolean>(1, false, "both"), unblock: $.makeChannel<unblockFunc | null>(0, null! as unblockFunc | null, "both")});
		;(d$ as dispatcherImpl).sequence++;
		;(d$ as dispatcherImpl).coroutines = $.appendOne((d$ as dispatcherImpl).coroutines, c, $.appendZeros.nil)
		return c
	}

	static __typeInfo = $.registerStructType(
		"internal.dispatcherImpl",
		() => new dispatcherImpl(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ExecuteUntilAllBlocked", [], [["err", "error"]], true), $.methodSignature("IsDone", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("newCoroutine", [["ctx", "internal.Context"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)]], ["internal.Context"], true), $.methodSignature("newNamedCoroutine", [["ctx", "internal.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)]], ["internal.Context"], true), $.methodSignature("newState", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.coroutineState")], true)],
		dispatcherImpl,
		() => [/* @__PURE__ */ $.structField("sequence", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("channelSequence", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("selectorSequence", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("coroutines", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.coroutineState")), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("executing", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("mutex", "sync.Mutex", [5], 52, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [6], 60, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowOptions {
	public get taskListName(): $.VarRef<string> | null {
		return this._fields.taskListName
	}

	public set taskListName(value: $.VarRef<string> | null) {
		this._fields.taskListName = value
	}

	public get executionStartToCloseTimeoutSeconds(): $.VarRef<number> | null {
		return this._fields.executionStartToCloseTimeoutSeconds
	}

	public set executionStartToCloseTimeoutSeconds(value: $.VarRef<number> | null) {
		this._fields.executionStartToCloseTimeoutSeconds = value
	}

	public get taskStartToCloseTimeoutSeconds(): $.VarRef<number> | null {
		return this._fields.taskStartToCloseTimeoutSeconds
	}

	public set taskStartToCloseTimeoutSeconds(value: $.VarRef<number> | null) {
		this._fields.taskStartToCloseTimeoutSeconds = value
	}

	public get domain(): $.VarRef<string> | null {
		return this._fields.domain
	}

	public set domain(value: $.VarRef<string> | null) {
		this._fields.domain = value
	}

	public get workflowID(): string {
		return this._fields.workflowID
	}

	public set workflowID(value: string) {
		this._fields.workflowID = value
	}

	public get waitForCancellation(): boolean {
		return this._fields.waitForCancellation
	}

	public set waitForCancellation(value: boolean) {
		this._fields.waitForCancellation = value
	}

	public get signalChannels(): globalThis.Map<string, __goscript_workflow.Channel | null> | null {
		return this._fields.signalChannels
	}

	public set signalChannels(value: globalThis.Map<string, __goscript_workflow.Channel | null> | null) {
		this._fields.signalChannels = value
	}

	public get queryHandlers(): globalThis.Map<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> | null {
		return this._fields.queryHandlers
	}

	public set queryHandlers(value: globalThis.Map<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> | null) {
		this._fields.queryHandlers = value
	}

	public get workflowIDReusePolicy(): __goscript_client.WorkflowIDReusePolicy {
		return this._fields.workflowIDReusePolicy
	}

	public set workflowIDReusePolicy(value: __goscript_client.WorkflowIDReusePolicy) {
		this._fields.workflowIDReusePolicy = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get retryPolicy(): s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null {
		return this._fields.retryPolicy
	}

	public set retryPolicy(value: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null) {
		this._fields.retryPolicy = value
	}

	public get cronSchedule(): string {
		return this._fields.cronSchedule
	}

	public set cronSchedule(value: string) {
		this._fields.cronSchedule = value
	}

	public get cronOverlapPolicy(): s2.CronOverlapPolicy {
		return this._fields.cronOverlapPolicy
	}

	public set cronOverlapPolicy(value: s2.CronOverlapPolicy) {
		this._fields.cronOverlapPolicy = value
	}

	public get contextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.contextPropagators
	}

	public set contextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.contextPropagators = value
	}

	public get memo(): globalThis.Map<string, any> | null {
		return this._fields.memo
	}

	public set memo(value: globalThis.Map<string, any> | null) {
		this._fields.memo = value
	}

	public get searchAttributes(): globalThis.Map<string, any> | null {
		return this._fields.searchAttributes
	}

	public set searchAttributes(value: globalThis.Map<string, any> | null) {
		this._fields.searchAttributes = value
	}

	public get parentClosePolicy(): __goscript_client.ParentClosePolicy {
		return this._fields.parentClosePolicy
	}

	public set parentClosePolicy(value: __goscript_client.ParentClosePolicy) {
		this._fields.parentClosePolicy = value
	}

	public get bugports(): __goscript_workflow.Bugports {
		return this._fields.bugports
	}

	public set bugports(value: __goscript_workflow.Bugports) {
		this._fields.bugports = value
	}

	public _fields: {
		taskListName: $.VarRef<string> | null
		executionStartToCloseTimeoutSeconds: $.VarRef<number> | null
		taskStartToCloseTimeoutSeconds: $.VarRef<number> | null
		domain: $.VarRef<string> | null
		workflowID: string
		waitForCancellation: boolean
		signalChannels: globalThis.Map<string, __goscript_workflow.Channel | null> | null
		queryHandlers: globalThis.Map<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> | null
		workflowIDReusePolicy: __goscript_client.WorkflowIDReusePolicy
		dataConverter: __goscript_encoded.DataConverter | null
		retryPolicy: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null
		cronSchedule: string
		cronOverlapPolicy: s2.CronOverlapPolicy
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		memo: globalThis.Map<string, any> | null
		searchAttributes: globalThis.Map<string, any> | null
		parentClosePolicy: __goscript_client.ParentClosePolicy
		bugports: __goscript_workflow.Bugports
	}

	constructor(init?: Partial<{taskListName?: $.VarRef<string> | null, executionStartToCloseTimeoutSeconds?: $.VarRef<number> | null, taskStartToCloseTimeoutSeconds?: $.VarRef<number> | null, domain?: $.VarRef<string> | null, workflowID?: string, waitForCancellation?: boolean, signalChannels?: globalThis.Map<string, __goscript_workflow.Channel | null> | null, queryHandlers?: globalThis.Map<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> | null, workflowIDReusePolicy?: __goscript_client.WorkflowIDReusePolicy, dataConverter?: __goscript_encoded.DataConverter | null, retryPolicy?: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null, cronSchedule?: string, cronOverlapPolicy?: s2.CronOverlapPolicy, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, memo?: globalThis.Map<string, any> | null, searchAttributes?: globalThis.Map<string, any> | null, parentClosePolicy?: __goscript_client.ParentClosePolicy, bugports?: __goscript_workflow.Bugports}>, __goscriptValue?: boolean) {
		this._fields = {
			taskListName: init?.taskListName ?? (null! as $.VarRef<string> | null),
			executionStartToCloseTimeoutSeconds: init?.executionStartToCloseTimeoutSeconds ?? (null! as $.VarRef<number> | null),
			taskStartToCloseTimeoutSeconds: init?.taskStartToCloseTimeoutSeconds ?? (null! as $.VarRef<number> | null),
			domain: init?.domain ?? (null! as $.VarRef<string> | null),
			workflowID: init?.workflowID ?? ("" as string),
			waitForCancellation: init?.waitForCancellation ?? (false as boolean),
			signalChannels: init?.signalChannels ?? (null! as globalThis.Map<string, __goscript_workflow.Channel | null> | null),
			queryHandlers: init?.queryHandlers ?? (null! as globalThis.Map<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> | null),
			workflowIDReusePolicy: init?.workflowIDReusePolicy ?? (0 as __goscript_client.WorkflowIDReusePolicy),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			retryPolicy: init?.retryPolicy ?? (null! as s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null),
			cronSchedule: init?.cronSchedule ?? ("" as string),
			cronOverlapPolicy: init?.cronOverlapPolicy ?? (0 as s2.CronOverlapPolicy),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			memo: init?.memo ?? (null! as globalThis.Map<string, any> | null),
			searchAttributes: init?.searchAttributes ?? (null! as globalThis.Map<string, any> | null),
			parentClosePolicy: init?.parentClosePolicy ?? (0 as __goscript_client.ParentClosePolicy),
			bugports: init?.bugports ? init.bugports.clone() : new __goscript_workflow.Bugports(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowOptions {
		return new workflowOptions(this, true)
	}

	public __goscriptAssign(source: workflowOptions): void {
		const target = this._fields
		const values = source._fields
		target.taskListName = values.taskListName
		target.executionStartToCloseTimeoutSeconds = values.executionStartToCloseTimeoutSeconds
		target.taskStartToCloseTimeoutSeconds = values.taskStartToCloseTimeoutSeconds
		target.domain = values.domain
		target.workflowID = values.workflowID
		target.waitForCancellation = values.waitForCancellation
		target.signalChannels = values.signalChannels
		target.queryHandlers = values.queryHandlers
		target.workflowIDReusePolicy = values.workflowIDReusePolicy
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.retryPolicy = values.retryPolicy
		target.cronSchedule = values.cronSchedule
		target.cronOverlapPolicy = values.cronOverlapPolicy
		target.contextPropagators = values.contextPropagators
		target.memo = values.memo
		target.searchAttributes = values.searchAttributes
		target.parentClosePolicy = values.parentClosePolicy
		$.assignStruct(target.bugports, values.bugports)
	}

	public KnownQueryTypes(): $.Slice<string> {
		const w: workflowOptions | $.VarRef<workflowOptions> | null = this;
		let keys: $.Slice<string> = __goscript_client.BuiltinQueryTypes()

		for (const [k, __rangeValue] of $.pointerValue<workflowOptions>(w).queryHandlers?.entries() ?? []) {
			keys = $.appendOne(keys, k)
		}

		sort.Strings(keys)
		return keys
	}

	public async getSignalChannel(ctx: __goscript_context.Context | null, signalName: string): globalThis.Promise<__goscript_workflow.Channel | null> {
		let w: workflowOptions | $.VarRef<workflowOptions> | null = this;
		const w$: workflowOptions = w == null ? $.pointerTarget<workflowOptions>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowOptions>(w)
		{
			let [ch, ok] = $.mapGet<string, __goscript_workflow.Channel | null, __goscript_workflow.Channel | null>((w$ as workflowOptions).signalChannels, signalName, null)
			if (ok) {
				return ch
			}
		}
		let ch = await __goscript_workflow.NewBufferedChannel(ctx, 100000)
		$.mapSet((w$ as workflowOptions).signalChannels, signalName, ch)
		return ch
	}

	public async getUnhandledSignalNames(): globalThis.Promise<$.Slice<string>> {
		const w: workflowOptions | $.VarRef<workflowOptions> | null = this;
		let unhandledSignals: $.Slice<string> = $.arrayToSlice<string>([])
		for (const [k, c] of $.pointerValue<workflowOptions>(w).signalChannels?.entries() ?? []) {
			let ch: channelImpl | $.VarRef<channelImpl> | null = ((c as any)?.__goType === "*internal.channelImpl" && (c as any).__goValue === undefined && (c as any).__isTypedNil !== true ? ((c as any) as channelImpl | $.VarRef<channelImpl> | null) : $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(c, /* @__PURE__ */ $.pointerType("internal.channelImpl")))
			let __goscriptTuple9: any = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as channelImpl).receiveAsyncImpl(null) : channelImpl.prototype.receiveAsyncImpl.call(ch, null))
			let v = $.varRef(__goscriptTuple9[0])
			let ok = __goscriptTuple9[1]
			if (ok) {
				unhandledSignals = $.appendOne(unhandledSignals, k)
				$.pointerValue<channelImpl>(ch).recValue = v
			}
		}
		return unhandledSignals
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowOptions",
		() => new workflowOptions(),
		() => [$.methodSignature("KnownQueryTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("getSignalChannel", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")]], ["internal.Channel"], true), $.methodSignature("getUnhandledSignalNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true)],
		workflowOptions,
		() => [/* @__PURE__ */ $.structField("taskListName", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("executionStartToCloseTimeoutSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskStartToCloseTimeoutSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowID", /* @__PURE__ */ $.basicType("string"), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("waitForCancellation", /* @__PURE__ */ $.basicType("bool"), [5], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("signalChannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "internal.Channel"), [6], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("queryHandlers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), [7], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowIDReusePolicy", /* @__PURE__ */ $.basicType("int", "internal.WorkflowIDReusePolicy"), [8], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [9], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("retryPolicy", /* @__PURE__ */ $.pointerType("shared.RetryPolicy"), [10], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronSchedule", /* @__PURE__ */ $.basicType("string"), [11], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronOverlapPolicy", /* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy"), [12], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [13], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [14], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("searchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [15], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("parentClosePolicy", /* @__PURE__ */ $.basicType("int", "internal.ParentClosePolicy"), [16], 168, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("bugports", "internal.Bugports", [17], 176, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class executeWorkflowParams {
	public get workflowOptions(): workflowOptions {
		return this._fields.workflowOptions
	}

	public set workflowOptions(value: workflowOptions) {
		this._fields.workflowOptions = value
	}

	public get workflowType(): __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null {
		return this._fields.workflowType
	}

	public set workflowType(value: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null) {
		this._fields.workflowType = value
	}

	public get input(): $.Slice<number> {
		return this._fields.input
	}

	public set input(value: $.Slice<number>) {
		this._fields.input = value
	}

	public get header(): s2.Header | $.VarRef<s2.Header> | null {
		return this._fields.header
	}

	public set header(value: s2.Header | $.VarRef<s2.Header> | null) {
		this._fields.header = value
	}

	public get attempt(): number {
		return this._fields.attempt
	}

	public set attempt(value: number) {
		this._fields.attempt = value
	}

	public get scheduledTime(): time.Time {
		return this._fields.scheduledTime
	}

	public set scheduledTime(value: time.Time) {
		this._fields.scheduledTime = value
	}

	public get lastCompletionResult(): $.Slice<number> {
		return this._fields.lastCompletionResult
	}

	public set lastCompletionResult(value: $.Slice<number>) {
		this._fields.lastCompletionResult = value
	}

	public _fields: {
		workflowOptions: workflowOptions
		workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null
		input: $.Slice<number>
		header: s2.Header | $.VarRef<s2.Header> | null
		attempt: number
		scheduledTime: time.Time
		lastCompletionResult: $.Slice<number>
	}

	constructor(init?: Partial<{workflowOptions?: workflowOptions, workflowType?: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null, input?: $.Slice<number>, header?: s2.Header | $.VarRef<s2.Header> | null, attempt?: number, scheduledTime?: time.Time, lastCompletionResult?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowOptions: init?.workflowOptions ? init.workflowOptions.clone() : new workflowOptions(undefined, true),
			workflowType: init?.workflowType ?? (null! as __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null),
			input: init?.input ?? (null! as $.Slice<number>),
			header: init?.header ?? (null! as s2.Header | $.VarRef<s2.Header> | null),
			attempt: init?.attempt ?? (0 as number),
			scheduledTime: init?.scheduledTime ? $.markAsStructValue($.cloneStructValue(init.scheduledTime)) : $.markAsStructValue(new time.Time()),
			lastCompletionResult: init?.lastCompletionResult ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): executeWorkflowParams {
		return new executeWorkflowParams(this, true)
	}

	public __goscriptAssign(source: executeWorkflowParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.workflowOptions, values.workflowOptions)
		target.workflowType = values.workflowType
		target.input = values.input
		target.header = values.header
		target.attempt = values.attempt
		$.assignStruct(target.scheduledTime, values.scheduledTime)
		target.lastCompletionResult = values.lastCompletionResult
	}

	public KnownQueryTypes(): any {
		return $.pointerValue<workflowOptions>(this.workflowOptions).KnownQueryTypes()
	}

	public async getSignalChannel(ctx: any, signalName: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowOptions>(this.workflowOptions).getSignalChannel(ctx, signalName)
	}

	public async getUnhandledSignalNames(): globalThis.Promise<any> {
		return await $.pointerValue<workflowOptions>(this.workflowOptions).getUnhandledSignalNames()
	}

	static __typeInfo = $.registerStructType(
		"internal.executeWorkflowParams",
		() => new executeWorkflowParams(),
		() => [$.methodSignature("KnownQueryTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("getSignalChannel", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")]], ["internal.Channel"], true), $.methodSignature("getUnhandledSignalNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true)],
		executeWorkflowParams,
		() => [/* @__PURE__ */ $.structField("workflowOptions", "internal.workflowOptions", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("workflowType", /* @__PURE__ */ $.pointerType("internal.WorkflowType"), [1], 184, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 192, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [3], 216, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("attempt", /* @__PURE__ */ $.basicType("int32"), [4], 224, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scheduledTime", "time.Time", [5], 232, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("lastCompletionResult", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 256, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class decodeFutureImpl {
	public get futureImpl(): futureImpl | $.VarRef<futureImpl> | null {
		return this._fields.futureImpl
	}

	public set futureImpl(value: futureImpl | $.VarRef<futureImpl> | null) {
		this._fields.futureImpl = value
	}

	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public _fields: {
		futureImpl: futureImpl | $.VarRef<futureImpl> | null
		fn: any
	}

	constructor(init?: Partial<{futureImpl?: futureImpl | $.VarRef<futureImpl> | null, fn?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			futureImpl: init?.futureImpl ?? (null! as futureImpl | $.VarRef<futureImpl> | null),
			fn: init?.fn ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decodeFutureImpl {
		return new decodeFutureImpl(this, true)
	}

	public __goscriptAssign(source: decodeFutureImpl): void {
		const target = this._fields
		const values = source._fields
		target.futureImpl = values.futureImpl
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Get(ctx: __goscript_context.Context | null, value: any): globalThis.Promise<$.GoError> {
		const d: decodeFutureImpl | $.VarRef<decodeFutureImpl> | null = this;
		const d$: decodeFutureImpl = d == null ? $.pointerTarget<decodeFutureImpl>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decodeFutureImpl>(d)
		let more = await channelImpl.prototype.Receive.call($.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).channel, ctx, null)
		if (more) {
			$.panic("not closed")
		}
		if (!$.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).ready) {
			$.panic("not ready")
		}
		if ((($.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).err != null) || ($.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).value == null)) || (value == null)) {
			return $.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).err
		}
		let rf = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(value)))
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rf)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return errors.New("value parameter is not a pointer")
		}

		let err = await __goscript_internal_activity.deSerializeFunctionResult((d$ as decodeFutureImpl).fn, $.mustTypeAssert<$.Slice<number>>($.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).value, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), value, await getDataConverterFromWorkflowContext(ctx), ((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<channelImpl>($.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).channel).env).GetRegistry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null))
		if (err != null) {
			return err
		}
		return $.pointerValue<futureImpl>((d$ as decodeFutureImpl).futureImpl).err
	}

	public async Chain(future: any): globalThis.Promise<any> {
		return await $.pointerValue<futureImpl>(this.futureImpl).Chain(future)
	}

	public ChainFuture(future: any): any {
		return $.pointerValue<futureImpl>(this.futureImpl).ChainFuture(future)
	}

	public async GetAsync(callback: any): globalThis.Promise<any> {
		return await $.pointerValue<futureImpl>(this.futureImpl).GetAsync(callback)
	}

	public GetValueAndError(): any {
		return $.pointerValue<futureImpl>(this.futureImpl).GetValueAndError()
	}

	public IsReady(): any {
		return $.pointerValue<futureImpl>(this.futureImpl).IsReady()
	}

	public RemoveReceiveCallback(callback: any): any {
		return $.pointerValue<futureImpl>(this.futureImpl).RemoveReceiveCallback(callback)
	}

	public async Set(value: any, err: any): globalThis.Promise<any> {
		return await $.pointerValue<futureImpl>(this.futureImpl).Set(value, err)
	}

	public async SetError(err: any): globalThis.Promise<any> {
		return await $.pointerValue<futureImpl>(this.futureImpl).SetError(err)
	}

	public async SetValue(value: any): globalThis.Promise<any> {
		return await $.pointerValue<futureImpl>(this.futureImpl).SetValue(value)
	}

	static __typeInfo = $.registerStructType(
		"internal.decodeFutureImpl",
		() => new decodeFutureImpl(),
		() => [$.methodSignature("Get", [["ctx", "internal.Context"], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("Chain", [["future", "internal.Future"]]), $.methodSignature("ChainFuture", [["future", "internal.Future"]]), $.methodSignature("GetAsync", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("GetValueAndError", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("RemoveReceiveCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]]), $.methodSignature("Set", [["value", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]]), $.methodSignature("SetError", [["err", "error"]]), $.methodSignature("SetValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]])],
		decodeFutureImpl,
		() => [/* @__PURE__ */ $.structField("futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class childWorkflowFutureImpl {
	public get decodeFutureImpl(): decodeFutureImpl | $.VarRef<decodeFutureImpl> | null {
		return this._fields.decodeFutureImpl
	}

	public set decodeFutureImpl(value: decodeFutureImpl | $.VarRef<decodeFutureImpl> | null) {
		this._fields.decodeFutureImpl = value
	}

	public get executionFuture(): futureImpl | $.VarRef<futureImpl> | null {
		return this._fields.executionFuture
	}

	public set executionFuture(value: futureImpl | $.VarRef<futureImpl> | null) {
		this._fields.executionFuture = value
	}

	public _fields: {
		decodeFutureImpl: decodeFutureImpl | $.VarRef<decodeFutureImpl> | null
		executionFuture: futureImpl | $.VarRef<futureImpl> | null
	}

	constructor(init?: Partial<{decodeFutureImpl?: decodeFutureImpl | $.VarRef<decodeFutureImpl> | null, executionFuture?: futureImpl | $.VarRef<futureImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			decodeFutureImpl: init?.decodeFutureImpl ?? (null! as decodeFutureImpl | $.VarRef<decodeFutureImpl> | null),
			executionFuture: init?.executionFuture ?? (null! as futureImpl | $.VarRef<futureImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): childWorkflowFutureImpl {
		return new childWorkflowFutureImpl(this, true)
	}

	public __goscriptAssign(source: childWorkflowFutureImpl): void {
		const target = this._fields
		const values = source._fields
		target.decodeFutureImpl = values.decodeFutureImpl
		target.executionFuture = values.executionFuture
	}

	public GetChildWorkflowExecution(): __goscript_workflow.Future | null {
		const f: childWorkflowFutureImpl | $.VarRef<childWorkflowFutureImpl> | null = this;
		return $.interfaceValue<__goscript_workflow.Future | null>($.pointerValue<childWorkflowFutureImpl>(f).executionFuture, "*internal.futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl"))
	}

	public async SignalChildWorkflow(ctx: __goscript_context.Context | null, signalName: string, data: any): globalThis.Promise<__goscript_workflow.Future | null> {
		const f: childWorkflowFutureImpl | $.VarRef<childWorkflowFutureImpl> | null = this;
		let childExec: $.VarRef<__goscript_workflow.WorkflowExecution> = $.varRef(new __goscript_workflow.WorkflowExecution(undefined, true))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_workflow.Future, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as childWorkflowFutureImpl).GetChildWorkflowExecution() : childWorkflowFutureImpl.prototype.GetChildWorkflowExecution.call(f))).Get(ctx, $.interfaceValue(childExec, "*internal.WorkflowExecution", /* @__PURE__ */ $.pointerType("internal.WorkflowExecution"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as childWorkflowFutureImpl).GetChildWorkflowExecution() : childWorkflowFutureImpl.prototype.GetChildWorkflowExecution.call(f))
			}
		}

		let childWorkflowOnly = true
		// below we use empty run ID indicating the current running one, in case child do continue-as-new
		return __goscript_workflow.signalExternalWorkflow(ctx, childExec.value.ID, "", signalName, data, childWorkflowOnly)
	}

	public async Chain(future: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).Chain(future)
	}

	public ChainFuture(future: any): any {
		return $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).ChainFuture(future)
	}

	public async Get(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).Get(ctx, value)
	}

	public async GetAsync(callback: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).GetAsync(callback)
	}

	public GetValueAndError(): any {
		return $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).GetValueAndError()
	}

	public IsReady(): any {
		return $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).IsReady()
	}

	public RemoveReceiveCallback(callback: any): any {
		return $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).RemoveReceiveCallback(callback)
	}

	public async Set(value: any, err: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).Set(value, err)
	}

	public async SetError(err: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).SetError(err)
	}

	public async SetValue(value: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<decodeFutureImpl>(this.decodeFutureImpl).futureImpl).SetValue(value)
	}

	static __typeInfo = $.registerStructType(
		"internal.childWorkflowFutureImpl",
		() => new childWorkflowFutureImpl(),
		() => [$.methodSignature("GetChildWorkflowExecution", [], ["internal.Future"], true), $.methodSignature("SignalChildWorkflow", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["internal.Future"], true), $.methodSignature("Chain", [["future", "internal.Future"]]), $.methodSignature("ChainFuture", [["future", "internal.Future"]]), $.methodSignature("Get", [["ctx", "internal.Context"], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("GetAsync", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("GetValueAndError", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("RemoveReceiveCallback", [["callback", /* @__PURE__ */ $.pointerType("internal.receiveCallback")]]), $.methodSignature("Set", [["value", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]]), $.methodSignature("SetError", [["err", "error"]]), $.methodSignature("SetValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]])],
		childWorkflowFutureImpl,
		() => [/* @__PURE__ */ $.structField("decodeFutureImpl", /* @__PURE__ */ $.pointerType("internal.decodeFutureImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("executionFuture", /* @__PURE__ */ $.pointerType("internal.futureImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class queryHandler {
	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public get queryType(): string {
		return this._fields.queryType
	}

	public set queryType(value: string) {
		this._fields.queryType = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public _fields: {
		fn: any
		queryType: string
		dataConverter: __goscript_encoded.DataConverter | null
	}

	constructor(init?: Partial<{fn?: any, queryType?: string, dataConverter?: __goscript_encoded.DataConverter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fn: init?.fn ?? (null! as any),
			queryType: init?.queryType ?? ("" as string),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): queryHandler {
		return new queryHandler(this, true)
	}

	public __goscriptAssign(source: queryHandler): void {
		const target = this._fields
		const values = source._fields
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
		target.queryType = values.queryType
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
	}

	public async execute(input: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const h: queryHandler | $.VarRef<queryHandler> | null = this;
		let result: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const h$: queryHandler = h == null ? $.pointerTarget<queryHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<queryHandler>(h)
			// if query handler panic, convert it to error
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let p = $.recover()
					if (p != null) {
						result = null
						let st = await getStackTraceRaw("query handler [panic]:", 7, 0)
						if ($.comparableEqual(p, "getState: illegal access from outside of workflow context")) {
							// query handler code try to access workflow functions outside of workflow context, make error message
							// more descriptive and clear.
							p = $.concatString("query handler must not use cadence context to do things like workflow.NewChannel(), ", "workflow.Go() or to call any workflow blocking functions like Channel.Get() or Future.Get()")
						}
						err = fmt.Errorf("query handler panic: %v, stack trace: %v", p, st)
					}
				}
			})() })

			let fnType = reflect.TypeOf((h$ as queryHandler).fn)
			let args: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>

			if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) && util.IsTypeByteSlice((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(input, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
			} else {
				let __goscriptTuple10: any = await __goscript_internal_worker.decodeArgs((h$ as queryHandler).dataConverter, fnType, input)
				let decoded: $.Slice<reflect.Value> = __goscriptTuple10[0]
				let __goscriptShadow3 = __goscriptTuple10[1]
				if (__goscriptShadow3 != null) {
					const __goscriptReturn3: [$.Slice<number>, $.GoError] = [null, fmt.Errorf("unable to decode the input for queryType: %v, with error: %v", (h$ as queryHandler).queryType, (__goscriptShadow3 as any))]
					result = __goscriptReturn3[0]
					err = __goscriptReturn3[1]
					await __defer.dispose()
					return [result, err]
				}
				args = $.appendSlice(args, decoded)
			}

			// invoke the query handler with arguments.
			let fnValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((h$ as queryHandler).fn)))
			let retValues: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(fnValue)).Call(args)

			// we already verified (in validateHandlerFn()) that the query handler returns 2 values
			let retValue = $.markAsStructValue($.cloneStructValue($.arrayIndex(retValues!, 0)))
			if (($.markAsStructValue($.cloneStructValue(retValue)).Kind() != 22) || !$.markAsStructValue($.cloneStructValue(retValue)).IsNil()) {
				let __goscriptTuple11: any = await __goscript_internal_worker.encodeArg((h$ as queryHandler).dataConverter, $.markAsStructValue($.cloneStructValue(retValue)).Interface())
				result = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
				if (err != null) {
					const __goscriptReturn4: [$.Slice<number>, $.GoError] = [null, err]
					result = __goscriptReturn4[0]
					err = __goscriptReturn4[1]
					await __defer.dispose()
					return [result, err]
				}
			}

			let errValue = $.markAsStructValue($.cloneStructValue($.arrayIndex(retValues!, 1)))
			if ($.markAsStructValue($.cloneStructValue(errValue)).IsNil()) {
				const __goscriptReturn5: [$.Slice<number>, $.GoError] = [result, null]
				result = __goscriptReturn5[0]
				err = __goscriptReturn5[1]
				await __defer.dispose()
				return [result, err]
			}
			let __goscriptTuple12: any = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(errValue)).Interface(), "error")
			err = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (!ok) {
				const __goscriptReturn6: [$.Slice<number>, $.GoError] = [null, fmt.Errorf("failed to parse error result as it is not of error interface: %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(errValue)), "reflect.Value", "reflect.Value"))]
				result = __goscriptReturn6[0]
				err = __goscriptReturn6[1]
				await __defer.dispose()
				return [result, err]
			}
			const __goscriptReturn7: [$.Slice<number>, $.GoError] = [result, err]
			result = __goscriptReturn7[0]
			err = __goscriptReturn7[1]
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

	public async validateHandlerFn(): globalThis.Promise<$.GoError> {
		const h: queryHandler | $.VarRef<queryHandler> | null = this;
		let fnType = reflect.TypeOf($.pointerValue<queryHandler>(h).fn)
		if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
			return fmt.Errorf("query handler must be function but was %s", $.namedValueInterfaceValue<any>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}

		if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 2) {
			return fmt.Errorf("query handler must return 2 values (serializable result and error), but found %d return values", $.basicInterfaceValue((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"))
		}

		if (!await __goscript_internal_worker.isValidResultType((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return fmt.Errorf("first return value of query handler must be serializable but found: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		if (!await __goscript_internal_worker.isError((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return fmt.Errorf("second return value of query handler must be error but found %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.queryHandler",
		() => new queryHandler(),
		() => [$.methodSignature("execute", [["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("validateHandlerFn", [], ["error"], true)],
		queryHandler,
		() => [/* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("queryType", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowEnvironmentInterceptor {
	public get env(): __goscript_internal_worker_base.workflowEnvironment | null {
		return this._fields.env
	}

	public set env(value: __goscript_internal_worker_base.workflowEnvironment | null) {
		this._fields.env = value
	}

	public get interceptorChainHead(): __goscript_interceptors.WorkflowInterceptor | null {
		return this._fields.interceptorChainHead
	}

	public set interceptorChainHead(value: __goscript_interceptors.WorkflowInterceptor | null) {
		this._fields.interceptorChainHead = value
	}

	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public _fields: {
		env: __goscript_internal_worker_base.workflowEnvironment | null
		interceptorChainHead: __goscript_interceptors.WorkflowInterceptor | null
		fn: any
	}

	constructor(init?: Partial<{env?: __goscript_internal_worker_base.workflowEnvironment | null, interceptorChainHead?: __goscript_interceptors.WorkflowInterceptor | null, fn?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			env: init?.env ?? (null! as __goscript_internal_worker_base.workflowEnvironment | null),
			interceptorChainHead: init?.interceptorChainHead ?? (null! as __goscript_interceptors.WorkflowInterceptor | null),
			fn: init?.fn ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowEnvironmentInterceptor {
		return new workflowEnvironmentInterceptor(this, true)
	}

	public __goscriptAssign(source: workflowEnvironmentInterceptor): void {
		const target = this._fields
		const values = source._fields
		target.env = $.assignFieldValue(target.env, values.env, "internal.workflowEnvironment")
		target.interceptorChainHead = $.assignFieldValue(target.interceptorChainHead, values.interceptorChainHead, "internal.WorkflowInterceptor")
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async ExecuteActivity(ctx: __goscript_context.Context | null, typeName: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		using __defer = new $.DisposableStack()
		const wc$: workflowEnvironmentInterceptor = wc == null ? $.pointerTarget<workflowEnvironmentInterceptor>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentInterceptor>(wc)

		let dataConverter = await getDataConverterFromWorkflowContext(ctx)
		let __goscriptShadow4: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await getRegistryFromWorkflowContext(ctx)
		let [future, settable] = await newDecodeFuture(ctx, typeName)
		let __goscriptTuple13: any = await __goscript_internal_activity.getValidatedActivityFunction(typeName, args, __goscriptShadow4)
		let activityType: __goscript_activity.ActivityType | $.VarRef<__goscript_activity.ActivityType> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}

		let __goscriptTuple14: any = await __goscript_internal_activity.getValidatedActivityOptions(ctx)
		let options: __goscript_internal_activity.activityOptions | $.VarRef<__goscript_internal_activity.activityOptions> | null = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		let options$: __goscript_internal_activity.activityOptions = options == null ? $.pointerTarget<__goscript_internal_activity.activityOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<__goscript_internal_activity.activityOptions>(options)
		if (err != null) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}

		{
			let sessionInfo: __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null = await __goscript_session.getSessionInfo(ctx)
			if (sessionInfo != null) {
				let isCreationActivity = __goscript_session.isSessionCreationActivity(typeName)
				if (($.pointerValue<__goscript_session.SessionInfo>(sessionInfo).sessionState == 1) && !isCreationActivity) {
					void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, __goscript_session.ErrSessionFailed), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return future
				}
				if (($.pointerValue<__goscript_session.SessionInfo>(sessionInfo).sessionState == 0) && !isCreationActivity) {

					let oldTaskListName = (options$ as __goscript_internal_activity.activityOptions).TaskListName;
					;(options$ as __goscript_internal_activity.activityOptions).TaskListName = $.pointerValue<__goscript_session.SessionInfo>(sessionInfo).tasklist
					if (((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((wc$ as workflowEnvironmentInterceptor).env).GetFeatureFlags(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_internal_utils.FeatureFlags).EphemeralTaskListsEnabled) {
						;(options$ as __goscript_internal_activity.activityOptions).TaskListKind = 2
					}
					__defer.defer(() => { ((): void => {
						;(options$ as __goscript_internal_activity.activityOptions).TaskListName = oldTaskListName;
						;(options$ as __goscript_internal_activity.activityOptions).TaskListKind = 0
					})() })
				}
			}
		}

		let header: s2.Header | $.VarRef<s2.Header> | null = await getHeadersFromContext(ctx)

		let __goscriptTuple15: any = await __goscript_internal_worker.encodeArgs(dataConverter, args)
		let input: $.Slice<number> = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			$.panic((err as any))
		}

		let params = new __goscript_internal_activity.executeActivityParams({activityOptions: (options$ as __goscript_internal_activity.activityOptions), ActivityType: $.pointerValue<__goscript_activity.ActivityType>(activityType), Input: input, DataConverter: dataConverter, Header: header}, true)

		let __goscriptTuple16: any = $.typeAssertTuple<channelImpl | $.VarRef<channelImpl> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.channelImpl"))
		let ctxDone: channelImpl | $.VarRef<channelImpl> | null = __goscriptTuple16[0]
		let cancellable = __goscriptTuple16[1]
		let cancellationCallback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback()
		let cancellationCallback$: receiveCallback = cancellationCallback == null ? $.pointerTarget<receiveCallback>(cancellationCallback) : (cancellationCallback as any).__isVarRef === true ? (cancellationCallback as any).value : (cancellationCallback as any).__goValue === undefined ? (cancellationCallback as any) : $.pointerTarget<receiveCallback>(cancellationCallback)
		let a: __goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment(ctx))).ExecuteActivity((params).clone(), $.functionValue(async (r: $.Slice<number>, e: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set($.interfaceValue(r, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (cancellable) {

				void (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).removeReceiveCallback(cancellationCallback) : channelImpl.prototype.removeReceiveCallback.call(ctxDone, cancellationCallback))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null)

		if (cancellable) {
			;(cancellationCallback$ as receiveCallback).fn = $.functionValue(async (v: any, more: boolean): globalThis.Promise<boolean> => {
				if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((wc$ as workflowEnvironmentInterceptor).env).RequestCancelActivity($.pointerValue<__goscript_internal_activity.activityInfo>(a).activityID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return false
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			let [, ok, more] = await (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).receiveAsyncImpl(cancellationCallback) : channelImpl.prototype.receiveAsyncImpl.call(ctxDone, cancellationCallback))
			if (ok || !more) {
				void (__goscriptAwait = (cancellationCallback$ as receiveCallback).fn!(null, more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return future
	}

	public async ExecuteChildWorkflow(ctx: __goscript_context.Context | null, childWorkflowType: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.ChildWorkflowFuture | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let [mainFuture, mainSettable] = await newDecodeFuture(ctx, childWorkflowType)
		let [executionFuture, executionSettable] = await __goscript_workflow.NewFuture(ctx)
		let result: childWorkflowFutureImpl | $.VarRef<childWorkflowFutureImpl> | null = new childWorkflowFutureImpl({decodeFutureImpl: ((mainFuture as any)?.__goType === "*internal.decodeFutureImpl" && (mainFuture as any).__goValue === undefined && (mainFuture as any).__isTypedNil !== true ? ((mainFuture as any) as decodeFutureImpl | $.VarRef<decodeFutureImpl> | null) : $.mustTypeAssert<decodeFutureImpl | $.VarRef<decodeFutureImpl> | null>(mainFuture, /* @__PURE__ */ $.pointerType("internal.decodeFutureImpl"))), executionFuture: ((executionFuture as any)?.__goType === "*internal.futureImpl" && (executionFuture as any).__goValue === undefined && (executionFuture as any).__isTypedNil !== true ? ((executionFuture as any) as futureImpl | $.VarRef<futureImpl> | null) : $.mustTypeAssert<futureImpl | $.VarRef<futureImpl> | null>(executionFuture, /* @__PURE__ */ $.pointerType("internal.futureImpl")))})

		let correctChildCancellation = true
		let workflowOptionsFromCtx: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx)
		let workflowOptionsFromCtx$: workflowOptions = workflowOptionsFromCtx == null ? $.pointerTarget<workflowOptions>(workflowOptionsFromCtx) : (workflowOptionsFromCtx as any).__isVarRef === true ? (workflowOptionsFromCtx as any).value : (workflowOptionsFromCtx as any).__goValue === undefined ? (workflowOptionsFromCtx as any) : $.pointerTarget<workflowOptions>(workflowOptionsFromCtx)

		if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			if ((workflowOptionsFromCtx$ as workflowOptions).bugports.StartChildWorkflowsOnCanceledContext) {

				correctChildCancellation = false
			} else {
				void (__goscriptAwait = (mainSettable !== null && (mainSettable as any).__isVarRef !== true && (mainSettable as any).__goValue === undefined ? (mainSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(mainSettable)).SetError((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (executionSettable !== null && (executionSettable as any).__isVarRef !== true && (executionSettable as any).__goValue === undefined ? (executionSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(executionSettable)).SetError((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return $.interfaceValue<__goscript_workflow.ChildWorkflowFuture | null>(result, "*internal.childWorkflowFutureImpl", /* @__PURE__ */ $.pointerType("internal.childWorkflowFutureImpl"))
			}
		}

		let dc = (workflowOptionsFromCtx$ as workflowOptions).dataConverter
		let env = await getWorkflowEnvironment(ctx)
		let __goscriptTuple17: any = await getValidatedWorkflowFunction(childWorkflowType, args, dc, ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetRegistry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null))
		let wfType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple17[0]
		let input: $.Slice<number> = __goscriptTuple17[1]
		let err = __goscriptTuple17[2]
		if (err != null) {
			void (__goscriptAwait = (executionSettable !== null && (executionSettable as any).__isVarRef !== true && (executionSettable as any).__goValue === undefined ? (executionSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(executionSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (mainSettable !== null && (mainSettable as any).__isVarRef !== true && (mainSettable as any).__goValue === undefined ? (mainSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(mainSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return $.interfaceValue<__goscript_workflow.ChildWorkflowFuture | null>(result, "*internal.childWorkflowFutureImpl", /* @__PURE__ */ $.pointerType("internal.childWorkflowFutureImpl"))
		}
		let __goscriptTuple18: any = await getValidatedWorkflowOptions(ctx)
		let options: workflowOptions | $.VarRef<workflowOptions> | null = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		let options$: workflowOptions = options == null ? $.pointerTarget<workflowOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<workflowOptions>(options)
		if (err != null) {
			void (__goscriptAwait = (executionSettable !== null && (executionSettable as any).__isVarRef !== true && (executionSettable as any).__goValue === undefined ? (executionSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(executionSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (mainSettable !== null && (mainSettable as any).__isVarRef !== true && (mainSettable as any).__goValue === undefined ? (mainSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(mainSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return $.interfaceValue<__goscript_workflow.ChildWorkflowFuture | null>(result, "*internal.childWorkflowFutureImpl", /* @__PURE__ */ $.pointerType("internal.childWorkflowFutureImpl"))
		}
		;(options$ as workflowOptions).dataConverter = dc;
		;(options$ as workflowOptions).contextPropagators = (workflowOptionsFromCtx$ as workflowOptions).contextPropagators;
		;(options$ as workflowOptions).memo = (workflowOptionsFromCtx$ as workflowOptions).memo;
		;(options$ as workflowOptions).searchAttributes = (workflowOptionsFromCtx$ as workflowOptions).searchAttributes

		let params = (await (async () => { const __goscriptLiteralField0 = await __goscript_workflow.getWorkflowHeader(ctx, (options$ as workflowOptions).contextPropagators); const __goscriptLiteralField1 = await __goscript_workflow.Now(ctx); return new executeWorkflowParams({workflowOptions: (options$ as workflowOptions), input: input, workflowType: wfType, header: __goscriptLiteralField0, scheduledTime: __goscriptLiteralField1}, true) })())

		let childWorkflowExecution: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null = null! as __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null

		let __goscriptTuple19: any = $.typeAssertTuple<channelImpl | $.VarRef<channelImpl> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.channelImpl"))
		let ctxDone: channelImpl | $.VarRef<channelImpl> | null = __goscriptTuple19[0]
		let cancellable = __goscriptTuple19[1]
		let cancellationCallback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback()
		let cancellationCallback$: receiveCallback = cancellationCallback == null ? $.pointerTarget<receiveCallback>(cancellationCallback) : (cancellationCallback as any).__isVarRef === true ? (cancellationCallback as any).value : (cancellationCallback as any).__goValue === undefined ? (cancellationCallback as any) : $.pointerTarget<receiveCallback>(cancellationCallback)
		let shouldCancelAsync = false
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment(ctx))).ExecuteChildWorkflow((params).clone(), $.functionValue(async (r: $.Slice<number>, e: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = (mainSettable !== null && (mainSettable as any).__isVarRef !== true && (mainSettable as any).__goValue === undefined ? (mainSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(mainSettable)).Set($.interfaceValue(r, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (cancellable) {

				void (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).removeReceiveCallback(cancellationCallback) : channelImpl.prototype.removeReceiveCallback.call(ctxDone, cancellationCallback))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)), $.functionValue(async (__goscriptParam6: __goscript_workflow.WorkflowExecution, e: $.GoError): globalThis.Promise<void> => {
			let r: $.VarRef<__goscript_workflow.WorkflowExecution> = $.varRef(__goscriptParam6)
			if (e == null) {
				childWorkflowExecution = r
			}
			void (__goscriptAwait = (executionSettable !== null && (executionSettable as any).__isVarRef !== true && (executionSettable as any).__goValue === undefined ? (executionSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(executionSettable)).Set($.interfaceValue((r.value).clone(), "internal.WorkflowExecution", "internal.WorkflowExecution"), e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			if ((shouldCancelAsync && (e == null)) && !(__goscriptAwait = (mainFuture !== null && (mainFuture as any).__isVarRef !== true && (mainFuture as any).__goValue === undefined ? (mainFuture as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(mainFuture)).IsReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if ((workflowOptionsFromCtx$ as workflowOptions).bugports.StartChildWorkflowsOnCanceledContext) {
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment(ctx))).RequestCancelChildWorkflow($.pointerValue<string>((options$ as workflowOptions).domain), $.pointerValue<__goscript_workflow.WorkflowExecution>(childWorkflowExecution).ID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (err != null) {
			void (__goscriptAwait = (executionSettable !== null && (executionSettable as any).__isVarRef !== true && (executionSettable as any).__goValue === undefined ? (executionSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(executionSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (mainSettable !== null && (mainSettable as any).__isVarRef !== true && (mainSettable as any).__goValue === undefined ? (mainSettable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(mainSettable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return $.interfaceValue<__goscript_workflow.ChildWorkflowFuture | null>(result, "*internal.childWorkflowFutureImpl", /* @__PURE__ */ $.pointerType("internal.childWorkflowFutureImpl"))
		}

		if (cancellable) {
			;(cancellationCallback$ as receiveCallback).fn = $.functionValue(async (v: any, more: boolean): globalThis.Promise<boolean> => {
				if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))) {
					if ((childWorkflowExecution != null) && !(__goscriptAwait = (mainFuture !== null && (mainFuture as any).__isVarRef !== true && (mainFuture as any).__goValue === undefined ? (mainFuture as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(mainFuture)).IsReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {

						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment(ctx))).RequestCancelChildWorkflow($.pointerValue<string>((options$ as workflowOptions).domain), $.pointerValue<__goscript_workflow.WorkflowExecution>(childWorkflowExecution).ID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						if ((childWorkflowExecution == null) && correctChildCancellation) {

							// callback closure is added to channel's blockedReceives, we need to clean it up to avoid closure leak
							shouldCancelAsync = true
						}
					}
				}
				return false
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			let [, ok, more] = await (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).receiveAsyncImpl(cancellationCallback) : channelImpl.prototype.receiveAsyncImpl.call(ctxDone, cancellationCallback))
			if (ok || !more) {
				void (__goscriptAwait = (cancellationCallback$ as receiveCallback).fn!(null, more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return $.interfaceValue<__goscript_workflow.ChildWorkflowFuture | null>(result, "*internal.childWorkflowFutureImpl", /* @__PURE__ */ $.pointerType("internal.childWorkflowFutureImpl"))
	}

	public async ExecuteLocalActivity(ctx: __goscript_context.Context | null, activityType: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let header: s2.Header | $.VarRef<s2.Header> | null = await getHeadersFromContext(ctx)
		let activityFn = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("localActivityFn"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (activityFn == null) {
			$.panic($.concatString(($.concatString("ExecuteLocalActivity: Expected context key ", "localActivityFn")), " is missing"))
		}
		// unblock
		let [future, settable] = await newDecodeFuture(ctx, activityFn)
		{
			let err = await __goscript_internal_activity.validateFunctionArgs(activityFn, args, false)
			if (err != null) {
				void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return future
			}
		}
		let __goscriptTuple20: any = await __goscript_internal_activity.getValidatedLocalActivityOptions(ctx)
		let options: __goscript_internal_activity.localActivityOptions | $.VarRef<__goscript_internal_activity.localActivityOptions> | null = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		if (err != null) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}
		let params: __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null = (await (async () => { const __goscriptLiteralField2 = await __goscript_workflow.GetWorkflowInfo(ctx); const __goscriptLiteralField3 = await getDataConverterFromWorkflowContext(ctx); const __goscriptLiteralField4 = await __goscript_workflow.Now(ctx); return new __goscript_internal_activity.executeLocalActivityParams({localActivityOptions: $.pointerValue<__goscript_internal_activity.localActivityOptions>(options), ActivityFn: activityFn, ActivityType: activityType, InputArgs: args, WorkflowInfo: __goscriptLiteralField2, DataConverter: __goscriptLiteralField3, ScheduledTime: __goscriptLiteralField4, Header: header}) })())

		await __goscript_workflow.Go(ctx, $.functionValue(async (ctx: __goscript_context.Context | null): globalThis.Promise<void> => {
			while (true) {
				let f = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentInterceptor).scheduleLocalActivity(ctx, params) : workflowEnvironmentInterceptor.prototype.scheduleLocalActivity.call(wc, ctx, params))
				let result: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
				let __goscriptShadow5 = (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(f)).Get(ctx, $.interfaceValue(result, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				{
					let __goscriptTuple21: any = $.typeAssertTuple<__goscript_workflow.needRetryError | $.VarRef<__goscript_workflow.needRetryError> | null>(__goscriptShadow5, /* @__PURE__ */ $.pointerType("internal.needRetryError"))
					let retryErr: __goscript_workflow.needRetryError | $.VarRef<__goscript_workflow.needRetryError> | null = __goscriptTuple21[0]
					let ok = __goscriptTuple21[1]
					if (ok && ($.pointerValue<__goscript_workflow.needRetryError>(retryErr).Backoff > 0n)) {

						await __goscript_workflow.Sleep(ctx, $.pointerValue<__goscript_workflow.needRetryError>(retryErr).Backoff)

						$.pointerValue<__goscript_internal_activity.executeLocalActivityParams>(params).Attempt = $.int((($.pointerValue<__goscript_workflow.needRetryError>(retryErr).Attempt + 1) | 0), 32)
						continue
					}
				}

				void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set($.interfaceValue(result.value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), __goscriptShadow5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))

		return future
	}

	public async ExecuteWorkflow(ctx: __goscript_context.Context | null, workflowType: string, inputArgs: $.Slice<any>): globalThis.Promise<$.Slice<any>> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let results: $.Slice<any> = null! as $.Slice<any>
		let args: $.Slice<reflect.Value> = $.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.ValueOf((ctx as any))))])
		for (let __goscriptRangeTarget7 = inputArgs, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let arg = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as any)
			// Move blocked sends into buffer
			{
				const __goscriptTypeSwitchValue = arg
				switch (true) {
					case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
						{
							args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg))))
						}
						break
					default:
						{
							args = $.appendOne(args, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg))).Elem())))
						}
						break
				}
			}
		}
		let fnValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<workflowEnvironmentInterceptor>(wc).fn)))
		let retValues: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(fnValue)).Call(args)
		for (let __goscriptRangeTarget8 = retValues, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let r = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as reflect.Value)))
			results = $.appendOne(results, $.markAsStructValue($.cloneStructValue(r)).Interface(), $.appendZeros.nil)
		}
		return results
	}

	public async GetLastCompletionResult(ctx: __goscript_context.Context | null, d: $.Slice<any>): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentInterceptor).GetWorkflowInfo(ctx) : workflowEnvironmentInterceptor.prototype.GetWorkflowInfo.call(wc, ctx))
		let info$: __goscript_workflow.WorkflowInfo = info == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(info)
		if ($.sliceLen((info$ as __goscript_workflow.WorkflowInfo).lastCompletionResult) == 0) {
			return __goscript_error.ErrNoData
		}

		let encodedVal = __goscript_workflow_testsuite.newEncodedValues((info$ as __goscript_workflow.WorkflowInfo).lastCompletionResult, await getDataConverterFromWorkflowContext(ctx))
		return (encodedVal !== null && (encodedVal as any).__isVarRef !== true && (encodedVal as any).__goValue === undefined ? (encodedVal as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(encodedVal)).Get(d)
	}

	public async GetLogger(ctx: __goscript_context.Context | null): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).GetLogger()
	}

	public async GetMetricsScope(ctx: __goscript_context.Context | null): globalThis.Promise<tally.Scope | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).GetMetricsScope()
	}

	public async GetSignalChannel(ctx: __goscript_context.Context | null, signalName: string): globalThis.Promise<__goscript_workflow.Channel | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return workflowOptions.prototype.getSignalChannel.call(await getWorkflowEnvOptions(ctx), ctx, signalName)
	}

	public async GetVersion(ctx: __goscript_context.Context | null, changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): globalThis.Promise<__goscript_workflow.Version> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).GetVersion(changeID, minSupported, maxSupported, opts)
	}

	public async GetWorkflowInfo(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).WorkflowInfo()
	}

	public async HasLastCompletionResult(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentInterceptor).GetWorkflowInfo(ctx) : workflowEnvironmentInterceptor.prototype.GetWorkflowInfo.call(wc, ctx))
		return $.sliceLen($.pointerValue<__goscript_workflow.WorkflowInfo>(info).lastCompletionResult) > 0
	}

	public async IsReplaying(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).IsReplaying()
	}

	public async MutableSideEffect(ctx: __goscript_context.Context | null, id: string, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let wrapperFunc: (() => any | globalThis.Promise<any>) | null = $.functionValue(async (): globalThis.Promise<any> => {
			return f!(ctx)
		}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).MutableSideEffect(id, wrapperFunc, equals)
	}

	public async NewTimer(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		const wc$: workflowEnvironmentInterceptor = wc == null ? $.pointerTarget<workflowEnvironmentInterceptor>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentInterceptor>(wc)
		let [future, settable] = await __goscript_workflow.NewFuture(ctx)
		if (d <= 0n) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(true, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}

		let __goscriptTuple22: any = $.typeAssertTuple<channelImpl | $.VarRef<channelImpl> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.channelImpl"))
		let ctxDone: channelImpl | $.VarRef<channelImpl> | null = __goscriptTuple22[0]
		let cancellable = __goscriptTuple22[1]
		let cancellationCallback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback()
		let cancellationCallback$: receiveCallback = cancellationCallback == null ? $.pointerTarget<receiveCallback>(cancellationCallback) : (cancellationCallback as any).__isVarRef === true ? (cancellationCallback as any).value : (cancellationCallback as any).__goValue === undefined ? (cancellationCallback as any) : $.pointerTarget<receiveCallback>(cancellationCallback)
		let t: __goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((wc$ as workflowEnvironmentInterceptor).env).NewTimer(d, $.functionValue(async (r: $.Slice<number>, e: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (cancellable) {

				void (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).removeReceiveCallback(cancellationCallback) : channelImpl.prototype.removeReceiveCallback.call(ctxDone, cancellationCallback))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null)

		if ((t != null) && cancellable) {
			;(cancellationCallback$ as receiveCallback).fn = $.functionValue(async (v: any, more: boolean): globalThis.Promise<boolean> => {
				if (!(__goscriptAwait = (future !== null && (future as any).__isVarRef !== true && (future as any).__goValue === undefined ? (future as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(future)).IsReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((wc$ as workflowEnvironmentInterceptor).env).RequestCancelTimer($.pointerValue<__goscript_internal_time.timerInfo>(t).timerID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return false
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			let [, ok, more] = await (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).receiveAsyncImpl(cancellationCallback) : channelImpl.prototype.receiveAsyncImpl.call(ctxDone, cancellationCallback))
			if (ok || !more) {
				void (__goscriptAwait = (cancellationCallback$ as receiveCallback).fn!(null, more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return future
	}

	public async Now(ctx: __goscript_context.Context | null): globalThis.Promise<time.Time> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
	}

	public async RequestCancelExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let ctx1 = await setWorkflowEnvOptionsIfNotExist(ctx)
		let options: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx1)
		let options$: workflowOptions = options == null ? $.pointerTarget<workflowOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<workflowOptions>(options)
		let [future, settable] = await __goscript_workflow.NewFuture(ctx1)

		if (((options$ as workflowOptions).domain == null) || ($.stringEqual($.pointerValue<string>((options$ as workflowOptions).domain), ""))) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, __goscript_workflow.errDomainNotSet), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}

		if ($.stringEqual(workflowID, "")) {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set(null, __goscript_workflow.errWorkflowIDNotSet), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return future
		}

		let resultCallback: ((result: $.Slice<number>, err: $.GoError) => void) | null = $.functionValue(async (result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set($.interfaceValue(result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).RequestCancelExternalWorkflow($.pointerValue<string>((options$ as workflowOptions).domain), workflowID, runID, resultCallback), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return future
	}

	public async SetQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		if (strings.HasPrefix(queryType, "__")) {
			return errors.New("queryType starts with '__' is reserved for internal use")
		}
		return setQueryHandler(ctx, queryType, handler)
	}

	public async SideEffect(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let dc = await getDataConverterFromWorkflowContext(ctx)
		let [future, settable] = await __goscript_workflow.NewFuture(ctx)
		let wrapperFunc: (() => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null = $.functionValue(async (): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			let r = (__goscriptAwait = f!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return __goscript_internal_worker.encodeArg(dc, r)
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
		let resultCallback: ((result: $.Slice<number>, err: $.GoError) => void) | null = $.functionValue(async (result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<__goscript_workflow.Settable, null>) : $.pointerValue<Exclude<__goscript_workflow.Settable, null>>(settable)).Set($.interfaceValue(new __goscript_workflow.EncodedValue({value: result, dataConverter: dc}, true), "internal.EncodedValue", "internal.EncodedValue"), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).SideEffect(wrapperFunc, resultCallback), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let encoded: $.VarRef<__goscript_workflow.EncodedValue> = $.varRef(new __goscript_workflow.EncodedValue(undefined, true))
		{
			let err = (__goscriptAwait = (future !== null && (future as any).__isVarRef !== true && (future as any).__goValue === undefined ? (future as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(future)).Get(ctx, $.interfaceValue(encoded, "*internal.EncodedValue", /* @__PURE__ */ $.pointerType("internal.EncodedValue"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				$.panic((err as any))
			}
		}
		return $.interfaceValue<__goscript_encoded.Value | null>((encoded.value).clone(), "internal.EncodedValue", "internal.EncodedValue")
	}

	public async SignalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		const childWorkflowOnly: boolean = false
		return __goscript_workflow.signalExternalWorkflow(ctx, workflowID, runID, signalName, arg, false)
	}

	public async Sleep(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let err: $.GoError = null! as $.GoError
		let t = await __goscript_workflow.NewTimer(ctx, d)
		err = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(t)).Get(ctx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async UpsertSearchAttributes(ctx: __goscript_context.Context | null, attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		{
			let [, ok] = $.mapGet<string, any, any>(attributes, "CadenceChangeVersion", null)
			if (ok) {
				return errors.New("CadenceChangeVersion is a reserved key that cannot be set, please use other key")
			}
		}
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).UpsertSearchAttributes(attributes)
	}

	public async scheduleLocalActivity(ctx: __goscript_context.Context | null, params: __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null): globalThis.Promise<__goscript_workflow.Future | null> {
		const wc: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = this;
		let f: futureImpl | $.VarRef<futureImpl> | null = new futureImpl({channel: $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(await __goscript_workflow.NewChannel(ctx), /* @__PURE__ */ $.pointerType("internal.channelImpl"))})
		let __goscriptTuple23: any = $.typeAssertTuple<channelImpl | $.VarRef<channelImpl> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.channelImpl"))
		let ctxDone: channelImpl | $.VarRef<channelImpl> | null = __goscriptTuple23[0]
		let cancellable = __goscriptTuple23[1]
		let cancellationCallback: receiveCallback | $.VarRef<receiveCallback> | null = new receiveCallback()
		let cancellationCallback$: receiveCallback = cancellationCallback == null ? $.pointerTarget<receiveCallback>(cancellationCallback) : (cancellationCallback as any).__isVarRef === true ? (cancellationCallback as any).value : (cancellationCallback as any).__goValue === undefined ? (cancellationCallback as any) : $.pointerTarget<receiveCallback>(cancellationCallback)
		let la: __goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>($.pointerValue<workflowEnvironmentInterceptor>(wc).env).ExecuteLocalActivity(($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>(params)).clone(), $.functionValue(async (lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null): globalThis.Promise<void> => {
			if (cancellable) {

				void (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).removeReceiveCallback(cancellationCallback) : channelImpl.prototype.removeReceiveCallback.call(ctxDone, cancellationCallback))
			}

			if ((($.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).err == null) || __goscript_error.IsCanceledError($.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).err)) || ($.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).backoff <= 0n)) {
				await futureImpl.prototype.Set.call(f, $.interfaceValue($.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).err)
				return
			}

			await futureImpl.prototype.Set.call(f, null, $.interfaceValue<$.GoError>(new __goscript_workflow.needRetryError({Backoff: $.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).backoff, Attempt: $.pointerValue<__goscript_internal_worker_base.localActivityResultWrapper>(lar).attempt}), "*internal.needRetryError", /* @__PURE__ */ $.pointerType("internal.needRetryError")))
			return
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null)

		if (cancellable) {
			;(cancellationCallback$ as receiveCallback).fn = $.functionValue(async (v: any, more: boolean): globalThis.Promise<boolean> => {
				if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await getWorkflowEnvironment(ctx))).RequestCancelLocalActivity($.pointerValue<__goscript_internal_activity.localActivityInfo>(la).activityID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return false
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			let [, ok, more] = await (ctxDone !== null && (ctxDone as any).__isVarRef !== true && (ctxDone as any).__goValue === undefined ? ((ctxDone as any) as channelImpl).receiveAsyncImpl(cancellationCallback) : channelImpl.prototype.receiveAsyncImpl.call(ctxDone, cancellationCallback))
			if (ok || !more) {
				void (__goscriptAwait = (cancellationCallback$ as receiveCallback).fn!(null, more), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return $.interfaceValue<__goscript_workflow.Future | null>(f, "*internal.futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl"))
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowEnvironmentInterceptor",
		() => new workflowEnvironmentInterceptor(),
		() => [$.methodSignature("ExecuteActivity", [["ctx", "internal.Context"], ["typeName", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"], true), $.methodSignature("ExecuteChildWorkflow", [["ctx", "internal.Context"], ["childWorkflowType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.ChildWorkflowFuture"], true), $.methodSignature("ExecuteLocalActivity", [["ctx", "internal.Context"], ["activityType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"], true), $.methodSignature("ExecuteWorkflow", [["ctx", "internal.Context"], ["workflowType", /* @__PURE__ */ $.basicType("string")], ["inputArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["results", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], true), $.methodSignature("GetLastCompletionResult", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("GetLogger", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("GetMetricsScope", [["ctx", "internal.Context"]], ["tally.Scope"], true), $.methodSignature("GetSignalChannel", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")]], ["internal.Channel"], true), $.methodSignature("GetVersion", [["ctx", "internal.Context"], ["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")], true), $.methodSignature("GetWorkflowInfo", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], true), $.methodSignature("HasLastCompletionResult", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsReplaying", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MutableSideEffect", [["ctx", "internal.Context"], ["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("NewTimer", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["internal.Future"], true), $.methodSignature("Now", [["ctx", "internal.Context"]], ["time.Time"], true), $.methodSignature("RequestCancelExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["internal.Future"], true), $.methodSignature("SetQueryHandler", [["ctx", "internal.Context"], ["queryType", /* @__PURE__ */ $.basicType("string")], ["handler", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("SideEffect", [["ctx", "internal.Context"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("SignalExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], ["internal.Future"], true), $.methodSignature("Sleep", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["err", "error"]], true), $.methodSignature("UpsertSearchAttributes", [["ctx", "internal.Context"], ["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("scheduleLocalActivity", [["ctx", "internal.Context"], ["params", /* @__PURE__ */ $.pointerType("internal.executeLocalActivityParams")]], ["internal.Future"], true)],
		workflowEnvironmentInterceptor,
		() => [/* @__PURE__ */ $.structField("env", "internal.workflowEnvironment", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("interceptorChainHead", "internal.WorkflowInterceptor", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const defaultSignalChannelSize: number = 100000

export const panicIllegalAccessCoroutinueState: string = "getState: illegal access from outside of workflow context"

export const workflowEnvironmentContextKey: string = "workflowEnv"

export const workflowInterceptorsContextKey: string = "workflowInterceptor"

export const localActivityFnContextKey: string = "localActivityFn"

export const workflowEnvInterceptorContextKey: string = "envInterceptor"

export const workflowResultContextKey: string = "workflowResult"

export const coroutinesContextKey: string = "coroutines"

export const workflowEnvOptionsContextKey: string = "wfEnvOptions"

export const disableCleanStackTraces: boolean = false

export let stackBuf: Uint8Array = $.arrayValue(new Uint8Array(100000))

export function __goscript_set_stackBuf(__goscriptValue: Uint8Array): void {
	stackBuf = __goscriptValue
}

export async function getWorkflowResultPointerPointer(ctx: __goscript_context.Context | null): globalThis.Promise<$.VarRef<workflowResult | $.VarRef<workflowResult> | null> | null> {
	let rpp = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("workflowResult"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (rpp == null) {
		$.panic("getWorkflowResultPointerPointer: Not a workflow context")
	}
	return $.mustTypeAssert<$.VarRef<workflowResult | $.VarRef<workflowResult> | null> | null>(rpp, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("internal.workflowResult")))
}

export async function getWorkflowEnvironment(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_internal_worker_base.workflowEnvironment | null> {
	let wc = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("workflowEnv"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (wc == null) {
		$.panic("getWorkflowContext: Not a workflow context")
	}
	return $.mustTypeAssert<__goscript_internal_worker_base.workflowEnvironment | null>(wc, "internal.workflowEnvironment")
}

export async function getEnvInterceptor(ctx: __goscript_context.Context | null): globalThis.Promise<workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null> {
	let wc = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("envInterceptor"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (wc == null) {
		$.panic("getWorkflowContext: Not a workflow context")
	}
	return ((wc as any)?.__goType === "*internal.workflowEnvironmentInterceptor" && (wc as any).__goValue === undefined && (wc as any).__isTypedNil !== true ? ((wc as any) as workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null) : $.mustTypeAssert<workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null>(wc, /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentInterceptor")))
}

export async function getWorkflowInterceptor(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_interceptors.WorkflowInterceptor | null> {
	let wc = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("workflowInterceptor"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (wc == null) {
		$.panic("getWorkflowInterceptor: Not a workflow context")
	}
	return $.mustTypeAssert<__goscript_interceptors.WorkflowInterceptor | null>(wc, "internal.WorkflowInterceptor")
}

export async function newWorkflowContext(env: __goscript_internal_worker_base.workflowEnvironment | null, interceptors: __goscript_interceptors.WorkflowInterceptor | null, envInterceptor: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null): globalThis.Promise<__goscript_context.Context | null> {
	let rootCtx = __goscript_context.WithValue($.namedValueInterfaceValue<__goscript_context.Context | null>(__goscript_context.background, "*internal.emptyCtx", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), "workflowEnv", (env as any))
	rootCtx = __goscript_context.WithValue(rootCtx, "envInterceptor", $.interfaceValue(envInterceptor, "*internal.workflowEnvironmentInterceptor", /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentInterceptor")))
	rootCtx = __goscript_context.WithValue(rootCtx, "workflowInterceptor", (interceptors as any))

	let resultPtr: $.VarRef<workflowResult | $.VarRef<workflowResult> | null> = $.varRef(null! as workflowResult | $.VarRef<workflowResult> | null)
	rootCtx = __goscript_context.WithValue(rootCtx, "workflowResult", $.interfaceValue(resultPtr, "**internal.workflowResult", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("internal.workflowResult"))))

	// Set default values for the workflow execution.
	let wInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).WorkflowInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null)
	let wInfo$: __goscript_workflow.WorkflowInfo = wInfo == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(wInfo) : (wInfo as any).__isVarRef === true ? (wInfo as any).value : (wInfo as any).__goValue === undefined ? (wInfo as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(wInfo)
	rootCtx = await __goscript_workflow.WithWorkflowDomain(rootCtx, (wInfo$ as __goscript_workflow.WorkflowInfo).Domain)
	rootCtx = await __goscript_workflow.WithWorkflowTaskList(rootCtx, (wInfo$ as __goscript_workflow.WorkflowInfo).TaskListName)
	rootCtx = await __goscript_workflow.WithExecutionStartToCloseTimeout(rootCtx, $.int64Mul($.int64((wInfo$ as __goscript_workflow.WorkflowInfo).ExecutionStartToCloseTimeoutSeconds), 1000000000n))
	rootCtx = await __goscript_workflow.WithWorkflowTaskStartToCloseTimeout(rootCtx, $.int64Mul($.int64((wInfo$ as __goscript_workflow.WorkflowInfo).TaskStartToCloseTimeoutSeconds), 1000000000n))
	rootCtx = await __goscript_workflow.WithTaskList(rootCtx, (wInfo$ as __goscript_workflow.WorkflowInfo).TaskListName)
	rootCtx = await __goscript_workflow.WithDataConverter(rootCtx, (__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetDataConverter(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	rootCtx = await __goscript_workflow.withContextPropagators(rootCtx, ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetContextPropagators(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_headers.ContextPropagator | null>))
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(rootCtx)).OriginalTaskListName = (wInfo$ as __goscript_workflow.WorkflowInfo).TaskListName

	return rootCtx
}

export async function newWorkflowInterceptors(env: __goscript_internal_worker_base.workflowEnvironment | null, factories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>): globalThis.Promise<[__goscript_interceptors.WorkflowInterceptor | null, workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null]> {
	let envInterceptor: workflowEnvironmentInterceptor | $.VarRef<workflowEnvironmentInterceptor> | null = new workflowEnvironmentInterceptor({env: env})
	let interceptor: __goscript_interceptors.WorkflowInterceptor | null = $.interfaceValue<__goscript_interceptors.WorkflowInterceptor | null>(envInterceptor, "*internal.workflowEnvironmentInterceptor", /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentInterceptor"))
	for (let __goscriptSliceWindow0 = $.sliceRange(factories), i = $.sliceLen(factories) - 1; i >= 0; i--) {
		interceptor = (__goscriptAwait = $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptorFactory, null>>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_interceptors.WorkflowInterceptorFactory | null)).NewInterceptor(((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).WorkflowInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null), interceptor), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	$.pointerValue<workflowEnvironmentInterceptor>(envInterceptor).interceptorChainHead = interceptor
	return [interceptor, envInterceptor]
}

export async function newDispatcher(rootCtx: __goscript_context.Context | null, root: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<[dispatcherImpl | $.VarRef<dispatcherImpl> | null, __goscript_context.Context | null]> {
	let result: dispatcherImpl | $.VarRef<dispatcherImpl> | null = new dispatcherImpl()
	let ctxWithState = await (result !== null && (result as any).__isVarRef !== true && (result as any).__goValue === undefined ? ((result as any) as dispatcherImpl).newCoroutine(rootCtx, root) : dispatcherImpl.prototype.newCoroutine.call(result, rootCtx, root))
	return [result, ctxWithState]
}

export async function executeDispatcher(ctx: __goscript_context.Context | null, dispatcher: dispatcher | null): globalThis.Promise<void> {
	let env = await getWorkflowEnvironment(ctx)
	let panicErr = (__goscriptAwait = (dispatcher !== null && (dispatcher as any).__isVarRef !== true && (dispatcher as any).__goValue === undefined ? (dispatcher as Exclude<dispatcher, null>) : $.pointerValue<Exclude<dispatcher, null>>(dispatcher)).ExecuteUntilAllBlocked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (panicErr != null) {
		void (__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).Complete(null, panicErr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}

	let rp: workflowResult | $.VarRef<workflowResult> | null = $.pointerValue<workflowResult | $.VarRef<workflowResult> | null>(await getWorkflowResultPointerPointer(ctx))
	let rp$: workflowResult = rp == null ? $.pointerTarget<workflowResult>(rp) : (rp as any).__isVarRef === true ? (rp as any).value : (rp as any).__goValue === undefined ? (rp as any) : $.pointerTarget<workflowResult>(rp)
	if (rp == null) {
		// Result is not set, so workflow is still executing
		return
	}

	let us: $.Slice<string> = await workflowOptions.prototype.getUnhandledSignalNames.call(await getWorkflowEnvOptions(ctx))
	if ($.sliceLen(us) > 0) {
		await zap.Logger.prototype.Info.call(((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetLogger(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as zap.Logger | $.VarRef<zap.Logger> | null), "Workflow has unhandled signals", $.arrayToSlice<zap.Field>([zap.Strings("SignalNames", us)]))
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetMetricsScope(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Counter(metrics.UnhandledSignalsCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	void (__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).Complete((rp$ as workflowResult).workflowResult, (rp$ as workflowResult).error), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function getState(ctx: __goscript_context.Context | null): globalThis.Promise<coroutineState | $.VarRef<coroutineState> | null> {
	let __goscriptShadow6 = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("coroutines"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (__goscriptShadow6 == null) {
		$.panic("getState: not workflow context")
	}
	let state: coroutineState | $.VarRef<coroutineState> | null = ((__goscriptShadow6 as any)?.__goType === "*internal.coroutineState" && (__goscriptShadow6 as any).__goValue === undefined && (__goscriptShadow6 as any).__isTypedNil !== true ? ((__goscriptShadow6 as any) as coroutineState | $.VarRef<coroutineState> | null) : $.mustTypeAssert<coroutineState | $.VarRef<coroutineState> | null>(__goscriptShadow6, /* @__PURE__ */ $.pointerType("internal.coroutineState")))
	let state$: coroutineState = state == null ? $.pointerTarget<coroutineState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<coroutineState>(state)
	// When workflow gets evicted from cache is closes the dispatcher and exits all its coroutines.
	// However if workflow function have a defer, it will be executed. Many workflow API calls will end up here.
	// The following check prevents coroutine executing further. It would panic otherwise as context is no longer valid.
	if ($.pointerValue<dispatcherImpl>((state$ as coroutineState).dispatcher).closed) {
		runtime.Goexit()
	}
	if (!$.pointerValue<dispatcherImpl>((state$ as coroutineState).dispatcher).executing) {
		$.panic("getState: illegal access from outside of workflow context")
	}
	return state
}

export async function getStackTrace(coroutineName: string, status: string, stackDepth: number): globalThis.Promise<string> {
	let top = await fmt.Sprintf("coroutine %s [%s]:", coroutineName, status)
	// Omit top stackDepth frames + top status line.
	// Omit bottom two frames which is wrapping of coroutine in a goroutine.
	return getStackTraceRaw(top, (stackDepth * 2) + 1, 4)
}

export async function getStackTraceRaw(top: string, omitTop: number, omitBottom: number): globalThis.Promise<string> {
	let stack: $.Slice<number> = $.goSlice(stackBuf, undefined, runtime.Stack($.goSlice(stackBuf, undefined, undefined), false))
	let rawStack = await fmt.Sprintf("%s", strings.TrimRightFunc($.bytesToString(stack), unicode.IsSpace))
	if (false) {
		return rawStack
	}
	let lines: $.Slice<string> = strings.Split(rawStack, "\n")
	lines = $.goSlice(lines, omitTop, $.sliceLen(lines) - omitBottom)
	lines = $.appendSlice($.arrayToSlice<string>([top]), lines)
	return strings.Join(lines, "\n")
}

export function newSyncWorkflowDefinition(workflow: workflow | null): syncWorkflowDefinition | $.VarRef<syncWorkflowDefinition> | null {
	return new syncWorkflowDefinition({workflow: workflow})
}

export async function getValidatedWorkflowFunction(workflowFunc: any, args: $.Slice<any>, dataConverter: __goscript_encoded.DataConverter | null, r: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<[__goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null, $.Slice<number>, $.GoError]> {
	let fnName = ""
	let fType = reflect.TypeOf(workflowFunc)
	switch (await __goscript_internal_activity.getKind(fType)) {
		case reflect.String:
		{
			fnName = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(workflowFunc))).String()
			break
		}
		case reflect.Func:
		{
			{
				let err = await __goscript_internal_activity.validateFunctionArgs(workflowFunc, args, true)
				if (err != null) {
					return [null, null, err]
				}
			}
			fnName = await __goscript_internal_worker.getWorkflowFunctionName(r, workflowFunc)
			break
		}
		default:
		{
			return [null, null, fmt.Errorf("invalid type 'workflowFunc' parameter provided, it can be either worker function or name of the worker type: %v", workflowFunc)]
			break
		}
	}

	if (dataConverter == null) {
		dataConverter = __goscript_encoded.getDefaultDataConverter()
	}
	let __goscriptTuple24: any = await __goscript_internal_worker.encodeArgs(dataConverter, args)
	let input: $.Slice<number> = __goscriptTuple24[0]
	let err = __goscriptTuple24[1]
	if (err != null) {
		return [null, null, err]
	}
	return [new __goscript_workflow.WorkflowType({Name: fnName}), input, null]
}

export async function getValidatedWorkflowOptions(ctx: __goscript_context.Context | null): globalThis.Promise<[workflowOptions | $.VarRef<workflowOptions> | null, $.GoError]> {
	let p: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx)
	let p$: workflowOptions = p == null ? $.pointerTarget<workflowOptions>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<workflowOptions>(p)
	if (p == null) {
		// We need task list as a compulsory parameter. This can be removed after registration
		return [null, __goscript_workflow.errWorkflowOptionBadRequest]
	}
	let info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = await __goscript_workflow.GetWorkflowInfo(ctx)
	let info$: __goscript_workflow.WorkflowInfo = info == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(info)
	if (((p$ as workflowOptions).domain == null) || ($.stringEqual($.pointerValue<string>((p$ as workflowOptions).domain), ""))) {
		// default to use current workflow's domain
		;(p$ as workflowOptions).domain = common.StringPtr((info$ as __goscript_workflow.WorkflowInfo).Domain)
	}
	if (((p$ as workflowOptions).taskListName == null) || ($.stringEqual($.pointerValue<string>((p$ as workflowOptions).taskListName), ""))) {
		// default to use current workflow's task list
		;(p$ as workflowOptions).taskListName = common.StringPtr((info$ as __goscript_workflow.WorkflowInfo).TaskListName)
	}
	if (((p$ as workflowOptions).taskStartToCloseTimeoutSeconds == null) || ($.pointerValue<number>((p$ as workflowOptions).taskStartToCloseTimeoutSeconds) < 0)) {
		return [null, errors.New("missing or negative DecisionTaskStartToCloseTimeout")]
	}
	if ($.pointerValue<number>((p$ as workflowOptions).taskStartToCloseTimeoutSeconds) == 0) {
		;(p$ as workflowOptions).taskStartToCloseTimeoutSeconds = common.Int32Ptr(10)
	}
	if (((p$ as workflowOptions).executionStartToCloseTimeoutSeconds == null) || ($.pointerValue<number>((p$ as workflowOptions).executionStartToCloseTimeoutSeconds) <= 0)) {
		return [null, errors.New("missing or invalid ExecutionStartToCloseTimeout")]
	}
	{
		let err = __goscript_internal_activity.validateRetryPolicy((p$ as workflowOptions).retryPolicy)
		if (err != null) {
			return [null, err]
		}
	}
	{
		let err = await validateCronSchedule((p$ as workflowOptions).cronSchedule)
		if (err != null) {
			return [null, err]
		}
	}

	return [p, null]
}

export async function validateCronSchedule(cronSchedule: string): globalThis.Promise<$.GoError> {
	if ($.stringLen(cronSchedule) == 0) {
		return null
	}

	let [, err] = await cron.ParseStandard(cronSchedule)
	return err
}

export async function getWorkflowEnvOptions(ctx: __goscript_context.Context | null): globalThis.Promise<workflowOptions | $.VarRef<workflowOptions> | null> {
	let options = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value("wfEnvOptions"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (options != null) {
		return ((options as any)?.__goType === "*internal.workflowOptions" && (options as any).__goValue === undefined && (options as any).__isTypedNil !== true ? ((options as any) as workflowOptions | $.VarRef<workflowOptions> | null) : $.mustTypeAssert<workflowOptions | $.VarRef<workflowOptions> | null>(options, /* @__PURE__ */ $.pointerType("internal.workflowOptions")))
	}
	return null
}

export async function setWorkflowEnvOptionsIfNotExist(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_context.Context | null> {
	let options: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx)
	let newOptions: $.VarRef<workflowOptions> = $.varRef(new workflowOptions(undefined, true))
	if (options != null) {
		newOptions.value = $.assignStruct(newOptions.value, $.pointerValue<workflowOptions>(options))
	} else {
		newOptions.value.signalChannels = $.makeMap<string, __goscript_workflow.Channel | null>()
		newOptions.value.queryHandlers = $.makeMap<string, ((_p0: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null>()
	}
	if (newOptions.value.dataConverter == null) {
		newOptions.value.dataConverter = __goscript_encoded.getDefaultDataConverter()
	}
	return __goscript_context.WithValue(ctx, "wfEnvOptions", $.interfaceValue(newOptions, "*internal.workflowOptions", /* @__PURE__ */ $.pointerType("internal.workflowOptions")))
}

export async function getDataConverterFromWorkflowContext(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_encoded.DataConverter | null> {
	let options: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx)
	let options$: workflowOptions = options == null ? $.pointerTarget<workflowOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<workflowOptions>(options)
	if ((options == null) || ((options$ as workflowOptions).dataConverter == null)) {
		return __goscript_encoded.getDefaultDataConverter()
	}
	return (options$ as workflowOptions).dataConverter
}

export async function getRegistryFromWorkflowContext(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null> {
	let env = await getWorkflowEnvironment(ctx)
	return (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetRegistry()
}

export async function getContextPropagatorsFromWorkflowContext(ctx: __goscript_context.Context | null): globalThis.Promise<$.Slice<__goscript_headers.ContextPropagator | null>> {
	let options: workflowOptions | $.VarRef<workflowOptions> | null = await getWorkflowEnvOptions(ctx)
	return $.pointerValue<workflowOptions>(options).contextPropagators
}

export async function getHeadersFromContext(ctx: __goscript_context.Context | null): globalThis.Promise<s2.Header | $.VarRef<s2.Header> | null> {
	let header: s2.Header | $.VarRef<s2.Header> | null = new s2.Header({Fields: $.makeMap<string, $.Slice<number>>()})
	let contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null> = await getContextPropagatorsFromWorkflowContext(ctx)
	for (let __goscriptRangeTarget9 = contextPropagators, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let ctxProp = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
		void (__goscriptAwait = (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).InjectFromWorkflow(ctx, __goscript_headers.NewHeaderWriter(header)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return header
}

export async function GetUnhandledSignalNames(ctx: __goscript_context.Context | null): globalThis.Promise<$.Slice<string>> {
	return workflowOptions.prototype.getUnhandledSignalNames.call(await getWorkflowEnvOptions(ctx))
}

export async function newDecodeFuture(ctx: __goscript_context.Context | null, fn: any): globalThis.Promise<[__goscript_workflow.Future | null, __goscript_workflow.Settable | null]> {
	let impl: decodeFutureImpl | $.VarRef<decodeFutureImpl> | null = new decodeFutureImpl({futureImpl: new futureImpl({channel: $.mustTypeAssert<channelImpl | $.VarRef<channelImpl> | null>(await __goscript_workflow.NewChannel(ctx), /* @__PURE__ */ $.pointerType("internal.channelImpl"))}), fn: fn})
	return [$.interfaceValue<__goscript_workflow.Future | null>(impl, "*internal.decodeFutureImpl", /* @__PURE__ */ $.pointerType("internal.decodeFutureImpl")), $.interfaceValue<__goscript_workflow.Settable | null>(impl, "*internal.decodeFutureImpl", /* @__PURE__ */ $.pointerType("internal.decodeFutureImpl"))]
}

export async function setQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): globalThis.Promise<$.GoError> {
	let qh: queryHandler | $.VarRef<queryHandler> | null = (await (async () => { const __goscriptLiteralField5 = await getDataConverterFromWorkflowContext(ctx); return new queryHandler({fn: handler, queryType: queryType, dataConverter: __goscriptLiteralField5}) })())
	let err = await (qh !== null && (qh as any).__isVarRef !== true && (qh as any).__goValue === undefined ? ((qh as any) as queryHandler).validateHandlerFn() : queryHandler.prototype.validateHandlerFn.call(qh))
	if (err != null) {
		return err
	}

	$.mapSet($.pointerValue<workflowOptions>(await getWorkflowEnvOptions(ctx)).queryHandlers, queryType, $.functionValue(((__receiver) => (input: $.Slice<number>) => __receiver.execute(input))($.pointerValue<queryHandler>(qh)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*queryHandler).execute-fm"))
	return null
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Deadline: (receiver: any, ...args: any[]) => (__goscript_context.emptyCtx_Deadline as any)(receiver, ...$.stripGenericTypeArgs(args)), Done: (receiver: any, ...args: any[]) => (__goscript_context.emptyCtx_Done as any)(receiver, ...$.stripGenericTypeArgs(args)), Err: (receiver: any, ...args: any[]) => (__goscript_context.emptyCtx_Err as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_context.emptyCtx_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (__goscript_context.emptyCtx_Value as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "internal.emptyCtx")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("Err", [], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])])
}

var __goscriptAwait: any
