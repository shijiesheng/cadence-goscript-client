// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_mlkem768 from "./mlkem768.gs.ts"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "./mlkem768.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/mlkem", ["mlkem.fieldElement", "mlkem.ringElement", "mlkem.nttElement"])

export type fieldElement = number

export type ringElement = fieldElement[]

$.registerNamedType("mlkem.ringElement", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint16", "mlkem.fieldElement"), 256));

export type nttElement = fieldElement[]

$.registerNamedType("mlkem.nttElement", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint16", "mlkem.fieldElement"), 256));

export const barrettMultiplier: number = 5039

export const barrettShift: number = 24

export function fieldCheckReduced(a: number): [fieldElement, $.GoError] {
	if (a >= 3329) {
		return [0, errors.New("unreduced field element")]
	}
	return [$.uint(a, 16), null]
}

export function fieldReduceOnce(a: number): fieldElement {
	let x = $.uint(((a - 3329) & 0xffff), 16)
	// If x underflowed, then x >= 2¹⁶ - q > 2¹⁵, so the top bit is set.
	x = $.uint(x + ($.uint(($.uintShr(x, 15, 16)) * 3329, 16)), 16)
	return $.uint(x, 16)
}

export function fieldAdd(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint($.uint(((a + b) & 0xffff), 16), 16)
	return fieldReduceOnce(x)
}

export function fieldSub(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint($.uint((((((a - b) & 0xffff)) + 3329) & 0xffff), 16), 16)
	return fieldReduceOnce(x)
}

export function fieldReduce(a: number): fieldElement {
	let quotient = $.uint($.uint64Shr(($.uint64Mul($.uint64(a), 5039n)), 24n), 32)
	return fieldReduceOnce($.uint($.uint(((a - (globalThis.Math.imul(quotient, 3329) >>> 0)) >>> 0), 32), 16))
}

export function fieldMul(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint(globalThis.Math.imul($.uint(a, 32), $.uint(b, 32)) >>> 0, 32)
	return fieldReduce(x)
}

export function fieldMulSub(a: fieldElement, b: fieldElement, c: fieldElement): fieldElement {
	let x = $.uint(globalThis.Math.imul($.uint(a, 32), $.uint($.uint((((((b - c) & 0xffff)) + 3329) & 0xffff), 16), 32)) >>> 0, 32)
	return fieldReduce(x)
}

export function fieldAddMul(a: fieldElement, b: fieldElement, c: fieldElement, d: fieldElement): fieldElement {
	let x = $.uint(globalThis.Math.imul($.uint(a, 32), $.uint(b, 32)) >>> 0, 32)
	x = $.uint(x + ($.uint(globalThis.Math.imul($.uint(c, 32), $.uint(d, 32)) >>> 0, 32)), 32)
	return fieldReduce(x)
}

export function compress(x: fieldElement, d: number): number {
	// We want to compute (x * 2ᵈ) / q, rounded to nearest integer, with 1/2
	// rounding up (see FIPS 203, Section 2.3).

	// Barrett reduction produces a quotient and a remainder in the range [0, 2q),
	// such that dividend = quotient * q + remainder.
	let dividend = $.uint((($.uint(x, 32) << d) >>> 0), 32)
	let quotient = $.uint($.uint64Shr(($.uint64Mul($.uint64(dividend), 5039n)), 24n), 32)
	let remainder = $.uint(((dividend - (globalThis.Math.imul(quotient, 3329) >>> 0)) >>> 0), 32)

	// Since the remainder is in the range [0, 2q), not [0, q), we need to
	// portion it into three spans for rounding.
	//
	//     [ 0,       q/2     ) -> round to 0
	//     [ q/2,     q + q/2 ) -> round to 1
	//     [ q + q/2, 2q      ) -> round to 2
	//
	// We can convert that to the following logic: add 1 if remainder > q/2,
	// then add 1 again if remainder > q + q/2.
	//
	// Note that if remainder > x, then ⌊x⌋ - remainder underflows, and the top
	// bit of the difference will be set.
	quotient = $.uint(quotient + ($.uint(($.uintShr(((((globalThis.Math.trunc(3329 / 2)) - remainder) >>> 0)), 31, 32)) & 1, 32)), 32)
	quotient = $.uint(quotient + ($.uint(($.uintShr(((((((3329 + (globalThis.Math.trunc(3329 / 2))) >>> 0)) - remainder) >>> 0)), 31, 32)) & 1, 32)), 32)

	// quotient might have overflowed at this point, so reduce it by masking.
	let mask: number = $.uint((((((1 << d) >>> 0)) - 1) >>> 0), 32)
	return $.uint(quotient & mask, 16)
}

export function decompress(y: number, d: number): fieldElement {
	// We want to compute (y * q) / 2ᵈ, rounded to nearest integer, with 1/2
	// rounding up (see FIPS 203, Section 2.3).

	let dividend = $.uint(globalThis.Math.imul($.uint(y, 32), 3329) >>> 0, 32)
	let quotient = $.uint($.uintShr(dividend, d, 32), 32)

	// The d'th least-significant bit of the dividend (the most significant bit
	// of the remainder) is 1 for the top half of the values that divide to the
	// same quotient, which are the ones that round up.
	quotient = $.uint(quotient + ($.uint(($.uintShr(dividend, (((d - 1) & 0xff)), 32)) & 1, 32)), 32)

	// quotient is at most (2¹¹-1) * q / 2¹¹ + 1 = 3328, so it didn't overflow.
	return $.uint(quotient, 16)
}

export function polyAdd(__typeArgs: $.GenericTypeArgs | undefined, a: any, b: any): any {
	let s: any = $.genericZero(__typeArgs, "T", null)
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(s as fieldElement[])[i] = fieldAdd($.arrayIndex((a as fieldElement[]), i), $.arrayIndex((b as fieldElement[]), i))
	}
	return $.copyElement(s)
}

export function polySub(__typeArgs: $.GenericTypeArgs | undefined, a: any, b: any): any {
	let s: any = $.genericZero(__typeArgs, "T", null)
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(s as fieldElement[])[i] = fieldSub($.arrayIndex((a as fieldElement[]), i), $.arrayIndex((b as fieldElement[]), i))
	}
	return $.copyElement(s)
}

