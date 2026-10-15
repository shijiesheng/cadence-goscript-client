// Generated file based on semiexpanded.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_mldsa from "./mldsa.gs.ts"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "./field.gs.ts"
import "./mldsa.gs.ts"

export function semiExpandedPrivKeySize(p: __goscript_mldsa.parameters): number {
	let k = p.k
	let l = p.l
	let _u3b7Bitlen = bits.Len($.uint(p._u3b7, 64)) + 1
	// ρ + K + tr + l × n × η-bit coefficients of s₁ +
	// k × n × η-bit coefficients of s₂ + k × n × 13-bit coefficients of t₀
	return ((((32 + 32) + 64) + (globalThis.Math.trunc(((l * 256) * _u3b7Bitlen) / 8))) + (globalThis.Math.trunc(((k * 256) * _u3b7Bitlen) / 8))) + (globalThis.Math.trunc(((k * 256) * 13) / 8))
}

export async function TestingOnlyNewPrivateKeyFromSemiExpanded(sk: $.Slice<number>): globalThis.Promise<[__goscript_mldsa.PrivateKey | $.VarRef<__goscript_mldsa.PrivateKey> | null, $.GoError]> {
	let p: __goscript_mldsa.parameters = new __goscript_mldsa.parameters(undefined, true)
	switch ($.sliceLen(sk)) {
		case semiExpandedPrivKeySize(__goscript_mldsa.params44):
		{
			p = $.assignStruct(p, __goscript_mldsa.params44)
			break
		}
		case semiExpandedPrivKeySize(__goscript_mldsa.params65):
		{
			p = $.assignStruct(p, __goscript_mldsa.params65)
			break
		}
		case semiExpandedPrivKeySize(__goscript_mldsa.params87):
		{
			p = $.assignStruct(p, __goscript_mldsa.params87)
			break
		}
		default:
		{
			return [null, errors.New("mldsa: invalid semi-expanded private key size")]
			break
		}
	}
	let k = p.k
	let l = p.l

	let __goscriptTuple0: any = skDecode(sk, p)
	let _u3c1 = __goscriptTuple0[0]
	let K = __goscriptTuple0[1]
	let tr = __goscriptTuple0[2]
	let s1: $.Slice<__goscript_field.ringElement> = __goscriptTuple0[3]
	let s2: $.Slice<__goscript_field.ringElement> = __goscriptTuple0[4]
	let t0: $.Slice<__goscript_field.ringElement> = __goscriptTuple0[5]
	let err = __goscriptTuple0[6]
	if (err != null) {
		return [null, err]
	}

	let priv: __goscript_mldsa.PrivateKey | $.VarRef<__goscript_mldsa.PrivateKey> | null = new __goscript_mldsa.PrivateKey({pub: new __goscript_mldsa.PublicKey({p: p}, true)})
	let priv$: __goscript_mldsa.PrivateKey = priv == null ? $.pointerTarget<__goscript_mldsa.PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<__goscript_mldsa.PrivateKey>(priv);
	;(priv$ as __goscript_mldsa.PrivateKey).k = $.cloneArrayValue(K, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32));
	;(priv$ as __goscript_mldsa.PrivateKey).pub.tr = $.cloneArrayValue(tr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	let A: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as __goscript_mldsa.PrivateKey).a, undefined, k * l)
	__goscript_mldsa.computeMatrixA(A, $.goSlice(_u3c1, undefined, undefined), p)
	for (let __goscriptSliceWindow0 = $.sliceRange(s1), __goscriptRangeCount0 = l, r = 0; r < __goscriptRangeCount0; r++) {
		;(priv$ as __goscript_mldsa.PrivateKey).s1[r] = __goscript_field.ntt($.cloneArrayValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, r)] as __goscript_field.ringElement), "mldsa.ringElement"))
	}
	for (let __goscriptSliceWindow1 = $.sliceRange(s2), __goscriptRangeCount1 = k, r = 0; r < __goscriptRangeCount1; r++) {
		;(priv$ as __goscript_mldsa.PrivateKey).s2[r] = __goscript_field.ntt($.cloneArrayValue(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, r)] as __goscript_field.ringElement), "mldsa.ringElement"))
	}
	for (let __goscriptSliceWindow2 = $.sliceRange(t0), __goscriptRangeCount2 = k, r = 0; r < __goscriptRangeCount2; r++) {
		;(priv$ as __goscript_mldsa.PrivateKey).t0[r] = __goscript_field.ntt($.cloneArrayValue(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, r)] as __goscript_field.ringElement), "mldsa.ringElement"))
	}

	// We need to put something in priv.seed, and putting random bytes feels
	// safer than putting anything predictable.
	await drbg.Read($.goSlice((priv$ as __goscript_mldsa.PrivateKey).seed, undefined, undefined))

	// Making this format *even more* annoying, we need to recompute t1 from ρ,
	// s1, and s2 if we want to generate the public key. This is essentially as
	// much work as regenerating everything from seed.
	//
	// You might also notice that the semi-expanded format also stores t0 and a
	// hash of the public key, though. How are we supposed to check they are
	// consistent without regenerating the public key? Do we even need to check?
	// Who knows! FIPS 204 says
	//
	//  > Note that there exist malformed inputs that can cause skDecode to
	//  > return values that are not in the correct range. Hence, skDecode
	//  > should only be run on inputs that come from trusted sources.
	//
	// so it sounds like it doesn't even want us to check the coefficients are
	// within bounds, but especially if using this format for key exchange, that
	// sounds like a bad idea. So we check everything.

	let t1: $.Slice<number[]> = $.makeSlice<number[]>(k, 8)
	for (let __goscriptSliceWindow3 = $.sliceRange(A), __goscriptSliceWindow4 = $.sliceRange(t1), __goscriptSliceWindow5 = $.sliceRange(t0), __goscriptRangeCount4 = k, i = 0; i < __goscriptRangeCount4; i++) {
		let tHat = $.cloneArrayValue($.arrayIndex((priv$ as __goscript_mldsa.PrivateKey).s2, i), "mldsa.nttElement")
		for (let __goscriptRangeCount3 = l, j = 0; j < __goscriptRangeCount3; j++) {
			tHat = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(tHat, "mldsa.nttElement"), __goscript_field.nttMul($.cloneArrayValue(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, (i * l) + j)] as __goscript_field.nttElement), "mldsa.nttElement"), $.cloneArrayValue($.arrayIndex((priv$ as __goscript_mldsa.PrivateKey).s1, j), "mldsa.nttElement"))), "mldsa.nttElement") as __goscript_field.nttElement)
		}
		let t = __goscript_field.inverseNTT($.cloneArrayValue(tHat, "mldsa.nttElement"))
		for (let j = 0; j < 256; j++) {
			let [r1, r0] = __goscript_field.power2Round($.arrayIndex(t, j));
			;((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as number[])[j] = r1
			if (r0 != $.arrayIndex(((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as __goscript_field.ringElement), j)) {
				return [null, errors.New("mldsa: semi-expanded private key inconsistent with t0")]
			}
		}
	}

	let pk: $.Slice<number> = __goscript_mldsa.pkEncode($.goSlice((priv$ as __goscript_mldsa.PrivateKey).pub.raw, undefined, 0), $.goSlice(_u3c1, undefined, undefined), t1, p)
	if (!$.arrayEqual(__goscript_mldsa.computePublicKeyHash(pk), tr)) {
		return [null, errors.New("mldsa: semi-expanded private key inconsistent with public key hash")]
	}
	__goscript_mldsa.computeT1Hat($.goSlice((priv$ as __goscript_mldsa.PrivateKey).t1, undefined, k), t1)

	return [priv, null]
}

