// Generated file based on ftoa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt2 from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as io from "@goscript/io/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_decimal from "./decimal.gs.ts"

import * as __goscript_float from "./float.gs.ts"

import * as __goscript_floatconv from "./floatconv.gs.ts"

import * as __goscript_floatmarsh from "./floatmarsh.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intconv from "./intconv.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_rat from "./rat.gs.ts"

import type * as __goscript_ratconv from "./ratconv.gs.ts"

import type * as __goscript_ratmarsh from "./ratmarsh.gs.ts"

import * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"

import * as __goscript_sqrt from "./sqrt.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "./accuracy_string.gs.ts"
import "./arith.gs.ts"
import "./decimal.gs.ts"
import "./float.gs.ts"
import "./floatconv.gs.ts"
import "./floatmarsh.gs.ts"
import "./int.gs.ts"
import "./intconv.gs.ts"
import "./intmarsh.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"
import "./rat.gs.ts"
import "./roundingmode_string.gs.ts"
import "./sqrt.gs.ts"

export async function roundShortest(d: __goscript_decimal.decimal | $.VarRef<__goscript_decimal.decimal> | null, x: __goscript_float.Float | $.VarRef<__goscript_float.Float> | null): globalThis.Promise<void> {
	const d$: __goscript_decimal.decimal = d == null ? $.pointerTarget<__goscript_decimal.decimal>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decimal.decimal>(d)
	const x$: __goscript_float.Float = x == null ? $.pointerTarget<__goscript_float.Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<__goscript_float.Float>(x)
	// if the mantissa is zero, the number is zero - stop now
	if ($.sliceLen((d$ as __goscript_decimal.decimal).mant) == 0) {
		return
	}

	// Approach: All numbers in the interval [x - 1/2ulp, x + 1/2ulp]
	// (possibly exclusive) round to x for the given precision of x.
	// Compute the lower and upper bound in decimal form and find the
	// shortest decimal number d such that lower <= d <= upper.

	// 1) Compute normalized mantissa mant and exponent exp for x such
	// that the lsb of mant corresponds to 1/2 ulp for the precision of
	// x (i.e., for mant we want x.prec + 1 bits).
	let mant: __goscript_nat.nat = (__goscript_nat.nat__set((null as __goscript_nat.nat), ((x$ as __goscript_float.Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
	let exp = $.int((x$ as __goscript_float.Float).exp) - __goscript_nat.nat_bitLen(mant)
	let s: number = __goscript_nat.nat_bitLen(mant) - $.int($.uint((((x$ as __goscript_float.Float).prec + 1) >>> 0), 32))
	switch ((true as boolean)) {
		case s < 0:
		{
			mant = (__goscript_nat.nat_lsh(mant, (mant as __goscript_nat.nat), $.uint(-s, 64)) as __goscript_nat.nat)
			break
		}
		case s > 0:
		{
			mant = (__goscript_nat.nat_rsh(mant, (mant as __goscript_nat.nat), $.uint(s, 64)) as __goscript_nat.nat)
			break
		}
	}
	exp = exp + (s)
	// x = mant * 2**exp with lsb(mant) == 1/2 ulp of x.prec

	// 2) Compute lower bound by subtracting 1/2 ulp.
	let lower: $.VarRef<__goscript_decimal.decimal> = $.varRef(new __goscript_decimal.decimal(undefined, true))
	let tmp: __goscript_nat.nat = null! as __goscript_nat.nat
	await lower.value.init((__goscript_nat.nat_sub(tmp, (mant as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat), exp)

	// 3) Compute upper bound by adding 1/2 ulp.
	let upper: $.VarRef<__goscript_decimal.decimal> = $.varRef(new __goscript_decimal.decimal(undefined, true))
	await upper.value.init((__goscript_nat.nat_add(tmp, (mant as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat), exp)

	// The upper and lower bounds are possible outputs only if
	// the original mantissa is even, so that ToNearestEven rounding
	// would round to the original mantissa and not the neighbors.
	let inclusive = ($.uint($.uint64And($.arrayIndex(mant!, 0), 2n), 64)) == 0

	// Now we can figure out the minimum number of digits required.
	// Walk along until d has distinguished itself from upper and lower.
	for (let __goscriptRangeTarget0 = (d$ as __goscript_decimal.decimal).mant, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let m = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
		let l = lower.value.at(i)
		let u = upper.value.at(i)

		// Okay to round down (truncate) if lower has a different digit
		// or if lower is inclusive and is exactly the result of rounding
		// down (i.e., and we have reached the final digit of lower).
		let okdown = (l != m) || (inclusive && ((i + 1) == $.sliceLen(lower.value.mant)))

		// Okay to round up if upper has a different digit and either upper
		// is inclusive or upper is bigger than the result of rounding up.
		// The last clause handles digits past upper's trimmed mantissa:
		// upper.at(i) returns '0' there, but the true upper bound was
		// determined by earlier digits, so rounding up is valid unless
		// m == '9' (which would carry onto the exclusive upper bound).
		// See also go.dev/issue/80206.
		let okup = (m != u) && (((inclusive || ($.uint((((m + 1) & 0xff)), 8) < u)) || ((i + 1) < $.sliceLen(upper.value.mant))) || ((i >= $.sliceLen(upper.value.mant)) && (m < 57)))

		// If it's okay to do either, then round to the nearest one.
		// If it's okay to do only one, do it.
		switch ((true as boolean)) {
			case okdown && okup:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).round(i + 1) : __goscript_decimal.decimal.prototype.round.call(d, i + 1))
				return
				break
			}
			case okdown:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).roundDown(i + 1) : __goscript_decimal.decimal.prototype.roundDown.call(d, i + 1))
				return
				break
			}
			case okup:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decimal.decimal).roundUp(i + 1) : __goscript_decimal.decimal.prototype.roundUp.call(d, i + 1))
				return
				break
			}
		}
	}
}

