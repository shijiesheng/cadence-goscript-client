// Generated file based on xchacha20poly1305.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as errors from "@goscript/errors/index.js"

import * as chacha20 from "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"

import * as __goscript_chacha20poly1305 from "./chacha20poly1305.gs.ts"

import * as __goscript_chacha20poly1305_generic from "./chacha20poly1305_generic.gs.ts"

import * as __goscript_chacha20poly1305_noasm from "./chacha20poly1305_noasm.gs.ts"

import * as __goscript_fips140only_go1_26 from "./fips140only_go1.26.gs.ts"
import "@goscript/crypto/cipher/index.js"
import "@goscript/errors/index.js"
import "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"
import "./chacha20poly1305.gs.ts"
import "./chacha20poly1305_generic.gs.ts"
import "./chacha20poly1305_noasm.gs.ts"
import "./fips140only_go1.26.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/chacha20poly1305", ["chacha20poly1305.xchacha20poly1305"])

export class xchacha20poly1305 {
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

	public clone(): xchacha20poly1305 {
		return new xchacha20poly1305(this, true)
	}

	public __goscriptAssign(source: xchacha20poly1305): void {
		const target = this._fields
		const values = source._fields
		target.key = $.assignFieldValue(target.key, values.key, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	public NonceSize(): number {
		return 24
	}

	public Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const x: xchacha20poly1305 | $.VarRef<xchacha20poly1305> | null = this;
		if ($.sliceLen(nonce) != 24) {
			$.panic("chacha20poly1305: bad nonce length passed to Open")
		}
		if ($.sliceLen(ciphertext) < 16) {
			return [null, __goscript_chacha20poly1305.errOpen]
		}
		if ($.uint64($.sliceLen(ciphertext)) > 274877906896n) {
			$.panic("chacha20poly1305: ciphertext too large")
		}

		let c: __goscript_chacha20poly1305.chacha20poly1305 | $.VarRef<__goscript_chacha20poly1305.chacha20poly1305> | null = new __goscript_chacha20poly1305.chacha20poly1305()
		let __goscriptTuple0: any = chacha20.HChaCha20($.goSlice($.pointerValue<xchacha20poly1305>(x).key, undefined, undefined), $.goSlice(nonce, 0, 16))
		let hKey: $.Slice<number> = __goscriptTuple0[0]
		$.copy($.goSlice($.pointerValue<__goscript_chacha20poly1305.chacha20poly1305>(c).key, undefined, undefined), hKey)

		// The first 4 bytes of the final nonce are unused counter space.
		let cNonce: $.Slice<number> = $.makeSlice<number>(12, undefined, "byte")
		$.copyByteRanges(cNonce, 4, 12, nonce, 16, 24)

		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_chacha20poly1305.chacha20poly1305).open(dst, $.goSlice(cNonce, undefined, undefined), ciphertext, additionalData) : __goscript_chacha20poly1305.chacha20poly1305.prototype.open.call(c, dst, $.goSlice(cNonce, undefined, undefined), ciphertext, additionalData))
	}

	public Overhead(): number {
		return 16
	}

	public Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): $.Slice<number> {
		const x: xchacha20poly1305 | $.VarRef<xchacha20poly1305> | null = this;
		if ($.sliceLen(nonce) != 24) {
			$.panic("chacha20poly1305: bad nonce length passed to Seal")
		}

		// XChaCha20-Poly1305 technically supports a 64-bit counter, so there is no
		// size limit. However, since we reuse the ChaCha20-Poly1305 implementation,
		// the second half of the counter is not available. This is unlikely to be
		// an issue because the cipher.AEAD API requires the entire message to be in
		// memory, and the counter overflows at 256 GB.
		if ($.uint64($.sliceLen(plaintext)) > 274877906880n) {
			$.panic("chacha20poly1305: plaintext too large")
		}

		let c: __goscript_chacha20poly1305.chacha20poly1305 | $.VarRef<__goscript_chacha20poly1305.chacha20poly1305> | null = new __goscript_chacha20poly1305.chacha20poly1305()
		let __goscriptTuple1: any = chacha20.HChaCha20($.goSlice($.pointerValue<xchacha20poly1305>(x).key, undefined, undefined), $.goSlice(nonce, 0, 16))
		let hKey: $.Slice<number> = __goscriptTuple1[0]
		$.copy($.goSlice($.pointerValue<__goscript_chacha20poly1305.chacha20poly1305>(c).key, undefined, undefined), hKey)

		// The first 4 bytes of the final nonce are unused counter space.
		let cNonce: $.Slice<number> = $.makeSlice<number>(12, undefined, "byte")
		$.copyByteRanges(cNonce, 4, 12, nonce, 16, 24)

		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_chacha20poly1305.chacha20poly1305).seal(dst, $.goSlice(cNonce, undefined, undefined), plaintext, additionalData) : __goscript_chacha20poly1305.chacha20poly1305.prototype.seal.call(c, dst, $.goSlice(cNonce, undefined, undefined), plaintext, additionalData))
	}

	static __typeInfo = $.registerStructType(
		"chacha20poly1305.xchacha20poly1305",
		() => new xchacha20poly1305(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		xchacha20poly1305,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20poly1305" })]
	)
}

export function NewX(key: $.Slice<number>): [cipher.AEAD | null, $.GoError] {
	if (__goscript_fips140only_go1_26.fips140Enforced()) {
		return [null, errors.New("chacha20poly1305: use of ChaCha20Poly1305 is not allowed in FIPS 140-only mode")]
	}
	if ($.sliceLen(key) != 32) {
		return [null, errors.New("chacha20poly1305: bad key length")]
	}
	let ret: xchacha20poly1305 | $.VarRef<xchacha20poly1305> | null = new xchacha20poly1305()
	$.copy($.goSlice($.pointerValue<xchacha20poly1305>(ret).key, undefined, undefined), key)
	return [$.interfaceValue<cipher.AEAD | null>(ret, "*chacha20poly1305.xchacha20poly1305", /* @__PURE__ */ $.pointerType("chacha20poly1305.xchacha20poly1305")), null]
}