export function TestingOnlyPrivateKeySemiExpandedBytes(priv: __goscript_mldsa.PrivateKey | $.VarRef<__goscript_mldsa.PrivateKey> | null): $.Slice<number> {
	const priv$: __goscript_mldsa.PrivateKey = priv == null ? $.pointerTarget<__goscript_mldsa.PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<__goscript_mldsa.PrivateKey>(priv)
	let k = (priv$ as __goscript_mldsa.PrivateKey).pub.p.k
	let l = (priv$ as __goscript_mldsa.PrivateKey).pub.p.l
	let _u3b7 = (priv$ as __goscript_mldsa.PrivateKey).pub.p._u3b7
	let sk: $.Slice<number> = $.makeSlice<number>(0, semiExpandedPrivKeySize((priv$ as __goscript_mldsa.PrivateKey).pub.p), "byte")
	sk = $.appendSlice(sk, $.goSlice((priv$ as __goscript_mldsa.PrivateKey).pub.raw, undefined, 32), $.byteSliceHint)
	sk = $.appendSlice(sk, $.goSlice((priv$ as __goscript_mldsa.PrivateKey).k, undefined, undefined), $.byteSliceHint)
	sk = $.appendSlice(sk, $.goSlice((priv$ as __goscript_mldsa.PrivateKey).pub.tr, undefined, undefined), $.byteSliceHint)
	for (let __goscriptRangeCount5 = l, i = 0; i < __goscriptRangeCount5; i++) {
		sk = bitPackSlow(sk, __goscript_field.inverseNTT($.cloneArrayValue($.arrayIndex((priv$ as __goscript_mldsa.PrivateKey).s1, i), "mldsa.nttElement")), _u3b7, _u3b7)
	}
	for (let __goscriptRangeCount6 = k, i = 0; i < __goscriptRangeCount6; i++) {
		sk = bitPackSlow(sk, __goscript_field.inverseNTT($.cloneArrayValue($.arrayIndex((priv$ as __goscript_mldsa.PrivateKey).s2, i), "mldsa.nttElement")), _u3b7, _u3b7)
	}
	const bound: number = 4096
	for (let __goscriptRangeCount7 = k, i = 0; i < __goscriptRangeCount7; i++) {
		sk = bitPackSlow(sk, __goscript_field.inverseNTT($.cloneArrayValue($.arrayIndex((priv$ as __goscript_mldsa.PrivateKey).t0, i), "mldsa.nttElement")), 4095, 4096)
	}
	return sk
}

