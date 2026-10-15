// Generated file based on service_invoker_mock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as mock2 from "@goscript/github.com/stretchr/testify/mock/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/stretchr/testify/mock/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.MockServiceInvoker", "internal.MockServiceInvoker_Expecter", "internal.MockServiceInvoker_BackgroundHeartbeat_Call", "internal.MockServiceInvoker_BatchHeartbeat_Call", "internal.MockServiceInvoker_Close_Call", "internal.MockServiceInvoker_Heartbeat_Call", "internal.MockServiceInvoker_SignalWorkflow_Call"])

export class MockServiceInvoker {
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

	public clone(): MockServiceInvoker {
		return new MockServiceInvoker(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mock, values.Mock)
	}

	public async BackgroundHeartbeat(): globalThis.Promise<$.GoError> {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<MockServiceInvoker>(_m).Mock.Called(null) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for BackgroundHeartbeat")
		}

		let r0: $.GoError = null! as $.GoError
		{
			let [rf, ok] = $.typeAssertTuple<(() => $.GoError | globalThis.Promise<$.GoError>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r0 = await mock2.Arguments_Error(ret, 0)
			}
		}

		return r0
	}

	public async BatchHeartbeat(details: $.Slice<number>): globalThis.Promise<$.GoError> {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<MockServiceInvoker>(_m).Mock.Called($.arrayToSlice<any>([$.interfaceValue(details, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for BatchHeartbeat")
		}

		let r0: $.GoError = null! as $.GoError
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(details), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r0 = await mock2.Arguments_Error(ret, 0)
			}
		}

		return r0
	}

	public async Close(flushBufferedHeartbeat: boolean): globalThis.Promise<void> {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		await $.pointerValue<MockServiceInvoker>(_m).Mock.Called($.arrayToSlice<any>([flushBufferedHeartbeat]))
	}

	public EXPECT(): MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		return new MockServiceInvoker_Expecter({mock: $.fieldRef($.pointerValue<MockServiceInvoker>(_m)._fields, "Mock")})
	}

	public async Heartbeat(details: $.Slice<number>): globalThis.Promise<$.GoError> {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<MockServiceInvoker>(_m).Mock.Called($.arrayToSlice<any>([$.interfaceValue(details, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for Heartbeat")
		}

		let r0: $.GoError = null! as $.GoError
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(details), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r0 = await mock2.Arguments_Error(ret, 0)
			}
		}

		return r0
	}

	public async SignalWorkflow(ctx: context.Context | null, domain: string, workflowID: string, runID: string, signalName: string, signalInput: $.Slice<number>): globalThis.Promise<$.GoError> {
		const _m: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = this;
		let ret: mock2.Arguments = (await $.pointerValue<MockServiceInvoker>(_m).Mock.Called($.arrayToSlice<any>([(ctx as any), domain, workflowID, runID, signalName, $.interfaceValue(signalInput, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])) as mock2.Arguments)

		if ($.sliceLen((ret as mock2.Arguments)) == 0) {
			$.panic("no return value specified for SignalWorkflow")
		}

		let r0: $.GoError = null! as $.GoError
		{
			let [rf, ok] = $.typeAssertTuple<((_p0: context.Context | null, _p1: string, _p2: string, _p3: string, _p4: string, _p5: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null>(await mock2.Arguments_Get(ret, 0), ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))
			if (ok) {
				r0 = (__goscriptAwait = rf!(ctx, domain, workflowID, runID, signalName, signalInput), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				r0 = await mock2.Arguments_Error(ret, 0)
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
		"internal.MockServiceInvoker",
		() => new MockServiceInvoker(),
		() => [$.methodSignature("BackgroundHeartbeat", [], ["error"], true), $.methodSignature("BatchHeartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Close", [["flushBufferedHeartbeat", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("EXPECT", [], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Expecter")], true), $.methodSignature("Heartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("SignalWorkflow", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalInput", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("AssertCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertExpectations", [["t", "mock.TestingT"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNotCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNumberOfCalls", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["expectedCalls", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Called", [["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("IsMethodCallable", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MethodCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Test", [["t", "mock.TestingT"]], [], true), $.methodSignature("TestData", [], ["objx.Map"], true)],
		MockServiceInvoker,
		() => [/* @__PURE__ */ $.structField("Mock", "mock.Mock", [0], 0, true, { anonymous: true })]
	)
}

export class MockServiceInvoker_Expecter {
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

	public clone(): MockServiceInvoker_Expecter {
		return new MockServiceInvoker_Expecter(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_Expecter): void {
		const target = this._fields
		const values = source._fields
		target.mock = values.mock
	}

	public async BackgroundHeartbeat(): globalThis.Promise<MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null> {
		const _e: MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField0 = await mock2.Mock.prototype.On.call($.pointerValue<MockServiceInvoker_Expecter>(_e).mock, "BackgroundHeartbeat", null); return new MockServiceInvoker_BackgroundHeartbeat_Call({Call: __goscriptLiteralField0}) })())
	}

	public async BatchHeartbeat(details: any): globalThis.Promise<MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null> {
		const _e: MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField1 = await mock2.Mock.prototype.On.call($.pointerValue<MockServiceInvoker_Expecter>(_e).mock, "BatchHeartbeat", $.arrayToSlice<any>([details])); return new MockServiceInvoker_BatchHeartbeat_Call({Call: __goscriptLiteralField1}) })())
	}

	public async Close(flushBufferedHeartbeat: any): globalThis.Promise<MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null> {
		const _e: MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField2 = await mock2.Mock.prototype.On.call($.pointerValue<MockServiceInvoker_Expecter>(_e).mock, "Close", $.arrayToSlice<any>([flushBufferedHeartbeat])); return new MockServiceInvoker_Close_Call({Call: __goscriptLiteralField2}) })())
	}

	public async Heartbeat(details: any): globalThis.Promise<MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null> {
		const _e: MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField3 = await mock2.Mock.prototype.On.call($.pointerValue<MockServiceInvoker_Expecter>(_e).mock, "Heartbeat", $.arrayToSlice<any>([details])); return new MockServiceInvoker_Heartbeat_Call({Call: __goscriptLiteralField3}) })())
	}

	public async SignalWorkflow(ctx: any, domain: any, workflowID: any, runID: any, signalName: any, signalInput: any): globalThis.Promise<MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null> {
		const _e: MockServiceInvoker_Expecter | $.VarRef<MockServiceInvoker_Expecter> | null = this;
		return (await (async () => { const __goscriptLiteralField4 = await mock2.Mock.prototype.On.call($.pointerValue<MockServiceInvoker_Expecter>(_e).mock, "SignalWorkflow", $.arrayToSlice<any>([ctx, domain, workflowID, runID, signalName, signalInput])); return new MockServiceInvoker_SignalWorkflow_Call({Call: __goscriptLiteralField4}) })())
	}

	static __typeInfo = $.registerStructType(
		"internal.MockServiceInvoker_Expecter",
		() => new MockServiceInvoker_Expecter(),
		() => [$.methodSignature("BackgroundHeartbeat", [], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BackgroundHeartbeat_Call")], true), $.methodSignature("BatchHeartbeat", [["details", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BatchHeartbeat_Call")], true), $.methodSignature("Close", [["flushBufferedHeartbeat", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Close_Call")], true), $.methodSignature("Heartbeat", [["details", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Heartbeat_Call")], true), $.methodSignature("SignalWorkflow", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["domain", { kind: $.TypeKind.Interface, methods: [] }], ["workflowID", { kind: $.TypeKind.Interface, methods: [] }], ["runID", { kind: $.TypeKind.Interface, methods: [] }], ["signalName", { kind: $.TypeKind.Interface, methods: [] }], ["signalInput", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_SignalWorkflow_Call")], true)],
		MockServiceInvoker_Expecter,
		() => [/* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("mock.Mock"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class MockServiceInvoker_BackgroundHeartbeat_Call {
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

	public clone(): MockServiceInvoker_BackgroundHeartbeat_Call {
		return new MockServiceInvoker_BackgroundHeartbeat_Call(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_BackgroundHeartbeat_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(_a0: $.GoError): globalThis.Promise<MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_BackgroundHeartbeat_Call>(_c).Call, $.arrayToSlice<any>([(_a0 as any)]))
		return _c
	}

	public async Run(run: (() => void) | null): globalThis.Promise<MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockServiceInvoker_BackgroundHeartbeat_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BackgroundHeartbeat_Call | $.VarRef<MockServiceInvoker_BackgroundHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_BackgroundHeartbeat_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func() error", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))]))
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
		"internal.MockServiceInvoker_BackgroundHeartbeat_Call",
		() => new MockServiceInvoker_BackgroundHeartbeat_Call(),
		() => [$.methodSignature("Return", [["_a0", "error"]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BackgroundHeartbeat_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BackgroundHeartbeat_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BackgroundHeartbeat_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockServiceInvoker_BackgroundHeartbeat_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export class MockServiceInvoker_BatchHeartbeat_Call {
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

	public clone(): MockServiceInvoker_BatchHeartbeat_Call {
		return new MockServiceInvoker_BatchHeartbeat_Call(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_BatchHeartbeat_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(_a0: $.GoError): globalThis.Promise<MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_BatchHeartbeat_Call>(_c).Call, $.arrayToSlice<any>([(_a0 as any)]))
		return _c
	}

	public async Run(run: ((details: $.Slice<number>) => void) | null): globalThis.Promise<MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockServiceInvoker_BatchHeartbeat_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<$.Slice<number>>($.arrayIndex(args!, 0), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null> {
		const _c: MockServiceInvoker_BatchHeartbeat_Call | $.VarRef<MockServiceInvoker_BatchHeartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_BatchHeartbeat_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func([]byte) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))]))
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
		"internal.MockServiceInvoker_BatchHeartbeat_Call",
		() => new MockServiceInvoker_BatchHeartbeat_Call(),
		() => [$.methodSignature("Return", [["_a0", "error"]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BatchHeartbeat_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BatchHeartbeat_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_BatchHeartbeat_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockServiceInvoker_BatchHeartbeat_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export class MockServiceInvoker_Close_Call {
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

	public clone(): MockServiceInvoker_Close_Call {
		return new MockServiceInvoker_Close_Call(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_Close_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(): globalThis.Promise<MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null> {
		const _c: MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_Close_Call>(_c).Call, null)
		return _c
	}

	public async Run(run: ((flushBufferedHeartbeat: boolean) => void) | null): globalThis.Promise<MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null> {
		const _c: MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockServiceInvoker_Close_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<boolean>($.arrayIndex(args!, 0), /* @__PURE__ */ $.basicType("bool"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: boolean) => void) | null): globalThis.Promise<MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null> {
		const _c: MockServiceInvoker_Close_Call | $.VarRef<MockServiceInvoker_Close_Call> | null = this;
		await (_c !== null && (_c as any).__isVarRef !== true && (_c as any).__goValue === undefined ? ((_c as any) as MockServiceInvoker_Close_Call).Run(run) : MockServiceInvoker_Close_Call.prototype.Run.call(_c, run))
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
		"internal.MockServiceInvoker_Close_Call",
		() => new MockServiceInvoker_Close_Call(),
		() => [$.methodSignature("Return", [], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Close_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Close_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Close_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockServiceInvoker_Close_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export class MockServiceInvoker_Heartbeat_Call {
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

	public clone(): MockServiceInvoker_Heartbeat_Call {
		return new MockServiceInvoker_Heartbeat_Call(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_Heartbeat_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(_a0: $.GoError): globalThis.Promise<MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null> {
		const _c: MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_Heartbeat_Call>(_c).Call, $.arrayToSlice<any>([(_a0 as any)]))
		return _c
	}

	public async Run(run: ((details: $.Slice<number>) => void) | null): globalThis.Promise<MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null> {
		const _c: MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockServiceInvoker_Heartbeat_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<$.Slice<number>>($.arrayIndex(args!, 0), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null> {
		const _c: MockServiceInvoker_Heartbeat_Call | $.VarRef<MockServiceInvoker_Heartbeat_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_Heartbeat_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func([]byte) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))]))
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
		"internal.MockServiceInvoker_Heartbeat_Call",
		() => new MockServiceInvoker_Heartbeat_Call(),
		() => [$.methodSignature("Return", [["_a0", "error"]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Heartbeat_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Heartbeat_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_Heartbeat_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockServiceInvoker_Heartbeat_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export class MockServiceInvoker_SignalWorkflow_Call {
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

	public clone(): MockServiceInvoker_SignalWorkflow_Call {
		return new MockServiceInvoker_SignalWorkflow_Call(this, true)
	}

	public __goscriptAssign(source: MockServiceInvoker_SignalWorkflow_Call): void {
		const target = this._fields
		const values = source._fields
		target.Call = values.Call
	}

	public async Return(_a0: $.GoError): globalThis.Promise<MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null> {
		const _c: MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_SignalWorkflow_Call>(_c).Call, $.arrayToSlice<any>([(_a0 as any)]))
		return _c
	}

	public async Run(run: ((ctx: context.Context | null, domain: string, workflowID: string, runID: string, signalName: string, signalInput: $.Slice<number>) => void) | null): globalThis.Promise<MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null> {
		const _c: MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null = this;
		await mock2.Call.prototype.Run.call($.pointerValue<MockServiceInvoker_SignalWorkflow_Call>(_c).Call, $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			void (__goscriptAwait = run!($.mustTypeAssert<context.Context | null>($.arrayIndex(args!, 0), "context.Context"), $.mustTypeAssert<string>($.arrayIndex(args!, 1), /* @__PURE__ */ $.basicType("string")), $.mustTypeAssert<string>($.arrayIndex(args!, 2), /* @__PURE__ */ $.basicType("string")), $.mustTypeAssert<string>($.arrayIndex(args!, 3), /* @__PURE__ */ $.basicType("string")), $.mustTypeAssert<string>($.arrayIndex(args!, 4), /* @__PURE__ */ $.basicType("string")), $.mustTypeAssert<$.Slice<number>>($.arrayIndex(args!, 5), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)))
		return _c
	}

	public async RunAndReturn(run: ((_p0: context.Context | null, _p1: string, _p2: string, _p3: string, _p4: string, _p5: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null> {
		const _c: MockServiceInvoker_SignalWorkflow_Call | $.VarRef<MockServiceInvoker_SignalWorkflow_Call> | null = this;
		await mock2.Call.prototype.Return.call($.pointerValue<MockServiceInvoker_SignalWorkflow_Call>(_c).Call, $.arrayToSlice<any>([$.interfaceValue(run, "func(context.Context, string, string, string, string, []byte) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo))]))
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
		"internal.MockServiceInvoker_SignalWorkflow_Call",
		() => new MockServiceInvoker_SignalWorkflow_Call(),
		() => [$.methodSignature("Return", [["_a0", "error"]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_SignalWorkflow_Call")], true), $.methodSignature("Run", [["run", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_SignalWorkflow_Call")], true), $.methodSignature("RunAndReturn", [["run", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockServiceInvoker_SignalWorkflow_Call")], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")]), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")])],
		MockServiceInvoker_SignalWorkflow_Call,
		() => [/* @__PURE__ */ $.structField("Call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, true, { anonymous: true })]
	)
}

export async function NewMockServiceInvoker(t: any): globalThis.Promise<MockServiceInvoker | $.VarRef<MockServiceInvoker> | null> {
	let __goscriptShadow0: MockServiceInvoker | $.VarRef<MockServiceInvoker> | null = new MockServiceInvoker()
	await $.pointerValue<MockServiceInvoker>(__goscriptShadow0).Mock.Test((t as mock2.TestingT | null))

	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as any) : $.pointerValue<any>(t)).Cleanup($.functionValue(async (): globalThis.Promise<void> => {
		await $.pointerValue<MockServiceInvoker>(__goscriptShadow0).Mock.AssertExpectations((t as mock2.TestingT | null))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return __goscriptShadow0
}

var __goscriptAwait: any
