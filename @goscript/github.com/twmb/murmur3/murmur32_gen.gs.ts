// Generated file based on murmur32_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_murmur32 from "./murmur32.gs.ts"
import "@goscript/math/bits/index.js"
import "./murmur32.gs.ts"

export function Sum32(data: $.Slice<number>): number {
	return SeedSum32(0, data)
}

export function SeedSum32(seed: number, data: $.Slice<number>): number {
	let h1: number = 0
	h1 = seed
	let clen = $.uint($.sliceLen(data), 32)
	while ($.sliceLen(data) >= 4) {
		let k1 = $.uint((($.uint($.arrayIndex(data!, 0), 32) | ((($.uint($.arrayIndex(data!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(data!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(data!, 3), 32) << 24) >>> 0)), 32)
		data = $.goSlice(data, 4, undefined)

		k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
		k1 = bits.RotateLeft32(k1, 15)
		k1 = globalThis.Math.imul(k1, 461845907) >>> 0

		h1 = h1 ^ (k1)
		h1 = bits.RotateLeft32(h1, 13)
		h1 = $.uint((((globalThis.Math.imul(h1, 5) >>> 0) + 0xe6546b64) >>> 0), 32)
	}
	let k1: number = 0
	switch ($.sliceLen(data)) {
		case 3:
		{
			k1 = k1 ^ ($.uint((($.uint($.arrayIndex(data!, 2), 32) << 16) >>> 0), 32))
		}
		case 2:
		{
			k1 = k1 ^ ($.uint((($.uint($.arrayIndex(data!, 1), 32) << 8) >>> 0), 32))
		}
		case 1:
		{
			k1 = k1 ^ ($.uint($.arrayIndex(data!, 0), 32))
			k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
			k1 = bits.RotateLeft32(k1, 15)
			k1 = globalThis.Math.imul(k1, 461845907) >>> 0
			h1 = h1 ^ (k1)
			break
		}
	}

	h1 = h1 ^ ($.uint(clen, 32))

	h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))
	h1 = globalThis.Math.imul(h1, 0x85ebca6b) >>> 0
	h1 = h1 ^ ($.uint($.uintShr(h1, 13, 32), 32))
	h1 = globalThis.Math.imul(h1, 0xc2b2ae35) >>> 0
	h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))

	return h1
}

export function StringSum32(data: string): number {
	return SeedStringSum32(0, data)
}

export function SeedStringSum32(seed: number, data: string): number {
	let h1: number = 0
	h1 = seed
	let clen = $.uint($.stringLen(data), 32)
	while ($.stringLen(data) >= 4) {
		let k1 = $.uint((($.uint($.indexString(data, 0), 32) | ((($.uint($.indexString(data, 1), 32) << 8) >>> 0))) | ((($.uint($.indexString(data, 2), 32) << 16) >>> 0))) | ((($.uint($.indexString(data, 3), 32) << 24) >>> 0)), 32)
		data = $.sliceStringOrBytes(data, 4, undefined)

		k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
		k1 = bits.RotateLeft32(k1, 15)
		k1 = globalThis.Math.imul(k1, 461845907) >>> 0

		h1 = h1 ^ (k1)
		h1 = bits.RotateLeft32(h1, 13)
		h1 = $.uint((((globalThis.Math.imul(h1, 5) >>> 0) + 0xe6546b64) >>> 0), 32)
	}
	let k1: number = 0
	switch ($.stringLen(data)) {
		case 3:
		{
			k1 = k1 ^ ($.uint((($.uint($.indexString(data, 2), 32) << 16) >>> 0), 32))
		}
		case 2:
		{
			k1 = k1 ^ ($.uint((($.uint($.indexString(data, 1), 32) << 8) >>> 0), 32))
		}
		case 1:
		{
			k1 = k1 ^ ($.uint($.indexString(data, 0), 32))
			k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
			k1 = bits.RotateLeft32(k1, 15)
			k1 = globalThis.Math.imul(k1, 461845907) >>> 0
			h1 = h1 ^ (k1)
			break
		}
	}

	h1 = h1 ^ ($.uint(clen, 32))

	h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))
	h1 = globalThis.Math.imul(h1, 0x85ebca6b) >>> 0
	h1 = h1 ^ ($.uint($.uintShr(h1, 13, 32), 32))
	h1 = globalThis.Math.imul(h1, 0xc2b2ae35) >>> 0
	h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))

	return h1
}
