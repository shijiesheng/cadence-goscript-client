// Generated file based on zipf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as __goscript_exp from "./exp.gs.ts"

import * as __goscript_normal from "./normal.gs.ts"

import * as __goscript_rand from "./rand.gs.ts"
import "@goscript/math/index.js"
import "./exp.gs.ts"
import "./normal.gs.ts"
import "./rand.gs.ts"

$.registerTypePackagePath("math/rand", ["rand.Zipf"])

export class Zipf {
	public get r(): __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null {
		return this._fields.r
	}

	public set r(value: __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null) {
		this._fields.r = value
	}

	public get imax(): number {
		return this._fields.imax
	}

	public set imax(value: number) {
		this._fields.imax = value
	}

	public get v(): number {
		return this._fields.v
	}

	public set v(value: number) {
		this._fields.v = value
	}

	public get q(): number {
		return this._fields.q
	}

	public set q(value: number) {
		this._fields.q = value
	}

	public get s(): number {
		return this._fields.s
	}

	public set s(value: number) {
		this._fields.s = value
	}

	public get oneminusQ(): number {
		return this._fields.oneminusQ
	}

	public set oneminusQ(value: number) {
		this._fields.oneminusQ = value
	}

	public get oneminusQinv(): number {
		return this._fields.oneminusQinv
	}

	public set oneminusQinv(value: number) {
		this._fields.oneminusQinv = value
	}

	public get hxm(): number {
		return this._fields.hxm
	}

	public set hxm(value: number) {
		this._fields.hxm = value
	}

	public get hx0minusHxm(): number {
		return this._fields.hx0minusHxm
	}

	public set hx0minusHxm(value: number) {
		this._fields.hx0minusHxm = value
	}

	public _fields: {
		r: __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null
		imax: number
		v: number
		q: number
		s: number
		oneminusQ: number
		oneminusQinv: number
		hxm: number
		hx0minusHxm: number
	}

	constructor(init?: Partial<{r?: __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null, imax?: number, v?: number, q?: number, s?: number, oneminusQ?: number, oneminusQinv?: number, hxm?: number, hx0minusHxm?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null),
			imax: init?.imax ?? (0 as number),
			v: init?.v ?? (0 as number),
			q: init?.q ?? (0 as number),
			s: init?.s ?? (0 as number),
			oneminusQ: init?.oneminusQ ?? (0 as number),
			oneminusQinv: init?.oneminusQinv ?? (0 as number),
			hxm: init?.hxm ?? (0 as number),
			hx0minusHxm: init?.hx0minusHxm ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Zipf {
		return new Zipf(this, true)
	}

	public __goscriptAssign(source: Zipf): void {
		const target = this._fields
		const values = source._fields
		target.r = values.r
		target.imax = values.imax
		target.v = values.v
		target.q = values.q
		target.s = values.s
		target.oneminusQ = values.oneminusQ
		target.oneminusQinv = values.oneminusQinv
		target.hxm = values.hxm
		target.hx0minusHxm = values.hx0minusHxm
	}

	public async Uint64(): globalThis.Promise<bigint> {
		const z: Zipf | $.VarRef<Zipf> | null = this;
		const z$: Zipf = z == null ? $.pointerTarget<Zipf>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Zipf>(z)
		if (z == null) {
			$.panic("rand: nil Zipf")
		}
		let k = 0.0

		while (true) {
			let r = await __goscript_rand.Rand.prototype.Float64.call((z$ as Zipf).r)
			let ur = (z$ as Zipf).hxm + (r * (z$ as Zipf).hx0minusHxm)
			let x = (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Zipf).hinv(ur) : Zipf.prototype.hinv.call(z, ur))
			k = math.Floor(x + 0.5)
			if ((k - x) <= (z$ as Zipf).s) {
				break
			}
			if (ur >= ((z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Zipf).h(k + 0.5) : Zipf.prototype.h.call(z, k + 0.5)) - math.Exp(-math.Log(k + (z$ as Zipf).v) * (z$ as Zipf).q))) {
				break
			}
		}
		return $.uint64(k)
	}

	public h(x: number): number {
		const z: Zipf | $.VarRef<Zipf> | null = this;
		const z$: Zipf = z == null ? $.pointerTarget<Zipf>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Zipf>(z)
		return math.Exp((z$ as Zipf).oneminusQ * math.Log((z$ as Zipf).v + x)) * (z$ as Zipf).oneminusQinv
	}

	public hinv(x: number): number {
		const z: Zipf | $.VarRef<Zipf> | null = this;
		const z$: Zipf = z == null ? $.pointerTarget<Zipf>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Zipf>(z)
		return math.Exp((z$ as Zipf).oneminusQinv * math.Log((z$ as Zipf).oneminusQ * x)) - (z$ as Zipf).v
	}

	static __typeInfo = $.registerStructType(
		"rand.Zipf",
		() => new Zipf(),
		() => [$.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("h", [["x", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("hinv", [["x", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true)],
		Zipf,
		() => [/* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("rand.Rand"), [0], 0, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("imax", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("float64"), [2], 16, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("q", /* @__PURE__ */ $.basicType("float64"), [3], 24, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("float64"), [4], 32, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("oneminusQ", /* @__PURE__ */ $.basicType("float64"), [5], 40, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("oneminusQinv", /* @__PURE__ */ $.basicType("float64"), [6], 48, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("hxm", /* @__PURE__ */ $.basicType("float64"), [7], 56, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("hx0minusHxm", /* @__PURE__ */ $.basicType("float64"), [8], 64, false, { pkgPath: "math/rand" })]
	)
}

export function NewZipf(r: __goscript_rand.Rand | $.VarRef<__goscript_rand.Rand> | null, s: number, v: number, imax: bigint): Zipf | $.VarRef<Zipf> | null {
	let z: Zipf | $.VarRef<Zipf> | null = new Zipf()
	let z$: Zipf = z == null ? $.pointerTarget<Zipf>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Zipf>(z)
	if ((s <= 1.0) || (v < 1)) {
		return null
	}
	;(z$ as Zipf).r = r;
	;(z$ as Zipf).imax = globalThis.Number(imax);
	;(z$ as Zipf).v = v;
	;(z$ as Zipf).q = s;
	;(z$ as Zipf).oneminusQ = 1.0 - (z$ as Zipf).q;
	;(z$ as Zipf).oneminusQinv = 1.0 / (z$ as Zipf).oneminusQ;
	;(z$ as Zipf).hxm = (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Zipf).h((z$ as Zipf).imax + 0.5) : Zipf.prototype.h.call(z, (z$ as Zipf).imax + 0.5));
	;(z$ as Zipf).hx0minusHxm = ((z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Zipf).h(0.5) : Zipf.prototype.h.call(z, 0.5)) - math.Exp(math.Log((z$ as Zipf).v) * (-(z$ as Zipf).q))) - (z$ as Zipf).hxm;
	;(z$ as Zipf).s = 1 - Zipf.prototype.hinv.call(z, (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Zipf).h(1.5) : Zipf.prototype.h.call(z, 1.5)) - math.Exp(-(z$ as Zipf).q * math.Log((z$ as Zipf).v + 1.0)))
	return z
}
