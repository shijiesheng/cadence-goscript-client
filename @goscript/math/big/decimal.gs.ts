// Generated file based on decimal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as io from "@goscript/io/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"
import "./arith.gs.ts"
import "./int.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"

$.registerTypePackagePath("math/big", ["big.decimal"])

export class decimal {
	public get mant(): $.Slice<number> {
		return this._fields.mant
	}

	public set mant(value: $.Slice<number>) {
		this._fields.mant = value
	}

	public get exp(): number {
		return this._fields.exp
	}

	public set exp(value: number) {
		this._fields.exp = value
	}

	public _fields: {
		mant: $.Slice<number>
		exp: number
	}

	constructor(init?: Partial<{mant?: $.Slice<number>, exp?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			mant: init?.mant ?? (null! as $.Slice<number>),
			exp: init?.exp ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decimal {
		return new decimal(this, true)
	}

	public __goscriptAssign(source: decimal): void {
		const target = this._fields
		const values = source._fields
		target.mant = values.mant
		target.exp = values.exp
	}

	public String(): string {
		const x: decimal | $.VarRef<decimal> | null = this;
		const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
		if ($.sliceLen((x$ as decimal).mant) == 0) {
			return "0"
		}

		let buf: $.Slice<number> = null! as $.Slice<number>
		switch ((true as boolean)) {
			case (x$ as decimal).exp <= 0:
			{
				buf = $.makeSlice<number>(0, (2 + (-(x$ as decimal).exp)) + $.sliceLen((x$ as decimal).mant), "byte")
				buf = $.appendSlice(buf, $.stringToBytes("0."), $.byteSliceHint)
				buf = appendZeros(buf, -(x$ as decimal).exp)
				buf = $.appendSlice(buf, (x$ as decimal).mant, $.byteSliceHint)
				break
			}
			case (x$ as decimal).exp < $.sliceLen((x$ as decimal).mant):
			{
				buf = $.makeSlice<number>(0, 1 + $.sliceLen((x$ as decimal).mant), "byte")
				buf = $.appendSlice(buf, $.goSlice((x$ as decimal).mant, undefined, (x$ as decimal).exp), $.byteSliceHint)
				buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
				buf = $.appendSlice(buf, $.goSlice((x$ as decimal).mant, (x$ as decimal).exp, undefined), $.byteSliceHint)
				break
			}
			default:
			{
				buf = $.makeSlice<number>(0, (x$ as decimal).exp, "byte")
				buf = $.appendSlice(buf, (x$ as decimal).mant, $.byteSliceHint)
				buf = appendZeros(buf, (x$ as decimal).exp - $.sliceLen((x$ as decimal).mant))
				break
			}
		}

		return $.bytesToString(buf)
	}

	public at(i: number): number {
		const d: decimal | $.VarRef<decimal> | null = this;
		const d$: decimal = d == null ? $.pointerTarget<decimal>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decimal>(d)
		if ((0 <= i) && (i < $.sliceLen((d$ as decimal).mant))) {
			return $.arrayIndex((d$ as decimal).mant!, i)
		}
		return 48
	}

	public async init(m: __goscript_nat.nat, shift: number): globalThis.Promise<void> {
		let x: decimal | $.VarRef<decimal> | null = this;
		const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
		// special case 0
		if ($.sliceLen((m as __goscript_nat.nat)) == 0) {
			;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, 0);
			;(x$ as decimal).exp = 0
			return
		}

		// Optimization: If we need to shift right, first remove any trailing
		// zero bits from m to reduce shift amount that needs to be done in
		// decimal format (since that is likely slower).
		if (shift < 0) {
			let ntz = __goscript_nat.nat_trailingZeroBits(m)
			let s = $.uint(-shift, 64)
			if (s >= ntz) {
				s = ntz
			}
			m = (__goscript_nat.nat_rsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), s) as __goscript_nat.nat)
			shift = shift + ($.int(s))
		}

