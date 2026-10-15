// Generated file based on ctoa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_ftoa from "./ftoa.gs.ts"
import "./ftoa.gs.ts"

export function FormatComplex(c: $.Complex, fmt: number, prec: number, bitSize: number): string {
	let buf: Uint8Array = $.arrayValue(new Uint8Array(64))
	return $.bytesToString(AppendComplex($.goSlice(buf, undefined, 0), c, fmt, prec, bitSize))
}

export function AppendComplex(dst: $.Slice<number>, c: $.Complex, fmt: number, prec: number, bitSize: number): $.Slice<number> {
	if ((bitSize != 64) && (bitSize != 128)) {
		$.panic("invalid bitSize")
	}
	bitSize = bitSize >> (1)

	dst = $.append(dst, $.uint(40, 8), $.byteSliceHint)
	dst = __goscript_ftoa.AppendFloat(dst, $.real(c), fmt, prec, bitSize)
	let i = $.sliceLen(dst)
	dst = __goscript_ftoa.AppendFloat(dst, $.imag(c), fmt, prec, bitSize)
	// Check if imaginary part has a sign. If not, add one.
	if (($.arrayIndex(dst!, i) != 43) && ($.arrayIndex(dst!, i) != 45)) {
		dst = $.append(dst, $.uint(0, 8), $.byteSliceHint)
		$.copyByteRanges(dst, i + 1, undefined, dst, i, undefined)
		$.sliceElems(dst!)[$.sliceSlot(dst!, i)] = 43
	}
	dst = $.appendSlice(dst, $.stringToBytes("i)"), $.byteSliceHint)
	return dst
}
