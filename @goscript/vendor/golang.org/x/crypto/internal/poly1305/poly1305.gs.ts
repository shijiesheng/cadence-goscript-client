// Generated file based on poly1305.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as __goscript_mac_noasm from "./mac_noasm.gs.ts"

import * as __goscript_sum_generic from "./sum_generic.gs.ts"
import "@goscript/crypto/subtle/index.js"
import "./mac_noasm.gs.ts"
import "./sum_generic.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/internal/poly1305", ["poly1305.MAC"])

export class MAC {
	public get mac(): __goscript_mac_noasm.mac {
		return this._fields.mac
	}

	public set mac(value: __goscript_mac_noasm.mac) {
		this._fields.mac = value
	}

	public get finalized(): boolean {
		return this._fields.finalized
	}

	public set finalized(value: boolean) {
		this._fields.finalized = value
	}

	public _fields: {
		mac: __goscript_mac_noasm.mac
		finalized: boolean
	}

	constructor(init?: Partial<{mac?: __goscript_mac_noasm.mac, finalized?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			mac: init?.mac ? init.mac.clone() : new __goscript_mac_noasm.mac(undefined, true),
			finalized: init?.finalized ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MAC {
		return new MAC(this, true)
	}

	public __goscriptAssign(source: MAC): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mac, values.mac)
		target.finalized = values.finalized
	}

	public Size(): number {
		const h: MAC | $.VarRef<MAC> | null = this;
		return 16
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		let h: MAC | $.VarRef<MAC> | null = this;
		const h$: MAC = h == null ? $.pointerTarget<MAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MAC>(h)
		let __goscriptShadow0: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
		void (h$ as MAC).mac.macGeneric.Sum(__goscriptShadow0);
		;(h$ as MAC).finalized = true
		return $.appendSlice(b, $.goSlice(__goscriptShadow0.value, undefined, undefined), $.byteSliceHint)
	}

	public Verify(expected: $.Slice<number>): boolean {
		let h: MAC | $.VarRef<MAC> | null = this;
		const h$: MAC = h == null ? $.pointerTarget<MAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MAC>(h)
		let __goscriptShadow1: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
		void (h$ as MAC).mac.macGeneric.Sum(__goscriptShadow1);
		;(h$ as MAC).finalized = true
		return subtle.ConstantTimeCompare(expected, $.goSlice(__goscriptShadow1.value, undefined, undefined)) == 1
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const h: MAC | $.VarRef<MAC> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const h$: MAC = h == null ? $.pointerTarget<MAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MAC>(h)
		if ((h$ as MAC).finalized) {
			$.panic("poly1305: write to MAC after Sum or Verify")
		}
		return (h$ as MAC).mac.macGeneric.Write(p)
	}

	static __typeInfo = $.registerStructType(
		"poly1305.MAC",
		() => new MAC(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Verify", [["expected", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		MAC,
		() => [/* @__PURE__ */ $.structField("mac", "poly1305.mac", [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305", anonymous: true }), /* @__PURE__ */ $.structField("finalized", /* @__PURE__ */ $.basicType("bool"), [1], 80, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" })]
	)
}

export const TagSize: number = 16

export function Sum(out: $.VarRef<Uint8Array> | null, m: $.Slice<number>, key: $.VarRef<Uint8Array> | null): void {
	let h: MAC | $.VarRef<MAC> | null = New(key)
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as MAC).Write(m) : MAC.prototype.Write.call(h, m))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as MAC).Sum($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0)) : MAC.prototype.Sum.call(h, $.goSlice($.pointerValue<Uint8Array>(out), undefined, 0)))
}

export function Verify(mac: $.VarRef<Uint8Array> | null, m: $.Slice<number>, key: $.VarRef<Uint8Array> | null): boolean {
	let tmp: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	Sum(tmp, m, key)
	return subtle.ConstantTimeCompare($.goSlice(tmp.value, undefined, undefined), $.goSlice($.pointerValue<Uint8Array>(mac), undefined, undefined)) == 1
}

export function New(key: $.VarRef<Uint8Array> | null): MAC | $.VarRef<MAC> | null {
	let m: MAC | $.VarRef<MAC> | null = new MAC()
	__goscript_sum_generic.initialize(key, $.fieldRef($.pointerValue<MAC>(m).mac.macGeneric._fields, "macState"))
	return m
}
