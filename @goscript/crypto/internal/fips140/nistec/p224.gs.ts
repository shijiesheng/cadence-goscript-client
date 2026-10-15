// Generated file based on p224.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as fiat from "@goscript/crypto/internal/fips140/nistec/fiat/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_p224_sqrt from "./p224_sqrt.gs.ts"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/nistec/fiat/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "./p224_sqrt.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/nistec", ["nistec.P224Point", "nistec.p224Table"])

export type p224Table = (P224Point | $.VarRef<P224Point> | null)[]

$.registerNamedType("nistec.p224Table", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("nistec.P224Point"), 15));

$.registerNamedValueType(
	"*nistec.p224Table",
	{Select: (receiver: any, ...args: any[]) => (p224Table_Select as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Select", [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["n", /* @__PURE__ */ $.basicType("uint8")]])]
);

export class P224Point {
	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get x(): fiat.P224Element | $.VarRef<fiat.P224Element> | null {
		return this._fields.x
	}

	public set x(value: fiat.P224Element | $.VarRef<fiat.P224Element> | null) {
		this._fields.x = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get y(): fiat.P224Element | $.VarRef<fiat.P224Element> | null {
		return this._fields.y
	}

	public set y(value: fiat.P224Element | $.VarRef<fiat.P224Element> | null) {
		this._fields.y = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get z(): fiat.P224Element | $.VarRef<fiat.P224Element> | null {
		return this._fields.z
	}

	public set z(value: fiat.P224Element | $.VarRef<fiat.P224Element> | null) {
		this._fields.z = value
	}

	public _fields: {
		x: fiat.P224Element | $.VarRef<fiat.P224Element> | null
		y: fiat.P224Element | $.VarRef<fiat.P224Element> | null
		z: fiat.P224Element | $.VarRef<fiat.P224Element> | null
	}

	constructor(init?: Partial<{x?: fiat.P224Element | $.VarRef<fiat.P224Element> | null, y?: fiat.P224Element | $.VarRef<fiat.P224Element> | null, z?: fiat.P224Element | $.VarRef<fiat.P224Element> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ?? (null! as fiat.P224Element | $.VarRef<fiat.P224Element> | null),
			y: init?.y ?? (null! as fiat.P224Element | $.VarRef<fiat.P224Element> | null),
			z: init?.z ?? (null! as fiat.P224Element | $.VarRef<fiat.P224Element> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P224Point {
		return new P224Point(this, true)
	}

	public __goscriptAssign(source: P224Point): void {
		const target = this._fields
		const values = source._fields
		target.x = values.x
		target.y = values.y
		target.z = values.z
	}

	public async Add(p1: P224Point | $.VarRef<P224Point> | null, p2: P224Point | $.VarRef<P224Point> | null): globalThis.Promise<P224Point | $.VarRef<P224Point> | null> {
		const q: P224Point | $.VarRef<P224Point> | null = this;
		const q$: P224Point = q == null ? $.pointerTarget<P224Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P224Point>(q)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), $.pointerValue<P224Point>(p1).x, $.pointerValue<P224Point>(p2).x)
		let t1: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), $.pointerValue<P224Point>(p1).y, $.pointerValue<P224Point>(p2).y)
		let t2: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), $.pointerValue<P224Point>(p1).z, $.pointerValue<P224Point>(p2).z)
		let t3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), $.pointerValue<P224Point>(p1).x, $.pointerValue<P224Point>(p1).y)
		let t4: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), $.pointerValue<P224Point>(p2).x, $.pointerValue<P224Point>(p2).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Mul(t3, t4) : fiat.P224Element.prototype.Mul.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P224Element).Add(t0, t1) : fiat.P224Element.prototype.Add.call(t4, t0, t1))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Sub(t3, t4) : fiat.P224Element.prototype.Sub.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P224Element).Add($.pointerValue<P224Point>(p1).y, $.pointerValue<P224Point>(p1).z) : fiat.P224Element.prototype.Add.call(t4, $.pointerValue<P224Point>(p1).y, $.pointerValue<P224Point>(p1).z))
		let x3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), $.pointerValue<P224Point>(p2).y, $.pointerValue<P224Point>(p2).z)
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P224Element).Mul(t4, x3) : fiat.P224Element.prototype.Mul.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Add(t1, t2) : fiat.P224Element.prototype.Add.call(x3, t1, t2))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P224Element).Sub(t4, x3) : fiat.P224Element.prototype.Sub.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Add($.pointerValue<P224Point>(p1).x, $.pointerValue<P224Point>(p1).z) : fiat.P224Element.prototype.Add.call(x3, $.pointerValue<P224Point>(p1).x, $.pointerValue<P224Point>(p1).z))
		let y3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), $.pointerValue<P224Point>(p2).x, $.pointerValue<P224Point>(p2).z)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Mul(x3, y3) : fiat.P224Element.prototype.Mul.call(x3, x3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(t0, t2) : fiat.P224Element.prototype.Add.call(y3, t0, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Sub(x3, y3) : fiat.P224Element.prototype.Sub.call(y3, x3, y3))
		let z3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), await p224B(), t2)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Sub(y3, z3) : fiat.P224Element.prototype.Sub.call(x3, y3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(x3, x3) : fiat.P224Element.prototype.Add.call(z3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Add(x3, z3) : fiat.P224Element.prototype.Add.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Sub(t1, x3) : fiat.P224Element.prototype.Sub.call(z3, t1, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Add(t1, x3) : fiat.P224Element.prototype.Add.call(x3, t1, x3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Mul(await p224B(), y3) : fiat.P224Element.prototype.Mul.call(y3, await p224B(), y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P224Element).Add(t2, t2) : fiat.P224Element.prototype.Add.call(t1, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P224Element).Add(t1, t2) : fiat.P224Element.prototype.Add.call(t2, t1, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Sub(y3, t2) : fiat.P224Element.prototype.Sub.call(y3, y3, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Sub(y3, t0) : fiat.P224Element.prototype.Sub.call(y3, y3, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P224Element).Add(y3, y3) : fiat.P224Element.prototype.Add.call(t1, y3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(t1, y3) : fiat.P224Element.prototype.Add.call(y3, t1, y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P224Element).Add(t0, t0) : fiat.P224Element.prototype.Add.call(t1, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Add(t1, t0) : fiat.P224Element.prototype.Add.call(t0, t1, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Sub(t0, t2) : fiat.P224Element.prototype.Sub.call(t0, t0, t2))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P224Element).Mul(t4, y3) : fiat.P224Element.prototype.Mul.call(t1, t4, y3))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P224Element).Mul(t0, y3) : fiat.P224Element.prototype.Mul.call(t2, t0, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Mul(x3, z3) : fiat.P224Element.prototype.Mul.call(y3, x3, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(y3, t2) : fiat.P224Element.prototype.Add.call(y3, y3, t2))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Mul(t3, x3) : fiat.P224Element.prototype.Mul.call(x3, t3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Sub(x3, t1) : fiat.P224Element.prototype.Sub.call(x3, x3, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Mul(t4, z3) : fiat.P224Element.prototype.Mul.call(z3, t4, z3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P224Element).Mul(t3, t0) : fiat.P224Element.prototype.Mul.call(t1, t3, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(z3, t1) : fiat.P224Element.prototype.Add.call(z3, z3, t1))

		fiat.P224Element.prototype.Set.call((q$ as P224Point).x, x3)
		fiat.P224Element.prototype.Set.call((q$ as P224Point).y, y3)
		fiat.P224Element.prototype.Set.call((q$ as P224Point).z, z3)
		return q
	}

	public Bytes(): $.Slice<number> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(57)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).bytes(out) : P224Point.prototype.bytes.call(p, out))
	}

	public BytesCompressed(): $.Slice<number> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(29)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).bytesCompressed(out) : P224Point.prototype.bytesCompressed.call(p, out))
	}

	public BytesX(): [$.Slice<number>, $.GoError] {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(28)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).bytesX(out) : P224Point.prototype.bytesX.call(p, out))
	}

	public async Double(p: P224Point | $.VarRef<P224Point> | null): globalThis.Promise<P224Point | $.VarRef<P224Point> | null> {
		const q: P224Point | $.VarRef<P224Point> | null = this;
		const q$: P224Point = q == null ? $.pointerTarget<P224Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P224Point>(q)
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Square.call(new fiat.P224Element(), (p$ as P224Point).x)
		let t1: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Square.call(new fiat.P224Element(), (p$ as P224Point).y)
		let t2: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Square.call(new fiat.P224Element(), (p$ as P224Point).z)
		let t3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).x, (p$ as P224Point).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Add(t3, t3) : fiat.P224Element.prototype.Add.call(t3, t3, t3))
		let z3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).x, (p$ as P224Point).z)
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(z3, z3) : fiat.P224Element.prototype.Add.call(z3, z3, z3))
		let y3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), await p224B(), t2)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Sub(y3, z3) : fiat.P224Element.prototype.Sub.call(y3, y3, z3))
		let x3: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), y3, y3)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(x3, y3) : fiat.P224Element.prototype.Add.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Sub(t1, y3) : fiat.P224Element.prototype.Sub.call(x3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(t1, y3) : fiat.P224Element.prototype.Add.call(y3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Mul(x3, y3) : fiat.P224Element.prototype.Mul.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Mul(x3, t3) : fiat.P224Element.prototype.Mul.call(x3, x3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Add(t2, t2) : fiat.P224Element.prototype.Add.call(t3, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P224Element).Add(t2, t3) : fiat.P224Element.prototype.Add.call(t2, t2, t3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Mul(await p224B(), z3) : fiat.P224Element.prototype.Mul.call(z3, await p224B(), z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Sub(z3, t2) : fiat.P224Element.prototype.Sub.call(z3, z3, t2))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Sub(z3, t0) : fiat.P224Element.prototype.Sub.call(z3, z3, t0))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Add(z3, z3) : fiat.P224Element.prototype.Add.call(t3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(z3, t3) : fiat.P224Element.prototype.Add.call(z3, z3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P224Element).Add(t0, t0) : fiat.P224Element.prototype.Add.call(t3, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Add(t3, t0) : fiat.P224Element.prototype.Add.call(t0, t3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Sub(t0, t2) : fiat.P224Element.prototype.Sub.call(t0, t0, t2))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Mul(t0, z3) : fiat.P224Element.prototype.Mul.call(t0, t0, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P224Element).Add(y3, t0) : fiat.P224Element.prototype.Add.call(y3, y3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Mul((p$ as P224Point).y, (p$ as P224Point).z) : fiat.P224Element.prototype.Mul.call(t0, (p$ as P224Point).y, (p$ as P224Point).z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P224Element).Add(t0, t0) : fiat.P224Element.prototype.Add.call(t0, t0, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Mul(t0, z3) : fiat.P224Element.prototype.Mul.call(z3, t0, z3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P224Element).Sub(x3, z3) : fiat.P224Element.prototype.Sub.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Mul(t0, t1) : fiat.P224Element.prototype.Mul.call(z3, t0, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(z3, z3) : fiat.P224Element.prototype.Add.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P224Element).Add(z3, z3) : fiat.P224Element.prototype.Add.call(z3, z3, z3))

		fiat.P224Element.prototype.Set.call((q$ as P224Point).x, x3)
		fiat.P224Element.prototype.Set.call((q$ as P224Point).y, y3)
		fiat.P224Element.prototype.Set.call((q$ as P224Point).z, z3)
		return q
	}

	public async ScalarBaseMult(scalar: $.Slice<number>): globalThis.Promise<[P224Point | $.VarRef<P224Point> | null, $.GoError]> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		if ($.sliceLen(scalar) != 28) {
			return [null, errors.New("invalid scalar length")]
		}
		let tables: $.VarRef<p224Table[]> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).generatorTable() : P224Point.prototype.generatorTable.call(p))

		// This is also a scalar multiplication with a four-bit window like in
		// ScalarMult, but in this case the doublings are precomputed. The value
		// [windowValue]G added at iteration k would normally get doubled
		// (totIterations-k)×4 times, but with a larger precomputation we can
		// instead add [2^((totIterations-k)×4)][windowValue]G and avoid the
		// doublings between iterations.
		let t: P224Point | $.VarRef<P224Point> | null = NewP224Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Set(NewP224Point()) : P224Point.prototype.Set.call(p, NewP224Point()))
		let tableIndex = 55
		for (let __goscriptRangeTarget0 = scalar, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let byte = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p224Table_Select($.indexRef($.pointerValue<p224Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Add(p, t) : P224Point.prototype.Add.call(p, p, t))
			tableIndex--

			windowValue = $.uint(byte & 0b1111, 8)
			p224Table_Select($.indexRef($.pointerValue<p224Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Add(p, t) : P224Point.prototype.Add.call(p, p, t))
			tableIndex--
		}

		return [p, null]
	}

	public async ScalarMult(q: P224Point | $.VarRef<P224Point> | null, scalar: $.Slice<number>): globalThis.Promise<[P224Point | $.VarRef<P224Point> | null, $.GoError]> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		// Compute a p224Table for the base point q. The explicit NewP224Point
		// calls get inlined, letting the allocations live on the stack.
		let table: $.VarRef<p224Table> = $.varRef($.arrayValue([NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point(), NewP224Point()]))
		P224Point.prototype.Set.call($.arrayIndex(table.value, 0), q)
		for (let i = 1; i < 15; i = i + (2)) {
			await P224Point.prototype.Double.call($.arrayIndex(table.value, i), $.arrayIndex(table.value, globalThis.Math.trunc(i / 2)))
			await P224Point.prototype.Add.call($.arrayIndex(table.value, i + 1), $.arrayIndex(table.value, i), q)
		}

		// Instead of doing the classic double-and-add chain, we do it with a
		// four-bit window: we double four times, and then add [0-15]P.
		let t: P224Point | $.VarRef<P224Point> | null = NewP224Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Set(NewP224Point()) : P224Point.prototype.Set.call(p, NewP224Point()))
		for (let __goscriptRangeTarget1 = scalar, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let byte = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
			// No need to double on the first iteration, as p is the identity at
			// this point, and [N]∞ = ∞.
			if (i != 0) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
			}

			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p224Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Add(p, t) : P224Point.prototype.Add.call(p, p, t))

			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Double(p) : P224Point.prototype.Double.call(p, p))

			windowValue = $.uint(byte & 0b1111, 8)
			p224Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Add(p, t) : P224Point.prototype.Add.call(p, p, t))
		}

		return [p, null]
	}

	public Select(p1: P224Point | $.VarRef<P224Point> | null, p2: P224Point | $.VarRef<P224Point> | null, cond: number): P224Point | $.VarRef<P224Point> | null {
		const q: P224Point | $.VarRef<P224Point> | null = this;
		const q$: P224Point = q == null ? $.pointerTarget<P224Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P224Point>(q)
		fiat.P224Element.prototype.Select.call((q$ as P224Point).x, $.pointerValue<P224Point>(p1).x, $.pointerValue<P224Point>(p2).x, cond)
		fiat.P224Element.prototype.Select.call((q$ as P224Point).y, $.pointerValue<P224Point>(p1).y, $.pointerValue<P224Point>(p2).y, cond)
		fiat.P224Element.prototype.Select.call((q$ as P224Point).z, $.pointerValue<P224Point>(p1).z, $.pointerValue<P224Point>(p2).z, cond)
		return q
	}

	public Set(q: P224Point | $.VarRef<P224Point> | null): P224Point | $.VarRef<P224Point> | null {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		const q$: P224Point = q == null ? $.pointerTarget<P224Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P224Point>(q)
		fiat.P224Element.prototype.Set.call((p$ as P224Point).x, (q$ as P224Point).x)
		fiat.P224Element.prototype.Set.call((p$ as P224Point).y, (q$ as P224Point).y)
		fiat.P224Element.prototype.Set.call((p$ as P224Point).z, (q$ as P224Point).z)
		return p
	}

	public async SetBytes(b: $.Slice<number>): globalThis.Promise<[P224Point | $.VarRef<P224Point> | null, $.GoError]> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		switch ((true as boolean)) {
			case ($.sliceLen(b) == 1) && ($.arrayIndex(b!, 0) == 0):
			{
				return [(p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Set(NewP224Point()) : P224Point.prototype.Set.call(p, NewP224Point())), null]
				break
			}
			case ($.sliceLen(b) == 57) && ($.arrayIndex(b!, 0) == 4):
			{
				let __goscriptTuple0: any = fiat.P224Element.prototype.SetBytes.call(new fiat.P224Element(), $.goSlice(b, 1, 1 + 28))
				let x: fiat.P224Element | $.VarRef<fiat.P224Element> | null = __goscriptTuple0[0]
				let err = __goscriptTuple0[1]
				if (err != null) {
					return [null, err]
				}
				let __goscriptTuple1: any = fiat.P224Element.prototype.SetBytes.call(new fiat.P224Element(), $.goSlice(b, 1 + 28, undefined))
				let y: fiat.P224Element | $.VarRef<fiat.P224Element> | null = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [null, err]
				}
				{
					let __goscriptShadow0 = await p224CheckOnCurve(x, y)
					if (__goscriptShadow0 != null) {
						return [null, __goscriptShadow0]
					}
				}
				fiat.P224Element.prototype.Set.call((p$ as P224Point).x, x)
				fiat.P224Element.prototype.Set.call((p$ as P224Point).y, y)
				fiat.P224Element.prototype.One.call((p$ as P224Point).z)
				return [p, null]
				break
			}
			case ($.sliceLen(b) == 29) && (($.arrayIndex(b!, 0) == 2) || ($.arrayIndex(b!, 0) == 3)):
			{
				let __goscriptTuple2: any = fiat.P224Element.prototype.SetBytes.call(new fiat.P224Element(), $.goSlice(b, 1, undefined))
				let x: fiat.P224Element | $.VarRef<fiat.P224Element> | null = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}

				// y² = x³ - 3x + b
				let y: fiat.P224Element | $.VarRef<fiat.P224Element> | null = await p224Polynomial(new fiat.P224Element(), x)
				if (!await p224Sqrt(y, y)) {
					return [null, errors.New("invalid P224 compressed point encoding")]
				}

				// Select the positive or negative root, as indicated by the least
				// significant bit, based on the encoding type byte.
				let otherRoot: fiat.P224Element | $.VarRef<fiat.P224Element> | null = new fiat.P224Element()
				void (otherRoot !== null && (otherRoot as any).__isVarRef !== true && (otherRoot as any).__goValue === undefined ? ((otherRoot as any) as fiat.P224Element).Sub(otherRoot, y) : fiat.P224Element.prototype.Sub.call(otherRoot, otherRoot, y))
				let cond = $.uint(($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(y))!, 28 - 1) & 1) ^ ($.arrayIndex(b!, 0) & 1), 8)
				void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P224Element).Select(otherRoot, y, $.int(cond)) : fiat.P224Element.prototype.Select.call(y, otherRoot, y, $.int(cond)))

				fiat.P224Element.prototype.Set.call((p$ as P224Point).x, x)
				fiat.P224Element.prototype.Set.call((p$ as P224Point).y, y)
				fiat.P224Element.prototype.One.call((p$ as P224Point).z)
				return [p, null]
				break
			}
			default:
			{
				return [null, errors.New("invalid P224 point encoding")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SetGenerator(): P224Point | $.VarRef<P224Point> | null {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		fiat.P224Element.prototype.SetBytes.call((p$ as P224Point).x, new Uint8Array([183, 14, 12, 189, 107, 180, 191, 127, 50, 19, 144, 185, 74, 3, 193, 211, 86, 194, 17, 34, 52, 50, 128, 214, 17, 92, 29, 33]) as $.Slice<number>)
		fiat.P224Element.prototype.SetBytes.call((p$ as P224Point).y, new Uint8Array([189, 55, 99, 136, 181, 247, 35, 251, 76, 34, 223, 230, 205, 67, 117, 160, 90, 7, 71, 100, 68, 213, 129, 153, 133, 0, 126, 52]) as $.Slice<number>)
		fiat.P224Element.prototype.One.call((p$ as P224Point).z)
		return p
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		if (fiat.P224Element.prototype.IsZero.call((p$ as P224Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Invert.call(new fiat.P224Element(), (p$ as P224Point).z)
		let x: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).x, zinv)
		let y: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).y, zinv)

		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(4, 8), $.byteSliceHint)
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(x)), $.byteSliceHint)
		buf = $.appendSlice(buf, (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(y)), $.byteSliceHint)
		return buf
	}

	public bytesCompressed(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		if (fiat.P224Element.prototype.IsZero.call((p$ as P224Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Invert.call(new fiat.P224Element(), (p$ as P224Point).z)
		let x: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).x, zinv)
		let y: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).y, zinv)

		// Encode the sign of the y coordinate (indicated by the least significant
		// bit) as the encoding type (2 or 3).
		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(2, 8), $.byteSliceHint)
		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = $.sliceElems(buf!)[$.sliceSlot(buf!, 0)] | ($.uint($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(y))!, 28 - 1) & 1, 8))
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(x)), $.byteSliceHint)
		return buf
	}

	public bytesX(out: $.VarRef<Uint8Array> | null): [$.Slice<number>, $.GoError] {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		const p$: P224Point = p == null ? $.pointerTarget<P224Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P224Point>(p)
		if (fiat.P224Element.prototype.IsZero.call((p$ as P224Point).z) == 1) {
			return [null, errors.New("P224 point is the point at infinity")]
		}

		let zinv: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Invert.call(new fiat.P224Element(), (p$ as P224Point).z)
		let x: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Mul.call(new fiat.P224Element(), (p$ as P224Point).x, zinv)

		return [$.appendSlice($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P224Element).Bytes() : fiat.P224Element.prototype.Bytes.call(x)), $.byteSliceHint), null]
	}

	public async generatorTable(): globalThis.Promise<$.VarRef<p224Table[]> | null> {
		const p: P224Point | $.VarRef<P224Point> | null = this;
		await p224GeneratorTableOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			p224GeneratorTable = $.varRef<p224Table[]>($.arrayValue(globalThis.Array.from({ length: 56 }, () => $.arrayValue(globalThis.Array.from({ length: 15 }, () => null))), /* @__PURE__ */ $.arrayType("nistec.p224Table", 56)))
			let base: P224Point | $.VarRef<P224Point> | null = P224Point.prototype.SetGenerator.call(NewP224Point())
			for (let i = 0; i < 56; i++) {
				$.arrayIndex($.pointerValue<p224Table[]>(p224GeneratorTable), i)[0] = P224Point.prototype.Set.call(NewP224Point(), base)
				for (let j = 1; j < 15; j++) {
					$.arrayIndex($.pointerValue<p224Table[]>(p224GeneratorTable), i)[j] = await P224Point.prototype.Add.call(NewP224Point(), $.arrayIndex($.arrayIndex($.pointerValue<p224Table[]>(p224GeneratorTable), i), j - 1), base)
				}
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P224Point).Double(base) : P224Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P224Point).Double(base) : P224Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P224Point).Double(base) : P224Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P224Point).Double(base) : P224Point.prototype.Double.call(base, base))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p224GeneratorTable
	}

	static __typeInfo = $.registerStructType(
		"nistec.P224Point",
		() => new P224Point(),
		() => [$.methodSignature("Add", [["p1", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P224Point")]], [/* @__PURE__ */ $.pointerType("nistec.P224Point")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesCompressed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Double", [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")]], [/* @__PURE__ */ $.pointerType("nistec.P224Point")], true), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P224Point"), "error"], true), $.methodSignature("ScalarMult", [["q", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P224Point"), "error"], true), $.methodSignature("Select", [["p1", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P224Point")], true), $.methodSignature("Set", [["q", /* @__PURE__ */ $.pointerType("nistec.P224Point")]], [/* @__PURE__ */ $.pointerType("nistec.P224Point")], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P224Point"), "error"], true), $.methodSignature("SetGenerator", [], [/* @__PURE__ */ $.pointerType("nistec.P224Point")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 57))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesCompressed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 29))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesX", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("generatorTable", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType("nistec.p224Table", 56))], true)],
		P224Point,
		() => [/* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.pointerType("fiat.P224Element"), [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("y", /* @__PURE__ */ $.pointerType("fiat.P224Element"), [1], 8, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("z", /* @__PURE__ */ $.pointerType("fiat.P224Element"), [2], 16, false, { pkgPath: "crypto/internal/fips140/nistec" })]
	)
}

