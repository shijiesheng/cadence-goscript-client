// Generated file based on uint32.go
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

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Uint32"])

export class Uint32 {
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

	public clone(): Uint32 {
		return new Uint32(this, true)
	}

	public __goscriptAssign(source: Uint32): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		target.v = values.v
	}

	public Add(delta: number): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return atomic.AddUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"), delta)
	}

	public CAS(old: number, _new: number): boolean {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		let swapped: boolean = false
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).CompareAndSwap(old, _new) : Uint32.prototype.CompareAndSwap.call(i, old, _new))
	}

	public CompareAndSwap(old: number, _new: number): boolean {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		let swapped: boolean = false
		return atomic.CompareAndSwapUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"), old, _new)
	}

	public Dec(): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).Sub(1) : Uint32.prototype.Sub.call(i, 1))
	}

	public Inc(): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).Add(1) : Uint32.prototype.Add.call(i, 1))
	}

	public Load(): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return atomic.LoadUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"))
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return json.Marshal($.basicInterfaceValue((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).Load() : Uint32.prototype.Load.call(i)), "uint32"))
	}

	public Store(val: number): void {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		atomic.StoreUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"), val)
	}

	public String(): string {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		let v = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).Load() : Uint32.prototype.Load.call(i))
		return strconv.FormatUint($.uint64(v), 10)
	}

	public Sub(delta: number): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		return atomic.AddUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"), $.uint($.uint(~(((delta - 1) >>> 0)), 32), 32))
	}

	public Swap(val: number): number {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		let old: number = 0
		return atomic.SwapUint32($.fieldRef($.pointerValue<Uint32>(i)._fields, "v"), val)
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: Uint32 | $.VarRef<Uint32> | null = this;
		let v: $.VarRef<number> = $.varRef(0)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*uint32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))))
			if (err != null) {
				return err
			}
		}
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uint32).Store(v.value) : Uint32.prototype.Store.call(i, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Uint32",
		() => new Uint32(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("uint32")], ["new", /* @__PURE__ */ $.basicType("uint32")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("uint32")], ["new", /* @__PURE__ */ $.basicType("uint32")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("uint32")]], [["old", /* @__PURE__ */ $.basicType("uint32")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Uint32,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("uint32"), [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewUint32(val: number): Uint32 | $.VarRef<Uint32> | null {
	return new Uint32({v: val})
}
