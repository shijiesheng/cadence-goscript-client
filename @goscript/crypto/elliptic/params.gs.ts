// Generated file based on params.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as big from "@goscript/math/big/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import * as __goscript_elliptic from "./elliptic.gs.ts"

import * as __goscript_nistec from "./nistec.gs.ts"
import "@goscript/math/big/index.js"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "./elliptic.gs.ts"
import "./nistec.gs.ts"

$.registerTypePackagePath("crypto/elliptic", ["elliptic.CurveParams"])

export class CurveParams {
	public get P(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.P
	}

	public set P(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.P = value
	}

	public get N(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.N
	}

	public set N(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.N = value
	}

	public get B(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.B
	}

	public set B(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.B = value
	}

	public get Gx(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Gx
	}

	public set Gx(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Gx = value
	}

	public get Gy(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Gy
	}

	public set Gy(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Gy = value
	}

	public get BitSize(): number {
		return this._fields.BitSize
	}

	public set BitSize(value: number) {
		this._fields.BitSize = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public _fields: {
		P: big.Int | $.VarRef<big.Int> | null
		N: big.Int | $.VarRef<big.Int> | null
		B: big.Int | $.VarRef<big.Int> | null
		Gx: big.Int | $.VarRef<big.Int> | null
		Gy: big.Int | $.VarRef<big.Int> | null
		BitSize: number
		Name: string
	}

	constructor(init?: Partial<{P?: big.Int | $.VarRef<big.Int> | null, N?: big.Int | $.VarRef<big.Int> | null, B?: big.Int | $.VarRef<big.Int> | null, Gx?: big.Int | $.VarRef<big.Int> | null, Gy?: big.Int | $.VarRef<big.Int> | null, BitSize?: number, Name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			P: init?.P ?? (null! as big.Int | $.VarRef<big.Int> | null),
			N: init?.N ?? (null! as big.Int | $.VarRef<big.Int> | null),
			B: init?.B ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Gx: init?.Gx ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Gy: init?.Gy ?? (null! as big.Int | $.VarRef<big.Int> | null),
			BitSize: init?.BitSize ?? (0 as number),
			Name: init?.Name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CurveParams {
		return new CurveParams(this, true)
	}

	public __goscriptAssign(source: CurveParams): void {
		const target = this._fields
		const values = source._fields
		target.P = values.P
		target.N = values.N
		target.B = values.B
		target.Gx = values.Gx
		target.Gy = values.Gy
		target.BitSize = values.BitSize
		target.Name = values.Name
	}

	public async Add(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null, x2: big.Int | $.VarRef<big.Int> | null, y2: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		// If there is a dedicated constant-time implementation for this curve operation,
		// use that instead of the generic one.
		{
			let [specific, ok] = await matchesSpecificCurve(curve)
			if (ok) {
				return (specific !== null && (specific as any).__isVarRef !== true && (specific as any).__goValue === undefined ? (specific as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(specific)).Add(x1, y1, x2, y2)
			}
		}
		await __goscript_elliptic.panicIfNotOnCurve($.interfaceValue<__goscript_elliptic.Curve | null>(curve, "*elliptic.CurveParams", /* @__PURE__ */ $.pointerType("elliptic.CurveParams")), x1, y1)
		await __goscript_elliptic.panicIfNotOnCurve($.interfaceValue<__goscript_elliptic.Curve | null>(curve, "*elliptic.CurveParams", /* @__PURE__ */ $.pointerType("elliptic.CurveParams")), x2, y2)

		let z1: big.Int | $.VarRef<big.Int> | null = zForAffine(x1, y1)
		let z2: big.Int | $.VarRef<big.Int> | null = zForAffine(x2, y2)
		return CurveParams.prototype.affineFromJacobian.call(curve, ...((await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).addJacobian(x1, y1, z1, x2, y2, z2) : CurveParams.prototype.addJacobian.call(curve, x1, y1, z1, x2, y2, z2))) as [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]))
	}

	public async Double(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		// If there is a dedicated constant-time implementation for this curve operation,
		// use that instead of the generic one.
		{
			let [specific, ok] = await matchesSpecificCurve(curve)
			if (ok) {
				return (specific !== null && (specific as any).__isVarRef !== true && (specific as any).__goValue === undefined ? (specific as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(specific)).Double(x1, y1)
			}
		}
		await __goscript_elliptic.panicIfNotOnCurve($.interfaceValue<__goscript_elliptic.Curve | null>(curve, "*elliptic.CurveParams", /* @__PURE__ */ $.pointerType("elliptic.CurveParams")), x1, y1)

		let z1: big.Int | $.VarRef<big.Int> | null = zForAffine(x1, y1)
		return CurveParams.prototype.affineFromJacobian.call(curve, ...((await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).doubleJacobian(x1, y1, z1) : CurveParams.prototype.doubleJacobian.call(curve, x1, y1, z1))) as [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]))
	}

	public async IsOnCurve(x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<boolean> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		// If there is a dedicated constant-time implementation for this curve operation,
		// use that instead of the generic one.
		{
			let [specific, ok] = await matchesSpecificCurve(curve)
			if (ok) {
				return (specific !== null && (specific as any).__isVarRef !== true && (specific as any).__goValue === undefined ? (specific as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(specific)).IsOnCurve(x, y)
			}
		}

		if (((((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) < 0) || ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Cmp((curve$ as CurveParams).P) : big.Int.prototype.Cmp.call(x, (curve$ as CurveParams).P)) >= 0)) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) < 0)) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Cmp((curve$ as CurveParams).P) : big.Int.prototype.Cmp.call(y, (curve$ as CurveParams).P)) >= 0)) {
			return false
		}

		// y² = x³ - 3x + b
		let y2: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), y, y)
		await (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as big.Int).Mod(y2, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(y2, y2, (curve$ as CurveParams).P))

		return big.Int.prototype.Cmp.call(await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).polynomial(x) : CurveParams.prototype.polynomial.call(curve, x)), y2) == 0
	}

	public Params(): CurveParams | $.VarRef<CurveParams> | null {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		return curve
	}

	public async ScalarBaseMult(k: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		// If there is a dedicated constant-time implementation for this curve operation,
		// use that instead of the generic one.
		{
			let [specific, ok] = await matchesSpecificCurve(curve)
			if (ok) {
				return (specific !== null && (specific as any).__isVarRef !== true && (specific as any).__goValue === undefined ? (specific as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(specific)).ScalarBaseMult(k)
			}
		}

		return (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).ScalarMult((curve$ as CurveParams).Gx, (curve$ as CurveParams).Gy, k) : CurveParams.prototype.ScalarMult.call(curve, (curve$ as CurveParams).Gx, (curve$ as CurveParams).Gy, k))
	}

	public async ScalarMult(Bx: big.Int | $.VarRef<big.Int> | null, By: big.Int | $.VarRef<big.Int> | null, k: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		// If there is a dedicated constant-time implementation for this curve operation,
		// use that instead of the generic one.
		{
			let [specific, ok] = await matchesSpecificCurve(curve)
			if (ok) {
				return (specific !== null && (specific as any).__isVarRef !== true && (specific as any).__goValue === undefined ? (specific as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(specific)).ScalarMult(Bx, By, k)
			}
		}
		await __goscript_elliptic.panicIfNotOnCurve($.interfaceValue<__goscript_elliptic.Curve | null>(curve, "*elliptic.CurveParams", /* @__PURE__ */ $.pointerType("elliptic.CurveParams")), Bx, By)

		let Bz: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetInt64.call(new big.Int(), 1n)
		let x: big.Int | $.VarRef<big.Int> | null = new big.Int()
		let y: big.Int | $.VarRef<big.Int> | null = new big.Int()
		let z: big.Int | $.VarRef<big.Int> | null = new big.Int()

		for (let __goscriptRangeTarget0 = k, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			for (let __rangeIndex = 0; __rangeIndex < 8; __rangeIndex++) {
				let __goscriptTuple0: any = await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).doubleJacobian(x, y, z) : CurveParams.prototype.doubleJacobian.call(curve, x, y, z))
				x = __goscriptTuple0[0]
				y = __goscriptTuple0[1]
				z = __goscriptTuple0[2]
				if ($.uint((b & 0x80), 8) == 0x80) {
					let __goscriptTuple1: any = await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).addJacobian(Bx, By, Bz, x, y, z) : CurveParams.prototype.addJacobian.call(curve, Bx, By, Bz, x, y, z))
					x = __goscriptTuple1[0]
					y = __goscriptTuple1[1]
					z = __goscriptTuple1[2]
				}
				b = $.uint(b << (1), 8)
			}
		}

		return (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).affineFromJacobian(x, y, z) : CurveParams.prototype.affineFromJacobian.call(curve, x, y, z))
	}

	public async addJacobian(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null, z1: big.Int | $.VarRef<big.Int> | null, x2: big.Int | $.VarRef<big.Int> | null, y2: big.Int | $.VarRef<big.Int> | null, z2: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		// See https://hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#addition-add-2007-bl
		let x3: big.Int | $.VarRef<big.Int> | null = new big.Int()
		let y3: big.Int | $.VarRef<big.Int> | null = new big.Int()
		let z3: big.Int | $.VarRef<big.Int> | null = new big.Int()
		if ((z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(z1)) == 0) {
			void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Set(x2) : big.Int.prototype.Set.call(x3, x2))
			void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Set(y2) : big.Int.prototype.Set.call(y3, y2))
			void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Set(z2) : big.Int.prototype.Set.call(z3, z2))
			return [x3, y3, z3]
		}
		if ((z2 !== null && (z2 as any).__isVarRef !== true && (z2 as any).__goValue === undefined ? ((z2 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(z2)) == 0) {
			void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Set(x1) : big.Int.prototype.Set.call(x3, x1))
			void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Set(y1) : big.Int.prototype.Set.call(y3, y1))
			void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Set(z1) : big.Int.prototype.Set.call(z3, z1))
			return [x3, y3, z3]
		}

		let z1z1: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), z1, z1)
		await (z1z1 !== null && (z1z1 as any).__isVarRef !== true && (z1z1 as any).__goValue === undefined ? ((z1z1 as any) as big.Int).Mod(z1z1, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(z1z1, z1z1, (curve$ as CurveParams).P))
		let z2z2: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), z2, z2)
		await (z2z2 !== null && (z2z2 as any).__isVarRef !== true && (z2z2 as any).__goValue === undefined ? ((z2z2 as any) as big.Int).Mod(z2z2, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(z2z2, z2z2, (curve$ as CurveParams).P))

		let u1: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), x1, z2z2)
		await (u1 !== null && (u1 as any).__isVarRef !== true && (u1 as any).__goValue === undefined ? ((u1 as any) as big.Int).Mod(u1, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(u1, u1, (curve$ as CurveParams).P))
		let u2: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), x2, z1z1)
		await (u2 !== null && (u2 as any).__isVarRef !== true && (u2 as any).__goValue === undefined ? ((u2 as any) as big.Int).Mod(u2, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(u2, u2, (curve$ as CurveParams).P))
		let h: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Sub.call(new big.Int(), u2, u1)
		let xEqual = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as big.Int).Sign() : big.Int.prototype.Sign.call(h)) == 0
		if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as big.Int).Sign() : big.Int.prototype.Sign.call(h)) == -1) {
			void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as big.Int).Add(h, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(h, h, (curve$ as CurveParams).P))
		}
		let i: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Lsh.call(new big.Int(), h, 1)
		await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as big.Int).Mul(i, i) : big.Int.prototype.Mul.call(i, i, i))
		let j: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), h, i)

		let s1: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), y1, z2)
		await (s1 !== null && (s1 as any).__isVarRef !== true && (s1 as any).__goValue === undefined ? ((s1 as any) as big.Int).Mul(s1, z2z2) : big.Int.prototype.Mul.call(s1, s1, z2z2))
		await (s1 !== null && (s1 as any).__isVarRef !== true && (s1 as any).__goValue === undefined ? ((s1 as any) as big.Int).Mod(s1, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(s1, s1, (curve$ as CurveParams).P))
		let s2: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), y2, z1)
		await (s2 !== null && (s2 as any).__isVarRef !== true && (s2 as any).__goValue === undefined ? ((s2 as any) as big.Int).Mul(s2, z1z1) : big.Int.prototype.Mul.call(s2, s2, z1z1))
		await (s2 !== null && (s2 as any).__isVarRef !== true && (s2 as any).__goValue === undefined ? ((s2 as any) as big.Int).Mod(s2, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(s2, s2, (curve$ as CurveParams).P))
		let r: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Sub.call(new big.Int(), s2, s1)
		if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) == -1) {
			void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Add(r, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(r, r, (curve$ as CurveParams).P))
		}
		let yEqual = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) == 0
		if (xEqual && yEqual) {
			return (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? ((curve as any) as CurveParams).doubleJacobian(x1, y1, z1) : CurveParams.prototype.doubleJacobian.call(curve, x1, y1, z1))
		}
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Lsh(r, 1) : big.Int.prototype.Lsh.call(r, r, 1))
		let v: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), u1, i)

		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Set(r) : big.Int.prototype.Set.call(x3, r))
		await (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Mul(x3, x3) : big.Int.prototype.Mul.call(x3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sub(x3, j) : big.Int.prototype.Sub.call(x3, x3, j))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sub(x3, v) : big.Int.prototype.Sub.call(x3, x3, v))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sub(x3, v) : big.Int.prototype.Sub.call(x3, x3, v))
		await (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Mod(x3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(x3, x3, (curve$ as CurveParams).P))

		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Set(r) : big.Int.prototype.Set.call(y3, r))
		void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as big.Int).Sub(v, x3) : big.Int.prototype.Sub.call(v, v, x3))
		await (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Mul(y3, v) : big.Int.prototype.Mul.call(y3, y3, v))
		await (s1 !== null && (s1 as any).__isVarRef !== true && (s1 as any).__goValue === undefined ? ((s1 as any) as big.Int).Mul(s1, j) : big.Int.prototype.Mul.call(s1, s1, j))
		void (s1 !== null && (s1 as any).__isVarRef !== true && (s1 as any).__goValue === undefined ? ((s1 as any) as big.Int).Lsh(s1, 1) : big.Int.prototype.Lsh.call(s1, s1, 1))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Sub(y3, s1) : big.Int.prototype.Sub.call(y3, y3, s1))
		await (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Mod(y3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(y3, y3, (curve$ as CurveParams).P))

		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Add(z1, z2) : big.Int.prototype.Add.call(z3, z1, z2))
		await (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Mul(z3, z3) : big.Int.prototype.Mul.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sub(z3, z1z1) : big.Int.prototype.Sub.call(z3, z3, z1z1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sub(z3, z2z2) : big.Int.prototype.Sub.call(z3, z3, z2z2))
		await (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Mul(z3, h) : big.Int.prototype.Mul.call(z3, z3, h))
		await (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Mod(z3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(z3, z3, (curve$ as CurveParams).P))

		return [x3, y3, z3]
	}

	public async affineFromJacobian(x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null, z: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		let xOut: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let yOut: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		if ((z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as big.Int).Sign() : big.Int.prototype.Sign.call(z)) == 0) {
			return [new big.Int(), new big.Int()]
		}

		let zinv: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.ModInverse.call(new big.Int(), z, (curve$ as CurveParams).P)
		let zinvsq: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), zinv, zinv)

		xOut = await big.Int.prototype.Mul.call(new big.Int(), x, zinvsq)
		await (xOut !== null && (xOut as any).__isVarRef !== true && (xOut as any).__goValue === undefined ? ((xOut as any) as big.Int).Mod(xOut, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(xOut, xOut, (curve$ as CurveParams).P))
		await (zinvsq !== null && (zinvsq as any).__isVarRef !== true && (zinvsq as any).__goValue === undefined ? ((zinvsq as any) as big.Int).Mul(zinvsq, zinv) : big.Int.prototype.Mul.call(zinvsq, zinvsq, zinv))
		yOut = await big.Int.prototype.Mul.call(new big.Int(), y, zinvsq)
		await (yOut !== null && (yOut as any).__isVarRef !== true && (yOut as any).__goValue === undefined ? ((yOut as any) as big.Int).Mod(yOut, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(yOut, yOut, (curve$ as CurveParams).P))
		return [xOut, yOut]
	}

	public async doubleJacobian(x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null, z: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		// See https://hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
		let delta: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), z, z)
		await (delta !== null && (delta as any).__isVarRef !== true && (delta as any).__goValue === undefined ? ((delta as any) as big.Int).Mod(delta, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(delta, delta, (curve$ as CurveParams).P))
		let gamma: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), y, y)
		await (gamma !== null && (gamma as any).__isVarRef !== true && (gamma as any).__goValue === undefined ? ((gamma as any) as big.Int).Mod(gamma, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(gamma, gamma, (curve$ as CurveParams).P))
		let alpha: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Sub.call(new big.Int(), x, delta)
		if ((alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Sign() : big.Int.prototype.Sign.call(alpha)) == -1) {
			void (alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Add(alpha, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(alpha, alpha, (curve$ as CurveParams).P))
		}
		let alpha2: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Add.call(new big.Int(), x, delta)
		await (alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Mul(alpha, alpha2) : big.Int.prototype.Mul.call(alpha, alpha, alpha2))
		void (alpha2 !== null && (alpha2 as any).__isVarRef !== true && (alpha2 as any).__goValue === undefined ? ((alpha2 as any) as big.Int).Set(alpha) : big.Int.prototype.Set.call(alpha2, alpha))
		void (alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Lsh(alpha, 1) : big.Int.prototype.Lsh.call(alpha, alpha, 1))
		void (alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Add(alpha, alpha2) : big.Int.prototype.Add.call(alpha, alpha, alpha2))

		let beta: big.Int | $.VarRef<big.Int> | null = await (alpha2 !== null && (alpha2 as any).__isVarRef !== true && (alpha2 as any).__goValue === undefined ? ((alpha2 as any) as big.Int).Mul(x, gamma) : big.Int.prototype.Mul.call(alpha2, x, gamma))

		let x3: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), alpha, alpha)
		let beta8: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Lsh.call(new big.Int(), beta, 3)
		await (beta8 !== null && (beta8 as any).__isVarRef !== true && (beta8 as any).__goValue === undefined ? ((beta8 as any) as big.Int).Mod(beta8, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(beta8, beta8, (curve$ as CurveParams).P))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sub(x3, beta8) : big.Int.prototype.Sub.call(x3, x3, beta8))
		if ((x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x3)) == -1) {
			void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Add(x3, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(x3, x3, (curve$ as CurveParams).P))
		}
		await (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Mod(x3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(x3, x3, (curve$ as CurveParams).P))

		let z3: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Add.call(new big.Int(), y, z)
		await (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Mul(z3, z3) : big.Int.prototype.Mul.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sub(z3, gamma) : big.Int.prototype.Sub.call(z3, z3, gamma))
		if ((z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(z3)) == -1) {
			void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Add(z3, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(z3, z3, (curve$ as CurveParams).P))
		}
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sub(z3, delta) : big.Int.prototype.Sub.call(z3, z3, delta))
		if ((z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(z3)) == -1) {
			void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Add(z3, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(z3, z3, (curve$ as CurveParams).P))
		}
		await (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as big.Int).Mod(z3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(z3, z3, (curve$ as CurveParams).P))

		void (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as big.Int).Lsh(beta, 2) : big.Int.prototype.Lsh.call(beta, beta, 2))
		void (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as big.Int).Sub(beta, x3) : big.Int.prototype.Sub.call(beta, beta, x3))
		if ((beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as big.Int).Sign() : big.Int.prototype.Sign.call(beta)) == -1) {
			void (beta !== null && (beta as any).__isVarRef !== true && (beta as any).__goValue === undefined ? ((beta as any) as big.Int).Add(beta, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(beta, beta, (curve$ as CurveParams).P))
		}
		let y3: big.Int | $.VarRef<big.Int> | null = await (alpha !== null && (alpha as any).__isVarRef !== true && (alpha as any).__goValue === undefined ? ((alpha as any) as big.Int).Mul(alpha, beta) : big.Int.prototype.Mul.call(alpha, alpha, beta))

		await (gamma !== null && (gamma as any).__isVarRef !== true && (gamma as any).__goValue === undefined ? ((gamma as any) as big.Int).Mul(gamma, gamma) : big.Int.prototype.Mul.call(gamma, gamma, gamma))
		void (gamma !== null && (gamma as any).__isVarRef !== true && (gamma as any).__goValue === undefined ? ((gamma as any) as big.Int).Lsh(gamma, 3) : big.Int.prototype.Lsh.call(gamma, gamma, 3))
		await (gamma !== null && (gamma as any).__isVarRef !== true && (gamma as any).__goValue === undefined ? ((gamma as any) as big.Int).Mod(gamma, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(gamma, gamma, (curve$ as CurveParams).P))

		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Sub(y3, gamma) : big.Int.prototype.Sub.call(y3, y3, gamma))
		if ((y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y3)) == -1) {
			void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Add(y3, (curve$ as CurveParams).P) : big.Int.prototype.Add.call(y3, y3, (curve$ as CurveParams).P))
		}
		await (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as big.Int).Mod(y3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(y3, y3, (curve$ as CurveParams).P))

		return [x3, y3, z3]
	}

	public async polynomial(x: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<big.Int | $.VarRef<big.Int> | null> {
		const curve: CurveParams | $.VarRef<CurveParams> | null = this;
		const curve$: CurveParams = curve == null ? $.pointerTarget<CurveParams>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<CurveParams>(curve)
		let x3: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), x, x)
		await (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Mul(x3, x) : big.Int.prototype.Mul.call(x3, x3, x))

		let threeX: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Lsh.call(new big.Int(), x, 1)
		void (threeX !== null && (threeX as any).__isVarRef !== true && (threeX as any).__goValue === undefined ? ((threeX as any) as big.Int).Add(threeX, x) : big.Int.prototype.Add.call(threeX, threeX, x))

		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Sub(x3, threeX) : big.Int.prototype.Sub.call(x3, x3, threeX))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Add(x3, (curve$ as CurveParams).B) : big.Int.prototype.Add.call(x3, x3, (curve$ as CurveParams).B))
		await (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as big.Int).Mod(x3, (curve$ as CurveParams).P) : big.Int.prototype.Mod.call(x3, x3, (curve$ as CurveParams).P))

		return x3
	}

	static __typeInfo = $.registerStructType(
		"elliptic.CurveParams",
		() => new CurveParams(),
		() => [$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")], true), $.methodSignature("ScalarBaseMult", [["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("addJacobian", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["z1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")], ["z2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("affineFromJacobian", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["z", /* @__PURE__ */ $.pointerType("big.Int")]], [["xOut", /* @__PURE__ */ $.pointerType("big.Int")], ["yOut", /* @__PURE__ */ $.pointerType("big.Int")]], true), $.methodSignature("doubleJacobian", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")], ["z", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("polynomial", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int")], true)],
		CurveParams,
		() => [/* @__PURE__ */ $.structField("P", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("B", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true), /* @__PURE__ */ $.structField("Gx", /* @__PURE__ */ $.pointerType("big.Int"), [3], 24, true), /* @__PURE__ */ $.structField("Gy", /* @__PURE__ */ $.pointerType("big.Int"), [4], 32, true), /* @__PURE__ */ $.structField("BitSize", /* @__PURE__ */ $.basicType("int"), [5], 40, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [6], 48, true)]
	)
}

export function zForAffine(x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): big.Int | $.VarRef<big.Int> | null {
	let z: big.Int | $.VarRef<big.Int> | null = new big.Int()
	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) != 0) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) != 0)) {
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as big.Int).SetInt64(1n) : big.Int.prototype.SetInt64.call(z, 1n))
	}
	return z
}

