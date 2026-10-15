// Generated file based on cbc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as __goscript_aes from "./aes.gs.ts"

import * as __goscript_aes_noasm from "./aes_noasm.gs.ts"

import * as __goscript_cbc_noasm from "./cbc_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "./aes.gs.ts"
import "./aes_noasm.gs.ts"
import "./cbc_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes", ["aes.CBCEncrypter", "aes.CBCDecrypter"])

export class CBCEncrypter {
	public get b(): __goscript_aes.Block {
		return this._fields.b
	}

	public set b(value: __goscript_aes.Block) {
		this._fields.b = value
	}

	public get iv(): Uint8Array {
		return this._fields.iv
	}

	public set iv(value: Uint8Array) {
		this._fields.iv = value
	}

	public _fields: {
		b: __goscript_aes.Block
		iv: Uint8Array
	}

	constructor(init?: Partial<{b?: __goscript_aes.Block, iv?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			b: init?.b ? init.b.clone() : new __goscript_aes.Block(undefined, true),
			iv: init?.iv !== undefined ? $.cloneArrayValue(init.iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CBCEncrypter {
		return new CBCEncrypter(this, true)
	}

	public __goscriptAssign(source: CBCEncrypter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.b, values.b)
		target.iv = $.assignFieldValue(target.iv, values.iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public BlockSize(): number {
		const c: CBCEncrypter | $.VarRef<CBCEncrypter> | null = this;
		return 16
	}

	public CryptBlocks(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: CBCEncrypter | $.VarRef<CBCEncrypter> | null = this;
		const c$: CBCEncrypter = c == null ? $.pointerTarget<CBCEncrypter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CBCEncrypter>(c)
		if (($.sliceLen(src) % 16) != 0) {
			$.panic("crypto/cipher: input not full blocks")
		}
		if ($.sliceLen(dst) < $.sliceLen(src)) {
			$.panic("crypto/cipher: output smaller than input")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, $.sliceLen(src)), src)) {
			$.panic("crypto/cipher: invalid buffer overlap")
		}
		fips140.RecordApproved()
		if ($.sliceLen(src) == 0) {
			return
		}
		__goscript_cbc_noasm.cryptBlocksEnc($.fieldRef((c$ as CBCEncrypter)._fields, "b"), $.fieldRef((c$ as CBCEncrypter)._fields, "iv"), dst, src)
	}

	public SetIV(iv: $.Slice<number>): void {
		const x: CBCEncrypter | $.VarRef<CBCEncrypter> | null = this;
		const x$: CBCEncrypter = x == null ? $.pointerTarget<CBCEncrypter>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<CBCEncrypter>(x)
		if ($.sliceLen(iv) != 16) {
			$.panic("cipher: incorrect length IV")
		}
		$.copy($.goSlice((x$ as CBCEncrypter).iv, undefined, undefined), iv)
	}

	static __typeInfo = $.registerStructType(
		"aes.CBCEncrypter",
		() => new CBCEncrypter(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("CryptBlocks", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("SetIV", [["iv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		CBCEncrypter,
		() => [/* @__PURE__ */ $.structField("b", "aes.Block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("iv", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [1], 488, false, { pkgPath: "crypto/internal/fips140/aes" })]
	)
}

export class CBCDecrypter {
	public get b(): __goscript_aes.Block {
		return this._fields.b
	}

	public set b(value: __goscript_aes.Block) {
		this._fields.b = value
	}

	public get iv(): Uint8Array {
		return this._fields.iv
	}

	public set iv(value: Uint8Array) {
		this._fields.iv = value
	}

	public _fields: {
		b: __goscript_aes.Block
		iv: Uint8Array
	}

	constructor(init?: Partial<{b?: __goscript_aes.Block, iv?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			b: init?.b ? init.b.clone() : new __goscript_aes.Block(undefined, true),
			iv: init?.iv !== undefined ? $.cloneArrayValue(init.iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CBCDecrypter {
		return new CBCDecrypter(this, true)
	}

	public __goscriptAssign(source: CBCDecrypter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.b, values.b)
		target.iv = $.assignFieldValue(target.iv, values.iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public BlockSize(): number {
		const c: CBCDecrypter | $.VarRef<CBCDecrypter> | null = this;
		return 16
	}

	public CryptBlocks(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: CBCDecrypter | $.VarRef<CBCDecrypter> | null = this;
		const c$: CBCDecrypter = c == null ? $.pointerTarget<CBCDecrypter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CBCDecrypter>(c)
		if (($.sliceLen(src) % 16) != 0) {
			$.panic("crypto/cipher: input not full blocks")
		}
		if ($.sliceLen(dst) < $.sliceLen(src)) {
			$.panic("crypto/cipher: output smaller than input")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, $.sliceLen(src)), src)) {
			$.panic("crypto/cipher: invalid buffer overlap")
		}
		fips140.RecordApproved()
		if ($.sliceLen(src) == 0) {
			return
		}
		__goscript_cbc_noasm.cryptBlocksDec($.fieldRef((c$ as CBCDecrypter)._fields, "b"), $.fieldRef((c$ as CBCDecrypter)._fields, "iv"), dst, src)
	}

	public SetIV(iv: $.Slice<number>): void {
		const x: CBCDecrypter | $.VarRef<CBCDecrypter> | null = this;
		const x$: CBCDecrypter = x == null ? $.pointerTarget<CBCDecrypter>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<CBCDecrypter>(x)
		if ($.sliceLen(iv) != 16) {
			$.panic("cipher: incorrect length IV")
		}
		$.copy($.goSlice((x$ as CBCDecrypter).iv, undefined, undefined), iv)
	}

	static __typeInfo = $.registerStructType(
		"aes.CBCDecrypter",
		() => new CBCDecrypter(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("CryptBlocks", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("SetIV", [["iv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		CBCDecrypter,
		() => [/* @__PURE__ */ $.structField("b", "aes.Block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("iv", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [1], 488, false, { pkgPath: "crypto/internal/fips140/aes" })]
	)
}

export function NewCBCEncrypter(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, iv: Uint8Array): CBCEncrypter | $.VarRef<CBCEncrypter> | null {
	return new CBCEncrypter({b: $.pointerValue<__goscript_aes.Block>(b), iv: $.cloneArrayValue(iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))})
}

export function cryptBlocksEncGeneric(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, civ: $.VarRef<Uint8Array> | null, dst: $.Slice<number>, src: $.Slice<number>): void {
	let iv: $.Slice<number> = $.goSlice($.pointerValue<Uint8Array>(civ), undefined, undefined)
	while ($.sliceLen(src) > 0) {
		// Write the xor to dst, then encrypt in place.
		subtle.XORBytes($.goSlice(dst, undefined, 16), $.goSlice(src, undefined, 16), iv)
		__goscript_aes_noasm.encryptBlock(b, $.goSlice(dst, undefined, 16), $.goSlice(dst, undefined, 16))

		// Move to the next block with this block as the next iv.
		iv = $.goSlice(dst, undefined, 16)
		src = $.goSlice(src, 16, undefined)
		dst = $.goSlice(dst, 16, undefined)
	}

	// Save the iv for the next CryptBlocks call.
	$.copy($.goSlice($.pointerValue<Uint8Array>(civ), undefined, undefined), iv)
}

export function NewCBCDecrypter(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, iv: Uint8Array): CBCDecrypter | $.VarRef<CBCDecrypter> | null {
	return new CBCDecrypter({b: $.pointerValue<__goscript_aes.Block>(b), iv: $.cloneArrayValue(iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))})
}

export function cryptBlocksDecGeneric(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, civ: $.VarRef<Uint8Array> | null, dst: $.Slice<number>, src: $.Slice<number>): void {
	// For each block, we need to xor the decrypted data with the previous
	// block's ciphertext (the iv). To avoid making a copy each time, we loop
	// over the blocks backwards.
	let end = $.sliceLen(src)
	let start = end - 16
	let prev = start - 16

	// Copy the last block of ciphertext as the IV of the next call.
	let iv = $.cloneArrayValue($.pointerValue<Uint8Array>(civ), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	$.copy($.goSlice($.pointerValue<Uint8Array>(civ), undefined, undefined), $.goSlice(src, start, end))

	while (start >= 0) {
		__goscript_aes_noasm.decryptBlock(b, $.goSlice(dst, start, end), $.goSlice(src, start, end))

		if (start > 0) {
			subtle.XORBytes($.goSlice(dst, start, end), $.goSlice(dst, start, end), $.goSlice(src, prev, start))
		} else {
			// The first block is special because it uses the saved iv.
			subtle.XORBytes($.goSlice(dst, start, end), $.goSlice(dst, start, end), $.goSlice(iv, undefined, undefined))
		}

		end = end - (16)
		start = start - (16)
		prev = prev - (16)
	}
}
