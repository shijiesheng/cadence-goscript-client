// Generated file based on callset.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_controller from "./controller.gs.ts"

import * as __goscript_matchers from "./matchers.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "./call.gs.ts"
import "./controller.gs.ts"
import "./matchers.gs.ts"

$.registerTypePackagePath("github.com/golang/mock/gomock", ["gomock.callSet", "gomock.callSetKey"])

export class callSet {
	// Calls that are still expected.
	public get expected(): globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null {
		return this._fields.expected
	}

	public set expected(value: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null) {
		this._fields.expected = value
	}

	// Calls that have been exhausted.
	public get exhausted(): globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null {
		return this._fields.exhausted
	}

	public set exhausted(value: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null) {
		this._fields.exhausted = value
	}

	public _fields: {
		expected: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null
		exhausted: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null
	}

	constructor(init?: Partial<{expected?: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null, exhausted?: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			expected: init?.expected ?? (null! as globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null),
			exhausted: init?.exhausted ?? (null! as globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callSet {
		return new callSet(this, true)
	}

	public __goscriptAssign(source: callSet): void {
		const target = this._fields
		const values = source._fields
		target.expected = values.expected
		target.exhausted = values.exhausted
	}

	public Add(call: __goscript_call.Call | $.VarRef<__goscript_call.Call> | null): void {
		const cs = this;
		const call$: __goscript_call.Call = call == null ? $.pointerTarget<__goscript_call.Call>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_call.Call>(call)
		let key = new callSetKey({receiver: (call$ as __goscript_call.Call).receiver, fname: (call$ as __goscript_call.Call).method}, true)
		let m: globalThis.Map<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>> | null = cs.expected
		if ((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_call.Call).exhausted() : __goscript_call.Call.prototype.exhausted.call(call))) {
			m = cs.exhausted
		}
		$.mapSet(m, (key).clone(), $.appendOne($.mapGet<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(m, key, null)[0], call, $.appendZeros.nil))
	}

	public Failures(): $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> {
		const cs = this;
		let failures: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = $.makeSlice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>(0, $.len(cs.expected))
		for (const [__rangeKey, calls] of cs.expected?.entries() ?? []) {
			for (let __goscriptRangeTarget0 = calls, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let call = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
				if (!(call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_call.Call).satisfied() : __goscript_call.Call.prototype.satisfied.call(call))) {
					failures = $.appendOne(failures, call, $.appendZeros.nil)
				}
			}
		}
		return failures
	}

	public async FindMatch(receiver: any, method: string, args: $.Slice<any>): globalThis.Promise<[__goscript_call.Call | $.VarRef<__goscript_call.Call> | null, $.GoError]> {
		const cs = this;
		let key = new callSetKey({receiver: receiver, fname: method}, true)

		// Search through the expected calls.
		let expected: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = $.mapGet<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(cs.expected, key, null)[0]
		let callsErrors: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		for (let __goscriptRangeTarget1 = expected, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
			let err = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_call.Call).matches(args) : __goscript_call.Call.prototype.matches.call(call, args))
			if (err != null) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(callsErrors, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\n%v", (err as any))
			} else {
				return [call, null]
			}
		}

		// If we haven't found a match then search through the exhausted calls so we
		// get useful error messages.
		let exhausted: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = $.mapGet<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(cs.exhausted, key, null)[0]
		for (let __goscriptRangeTarget2 = exhausted, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let call = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
			{
				let err = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_call.Call).matches(args) : __goscript_call.Call.prototype.matches.call(call, args))
				if (err != null) {
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(callsErrors, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\n%v", (err as any))
					continue
				}
			}
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(callsErrors, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "all expected calls for method %q have been exhausted", method)
		}

		if (($.sliceLen(expected) + $.sliceLen(exhausted)) == 0) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(callsErrors, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "there are no expected calls of the method %q for that receiver", method)
		}

		return [null, errors.New(callsErrors.value.String())]
	}

	public Remove(call: __goscript_call.Call | $.VarRef<__goscript_call.Call> | null): void {
		let cs: callSet = this;
		const call$: __goscript_call.Call = call == null ? $.pointerTarget<__goscript_call.Call>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_call.Call>(call)
		let key = new callSetKey({receiver: (call$ as __goscript_call.Call).receiver, fname: (call$ as __goscript_call.Call).method}, true)
		let calls: $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null> = $.mapGet<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(cs.expected, key, null)[0]
		for (let __goscriptRangeTarget3 = calls, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let c = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as __goscript_call.Call | $.VarRef<__goscript_call.Call> | null)
			if ($.pointerEqual(c, call)) {
				// maintain order for remaining calls
				$.mapSet(cs.expected, (key).clone(), $.appendSlice($.goSlice(calls, undefined, i), $.goSlice(calls, i + 1, undefined), $.appendZeros.nil))
				$.mapSet(cs.exhausted, (key).clone(), $.appendOne($.mapGet<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(cs.exhausted, key, null)[0], call, $.appendZeros.nil))
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"gomock.callSet",
		() => new callSet(),
		() => [$.methodSignature("Add", [["call", /* @__PURE__ */ $.pointerType("gomock.Call")]]), $.methodSignature("Failures", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("gomock.Call"))]), $.methodSignature("FindMatch", [["receiver", { kind: $.TypeKind.Interface, methods: [] }], ["method", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call"), "error"]), $.methodSignature("Remove", [["call", /* @__PURE__ */ $.pointerType("gomock.Call")]])],
		callSet,
		() => [/* @__PURE__ */ $.structField("expected", /* @__PURE__ */ $.mapType("gomock.callSetKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("gomock.Call"))), [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("exhausted", /* @__PURE__ */ $.mapType("gomock.callSetKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("gomock.Call"))), [1], 8, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class callSetKey {
	public get receiver(): any {
		return this._fields.receiver
	}

	public set receiver(value: any) {
		this._fields.receiver = value
	}

	public get fname(): string {
		return this._fields.fname
	}

	public set fname(value: string) {
		this._fields.fname = value
	}

	public _fields: {
		receiver: any
		fname: string
	}

	constructor(init?: Partial<{receiver?: any, fname?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			receiver: init?.receiver ?? (null! as any),
			fname: init?.fname ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callSetKey {
		return new callSetKey(this, true)
	}

	public __goscriptAssign(source: callSetKey): void {
		const target = this._fields
		const values = source._fields
		target.receiver = $.assignFieldValue(target.receiver, values.receiver, { kind: $.TypeKind.Interface, methods: [] })
		target.fname = values.fname
	}

	static __typeInfo = $.registerStructType(
		"gomock.callSetKey",
		() => new callSetKey(),
		() => [],
		callSetKey,
		() => [/* @__PURE__ */ $.structField("receiver", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("fname", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export function newCallSet(): callSet | $.VarRef<callSet> | null {
	return new callSet({expected: $.makeMap<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>(), exhausted: $.makeMap<callSetKey, $.Slice<__goscript_call.Call | $.VarRef<__goscript_call.Call> | null>>()})
}