export function skDecode(sk: $.Slice<number>, p: __goscript_mldsa.parameters): [Uint8Array, Uint8Array, Uint8Array, $.Slice<__goscript_field.ringElement>, $.Slice<__goscript_field.ringElement>, $.Slice<__goscript_field.ringElement>, $.GoError] {
	let _u3c1: Uint8Array = $.arrayValue(new Uint8Array(32))
	let K: Uint8Array = $.arrayValue(new Uint8Array(32))
	let tr: Uint8Array = $.arrayValue(new Uint8Array(64))
	let s1: $.Slice<__goscript_field.ringElement> = null! as $.Slice<__goscript_field.ringElement>
	let s2: $.Slice<__goscript_field.ringElement> = null! as $.Slice<__goscript_field.ringElement>
	let t0: $.Slice<__goscript_field.ringElement> = null! as $.Slice<__goscript_field.ringElement>
	let err: $.GoError = null! as $.GoError
	let k = p.k
	let l = p.l
	let _u3b7 = p._u3b7
	if ($.sliceLen(sk) != semiExpandedPrivKeySize(p)) {
		err = errors.New("mldsa: invalid semi-expanded private key size")
		return [_u3c1, K, tr, s1, s2, t0, err]
	}
	$.copy($.goSlice(_u3c1, undefined, undefined), $.goSlice(sk, undefined, 32))
	sk = $.goSlice(sk, 32, undefined)
	$.copy($.goSlice(K, undefined, undefined), $.goSlice(sk, undefined, 32))
	sk = $.goSlice(sk, 32, undefined)
	$.copy($.goSlice(tr, undefined, undefined), $.goSlice(sk, undefined, 64))
	sk = $.goSlice(sk, 64, undefined)

	s1 = $.makeSlice<__goscript_field.ringElement>(l)
	for (let __goscriptSliceWindow6 = $.sliceRange(s1), __goscriptRangeCount8 = l, i = 0; i < __goscriptRangeCount8; i++) {
		let length = globalThis.Math.trunc((256 * bits.Len($.uint($.uint64Mul($.uint(_u3b7, 64), 2n), 64))) / 8)
		let __goscriptTuple1: any = bitUnpackSlow($.goSlice(sk, undefined, length), _u3b7, _u3b7);
		;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [_u3c1, K, tr, s1, s2, t0, err]
		}
		sk = $.goSlice(sk, length, undefined)
	}

	s2 = $.makeSlice<__goscript_field.ringElement>(k)
	for (let __goscriptSliceWindow7 = $.sliceRange(s2), __goscriptRangeCount9 = k, i = 0; i < __goscriptRangeCount9; i++) {
		let length = globalThis.Math.trunc((256 * bits.Len($.uint($.uint64Mul($.uint(_u3b7, 64), 2n), 64))) / 8)
		let __goscriptTuple2: any = bitUnpackSlow($.goSlice(sk, undefined, length), _u3b7, _u3b7);
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [_u3c1, K, tr, s1, s2, t0, err]
		}
		sk = $.goSlice(sk, length, undefined)
	}

	const bound: number = 4096
	t0 = $.makeSlice<__goscript_field.ringElement>(k)
	for (let __goscriptSliceWindow8 = $.sliceRange(t0), __goscriptRangeCount10 = k, i = 0; i < __goscriptRangeCount10; i++) {
		let length = 416
		let __goscriptTuple3: any = bitUnpackSlow($.goSlice(sk, undefined, length), 4095, 4096);
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [_u3c1, K, tr, s1, s2, t0, err]
		}
		sk = $.goSlice(sk, length, undefined)
	}

	return [_u3c1, K, tr, s1, s2, t0, err]
}

