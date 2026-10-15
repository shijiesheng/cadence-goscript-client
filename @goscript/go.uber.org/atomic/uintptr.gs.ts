// Generated file based on uintptr.go
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

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Uintptr"])

export class Uintptr {
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

	public clone(): Uintptr {
		return new Uintptr(this, true)
	}

	public __goscriptAssign(source: Uintptr): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		target.v = values.v
	}

	public Add(delta: number): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return atomic.AddUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"), delta)
	}

	public CAS(old: number, _new: number): boolean {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		let swapped: boolean = false
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).CompareAndSwap(old, _new) : Uintptr.prototype.CompareAndSwap.call(i, old, _new))
	}

	public CompareAndSwap(old: number, _new: number): boolean {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		let swapped: boolean = false
		return atomic.CompareAndSwapUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"), old, _new)
	}

	public Dec(): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).Sub(1) : Uintptr.prototype.Sub.call(i, 1))
	}

	public Inc(): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).Add(1) : Uintptr.prototype.Add.call(i, 1))
	}

	public Load(): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return atomic.LoadUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"))
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return json.Marshal($.basicInterfaceValue((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).Load() : Uintptr.prototype.Load.call(i)), "uintptr"))
	}

	public Store(val: number): void {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		atomic.StoreUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"), val)
	}

	public String(): string {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		let v = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).Load() : Uintptr.prototype.Load.call(i))
		return strconv.FormatUint($.uint64(v), 10)
	}

	public Sub(delta: number): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		return atomic.AddUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"), $.uint($.uint($.uint64Xor(($.uint($.uint64Sub(delta, 1n), 64)), -1n), 64), 64))
	}

	public Swap(val: number): number {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		let old: number = 0
		return atomic.SwapUintptr($.fieldRef($.pointerValue<Uintptr>(i)._fields, "v"), val)
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: Uintptr | $.VarRef<Uintptr> | null = this;
		let v: $.VarRef<number> = $.varRef(0)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*uintptr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uintptr"))))
			if (err != null) {
				return err
			}
		}
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Uintptr).Store(v.value) : Uintptr.prototype.Store.call(i, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Uintptr",
		() => new Uintptr(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("uintptr")]], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("uintptr")], ["new", /* @__PURE__ */ $.basicType("uintptr")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("uintptr")], ["new", /* @__PURE__ */ $.basicType("uintptr")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("uintptr")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("uintptr")]], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("uintptr")]], [["old", /* @__PURE__ */ $.basicType("uintptr")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Uintptr,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("uintptr"), [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewUintptr(val: number): Uintptr | $.VarRef<Uintptr> | null {
	return new Uintptr({v: val})
}
