// Generated file based on md5block.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as bits from "@goscript/math/bits/index.js"

import type * as hash from "@goscript/hash/index.js"

import * as __goscript_md5 from "./md5.gs.ts"
import "@goscript/internal/byteorder/index.js"
import "@goscript/math/bits/index.js"
import "./md5.gs.ts"

export function blockGeneric(dig: __goscript_md5.digest | $.VarRef<__goscript_md5.digest> | null, p: $.Slice<number>): void {
	const dig$: __goscript_md5.digest = dig == null ? $.pointerTarget<__goscript_md5.digest>(dig) : (dig as any).__isVarRef === true ? (dig as any).value : (dig as any).__goValue === undefined ? (dig as any) : $.pointerTarget<__goscript_md5.digest>(dig)
	// load state
	let a = $.arrayIndex((dig$ as __goscript_md5.digest).s, 0)
	let b = $.arrayIndex((dig$ as __goscript_md5.digest).s, 1)
	let c = $.arrayIndex((dig$ as __goscript_md5.digest).s, 2)
	let d = $.arrayIndex((dig$ as __goscript_md5.digest).s, 3)

	for (let i = 0; i <= ($.sliceLen(p) - 64); i = i + (64)) {
		// eliminate bounds checks on p
		let q: $.Slice<number> = $.goSlice(p, i, undefined)
		q = $.goSlice(q, undefined, 64, 64)

		// save current state
		let aa = a
		let bb = b
		let cc = c
		let dd = d

		// load input block
		let x0 = byteorder.LEUint32($.goSlice(q, 4 * 0x0, undefined))
		let x1 = byteorder.LEUint32($.goSlice(q, 4 * 0x1, undefined))
		let x2 = byteorder.LEUint32($.goSlice(q, 4 * 0x2, undefined))
		let x3 = byteorder.LEUint32($.goSlice(q, 4 * 0x3, undefined))
		let x4 = byteorder.LEUint32($.goSlice(q, 4 * 0x4, undefined))
		let x5 = byteorder.LEUint32($.goSlice(q, 4 * 0x5, undefined))
		let x6 = byteorder.LEUint32($.goSlice(q, 4 * 0x6, undefined))
		let x7 = byteorder.LEUint32($.goSlice(q, 4 * 0x7, undefined))
		let x8 = byteorder.LEUint32($.goSlice(q, 4 * 0x8, undefined))
		let x9 = byteorder.LEUint32($.goSlice(q, 4 * 0x9, undefined))
		let xa = byteorder.LEUint32($.goSlice(q, 4 * 0xa, undefined))
		let xb = byteorder.LEUint32($.goSlice(q, 4 * 0xb, undefined))
		let xc = byteorder.LEUint32($.goSlice(q, 4 * 0xc, undefined))
		let xd = byteorder.LEUint32($.goSlice(q, 4 * 0xd, undefined))
		let xe = byteorder.LEUint32($.goSlice(q, 4 * 0xe, undefined))
		let xf = byteorder.LEUint32($.goSlice(q, 4 * 0xf, undefined))

		// round 1
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((c ^ d) & b) ^ d) + a) >>> 0)) + x0) >>> 0)) + 0xd76aa478) >>> 0), 32), 7)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((b ^ c) & a) ^ c) + d) >>> 0)) + x1) >>> 0)) + 0xe8c7b756) >>> 0), 32), 12)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((a ^ b) & d) ^ b) + c) >>> 0)) + x2) >>> 0)) + 0x242070db) >>> 0), 32), 17)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((d ^ a) & c) ^ a) + b) >>> 0)) + x3) >>> 0)) + 0xc1bdceee) >>> 0), 32), 22)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((c ^ d) & b) ^ d) + a) >>> 0)) + x4) >>> 0)) + 0xf57c0faf) >>> 0), 32), 7)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((b ^ c) & a) ^ c) + d) >>> 0)) + x5) >>> 0)) + 0x4787c62a) >>> 0), 32), 12)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((a ^ b) & d) ^ b) + c) >>> 0)) + x6) >>> 0)) + 0xa8304613) >>> 0), 32), 17)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((d ^ a) & c) ^ a) + b) >>> 0)) + x7) >>> 0)) + 0xfd469501) >>> 0), 32), 22)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((c ^ d) & b) ^ d) + a) >>> 0)) + x8) >>> 0)) + 0x698098d8) >>> 0), 32), 7)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((b ^ c) & a) ^ c) + d) >>> 0)) + x9) >>> 0)) + 0x8b44f7af) >>> 0), 32), 12)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((a ^ b) & d) ^ b) + c) >>> 0)) + xa) >>> 0)) + 0xffff5bb1) >>> 0), 32), 17)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((d ^ a) & c) ^ a) + b) >>> 0)) + xb) >>> 0)) + 0x895cd7be) >>> 0), 32), 22)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((c ^ d) & b) ^ d) + a) >>> 0)) + xc) >>> 0)) + 0x6b901122) >>> 0), 32), 7)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((b ^ c) & a) ^ c) + d) >>> 0)) + xd) >>> 0)) + 0xfd987193) >>> 0), 32), 12)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((a ^ b) & d) ^ b) + c) >>> 0)) + xe) >>> 0)) + 0xa679438e) >>> 0), 32), 17)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((d ^ a) & c) ^ a) + b) >>> 0)) + xf) >>> 0)) + 0x49b40821) >>> 0), 32), 22)) >>> 0), 32)

		// round 2
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((b ^ c) & d) ^ c) + a) >>> 0)) + x1) >>> 0)) + 0xf61e2562) >>> 0), 32), 5)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((a ^ b) & c) ^ b) + d) >>> 0)) + x6) >>> 0)) + 0xc040b340) >>> 0), 32), 9)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((d ^ a) & b) ^ a) + c) >>> 0)) + xb) >>> 0)) + 0x265e5a51) >>> 0), 32), 14)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((c ^ d) & a) ^ d) + b) >>> 0)) + x0) >>> 0)) + 0xe9b6c7aa) >>> 0), 32), 20)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((b ^ c) & d) ^ c) + a) >>> 0)) + x5) >>> 0)) + 0xd62f105d) >>> 0), 32), 5)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((a ^ b) & c) ^ b) + d) >>> 0)) + xa) >>> 0)) + 0x02441453) >>> 0), 32), 9)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((d ^ a) & b) ^ a) + c) >>> 0)) + xf) >>> 0)) + 0xd8a1e681) >>> 0), 32), 14)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((c ^ d) & a) ^ d) + b) >>> 0)) + x4) >>> 0)) + 0xe7d3fbc8) >>> 0), 32), 20)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((b ^ c) & d) ^ c) + a) >>> 0)) + x9) >>> 0)) + 0x21e1cde6) >>> 0), 32), 5)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((a ^ b) & c) ^ b) + d) >>> 0)) + xe) >>> 0)) + 0xc33707d6) >>> 0), 32), 9)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((d ^ a) & b) ^ a) + c) >>> 0)) + x3) >>> 0)) + 0xf4d50d87) >>> 0), 32), 14)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((c ^ d) & a) ^ d) + b) >>> 0)) + x8) >>> 0)) + 0x455a14ed) >>> 0), 32), 20)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((((b ^ c) & d) ^ c) + a) >>> 0)) + xd) >>> 0)) + 0xa9e3e905) >>> 0), 32), 5)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((((a ^ b) & c) ^ b) + d) >>> 0)) + x2) >>> 0)) + 0xfcefa3f8) >>> 0), 32), 9)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((((d ^ a) & b) ^ a) + c) >>> 0)) + x7) >>> 0)) + 0x676f02d9) >>> 0), 32), 14)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((((c ^ d) & a) ^ d) + b) >>> 0)) + xc) >>> 0)) + 0x8d2a4c8a) >>> 0), 32), 20)) >>> 0), 32)

		// round 3
		a = $.uint(((b + bits.RotateLeft32($.uint(((((((((((b ^ c) ^ d) + a) >>> 0)) + x5) >>> 0)) + 0xfffa3942) >>> 0), 32), 4)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint(((((((((((a ^ b) ^ c) + d) >>> 0)) + x8) >>> 0)) + 0x8771f681) >>> 0), 32), 11)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint(((((((((((d ^ a) ^ b) + c) >>> 0)) + xb) >>> 0)) + 0x6d9d6122) >>> 0), 32), 16)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint(((((((((((c ^ d) ^ a) + b) >>> 0)) + xe) >>> 0)) + 0xfde5380c) >>> 0), 32), 23)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint(((((((((((b ^ c) ^ d) + a) >>> 0)) + x1) >>> 0)) + 0xa4beea44) >>> 0), 32), 4)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint(((((((((((a ^ b) ^ c) + d) >>> 0)) + x4) >>> 0)) + 0x4bdecfa9) >>> 0), 32), 11)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint(((((((((((d ^ a) ^ b) + c) >>> 0)) + x7) >>> 0)) + 0xf6bb4b60) >>> 0), 32), 16)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint(((((((((((c ^ d) ^ a) + b) >>> 0)) + xa) >>> 0)) + 0xbebfbc70) >>> 0), 32), 23)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint(((((((((((b ^ c) ^ d) + a) >>> 0)) + xd) >>> 0)) + 0x289b7ec6) >>> 0), 32), 4)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint(((((((((((a ^ b) ^ c) + d) >>> 0)) + x0) >>> 0)) + 0xeaa127fa) >>> 0), 32), 11)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint(((((((((((d ^ a) ^ b) + c) >>> 0)) + x3) >>> 0)) + 0xd4ef3085) >>> 0), 32), 16)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint(((((((((((c ^ d) ^ a) + b) >>> 0)) + x6) >>> 0)) + 0x04881d05) >>> 0), 32), 23)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint(((((((((((b ^ c) ^ d) + a) >>> 0)) + x9) >>> 0)) + 0xd9d4d039) >>> 0), 32), 4)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint(((((((((((a ^ b) ^ c) + d) >>> 0)) + xc) >>> 0)) + 0xe6db99e5) >>> 0), 32), 11)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint(((((((((((d ^ a) ^ b) + c) >>> 0)) + xf) >>> 0)) + 0x1fa27cf8) >>> 0), 32), 16)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint(((((((((((c ^ d) ^ a) + b) >>> 0)) + x2) >>> 0)) + 0xc4ac5665) >>> 0), 32), 23)) >>> 0), 32)

		// round 4
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((c ^ (b | $.uint(~d, 32))) + a) >>> 0)) + x0) >>> 0)) + 0xf4292244) >>> 0), 32), 6)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((b ^ (a | $.uint(~c, 32))) + d) >>> 0)) + x7) >>> 0)) + 0x432aff97) >>> 0), 32), 10)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((a ^ (d | $.uint(~b, 32))) + c) >>> 0)) + xe) >>> 0)) + 0xab9423a7) >>> 0), 32), 15)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((d ^ (c | $.uint(~a, 32))) + b) >>> 0)) + x5) >>> 0)) + 0xfc93a039) >>> 0), 32), 21)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((c ^ (b | $.uint(~d, 32))) + a) >>> 0)) + xc) >>> 0)) + 0x655b59c3) >>> 0), 32), 6)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((b ^ (a | $.uint(~c, 32))) + d) >>> 0)) + x3) >>> 0)) + 0x8f0ccc92) >>> 0), 32), 10)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((a ^ (d | $.uint(~b, 32))) + c) >>> 0)) + xa) >>> 0)) + 0xffeff47d) >>> 0), 32), 15)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((d ^ (c | $.uint(~a, 32))) + b) >>> 0)) + x1) >>> 0)) + 0x85845dd1) >>> 0), 32), 21)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((c ^ (b | $.uint(~d, 32))) + a) >>> 0)) + x8) >>> 0)) + 0x6fa87e4f) >>> 0), 32), 6)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((b ^ (a | $.uint(~c, 32))) + d) >>> 0)) + xf) >>> 0)) + 0xfe2ce6e0) >>> 0), 32), 10)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((a ^ (d | $.uint(~b, 32))) + c) >>> 0)) + x6) >>> 0)) + 0xa3014314) >>> 0), 32), 15)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((d ^ (c | $.uint(~a, 32))) + b) >>> 0)) + xd) >>> 0)) + 0x4e0811a1) >>> 0), 32), 21)) >>> 0), 32)
		a = $.uint(((b + bits.RotateLeft32($.uint((((((((((c ^ (b | $.uint(~d, 32))) + a) >>> 0)) + x4) >>> 0)) + 0xf7537e82) >>> 0), 32), 6)) >>> 0), 32)
		d = $.uint(((a + bits.RotateLeft32($.uint((((((((((b ^ (a | $.uint(~c, 32))) + d) >>> 0)) + xb) >>> 0)) + 0xbd3af235) >>> 0), 32), 10)) >>> 0), 32)
		c = $.uint(((d + bits.RotateLeft32($.uint((((((((((a ^ (d | $.uint(~b, 32))) + c) >>> 0)) + x2) >>> 0)) + 0x2ad7d2bb) >>> 0), 32), 15)) >>> 0), 32)
		b = $.uint(((c + bits.RotateLeft32($.uint((((((((((d ^ (c | $.uint(~a, 32))) + b) >>> 0)) + x9) >>> 0)) + 0xeb86d391) >>> 0), 32), 21)) >>> 0), 32)

		// add saved state
		a = $.uint(a + (aa), 32)
		b = $.uint(b + (bb), 32)
		c = $.uint(c + (cc), 32)
		d = $.uint(d + (dd), 32)
	}

	// save state
	let __goscriptAssign0_0: number = a
	let __goscriptAssign0_1: number = b
	let __goscriptAssign0_2: number = c
	let __goscriptAssign0_3: number = d;
	;(dig$ as __goscript_md5.digest).s[0] = __goscriptAssign0_0;
	;(dig$ as __goscript_md5.digest).s[1] = __goscriptAssign0_1;
	;(dig$ as __goscript_md5.digest).s[2] = __goscriptAssign0_2;
	;(dig$ as __goscript_md5.digest).s[3] = __goscriptAssign0_3
}
