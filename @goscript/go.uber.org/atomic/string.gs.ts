// Generated file based on string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_string_ext from "./string_ext.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/sync/atomic/index.js"
import "./nocmp.gs.ts"
import "./string_ext.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.String"])

export class String {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): __goscript_value.Value {
		return this._fields.v
	}

	public set v(value: __goscript_value.Value) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: __goscript_value.Value
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: __goscript_value.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ? init.v.clone() : new __goscript_value.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): String {
		return new String(this, true)
	}

	public __goscriptAssign(source: String): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public CompareAndSwap(old: string, _new: string): boolean {
		const x: String | $.VarRef<String> | null = this;
		let swapped: boolean = false
		const x$: String = x == null ? $.pointerTarget<String>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<String>(x)
		if ((x$ as String).v.Value.CompareAndSwap(__goscript_string_ext.packString(old), __goscript_string_ext.packString(_new))) {
			return true
		}

		if ($.stringEqual(old, _zeroString)) {
			// If the old value is the empty value, then it's possible the
			// underlying Value hasn't been set and is nil, so retry with nil.
			return (x$ as String).v.Value.CompareAndSwap(null, __goscript_string_ext.packString(_new))
		}

		return false
	}

	public Load(): string {
		const x: String | $.VarRef<String> | null = this;
		return __goscript_string_ext.unpackString($.pointerValue<String>(x).v.Value.Load())
	}

	public MarshalText(): [$.Slice<number>, $.GoError] {
		const s: String | $.VarRef<String> | null = this;
		return [$.stringToBytes((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as String).Load() : String.prototype.Load.call(s))), null]
	}

	public Store(val: string): void {
		const x: String | $.VarRef<String> | null = this;
		$.pointerValue<String>(x).v.Value.Store(__goscript_string_ext.packString(val))
	}

	public String(): string {
		const s: String | $.VarRef<String> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as String).Load() : String.prototype.Load.call(s))
	}

	public Swap(val: string): string {
		const x: String | $.VarRef<String> | null = this;
		let old: string = ""
		return __goscript_string_ext.unpackString($.pointerValue<String>(x).v.Value.Swap(__goscript_string_ext.packString(val)))
	}

	public UnmarshalText(b: $.Slice<number>): $.GoError {
		const s: String | $.VarRef<String> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as String).Store($.bytesToString(b)) : String.prototype.Store.call(s, $.bytesToString(b)))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.String",
		() => new String(),
		() => [$.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("string")], ["new", /* @__PURE__ */ $.basicType("string")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("string")]], [["old", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("UnmarshalText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		String,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Value", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroString: string = ""

export function __goscript_set__zeroString(__goscriptValue: string): void {
	_zeroString = __goscriptValue
}

export function NewString(val: string): String | $.VarRef<String> | null {
	let x: String | $.VarRef<String> | null = new String()
	if (!$.stringEqual(val, _zeroString)) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as String).Store(val) : String.prototype.Store.call(x, val))
	}
	return x
}