export function polyByteEncode(__typeArgs: $.GenericTypeArgs | undefined, b: $.Slice<number>, f: any): $.Slice<number> {
	let __goscriptTuple0: any = sliceForAppend(b, 384)
	let out: $.Slice<number> = __goscriptTuple0[0]
	let B: $.Slice<number> = __goscriptTuple0[1]
	for (let i = 0; i < 256; i = i + (2)) {
		let x = $.uint($.uint($.arrayIndex((f as fieldElement[]), i), 32) | ((($.uint($.arrayIndex((f as fieldElement[]), i + 1), 32) << 12) >>> 0)), 32)
		$.sliceElems(B!)[$.sliceSlot(B!, 0)] = $.uint(x, 8)
		$.sliceElems(B!)[$.sliceSlot(B!, 1)] = $.uint($.uintShr(x, 8, 32), 8)
		$.sliceElems(B!)[$.sliceSlot(B!, 2)] = $.uint($.uintShr(x, 16, 32), 8)
		B = $.goSlice(B, 3, undefined)
	}
	return out
}

export function polyByteDecode(__typeArgs: $.GenericTypeArgs | undefined, b: $.Slice<number>): [any, $.GoError] {
	if ($.sliceLen(b) != 384) {
		return [$.genericZero(__typeArgs, "T", null), errors.New("mlkem: invalid encoding length")]
	}
	let f: any = $.genericZero(__typeArgs, "T", null)
	for (let i = 0; i < 256; i = i + (2)) {
		let d = $.uint(($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0)), 32)
		const mask12: number = 4095
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple1: any = fieldCheckReduced($.uint(d & 4095, 16));
			;(f as fieldElement[])[i] = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [$.genericZero(__typeArgs, "T", null), errors.New("mlkem: invalid polynomial encoding")]
			}
		}
		{
			let __goscriptTuple2: any = fieldCheckReduced($.uint($.uintShr(d, 12, 32), 16));
			;(f as fieldElement[])[i + 1] = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (err != null) {
				return [$.genericZero(__typeArgs, "T", null), errors.New("mlkem: invalid polynomial encoding")]
			}
		}
		b = $.goSlice(b, 3, undefined)
	}
	return [$.copyElement(f), null]
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

export function ringCompressAndEncode1(s: $.Slice<number>, f: ringElement): $.Slice<number> {
	let __goscriptTuple3: any = sliceForAppend(s, 32)
	s = __goscriptTuple3[0]
	let b: $.Slice<number> = __goscriptTuple3[1]
	$.clear(b)
	for (let __goscriptRangeTarget2 = f, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < __goscriptRangeWindow2.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, globalThis.Math.trunc(i / 8))] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, globalThis.Math.trunc(i / 8))] | ($.uint($.uint(((compress($.arrayIndex(f, i), 1) << (i % 8)) & 0xffff), 16), 8))
	}
	return s
}

