// Generated file based on decimal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_atof from "./atof.gs.ts"

import * as __goscript_atoi from "./atoi.gs.ts"
import "./atof.gs.ts"
import "./atoi.gs.ts"

$.registerTypePackagePath("internal/strconv", ["strconv.decimal", "strconv.leftCheat"])

export class decimal {
	public get d(): Uint8Array {
		return this._fields.d
	}

	public set d(value: Uint8Array) {
		this._fields.d = value
	}

	public get nd(): number {
		return this._fields.nd
	}

	public set nd(value: number) {
		this._fields.nd = value
	}

	public get dp(): number {
		return this._fields.dp
	}

	public set dp(value: number) {
		this._fields.dp = value
	}

	public get neg(): boolean {
		return this._fields.neg
	}

	public set neg(value: boolean) {
		this._fields.neg = value
	}

	public get trunc(): boolean {
		return this._fields.trunc
	}

	public set trunc(value: boolean) {
		this._fields.trunc = value
	}

	public _fields: {
		d: Uint8Array
		nd: number
		dp: number
		neg: boolean
		trunc: boolean
	}

	constructor(init?: Partial<{d?: Uint8Array, nd?: number, dp?: number, neg?: boolean, trunc?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			d: init?.d !== undefined ? $.cloneArrayValue(init.d, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 800)) : $.arrayValue(new Uint8Array(800)),
			nd: init?.nd ?? (0 as number),
			dp: init?.dp ?? (0 as number),
			neg: init?.neg ?? (false as boolean),
			trunc: init?.trunc ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decimal {
		return new decimal(this, true)
	}

	public __goscriptAssign(source: decimal): void {
		const target = this._fields
		const values = source._fields
		target.d = $.assignFieldValue(target.d, values.d, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 800))
		target.nd = values.nd
		target.dp = values.dp
		target.neg = values.neg
		target.trunc = values.trunc
	}

	public Assign(v: bigint): void {
		let a: decimal | $.VarRef<decimal> | null = this;
		const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
		let buf: Uint8Array = $.arrayValue(new Uint8Array(24))

		// Write reversed decimal in buf.
		let n = 0
		while (v > 0n) {
			let v1: bigint = $.uint64Div(v, 10n)
			v = $.uint64Sub(v, $.uint64Mul(10n, v1))
			buf[n] = $.uint($.uint64Add(v, 48n), 8)
			n++
			v = v1
		}

		// Reverse again to produce forward decimal in a.d.
		;(a$ as decimal).nd = 0
		for (n--; n >= 0; n--) {
			;(a$ as decimal).d[(a$ as decimal).nd] = $.arrayIndex(buf, n);
			;(a$ as decimal).nd++
		}
		;(a$ as decimal).dp = (a$ as decimal).nd
		trim(a)
	}

