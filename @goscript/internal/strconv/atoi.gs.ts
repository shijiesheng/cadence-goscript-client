// Generated file based on atoi.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("internal/strconv", ["strconv.Error"])

export type Error = number

$.registerNamedValueType(
	"strconv.Error",
	{Error: (receiver: any, ...args: any[]) => (Error_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*strconv.Error",
	{Error: (receiver: any, ...args: any[]) => (Error_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const ErrRange: Error = 1

export const ErrSyntax: Error = 2

export const ErrBase: Error = 3

export const ErrBitSize: Error = 4

export const intSize: number = 64

export const IntSize: number = 64

export function lower(c: number): number {
	return $.uint(c | (((120 - 88) & 0xff)), 8)
}

export function Error_Error(e: Error): string {
	switch (e) {
		case 1:
		{
			return "value out of range"
			break
		}
		case 2:
		{
			return "invalid syntax"
			break
		}
		case 3:
		{
			return "invalid base"
			break
		}
		case 4:
		{
			return "invalid bit size"
			break
		}
	}
	return "unknown error"
}

export function ParseUint(s: string, base: number, bitSize: number): [bigint, $.GoError] {
	const fnParseUint: string = "ParseUint"

	if ($.stringEqual(s, "")) {
		return [0n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}

	let base0 = base == 0

	let s0 = s
	switch ((true as boolean)) {
		case (2 <= base) && (base <= 36):
		{
			break
		}
		case base == 0:
		{
			base = 10
			if ($.indexString(s, 0) == 48) {
				switch ((true as boolean)) {
					case ($.stringLen(s) >= 3) && (lower($.indexString(s, 1)) == 98):
					{
						base = 2
						s = $.sliceStringOrBytes(s, 2, undefined)
						break
					}
					case ($.stringLen(s) >= 3) && (lower($.indexString(s, 1)) == 111):
					{
						base = 8
						s = $.sliceStringOrBytes(s, 2, undefined)
						break
					}
					case ($.stringLen(s) >= 3) && (lower($.indexString(s, 1)) == 120):
					{
						base = 16
						s = $.sliceStringOrBytes(s, 2, undefined)
						break
					}
					default:
					{
						base = 8
						s = $.sliceStringOrBytes(s, 1, undefined)
						break
					}
				}
			}
			break
		}
		default:
		{
			return [0n, $.namedValueInterfaceValue<$.GoError>(3, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
			break
		}
	}

	if (bitSize == 0) {
		bitSize = 64
	} else {
		if ((bitSize < 0) || (bitSize > 64)) {
			return [0n, $.namedValueInterfaceValue<$.GoError>(4, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}
	}

	// Cutoff is the smallest number such that cutoff*base > maxUint64.
	// Use compile-time constants for common cases.
	const maxUint64: number = 18446744073709551615
	let cutoff: bigint = 0n
	switch (base) {
		case 10:
		{
			cutoff = 1844674407370955162n
			break
		}
		case 16:
		{
			cutoff = 1152921504606846976n
			break
		}
		default:
		{
			cutoff = $.uint64Add(($.uint64Div(18446744073709551615n, $.uint64(base))), 1n)
			break
		}
	}

	let maxVal = $.uint64Sub(($.uint64Shl(1n, $.uint(bitSize, 64))), 1n)

	let underscores = false
	let n: bigint = 0n
	for (let __goscriptRangeTarget0 = $.stringToBytes(s), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		let d: number = 0
		switch ((true as boolean)) {
			case (c == 95) && base0:
			{
				underscores = true
				continue
				break
			}
			case (48 <= c) && (c <= 57):
			{
				d = $.uint(((c - 48) & 0xff), 8)
				break
			}
			case (97 <= lower(c)) && (lower(c) <= 122):
			{
				d = $.uint((((((lower(c) - 97) & 0xff)) + 10) & 0xff), 8)
				break
			}
			default:
			{
				return [0n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
				break
			}
		}

		if (d >= $.uint(base, 8)) {
			return [0n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}

		if (n >= cutoff) {
			// n*base overflows
			return [maxVal, $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}
		n = $.uint64Mul(n, $.uint64(base))

		let n1: bigint = $.uint64Add(n, $.uint64(d))
		if ((n1 < n) || (n1 > maxVal)) {
			// n+d overflows
			return [maxVal, $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}
		n = n1
	}

	if (underscores && !underscoreOK(s0)) {
		return [0n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}

	return [n, null]
}

export function ParseInt(s: string, base: number, bitSize: number): [bigint, $.GoError] {
	let i: bigint = 0n
	let err: $.GoError = null! as $.GoError
	const fnParseInt: string = "ParseInt"

	if ($.stringEqual(s, "")) {
		return [0n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}

	// Pick off leading sign.
	let neg = false
	switch ($.indexString(s, 0)) {
		case 43:
		{
			s = $.sliceStringOrBytes(s, 1, undefined)
			break
		}
		case 45:
		{
			s = $.sliceStringOrBytes(s, 1, undefined)
			neg = true
			break
		}
	}

	// Convert unsigned and check range.
	let un: bigint = 0n
	let __goscriptTuple0: any = ParseUint(s, base, bitSize)
	un = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if ((err != null) && (!$.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))))) {
		return [0n, err]
	}

	if (bitSize == 0) {
		bitSize = 64
	}

	let cutoff = $.uint64($.uint64Shl(1n, $.uint(bitSize - 1, 64)))
	if (!neg && (un >= cutoff)) {
		return [$.int64($.uint64Sub(cutoff, 1n)), $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	if (neg && (un > cutoff)) {
		return [-$.int64(cutoff), $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	let n = $.int64(un)
	if (neg) {
		n = -n
	}
	return [n, null]
}

export function Atoi(s: string): [number, $.GoError] {
	const fnAtoi: string = "Atoi"

	let sLen = $.stringLen(s)
	if ((((64 as number) == 32) && ((0 < sLen) && (sLen < 10))) || (((64 as number) == 64) && ((0 < sLen) && (sLen < 19)))) {
		// Fast path for small integers that fit int type.
		let s0 = s
		if (($.indexString(s, 0) == 45) || ($.indexString(s, 0) == 43)) {
			s = $.sliceStringOrBytes(s, 1, undefined)
			if ($.stringLen(s) < 1) {
				return [0, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
			}
		}

		let n = 0
		for (let __goscriptRangeTarget1 = $.stringToBytes(s), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ch = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
			ch = $.uint(ch - (48), 8)
			if (ch > 9) {
				return [0, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
			}
			n = (n * 10) + $.int(ch)
		}
		if ($.indexString(s0, 0) == 45) {
			n = -n
		}
		return [n, null]
	}

	// Slow path for invalid, big, or underscored integers.
	let [i64, err] = ParseInt(s, 10, 0)
	return [$.int(i64), err]
}

export function underscoreOK(s: string): boolean {
	// saw tracks the last character (class) we saw:
	// ^ for beginning of number,
	// 0 for a digit or base prefix,
	// _ for an underscore,
	// ! for none of the above.
	let saw = 94
	let i = 0

	// Optional sign.
	if (($.stringLen(s) >= 1) && (($.indexString(s, 0) == 45) || ($.indexString(s, 0) == 43))) {
		s = $.sliceStringOrBytes(s, 1, undefined)
	}

	// Optional base prefix.
	let hex = false
	if ((($.stringLen(s) >= 2) && ($.indexString(s, 0) == 48)) && (((lower($.indexString(s, 1)) == 98) || (lower($.indexString(s, 1)) == 111)) || (lower($.indexString(s, 1)) == 120))) {
		i = 2
		saw = 48
		hex = lower($.indexString(s, 1)) == 120
	}

	// Number proper.
	for (; i < $.stringLen(s); i++) {
		// Digits are always okay.
		if (((48 <= $.indexString(s, i)) && ($.indexString(s, i) <= 57)) || ((hex && (97 <= lower($.indexString(s, i)))) && (lower($.indexString(s, i)) <= 102))) {
			saw = 48
			continue
		}
		// Underscore must follow digit.
		if ($.indexString(s, i) == 95) {
			if (saw != 48) {
				return false
			}
			saw = 95
			continue
		}
		// Underscore must also be followed by digit.
		if (saw == 95) {
			return false
		}
		// Saw non-digit, non-underscore.
		saw = 33
	}
	return saw != 95
}