export function ringDecodeAndDecompress1(b: $.VarRef<Uint8Array> | null): ringElement {
	let f: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptRangeTarget3 = f, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let b_i = $.uint(($.uintShr($.arrayIndex($.pointerValue<Uint8Array>(b), globalThis.Math.trunc(i / 8)), (i % 8), 8)) & 1, 8)
		const halfQ: number = 1665
		f[i] = $.uint($.uint(b_i, 16) * 1665, 16)
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export function ringCompressAndEncode4(s: $.Slice<number>, f: ringElement): $.Slice<number> {
	let __goscriptTuple4: any = sliceForAppend(s, 128)
	s = __goscriptTuple4[0]
	let b: $.Slice<number> = __goscriptTuple4[1]
	for (let __goscriptSliceWindow1 = $.sliceRange(b), i = 0; i < 256; i = i + (2)) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, globalThis.Math.trunc(i / 2))] = $.uint(compress($.arrayIndex(f, i), 4) | (((compress($.arrayIndex(f, i + 1), 4) << 4) & 0xffff)), 8)
	}
	return s
}

export function ringDecodeAndDecompress4(b: $.VarRef<Uint8Array> | null): ringElement {
	let f: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let i = 0; i < 256; i = i + (2)) {
		f[i] = $.uint(decompress($.uint($.arrayIndex($.pointerValue<Uint8Array>(b), globalThis.Math.trunc(i / 2)) & 0b1111, 16), 4), 16)
		f[i + 1] = $.uint(decompress($.uint($.uintShr($.arrayIndex($.pointerValue<Uint8Array>(b), globalThis.Math.trunc(i / 2)), 4, 8), 16), 4), 16)
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export function ringCompressAndEncode10(s: $.Slice<number>, f: ringElement): $.Slice<number> {
	let __goscriptTuple5: any = sliceForAppend(s, 320)
	s = __goscriptTuple5[0]
	let b: $.Slice<number> = __goscriptTuple5[1]
	for (let i = 0; i < 256; i = i + (4)) {
		let x: bigint = 0n
		x = $.uint64Or(x, $.uint64(compress($.arrayIndex(f, i), 10)))
		x = $.uint64Or(x, $.uint64Shl($.uint64(compress($.arrayIndex(f, i + 1), 10)), 10n))
		x = $.uint64Or(x, $.uint64Shl($.uint64(compress($.arrayIndex(f, i + 2), 10)), 20n))
		x = $.uint64Or(x, $.uint64Shl($.uint64(compress($.arrayIndex(f, i + 3), 10)), 30n))
		$.sliceElems(b!)[$.sliceSlot(b!, 0)] = $.uint(x, 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 1)] = $.uint($.uint64Shr(x, 8n), 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 2)] = $.uint($.uint64Shr(x, 16n), 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 3)] = $.uint($.uint64Shr(x, 24n), 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 4)] = $.uint($.uint64Shr(x, 32n), 8)
		b = $.goSlice(b, 5, undefined)
	}
	return s
}

export function ringDecodeAndDecompress10(bb: $.VarRef<Uint8Array> | null): ringElement {
	let b: $.Slice<number> = $.goSlice($.pointerValue<Uint8Array>(bb), undefined, undefined)
	let f: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let i = 0; i < 256; i = i + (4)) {
		let x = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))
		b = $.goSlice(b, 5, undefined)
		f[i] = $.uint(decompress($.uint($.uint64And(($.uint64Shr(x, 0n)), 1023n), 16), 10), 16)
		f[i + 1] = $.uint(decompress($.uint($.uint64And(($.uint64Shr(x, 10n)), 1023n), 16), 10), 16)
		f[i + 2] = $.uint(decompress($.uint($.uint64And(($.uint64Shr(x, 20n)), 1023n), 16), 10), 16)
		f[i + 3] = $.uint(decompress($.uint($.uint64And(($.uint64Shr(x, 30n)), 1023n), 16), 10), 16)
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export function ringCompressAndEncode(s: $.Slice<number>, f: ringElement, d: number): $.Slice<number> {
	let b: number = 0
	let bIdx: number = 0
	for (let i = 0; i < 256; i++) {
		let c = compress($.arrayIndex(f, i), d)
		let cIdx: number = 0
		while (cIdx < d) {
			b = b | ($.uint((($.uint($.uintShr(c, cIdx, 16), 8) << bIdx) & 0xff), 8))
			let bits = $.min($.uint(((8 - bIdx) & 0xff), 8), $.uint(((d - cIdx) & 0xff), 8))
			bIdx = $.uint(bIdx + (bits), 8)
			cIdx = $.uint(cIdx + (bits), 8)
			if (bIdx == 8) {
				s = $.append(s, $.uint(b, 8), $.byteSliceHint)
				b = 0
				bIdx = 0
			}
		}
	}
	if (bIdx != 0) {
		$.panic("mlkem: internal error: bitsFilled != 0")
	}
	return s
}

