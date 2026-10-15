// Generated file based on ftoa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_atof from "./atof.gs.ts"

import * as __goscript_atoi from "./atoi.gs.ts"

import * as __goscript_decimal from "./decimal.gs.ts"

import * as __goscript_deps from "./deps.gs.ts"

import * as __goscript_itoa from "./itoa.gs.ts"

import * as __goscript_uscale from "./uscale.gs.ts"
import "@goscript/math/bits/index.js"
import "@goscript/unsafe/index.js"
import "./atof.gs.ts"
import "./atoi.gs.ts"
import "./decimal.gs.ts"
import "./deps.gs.ts"
import "./itoa.gs.ts"
import "./uscale.gs.ts"

export const lowerhex: string = "0123456789abcdef"

export const upperhex: string = "0123456789ABCDEF"

export const float32MantBits: number = 23

export const float32ExpBits: number = 8

export const float32Bias: number = -127

export const float32MinExp: number = -189

export const float64MantBits: number = 52

export const float64ExpBits: number = 11

export const float64Bias: number = -1023

export const float64MinExp: number = -1085

export function FormatFloat(f: number, fmt: number, prec: number, bitSize: number): string {
	if (bitSize == 32) {
		return $.bytesToString(ftoa32($.makeSlice<number>(0, $.max(prec + 4, 24), "byte"), globalThis.Math.fround(f), fmt, prec))
	}
	if (bitSize == 64) {
		return $.bytesToString(ftoa64($.makeSlice<number>(0, $.max(prec + 4, 24), "byte"), f, fmt, prec))
	}
	$.panic("strconv: illegal FormatFloat bitSize")
	throw new globalThis.Error("goscript: unreachable return")
}

