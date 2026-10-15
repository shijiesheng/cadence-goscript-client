// Generated file based on ghash.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as __goscript_gcm from "./gcm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "./gcm.gs.ts"

export function GHASH(key: $.VarRef<Uint8Array> | null, inputs: $.Slice<$.Slice<number>>): $.Slice<number> {
	fips140.RecordNonApproved()
	let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
	ghash(out, key, inputs)
	return $.goSlice(out.value, undefined, undefined)
}

export function ghashMul(x: number, y: number): bigint {
	// This function implements carryless multiplication using a technique first
	// described by Thomas Pornin in the BearSSL documentation [0]. This
	// technique uses generic integer multiplication, but ignores the carrys by
	// masking all but 8 bits of the inputs, creating three bit holes between
	// each unmasked bit. If the multiplications of any of the unmasked bits
	// then cause a carry, the resulting carry bit spills into one of the three
	// bit holes.
	//
	// Each 32-bit input is split into four 32-bit masked values, each
	// containing 8 unmasked bits. The mask is shifted by one bit for each of
	// the four values, such that the four values cover the full 32 bits of the
	// input.
	//
	// In order to compute the bits at position z_k, z_k+4, z_k+8, ..., z_k+60
	// for k = 0, 1, 2, 3, we compute the sum of the products x_i*y_j for all i,
	// j such that i+j = k mod 4.
	//
	// We then mask the sum of each of the four products with the same mask used
	// for the input values, which zeros out any spilled carry bits, and OR the
	// masked values to get the final product.
	//
	// [0] https://www.bearssl.org/constanttime.html#ghash-for-gcm

	let xm: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
	let ym: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
	let z: bigint[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))

	for (let i = 0; i < 4; i++) {
		// Mask off the three bit holes in each input, creating four masked
		// values for each input.
		xm[i] = $.uint(x & (((0x11111111 << i) >>> 0)), 32)
		ym[i] = $.uint(y & (((0x11111111 << i) >>> 0)), 32)
	}

	for (let i = 0; i < 4; i++) {
		// Compute the multiplication of x by the circulant matrix of y, using
		// XOR to get carryless addition of the products:
		//
		//  | z[0] |   | ym[0] ym[3] ym[2] ym[1] |   | xm[0] |
		//  | z[1] | = | ym[1] ym[0] ym[3] ym[2] | x | xm[1] |
		//  | z[2] |   | ym[2] ym[1] ym[0] ym[3] |   | xm[2] |
		//  | z[3] |   | ym[3] ym[2] ym[1] ym[0] |   | xm[3] |
		z[i] = $.uint64Xor(($.uint64Xor(($.uint64Xor(($.uint64Mul($.uint64($.arrayIndex(xm, 0)), $.uint64($.arrayIndex(ym, i)))), ($.uint64Mul($.uint64($.arrayIndex(xm, 1)), $.uint64($.arrayIndex(ym, (i + 3) % 4)))))), ($.uint64Mul($.uint64($.arrayIndex(xm, 2)), $.uint64($.arrayIndex(ym, (i + 2) % 4)))))), ($.uint64Mul($.uint64($.arrayIndex(xm, 3)), $.uint64($.arrayIndex(ym, (i + 1) % 4)))))
		z[i] = $.uint64And(z[i], $.uint64Shl(1229782938247303441n, i))
	}

	return $.uint64Or(($.uint64Or(($.uint64Or($.arrayIndex(z, 0), $.arrayIndex(z, 1))), $.arrayIndex(z, 2))), $.arrayIndex(z, 3))
}

