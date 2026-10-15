// Generated file based on mock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as path from "@goscript/path/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as spew from "@goscript/github.com/davecgh/go-spew/spew/index.js"

import * as difflib from "@goscript/github.com/pmezard/go-difflib/difflib/index.js"

import * as objx from "@goscript/github.com/stretchr/objx/index.js"

import * as assert from "@goscript/github.com/stretchr/testify/assert/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/path/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/davecgh/go-spew/spew/index.js"
import "@goscript/github.com/pmezard/go-difflib/difflib/index.js"
import "@goscript/github.com/stretchr/objx/index.js"
import "@goscript/github.com/stretchr/testify/assert/index.js"

$.registerTypePackagePath("github.com/stretchr/testify/mock", ["mock.TestingT", "mock.Call", "mock.Mock", "mock.matchCandidate", "mock.assertExpectationiser", "mock.Arguments", "mock.anythingOfTypeArgument", "mock.IsTypeArgument", "mock.FunctionalOptionsArgument", "mock.argumentMatcher", "mock.tHelper"])

export type TestingT = {
	Errorf(format: string, args: $.Slice<any>): void
	FailNow(): void
	Logf(format: string, args: $.Slice<any>): void
}

$.registerInterfaceType(
	"mock.TestingT",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("FailNow"), $.methodSignature("Logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type assertExpectationiser = {
	AssertExpectations(_p0: TestingT | null): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"mock.assertExpectationiser",
	null,
	[$.methodSignature("AssertExpectations", ["mock.TestingT"], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Arguments = $.Slice<any>

$.registerNamedType("mock.Arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"mock.Arguments",
	{Assert: (receiver: any, ...args: any[]) => (Arguments_Assert as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => (Arguments_Bool as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Diff: (receiver: any, ...args: any[]) => (Arguments_Diff as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (Arguments_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (Arguments_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => (Arguments_Int as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (Arguments_Is as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Arguments_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Assert", [["t", "mock.TestingT"], ["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Bool", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Diff", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")]), $.methodSignature("Error", [["index", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Get", [["index", /* @__PURE__ */ $.basicType("int")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Int", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Is", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [["indexOrNil", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*mock.Arguments",
	{Assert: (receiver: any, ...args: any[]) => (Arguments_Assert as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => (Arguments_Bool as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Diff: (receiver: any, ...args: any[]) => (Arguments_Diff as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (Arguments_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (Arguments_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => (Arguments_Int as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (Arguments_Is as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Arguments_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Assert", [["t", "mock.TestingT"], ["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Bool", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Diff", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")]), $.methodSignature("Error", [["index", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Get", [["index", /* @__PURE__ */ $.basicType("int")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Int", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Is", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [["indexOrNil", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("string")])]
);

export type AnythingOfTypeArgument = anythingOfTypeArgument

export type anythingOfTypeArgument = string

export type tHelper = {
	Helper(): void
}

$.registerInterfaceType(
	"mock.tHelper",
	null,
	[$.methodSignature("Helper")]
);

export class Call {
	public get Parent(): Mock | $.VarRef<Mock> | null {
		return this._fields.Parent
	}

	public set Parent(value: Mock | $.VarRef<Mock> | null) {
		this._fields.Parent = value
	}

	// The name of the method that was or will be called.
	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	// Holds the arguments of the method.
	public get Arguments(): Arguments {
		return this._fields.Arguments
	}

	public set Arguments(value: Arguments) {
		this._fields.Arguments = value
	}

	// Holds the arguments that should be returned when
	// this method is called.
	public get ReturnArguments(): Arguments {
		return this._fields.ReturnArguments
	}

	public set ReturnArguments(value: Arguments) {
		this._fields.ReturnArguments = value
	}

	// Holds the caller info for the On() call
	public get callerInfo(): $.Slice<string> {
		return this._fields.callerInfo
	}

	public set callerInfo(value: $.Slice<string>) {
		this._fields.callerInfo = value
	}

	// The number of times to return the return arguments when setting
	// expectations. 0 means to always return the value.
	public get Repeatability(): number {
		return this._fields.Repeatability
	}

	public set Repeatability(value: number) {
		this._fields.Repeatability = value
	}

	// Amount of times this call has been called
	public get totalCalls(): number {
		return this._fields.totalCalls
	}

	public set totalCalls(value: number) {
		this._fields.totalCalls = value
	}

	// Call to this method can be optional
	public get optional(): boolean {
		return this._fields.optional
	}

	public set optional(value: boolean) {
		this._fields.optional = value
	}

	// Holds a channel that will be used to block the Return until it either
	// receives a message or is closed. nil means it returns immediately.
	public get WaitFor(): $.Channel<time.Time> | null {
		return this._fields.WaitFor
	}

	public set WaitFor(value: $.Channel<time.Time> | null) {
		this._fields.WaitFor = value
	}

	public get waitTime(): time.Duration {
		return this._fields.waitTime
	}

	public set waitTime(value: time.Duration) {
		this._fields.waitTime = value
	}

	// Holds a handler used to manipulate arguments content that are passed by
	// reference. It's useful when mocking methods such as unmarshalers or
	// decoders.
	public get RunFn(): ((_p0: Arguments) => void) | null {
		return this._fields.RunFn
	}

	public set RunFn(value: ((_p0: Arguments) => void) | null) {
		this._fields.RunFn = value
	}

	// PanicMsg holds msg to be used to mock panic on the function call
	//  if the PanicMsg is set to a non nil string the function call will panic
	// irrespective of other settings
	public get PanicMsg(): $.VarRef<string> | null {
		return this._fields.PanicMsg
	}

	public set PanicMsg(value: $.VarRef<string> | null) {
		this._fields.PanicMsg = value
	}

	// Calls which must be satisfied before this call can be
	public get requires(): $.Slice<Call | $.VarRef<Call> | null> {
		return this._fields.requires
	}

	public set requires(value: $.Slice<Call | $.VarRef<Call> | null>) {
		this._fields.requires = value
	}

	public _fields: {
		Parent: Mock | $.VarRef<Mock> | null
		Method: string
		Arguments: Arguments
		ReturnArguments: Arguments
		callerInfo: $.Slice<string>
		Repeatability: number
		totalCalls: number
		optional: boolean
		WaitFor: $.Channel<time.Time> | null
		waitTime: time.Duration
		RunFn: ((_p0: Arguments) => void) | null
		PanicMsg: $.VarRef<string> | null
		requires: $.Slice<Call | $.VarRef<Call> | null>
	}

	constructor(init?: Partial<{Parent?: Mock | $.VarRef<Mock> | null, Method?: string, Arguments?: Arguments, ReturnArguments?: Arguments, callerInfo?: $.Slice<string>, Repeatability?: number, totalCalls?: number, optional?: boolean, WaitFor?: $.Channel<time.Time> | null, waitTime?: time.Duration, RunFn?: ((_p0: Arguments) => void) | null, PanicMsg?: $.VarRef<string> | null, requires?: $.Slice<Call | $.VarRef<Call> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Parent: init?.Parent ?? (null! as Mock | $.VarRef<Mock> | null),
			Method: init?.Method ?? ("" as string),
			Arguments: init?.Arguments ?? (null! as Arguments),
			ReturnArguments: init?.ReturnArguments ?? (null! as Arguments),
			callerInfo: init?.callerInfo ?? (null! as $.Slice<string>),
			Repeatability: init?.Repeatability ?? (0 as number),
			totalCalls: init?.totalCalls ?? (0 as number),
			optional: init?.optional ?? (false as boolean),
			WaitFor: init?.WaitFor ?? (null! as $.Channel<time.Time> | null),
			waitTime: init?.waitTime ?? (0n as time.Duration),
			RunFn: init?.RunFn ?? (null! as ((_p0: Arguments) => void) | null),
			PanicMsg: init?.PanicMsg ?? (null! as $.VarRef<string> | null),
			requires: init?.requires ?? (null! as $.Slice<Call | $.VarRef<Call> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Call {
		return new Call(this, true)
	}

	public __goscriptAssign(source: Call): void {
		const target = this._fields
		const values = source._fields
		target.Parent = values.Parent
		target.Method = values.Method
		target.Arguments = values.Arguments
		target.ReturnArguments = values.ReturnArguments
		target.callerInfo = values.callerInfo
		target.Repeatability = values.Repeatability
		target.totalCalls = values.totalCalls
		target.optional = values.optional
		target.WaitFor = values.WaitFor
		target.waitTime = values.waitTime
		target.RunFn = values.RunFn
		target.PanicMsg = values.PanicMsg
		target.requires = values.requires
	}

	public async After(d: time.Duration): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		$.pointerValue<Call>(c).waitTime = d
		return c
	}

	public async Maybe(): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		$.pointerValue<Call>(c).optional = true
		return c
	}

	public async NotBefore(calls: $.Slice<Call | $.VarRef<Call> | null>): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.unlock())((c$ as Call)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		for (let __goscriptRangeTarget0 = calls, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if ($.pointerValue<Call>(call).Parent == null) {
				$.panic("not before calls must be created with Mock.On()")
			}
		}

		;(c$ as Call).requires = $.appendSlice((c$ as Call).requires, calls, $.appendZeros.nil)
		return c
	}

	public async On(methodName: string, _arguments: $.Slice<any>): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		return Mock.prototype.On.call($.pointerValue<Call>(c).Parent, methodName, _arguments)
	}

	public async Once(): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).Times(1) : Call.prototype.Times.call(c, 1))
	}

	public async Panic(__goscriptParam0: string): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		let msg: $.VarRef<string> = $.varRef(__goscriptParam0)
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		$.pointerValue<Call>(c).PanicMsg = msg

		return c
	}

	public async Return(returnArguments: $.Slice<any>): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })

		$.pointerValue<Call>(c).ReturnArguments = (returnArguments as Arguments)

		return c
	}

	public async Run(fn: ((args: Arguments) => void) | null): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		$.pointerValue<Call>(c).RunFn = fn
		return c
	}

	public async Times(i: number): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		$.pointerValue<Call>(c).Repeatability = i
		return c
	}

	public async Twice(): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).Times(2) : Call.prototype.Times.call(c, 2))
	}

	public async Unset(): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		let unlockOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

		for (let __goscriptRangeTarget1 = (c$ as Call).Arguments, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let arg = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any)
			{
				let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg)))
				if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 19) {
					$.panic(await fmt.Sprintf("cannot use Func in expectations. Use mock.AnythingOfType(\"%T\")", arg))
				}
			}
		}

		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferArg0 = $.functionValue(((__receiver) => () => __receiver.unlock())((c$ as Call)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(async () => { await unlockOnce.value.Do(__goscriptDeferArg0) })

		let foundMatchingCall = false

		// in-place filter slice for calls to be removed - iterate from 0'th to last skipping unnecessary ones
		let index: number = 0
		for (let __goscriptRangeTarget2 = $.pointerValue<Mock>((c$ as Call).Parent).ExpectedCalls, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if ($.stringEqual($.pointerValue<Call>(call).Method, (c$ as Call).Method)) {
				let [, diffCount] = await Arguments_Diff($.pointerValue<Call>(call).Arguments, (c$ as Call).Arguments)
				if (diffCount == 0) {
					foundMatchingCall = true
					// Remove from ExpectedCalls - just skip it
					continue
				}
			}
			$.sliceElems($.pointerValue<Mock>((c$ as Call).Parent).ExpectedCalls!)[$.sliceSlot($.pointerValue<Mock>((c$ as Call).Parent).ExpectedCalls!, index)] = call
			index++
		}
		// trim slice up to last copied index
		$.pointerValue<Mock>((c$ as Call).Parent).ExpectedCalls = $.goSlice($.pointerValue<Mock>((c$ as Call).Parent).ExpectedCalls, undefined, index)

		if (!foundMatchingCall) {
			await unlockOnce.value.Do($.functionValue(((__receiver) => () => __receiver.unlock())((c$ as Call)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm"))
			await Mock.prototype.fail.call((c$ as Call).Parent, "\n\nmock: Could not find expected call\n-----------------------------\n\n%s\n\n", $.arrayToSlice<any>([await callString((c$ as Call).Method, ((c$ as Call).Arguments as Arguments), true)]))
		}

		return c
	}

	public async WaitUntil(w: $.Channel<time.Time> | null): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		using __defer = new $.DisposableStack()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).lock() : Call.prototype.lock.call(c))
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.unlock())($.pointerValue<Call>(c)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/stretchr/testify/mock.(*Call).unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		$.pointerValue<Call>(c).WaitFor = w
		return c
	}

	public async lock(): globalThis.Promise<void> {
		const c: Call | $.VarRef<Call> | null = this;
		await $.pointerValue<Mock>($.pointerValue<Call>(c).Parent).mutex.Lock()
	}

	public unlock(): void {
		const c: Call | $.VarRef<Call> | null = this;
		$.pointerValue<Mock>($.pointerValue<Call>(c).Parent).mutex.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"mock.Call",
		() => new Call(),
		() => [$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("NotBefore", [["calls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Return", [["returnArguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Run", [["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("Unset", [], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("WaitUntil", [["w", /* @__PURE__ */ $.channelType("time.Time", "receive")]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("lock", [], [], true), $.methodSignature("unlock", [], [], true)],
		Call,
		() => [/* @__PURE__ */ $.structField("Parent", /* @__PURE__ */ $.pointerType("mock.Mock"), [0], 0, true), /* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("Arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments"), [2], 24, true), /* @__PURE__ */ $.structField("ReturnArguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments"), [3], 48, true), /* @__PURE__ */ $.structField("callerInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("Repeatability", /* @__PURE__ */ $.basicType("int"), [5], 96, true), /* @__PURE__ */ $.structField("totalCalls", /* @__PURE__ */ $.basicType("int"), [6], 104, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("optional", /* @__PURE__ */ $.basicType("bool"), [7], 112, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("WaitFor", /* @__PURE__ */ $.channelType("time.Time", "receive"), [8], 120, true), /* @__PURE__ */ $.structField("waitTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [9], 128, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("RunFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo), [10], 136, true), /* @__PURE__ */ $.structField("PanicMsg", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [11], 144, true), /* @__PURE__ */ $.structField("requires", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call")), [12], 152, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export class Mock {
	// Represents the calls that are expected of
	// an object.
	public get ExpectedCalls(): $.Slice<Call | $.VarRef<Call> | null> {
		return this._fields.ExpectedCalls
	}

	public set ExpectedCalls(value: $.Slice<Call | $.VarRef<Call> | null>) {
		this._fields.ExpectedCalls = value
	}

	// Holds the calls that were made to this mocked object.
	public get Calls(): $.Slice<Call> {
		return this._fields.Calls
	}

	public set Calls(value: $.Slice<Call>) {
		this._fields.Calls = value
	}

	// test is An optional variable that holds the test struct, to be used when an
	// invalid mock call was made.
	public get test(): TestingT | null {
		return this._fields.test
	}

	public set test(value: TestingT | null) {
		this._fields.test = value
	}

	// TestData holds any data that might be useful for testing.  Testify ignores
	// this data completely allowing you to do whatever you like with it.
	public get testData(): objx.Map {
		return this._fields.testData
	}

	public set testData(value: objx.Map) {
		this._fields.testData = value
	}

	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public _fields: {
		ExpectedCalls: $.Slice<Call | $.VarRef<Call> | null>
		Calls: $.Slice<Call>
		test: TestingT | null
		testData: objx.Map
		mutex: sync.Mutex
	}

	constructor(init?: Partial<{ExpectedCalls?: $.Slice<Call | $.VarRef<Call> | null>, Calls?: $.Slice<Call>, test?: TestingT | null, testData?: objx.Map, mutex?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			ExpectedCalls: init?.ExpectedCalls ?? (null! as $.Slice<Call | $.VarRef<Call> | null>),
			Calls: init?.Calls ?? (null! as $.Slice<Call>),
			test: init?.test ?? (null! as TestingT | null),
			testData: init?.testData ?? (null! as objx.Map),
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Mock {
		return new Mock(this, true)
	}

	public __goscriptAssign(source: Mock): void {
		const target = this._fields
		const values = source._fields
		target.ExpectedCalls = values.ExpectedCalls
		target.Calls = values.Calls
		target.test = $.assignFieldValue(target.test, values.test, "mock.TestingT")
		target.testData = values.testData
		$.assignStruct(target.mutex, values.mutex)
	}

	public async AssertCalled(t: TestingT | null, methodName: string, _arguments: $.Slice<any>): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		if (!await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).methodWasCalled(methodName, _arguments) : Mock.prototype.methodWasCalled.call(m, methodName, _arguments))) {
			let calledWithArgs: $.Slice<string> = null! as $.Slice<string>
			for (let __goscriptRangeTarget3 = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).calls() : Mock.prototype.calls.call(m)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let call = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Call)).clone()
				calledWithArgs = $.appendOne(calledWithArgs, await fmt.Sprintf("%v", $.namedValueInterfaceValue<any>(call.Arguments, "mock.Arguments", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			if ($.sliceLen(calledWithArgs) == 0) {
				return await assert.Fail((t as assert.TestingT | null), "Should have called with given arguments", $.arrayToSlice<any>([await fmt.Sprintf("Expected %q to have been called with:\n%v\nbut no actual calls happened", methodName, $.interfaceValue(_arguments, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })))]))
			}
			return await assert.Fail((t as assert.TestingT | null), "Should have called with given arguments", $.arrayToSlice<any>([await fmt.Sprintf("Expected %q to have been called with:\n%v\nbut actual calls were:\n        %v", methodName, $.interfaceValue(_arguments, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })), strings.Join(calledWithArgs, "\n"))]))
		}
		return true
	}

	public async AssertExpectations(t: TestingT | null): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		{
			let [s, ok] = $.typeAssertTuple<any>(t, { kind: $.TypeKind.Interface, methods: [{ name: "Skipped", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
			if (ok && (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as any) : $.pointerValue<any>(s)).Skipped(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return true
			}
		}
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee9() })
		let failedExpectations: number = 0

		// iterate through each expectation
		let expectedCalls: $.Slice<Call | $.VarRef<Call> | null> = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).expectedCalls() : Mock.prototype.expectedCalls.call(m))
		for (let __goscriptRangeTarget4 = expectedCalls, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let expectedCall = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			let [satisfied, reason] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).checkExpectation(expectedCall) : Mock.prototype.checkExpectation.call(m, expectedCall))
			if (!satisfied) {
				failedExpectations++
				void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Logf(reason, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if (failedExpectations != 0) {
			void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Errorf("FAIL: %d out of %d expectation(s) were met.\n\tThe code you are testing needs to make %d more call(s).\n\tat: %s", $.arrayToSlice<any>([$.basicInterfaceValue($.sliceLen(expectedCalls) - failedExpectations, "int"), $.basicInterfaceValue($.sliceLen(expectedCalls), "int"), $.basicInterfaceValue(failedExpectations, "int"), $.interfaceValue(await assert.CallerInfo(), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		return failedExpectations == 0
	}

	public async AssertNotCalled(t: TestingT | null, methodName: string, _arguments: $.Slice<any>): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })
		if (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).methodWasCalled(methodName, _arguments) : Mock.prototype.methodWasCalled.call(m, methodName, _arguments))) {
			return await assert.Fail((t as assert.TestingT | null), "Should not have called with given arguments", $.arrayToSlice<any>([await fmt.Sprintf("Expected %q to not have been called with:\n%v\nbut actually it was.", methodName, $.interfaceValue(_arguments, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })))]))
		}
		return true
	}

	public async AssertNumberOfCalls(t: TestingT | null, methodName: string, expectedCalls: number): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })
		let actualCalls: number = 0
		for (let __goscriptRangeTarget5 = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).calls() : Mock.prototype.calls.call(m)), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let call = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Call)).clone()
			if ($.stringEqual(call.Method, methodName)) {
				actualCalls++
			}
		}
		return await assert.Equal((t as assert.TestingT | null), $.basicInterfaceValue(expectedCalls, "int"), $.basicInterfaceValue(actualCalls, "int"), $.arrayToSlice<any>([await fmt.Sprintf("Expected number of calls (%d) does not match the actual number of calls (%d).", $.basicInterfaceValue(expectedCalls, "int"), $.basicInterfaceValue(actualCalls, "int"))]))
	}

	public async Called(_arguments: $.Slice<any>): globalThis.Promise<Arguments> {
		const m: Mock | $.VarRef<Mock> | null = this;
		// get the calling function's name
		let [pc, , , ok] = runtime.Caller(1)
		if (!ok) {
			$.panic("Couldn't get the caller information")
		}
		let functionPath = runtime.Func.prototype.Name.call($.pointerValueOrNil(runtime.FuncForPC(pc)))
		// Next four lines are required to use GCCGO function naming conventions.
		// For Ex:  github_com_docker_libkv_store_mock.WatchTree.pN39_github_com_docker_libkv_store_mock.Mock
		// uses interface information unlike golang github.com/docker/libkv/store/mock.(*Mock).WatchTree
		// With GCCGO we need to remove interface information starting from pN<dd>.
		if (await (gccgoRE !== null && (gccgoRE as any).__isVarRef !== true && (gccgoRE as any).__goValue === undefined ? ((gccgoRE as any) as regexp.Regexp).MatchString(functionPath) : regexp.Regexp.prototype.MatchString.call(gccgoRE, functionPath))) {
			functionPath = $.arrayIndex((gccgoRE !== null && (gccgoRE as any).__isVarRef !== true && (gccgoRE as any).__goValue === undefined ? ((gccgoRE as any) as regexp.Regexp).Split(functionPath, -1) : regexp.Regexp.prototype.Split.call(gccgoRE, functionPath, -1))!, 0)
		}
		let parts: $.Slice<string> = strings.Split(functionPath, ".")
		let functionName = $.arrayIndex(parts!, $.sliceLen(parts) - 1)
		return (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).MethodCalled(functionName, _arguments) : Mock.prototype.MethodCalled.call(m, functionName, _arguments)) as Arguments)
	}

	public async IsMethodCallable(t: TestingT | null, methodName: string, _arguments: $.Slice<any>): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee12() })

		for (let __goscriptRangeTarget6 = (m$ as Mock).ExpectedCalls, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if (!$.stringEqual($.pointerValue<Call>(v).Method, methodName)) {
				continue
			}
			if ($.sliceLen(_arguments) != $.sliceLen(($.pointerValue<Call>(v).Arguments as Arguments))) {
				continue
			}
			if ($.pointerValue<Call>(v).Repeatability < $.pointerValue<Call>(v).totalCalls) {
				continue
			}
			if (isArgsEqual(($.pointerValue<Call>(v).Arguments as Arguments), _arguments)) {
				return true
			}
		}
		return false
	}

	public async MethodCalled(methodName: string, _arguments: $.Slice<any>): globalThis.Promise<Arguments> {
		let m: Mock | $.VarRef<Mock> | null = this;
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).mutex.Lock()
		// TODO: could combine expected and closes in single loop
		let __goscriptTuple0: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).findExpectedCall(methodName, _arguments) : Mock.prototype.findExpectedCall.call(m, methodName, _arguments))
		let found = __goscriptTuple0[0]
		let call: Call | $.VarRef<Call> | null = __goscriptTuple0[1]
		let call$: Call = call == null ? $.pointerTarget<Call>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<Call>(call)

		if (found < 0) {
			// expected call found, but it has already been called with repeatable times
			if (call != null) {
				void (m$ as Mock).mutex.Unlock()
				await Mock.prototype.fail.call(m, "\nassert: mock: The method has been called over %d times.\n\tEither do one more Mock.On(\"%s\").Return(...), or remove extra call.\n\tThis call was unexpected:\n\t\t%s\n\tat: %s", $.arrayToSlice<any>([$.basicInterfaceValue((call$ as Call).totalCalls, "int"), methodName, await callString(methodName, (_arguments as Arguments), true), $.interfaceValue(await assert.CallerInfo(), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]))
			}
			// we have to fail here - because we don't know what to do
			// as the return arguments.  This is because:
			//
			//   a) this is a totally unexpected call to this method,
			//   b) the arguments are not what was expected, or
			//   c) the developer has forgotten to add an accompanying On...Return pair.
			let __goscriptTuple1: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).findClosestCall(methodName, _arguments) : Mock.prototype.findClosestCall.call(m, methodName, _arguments))
			let closestCall: Call | $.VarRef<Call> | null = __goscriptTuple1[0]
			let mismatch = __goscriptTuple1[1]
			let closestCall$: Call = closestCall == null ? $.pointerTarget<Call>(closestCall) : (closestCall as any).__isVarRef === true ? (closestCall as any).value : (closestCall as any).__goValue === undefined ? (closestCall as any) : $.pointerTarget<Call>(closestCall)
			void (m$ as Mock).mutex.Unlock()

			if (closestCall != null) {
				await Mock.prototype.fail.call(m, "\n\nmock: Unexpected Method Call\n-----------------------------\n\n%s\n\nThe closest call I have is: \n\n%s\n\n%s\nDiff: %s", $.arrayToSlice<any>([await callString(methodName, (_arguments as Arguments), true), await callString(methodName, ((closestCall$ as Call).Arguments as Arguments), true), await diffArguments(((closestCall$ as Call).Arguments as Arguments), (_arguments as Arguments)), strings.TrimSpace(mismatch)]))
			} else {
				await Mock.prototype.fail.call(m, "\nassert: mock: I don't know what to return because the method call was unexpected.\n\tEither do Mock.On(\"%s\").Return(...) first, or remove the %s() call.\n\tThis method was unexpected:\n\t\t%s\n\tat: %s", $.arrayToSlice<any>([methodName, methodName, await callString(methodName, (_arguments as Arguments), true), $.interfaceValue(await assert.CallerInfo(), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]))
			}
		}

		for (let __goscriptRangeTarget7 = (call$ as Call).requires, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let requirement = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			{
				let [satisfied, ] = await Mock.prototype.checkExpectation.call($.pointerValue<Call>(requirement).Parent, requirement)
				if (!satisfied) {
					void (m$ as Mock).mutex.Unlock()
					await Mock.prototype.fail.call(m, "mock: Unexpected Method Call\n-----------------------------\n\n%s\n\nMust not be called before%s:\n\n%s", $.arrayToSlice<any>([await callString((call$ as Call).Method, ((call$ as Call).Arguments as Arguments), true), ((): string => {
						let s: string = ""
						if ($.pointerValue<Call>(requirement).totalCalls > 0) {
							s = " another call of"
						}
						if (!$.pointerEqual((call$ as Call).Parent, $.pointerValue<Call>(requirement).Parent)) {
							s = $.concatString(s, " method from another mock instance")
						}
						return s
					})(), await callString($.pointerValue<Call>(requirement).Method, ($.pointerValue<Call>(requirement).Arguments as Arguments), true)]))
				}
			}
		}

		if ((call$ as Call).Repeatability == 1) {
			;(call$ as Call).Repeatability = -1
		} else {
			if ((call$ as Call).Repeatability > 1) {
				;(call$ as Call).Repeatability--
			}
		}
		;(call$ as Call).totalCalls++;

		// add the call
		;(m$ as Mock).Calls = $.appendOne((m$ as Mock).Calls, ($.pointerValue<Call>(newCall(m, methodName, await assert.CallerInfo(), _arguments))).clone())
		void (m$ as Mock).mutex.Unlock()

		// block if specified
		if ((call$ as Call).WaitFor != null) {
			await $.chanRecv((call$ as Call).WaitFor)
		} else {
			await time.Sleep((call$ as Call).waitTime)
		}

		await (m$ as Mock).mutex.Lock()
		let panicMsg = (call$ as Call).PanicMsg
		void (m$ as Mock).mutex.Unlock()
		if (panicMsg != null) {
			$.panic($.pointerValue<string>(panicMsg))
		}

		await (m$ as Mock).mutex.Lock()
		let runFn: ((_p0: Arguments) => void) | null = (call$ as Call).RunFn
		void (m$ as Mock).mutex.Unlock()

		if (runFn != null) {
			void (__goscriptAwait = runFn!((_arguments as Arguments)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (m$ as Mock).mutex.Lock()
		let returnArgs: Arguments = ((call$ as Call).ReturnArguments as Arguments)
		void (m$ as Mock).mutex.Unlock()

		return (returnArgs as Arguments)
	}

	public async On(methodName: string, _arguments: $.Slice<any>): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		for (let __goscriptRangeTarget8 = _arguments, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let arg = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as any)
			{
				let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg)))
				if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 19) {
					$.panic(await fmt.Sprintf("cannot use Func in expectations. Use mock.AnythingOfType(\"%T\")", arg))
				}
			}
		}

		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee13() })
		let c: Call | $.VarRef<Call> | null = newCall(m, methodName, await assert.CallerInfo(), _arguments);
		;(m$ as Mock).ExpectedCalls = $.appendOne((m$ as Mock).ExpectedCalls, c, $.appendZeros.nil)
		return c
	}

	public async String(): globalThis.Promise<string> {
		const m: Mock | $.VarRef<Mock> | null = this;
		return fmt.Sprintf("%[1]T<%[1]p>", $.interfaceValue(m, "*mock.Mock", /* @__PURE__ */ $.pointerType("mock.Mock")))
	}

	public async Test(t: TestingT | null): globalThis.Promise<void> {
		let m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee14() });
		;(m$ as Mock).test = t
	}

	public TestData(): objx.Map {
		let m: Mock | $.VarRef<Mock> | null = this;
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		if ((m$ as Mock).testData == null) {
			;(m$ as Mock).testData = $.makeMap<string, any>()
		}

		return (m$ as Mock).testData
	}

	public calls(): $.Slice<Call> {
		const m: Mock | $.VarRef<Mock> | null = this;
		return $.appendSlice($.arrayToSlice<Call>([]), $.pointerValue<Mock>(m).Calls)
	}

	public async checkExpectation(call: Call | $.VarRef<Call> | null): globalThis.Promise<[boolean, string]> {
		const m: Mock | $.VarRef<Mock> | null = this;
		const call$: Call = call == null ? $.pointerTarget<Call>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<Call>(call)
		if ((!(call$ as Call).optional && !await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).methodWasCalled((call$ as Call).Method, (call$ as Call).Arguments) : Mock.prototype.methodWasCalled.call(m, (call$ as Call).Method, (call$ as Call).Arguments))) && ((call$ as Call).totalCalls == 0)) {
			return [false, await fmt.Sprintf("FAIL:\t%s(%s)\n\t\tat: %s", (call$ as Call).Method, await Arguments_String((call$ as Call).Arguments, null), $.interfaceValue((call$ as Call).callerInfo, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
		}
		if ((call$ as Call).Repeatability > 0) {
			return [false, await fmt.Sprintf("FAIL:\t%s(%s)\n\t\tat: %s", (call$ as Call).Method, await Arguments_String((call$ as Call).Arguments, null), $.interfaceValue((call$ as Call).callerInfo, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
		}
		return [true, await fmt.Sprintf("PASS:\t%s(%s)", (call$ as Call).Method, await Arguments_String((call$ as Call).Arguments, null))]
	}

	public expectedCalls(): $.Slice<Call | $.VarRef<Call> | null> {
		const m: Mock | $.VarRef<Mock> | null = this;
		return $.appendSlice($.arrayToSlice<Call | $.VarRef<Call> | null>([]), $.pointerValue<Mock>(m).ExpectedCalls, $.appendZeros.nil)
	}

	public async fail(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).mutex.Lock()
		const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee15() })

		if ((m$ as Mock).test == null) {
			$.panic(await fmt.Sprintf(format, ...(args ?? [])))
		}
		void (__goscriptAwait = $.pointerValue<Exclude<TestingT, null>>((m$ as Mock).test).Errorf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<TestingT, null>>((m$ as Mock).test).FailNow(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async findClosestCall(method: string, _arguments: $.Slice<any>): globalThis.Promise<[Call | $.VarRef<Call> | null, string]> {
		const m: Mock | $.VarRef<Mock> | null = this;
		let bestMatch: matchCandidate = new matchCandidate(undefined, true)

		for (let __goscriptRangeTarget9 = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).expectedCalls() : Mock.prototype.expectedCalls.call(m)), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if ($.stringEqual($.pointerValue<Call>(call).Method, method)) {

				let [errInfo, tempDiffCount] = await Arguments_Diff($.pointerValue<Call>(call).Arguments, _arguments)
				let tempCandidate = new matchCandidate({call: call, mismatch: errInfo, diffCount: tempDiffCount}, true)
				if (tempCandidate.isBetterMatchThan(bestMatch)) {
					bestMatch = $.assignStruct(bestMatch, tempCandidate)
				}
			}
		}

		return [bestMatch.call, bestMatch.mismatch]
	}

	public async findExpectedCall(method: string, _arguments: $.Slice<any>): globalThis.Promise<[number, Call | $.VarRef<Call> | null]> {
		const m: Mock | $.VarRef<Mock> | null = this;
		let expectedCall: Call | $.VarRef<Call> | null = null! as Call | $.VarRef<Call> | null

		for (let __goscriptRangeTarget10 = $.pointerValue<Mock>(m).ExpectedCalls, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
			let call = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as Call | $.VarRef<Call> | null)
			if ($.stringEqual($.pointerValue<Call>(call).Method, method)) {
				let [, diffCount] = await Arguments_Diff($.pointerValue<Call>(call).Arguments, _arguments)
				if (diffCount == 0) {
					expectedCall = call
					if ($.pointerValue<Call>(call).Repeatability > -1) {
						return [i, call]
					}
				}
			}
		}

		return [-1, expectedCall]
	}

	public async methodWasCalled(methodName: string, expected: $.Slice<any>): globalThis.Promise<boolean> {
		const m: Mock | $.VarRef<Mock> | null = this;
		for (let __goscriptRangeTarget11 = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).calls() : Mock.prototype.calls.call(m)), __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let call = ((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as Call)).clone()
			if ($.stringEqual(call.Method, methodName)) {

				let [, differences] = await Arguments_Diff((expected as Arguments), call.Arguments)

				if (differences == 0) {
					// found the expected call
					return true
				}
			}
		}
		// we didn't find the expected call
		return false
	}

	static __typeInfo = $.registerStructType(
		"mock.Mock",
		() => new Mock(),
		() => [$.methodSignature("AssertCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertExpectations", [["t", "mock.TestingT"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNotCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNumberOfCalls", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["expectedCalls", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Called", [["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("IsMethodCallable", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MethodCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Test", [["t", "mock.TestingT"]], [], true), $.methodSignature("TestData", [], ["objx.Map"], true), $.methodSignature("calls", [], [/* @__PURE__ */ $.sliceType("mock.Call")], true), $.methodSignature("checkExpectation", [["call", /* @__PURE__ */ $.pointerType("mock.Call")]], [/* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("string")], true), $.methodSignature("expectedCalls", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call"))], true), $.methodSignature("fail", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("findClosestCall", [["method", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call"), /* @__PURE__ */ $.basicType("string")], true), $.methodSignature("findExpectedCall", [["method", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("methodWasCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["expected", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Mock,
		() => [/* @__PURE__ */ $.structField("ExpectedCalls", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mock.Call")), [0], 0, true), /* @__PURE__ */ $.structField("Calls", /* @__PURE__ */ $.sliceType("mock.Call"), [1], 24, true), /* @__PURE__ */ $.structField("test", "mock.TestingT", [2], 48, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("testData", "objx.Map", [3], 64, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("mutex", "sync.Mutex", [4], 72, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export class matchCandidate {
	public get call(): Call | $.VarRef<Call> | null {
		return this._fields.call
	}

	public set call(value: Call | $.VarRef<Call> | null) {
		this._fields.call = value
	}

	public get mismatch(): string {
		return this._fields.mismatch
	}

	public set mismatch(value: string) {
		this._fields.mismatch = value
	}

	public get diffCount(): number {
		return this._fields.diffCount
	}

	public set diffCount(value: number) {
		this._fields.diffCount = value
	}

	public _fields: {
		call: Call | $.VarRef<Call> | null
		mismatch: string
		diffCount: number
	}

	constructor(init?: Partial<{call?: Call | $.VarRef<Call> | null, mismatch?: string, diffCount?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			call: init?.call ?? (null! as Call | $.VarRef<Call> | null),
			mismatch: init?.mismatch ?? ("" as string),
			diffCount: init?.diffCount ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): matchCandidate {
		return new matchCandidate(this, true)
	}

	public __goscriptAssign(source: matchCandidate): void {
		const target = this._fields
		const values = source._fields
		target.call = values.call
		target.mismatch = values.mismatch
		target.diffCount = values.diffCount
	}

	public isBetterMatchThan(other: matchCandidate): boolean {
		const c = this;
		if (c.call == null) {
			return false
		}
		if (other.call == null) {
			return true
		}

		if (c.diffCount > other.diffCount) {
			return false
		}
		if (c.diffCount < other.diffCount) {
			return true
		}

		if (($.pointerValue<Call>(c.call).Repeatability > 0) && ($.pointerValue<Call>(other.call).Repeatability <= 0)) {
			return true
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"mock.matchCandidate",
		() => new matchCandidate(),
		() => [$.methodSignature("isBetterMatchThan", [["other", "mock.matchCandidate"]], [/* @__PURE__ */ $.basicType("bool")])],
		matchCandidate,
		() => [/* @__PURE__ */ $.structField("call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("mismatch", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/stretchr/testify/mock" }), /* @__PURE__ */ $.structField("diffCount", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export class IsTypeArgument {
	public get t(): reflect.Type | null {
		return this._fields.t
	}

	public set t(value: reflect.Type | null) {
		this._fields.t = value
	}

	public _fields: {
		t: reflect.Type | null
	}

	constructor(init?: Partial<{t?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IsTypeArgument {
		return new IsTypeArgument(this, true)
	}

	public __goscriptAssign(source: IsTypeArgument): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
	}

	static __typeInfo = $.registerStructType(
		"mock.IsTypeArgument",
		() => new IsTypeArgument(),
		() => [],
		IsTypeArgument,
		() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export class FunctionalOptionsArgument {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public _fields: {
		value: any
	}

	constructor(init?: Partial<{value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FunctionalOptionsArgument {
		return new FunctionalOptionsArgument(this, true)
	}

	public __goscriptAssign(source: FunctionalOptionsArgument): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async String(): globalThis.Promise<string> {
		const f: FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null = this;
		const f$: FunctionalOptionsArgument = f == null ? $.pointerTarget<FunctionalOptionsArgument>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FunctionalOptionsArgument>(f)
		let name: string = ""
		let tValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((f$ as FunctionalOptionsArgument).value)))
		if ($.markAsStructValue($.cloneStructValue(tValue)).Len() > 0) {
			name = $.concatString("[]", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(tValue)).Index(0))).Interface())).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}

		return strings.Replace(await fmt.Sprintf("%#v", (f$ as FunctionalOptionsArgument).value), "[]interface {}", name, 1)
	}

	static __typeInfo = $.registerStructType(
		"mock.FunctionalOptionsArgument",
		() => new FunctionalOptionsArgument(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		FunctionalOptionsArgument,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export class argumentMatcher {
	// fn is a function which accepts one argument, and returns a bool.
	public get fn(): reflect.Value {
		return this._fields.fn
	}

	public set fn(value: reflect.Value) {
		this._fields.fn = value
	}

	public _fields: {
		fn: reflect.Value
	}

	constructor(init?: Partial<{fn?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			fn: init?.fn ? $.markAsStructValue($.cloneStructValue(init.fn)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): argumentMatcher {
		return new argumentMatcher(this, true)
	}

	public __goscriptAssign(source: argumentMatcher): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.fn, values.fn)
	}

	public async Matches(argument: any): globalThis.Promise<boolean> {
		const f = this;
		let expectType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(f.fn)).Type()).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let expectTypeNilSupported = false
		switch ((__goscriptAwait = (expectType !== null && (expectType as any).__isVarRef !== true && (expectType as any).__goValue === undefined ? (expectType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Interface:
			case reflect.Chan:
			case reflect.Func:
			case reflect.Map:
			case reflect.Slice:
			case reflect.Ptr:
			{
				expectTypeNilSupported = true
				break
			}
		}

		let argType = reflect.TypeOf(argument)
		let arg: reflect.Value = $.markAsStructValue(new reflect.Value())
		if (argType == null) {
			arg = $.assignStruct(arg, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(expectType)!))).Elem())
		} else {
			arg = $.assignStruct(arg, reflect.ValueOf(argument))
		}

		if ((argType == null) && !expectTypeNilSupported) {
			$.panic((errors.New("attempting to call matcher with nil for non-nil expected type") as any))
		}
		if ((argType == null) || (__goscriptAwait = (argType !== null && (argType as any).__isVarRef !== true && (argType as any).__goValue === undefined ? (argType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(argType)).AssignableTo($.pointerValueOrNil(expectType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let result: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(f.fn)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(arg))]))
			return $.markAsStructValue($.cloneStructValue($.arrayIndex(result!, 0))).Bool()
		}
		return false
	}

	public async String(): globalThis.Promise<string> {
		const f = this;
		return fmt.Sprintf("func(%s) bool", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(f.fn)).Type()).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"mock.argumentMatcher",
		() => new argumentMatcher(),
		() => [$.methodSignature("Matches", [["argument", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		argumentMatcher,
		() => [/* @__PURE__ */ $.structField("fn", "reflect.Value", [0], 0, false, { pkgPath: "github.com/stretchr/testify/mock" })]
	)
}

export const Anything: string = "mock.Anything"

export let gccgoRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("\\.pN\\d+_")

export function __goscript_set_gccgoRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	gccgoRE = __goscriptValue
}

export function newCall(parent: Mock | $.VarRef<Mock> | null, methodName: string, callerInfo: $.Slice<string>, methodArguments: $.Slice<any>): Call | $.VarRef<Call> | null {
	return new Call({Parent: parent, Method: methodName, Arguments: (methodArguments as Arguments), ReturnArguments: ($.makeSlice<any>(0) as Arguments), callerInfo: callerInfo, Repeatability: 0, WaitFor: null, RunFn: (null as ((_p0: Arguments) => void) | null), PanicMsg: null})
}

export async function callString(method: string, _arguments: Arguments, includeArgumentValues: boolean): globalThis.Promise<string> {
	let argValsString: string = ""
	if (includeArgumentValues) {
		let argVals: $.Slice<string> = null! as $.Slice<string>
		for (let __goscriptRangeTarget12 = _arguments, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), argIndex = 0; argIndex < __goscriptRangeWindow12.length; argIndex++) {
			let arg = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + argIndex] as any)
			{
				let [, ok] = $.typeAssertTuple<FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null>(arg, /* @__PURE__ */ $.pointerType("mock.FunctionalOptionsArgument"))
				if (ok) {
					argVals = $.appendOne(argVals, await fmt.Sprintf("%d: %s", $.basicInterfaceValue(argIndex, "int"), arg))
					continue
				}
			}
			argVals = $.appendOne(argVals, await fmt.Sprintf("%d: %#v", $.basicInterfaceValue(argIndex, "int"), arg))
		}
		argValsString = await fmt.Sprintf("\n\t\t%s", strings.Join(argVals, "\n\t\t"))
	}

	return fmt.Sprintf("%s(%s)%s", method, await Arguments_String(_arguments, null), argValsString)
}

export async function AssertExpectationsForObjects(t: TestingT | null, testObjects: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	for (let __goscriptRangeTarget13 = testObjects, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let obj = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as any)
		{
			let __goscriptTuple2: any = $.typeAssertTuple<Mock | $.VarRef<Mock> | null>(obj, /* @__PURE__ */ $.pointerType("mock.Mock"))
			let m: Mock | $.VarRef<Mock> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Logf("Deprecated mock.AssertExpectationsForObjects(myMock.Mock) use mock.AssertExpectationsForObjects(myMock)", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				obj = $.interfaceValue(m, "*mock.Mock", /* @__PURE__ */ $.pointerType("mock.Mock"))
			}
		}
		let m = $.mustTypeAssert<assertExpectationiser | null>(obj, "mock.assertExpectationiser")
		if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<assertExpectationiser, null>) : $.pointerValue<Exclude<assertExpectationiser, null>>(m)).AssertExpectations(t), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Logf("Expectations didn't match for Mock: %+v", $.arrayToSlice<any>([(reflect.TypeOf((m as any)) as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return false
		}
	}
	return true
}

export function isArgsEqual(expected: Arguments, args: $.Slice<any>): boolean {
	if ($.sliceLen((expected as Arguments)) != $.sliceLen(args)) {
		return false
	}
	for (let __goscriptRangeTarget14 = args, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __goscriptSliceWindow0 = $.sliceRange(expected), i = 0; i < __goscriptRangeWindow14.length; i++) {
		let v = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + i] as any)
		if (!reflect.DeepEqual(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any), v)) {
			return false
		}
	}
	return true
}

export function AnythingOfType(t: string): AnythingOfTypeArgument {
	return t
}

export function IsType(t: any): IsTypeArgument | $.VarRef<IsTypeArgument> | null {
	return (() => { const __goscriptLiteralField0 = reflect.TypeOf(t); return new IsTypeArgument({t: __goscriptLiteralField0}) })()
}

export function FunctionalOptions(value: $.Slice<any>): FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null {
	return new FunctionalOptionsArgument({value: $.interfaceValue(value, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
}

export async function MatchedBy(fn: any): globalThis.Promise<argumentMatcher> {
	let fnType = reflect.TypeOf(fn)

	if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
		$.panic(await fmt.Sprintf("assert: arguments: %s is not a func", fn))
	}
	if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1) {
		$.panic(await fmt.Sprintf("assert: arguments: %s does not take exactly one argument", fn))
	}
	if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1)) {
		$.panic(await fmt.Sprintf("assert: arguments: %s does not return a bool", fn))
	}

	return (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(fn))); return new argumentMatcher({fn: __goscriptLiteralField1}, true) })()
}

export async function Arguments_Get(args: Arguments, index: number): globalThis.Promise<any> {
	if ((index + 1) > $.sliceLen((args as Arguments))) {
		$.panic(await fmt.Sprintf("assert: arguments: Cannot call Get(%d) because there are %d argument(s).", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue($.sliceLen((args as Arguments)), "int")))
	}
	return $.arrayIndex(args!, index)
}

export function Arguments_Is(args: Arguments, objects: $.Slice<any>): boolean {
	for (let __goscriptRangeTarget15 = args, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __goscriptSliceWindow1 = $.sliceRange(objects), i = 0; i < __goscriptRangeWindow15.length; i++) {
		let obj = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + i] as any)
		if (!$.comparableEqual(obj, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any))) {
			return false
		}
	}
	return true
}

export async function Arguments_Diff(args: Arguments, objects: $.Slice<any>): globalThis.Promise<[string, number]> {
	// TODO: could return string as error and nil for No difference

	let output = "\n"
	let differences: number = 0

	let maxArgCount = $.sliceLen((args as Arguments))
	if ($.sliceLen(objects) > maxArgCount) {
		maxArgCount = $.sliceLen(objects)
	}

	for (let __goscriptSliceWindow2 = $.sliceRange(objects), __goscriptSliceWindow3 = $.sliceRange(args), i = 0; i < maxArgCount; i++) {
		let actual: any = null! as any
		let expected: any = null! as any
		let actualFmt: string = ""
		let expectedFmt: string = ""

		if (__goscriptSliceWindow2.length <= i) {
			actual = "(Missing)"
			actualFmt = "(Missing)"
		} else {
			actual = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any)
			actualFmt = await fmt.Sprintf("(%[1]T=%[1]v)", actual)
		}

		if (__goscriptSliceWindow3.length <= i) {
			expected = "(Missing)"
			expectedFmt = "(Missing)"
		} else {
			expected = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as any)
			expectedFmt = await fmt.Sprintf("(%[1]T=%[1]v)", expected)
		}

		{
			let [matcher, ok] = $.typeAssertTuple<argumentMatcher>(expected, "mock.argumentMatcher")
			if (ok) {
				let matches: boolean = false
				await (async (): globalThis.Promise<void> => {
					const __defer = new $.AsyncDisposableStack()
					try {
						__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
							{
								let r = $.recover()
								if (r != null) {
									actualFmt = await fmt.Sprintf("panic in argument matcher: %v", r)
								}
							}
						})() })
						matches = await $.markAsStructValue($.cloneStructValue(matcher)).Matches(actual)
						await __defer.dispose()
					} catch (e) {
						await __defer.disposePanic(e)
						if (!$.recovered(e)) {
							throw e
						}
					}
				})()
				if (matches) {
					output = await fmt.Sprintf("%s\t%d: PASS:  %s matched by %s\n", output, $.basicInterfaceValue(i, "int"), actualFmt, $.interfaceValue((matcher).clone(), "mock.argumentMatcher", "mock.argumentMatcher"))
				} else {
					differences++
					output = await fmt.Sprintf("%s\t%d: FAIL:  %s not matched by %s\n", output, $.basicInterfaceValue(i, "int"), actualFmt, $.interfaceValue((matcher).clone(), "mock.argumentMatcher", "mock.argumentMatcher"))
				}
			} else {
				{
					const __goscriptTypeSwitchValue = expected
					switch (true) {
						case $.typeAssert<anythingOfTypeArgument>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "mock.anythingOfTypeArgument")).ok:
							{
								let expected: anythingOfTypeArgument = $.typeAssert<anythingOfTypeArgument>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "mock.anythingOfTypeArgument")).value
								if ((!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), expected)) && (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), expected))) {
									// not match
									differences++
									output = await fmt.Sprintf("%s\t%d: FAIL:  type %s != type %s - %s\n", output, $.basicInterfaceValue(i, "int"), $.namedValueInterfaceValue<any>(expected, "mock.anythingOfTypeArgument", {}, /* @__PURE__ */ $.basicType("string", "mock.anythingOfTypeArgument")), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), actualFmt)
								}
							}
							break
						case $.typeAssert<IsTypeArgument | $.VarRef<IsTypeArgument> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mock.IsTypeArgument")).ok:
							{
								let expected: IsTypeArgument | $.VarRef<IsTypeArgument> | null = $.typeAssert<IsTypeArgument | $.VarRef<IsTypeArgument> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mock.IsTypeArgument")).value
								let actualT = reflect.TypeOf(actual)
								if (!$.comparableEqual(actualT, $.pointerValue<IsTypeArgument>(expected).t)) {
									differences++
									output = await fmt.Sprintf("%s\t%d: FAIL:  type %s != type %s - %s\n", output, $.basicInterfaceValue(i, "int"), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<IsTypeArgument>(expected).t).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (actualT !== null && (actualT as any).__isVarRef !== true && (actualT as any).__goValue === undefined ? (actualT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(actualT)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), actualFmt)
								}
							}
							break
						case $.typeAssert<FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mock.FunctionalOptionsArgument")).ok:
							{
								let expected: FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null = $.typeAssert<FunctionalOptionsArgument | $.VarRef<FunctionalOptionsArgument> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mock.FunctionalOptionsArgument")).value
								let t = $.pointerValue<FunctionalOptionsArgument>(expected).value

								let name: string = ""
								let tValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(t)))
								if ($.markAsStructValue($.cloneStructValue(tValue)).Len() > 0) {
									name = $.concatString("[]", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(tValue)).Index(0))).Interface())).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
								}

								let tName = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if ((!$.stringEqual(name, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) && ($.markAsStructValue($.cloneStructValue(tValue)).Len() != 0)) {
									differences++
									output = await fmt.Sprintf("%s\t%d: FAIL:  type %s != type %s - %s\n", output, $.basicInterfaceValue(i, "int"), tName, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), actualFmt)
								} else {
									{
										let [ef, af] = await assertOpts(t, actual)
										if (($.stringEqual(ef, "")) && ($.stringEqual(af, ""))) {
											// match
											output = await fmt.Sprintf("%s\t%d: PASS:  %s == %s\n", output, $.basicInterfaceValue(i, "int"), tName, tName)
										} else {
											// not match
											differences++
											output = await fmt.Sprintf("%s\t%d: FAIL:  %s != %s\n", output, $.basicInterfaceValue(i, "int"), af, ef)
										}
									}
								}
							}
							break
						default:
							{
								let expected: any = __goscriptTypeSwitchValue
								if ((assert.ObjectsAreEqual(expected, "mock.Anything") || assert.ObjectsAreEqual(actual, "mock.Anything")) || assert.ObjectsAreEqual(actual, expected)) {
									// match
									output = await fmt.Sprintf("%s\t%d: PASS:  %s == %s\n", output, $.basicInterfaceValue(i, "int"), actualFmt, expectedFmt)
								} else {
									// not match
									differences++
									output = await fmt.Sprintf("%s\t%d: FAIL:  %s != %s\n", output, $.basicInterfaceValue(i, "int"), actualFmt, expectedFmt)
								}
							}
							break
					}
				}
			}
		}
	}

	if (differences == 0) {
		return ["No differences.", differences]
	}

	return [output, differences]
}

