// Generated file based on float64.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_float64_ext from "./float64_ext.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_uint64 from "./uint64.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "./float64_ext.gs.ts"
import "./nocmp.gs.ts"
import "./uint64.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Float64"])

export class Float64 {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): __goscript_uint64.Uint64 {
		return this._fields.v
	}

	public set v(value: __goscript_uint64.Uint64) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: __goscript_uint64.Uint64
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: __goscript_uint64.Uint64}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ? init.v.clone() : new __goscript_uint64.Uint64(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Float64 {
		return new Float64(this, true)
	}

	public __goscriptAssign(source: Float64): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public Add(delta: number): number {
		const f: Float64 | $.VarRef<Float64> | null = this;
		while (true) {
			let old = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float64).Load() : Float64.prototype.Load.call(f))
			let _new = old + delta
			if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float64).CAS(old, _new) : Float64.prototype.CAS.call(f, old, _new))) {
				return _new
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public CAS(old: number, _new: number): boolean {
		const f: Float64 | $.VarRef<Float64> | null = this;
		let swapped: boolean = false
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float64).CompareAndSwap(old, _new) : Float64.prototype.CompareAndSwap.call(f, old, _new))
	}

	public CompareAndSwap(old: number, _new: number): boolean {
		const f: Float64 | $.VarRef<Float64> | null = this;
		let swapped: boolean = false
		return $.pointerValue<Float64>(f).v.CompareAndSwap(math.Float64bits(old), math.Float64bits(_new))
	}

	public Load(): number {
		const x: Float64 | $.VarRef<Float64> | null = this;
		return math.Float64frombits($.pointerValue<Float64>(x).v.Load())
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Float64 | $.VarRef<Float64> | null = this;
		return json.Marshal($.basicInterfaceValue((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float64).Load() : Float64.prototype.Load.call(x)), "float64"))
	}

	public Store(val: number): void {
		const x: Float64 | $.VarRef<Float64> | null = this;
		$.pointerValue<Float64>(x).v.Store(math.Float64bits(val))
	}

	public String(): string {
		const f: Float64 | $.VarRef<Float64> | null = this;

		return strconv.FormatFloat((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float64).Load() : Float64.prototype.Load.call(f)), 103, -1, 64)
	}

	public Sub(delta: number): number {
		const f: Float64 | $.VarRef<Float64> | null = this;
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float64).Add(-delta) : Float64.prototype.Add.call(f, -delta))
	}

	public Swap(val: number): number {
		const x: Float64 | $.VarRef<Float64> | null = this;
		let old: number = 0
		return math.Float64frombits($.pointerValue<Float64>(x).v.Swap(math.Float64bits(val)))
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const x: Float64 | $.VarRef<Float64> | null = this;
		let v: $.VarRef<number> = $.varRef(0)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))))
			if (err != null) {
				return err
			}
		}
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float64).Store(v.value) : Float64.prototype.Store.call(x, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Float64",
		() => new Float64(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("float64")], ["new", /* @__PURE__ */ $.basicType("float64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("float64")], ["new", /* @__PURE__ */ $.basicType("float64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("float64")]], [["old", /* @__PURE__ */ $.basicType("float64")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Float64,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Uint64", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroFloat64: number = 0

export function __goscript_set__zeroFloat64(__goscriptValue: number): void {
	_zeroFloat64 = __goscriptValue
}

export function NewFloat64(val: number): Float64 | $.VarRef<Float64> | null {
	let x: Float64 | $.VarRef<Float64> | null = new Float64()
	if (val != _zeroFloat64) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float64).Store(val) : Float64.prototype.Store.call(x, val))
	}
	return x
}
