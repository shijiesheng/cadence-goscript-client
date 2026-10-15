// Generated file based on fnv.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export const offset64: number = 14695981039346656037

export const prime64: number = 1099511628211

export function hashNew(): bigint {
	return 14695981039346656037n
}

export function hashAdd(h: bigint, s: string): bigint {
	for (let i = 0; i < $.stringLen(s); i++) {
		h = $.uint64Xor(h, $.uint64($.indexString(s, i)))
		h = $.uint64Mul(h, 1099511628211n)
	}
	return h
}

export function hashAddByte(h: bigint, b: number): bigint {
	h = $.uint64Xor(h, $.uint64(b))
	h = $.uint64Mul(h, 1099511628211n)
	return h
}