		// Do any shift left in binary representation.
		if (shift > 0) {
			m = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), $.uint(shift, 64)) as __goscript_nat.nat)
			shift = 0
		}

		// Convert mantissa into decimal representation.
		let s: $.Slice<number> = await __goscript_natconv.nat_utoa(m, 10)
		let n = $.sliceLen(s);
		;(x$ as decimal).exp = n
		// Trim trailing zeros; instead the exponent is tracking
		// the decimal point independent of the number of digits.
		for (let __goscriptSliceWindow0 = $.sliceRange(s); (n > 0) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n - 1)] as number) == 48); ) {
			n--
		}
		;(x$ as decimal).mant = $.appendSlice($.goSlice((x$ as decimal).mant, undefined, 0), $.goSlice(s, undefined, n), $.byteSliceHint)

		// Do any (remaining) shift right in decimal representation.
		if (shift < 0) {
			while (shift < -60) {
				rsh(x, 60)
				shift = shift + (60)
			}
			rsh(x, $.uint(-shift, 64))
		}
	}

	public round(n: number): void {
		const x: decimal | $.VarRef<decimal> | null = this;
		if ((n < 0) || (n >= $.sliceLen($.pointerValue<decimal>(x).mant))) {
			return
		}

		if (shouldRoundUp(x, n)) {
			void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as decimal).roundUp(n) : decimal.prototype.roundUp.call(x, n))
		} else {
			void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as decimal).roundDown(n) : decimal.prototype.roundDown.call(x, n))
		}
	}

	public roundDown(n: number): void {
		let x: decimal | $.VarRef<decimal> | null = this;
		const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
		if ((n < 0) || (n >= $.sliceLen((x$ as decimal).mant))) {
			return
		}
		;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, n)
		trim(x)
	}

	public roundUp(n: number): void {
		let x: decimal | $.VarRef<decimal> | null = this;
		const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
		if ((n < 0) || (n >= $.sliceLen((x$ as decimal).mant))) {
			return
		}
		// 0 <= n < len(x.mant)

		// find first digit < '9'
		while ((n > 0) && ($.arrayIndex((x$ as decimal).mant!, n - 1) >= 57)) {
			n--
		}

		if (n == 0) {
			// all digits are '9's => round up to '1' and update exponent
			$.sliceElems((x$ as decimal).mant!)[$.sliceSlot((x$ as decimal).mant!, 0)] = 49;
			;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, 1);
			;(x$ as decimal).exp++
			return
		}

		// n > 0 && x.mant[n-1] < '9'
		$.sliceElems((x$ as decimal).mant!)[$.sliceSlot((x$ as decimal).mant!, n - 1)]++;
		;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, n)
	}

	static __typeInfo = $.registerStructType(
		"big.decimal",
		() => new decimal(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("at", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("init", [["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["shift", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("round", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("roundDown", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("roundUp", [["n", /* @__PURE__ */ $.basicType("int")]], [], true)],
		decimal,
		() => [/* @__PURE__ */ $.structField("mant", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("exp", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "math/big" })]
	)
}

export const maxShift: number = 60

export function rsh(x: decimal | $.VarRef<decimal> | null, s: number): void {
	const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
	// Division by 1<<s using shift-and-subtract algorithm.

	// pick up enough leading digits to cover first shift
	let r = 0
	let n: __goscript_arith.Word = 0
	while ((($.uint($.uint64Shr(n, s), 64)) == 0) && (r < $.sliceLen((x$ as decimal).mant))) {
		let ch = $.uint($.arrayIndex((x$ as decimal).mant!, r), 64)
		r++
		n = $.uint($.uint64Sub(($.uint($.uint64Add(($.uint($.uint64Mul(n, 10n), 64)), ch), 64)), 48n), 64)
	}
	if (n == 0) {
		// x == 0; shouldn't get here, but handle anyway
		;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, 0)
		return
	}
	while (($.uint($.uint64Shr(n, s), 64)) == 0) {
		r++
		n = $.uint($.uint64Mul(n, 10), 64)
	}
	;(x$ as decimal).exp = (x$ as decimal).exp + (1 - r)

	// read a digit, write a digit
	let w = 0
	let mask = $.uint($.uint64Sub(($.uint($.uint64Shl(1n, s), 64)), 1n), 64)
	while (r < $.sliceLen((x$ as decimal).mant)) {
		let ch = $.uint($.arrayIndex((x$ as decimal).mant!, r), 64)
		r++
		let d = $.uint($.uint64Shr(n, s), 64)
		n = $.uint($.uint64And(n, mask), 64)
		$.sliceElems((x$ as decimal).mant!)[$.sliceSlot((x$ as decimal).mant!, w)] = $.uint($.uint($.uint64Add(d, 48n), 64), 8)
		w++
		n = $.uint($.uint64Sub(($.uint($.uint64Add(($.uint($.uint64Mul(n, 10n), 64)), ch), 64)), 48n), 64)
	}

	// write extra digits that still fit
	while ((n > 0) && (w < $.sliceLen((x$ as decimal).mant))) {
		let d = $.uint($.uint64Shr(n, s), 64)
		n = $.uint($.uint64And(n, mask), 64)
		$.sliceElems((x$ as decimal).mant!)[$.sliceSlot((x$ as decimal).mant!, w)] = $.uint($.uint($.uint64Add(d, 48n), 64), 8)
		w++
		n = $.uint($.uint64Mul(n, 10n), 64)
	}
	;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, w)

	// append additional digits that didn't fit
	while (n > 0) {
		let d = $.uint($.uint64Shr(n, s), 64)
		n = $.uint($.uint64And(n, mask), 64);
		;(x$ as decimal).mant = $.append((x$ as decimal).mant, $.uint($.uint($.uint($.uint64Add(d, 48n), 64), 8), 8), $.byteSliceHint)
		n = $.uint($.uint64Mul(n, 10n), 64)
	}

	trim(x)
}

export function appendZeros(buf: $.Slice<number>, n: number): $.Slice<number> {
	for (; n > 0; n--) {
		buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
	}
	return buf
}

export function shouldRoundUp(x: decimal | $.VarRef<decimal> | null, n: number): boolean {
	const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
	if (($.arrayIndex((x$ as decimal).mant!, n) == 53) && ((n + 1) == $.sliceLen((x$ as decimal).mant))) {
		// exactly halfway - round to even
		return (n > 0) && ($.uint((((($.arrayIndex((x$ as decimal).mant!, n - 1) - 48) & 0xff)) & 1), 8) != 0)
	}
	// not halfway - digit tells all (x.mant has no trailing zeros)
	return $.arrayIndex((x$ as decimal).mant!, n) >= 53
}

export function trim(x: decimal | $.VarRef<decimal> | null): void {
	const x$: decimal = x == null ? $.pointerTarget<decimal>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<decimal>(x)
	let i = $.sliceLen((x$ as decimal).mant)
	while ((i > 0) && ($.arrayIndex((x$ as decimal).mant!, i - 1) == 48)) {
		i--
	}
	;(x$ as decimal).mant = $.goSlice((x$ as decimal).mant, undefined, i)
	if (i == 0) {
		;(x$ as decimal).exp = 0
	}
}
