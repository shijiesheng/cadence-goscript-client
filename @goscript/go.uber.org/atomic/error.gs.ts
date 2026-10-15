// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_error_ext from "./error_ext.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/sync/atomic/index.js"
import "./error_ext.gs.ts"
import "./nocmp.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Error"])

export class Error {
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

	public clone(): Error {
		return new Error(this, true)
	}

	public __goscriptAssign(source: Error): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public CompareAndSwap(old: $.GoError, _new: $.GoError): boolean {
		const x: Error | $.VarRef<Error> | null = this;
		let swapped: boolean = false
		const x$: Error = x == null ? $.pointerTarget<Error>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Error>(x)
		if ((x$ as Error).v.Value.CompareAndSwap(__goscript_error_ext.packError(old), __goscript_error_ext.packError(_new))) {
			return true
		}

		if ($.comparableEqual(old, _zeroError)) {
			// If the old value is the empty value, then it's possible the
			// underlying Value hasn't been set and is nil, so retry with nil.
			return (x$ as Error).v.Value.CompareAndSwap(null, __goscript_error_ext.packError(_new))
		}

		return false
	}

	public Load(): $.GoError {
		const x: Error | $.VarRef<Error> | null = this;
		return __goscript_error_ext.unpackError($.pointerValue<Error>(x).v.Value.Load())
	}

	public Store(val: $.GoError): void {
		const x: Error | $.VarRef<Error> | null = this;
		$.pointerValue<Error>(x).v.Value.Store(__goscript_error_ext.packError(val))
	}

	public Swap(val: $.GoError): $.GoError {
		const x: Error | $.VarRef<Error> | null = this;
		let old: $.GoError = null! as $.GoError
		return __goscript_error_ext.unpackError($.pointerValue<Error>(x).v.Value.Swap(__goscript_error_ext.packError(val)))
	}

	static __typeInfo = $.registerStructType(
		"atomic.Error",
		() => new Error(),
		() => [$.methodSignature("CompareAndSwap", [["old", "error"], ["new", "error"]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], ["error"], true), $.methodSignature("Store", [["val", "error"]], [], true), $.methodSignature("Swap", [["val", "error"]], [["old", "error"]], true)],
		Error,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Value", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroError: $.GoError = null! as $.GoError

export function __goscript_set__zeroError(__goscriptValue: $.GoError): void {
	_zeroError = __goscriptValue
}

export function NewError(val: $.GoError): Error | $.VarRef<Error> | null {
	let x: Error | $.VarRef<Error> | null = new Error()
	if (!$.comparableEqual(val, _zeroError)) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Error).Store(val) : Error.prototype.Store.call(x, val))
	}
	return x
}
