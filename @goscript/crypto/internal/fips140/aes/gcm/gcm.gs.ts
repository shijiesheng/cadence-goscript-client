// Generated file based on gcm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_gcm_noasm from "./gcm_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/errors/index.js"
import "./gcm_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes/gcm", ["gcm.GCM"])

export class GCM {
	public get cipher(): aes.Block {
		return this._fields.cipher
	}

	public set cipher(value: aes.Block) {
		this._fields.cipher = value
	}

	public get nonceSize(): number {
		return this._fields.nonceSize
	}

	public set nonceSize(value: number) {
		this._fields.nonceSize = value
	}

	public get tagSize(): number {
		return this._fields.tagSize
	}

	public set tagSize(value: number) {
		this._fields.tagSize = value
	}

	public get gcmPlatformData(): __goscript_gcm_noasm.gcmPlatformData {
		return this._fields.gcmPlatformData
	}

	public set gcmPlatformData(value: __goscript_gcm_noasm.gcmPlatformData) {
		this._fields.gcmPlatformData = value
	}

	public _fields: {
		cipher: aes.Block
		nonceSize: number
		tagSize: number
		gcmPlatformData: __goscript_gcm_noasm.gcmPlatformData
	}

	constructor(init?: Partial<{cipher?: aes.Block, nonceSize?: number, tagSize?: number, gcmPlatformData?: __goscript_gcm_noasm.gcmPlatformData}>, __goscriptValue?: boolean) {
		this._fields = {
			cipher: init?.cipher ? init.cipher.clone() : new aes.Block(undefined, true),
			nonceSize: init?.nonceSize ?? (0 as number),
			tagSize: init?.tagSize ?? (0 as number),
			gcmPlatformData: init?.gcmPlatformData ? init.gcmPlatformData.clone() : new __goscript_gcm_noasm.gcmPlatformData(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GCM {
		return new GCM(this, true)
	}

	public __goscriptAssign(source: GCM): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.cipher, values.cipher)
		target.nonceSize = values.nonceSize
		target.tagSize = values.tagSize
		$.assignStruct(target.gcmPlatformData, values.gcmPlatformData)
	}

	public NonceSize(): number {
		const g: GCM | $.VarRef<GCM> | null = this;
		return $.pointerValue<GCM>(g).nonceSize
	}

	public Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, data: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const g: GCM | $.VarRef<GCM> | null = this;
		const g$: GCM = g == null ? $.pointerTarget<GCM>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCM>(g)
		if ($.sliceLen(nonce) != (g$ as GCM).nonceSize) {
			$.panic("crypto/cipher: incorrect nonce length given to GCM")
		}
		// Sanity check to prevent the authentication from always succeeding if an
		// implementation leaves tagSize uninitialized, for example.
		if ((g$ as GCM).tagSize < 12) {
			$.panic("crypto/cipher: incorrect GCM tag size")
		}

		if ($.sliceLen(ciphertext) < (g$ as GCM).tagSize) {
			return [null, errOpen]
		}
		if ($.uint64($.sliceLen(ciphertext)) > ($.uint64Add(68719476704n, $.uint64((g$ as GCM).tagSize)))) {
			return [null, errOpen]
		}

		let __goscriptTuple0: any = sliceForAppend(dst, $.sliceLen(ciphertext) - (g$ as GCM).tagSize)
		let ret: $.Slice<number> = __goscriptTuple0[0]
		let out: $.Slice<number> = __goscriptTuple0[1]
		if (alias.InexactOverlap(out, ciphertext)) {
			$.panic("crypto/cipher: invalid buffer overlap of output and input")
		}
		if (alias.AnyOverlap(out, data)) {
			$.panic("crypto/cipher: invalid buffer overlap of output and additional data")
		}

		fips140.RecordApproved()
		{
			let err = __goscript_gcm_noasm.open(out, g, nonce, ciphertext, data)
			if (err != null) {
				// We sometimes decrypt and authenticate concurrently, so we overwrite
				// dst in the event of a tag mismatch. To be consistent across platforms
				// and to avoid releasing unauthenticated plaintext, we clear the buffer
				// in the event of an error.
				$.clear(out)
				return [null, err]
			}
		}
		return [ret, null]
	}