export function ghash(out: $.VarRef<Uint8Array> | null, H: $.VarRef<Uint8Array> | null, inputs: $.Slice<$.Slice<number>>): void {
	// The GHASH algorithm computes the sum of the products of two 128 bit
	// integers Y and H (the input block and the key, respectively) in the field
	// GF(2^128), modulo the field polynomial.
	//
	// We use the Karatsuba algorithm to decompose the 128-bit multiplication
	// into three 64-bit multiplications, which we further decompose into 9
	// 32-bit multiplications with 64-bit products.

	// Make sure out is zeroed before we use it.
	$.clear($.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined))

	let y: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
	let h: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
	for (let i = 0; i < 4; i++) {
		h[3 - i] = byteorder.BEUint32($.goSlice($.pointerValue<Uint8Array>(H), i * 4, (i * 4) + 4))
	}

	let blockIterator: ((_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null) => void) | null = $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
		for (let __goscriptRangeTarget0 = inputs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let input = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
			while ($.sliceLen(input) >= 16) {
				if (!(__goscriptAwait = _yield!($.goSlice(input, undefined, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
				input = $.goSlice(input, 16, undefined)
			}
			if ($.sliceLen(input) > 0) {
				let partialBlock: Uint8Array = $.arrayValue(new Uint8Array(16))
				$.copy($.goSlice(partialBlock, undefined, undefined), input)
				if (!(__goscriptAwait = _yield!($.goSlice(partialBlock, undefined, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))

	// Compute the GHASH of the inputs by iterating over 16-byte blocks of the
	// inputs, XORing each block into the current state, and multiplying the
	// result by the key.
	let __goscriptRangeReturn0 = false
	;(() => {
		blockIterator!((block) => {
			for (let i = 0; i < 4; i++) {
				y[3 - i] = y[3 - i] ^ (byteorder.BEUint32($.goSlice(block, i * 4, (i * 4) + 4)))
			}

			// Split y*h into nine products:
			//
			//  zLo = y0*h0, y2*h2, (y0^y2) * (h0^h2)
			//  zHi = y1*h1, y3*h3, (y1^y3) * (h1^h3)
			//  zSum = (y0^y1) * (h0^h1), (y2^y3) * (h2^h3), ((y0^y2) ^ (y1^y3)) * ((h0^h2) ^ (h1^h3))
			let zLo: bigint[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0n))
			let zHi: bigint[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0n))
			let zSum: bigint[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0n))

			zLo[0] = ghashMul($.arrayIndex(y, 0), $.arrayIndex(h, 0))
			zHi[0] = ghashMul($.arrayIndex(y, 1), $.arrayIndex(h, 1))
			zSum[0] = ghashMul($.uint($.arrayIndex(y, 0) ^ $.arrayIndex(y, 1), 32), $.uint($.arrayIndex(h, 0) ^ $.arrayIndex(h, 1), 32))

			zLo[1] = ghashMul($.arrayIndex(y, 2), $.arrayIndex(h, 2))
			zHi[1] = ghashMul($.arrayIndex(y, 3), $.arrayIndex(h, 3))
			zSum[1] = ghashMul($.uint($.arrayIndex(y, 2) ^ $.arrayIndex(y, 3), 32), $.uint($.arrayIndex(h, 2) ^ $.arrayIndex(h, 3), 32))

			zLo[2] = ghashMul($.uint($.arrayIndex(y, 0) ^ $.arrayIndex(y, 2), 32), $.uint($.arrayIndex(h, 0) ^ $.arrayIndex(h, 2), 32))
			zHi[2] = ghashMul($.uint($.arrayIndex(y, 1) ^ $.arrayIndex(y, 3), 32), $.uint($.arrayIndex(h, 1) ^ $.arrayIndex(h, 3), 32))
			zSum[2] = ghashMul($.uint(($.arrayIndex(y, 0) ^ $.arrayIndex(y, 2)) ^ ($.arrayIndex(y, 1) ^ $.arrayIndex(y, 3)), 32), $.uint(($.arrayIndex(h, 0) ^ $.arrayIndex(h, 2)) ^ ($.arrayIndex(h, 1) ^ $.arrayIndex(h, 3)), 32))

			// Reconstruct the 128-bit terms zLo, zHi, and zSum from their constituent 64-bit products
			let result: bigint[][] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0n))), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2), 3))
			for (let i = 0; i < 3; i++) {
				let mid = $.uint64Xor(($.uint64Xor($.arrayIndex(zSum, i), $.arrayIndex(zLo, i))), $.arrayIndex(zHi, i))
				// Add the lower 32 bits of the middle term to the low term
				$.arrayIndex(result, i)[0] = $.uint64Xor($.arrayIndex(zLo, i), ($.uint64Mul(mid, (2 ** 32))))
				// Add the upper 32 bits of the middle term to the high term
				$.arrayIndex(result, i)[1] = $.uint64Xor($.arrayIndex(zHi, i), ($.uint64Shr(mid, 32n)))
			}

			// Compute the middle term by adding the high and low terms to the sum term
			$.arrayIndex(result, 2)[0] = $.uint64Xor($.arrayIndex(result, 2)[0], $.uint64Xor($.arrayIndex($.arrayIndex(result, 0), 0), $.arrayIndex($.arrayIndex(result, 1), 0)))
			$.arrayIndex(result, 2)[1] = $.uint64Xor($.arrayIndex(result, 2)[1], $.uint64Xor($.arrayIndex($.arrayIndex(result, 0), 1), $.arrayIndex($.arrayIndex(result, 1), 1)))

			// Add the lower bits of the middle term to the higher bits of the low term
			$.arrayIndex(result, 0)[1] = $.uint64Xor($.arrayIndex(result, 0)[1], $.arrayIndex($.arrayIndex(result, 2), 0))
			// Add the higher bits of the middle term to the lower bits of the high term
			$.arrayIndex(result, 1)[0] = $.uint64Xor($.arrayIndex(result, 1)[0], $.arrayIndex($.arrayIndex(result, 2), 1))

			// Reconstruct the 256-bit product from the low and high terms, shifted
			// by one bit to satisfy the GHASH construction.
			let z: bigint[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))
			z[0] = $.uint64Shl($.arrayIndex($.arrayIndex(result, 0), 0), 1n)
			z[1] = $.uint64Or(($.uint64Shl($.arrayIndex($.arrayIndex(result, 0), 1), 1n)), ($.uint64Shr($.arrayIndex($.arrayIndex(result, 0), 0), 63n)))
			z[2] = $.uint64Or(($.uint64Shl($.arrayIndex($.arrayIndex(result, 1), 0), 1n)), ($.uint64Shr($.arrayIndex($.arrayIndex(result, 0), 1), 63n)))
			z[3] = $.uint64Or(($.uint64Shl($.arrayIndex($.arrayIndex(result, 1), 1), 1n)), ($.uint64Shr($.arrayIndex($.arrayIndex(result, 1), 0), 63n)))

			// Reduce the 256-bit product modulo the field polynomial. z0 and z1 contain
			// the high-degree terms (255 to 128), and z2 and z3 contain the low-degree terms (127 to 0).
			for (let i = 0; i < 2; i++) {
				let lw = $.arrayIndex(z, i)
				// Add the remainders of the high-degree terms to the low-degree terms
				z[i + 2] = $.uint64Xor(z[i + 2], $.uint64Xor(($.uint64Xor(($.uint64Xor(lw, ($.uint64Shr(lw, 1n)))), ($.uint64Shr(lw, 2n)))), ($.uint64Shr(lw, 7n))))
				// Add the carrys from the reduction
				z[i + 1] = $.uint64Xor(z[i + 1], $.uint64Xor(($.uint64Xor(($.uint64Mul(lw, (2 ** 63))), ($.uint64Mul(lw, (2 ** 62))))), ($.uint64Mul(lw, (2 ** 57)))))
			}

			// Write the reduced 128-bit product back into y
			let __goscriptAssign0_0: number = $.uint($.arrayIndex(z, 2), 32)
			let __goscriptAssign0_1: number = $.uint($.uint64Shr($.arrayIndex(z, 2), 32n), 32)
			let __goscriptAssign0_2: number = $.uint($.arrayIndex(z, 3), 32)
			let __goscriptAssign0_3: number = $.uint($.uint64Shr($.arrayIndex(z, 3), 32n), 32)
			y[0] = __goscriptAssign0_0
			y[1] = __goscriptAssign0_1
			y[2] = __goscriptAssign0_2
			y[3] = __goscriptAssign0_3
			return true
		})
	})()
	if (__goscriptRangeReturn0) {
		return
	}

	for (let i = 0; i < 4; i++) {
		byteorder.BEPutUint32($.goSlice($.pointerValue<Uint8Array>(out), i * 4, (i * 4) + 4), $.arrayIndex(y, 3 - i))
	}
}

var __goscriptAwait: any
