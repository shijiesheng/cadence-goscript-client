// Generated file based on float.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as fmt2 from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as bits2 from "@goscript/math/bits/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_arith_decl_pure from "./arith_decl_pure.gs.ts"

import * as __goscript_decimal from "./decimal.gs.ts"

import * as __goscript_floatconv from "./floatconv.gs.ts"

import * as __goscript_floatmarsh from "./floatmarsh.gs.ts"

import * as __goscript_ftoa from "./ftoa.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intconv from "./intconv.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_rat from "./rat.gs.ts"

import * as __goscript_ratconv from "./ratconv.gs.ts"

import * as __goscript_ratmarsh from "./ratmarsh.gs.ts"

import * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"

import * as __goscript_sqrt from "./sqrt.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/bytes/index.js"
import "@goscript/sync/index.js"
import "./accuracy_string.gs.ts"
import "./arith.gs.ts"
import "./arith_decl_pure.gs.ts"
import "./decimal.gs.ts"
import "./floatconv.gs.ts"
import "./floatmarsh.gs.ts"
import "./ftoa.gs.ts"
import "./int.gs.ts"
import "./intconv.gs.ts"
import "./intmarsh.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"
import "./rat.gs.ts"
import "./ratconv.gs.ts"
import "./ratmarsh.gs.ts"
import "./roundingmode_string.gs.ts"
import "./sqrt.gs.ts"

$.registerTypePackagePath("math/big", ["big.Float", "big.ErrNaN", "big.form", "big.RoundingMode", "big.Accuracy"])

export type form = number

export type RoundingMode = number