export function ringDecodeAndDecompress(b: $.Slice<number>, d: number): ringElement {
	let f: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	let bIdx: number = 0
	for (let i = 0; i < 256; i++) {
		let c: number = 0
		let cIdx: number = 0
		while (cIdx < d) {
			c = c | ($.uint((($.uint($.uintShr($.arrayIndex(b!, 0), bIdx, 8), 16) << cIdx) & 0xffff), 16))
			c = c & ($.uint((((((1 << d) & 0xffff)) - 1) & 0xffff), 16))
			let bits = $.min($.uint(((8 - bIdx) & 0xff), 8), $.uint(((d - cIdx) & 0xff), 8))
			bIdx = $.uint(bIdx + (bits), 8)
			cIdx = $.uint(cIdx + (bits), 8)
			if (bIdx == 8) {
				b = $.goSlice(b, 1, undefined)
				bIdx = 0
			}
		}
		f[i] = $.uint(decompress(c, d), 16)
	}
	if ($.sliceLen(b) != 0) {
		$.panic("mlkem: internal error: leftover bytes")
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export function ringCompressAndEncode5(s: $.Slice<number>, f: ringElement): $.Slice<number> {
	return ringCompressAndEncode(s, $.cloneArrayValue(f, "mlkem.ringElement"), 5)
}

export function ringDecodeAndDecompress5(bb: $.VarRef<Uint8Array> | null): ringElement {
	return ringDecodeAndDecompress($.goSlice($.pointerValue<Uint8Array>(bb), undefined, undefined), 5)
}

export function ringCompressAndEncode11(s: $.Slice<number>, f: ringElement): $.Slice<number> {
	return ringCompressAndEncode(s, $.cloneArrayValue(f, "mlkem.ringElement"), 11)
}

export function ringDecodeAndDecompress11(bb: $.VarRef<Uint8Array> | null): ringElement {
	return ringDecodeAndDecompress($.goSlice($.pointerValue<Uint8Array>(bb), undefined, undefined), 11)
}

export function samplePolyCBD(s: $.Slice<number>, b: number): ringElement {
	let prf: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (prf !== null && (prf as any).__isVarRef !== true && (prf as any).__goValue === undefined ? ((prf as any) as sha3.SHAKE).Write(s) : sha3.SHAKE.prototype.Write.call(prf, s))
	void (prf !== null && (prf as any).__isVarRef !== true && (prf as any).__goValue === undefined ? ((prf as any) as sha3.SHAKE).Write(new Uint8Array([b]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(prf, new Uint8Array([b]) as $.Slice<number>))
	let B: $.Slice<number> = $.makeSlice<number>(64 * 2, undefined, "byte")
	void (prf !== null && (prf as any).__isVarRef !== true && (prf as any).__goValue === undefined ? ((prf as any) as sha3.SHAKE).Read(B) : sha3.SHAKE.prototype.Read.call(prf, B))

	// SamplePolyCBD simply draws four (2η) bits for each coefficient, and adds
	// the first two and subtracts the last two.

	let f: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptSliceWindow2 = $.sliceRange(B), i = 0; i < 256; i = i + (2)) {
		let __goscriptShadow0 = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, globalThis.Math.trunc(i / 2))] as number)
		let b_7 = $.uint($.uintShr(__goscriptShadow0, 7, 8), 8)
		let b_6 = $.uint(($.uintShr(__goscriptShadow0, 6, 8)) & 1, 8)
		let b_5 = $.uint(($.uintShr(__goscriptShadow0, 5, 8)) & 1, 8)
		let b_4 = $.uint(($.uintShr(__goscriptShadow0, 4, 8)) & 1, 8)
		let b_3 = $.uint(($.uintShr(__goscriptShadow0, 3, 8)) & 1, 8)
		let b_2 = $.uint(($.uintShr(__goscriptShadow0, 2, 8)) & 1, 8)
		let b_1 = $.uint(($.uintShr(__goscriptShadow0, 1, 8)) & 1, 8)
		let b_0 = $.uint(__goscriptShadow0 & 1, 8)
		f[i] = fieldSub($.uint($.uint(((b_0 + b_1) & 0xff), 8), 16), $.uint($.uint(((b_2 + b_3) & 0xff), 8), 16))
		f[i + 1] = fieldSub($.uint($.uint(((b_4 + b_5) & 0xff), 8), 16), $.uint($.uint(((b_6 + b_7) & 0xff), 8), 16))
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export let gammas: fieldElement[] = $.arrayValue([17, 3312, 2761, 568, 583, 2746, 2649, 680, 1637, 1692, 723, 2606, 2288, 1041, 1100, 2229, 1409, 1920, 2662, 667, 3281, 48, 233, 3096, 756, 2573, 2156, 1173, 3015, 314, 3050, 279, 1703, 1626, 1651, 1678, 2789, 540, 1789, 1540, 1847, 1482, 952, 2377, 1461, 1868, 2687, 642, 939, 2390, 2308, 1021, 2437, 892, 2388, 941, 733, 2596, 2337, 992, 268, 3061, 641, 2688, 1584, 1745, 2298, 1031, 2037, 1292, 3220, 109, 375, 2954, 2549, 780, 2090, 1239, 1645, 1684, 1063, 2266, 319, 3010, 2773, 556, 757, 2572, 2099, 1230, 561, 2768, 2466, 863, 2594, 735, 2804, 525, 1092, 2237, 403, 2926, 1026, 2303, 1143, 2186, 2150, 1179, 2775, 554, 886, 2443, 1722, 1607, 1212, 2117, 1874, 1455, 1029, 2300, 2110, 1219, 2935, 394, 885, 2444, 2154, 1175])

export function __goscript_set_gammas(__goscriptValue: fieldElement[]): void {
	gammas = __goscriptValue
}

export function nttMul(f: nttElement, g: nttElement): nttElement {
	let h: nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	// We use i += 2 for bounds check elimination. See https://go.dev/issue/66826.
	for (let i = 0; i < 256; i = i + (2)) {
		let a0 = $.arrayIndex(f, i)
		let a1 = $.arrayIndex(f, i + 1)
		let b0 = $.arrayIndex(g, i)
		let b1 = $.arrayIndex(g, i + 1)
		h[i] = fieldAddMul(a0, b0, fieldMul(a1, b1), $.arrayIndex(gammas, globalThis.Math.trunc(i / 2)))
		h[i + 1] = fieldAddMul(a0, b1, a1, b0)
	}
	return $.cloneArrayValue(h, "mlkem.nttElement")
}

export let zetas: fieldElement[] = $.arrayValue([1, 1729, 2580, 3289, 2642, 630, 1897, 848, 1062, 1919, 193, 797, 2786, 3260, 569, 1746, 296, 2447, 1339, 1476, 3046, 56, 2240, 1333, 1426, 2094, 535, 2882, 2393, 2879, 1974, 821, 289, 331, 3253, 1756, 1197, 2304, 2277, 2055, 650, 1977, 2513, 632, 2865, 33, 1320, 1915, 2319, 1435, 807, 452, 1438, 2868, 1534, 2402, 2647, 2617, 1481, 648, 2474, 3110, 1227, 910, 17, 2761, 583, 2649, 1637, 723, 2288, 1100, 1409, 2662, 3281, 233, 756, 2156, 3015, 3050, 1703, 1651, 2789, 1789, 1847, 952, 1461, 2687, 939, 2308, 2437, 2388, 733, 2337, 268, 641, 1584, 2298, 2037, 3220, 375, 2549, 2090, 1645, 1063, 319, 2773, 757, 2099, 561, 2466, 2594, 2804, 1092, 403, 1026, 1143, 2150, 2775, 886, 1722, 1212, 1874, 1029, 2110, 2935, 885, 2154])

export function __goscript_set_zetas(__goscriptValue: fieldElement[]): void {
	zetas = __goscriptValue
}

export function ntt(f: ringElement): nttElement {
	let k = 1
	for (let len = 128; len >= 2; len = globalThis.Math.trunc(len / 2)) {
		for (let start = 0; start < 256; start = start + (2 * len)) {
			let zeta = $.arrayIndex(zetas, k)
			k++
			// Bounds check elimination hint.
			let __goscriptShadow1 = f
			let __goscriptShadow2: $.Slice<fieldElement> = $.goSlice(__goscriptShadow1, start, start + len)
			let flen: $.Slice<fieldElement> = $.goSlice(__goscriptShadow1, start + len, (start + len) + len)
			for (let __goscriptSliceWindow3 = $.sliceRange(flen), __goscriptSliceWindow4 = $.sliceRange(__goscriptShadow2), j = 0; j < len; j++) {
				let t = fieldMul(zeta, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] as fieldElement));
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] = fieldSub(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as fieldElement), t);
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] = fieldAdd(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as fieldElement), t)
			}
		}
	}
	return $.cloneArrayValue(f, "mlkem.nttElement")
}