export function fmtE(buf: $.Slice<number>, fmt: number, prec: number, d: __goscript_decimal.decimal): $.Slice<number> {
	// first digit
	let ch = 48
	if ($.sliceLen(d.mant) > 0) {
		ch = $.arrayIndex(d.mant!, 0)
	}
	buf = $.append(buf, $.uint(ch, 8), $.byteSliceHint)

	// .moredigits
	if (prec > 0) {
		buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
		let i = 1
		let m = $.min($.sliceLen(d.mant), prec + 1)
		if (i < m) {
			buf = $.appendSlice(buf, $.goSlice(d.mant, i, m), $.byteSliceHint)
			i = m
		}
		for (; i <= prec; i++) {
			buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
		}
	}

	// e±
	buf = $.append(buf, $.uint(fmt, 8), $.byteSliceHint)
	let exp: bigint = 0n
	if ($.sliceLen(d.mant) > 0) {
		exp = $.int64Sub($.int64(d.exp), 1n)
	}
	if (exp < 0n) {
		ch = 45
		exp = -exp
	} else {
		ch = 43
	}
	buf = $.append(buf, $.uint(ch, 8), $.byteSliceHint)

	// dd...d
	if (exp < 10n) {
		buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
	}
	return strconv.AppendInt(buf, exp, 10)
}

export function fmtF(buf: $.Slice<number>, prec: number, __goscriptParam0: __goscript_decimal.decimal): $.Slice<number> {
	let d: $.VarRef<__goscript_decimal.decimal> = $.varRef(__goscriptParam0)
	// integer, padded with zeros as needed
	if (d.value.exp > 0) {
		let m = $.min($.sliceLen(d.value.mant), d.value.exp)
		buf = $.appendSlice(buf, $.goSlice(d.value.mant, undefined, m), $.byteSliceHint)
		for (; m < d.value.exp; m++) {
			buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
		}
	} else {
		buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
	}

	// fraction
	if (prec > 0) {
		buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
		for (let i = 0; i < prec; i++) {
			buf = $.append(buf, $.uint(d.value.at(d.value.exp + i), 8), $.byteSliceHint)
		}
	}

	return buf
}
