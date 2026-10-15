// Generated file based on murmur128_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_murmur128 from "./murmur128.gs.ts"
import "@goscript/math/bits/index.js"
import "./murmur128.gs.ts"

export function Sum128(data: $.Slice<number>): [bigint, bigint] {
	let h1: bigint = 0n
	let h2: bigint = 0n
	return SeedSum128(0n, 0n, data)
}

export function SeedSum128(seed1: bigint, seed2: bigint, data: $.Slice<number>): [bigint, bigint] {
	let h1: bigint = 0n
	let h2: bigint = 0n
	let __goscriptAssign0_0: bigint = seed1
	let __goscriptAssign0_1: bigint = seed2
	h1 = __goscriptAssign0_0
	h2 = __goscriptAssign0_1
	let clen = $.sliceLen(data)
	while ($.sliceLen(data) >= 16) {
		// yes, this is faster than using binary.LittleEndian.Uint64
		let k1 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(data!, 0)), ($.uint64Shl($.uint64($.arrayIndex(data!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(data!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(data!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(data!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 7)), (2 ** 56))))
		let k2 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(data!, 8)), ($.uint64Shl($.uint64($.arrayIndex(data!, 9)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(data!, 10)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(data!, 11)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(data!, 12)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 13)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 14)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(data!, 15)), (2 ** 56))))

		data = $.goSlice(data, 16, undefined)

		k1 = $.uint64Mul(k1, 9782798678568883157n)
		k1 = bits.RotateLeft64(k1, 31)
		k1 = $.uint64Mul(k1, 5545529020109919103n)
		h1 = $.uint64Xor(h1, k1)

		h1 = bits.RotateLeft64(h1, 27)
		h1 = $.uint64Add(h1, h2)
		h1 = $.uint64Add(($.uint64Mul(h1, 5n)), 1390208809n)

		k2 = $.uint64Mul(k2, 5545529020109919103n)
		k2 = bits.RotateLeft64(k2, 33)
		k2 = $.uint64Mul(k2, 9782798678568883157n)
		h2 = $.uint64Xor(h2, k2)

		h2 = bits.RotateLeft64(h2, 31)
		h2 = $.uint64Add(h2, h1)
		h2 = $.uint64Add(($.uint64Mul(h2, 5n)), 944331445n)
	}

	let k1: bigint = 0n
	let k2: bigint = 0n
	switch ($.sliceLen(data)) {
		case 15:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex(data!, 14)), (2 ** 48)))
		}
		case 14:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex(data!, 13)), (2 ** 40)))
		}
		case 13:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex(data!, 12)), (2 ** 32)))
		}
		case 12:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex(data!, 11)), 24n))
		}
		case 11:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex(data!, 10)), 16n))
		}
		case 10:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex(data!, 9)), 8n))
		}
		case 9:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex(data!, 8)), 0n))

			k2 = $.uint64Mul(k2, 5545529020109919103n)
			k2 = bits.RotateLeft64(k2, 33)
			k2 = $.uint64Mul(k2, 9782798678568883157n)
			h2 = $.uint64Xor(h2, k2)
		}
		case 8:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex(data!, 7)), (2 ** 56)))
		}
		case 7:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex(data!, 6)), (2 ** 48)))
		}
		case 6:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex(data!, 5)), (2 ** 40)))
		}
		case 5:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex(data!, 4)), (2 ** 32)))
		}
		case 4:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex(data!, 3)), 24n))
		}
		case 3:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex(data!, 2)), 16n))
		}
		case 2:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex(data!, 1)), 8n))
		}
		case 1:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex(data!, 0)), 0n))
			k1 = $.uint64Mul(k1, 9782798678568883157n)
			k1 = bits.RotateLeft64(k1, 31)
			k1 = $.uint64Mul(k1, 5545529020109919103n)
			h1 = $.uint64Xor(h1, k1)
			break
		}
	}

	h1 = $.uint64Xor(h1, $.uint64(clen))
	h2 = $.uint64Xor(h2, $.uint64(clen))

	h1 = $.uint64Add(h1, h2)
	h2 = $.uint64Add(h2, h1)

	h1 = __goscript_murmur128.fmix64(h1)
	h2 = __goscript_murmur128.fmix64(h2)

	h1 = $.uint64Add(h1, h2)
	h2 = $.uint64Add(h2, h1)

	return [h1, h2]
}

export function StringSum128(data: string): [bigint, bigint] {
	let h1: bigint = 0n
	let h2: bigint = 0n
	return SeedStringSum128(0n, 0n, data)
}

