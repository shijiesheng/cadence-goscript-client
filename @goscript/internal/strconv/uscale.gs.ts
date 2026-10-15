// Generated file based on uscale.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_atoi from "./atoi.gs.ts"

import * as __goscript_deps from "./deps.gs.ts"

import * as __goscript_ftoa from "./ftoa.gs.ts"

import * as __goscript_itoa from "./itoa.gs.ts"

import * as __goscript_pow10tab from "./pow10tab.gs.ts"
import "@goscript/math/bits/index.js"
import "@goscript/unsafe/index.js"
import "./atoi.gs.ts"
import "./deps.gs.ts"
import "./ftoa.gs.ts"
import "./itoa.gs.ts"
import "./pow10tab.gs.ts"

$.registerTypePackagePath("internal/strconv", ["strconv.unrounded", "strconv.pmHiLo", "strconv.scaler"])

export type unrounded = bigint

$.registerNamedValueType(
	"strconv.unrounded",
	{ceil: (receiver: any, ...args: any[]) => (unrounded_ceil as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), div: (receiver: any, ...args: any[]) => (unrounded_div as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), floor: (receiver: any, ...args: any[]) => (unrounded_floor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), nudge: (receiver: any, ...args: any[]) => (unrounded_nudge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), round: (receiver: any, ...args: any[]) => (unrounded_round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), roundHalfDown: (receiver: any, ...args: any[]) => (unrounded_roundHalfDown as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), roundHalfUp: (receiver: any, ...args: any[]) => (unrounded_roundHalfUp as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), rsh: (receiver: any, ...args: any[]) => (unrounded_rsh as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ceil", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("div", [["d", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("floor", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("nudge", [["δ", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("round", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfDown", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfUp", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("rsh", [["s", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")])]
);

$.registerNamedValueType(
	"*strconv.unrounded",
	{ceil: (receiver: any, ...args: any[]) => (unrounded_ceil as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), div: (receiver: any, ...args: any[]) => (unrounded_div as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), floor: (receiver: any, ...args: any[]) => (unrounded_floor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), nudge: (receiver: any, ...args: any[]) => (unrounded_nudge as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), round: (receiver: any, ...args: any[]) => (unrounded_round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), roundHalfDown: (receiver: any, ...args: any[]) => (unrounded_roundHalfDown as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), roundHalfUp: (receiver: any, ...args: any[]) => (unrounded_roundHalfUp as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), rsh: (receiver: any, ...args: any[]) => (unrounded_rsh as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ceil", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("div", [["d", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("floor", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("nudge", [["δ", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("round", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfDown", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfUp", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("rsh", [["s", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")])]
);

export class pmHiLo {
	public get hi(): bigint {
		return this._fields.hi
	}

	public set hi(value: bigint) {
		this._fields.hi = value
	}

	public get lo(): bigint {
		return this._fields.lo
	}

	public set lo(value: bigint) {
		this._fields.lo = value
	}

	public _fields: {
		hi: bigint
		lo: bigint
	}