export function inverseNTT(f: nttElement): ringElement {
	let k = 127
	for (let len = 2; len <= 128; len = len * (2)) {
		for (let start = 0; start < 256; start = start + (2 * len)) {
			let zeta = $.arrayIndex(zetas, k)
			k--
			// Bounds check elimination hint.
			let __goscriptShadow3 = f
			let __goscriptShadow4: $.Slice<fieldElement> = $.goSlice(__goscriptShadow3, start, start + len)
			let flen: $.Slice<fieldElement> = $.goSlice(__goscriptShadow3, start + len, (start + len) + len)
			for (let __goscriptSliceWindow5 = $.sliceRange(__goscriptShadow4), __goscriptSliceWindow6 = $.sliceRange(flen), j = 0; j < len; j++) {
				let t = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j)] as fieldElement);
				;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j)] = fieldAdd(t, ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, j)] as fieldElement));
				;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, j)] = fieldMulSub(zeta, ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, j)] as fieldElement), t)
			}
		}
	}
	for (let __goscriptRangeTarget4 = f, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		f[i] = fieldMul($.arrayIndex(f, i), 3303)
	}
	return $.cloneArrayValue(f, "mlkem.ringElement")
}

export function sampleNTT(rho: $.Slice<number>, ii: number, jj: number): nttElement {
	let B: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake128()
	void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as sha3.SHAKE).Write(rho) : sha3.SHAKE.prototype.Write.call(B, rho))
	void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as sha3.SHAKE).Write(new Uint8Array([ii, jj]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(B, new Uint8Array([ii, jj]) as $.Slice<number>))

	// SampleNTT essentially draws 12 bits at a time from r, interprets them in
	// little-endian, and rejects values higher than q, until it drew 256
	// values. (The rejection rate is approximately 19%.)
	//
	// To do this from a bytes stream, it draws three bytes at a time, and
	// splits them into two uint16 appropriately masked.
	//
	//               r₀              r₁              r₂
	//       |- - - - - - - -|- - - - - - - -|- - - - - - - -|
	//
	//               Uint16(r₀ || r₁)
	//       |- - - - - - - - - - - - - - - -|
	//       |- - - - - - - - - - - -|
	//                   d₁
	//
	//                                Uint16(r₁ || r₂)
	//                       |- - - - - - - - - - - - - - - -|
	//                               |- - - - - - - - - - - -|
	//                                           d₂
	//
	// Note that in little-endian, the rightmost bits are the most significant
	// bits (dropped with a mask) and the leftmost bits are the least
	// significant bits (dropped with a right shift).

	let a: nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	let j: number = 0
	let buf: Uint8Array = $.arrayValue(new Uint8Array(24))
	let off = 24
	while (true) {
		if (off >= 24) {
			void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as sha3.SHAKE).Read($.goSlice(buf, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(B, $.goSlice(buf, undefined, undefined)))
			off = 0
		}
		let d1 = $.uint(byteorder.LEUint16($.goSlice(buf, off, undefined)) & 0b1111_1111_1111, 16)
		let d2 = $.uint($.uintShr(byteorder.LEUint16($.goSlice(buf, off + 1, undefined)), 4, 16), 16)
		off = off + (3)
		if (d1 < 3329) {
			a[j] = $.uint(d1, 16)
			j++
		}
		if (j >= 256) {
			break
		}
		if (d2 < 3329) {
			a[j] = $.uint(d2, 16)
			j++
		}
		if (j >= 256) {
			break
		}
	}
	return $.cloneArrayValue(a, "mlkem.nttElement")
}