export function SeedStringSum128(seed1: bigint, seed2: bigint, data: string): [bigint, bigint] {
	let h1: bigint = 0n
	let h2: bigint = 0n
	let __goscriptAssign1_0: bigint = seed1
	let __goscriptAssign1_1: bigint = seed2
	h1 = __goscriptAssign1_0
	h2 = __goscriptAssign1_1
	let clen = $.stringLen(data)
	while ($.stringLen(data) >= 16) {
		// yes, this is faster than using binary.LittleEndian.Uint64
		let k1 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.indexString(data, 0)), ($.uint64Shl($.uint64($.indexString(data, 1)), 8n)))), ($.uint64Shl($.uint64($.indexString(data, 2)), 16n)))), ($.uint64Shl($.uint64($.indexString(data, 3)), 24n)))), ($.uint64Mul($.uint64($.indexString(data, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.indexString(data, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.indexString(data, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.indexString(data, 7)), (2 ** 56))))
		let k2 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.indexString(data, 8)), ($.uint64Shl($.uint64($.indexString(data, 9)), 8n)))), ($.uint64Shl($.uint64($.indexString(data, 10)), 16n)))), ($.uint64Shl($.uint64($.indexString(data, 11)), 24n)))), ($.uint64Mul($.uint64($.indexString(data, 12)), (2 ** 32))))), ($.uint64Mul($.uint64($.indexString(data, 13)), (2 ** 40))))), ($.uint64Mul($.uint64($.indexString(data, 14)), (2 ** 48))))), ($.uint64Mul($.uint64($.indexString(data, 15)), (2 ** 56))))

		data = $.sliceStringOrBytes(data, 16, undefined)

		k1 = $.uint64Mul(k1, 9782798678568883157n)
		k1 = bits.RotateLeft64(k1, 31)
		k1 = $.uint64Mul(k1, 5545529020109919103n)
		h1 = $.uint64Xor(h1, k1)

		h1 = bits.RotateLeft64(h1, 27)
		h1 = $.uint64Add(h1, h2)
		h1 = $.uint64Add(($.uint64Mul(h1, 5n)), 1390208809n)

		k2 = $.uint64Mul(k2, 5545529020109919103n)
		k2 = bits.RotateLeft64(k2, 33)
		k2 = $.uint64Mul(k2, 9782798678568883157n)
		h2 = $.uint64Xor(h2, k2)

		h2 = bits.RotateLeft64(h2, 31)
		h2 = $.uint64Add(h2, h1)
		h2 = $.uint64Add(($.uint64Mul(h2, 5n)), 944331445n)
	}

	let k1: bigint = 0n
	let k2: bigint = 0n
	switch ($.stringLen(data)) {
		case 15:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.indexString(data, 14)), (2 ** 48)))
		}
		case 14:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.indexString(data, 13)), (2 ** 40)))
		}
		case 13:
		{
			k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.indexString(data, 12)), (2 ** 32)))
		}
		case 12:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.indexString(data, 11)), 24n))
		}
		case 11:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.indexString(data, 10)), 16n))
		}
		case 10:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.indexString(data, 9)), 8n))
		}
		case 9:
		{
			k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.indexString(data, 8)), 0n))

			k2 = $.uint64Mul(k2, 5545529020109919103n)
			k2 = bits.RotateLeft64(k2, 33)
			k2 = $.uint64Mul(k2, 9782798678568883157n)
			h2 = $.uint64Xor(h2, k2)
		}
		case 8:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.indexString(data, 7)), (2 ** 56)))
		}
		case 7:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.indexString(data, 6)), (2 ** 48)))
		}
		case 6:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.indexString(data, 5)), (2 ** 40)))
		}
		case 5:
		{
			k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.indexString(data, 4)), (2 ** 32)))
		}
		case 4:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.indexString(data, 3)), 24n))
		}
		case 3:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.indexString(data, 2)), 16n))
		}
		case 2:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.indexString(data, 1)), 8n))
		}
		case 1:
		{
			k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.indexString(data, 0)), 0n))
			k1 = $.uint64Mul(k1, 9782798678568883157n)
			k1 = bits.RotateLeft64(k1, 31)
			k1 = $.uint64Mul(k1, 5545529020109919103n)
			h1 = $.uint64Xor(h1, k1)
			break
		}
	}

	h1 = $.uint64Xor(h1, $.uint64(clen))
	h2 = $.uint64Xor(h2, $.uint64(clen))

	h1 = $.uint64Add(h1, h2)
	h2 = $.uint64Add(h2, h1)

	h1 = __goscript_murmur128.fmix64(h1)
	h2 = __goscript_murmur128.fmix64(h2)

	h1 = $.uint64Add(h1, h2)
	h2 = $.uint64Add(h2, h1)

	return [h1, h2]
}