export function AppendFloat(dst: $.Slice<number>, f: number, fmt: number, prec: number, bitSize: number): $.Slice<number> {
	if (bitSize == 32) {
		return ftoa32(dst, globalThis.Math.fround(f), fmt, prec)
	}
	if (bitSize == 64) {
		return ftoa64(dst, f, fmt, prec)
	}
	$.panic("strconv: illegal AppendFloat bitSize")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ftoa32(dst: $.Slice<number>, val: number, fmt: number, prec: number): $.Slice<number> {
	type F = number
	let b: bigint = 0n
	let expBits: number = 0
	let mantBits: number = 0
	let bias: number = 0
	switch (($.uint($.uint64Mul(8n, 4n), 64) as number)) {
		case 32:
		{
			b = $.uint64(__goscript_deps.float32bits(val))
			expBits = 8
			mantBits = 23
			bias = -127
			break
		}
		case 64:
		{
			b = __goscript_deps.float64bits(val)
			expBits = 11
			mantBits = 52
			bias = -1023
			break
		}
	}

	let neg = ($.uint64Shr(b, (expBits + mantBits))) != 0n
	let exp = $.int($.uint64Shr(b, mantBits)) & ((1 << expBits) - 1)
	let mant = $.uint64And(b, ($.uint64Sub(($.uint64Shl(1n, mantBits)), 1n)))
	if (exp == ((1 << expBits) - 1)) {
		if (mant != 0n) {
			return $.appendSlice(dst, $.stringToBytes("NaN"), $.byteSliceHint)
		}
		if (neg) {
			return $.appendSlice(dst, $.stringToBytes("-Inf"), $.byteSliceHint)
		}
		return $.appendSlice(dst, $.stringToBytes("+Inf"), $.byteSliceHint)
	}
	if (exp == 0) {
		exp++
	} else {
		mant = $.uint64Or(mant, $.uint64Shl(1n, mantBits))
	}
	exp = exp + (bias)

	// Pick off easy binary, hex formats.
	if (fmt == 98) {
		return fmtB(dst, neg, mant, exp - mantBits)
	}
	if ((fmt == 120) || (fmt == 88)) {
		return fmtX(dst, prec, fmt, neg, mant, exp, mantBits)
	}

	// Pick off zero.
	if (mant == 0n) {
		return fmtEFG(dst, neg, null, 0, 0, prec, fmt, prec < 0)
	}

	// Negative precision means "only as much as needed to be exact."
	if (prec < 0) {
		// Use fast unrounded scaling.
		let buf: Uint8Array = $.arrayValue(new Uint8Array(32))
		let s = 64 - bits.Len64(mant)
		let m = $.uint64Shl(mant, s)
		let e = exp - s
		let [d, p] = __goscript_uscale.shortFloat(__goscriptStatic0(), m, e - mantBits)
		let [dp, nd] = __goscript_uscale.setDigits($.goSlice(buf, undefined, undefined), d, p, __goscript_uscale.numDigits(d))
		// Precision for shortest representation mode.
		switch (fmt) {
			case 101:
			case 69:
			{
				prec = $.max(nd - 1, 0)
				break
			}
			case 102:
			{
				prec = $.max(nd - dp, 0)
				break
			}
			case 103:
			case 71:
			{
				prec = nd
				break
			}
		}
		return fmtEFG(dst, neg, $.goSlice(buf, undefined, undefined), dp, nd, prec, fmt, true)
	}

	if (__goscript_atof.optimize) {
		// Fixed number of digits.
		let digits = prec
		switch (fmt) {
			case 102:
			{
				if (exp >= 0) {
					digits = (1 + __goscript_uscale.log10Pow2(1 + exp)) + prec
				} else {
					digits = (1 + prec) - __goscript_uscale.log10Pow2(-exp)
				}
				break
			}
			case 101:
			case 69:
			{
				digits++
				break
			}
			case 103:
			case 71:
			{
				if (prec == 0) {
					prec = 1
				}
				digits = prec
				break
			}
			default:
			{
				digits = 1
				break
			}
		}
		if (digits <= 18) {
			// digits <= 0 happens for %f on very small numbers
			// and means that we're guaranteed to print all zeros.
			let buf: Uint8Array = $.arrayValue(new Uint8Array(24))
			let dp: number = 0
			let nd: number = 0
			if (digits > 0) {
				let s = 64 - bits.Len64(mant)
				let m = $.uint64Shl(mant, s)
				let e = exp - s
				let [d, p] = __goscript_uscale.fixedWidthFloat(m, e - mantBits, digits, prec, fmt)
				if (d != 0n) {
					let __goscriptTuple0: any = __goscript_uscale.setDigits($.goSlice(buf, undefined, undefined), d, p, __goscript_uscale.numDigits(d))
					dp = __goscriptTuple0[0]
					nd = __goscriptTuple0[1]
				}
			}
			return fmtEFG(dst, neg, $.goSlice(buf, undefined, undefined), dp, nd, prec, fmt, false)
		}
	}

	// Slow bignum case. Only for non-shortest results.
	let d: __goscript_decimal.decimal | $.VarRef<__goscript_decimal.decimal> | null = new __goscript_decimal.decimal()
	let d$: __goscript_decimal.decimal = d == null ? $.pointerTarget<__goscript_decimal.decimal>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decimal.decimal>(d)
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Assign(mant) : __goscript_decimal.decimal.prototype.Assign.call(d, mant))
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Shift(exp - mantBits) : __goscript_decimal.decimal.prototype.Shift.call(d, exp - mantBits))
	switch (fmt) {
		case 101:
		case 69:
		{
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round(prec + 1) : __goscript_decimal.decimal.prototype.Round.call(d, prec + 1))
			break
		}
		case 102:
		{
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round((d$ as __goscript_decimal.decimal).dp + prec) : __goscript_decimal.decimal.prototype.Round.call(d, (d$ as __goscript_decimal.decimal).dp + prec))
			break
		}
		case 103:
		case 71:
		{
			if (prec == 0) {
				prec = 1
			}
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round(prec) : __goscript_decimal.decimal.prototype.Round.call(d, prec))
			break
		}
	}
	return fmtEFG(dst, neg, $.goSlice((d$ as __goscript_decimal.decimal).d, undefined, undefined), (d$ as __goscript_decimal.decimal).dp, (d$ as __goscript_decimal.decimal).nd, prec, fmt, false)
}

