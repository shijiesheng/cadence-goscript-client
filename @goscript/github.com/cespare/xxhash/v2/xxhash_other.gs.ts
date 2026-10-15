// Generated file based on xxhash_other.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_xxhash from "./xxhash.gs.ts"

import type * as __goscript_xxhash_unsafe from "./xxhash_unsafe.gs.ts"
import "./xxhash.gs.ts"

export function Sum64(b: $.Slice<number>): bigint {
	// A simpler version would be
	//   d := New()
	//   d.Write(b)
	//   return d.Sum64()
	// but this is faster, particularly for small inputs.

	let n = $.sliceLen(b)
	let h: bigint = 0n

	if (n >= 32) {
		let v1 = $.uint64Add($.arrayIndex(__goscript_xxhash.primes, 0), 14029467366897019727n)
		let v2 = 14029467366897019727n
		let v3 = 0n
		let v4 = -$.arrayIndex(__goscript_xxhash.primes, 0)
		while ($.sliceLen(b) >= 32) {
			v1 = __goscript_xxhash.round(v1, __goscript_xxhash.u64($.goSlice(b, 0, 8, $.sliceLen(b))))
			v2 = __goscript_xxhash.round(v2, __goscript_xxhash.u64($.goSlice(b, 8, 16, $.sliceLen(b))))
			v3 = __goscript_xxhash.round(v3, __goscript_xxhash.u64($.goSlice(b, 16, 24, $.sliceLen(b))))
			v4 = __goscript_xxhash.round(v4, __goscript_xxhash.u64($.goSlice(b, 24, 32, $.sliceLen(b))))
			b = $.goSlice(b, 32, $.sliceLen(b), $.sliceLen(b))
		}
		h = $.uint64Add(($.uint64Add(($.uint64Add(__goscript_xxhash.rol1(v1), __goscript_xxhash.rol7(v2))), __goscript_xxhash.rol12(v3))), __goscript_xxhash.rol18(v4))
		h = __goscript_xxhash.mergeRound(h, v1)
		h = __goscript_xxhash.mergeRound(h, v2)
		h = __goscript_xxhash.mergeRound(h, v3)
		h = __goscript_xxhash.mergeRound(h, v4)
	} else {
		h = 2870177450012600261n
	}

	h = $.uint64Add(h, $.uint64(n))

	for (; $.sliceLen(b) >= 8; b = $.goSlice(b, 8, undefined)) {
		let k1 = __goscript_xxhash.round(0n, __goscript_xxhash.u64($.goSlice(b, undefined, 8)))
		h = $.uint64Xor(h, k1)
		h = $.uint64Add(($.uint64Mul(__goscript_xxhash.rol27(h), 11400714785074694791n)), 9650029242287828579n)
	}
	if ($.sliceLen(b) >= 4) {
		h = $.uint64Xor(h, $.uint64Mul($.uint64(__goscript_xxhash.u32($.goSlice(b, undefined, 4))), 11400714785074694791n))
		h = $.uint64Add(($.uint64Mul(__goscript_xxhash.rol23(h), 14029467366897019727n)), 1609587929392839161n)
		b = $.goSlice(b, 4, undefined)
	}
	for (; $.sliceLen(b) > 0; b = $.goSlice(b, 1, undefined)) {
		h = $.uint64Xor(h, $.uint64Mul($.uint64($.arrayIndex(b!, 0)), 2870177450012600261n))
		h = $.uint64Mul(__goscript_xxhash.rol11(h), 11400714785074694791n)
	}

	h = $.uint64Xor(h, $.uint64Shr(h, 33n))
	h = $.uint64Mul(h, 14029467366897019727n)
	h = $.uint64Xor(h, $.uint64Shr(h, 29n))
	h = $.uint64Mul(h, 1609587929392839161n)
	h = $.uint64Xor(h, $.uint64Shr(h, 32n))

	return h
}

export function writeBlocks(d: __goscript_xxhash.Digest | $.VarRef<__goscript_xxhash.Digest> | null, b: $.Slice<number>): number {
	const d$: __goscript_xxhash.Digest = d == null ? $.pointerTarget<__goscript_xxhash.Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_xxhash.Digest>(d)
	let v1 = (d$ as __goscript_xxhash.Digest).v1
	let v2 = (d$ as __goscript_xxhash.Digest).v2
	let v3 = (d$ as __goscript_xxhash.Digest).v3
	let v4 = (d$ as __goscript_xxhash.Digest).v4
	let n = $.sliceLen(b)
	while ($.sliceLen(b) >= 32) {
		v1 = __goscript_xxhash.round(v1, __goscript_xxhash.u64($.goSlice(b, 0, 8, $.sliceLen(b))))
		v2 = __goscript_xxhash.round(v2, __goscript_xxhash.u64($.goSlice(b, 8, 16, $.sliceLen(b))))
		v3 = __goscript_xxhash.round(v3, __goscript_xxhash.u64($.goSlice(b, 16, 24, $.sliceLen(b))))
		v4 = __goscript_xxhash.round(v4, __goscript_xxhash.u64($.goSlice(b, 24, 32, $.sliceLen(b))))
		b = $.goSlice(b, 32, $.sliceLen(b), $.sliceLen(b))
	}
	let __goscriptAssign0_0: bigint = v1
	let __goscriptAssign0_1: bigint = v2
	let __goscriptAssign0_2: bigint = v3
	let __goscriptAssign0_3: bigint = v4;
	;(d$ as __goscript_xxhash.Digest).v1 = __goscriptAssign0_0;
	;(d$ as __goscript_xxhash.Digest).v2 = __goscriptAssign0_1;
	;(d$ as __goscript_xxhash.Digest).v3 = __goscriptAssign0_2;
	;(d$ as __goscript_xxhash.Digest).v4 = __goscriptAssign0_3
	return n - $.sliceLen(b)
}