export const p224ElementLength: number = 28

export function NewP224Point(): P224Point | $.VarRef<P224Point> | null {
	return (() => { const __goscriptLiteralField0 = fiat.P224Element.prototype.One.call(new fiat.P224Element()); return new P224Point({x: new fiat.P224Element(), y: __goscriptLiteralField0, z: new fiat.P224Element()}) })()
}

export let _p224B: fiat.P224Element | $.VarRef<fiat.P224Element> | null = null! as fiat.P224Element | $.VarRef<fiat.P224Element> | null

export function __goscript_set__p224B(__goscriptValue: fiat.P224Element | $.VarRef<fiat.P224Element> | null): void {
	_p224B = __goscriptValue
}

export let _p224BOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set__p224BOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(_p224BOnce.value, __goscriptValue)
}

export async function p224B(): globalThis.Promise<fiat.P224Element | $.VarRef<fiat.P224Element> | null> {
	await _p224BOnce.value.Do($.functionValue((): void => {
		let __goscriptTuple3: any = fiat.P224Element.prototype.SetBytes.call(new fiat.P224Element(), new Uint8Array([180, 5, 10, 133, 12, 4, 179, 171, 245, 65, 50, 86, 80, 68, 176, 183, 215, 191, 216, 186, 39, 11, 57, 67, 35, 85, 255, 180]) as $.Slice<number>)
		_p224B = __goscriptTuple3[0]
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return _p224B
}

export async function p224Polynomial(y2: fiat.P224Element | $.VarRef<fiat.P224Element> | null, x: fiat.P224Element | $.VarRef<fiat.P224Element> | null): globalThis.Promise<fiat.P224Element | $.VarRef<fiat.P224Element> | null> {
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P224Element).Square(x) : fiat.P224Element.prototype.Square.call(y2, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P224Element).Mul(y2, x) : fiat.P224Element.prototype.Mul.call(y2, y2, x))

	let threeX: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Add.call(new fiat.P224Element(), x, x)
	void (threeX !== null && (threeX as any).__isVarRef !== true && (threeX as any).__goValue === undefined ? ((threeX as any) as fiat.P224Element).Add(threeX, x) : fiat.P224Element.prototype.Add.call(threeX, threeX, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P224Element).Sub(y2, threeX) : fiat.P224Element.prototype.Sub.call(y2, y2, threeX))

	return (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P224Element).Add(y2, await p224B()) : fiat.P224Element.prototype.Add.call(y2, y2, await p224B()))
}

