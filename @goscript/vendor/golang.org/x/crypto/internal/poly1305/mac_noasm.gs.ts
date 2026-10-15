// Generated file based on mac_noasm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_sum_generic from "./sum_generic.gs.ts"
import "./sum_generic.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/internal/poly1305", ["poly1305.mac"])

export class mac {
	public get macGeneric(): __goscript_sum_generic.macGeneric {
		return this._fields.macGeneric
	}

	public set macGeneric(value: __goscript_sum_generic.macGeneric) {
		this._fields.macGeneric = value
	}

	public _fields: {
		macGeneric: __goscript_sum_generic.macGeneric
	}

	constructor(init?: Partial<{macGeneric?: __goscript_sum_generic.macGeneric}>, __goscriptValue?: boolean) {
		this._fields = {
			macGeneric: init?.macGeneric ? init.macGeneric.clone() : new __goscript_sum_generic.macGeneric(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mac {
		return new mac(this, true)
	}

	public __goscriptAssign(source: mac): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.macGeneric, values.macGeneric)
	}

	public Sum(out: any): any {
		return $.pointerValue<__goscript_sum_generic.macGeneric>(this.macGeneric).Sum(out)
	}

	public Write(p: any): any {
		return $.pointerValue<__goscript_sum_generic.macGeneric>(this.macGeneric).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"poly1305.mac",
		() => new mac(),
		() => [$.methodSignature("Sum", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		mac,
		() => [/* @__PURE__ */ $.structField("macGeneric", "poly1305.macGeneric", [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305", anonymous: true })]
	)
}
