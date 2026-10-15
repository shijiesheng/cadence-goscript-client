// Generated file based on int32.go
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

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Int32"])

export class Int32 {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): number {
		return this._fields.v
	}

	public set v(value: number) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: number
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int32 {
		return new Int32(this, true)
	}

	public __goscriptAssign(source: Int32): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		target.v = values.v
	}

	public Add(delta: number): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return atomic.AddInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"), delta)
	}

	public CAS(old: number, _new: number): boolean {
		const i: Int32 | $.VarRef<Int32> | null = this;
		let swapped: boolean = false
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).CompareAndSwap(old, _new) : Int32.prototype.CompareAndSwap.call(i, old, _new))
	}

	public CompareAndSwap(old: number, _new: number): boolean {
		const i: Int32 | $.VarRef<Int32> | null = this;
		let swapped: boolean = false
		return atomic.CompareAndSwapInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"), old, _new)
	}

	public Dec(): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).Sub(1) : Int32.prototype.Sub.call(i, 1))
	}

	public Inc(): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).Add(1) : Int32.prototype.Add.call(i, 1))
	}

	public Load(): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return atomic.LoadInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"))
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return json.Marshal($.basicInterfaceValue((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).Load() : Int32.prototype.Load.call(i)), "int32"))
	}

	public Store(val: number): void {
		const i: Int32 | $.VarRef<Int32> | null = this;
		atomic.StoreInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"), val)
	}

	public String(): string {
		const i: Int32 | $.VarRef<Int32> | null = this;
		let v = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).Load() : Int32.prototype.Load.call(i))
		return strconv.FormatInt($.int64(v), 10)
	}

	public Sub(delta: number): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		return atomic.AddInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"), $.int(-delta, 32))
	}

	public Swap(val: number): number {
		const i: Int32 | $.VarRef<Int32> | null = this;
		let old: number = 0
		return atomic.SwapInt32($.fieldRef($.pointerValue<Int32>(i)._fields, "v"), val)
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: Int32 | $.VarRef<Int32> | null = this;
		let v: $.VarRef<number> = $.varRef(0)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))
			if (err != null) {
				return err
			}
		}
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Int32).Store(v.value) : Int32.prototype.Store.call(i, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Int32",
		() => new Int32(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int32")], ["new", /* @__PURE__ */ $.basicType("int32")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("int32")], ["new", /* @__PURE__ */ $.basicType("int32")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("int32")]], [["old", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Int32,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("int32"), [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewInt32(val: number): Int32 | $.VarRef<Int32> | null {
	return new Int32({v: val})
}