export function ftoa64(dst: $.Slice<number>, val: number, fmt: number, prec: number): $.Slice<number> {
	type F = number
	let b: bigint = 0n
	let expBits: number = 0
	let mantBits: number = 0
	let bias: number = 0
	switch (($.uint($.uint64Mul(8n, 8n), 64) as number)) {
		case 32:
		{
			b = $.uint64(__goscript_deps.float32bits(globalThis.Math.fround(val)))
			expBits = 8
			mantBits = 23
			bias = -127
			break
		}
		case 64:
		{
			b = __goscript_deps.float64bits(val)
			expBits = 11
			mantBits = 52
			bias = -1023
			break
		}
	}

	let neg = ($.uint64Shr(b, (expBits + mantBits))) != 0n
	let exp = $.int($.uint64Shr(b, mantBits)) & ((1 << expBits) - 1)
	let mant = $.uint64And(b, ($.uint64Sub(($.uint64Shl(1n, mantBits)), 1n)))
	if (exp == ((1 << expBits) - 1)) {
		if (mant != 0n) {
			return $.appendSlice(dst, $.stringToBytes("NaN"), $.byteSliceHint)
		}
		if (neg) {
			return $.appendSlice(dst, $.stringToBytes("-Inf"), $.byteSliceHint)
		}
		return $.appendSlice(dst, $.stringToBytes("+Inf"), $.byteSliceHint)
	}
	if (exp == 0) {
		exp++
	} else {
		mant = $.uint64Or(mant, $.uint64Shl(1n, mantBits))
	}
	exp = exp + (bias)

	// Pick off easy binary, hex formats.
	if (fmt == 98) {
		return fmtB(dst, neg, mant, exp - mantBits)
	}
	if ((fmt == 120) || (fmt == 88)) {
		return fmtX(dst, prec, fmt, neg, mant, exp, mantBits)
	}

	// Pick off zero.
	if (mant == 0n) {
		return fmtEFG(dst, neg, null, 0, 0, prec, fmt, prec < 0)
	}

	// Negative precision means "only as much as needed to be exact."
	if (prec < 0) {
		// Use fast unrounded scaling.
		let buf: Uint8Array = $.arrayValue(new Uint8Array(32))
		let s = 64 - bits.Len64(mant)
		let m = $.uint64Shl(mant, s)
		let e = exp - s
		let [d, p] = __goscript_uscale.shortFloat(__goscriptStatic1(), m, e - mantBits)
		let [dp, nd] = __goscript_uscale.setDigits($.goSlice(buf, undefined, undefined), d, p, __goscript_uscale.numDigits(d))
		// Precision for shortest representation mode.
		switch (fmt) {
			case 101:
			case 69:
			{
				prec = $.max(nd - 1, 0)
				break
			}
			case 102:
			{
				prec = $.max(nd - dp, 0)
				break
			}
			case 103:
			case 71:
			{
				prec = nd
				break
			}
		}
		return fmtEFG(dst, neg, $.goSlice(buf, undefined, undefined), dp, nd, prec, fmt, true)
	}

	if (__goscript_atof.optimize) {
		// Fixed number of digits.
		let digits = prec
		switch (fmt) {
			case 102:
			{
				if (exp >= 0) {
					digits = (1 + __goscript_uscale.log10Pow2(1 + exp)) + prec
				} else {
					digits = (1 + prec) - __goscript_uscale.log10Pow2(-exp)
				}
				break
			}
			case 101:
			case 69:
			{
				digits++
				break
			}
			case 103:
			case 71:
			{
				if (prec == 0) {
					prec = 1
				}
				digits = prec
				break
			}
			default:
			{
				digits = 1
				break
			}
		}
		if (digits <= 18) {
			// digits <= 0 happens for %f on very small numbers
			// and means that we're guaranteed to print all zeros.
			let buf: Uint8Array = $.arrayValue(new Uint8Array(24))
			let dp: number = 0
			let nd: number = 0
			if (digits > 0) {
				let s = 64 - bits.Len64(mant)
				let m = $.uint64Shl(mant, s)
				let e = exp - s
				let [d, p] = __goscript_uscale.fixedWidthFloat(m, e - mantBits, digits, prec, fmt)
				if (d != 0n) {
					let __goscriptTuple1: any = __goscript_uscale.setDigits($.goSlice(buf, undefined, undefined), d, p, __goscript_uscale.numDigits(d))
					dp = __goscriptTuple1[0]
					nd = __goscriptTuple1[1]
				}
			}
			return fmtEFG(dst, neg, $.goSlice(buf, undefined, undefined), dp, nd, prec, fmt, false)
		}
	}

	// Slow bignum case. Only for non-shortest results.
	let d: __goscript_decimal.decimal | $.VarRef<__goscript_decimal.decimal> | null = new __goscript_decimal.decimal()
	let d$: __goscript_decimal.decimal = d == null ? $.pointerTarget<__goscript_decimal.decimal>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decimal.decimal>(d)
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Assign(mant) : __goscript_decimal.decimal.prototype.Assign.call(d, mant))
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Shift(exp - mantBits) : __goscript_decimal.decimal.prototype.Shift.call(d, exp - mantBits))
	switch (fmt) {
		case 101:
		case 69:
		{
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round(prec + 1) : __goscript_decimal.decimal.prototype.Round.call(d, prec + 1))
			break
		}
		case 102:
		{
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round((d$ as __goscript_decimal.decimal).dp + prec) : __goscript_decimal.decimal.prototype.Round.call(d, (d$ as __goscript_decimal.decimal).dp + prec))
			break
		}
		case 103:
		case 71:
		{
			if (prec == 0) {
				prec = 1
			}
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).Round(prec) : __goscript_decimal.decimal.prototype.Round.call(d, prec))
			break
		}
	}
	return fmtEFG(dst, neg, $.goSlice((d$ as __goscript_decimal.decimal).d, undefined, undefined), (d$ as __goscript_decimal.decimal).dp, (d$ as __goscript_decimal.decimal).nd, prec, fmt, false)
}

