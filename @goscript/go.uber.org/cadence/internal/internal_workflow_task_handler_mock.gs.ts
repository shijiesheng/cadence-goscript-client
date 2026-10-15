// Generated file based on internal_workflow_task_handler_mock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as mock2 from "@goscript/github.com/stretchr/testify/mock/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

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

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/github.com/stretchr/testify/mock/index.js"
import "@goscript/container/list/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/zap/index.js"
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
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.MockWorkflowTaskHandler", "internal.MockWorkflowTaskHandler_Expecter", "internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call"])

export class MockWorkflowTaskHandler {
	public get Mock(): mock2.Mock {
		return this._fields.Mock
	}

	public set Mock(value: mock2.Mock) {
		this._fields.Mock = value
	}

	public _fields: {
		Mock: mock2.Mock
	}

	constructor(init?: Partial<{Mock?: mock2.Mock}>, __goscriptValue?: boolean) {
		this._fields = {
			Mock: init?.Mock ? init.Mock.clone() : new mock2.Mock(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MockWorkflowTaskHandler {
		return new MockWorkflowTaskHandler(this, true)
	}

	public __goscriptAssign(source: MockWorkflowTaskHandler): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mock, values.Mock)
	}

	public EXPECT(): MockWorkflowTaskHandler_Expecter | $.VarRef<MockWorkflowTaskHandler_Expecter> | null {
		const _m: MockWorkflowTaskHandler | $.VarRef<MockWorkflowTaskHandler> | null = this;
		return new MockWorkflowTaskHandler_Expecter({mock: $.fieldRef($.pointerValue<MockWorkflowTaskHandler>(_m)._fields, "Mock")})
	}

	public async ProcessWorkflowTask(task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, f: ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null): globalThis.Promise<[any, $.GoError]> {
		const _m: MockWorkflowTaskHandler | $.VarRef<MockWorkflowTaskHandler> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<MockWorkflowTaskHandler>(_m).Mock.Called($.arrayToSlice<any>([$.interfaceValue(task, "*internal.workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")), $.interfaceValue(f, "internal.decisionHeartbeatFunc", ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo))])) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for ProcessWorkflowTask")
		}

		let r0: any = null! as any
		let r1: $.GoError = null! as $.GoError
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, _p1: ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))
			if (ok) {
				return rf!(task, f)
			}
		}
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, _p1: ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null) => any | globalThis.Promise<any>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(task, f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				if (await mock2.Arguments_Get(ret, 0) != null) {
					r0 = $.mustTypeAssert<any>(await mock2.Arguments_Get(ret, 0), { kind: $.TypeKind.Interface, methods: [] })
				}
			}
		}

		{
			let [rf, ok] = $.typeAssertTuple<((_p0: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, _p1: ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null>(await mock2.Arguments_Get(ret, 1), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: ["error"] } as $.FunctionTypeInfo))
			if (ok) {
				r1 = (__goscriptAwait = rf!(task, f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r1 = await mock2.Arguments_Error(ret, 1)
			}
		}

		return [r0, r1]
	}

	public async AssertCalled(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).AssertCalled(t, methodName, _arguments)
	}

	public async AssertExpectations(t: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).AssertExpectations(t)
	}

	public async AssertNotCalled(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).AssertNotCalled(t, methodName, _arguments)
	}

	public async AssertNumberOfCalls(t: any, methodName: any, expectedCalls: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).AssertNumberOfCalls(t, methodName, expectedCalls)
	}

	public async Called(_arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).Called(_arguments)
	}

	public async IsMethodCallable(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).IsMethodCallable(t, methodName, _arguments)
	}

	public async MethodCalled(methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).MethodCalled(methodName, _arguments)
	}

	public async On(methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).On(methodName, _arguments)
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).String()
	}

	public async Test(t: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Mock>(this.Mock).Test(t)
	}

	public TestData(): any {
		return $.pointerValue<mock2.Mock>(this.Mock).TestData()
	}

	static __typeInfo = $.registerStructType(
		"internal.MockWorkflowTaskHandler",
		() => new MockWorkflowTaskHandler(),
		() => [$.methodSignature("EXPECT", [], [/* @__PURE__ */ $.pointerType("internal.MockWorkflowTaskHandler_Expecter")], true), $.methodSignature("ProcessWorkflowTask", [["task", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["f", ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("AssertCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertExpectations", [["t", "mock.TestingT"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNotCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNumberOfCalls", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["expectedCalls", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Called", [["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("IsMethodCallable", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MethodCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Test", [["t", "mock.TestingT"]], [], true), $.methodSignature("TestData", [], ["objx.Map"], true)],
		MockWorkflowTaskHandler,
		() => [/* @__PURE__ */ $.structField("Mock", "mock.Mock", [0], 0, true, { anonymous: true })]
	)
}

export class MockWorkflowTaskHandler_Expecter {
	public get mock(): mock2.Mock | $.VarRef<mock2.Mock> | null {
		return this._fields.mock
	}

	public set mock(value: mock2.Mock | $.VarRef<mock2.Mock> | null) {
		this._fields.mock = value
	}

	public _fields: {
		mock: mock2.Mock | $.VarRef<mock2.Mock> | null
	}

	constructor(init?: Partial<{mock?: mock2.Mock | $.VarRef<mock2.Mock> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mock: init?.mock ?? (null! as mock2.Mock | $.VarRef<mock2.Mock> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MockWorkflowTaskHandler_Expecter {
		return new MockWorkflowTaskHandler_Expecter(this, true)
	}

	public __goscriptAssign(source: MockWorkflowTaskHandler_Expecter): void {
		const target = this._fields
		const values = source._fields
		target.mock = values.mock
	}

	public async ProcessWorkflowTask(task: any, f: any): globalThis.Promise<MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null> {
		const _e: MockWorkflowTaskHandler_Expecter | $.VarRef<MockWorkflowTaskHandler_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField0 = await mock2.Mock.prototype.On.call($.pointerValue<MockWorkflowTaskHandler_Expecter>(_e).mock, "ProcessWorkflowTask", $.arrayToSlice<any>([task, f])); return new MockWorkflowTaskHandler_ProcessWorkflowTask_Call({Call: __goscriptLiteralField0}) })())
	}

	static __typeInfo = $.registerStructType(
		"internal.MockWorkflowTaskHandler_Expecter",
		() => new MockWorkflowTaskHandler_Expecter(),
		() => [$.methodSignature("ProcessWorkflowTask", [["task", { kind: $.TypeKind.Interface, methods: [] }], ["f", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call")], true)],
		MockWorkflowTaskHandler_Expecter,
		() => [/* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("mock.Mock"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class MockWorkflowTaskHandler_ProcessWorkflowTask_Call {
	public get Call(): mock2.Call | $.VarRef<mock2.Call> | null {
		return this._fields.Call
	}

	public set Call(value: mock2.Call | $.VarRef<mock2.Call> | null) {
		this._fields.Call = value
	}

	public _fields: {
		Call: mock2.Call | $.VarRef<mock2.Call> | null
	}

	constructor(init?: Partial<{Call?: mock2.Call | $.VarRef<mock2.Call> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Call: init?.Call ?? (null! as mock2.Call | $.VarRef<mock2.Call> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MockWorkflowTaskHandler_ProcessWorkflowTask_Call {
		return new MockWorkflowTaskHandler_ProcessWorkflowTask_Call(this, true)
	}

	public __goscriptAssign(source: MockWorkflowTaskHandler_ProcessWorkflowTask_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(response: any, err: $.GoError): globalThis.Promise<MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null> {
		const _c: MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockWorkflowTaskHandler_ProcessWorkflowTask_Call>(_c).Call, $.arrayToSlice<any>([response, (err as any)]))
		return _c
	}

	public async Run(run: ((task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, f: __goscript_internal_public.decisionHeartbeatFunc | null) => void) | null): globalThis.Promise<MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null> {
		const _c: MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockWorkflowTaskHandler_ProcessWorkflowTask_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null>($.arrayIndex(args!, 0), /* @__PURE__ */ $.pointerType("internal.workflowTask")), $.mustTypeAssert<((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null>($.arrayIndex(args!, 1), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, _p1: __goscript_internal_public.decisionHeartbeatFunc | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null> {
		const _c: MockWorkflowTaskHandler_ProcessWorkflowTask_Call | $.VarRef<MockWorkflowTaskHandler_ProcessWorkflowTask_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockWorkflowTaskHandler_ProcessWorkflowTask_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func(*internal.workflowTask, internal.decisionHeartbeatFunc) (interface{}, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))]))
		return _c
	}

	public async After(d: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).After(d)
	}

	public async Maybe(): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Maybe()
	}

	public async NotBefore(calls: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).NotBefore(calls)
	}

	public async On(methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).On(methodName, _arguments)
	}

	public async Once(): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Once()
	}

	public async Panic(msg: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Panic(msg)
	}

	public async Times(i: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Times(i)
	}

	public async Twice(): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Twice()
	}

	public async Unset(): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).Unset()
	}

	public async WaitUntil(w: any): globalThis.Promise<any> {
		return await $.pointerValue<mock2.Call>(this.Call).WaitUntil(w)
	}

	static __typeInfo = $.registerStructType(
		"internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call",
		() => new MockWorkflowTaskHandler_ProcessWorkflowTask_Call(),
		() => [$.methodSignature("Return", [["response", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], [/* @__PURE__ */ $.pointerType("internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockWorkflowTaskHandler_ProcessWorkflowTask_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockWorkflowTaskHandler_ProcessWorkflowTask_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export async function NewMockWorkflowTaskHandler(t: any): globalThis.Promise<MockWorkflowTaskHandler | $.VarRef<MockWorkflowTaskHandler> | null> {
	let __goscriptShadow0: MockWorkflowTaskHandler | $.VarRef<MockWorkflowTaskHandler> | null = new MockWorkflowTaskHandler()
	await $.pointerValue<MockWorkflowTaskHandler>(__goscriptShadow0).Mock.Test((t as mock2.TestingT | null))

	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as any) : $.pointerValue<any>(t)).Cleanup($.functionValue(async (): globalThis.Promise<void> => {
		await $.pointerValue<MockWorkflowTaskHandler>(__goscriptShadow0).Mock.AssertExpectations((t as mock2.TestingT | null))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return __goscriptShadow0
}

var __goscriptAwait: any