	public Round(nd: number): void {
		const a: decimal | $.VarRef<decimal> | null = this;
		if ((nd < 0) || (nd >= $.pointerValue<decimal>(a).nd)) {
			return
		}
		if (shouldRoundUp(a, nd)) {
			void (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as decimal).RoundUp(nd) : decimal.prototype.RoundUp.call(a, nd))
		} else {
			void (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as decimal).RoundDown(nd) : decimal.prototype.RoundDown.call(a, nd))
		}
	}

	public RoundDown(nd: number): void {
		let a: decimal | $.VarRef<decimal> | null = this;
		const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
		if ((nd < 0) || (nd >= (a$ as decimal).nd)) {
			return
		}
		;(a$ as decimal).nd = nd
		trim(a)
	}

	public RoundUp(nd: number): void {
		let a: decimal | $.VarRef<decimal> | null = this;
		const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
		if ((nd < 0) || (nd >= (a$ as decimal).nd)) {
			return
		}

		// round up
		for (let i = nd - 1; i >= 0; i--) {
			let c = $.arrayIndex((a$ as decimal).d, i)
			if (c < 57) {
				;(a$ as decimal).d[i]++;
				;(a$ as decimal).nd = i + 1
				return
			}
		}

		// Number is all 9s.
		// Change to single 1 with adjusted decimal point.
		;(a$ as decimal).d[0] = 49;
		;(a$ as decimal).nd = 1;
		;(a$ as decimal).dp++
	}

	public RoundedInteger(): bigint {
		const a: decimal | $.VarRef<decimal> | null = this;
		const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
		if ((a$ as decimal).dp > 20) {
			return 18446744073709551615n
		}
		let i: number = 0
		let n = 0n
		for (i = 0; (i < (a$ as decimal).dp) && (i < (a$ as decimal).nd); i++) {
			n = $.uint64Add(($.uint64Mul(n, 10n)), $.uint64($.uint((($.arrayIndex((a$ as decimal).d, i) - 48) & 0xff), 8)))
		}
		for (; i < (a$ as decimal).dp; i++) {
			n = $.uint64Mul(n, 10n)
		}
		if (shouldRoundUp(a, (a$ as decimal).dp)) {
			n++
		}
		return n
	}

	public Shift(k: number): void {
		const a: decimal | $.VarRef<decimal> | null = this;
		switch ((true as boolean)) {
			case $.pointerValue<decimal>(a).nd == 0:
			{
				break
			}
			case k > 0:
			{
				while (k > 60) {
					leftShift(a, 60)
					k = k - (60)
				}
				leftShift(a, $.uint(k, 64))
				break
			}
			case k < 0:
			{
				while (k < -60) {
					rightShift(a, 60)
					k = k + (60)
				}
				rightShift(a, $.uint(-k, 64))
				break
			}
		}
	}

	public String(): string {
		const a: decimal | $.VarRef<decimal> | null = this;
		const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
		let n = 10 + (a$ as decimal).nd
		if ((a$ as decimal).dp > 0) {
			n = n + ((a$ as decimal).dp)
		}
		if ((a$ as decimal).dp < 0) {
			n = n + (-(a$ as decimal).dp)
		}

		let buf: $.Slice<number> = $.makeSlice<number>(n, undefined, "byte")
		let w = 0
		switch ((true as boolean)) {
			case (a$ as decimal).nd == 0:
			{
				return "0"
				break
			}
			case (a$ as decimal).dp <= 0:
			{
				$.sliceElems(buf!)[$.sliceSlot(buf!, w)] = 48
				w++
				$.sliceElems(buf!)[$.sliceSlot(buf!, w)] = 46
				w++
				w = w + (digitZero($.goSlice(buf, w, w + -(a$ as decimal).dp)))
				w = w + ($.copy($.goSlice(buf, w, undefined), $.goSlice((a$ as decimal).d, 0, (a$ as decimal).nd)))
				break
			}
			case (a$ as decimal).dp < (a$ as decimal).nd:
			{
				w = w + ($.copy($.goSlice(buf, w, undefined), $.goSlice((a$ as decimal).d, 0, (a$ as decimal).dp)))
				$.sliceElems(buf!)[$.sliceSlot(buf!, w)] = 46
				w++
				w = w + ($.copy($.goSlice(buf, w, undefined), $.goSlice((a$ as decimal).d, (a$ as decimal).dp, (a$ as decimal).nd)))
				break
			}
			default:
			{
				w = w + ($.copy($.goSlice(buf, w, undefined), $.goSlice((a$ as decimal).d, 0, (a$ as decimal).nd)))
				w = w + (digitZero($.goSlice(buf, w, (w + (a$ as decimal).dp) - (a$ as decimal).nd)))
				break
			}
		}
		return $.bytesToString($.goSlice(buf, 0, w))
	}

	public floatBits(flt: __goscript_atof.floatInfo | $.VarRef<__goscript_atof.floatInfo> | null): [bigint, boolean] {
		const d: decimal | $.VarRef<decimal> | null = this;
		let b: bigint = 0n
		let overflow: boolean = false
		const d$: decimal = d == null ? $.pointerTarget<decimal>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decimal>(d)
		const flt$: __goscript_atof.floatInfo = flt == null ? $.pointerTarget<__goscript_atof.floatInfo>(flt) : (flt as any).__isVarRef === true ? (flt as any).value : (flt as any).__goValue === undefined ? (flt as any) : $.pointerTarget<__goscript_atof.floatInfo>(flt)
		let exp: number = 0
		let mant: bigint = 0n

		out: {
			overflow: {

				if ((d$ as decimal).nd == 0) {
					mant = 0n
					exp = (flt$ as __goscript_atof.floatInfo).bias
					break out
				}

				// If we chop a at nd digits, should we round up?

				if ((d$ as decimal).dp > 310) {
					break overflow
				}
				if ((d$ as decimal).dp < -330) {
					// if we truncated, a little higher than what's recorded - always round up
					mant = 0n
					exp = (flt$ as __goscript_atof.floatInfo).bias
					break out
				}

				// not halfway - digit tells all
				exp = 0
				while ((d$ as decimal).dp > 0) {
					let n: number = 0
					if ((d$ as decimal).dp >= $.sliceLen(__goscript_atof.powtab)) {
						n = 27
					} else {
						n = $.arrayIndex(__goscript_atof.powtab!, (d$ as decimal).dp)
					}
					void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decimal).Shift(-n) : decimal.prototype.Shift.call(d, -n))
					exp = exp + (n)
				}
				while (((d$ as decimal).dp < 0) || (((d$ as decimal).dp == 0) && ($.arrayIndex((d$ as decimal).d, 0) < 53))) {
					let n: number = 0
					if (-(d$ as decimal).dp >= $.sliceLen(__goscript_atof.powtab)) {
						n = 27
					} else {
						n = $.arrayIndex(__goscript_atof.powtab!, -(d$ as decimal).dp)
					}
					void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decimal).Shift(n) : decimal.prototype.Shift.call(d, n))
					exp = exp - (n)
				}

				exp--

				// Round a up to nd digits (or fewer).
				if (exp < ((flt$ as __goscript_atof.floatInfo).bias + 1)) {
					let n = ((flt$ as __goscript_atof.floatInfo).bias + 1) - exp
					void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decimal).Shift(-n) : decimal.prototype.Shift.call(d, -n))
					exp = exp + (n)
				}
				// round up
				if ((exp - (flt$ as __goscript_atof.floatInfo).bias) >= ((1 << (flt$ as __goscript_atof.floatInfo).expbits) - 1)) {
					break overflow
				}

				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decimal).Shift($.int($.uint($.uint64Add(1n, (flt$ as __goscript_atof.floatInfo).mantbits), 64))) : decimal.prototype.Shift.call(d, $.int($.uint($.uint64Add(1n, (flt$ as __goscript_atof.floatInfo).mantbits), 64))))
				mant = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decimal).RoundedInteger() : decimal.prototype.RoundedInteger.call(d))

				if (mant == ($.uint64Shl(2n, (flt$ as __goscript_atof.floatInfo).mantbits))) {
					mant = $.uint64Shr(mant, 1n)
					exp++
					if ((exp - (flt$ as __goscript_atof.floatInfo).bias) >= ((1 << (flt$ as __goscript_atof.floatInfo).expbits) - 1)) {
						break overflow
					}
				}
				// Extract integer part, rounded appropriately.
				// No guarantees about overflow.
				if (($.uint64And(mant, ($.uint64Shl(1n, (flt$ as __goscript_atof.floatInfo).mantbits)))) == 0n) {
					exp = (flt$ as __goscript_atof.floatInfo).bias
				}
				break out
			}

			mant = 0n
			exp = ((1 << (flt$ as __goscript_atof.floatInfo).expbits) - 1) + (flt$ as __goscript_atof.floatInfo).bias
			overflow = true
		}
		let bits = $.uint64And(mant, ($.uint64Sub(($.uint64Shl(1n, (flt$ as __goscript_atof.floatInfo).mantbits)), 1n)))
		bits = $.uint64Or(bits, $.uint64Shl($.uint64((exp - (flt$ as __goscript_atof.floatInfo).bias) & ((1 << (flt$ as __goscript_atof.floatInfo).expbits) - 1)), (flt$ as __goscript_atof.floatInfo).mantbits))
		if ((d$ as decimal).neg) {
			bits = $.uint64Or(bits, $.uint64Shl(($.uint64Shl(1n, (flt$ as __goscript_atof.floatInfo).mantbits)), (flt$ as __goscript_atof.floatInfo).expbits))
		}
		return [bits, overflow]
	}

	public ["set"](s: string): boolean {
		let b: decimal | $.VarRef<decimal> | null = this;
		let ok: boolean = false
		const b$: decimal = b == null ? $.pointerTarget<decimal>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<decimal>(b)
		let i = 0;
		;(b$ as decimal).neg = false;
		;(b$ as decimal).trunc = false
		// Write reversed decimal in buf.

		if (i >= $.stringLen(s)) {
			return ok
		}
		switch ($.indexString(s, i)) {
			case 43:
			{
				i++
				break
			}
			case 45:
			{
				i++;
				;(b$ as decimal).neg = true
				break
			}
		}

		let sawdot = false
		let sawdigits = false
		for (; i < $.stringLen(s); i++) {
			switch ((true as boolean)) {
				case $.indexString(s, i) == 95:
				{
					continue
					break
				}
				case $.indexString(s, i) == 46:
				{
					if (sawdot) {
						return ok
					}
					sawdot = true;
					;(b$ as decimal).dp = (b$ as decimal).nd
					continue
					break
				}
				case (48 <= $.indexString(s, i)) && ($.indexString(s, i) <= 57):
				{
					sawdigits = true
					if (($.indexString(s, i) == 48) && ((b$ as decimal).nd == 0)) {
						;(b$ as decimal).dp--
						continue
					}
					if ((b$ as decimal).nd < 800) {
						;(b$ as decimal).d[(b$ as decimal).nd] = $.indexString(s, i);
						;(b$ as decimal).nd++
					} else {
						if ($.indexString(s, i) != 48) {
							;(b$ as decimal).trunc = true
						}
					}
					continue
					break
				}
			}
			break
		}
		if (!sawdigits) {
			return ok
		}
		if (!sawdot) {
			;(b$ as decimal).dp = (b$ as decimal).nd
		}

		// Pick up a digit, put down a digit.

		if ((i < $.stringLen(s)) && (__goscript_atoi.lower($.indexString(s, i)) == 101)) {
			i++
			if (i >= $.stringLen(s)) {
				return ok
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
				return ok
			}
			let e = 0
			for (; (i < $.stringLen(s)) && (((48 <= $.indexString(s, i)) && ($.indexString(s, i) <= 57)) || ($.indexString(s, i) == 95)); i++) {
				if ($.indexString(s, i) == 95) {

					continue
				}
				if (e < 10000) {
					e = ((e * 10) + $.int($.indexString(s, i))) - 48
				}
			}
			;(b$ as decimal).dp = (b$ as decimal).dp + (e * esign)
		}

		if (i != $.stringLen(s)) {
			return ok
		}

		ok = true
		return ok
	}

	static __typeInfo = $.registerStructType(
		"strconv.decimal",
		() => new decimal(),
		() => [$.methodSignature("Assign", [["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Round", [["nd", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("RoundDown", [["nd", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("RoundUp", [["nd", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("RoundedInteger", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("Shift", [["k", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("floatBits", [["flt", /* @__PURE__ */ $.pointerType("strconv.floatInfo")]], [["b", /* @__PURE__ */ $.basicType("uint64")], ["overflow", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("set", [["s", /* @__PURE__ */ $.basicType("string")]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true)],
		decimal,
		() => [/* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 800), [0], 0, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("nd", /* @__PURE__ */ $.basicType("int"), [1], 800, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("dp", /* @__PURE__ */ $.basicType("int"), [2], 808, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("neg", /* @__PURE__ */ $.basicType("bool"), [3], 816, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("trunc", /* @__PURE__ */ $.basicType("bool"), [4], 817, false, { pkgPath: "internal/strconv" })]
	)
}

export class leftCheat {
	public get delta(): number {
		return this._fields.delta
	}

	public set delta(value: number) {
		this._fields.delta = value
	}

	public get cutoff(): string {
		return this._fields.cutoff
	}

	public set cutoff(value: string) {
		this._fields.cutoff = value
	}

	public _fields: {
		delta: number
		cutoff: string
	}

	constructor(init?: Partial<{delta?: number, cutoff?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			delta: init?.delta ?? (0 as number),
			cutoff: init?.cutoff ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): leftCheat {
		return new leftCheat(this, true)
	}

	public __goscriptAssign(source: leftCheat): void {
		const target = this._fields
		const values = source._fields
		target.delta = values.delta
		target.cutoff = values.cutoff
	}

	static __typeInfo = $.registerStructType(
		"strconv.leftCheat",
		() => new leftCheat(),
		() => [],
		leftCheat,
		() => [/* @__PURE__ */ $.structField("delta", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "internal/strconv" }), /* @__PURE__ */ $.structField("cutoff", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "internal/strconv" })]
	)
}

export const uintSize: number = 64

export const maxShift: number = 60

export function digitZero(dst: $.Slice<number>): number {
	for (let __goscriptRangeTarget0 = dst, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = 48
	}
	return $.sliceLen(dst)
}

export function trim(a: decimal | $.VarRef<decimal> | null): void {
	const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
	while (((a$ as decimal).nd > 0) && ($.arrayIndex((a$ as decimal).d, (a$ as decimal).nd - 1) == 48)) {
		;(a$ as decimal).nd--
	}
	if ((a$ as decimal).nd == 0) {
		;(a$ as decimal).dp = 0
	}
}

export function rightShift(a: decimal | $.VarRef<decimal> | null, k: number): void {
	const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
	let r = 0
	let w = 0

	// Pick up enough leading digits to cover first shift.
	let n: number = 0
	for (; ($.uint($.uint64Shr(n, k), 64)) == 0; r++) {
		if (r >= (a$ as decimal).nd) {
			if (n == 0) {
				// a == 0; shouldn't get here, but handle anyway.
				;(a$ as decimal).nd = 0
				return
			}
			while (($.uint($.uint64Shr(n, k), 64)) == 0) {
				n = $.uint($.uint64Mul(n, 10n), 64)
				r++
			}
			break
		}
		let c = $.uint($.arrayIndex((a$ as decimal).d, r), 64)
		n = $.uint($.uint64Sub(($.uint($.uint64Add(($.uint($.uint64Mul(n, 10n), 64)), c), 64)), 48n), 64)
	}
	;(a$ as decimal).dp = (a$ as decimal).dp - (r - 1)

	let mask: number = $.uint($.uint64Sub(($.uint($.uint64Shl(1n, k), 64)), 1n), 64)

	// Pick up a digit, put down a digit.
	for (; r < (a$ as decimal).nd; r++) {
		let c = $.uint($.arrayIndex((a$ as decimal).d, r), 64)
		let dig = $.uint($.uint64Shr(n, k), 64)
		n = $.uint($.uint64And(n, mask), 64);
		;(a$ as decimal).d[w] = $.uint($.uint($.uint64Add(dig, 48n), 64), 8)
		w++
		n = $.uint($.uint64Sub(($.uint($.uint64Add(($.uint($.uint64Mul(n, 10n), 64)), c), 64)), 48n), 64)
	}

	// Put down extra digits.
	while (n > 0) {
		let dig = $.uint($.uint64Shr(n, k), 64)
		n = $.uint($.uint64And(n, mask), 64)
		if (w < 800) {
			;(a$ as decimal).d[w] = $.uint($.uint($.uint64Add(dig, 48n), 64), 8)
			w++
		} else {
			if (dig > 0) {
				;(a$ as decimal).trunc = true
			}
		}
		n = $.uint($.uint64Mul(n, 10n), 64)
	}

	;(a$ as decimal).nd = w
	trim(a)
}

export let leftcheats: $.Slice<leftCheat> = $.arrayToSlice<leftCheat>([new leftCheat({delta: 0, cutoff: ""}, true), new leftCheat({delta: 1, cutoff: "5"}, true), new leftCheat({delta: 1, cutoff: "25"}, true), new leftCheat({delta: 1, cutoff: "125"}, true), new leftCheat({delta: 2, cutoff: "625"}, true), new leftCheat({delta: 2, cutoff: "3125"}, true), new leftCheat({delta: 2, cutoff: "15625"}, true), new leftCheat({delta: 3, cutoff: "78125"}, true), new leftCheat({delta: 3, cutoff: "390625"}, true), new leftCheat({delta: 3, cutoff: "1953125"}, true), new leftCheat({delta: 4, cutoff: "9765625"}, true), new leftCheat({delta: 4, cutoff: "48828125"}, true), new leftCheat({delta: 4, cutoff: "244140625"}, true), new leftCheat({delta: 4, cutoff: "1220703125"}, true), new leftCheat({delta: 5, cutoff: "6103515625"}, true), new leftCheat({delta: 5, cutoff: "30517578125"}, true), new leftCheat({delta: 5, cutoff: "152587890625"}, true), new leftCheat({delta: 6, cutoff: "762939453125"}, true), new leftCheat({delta: 6, cutoff: "3814697265625"}, true), new leftCheat({delta: 6, cutoff: "19073486328125"}, true), new leftCheat({delta: 7, cutoff: "95367431640625"}, true), new leftCheat({delta: 7, cutoff: "476837158203125"}, true), new leftCheat({delta: 7, cutoff: "2384185791015625"}, true), new leftCheat({delta: 7, cutoff: "11920928955078125"}, true), new leftCheat({delta: 8, cutoff: "59604644775390625"}, true), new leftCheat({delta: 8, cutoff: "298023223876953125"}, true), new leftCheat({delta: 8, cutoff: "1490116119384765625"}, true), new leftCheat({delta: 9, cutoff: "7450580596923828125"}, true), new leftCheat({delta: 9, cutoff: "37252902984619140625"}, true), new leftCheat({delta: 9, cutoff: "186264514923095703125"}, true), new leftCheat({delta: 10, cutoff: "931322574615478515625"}, true), new leftCheat({delta: 10, cutoff: "4656612873077392578125"}, true), new leftCheat({delta: 10, cutoff: "23283064365386962890625"}, true), new leftCheat({delta: 10, cutoff: "116415321826934814453125"}, true), new leftCheat({delta: 11, cutoff: "582076609134674072265625"}, true), new leftCheat({delta: 11, cutoff: "2910383045673370361328125"}, true), new leftCheat({delta: 11, cutoff: "14551915228366851806640625"}, true), new leftCheat({delta: 12, cutoff: "72759576141834259033203125"}, true), new leftCheat({delta: 12, cutoff: "363797880709171295166015625"}, true), new leftCheat({delta: 12, cutoff: "1818989403545856475830078125"}, true), new leftCheat({delta: 13, cutoff: "9094947017729282379150390625"}, true), new leftCheat({delta: 13, cutoff: "45474735088646411895751953125"}, true), new leftCheat({delta: 13, cutoff: "227373675443232059478759765625"}, true), new leftCheat({delta: 13, cutoff: "1136868377216160297393798828125"}, true), new leftCheat({delta: 14, cutoff: "5684341886080801486968994140625"}, true), new leftCheat({delta: 14, cutoff: "28421709430404007434844970703125"}, true), new leftCheat({delta: 14, cutoff: "142108547152020037174224853515625"}, true), new leftCheat({delta: 15, cutoff: "710542735760100185871124267578125"}, true), new leftCheat({delta: 15, cutoff: "3552713678800500929355621337890625"}, true), new leftCheat({delta: 15, cutoff: "17763568394002504646778106689453125"}, true), new leftCheat({delta: 16, cutoff: "88817841970012523233890533447265625"}, true), new leftCheat({delta: 16, cutoff: "444089209850062616169452667236328125"}, true), new leftCheat({delta: 16, cutoff: "2220446049250313080847263336181640625"}, true), new leftCheat({delta: 16, cutoff: "11102230246251565404236316680908203125"}, true), new leftCheat({delta: 17, cutoff: "55511151231257827021181583404541015625"}, true), new leftCheat({delta: 17, cutoff: "277555756156289135105907917022705078125"}, true), new leftCheat({delta: 17, cutoff: "1387778780781445675529539585113525390625"}, true), new leftCheat({delta: 18, cutoff: "6938893903907228377647697925567626953125"}, true), new leftCheat({delta: 18, cutoff: "34694469519536141888238489627838134765625"}, true), new leftCheat({delta: 18, cutoff: "173472347597680709441192448139190673828125"}, true), new leftCheat({delta: 19, cutoff: "867361737988403547205962240695953369140625"}, true)])

export function __goscript_set_leftcheats(__goscriptValue: $.Slice<leftCheat>): void {
	leftcheats = __goscriptValue
}

export function prefixIsLessThan(b: $.Slice<number>, s: string): boolean {
	for (let __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < $.stringLen(s); i++) {
		if (i >= __goscriptSliceWindow0.length) {
			return true
		}
		if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) != $.indexString(s, i)) {
			return ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) < $.indexString(s, i)
		}
	}
	return false
}

export function leftShift(a: decimal | $.VarRef<decimal> | null, k: number): void {
	const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
	let delta = $.arrayIndex(leftcheats!, k).delta
	if (prefixIsLessThan($.goSlice((a$ as decimal).d, 0, (a$ as decimal).nd), $.arrayIndex(leftcheats!, k).cutoff)) {
		delta--
	}

	let r = (a$ as decimal).nd
	let w = (a$ as decimal).nd + delta

	// Pick up a digit, put down a digit.
	let n: number = 0
	for (r--; r >= 0; r--) {
		n = $.uint($.uint64Add(n, $.uint($.uint64Shl(($.uint($.uint64Sub($.uint($.arrayIndex((a$ as decimal).d, r), 64), 48n), 64)), k), 64)), 64)
		let quo: number = $.uint($.uint64Div(n, 10n), 64)
		let rem = $.uint($.uint64Sub(n, ($.uint($.uint64Mul(10n, quo), 64))), 64)
		w--
		if (w < 800) {
			;(a$ as decimal).d[w] = $.uint($.uint($.uint64Add(rem, 48n), 64), 8)
		} else {
			if (rem != 0) {
				;(a$ as decimal).trunc = true
			}
		}
		n = quo
	}

	// Put down extra digits.
	while (n > 0) {
		let quo: number = $.uint($.uint64Div(n, 10n), 64)
		let rem = $.uint($.uint64Sub(n, ($.uint($.uint64Mul(10n, quo), 64))), 64)
		w--
		if (w < 800) {
			;(a$ as decimal).d[w] = $.uint($.uint($.uint64Add(rem, 48n), 64), 8)
		} else {
			if (rem != 0) {
				;(a$ as decimal).trunc = true
			}
		}
		n = quo
	}

	;(a$ as decimal).nd = (a$ as decimal).nd + (delta)
	if ((a$ as decimal).nd >= 800) {
		;(a$ as decimal).nd = 800
	}
	;(a$ as decimal).dp = (a$ as decimal).dp + (delta)
	trim(a)
}

export function shouldRoundUp(a: decimal | $.VarRef<decimal> | null, nd: number): boolean {
	const a$: decimal = a == null ? $.pointerTarget<decimal>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<decimal>(a)
	if ((nd < 0) || (nd >= (a$ as decimal).nd)) {
		return false
	}
	if (($.arrayIndex((a$ as decimal).d, nd) == 53) && ((nd + 1) == (a$ as decimal).nd)) {
		// if we truncated, a little higher than what's recorded - always round up
		if ((a$ as decimal).trunc) {
			return true
		}
		return (nd > 0) && ($.uint((((($.arrayIndex((a$ as decimal).d, nd - 1) - 48) & 0xff)) % 2), 8) != 0)
	}
	// not halfway - digit tells all
	return $.arrayIndex((a$ as decimal).d, nd) >= 53
}