export function fmtEFG(dst: $.Slice<number>, neg: boolean, s: $.Slice<number>, dp: number, nd: number, prec: number, fmt: number, shortest: boolean): $.Slice<number> {
	if ((fmt == 103) || (fmt == 71)) {
		// trailing fractional zeros in 'e' form will be trimmed.
		let eprec = prec
		if ((eprec > nd) && (nd >= dp)) {
			eprec = nd
		}
		// %e is used if the exponent from the conversion
		// is less than -4 or greater than or equal to the precision.
		// if precision was the shortest possible, use precision 6 for this decision.
		if (shortest) {
			eprec = 6
		}
		let exp = dp - 1
		if ((exp < -4) || (exp >= eprec)) {
			if (prec > nd) {
				prec = nd
			}
			prec--
			fmt = $.uint((((((fmt + 101) & 0xff)) - 103) & 0xff), 8)
		} else {
			if (prec > dp) {
				prec = nd
			}
			prec = $.max(prec - dp, 0)
			fmt = 102
		}
	}

	switch (fmt) {
		case 101:
		case 69:
		{
			if (neg) {
				dst = $.append(dst, $.uint(45, 8), $.byteSliceHint)
			}

			// first digit
			let ch = 48
			if (nd != 0) {
				ch = $.arrayIndex(s!, 0)
			}
			dst = $.append(dst, $.uint(ch, 8), $.byteSliceHint)

			// .moredigits
			if (prec > 0) {
				dst = $.append(dst, $.uint(46, 8), $.byteSliceHint)
				let i = 1
				let m = $.min(nd, prec + 1)
				if (i < m) {
					dst = $.appendSlice(dst, $.goSlice(s, i, m), $.byteSliceHint)
					i = m
				}
				for (let __goscriptRangeCount0 = (prec + 1) - i, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount0; __rangeIndex++) {
					dst = $.append(dst, $.uint(48, 8), $.byteSliceHint)
				}
			}

			// e±
			dst = $.append(dst, $.uint(fmt, 8), $.byteSliceHint)
			let exp = dp - 1
			if (nd == 0) {
				exp = 0
			}
			if (exp < 0) {
				ch = 45
				exp = -exp
			} else {
				ch = 43
			}
			dst = $.append(dst, $.uint(ch, 8), $.byteSliceHint)

			// dd or ddd
			switch ((true as boolean)) {
				case exp < 10:
				{
					dst = $.append(dst, $.uint(48, 8), $.uint((($.uint(exp, 8) + 48) & 0xff), 8), $.byteSliceHint)
					break
				}
				case exp < 100:
				{
					dst = $.append(dst, $.uint((($.uint(globalThis.Math.trunc(exp / 10), 8) + 48) & 0xff), 8), $.uint((($.uint(exp % 10, 8) + 48) & 0xff), 8), $.byteSliceHint)
					break
				}
				default:
				{
					dst = $.append(dst, $.uint((($.uint(globalThis.Math.trunc(exp / 100), 8) + 48) & 0xff), 8), $.uint(((($.uint(globalThis.Math.trunc(exp / 10), 8) % 10) + 48) & 0xff), 8), $.uint((($.uint(exp % 10, 8) + 48) & 0xff), 8), $.byteSliceHint)
					break
				}
			}
			return dst
			break
		}
		case 102:
		{
			if (neg) {
				dst = $.append(dst, $.uint(45, 8), $.byteSliceHint)
			}

			// integer, padded with zeros as needed.
			if (dp > 0) {
				let m = $.min(nd, dp)
				for (let __goscriptRangeTarget0 = $.goSlice(s, undefined, m), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
					dst = $.append(dst, $.uint(c, 8), $.byteSliceHint)
				}
				for (let __goscriptRangeCount1 = dp - m, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount1; __rangeIndex++) {
					dst = $.append(dst, $.uint(48, 8), $.byteSliceHint)
				}
			} else {
				dst = $.append(dst, $.uint(48, 8), $.byteSliceHint)
			}

			// fraction
			if (prec > 0) {
				dst = $.append(dst, $.uint(46, 8), $.byteSliceHint)
				let lz = $.min(prec, $.max(0, -dp))
				let off = dp + lz
				let m = $.min(prec - lz, $.max(0, nd - off))
				let tz = $.max(0, (prec - lz) - m)
				for (let __goscriptRangeCount2 = lz, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount2; __rangeIndex++) {
					dst = $.append(dst, $.uint(48, 8), $.byteSliceHint)
				}
				for (let __goscriptSliceWindow0 = $.sliceRange(s), __goscriptRangeCount3 = m, i = 0; i < __goscriptRangeCount3; i++) {
					dst = $.append(dst, $.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, off + i)] as number), 8), $.byteSliceHint)
				}
				for (let __goscriptRangeCount4 = tz, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount4; __rangeIndex++) {
					dst = $.append(dst, $.uint(48, 8), $.byteSliceHint)
				}
			}
			return dst
			break
		}
	}

	// unknown format
	return $.append(dst, $.uint(37, 8), $.uint(fmt, 8), $.byteSliceHint)
}

