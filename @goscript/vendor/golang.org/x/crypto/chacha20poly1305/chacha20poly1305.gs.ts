// Generated file based on chacha20poly1305.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as errors from "@goscript/errors/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as chacha20 from "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"

import * as alias from "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"

import * as poly1305 from "@goscript/vendor/golang.org/x/crypto/internal/poly1305/index.js"

import * as __goscript_chacha20poly1305_generic from "./chacha20poly1305_generic.gs.ts"

import * as __goscript_chacha20poly1305_noasm from "./chacha20poly1305_noasm.gs.ts"

import * as __goscript_fips140only_go1_26 from "./fips140only_go1.26.gs.ts"
import "@goscript/crypto/cipher/index.js"
import "@goscript/errors/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"
import "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"
import "@goscript/vendor/golang.org/x/crypto/internal/poly1305/index.js"
import "./chacha20poly1305_generic.gs.ts"
import "./chacha20poly1305_noasm.gs.ts"
import "./fips140only_go1.26.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/chacha20poly1305", ["chacha20poly1305.chacha20poly1305"])

export class chacha20poly1305 {
	public get key(): Uint8Array {
		return this._fields.key
	}

	public set key(value: Uint8Array) {
		this._fields.key = value
	}

	public _fields: {
		key: Uint8Array
	}

