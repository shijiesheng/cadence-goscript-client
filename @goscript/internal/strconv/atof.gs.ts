// Generated file based on atof.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_atoi from "./atoi.gs.ts"

import * as __goscript_decimal from "./decimal.gs.ts"

import * as __goscript_deps from "./deps.gs.ts"

import * as __goscript_ftoa from "./ftoa.gs.ts"

import * as __goscript_uscale from "./uscale.gs.ts"
import "./atoi.gs.ts"
import "./decimal.gs.ts"
import "./deps.gs.ts"
import "./ftoa.gs.ts"
import "./uscale.gs.ts"

$.registerTypePackagePath("internal/strconv", ["strconv.floatInfo"])

export class floatInfo {
	public get mantbits(): number {
		return this._fields.mantbits
	}

	public set mantbits(value: number) {
		this._fields.mantbits = value
	}

	public get expbits(): number {
		return this._fields.expbits
	}

	public set expbits(value: number) {
		this._fields.expbits = value
	}

	public get bias(): number {
		return this._fields.bias
	}

	public set bias(value: number) {
		this._fields.bias = value
	}

	public _fields: {
		mantbits: number
		expbits: number
		bias: number
	}

	constructor(init?: Partial<{mantbits?: number, expbits?: number, bias?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			mantbits: init?.mantbits ?? (0 as number),
			expbits: init?.expbits ?? (0 as number),
			bias: init?.bias ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): floatInfo {
		return new floatInfo(this, true)
	}

	public __goscriptAssign(source: floatInfo): void {
		const target = this._fields
		const values = source._fields
		target.mantbits = values.mantbits
		target.expbits = values.expbits
		target.bias = values.bias
	}

	static __typeInfo = $.registerStructType(
		"strconv.floatInfo",
		() => new floatInfo(),
		() => [],
		floatInfo,
		() => [/* @__PURE__ */ $.structField("mantbits", /* @__PURE__ */ $.basicType("uint"), [0], 0, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("expbits", /* @__PURE__ */ $.basicType("uint"), [1], 8, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("bias", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "internal/strconv" })]
	)
}

export const fnParseFloat: string = "ParseFloat"

export var float32info: $.VarRef<floatInfo>

export function __goscript_init_float32info(): void {
	if (((float32info) as any) === undefined) {
		float32info = $.varRef(new floatInfo({mantbits: 23, expbits: 8, bias: -127}, true))
	}
}

export function __goscript_get_float32info(): $.VarRef<floatInfo> {
	if (((float32info) as any) === undefined) {
		__goscript_init_float32info()
	}
	return float32info
}

export function __goscript_set_float32info(__goscriptValue: floatInfo): void {
	$.assignStruct(__goscript_get_float32info().value, __goscriptValue)
}

export var float64info: $.VarRef<floatInfo>

export function __goscript_init_float64info(): void {
	if (((float64info) as any) === undefined) {
		float64info = $.varRef(new floatInfo({mantbits: 52, expbits: 11, bias: -1023}, true))
	}
}

export function __goscript_get_float64info(): $.VarRef<floatInfo> {
	if (((float64info) as any) === undefined) {
		__goscript_init_float64info()
	}
	return float64info
}

export function __goscript_set_float64info(__goscriptValue: floatInfo): void {
	$.assignStruct(__goscript_get_float64info().value, __goscriptValue)
}

export let optimize: boolean = true

export function __goscript_set_optimize(__goscriptValue: boolean): void {
	optimize = __goscriptValue
}

export function commonPrefixLenIgnoreCase(s: string, prefix: string): number {
	let n = $.min($.stringLen(prefix), $.stringLen(s))
	for (let i = 0; i < n; i++) {
		let c = $.indexString(s, i)
		if ((65 <= c) && (c <= 90)) {
			c = $.uint(c + (32), 8)
		}
		if (c != $.indexString(prefix, i)) {
			return i
		}
	}
	return n
}

export function special(s: string): [number, number, boolean] {
	let f: number = 0
	let n: number = 0
	let ok: boolean = false
	if ($.stringLen(s) == 0) {
		return [0, 0, false]
	}
	let sign = 1
	let nsign = 0
	switch ($.indexString(s, 0)) {
		case 43:
		case 45:
		{
			if ($.indexString(s, 0) == 45) {
				sign = -1
			}
			nsign = 1
			s = $.sliceStringOrBytes(s, 1, undefined)
		}
		case 105:
		case 73:
		{
			let __goscriptShadow0 = commonPrefixLenIgnoreCase(s, "infinity")
			// Anything longer than "inf" is ok, but if we
			// don't have "infinity", only consume "inf".
			if ((3 < __goscriptShadow0) && (__goscriptShadow0 < 8)) {
				__goscriptShadow0 = 3
			}
			if ((__goscriptShadow0 == 3) || (__goscriptShadow0 == 8)) {
				return [__goscript_deps.inf(sign), nsign + __goscriptShadow0, true]
			}
			break
		}
		case 110:
		case 78:
		{
			if (commonPrefixLenIgnoreCase(s, "nan") == 3) {
				return [__goscript_deps.nan(), 3, true]
			}
			break
		}
	}
	return [0, 0, false]
}

export function readFloat(s: string): [bigint, number, boolean, boolean, boolean, number, boolean] {
	let mantissa: bigint = 0n
	let exp: number = 0
	let neg: boolean = false
	let trunc: boolean = false
	let hex: boolean = false
	let i: number = 0
	let ok: boolean = false
	let underscores = false

	// optional sign
	if (i >= $.stringLen(s)) {
		return [mantissa, exp, neg, trunc, hex, i, ok]
	}
	switch ($.indexString(s, i)) {
		case 43:
		{
			i++
			break
		}
		case 45:
		{
			i++
			neg = true
			break
		}
	}

	// digits
	let base = 10n
	let maxMantDigits = 19
	let expChar = 101
	if ((((i + 2) < $.stringLen(s)) && ($.indexString(s, i) == 48)) && (__goscript_atoi.lower($.indexString(s, i + 1)) == 120)) {
		base = 16n
		maxMantDigits = 16
		i = i + (2)
		expChar = 112
		hex = true
	}
	let sawdot = false
	let sawdigits = false
	let nd = 0
	let ndMant = 0
	let dp = 0
	loop: for (; i < $.stringLen(s); i++) {
		{
			let c = $.indexString(s, i)
			switch ((true as boolean)) {
				case c == 95:
				{
					underscores = true
					continue
					break
				}
				case c == 46:
				{
					if (sawdot) {
						break loop
					}
					sawdot = true
					dp = nd
					continue
					break
				}
				case (48 <= c) && (c <= 57):
				{
					sawdigits = true
					if ((c == 48) && (nd == 0)) {
						dp--
						continue
					}
					nd++
					if (ndMant < maxMantDigits) {
						mantissa = $.uint64Mul(mantissa, base)
						mantissa = $.uint64Add(mantissa, $.uint64($.uint(((c - 48) & 0xff), 8)))
						ndMant++
					} else {
						if (c != 48) {
							trunc = true
						}
					}
					continue
					break
				}
				case ((base == 16n) && (97 <= __goscript_atoi.lower(c))) && (__goscript_atoi.lower(c) <= 102):
				{
					sawdigits = true
					nd++
					if (ndMant < maxMantDigits) {
						mantissa = $.uint64Mul(mantissa, 16n)
						mantissa = $.uint64Add(mantissa, $.uint64($.uint((((((__goscript_atoi.lower(c) - 97) & 0xff)) + 10) & 0xff), 8)))
						ndMant++
					} else {
						trunc = true
					}
					continue
					break
				}
			}
		}
		break
	}
	if (!sawdigits) {
		return [mantissa, exp, neg, trunc, hex, i, ok]
	}
	if (!sawdot) {
		dp = nd
	}

	if (base == 16n) {
		dp = dp * (4)
		ndMant = ndMant * (4)
	}

	// optional exponent moves decimal point.
	// if we read a very large, very long number,
	// just be sure to move the decimal point by
	// a lot (say, 100000).  it doesn't matter if it's
	// not the exact number.
	if ((i < $.stringLen(s)) && (__goscript_atoi.lower($.indexString(s, i)) == expChar)) {
		i++
		if (i >= $.stringLen(s)) {
			return [mantissa, exp, neg, trunc, hex, i, ok]
		}
		let esign = 1
		switch ($.indexString(s, i)) {
			case 43:
			{
				i++
				break
			}
			case 45:
			{
				i++
				esign = -1
				break
			}
		}
		if (((i >= $.stringLen(s)) || ($.indexString(s, i) < 48)) || ($.indexString(s, i) > 57)) {
			return [mantissa, exp, neg, trunc, hex, i, ok]
		}
		let e = 0
		for (; (i < $.stringLen(s)) && (((48 <= $.indexString(s, i)) && ($.indexString(s, i) <= 57)) || ($.indexString(s, i) == 95)); i++) {
			if ($.indexString(s, i) == 95) {
				underscores = true
				continue
			}
			if (e < 10000) {
				e = ((e * 10) + $.int($.indexString(s, i))) - 48
			}
		}
		dp = dp + (e * esign)
	} else {
		if (base == 16n) {
			// Must have exponent.
			return [mantissa, exp, neg, trunc, hex, i, ok]
		}
	}

	if (mantissa != 0n) {
		exp = dp - ndMant
	}

	if (underscores && !__goscript_atoi.underscoreOK($.sliceStringOrBytes(s, undefined, i))) {
		return [mantissa, exp, neg, trunc, hex, i, ok]
	}

	ok = true
	return [mantissa, exp, neg, trunc, hex, i, ok]
}

export let powtab: $.Slice<number> = $.arrayToSlice<number>([1, 3, 6, 9, 13, 16, 19, 23, 26])

export function __goscript_set_powtab(__goscriptValue: $.Slice<number>): void {
	powtab = __goscriptValue
}

export let float64pow10: $.Slice<number> = $.arrayToSlice<number>([1e0, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22])

export function __goscript_set_float64pow10(__goscriptValue: $.Slice<number>): void {
	float64pow10 = __goscriptValue
}

export let float32pow10: $.Slice<number> = $.arrayToSlice<number>([1, 10, 100, 1000, 10000, 100000, 1e+06, 1e+07, 1e+08, 1e+09, 1e+10])

export function __goscript_set_float32pow10(__goscriptValue: $.Slice<number>): void {
	float32pow10 = __goscriptValue
}

export function atof64exact(mantissa: bigint, exp: number, neg: boolean): [number, boolean] {
	let f: number = 0
	let ok: boolean = false
	if (($.uint64Shr(mantissa, $.pointerValue<floatInfo>(__goscript_get_float64info()).mantbits)) != 0n) {
		return [f, ok]
	}
	f = globalThis.Number(mantissa)
	if (neg) {
		f = -f
	}
	switch ((true as boolean)) {
		case exp == 0:
		{
			return [f, true]
			break
		}
		case (exp > 0) && (exp <= 37):
		{
			if (exp > 22) {
				f = f * ($.arrayIndex(float64pow10!, exp - 22))
				exp = 22
			}
			if ((f > 1e15) || (f < -1e15)) {
				// the exponent was really too large.
				return [f, ok]
			}
			return [f * $.arrayIndex(float64pow10!, exp), true]
			break
		}
		case (exp < 0) && (exp >= -22):
		{
			return [f / $.arrayIndex(float64pow10!, -exp), true]
			break
		}
	}
	return [f, ok]
}

export function atof32exact(mantissa: bigint, exp: number, neg: boolean): [number, boolean] {
	let f: number = 0
	let ok: boolean = false
	if (($.uint64Shr(mantissa, 23n)) != 0n) {
		return [f, ok]
	}
	f = globalThis.Math.fround(globalThis.Number(mantissa))
	if (neg) {
		f = -f
	}
	switch ((true as boolean)) {
		case exp == 0:
		{
			return [f, true]
			break
		}
		case (exp > 0) && (exp <= 17):
		{
			if (exp > 10) {
				f = globalThis.Math.fround(f * ($.arrayIndex(float32pow10!, exp - 10)))
				exp = 10
			}
			if ((f > 1e+07) || (f < -1e+07)) {
				// the exponent was really too large.
				return [f, ok]
			}
			return [globalThis.Math.fround(f * $.arrayIndex(float32pow10!, exp)), true]
			break
		}
		case (exp < 0) && (exp >= -10):
		{
			return [globalThis.Math.fround(f / $.arrayIndex(float32pow10!, -exp)), true]
			break
		}
	}
	return [f, ok]
}

export function atofHex(s: string, flt: floatInfo | $.VarRef<floatInfo> | null, mantissa: bigint, exp: number, neg: boolean, trunc: boolean): [number, $.GoError] {
	const flt$: floatInfo = flt == null ? $.pointerTarget<floatInfo>(flt) : (flt as any).__isVarRef === true ? (flt as any).value : (flt as any).__goValue === undefined ? (flt as any) : $.pointerTarget<floatInfo>(flt)
	let maxExp = ((1 << (flt$ as floatInfo).expbits) + (flt$ as floatInfo).bias) - 2
	let minExp = (flt$ as floatInfo).bias + 1
	exp = exp + ($.int((flt$ as floatInfo).mantbits))

	// Shift mantissa and exponent to bring representation into float range.
	// Eventually we want a mantissa with a leading 1-bit followed by mantbits other bits.
	// For rounding, we need two more, where the bottom bit represents
	// whether that bit or any later bit was non-zero.
	// (If the mantissa has already lost non-zero bits, trunc is true,
	// and we OR in a 1 below after shifting left appropriately.)
	while ((mantissa != 0n) && (($.uint64Shr(mantissa, ($.uint($.uint64Add((flt$ as floatInfo).mantbits, 2n), 64)))) == 0n)) {
		mantissa = $.uint64Shl(mantissa, 1n)
		exp--
	}
	if (trunc) {
		mantissa = $.uint64Or(mantissa, 1n)
	}
	while (($.uint64Shr(mantissa, ($.uint($.uint64Add(($.uint($.uint64Add(1n, (flt$ as floatInfo).mantbits), 64)), 2n), 64)))) != 0n) {
		mantissa = $.uint64Or(($.uint64Shr(mantissa, 1n)), ($.uint64And(mantissa, 1n)))
		exp++
	}

	// If exponent is too negative,
	// denormalize in hopes of making it representable.
	// (The -2 is for the rounding bits.)
	while ((mantissa > 1n) && (exp < (minExp - 2))) {
		mantissa = $.uint64Or(($.uint64Shr(mantissa, 1n)), ($.uint64And(mantissa, 1n)))
		exp++
	}

	// Round using two bottom bits.
	let round = $.uint64And(mantissa, 3n)
	mantissa = $.uint64Shr(mantissa, 2n)
	round = $.uint64Or(round, $.uint64And(mantissa, 1n))
	exp = exp + (2)
	if (round == 3n) {
		mantissa++
		if (mantissa == ($.uint64Shl(1n, ($.uint($.uint64Add(1n, (flt$ as floatInfo).mantbits), 64))))) {
			mantissa = $.uint64Shr(mantissa, 1n)
			exp++
		}
	}

	if (($.uint64Shr(mantissa, (flt$ as floatInfo).mantbits)) == 0n) {
		exp = (flt$ as floatInfo).bias
	}
	let err: $.GoError = null! as $.GoError
	if (exp > maxExp) {
		mantissa = $.uint64Shl(1n, (flt$ as floatInfo).mantbits)
		exp = maxExp + 1
		err = $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))
	}

