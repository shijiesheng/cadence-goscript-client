// Generated file based on cmac.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"

$.registerTypePackagePath("crypto/internal/fips140/aes/gcm", ["gcm.CMAC"])

export class CMAC {
	public get b(): aes.Block {
		return this._fields.b
	}

	public set b(value: aes.Block) {
		this._fields.b = value
	}

	public get k1(): Uint8Array {
		return this._fields.k1
	}

	public set k1(value: Uint8Array) {
		this._fields.k1 = value
	}

	public get k2(): Uint8Array {
		return this._fields.k2
	}

	public set k2(value: Uint8Array) {
		this._fields.k2 = value
	}

	public _fields: {
		b: aes.Block
		k1: Uint8Array
		k2: Uint8Array
	}

	constructor(init?: Partial<{b?: aes.Block, k1?: Uint8Array, k2?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			b: init?.b ? init.b.clone() : new aes.Block(undefined, true),
			k1: init?.k1 !== undefined ? $.cloneArrayValue(init.k1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			k2: init?.k2 !== undefined ? $.cloneArrayValue(init.k2, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CMAC {
		return new CMAC(this, true)
	}

	public __goscriptAssign(source: CMAC): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.b, values.b)
		target.k1 = $.assignFieldValue(target.k1, values.k1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		target.k2 = $.assignFieldValue(target.k2, values.k2, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public MAC(m: $.Slice<number>): Uint8Array {
		const c: CMAC | $.VarRef<CMAC> | null = this;
		const c$: CMAC = c == null ? $.pointerTarget<CMAC>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CMAC>(c)
		fips140.RecordApproved();
		;(c$ as CMAC).b
		let x: Uint8Array = $.arrayValue(new Uint8Array(16))
		if ($.sliceLen(m) == 0) {
			// Special-cased as a single empty partial final block.
			x = $.cloneArrayValue((c$ as CMAC).k2, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
			const __goscriptOperand0 = $.sliceLen(m)
			x[__goscriptOperand0] = x[__goscriptOperand0] ^ (0b10000000)
			aes.EncryptBlockInternal($.fieldRef((c$ as CMAC)._fields, "b"), $.goSlice(x, undefined, undefined), $.goSlice(x, undefined, undefined))
			return $.cloneArrayValue(x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		}
		while ($.sliceLen(m) >= 16) {
			subtle.XORBytes($.goSlice(x, undefined, undefined), $.goSlice(m, undefined, aes.BlockSize), $.goSlice(x, undefined, undefined))
			if ($.sliceLen(m) == 16) {
				// Final complete block.
				subtle.XORBytes($.goSlice(x, undefined, undefined), $.goSlice((c$ as CMAC).k1, undefined, undefined), $.goSlice(x, undefined, undefined))
			}
			aes.EncryptBlockInternal($.fieldRef((c$ as CMAC)._fields, "b"), $.goSlice(x, undefined, undefined), $.goSlice(x, undefined, undefined))
			m = $.goSlice(m, aes.BlockSize, undefined)
		}
		if ($.sliceLen(m) > 0) {
			// Final incomplete block.
			subtle.XORBytes($.goSlice(x, undefined, undefined), m, $.goSlice(x, undefined, undefined))
			subtle.XORBytes($.goSlice(x, undefined, undefined), $.goSlice((c$ as CMAC).k2, undefined, undefined), $.goSlice(x, undefined, undefined))
			const __goscriptOperand1 = $.sliceLen(m)
			x[__goscriptOperand1] = x[__goscriptOperand1] ^ (0b10000000)
			aes.EncryptBlockInternal($.fieldRef((c$ as CMAC)._fields, "b"), $.goSlice(x, undefined, undefined), $.goSlice(x, undefined, undefined))
		}
		return $.cloneArrayValue(x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public deriveSubkeys(): void {
		let c: CMAC | $.VarRef<CMAC> | null = this;
		const c$: CMAC = c == null ? $.pointerTarget<CMAC>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CMAC>(c)
		aes.EncryptBlockInternal($.fieldRef((c$ as CMAC)._fields, "b"), $.goSlice((c$ as CMAC).k1, undefined, undefined), $.goSlice((c$ as CMAC).k1, undefined, undefined))
		let msb = shiftLeft($.fieldRef((c$ as CMAC)._fields, "k1"))
		const __goscriptOperand2 = $.len((c$ as CMAC).k1) - 1;
		;(c$ as CMAC).k1[__goscriptOperand2] = (c$ as CMAC).k1[__goscriptOperand2] ^ ($.uint(msb * 0b10000111, 8));

		;(c$ as CMAC).k2 = $.cloneArrayValue((c$ as CMAC).k1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		msb = shiftLeft($.fieldRef((c$ as CMAC)._fields, "k2"))
		const __goscriptOperand3 = $.len((c$ as CMAC).k2) - 1;
		;(c$ as CMAC).k2[__goscriptOperand3] = (c$ as CMAC).k2[__goscriptOperand3] ^ ($.uint(msb * 0b10000111, 8))
	}

	static __typeInfo = $.registerStructType(
		"gcm.CMAC",
		() => new CMAC(),
		() => [$.methodSignature("MAC", [["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)], true), $.methodSignature("deriveSubkeys", [], [], true)],
		CMAC,
		() => [/* @__PURE__ */ $.structField("b", "aes.Block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("k1", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [1], 488, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("k2", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [2], 504, false, { pkgPath: "crypto/internal/fips140/aes/gcm" })]
	)
}

export function NewCMAC(b: aes.Block | $.VarRef<aes.Block> | null): CMAC | $.VarRef<CMAC> | null {
	let c: CMAC | $.VarRef<CMAC> | null = new CMAC({b: $.pointerValue<aes.Block>(b)})
	void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CMAC).deriveSubkeys() : CMAC.prototype.deriveSubkeys.call(c))
	return c
}

export function shiftLeft(x: $.VarRef<Uint8Array> | null): number {
	let msb: number = 0
	for (let i = 15; i >= 0; i--) {
		let __goscriptAssign0_0: number = $.uint($.uintShr($.arrayIndex($.pointerValue<Uint8Array>(x), i), 7, 8), 8)
		let __goscriptAssign0_1: number = $.uint(((($.arrayIndex($.pointerValue<Uint8Array>(x), i) << 1) & 0xff)) | msb, 8)
		msb = __goscriptAssign0_0
		$.pointerValue<Uint8Array>(x)[i] = __goscriptAssign0_1
	}
	return msb
}