	constructor(init?: Partial<{key?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key !== undefined ? $.cloneArrayValue(init.key, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chacha20poly1305 {
		return new chacha20poly1305(this, true)
	}

	public __goscriptAssign(source: chacha20poly1305): void {
		const target = this._fields
		const values = source._fields
		target.key = $.assignFieldValue(target.key, values.key, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	public NonceSize(): number {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		return 12
	}

	public Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		if ($.sliceLen(nonce) != 12) {
			$.panic("chacha20poly1305: bad nonce length passed to Open")
		}
		if ($.sliceLen(ciphertext) < 16) {
			return [null, errOpen]
		}
		if ($.uint64($.sliceLen(ciphertext)) > 274877906896n) {
			$.panic("chacha20poly1305: ciphertext too large")
		}

		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chacha20poly1305).open(dst, nonce, ciphertext, additionalData) : chacha20poly1305.prototype.open.call(c, dst, nonce, ciphertext, additionalData))
	}

	public Overhead(): number {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		return 16
	}

	public Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): $.Slice<number> {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		if ($.sliceLen(nonce) != 12) {
			$.panic("chacha20poly1305: bad nonce length passed to Seal")
		}

		if ($.uint64($.sliceLen(plaintext)) > 274877906880n) {
			$.panic("chacha20poly1305: plaintext too large")
		}

		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chacha20poly1305).seal(dst, nonce, plaintext, additionalData) : chacha20poly1305.prototype.seal.call(c, dst, nonce, plaintext, additionalData))
	}

	public open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chacha20poly1305).openGeneric(dst, nonce, ciphertext, additionalData) : chacha20poly1305.prototype.openGeneric.call(c, dst, nonce, ciphertext, additionalData))
	}

	public openGeneric(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		let tag: $.Slice<number> = $.goSlice(ciphertext, $.sliceLen(ciphertext) - 16, undefined)
		ciphertext = $.goSlice(ciphertext, undefined, $.sliceLen(ciphertext) - 16)

		let polyKey: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		let __goscriptTuple0: any = chacha20.NewUnauthenticatedCipher($.goSlice($.pointerValue<chacha20poly1305>(c).key, undefined, undefined), nonce)
		let s: chacha20.Cipher | $.VarRef<chacha20.Cipher> | null = __goscriptTuple0[0]
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).XORKeyStream($.goSlice(polyKey.value, undefined, undefined), $.goSlice(polyKey.value, undefined, undefined)) : chacha20.Cipher.prototype.XORKeyStream.call(s, $.goSlice(polyKey.value, undefined, undefined), $.goSlice(polyKey.value, undefined, undefined)))
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).SetCounter(1) : chacha20.Cipher.prototype.SetCounter.call(s, 1))

		let p: poly1305.MAC | $.VarRef<poly1305.MAC> | null = poly1305.New(polyKey)
		__goscript_chacha20poly1305_generic.writeWithPadding(p, additionalData)
		__goscript_chacha20poly1305_generic.writeWithPadding(p, ciphertext)
		__goscript_chacha20poly1305_generic.writeUint64(p, $.sliceLen(additionalData))
		__goscript_chacha20poly1305_generic.writeUint64(p, $.sliceLen(ciphertext))

		let __goscriptTuple1: any = sliceForAppend(dst, $.sliceLen(ciphertext))
		let ret: $.Slice<number> = __goscriptTuple1[0]
		let out: $.Slice<number> = __goscriptTuple1[1]
		if (alias.InexactOverlap(out, ciphertext)) {
			$.panic("chacha20poly1305: invalid buffer overlap of output and input")
		}
		if (alias.AnyOverlap(out, additionalData)) {
			$.panic("chacha20poly1305: invalid buffer overlap of output and additional data")
		}
		if (!(p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as poly1305.MAC).Verify(tag) : poly1305.MAC.prototype.Verify.call(p, tag))) {
			for (let __goscriptRangeTarget0 = out, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				$.sliceElems(out!)[$.sliceSlot(out!, i)] = 0
			}
			return [null, errOpen]
		}

		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).XORKeyStream(out, ciphertext) : chacha20.Cipher.prototype.XORKeyStream.call(s, out, ciphertext))
		return [ret, null]
	}

	public seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): $.Slice<number> {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chacha20poly1305).sealGeneric(dst, nonce, plaintext, additionalData) : chacha20poly1305.prototype.sealGeneric.call(c, dst, nonce, plaintext, additionalData))
	}

	public sealGeneric(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): $.Slice<number> {
		const c: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = this;
		let __goscriptTuple2: any = sliceForAppend(dst, $.sliceLen(plaintext) + poly1305.TagSize)
		let ret: $.Slice<number> = __goscriptTuple2[0]
		let out: $.Slice<number> = __goscriptTuple2[1]
		let ciphertext: $.Slice<number> = $.goSlice(out, undefined, $.sliceLen(plaintext))
		let tag: $.Slice<number> = $.goSlice(out, $.sliceLen(plaintext), undefined)
		if (alias.InexactOverlap(out, plaintext)) {
			$.panic("chacha20poly1305: invalid buffer overlap of output and input")
		}
		if (alias.AnyOverlap(out, additionalData)) {
			$.panic("chacha20poly1305: invalid buffer overlap of output and additional data")
		}
		// New returns a ChaCha20-Poly1305 AEAD that uses the given 256-bit key.
		let polyKey: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		let __goscriptTuple3: any = chacha20.NewUnauthenticatedCipher($.goSlice($.pointerValue<chacha20poly1305>(c).key, undefined, undefined), nonce)
		let s: chacha20.Cipher | $.VarRef<chacha20.Cipher> | null = __goscriptTuple3[0]
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).XORKeyStream($.goSlice(polyKey.value, undefined, undefined), $.goSlice(polyKey.value, undefined, undefined)) : chacha20.Cipher.prototype.XORKeyStream.call(s, $.goSlice(polyKey.value, undefined, undefined), $.goSlice(polyKey.value, undefined, undefined)))
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).SetCounter(1) : chacha20.Cipher.prototype.SetCounter.call(s, 1))
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as chacha20.Cipher).XORKeyStream(ciphertext, plaintext) : chacha20.Cipher.prototype.XORKeyStream.call(s, ciphertext, plaintext))

		let p: poly1305.MAC | $.VarRef<poly1305.MAC> | null = poly1305.New(polyKey)
		__goscript_chacha20poly1305_generic.writeWithPadding(p, additionalData)
		__goscript_chacha20poly1305_generic.writeWithPadding(p, ciphertext)
		__goscript_chacha20poly1305_generic.writeUint64(p, $.sliceLen(additionalData))
		__goscript_chacha20poly1305_generic.writeUint64(p, $.sliceLen(plaintext))
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as poly1305.MAC).Sum($.goSlice(tag, undefined, 0)) : poly1305.MAC.prototype.Sum.call(p, $.goSlice(tag, undefined, 0)))

		return ret
	}

	static __typeInfo = $.registerStructType(
		"chacha20poly1305.chacha20poly1305",
		() => new chacha20poly1305(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("openGeneric", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("sealGeneric", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		chacha20poly1305,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20poly1305" })]
	)
}

export const KeySize: number = 32

export const NonceSize: number = 12

export const NonceSizeX: number = 24

export const Overhead: number = 16

export function New(key: $.Slice<number>): [cipher.AEAD | null, $.GoError] {
	if (__goscript_fips140only_go1_26.fips140Enforced()) {
		return [null, errors.New("chacha20poly1305: use of ChaCha20Poly1305 is not allowed in FIPS 140-only mode")]
	}
	if ($.sliceLen(key) != 32) {
		return [null, errors.New("chacha20poly1305: bad key length")]
	}
	let ret: chacha20poly1305 | $.VarRef<chacha20poly1305> | null = new chacha20poly1305()
	$.copy($.goSlice($.pointerValue<chacha20poly1305>(ret).key, undefined, undefined), key)
	return [$.interfaceValue<cipher.AEAD | null>(ret, "*chacha20poly1305.chacha20poly1305", /* @__PURE__ */ $.pointerType("chacha20poly1305.chacha20poly1305")), null]
}

export let errOpen: $.GoError = errors.New("chacha20poly1305: message authentication failed")

export function __goscript_set_errOpen(__goscriptValue: $.GoError): void {
	errOpen = __goscriptValue
}

export function sliceForAppend(_in: $.Slice<number>, n: number): [$.Slice<number>, $.Slice<number>] {
	let head: $.Slice<number> = null! as $.Slice<number>
	let tail: $.Slice<number> = null! as $.Slice<number>
	{
		let total = $.sliceLen(_in) + n
		if ($.cap(_in) >= total) {
			head = $.goSlice(_in, undefined, total)
		} else {
			head = $.makeSlice<number>(total, undefined, "byte")
			$.copy(head, _in)
		}
	}
	tail = $.goSlice(head, $.sliceLen(_in), undefined)
	return [head, tail]
}
