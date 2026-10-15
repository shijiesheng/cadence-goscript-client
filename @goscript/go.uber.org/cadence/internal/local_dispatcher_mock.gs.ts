// Generated file based on local_dispatcher_mock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as mock2 from "@goscript/github.com/stretchr/testify/mock/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"
import "@goscript/github.com/stretchr/testify/mock/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./internal_event_handlers.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.mockLocalDispatcher", "internal.mockLocalDispatcher_Expecter", "internal.mockLocalDispatcher_SendTask_Call"])

export class mockLocalDispatcher {
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

	public clone(): mockLocalDispatcher {
		return new mockLocalDispatcher(this, true)
	}

	public __goscriptAssign(source: mockLocalDispatcher): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mock, values.Mock)
	}

	public EXPECT(): mockLocalDispatcher_Expecter | $.VarRef<mockLocalDispatcher_Expecter> | null {
		const _m: mockLocalDispatcher | $.VarRef<mockLocalDispatcher> | null = this;
		return new mockLocalDispatcher_Expecter({mock: $.fieldRef($.pointerValue<mockLocalDispatcher>(_m)._fields, "Mock")})
	}

	public async SendTask(task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null): globalThis.Promise<boolean> {
		const _m: mockLocalDispatcher | $.VarRef<mockLocalDispatcher> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<mockLocalDispatcher>(_m).Mock.Called($.arrayToSlice<any>([$.interfaceValue(task, "*internal.locallyDispatchedActivityTask", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask"))])) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for SendTask")
		}

		let r0: boolean = false
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null) => boolean | globalThis.Promise<boolean>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(task), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r0 = $.mustTypeAssert<boolean>(await mock2.Arguments_Get(ret, 0), /* @__PURE__ */ $.basicType("bool"))
			}
		}

		return r0
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
		"internal.mockLocalDispatcher",
		() => new mockLocalDispatcher(),
		() => [$.methodSignature("EXPECT", [], [/* @__PURE__ */ $.pointerType("internal.mockLocalDispatcher_Expecter")], true), $.methodSignature("SendTask", [["task", /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertExpectations", [["t", "mock.TestingT"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNotCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNumberOfCalls", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["expectedCalls", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Called", [["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("IsMethodCallable", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MethodCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Test", [["t", "mock.TestingT"]], [], true), $.methodSignature("TestData", [], ["objx.Map"], true)],
		mockLocalDispatcher,
		() => [/* @__PURE__ */ $.structField("Mock", "mock.Mock", [0], 0, true, { anonymous: true })]
	)
}

export class mockLocalDispatcher_Expecter {
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

	public clone(): mockLocalDispatcher_Expecter {
		return new mockLocalDispatcher_Expecter(this, true)
	}

	public __goscriptAssign(source: mockLocalDispatcher_Expecter): void {
		const target = this._fields
		const values = source._fields
		target.mock = values.mock
	}

	public async SendTask(task: any): globalThis.Promise<mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null> {
		const _e: mockLocalDispatcher_Expecter | $.VarRef<mockLocalDispatcher_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField0 = await mock2.Mock.prototype.On.call($.pointerValue<mockLocalDispatcher_Expecter>(_e).mock, "SendTask", $.arrayToSlice<any>([task])); return new mockLocalDispatcher_SendTask_Call({Call: __goscriptLiteralField0}) })())
	}

	static __typeInfo = $.registerStructType(
		"internal.mockLocalDispatcher_Expecter",
		() => new mockLocalDispatcher_Expecter(),
		() => [$.methodSignature("SendTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.mockLocalDispatcher_SendTask_Call")], true)],
		mockLocalDispatcher_Expecter,
		() => [/* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("mock.Mock"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class mockLocalDispatcher_SendTask_Call {
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

	public clone(): mockLocalDispatcher_SendTask_Call {
		return new mockLocalDispatcher_SendTask_Call(this, true)
	}

	public __goscriptAssign(source: mockLocalDispatcher_SendTask_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(_a0: boolean): globalThis.Promise<mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null> {
		const _c: mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<mockLocalDispatcher_SendTask_Call>(_c).Call, $.arrayToSlice<any>([_a0]))
		return _c
	}

	public async Run(run: ((task: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null) => void) | null): globalThis.Promise<mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null> {
		const _c: mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<mockLocalDispatcher_SendTask_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<__goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null>($.arrayIndex(args!, 0), /* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: __goscript_internal_event_handlers.locallyDispatchedActivityTask | $.VarRef<__goscript_internal_event_handlers.locallyDispatchedActivityTask> | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null> {
		const _c: mockLocalDispatcher_SendTask_Call | $.VarRef<mockLocalDispatcher_SendTask_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<mockLocalDispatcher_SendTask_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func(*internal.locallyDispatchedActivityTask) bool", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))]))
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
		"internal.mockLocalDispatcher_SendTask_Call",
		() => new mockLocalDispatcher_SendTask_Call(),
		() => [$.methodSignature("Return", [["_a0", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("internal.mockLocalDispatcher_SendTask_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.mockLocalDispatcher_SendTask_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.locallyDispatchedActivityTask")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.mockLocalDispatcher_SendTask_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		mockLocalDispatcher_SendTask_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export async function newMockLocalDispatcher(t: any): globalThis.Promise<mockLocalDispatcher | $.VarRef<mockLocalDispatcher> | null> {
	let __goscriptShadow0: mockLocalDispatcher | $.VarRef<mockLocalDispatcher> | null = new mockLocalDispatcher()
	await $.pointerValue<mockLocalDispatcher>(__goscriptShadow0).Mock.Test((t as mock2.TestingT | null))

	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as any) : $.pointerValue<any>(t)).Cleanup($.functionValue(async (): globalThis.Promise<void> => {
		await $.pointerValue<mockLocalDispatcher>(__goscriptShadow0).Mock.AssertExpectations((t as mock2.TestingT | null))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return __goscriptShadow0
}

var __goscriptAwait: any