export async function matchesSpecificCurve(params: CurveParams | $.VarRef<CurveParams> | null): globalThis.Promise<[__goscript_elliptic.Curve | null, boolean]> {
	for (let __goscriptRangeTarget1 = $.arrayToSlice<__goscript_elliptic.Curve | null>([$.namedValueInterfaceValue<__goscript_elliptic.Curve | null>(__goscript_nistec.__goscript_get_p224(), "*elliptic.nistCurve", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()), $.namedValueInterfaceValue<__goscript_elliptic.Curve | null>(__goscript_nistec.__goscript_get_p256(), "*elliptic.nistCurve", __goscriptStatic5(), __goscriptStatic2(), __goscriptStatic6()), $.namedValueInterfaceValue<__goscript_elliptic.Curve | null>(__goscript_nistec.__goscript_get_p384(), "*elliptic.nistCurve", __goscriptStatic8(), __goscriptStatic2(), __goscriptStatic9()), $.namedValueInterfaceValue<__goscript_elliptic.Curve | null>(__goscript_nistec.__goscript_get_p521(), "*elliptic.nistCurve", __goscriptStatic11(), __goscriptStatic2(), __goscriptStatic12())]), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_elliptic.Curve | null)
		if ($.pointerEqual(params, ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_elliptic.Curve, null>) : $.pointerValue<Exclude<__goscript_elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as CurveParams | $.VarRef<CurveParams> | null))) {
			return [c, true]
		}
	}
	return [null, false]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P224Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic0(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.pointerType("elliptic.nistCurve"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P256Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddAffine(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), Negate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Negate(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic4(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P384Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic7(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P521Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic10(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptAwait: any
