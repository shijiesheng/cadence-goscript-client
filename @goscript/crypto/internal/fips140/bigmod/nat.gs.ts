// Generated file based on nat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_nat_noasm from "./nat_noasm.gs.ts"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "./nat_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/bigmod", ["bigmod.choice", "bigmod.Nat", "bigmod.Modulus"])

export type choice = number

export class Nat {
	// limbs is little-endian in base 2^W with W = bits.UintSize.
	public get limbs(): $.Slice<number> {
		return this._fields.limbs
	}

	public set limbs(value: $.Slice<number>) {
		this._fields.limbs = value
	}

	public _fields: {
		limbs: $.Slice<number>
	}

	constructor(init?: Partial<{limbs?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			limbs: init?.limbs ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Nat {
		return new Nat(this, true)
	}

	public __goscriptAssign(source: Nat): void {
		const target = this._fields
		const values = source._fields
		target.limbs = values.limbs
	}

	public Add(y: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		let overflow = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).add(y) : Nat.prototype.add.call(x, y))
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus($.uint(overflow, 64), m) : Nat.prototype.maybeSubtractModulus.call(x, $.uint(overflow, 64), m))
		return x
	}

	public BitLenVarTime(): number {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)

		for (let __goscriptSliceWindow0 = $.sliceRange(xLimbs), i = size - 1; i >= 0; i--) {
			if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) != 0) {
				return (i * 64) + bitLen(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number))
			}
		}
		return 0
	}

	public Bits(): $.Slice<number> {
		const x: Nat | $.VarRef<Nat> | null = this;
		return $.pointerValue<Nat>(x).limbs
	}

	public Bytes(m: Modulus | $.VarRef<Modulus> | null): $.Slice<number> {
		const x: Nat | $.VarRef<Nat> | null = this;
		let i = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Modulus).Size() : Modulus.prototype.Size.call(m))
		let bytes: $.Slice<number> = $.makeSlice<number>(i, undefined, "byte")
		for (let __goscriptRangeTarget0 = $.pointerValue<Nat>(x).limbs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow1 = $.sliceRange(bytes), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let limb = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
			for (let j = 0; j < 8; j++) {
				i--
				if (i < 0) {
					if (limb == 0) {
						break
					}
					$.panic("bigmod: modulus is smaller than nat")
				}
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = $.uint(limb, 8)
				limb = $.uint($.uint64Shr(limb, 8), 64)
			}
		}
		return bytes
	}

	public DivShortVarTime(y: number): number {
		let x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		if (y == 0) {
			$.panic("bigmod: division by zero")
		}

		let r: number = 0
		for (let i = $.sliceLen((x$ as Nat).limbs) - 1; i >= 0; i--) {
			let __goscriptTuple0: any = bits.Div(r, $.arrayIndex((x$ as Nat).limbs!, i), y)
			$.sliceElems((x$ as Nat).limbs!)[$.sliceSlot((x$ as Nat).limbs!, i)] = __goscriptTuple0[0]
			r = __goscriptTuple0[1]
		}
		return r
	}

	public Equal(y: Nat | $.VarRef<Nat> | null): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, size)

		let equal = 1
		for (let __goscriptSliceWindow2 = $.sliceRange(xLimbs), __goscriptSliceWindow3 = $.sliceRange(yLimbs), i = 0; i < size; i++) {
			equal = $.uint($.uint64And(equal, ctEq(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number), ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as number))), 64)
		}
		return equal
	}

	public Exp(x: Nat | $.VarRef<Nat> | null, e: $.Slice<number>, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		let out: Nat | $.VarRef<Nat> | null = this;
		if (!$.pointerValue<Modulus>(m).odd) {
			$.panic("bigmod: modulus for Exp must be odd")
		}

		// We use a 4 bit window. For our RSA workload, 4 bit windows are faster
		// than 2 bit windows, but use an extra 12 nats worth of scratch space.
		// Using bit sizes that don't divide 8 are more complex to implement, but
		// are likely to be more efficient if necessary.

		let table = $.arrayValue([NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat(), NewNat()])
		Nat.prototype.montgomeryRepresentation.call(Nat.prototype.set.call($.arrayIndex(table, 0), x), m)
		for (let i = 1; i < 15; i++) {
			Nat.prototype.montgomeryMul.call($.arrayIndex(table, i), $.arrayIndex(table, i - 1), $.arrayIndex(table, 0), m)
		}

		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).resetFor(m) : Nat.prototype.resetFor.call(out, m))
		$.sliceElems($.pointerValue<Nat>(out).limbs!)[$.sliceSlot($.pointerValue<Nat>(out).limbs!, 0)] = 1
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryRepresentation(m) : Nat.prototype.montgomeryRepresentation.call(out, m))
		let tmp: Nat | $.VarRef<Nat> | null = Nat.prototype.ExpandFor.call(NewNat(), m)
		for (let __goscriptRangeTarget3 = e, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
			for (let __goscriptRangeTarget2 = $.arrayToSlice<number>([4, 0]), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let j = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number)
				// Square four times. Optimization note: this can be implemented
				// more efficiently than with generic Montgomery multiplication.
				void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, out, m) : Nat.prototype.montgomeryMul.call(out, out, out, m))
				void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, out, m) : Nat.prototype.montgomeryMul.call(out, out, out, m))
				void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, out, m) : Nat.prototype.montgomeryMul.call(out, out, out, m))
				void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, out, m) : Nat.prototype.montgomeryMul.call(out, out, out, m))

				// Select x^k in constant time from the table.
				let k = $.uint(($.uintShr(b, j, 8)) & 0b1111, 64)
				for (let __goscriptRangeTarget1 = table, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow3.length; i++) {
					void (tmp !== null && (tmp as any).__isVarRef !== true && (tmp as any).__goValue === undefined ? ((tmp as any) as Nat).assign(ctEq(k, $.uint(i + 1, 64)), $.arrayIndex(table, i)) : Nat.prototype.assign.call(tmp, ctEq(k, $.uint(i + 1, 64)), $.arrayIndex(table, i)))
				}

				// Multiply by x^k, discarding the result if k = 0.
				void (tmp !== null && (tmp as any).__isVarRef !== true && (tmp as any).__goValue === undefined ? ((tmp as any) as Nat).montgomeryMul(out, tmp, m) : Nat.prototype.montgomeryMul.call(tmp, out, tmp, m))
				void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).assign(not(ctEq(k, 0)), tmp) : Nat.prototype.assign.call(out, not(ctEq(k, 0)), tmp))
			}
		}

		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryReduction(m) : Nat.prototype.montgomeryReduction.call(out, m))
	}

	public ExpShortVarTime(x: Nat | $.VarRef<Nat> | null, e: number, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const out: Nat | $.VarRef<Nat> | null = this;
		if (!$.pointerValue<Modulus>(m).odd) {
			$.panic("bigmod: modulus for ExpShortVarTime must be odd")
		}
		// For short exponents, precomputing a table and using a window like in Exp
		// doesn't pay off. Instead, we do a simple conditional square-and-multiply
		// chain, skipping the initial run of zeroes.
		let xR: Nat | $.VarRef<Nat> | null = Nat.prototype.montgomeryRepresentation.call(Nat.prototype.set.call(NewNat(), x), m)
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat)["set"](xR) : Nat.prototype.set.call(out, xR))
		for (let i = (bits.UintSize - bits.Len(e)) + 1; i < 64; i++) {
			void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, out, m) : Nat.prototype.montgomeryMul.call(out, out, out, m))
			{
				let k = $.uint($.uint64And(($.uint($.uint64Shr(e, ((bits.UintSize - i) - 1)), 64)), 1n), 64)
				if (k != 0) {
					void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryMul(out, xR, m) : Nat.prototype.montgomeryMul.call(out, out, xR, m))
				}
			}
		}
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).montgomeryReduction(m) : Nat.prototype.montgomeryReduction.call(out, m))
	}

	public ExpandFor(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).expand($.sliceLen($.pointerValue<Nat>($.pointerValue<Modulus>(m).nat).limbs)) : Nat.prototype.expand.call(x, $.sliceLen($.pointerValue<Nat>($.pointerValue<Modulus>(m).nat).limbs)))
	}

	public GCDVarTime(a: Nat | $.VarRef<Nat> | null, b: Nat | $.VarRef<Nat> | null): [Nat | $.VarRef<Nat> | null, $.GoError] {
		const x: Nat | $.VarRef<Nat> | null = this;
		let __goscriptTuple1: any = extendedGCD(a, b)
		let u: Nat | $.VarRef<Nat> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[2]
		if (err != null) {
			return [null, err]
		}
		return [(x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat)["set"](u) : Nat.prototype.set.call(x, u)), null]
	}

	public InverseVarTime(a: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): [Nat | $.VarRef<Nat> | null, boolean] {
		const x: Nat | $.VarRef<Nat> | null = this;
		let __goscriptTuple2: any = extendedGCD(a, $.pointerValue<Modulus>(m).nat)
		let u: Nat | $.VarRef<Nat> | null = __goscriptTuple2[0]
		let A: Nat | $.VarRef<Nat> | null = __goscriptTuple2[1]
		let err = __goscriptTuple2[2]
		if (err != null) {
			return [x, false]
		}
		if ((u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Nat).IsOne() : Nat.prototype.IsOne.call(u)) == 0) {
			return [x, false]
		}
		return [(x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat)["set"](A) : Nat.prototype.set.call(x, A)), true]
	}

	public IsMinusOne(m: Modulus | $.VarRef<Modulus> | null): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		let minusOne: Nat | $.VarRef<Nat> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Modulus).Nat() : Modulus.prototype.Nat.call(m))
		void (minusOne !== null && (minusOne as any).__isVarRef !== true && (minusOne as any).__goValue === undefined ? ((minusOne as any) as Nat).SubOne(m) : Nat.prototype.SubOne.call(minusOne, m))
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Equal(minusOne) : Nat.prototype.Equal.call(x, minusOne))
	}

	public IsOdd(): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		if ($.sliceLen((x$ as Nat).limbs) == 0) {
			return 0
		}
		return $.uint($.uint($.uint64And($.arrayIndex((x$ as Nat).limbs!, 0), 1n), 64), 64)
	}

	public IsOne(): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)

		if ($.sliceLen(xLimbs) == 0) {
			return 0
		}

		let one = ctEq($.arrayIndex(xLimbs!, 0), 1)
		for (let __goscriptSliceWindow4 = $.sliceRange(xLimbs), i = 1; i < size; i++) {
			one = $.uint($.uint64And(one, ctEq(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as number), 0)), 64)
		}
		return one
	}

	public IsZero(): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)

		let zero = 1
		for (let __goscriptSliceWindow5 = $.sliceRange(xLimbs), i = 0; i < size; i++) {
			zero = $.uint($.uint64And(zero, ctEq(((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as number), 0)), 64)
		}
		return zero
	}

	public Mod(x: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		let out: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).resetFor(m) : Nat.prototype.resetFor.call(out, m))
		// Working our way from the most significant to the least significant limb,
		// we can insert each limb at the least significant position, shifting all
		// previous limbs left by _W. This way each limb will get shifted by the
		// correct number of bits. We can insert at least N - 1 limbs without
		// overflowing m. After that, we need to reduce every time we shift.
		let i = $.sliceLen((x$ as Nat).limbs) - 1
		// For the first N - 1 limbs we can skip the actual shifting and position
		// them at the shifted position, which starts at min(N - 2, i).
		let start = $.sliceLen($.pointerValue<Nat>($.pointerValue<Modulus>(m).nat).limbs) - 2
		if (i < start) {
			start = i
		}
		for (let j = start; j >= 0; j--) {
			$.sliceElems($.pointerValue<Nat>(out).limbs!)[$.sliceSlot($.pointerValue<Nat>(out).limbs!, j)] = $.arrayIndex((x$ as Nat).limbs!, i)
			i--
		}
		// We shift in the remaining limbs, reducing modulo m each time.
		while (i >= 0) {
			void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).shiftIn($.arrayIndex((x$ as Nat).limbs!, i), m) : Nat.prototype.shiftIn.call(out, $.arrayIndex((x$ as Nat).limbs!, i), m))
			i--
		}
		return out
	}

	public Mul(y: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const m$: Modulus = m == null ? $.pointerTarget<Modulus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Modulus>(m)
		if ((m$ as Modulus).odd) {
			// A Montgomery multiplication by a value out of the Montgomery domain
			// takes the result out of Montgomery representation.
			let xR: Nat | $.VarRef<Nat> | null = Nat.prototype.montgomeryRepresentation.call(Nat.prototype.set.call(NewNat(), x), m)
			return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).montgomeryMul(xR, y, m) : Nat.prototype.montgomeryMul.call(x, xR, y, m))
		}

		let n = $.sliceLen($.pointerValue<Nat>((m$ as Modulus).nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(x).limbs, undefined, n)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, n)

		switch (n) {
			default:
			{
				let T: $.Slice<number> = $.makeSlice<number>(0, 32 * 2, "number")
				if ($.cap(T) < (n * 2)) {
					T = $.makeSlice<number>(0, n * 2, "number")
				}
				T = $.goSlice(T, undefined, n * 2)

				// T = x * y
				for (let __goscriptSliceWindow6 = $.sliceRange(T), __goscriptSliceWindow7 = $.sliceRange(yLimbs), i = 0; i < n; i++) {
					;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, n + i)] = addMulVVW($.goSlice(T, i, n + i), xLimbs, ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number))
				}

				// x = T mod m
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Mod(new Nat({limbs: T}), m) : Nat.prototype.Mod.call(x, new Nat({limbs: T}), m))
				break
			}
			case globalThis.Math.trunc(1024 / 64):
			{
				const n: number = 16
				let T: $.Slice<number> = $.makeSlice<number>(16 * 2, undefined, "number")
				for (let __goscriptSliceWindow8 = $.sliceRange(T), __goscriptSliceWindow9 = $.sliceRange(xLimbs), __goscriptSliceWindow10 = $.sliceRange(yLimbs), i = 0; i < 16; i++) {
					;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, 16 + i)] = __goscript_nat_noasm.addMulVVW1024($.indexRef(T!, i), $.indexRef(xLimbs!, 0), ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] as number))
				}
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Mod(new Nat({limbs: T}), m) : Nat.prototype.Mod.call(x, new Nat({limbs: T}), m))
				break
			}
			case globalThis.Math.trunc(1536 / 64):
			{
				const n: number = 24
				let T: $.Slice<number> = $.makeSlice<number>(24 * 2, undefined, "number")
				for (let __goscriptSliceWindow11 = $.sliceRange(T), __goscriptSliceWindow12 = $.sliceRange(xLimbs), __goscriptSliceWindow13 = $.sliceRange(yLimbs), i = 0; i < 24; i++) {
					;(__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, 24 + i)] = __goscript_nat_noasm.addMulVVW1536($.indexRef(T!, i), $.indexRef(xLimbs!, 0), ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, i)] as number))
				}
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Mod(new Nat({limbs: T}), m) : Nat.prototype.Mod.call(x, new Nat({limbs: T}), m))
				break
			}
			case globalThis.Math.trunc(2048 / 64):
			{
				const n: number = 32
				let T: $.Slice<number> = $.makeSlice<number>(32 * 2, undefined, "number")
				for (let __goscriptSliceWindow14 = $.sliceRange(T), __goscriptSliceWindow15 = $.sliceRange(xLimbs), __goscriptSliceWindow16 = $.sliceRange(yLimbs), i = 0; i < 32; i++) {
					;(__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, 32 + i)] = __goscript_nat_noasm.addMulVVW2048($.indexRef(T!, i), $.indexRef(xLimbs!, 0), ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, i)] as number))
				}
				return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Mod(new Nat({limbs: T}), m) : Nat.prototype.Mod.call(x, new Nat({limbs: T}), m))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SetBits(y: $.Slice<number>): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset($.sliceLen(y)) : Nat.prototype.reset.call(x, $.sliceLen(y)))
		$.copy($.pointerValue<Nat>(x).limbs, y)
		return x
	}

	public SetBytes(b: $.Slice<number>, m: Modulus | $.VarRef<Modulus> | null): [Nat | $.VarRef<Nat> | null, $.GoError] {
		const x: Nat | $.VarRef<Nat> | null = this;
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).resetFor(m) : Nat.prototype.resetFor.call(x, m))
		{
			let err = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).setBytes(b) : Nat.prototype.setBytes.call(x, b))
			if (err != null) {
				return [null, err]
			}
		}
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).cmpGeq($.pointerValue<Modulus>(m).nat) : Nat.prototype.cmpGeq.call(x, $.pointerValue<Modulus>(m).nat)) == 1) {
			return [null, errors.New("input overflows the modulus")]
		}
		return [x, null]
	}

	public SetOverflowingBytes(b: $.Slice<number>, m: Modulus | $.VarRef<Modulus> | null): [Nat | $.VarRef<Nat> | null, $.GoError] {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		const m$: Modulus = m == null ? $.pointerTarget<Modulus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Modulus>(m)
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).resetFor(m) : Nat.prototype.resetFor.call(x, m))
		{
			let err = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).setBytes(b) : Nat.prototype.setBytes.call(x, b))
			if (err != null) {
				return [null, err]
			}
		}
		// setBytes would have returned an error if the input overflowed the limb
		// size of the modulus, so now we only need to check if the most significant
		// limb of x has more bits than the most significant limb of the modulus.
		if (bitLen($.arrayIndex((x$ as Nat).limbs!, $.sliceLen((x$ as Nat).limbs) - 1)) > bitLen($.arrayIndex($.pointerValue<Nat>((m$ as Modulus).nat).limbs!, $.sliceLen($.pointerValue<Nat>((m$ as Modulus).nat).limbs) - 1))) {
			return [null, errors.New("input overflows the modulus size")]
		}
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus(0, m) : Nat.prototype.maybeSubtractModulus.call(x, 0, m))
		return [x, null]
	}

	public SetUint(y: number): Nat | $.VarRef<Nat> | null {
		let x: Nat | $.VarRef<Nat> | null = this;
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(1) : Nat.prototype.reset.call(x, 1))
		$.sliceElems($.pointerValue<Nat>(x).limbs!)[$.sliceSlot($.pointerValue<Nat>(x).limbs!, 0)] = y
		return x
	}

	public ShiftRightByOne(): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		rshift1(x, 0)
		return x
	}

	public ShiftRightVarTime(n: number): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)

		let shift = $.int($.uint($.uint64Mod(n, 64n), 64))
		let shiftLimbs = $.int($.uint($.uint64Div(n, 64n), 64))

		let shiftedLimbs: $.Slice<number> = null! as $.Slice<number>
		if (shiftLimbs < size) {
			shiftedLimbs = $.goSlice(xLimbs, shiftLimbs, undefined)
		}

		for (let __goscriptRangeTarget4 = xLimbs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow17 = $.sliceRange(shiftedLimbs), i = 0; i < __goscriptRangeWindow4.length; i++) {
			if (i >= __goscriptSliceWindow17.length) {
				;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = 0
				continue
			}

			;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = $.uint($.uint64Shr(((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, i)] as number), shift), 64)
			if ((i + 1) < __goscriptSliceWindow17.length) {
				;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = $.uint($.uint64Or((__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i], $.uint($.uint64Shl(((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, i + 1)] as number), (64 - shift)), 64)), 64)
			}
		}

		return x
	}

	public Sub(y: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		let underflow = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).sub(y) : Nat.prototype.sub.call(x, y))
		// If the subtraction underflowed, add m.
		let t: Nat | $.VarRef<Nat> | null = Nat.prototype.set.call(NewNat(), x)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Nat).add($.pointerValue<Modulus>(m).nat) : Nat.prototype.add.call(t, $.pointerValue<Modulus>(m).nat))
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).assign($.uint(underflow, 64), t) : Nat.prototype.assign.call(x, $.uint(underflow, 64), t))
		return x
	}

	public SubOne(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		let one: Nat | $.VarRef<Nat> | null = Nat.prototype.ExpandFor.call(NewNat(), m)
		$.sliceElems($.pointerValue<Nat>(one).limbs!)[$.sliceSlot($.pointerValue<Nat>(one).limbs!, 0)] = 1
		// Sub asks for x to be reduced modulo m, while SubOne doesn't, but when
		// y = 1, it works, and this is an internal use.
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).Sub(one, m) : Nat.prototype.Sub.call(x, one, m))
	}

	public TrailingZeroBitsVarTime(): number {
		const x: Nat | $.VarRef<Nat> | null = this;
		let t: number = 0
		let limbs: $.Slice<number> = $.pointerValue<Nat>(x).limbs
		for (let __goscriptRangeTarget5 = limbs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let l = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as number)
			if (l == 0) {
				t = $.uint($.uint64Add(t, 64), 64)
				continue
			}
			t = $.uint($.uint64Add(t, $.uint(bits.TrailingZeros(l), 64)), 64)
			break
		}
		return t
	}

	public add(y: Nat | $.VarRef<Nat> | null): number {
		const x: Nat | $.VarRef<Nat> | null = this;
		let c: number = 0
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, size)

		for (let __goscriptSliceWindow18 = $.sliceRange(xLimbs), __goscriptSliceWindow19 = $.sliceRange(yLimbs), i = 0; i < size; i++) {
			let __goscriptTuple3: any = bits.Add(((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, i)] as number), ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, i)] as number), c);
			;(__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, i)] = __goscriptTuple3[0]
			c = __goscriptTuple3[1]
		}
		return c
	}

	public assign(on: choice, y: Nat | $.VarRef<Nat> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, size)

		let mask = ctMask(on)
		for (let __goscriptSliceWindow20 = $.sliceRange(xLimbs), __goscriptSliceWindow21 = $.sliceRange(yLimbs), i = 0; i < size; i++) {
			;(__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)] = $.uint($.uint64Xor((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)], $.uint($.uint64And(mask, ($.uint($.uint64Xor(((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)] as number), ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, i)] as number)), 64))), 64)), 64)
		}
		return x
	}

	public cmpGeq(y: Nat | $.VarRef<Nat> | null): choice {
		const x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, size)

		let c: number = 0
		for (let __goscriptSliceWindow22 = $.sliceRange(xLimbs), __goscriptSliceWindow23 = $.sliceRange(yLimbs), i = 0; i < size; i++) {
			let __goscriptTuple4: any = bits.Sub(((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, i)] as number), ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, i)] as number), c)
			c = __goscriptTuple4[1]
		}
		// If there was a carry, then subtracting y underflowed, so
		// x is not greater than or equal to y.
		return not($.uint(c, 64))
	}

	public expand(n: number): Nat | $.VarRef<Nat> | null {
		let x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		if ($.sliceLen((x$ as Nat).limbs) > n) {
			$.panic("bigmod: internal error: shrinking nat")
		}
		if ($.cap((x$ as Nat).limbs) < n) {
			let newLimbs: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
			$.copy(newLimbs, (x$ as Nat).limbs);
			;(x$ as Nat).limbs = newLimbs
			return x
		}
		let extraLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, $.sliceLen((x$ as Nat).limbs), n)
		$.clear(extraLimbs);
		;(x$ as Nat).limbs = $.goSlice((x$ as Nat).limbs, undefined, n)
		return x
	}

	public maybeSubtractModulus(always: choice, m: Modulus | $.VarRef<Modulus> | null): void {
		const x: Nat | $.VarRef<Nat> | null = this;
		let t: Nat | $.VarRef<Nat> | null = Nat.prototype.set.call(NewNat(), x)
		let underflow = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Nat).sub($.pointerValue<Modulus>(m).nat) : Nat.prototype.sub.call(t, $.pointerValue<Modulus>(m).nat))
		// We keep the result if x - m didn't underflow (meaning x >= m)
		// or if always was set.
		let keep = $.uint($.uint64Or(not($.uint(underflow, 64)), $.uint(always, 64)), 64)
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).assign(keep, t) : Nat.prototype.assign.call(x, keep, t))
	}

	public montgomeryMul(a: Nat | $.VarRef<Nat> | null, b: Nat | $.VarRef<Nat> | null, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const m$: Modulus = m == null ? $.pointerTarget<Modulus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Modulus>(m)
		let n = $.sliceLen($.pointerValue<Nat>((m$ as Modulus).nat).limbs)
		let mLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>((m$ as Modulus).nat).limbs, undefined, n)
		let aLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(a).limbs, undefined, n)
		let bLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(b).limbs, undefined, n)

		switch (n) {
			default:
			{
				let T: $.Slice<number> = $.makeSlice<number>(0, 32 * 2, "number")
				if ($.cap(T) < (n * 2)) {
					T = $.makeSlice<number>(0, n * 2, "number")
				}
				T = $.goSlice(T, undefined, n * 2)

				// This loop implements Word-by-Word Montgomery Multiplication, as
				// described in Algorithm 4 (Fig. 3) of "Efficient Software
				// Implementations of Modular Exponentiation" by Shay Gueron
				// [https://eprint.iacr.org/2011/239.pdf].
				let c: number = 0
				for (let __goscriptSliceWindow24 = $.sliceRange(T), __goscriptSliceWindow25 = $.sliceRange(bLimbs), i = 0; i < n; i++) {
					;((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, n + i)] as number)

					// Step 1 (T = a × b) is computed as a large pen-and-paper column
					// multiplication of two numbers with n base-2^_W digits. If we just
					// wanted to produce 2n-wide T, we would do
					//
					//   for i := 0; i < n; i++ {
					//       d := bLimbs[i]
					//       T[n+i] = addMulVVW(T[i:n+i], aLimbs, d)
					//   }
					//
					// where d is a digit of the multiplier, T[i:n+i] is the shifted
					// position of the product of that digit, and T[n+i] is the final carry.
					// Note that T[i] isn't modified after processing the i-th digit.
					//
					// Instead of running two loops, one for Step 1 and one for Steps 2–6,
					// the result of Step 1 is computed during the next loop. This is
					// possible because each iteration only uses T[i] in Step 2 and then
					// discards it in Step 6.
					let d = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, i)] as number)
					let c1 = addMulVVW($.goSlice(T, i, n + i), aLimbs, d)

					// Step 6 is replaced by shifting the virtual window we operate
					// over: T of the algorithm is T[i:] for us. That means that T1 in
					// Step 2 (T mod 2^_W) is simply T[i]. k0 in Step 3 is our m0inv.
					let Y = $.uint($.uint64Mul(((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, i)] as number), (m$ as Modulus).m0inv), 64)

					// Step 4 and 5 add Y × m to T, which as mentioned above is stored
					// at T[i:]. The two carries (from a × d and Y × m) are added up in
					// the next word T[n+i], and the carry bit from that addition is
					// brought forward to the next iteration.
					let c2 = addMulVVW($.goSlice(T, i, n + i), mLimbs, Y)
					let __goscriptTuple5: any = bits.Add(c1, c2, c);
					;(__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, n + i)] = __goscriptTuple5[0]
					c = __goscriptTuple5[1]
				}

				// Finally for Step 7 we copy the final T window into x, and subtract m
				// if necessary (which as explained in maybeSubtractModulus can be the
				// case both if x >= m, or if x overflowed).
				//
				// The paper suggests in Section 4 that we can do an "Almost Montgomery
				// Multiplication" by subtracting only in the overflow case, but the
				// cost is very similar since the constant time subtraction tells us if
				// x >= m as a side effect, and taking care of the broken invariant is
				// highly undesirable (see https://go.dev/issue/13907).
				$.copy($.pointerValue<Nat>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(n) : Nat.prototype.reset.call(x, n))).limbs, $.goSlice(T, n, undefined))
				void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus($.uint(c, 64), m) : Nat.prototype.maybeSubtractModulus.call(x, $.uint(c, 64), m))
				break
			}
			case globalThis.Math.trunc(1024 / 64):
			{
				const n: number = 16
				let T: $.Slice<number> = $.makeSlice<number>(16 * 2, undefined, "number")
				let c: number = 0
				for (let __goscriptSliceWindow26 = $.sliceRange(bLimbs), __goscriptSliceWindow27 = $.sliceRange(T), __goscriptSliceWindow28 = $.sliceRange(aLimbs), __goscriptSliceWindow29 = $.sliceRange(mLimbs), i = 0; i < 16; i++) {
					let d = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, i)] as number)
					let c1 = __goscript_nat_noasm.addMulVVW1024($.indexRef(T!, i), $.indexRef(aLimbs!, 0), d)
					let Y = $.uint($.uint64Mul(((__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, i)] as number), (m$ as Modulus).m0inv), 64)
					let c2 = __goscript_nat_noasm.addMulVVW1024($.indexRef(T!, i), $.indexRef(mLimbs!, 0), Y)
					let __goscriptTuple6: any = bits.Add(c1, c2, c);
					;(__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, 16 + i)] = __goscriptTuple6[0]
					c = __goscriptTuple6[1]
				}
				$.copy($.pointerValue<Nat>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(16) : Nat.prototype.reset.call(x, 16))).limbs, $.goSlice(T, 16, undefined))
				void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus($.uint(c, 64), m) : Nat.prototype.maybeSubtractModulus.call(x, $.uint(c, 64), m))
				break
			}
			case globalThis.Math.trunc(1536 / 64):
			{
				const n: number = 24
				let T: $.Slice<number> = $.makeSlice<number>(24 * 2, undefined, "number")
				let c: number = 0
				for (let __goscriptSliceWindow30 = $.sliceRange(bLimbs), __goscriptSliceWindow31 = $.sliceRange(T), __goscriptSliceWindow32 = $.sliceRange(aLimbs), __goscriptSliceWindow33 = $.sliceRange(mLimbs), i = 0; i < 24; i++) {
					let d = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, i)] as number)
					let c1 = __goscript_nat_noasm.addMulVVW1536($.indexRef(T!, i), $.indexRef(aLimbs!, 0), d)
					let Y = $.uint($.uint64Mul(((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, i)] as number), (m$ as Modulus).m0inv), 64)
					let c2 = __goscript_nat_noasm.addMulVVW1536($.indexRef(T!, i), $.indexRef(mLimbs!, 0), Y)
					let __goscriptTuple7: any = bits.Add(c1, c2, c);
					;(__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, 24 + i)] = __goscriptTuple7[0]
					c = __goscriptTuple7[1]
				}
				$.copy($.pointerValue<Nat>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(24) : Nat.prototype.reset.call(x, 24))).limbs, $.goSlice(T, 24, undefined))
				void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus($.uint(c, 64), m) : Nat.prototype.maybeSubtractModulus.call(x, $.uint(c, 64), m))
				break
			}
			case globalThis.Math.trunc(2048 / 64):
			{
				const n: number = 32
				let T: $.Slice<number> = $.makeSlice<number>(32 * 2, undefined, "number")
				let c: number = 0
				for (let __goscriptSliceWindow34 = $.sliceRange(bLimbs), __goscriptSliceWindow35 = $.sliceRange(T), __goscriptSliceWindow36 = $.sliceRange(aLimbs), __goscriptSliceWindow37 = $.sliceRange(mLimbs), i = 0; i < 32; i++) {
					let d = ((__goscriptSliceWindow34.backing as any[])[$.windowSlot(__goscriptSliceWindow34, i)] as number)
					let c1 = __goscript_nat_noasm.addMulVVW2048($.indexRef(T!, i), $.indexRef(aLimbs!, 0), d)
					let Y = $.uint($.uint64Mul(((__goscriptSliceWindow35.backing as any[])[$.windowSlot(__goscriptSliceWindow35, i)] as number), (m$ as Modulus).m0inv), 64)
					let c2 = __goscript_nat_noasm.addMulVVW2048($.indexRef(T!, i), $.indexRef(mLimbs!, 0), Y)
					let __goscriptTuple8: any = bits.Add(c1, c2, c);
					;(__goscriptSliceWindow35.backing as any[])[$.windowSlot(__goscriptSliceWindow35, 32 + i)] = __goscriptTuple8[0]
					c = __goscriptTuple8[1]
				}
				$.copy($.pointerValue<Nat>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(32) : Nat.prototype.reset.call(x, 32))).limbs, $.goSlice(T, 32, undefined))
				void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).maybeSubtractModulus($.uint(c, 64), m) : Nat.prototype.maybeSubtractModulus.call(x, $.uint(c, 64), m))
				break
			}
		}

		return x
	}

	public montgomeryReduction(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		// By Montgomery multiplying with 1 not in Montgomery representation, we
		// convert out back from Montgomery representation, because it works out to
		// dividing by R.
		let one: Nat | $.VarRef<Nat> | null = Nat.prototype.ExpandFor.call(NewNat(), m)
		$.sliceElems($.pointerValue<Nat>(one).limbs!)[$.sliceSlot($.pointerValue<Nat>(one).limbs!, 0)] = 1
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).montgomeryMul(x, one, m) : Nat.prototype.montgomeryMul.call(x, x, one, m))
	}

	public montgomeryRepresentation(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		// A Montgomery multiplication (which computes a * b / R) by R * R works out
		// to a multiplication by R, which takes the value out of the Montgomery domain.
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).montgomeryMul(x, $.pointerValue<Modulus>(m).rr, m) : Nat.prototype.montgomeryMul.call(x, x, $.pointerValue<Modulus>(m).rr, m))
	}

	public reset(n: number): Nat | $.VarRef<Nat> | null {
		let x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		if ($.cap((x$ as Nat).limbs) < n) {
			;(x$ as Nat).limbs = $.makeSlice<number>(n, undefined, "number")
			return x
		}
		// Clear both the returned limbs and the previously used ones.
		$.clear($.goSlice((x$ as Nat).limbs, undefined, $.max(n, $.sliceLen((x$ as Nat).limbs))));
		;(x$ as Nat).limbs = $.goSlice((x$ as Nat).limbs, undefined, n)
		return x
	}

	public resetFor(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const out: Nat | $.VarRef<Nat> | null = this;
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as Nat).reset($.sliceLen($.pointerValue<Nat>($.pointerValue<Modulus>(m).nat).limbs)) : Nat.prototype.reset.call(out, $.sliceLen($.pointerValue<Nat>($.pointerValue<Modulus>(m).nat).limbs)))
	}

	public resetToBytes(b: $.Slice<number>): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset(globalThis.Math.trunc((($.sliceLen(b) + 8) - 1) / 8)) : Nat.prototype.reset.call(x, globalThis.Math.trunc((($.sliceLen(b) + 8) - 1) / 8)))
		{
			let err = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).setBytes(b) : Nat.prototype.setBytes.call(x, b))
			if (err != null) {
				$.panic("bigmod: internal error: bad arithmetic")
			}
		}
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).trim() : Nat.prototype.trim.call(x))
	}

	public ["set"](y: Nat | $.VarRef<Nat> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const y$: Nat = y == null ? $.pointerTarget<Nat>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Nat>(y)
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).reset($.sliceLen((y$ as Nat).limbs)) : Nat.prototype.reset.call(x, $.sliceLen((y$ as Nat).limbs)))
		$.copy($.pointerValue<Nat>(x).limbs, (y$ as Nat).limbs)
		return x
	}

	public setBytes(b: $.Slice<number>): $.GoError {
		let x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		let i = $.sliceLen(b)
		let k = 0
		while ((k < $.sliceLen((x$ as Nat).limbs)) && (i >= 8)) {
			$.sliceElems((x$ as Nat).limbs!)[$.sliceSlot((x$ as Nat).limbs!, k)] = bigEndianUint($.goSlice(b, i - 8, i))
			i = i - (8)
			k++
		}
		for (let __goscriptSliceWindow38 = $.sliceRange(b), s = 0; ((s < 64) && (k < $.sliceLen((x$ as Nat).limbs))) && (i > 0); s = s + (8)) {
			$.sliceElems((x$ as Nat).limbs!)[$.sliceSlot((x$ as Nat).limbs!, k)] = $.uint($.uint64Or($.sliceElems((x$ as Nat).limbs!)[$.sliceSlot((x$ as Nat).limbs!, k)], $.uint($.uint64Shl($.uint(((__goscriptSliceWindow38.backing as any[])[$.windowSlot(__goscriptSliceWindow38, i - 1)] as number), 64), s), 64)), 64)
			i--
		}
		if (i > 0) {
			return errors.New("input overflows the modulus size")
		}
		return null
	}

	public shiftIn(y: number, m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
		const x: Nat | $.VarRef<Nat> | null = this;
		const m$: Modulus = m == null ? $.pointerTarget<Modulus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Modulus>(m)
		let d: Nat | $.VarRef<Nat> | null = Nat.prototype.resetFor.call(NewNat(), m)

		// Eliminate bounds checks in the loop.
		let size = $.sliceLen($.pointerValue<Nat>((m$ as Modulus).nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(x).limbs, undefined, size)
		let dLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(d).limbs, undefined, size)
		let mLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>((m$ as Modulus).nat).limbs, undefined, size)

		// Each iteration of this loop computes x = 2x + b mod m, where b is a bit
		// from y. Effectively, it left-shifts x and adds y one bit at a time,
		// reducing it every time.
		//
		// To do the reduction, each iteration computes both 2x + b and 2x + b - m.
		// The next iteration (and finally the return line) will use either result
		// based on whether 2x + b overflows m.
		let needSubtraction = 0
		for (let __goscriptSliceWindow39 = $.sliceRange(xLimbs), __goscriptSliceWindow40 = $.sliceRange(dLimbs), __goscriptSliceWindow41 = $.sliceRange(mLimbs), i = 63; i >= 0; i--) {
			let carry = $.uint($.uint64And(($.uint($.uint64Shr(y, i), 64)), 1n), 64)
			let borrow: number = 0
			let mask = ctMask(needSubtraction)
			for (let __goscriptShadow0 = 0; __goscriptShadow0 < size; __goscriptShadow0++) {
				let l = $.uint($.uint64Xor(((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, __goscriptShadow0)] as number), ($.uint($.uint64And(mask, ($.uint($.uint64Xor(((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, __goscriptShadow0)] as number), ((__goscriptSliceWindow40.backing as any[])[$.windowSlot(__goscriptSliceWindow40, __goscriptShadow0)] as number)), 64))), 64))), 64)
				let __goscriptTuple9: any = bits.Add(l, l, carry);
				;(__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, __goscriptShadow0)] = __goscriptTuple9[0]
				carry = __goscriptTuple9[1]
				let __goscriptTuple10: any = bits.Sub(((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, __goscriptShadow0)] as number), ((__goscriptSliceWindow41.backing as any[])[$.windowSlot(__goscriptSliceWindow41, __goscriptShadow0)] as number), borrow);
				;(__goscriptSliceWindow40.backing as any[])[$.windowSlot(__goscriptSliceWindow40, __goscriptShadow0)] = __goscriptTuple10[0]
				borrow = __goscriptTuple10[1]
			}
			// Like in maybeSubtractModulus, we need the subtraction if either it
			// didn't underflow (meaning 2x + b > m) or if computing 2x + b
			// overflowed (meaning 2x + b > 2^_W*n > m).
			needSubtraction = $.uint($.uint64Or(not($.uint(borrow, 64)), $.uint(carry, 64)), 64)
		}
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Nat).assign(needSubtraction, d) : Nat.prototype.assign.call(x, needSubtraction, d))
	}

	public sub(y: Nat | $.VarRef<Nat> | null): number {
		const x: Nat | $.VarRef<Nat> | null = this;
		let c: number = 0
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Eliminate bounds checks in the loop.
		let size = $.sliceLen((x$ as Nat).limbs)
		let xLimbs: $.Slice<number> = $.goSlice((x$ as Nat).limbs, undefined, size)
		let yLimbs: $.Slice<number> = $.goSlice($.pointerValue<Nat>(y).limbs, undefined, size)

		for (let __goscriptSliceWindow42 = $.sliceRange(xLimbs), __goscriptSliceWindow43 = $.sliceRange(yLimbs), i = 0; i < size; i++) {
			let __goscriptTuple11: any = bits.Sub(((__goscriptSliceWindow42.backing as any[])[$.windowSlot(__goscriptSliceWindow42, i)] as number), ((__goscriptSliceWindow43.backing as any[])[$.windowSlot(__goscriptSliceWindow43, i)] as number), c);
			;(__goscriptSliceWindow42.backing as any[])[$.windowSlot(__goscriptSliceWindow42, i)] = __goscriptTuple11[0]
			c = __goscriptTuple11[1]
		}
		return c
	}

	public trim(): Nat | $.VarRef<Nat> | null {
		let x: Nat | $.VarRef<Nat> | null = this;
		const x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
		// Trim most significant (trailing in little-endian) zero limbs.
		// We assume comparison with zero (but not the branch) is constant time.
		for (let i = $.sliceLen((x$ as Nat).limbs) - 1; i >= 0; i--) {
			if ($.arrayIndex((x$ as Nat).limbs!, i) != 0) {
				break
			}
			;(x$ as Nat).limbs = $.goSlice((x$ as Nat).limbs, undefined, i)
		}
		return x
	}

	static __typeInfo = $.registerStructType(
		"bigmod.Nat",
		() => new Nat(),
		() => [$.methodSignature("Add", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("BitLenVarTime", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Bits", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))], true), $.methodSignature("Bytes", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("DivShortVarTime", [["y", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Equal", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("Exp", [["x", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["e", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("ExpShortVarTime", [["x", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["e", /* @__PURE__ */ $.basicType("uint")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("ExpandFor", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("GCDVarTime", [["a", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["b", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat"), "error"], true), $.methodSignature("InverseVarTime", [["a", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMinusOne", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("IsOdd", [], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("IsOne", [], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("Mod", [["x", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("Mul", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("SetBits", [["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat"), "error"], true), $.methodSignature("SetOverflowingBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat"), "error"], true), $.methodSignature("SetUint", [["y", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("ShiftRightByOne", [], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("ShiftRightVarTime", [["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("Sub", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("SubOne", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("TrailingZeroBitsVarTime", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("add", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [["c", /* @__PURE__ */ $.basicType("uint")]], true), $.methodSignature("assign", [["on", /* @__PURE__ */ $.basicType("uint", "bigmod.choice")], ["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("cmpGeq", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [/* @__PURE__ */ $.basicType("uint", "bigmod.choice")], true), $.methodSignature("expand", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("maybeSubtractModulus", [["always", /* @__PURE__ */ $.basicType("uint", "bigmod.choice")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [], true), $.methodSignature("montgomeryMul", [["a", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["b", /* @__PURE__ */ $.pointerType("bigmod.Nat")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("montgomeryReduction", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("montgomeryRepresentation", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("reset", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("resetFor", [["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("resetToBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("set", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("setBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("shiftIn", [["y", /* @__PURE__ */ $.basicType("uint")], ["m", /* @__PURE__ */ $.pointerType("bigmod.Modulus")]], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("sub", [["y", /* @__PURE__ */ $.pointerType("bigmod.Nat")]], [["c", /* @__PURE__ */ $.basicType("uint")]], true), $.methodSignature("trim", [], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true)],
		Nat,
		() => [/* @__PURE__ */ $.structField("limbs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")), [0], 0, false, { pkgPath: "crypto/internal/fips140/bigmod" })]
	)
}

export class Modulus {
	// The underlying natural number for this modulus.
	//
	// This will be stored without any padding, and shouldn't alias with any
	// other natural number being used.
	public get nat(): Nat | $.VarRef<Nat> | null {
		return this._fields.nat
	}

	public set nat(value: Nat | $.VarRef<Nat> | null) {
		this._fields.nat = value
	}

	// If m is even, the following fields are not set.
	public get odd(): boolean {
		return this._fields.odd
	}

	public set odd(value: boolean) {
		this._fields.odd = value
	}

	public get m0inv(): number {
		return this._fields.m0inv
	}

	public set m0inv(value: number) {
		this._fields.m0inv = value
	}

	public get rr(): Nat | $.VarRef<Nat> | null {
		return this._fields.rr
	}

	public set rr(value: Nat | $.VarRef<Nat> | null) {
		this._fields.rr = value
	}

	public _fields: {
		nat: Nat | $.VarRef<Nat> | null
		odd: boolean
		m0inv: number
		rr: Nat | $.VarRef<Nat> | null
	}

	constructor(init?: Partial<{nat?: Nat | $.VarRef<Nat> | null, odd?: boolean, m0inv?: number, rr?: Nat | $.VarRef<Nat> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			nat: init?.nat ?? (null! as Nat | $.VarRef<Nat> | null),
			odd: init?.odd ?? (false as boolean),
			m0inv: init?.m0inv ?? (0 as number),
			rr: init?.rr ?? (null! as Nat | $.VarRef<Nat> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Modulus {
		return new Modulus(this, true)
	}

	public __goscriptAssign(source: Modulus): void {
		const target = this._fields
		const values = source._fields
		target.nat = values.nat
		target.odd = values.odd
		target.m0inv = values.m0inv
		target.rr = values.rr
	}

	public BitLen(): number {
		const m: Modulus | $.VarRef<Modulus> | null = this;
		return Nat.prototype.BitLenVarTime.call($.pointerValue<Modulus>(m).nat)
	}

	public Nat(): Nat | $.VarRef<Nat> | null {
		const m: Modulus | $.VarRef<Modulus> | null = this;
		// Make a copy so that the caller can't modify m.nat or alias it with
		// another Nat in a modulus operation.
		let n: Nat | $.VarRef<Nat> | null = NewNat()
		void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as Nat)["set"]($.pointerValue<Modulus>(m).nat) : Nat.prototype.set.call(n, $.pointerValue<Modulus>(m).nat))
		return n
	}

	public Size(): number {
		const m: Modulus | $.VarRef<Modulus> | null = this;
		return globalThis.Math.trunc(((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Modulus).BitLen() : Modulus.prototype.BitLen.call(m)) + 7) / 8)
	}

	static __typeInfo = $.registerStructType(
		"bigmod.Modulus",
		() => new Modulus(),
		() => [$.methodSignature("BitLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Nat", [], [/* @__PURE__ */ $.pointerType("bigmod.Nat")], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		Modulus,
		() => [/* @__PURE__ */ $.structField("nat", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [0], 0, false, { pkgPath: "crypto/internal/fips140/bigmod" }), /* @__PURE__ */ $.structField("odd", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "crypto/internal/fips140/bigmod" }), /* @__PURE__ */ $.structField("m0inv", /* @__PURE__ */ $.basicType("uint"), [2], 16, false, { pkgPath: "crypto/internal/fips140/bigmod" }), /* @__PURE__ */ $.structField("rr", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [3], 24, false, { pkgPath: "crypto/internal/fips140/bigmod" })]
	)
}

export const _W: number = 64

export const _S: number = 8

export const yes: choice = 1

export const no: choice = 0

export const preallocTarget: number = 2048

export const preallocLimbs: number = 32

export function not(c: choice): choice {
	return $.uint($.uint64Xor(1n, c), 64)
}

export function ctMask(on: choice): number {
	return -$.uint(on, 64)
}

export function ctEq(x: number, y: number): choice {
	// If x != y, then either x - y or y - x will generate a carry.
	let [, c1] = bits.Sub(x, y, 0)
	let [, c2] = bits.Sub(y, x, 0)
	return not($.uint($.uint($.uint64Or(c1, c2), 64), 64))
}

export function NewNat(): Nat | $.VarRef<Nat> | null {
	let limbs: $.Slice<number> = $.makeSlice<number>(0, 32, "number")
	return new Nat({limbs: limbs})
}

export function bigEndianUint(buf: $.Slice<number>): number {
	if ((64 as number) == 64) {
		return $.uint(byteorder.BEUint64(buf), 64)
	}
	return $.uint(byteorder.BEUint32(buf), 64)
}

export function bitLen(n: number): number {
	let len = 0
	// We assume, here and elsewhere, that comparison to zero is constant time
	// with respect to different non-zero values.
	while (n != 0) {
		len++
		n = $.uint($.uint64Shr(n, 1), 64)
	}
	return len
}

export function rr(m: Modulus | $.VarRef<Modulus> | null): Nat | $.VarRef<Nat> | null {
	let __goscriptShadow1: Nat | $.VarRef<Nat> | null = Nat.prototype.ExpandFor.call(NewNat(), m)
	let n = $.uint($.sliceLen($.pointerValue<Nat>(__goscriptShadow1).limbs), 64)
	let mLen = $.uint((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Modulus).BitLen() : Modulus.prototype.BitLen.call(m)), 64)
	let logR = $.uint($.uint64Mul(64n, n), 64)

	// We start by computing R = 2^(_W * n) mod m. We can get pretty close, to
	// 2^⌊log₂m⌋, by setting the highest bit we can without having to reduce.
	$.sliceElems($.pointerValue<Nat>(__goscriptShadow1).limbs!)[$.sliceSlot($.pointerValue<Nat>(__goscriptShadow1).limbs!, $.uint($.uint64Sub(n, 1n), 64))] = $.uint($.uint64Shl(1n, ($.uint($.uint64Mod(($.uint($.uint64Sub(mLen, 1n), 64)), 64n), 64))), 64)
	// Then we double until we reach 2^(_W * n).
	for (let i = $.uint($.uint64Sub(mLen, 1n), 64); i < logR; i++) {
		void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as Nat).Add(__goscriptShadow1, m) : Nat.prototype.Add.call(__goscriptShadow1, __goscriptShadow1, m))
	}

	// Next we need to get from R to 2^(_W * n) R mod m (aka from one to R in
	// the Montgomery domain, meaning we can use Montgomery multiplication now).
	// We could do that by doubling _W * n times, or with a square-and-double
	// chain log2(_W * n) long. Turns out the fastest thing is to start out with
	// doublings, and switch to square-and-double once the exponent is large
	// enough to justify the cost of the multiplications.

	// The threshold is selected experimentally as a linear function of n.
	let threshold = $.uint($.uint64Div(n, 4n), 64)

	// We calculate how many of the most-significant bits of the exponent we can
	// compute before crossing the threshold, and we do it with doublings.
	let i = 64
	while (($.uint($.uint64Shr(logR, i), 64)) <= threshold) {
		i--
	}
	for (let k = 0; k < ($.uint($.uint64Shr(logR, i), 64)); k++) {
		void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as Nat).Add(__goscriptShadow1, m) : Nat.prototype.Add.call(__goscriptShadow1, __goscriptShadow1, m))
	}

	// Then we process the remaining bits of the exponent with a
	// square-and-double chain.
	while (i > 0) {
		void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as Nat).montgomeryMul(__goscriptShadow1, __goscriptShadow1, m) : Nat.prototype.montgomeryMul.call(__goscriptShadow1, __goscriptShadow1, __goscriptShadow1, m))
		i--
		if (($.uint($.uint64And(($.uint($.uint64Shr(logR, i), 64)), 1n), 64)) != 0) {
			void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as Nat).Add(__goscriptShadow1, m) : Nat.prototype.Add.call(__goscriptShadow1, __goscriptShadow1, m))
		}
	}

	return __goscriptShadow1
}

export function minusInverseModW(x: number): number {
	// Every iteration of this loop doubles the least-significant bits of
	// correct inverse in y. The first three bits are already correct (1⁻¹ = 1,
	// 3⁻¹ = 3, 5⁻¹ = 5, and 7⁻¹ = 7 mod 8), so doubling five times is enough
	// for 64 bits (and wastes only one iteration for 32 bits).
	//
	// See https://crypto.stackexchange.com/a/47496.
	let y = x
	for (let i = 0; i < 5; i++) {
		y = $.uint($.uint64Mul(y, ($.uint($.uint64Sub(2n, ($.uint($.uint64Mul(x, y), 64))), 64))), 64)
	}
	return -y
}

export function NewModulus(b: $.Slice<number>): [Modulus | $.VarRef<Modulus> | null, $.GoError] {
	let n: Nat | $.VarRef<Nat> | null = Nat.prototype.resetToBytes.call(NewNat(), b)
	return newModulus(n)
}

export function NewModulusProduct(a: $.Slice<number>, b: $.Slice<number>): [Modulus | $.VarRef<Modulus> | null, $.GoError] {
	let x: Nat | $.VarRef<Nat> | null = Nat.prototype.resetToBytes.call(NewNat(), a)
	let x$: Nat = x == null ? $.pointerTarget<Nat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Nat>(x)
	let y: Nat | $.VarRef<Nat> | null = Nat.prototype.resetToBytes.call(NewNat(), b)
	let y$: Nat = y == null ? $.pointerTarget<Nat>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Nat>(y)
	let n: Nat | $.VarRef<Nat> | null = Nat.prototype.reset.call(NewNat(), $.sliceLen((x$ as Nat).limbs) + $.sliceLen((y$ as Nat).limbs))
	let n$: Nat = n == null ? $.pointerTarget<Nat>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Nat>(n)
	for (let __goscriptRangeTarget6 = (y$ as Nat).limbs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
		$.sliceElems((n$ as Nat).limbs!)[$.sliceSlot((n$ as Nat).limbs!, i + $.sliceLen((x$ as Nat).limbs))] = addMulVVW($.goSlice((n$ as Nat).limbs, i, i + $.sliceLen((x$ as Nat).limbs)), (x$ as Nat).limbs, $.arrayIndex((y$ as Nat).limbs!, i))
	}
	return newModulus((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as Nat).trim() : Nat.prototype.trim.call(n)))
}

export function newModulus(n: Nat | $.VarRef<Nat> | null): [Modulus | $.VarRef<Modulus> | null, $.GoError] {
	let m: Modulus | $.VarRef<Modulus> | null = new Modulus({nat: n})
	let m$: Modulus = m == null ? $.pointerTarget<Modulus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Modulus>(m)
	if ((Nat.prototype.IsZero.call((m$ as Modulus).nat) == 1) || (Nat.prototype.IsOne.call((m$ as Modulus).nat) == 1)) {
		return [null, errors.New("modulus must be > 1")]
	}
	if (Nat.prototype.IsOdd.call((m$ as Modulus).nat) == 1) {
		;(m$ as Modulus).odd = true;
		;(m$ as Modulus).m0inv = minusInverseModW($.arrayIndex($.pointerValue<Nat>((m$ as Modulus).nat).limbs!, 0));
		;(m$ as Modulus).rr = rr(m)
	}
	return [m, null]
}

export function addMulVVW(z: $.Slice<number>, x: $.Slice<number>, y: number): number {
	let carry: number = 0
	$.arrayIndex(x!, $.sliceLen(z) - 1)
	for (let __goscriptRangeTarget7 = z, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow44 = $.sliceRange(x), i = 0; i < __goscriptRangeWindow7.length; i++) {
		let [hi, lo] = bits.Mul(((__goscriptSliceWindow44.backing as any[])[$.windowSlot(__goscriptSliceWindow44, i)] as number), y)
		let __goscriptTuple12: any = bits.Add(lo, ((__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] as number), 0)
		lo = __goscriptTuple12[0]
		let c = __goscriptTuple12[1]
		// We use bits.Add with zero to get an add-with-carry instruction that
		// absorbs the carry from the previous bits.Add.
		let __goscriptTuple13: any = bits.Add(hi, 0, c)
		hi = __goscriptTuple13[0]
		let __goscriptTuple14: any = bits.Add(lo, carry, 0)
		lo = __goscriptTuple14[0]
		c = __goscriptTuple14[1]
		let __goscriptTuple15: any = bits.Add(hi, 0, c)
		hi = __goscriptTuple15[0]
		carry = hi;
		;(__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] = lo
	}
	return carry
}

export function extendedGCD(a: Nat | $.VarRef<Nat> | null, m: Nat | $.VarRef<Nat> | null): [Nat | $.VarRef<Nat> | null, Nat | $.VarRef<Nat> | null, $.GoError] {
	let u: Nat | $.VarRef<Nat> | null = null! as Nat | $.VarRef<Nat> | null
	let A: Nat | $.VarRef<Nat> | null = null! as Nat | $.VarRef<Nat> | null
	let err: $.GoError = null! as $.GoError
	// This is the extended binary GCD algorithm described in the Handbook of
	// Applied Cryptography, Algorithm 14.61, adapted by BoringSSL to bound
	// coefficients and avoid negative numbers. For more details and proof of
	// correctness, see https://github.com/mit-plv/fiat-crypto/pull/333/files.
	//
	// Following the proof linked in the PR above, the changes are:
	//
	// 1. Negate [B] and [C] so they are positive. The invariant now involves a
	//    subtraction.
	// 2. If step 2 (both [x] and [y] are even) runs, abort immediately. This
	//    case needs to be handled by the caller.
	// 3. Subtract copies of [x] and [y] as needed in step 6 (both [u] and [v]
	//    are odd) so coefficients stay in bounds.
	// 4. Replace the [u >= v] check with [u > v]. This changes the end
	//    condition to [v = 0] rather than [u = 0]. This saves an extra
	//    subtraction due to which coefficients were negated.
	// 5. Rename x and y to a and n, to capture that one is a modulus.
	// 6. Rearrange steps 4 through 6 slightly. Merge the loops in steps 4 and
	//    5 into the main loop (step 7's goto), and move step 6 to the start of
	//    the loop iteration, ensuring each loop iteration halves at least one
	//    value.
	//
	// Note this algorithm does not handle either input being zero.

	if (((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Nat).IsZero() : Nat.prototype.IsZero.call(a)) == 1) || ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Nat).IsZero() : Nat.prototype.IsZero.call(m)) == 1)) {
		return [null, null, errors.New("extendedGCD: a or m is zero")]
	}
	if (((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(a)) == 0) && ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(m)) == 0)) {
		return [null, null, errors.New("extendedGCD: both a and m are even")]
	}

	let size = $.max($.sliceLen($.pointerValue<Nat>(a).limbs), $.sliceLen($.pointerValue<Nat>(m).limbs))
	u = Nat.prototype.expand.call(Nat.prototype.set.call(NewNat(), a), size)
	let v: Nat | $.VarRef<Nat> | null = Nat.prototype.expand.call(Nat.prototype.set.call(NewNat(), m), size)

	A = Nat.prototype.reset.call(NewNat(), $.sliceLen($.pointerValue<Nat>(m).limbs))
	$.sliceElems($.pointerValue<Nat>(A).limbs!)[$.sliceSlot($.pointerValue<Nat>(A).limbs!, 0)] = 1
	let B: Nat | $.VarRef<Nat> | null = Nat.prototype.reset.call(NewNat(), $.sliceLen($.pointerValue<Nat>(a).limbs))
	let C: Nat | $.VarRef<Nat> | null = Nat.prototype.reset.call(NewNat(), $.sliceLen($.pointerValue<Nat>(m).limbs))
	let D: Nat | $.VarRef<Nat> | null = Nat.prototype.reset.call(NewNat(), $.sliceLen($.pointerValue<Nat>(a).limbs))
	$.sliceElems($.pointerValue<Nat>(D).limbs!)[$.sliceSlot($.pointerValue<Nat>(D).limbs!, 0)] = 1

	// Before and after each loop iteration, the following hold:
	//
	//   u = A*a - B*m
	//   v = D*m - C*a
	//   0 < u <= a
	//   0 <= v <= m
	//   0 <= A < m
	//   0 <= B <= a
	//   0 <= C < m
	//   0 <= D <= a
	//
	// After each loop iteration, u and v only get smaller, and at least one of
	// them shrinks by at least a factor of two.
	while (true) {
		// If both u and v are odd, subtract the smaller from the larger.
		// If u = v, we need to subtract from v to hit the modified exit condition.
		if (((u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(u)) == 1) && ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(v)) == 1)) {
			if ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Nat).cmpGeq(u) : Nat.prototype.cmpGeq.call(v, u)) == 0) {
				void (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Nat).sub(v) : Nat.prototype.sub.call(u, v))
				void (A !== null && (A as any).__isVarRef !== true && (A as any).__goValue === undefined ? ((A as any) as Nat).Add(C, new Modulus({nat: m})) : Nat.prototype.Add.call(A, C, new Modulus({nat: m})))
				void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as Nat).Add(D, new Modulus({nat: a})) : Nat.prototype.Add.call(B, D, new Modulus({nat: a})))
			} else {
				void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Nat).sub(u) : Nat.prototype.sub.call(v, u))
				void (C !== null && (C as any).__isVarRef !== true && (C as any).__goValue === undefined ? ((C as any) as Nat).Add(A, new Modulus({nat: m})) : Nat.prototype.Add.call(C, A, new Modulus({nat: m})))
				void (D !== null && (D as any).__isVarRef !== true && (D as any).__goValue === undefined ? ((D as any) as Nat).Add(B, new Modulus({nat: a})) : Nat.prototype.Add.call(D, B, new Modulus({nat: a})))
			}
		}

		// Exactly one of u and v is now even.
		if ((u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(u)) == (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(v))) {
			$.panic("bigmod: internal error: u and v are not in the expected state")
		}

		// Halve the even one and adjust the corresponding coefficient.
		if ((u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(u)) == 0) {
			rshift1(u, 0)
			if (((A !== null && (A as any).__isVarRef !== true && (A as any).__goValue === undefined ? ((A as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(A)) == 1) || ((B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(B)) == 1)) {
				rshift1(A, (A !== null && (A as any).__isVarRef !== true && (A as any).__goValue === undefined ? ((A as any) as Nat).add(m) : Nat.prototype.add.call(A, m)))
				rshift1(B, (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as Nat).add(a) : Nat.prototype.add.call(B, a)))
			} else {
				rshift1(A, 0)
				rshift1(B, 0)
			}
		} else {
			rshift1(v, 0)
			if (((C !== null && (C as any).__isVarRef !== true && (C as any).__goValue === undefined ? ((C as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(C)) == 1) || ((D !== null && (D as any).__isVarRef !== true && (D as any).__goValue === undefined ? ((D as any) as Nat).IsOdd() : Nat.prototype.IsOdd.call(D)) == 1)) {
				rshift1(C, (C !== null && (C as any).__isVarRef !== true && (C as any).__goValue === undefined ? ((C as any) as Nat).add(m) : Nat.prototype.add.call(C, m)))
				rshift1(D, (D !== null && (D as any).__isVarRef !== true && (D as any).__goValue === undefined ? ((D as any) as Nat).add(a) : Nat.prototype.add.call(D, a)))
			} else {
				rshift1(C, 0)
				rshift1(D, 0)
			}
		}

		if ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Nat).IsZero() : Nat.prototype.IsZero.call(v)) == 1) {
			return [u, A, null]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function rshift1(a: Nat | $.VarRef<Nat> | null, carry: number): void {
	const a$: Nat = a == null ? $.pointerTarget<Nat>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Nat>(a)
	let size = $.sliceLen((a$ as Nat).limbs)
	let aLimbs: $.Slice<number> = $.goSlice((a$ as Nat).limbs, undefined, size)

	for (let __goscriptSliceWindow45 = $.sliceRange(aLimbs), __goscriptRangeCount0 = size, i = 0; i < __goscriptRangeCount0; i++) {
		;(__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)] = $.uint($.uint64Shr((__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)], 1), 64)
		if ((i + 1) < size) {
			;(__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)] = $.uint($.uint64Or((__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)], $.uint($.uint64Mul(((__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i + 1)] as number), (2 ** 63)), 64)), 64)
		} else {
			;(__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)] = $.uint($.uint64Or((__goscriptSliceWindow45.backing as any[])[$.windowSlot(__goscriptSliceWindow45, i)], $.uint($.uint64Mul(carry, (2 ** 63)), 64)), 64)
		}
	}
}