	constructor(init?: Partial<{hi?: bigint, lo?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			hi: init?.hi ?? (0n as bigint),
			lo: init?.lo ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pmHiLo {
		return new pmHiLo(this, true)
	}

	public __goscriptAssign(source: pmHiLo): void {
		const target = this._fields
		const values = source._fields
		target.hi = values.hi
		target.lo = values.lo
	}

	static __typeInfo = $.registerStructType(
		"strconv.pmHiLo",
		() => new pmHiLo(),
		() => [],
		pmHiLo,
		() => [/* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "internal/strconv" })]
	)
}

export class scaler {
	// Note: using pm pmHiLo here nudges uscale just over the inlining boundary. Don't.
	public get pmHi(): bigint {
		return this._fields.pmHi
	}

	public set pmHi(value: bigint) {
		this._fields.pmHi = value
	}

	public get pmLo(): bigint {
		return this._fields.pmLo
	}

	public set pmLo(value: bigint) {
		this._fields.pmLo = value
	}

	public get s(): number {
		return this._fields.s
	}

	public set s(value: number) {
		this._fields.s = value
	}

	public _fields: {
		pmHi: bigint
		pmLo: bigint
		s: number
	}

	constructor(init?: Partial<{pmHi?: bigint, pmLo?: bigint, s?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			pmHi: init?.pmHi ?? (0n as bigint),
			pmLo: init?.pmLo ?? (0n as bigint),
			s: init?.s ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scaler {
		return new scaler(this, true)
	}

	public __goscriptAssign(source: scaler): void {
		const target = this._fields
		const values = source._fields
		target.pmHi = values.pmHi
		target.pmLo = values.pmLo
		target.s = values.s
	}

	static __typeInfo = $.registerStructType(
		"strconv.scaler",
		() => new scaler(),
		() => [],
		scaler,
		() => [/* @__PURE__ */ $.structField("pmHi", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("pmLo", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "internal/strconv" })]
	)
}

export function bool2(__typeArgs: $.GenericTypeArgs | undefined, b: boolean): any {
	if (b) {
		return 1
	}
	return 0
}

export function pack64(m: bigint, e: number): [number, $.GoError] {
	if (($.uint64And(m, 4503599627370496n)) == 0n) {
		return [__goscript_deps.float64frombits(m), null]
	}
	if (e >= 972) {
		return [__goscript_deps.float64frombits($.uint64Or(($.uint64And(m, 9223372036854775808n)), 9218868437227405312n)), $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	return [__goscript_deps.float64frombits($.uint64Or(($.uint64AndNot(m, 4503599627370496n)), ($.uint64Mul(1075 + e, (2 ** 52))))), null]
}

export function pack32(m: number, e: number): [number, $.GoError] {
	if ($.uint((m & (8388608)), 32) == 0) {
		return [__goscript_deps.float32frombits(m), null]
	}
	if (e >= 105) {
		return [__goscript_deps.float32frombits($.uint((m & (2147483648)) | (2139095040), 32)), $.namedValueInterfaceValue<$.GoError>(1, "strconv.Error", {"Error": __goscript_atoi.Error_Error}, /* @__PURE__ */ $.basicType("int", "strconv.Error"))]
	}
	return [__goscript_deps.float32frombits($.uint((m & ~((8388608))) | ((($.uint(150 + e, 32) << 23) >>> 0)), 32)), null]
}

export function unrounded_floor(u: unrounded): bigint {
	return $.uint64($.uint64Shr(($.uint64Add(u, 0n)), 2n))
}

export function unrounded_roundHalfDown(u: unrounded): bigint {
	return $.uint64($.uint64Shr(($.uint64Add(u, 1n)), 2n))
}

export function unrounded_round(u: unrounded): bigint {
	return $.uint64($.uint64Shr(($.uint64Add(($.uint64Add(u, 1n)), ($.uint64And(($.uint64Shr(u, 2n)), 1n)))), 2n))
}

export function unrounded_roundHalfUp(u: unrounded): bigint {
	return $.uint64($.uint64Shr(($.uint64Add(u, 2n)), 2n))
}

export function unrounded_ceil(u: unrounded): bigint {
	return $.uint64($.uint64Shr(($.uint64Add(u, 3n)), 2n))
}

export function unrounded_nudge(u: unrounded, _u3b4: number): unrounded {
	return $.uint64Add(u, $.uint64(_u3b4))
}

export function unrounded_div(u: unrounded, d: bigint): unrounded {
	let x = $.uint64(u)
	return $.uint64Or(($.uint64Or($.uint64($.uint64Div(x, d)), ($.uint64And(u, 1n)))), bool2(__goscriptStatic0(), ($.uint64Mod(x, d)) != 0n))
}

export function unrounded_rsh(u: unrounded, s: number): unrounded {
	return $.uint64Or(($.uint64Or(($.uint64Shr(u, s)), ($.uint64And(u, 1n)))), bool2(__goscriptStatic0(), ($.uint64And(u, ($.uint64Sub(($.uint64Shl(1n, s)), 1n)))) != 0n))
}

export function log10Pow2(x: number): number {
	// log₁₀ 2 ≈ 0.30102999566 ≈ 78913 / 2^18
	return (x * 78913) >> 18
}

export function log2Pow10(x: number): number {
	// log₂ 10 ≈ 3.32192809489 ≈ 108853 / 2^15
	return (x * 108853) >> 15
}

export let uint64pow10: bigint[] = $.arrayValue([1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n, 10000000000000000n, 100000000000000000n, 1000000000000000000n, 10000000000000000000n])

export function __goscript_set_uint64pow10(__goscriptValue: bigint[]): void {
	uint64pow10 = __goscriptValue
}

export function fixedWidthFloat(m: bigint, e: number, n: number, prec: number, fmt: number): [bigint, number] {
	let d: bigint = 0n
	let p: number = 0
	p = (n - 1) - log10Pow2(e + 63)
	let pre: $.VarRef<scaler> = $.varRef(new scaler(undefined, true))
	prescale(pre, e, p, log2Pow10(p))
	let u = uscale(m, pre)
	if (u >= unmin($.arrayIndex(uint64pow10, n))) {
		u = unrounded_div(u, 10n)
		p--
	}
	if (fmt == 102) {
		while (p > prec) {
			u = unrounded_div(u, 10n)
			p--
		}
	}
	return [unrounded_round(u), -p]
}

export function parseFloat64(d: bigint, p: number, sign: bigint): [number, $.GoError] {
	let b = bits.Len64(d)
	let lp = log2Pow10(p)
	let e = $.min(1074, (53 - b) - lp)
	let pre: $.VarRef<scaler> = $.varRef(new scaler(undefined, true))
	prescale(pre, e - (64 - b), p, lp)
	if (pre.value.s >= 64) {
		return [__goscript_deps.float64frombits($.uint64Or(sign, 0n)), null]
	}
	let u = uscale($.uint64Shl(d, (64 - b)), pre)

	// This block is branch-free code for:
	//	if u.round() >= 1<<53 {
	//		u = u.rsh(1)
	//		e = e - 1
	//	}
	let s: number = (bool2(__goscriptStatic1(), u >= unmin(9007199254740992n)) as number)
	u = $.uint64Or(($.uint64Shr(u, s)), ($.uint64And(u, 1n)))
	e = e - s

	return pack64($.uint64Or(sign, unrounded_round(u)), -e)
}

export function parseFloat32(d: bigint, p: number, sign: number): [number, $.GoError] {
	let b = bits.Len64(d)
	let lp = log2Pow10(p)
	let e = $.min(149, (24 - b) - lp)
	let pre: $.VarRef<scaler> = $.varRef(new scaler(undefined, true))
	prescale(pre, e - (64 - b), p, lp)
	if (pre.value.s >= 64) {
		return [__goscript_deps.float32frombits($.uint(sign | 0, 32)), null]
	}
	let u = uscale($.uint64Shl(d, (64 - b)), pre)

	// This block is branch-free code for:
	//	if u.round() >= 1<<24 {
	//		u = u.rsh(1)
	//		e = e - 1
	//	}
	let s: number = (bool2(__goscriptStatic1(), u >= unmin(16777216n)) as number)
	u = $.uint64Or(($.uint64Shr(u, s)), ($.uint64And(u, 1n)))
	e = e - s

	return pack32($.uint(sign | $.uint(unrounded_round(u), 32), 32), -e)
}

export function unmin(x: bigint): unrounded {
	return $.uint64($.uint64Sub(($.uint64Shl(x, 2n)), 2n))
}

export function shortFloat(__typeArgs: $.GenericTypeArgs | undefined, m: bigint, e: number): [bigint, number] {
	let d: bigint = 0n
	let p: number = 0
	let mantBits: number = 0
	let minExp: number = 0
	switch ($.uint($.uint64Mul(8n, unsafe.Sizeof!($.genericConvert<any>(__typeArgs, "F", 0))), 64)) {
		case 32:
		{
			mantBits = 23
			minExp = -189
			break
		}
		case 64:
		{
			mantBits = 52
			minExp = -1085
			break
		}
	}

	// Note: these cases could be factored a little more,
	// but in the first two branches, z is a constant,
	// allowing the compiler to greatly simplify the code.
	let min: bigint = 0n
	let max: bigint = 0n
	let odd: number = 0
	let z = 63 - mantBits
	if ((m == 9223372036854775808n) && (e > minExp)) {
		p = -skewed(e + z)
		min = $.uint64Sub(m, ($.uint64Shl(1n, (z - 2))))
		max = $.uint64Add(m, ($.uint64Shl(1n, (z - 1))))
		odd = $.int($.uint64Shr(m, z)) & 1
	} else {
		if (e >= minExp) {
			p = -log10Pow2(e + z)
			min = $.uint64Sub(m, ($.uint64Shl(1n, (z - 1))))
			max = $.uint64Add(m, ($.uint64Shl(1n, (z - 1))))
			odd = $.int($.uint64Shr(m, z)) & 1
		} else {
			z = z + (minExp - e)
			p = -log10Pow2(e + z)
			min = $.uint64Sub(m, ($.uint64Shl(1n, (z - 1))))
			max = $.uint64Add(m, ($.uint64Shl(1n, (z - 1))))
			odd = $.int($.uint64Shr(m, z)) & 1
		}
	}

	let pre: $.VarRef<scaler> = $.varRef(new scaler(undefined, true))
	prescale(pre, e, p, log2Pow10(p))
	let dmin = unrounded_ceil(unrounded_nudge(uscale(min, pre), odd))
	let dmax = unrounded_floor(unrounded_nudge(uscale(max, pre), -odd))

	{
		d = $.uint64Div(dmax, 10n)
		if (($.uint64Mul(d, 10n)) >= dmin) {
			return [d, -(p - 1)]
		}
	}
	{
		d = dmin
		if (d < dmax) {
			d = unrounded_round(uscale(m, pre))
		}
	}
	return [d, -p]
}

export function skewed(e: number): number {
	return ((e * 631305) - 261663) >> 21
}

export function prescale(pre: scaler | $.VarRef<scaler> | null, e: number, p: number, lp: number): void {
	const pre$: scaler = pre == null ? $.pointerTarget<scaler>(pre) : (pre as any).__isVarRef === true ? (pre as any).value : (pre as any).__goValue === undefined ? (pre as any) : $.pointerTarget<scaler>(pre);
	;(pre$ as scaler).pmHi = $.arrayIndex(__goscript_pow10tab.__goscript_get_pow10Tab(), p - -348).hi;
	;(pre$ as scaler).pmLo = $.arrayIndex(__goscript_pow10tab.__goscript_get_pow10Tab(), p - -348).lo;
	;(pre$ as scaler).s = -((e + lp) + 3)
}

export function uscale(x: bigint, c: scaler | $.VarRef<scaler> | null): unrounded {
	const c$: scaler = c == null ? $.pointerTarget<scaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<scaler>(c)
	let [hi, mid] = bits.Mul64(x, (c$ as scaler).pmHi)
	let s = (c$ as scaler).s & 63
	if (($.uint64Shl(($.uint64Shr(hi, s)), s)) != hi) {
		return $.uint64($.uint64Or(($.uint64Shr(hi, s)), 1n))
	}
	let [mid2, ] = bits.Mul64(x, (c$ as scaler).pmLo)
	hi = $.uint64Sub(hi, (bool2(__goscriptStatic2(), mid < mid2) as bigint))
	return $.uint64($.uint64Or(($.uint64Shr(hi, s)), bool2(__goscriptStatic2(), ($.uint64Sub(mid, mid2)) > 1n)))
}

export function setDigits(s: $.Slice<number>, d: bigint, p: number, nd: number): [number, number] {
	let dp: number = 0
	let nzd: number = 0
	// Note: nd <= len(s) is guaranteed by caller,
	// but writing it explicitly here lets the compiler know,
	// so that it can remove the bounds check in the loop.
	// (The slice s[:nd] not panicking only establishes nd <= cap(s).)
	if (nd <= $.sliceLen(s)) {
		__goscript_itoa.formatBase10($.goSlice(s, undefined, nd), d)
		dp = nd + p
		for (let __goscriptSliceWindow0 = $.sliceRange(s); (nd > 0) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, nd - 1)] as number) == 48); ) {
			nd--
		}
	}
	return [dp, nd]
}

export function numDigits(d: bigint): number {
	let nd = log10Pow2(bits.Len64(d))
	return nd + bool2(__goscriptStatic1(), d >= $.arrayIndex(uint64pow10, nd))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint64", "strconv.unrounded"), zero: () => 0n, methods: {ceil: (receiver: any, ...args: any[]) => (unrounded_ceil as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), div: (receiver: any, ...args: any[]) => (unrounded_div as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), floor: (receiver: any, ...args: any[]) => (unrounded_floor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), nudge: (receiver: any, ...args: any[]) => (unrounded_nudge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), round: (receiver: any, ...args: any[]) => (unrounded_round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), roundHalfDown: (receiver: any, ...args: any[]) => (unrounded_roundHalfDown as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), roundHalfUp: (receiver: any, ...args: any[]) => (unrounded_roundHalfUp as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), rsh: (receiver: any, ...args: any[]) => (unrounded_rsh as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("ceil", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("div", [["d", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("floor", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("nudge", [["δ", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")]), $.methodSignature("round", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfDown", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("roundHalfUp", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("rsh", [["s", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "strconv.unrounded")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int"), zero: () => 0 }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint64"), zero: () => 0n }})
}
