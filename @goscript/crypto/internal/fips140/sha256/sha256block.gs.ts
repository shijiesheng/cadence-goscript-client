// Generated file based on sha256block.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import type * as hash from "@goscript/hash/index.js"

import * as __goscript_sha256 from "./sha256.gs.ts"
import "@goscript/math/bits/index.js"
import "./sha256.gs.ts"

export var _K: number[]

export function __goscript_init__K(): void {
	if (((_K) as any) === undefined) {
		_K = $.arrayValue([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2])
	}
}

export function __goscript_get__K(): number[] {
	if (((_K) as any) === undefined) {
		__goscript_init__K()
	}
	return _K
}

export function __goscript_set__K(__goscriptValue: number[]): void {
	_K = __goscriptValue
}

export function blockGeneric(dig: __goscript_sha256.Digest | $.VarRef<__goscript_sha256.Digest> | null, p: $.Slice<number>): void {
	const dig$: __goscript_sha256.Digest = dig == null ? $.pointerTarget<__goscript_sha256.Digest>(dig) : (dig as any).__isVarRef === true ? (dig as any).value : (dig as any).__goValue === undefined ? (dig as any) : $.pointerTarget<__goscript_sha256.Digest>(dig)
	let w: number[] = $.arrayValue(globalThis.Array.from({ length: 64 }, () => 0))
	let h0 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 0)
	let h1 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 1)
	let h2 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 2)
	let h3 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 3)
	let h4 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 4)
	let h5 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 5)
	let h6 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 6)
	let h7 = $.arrayIndex((dig$ as __goscript_sha256.Digest).h, 7)
	while ($.sliceLen(p) >= 64) {
		let a = h0
		let b = h1
		let c = h2
		let d = h3
		let e = h4
		let f = h5
		let g = h6
		let h = h7

		for (let __goscriptSliceWindow0 = $.sliceRange(p), i = 0; i < 64; i++) {
			if (i < 16) {
				let j = i * 4
				w[i] = $.uint(((((($.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number), 32) << 24) >>> 0)) | ((($.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] as number), 32) << 16) >>> 0))) | ((($.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 2)] as number), 32) << 8) >>> 0))) | $.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 3)] as number), 32), 32)
			} else {
				let v1 = $.arrayIndex(w, i - 2)
				let t1 = $.uint(((bits.RotateLeft32(v1, -17)) ^ (bits.RotateLeft32(v1, -19))) ^ ($.uintShr(v1, 10, 32)), 32)
				let v2 = $.arrayIndex(w, i - 15)
				let t2 = $.uint(((bits.RotateLeft32(v2, -7)) ^ (bits.RotateLeft32(v2, -18))) ^ ($.uintShr(v2, 3, 32)), 32)
				w[i] = $.uint(((((((((t1 + $.arrayIndex(w, i - 7)) >>> 0)) + t2) >>> 0)) + $.arrayIndex(w, i - 16)) >>> 0), 32)
			}

			let t1: number = $.uint((((((((((((h + (((bits.RotateLeft32(e, -6)) ^ (bits.RotateLeft32(e, -11))) ^ (bits.RotateLeft32(e, -25)))) >>> 0)) + ((e & f) ^ ($.uint(~e, 32) & g))) >>> 0)) + $.arrayIndex(__goscript_get__K(), i)) >>> 0)) + $.arrayIndex(w, i)) >>> 0), 32)

			let t2: number = $.uint((((((bits.RotateLeft32(a, -2)) ^ (bits.RotateLeft32(a, -13))) ^ (bits.RotateLeft32(a, -22))) + (((a & b) ^ (a & c)) ^ (b & c))) >>> 0), 32)

			h = g
			g = f
			f = e
			e = $.uint(((d + t1) >>> 0), 32)
			d = c
			c = b
			b = a
			a = $.uint(((t1 + t2) >>> 0), 32)
		}

		h0 = $.uint(h0 + (a), 32)
		h1 = $.uint(h1 + (b), 32)
		h2 = $.uint(h2 + (c), 32)
		h3 = $.uint(h3 + (d), 32)
		h4 = $.uint(h4 + (e), 32)
		h5 = $.uint(h5 + (f), 32)
		h6 = $.uint(h6 + (g), 32)
		h7 = $.uint(h7 + (h), 32)

		p = $.goSlice(p, 64, undefined)
	}

	let __goscriptAssign0_0: number = h0
	let __goscriptAssign0_1: number = h1
	let __goscriptAssign0_2: number = h2
	let __goscriptAssign0_3: number = h3
	let __goscriptAssign0_4: number = h4
	let __goscriptAssign0_5: number = h5
	let __goscriptAssign0_6: number = h6
	let __goscriptAssign0_7: number = h7;
	;(dig$ as __goscript_sha256.Digest).h[0] = __goscriptAssign0_0;
	;(dig$ as __goscript_sha256.Digest).h[1] = __goscriptAssign0_1;
	;(dig$ as __goscript_sha256.Digest).h[2] = __goscriptAssign0_2;
	;(dig$ as __goscript_sha256.Digest).h[3] = __goscriptAssign0_3;
	;(dig$ as __goscript_sha256.Digest).h[4] = __goscriptAssign0_4;
	;(dig$ as __goscript_sha256.Digest).h[5] = __goscriptAssign0_5;
	;(dig$ as __goscript_sha256.Digest).h[6] = __goscriptAssign0_6;
	;(dig$ as __goscript_sha256.Digest).h[7] = __goscriptAssign0_7
}