$.registerNamedValueType(
	"big.RoundingMode",
	{String: (receiver: any, ...args: any[]) => (__goscript_roundingmode_string.RoundingMode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*big.RoundingMode",
	{String: (receiver: any, ...args: any[]) => (__goscript_roundingmode_string.RoundingMode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Accuracy = number

$.registerNamedValueType(
	"big.Accuracy",
	{String: (receiver: any, ...args: any[]) => (__goscript_accuracy_string.Accuracy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*big.Accuracy",
	{String: (receiver: any, ...args: any[]) => (__goscript_accuracy_string.Accuracy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Float {
	public get prec(): number {
		return this._fields.prec
	}

	public set prec(value: number) {
		this._fields.prec = value
	}

	public get mode(): RoundingMode {
		return this._fields.mode
	}

	public set mode(value: RoundingMode) {
		this._fields.mode = value
	}

	public get acc(): Accuracy {
		return this._fields.acc
	}

	public set acc(value: Accuracy) {
		this._fields.acc = value
	}

	public get form(): form {
		return this._fields.form
	}

	public set form(value: form) {
		this._fields.form = value
	}

	public get neg(): boolean {
		return this._fields.neg
	}

	public set neg(value: boolean) {
		this._fields.neg = value
	}

	public get mant(): __goscript_nat.nat {
		return this._fields.mant
	}

	public set mant(value: __goscript_nat.nat) {
		this._fields.mant = value
	}

	public get exp(): number {
		return this._fields.exp
	}

	public set exp(value: number) {
		this._fields.exp = value
	}

	public _fields: {
		prec: number
		mode: RoundingMode
		acc: Accuracy
		form: form
		neg: boolean
		mant: __goscript_nat.nat
		exp: number
	}

	constructor(init?: Partial<{prec?: number, mode?: RoundingMode, acc?: Accuracy, form?: form, neg?: boolean, mant?: __goscript_nat.nat, exp?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			prec: init?.prec ?? (0 as number),
			mode: init?.mode ?? (0 as RoundingMode),
			acc: init?.acc ?? (0 as Accuracy),
			form: init?.form ?? (0 as form),
			neg: init?.neg ?? (false as boolean),
			mant: init?.mant ?? (null! as __goscript_nat.nat),
			exp: init?.exp ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Float {
		return new Float(this, true)
	}

	public __goscriptAssign(source: Float): void {
		const target = this._fields
		const values = source._fields
		target.prec = values.prec
		target.mode = values.mode
		target.acc = values.acc
		target.form = values.form
		target.neg = values.neg
		target.mant = values.mant
		target.exp = values.exp
	}

	public async Abs(x: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Set(x) : Float.prototype.Set.call(z, x))
		$.pointerValue<Float>(z).neg = false
		return z
	}

	public Acc(): Accuracy {
		const x: Float | $.VarRef<Float> | null = this;
		return $.pointerValue<Float>(x).acc
	}

	public async Add(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).validate() : Float.prototype.validate.call(y))
		}

		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max($.pointerValue<Float>(x).prec, $.pointerValue<Float>(y).prec)
		}

		if (($.pointerValue<Float>(x).form == 1) && ($.pointerValue<Float>(y).form == 1)) {
			// x + y (common case)

			// Below we set z.neg = x.neg, and when z aliases y this will
			// change the y operand's sign. This is fine, because if an
			// operand aliases the receiver it'll be overwritten, but we still
			// want the original x.neg and y.neg values when we evaluate
			// x.neg != y.neg, so we need to save y.neg before setting z.neg.
			let yneg = $.pointerValue<Float>(y).neg;

			;(z$ as Float).neg = $.pointerValue<Float>(x).neg
			if ($.pointerValue<Float>(x).neg == yneg) {
				// x + y == x + y
				// (-x) + (-y) == -(x + y)
				await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).uadd(x, y) : Float.prototype.uadd.call(z, x, y))
			} else {
				// x + (-y) == x - y == -(y - x)
				// (-x) + y == y - x == -(x - y)
				if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).ucmp(y) : Float.prototype.ucmp.call(x, y)) > 0) {
					await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).usub(x, y) : Float.prototype.usub.call(z, x, y))
				} else {
					;(z$ as Float).neg = !(z$ as Float).neg
					await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).usub(y, x) : Float.prototype.usub.call(z, y, x))
				}
			}
			if ((((z$ as Float).form == 0) && ((z$ as Float).mode == 4)) && ((z$ as Float).acc == 0)) {
				;(z$ as Float).neg = true
			}
			return z
		}

		if ((($.pointerValue<Float>(x).form == 2) && ($.pointerValue<Float>(y).form == 2)) && ($.pointerValue<Float>(x).neg != $.pointerValue<Float>(y).neg)) {
			// +Inf + -Inf
			// -Inf + +Inf
			// value of z is undefined but make sure it's valid
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = false
			$.panic($.interfaceValue(new ErrNaN({msg: "addition of infinities with opposite signs"}, true), "big.ErrNaN", "big.ErrNaN"))
		}

		if (($.pointerValue<Float>(x).form == 0) && ($.pointerValue<Float>(y).form == 0)) {
			// ±0 + ±0
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = $.pointerValue<Float>(x).neg && $.pointerValue<Float>(y).neg
			return z
		}

		if (($.pointerValue<Float>(x).form == 2) || ($.pointerValue<Float>(y).form == 0)) {
			// ±Inf + y
			// x + ±0
			return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Set(x) : Float.prototype.Set.call(z, x))
		}

		// ±0 + y
		// x + ±Inf
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Set(y) : Float.prototype.Set.call(z, y))
	}

	public async Append(buf: $.Slice<number>, fmt: number, prec: number): globalThis.Promise<$.Slice<number>> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)

		if ((x$ as Float).neg) {
			buf = $.append(buf, $.uint(45, 8), $.byteSliceHint)
		}

		if ((x$ as Float).form == 2) {
			if (!(x$ as Float).neg) {
				buf = $.append(buf, $.uint(43, 8), $.byteSliceHint)
			}
			return $.appendSlice(buf, $.stringToBytes("Inf"), $.byteSliceHint)
		}

		switch (fmt) {
			case 98:
			{
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).fmtB(buf) : Float.prototype.fmtB.call(x, buf))
				break
			}
			case 112:
			{
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).fmtP(buf) : Float.prototype.fmtP.call(x, buf))
				break
			}
			case 120:
			{
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).fmtX(buf, prec) : Float.prototype.fmtX.call(x, buf, prec))
				break
			}
		}

		let d: $.VarRef<__goscript_decimal.decimal> = $.varRef(new __goscript_decimal.decimal(undefined, true))
		if ((x$ as Float).form == 1) {
			// largest supported exponent
			await d.value.init(((x$ as Float).mant as __goscript_nat.nat), $.int((x$ as Float).exp) - __goscript_nat.nat_bitLen((x$ as Float).mant))
		}

		let shortest = false
		if (prec < 0) {
			shortest = true
			await __goscript_ftoa.roundShortest(d, x)

			switch (fmt) {
				case 101:
				case 69:
				{
					prec = $.sliceLen(d.value.mant) - 1
					break
				}
				case 102:
				{
					prec = $.max($.sliceLen(d.value.mant) - d.value.exp, 0)
					break
				}
				case 103:
				case 71:
				{
					prec = $.sliceLen(d.value.mant)
					break
				}
			}
		} else {

			switch (fmt) {
				case 101:
				case 69:
				{
					d.value.round(1 + prec)
					break
				}
				case 102:
				{
					d.value.round(d.value.exp + prec)
					break
				}
				case 103:
				case 71:
				{
					if (prec == 0) {
						prec = 1
					}
					d.value.round(prec)
					break
				}
			}
		}

		switch (fmt) {
			case 101:
			case 69:
			{
				return __goscript_ftoa.fmtE(buf, fmt, prec, (d.value).clone())
				break
			}
			case 102:
			{
				return __goscript_ftoa.fmtF(buf, prec, (d.value).clone())
				break
			}
			case 103:
			case 71:
			{
				let eprec = prec
				if ((eprec > $.sliceLen(d.value.mant)) && ($.sliceLen(d.value.mant) >= d.value.exp)) {
					eprec = $.sliceLen(d.value.mant)
				}
				//go:generate stringer -type=RoundingMode

				// Accuracy describes the rounding error produced by the most recent
				// operation that generated a [Float] value, relative to the exact value.
				if (shortest) {
					eprec = 6
				}
				let exp = d.value.exp - 1
				if ((exp < -4) || (exp >= eprec)) {
					if (prec > $.sliceLen(d.value.mant)) {
						prec = $.sliceLen(d.value.mant)
					}
					return __goscript_ftoa.fmtE(buf, $.uint((((((fmt + 101) & 0xff)) - 103) & 0xff), 8), prec - 1, (d.value).clone())
				}
				if (prec > d.value.exp) {
					prec = $.sliceLen(d.value.mant)
				}
				return __goscript_ftoa.fmtF(buf, $.max(prec - d.value.exp, 0), (d.value).clone())
				break
			}
		}

		if ((x$ as Float).neg) {
			buf = $.goSlice(buf, undefined, $.sliceLen(buf) - 1)
		}
		return $.append(buf, $.uint(37, 8), $.uint(fmt, 8), $.byteSliceHint)
	}

	public async AppendText(b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Float | $.VarRef<Float> | null = this;
		if (x == null) {
			return [$.appendSlice(b, $.stringToBytes("<nil>"), $.byteSliceHint), null]
		}
		return [await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Append(b, 103, -1) : Float.prototype.Append.call(x, b, 103, -1)), null]
	}

	public async Cmp(y: Float | $.VarRef<Float> | null): globalThis.Promise<number> {
		const x: Float | $.VarRef<Float> | null = this;
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).validate() : Float.prototype.validate.call(y))
		}

		let mx = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).ord() : Float.prototype.ord.call(x))
		let my = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).ord() : Float.prototype.ord.call(y))
		switch ((true as boolean)) {
			case mx < my:
			{
				return -1
				break
			}
			case mx > my:
			{
				return 1
				break
			}
		}
		// mx == my

		// only if |mx| == 1 we have to compare the mantissae
		switch (mx) {
			case -1:
			{
				return (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).ucmp(x) : Float.prototype.ucmp.call(y, x))
				break
			}
			case 1:
			{
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).ucmp(y) : Float.prototype.ucmp.call(x, y))
				break
			}
		}

		return 0
	}

	public async Copy(x: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}
		if (!$.pointerEqual(z, x)) {
			;(z$ as Float).prec = (x$ as Float).prec;
			;(z$ as Float).mode = (x$ as Float).mode;
			;(z$ as Float).acc = (x$ as Float).acc;
			;(z$ as Float).form = (x$ as Float).form;
			;(z$ as Float).neg = (x$ as Float).neg
			if ((z$ as Float).form == 1) {
				;(z$ as Float).mant = (__goscript_nat.nat__set((z$ as Float).mant, ((x$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Float).exp = (x$ as Float).exp
			}
		}
		return z
	}

	public async Float32(): globalThis.Promise<[number, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				const fbits: number = 32
				const mbits: number = 23
				const ebits: number = 8
				const bias: number = 127
				const dmin: number = -149
				const emin: number = -126
				const emax: number = 127

				// Float mantissa m is 0.5 <= m < 1.0; compute exponent e for float32 mantissa.
				let e = $.int((((x$ as Float).exp - 1) | 0), 32)

				// Compute precision p for float32 mantissa.
				// If the exponent is too small, we have a denormal number before
				// rounding and fewer than p mantissa bits of precision available
				// (the exponent remains fixed but the mantissa gets shifted right).
				let p = 24
				if (e < -126) {
					// recompute precision
					p = ((23 + 1) - -126) + $.int(e)
					// If p == 0, the mantissa of x is shifted so much to the right
					// that its msb falls immediately to the right of the float32
					// mantissa space. In other words, if the smallest denormal is
					// considered "1.0", for p == 0, the mantissa value m is >= 0.5.
					// If m > 0.5, it is rounded up to 1.0; i.e., the smallest denormal.
					// If m == 0.5, it is rounded down to even, i.e., 0.0.
					// If p < 0, the mantissa value m is <= "0.25" which is never rounded up.
					if ((p < 0) || ((p == 0) && (__goscript_nat.nat_sticky((x$ as Float).mant, $.uint($.uint64Sub(($.uint($.uint64Mul($.uint($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 64), 64n), 64)), 1n), 64)) == 0))) {
						// underflow to ±0
						if ((x$ as Float).neg) {
							let z: number = 0
							return [-z, 1]
						}
						return [0, -1]
					}
					// otherwise, round up
					// We handle p == 0 explicitly because it's easy and because
					// Float.round doesn't support rounding to 0 bits of precision.
					if (p == 0) {
						if ((x$ as Float).neg) {
							return [-1.401298464324817e-45, -1]
						}
						return [1.401298464324817e-45, 1]
					}
				}
				// p > 0

				// round
				let r: $.VarRef<Float> = $.varRef(new Float(undefined, true))
				r.value.prec = $.uint(p, 32)
				await r.value.Set(x)
				e = $.int(((r.value.exp - 1) | 0), 32)

				// Rounding may have caused r to overflow to ±Inf
				// (rounding never causes underflows to 0).
				// If the exponent is too large, also overflow to ±Inf.
				if ((r.value.form == 2) || (e > 127)) {
					// overflow
					if ((x$ as Float).neg) {
						return [globalThis.Math.fround(math.Inf(-1)), -1]
					}
					return [globalThis.Math.fround(math.Inf(1)), 1]
				}
				// e <= emax

				// Determine sign, biased exponent, and mantissa.
				let sign: number = 0
				let bexp: number = 0
				let mant: number = 0
				if ((x$ as Float).neg) {
					sign = 2147483648
				}

				// Rounding may have caused a denormal number to
				// become normal. Check again.
				if (e < -126) {
					// denormal number: recompute precision
					// Since rounding may have at best increased precision
					// and we have eliminated p <= 0 early, we know p > 0.
					// bexp == 0 for denormals
					p = ((23 + 1) - -126) + $.int(e)
					mant = $.uint($.uintShr(msb32((r.value.mant as __goscript_nat.nat)), $.uint(32 - p, 64), 32), 32)
				} else {
					// normal number: emin <= e <= emax
					bexp = $.uint((($.uint($.int(((e + 127) | 0), 32), 32) << 23) >>> 0), 32)
					mant = $.uint(($.uintShr(msb32((r.value.mant as __goscript_nat.nat)), 8, 32)) & ((((8388608) - 1) >>> 0)), 32)
				}

				return [math.Float32frombits($.uint((sign | bexp) | mant, 32)), r.value.acc]
				break
			}
			case 0:
			{
				if ((x$ as Float).neg) {
					let z: number = 0
					return [-z, 0]
				}
				return [0, 0]
				break
			}
			case 2:
			{
				if ((x$ as Float).neg) {
					return [globalThis.Math.fround(math.Inf(-1)), 0]
				}
				return [globalThis.Math.fround(math.Inf(1)), 0]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float64(): globalThis.Promise<[number, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				const fbits: number = 64
				const mbits: number = 52
				const ebits: number = 11
				const bias: number = 1023
				const dmin: number = -1074
				const emin: number = -1022
				const emax: number = 1023

				// Float mantissa m is 0.5 <= m < 1.0; compute exponent e for float64 mantissa.
				let e = $.int((((x$ as Float).exp - 1) | 0), 32)

				// Compute precision p for float64 mantissa.
				// If the exponent is too small, we have a denormal number before
				// rounding and fewer than p mantissa bits of precision available
				// (the exponent remains fixed but the mantissa gets shifted right).
				let p = 53
				if (e < -1022) {
					// recompute precision
					p = ((52 + 1) - -1022) + $.int(e)
					// If p == 0, the mantissa of x is shifted so much to the right
					// that its msb falls immediately to the right of the float64
					// mantissa space. In other words, if the smallest denormal is
					// considered "1.0", for p == 0, the mantissa value m is >= 0.5.
					// If m > 0.5, it is rounded up to 1.0; i.e., the smallest denormal.
					// If m == 0.5, it is rounded down to even, i.e., 0.0.
					// If p < 0, the mantissa value m is <= "0.25" which is never rounded up.
					if ((p < 0) || ((p == 0) && (__goscript_nat.nat_sticky((x$ as Float).mant, $.uint($.uint64Sub(($.uint($.uint64Mul($.uint($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 64), 64n), 64)), 1n), 64)) == 0))) {
						// underflow to ±0
						if ((x$ as Float).neg) {
							let z: number = 0
							return [-z, 1]
						}
						return [0.0, -1]
					}
					// otherwise, round up
					// We handle p == 0 explicitly because it's easy and because
					// Float.round doesn't support rounding to 0 bits of precision.
					if (p == 0) {
						if ((x$ as Float).neg) {
							return [-math.SmallestNonzeroFloat64, -1]
						}
						return [math.SmallestNonzeroFloat64, 1]
					}
				}
				// p > 0

				// round
				let r: $.VarRef<Float> = $.varRef(new Float(undefined, true))
				r.value.prec = $.uint(p, 32)
				await r.value.Set(x)
				e = $.int(((r.value.exp - 1) | 0), 32)

				// Rounding may have caused r to overflow to ±Inf
				// (rounding never causes underflows to 0).
				// If the exponent is too large, also overflow to ±Inf.
				if ((r.value.form == 2) || (e > 1023)) {
					// overflow
					if ((x$ as Float).neg) {
						return [math.Inf(-1), -1]
					}
					return [math.Inf(1), 1]
				}
				// e <= emax

				// Determine sign, biased exponent, and mantissa.
				let sign: bigint = 0n
				let bexp: bigint = 0n
				let mant: bigint = 0n
				if ((x$ as Float).neg) {
					sign = 9223372036854775808n
				}

				// Rounding may have caused a denormal number to
				// become normal. Check again.
				if (e < -1022) {
					// denormal number: recompute precision
					// Since rounding may have at best increased precision
					// and we have eliminated p <= 0 early, we know p > 0.
					// bexp == 0 for denormals
					p = ((52 + 1) - -1022) + $.int(e)
					mant = $.uint64Shr(msb64((r.value.mant as __goscript_nat.nat)), $.uint(64 - p, 64))
				} else {
					// normal number: emin <= e <= emax
					bexp = $.uint64Mul(((e + 1023) | 0), (2 ** 52))
					mant = $.uint64And(($.uint64Shr(msb64((r.value.mant as __goscript_nat.nat)), 11n)), 4503599627370495n)
				}

				return [math.Float64frombits($.uint64Or(($.uint64Or(sign, bexp)), mant)), r.value.acc]
				break
			}
			case 0:
			{
				if ((x$ as Float).neg) {
					let z: number = 0
					return [-z, 0]
				}
				return [0.0, 0]
				break
			}
			case 2:
			{
				if ((x$ as Float).neg) {
					return [math.Inf(-1), 0]
				}
				return [math.Inf(1), 0]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Format(s: fmt2.State | null, format: number): globalThis.Promise<void> {
		const x: Float | $.VarRef<Float> | null = this;
		let [prec, hasPrec] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Precision()
		if (!hasPrec) {
			prec = 6
		}

		switch (format) {
			case 101:
			case 69:
			case 102:
			case 98:
			case 112:
			case 120:
			{
				break
			}
			case 70:
			{
				format = 102
				break
			}
			case 118:
			{
				format = 103
			}
			case 103:
			case 71:
			{
				if (!hasPrec) {
					prec = -1
				}
				break
			}
			default:
			{
				await fmt2.Fprintf($.pointerValueOrNil((s as io.Writer | null))!, "%%!%c(*big.Float=%s)", $.basicInterfaceValue(format, "rune", "int32"), await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).String() : Float.prototype.String.call(x)))
				return
				break
			}
		}
		let buf: $.Slice<number> = null! as $.Slice<number>
		buf = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Append(buf, $.uint(format, 8), prec) : Float.prototype.Append.call(x, buf, $.uint(format, 8), prec))
		if ($.sliceLen(buf) == 0) {
			buf = new Uint8Array([63])
		}

		// set msb == carry == 1 from the mantissa overflow above
		let sign: string = ""
		switch ((true as boolean)) {
			case $.arrayIndex(buf!, 0) == 45:
			{
				sign = "-"
				buf = $.goSlice(buf, 1, undefined)
				break
			}
			case $.arrayIndex(buf!, 0) == 43:
			{
				sign = "+"
				if ((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Flag(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					sign = " "
				}
				buf = $.goSlice(buf, 1, undefined)
				break
			}
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				sign = "+"
				break
			}
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Flag(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				sign = " "
				break
			}
		}

		let padding: number = 0
		{
			let [width, hasWidth] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Width()
			if (hasWidth && (width > ($.stringLen(sign) + $.sliceLen(buf)))) {
				padding = (width - $.stringLen(sign)) - $.sliceLen(buf)
			}
		}

		switch ((true as boolean)) {
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Flag(48), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !(x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).IsInf() : Float.prototype.IsInf.call(x)):
			{
				await __goscript_intconv.writeMultiple(s, sign, 1)
				await __goscript_intconv.writeMultiple(s, "0", padding)
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Write(buf)
				break
			}
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Flag(45), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				await __goscript_intconv.writeMultiple(s, sign, 1)
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Write(buf)
				await __goscript_intconv.writeMultiple(s, " ", padding)
				break
			}
			default:
			{
				await __goscript_intconv.writeMultiple(s, " ", padding)
				await __goscript_intconv.writeMultiple(s, sign, 1)
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.State, null>) : $.pointerValue<Exclude<fmt2.State, null>>(s)).Write(buf)
				break
			}
		}
	}

	public async GobDecode(buf: $.Slice<number>): globalThis.Promise<$.GoError> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if ($.sliceLen(buf) == 0) {

			$.assignStruct((z$ as Float), new Float(undefined, true))
			return null
		}
		if ($.sliceLen(buf) < 6) {
			return errors.New("Float.GobDecode: buffer too small")
		}

		if ($.arrayIndex(buf!, 0) != 1) {
			return fmt2.Errorf("Float.GobDecode: encoding version %d not supported", $.basicInterfaceValue($.arrayIndex(buf!, 0), "byte", "uint8"))
		}

		let oldPrec = (z$ as Float).prec
		let oldMode = (z$ as Float).mode

		let b = $.arrayIndex(buf!, 1);
		;(z$ as Float).mode = $.uint(($.uintShr(b, 5, 8)) & 7, 8);
		;(z$ as Float).acc = $.int((($.int(($.uintShr(b, 3, 8)) & 3, 8) - 1) << 24 >> 24), 8);
		;(z$ as Float).form = $.uint(($.uintShr(b, 1, 8)) & 3, 8);
		;(z$ as Float).neg = $.uint((b & 1), 8) != 0;
		;(z$ as Float).prec = byteorder.BEUint32($.goSlice(buf, 2, undefined))

		if ((z$ as Float).form == 1) {
			if ($.sliceLen(buf) < 10) {
				return errors.New("Float.GobDecode: buffer too small for finite form float")
			}
			;(z$ as Float).exp = $.int(byteorder.BEUint32($.goSlice(buf, 6, undefined)), 32);
			;(z$ as Float).mant = (__goscript_nat.nat_setBytes((z$ as Float).mant, $.goSlice(buf, 10, undefined)) as __goscript_nat.nat)
		}

		if (oldPrec != 0) {
			;(z$ as Float).mode = oldMode
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetPrec($.uint(oldPrec, 64)) : Float.prototype.SetPrec.call(z, $.uint(oldPrec, 64)))
		}
		// largest (theoretically) supported precision; likely memory-limited
		{
			let msg = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).validate0() : Float.prototype.validate0.call(z))
			if (!$.stringEqual(msg, "")) {
				return errors.New($.concatString("Float.GobDecode: ", msg))
			}
		}

		return null
	}

	public GobEncode(): [$.Slice<number>, $.GoError] {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (x == null) {
			return [null, null]
		}

		let sz = 6
		let n = 0
		if ((x$ as Float).form == 1) {

			n = $.int(globalThis.Math.trunc(((((x$ as Float).prec + (((64 - 1) >>> 0))) >>> 0)) / 64))

			if ($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)) < n) {
				n = $.sliceLen(((x$ as Float).mant as __goscript_nat.nat))
			}

			sz = sz + (4 + (n * 8))
		}
		let buf: $.Slice<number> = $.makeSlice<number>(sz, undefined, "byte")

		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = 1
		let b = $.uint((((($.uint((x$ as Float).mode & 7, 8) << 5) & 0xff)) | ((($.uint(((((x$ as Float).acc + 1) << 24 >> 24)) & 3, 8) << 3) & 0xff))) | ((($.uint((x$ as Float).form & 3, 8) << 1) & 0xff)), 8)
		if ((x$ as Float).neg) {
			b = b | (1)
		}
		$.sliceElems(buf!)[$.sliceSlot(buf!, 1)] = b
		byteorder.BEPutUint32($.goSlice(buf, 2, undefined), (x$ as Float).prec)

		if ((x$ as Float).form == 1) {
			byteorder.BEPutUint32($.goSlice(buf, 6, undefined), $.uint((x$ as Float).exp, 32))
			__goscript_nat.nat_bytes($.goSlice((x$ as Float).mant, $.sliceLen(((x$ as Float).mant as __goscript_nat.nat)) - n, undefined), $.goSlice(buf, 10, undefined))
		}

		return [buf, null]
	}

	public async Int(z: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): globalThis.Promise<[__goscript_int.Int | $.VarRef<__goscript_int.Int> | null, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		if ((z == null) && ((x$ as Float).form <= 1)) {
			z = new __goscript_int.Int()
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				let acc = makeAcc((x$ as Float).neg)
				if ((x$ as Float).exp <= 0) {
					// 0 < |x| < 1
					return [(z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as __goscript_int.Int).SetInt64(0n) : __goscript_int.Int.prototype.SetInt64.call(z, 0n)), acc]
				}
				// x.exp > 0

				// 1 <= |x| < +Inf
				// determine minimum required precision for x
				let allBits = $.uint($.uint64Mul($.uint($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 64), 64n), 64)
				let exp = $.uint((x$ as Float).exp, 64)
				if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)) <= exp) {
					acc = 0
				}
				// shift mantissa as needed
				if (z == null) {
					z = new __goscript_int.Int()
				}
				$.pointerValue<__goscript_int.Int>(z).neg = (x$ as Float).neg
				switch ((true as boolean)) {
					case exp > allBits:
					{
						$.pointerValue<__goscript_int.Int>(z).abs = (__goscript_nat.nat_lsh($.pointerValue<__goscript_int.Int>(z).abs, ((x$ as Float).mant as __goscript_nat.nat), $.uint($.uint64Sub(exp, allBits), 64)) as __goscript_nat.nat)
						break
					}
					default:
					{
						$.pointerValue<__goscript_int.Int>(z).abs = (__goscript_nat.nat__set($.pointerValue<__goscript_int.Int>(z).abs, ((x$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
						break
					}
					case exp < allBits:
					{
						$.pointerValue<__goscript_int.Int>(z).abs = (__goscript_nat.nat_rsh($.pointerValue<__goscript_int.Int>(z).abs, ((x$ as Float).mant as __goscript_nat.nat), $.uint($.uint64Sub(allBits, exp), 64)) as __goscript_nat.nat)
						break
					}
				}
				return [z, acc]
				break
			}
			case 0:
			{
				return [(z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as __goscript_int.Int).SetInt64(0n) : __goscript_int.Int.prototype.SetInt64.call(z, 0n)), 0]
				break
			}
			case 2:
			{
				return [null, makeAcc((x$ as Float).neg)]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Int64(): globalThis.Promise<[bigint, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				let acc = makeAcc((x$ as Float).neg)
				if ((x$ as Float).exp <= 0) {
					// 0 < |x| < 1
					return [0n, acc]
				}
				// x.exp > 0

				// 1 <= |x| < +Inf
				if ((x$ as Float).exp <= 63) {
					// i = trunc(x) fits into an int64 (excluding math.MinInt64)
					let i = $.int64($.uint64Shr(msb64(((x$ as Float).mant as __goscript_nat.nat)), (((64 - $.uint((x$ as Float).exp, 32)) >>> 0))))
					if ((x$ as Float).neg) {
						i = -i
					}
					if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)) <= $.uint((x$ as Float).exp, 64)) {
						return [i, 0]
					}
					return [i, acc]
				}
				if ((x$ as Float).neg) {
					// check for special case x == math.MinInt64 (i.e., x == -(0.5 << 64))
					if (((x$ as Float).exp == 64) && ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)) == 1)) {
						acc = 0
					}
					return [-9223372036854775808n, acc]
				}
				// x too large
				return [9223372036854775807n, -1]
				break
			}
			case 0:
			{
				return [0n, 0]
				break
			}
			case 2:
			{
				if ((x$ as Float).neg) {
					return [-9223372036854775808n, 1]
				}
				return [9223372036854775807n, -1]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public IsInf(): boolean {
		const x: Float | $.VarRef<Float> | null = this;
		return $.pointerValue<Float>(x).form == 2
	}

	public async IsInt(): globalThis.Promise<boolean> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}
		// special cases
		if ((x$ as Float).form != 1) {
			return (x$ as Float).form == 0
		}
		// x.form == finite
		if ((x$ as Float).exp <= 0) {
			return false
		}
		// x.exp > 0
		return ((x$ as Float).prec <= $.uint((x$ as Float).exp, 32)) || ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)) <= $.uint((x$ as Float).exp, 64))
	}

	public async MantExp(mant: Float | $.VarRef<Float> | null): globalThis.Promise<number> {
		const x: Float | $.VarRef<Float> | null = this;
		let exp: number = 0
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		const mant$: Float = mant == null ? $.pointerTarget<Float>(mant) : (mant as any).__isVarRef === true ? (mant as any).value : (mant as any).__goValue === undefined ? (mant as any) : $.pointerTarget<Float>(mant)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}
		if ((x$ as Float).form == 1) {
			exp = $.int((x$ as Float).exp)
		}
		if (mant != null) {
			await (mant !== null && (mant as any).__isVarRef !== true && (mant as any).__goValue === undefined ? ((mant as any) as Float).Copy(x) : Float.prototype.Copy.call(mant, x))
			if ((mant$ as Float).form == 1) {
				;(mant$ as Float).exp = 0
			}
		}
		return exp
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Float | $.VarRef<Float> | null = this;
		let text: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).AppendText(null) : Float.prototype.AppendText.call(x, null))
	}

	public MinPrec(): number {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if ((x$ as Float).form != 1) {
			return 0
		}
		return $.uint($.uint64Sub(($.uint($.uint64Mul($.uint($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 64), 64n), 64)), __goscript_nat.nat_trailingZeroBits((x$ as Float).mant)), 64)
	}

	public Mode(): RoundingMode {
		const x: Float | $.VarRef<Float> | null = this;
		return $.pointerValue<Float>(x).mode
	}

	public async Mul(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).validate() : Float.prototype.validate.call(y))
		}

		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max($.pointerValue<Float>(x).prec, $.pointerValue<Float>(y).prec)
		}

		;(z$ as Float).neg = $.pointerValue<Float>(x).neg != $.pointerValue<Float>(y).neg

		if (($.pointerValue<Float>(x).form == 1) && ($.pointerValue<Float>(y).form == 1)) {
			// x * y (common case)
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).umul(x, y) : Float.prototype.umul.call(z, x, y))
			return z
		}

		;(z$ as Float).acc = 0
		if ((($.pointerValue<Float>(x).form == 0) && ($.pointerValue<Float>(y).form == 2)) || (($.pointerValue<Float>(x).form == 2) && ($.pointerValue<Float>(y).form == 0))) {
			// ±0 * ±Inf
			// ±Inf * ±0
			// value of z is undefined but make sure it's valid
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = false
			$.panic($.interfaceValue(new ErrNaN({msg: "multiplication of zero with infinity"}, true), "big.ErrNaN", "big.ErrNaN"))
		}

		if (($.pointerValue<Float>(x).form == 2) || ($.pointerValue<Float>(y).form == 2)) {
			// ±Inf * y
			// x * ±Inf
			;(z$ as Float).form = 2
			return z
		}

		// ±0 * y
		// x * ±0
		;(z$ as Float).form = 0
		return z
	}

	public async Neg(x: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Set(x) : Float.prototype.Set.call(z, x));
		;(z$ as Float).neg = !(z$ as Float).neg
		return z
	}

	public async Parse(s: string, base: number): globalThis.Promise<[Float | $.VarRef<Float> | null, number, $.GoError]> {
		const z: Float | $.VarRef<Float> | null = this;
		let f: Float | $.VarRef<Float> | null = null! as Float | $.VarRef<Float> | null
		let b: number = 0
		let err: $.GoError = null! as $.GoError

		if (($.stringLen(s) == 3) && (($.stringEqual(s, "Inf")) || ($.stringEqual(s, "inf")))) {
			f = (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetInf(false) : Float.prototype.SetInf.call(z, false))
			return [f, b, err]
		}
		if ((($.stringLen(s) == 4) && (($.indexString(s, 0) == 43) || ($.indexString(s, 0) == 45))) && (($.stringEqual($.sliceStringOrBytes(s, 1, undefined), "Inf")) || ($.stringEqual($.sliceStringOrBytes(s, 1, undefined), "inf")))) {
			f = (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetInf($.indexString(s, 0) == 45) : Float.prototype.SetInf.call(z, $.indexString(s, 0) == 45))
			return [f, b, err]
		}

		let r: strings.Reader | $.VarRef<strings.Reader> | null = strings.NewReader(s)
		{
			let __goscriptTuple0: any = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).scan($.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), base) : Float.prototype.scan.call(z, $.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), base))
			f = __goscriptTuple0[0]
			b = __goscriptTuple0[1]
			err = __goscriptTuple0[2]
			if (err != null) {
				return [f, b, err]
			}
		}

		{
			let [ch, err2] = strings.Reader.prototype.ReadByte.call($.pointerValue<strings.Reader>(r))
			if (err2 == null) {
				err = fmt2.Errorf("expected end of string, found %q", $.basicInterfaceValue(ch, "byte", "uint8"))
			} else {
				if (!$.comparableEqual(err2, io.EOF)) {
					err = err2
				}
			}
		}

		return [f, b, err]
	}

	public Prec(): number {
		const x: Float | $.VarRef<Float> | null = this;
		return $.uint($.pointerValue<Float>(x).prec, 64)
	}

	public async Quo(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).validate() : Float.prototype.validate.call(y))
		}

		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max($.pointerValue<Float>(x).prec, $.pointerValue<Float>(y).prec)
		}

		;(z$ as Float).neg = $.pointerValue<Float>(x).neg != $.pointerValue<Float>(y).neg

		if (($.pointerValue<Float>(x).form == 1) && ($.pointerValue<Float>(y).form == 1)) {
			// x / y (common case)
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).uquo(x, y) : Float.prototype.uquo.call(z, x, y))
			return z
		}

		;(z$ as Float).acc = 0
		if ((($.pointerValue<Float>(x).form == 0) && ($.pointerValue<Float>(y).form == 0)) || (($.pointerValue<Float>(x).form == 2) && ($.pointerValue<Float>(y).form == 2))) {
			// ±0 / ±0
			// ±Inf / ±Inf
			// value of z is undefined but make sure it's valid
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = false
			$.panic($.interfaceValue(new ErrNaN({msg: "division of zero by zero or infinity by infinity"}, true), "big.ErrNaN", "big.ErrNaN"))
		}

		if (($.pointerValue<Float>(x).form == 0) || ($.pointerValue<Float>(y).form == 2)) {
			// ±0 / y
			// x / ±Inf
			;(z$ as Float).form = 0
			return z
		}

		// x / ±0
		// ±Inf / y
		;(z$ as Float).form = 2
		return z
	}

	public async Rat(z: __goscript_rat.Rat | $.VarRef<__goscript_rat.Rat> | null): globalThis.Promise<[__goscript_rat.Rat | $.VarRef<__goscript_rat.Rat> | null, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		if ((z == null) && ((x$ as Float).form <= 1)) {
			z = new __goscript_rat.Rat()
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				let allBits = $.int(globalThis.Math.imul($.int($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 32), 64), 32)
				// build up numerator and denominator
				$.pointerValue<__goscript_rat.Rat>(z).a.neg = (x$ as Float).neg
				switch ((true as boolean)) {
					case (x$ as Float).exp > allBits:
					{
						$.pointerValue<__goscript_rat.Rat>(z).a.abs = (__goscript_nat.nat_lsh($.pointerValue<__goscript_rat.Rat>(z).a.abs, ((x$ as Float).mant as __goscript_nat.nat), $.uint($.int((((x$ as Float).exp - allBits) | 0), 32), 64)) as __goscript_nat.nat)
						$.pointerValue<__goscript_rat.Rat>(z).b.abs = ($.goSlice($.pointerValue<__goscript_rat.Rat>(z).b.abs, undefined, 0) as __goscript_nat.nat)
						break
					}
					default:
					{
						$.pointerValue<__goscript_rat.Rat>(z).a.abs = (__goscript_nat.nat__set($.pointerValue<__goscript_rat.Rat>(z).a.abs, ((x$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
						$.pointerValue<__goscript_rat.Rat>(z).b.abs = ($.goSlice($.pointerValue<__goscript_rat.Rat>(z).b.abs, undefined, 0) as __goscript_nat.nat)
						break
					}
					case (x$ as Float).exp < allBits:
					{
						$.pointerValue<__goscript_rat.Rat>(z).a.abs = (__goscript_nat.nat__set($.pointerValue<__goscript_rat.Rat>(z).a.abs, ((x$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
						let t: __goscript_nat.nat = (__goscript_nat.nat_setUint64($.pointerValue<__goscript_rat.Rat>(z).b.abs, 1n) as __goscript_nat.nat)
						$.pointerValue<__goscript_rat.Rat>(z).b.abs = (__goscript_nat.nat_lsh(t, (t as __goscript_nat.nat), $.uint($.int(((allBits - (x$ as Float).exp) | 0), 32), 64)) as __goscript_nat.nat)
						await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as __goscript_rat.Rat).norm() : __goscript_rat.Rat.prototype.norm.call(z))
						break
					}
				}
				return [z, 0]
				break
			}
			case 0:
			{
				return [(z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as __goscript_rat.Rat).SetInt64(0n) : __goscript_rat.Rat.prototype.SetInt64.call(z, 0n)), 0]
				break
			}
			case 2:
			{
				return [null, makeAcc((x$ as Float).neg)]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Scan(s: fmt2.ScanState | null, ch: number): globalThis.Promise<$.GoError> {
		const z: Float | $.VarRef<Float> | null = this;
		void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt2.ScanState, null>) : $.pointerValue<Exclude<fmt2.ScanState, null>>(s)).SkipSpace(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let [, , err] = await Float.prototype.scan.call(z, $.interfaceValue<io.ByteScanner | null>(new __goscript_intconv.byteReader({ScanState: s}, true), "big.byteReader", "big.byteReader"), 0)
		return err
	}

	public async Set(x: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}
		;(z$ as Float).acc = 0
		if (!$.pointerEqual(z, x)) {
			;(z$ as Float).form = (x$ as Float).form;
			;(z$ as Float).neg = (x$ as Float).neg
			if ((x$ as Float).form == 1) {
				;(z$ as Float).exp = (x$ as Float).exp;
				;(z$ as Float).mant = (__goscript_nat.nat__set((z$ as Float).mant, ((x$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
			}
			if ((z$ as Float).prec == 0) {
				;(z$ as Float).prec = (x$ as Float).prec
			} else {
				if ((z$ as Float).prec < (x$ as Float).prec) {
					await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(0) : Float.prototype.round.call(z, 0))
				}
			}
		}
		return z
	}

	public async SetFloat64(x: number): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = 53
		}
		if (math.IsNaN(x)) {
			$.panic($.interfaceValue(new ErrNaN({msg: "Float.SetFloat64(NaN)"}, true), "big.ErrNaN", "big.ErrNaN"))
		}
		;(z$ as Float).acc = 0;
		;(z$ as Float).neg = math.Signbit(x)
		if (x == 0) {
			;(z$ as Float).form = 0
			return z
		}
		if (math.IsInf(x, 0)) {
			;(z$ as Float).form = 2
			return z
		}
		// normalized x != 0
		;(z$ as Float).form = 1
		let [fmant, exp] = math.Frexp(x);
		;(z$ as Float).mant = (__goscript_nat.nat_setUint64((z$ as Float).mant, $.uint64Or(9223372036854775808n, ($.uint64Shl(math.Float64bits(fmant), 11n)))) as __goscript_nat.nat);
		;(z$ as Float).exp = $.int(exp, 32)
		if ((z$ as Float).prec < 53) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(0) : Float.prototype.round.call(z, 0))
		}
		return z
	}

	public SetInf(signbit: boolean): Float | $.VarRef<Float> | null {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z);
		;(z$ as Float).acc = 0;
		;(z$ as Float).form = 2;
		;(z$ as Float).neg = signbit
		return z
	}

	public async SetInt(x: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		const x$: __goscript_int.Int = x == null ? $.pointerTarget<__goscript_int.Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<__goscript_int.Int>(x)
		// TODO(gri) can be more efficient if z.prec > 0
		// but small compared to the size of x, or if there
		// are many trailing 0's.
		let __goscriptShadow0 = $.uint((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_int.Int).BitLen() : __goscript_int.Int.prototype.BitLen.call(x)), 32)
		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max(__goscriptShadow0, 64)
		}
		;(z$ as Float).acc = 0;
		;(z$ as Float).neg = (x$ as __goscript_int.Int).neg
		if ($.sliceLen(((x$ as __goscript_int.Int).abs as __goscript_nat.nat)) == 0) {
			;(z$ as Float).form = 0
			return z
		}
		// x != 0
		;(z$ as Float).mant = (__goscript_nat.nat__set((z$ as Float).mant, ((x$ as __goscript_int.Int).abs as __goscript_nat.nat)) as __goscript_nat.nat)
		fnorm(((z$ as Float).mant as __goscript_nat.nat))
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setExpAndRound($.int64(__goscriptShadow0), 0) : Float.prototype.setExpAndRound.call(z, $.int64(__goscriptShadow0), 0))
		return z
	}

	public async SetInt64(x: bigint): globalThis.Promise<Float | $.VarRef<Float> | null> {
		const z: Float | $.VarRef<Float> | null = this;
		let u = x
		if (u < 0n) {
			u = -u
		}
		// We cannot simply call z.SetUint64(uint64(u)) and change
		// the sign afterwards because the sign affects rounding.
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setBits64(x < 0n, $.uint64(u)) : Float.prototype.setBits64.call(z, x < 0n, $.uint64(u)))
	}

	public async SetMantExp(mant: Float | $.VarRef<Float> | null, exp: number): globalThis.Promise<Float | $.VarRef<Float> | null> {
		const z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).validate() : Float.prototype.validate.call(z))
			await (mant !== null && (mant as any).__isVarRef !== true && (mant as any).__goValue === undefined ? ((mant as any) as Float).validate() : Float.prototype.validate.call(mant))
		}
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Copy(mant) : Float.prototype.Copy.call(z, mant))

		if ((z$ as Float).form == 1) {
			// 0 < |mant| < +Inf
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setExpAndRound($.int64Add($.int64((z$ as Float).exp), $.int64(exp)), 0) : Float.prototype.setExpAndRound.call(z, $.int64Add($.int64((z$ as Float).exp), $.int64(exp)), 0))
		}
		return z
	}

	public SetMode(mode: RoundingMode): Float | $.VarRef<Float> | null {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z);
		;(z$ as Float).mode = mode;
		;(z$ as Float).acc = 0
		return z
	}

	public async SetPrec(prec: number): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z);
		;(z$ as Float).acc = 0

		// special case
		if (prec == 0) {
			;(z$ as Float).prec = 0
			if ((z$ as Float).form == 1) {
				// truncate z to 0
				;(z$ as Float).acc = makeAcc((z$ as Float).neg);
				;(z$ as Float).form = 0
			}
			return z
		}

		// general case
		if (prec > 4294967295) {
			prec = 4294967295
		}
		let old = (z$ as Float).prec;
		;(z$ as Float).prec = $.uint(prec, 32)
		if ((z$ as Float).prec < old) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(0) : Float.prototype.round.call(z, 0))
		}
		return z
	}

	public async SetRat(x: __goscript_rat.Rat | $.VarRef<__goscript_rat.Rat> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_rat.Rat).IsInt() : __goscript_rat.Rat.prototype.IsInt.call(x))) {
			return Float.prototype.SetInt.call(z, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_rat.Rat).Num() : __goscript_rat.Rat.prototype.Num.call(x)))
		}
		let a: $.VarRef<Float> = $.varRef(new Float(undefined, true))
		let b: $.VarRef<Float> = $.varRef(new Float(undefined, true))
		await a.value.SetInt((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_rat.Rat).Num() : __goscript_rat.Rat.prototype.Num.call(x)))
		await b.value.SetInt((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_rat.Rat).Denom() : __goscript_rat.Rat.prototype.Denom.call(x)))
		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max(a.value.prec, b.value.prec)
		}
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Quo(a, b) : Float.prototype.Quo.call(z, a, b))
	}

	public async SetString(s: string): globalThis.Promise<[Float | $.VarRef<Float> | null, boolean]> {
		const z: Float | $.VarRef<Float> | null = this;
		{
			let __goscriptTuple1: any = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Parse(s, 0) : Float.prototype.Parse.call(z, s, 0))
			let f: Float | $.VarRef<Float> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[2]
			if (err == null) {
				return [f, true]
			}
		}
		return [null, false]
	}

	public async SetUint64(x: bigint): globalThis.Promise<Float | $.VarRef<Float> | null> {
		const z: Float | $.VarRef<Float> | null = this;
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setBits64(false, x) : Float.prototype.setBits64.call(z, false, x))
	}

	public async Sign(): globalThis.Promise<number> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}
		if ((x$ as Float).form == 0) {
			return 0
		}
		if ((x$ as Float).neg) {
			return -1
		}
		return 1
	}

	public Signbit(): boolean {
		const x: Float | $.VarRef<Float> | null = this;
		return $.pointerValue<Float>(x).neg
	}

	public async Sqrt(x: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = (x$ as Float).prec
		}

		if (await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Sign() : Float.prototype.Sign.call(x)) == -1) {

			$.panic($.interfaceValue(new ErrNaN({msg: "square root of negative operand"}, true), "big.ErrNaN", "big.ErrNaN"))
		}

		if ((x$ as Float).form != 1) {
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = (x$ as Float).form;
			;(z$ as Float).neg = (x$ as Float).neg
			return z
		}

		let prec = (z$ as Float).prec
		let b = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MantExp(z) : Float.prototype.MantExp.call(x, z));
		;(z$ as Float).prec = prec

		switch (b % 2) {
			case 0:
			{
				break
			}
			case 1:
			{
				;(z$ as Float).exp = (((z$ as Float).exp + 1) | 0)
				break
			}
			case -1:
			{
				;(z$ as Float).exp = (((z$ as Float).exp - 1) | 0)
				break
			}
		}

		// An ErrNaN panic is raised by a [Float] operation that would lead to
		// a NaN under IEEE 754 rules. An ErrNaN implements the error interface.

		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).sqrtInverse(z) : Float.prototype.sqrtInverse.call(z, z))

		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetMantExp(z, globalThis.Math.trunc(b / 2)) : Float.prototype.SetMantExp.call(z, z, globalThis.Math.trunc(b / 2)))
	}

	public async String(): globalThis.Promise<string> {
		const x: Float | $.VarRef<Float> | null = this;
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Text(103, 10) : Float.prototype.Text.call(x, 103, 10))
	}

	public async Sub(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Float).validate() : Float.prototype.validate.call(y))
		}

		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = $.max($.pointerValue<Float>(x).prec, $.pointerValue<Float>(y).prec)
		}

		if (($.pointerValue<Float>(x).form == 1) && ($.pointerValue<Float>(y).form == 1)) {
			// x - y (common case)
			let yneg = $.pointerValue<Float>(y).neg;
			;(z$ as Float).neg = $.pointerValue<Float>(x).neg
			if ($.pointerValue<Float>(x).neg != yneg) {
				// x - (-y) == x + y
				// (-x) - y == -(x + y)
				await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).uadd(x, y) : Float.prototype.uadd.call(z, x, y))
			} else {
				// x - y == x - y == -(y - x)
				// (-x) - (-y) == y - x == -(x - y)
				if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).ucmp(y) : Float.prototype.ucmp.call(x, y)) > 0) {
					await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).usub(x, y) : Float.prototype.usub.call(z, x, y))
				} else {
					;(z$ as Float).neg = !(z$ as Float).neg
					await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).usub(y, x) : Float.prototype.usub.call(z, y, x))
				}
			}
			if ((((z$ as Float).form == 0) && ((z$ as Float).mode == 4)) && ((z$ as Float).acc == 0)) {
				;(z$ as Float).neg = true
			}
			return z
		}

		if ((($.pointerValue<Float>(x).form == 2) && ($.pointerValue<Float>(y).form == 2)) && ($.pointerValue<Float>(x).neg == $.pointerValue<Float>(y).neg)) {
			// +Inf - +Inf
			// -Inf - -Inf
			// value of z is undefined but make sure it's valid
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = false
			$.panic($.interfaceValue(new ErrNaN({msg: "subtraction of infinities with equal signs"}, true), "big.ErrNaN", "big.ErrNaN"))
		}

		if (($.pointerValue<Float>(x).form == 0) && ($.pointerValue<Float>(y).form == 0)) {
			// ±0 - ±0
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = $.pointerValue<Float>(x).neg && !$.pointerValue<Float>(y).neg
			return z
		}

		if (($.pointerValue<Float>(x).form == 2) || ($.pointerValue<Float>(y).form == 0)) {
			// ±Inf - y
			// x - ±0
			return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Set(x) : Float.prototype.Set.call(z, x))
		}

		// ±0 - y
		// x - ±Inf
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Neg(y) : Float.prototype.Neg.call(z, y))
	}

	public async Text(format: number, prec: number): globalThis.Promise<string> {
		const x: Float | $.VarRef<Float> | null = this;
		let cap = 10
		if (prec > 0) {
			cap = cap + (prec)
		}
		return $.bytesToString(await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Append($.makeSlice<number>(0, cap, "byte"), format, prec) : Float.prototype.Append.call(x, $.makeSlice<number>(0, cap, "byte"), format, prec)))
	}

	public async Uint64(): globalThis.Promise<[bigint, Accuracy]> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if (false) {
			await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate() : Float.prototype.validate.call(x))
		}

		switch ((x$ as Float).form) {
			case 1:
			{
				if ((x$ as Float).neg) {
					return [0n, 1]
				}
				// 0 < x < +Inf
				if ((x$ as Float).exp <= 0) {
					// 0 < x < 1
					return [0n, -1]
				}
				// 1 <= x < Inf
				if ((x$ as Float).exp <= 64) {
					// u = trunc(x) fits into a uint64
					let u = $.uint64Shr(msb64(((x$ as Float).mant as __goscript_nat.nat)), (((64 - $.uint((x$ as Float).exp, 32)) >>> 0)))
					if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)) <= 64) {
						return [u, 0]
					}
					return [u, -1]
				}
				// x too large
				return [18446744073709551615n, -1]
				break
			}
			case 0:
			{
				return [0n, 0]
				break
			}
			case 2:
			{
				if ((x$ as Float).neg) {
					return [0n, 1]
				}
				return [18446744073709551615n, -1]
				break
			}
		}

		$.panic("unreachable")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async UnmarshalText(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		const z: Float | $.VarRef<Float> | null = this;

		let [, , err] = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Parse($.bytesToString(text), 0) : Float.prototype.Parse.call(z, $.bytesToString(text), 0))
		if (err != null) {
			err = fmt2.Errorf("math/big: cannot unmarshal %q into a *big.Float (%v)", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), (err as any))
		}
		return err
	}

	public async fmtB(buf: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if ((x$ as Float).form == 0) {
			return $.append(buf, $.uint(48, 8), $.byteSliceHint)
		}

		if (false && ((x$ as Float).form != 1)) {
			$.panic("non-finite float")
		}

		let m: __goscript_nat.nat = ((x$ as Float).mant as __goscript_nat.nat)
		{
			let w = $.uint(globalThis.Math.imul($.uint($.sliceLen(((x$ as Float).mant as __goscript_nat.nat)), 32), 64) >>> 0, 32)
			switch ((true as boolean)) {
				case w < (x$ as Float).prec:
				{
					m = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), $.uint($.uint((((x$ as Float).prec - w) >>> 0), 32), 64)) as __goscript_nat.nat)
					break
				}
				case w > (x$ as Float).prec:
				{
					m = (__goscript_nat.nat_rsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), $.uint($.uint(((w - (x$ as Float).prec) >>> 0), 32), 64)) as __goscript_nat.nat)
					break
				}
			}
		}

		buf = $.appendSlice(buf, await __goscript_natconv.nat_utoa(m, 10), $.byteSliceHint)
		buf = $.append(buf, $.uint(112, 8), $.byteSliceHint)
		let e = $.int64Sub($.int64((x$ as Float).exp), $.int64((x$ as Float).prec))
		if (e >= 0n) {
			buf = $.append(buf, $.uint(43, 8), $.byteSliceHint)
		}
		return strconv.AppendInt(buf, e, 10)
	}

	public async fmtP(buf: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if ((x$ as Float).form == 0) {
			return $.append(buf, $.uint(48, 8), $.byteSliceHint)
		}

		if (false && ((x$ as Float).form != 1)) {
			$.panic("non-finite float")
		}
		// bits > z.prec: mantissa too large => round
		// rounding bit position; r >= 0
		// rounding bit; be safe and ensure it's a single bit

		let m: __goscript_nat.nat = ((x$ as Float).mant as __goscript_nat.nat)
		let i = 0
		while ((i < $.sliceLen((m as __goscript_nat.nat))) && ($.arrayIndex(m!, i) == 0)) {
			i++
		}
		m = ($.goSlice(m, i, undefined) as __goscript_nat.nat)
		// cut off extra words
		buf = $.appendSlice(buf, $.stringToBytes("0x."), $.byteSliceHint)
		buf = $.appendSlice(buf, bytes.TrimRight(await __goscript_natconv.nat_utoa(m, 16), "0"), $.byteSliceHint)
		buf = $.append(buf, $.uint(112, 8), $.byteSliceHint)
		if ((x$ as Float).exp >= 0) {
			buf = $.append(buf, $.uint(43, 8), $.byteSliceHint)
		}
		return strconv.AppendInt(buf, $.int64((x$ as Float).exp), 10)
	}

	public async fmtX(buf: $.Slice<number>, prec: number): globalThis.Promise<$.Slice<number>> {
		let x: Float | $.VarRef<Float> | null = this;
		if ($.pointerValue<Float>(x).form == 0) {
			buf = $.appendSlice(buf, $.stringToBytes("0x0"), $.byteSliceHint)
			if (prec > 0) {
				buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
				for (let i = 0; i < prec; i++) {
					buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
				}
			}
			buf = $.appendSlice(buf, $.stringToBytes("p+00"), $.byteSliceHint)
			return buf
		}

		if (false && ($.pointerValue<Float>(x).form != 1)) {
			$.panic("non-finite float")
		}

		let n: number = 0
		if (prec < 0) {
			n = $.uint($.uint64Add(1n, ($.uint($.uint64Mul(($.uint($.uint64Div(($.uint($.uint64Add(($.uint($.uint64Sub((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).MinPrec() : Float.prototype.MinPrec.call(x)), 1n), 64)), 3n), 64)), 4n), 64)), 4n), 64))), 64)
		} else {
			n = $.uint($.uint64Add(1n, ($.uint($.uint64Mul(4n, $.uint(prec, 64)), 64))), 64)
		}

		x = await Float.prototype.Set.call(Float.prototype.SetMode.call(await Float.prototype.SetPrec.call(new Float(), n), $.pointerValue<Float>(x).mode), x)

		let m: __goscript_nat.nat = ($.pointerValue<Float>(x).mant as __goscript_nat.nat)
		{
			let w = $.uint($.uint64Mul($.uint($.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat)), 64), 64n), 64)
			switch ((true as boolean)) {
				case w < n:
				{
					m = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), $.uint($.uint64Sub(n, w), 64)) as __goscript_nat.nat)
					break
				}
				case w > n:
				{
					m = (__goscript_nat.nat_rsh((null as __goscript_nat.nat), (m as __goscript_nat.nat), $.uint($.uint64Sub(w, n), 64)) as __goscript_nat.nat)
					break
				}
			}
		}
		let exp64 = $.int64Sub($.int64($.pointerValue<Float>(x).exp), 1n)

		let hm: $.Slice<number> = await __goscript_natconv.nat_utoa(m, 16)
		if (false && ($.arrayIndex(hm!, 0) != 49)) {
			$.panic($.concatString("incorrect mantissa: ", $.bytesToString(hm)))
		}
		buf = $.appendSlice(buf, $.stringToBytes("0x1"), $.byteSliceHint)
		if ($.sliceLen(hm) > 1) {
			buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
			buf = $.appendSlice(buf, $.goSlice(hm, 1, undefined), $.byteSliceHint)
		}

		buf = $.append(buf, $.uint(112, 8), $.byteSliceHint)
		if (exp64 >= 0n) {
			buf = $.append(buf, $.uint(43, 8), $.byteSliceHint)
		} else {
			exp64 = -exp64
			buf = $.append(buf, $.uint(45, 8), $.byteSliceHint)
		}

		if (exp64 < 10n) {
			buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
		}
		return strconv.AppendInt(buf, exp64, 10)
	}

	public ord(): number {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		let m: number = 0
		switch ((x$ as Float).form) {
			case 1:
			{
				m = 1
				break
			}
			case 0:
			{
				return 0
				break
			}
			case 2:
			{
				m = 2
				break
			}
		}
		if ((x$ as Float).neg) {
			m = -m
		}
		return m
	}

	public async pow5(n: bigint): globalThis.Promise<Float | $.VarRef<Float> | null> {
		const z: Float | $.VarRef<Float> | null = this;
		const m: bigint = 27n
		if (n <= 27n) {
			return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetUint64($.arrayIndex(__goscript_floatconv.pow5tab, globalThis.Number(n))) : Float.prototype.SetUint64.call(z, $.arrayIndex(__goscript_floatconv.pow5tab, globalThis.Number(n))))
		}

		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).SetUint64($.arrayIndex(__goscript_floatconv.pow5tab, globalThis.Number(27n))) : Float.prototype.SetUint64.call(z, $.arrayIndex(__goscript_floatconv.pow5tab, globalThis.Number(27n))))
		n = $.uint64Sub(n, 27n)

		let f: Float | $.VarRef<Float> | null = await Float.prototype.SetUint64.call(await Float.prototype.SetPrec.call(new Float(), $.uint($.uint64Add((z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Prec() : Float.prototype.Prec.call(z)), 64n), 64)), 5n)

		while (n > 0n) {
			if (($.uint64And(n, 1n)) != 0n) {
				await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Mul(z, f) : Float.prototype.Mul.call(z, z, f))
			}
			await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Float).Mul(f, f) : Float.prototype.Mul.call(f, f, f))
			n = $.uint64Shr(n, 1n)
		}

		return z
	}

	public async round(sbit: number): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).validate() : Float.prototype.validate.call(z))
		}

		;(z$ as Float).acc = 0
		if ((z$ as Float).form != 1) {
			// ±0 or ±Inf => nothing left to do
			return
		}
		// z.form == finite && len(z.mant) > 0
		// m > 0 implies z.prec > 0 (checked by validate)

		let m = $.uint($.sliceLen(((z$ as Float).mant as __goscript_nat.nat)), 32)
		let __goscriptShadow1 = $.uint(globalThis.Math.imul(m, 64) >>> 0, 32)
		if (__goscriptShadow1 <= (z$ as Float).prec) {
			// mantissa fits => nothing to do
			return
		}
		// bits > z.prec

		// Rounding is based on two bits: the rounding bit (rbit) and the
		// sticky bit (sbit). The rbit is the bit immediately before the
		// z.prec leading mantissa bits (the "0.5"). The sbit is set if any
		// of the bits before the rbit are set (the "0.25", "0.125", etc.):
		//
		//   rbit  sbit  => "fractional part"
		//
		//   0     0        == 0
		//   0     1        >  0  , < 0.5
		//   1     0        == 0.5
		//   1     1        >  0.5, < 1.0

		// bits > z.prec: mantissa too large => round
		let r = $.uint($.uint((((((__goscriptShadow1 - (z$ as Float).prec) >>> 0)) - 1) >>> 0), 32), 64)
		let rbit = $.uint($.uint64And(__goscript_nat.nat_bit((z$ as Float).mant, r), 1n), 64)
		// The sticky bit is only needed for rounding ToNearestEven
		// or when the rounding bit is zero. Avoid computation otherwise.
		if ((sbit == 0) && ((rbit == 0) || ((z$ as Float).mode == 0))) {
			sbit = __goscript_nat.nat_sticky((z$ as Float).mant, r)
		}
		sbit = $.uint($.uint64And(sbit, 1), 64)

		// cut off extra words
		let n = $.uint(globalThis.Math.trunc(((((z$ as Float).prec + (((64 - 1) >>> 0))) >>> 0)) / 64), 32)
		if (m > n) {
			$.copy(((z$ as Float).mant as __goscript_nat.nat), ($.goSlice((z$ as Float).mant, ((m - n) >>> 0), undefined) as __goscript_nat.nat));
			;(z$ as Float).mant = ($.goSlice((z$ as Float).mant, undefined, n) as __goscript_nat.nat)
		}

		// determine number of trailing zero bits (ntz) and compute lsb mask of mantissa's least-significant word
		let ntz = $.uint((((globalThis.Math.imul(n, 64) >>> 0) - (z$ as Float).prec) >>> 0), 32)
		let lsb = $.uint($.uint64Shl(1n, ntz), 64)

		// round if result is inexact
		if (($.uint($.uint64Or(rbit, sbit), 64)) != 0) {
			// Make rounding decision: The result mantissa is truncated ("rounded down")
			// by default. Decide if we need to increment, or "round up", the (unsigned)
			// mantissa.
			let inc = false
			switch ((z$ as Float).mode) {
				case 4:
				{
					inc = (z$ as Float).neg
					break
				}
				case 2:
				{
					break
				}
				case 0:
				{
					inc = (rbit != 0) && ((sbit != 0) || (($.uint($.uint64And($.arrayIndex((z$ as Float).mant!, 0), lsb), 64)) != 0))
					break
				}
				case 1:
				{
					inc = rbit != 0
					break
				}
				case 3:
				{
					inc = true
					break
				}
				case 5:
				{
					inc = !(z$ as Float).neg
					break
				}
				default:
				{
					$.panic("unreachable")
					break
				}
			}

			// A positive result (!z.neg) is Above the exact result if we increment,
			// and it's Below if we truncate (Exact results require no rounding).
			// For a negative result (z.neg) it is exactly the opposite.
			;(z$ as Float).acc = makeAcc(inc != (z$ as Float).neg)

			if (inc) {
				// add 1 to mantissa
				if (__goscript_arith.addVW((z$ as Float).mant, (z$ as Float).mant, lsb) != 0) {
					// mantissa overflow => adjust exponent
					if ((z$ as Float).exp >= 2147483647) {
						// exponent overflow
						;(z$ as Float).form = 2
						return
					}
					;(z$ as Float).exp = (((z$ as Float).exp + 1) | 0)
					// adjust mantissa: divide by 2 to compensate for exponent adjustment
					__goscript_arith_decl_pure.rshVU((z$ as Float).mant, (z$ as Float).mant, 1)
					// set msb == carry == 1 from the mantissa overflow above
					const msb: number = 9223372036854775808
					$.sliceElems((z$ as Float).mant!)[$.sliceSlot((z$ as Float).mant!, ((n - 1) >>> 0))] = $.uint($.uint64Or($.sliceElems((z$ as Float).mant!)[$.sliceSlot((z$ as Float).mant!, ((n - 1) >>> 0))], $.uint("9223372036854775808", 64)), 64)
				}
			}
		}

		// zero out trailing bits in least-significant word
		$.sliceElems((z$ as Float).mant!)[$.sliceSlot((z$ as Float).mant!, 0)] = $.uint($.uint64AndNot($.sliceElems((z$ as Float).mant!)[$.sliceSlot((z$ as Float).mant!, 0)], $.uint($.uint64Sub(lsb, 1n), 64)), 64)

		if (false) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).validate() : Float.prototype.validate.call(z))
		}
	}

	public async scan(r: io.ByteScanner | null, base: number): globalThis.Promise<[Float | $.VarRef<Float> | null, number, $.GoError]> {
		let z: Float | $.VarRef<Float> | null = this;
		let f: Float | $.VarRef<Float> | null = null! as Float | $.VarRef<Float> | null
		let b: number = 0
		let err: $.GoError = null! as $.GoError
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		let prec = (z$ as Float).prec
		if (prec == 0) {
			prec = 64
		}

		;(z$ as Float).form = 0

		let __goscriptTuple2: any = await __goscript_intconv.scanSign(r);
		;(z$ as Float).neg = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [f, b, err]
		}

		let fcount: number = 0
		let __goscriptTuple3: any = await __goscript_natconv.nat_scan((z$ as Float).mant, r, base, true);
		;(z$ as Float).mant = (__goscriptTuple3[0] as __goscript_nat.nat)
		b = __goscriptTuple3[1]
		fcount = __goscriptTuple3[2]
		err = __goscriptTuple3[3]
		if (err != null) {
			return [f, b, err]
		}

		let exp: bigint = 0n
		let ebase: number = 0
		let __goscriptTuple4: any = await __goscript_ratconv.scanExponent(r, true, base == 0)
		exp = __goscriptTuple4[0]
		ebase = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		if (err != null) {
			return [f, b, err]
		}

		if ($.sliceLen(((z$ as Float).mant as __goscript_nat.nat)) == 0) {
			;(z$ as Float).prec = prec;
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0
			f = z
			return [f, b, err]
		}

		// An ErrNaN panic is raised by a [Float] operation that would lead to
		// a NaN under IEEE 754 rules. An ErrNaN implements the error interface.

		let exp2 = $.int64Sub(($.int64Mul($.int64($.sliceLen(((z$ as Float).mant as __goscript_nat.nat))), 64n)), fnorm(((z$ as Float).mant as __goscript_nat.nat)))
		let exp5 = 0n

		if (fcount < 0) {

			let d = $.int64(fcount)
			switch (b) {
				case 10:
				{
					exp5 = d
				}
				case 2:
				{
					exp2 = $.int64Add(exp2, d)
					break
				}
				case 8:
				{
					exp2 = $.int64Add(exp2, $.int64Mul(d, 3n))
					break
				}
				case 16:
				{
					exp2 = $.int64Add(exp2, $.int64Mul(d, 4n))
					break
				}
				default:
				{
					$.panic("unexpected mantissa base")
					break
				}
			}
		}

		switch (ebase) {
			case 10:
			{
				exp5 = $.int64Add(exp5, exp)
			}
			case 2:
			{
				exp2 = $.int64Add(exp2, exp)
				break
			}
			default:
			{
				$.panic("unexpected exponent base")
				break
			}
		}

		// A form value describes the internal representation.

		if ((-2147483648n <= exp2) && (exp2 <= 2147483647n)) {
			;(z$ as Float).prec = prec;
			;(z$ as Float).form = 1;
			;(z$ as Float).exp = $.int(exp2, 32)
			f = z
		} else {
			err = fmt2.Errorf("exponent overflow")
			return [f, b, err]
		}

		if (exp5 == 0n) {

			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(0) : Float.prototype.round.call(z, 0))
			return [f, b, err]
		}
		// == IEEE 754-2008 roundTiesToEven
		// == IEEE 754-2008 roundTiesToAway
		// == IEEE 754-2008 roundTowardZero
		let p: Float | $.VarRef<Float> | null = await Float.prototype.SetPrec.call(new Float(), $.uint($.uint64Add((z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Prec() : Float.prototype.Prec.call(z)), 64n), 64))
		if (exp5 < 0n) {
			await Float.prototype.Quo.call(z, z, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Float).pow5($.uint64(-exp5)) : Float.prototype.pow5.call(p, $.uint64(-exp5))))
		} else {
			await Float.prototype.Mul.call(z, z, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Float).pow5($.uint64(exp5)) : Float.prototype.pow5.call(p, $.uint64(exp5))))
		}

		return [f, b, err]
	}

	public async setBits64(neg: boolean, x: bigint): globalThis.Promise<Float | $.VarRef<Float> | null> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if ((z$ as Float).prec == 0) {
			;(z$ as Float).prec = 64
		}
		;(z$ as Float).acc = 0;
		;(z$ as Float).neg = neg
		if (x == 0n) {
			;(z$ as Float).form = 0
			return z
		}
		// x != 0
		;(z$ as Float).form = 1
		let s = bits2.LeadingZeros64(x);
		;(z$ as Float).mant = (__goscript_nat.nat_setUint64((z$ as Float).mant, $.uint64Shl(x, $.uint(s, 64))) as __goscript_nat.nat);
		;(z$ as Float).exp = $.int(64 - s, 32)
		if ((z$ as Float).prec < 64) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(0) : Float.prototype.round.call(z, 0))
		}
		return z
	}

	public async setExpAndRound(exp: bigint, sbit: number): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (exp < -2147483648n) {
			// underflow
			;(z$ as Float).acc = makeAcc((z$ as Float).neg);
			;(z$ as Float).form = 0
			return
		}

		if (exp > 2147483647n) {
			// overflow
			;(z$ as Float).acc = makeAcc(!(z$ as Float).neg);
			;(z$ as Float).form = 2
			return
		}

		;(z$ as Float).form = 1;
		;(z$ as Float).exp = $.int(exp, 32)
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).round(sbit) : Float.prototype.round.call(z, sbit))
	}

	public async sqrtInverse(x: Float | $.VarRef<Float> | null): globalThis.Promise<void> {
		const z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)

		let u: Float | $.VarRef<Float> | null = __goscript_sqrt.newFloat((z$ as Float).prec)
		let u$: Float = u == null ? $.pointerTarget<Float>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<Float>(u)
		let v: Float | $.VarRef<Float> | null = __goscript_sqrt.newFloat((z$ as Float).prec)
		let __goscriptShadow2 = __goscript_sqrt.three
		let __goscriptShadow3: Float | $.VarRef<Float> | null = await __goscriptShadow2()
		let ng: ((t: Float | $.VarRef<Float> | null) => Float | $.VarRef<Float> | null | globalThis.Promise<Float | $.VarRef<Float> | null>) | null = $.functionValue(async (t: Float | $.VarRef<Float> | null): globalThis.Promise<Float | $.VarRef<Float> | null> => {
			;(u$ as Float).prec = $.pointerValue<Float>(t).prec
			$.pointerValue<Float>(v).prec = $.pointerValue<Float>(t).prec
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Float).Mul(t, t) : Float.prototype.Mul.call(u, t, t))
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Float).Mul(x, u) : Float.prototype.Mul.call(u, x, u))
			await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Float).Sub(__goscriptShadow3, u) : Float.prototype.Sub.call(v, __goscriptShadow3, u))
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Float).Mul(t, v) : Float.prototype.Mul.call(u, t, v));
			;(u$ as Float).exp = (((u$ as Float).exp - 1) | 0)
			return await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Float).Set(u) : Float.prototype.Set.call(t, u))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("big.Float")], results: [/* @__PURE__ */ $.pointerType("big.Float")] } as $.FunctionTypeInfo))

		let [xf, ] = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Float64() : Float.prototype.Float64.call(x))
		let sqi: Float | $.VarRef<Float> | null = __goscript_sqrt.newFloat((z$ as Float).prec)
		await (sqi !== null && (sqi as any).__isVarRef !== true && (sqi as any).__goValue === undefined ? ((sqi as any) as Float).SetFloat64(1 / math.Sqrt(xf)) : Float.prototype.SetFloat64.call(sqi, 1 / math.Sqrt(xf)))
		for (let prec = $.uint((((z$ as Float).prec + 32) >>> 0), 32); $.pointerValue<Float>(sqi).prec < prec; ) {
			$.pointerValue<Float>(sqi).prec = globalThis.Math.imul($.pointerValue<Float>(sqi).prec, 2) >>> 0
			sqi = ((__goscriptAwait = ng!(sqi), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Float | $.VarRef<Float> | null)
		}

		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).Mul(x, sqi) : Float.prototype.Mul.call(z, x, sqi))
	}

	public async uadd(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		// Note: This implementation requires 2 shifts most of the
		// time. It is also inefficient if exponents or precisions
		// differ by wide margins. The following article describes
		// an efficient (but much more complicated) implementation
		// compatible with the internal representation used here:
		//
		// Vincent Lefèvre: "The Generic Multiple-Precision Floating-
		// Point Addition With Exact Rounding (as in the MPFR Library)"
		// http://www.vinc17.net/research/papers/rnc6.pdf

		if (false) {
			validateBinaryOperands(x, y)
		}

		// compute exponents ex, ey for mantissa with "binary point"
		// on the right (mantissa.0) - use int64 to avoid overflow
		let ex = $.int64Sub($.int64($.pointerValue<Float>(x).exp), ($.int64Mul($.int64($.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat))), 64n)))
		let ey = $.int64Sub($.int64($.pointerValue<Float>(y).exp), ($.int64Mul($.int64($.sliceLen(($.pointerValue<Float>(y).mant as __goscript_nat.nat))), 64n)))

		let al = __goscript_nat.alias(((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(x).mant as __goscript_nat.nat)) || __goscript_nat.alias(((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat))

		// TODO(gri) having a combined add-and-shift primitive
		//           could make this code significantly faster
		switch ((true as boolean)) {
			case ex < ey:
			{
				if (al) {
					let t: __goscript_nat.nat = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat), $.uint($.int64Sub(ey, ex), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_add((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), (t as __goscript_nat.nat)) as __goscript_nat.nat)
				} else {
					;(z$ as Float).mant = (__goscript_nat.nat_lsh((z$ as Float).mant, ($.pointerValue<Float>(y).mant as __goscript_nat.nat), $.uint($.int64Sub(ey, ex), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_add((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), ((z$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				}
				break
			}
			default:
			{
				;(z$ as Float).mant = (__goscript_nat.nat_add((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				break
			}
			case ex > ey:
			{
				if (al) {
					let t: __goscript_nat.nat = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), ($.pointerValue<Float>(x).mant as __goscript_nat.nat), $.uint($.int64Sub(ex, ey), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_add((z$ as Float).mant, (t as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				} else {
					;(z$ as Float).mant = (__goscript_nat.nat_lsh((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), $.uint($.int64Sub(ex, ey), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_add((z$ as Float).mant, ((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				}
				ex = ey
				break
			}
		}
		// len(z.mant) > 0

		await Float.prototype.setExpAndRound.call(z, $.int64Sub(($.int64Add(ex, ($.int64Mul($.int64($.sliceLen(((z$ as Float).mant as __goscript_nat.nat))), 64n)))), fnorm(((z$ as Float).mant as __goscript_nat.nat))), 0)
	}

	public ucmp(y: Float | $.VarRef<Float> | null): number {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		const y$: Float = y == null ? $.pointerTarget<Float>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Float>(y)
		if (false) {
			validateBinaryOperands(x, y)
		}

		switch ((true as boolean)) {
			case (x$ as Float).exp < (y$ as Float).exp:
			{
				return -1
				break
			}
			case (x$ as Float).exp > (y$ as Float).exp:
			{
				return 1
				break
			}
		}
		// x.exp == y.exp

		// compare mantissas
		let i = $.sliceLen(((x$ as Float).mant as __goscript_nat.nat))
		let j = $.sliceLen(((y$ as Float).mant as __goscript_nat.nat))
		while ((i > 0) || (j > 0)) {
			let xm: __goscript_arith.Word = 0
			let ym: __goscript_arith.Word = 0
			if (i > 0) {
				i--
				xm = $.arrayIndex((x$ as Float).mant!, i)
			}
			if (j > 0) {
				j--
				ym = $.arrayIndex((y$ as Float).mant!, j)
			}
			switch ((true as boolean)) {
				case xm < ym:
				{
					return -1
					break
				}
				case xm > ym:
				{
					return 1
					break
				}
			}
		}

		return 0
	}

	public async umul(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			validateBinaryOperands(x, y)
		}

		// Note: This is doing too much work if the precision
		// of z is less than the sum of the precisions of x
		// and y which is often the case (e.g., if all floats
		// have the same precision).
		// TODO(gri) Optimize this for the common case.

		let e = $.int64Add($.int64($.pointerValue<Float>(x).exp), $.int64($.pointerValue<Float>(y).exp))
		if ($.pointerEqual(x, y)) {
			;(z$ as Float).mant = (await __goscript_natmul.nat_sqr((z$ as Float).mant, null, ($.pointerValue<Float>(x).mant as __goscript_nat.nat)) as __goscript_nat.nat)
		} else {
			;(z$ as Float).mant = (await __goscript_natmul.nat_mul((z$ as Float).mant, null, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
		}
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setExpAndRound($.int64Sub(e, fnorm(((z$ as Float).mant as __goscript_nat.nat))), 0) : Float.prototype.setExpAndRound.call(z, $.int64Sub(e, fnorm(((z$ as Float).mant as __goscript_nat.nat))), 0))
	}

	public async uquo(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		if (false) {
			validateBinaryOperands(x, y)
		}

		// mantissa length in words for desired result precision + 1
		// (at least one extra bit so we get the rounding bit after
		// the division)
		let n = $.int(globalThis.Math.trunc((z$ as Float).prec / 64)) + 1

		// compute adjusted x.mant such that we get enough result precision
		let xadj: __goscript_nat.nat = ($.pointerValue<Float>(x).mant as __goscript_nat.nat)
		{
			let d = (n - $.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat))) + $.sliceLen(($.pointerValue<Float>(y).mant as __goscript_nat.nat))
			if (d > 0) {
				// d extra words needed => add d "0 digits" to x
				xadj = ($.makeSlice<__goscript_arith.Word>($.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat)) + d, undefined, "number") as __goscript_nat.nat)
				$.copy(($.goSlice(xadj, d, undefined) as __goscript_nat.nat), ($.pointerValue<Float>(x).mant as __goscript_nat.nat))
			}
		}
		// TODO(gri): If we have too many digits (d < 0), we should be able
		// to shorten x for faster division. But we must be extra careful
		// with rounding in that case.

		// Compute d before division since there may be aliasing of x.mant
		// (via xadj) or y.mant with z.mant.
		let d = $.sliceLen((xadj as __goscript_nat.nat)) - $.sliceLen(($.pointerValue<Float>(y).mant as __goscript_nat.nat))

		// divide
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })
		let r: __goscript_nat.nat = null! as __goscript_nat.nat
		let __goscriptTuple5: any = await __goscript_natdiv.nat_div((z$ as Float).mant, stk, (null as __goscript_nat.nat), (xadj as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat));
		;(z$ as Float).mant = (__goscriptTuple5[0] as __goscript_nat.nat)
		r = (__goscriptTuple5[1] as __goscript_nat.nat)
		let e = $.int64Sub(($.int64Sub($.int64($.pointerValue<Float>(x).exp), $.int64($.pointerValue<Float>(y).exp))), ($.int64Mul($.int64(d - $.sliceLen(((z$ as Float).mant as __goscript_nat.nat))), 64n)))

		// The result is long enough to include (at least) the rounding bit.
		// If there's a non-zero remainder, the corresponding fractional part
		// (if it were computed), would have a non-zero sticky bit (if it were
		// zero, it couldn't have a non-zero remainder).
		let sbit: number = 0
		if ($.sliceLen((r as __goscript_nat.nat)) > 0) {
			sbit = 1
		}

		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Float).setExpAndRound($.int64Sub(e, fnorm(((z$ as Float).mant as __goscript_nat.nat))), sbit) : Float.prototype.setExpAndRound.call(z, $.int64Sub(e, fnorm(((z$ as Float).mant as __goscript_nat.nat))), sbit))
	}

	public async usub(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): globalThis.Promise<void> {
		let z: Float | $.VarRef<Float> | null = this;
		const z$: Float = z == null ? $.pointerTarget<Float>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Float>(z)
		// This code is symmetric to uadd.
		// We have not factored the common code out because
		// eventually uadd (and usub) should be optimized
		// by special-casing, and the code will diverge.

		if (false) {
			validateBinaryOperands(x, y)
		}

		let ex = $.int64Sub($.int64($.pointerValue<Float>(x).exp), ($.int64Mul($.int64($.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat))), 64n)))
		let ey = $.int64Sub($.int64($.pointerValue<Float>(y).exp), ($.int64Mul($.int64($.sliceLen(($.pointerValue<Float>(y).mant as __goscript_nat.nat))), 64n)))

		let al = __goscript_nat.alias(((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(x).mant as __goscript_nat.nat)) || __goscript_nat.alias(((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat))

		switch ((true as boolean)) {
			case ex < ey:
			{
				if (al) {
					let t: __goscript_nat.nat = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat), $.uint($.int64Sub(ey, ex), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_sub(t, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), (t as __goscript_nat.nat)) as __goscript_nat.nat)
				} else {
					;(z$ as Float).mant = (__goscript_nat.nat_lsh((z$ as Float).mant, ($.pointerValue<Float>(y).mant as __goscript_nat.nat), $.uint($.int64Sub(ey, ex), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_sub((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), ((z$ as Float).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				}
				break
			}
			default:
			{
				;(z$ as Float).mant = (__goscript_nat.nat_sub((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				break
			}
			case ex > ey:
			{
				if (al) {
					let t: __goscript_nat.nat = (__goscript_nat.nat_lsh((null as __goscript_nat.nat), ($.pointerValue<Float>(x).mant as __goscript_nat.nat), $.uint($.int64Sub(ex, ey), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_sub(t, (t as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				} else {
					;(z$ as Float).mant = (__goscript_nat.nat_lsh((z$ as Float).mant, ($.pointerValue<Float>(x).mant as __goscript_nat.nat), $.uint($.int64Sub(ex, ey), 64)) as __goscript_nat.nat);
					;(z$ as Float).mant = (__goscript_nat.nat_sub((z$ as Float).mant, ((z$ as Float).mant as __goscript_nat.nat), ($.pointerValue<Float>(y).mant as __goscript_nat.nat)) as __goscript_nat.nat)
				}
				ex = ey
				break
			}
		}

		// operands may have canceled each other out
		if ($.sliceLen(((z$ as Float).mant as __goscript_nat.nat)) == 0) {
			;(z$ as Float).acc = 0;
			;(z$ as Float).form = 0;
			;(z$ as Float).neg = false
			return
		}
		// len(z.mant) > 0

		await Float.prototype.setExpAndRound.call(z, $.int64Sub(($.int64Add(ex, ($.int64Mul($.int64($.sliceLen(((z$ as Float).mant as __goscript_nat.nat))), 64n)))), fnorm(((z$ as Float).mant as __goscript_nat.nat))), 0)
	}

	public async validate(): globalThis.Promise<void> {
		const x: Float | $.VarRef<Float> | null = this;
		if (!false) {
			// avoid performance bugs
			$.panic("validate called but debugFloat is not set")
		}
		{
			let msg = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).validate0() : Float.prototype.validate0.call(x))
			if (!$.stringEqual(msg, "")) {
				$.panic(msg)
			}
		}
	}

	public async validate0(): globalThis.Promise<string> {
		const x: Float | $.VarRef<Float> | null = this;
		const x$: Float = x == null ? $.pointerTarget<Float>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Float>(x)
		if ((x$ as Float).form != 1) {
			return ""
		}
		let m = $.sliceLen(((x$ as Float).mant as __goscript_nat.nat))
		if (m == 0) {
			return "nonzero finite number with empty mantissa"
		}
		const msb: number = 9223372036854775808
		if (($.uint($.uint64And($.arrayIndex((x$ as Float).mant!, m - 1), 9223372036854775808n), 64)) == 0) {
			return fmt2.Sprintf("msb not set in last word %#x of %s", $.namedValueInterfaceValue<any>($.arrayIndex((x$ as Float).mant!, m - 1), "big.Word", {}, /* @__PURE__ */ $.basicType("uint", "big.Word")), await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Float).Text(112, 0) : Float.prototype.Text.call(x, 112, 0)))
		}
		if ((x$ as Float).prec == 0) {
			return "zero precision finite number"
		}
		return ""
	}

	static __typeInfo = $.registerStructType(
		"big.Float",
		() => new Float(),
		() => [$.methodSignature("Abs", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Acc", [], [/* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Add", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Append", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fmt", /* @__PURE__ */ $.basicType("uint8")], ["prec", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Cmp", [["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Copy", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Format", [["s", "fmt.State"], ["format", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("GobDecode", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("GobEncode", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Int", [["z", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("IsInf", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MantExp", [["mant", /* @__PURE__ */ $.pointerType("big.Float")]], [["exp", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("MarshalText", [], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MinPrec", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Mode", [], [/* @__PURE__ */ $.basicType("uint8", "big.RoundingMode")], true), $.methodSignature("Mul", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Neg", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Parse", [["s", /* @__PURE__ */ $.basicType("string")], ["base", /* @__PURE__ */ $.basicType("int")]], [["f", /* @__PURE__ */ $.pointerType("big.Float")], ["b", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Prec", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Quo", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Rat", [["z", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Scan", [["s", "fmt.ScanState"], ["ch", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("Set", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetFloat64", [["x", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetInf", [["signbit", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetInt", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetInt64", [["x", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetMantExp", [["mant", /* @__PURE__ */ $.pointerType("big.Float")], ["exp", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetMode", [["mode", /* @__PURE__ */ $.basicType("uint8", "big.RoundingMode")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetPrec", [["prec", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetRat", [["x", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("SetString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("big.Float"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetUint64", [["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Sign", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Signbit", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Sqrt", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("Text", [["format", /* @__PURE__ */ $.basicType("uint8")], ["prec", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("fmtB", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("fmtP", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("fmtX", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["prec", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ord", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("pow5", [["n", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("round", [["sbit", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("scan", [["r", "io.ByteScanner"], ["base", /* @__PURE__ */ $.basicType("int")]], [["f", /* @__PURE__ */ $.pointerType("big.Float")], ["b", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("setBits64", [["neg", /* @__PURE__ */ $.basicType("bool")], ["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.pointerType("big.Float")], true), $.methodSignature("setExpAndRound", [["exp", /* @__PURE__ */ $.basicType("int64")], ["sbit", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("sqrtInverse", [["x", /* @__PURE__ */ $.pointerType("big.Float")]], [], true), $.methodSignature("uadd", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [], true), $.methodSignature("ucmp", [["y", /* @__PURE__ */ $.pointerType("big.Float")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("umul", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [], true), $.methodSignature("uquo", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [], true), $.methodSignature("usub", [["x", /* @__PURE__ */ $.pointerType("big.Float")], ["y", /* @__PURE__ */ $.pointerType("big.Float")]], [], true), $.methodSignature("validate", [], [], true), $.methodSignature("validate0", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Float,
		() => [/* @__PURE__ */ $.structField("prec", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("mode", /* @__PURE__ */ $.basicType("uint8", "big.RoundingMode"), [1], 4, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("acc", /* @__PURE__ */ $.basicType("int8", "big.Accuracy"), [2], 5, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("form", /* @__PURE__ */ $.basicType("uint8", "big.form"), [3], 6, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("neg", /* @__PURE__ */ $.basicType("bool"), [4], 7, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("mant", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat"), [5], 8, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("exp", /* @__PURE__ */ $.basicType("int32"), [6], 32, false, { pkgPath: "math/big" })]
	)
}

export class ErrNaN {
	public get msg(): string {
		return this._fields.msg
	}

	public set msg(value: string) {
		this._fields.msg = value
	}

	public _fields: {
		msg: string
	}

	constructor(init?: Partial<{msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			msg: init?.msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrNaN {
		return new ErrNaN(this, true)
	}

	public __goscriptAssign(source: ErrNaN): void {
		const target = this._fields
		const values = source._fields
		target.msg = values.msg
	}

	public Error(): string {
		const err = this;
		return err.msg
	}

	static __typeInfo = $.registerStructType(
		"big.ErrNaN",
		() => new ErrNaN(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		ErrNaN,
		() => [/* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "math/big" })]
	)
}

export const debugFloat: boolean = false

export const MaxExp: number = 2147483647

export const MinExp: number = -2147483648

export const MaxPrec: number = 4294967295

export const zero: form = 0

export const finite: form = 1

export const inf: form = 2

export const ToNearestEven: RoundingMode = 0

export const ToNearestAway: RoundingMode = 1

export const ToZero: RoundingMode = 2

export const AwayFromZero: RoundingMode = 3

export const ToNegativeInf: RoundingMode = 4

export const ToPositiveInf: RoundingMode = 5

export const Below: Accuracy = -1

export const Exact: Accuracy = 0

export const Above: Accuracy = 1

export async function NewFloat(x: number): globalThis.Promise<Float | $.VarRef<Float> | null> {
	if (math.IsNaN(x)) {
		$.panic($.interfaceValue(new ErrNaN({msg: "NewFloat(NaN)"}, true), "big.ErrNaN", "big.ErrNaN"))
	}
	return Float.prototype.SetFloat64.call(new Float(), x)
}

export function makeAcc(above: boolean): Accuracy {
	if (above) {
		return 1
	}
	return -1
}

export function fnorm(m: __goscript_nat.nat): bigint {
	if (false && (($.sliceLen((m as __goscript_nat.nat)) == 0) || ($.arrayIndex(m!, $.sliceLen((m as __goscript_nat.nat)) - 1) == 0))) {
		$.panic("msw of mantissa is 0")
	}
	let s = __goscript_arith.nlz($.arrayIndex(m!, $.sliceLen((m as __goscript_nat.nat)) - 1))
	if (s > 0) {
		let c = __goscript_arith_decl_pure.lshVU(m, m, s)
		if (false && (c != 0)) {
			$.panic("nlz or lshVU incorrect")
		}
	}
	return $.int64(s)
}

export function msb32(x: __goscript_nat.nat): number {
	let i = $.sliceLen((x as __goscript_nat.nat)) - 1
	if (i < 0) {
		return 0
	}
	if (false && (($.uint($.uint64And($.arrayIndex(x!, i), 9223372036854775808n), 64)) == 0)) {
		$.panic("x not normalized")
	}
	switch ((64 as number)) {
		case 32:
		{
			return $.uint($.arrayIndex(x!, i), 32)
			break
		}
		case 64:
		{
			return $.uint($.uint($.uint64Shr($.arrayIndex(x!, i), 32n), 64), 32)
			break
		}
	}
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}

export function msb64(x: __goscript_nat.nat): bigint {
	let i = $.sliceLen((x as __goscript_nat.nat)) - 1
	if (i < 0) {
		return 0n
	}
	if (false && (($.uint($.uint64And($.arrayIndex(x!, i), 9223372036854775808n), 64)) == 0)) {
		$.panic("x not normalized")
	}
	switch ((64 as number)) {
		case 32:
		{
			let v = $.uint64Mul($.uint64($.arrayIndex(x!, i)), (2 ** 32))
			if (i > 0) {
				v = $.uint64Or(v, $.uint64($.arrayIndex(x!, i - 1)))
			}
			return v
			break
		}
		case 64:
		{
			return $.uint64($.arrayIndex(x!, i))
			break
		}
	}
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}

export function validateBinaryOperands(x: Float | $.VarRef<Float> | null, y: Float | $.VarRef<Float> | null): void {
	if (!false) {
		// avoid performance bugs
		$.panic("validateBinaryOperands called but debugFloat is not set")
	}
	if ($.sliceLen(($.pointerValue<Float>(x).mant as __goscript_nat.nat)) == 0) {
		$.panic("empty mantissa for x")
	}
	if ($.sliceLen(($.pointerValue<Float>(y).mant as __goscript_nat.nat)) == 0) {
		$.panic("empty mantissa for y")
	}
}

var __goscriptAwait: any
