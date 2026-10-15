// Generated file based on gcm_generic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as __goscript_gcm from "./gcm.gs.ts"

import * as __goscript_gcm_noasm from "./gcm_noasm.gs.ts"

import * as __goscript_ghash from "./ghash.gs.ts"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "./gcm.gs.ts"
import "./gcm_noasm.gs.ts"
import "./ghash.gs.ts"

export function sealGeneric(out: $.Slice<number>, g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): void {
	const g$: __goscript_gcm.GCM = g == null ? $.pointerTarget<__goscript_gcm.GCM>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<__goscript_gcm.GCM>(g)
	let H: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	let counter: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	let tagMask: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	aes.EncryptBlockInternal($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), $.goSlice(H.value, undefined, undefined), $.goSlice(H.value, undefined, undefined))
	deriveCounterGeneric(H, counter, nonce)
	gcmCounterCryptGeneric($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), $.goSlice(tagMask.value, undefined, undefined), $.goSlice(tagMask.value, undefined, undefined), counter)

	gcmCounterCryptGeneric($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), out, plaintext, counter)

	let tag: Uint8Array = $.arrayValue(new Uint8Array(16))
	gcmAuthGeneric($.goSlice(tag, undefined, undefined), H, tagMask, $.goSlice(out, undefined, $.sliceLen(plaintext)), additionalData)
	$.copy($.goSlice(out, $.sliceLen(plaintext), undefined), $.goSlice(tag, undefined, undefined))
}

export function openGeneric(out: $.Slice<number>, g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): $.GoError {
	const g$: __goscript_gcm.GCM = g == null ? $.pointerTarget<__goscript_gcm.GCM>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<__goscript_gcm.GCM>(g)
	let H: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	let counter: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	let tagMask: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	aes.EncryptBlockInternal($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), $.goSlice(H.value, undefined, undefined), $.goSlice(H.value, undefined, undefined))
	deriveCounterGeneric(H, counter, nonce)
	gcmCounterCryptGeneric($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), $.goSlice(tagMask.value, undefined, undefined), $.goSlice(tagMask.value, undefined, undefined), counter)

	let tag: $.Slice<number> = $.goSlice(ciphertext, $.sliceLen(ciphertext) - (g$ as __goscript_gcm.GCM).tagSize, undefined)
	ciphertext = $.goSlice(ciphertext, undefined, $.sliceLen(ciphertext) - (g$ as __goscript_gcm.GCM).tagSize)

	let expectedTag: Uint8Array = $.arrayValue(new Uint8Array(16))
	gcmAuthGeneric($.goSlice(expectedTag, undefined, undefined), H, tagMask, ciphertext, additionalData)
	if (subtle.ConstantTimeCompare($.goSlice(expectedTag, undefined, (g$ as __goscript_gcm.GCM).tagSize), tag) != 1) {
		return __goscript_gcm.errOpen
	}

	gcmCounterCryptGeneric($.fieldRef((g$ as __goscript_gcm.GCM)._fields, "cipher"), out, ciphertext, counter)

	return null
}

export function deriveCounterGeneric(H: $.VarRef<Uint8Array> | null, counter: $.VarRef<Uint8Array> | null, nonce: $.Slice<number>): void {
	// GCM has two modes of operation with respect to the initial counter
	// state: a "fast path" for 96-bit (12-byte) nonces, and a "slow path"
	// for nonces of other lengths. For a 96-bit nonce, the nonce, along
	// with a four-byte big-endian counter starting at one, is used
	// directly as the starting counter. For other nonce sizes, the counter
	// is computed by passing it through the GHASH function.
	if ($.sliceLen(nonce) == 12) {
		$.copy($.goSlice($.pointerValue<Uint8Array>(counter), undefined, undefined), nonce)
		$.pointerValue<Uint8Array>(counter)[16 - 1] = 1
	} else {
		let lenBlock: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
		byteorder.BEPutUint64($.goSlice(lenBlock, 8, undefined), $.uint64Mul($.uint64($.sliceLen(nonce)), 8n))
		__goscript_ghash.ghash(counter, H, $.arrayToSlice<$.Slice<number>>([nonce, lenBlock]))
	}
}

export function gcmCounterCryptGeneric(b: aes.Block | $.VarRef<aes.Block> | null, out: $.Slice<number>, src: $.Slice<number>, counter: $.VarRef<Uint8Array> | null): void {
	let mask: Uint8Array = $.arrayValue(new Uint8Array(16))

	while ($.sliceLen(src) >= 16) {
		aes.EncryptBlockInternal(b, $.goSlice(mask, undefined, undefined), $.goSlice($.pointerValue<Uint8Array>(counter), undefined, undefined))
		gcmInc32(counter)

		subtle.XORBytes(out, src, $.goSlice(mask, undefined, undefined))
		out = $.goSlice(out, 16, undefined)
		src = $.goSlice(src, 16, undefined)
	}

	if ($.sliceLen(src) > 0) {
		aes.EncryptBlockInternal(b, $.goSlice(mask, undefined, undefined), $.goSlice($.pointerValue<Uint8Array>(counter), undefined, undefined))
		gcmInc32(counter)
		subtle.XORBytes(out, src, $.goSlice(mask, undefined, undefined))
	}
}

export function gcmInc32(counterBlock: $.VarRef<Uint8Array> | null): void {
	let ctr: $.Slice<number> = $.goSlice($.pointerValue<Uint8Array>(counterBlock), $.len($.pointerValue<Uint8Array>(counterBlock)) - 4, undefined)
	byteorder.BEPutUint32(ctr, $.uint(((byteorder.BEUint32(ctr) + 1) >>> 0), 32))
}

export function gcmAuthGeneric(out: $.Slice<number>, H: $.VarRef<Uint8Array> | null, tagMask: $.VarRef<Uint8Array> | null, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): void {
	__goscript_gcm_noasm.checkGenericIsExpected()
	let lenBlock: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
	byteorder.BEPutUint64($.goSlice(lenBlock, undefined, 8), $.uint64Mul($.uint64($.sliceLen(additionalData)), 8n))
	byteorder.BEPutUint64($.goSlice(lenBlock, 8, undefined), $.uint64Mul($.uint64($.sliceLen(ciphertext)), 8n))
	let S: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	__goscript_ghash.ghash(S, H, $.arrayToSlice<$.Slice<number>>([additionalData, ciphertext, lenBlock]))
	subtle.XORBytes(out, $.goSlice(S.value, undefined, undefined), $.goSlice($.pointerValue<Uint8Array>(tagMask), undefined, undefined))
}