	let bits = $.uint64And(mantissa, ($.uint64Sub(($.uint64Shl(1n, (flt$ as floatInfo).mantbits)), 1n)))
	bits = $.uint64Or(bits, $.uint64Shl($.uint64((exp - (flt$ as floatInfo).bias) & ((1 << (flt$ as floatInfo).expbits) - 1)), (flt$ as floatInfo).mantbits))
	if (neg) {
		bits = $.uint64Or(bits, $.uint64Shl(($.uint64Shl(1n, (flt$ as floatInfo).mantbits)), (flt$ as floatInfo).expbits))
	}
	if ($.pointerEqual(flt, __goscript_get_float32info())) {
		return [__goscript_deps.float32frombits($.uint(bits, 32)), err]
	}
	return [__goscript_deps.float64frombits(bits), err]
}

export function atof32(s: string): [number, number, $.GoError] {
	let f: number = 0
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	{
		let [val, __goscriptShadow1, ok] = special(s)
		if (ok) {
			return [globalThis.Math.fround(val), __goscriptShadow1, null]
		}
	}

	let __goscriptTuple0: any = readFloat(s)
	let d = __goscriptTuple0[0]
	let p = __goscriptTuple0[1]
	let neg = __goscriptTuple0[2]
	let trunc = __goscriptTuple0[3]
	let hex = __goscriptTuple0[4]
	n = __goscriptTuple0[5]
	let ok = __goscriptTuple0[6]
	if (!ok) {
		return [0, n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}

	if (hex) {
		let [__goscriptShadow2, __goscriptShadow3] = atofHex($.sliceStringOrBytes(s, undefined, n), __goscript_get_float32info(), d, p, neg, trunc)
		return [globalThis.Math.fround(__goscriptShadow2), n, __goscriptShadow3]
	}

	if (optimize) {
		let sign = $.uint(((__goscript_uscale.bool2(__goscriptStatic0(), neg) << 31) >>> 0), 32)
		if (d == 0n) {
			return [__goscript_deps.float32frombits($.uint(sign | 0, 32)), n, null]
		}
		if (p > 40) {
			return [__goscript_deps.float32frombits($.uint(sign | (2139095040), 32)), n, $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}
		if (p < -70) {
			return [__goscript_deps.float32frombits($.uint(sign | 0, 32)), n, null]
		}
		if (!trunc) {
			// Exact rounding with single multiplication or division.
			{
				let [__goscriptShadow4, __goscriptShadow5] = atof32exact(d, p, neg)
				if (__goscriptShadow5) {
					return [__goscriptShadow4, n, null]
				}
			}
		}
		// Use fast unrounded scaling.
		// The only possible err is ErrRange, when the result overflows to ±Inf.
		let [__goscriptShadow6, __goscriptShadow7] = __goscript_uscale.parseFloat32(d, p, sign)
		if (!trunc) {
			return [__goscriptShadow6, n, __goscriptShadow7]
		}
		// If additional digits were truncated from d
		// but d+1 converts to the same value,
		// then the additional digits don't matter.
		let [f1, ] = __goscript_uscale.parseFloat32($.uint64Add(d, 1n), p, sign)
		if (__goscriptShadow6 == f1) {
			return [__goscriptShadow6, n, __goscriptShadow7]
		}
	}

	// Slow fallback.
	let dec: $.VarRef<__goscript_decimal.decimal> = $.varRef(new __goscript_decimal.decimal(undefined, true))
	if (!dec.value.set($.sliceStringOrBytes(s, undefined, n))) {
		return [0, n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	let [b, ovf] = dec.value.floatBits(__goscript_get_float32info())
	f = __goscript_deps.float32frombits($.uint(b, 32))
	if (ovf) {
		err = $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))
	}
	return [f, n, err]
}

export function atof64(s: string): [number, number, $.GoError] {
	let f: number = 0
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	{
		let [val, __goscriptShadow8, ok] = special(s)
		if (ok) {
			return [val, __goscriptShadow8, null]
		}
	}

	let __goscriptTuple1: any = readFloat(s)
	let d = __goscriptTuple1[0]
	let p = __goscriptTuple1[1]
	let neg = __goscriptTuple1[2]
	let trunc = __goscriptTuple1[3]
	let hex = __goscriptTuple1[4]
	n = __goscriptTuple1[5]
	let ok = __goscriptTuple1[6]
	if (!ok) {
		return [0, n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	if (hex) {
		let [__goscriptShadow9, __goscriptShadow10] = atofHex($.sliceStringOrBytes(s, undefined, n), __goscript_get_float64info(), d, p, neg, trunc)
		return [__goscriptShadow9, n, __goscriptShadow10]
	}
	if (optimize) {
		let sign = $.uint64Mul(__goscript_uscale.bool2(__goscriptStatic1(), neg), (2 ** 63))
		if (d == 0n) {
			return [__goscript_deps.float64frombits($.uint64Or(sign, 0n)), n, null]
		}
		if (p > 310) {
			return [__goscript_deps.float64frombits($.uint64Or(sign, 9218868437227405312n)), n, $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
		}
		if (p < -345) {
			return [__goscript_deps.float64frombits($.uint64Or(sign, 0n)), n, null]
		}
		if (!trunc) {
			// Exact rounding with single multiplication or division.
			{
				let [__goscriptShadow11, __goscriptShadow12] = atof64exact(d, p, neg)
				if (__goscriptShadow12) {
					return [__goscriptShadow11, n, null]
				}
			}
		}
		// Use fast unrounded scaling.
		// The only possible err is ErrRange, when the result overflows to ±Inf.
		let [__goscriptShadow13, __goscriptShadow14] = __goscript_uscale.parseFloat64(d, p, sign)
		if (!trunc) {
			return [__goscriptShadow13, n, __goscriptShadow14]
		}
		// If additional digits were truncated from d
		// but d+1 converts to the same value,
		// then the additional digits don't matter.
		let [f1, ] = __goscript_uscale.parseFloat64($.uint64Add(d, 1n), p, sign)
		if (__goscriptShadow13 == f1) {
			return [__goscriptShadow13, n, __goscriptShadow14]
		}
	}

	// Slow fallback.
	let dec: $.VarRef<__goscript_decimal.decimal> = $.varRef(new __goscript_decimal.decimal(undefined, true))
	if (!dec.value.set($.sliceStringOrBytes(s, undefined, n))) {
		return [0, n, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	let [b, ovf] = dec.value.floatBits(__goscript_get_float64info())
	f = __goscript_deps.float64frombits(b)
	if (ovf) {
		err = $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))
	}
	return [f, n, err]
}

export function ParseFloat(s: string, bitSize: number): [number, $.GoError] {
	let [f, n, err] = parseFloatPrefix(s, bitSize)
	if (n != $.stringLen(s)) {
		return [0, $.namedValueInterfaceValue<$.GoError>(2, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	return [f, err]
}

export function parseFloatPrefix(s: string, bitSize: number): [number, number, $.GoError] {
	if (bitSize == 32) {
		let [f, n, err] = atof32(s)
		return [f, n, err]
	}
	return atof64(s)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint32"), zero: () => 0 }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint64"), zero: () => 0n }})
}
