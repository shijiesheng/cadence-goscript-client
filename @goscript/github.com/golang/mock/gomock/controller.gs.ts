// Generated file based on controller.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_callset from "./callset.gs.ts"

import * as __goscript_matchers from "./matchers.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "./call.gs.ts"
import "./callset.gs.ts"
import "./matchers.gs.ts"

$.registerTypePackagePath("github.com/golang/mock/gomock", ["gomock.TestReporter", "gomock.TestHelper", "gomock.cleanuper", "gomock.Controller", "gomock.cancelReporter", "gomock.nopTestHelper"])

export type TestReporter = {
	Errorf(format: string, args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
}

$.registerInterfaceType(
	"gomock.TestReporter",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type TestHelper = {
	Errorf(format: string, args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Helper(): void
}

$.registerInterfaceType(
	"gomock.TestHelper",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Helper")]
);

export type cleanuper = {
	Cleanup(_p0: (() => void) | null): void
}

$.registerInterfaceType(
	"gomock.cleanuper",
	null,
	[$.methodSignature("Cleanup", [({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)])]
);

export class Controller {
	// T should only be called within a generated mock. It is not intended to
	// be used in user code and may be changed in future versions. T is the
	// TestReporter passed in when creating the Controller via NewController.
	// If the TestReporter does not implement a TestHelper it will be wrapped
	// with a nopTestHelper.
	public get T(): TestHelper | null {
		return this._fields.T
	}

	public set T(value: TestHelper | null) {
		this._fields.T = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get expectedCalls(): __goscript_callset.callSet | $.VarRef<__goscript_callset.callSet> | null {
		return this._fields.expectedCalls
	}

	public set expectedCalls(value: __goscript_callset.callSet | $.VarRef<__goscript_callset.callSet> | null) {
		this._fields.expectedCalls = value
	}

	public get finished(): boolean {
		return this._fields.finished
	}

	public set finished(value: boolean) {
		this._fields.finished = value
	}

	public _fields: {
		T: TestHelper | null
		mu: sync.Mutex
		expectedCalls: __goscript_callset.callSet | $.VarRef<__goscript_callset.callSet> | null
		finished: boolean
	}

	constructor(init?: Partial<{T?: TestHelper | null, mu?: sync.Mutex, expectedCalls?: __goscript_callset.callSet | $.VarRef<__goscript_callset.callSet> | null, finished?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			T: init?.T ?? (null! as TestHelper | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			expectedCalls: init?.expectedCalls ?? (null! as __goscript_callset.callSet | $.VarRef<__goscript_callset.callSet> | null),
			finished: init?.finished ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Controller {
		return new Controller(this, true)
	}

	public __goscriptAssign(source: Controller): void {
		const target = this._fields
		const values = source._fields
		target.T = $.assignFieldValue(target.T, values.T, "gomock.TestHelper")
		$.assignStruct(target.mu, values.mu)
		target.expectedCalls = values.expectedCalls
		target.finished = values.finished
	}

	public async Call(receiver: any, method: string, args: $.Slice<any>): globalThis.Promise<$.Slice<any>> {
		const ctrl: Controller | $.VarRef<Controller> | null = this;
		const ctrl$: Controller = ctrl == null ? $.pointerTarget<Controller>(ctrl) : (ctrl as any).__isVarRef === true ? (ctrl as any).value : (ctrl as any).__goValue === undefined ? (ctrl as any) : $.pointerTarget<Controller>(ctrl)
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Nest this code so we can use defer to make sure the lock is released.
		let actions: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null> = await (async (): globalThis.Promise<$.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>> => {
			using __defer = new $.DisposableStack()
			void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (ctrl$ as Controller).mu.Lock()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ctrl$ as Controller).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })

			let __goscriptTuple0: any = await $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_callset.callSet>((ctrl$ as Controller).expectedCalls))).FindMatch(receiver, method, args)
			let expected: __goscript_call.Call | $.VarRef<__goscript_call.Call> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				// callerInfo's skip should be updated if the number of calls between the user's test
				// and this line changes, i.e. this code is wrapped in another anonymous function.
				// 0 is us, 1 is controller.Call(), 2 is the generated mock, and 3 is the user's test.
				let origin = await callerInfo(3)
				void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Fatalf("Unexpected call to %T.%v(%v) at %s because: %s", $.arrayToSlice<any>([receiver, method, $.interfaceValue(args, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })), origin, (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			// Two things happen here:
			// * the matching call no longer needs to check prerequite calls,
			// * and the prerequite calls are no longer expected, so remove them.
			let preReqCalls: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = (expected !== null && (expected as any).__isVarRef !== true && (expected as any).__goValue === undefined ? ((expected as any) as __goscript_call.Call).dropPrereqs() : __goscript_call.Call.prototype.dropPrereqs.call(expected))
			for (let __goscriptRangeTarget0 = preReqCalls, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let preReqCall = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
				$.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_callset.callSet>((ctrl$ as Controller).expectedCalls))).Remove(preReqCall)
			}

			let __goscriptShadow0: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null> = (expected !== null && (expected as any).__isVarRef !== true && (expected as any).__goValue === undefined ? ((expected as any) as __goscript_call.Call).call() : __goscript_call.Call.prototype.call.call(expected))
			if ((expected !== null && (expected as any).__isVarRef !== true && (expected as any).__goValue === undefined ? ((expected as any) as __goscript_call.Call).exhausted() : __goscript_call.Call.prototype.exhausted.call(expected))) {
				$.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_callset.callSet>((ctrl$ as Controller).expectedCalls))).Remove(expected)
			}
			return __goscriptShadow0
		})()

		let rets: $.Slice<any> = null! as $.Slice<any>
		for (let __goscriptRangeTarget1 = actions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let action = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as ((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null)
			{
				let r: $.Slice<any> = ((__goscriptAwait = action!(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<any>)
				if (r != null) {
					rets = r
				}
			}
		}

		return rets
	}

	public async Finish(): globalThis.Promise<void> {
		const ctrl: Controller | $.VarRef<Controller> | null = this;
		// If we're currently panicking, probably because this is a deferred call.
		// This must be recovered in the deferred function.
		let err = $.recover()
		await (ctrl !== null && (ctrl as any).__isVarRef !== true && (ctrl as any).__goValue === undefined ? ((ctrl as any) as Controller).finish(false, err) : Controller.prototype.finish.call(ctrl, false, err))
	}

	public async RecordCall(receiver: any, method: string, args: $.Slice<any>): globalThis.Promise<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> {
		const ctrl: Controller | $.VarRef<Controller> | null = this;
		const ctrl$: Controller = ctrl == null ? $.pointerTarget<Controller>(ctrl) : (ctrl as any).__isVarRef === true ? (ctrl as any).value : (ctrl as any).__goValue === undefined ? (ctrl as any) : $.pointerTarget<Controller>(ctrl)
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let recv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(receiver)))
		for (let i = 0; i < (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(recv)).Type()).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			if ($.stringEqual(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(recv)).Type()).Method(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Method).Name, method)) {
				return Controller.prototype.RecordCallWithMethodType.call(ctrl, receiver, method, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(recv)).Method(i))).Type(), args)
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Fatalf("gomock: failed finding method %s on %T", $.arrayToSlice<any>([method, receiver])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async RecordCallWithMethodType(receiver: any, method: string, methodType: reflect.Type | null, args: $.Slice<any>): globalThis.Promise<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> {
		const ctrl: Controller | $.VarRef<Controller> | null = this;
		using __defer = new $.DisposableStack()
		const ctrl$: Controller = ctrl == null ? $.pointerTarget<Controller>(ctrl) : (ctrl as any).__isVarRef === true ? (ctrl as any).value : (ctrl as any).__goValue === undefined ? (ctrl as any) : $.pointerTarget<Controller>(ctrl)
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let call: __goscript_call.Call | $.VarRef<__goscript_call.Call> | null = await __goscript_call.newCall((ctrl$ as Controller).T, receiver, method, methodType, args)

		await (ctrl$ as Controller).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ctrl$ as Controller).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		$.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_callset.callSet>((ctrl$ as Controller).expectedCalls))).Add(call)

		return call
	}

	public async finish(cleanup: boolean, panicErr: any): globalThis.Promise<void> {
		let ctrl: Controller | $.VarRef<Controller> | null = this;
		using __defer = new $.DisposableStack()
		const ctrl$: Controller = ctrl == null ? $.pointerTarget<Controller>(ctrl) : (ctrl as any).__isVarRef === true ? (ctrl as any).value : (ctrl as any).__goValue === undefined ? (ctrl as any) : $.pointerTarget<Controller>(ctrl)
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await (ctrl$ as Controller).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ctrl$ as Controller).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if ((ctrl$ as Controller).finished) {
			{
				let [, ok] = isCleanuper(((ctrl$ as Controller).T as TestReporter | null))
				if (!ok) {
					void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Fatalf("Controller.Finish was called more than once. It has to be called exactly once.", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			return
		}
		;(ctrl$ as Controller).finished = true

		// Short-circuit, pass through the panic.
		if (panicErr != null) {
			$.panic(panicErr)
		}

		// Check that all remaining expected calls are satisfied.
		let failures: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_callset.callSet>((ctrl$ as Controller).expectedCalls))).Failures()
		for (let __goscriptRangeTarget2 = failures, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
			void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Errorf("missing call(s) to %v", $.arrayToSlice<any>([$.interfaceValue(call, "*gomock.Call", /* @__PURE__ */ $.pointerType("gomock.Call"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.sliceLen(failures) != 0) {
			if (!cleanup) {
				void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Fatalf("aborting test due to missing call(s)", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
			void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Errorf("aborting test due to missing call(s)", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"gomock.Controller",
		() => new Controller(),
		() => [$.methodSignature("Call", [["receiver", { kind: $.TypeKind.Interface, methods: [] }], ["method", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("Finish", [], [], true), $.methodSignature("RecordCall", [["receiver", { kind: $.TypeKind.Interface, methods: [] }], ["method", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RecordCallWithMethodType", [["receiver", { kind: $.TypeKind.Interface, methods: [] }], ["method", /* @__PURE__ */ $.basicType("string")], ["methodType", "reflect.Type"], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("finish", [["cleanup", /* @__PURE__ */ $.basicType("bool")], ["panicErr", { kind: $.TypeKind.Interface, methods: [] }]], [], true)],
		Controller,
		() => [/* @__PURE__ */ $.structField("T", "gomock.TestHelper", [0], 0, true), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 16, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("expectedCalls", /* @__PURE__ */ $.pointerType("gomock.callSet"), [2], 24, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("finished", /* @__PURE__ */ $.basicType("bool"), [3], 32, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class cancelReporter {
	public get t(): TestHelper | null {
		return this._fields.t
	}

	public set t(value: TestHelper | null) {
		this._fields.t = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public _fields: {
		t: TestHelper | null
		cancel: (() => void) | null
	}

	constructor(init?: Partial<{t?: TestHelper | null, cancel?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as TestHelper | null),
			cancel: init?.cancel ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cancelReporter {
		return new cancelReporter(this, true)
	}

	public __goscriptAssign(source: cancelReporter): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "gomock.TestHelper")
		target.cancel = values.cancel
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const r: cancelReporter | $.VarRef<cancelReporter> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>($.pointerValue<cancelReporter>(r).t).Errorf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const r: cancelReporter | $.VarRef<cancelReporter> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const r$: cancelReporter = r == null ? $.pointerTarget<cancelReporter>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<cancelReporter>(r)
		const __goscriptDeferCallee3 = (r$ as cancelReporter).cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((r$ as cancelReporter).t).Fatalf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Helper(): globalThis.Promise<void> {
		const r: cancelReporter | $.VarRef<cancelReporter> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>($.pointerValue<cancelReporter>(r).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"gomock.cancelReporter",
		() => new cancelReporter(),
		() => [$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Helper", [], [], true)],
		cancelReporter,
		() => [/* @__PURE__ */ $.structField("t", "gomock.TestHelper", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class nopTestHelper {
	public get t(): TestReporter | null {
		return this._fields.t
	}

	public set t(value: TestReporter | null) {
		this._fields.t = value
	}

	public _fields: {
		t: TestReporter | null
	}

	constructor(init?: Partial<{t?: TestReporter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as TestReporter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopTestHelper {
		return new nopTestHelper(this, true)
	}

	public __goscriptAssign(source: nopTestHelper): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "gomock.TestReporter")
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const h: nopTestHelper | $.VarRef<nopTestHelper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<TestReporter, null>>($.pointerValue<nopTestHelper>(h).t).Errorf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const h: nopTestHelper | $.VarRef<nopTestHelper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<TestReporter, null>>($.pointerValue<nopTestHelper>(h).t).Fatalf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Helper(): void {
		const h = this;
	}

	static __typeInfo = $.registerStructType(
		"gomock.nopTestHelper",
		() => new nopTestHelper(),
		() => [$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Helper")],
		nopTestHelper,
		() => [/* @__PURE__ */ $.structField("t", "gomock.TestReporter", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export async function NewController(t: TestReporter | null): globalThis.Promise<Controller | $.VarRef<Controller> | null> {
	let [h, ok] = $.typeAssertTuple<TestHelper | null>(t, "gomock.TestHelper")
	if (!ok) {
		h = $.interfaceValue<TestHelper | null>(new nopTestHelper({t: t}), "*gomock.nopTestHelper", /* @__PURE__ */ $.pointerType("gomock.nopTestHelper"))
	}
	let ctrl: Controller | $.VarRef<Controller> | null = (() => { const __goscriptLiteralField0 = __goscript_callset.newCallSet(); return new Controller({T: h, expectedCalls: __goscriptLiteralField0}) })()
	let ctrl$: Controller = ctrl == null ? $.pointerTarget<Controller>(ctrl) : (ctrl as any).__isVarRef === true ? (ctrl as any).value : (ctrl as any).__goValue === undefined ? (ctrl as any) : $.pointerTarget<Controller>(ctrl)
	{
		let [c, __goscriptShadow1] = isCleanuper(((ctrl$ as Controller).T as TestReporter | null))
		if (__goscriptShadow1) {
			void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cleanuper, null>) : $.pointerValue<Exclude<cleanuper, null>>(c)).Cleanup($.functionValue(async (): globalThis.Promise<void> => {
				void (__goscriptAwait = $.pointerValue<Exclude<TestHelper, null>>((ctrl$ as Controller).T).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await (ctrl !== null && (ctrl as any).__isVarRef !== true && (ctrl as any).__goValue === undefined ? ((ctrl as any) as Controller).finish(true, null) : Controller.prototype.finish.call(ctrl, true, null))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	return ctrl
}

export async function WithContext(ctx: context.Context | null, t: TestReporter | null): globalThis.Promise<[Controller | $.VarRef<Controller> | null, context.Context | null]> {
	let [h, ok] = $.typeAssertTuple<TestHelper | null>(t, "gomock.TestHelper")
	if (!ok) {
		h = $.interfaceValue<TestHelper | null>(new nopTestHelper({t: t}), "*gomock.nopTestHelper", /* @__PURE__ */ $.pointerType("gomock.nopTestHelper"))
	}

	let __goscriptTuple1: any = context.WithCancel($.pointerValueOrNil(ctx)!)
	ctx = __goscriptTuple1[0]
	let cancel = __goscriptTuple1[1]
	return [await NewController($.interfaceValue<TestReporter | null>(new cancelReporter({t: h, cancel: cancel}), "*gomock.cancelReporter", /* @__PURE__ */ $.pointerType("gomock.cancelReporter"))), ctx]
}

export async function callerInfo(skip: number): globalThis.Promise<string> {
	{
		let [, file, line, ok] = runtime.Caller(skip + 1)
		if (ok) {
			return fmt.Sprintf("%s:%d", file, $.basicInterfaceValue(line, "int"))
		}
	}
	return "unknown file"
}

export function isCleanuper(t: TestReporter | null): [cleanuper | null, boolean] {
	let tr = unwrapTestReporter(t)
	let [c, ok] = $.typeAssertTuple<cleanuper | null>(tr, "gomock.cleanuper")
	return [c, ok]
}

export function unwrapTestReporter(t: TestReporter | null): TestReporter | null {
	let tr: TestReporter | null = t
	{
		const __goscriptTypeSwitchValue = t
		switch (true) {
			case $.typeAssert<cancelReporter | $.VarRef<cancelReporter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gomock.cancelReporter")).ok:
				{
					let nt: cancelReporter | $.VarRef<cancelReporter> | null = $.typeAssert<cancelReporter | $.VarRef<cancelReporter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gomock.cancelReporter")).value
					tr = ($.pointerValue<cancelReporter>(nt).t as TestReporter | null)
					{
						let __goscriptTuple2: any = $.typeAssertTuple<nopTestHelper | $.VarRef<nopTestHelper> | null>(tr, /* @__PURE__ */ $.pointerType("gomock.nopTestHelper"))
						let h: nopTestHelper | $.VarRef<nopTestHelper> | null = __goscriptTuple2[0]
						let check = __goscriptTuple2[1]
						if (check) {
							tr = $.pointerValue<nopTestHelper>(h).t
						}
					}
				}
				break
			case $.typeAssert<nopTestHelper | $.VarRef<nopTestHelper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gomock.nopTestHelper")).ok:
				{
					let nt: nopTestHelper | $.VarRef<nopTestHelper> | null = $.typeAssert<nopTestHelper | $.VarRef<nopTestHelper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gomock.nopTestHelper")).value
					tr = $.pointerValue<nopTestHelper>(nt).t
				}
				break
		}
	}
	return tr
}

var __goscriptAwait: any