	public Overhead(): number {
		const g: GCM | $.VarRef<GCM> | null = this;
		return $.pointerValue<GCM>(g).tagSize
	}

	public Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, data: $.Slice<number>): $.Slice<number> {
		const g: GCM | $.VarRef<GCM> | null = this;
		fips140.RecordNonApproved()
		return (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as GCM).sealAfterIndicator(dst, nonce, plaintext, data) : GCM.prototype.sealAfterIndicator.call(g, dst, nonce, plaintext, data))
	}

	public sealAfterIndicator(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, data: $.Slice<number>): $.Slice<number> {
		const g: GCM | $.VarRef<GCM> | null = this;
		const g$: GCM = g == null ? $.pointerTarget<GCM>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCM>(g)
		if ($.sliceLen(nonce) != (g$ as GCM).nonceSize) {
			$.panic("crypto/cipher: incorrect nonce length given to GCM")
		}
		if ((g$ as GCM).nonceSize == 0) {
			$.panic("crypto/cipher: incorrect GCM nonce size")
		}
		if ($.uint64($.sliceLen(plaintext)) > 68719476704n) {
			$.panic("crypto/cipher: message too large for GCM")
		}

		let __goscriptTuple1: any = sliceForAppend(dst, $.sliceLen(plaintext) + (g$ as GCM).tagSize)
		let ret: $.Slice<number> = __goscriptTuple1[0]
		let out: $.Slice<number> = __goscriptTuple1[1]
		if (alias.InexactOverlap(out, plaintext)) {
			$.panic("crypto/cipher: invalid buffer overlap of output and input")
		}
		if (alias.AnyOverlap(out, data)) {
			$.panic("crypto/cipher: invalid buffer overlap of output and additional data")
		}

		__goscript_gcm_noasm.seal(out, g, nonce, plaintext, data)
		return ret
	}

	static __typeInfo = $.registerStructType(
		"gcm.GCM",
		() => new GCM(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("sealAfterIndicator", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		GCM,
		() => [/* @__PURE__ */ $.structField("cipher", "aes.Block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("nonceSize", /* @__PURE__ */ $.basicType("int"), [1], 488, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("tagSize", /* @__PURE__ */ $.basicType("int"), [2], 496, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("gcmPlatformData", "gcm.gcmPlatformData", [3], 504, false, { pkgPath: "crypto/internal/fips140/aes/gcm", anonymous: true })]
	)
}

export const gcmBlockSize: number = 16

export const gcmTagSize: number = 16

export const gcmMinimumTagSize: number = 12

export const gcmStandardNonceSize: number = 12

export function New(cipher: aes.Block | $.VarRef<aes.Block> | null, nonceSize: number, tagSize: number): [GCM | $.VarRef<GCM> | null, $.GoError] {
	// This function is outlined to let the allocation happen on the parent stack.
	return newGCM(new GCM(), cipher, nonceSize, tagSize)
}

export function newGCM(g: GCM | $.VarRef<GCM> | null, cipher: aes.Block | $.VarRef<aes.Block> | null, nonceSize: number, tagSize: number): [GCM | $.VarRef<GCM> | null, $.GoError] {
	const g$: GCM = g == null ? $.pointerTarget<GCM>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCM>(g)
	if ((tagSize < 12) || (tagSize > 16)) {
		return [null, errors.New("cipher: incorrect tag size given to GCM")]
	}
	if (nonceSize <= 0) {
		return [null, errors.New("cipher: the nonce can't have zero length")]
	}
	if ((cipher !== null && (cipher as any).__isVarRef !== true && (cipher as any).__goValue === undefined ? ((cipher as any) as aes.Block).BlockSize() : aes.Block.prototype.BlockSize.call(cipher)) != 16) {
		return [null, errors.New("cipher: NewGCM requires 128-bit block cipher")]
	}
	$.assignStruct((g$ as GCM).cipher, $.pointerValue<aes.Block>(cipher));
	;(g$ as GCM).nonceSize = nonceSize;
	;(g$ as GCM).tagSize = tagSize
	__goscript_gcm_noasm.initGCM(g)
	return [g, null]
}

export let errOpen: $.GoError = errors.New("cipher: message authentication failed")

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