export function fmtB(dst: $.Slice<number>, neg: boolean, mant: bigint, exp: number): $.Slice<number> {
	if (neg) {
		dst = $.append(dst, $.uint(45, 8), $.byteSliceHint)
	}
	dst = __goscript_itoa.AppendUint(dst, mant, 10)
	dst = $.append(dst, $.uint(112, 8), $.byteSliceHint)
	if (exp >= 0) {
		dst = $.append(dst, $.uint(43, 8), $.byteSliceHint)
	}
	dst = __goscript_itoa.AppendInt(dst, $.int64(exp), 10)
	return dst
}

export function fmtX(dst: $.Slice<number>, prec: number, fmt: number, neg: boolean, mant: bigint, exp: number, mantBits: number): $.Slice<number> {
	if (mant == 0n) {
		exp = 0
	}

	// Shift digits so leading 1 (if any) is at bit 1<<60.
	// TODO: Is this the right way to handle subnormals?
	mant = $.uint64Shl(mant, $.uint64(60 - mantBits))
	while ((mant != 0n) && (($.uint64And(mant, 1152921504606846976n)) == 0n)) {
		mant = $.uint64Shl(mant, 1n)
		exp--
	}

	// Round if requested.
	if ((prec >= 0) && (prec < 15)) {
		let shift = $.uint(prec * 4, 64)
		let extra = $.uint64And(($.uint64Shl(mant, shift)), 1152921504606846975n)
		mant = $.uint64Shr(mant, $.uint64($.uint($.uint64Sub(60n, shift), 64)))
		if (($.uint64Or(extra, ($.uint64And(mant, 1n)))) > 576460752303423488n) {
			mant++
		}
		mant = $.uint64Shl(mant, $.uint64($.uint($.uint64Sub(60n, shift), 64)))
		if (($.uint64And(mant, 2305843009213693952n)) != 0n) {
			// Wrapped around.
			mant = $.uint64Shr(mant, 1n)
			exp++
		}
	}

	let hex = "0123456789abcdef"
	if (fmt == 88) {
		hex = "0123456789ABCDEF"
	}

	// sign, 0x, leading digit
	if (neg) {
		dst = $.append(dst, $.uint(45, 8), $.byteSliceHint)
	}
	dst = $.append(dst, $.uint(48, 8), $.uint(fmt, 8), $.uint(((48 + $.uint($.uint64And(($.uint64Shr(mant, 60n)), 1n), 8)) & 0xff), 8), $.byteSliceHint)

	// .fraction
	mant = $.uint64Shl(mant, 4n)
	if ((prec < 0) && (mant != 0n)) {
		dst = $.append(dst, $.uint(46, 8), $.byteSliceHint)
		while (mant != 0n) {
			dst = $.append(dst, $.uint($.indexString(hex, globalThis.Number($.uint64And(($.uint64Shr(mant, 60n)), 15n))), 8), $.byteSliceHint)
			mant = $.uint64Shl(mant, 4n)
		}
	} else {
		if (prec > 0) {
			dst = $.append(dst, $.uint(46, 8), $.byteSliceHint)
			for (let i = 0; i < prec; i++) {
				dst = $.append(dst, $.uint($.indexString(hex, globalThis.Number($.uint64And(($.uint64Shr(mant, 60n)), 15n))), 8), $.byteSliceHint)
				mant = $.uint64Shl(mant, 4n)
			}
		}
	}

	// p±
	let ch = 80
	if (fmt == __goscript_atoi.lower(fmt)) {
		ch = 112
	}
	dst = $.append(dst, $.uint(ch, 8), $.byteSliceHint)
	if (exp < 0) {
		ch = 45
		exp = -exp
	} else {
		ch = 43
	}
	dst = $.append(dst, $.uint(ch, 8), $.byteSliceHint)

	// dd or ddd or dddd
	switch ((true as boolean)) {
		case exp < 100:
		{
			dst = $.append(dst, $.uint((($.uint(globalThis.Math.trunc(exp / 10), 8) + 48) & 0xff), 8), $.uint((($.uint(exp % 10, 8) + 48) & 0xff), 8), $.byteSliceHint)
			break
		}
		case exp < 1000:
		{
			dst = $.append(dst, $.uint((($.uint(globalThis.Math.trunc(exp / 100), 8) + 48) & 0xff), 8), $.uint((($.uint((globalThis.Math.trunc(exp / 10)) % 10, 8) + 48) & 0xff), 8), $.uint((($.uint(exp % 10, 8) + 48) & 0xff), 8), $.byteSliceHint)
			break
		}
		default:
		{
			dst = $.append(dst, $.uint((($.uint(globalThis.Math.trunc(exp / 1000), 8) + 48) & 0xff), 8), $.uint(((($.uint(globalThis.Math.trunc(exp / 100), 8) % 10) + 48) & 0xff), 8), $.uint((($.uint((globalThis.Math.trunc(exp / 10)) % 10, 8) + 48) & 0xff), 8), $.uint((($.uint(exp % 10, 8) + 48) & 0xff), 8), $.byteSliceHint)
			break
		}
	}

	return dst
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: /* @__PURE__ */ $.basicType("float32"), zero: () => 0 }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: /* @__PURE__ */ $.basicType("float64"), zero: () => 0 }})
}
