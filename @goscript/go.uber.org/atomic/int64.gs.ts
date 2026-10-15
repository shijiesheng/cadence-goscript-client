// Generated file based on int64.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/atomic/index.js"
import "./nocmp.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Int64"])

export class Int64 {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): bigint {
		return this._fields.v
	}

	public set v(value: bigint) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: bigint
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int64 {
		return new Int64(this, true)
	}

	public __goscriptAssign(source: Int64): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		target.v = values.v
	}

	public Add(delta: bigint): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return atomic.AddInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"), delta)
	}

	public CAS(old: bigint, _new: bigint): boolean {
		const i: Int64 | $.VarRef<Int64> | null = this;
		let swapped: boolean = false
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).CompareAndSwap(old, _new) : Int64.prototype.CompareAndSwap.call(i, old, _new))
	}

	public CompareAndSwap(old: bigint, _new: bigint): boolean {
		const i: Int64 | $.VarRef<Int64> | null = this;
		let swapped: boolean = false
		return atomic.CompareAndSwapInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"), old, _new)
	}

	public Dec(): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).Sub(1n) : Int64.prototype.Sub.call(i, 1n))
	}

	public Inc(): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).Add(1n) : Int64.prototype.Add.call(i, 1n))
	}

	public Load(): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return atomic.LoadInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"))
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return json.Marshal($.basicInterfaceValue((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).Load() : Int64.prototype.Load.call(i)), "int64"))
	}

	public Store(val: bigint): void {
		const i: Int64 | $.VarRef<Int64> | null = this;
		atomic.StoreInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"), val)
	}

	public String(): string {
		const i: Int64 | $.VarRef<Int64> | null = this;
		let v = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).Load() : Int64.prototype.Load.call(i))
		return strconv.FormatInt($.int64(v), 10)
	}

	public Sub(delta: bigint): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		return atomic.AddInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"), -delta)
	}

	public Swap(val: bigint): bigint {
		const i: Int64 | $.VarRef<Int64> | null = this;
		let old: bigint = 0n
		return atomic.SwapInt64($.fieldRef($.pointerValue<Int64>(i)._fields, "v"), val)
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: Int64 | $.VarRef<Int64> | null = this;
		let v: $.VarRef<bigint> = $.varRef(0n)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*int64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))))
			if (err != null) {
				return err
			}
		}
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int64).Store(v.value) : Int64.prototype.Store.call(i, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Int64",
		() => new Int64(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("int64")]], [["old", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Int64,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("int64"), [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewInt64(val: bigint): Int64 | $.VarRef<Int64> | null {
	return new Int64({v: val})
}