export async function Arguments_Assert(args: Arguments, t: TestingT | null, objects: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "mock.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	// get the differences
	let [diff, diffCount] = await Arguments_Diff(args, objects)

	if (diffCount == 0) {
		return true
	}

	// there are differences... report them...
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Logf(diff, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Errorf("%sArguments do not match.", $.arrayToSlice<any>([$.interfaceValue(await assert.CallerInfo(), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return false
}

export async function Arguments_String(args: Arguments, indexOrNil: $.Slice<number>): globalThis.Promise<string> {
	if ($.sliceLen(indexOrNil) == 0) {
		// normal String() method - return a string representation of the args
		let argsStr: $.Slice<string> = null! as $.Slice<string>
		for (let __goscriptRangeTarget16 = args, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let arg = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as any)
			argsStr = $.appendOne(argsStr, await fmt.Sprintf("%T", arg))
		}
		return strings.Join(argsStr, ",")
	} else {
		if ($.sliceLen(indexOrNil) == 1) {
			// Index has been specified - get the argument at that index
			let index = $.arrayIndex(indexOrNil!, 0)
			let s: string = ""
			let ok: boolean = false
			{
				let __goscriptTuple3: any = $.typeAssertTuple<string>(await Arguments_Get(args, index), /* @__PURE__ */ $.basicType("string"))
				s = __goscriptTuple3[0]
				ok = __goscriptTuple3[1]
				if (!ok) {
					$.panic(await fmt.Sprintf("assert: arguments: String(%d) failed because object wasn't correct type: %s", $.basicInterfaceValue(index, "int"), await Arguments_Get(args, index)))
				}
			}
			return s
		}
	}

	$.panic(await fmt.Sprintf("assert: arguments: Wrong number of arguments passed to String.  Must be 0 or 1, not %d", $.basicInterfaceValue($.sliceLen(indexOrNil), "int")))
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Arguments_Int(args: Arguments, index: number): globalThis.Promise<number> {
	let s: number = 0
	let ok: boolean = false
	{
		let __goscriptTuple4: any = $.typeAssertTuple<number>(await Arguments_Get(args, index), /* @__PURE__ */ $.basicType("int"))
		s = __goscriptTuple4[0]
		ok = __goscriptTuple4[1]
		if (!ok) {
			$.panic(await fmt.Sprintf("assert: arguments: Int(%d) failed because object wasn't correct type: %v", $.basicInterfaceValue(index, "int"), await Arguments_Get(args, index)))
		}
	}
	return s
}

export async function Arguments_Error(args: Arguments, index: number): globalThis.Promise<$.GoError> {
	let obj = await Arguments_Get(args, index)
	let s: $.GoError = null! as $.GoError
	let ok: boolean = false
	if (obj == null) {
		return null
	}
	{
		let __goscriptTuple5: any = $.typeAssertTuple<$.GoError>(obj, "error")
		s = __goscriptTuple5[0]
		ok = __goscriptTuple5[1]
		if (!ok) {
			$.panic(await fmt.Sprintf("assert: arguments: Error(%d) failed because object wasn't correct type: %v", $.basicInterfaceValue(index, "int"), await Arguments_Get(args, index)))
		}
	}
	return s
}

export async function Arguments_Bool(args: Arguments, index: number): globalThis.Promise<boolean> {
	let s: boolean = false
	let ok: boolean = false
	{
		let __goscriptTuple6: any = $.typeAssertTuple<boolean>(await Arguments_Get(args, index), /* @__PURE__ */ $.basicType("bool"))
		s = __goscriptTuple6[0]
		ok = __goscriptTuple6[1]
		if (!ok) {
			$.panic(await fmt.Sprintf("assert: arguments: Bool(%d) failed because object wasn't correct type: %v", $.basicInterfaceValue(index, "int"), await Arguments_Get(args, index)))
		}
	}
	return s
}

export async function typeAndKind(v: any): globalThis.Promise<[reflect.Type | null, reflect.Kind]> {
	let t: reflect.Type | null = reflect.TypeOf(v)
	let k = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	if (k == 22) {
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		k = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return [t, k]
}

export async function diffArguments(expected: Arguments, actual: Arguments): globalThis.Promise<string> {
	if ($.sliceLen((expected as Arguments)) != $.sliceLen((actual as Arguments))) {
		return fmt.Sprintf("Provided %v arguments, mocked for %v arguments", $.basicInterfaceValue($.sliceLen((expected as Arguments)), "int"), $.basicInterfaceValue($.sliceLen((actual as Arguments)), "int"))
	}

	for (let __goscriptRangeTarget17 = expected, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __goscriptSliceWindow4 = $.sliceRange(actual), x = 0; x < __goscriptRangeWindow17.length; x++) {
		{
			let diffString = await diff(((__goscriptRangeWindow17.backing as any[])[__goscriptRangeWindow17.offset + x] as any), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, x)] as any))
			if (!$.stringEqual(diffString, "")) {
				return fmt.Sprintf("Difference found in argument %v:\n\n%s", $.basicInterfaceValue(x, "int"), diffString)
			}
		}
	}

	return ""
}

export async function diff(expected: any, actual: any): globalThis.Promise<string> {
	if ((expected == null) || (actual == null)) {
		return ""
	}

	let [et, ek] = await typeAndKind(expected)
	let [at, ] = await typeAndKind(actual)

	if (!$.comparableEqual(et, at)) {
		return ""
	}

	if ((((ek != 25) && (ek != 21)) && (ek != 23)) && (ek != 17)) {
		return ""
	}

	let e = await spewConfig.value.Sdump($.arrayToSlice<any>([expected]))
	let a = await spewConfig.value.Sdump($.arrayToSlice<any>([actual]))

	let [__goscriptShadow0, ] = await difflib.GetUnifiedDiffString((() => { const __goscriptLiteralField2 = difflib.SplitLines(e); const __goscriptLiteralField3 = difflib.SplitLines(a); return new difflib.UnifiedDiff({A: __goscriptLiteralField2, B: __goscriptLiteralField3, FromFile: "Expected", FromDate: "", ToFile: "Actual", ToDate: "", Context: 1}, true) })())

	return __goscriptShadow0
}

export let spewConfig: $.VarRef<spew.ConfigState> = $.varRef(new spew.ConfigState({Indent: " ", DisablePointerAddresses: true, DisableCapacities: true, SortKeys: true}, true))

export function __goscript_set_spewConfig(__goscriptValue: spew.ConfigState): void {
	$.assignStruct(spewConfig.value, __goscriptValue)
}

export async function assertOpts(expected: any, actual: any): globalThis.Promise<[string, string]> {
	let expectedFmt: string = ""
	let actualFmt: string = ""
	let expectedOpts = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))
	let actualOpts = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual)))
	let expectedNames: $.Slice<string> = null! as $.Slice<string>
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(expectedOpts)).Len(); i++) {
		expectedNames = $.appendOne(expectedNames, funcName($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedOpts)).Index(i))).Interface()))
	}
	let actualNames: $.Slice<string> = null! as $.Slice<string>
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(actualOpts)).Len(); i++) {
		actualNames = $.appendOne(actualNames, funcName($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualOpts)).Index(i))).Interface()))
	}
	if (!assert.ObjectsAreEqual($.interfaceValue(expectedNames, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue(actualNames, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))) {
		expectedFmt = await fmt.Sprintf("%v", $.interfaceValue(expectedNames, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
		actualFmt = await fmt.Sprintf("%v", $.interfaceValue(actualNames, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
		return [expectedFmt, actualFmt]
	}

	for (let __goscriptSliceWindow5 = $.sliceRange(expectedNames), __goscriptSliceWindow6 = $.sliceRange(actualNames), i = 0; i < $.markAsStructValue($.cloneStructValue(expectedOpts)).Len(); i++) {
		let expectedOpt = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedOpts)).Index(i))).Interface()
		let actualOpt = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualOpts)).Index(i))).Interface()

		let expectedFunc = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as string)
		let actualFunc = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as string)
		if (!$.stringEqual(expectedFunc, actualFunc)) {
			expectedFmt = expectedFunc
			actualFmt = actualFunc
			return [expectedFmt, actualFmt]
		}

		let ot = reflect.TypeOf(expectedOpt)
		let expectedValues: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
		let actualValues: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
		if ((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
			return [expectedFmt, actualFmt]
		}

		for (let __goscriptShadow1 = 0; __goscriptShadow1 < (__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow1++) {
			let vt = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).In(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			expectedValues = $.appendOne(expectedValues, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(vt)!))))
			actualValues = $.appendOne(actualValues, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(vt)!))))
		}

		await $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expectedOpt))).Call(expectedValues)
		await $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actualOpt))).Call(actualValues)

		for (let __goscriptSliceWindow7 = $.sliceRange(expectedValues), __goscriptSliceWindow8 = $.sliceRange(actualValues), __goscriptShadow2 = 0; __goscriptShadow2 < (__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow2++) {
			if (!assert.ObjectsAreEqual($.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, __goscriptShadow2)] as reflect.Value))).Interface(), $.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, __goscriptShadow2)] as reflect.Value))).Interface())) {
				expectedFmt = await fmt.Sprintf("%s %+v", ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, __goscriptShadow2)] as string), $.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, __goscriptShadow2)] as reflect.Value))).Interface())
				actualFmt = await fmt.Sprintf("%s %+v", ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, __goscriptShadow2)] as string), $.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, __goscriptShadow2)] as reflect.Value))).Interface())
				return [expectedFmt, actualFmt]
			}
		}
	}

	return ["", ""]
}

export function funcName(opt: any): string {
	let n = runtime.Func.prototype.Name.call($.pointerValueOrNil(runtime.FuncForPC($.markAsStructValue($.cloneStructValue(reflect.ValueOf(opt))).Pointer())))
	return strings.TrimSuffix(path.Base(n), path.Ext(n))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Assert: (receiver: any, ...args: any[]) => (Arguments_Assert as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => (Arguments_Bool as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Diff: (receiver: any, ...args: any[]) => (Arguments_Diff as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (Arguments_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (Arguments_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => (Arguments_Int as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (Arguments_Is as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Arguments_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Assert", [["t", "mock.TestingT"], ["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Bool", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Diff", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")]), $.methodSignature("Error", [["index", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Get", [["index", /* @__PURE__ */ $.basicType("int")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Int", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Is", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [["indexOrNil", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
