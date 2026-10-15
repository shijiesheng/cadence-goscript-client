// Generated file based on unsafe_pointer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"
import "@goscript/sync/atomic/index.js"
import "@goscript/unsafe/index.js"
import "./nocmp.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.UnsafePointer"])

export class UnsafePointer {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): any {
		return this._fields.v
	}

	public set v(value: any) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: any
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnsafePointer {
		return new UnsafePointer(this, true)
	}

	public __goscriptAssign(source: UnsafePointer): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		target.v = values.v
	}

	public CAS(old: any, _new: any): boolean {
		const p: UnsafePointer | $.VarRef<UnsafePointer> | null = this;
		let swapped: boolean = false
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as UnsafePointer).CompareAndSwap(old, _new) : UnsafePointer.prototype.CompareAndSwap.call(p, old, _new))
	}

	public CompareAndSwap(old: any, _new: any): boolean {
		const p: UnsafePointer | $.VarRef<UnsafePointer> | null = this;
		let swapped: boolean = false
		return atomic.CompareAndSwapPointer($.fieldRef($.pointerValue<UnsafePointer>(p)._fields, "v"), old, _new)
	}

	public Load(): any {
		const p: UnsafePointer | $.VarRef<UnsafePointer> | null = this;
		return atomic.LoadPointer($.fieldRef($.pointerValue<UnsafePointer>(p)._fields, "v"))
	}

	public Store(val: any): void {
		const p: UnsafePointer | $.VarRef<UnsafePointer> | null = this;
		atomic.StorePointer($.fieldRef($.pointerValue<UnsafePointer>(p)._fields, "v"), val)
	}

	public Swap(val: any): any {
		const p: UnsafePointer | $.VarRef<UnsafePointer> | null = this;
		let old: any = null! as any
		return atomic.SwapPointer($.fieldRef($.pointerValue<UnsafePointer>(p)._fields, "v"), val)
	}

	static __typeInfo = $.registerStructType(
		"atomic.UnsafePointer",
		() => new UnsafePointer(),
		() => [$.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("unknown")], ["new", /* @__PURE__ */ $.basicType("unknown")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("unknown")], ["new", /* @__PURE__ */ $.basicType("unknown")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("unknown")], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("unknown")]], [], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("unknown")]], [["old", /* @__PURE__ */ $.basicType("unknown")]], true)],
		UnsafePointer,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("unknown"), [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewUnsafePointer(val: any): UnsafePointer | $.VarRef<UnsafePointer> | null {
	return new UnsafePointer({v: val})
}
