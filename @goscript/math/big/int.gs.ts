// Generated file based on int.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as strings from "@goscript/strings/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as math from "@goscript/math/index.js"

import * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_float from "./float.gs.ts"

import * as __goscript_floatconv from "./floatconv.gs.ts"

import * as __goscript_floatmarsh from "./floatmarsh.gs.ts"

import * as __goscript_ftoa from "./ftoa.gs.ts"

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
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strings/index.js"
import "@goscript/errors/index.js"
import "@goscript/bytes/index.js"
import "@goscript/math/index.js"
import "./accuracy_string.gs.ts"
import "./arith.gs.ts"
import "./float.gs.ts"
import "./floatconv.gs.ts"
import "./floatmarsh.gs.ts"
import "./ftoa.gs.ts"
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

$.registerTypePackagePath("math/big", ["big.Int"])

export class Int {
	public get neg(): boolean {
		return this._fields.neg
	}

	public set neg(value: boolean) {
		this._fields.neg = value
	}

	public get abs(): __goscript_nat.nat {
		return this._fields.abs
	}

	public set abs(value: __goscript_nat.nat) {
		this._fields.abs = value
	}

	public _fields: {
		neg: boolean
		abs: __goscript_nat.nat
	}

	constructor(init?: Partial<{neg?: boolean, abs?: __goscript_nat.nat}>, __goscriptValue?: boolean) {
		this._fields = {
			neg: init?.neg ?? (false as boolean),
			abs: init?.abs ?? (null! as __goscript_nat.nat)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int {
		return new Int(this, true)
	}

	public __goscriptAssign(source: Int): void {
		const target = this._fields
		const values = source._fields
		target.neg = values.neg
		target.abs = values.abs
	}

	public Abs(x: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(x) : Int.prototype.Set.call(z, x))
		$.pointerValue<Int>(z).neg = false
		return z
	}

	public Add(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let neg = $.pointerValue<Int>(x).neg
		if ($.pointerValue<Int>(x).neg == $.pointerValue<Int>(y).neg) {
			// x + y == x + y
			// (-x) + (-y) == -(x + y)
			;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat)
		} else {
			// x + (-y) == x - y == -(y - x)
			// (-x) + y == y - x == -(x - y)
			if (__goscript_nat.nat_cmp($.pointerValue<Int>(x).abs, ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) >= 0) {
				;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat)
			} else {
				neg = !neg;
				;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, ($.pointerValue<Int>(y).abs as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat)) as __goscript_nat.nat)
			}
		}
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && neg
		return z
	}

	public And(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		if ($.pointerValue<Int>(x).neg == $.pointerValue<Int>(y).neg) {
			if ($.pointerValue<Int>(x).neg) {
				// (-x) & (-y) == ^(x-1) & ^(y-1) == ^((x-1) | (y-1)) == -(((x-1) | (y-1)) + 1)
				let x1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
				let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, (__goscript_nat.nat_or((z$ as Int).abs, (x1 as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).neg = true
				return z
			}

			// x & y == x & y
			;(z$ as Int).abs = (__goscript_nat.nat_and((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return z
		}

		// x.neg != y.neg
		if ($.pointerValue<Int>(x).neg) {
			let __goscriptAssign0_0: Int | $.VarRef<Int> | null = y
			let __goscriptAssign0_1: Int | $.VarRef<Int> | null = x
			x = __goscriptAssign0_0
			y = __goscriptAssign0_1
		}

		// x & (-y) == x & ^(y-1) == x &^ (y-1)
		let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).abs = (__goscript_nat.nat_andNot((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public AndNot(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		if ($.pointerValue<Int>(x).neg == $.pointerValue<Int>(y).neg) {
			if ($.pointerValue<Int>(x).neg) {
				// (-x) &^ (-y) == ^(x-1) &^ ^(y-1) == ^(x-1) & (y-1) == (y-1) &^ (x-1)
				let x1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
				let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).abs = (__goscript_nat.nat_andNot((z$ as Int).abs, (y1 as __goscript_nat.nat), (x1 as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).neg = false
				return z
			}

			// x &^ y == x &^ y
			;(z$ as Int).abs = (__goscript_nat.nat_andNot((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return z
		}

		if ($.pointerValue<Int>(x).neg) {
			// (-x) &^ y == ^(x-1) &^ y == ^(x-1) & ^y == ^((x-1) | y) == -(((x-1) | y) + 1)
			let x1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, (__goscript_nat.nat_or((z$ as Int).abs, (x1 as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = true
			return z
		}

		// x &^ (-y) == x &^ ^(y-1) == x & (y-1)
		let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).abs = (__goscript_nat.nat_and((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public async Append(buf: $.Slice<number>, base: number): globalThis.Promise<$.Slice<number>> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (x == null) {
			return $.appendSlice(buf, $.stringToBytes("<nil>"), $.byteSliceHint)
		}
		return $.appendSlice(buf, await __goscript_natconv.nat_itoa((x$ as Int).abs, (x$ as Int).neg, base), $.byteSliceHint)
	}

	public async AppendText(b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Int | $.VarRef<Int> | null = this;
		let text: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return [await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).Append(b, 10) : Int.prototype.Append.call(x, b, 10)), null]
	}

	public async Binomial(n: bigint, k: bigint): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		if ((k > n) || (k < 0n)) {
			return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).SetInt64(0n) : Int.prototype.SetInt64.call(z, 0n))
		}
		// reduce the number of multiplications by reducing k
		if (k > ($.int64Sub(n, k))) {
			k = $.int64Sub(n, k)
		}
		// C(n, k) == n * (n-1) * ... * (n-k+1) / k * (k-1) * ... * 1
		//         == n * (n-1) * ... * (n-k+1) / 1 * (1+1) * ... * k
		//
		// Using the multiplicative formula produces smaller values
		// at each step, requiring fewer allocations and computations:
		//
		// z = 1
		// for i := 0; i < k; i = i+1 {
		//     z *= n-i
		//     z /= i+1
		// }
		//
		// finally to avoid computing i+1 twice per loop:
		//
		// z = 1
		// i := 0
		// for i < k {
		//     z *= n-i
		//     i++
		//     z /= i
		// }
		let N: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let K: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let i: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let t: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		N.value.SetInt64(n)
		K.value.SetInt64(k)
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(__goscript_get_intOne()) : Int.prototype.Set.call(z, __goscript_get_intOne()))
		while (i.value.Cmp(K) < 0) {
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Mul(z, t.value.Sub(N, i)) : Int.prototype.Mul.call(z, z, t.value.Sub(N, i)))
			i.value.Add(i, __goscript_get_intOne())
			await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Quo(z, i) : Int.prototype.Quo.call(z, z, i))
		}
		return z
	}

	public Bit(i: number): number {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (i == 0) {
			// optimization for common case: odd/even test of x
			if ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) > 0) {
				return $.uint($.uint($.uint64And($.arrayIndex((x$ as Int).abs!, 0), 1n), 64), 64)
			}
			return 0
		}
		if (i < 0) {
			$.panic("negative bit index")
		}
		if ((x$ as Int).neg) {
			let t: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ((x$ as Int).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
			return $.uint($.uint64Xor(__goscript_nat.nat_bit(t, $.uint(i, 64)), 1n), 64)
		}

		return __goscript_nat.nat_bit((x$ as Int).abs, $.uint(i, 64))
	}

	public BitLen(): number {
		const x: Int | $.VarRef<Int> | null = this;
		// This function is used in cryptographic operations. It must not leak
		// anything but the Int's sign and bit size through side-channels. Any
		// changes must be reviewed by a security expert.
		return __goscript_nat.nat_bitLen($.pointerValue<Int>(x).abs)
	}

	public Bits(): $.Slice<__goscript_arith.Word> {
		const x: Int | $.VarRef<Int> | null = this;
		// This function is used in cryptographic operations. It must not leak
		// anything but the Int's sign and bit size through side-channels. Any
		// changes must be reviewed by a security expert.
		return $.pointerValue<Int>(x).abs
	}

	public Bytes(): $.Slice<number> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		// This function is used in cryptographic operations. It must not leak
		// anything but the Int's sign and bit size through side-channels. Any
		// changes must be reviewed by a security expert.
		let buf: $.Slice<number> = $.makeSlice<number>($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) * 8, undefined, "byte")
		return $.goSlice(buf, __goscript_nat.nat_bytes((x$ as Int).abs, buf), undefined)
	}

	public Cmp(y: Int | $.VarRef<Int> | null): number {
		const x: Int | $.VarRef<Int> | null = this;
		let r: number = 0
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		const y$: Int = y == null ? $.pointerTarget<Int>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Int>(y)
		// x cmp y == x cmp y
		// x cmp (-y) == x
		// (-x) cmp y == y
		// (-x) cmp (-y) == -(x cmp y)
		switch ((true as boolean)) {
			case $.pointerEqual(x, y):
			{
				break
			}
			case (x$ as Int).neg == (y$ as Int).neg:
			{
				r = __goscript_nat.nat_cmp((x$ as Int).abs, ((y$ as Int).abs as __goscript_nat.nat))
				if ((x$ as Int).neg) {
					r = -r
				}
				break
			}
			case (x$ as Int).neg:
			{
				r = -1
				break
			}
			default:
			{
				r = 1
				break
			}
		}
		return r
	}

	public CmpAbs(y: Int | $.VarRef<Int> | null): number {
		const x: Int | $.VarRef<Int> | null = this;
		return __goscript_nat.nat_cmp($.pointerValue<Int>(x).abs, ($.pointerValue<Int>(y).abs as __goscript_nat.nat))
	}

	public async Div(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		let y_neg = $.pointerValue<Int>(y).neg
		let r: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).QuoRem(x, y, r) : Int.prototype.QuoRem.call(z, x, y, r))
		if (r.value.neg) {
			if (y_neg) {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Add(z, __goscript_get_intOne()) : Int.prototype.Add.call(z, z, __goscript_get_intOne()))
			} else {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Sub(z, __goscript_get_intOne()) : Int.prototype.Sub.call(z, z, __goscript_get_intOne()))
			}
		}
		return z
	}

	public async DivMod(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, m: Int | $.VarRef<Int> | null): globalThis.Promise<[Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null]> {
		const z: Int | $.VarRef<Int> | null = this;
		let y0: Int | $.VarRef<Int> | null = y
		if (($.pointerEqual(z, y)) || __goscript_nat.alias(($.pointerValue<Int>(z).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat))) {
			y0 = Int.prototype.Set.call(new Int(), y)
		}
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).QuoRem(x, y, m) : Int.prototype.QuoRem.call(z, x, y, m))
		if ($.pointerValue<Int>(m).neg) {
			if ($.pointerValue<Int>(y0).neg) {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Add(z, __goscript_get_intOne()) : Int.prototype.Add.call(z, z, __goscript_get_intOne()))
				void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int).Sub(m, y0) : Int.prototype.Sub.call(m, m, y0))
			} else {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Sub(z, __goscript_get_intOne()) : Int.prototype.Sub.call(z, z, __goscript_get_intOne()))
				void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int).Add(m, y0) : Int.prototype.Add.call(m, m, y0))
			}
		}
		return [z, m]
	}

	public async Divide(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, r: Int | $.VarRef<Int> | null, mode: __goscript_float.RoundingMode): globalThis.Promise<[Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null]> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		// TODO: optimize the code where z or r is nil
		let z_abs: __goscript_nat.nat = null! as __goscript_nat.nat
		if (z != null) {
			z_abs = ((z$ as Int).abs as __goscript_nat.nat)
		}
		let r_neg: boolean = false
		let r_abs: __goscript_nat.nat = null! as __goscript_nat.nat
		if (r != null) {
			r_abs = ($.pointerValue<Int>(r).abs as __goscript_nat.nat)
		}
		let y_abs: __goscript_nat.nat = ($.pointerValue<Int>(y).abs as __goscript_nat.nat)
		if (($.pointerEqual(z, y)) || __goscript_nat.alias((z_abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat))) {
			y_abs = (__goscript_nat.nat__set((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat)
		}
		let neg = $.pointerValue<Int>(x).neg != $.pointerValue<Int>(y).neg
		let __goscriptTuple0: any = await __goscript_natdiv.nat_div(z_abs, null, (r_abs as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat))
		z_abs = (__goscriptTuple0[0] as __goscript_nat.nat)
		r_abs = (__goscriptTuple0[1] as __goscript_nat.nat)
		if ($.sliceLen((r_abs as __goscript_nat.nat)) > 0) {
			switch (mode) {
				case 2:
				{
					r_neg = $.pointerValue<Int>(x).neg
					break
				}
				case 4:
				{
					r_neg = $.pointerValue<Int>(y).neg
					if (neg) {
						z_abs = (__goscript_nat.nat_add(z_abs, (z_abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
						r_abs = (__goscript_nat.nat_sub(r_abs, (y_abs as __goscript_nat.nat), (r_abs as __goscript_nat.nat)) as __goscript_nat.nat)
					}
					break
				}
				case 5:
				{
					r_neg = !$.pointerValue<Int>(y).neg
					if (!neg) {
						z_abs = (__goscript_nat.nat_add(z_abs, (z_abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
						r_abs = (__goscript_nat.nat_sub(r_abs, (y_abs as __goscript_nat.nat), (r_abs as __goscript_nat.nat)) as __goscript_nat.nat)
					}
					break
				}
				case 0:
				{
					switch (__goscript_nat.nat_cmp((await __goscript_natmul.nat_mul((null as __goscript_nat.nat), null, (r_abs as __goscript_nat.nat), (__goscript_nat.natTwo as __goscript_nat.nat))), (y_abs as __goscript_nat.nat))) {
						case -1:
						{
							r_neg = $.pointerValue<Int>(x).neg
							break
						}
						case 0:
						{
							let even = ($.sliceLen((z_abs as __goscript_nat.nat)) == 0) || (($.uint($.uint64And($.arrayIndex(z_abs!, 0), 1n), 64)) == 0)
							if (even) {
								r_neg = $.pointerValue<Int>(x).neg
								break
							}
						}
						case 1:
						{
							r_neg = !$.pointerValue<Int>(x).neg
							z_abs = (__goscript_nat.nat_add(z_abs, (z_abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
							r_abs = (__goscript_nat.nat_sub(r_abs, (y_abs as __goscript_nat.nat), (r_abs as __goscript_nat.nat)) as __goscript_nat.nat)
							break
						}
					}
					break
				}
				default:
				{
					$.panic("unsupported rounding mode")
					break
				}
			}
		}
		if (z != null) {
			;(z$ as Int).abs = (z_abs as __goscript_nat.nat);
			;(z$ as Int).neg = neg && ($.sliceLen((z_abs as __goscript_nat.nat)) > 0)
		}
		if (r != null) {
			$.pointerValue<Int>(r).abs = (r_abs as __goscript_nat.nat)
			$.pointerValue<Int>(r).neg = r_neg
		}
		return [z, r]
	}

	public async Exp(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, m: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).exp(x, y, m, false) : Int.prototype.exp.call(z, x, y, m, false))
	}

	public FillBytes(buf: $.Slice<number>): $.Slice<number> {
		const x: Int | $.VarRef<Int> | null = this;
		// Clear whole buffer.
		$.clear(buf)
		__goscript_nat.nat_bytes($.pointerValue<Int>(x).abs, buf)
		return buf
	}

	public async Float64(): globalThis.Promise<[number, __goscript_float.Accuracy]> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		let n = __goscript_nat.nat_bitLen((x$ as Int).abs)
		if (n == 0) {
			return [0.0, 0]
		}

		// Fast path: no more than 53 significant bits.
		if ((n <= 53) || ((n < 64) && ((n - $.int(__goscript_nat.nat_trailingZeroBits((x$ as Int).abs))) <= 53))) {
			let f = globalThis.Number(low64(((x$ as Int).abs as __goscript_nat.nat)))
			if ((x$ as Int).neg) {
				f = -f
			}
			return [f, 0]
		}

		return __goscript_float.Float.prototype.Float64.call(await __goscript_float.Float.prototype.SetInt.call(new __goscript_float.Float(), x))
	}

	public async Format(s: fmt.State | null, ch: number): globalThis.Promise<void> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)

		let base: number = 0
		switch (ch) {
			case 98:
			{
				base = 2
				break
			}
			case 111:
			case 79:
			{
				base = 8
				break
			}
			case 100:
			case 115:
			case 118:
			{
				base = 10
				break
			}
			case 120:
			case 88:
			{
				base = 16
				break
			}
			default:
			{
				await fmt.Fprintf($.pointerValueOrNil((s as io.Writer | null))!, "%%!%c(big.Int=%s)", $.basicInterfaceValue(ch, "rune", "int32"), await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).String() : Int.prototype.String.call(x)))
				return
				break
			}
		}

		if (x == null) {
			await fmt.Fprint($.pointerValueOrNil((s as io.Writer | null))!, "<nil>")
			return
		}

		let sign = ""
		switch ((true as boolean)) {
			case (x$ as Int).neg:
			{
				sign = "-"
				break
			}
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				sign = "+"
				break
			}
			case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				sign = " "
				break
			}
		}

		let prefix = ""
		if ((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			switch (ch) {
				case 98:
				{
					prefix = "0b"
					break
				}
				case 111:
				{
					prefix = "0"
					break
				}
				case 120:
				{
					prefix = "0x"
					break
				}
				case 88:
				{
					prefix = "0X"
					break
				}
			}
		}
		if (ch == 79) {
			prefix = "0o"
		}

		let digits: $.Slice<number> = await __goscript_natconv.nat_utoa((x$ as Int).abs, base)
		if (ch == 88) {

			for (let __goscriptRangeTarget0 = digits, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let d = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
				if ((97 <= d) && (d <= 122)) {
					$.sliceElems(digits!)[$.sliceSlot(digits!, i)] = $.uint(((65 + (((d - 97) & 0xff))) & 0xff), 8)
				}
			}
		}

		let left: number = 0
		let zeros: number = 0
		let right: number = 0

		let [precision, precisionSet] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Precision()
		if (precisionSet) {
			switch ((true as boolean)) {
				case $.sliceLen(digits) < precision:
				{
					zeros = precision - $.sliceLen(digits)
					break
				}
				case (($.sliceLen(digits) == 1) && ($.arrayIndex(digits!, 0) == 48)) && (precision == 0):
				{
					return
					break
				}
			}
		}

		let length = (($.stringLen(sign) + $.stringLen(prefix)) + zeros) + $.sliceLen(digits)
		{
			let [width, widthSet] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Width()
			if (widthSet && (length < width)) {
				{
					let d = width - length
					switch ((true as boolean)) {
						case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(45), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
						{
							right = d
							break
						}
						case (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(48), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !precisionSet:
						{
							zeros = d
							break
						}
						default:
						{
							left = d
							break
						}
					}
				}
			}
		}

		await __goscript_intconv.writeMultiple(s, " ", left)
		await __goscript_intconv.writeMultiple(s, sign, 1)
		await __goscript_intconv.writeMultiple(s, prefix, 1)
		await __goscript_intconv.writeMultiple(s, "0", zeros)
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Write(digits)
		await __goscript_intconv.writeMultiple(s, " ", right)
	}

	public async GCD(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, a: Int | $.VarRef<Int> | null, b: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		if (($.sliceLen(($.pointerValue<Int>(a).abs as __goscript_nat.nat)) == 0) || ($.sliceLen(($.pointerValue<Int>(b).abs as __goscript_nat.nat)) == 0)) {
			let lenA = $.sliceLen(($.pointerValue<Int>(a).abs as __goscript_nat.nat))
			let lenB = $.sliceLen(($.pointerValue<Int>(b).abs as __goscript_nat.nat))
			let negA = $.pointerValue<Int>(a).neg
			let negB = $.pointerValue<Int>(b).neg
			if (lenA == 0) {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(b) : Int.prototype.Set.call(z, b))
			} else {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(a) : Int.prototype.Set.call(z, a))
			}
			$.pointerValue<Int>(z).neg = false
			if (x != null) {
				if (lenA == 0) {
					void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).SetUint64(0n) : Int.prototype.SetUint64.call(x, 0n))
				} else {
					void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).SetUint64(1n) : Int.prototype.SetUint64.call(x, 1n))
					$.pointerValue<Int>(x).neg = negA
				}
			}
			if (y != null) {
				if (lenB == 0) {
					void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).SetUint64(0n) : Int.prototype.SetUint64.call(y, 0n))
				} else {
					void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).SetUint64(1n) : Int.prototype.SetUint64.call(y, 1n))
					$.pointerValue<Int>(y).neg = negB
				}
			}
			return z
		}

		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).lehmerGCD(x, y, a, b) : Int.prototype.lehmerGCD.call(z, x, y, a, b))
	}

	public GobDecode(buf: $.Slice<number>): $.GoError {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		if ($.sliceLen(buf) == 0) {
			// absolute value of the integer
			$.assignStruct((z$ as Int), new Int(undefined, true))
			return null
		}
		let b = $.arrayIndex(buf!, 0)
		if ($.uint(($.uintShr(b, 1, 8)), 8) != 1) {
			return fmt.Errorf("Int.GobDecode: encoding version %d not supported", $.basicInterfaceValue($.uintShr(b, 1, 8), "byte", "uint8"))
		}
		;(z$ as Int).neg = $.uint((b & 1), 8) != 0;
		;(z$ as Int).abs = (__goscript_nat.nat_setBytes((z$ as Int).abs, $.goSlice(buf, 1, undefined)) as __goscript_nat.nat)
		return null
	}

	public GobEncode(): [$.Slice<number>, $.GoError] {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (x == null) {
			return [null, null]
		}
		let buf: $.Slice<number> = $.makeSlice<number>(1 + ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) * 8), undefined, "byte")
		let i = __goscript_nat.nat_bytes((x$ as Int).abs, buf) - 1
		let b = 2
		if ((x$ as Int).neg) {
			b = b | (1)
		}
		$.sliceElems(buf!)[$.sliceSlot(buf!, i)] = b
		return [$.goSlice(buf, i, undefined), null]
	}

	public Int64(): bigint {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		let v = $.int64(low64(((x$ as Int).abs as __goscript_nat.nat)))
		if ((x$ as Int).neg) {
			v = -v
		}
		return v
	}

	public IsInt64(): boolean {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) <= 1) {
			let w = $.int64(low64(((x$ as Int).abs as __goscript_nat.nat)))
			return (w >= 0n) || ((x$ as Int).neg && (w == -w))
		}
		return false
	}

	public IsUint64(): boolean {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		return !(x$ as Int).neg && ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) <= 1)
	}

	public Lsh(x: Int | $.VarRef<Int> | null, n: number): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x);
		;(z$ as Int).abs = (__goscript_nat.nat_lsh((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), n) as __goscript_nat.nat);
		;(z$ as Int).neg = (x$ as Int).neg
		return z
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (x == null) {
			return [new Uint8Array([110, 117, 108, 108]), null]
		}
		return [await __goscript_natconv.nat_itoa((x$ as Int).abs, (x$ as Int).neg, 10), null]
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Int | $.VarRef<Int> | null = this;
		let text: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).AppendText(null) : Int.prototype.AppendText.call(x, null))
	}

	public async Mod(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let y0: Int | $.VarRef<Int> | null = y
		if (($.pointerEqual(z, y)) || __goscript_nat.alias(((z$ as Int).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat))) {
			y0 = Int.prototype.Set.call(new Int(), y)
		}
		let q: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		await q.value.QuoRem(x, y, z)
		if ((z$ as Int).neg) {
			if ($.pointerValue<Int>(y0).neg) {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Sub(z, y0) : Int.prototype.Sub.call(z, z, y0))
			} else {
				void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Add(z, y0) : Int.prototype.Add.call(z, z, y0))
			}
		}
		return z
	}

	public async ModInverse(g: Int | $.VarRef<Int> | null, n: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		// GCD expects parameters a and b to be > 0.
		if ($.pointerValue<Int>(n).neg) {
			let n2: $.VarRef<Int> = $.varRef(new Int(undefined, true))
			n = n2.value.Neg(n)
		}
		if ($.pointerValue<Int>(g).neg) {
			let g2: $.VarRef<Int> = $.varRef(new Int(undefined, true))
			g = await g2.value.Mod(g, n)
		}
		let d: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let x: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		await d.value.GCD(x, null, g, n)

		// if and only if d==1, g and n are relatively prime
		if (d.value.Cmp(__goscript_get_intOne()) != 0) {
			return null
		}

		// x and y are such that g*x + n*y = 1, therefore x is the inverse element,
		// but it may be negative, so convert to the range 0 <= z < |n|
		if (x.value.neg) {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Add(x, n) : Int.prototype.Add.call(z, x, n))
		} else {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(x) : Int.prototype.Set.call(z, x))
		}
		return z
	}

	public async ModSqrt(x: Int | $.VarRef<Int> | null, p: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		switch (await Jacobi(x, p)) {
			case -1:
			{
				return null
				break
			}
			case 0:
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).SetInt64(0n) : Int.prototype.SetInt64.call(z, 0n))
				break
			}
			case 1:
			{
				break
				break
			}
		}
		if ($.pointerValue<Int>(x).neg || ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).Cmp(p) : Int.prototype.Cmp.call(x, p)) >= 0)) {
			x = await Int.prototype.Mod.call(new Int(), x, p)
		}

		switch ((true as boolean)) {
			case ($.uint($.uint64Mod($.arrayIndex($.pointerValue<Int>(p).abs!, 0), 4n), 64)) == 3:
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).modSqrt3Mod4Prime(x, p) : Int.prototype.modSqrt3Mod4Prime.call(z, x, p))
				break
			}
			case ($.uint($.uint64Mod($.arrayIndex($.pointerValue<Int>(p).abs!, 0), 8n), 64)) == 5:
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).modSqrt5Mod8Prime(x, p) : Int.prototype.modSqrt5Mod8Prime.call(z, x, p))
				break
			}
			default:
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).modSqrtTonelliShanks(x, p) : Int.prototype.modSqrtTonelliShanks.call(z, x, p))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Mul(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).mul(null, x, y) : Int.prototype.mul.call(z, null, x, y))
		return z
	}

	public async MulRange(a: bigint, b: bigint): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		switch ((true as boolean)) {
			case a > b:
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).SetInt64(1n) : Int.prototype.SetInt64.call(z, 1n))
				break
			}
			case (a <= 0n) && (b >= 0n):
			{
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).SetInt64(0n) : Int.prototype.SetInt64.call(z, 0n))
				break
			}
		}
		// a <= b && (b < 0 || a > 0)

		let neg = false
		if (a < 0n) {
			neg = ($.int64And(($.int64Sub(b, a)), 1n)) == 0n
			let __goscriptAssign1_0: bigint = -b
			let __goscriptAssign1_1: bigint = -a
			a = __goscriptAssign1_0
			b = __goscriptAssign1_1
		}

		;(z$ as Int).abs = (await __goscript_nat.nat_mulRange((z$ as Int).abs, null, $.uint64(a), $.uint64(b)) as __goscript_nat.nat);
		;(z$ as Int).neg = neg
		return z
	}

	public Neg(x: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(x) : Int.prototype.Set.call(z, x));
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && !(z$ as Int).neg
		return z
	}

	public Not(x: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if ((x$ as Int).neg) {
			// ^(-x) == ^(^(x-1)) == x-1
			;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return z
		}

		// ^x == -x-1 == -(x+1)
		;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = true
		return z
	}

	public Or(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		if ($.pointerValue<Int>(x).neg == $.pointerValue<Int>(y).neg) {
			if ($.pointerValue<Int>(x).neg) {
				// (-x) | (-y) == ^(x-1) | ^(y-1) == ^((x-1) & (y-1)) == -(((x-1) & (y-1)) + 1)
				let x1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
				let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, (__goscript_nat.nat_and((z$ as Int).abs, (x1 as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).neg = true
				return z
			}

			// x | y == x | y
			;(z$ as Int).abs = (__goscript_nat.nat_or((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return z
		}

		// x.neg != y.neg
		if ($.pointerValue<Int>(x).neg) {
			let __goscriptAssign2_0: Int | $.VarRef<Int> | null = y
			let __goscriptAssign2_1: Int | $.VarRef<Int> | null = x
			x = __goscriptAssign2_0
			y = __goscriptAssign2_1
		}

		// x | (-y) == x | ^(y-1) == ^((y-1) &^ x) == -(^((y-1) &^ x) + 1)
		let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, (__goscript_nat.nat_andNot((z$ as Int).abs, (y1 as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat)) as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = true
		return z
	}

	public async ProbablyPrime(n: number): globalThis.Promise<boolean> {
		const x: Int | $.VarRef<Int> | null = this;
		using __defer = new $.DisposableStack()
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)

		// sign
		// absolute value of the integer
		if (n < 0) {
			$.panic("negative n for ProbablyPrime")
		}
		if ((x$ as Int).neg || ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) == 0)) {
			return false
		}

		const primeBitMask: bigint = 2891462833508853932n

		let w = $.arrayIndex((x$ as Int).abs!, 0)
		if (($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) == 1) && (w < 64)) {
			return ($.uint64And(2891462833508853932n, ($.uint64Shl(1n, w)))) != 0n
		}

		if (($.uint($.uint64And(w, 1n), 64)) == 0) {
			return false
		}

		const primesA: number = 4127218095
		const primesB: number = 3948078067

		let rA: number = 0
		let rB: number = 0
		switch ((64 as number)) {
			case 32:
			{
				rA = $.uint(__goscript_natdiv.nat_modW((x$ as Int).abs, 4127218095), 32)
				rB = $.uint(__goscript_natdiv.nat_modW((x$ as Int).abs, 3948078067), 32)
				break
			}
			case 64:
			{
				let r = __goscript_natdiv.nat_modW((x$ as Int).abs, $.uint("16294579238595022365", 64))
				rA = $.uint($.uint($.uint64Mod(r, 4127218095n), 64), 32)
				rB = $.uint($.uint($.uint64Mod(r, 3948078067n), 64), 32)
				break
			}
			default:
			{
				$.panic("math/big: invalid word size")
				break
			}
		}

		if ((((((((((((((($.uint((rA % 3), 32) == 0) || ($.uint((rA % 5), 32) == 0)) || ($.uint((rA % 7), 32) == 0)) || ($.uint((rA % 11), 32) == 0)) || ($.uint((rA % 13), 32) == 0)) || ($.uint((rA % 17), 32) == 0)) || ($.uint((rA % 19), 32) == 0)) || ($.uint((rA % 23), 32) == 0)) || ($.uint((rA % 37), 32) == 0)) || ($.uint((rB % 29), 32) == 0)) || ($.uint((rB % 31), 32) == 0)) || ($.uint((rB % 41), 32) == 0)) || ($.uint((rB % 43), 32) == 0)) || ($.uint((rB % 47), 32) == 0)) || ($.uint((rB % 53), 32) == 0)) {
			return false
		}

		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return await __goscript_prime.nat_probablyPrimeMillerRabin((x$ as Int).abs, stk, n + 1, true) && await __goscript_prime.nat_probablyPrimeLucas((x$ as Int).abs, stk)
	}

	public async Quo(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let __goscriptTuple1: any = await __goscript_natdiv.nat_div((z$ as Int).abs, null, (null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat));
		;(z$ as Int).abs = (__goscriptTuple1[0] as __goscript_nat.nat);
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && ($.pointerValue<Int>(x).neg != $.pointerValue<Int>(y).neg)
		return z
	}

	public async QuoRem(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, r: Int | $.VarRef<Int> | null): globalThis.Promise<[Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null]> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let __goscriptTuple2: any = await __goscript_natdiv.nat_div((z$ as Int).abs, null, ($.pointerValue<Int>(r).abs as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat));
		;(z$ as Int).abs = (__goscriptTuple2[0] as __goscript_nat.nat)
		$.pointerValue<Int>(r).abs = (__goscriptTuple2[1] as __goscript_nat.nat)
		let __goscriptAssign3_0: boolean = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && ($.pointerValue<Int>(x).neg != $.pointerValue<Int>(y).neg)
		let __goscriptAssign3_1: boolean = ($.sliceLen(($.pointerValue<Int>(r).abs as __goscript_nat.nat)) > 0) && $.pointerValue<Int>(x).neg;
		;(z$ as Int).neg = __goscriptAssign3_0
		$.pointerValue<Int>(r).neg = __goscriptAssign3_1
		return [z, r]
	}

	public async Rand(rnd: rand.Rand | $.VarRef<rand.Rand> | null, n: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const n$: Int = n == null ? $.pointerTarget<Int>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Int>(n)
		// z.neg is not modified before the if check, because z and n might alias.
		if ((n$ as Int).neg || ($.sliceLen(((n$ as Int).abs as __goscript_nat.nat)) == 0)) {
			;(z$ as Int).neg = false;
			;(z$ as Int).abs = (null as __goscript_nat.nat)
			return z
		}
		;(z$ as Int).neg = false;
		;(z$ as Int).abs = (await __goscript_nat.nat_random((z$ as Int).abs, rnd, ((n$ as Int).abs as __goscript_nat.nat), __goscript_nat.nat_bitLen((n$ as Int).abs)) as __goscript_nat.nat)
		return z
	}

	public async Rem(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let __goscriptTuple3: any = await __goscript_natdiv.nat_div((null as __goscript_nat.nat), null, ((z$ as Int).abs as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat));
		;(z$ as Int).abs = (__goscriptTuple3[1] as __goscript_nat.nat);
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && $.pointerValue<Int>(x).neg
		return z
	}

	public Rsh(x: Int | $.VarRef<Int> | null, n: number): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if ((x$ as Int).neg) {
			// (-x) >> s == ^(x-1) >> s == ^((x-1) >> s) == -(((x-1) >> s) + 1)
			let t: __goscript_nat.nat = (__goscript_nat.nat_sub((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
			t = (__goscript_nat.nat_rsh(t, (t as __goscript_nat.nat), n) as __goscript_nat.nat);
			;(z$ as Int).abs = (__goscript_nat.nat_add(t, (t as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = true
			return z
		}

		;(z$ as Int).abs = (__goscript_nat.nat_rsh((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), n) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public async Scan(s: fmt.ScanState | null, ch: number): globalThis.Promise<$.GoError> {
		const z: Int | $.VarRef<Int> | null = this;
		void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.ScanState, null>) : $.pointerValue<Exclude<fmt.ScanState, null>>(s)).SkipSpace(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let base = 0
		switch (ch) {
			case 98:
			{
				base = 2
				break
			}
			case 111:
			{
				base = 8
				break
			}
			case 100:
			{
				base = 10
				break
			}
			case 120:
			case 88:
			{
				base = 16
				break
			}
			case 115:
			case 118:
			{
				break
			}
			default:
			{
				return errors.New("Int.Scan: invalid verb")
				break
			}
		}
		let [, , err] = await Int.prototype.scan.call(z, $.interfaceValue<io.ByteScanner | null>(new __goscript_intconv.byteReader({ScanState: s}, true), "big.byteReader", "big.byteReader"), base)
		return err
	}

	public Set(x: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (!$.pointerEqual(z, x)) {
			;(z$ as Int).abs = (__goscript_nat.nat__set((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = (x$ as Int).neg
		}
		return z
	}

	public SetBit(x: Int | $.VarRef<Int> | null, i: number, b: number): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (i < 0) {
			$.panic("negative bit index")
		}
		if ((x$ as Int).neg) {
			let t: __goscript_nat.nat = (__goscript_nat.nat_sub((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
			t = (__goscript_nat.nat_setBit(t, (t as __goscript_nat.nat), $.uint(i, 64), $.uint($.uint64Xor(b, 1n), 64)) as __goscript_nat.nat);
			;(z$ as Int).abs = (__goscript_nat.nat_add(t, (t as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = $.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0
			return z
		}
		;(z$ as Int).abs = (__goscript_nat.nat_setBit((z$ as Int).abs, ((x$ as Int).abs as __goscript_nat.nat), $.uint(i, 64), b) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public SetBits(abs: $.Slice<__goscript_arith.Word>): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z);
		;(z$ as Int).abs = (__goscript_nat.nat_norm((abs as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public SetBytes(buf: $.Slice<number>): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z);
		;(z$ as Int).abs = (__goscript_nat.nat_setBytes((z$ as Int).abs, buf) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public SetInt64(x: bigint): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let neg = false
		if (x < 0n) {
			neg = true
			x = -x
		}
		;(z$ as Int).abs = (__goscript_nat.nat_setUint64((z$ as Int).abs, $.uint64(x)) as __goscript_nat.nat);
		;(z$ as Int).neg = neg
		return z
	}

	public async SetString(s: string, base: number): globalThis.Promise<[Int | $.VarRef<Int> | null, boolean]> {
		const z: Int | $.VarRef<Int> | null = this;
		return Int.prototype.setFromScanner.call(z, $.interfaceValue<io.ByteScanner | null>(strings.NewReader(s), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), base)
	}

	public SetUint64(x: bigint): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z);
		;(z$ as Int).abs = (__goscript_nat.nat_setUint64((z$ as Int).abs, x) as __goscript_nat.nat);
		;(z$ as Int).neg = false
		return z
	}

	public Sign(): number {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		// This function is used in cryptographic operations. It must not leak
		// anything but the Int's sign and bit size through side-channels. Any
		// changes must be reviewed by a security expert.
		if ($.sliceLen(((x$ as Int).abs as __goscript_nat.nat)) == 0) {
			return 0
		}
		if ((x$ as Int).neg) {
			return -1
		}
		return 1
	}

	public async Sqrt(x: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if ((x$ as Int).neg) {
			$.panic("square root of negative number")
		}
		;(z$ as Int).neg = false;
		;(z$ as Int).abs = (await __goscript_nat.nat_sqrt((z$ as Int).abs, null, ((x$ as Int).abs as __goscript_nat.nat)) as __goscript_nat.nat)
		return z
	}

	public async String(): globalThis.Promise<string> {
		const x: Int | $.VarRef<Int> | null = this;
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).Text(10) : Int.prototype.Text.call(x, 10))
	}

	public Sub(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		let neg = $.pointerValue<Int>(x).neg
		if ($.pointerValue<Int>(x).neg != $.pointerValue<Int>(y).neg) {
			// x - (-y) == x + y
			// (-x) - y == -(x + y)
			;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat)
		} else {
			// x - y == x - y == -(y - x)
			// (-x) - (-y) == y - x == -(x - y)
			if (__goscript_nat.nat_cmp($.pointerValue<Int>(x).abs, ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) >= 0) {
				;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat)
			} else {
				neg = !neg;
				;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, ($.pointerValue<Int>(y).abs as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat)) as __goscript_nat.nat)
			}
		}
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && neg
		return z
	}

	public async Text(base: number): globalThis.Promise<string> {
		const x: Int | $.VarRef<Int> | null = this;
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if (x == null) {
			return "<nil>"
		}
		return $.bytesToString(await __goscript_natconv.nat_itoa((x$ as Int).abs, (x$ as Int).neg, base))
	}

	public TrailingZeroBits(): number {
		const x: Int | $.VarRef<Int> | null = this;
		return __goscript_nat.nat_trailingZeroBits($.pointerValue<Int>(x).abs)
	}

	public Uint64(): bigint {
		const x: Int | $.VarRef<Int> | null = this;
		return low64(($.pointerValue<Int>(x).abs as __goscript_nat.nat))
	}

	public async UnmarshalJSON(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		const z: Int | $.VarRef<Int> | null = this;

		if ($.stringEqual($.bytesToString(text), "null")) {
			return null
		}
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).UnmarshalText(text) : Int.prototype.UnmarshalText.call(z, text))
	}

	public async UnmarshalText(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		const z: Int | $.VarRef<Int> | null = this;
		{
			let [, ok] = await Int.prototype.setFromScanner.call(z, $.interfaceValue<io.ByteScanner | null>(bytes.NewReader(text), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")), 0)
			if (!ok) {
				return fmt.Errorf("math/big: cannot unmarshal %q into a *big.Int", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			}
		}
		return null
	}

	public Xor(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): Int | $.VarRef<Int> | null {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		if ($.pointerValue<Int>(x).neg == $.pointerValue<Int>(y).neg) {
			if ($.pointerValue<Int>(x).neg) {
				// (-x) ^ (-y) == ^(x-1) ^ ^(y-1) == (x-1) ^ (y-1)
				let x1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
				let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).abs = (__goscript_nat.nat_xor((z$ as Int).abs, (x1 as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Int).neg = false
				return z
			}

			// x ^ y == x ^ y
			;(z$ as Int).abs = (__goscript_nat.nat_xor((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return z
		}

		// x.neg != y.neg
		if ($.pointerValue<Int>(x).neg) {
			let __goscriptAssign4_0: Int | $.VarRef<Int> | null = y
			let __goscriptAssign4_1: Int | $.VarRef<Int> | null = x
			x = __goscriptAssign4_0
			y = __goscriptAssign4_1
		}

		// x ^ (-y) == x ^ ^(y-1) == ^(x ^ (y-1)) == -((x ^ (y-1)) + 1)
		let y1: __goscript_nat.nat = (__goscript_nat.nat_sub((null as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).abs = (__goscript_nat.nat_add((z$ as Int).abs, (__goscript_nat.nat_xor((z$ as Int).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), (y1 as __goscript_nat.nat)) as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = true
		return z
	}

	public async exp(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, m: Int | $.VarRef<Int> | null, slow: boolean): globalThis.Promise<Int | $.VarRef<Int> | null> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		// See Knuth, volume 2, section 4.6.3.
		let xWords: __goscript_nat.nat = ($.pointerValue<Int>(x).abs as __goscript_nat.nat)
		if ($.pointerValue<Int>(y).neg) {
			if ((m == null) || ($.sliceLen(($.pointerValue<Int>(m).abs as __goscript_nat.nat)) == 0)) {
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).SetInt64(1n) : Int.prototype.SetInt64.call(z, 1n))
			}
			// for y < 0: x**y mod m == (x**(-1))**|y| mod m
			let inverse: Int | $.VarRef<Int> | null = await Int.prototype.ModInverse.call(new Int(), x, m)
			if (inverse == null) {
				return null
			}
			xWords = ($.pointerValue<Int>(inverse).abs as __goscript_nat.nat)
		}
		let yWords: __goscript_nat.nat = ($.pointerValue<Int>(y).abs as __goscript_nat.nat)

		let mWords: __goscript_nat.nat = null! as __goscript_nat.nat
		if (m != null) {
			if (($.pointerEqual(z, m)) || __goscript_nat.alias(((z$ as Int).abs as __goscript_nat.nat), ($.pointerValue<Int>(m).abs as __goscript_nat.nat))) {
				m = Int.prototype.Set.call(new Int(), m)
			}
			mWords = ($.pointerValue<Int>(m).abs as __goscript_nat.nat)
		}

		;(z$ as Int).abs = (await __goscript_nat.nat_expNN((z$ as Int).abs, null, (xWords as __goscript_nat.nat), (yWords as __goscript_nat.nat), (mWords as __goscript_nat.nat), slow) as __goscript_nat.nat);
		;(z$ as Int).neg = ((($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && $.pointerValue<Int>(x).neg) && ($.sliceLen((yWords as __goscript_nat.nat)) > 0)) && (($.uint($.uint64And($.arrayIndex(yWords!, 0), 1n), 64)) == 1)
		if ((z$ as Int).neg && ($.sliceLen((mWords as __goscript_nat.nat)) > 0)) {
			// make modulus result positive
			;(z$ as Int).abs = (__goscript_nat.nat_sub((z$ as Int).abs, (mWords as __goscript_nat.nat), ((z$ as Int).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
		}

		return z
	}

	public async expSlow(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, m: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).exp(x, y, m, true) : Int.prototype.exp.call(z, x, y, m, true))
	}

	public async lehmerGCD(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null, a: Int | $.VarRef<Int> | null, b: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		let A: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
		let B: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
		let Ua: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
		let Ub: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null

		A = Int.prototype.Abs.call(new Int(), a)
		B = Int.prototype.Abs.call(new Int(), b)

		let extended = (x != null) || (y != null)

		if (extended) {
			// Ua (Ub) tracks how many times input a has been accumulated into A (B).
			Ua = Int.prototype.SetInt64.call(new Int(), 1n)
			Ub = new Int()
		}

		// temp variables for multiprecision update
		let q: Int | $.VarRef<Int> | null = new Int()
		let r: Int | $.VarRef<Int> | null = new Int()

		// ensure A >= B
		if (__goscript_nat.nat_cmp($.pointerValue<Int>(A).abs, ($.pointerValue<Int>(B).abs as __goscript_nat.nat)) < 0) {
			let __goscriptAssign5_0: Int | $.VarRef<Int> | null = B
			let __goscriptAssign5_1: Int | $.VarRef<Int> | null = A
			A = __goscriptAssign5_0
			B = __goscriptAssign5_1
			let __goscriptAssign6_0: Int | $.VarRef<Int> | null = Ua
			let __goscriptAssign6_1: Int | $.VarRef<Int> | null = Ub
			Ub = __goscriptAssign6_0
			Ua = __goscriptAssign6_1
		}

		// loop invariant A >= B
		while ($.sliceLen(($.pointerValue<Int>(B).abs as __goscript_nat.nat)) > 1) {
			// Attempt to calculate in single-precision using leading words of A and B.
			let [u0, u1, v0, v1, even] = lehmerSimulate(A, B)

			// multiprecision Step
			if (v0 != 0) {
				// Simulate the effect of the single-precision steps using the cosequences.
				// A = u0*A + v0*B
				// B = u1*A + v1*B
				lehmerUpdate(A, B, q, r, u0, u1, v0, v1, even)

				if (extended) {
					// Ua = u0*Ua + v0*Ub
					// Ub = u1*Ua + v1*Ub
					lehmerUpdate(Ua, Ub, q, r, u0, u1, v0, v1, even)
				}
			} else {
				// Single-digit calculations failed to simulate any quotients.
				// Do a standard Euclidean step.
				let __goscriptTuple4: any = await euclidUpdate(A, B, Ua, Ub, q, r, extended)
				A = __goscriptTuple4[0]
				B = __goscriptTuple4[1]
				r = __goscriptTuple4[2]
				Ua = __goscriptTuple4[3]
				Ub = __goscriptTuple4[4]
			}
		}

		if ($.sliceLen(($.pointerValue<Int>(B).abs as __goscript_nat.nat)) > 0) {
			// extended Euclidean algorithm base case if B is a single Word
			if ($.sliceLen(($.pointerValue<Int>(A).abs as __goscript_nat.nat)) > 1) {
				// A is longer than a single Word, so one update is needed.
				let __goscriptTuple5: any = await euclidUpdate(A, B, Ua, Ub, q, r, extended)
				A = __goscriptTuple5[0]
				B = __goscriptTuple5[1]
				r = __goscriptTuple5[2]
				Ua = __goscriptTuple5[3]
				Ub = __goscriptTuple5[4]
			}
			if ($.sliceLen(($.pointerValue<Int>(B).abs as __goscript_nat.nat)) > 0) {
				// A and B are both a single Word.
				let aWord = $.arrayIndex($.pointerValue<Int>(A).abs!, 0)
				let bWord = $.arrayIndex($.pointerValue<Int>(B).abs!, 0)
				if (extended) {
					let ua: __goscript_arith.Word = 0
					let ub: __goscript_arith.Word = 0
					let va: __goscript_arith.Word = 0
					let vb: __goscript_arith.Word = 0
					let __goscriptAssign7_0: __goscript_arith.Word = 1
					let __goscriptAssign7_1: __goscript_arith.Word = 0
					ua = __goscriptAssign7_0
					ub = __goscriptAssign7_1
					let __goscriptAssign8_0: __goscript_arith.Word = 0
					let __goscriptAssign8_1: __goscript_arith.Word = 1
					va = __goscriptAssign8_0
					vb = __goscriptAssign8_1
					let even = true
					while (bWord != 0) {
						let __goscriptShadow0 = $.uint($.uint64Div(aWord, bWord), 64)
						let __goscriptShadow1: __goscript_arith.Word = $.uint($.uint64Mod(aWord, bWord), 64)
						let __goscriptAssign9_0: __goscript_arith.Word = bWord
						let __goscriptAssign9_1: __goscript_arith.Word = __goscriptShadow1
						aWord = __goscriptAssign9_0
						bWord = __goscriptAssign9_1
						let __goscriptAssign10_0: __goscript_arith.Word = ub
						let __goscriptAssign10_1: __goscript_arith.Word = $.uint($.uint64Add(ua, ($.uint($.uint64Mul(__goscriptShadow0, ub), 64))), 64)
						ua = __goscriptAssign10_0
						ub = __goscriptAssign10_1
						let __goscriptAssign11_0: __goscript_arith.Word = vb
						let __goscriptAssign11_1: __goscript_arith.Word = $.uint($.uint64Add(va, ($.uint($.uint64Mul(__goscriptShadow0, vb), 64))), 64)
						va = __goscriptAssign11_0
						vb = __goscriptAssign11_1
						even = !even
					}

					mulW(Ua, Ua, !even, ua)
					mulW(Ub, Ub, even, va)
					void (Ua !== null && (Ua as any).__isVarRef !== true && (Ua as any).__goValue === undefined ? ((Ua as any) as Int).Add(Ua, Ub) : Int.prototype.Add.call(Ua, Ua, Ub))
				} else {
					while (bWord != 0) {
						let __goscriptAssign12_0: __goscript_arith.Word = bWord
						let __goscriptAssign12_1: __goscript_arith.Word = $.uint($.uint64Mod(aWord, bWord), 64)
						aWord = __goscriptAssign12_0
						bWord = __goscriptAssign12_1
					}
				}
				$.sliceElems($.pointerValue<Int>(A).abs!)[$.sliceSlot($.pointerValue<Int>(A).abs!, 0)] = aWord
			}
		}
		let negA = $.pointerValue<Int>(a).neg
		if (y != null) {
			// avoid aliasing b needed in the division below
			if ($.pointerEqual(y, b)) {
				void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as Int).Set(b) : Int.prototype.Set.call(B, b))
			} else {
				B = b
			}
			// y = (z - a*x)/b
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).Mul(a, Ua) : Int.prototype.Mul.call(y, a, Ua))
			if (negA) {
				$.pointerValue<Int>(y).neg = !$.pointerValue<Int>(y).neg
			}
			void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).Sub(A, y) : Int.prototype.Sub.call(y, A, y))
			await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).Div(y, B) : Int.prototype.Div.call(y, y, B))
		}

		if (x != null) {
			void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Int).Set(Ua) : Int.prototype.Set.call(x, Ua))
			if (negA) {
				$.pointerValue<Int>(x).neg = !$.pointerValue<Int>(x).neg
			}
		}

		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(A) : Int.prototype.Set.call(z, A))

		return z
	}

	public async modSqrt3Mod4Prime(x: Int | $.VarRef<Int> | null, p: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		let e: Int | $.VarRef<Int> | null = Int.prototype.Add.call(new Int(), p, __goscript_get_intOne())
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Int).Rsh(e, 2) : Int.prototype.Rsh.call(e, e, 2))
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Exp(x, e, p) : Int.prototype.Exp.call(z, x, e, p))
		return z
	}

	public async modSqrt5Mod8Prime(x: Int | $.VarRef<Int> | null, p: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		// p == 5 mod 8 implies p = e*8 + 5
		// e is the quotient and 5 the remainder on division by 8
		let e: Int | $.VarRef<Int> | null = Int.prototype.Rsh.call(new Int(), p, 3)
		let tx: Int | $.VarRef<Int> | null = Int.prototype.Lsh.call(new Int(), x, 1)
		let alpha: Int | $.VarRef<Int> | null = await Int.prototype.Exp.call(new Int(), tx, e, p)
		let beta: Int | $.VarRef<Int> | null = await Int.prototype.Mul.call(new Int(), alpha, alpha)
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mod(beta, p) : Int.prototype.Mod.call(beta, beta, p))
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mul(beta, tx) : Int.prototype.Mul.call(beta, beta, tx))
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mod(beta, p) : Int.prototype.Mod.call(beta, beta, p))
		void (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Sub(beta, __goscript_get_intOne()) : Int.prototype.Sub.call(beta, beta, __goscript_get_intOne()))
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mul(beta, x) : Int.prototype.Mul.call(beta, beta, x))
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mod(beta, p) : Int.prototype.Mod.call(beta, beta, p))
		await (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as Int).Mul(beta, alpha) : Int.prototype.Mul.call(beta, beta, alpha))
		await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Mod(beta, p) : Int.prototype.Mod.call(z, beta, p))
		return z
	}

	public async modSqrtTonelliShanks(x: Int | $.VarRef<Int> | null, p: Int | $.VarRef<Int> | null): globalThis.Promise<Int | $.VarRef<Int> | null> {
		const z: Int | $.VarRef<Int> | null = this;
		// Break p-1 into s*2^e such that s is odd.
		let s: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		s.value.Sub(p, __goscript_get_intOne())
		let e = __goscript_nat.nat_trailingZeroBits(s.value.abs)
		s.value.Rsh(s, e)

		// find some non-square n
		let n: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		n.value.SetInt64(2n)
		while (await Jacobi(n, p) != -1) {
			n.value.Add(n, __goscript_get_intOne())
		}

		// Core of the Tonelli-Shanks algorithm. Follows the description in
		// section 6 of "Square roots from 1; 24, 51, 10 to Dan Shanks" by Ezra
		// Brown:
		// https://www.maa.org/sites/default/files/pdf/upload_library/22/Polya/07468342.di020786.02p0470a.pdf
		let y: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let b: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let g: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		let t: $.VarRef<Int> = $.varRef(new Int(undefined, true))
		y.value.Add(s, __goscript_get_intOne())
		y.value.Rsh(y, 1)
		await y.value.Exp(x, y, p)
		await b.value.Exp(x, s, p)
		await g.value.Exp(n, s, p)
		let r = e
		while (true) {
			// find the least m such that ord_p(b) = 2^m
			let m: number = 0
			t.value.Set(b)
			while (t.value.Cmp(__goscript_get_intOne()) != 0) {
				await Int.prototype.Mod.call(await t.value.Mul(t, t), t, p)
				m++
			}

			if (m == 0) {
				return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(y) : Int.prototype.Set.call(z, y))
			}

			await Int.prototype.Exp.call(Int.prototype.SetBit.call(t.value.SetInt64(0n), t, $.int($.uint($.uint64Sub(($.uint($.uint64Sub(r, m), 64)), 1n), 64)), 1), g, t, p)
			// t = g^(2^(r-m-1)) mod p
			await Int.prototype.Mod.call(await g.value.Mul(t, t), g, p)
			await Int.prototype.Mod.call(await y.value.Mul(y, t), y, p)
			await Int.prototype.Mod.call(await b.value.Mul(b, g), b, p)
			r = m
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async mul(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<void> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		// x * y == x * y
		// x * (-y) == -(x * y)
		// (-x) * y == -(x * y)
		// (-x) * (-y) == x * y
		if ($.pointerEqual(x, y)) {
			;(z$ as Int).abs = (await __goscript_natmul.nat_sqr((z$ as Int).abs, stk, ($.pointerValue<Int>(x).abs as __goscript_nat.nat)) as __goscript_nat.nat);
			;(z$ as Int).neg = false
			return
		}
		;(z$ as Int).abs = (await __goscript_natmul.nat_mul((z$ as Int).abs, stk, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), ($.pointerValue<Int>(y).abs as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && ($.pointerValue<Int>(x).neg != $.pointerValue<Int>(y).neg)
	}

	public async scaleDenom(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, x: Int | $.VarRef<Int> | null, f: __goscript_nat.nat): globalThis.Promise<void> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)
		const x$: Int = x == null ? $.pointerTarget<Int>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Int>(x)
		if ($.sliceLen((f as __goscript_nat.nat)) == 0) {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).Set(x) : Int.prototype.Set.call(z, x))
			return
		}
		;(z$ as Int).abs = (await __goscript_natmul.nat_mul((z$ as Int).abs, stk, ((x$ as Int).abs as __goscript_nat.nat), (f as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Int).neg = (x$ as Int).neg
	}

	public async scan(r: io.ByteScanner | null, base: number): globalThis.Promise<[Int | $.VarRef<Int> | null, number, $.GoError]> {
		let z: Int | $.VarRef<Int> | null = this;
		const z$: Int = z == null ? $.pointerTarget<Int>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Int>(z)

		let [neg, err] = await __goscript_intconv.scanSign(r)
		if (err != null) {
			return [null, 0, err]
		}

		// 0 has no sign
		let __goscriptTuple6: any = await __goscript_natconv.nat_scan((z$ as Int).abs, r, base, false);
		;(z$ as Int).abs = (__goscriptTuple6[0] as __goscript_nat.nat)
		base = __goscriptTuple6[1]
		err = __goscriptTuple6[3]
		if (err != null) {
			return [null, base, err]
		}
		;(z$ as Int).neg = ($.sliceLen(((z$ as Int).abs as __goscript_nat.nat)) > 0) && neg

		return [z, base, null]
	}

	public async setFromScanner(r: io.ByteScanner | null, base: number): globalThis.Promise<[Int | $.VarRef<Int> | null, boolean]> {
		const z: Int | $.VarRef<Int> | null = this;
		{
			let [, , err] = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Int).scan(r, base) : Int.prototype.scan.call(z, r, base))
			if (err != null) {
				return [null, false]
			}
		}
		// entire content must have been consumed
		{
			let [, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.ByteScanner, null>) : $.pointerValue<Exclude<io.ByteScanner, null>>(r)).ReadByte()
			if (!$.comparableEqual(err, io.EOF)) {
				return [null, false]
			}
		}
		return [z, true]
	}

	static __typeInfo = $.registerStructType(
		"big.Int",
		() => new Int(),
		() => [$.methodSignature("Abs", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Add", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("And", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("AndNot", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Append", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("Binomial", [["n", /* @__PURE__ */ $.basicType("int64")], ["k", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Bit", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("BitLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Bits", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"))], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Cmp", [["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["r", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("CmpAbs", [["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Div", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("DivMod", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["m", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Divide", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["r", /* @__PURE__ */ $.pointerType("big.Int")], ["mode", /* @__PURE__ */ $.basicType("uint8", "big.RoundingMode")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Exp", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["m", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("FillBytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int8", "big.Accuracy")], true), $.methodSignature("Format", [["s", "fmt.State"], ["ch", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("GCD", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["a", /* @__PURE__ */ $.pointerType("big.Int")], ["b", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("GobDecode", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("GobEncode", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("IsInt64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Lsh", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("MarshalText", [], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("Mod", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("ModInverse", [["g", /* @__PURE__ */ $.pointerType("big.Int")], ["n", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("ModSqrt", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["p", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Mul", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("MulRange", [["a", /* @__PURE__ */ $.basicType("int64")], ["b", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Neg", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Not", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Or", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("ProbablyPrime", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Quo", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("QuoRem", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["r", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Rand", [["rnd", /* @__PURE__ */ $.pointerType("rand.Rand")], ["n", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Rem", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Rsh", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Scan", [["s", "fmt.ScanState"], ["ch", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("Set", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("SetBit", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["i", /* @__PURE__ */ $.basicType("int")], ["b", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("SetBits", [["abs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"))]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("SetBytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("SetInt64", [["x", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("SetString", [["s", /* @__PURE__ */ $.basicType("string")], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetUint64", [["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Sign", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sqrt", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Text", [["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("TrailingZeroBits", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Xor", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("exp", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["m", /* @__PURE__ */ $.pointerType("big.Int")], ["slow", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("expSlow", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["m", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("lehmerGCD", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["a", /* @__PURE__ */ $.pointerType("big.Int")], ["b", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("modSqrt3Mod4Prime", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["p", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("modSqrt5Mod8Prime", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["p", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("modSqrtTonelliShanks", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["p", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("mul", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [], true), $.methodSignature("scaleDenom", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.pointerType("big.Int")], ["f", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [], true), $.methodSignature("scan", [["r", "io.ByteScanner"], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("setFromScanner", [["r", "io.ByteScanner"], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.basicType("bool")], true)],
		Int,
		() => [/* @__PURE__ */ $.structField("neg", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("abs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat"), [1], 8, false, { pkgPath: "math/big" })]
	)
}

export const Trunc: __goscript_float.RoundingMode = 2

export const Floor: __goscript_float.RoundingMode = 4

export const Round: __goscript_float.RoundingMode = 0

export const Ceil: __goscript_float.RoundingMode = 5

export var intOne: Int | $.VarRef<Int> | null

export function __goscript_init_intOne(): void {
	if (((intOne) as any) === undefined) {
		intOne = new Int({neg: false, abs: (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)})
	}
}

export function __goscript_get_intOne(): Int | $.VarRef<Int> | null {
	if (((intOne) as any) === undefined) {
		__goscript_init_intOne()
	}
	return intOne
}

export function __goscript_set_intOne(__goscriptValue: Int | $.VarRef<Int> | null): void {
	intOne = __goscriptValue
}

export function NewInt(x: bigint): Int | $.VarRef<Int> | null {
	// This code is arranged to be inlineable and produce
	// zero allocations when inlined. See issue 29951.
	let u = $.uint64(x)
	if (x < 0n) {
		u = -u
	}
	let abs: $.Slice<__goscript_arith.Word> = null! as $.Slice<__goscript_arith.Word>
	if (x == 0n) {
	} else {
		if (((64 as number) == 32) && (($.uint64Shr(u, 32n)) != 0n)) {
			abs = $.arrayToSlice<__goscript_arith.Word>([$.uint(u, 64), $.uint($.uint64Shr(u, 32n), 64)])
		} else {
			abs = $.arrayToSlice<__goscript_arith.Word>([$.uint(u, 64)])
		}
	}
	return new Int({neg: x < 0n, abs: (abs as __goscript_nat.nat)})
}

export function low32(x: __goscript_nat.nat): number {
	if ($.sliceLen((x as __goscript_nat.nat)) == 0) {
		return 0
	}
	return $.uint($.arrayIndex(x!, 0), 32)
}

export function low64(x: __goscript_nat.nat): bigint {
	if ($.sliceLen((x as __goscript_nat.nat)) == 0) {
		return 0n
	}
	let v = $.uint64($.arrayIndex(x!, 0))
	if (((64 as number) == 32) && ($.sliceLen((x as __goscript_nat.nat)) > 1)) {
		return $.uint64Or(($.uint64Mul($.uint64($.arrayIndex(x!, 1)), (2 ** 32))), v)
	}
	return v
}

export function lehmerSimulate(A: Int | $.VarRef<Int> | null, B: Int | $.VarRef<Int> | null): [__goscript_arith.Word, __goscript_arith.Word, __goscript_arith.Word, __goscript_arith.Word, boolean] {
	let u0: __goscript_arith.Word = 0
	let u1: __goscript_arith.Word = 0
	let v0: __goscript_arith.Word = 0
	let v1: __goscript_arith.Word = 0
	let even: boolean = false
	// initialize the digits
	let a1: __goscript_arith.Word = 0
	let a2: __goscript_arith.Word = 0
	let u2: __goscript_arith.Word = 0
	let v2: __goscript_arith.Word = 0

	let m = $.sliceLen(($.pointerValue<Int>(B).abs as __goscript_nat.nat))
	let n = $.sliceLen(($.pointerValue<Int>(A).abs as __goscript_nat.nat))

	// extract the top Word of bits from A and B
	let h = __goscript_arith.nlz($.arrayIndex($.pointerValue<Int>(A).abs!, n - 1))
	a1 = $.uint($.uint64Or(($.uint($.uint64Shl($.arrayIndex($.pointerValue<Int>(A).abs!, n - 1), h), 64)), ($.uint($.uint64Shr($.arrayIndex($.pointerValue<Int>(A).abs!, n - 2), ($.uint($.uint64Sub(64n, h), 64))), 64))), 64)
	// B may have implicit zero words in the high bits if the lengths differ
	switch ((true as boolean)) {
		case n == m:
		{
			a2 = $.uint($.uint64Or(($.uint($.uint64Shl($.arrayIndex($.pointerValue<Int>(B).abs!, n - 1), h), 64)), ($.uint($.uint64Shr($.arrayIndex($.pointerValue<Int>(B).abs!, n - 2), ($.uint($.uint64Sub(64n, h), 64))), 64))), 64)
			break
		}
		case n == (m + 1):
		{
			a2 = $.uint($.uint64Shr($.arrayIndex($.pointerValue<Int>(B).abs!, n - 2), ($.uint($.uint64Sub(64n, h), 64))), 64)
			break
		}
		default:
		{
			a2 = 0
			break
		}
	}

	// Since we are calculating with full words to avoid overflow,
	// we use 'even' to track the sign of the cosequences.
	// For even iterations: u0, v1 >= 0 && u1, v0 <= 0
	// For odd  iterations: u0, v1 <= 0 && u1, v0 >= 0
	// The first iteration starts with k=1 (odd).
	even = false
	// variables to track the cosequences
	let __goscriptAssign13_0: __goscript_arith.Word = 0
	let __goscriptAssign13_1: __goscript_arith.Word = 1
	let __goscriptAssign13_2: __goscript_arith.Word = 0
	u0 = __goscriptAssign13_0
	u1 = __goscriptAssign13_1
	u2 = __goscriptAssign13_2
	let __goscriptAssign14_0: __goscript_arith.Word = 0
	let __goscriptAssign14_1: __goscript_arith.Word = 0
	let __goscriptAssign14_2: __goscript_arith.Word = 1
	v0 = __goscriptAssign14_0
	v1 = __goscriptAssign14_1
	v2 = __goscriptAssign14_2

	// Calculate the quotient and cosequences using Collins' stopping condition.
	// Note that overflow of a Word is not possible when computing the remainder
	// sequence and cosequences since the cosequence size is bounded by the input size.
	// See section 4.2 of Jebelean for details.
	while ((a2 >= v2) && (($.uint($.uint64Sub(a1, a2), 64)) >= ($.uint($.uint64Add(v1, v2), 64)))) {
		let q = $.uint($.uint64Div(a1, a2), 64)
		let r: __goscript_arith.Word = $.uint($.uint64Mod(a1, a2), 64)
		let __goscriptAssign15_0: __goscript_arith.Word = a2
		let __goscriptAssign15_1: __goscript_arith.Word = r
		a1 = __goscriptAssign15_0
		a2 = __goscriptAssign15_1
		let __goscriptAssign16_0: __goscript_arith.Word = u1
		let __goscriptAssign16_1: __goscript_arith.Word = u2
		let __goscriptAssign16_2: __goscript_arith.Word = $.uint($.uint64Add(u1, ($.uint($.uint64Mul(q, u2), 64))), 64)
		u0 = __goscriptAssign16_0
		u1 = __goscriptAssign16_1
		u2 = __goscriptAssign16_2
		let __goscriptAssign17_0: __goscript_arith.Word = v1
		let __goscriptAssign17_1: __goscript_arith.Word = v2
		let __goscriptAssign17_2: __goscript_arith.Word = $.uint($.uint64Add(v1, ($.uint($.uint64Mul(q, v2), 64))), 64)
		v0 = __goscriptAssign17_0
		v1 = __goscriptAssign17_1
		v2 = __goscriptAssign17_2
		even = !even
	}
	return [u0, u1, v0, v1, even]
}

export function lehmerUpdate(A: Int | $.VarRef<Int> | null, B: Int | $.VarRef<Int> | null, q: Int | $.VarRef<Int> | null, r: Int | $.VarRef<Int> | null, u0: __goscript_arith.Word, u1: __goscript_arith.Word, v0: __goscript_arith.Word, v1: __goscript_arith.Word, even: boolean): void {
	mulW(q, B, even, v0)
	mulW(r, A, even, u1)
	mulW(A, A, !even, u0)
	mulW(B, B, !even, v1)
	void (A !== null && (A as any).__isVarRef !== true && (A as any).__goValue === undefined ? ((A as any) as Int).Add(A, q) : Int.prototype.Add.call(A, A, q))
	void (B !== null && (B as any).__isVarRef !== true && (B as any).__goValue === undefined ? ((B as any) as Int).Add(B, r) : Int.prototype.Add.call(B, B, r))
}

export function mulW(z: Int | $.VarRef<Int> | null, x: Int | $.VarRef<Int> | null, neg: boolean, w: __goscript_arith.Word): void {
	$.pointerValue<Int>(z).abs = (__goscript_natmul.nat_mulAddWW($.pointerValue<Int>(z).abs, ($.pointerValue<Int>(x).abs as __goscript_nat.nat), w, 0) as __goscript_nat.nat)
	$.pointerValue<Int>(z).neg = $.pointerValue<Int>(x).neg != neg
}

export async function euclidUpdate(A: Int | $.VarRef<Int> | null, B: Int | $.VarRef<Int> | null, Ua: Int | $.VarRef<Int> | null, Ub: Int | $.VarRef<Int> | null, q: Int | $.VarRef<Int> | null, r: Int | $.VarRef<Int> | null, extended: boolean): globalThis.Promise<[Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null, Int | $.VarRef<Int> | null]> {
	let nA: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
	let nB: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
	let nr: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
	let nUa: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
	let nUb: Int | $.VarRef<Int> | null = null! as Int | $.VarRef<Int> | null
	await (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as Int).QuoRem(A, B, r) : Int.prototype.QuoRem.call(q, A, B, r))

	if (extended) {
		// Ua, Ub = Ub, Ua-q*Ub
		await (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as Int).Mul(q, Ub) : Int.prototype.Mul.call(q, q, Ub))
		let __goscriptAssign18_0: Int | $.VarRef<Int> | null = Ub
		let __goscriptAssign18_1: Int | $.VarRef<Int> | null = Ua
		Ua = __goscriptAssign18_0
		Ub = __goscriptAssign18_1
		void (Ub !== null && (Ub as any).__isVarRef !== true && (Ub as any).__goValue === undefined ? ((Ub as any) as Int).Sub(Ub, q) : Int.prototype.Sub.call(Ub, Ub, q))
	}

	return [B, r, A, Ua, Ub]
}

export async function nat_modInverse(z: __goscript_nat.nat, g: __goscript_nat.nat, n: __goscript_nat.nat): globalThis.Promise<__goscript_nat.nat> {
	// TODO(rsc): ModInverse should be implemented in terms of this function.
	return ($.pointerValue<Int>(await Int.prototype.ModInverse.call((new Int({abs: (z as __goscript_nat.nat)})), new Int({abs: (g as __goscript_nat.nat)}), new Int({abs: (n as __goscript_nat.nat)}))).abs as __goscript_nat.nat)
}

export async function Jacobi(x: Int | $.VarRef<Int> | null, y: Int | $.VarRef<Int> | null): globalThis.Promise<number> {
	if (($.sliceLen(($.pointerValue<Int>(y).abs as __goscript_nat.nat)) == 0) || (($.uint($.uint64And($.arrayIndex($.pointerValue<Int>(y).abs!, 0), 1n), 64)) == 0)) {
		$.panic(await fmt.Sprintf("big: invalid 2nd argument to Int.Jacobi: need odd integer but got %s", await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as Int).String() : Int.prototype.String.call(y))))
	}

	// We use the formulation described in chapter 2, section 2.4,
	// "The Yacas Book of Algorithms":
	// http://yacas.sourceforge.net/Algo.book.pdf

	let a: $.VarRef<Int> = $.varRef(new Int(undefined, true))
	let b: $.VarRef<Int> = $.varRef(new Int(undefined, true))
	let c: $.VarRef<Int> = $.varRef(new Int(undefined, true))
	a.value.Set(x)
	b.value.Set(y)
	let j = 1

	if (b.value.neg) {
		if (a.value.neg) {
			j = -1
		}
		b.value.neg = false
	}

	while (true) {
		if (b.value.Cmp(__goscript_get_intOne()) == 0) {
			return j
		}
		if ($.sliceLen((a.value.abs as __goscript_nat.nat)) == 0) {
			return 0
		}
		await a.value.Mod(a, b)
		if ($.sliceLen((a.value.abs as __goscript_nat.nat)) == 0) {
			return 0
		}
		// a > 0

		// handle factors of 2 in 'a'
		let s = __goscript_nat.nat_trailingZeroBits(a.value.abs)
		if (($.uint($.uint64And(s, 1n), 64)) != 0) {
			let bmod8 = $.uint($.uint64And($.arrayIndex(b.value.abs!, 0), 7n), 64)
			if ((bmod8 == 3) || (bmod8 == 5)) {
				j = -j
			}
		}
		c.value.Rsh(a, s)

		// swap numerator and denominator
		if ((($.uint($.uint64And($.arrayIndex(b.value.abs!, 0), 3n), 64)) == 3) && (($.uint($.uint64And($.arrayIndex(c.value.abs!, 0), 3n), 64)) == 3)) {
			j = -j
		}
		a.value.Set(b)
		b.value.Set(c)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