export async function p224CheckOnCurve(x: fiat.P224Element | $.VarRef<fiat.P224Element> | null, y: fiat.P224Element | $.VarRef<fiat.P224Element> | null): globalThis.Promise<$.GoError> {
	// y² = x³ - 3x + b
	let rhs: fiat.P224Element | $.VarRef<fiat.P224Element> | null = await p224Polynomial(new fiat.P224Element(), x)
	let lhs: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Square.call(new fiat.P224Element(), y)
	if ((rhs !== null && (rhs as any).__isVarRef !== true && (rhs as any).__goValue === undefined ? ((rhs as any) as fiat.P224Element).Equal(lhs) : fiat.P224Element.prototype.Equal.call(rhs, lhs)) != 1) {
		return errors.New("P224 point not on curve")
	}
	return null
}

export function p224Table_Select(table: $.VarRef<p224Table> | null, p: P224Point | $.VarRef<P224Point> | null, n: number): void {
	if (n >= 16) {
		$.panic("nistec: internal error: p224Table called with out-of-bounds value")
	}
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Set(NewP224Point()) : P224Point.prototype.Set.call(p, NewP224Point()))
	for (let i = 1; i < 16; i = ((i + 1) & 0xff)) {
		let cond = constanttime.ByteEq(i, n)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P224Point).Select($.arrayIndex($.pointerValue<(P224Point | $.VarRef<P224Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond) : P224Point.prototype.Select.call(p, $.arrayIndex($.pointerValue<(P224Point | $.VarRef<P224Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond))
	}
}

export let p224GeneratorTable: $.VarRef<p224Table[]> | null = null! as $.VarRef<p224Table[]> | null

export function __goscript_set_p224GeneratorTable(__goscriptValue: $.VarRef<p224Table[]> | null): void {
	p224GeneratorTable = __goscriptValue
}

export let p224GeneratorTableOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_p224GeneratorTableOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(p224GeneratorTableOnce.value, __goscriptValue)
}

export async function p224Sqrt(e: fiat.P224Element | $.VarRef<fiat.P224Element> | null, x: fiat.P224Element | $.VarRef<fiat.P224Element> | null): globalThis.Promise<boolean> {
	let isSquare: boolean = false
	let candidate: fiat.P224Element | $.VarRef<fiat.P224Element> | null = new fiat.P224Element()
	await __goscript_p224_sqrt.p224SqrtCandidate(candidate, x)
	let square: fiat.P224Element | $.VarRef<fiat.P224Element> | null = fiat.P224Element.prototype.Square.call(new fiat.P224Element(), candidate)
	if ((square !== null && (square as any).__isVarRef !== true && (square as any).__goValue === undefined ? ((square as any) as fiat.P224Element).Equal(x) : fiat.P224Element.prototype.Equal.call(square, x)) != 1) {
		return false
	}
	void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P224Element).Set(candidate) : fiat.P224Element.prototype.Set.call(e, candidate))
	return true
}