export function bitPackSlow(buf: $.Slice<number>, r: __goscript_field.ringElement, a: number, b: number): $.Slice<number> {
	let bitlen = bits.Len($.uint(a + b, 64))
	if ((bitlen <= 0) || (bitlen > 16)) {
		$.panic("mldsa: internal error: invalid bitlen")
	}
	let __goscriptTuple4: any = __goscript_field.sliceForAppend(buf, globalThis.Math.trunc((256 * bitlen) / 8))
	let out: $.Slice<number> = __goscriptTuple4[0]
	let v: $.Slice<number> = __goscriptTuple4[1]
	let acc: number = 0
	let accBits: number = 0
	for (let __goscriptRangeTarget0 = r, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let w = $.int((($.int(b, 32) - __goscript_field.fieldCenteredMod($.arrayIndex(r, i))) | 0), 32)
		acc = acc | ($.uint((($.uint(w, 32) << accBits) >>> 0), 32))
		accBits = $.uint($.uint64Add(accBits, $.uint(bitlen, 64)), 64)
		while (accBits >= 8) {
			$.sliceElems(v!)[$.sliceSlot(v!, 0)] = $.uint(acc, 8)
			v = $.goSlice(v, 1, undefined)
			acc = (acc >>> (8)) >>> 0
			accBits = $.uint($.uint64Sub(accBits, 8), 64)
		}
	}
	if (accBits > 0) {
		$.sliceElems(v!)[$.sliceSlot(v!, 0)] = $.uint(acc, 8)
	}
	return out
}

export function bitUnpackSlow(v: $.Slice<number>, a: number, b: number): [__goscript_field.ringElement, $.GoError] {
	let bitlen = bits.Len($.uint(a + b, 64))
	if ((bitlen <= 0) || (bitlen > 16)) {
		$.panic("mldsa: internal error: invalid bitlen")
	}
	if ($.sliceLen(v) != (globalThis.Math.trunc((256 * bitlen) / 8))) {
		return [$.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)), errors.New("mldsa: invalid input length for bitUnpackSlow")]
	}

	let mask = $.uint($.uint((((((1 << bitlen) >>> 0)) - 1) >>> 0), 32), 32)
	let maxValue = $.uint(a + b, 32)

	let r: __goscript_field.ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	let acc: number = 0
	let accBits: number = 0
	let vIdx = 0

	for (let __goscriptRangeTarget1 = r, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow9 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow1.length; i++) {
		while (accBits < $.uint(bitlen, 64)) {
			if (vIdx < __goscriptSliceWindow9.length) {
				acc = acc | ($.uint((($.uint(((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, vIdx)] as number), 32) << accBits) >>> 0), 32))
				vIdx++
				accBits = $.uint($.uint64Add(accBits, 8), 64)
			}
		}
		let w = $.uint(acc & mask, 32)
		if (w > maxValue) {
			return [$.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)), errors.New("mldsa: coefficient out of range")]
		}
		r[i] = __goscript_field.fieldSubToMontgomery($.uint(b, 32), w)
		acc = (acc >>> ($.uint(bitlen, 32))) >>> 0
		accBits = $.uint($.uint64Sub(accBits, $.uint(bitlen, 64)), 64)
	}

	return [$.cloneArrayValue(r, "mldsa.ringElement"), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "mldsa.nttElement", zero: () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)) }})
}
