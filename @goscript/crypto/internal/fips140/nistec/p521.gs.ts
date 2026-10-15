// Generated file based on p521.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as fiat from "@goscript/crypto/internal/fips140/nistec/fiat/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/nistec/fiat/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("crypto/internal/fips140/nistec", ["nistec.P521Point", "nistec.p521Table"])

export type p521Table = (P521Point | $.VarRef<P521Point> | null)[]

$.registerNamedType("nistec.p521Table", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("nistec.P521Point"), 15));

$.registerNamedValueType(
	"*nistec.p521Table",
	{Select: (receiver: any, ...args: any[]) => (p521Table_Select as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Select", [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["n", /* @__PURE__ */ $.basicType("uint8")]])]
);

export class P521Point {
	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get x(): fiat.P521Element | $.VarRef<fiat.P521Element> | null {
		return this._fields.x
	}

	public set x(value: fiat.P521Element | $.VarRef<fiat.P521Element> | null) {
		this._fields.x = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get y(): fiat.P521Element | $.VarRef<fiat.P521Element> | null {
		return this._fields.y
	}

	public set y(value: fiat.P521Element | $.VarRef<fiat.P521Element> | null) {
		this._fields.y = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get z(): fiat.P521Element | $.VarRef<fiat.P521Element> | null {
		return this._fields.z
	}

	public set z(value: fiat.P521Element | $.VarRef<fiat.P521Element> | null) {
		this._fields.z = value
	}

	public _fields: {
		x: fiat.P521Element | $.VarRef<fiat.P521Element> | null
		y: fiat.P521Element | $.VarRef<fiat.P521Element> | null
		z: fiat.P521Element | $.VarRef<fiat.P521Element> | null
	}

	constructor(init?: Partial<{x?: fiat.P521Element | $.VarRef<fiat.P521Element> | null, y?: fiat.P521Element | $.VarRef<fiat.P521Element> | null, z?: fiat.P521Element | $.VarRef<fiat.P521Element> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ?? (null! as fiat.P521Element | $.VarRef<fiat.P521Element> | null),
			y: init?.y ?? (null! as fiat.P521Element | $.VarRef<fiat.P521Element> | null),
			z: init?.z ?? (null! as fiat.P521Element | $.VarRef<fiat.P521Element> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P521Point {
		return new P521Point(this, true)
	}

	public __goscriptAssign(source: P521Point): void {
		const target = this._fields
		const values = source._fields
		target.x = values.x
		target.y = values.y
		target.z = values.z
	}

	public async Add(p1: P521Point | $.VarRef<P521Point> | null, p2: P521Point | $.VarRef<P521Point> | null): globalThis.Promise<P521Point | $.VarRef<P521Point> | null> {
		const q: P521Point | $.VarRef<P521Point> | null = this;
		const q$: P521Point = q == null ? $.pointerTarget<P521Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P521Point>(q)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), $.pointerValue<P521Point>(p1).x, $.pointerValue<P521Point>(p2).x)
		let t1: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), $.pointerValue<P521Point>(p1).y, $.pointerValue<P521Point>(p2).y)
		let t2: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), $.pointerValue<P521Point>(p1).z, $.pointerValue<P521Point>(p2).z)
		let t3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), $.pointerValue<P521Point>(p1).x, $.pointerValue<P521Point>(p1).y)
		let t4: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), $.pointerValue<P521Point>(p2).x, $.pointerValue<P521Point>(p2).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Mul(t3, t4) : fiat.P521Element.prototype.Mul.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P521Element).Add(t0, t1) : fiat.P521Element.prototype.Add.call(t4, t0, t1))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Sub(t3, t4) : fiat.P521Element.prototype.Sub.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P521Element).Add($.pointerValue<P521Point>(p1).y, $.pointerValue<P521Point>(p1).z) : fiat.P521Element.prototype.Add.call(t4, $.pointerValue<P521Point>(p1).y, $.pointerValue<P521Point>(p1).z))
		let x3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), $.pointerValue<P521Point>(p2).y, $.pointerValue<P521Point>(p2).z)
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P521Element).Mul(t4, x3) : fiat.P521Element.prototype.Mul.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Add(t1, t2) : fiat.P521Element.prototype.Add.call(x3, t1, t2))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P521Element).Sub(t4, x3) : fiat.P521Element.prototype.Sub.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Add($.pointerValue<P521Point>(p1).x, $.pointerValue<P521Point>(p1).z) : fiat.P521Element.prototype.Add.call(x3, $.pointerValue<P521Point>(p1).x, $.pointerValue<P521Point>(p1).z))
		let y3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), $.pointerValue<P521Point>(p2).x, $.pointerValue<P521Point>(p2).z)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Mul(x3, y3) : fiat.P521Element.prototype.Mul.call(x3, x3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(t0, t2) : fiat.P521Element.prototype.Add.call(y3, t0, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Sub(x3, y3) : fiat.P521Element.prototype.Sub.call(y3, x3, y3))
		let z3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), await p521B(), t2)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Sub(y3, z3) : fiat.P521Element.prototype.Sub.call(x3, y3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(x3, x3) : fiat.P521Element.prototype.Add.call(z3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Add(x3, z3) : fiat.P521Element.prototype.Add.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Sub(t1, x3) : fiat.P521Element.prototype.Sub.call(z3, t1, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Add(t1, x3) : fiat.P521Element.prototype.Add.call(x3, t1, x3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Mul(await p521B(), y3) : fiat.P521Element.prototype.Mul.call(y3, await p521B(), y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P521Element).Add(t2, t2) : fiat.P521Element.prototype.Add.call(t1, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P521Element).Add(t1, t2) : fiat.P521Element.prototype.Add.call(t2, t1, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Sub(y3, t2) : fiat.P521Element.prototype.Sub.call(y3, y3, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Sub(y3, t0) : fiat.P521Element.prototype.Sub.call(y3, y3, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P521Element).Add(y3, y3) : fiat.P521Element.prototype.Add.call(t1, y3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(t1, y3) : fiat.P521Element.prototype.Add.call(y3, t1, y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P521Element).Add(t0, t0) : fiat.P521Element.prototype.Add.call(t1, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Add(t1, t0) : fiat.P521Element.prototype.Add.call(t0, t1, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Sub(t0, t2) : fiat.P521Element.prototype.Sub.call(t0, t0, t2))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P521Element).Mul(t4, y3) : fiat.P521Element.prototype.Mul.call(t1, t4, y3))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P521Element).Mul(t0, y3) : fiat.P521Element.prototype.Mul.call(t2, t0, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Mul(x3, z3) : fiat.P521Element.prototype.Mul.call(y3, x3, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(y3, t2) : fiat.P521Element.prototype.Add.call(y3, y3, t2))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Mul(t3, x3) : fiat.P521Element.prototype.Mul.call(x3, t3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Sub(x3, t1) : fiat.P521Element.prototype.Sub.call(x3, x3, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Mul(t4, z3) : fiat.P521Element.prototype.Mul.call(z3, t4, z3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P521Element).Mul(t3, t0) : fiat.P521Element.prototype.Mul.call(t1, t3, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(z3, t1) : fiat.P521Element.prototype.Add.call(z3, z3, t1))

		fiat.P521Element.prototype.Set.call((q$ as P521Point).x, x3)
		fiat.P521Element.prototype.Set.call((q$ as P521Point).y, y3)
		fiat.P521Element.prototype.Set.call((q$ as P521Point).z, z3)
		return q
	}

	public Bytes(): $.Slice<number> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(133)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).bytes(out) : P521Point.prototype.bytes.call(p, out))
	}

	public BytesCompressed(): $.Slice<number> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(67)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).bytesCompressed(out) : P521Point.prototype.bytesCompressed.call(p, out))
	}

	public BytesX(): [$.Slice<number>, $.GoError] {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(66)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).bytesX(out) : P521Point.prototype.bytesX.call(p, out))
	}

	public async Double(p: P521Point | $.VarRef<P521Point> | null): globalThis.Promise<P521Point | $.VarRef<P521Point> | null> {
		const q: P521Point | $.VarRef<P521Point> | null = this;
		const q$: P521Point = q == null ? $.pointerTarget<P521Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P521Point>(q)
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Square.call(new fiat.P521Element(), (p$ as P521Point).x)
		let t1: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Square.call(new fiat.P521Element(), (p$ as P521Point).y)
		let t2: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Square.call(new fiat.P521Element(), (p$ as P521Point).z)
		let t3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).x, (p$ as P521Point).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Add(t3, t3) : fiat.P521Element.prototype.Add.call(t3, t3, t3))
		let z3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).x, (p$ as P521Point).z)
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(z3, z3) : fiat.P521Element.prototype.Add.call(z3, z3, z3))
		let y3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), await p521B(), t2)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Sub(y3, z3) : fiat.P521Element.prototype.Sub.call(y3, y3, z3))
		let x3: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), y3, y3)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(x3, y3) : fiat.P521Element.prototype.Add.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Sub(t1, y3) : fiat.P521Element.prototype.Sub.call(x3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(t1, y3) : fiat.P521Element.prototype.Add.call(y3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Mul(x3, y3) : fiat.P521Element.prototype.Mul.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Mul(x3, t3) : fiat.P521Element.prototype.Mul.call(x3, x3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Add(t2, t2) : fiat.P521Element.prototype.Add.call(t3, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P521Element).Add(t2, t3) : fiat.P521Element.prototype.Add.call(t2, t2, t3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Mul(await p521B(), z3) : fiat.P521Element.prototype.Mul.call(z3, await p521B(), z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Sub(z3, t2) : fiat.P521Element.prototype.Sub.call(z3, z3, t2))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Sub(z3, t0) : fiat.P521Element.prototype.Sub.call(z3, z3, t0))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Add(z3, z3) : fiat.P521Element.prototype.Add.call(t3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(z3, t3) : fiat.P521Element.prototype.Add.call(z3, z3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P521Element).Add(t0, t0) : fiat.P521Element.prototype.Add.call(t3, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Add(t3, t0) : fiat.P521Element.prototype.Add.call(t0, t3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Sub(t0, t2) : fiat.P521Element.prototype.Sub.call(t0, t0, t2))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Mul(t0, z3) : fiat.P521Element.prototype.Mul.call(t0, t0, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P521Element).Add(y3, t0) : fiat.P521Element.prototype.Add.call(y3, y3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Mul((p$ as P521Point).y, (p$ as P521Point).z) : fiat.P521Element.prototype.Mul.call(t0, (p$ as P521Point).y, (p$ as P521Point).z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P521Element).Add(t0, t0) : fiat.P521Element.prototype.Add.call(t0, t0, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Mul(t0, z3) : fiat.P521Element.prototype.Mul.call(z3, t0, z3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P521Element).Sub(x3, z3) : fiat.P521Element.prototype.Sub.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Mul(t0, t1) : fiat.P521Element.prototype.Mul.call(z3, t0, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(z3, z3) : fiat.P521Element.prototype.Add.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P521Element).Add(z3, z3) : fiat.P521Element.prototype.Add.call(z3, z3, z3))

		fiat.P521Element.prototype.Set.call((q$ as P521Point).x, x3)
		fiat.P521Element.prototype.Set.call((q$ as P521Point).y, y3)
		fiat.P521Element.prototype.Set.call((q$ as P521Point).z, z3)
		return q
	}

	public async ScalarBaseMult(scalar: $.Slice<number>): globalThis.Promise<[P521Point | $.VarRef<P521Point> | null, $.GoError]> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		if ($.sliceLen(scalar) != 66) {
			return [null, errors.New("invalid scalar length")]
		}
		let tables: $.VarRef<p521Table[]> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).generatorTable() : P521Point.prototype.generatorTable.call(p))

		// This is also a scalar multiplication with a four-bit window like in
		// ScalarMult, but in this case the doublings are precomputed. The value
		// [windowValue]G added at iteration k would normally get doubled
		// (totIterations-k)×4 times, but with a larger precomputation we can
		// instead add [2^((totIterations-k)×4)][windowValue]G and avoid the
		// doublings between iterations.
		let t: P521Point | $.VarRef<P521Point> | null = NewP521Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Set(NewP521Point()) : P521Point.prototype.Set.call(p, NewP521Point()))
		let tableIndex = 131
		for (let __goscriptRangeTarget0 = scalar, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let byte = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p521Table_Select($.indexRef($.pointerValue<p521Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Add(p, t) : P521Point.prototype.Add.call(p, p, t))
			tableIndex--

			windowValue = $.uint(byte & 0b1111, 8)
			p521Table_Select($.indexRef($.pointerValue<p521Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Add(p, t) : P521Point.prototype.Add.call(p, p, t))
			tableIndex--
		}

		return [p, null]
	}

	public async ScalarMult(q: P521Point | $.VarRef<P521Point> | null, scalar: $.Slice<number>): globalThis.Promise<[P521Point | $.VarRef<P521Point> | null, $.GoError]> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		// Compute a p521Table for the base point q. The explicit NewP521Point
		// calls get inlined, letting the allocations live on the stack.
		let table: $.VarRef<p521Table> = $.varRef($.arrayValue([NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point(), NewP521Point()]))
		P521Point.prototype.Set.call($.arrayIndex(table.value, 0), q)
		for (let i = 1; i < 15; i = i + (2)) {
			await P521Point.prototype.Double.call($.arrayIndex(table.value, i), $.arrayIndex(table.value, globalThis.Math.trunc(i / 2)))
			await P521Point.prototype.Add.call($.arrayIndex(table.value, i + 1), $.arrayIndex(table.value, i), q)
		}

		// Instead of doing the classic double-and-add chain, we do it with a
		// four-bit window: we double four times, and then add [0-15]P.
		let t: P521Point | $.VarRef<P521Point> | null = NewP521Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Set(NewP521Point()) : P521Point.prototype.Set.call(p, NewP521Point()))
		for (let __goscriptRangeTarget1 = scalar, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let byte = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
			// No need to double on the first iteration, as p is the identity at
			// this point, and [N]∞ = ∞.
			if (i != 0) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
			}

			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p521Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Add(p, t) : P521Point.prototype.Add.call(p, p, t))

			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Double(p) : P521Point.prototype.Double.call(p, p))

			windowValue = $.uint(byte & 0b1111, 8)
			p521Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Add(p, t) : P521Point.prototype.Add.call(p, p, t))
		}

		return [p, null]
	}

	public Select(p1: P521Point | $.VarRef<P521Point> | null, p2: P521Point | $.VarRef<P521Point> | null, cond: number): P521Point | $.VarRef<P521Point> | null {
		const q: P521Point | $.VarRef<P521Point> | null = this;
		const q$: P521Point = q == null ? $.pointerTarget<P521Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P521Point>(q)
		fiat.P521Element.prototype.Select.call((q$ as P521Point).x, $.pointerValue<P521Point>(p1).x, $.pointerValue<P521Point>(p2).x, cond)
		fiat.P521Element.prototype.Select.call((q$ as P521Point).y, $.pointerValue<P521Point>(p1).y, $.pointerValue<P521Point>(p2).y, cond)
		fiat.P521Element.prototype.Select.call((q$ as P521Point).z, $.pointerValue<P521Point>(p1).z, $.pointerValue<P521Point>(p2).z, cond)
		return q
	}

	public Set(q: P521Point | $.VarRef<P521Point> | null): P521Point | $.VarRef<P521Point> | null {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		const q$: P521Point = q == null ? $.pointerTarget<P521Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P521Point>(q)
		fiat.P521Element.prototype.Set.call((p$ as P521Point).x, (q$ as P521Point).x)
		fiat.P521Element.prototype.Set.call((p$ as P521Point).y, (q$ as P521Point).y)
		fiat.P521Element.prototype.Set.call((p$ as P521Point).z, (q$ as P521Point).z)
		return p
	}

	public async SetBytes(b: $.Slice<number>): globalThis.Promise<[P521Point | $.VarRef<P521Point> | null, $.GoError]> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		switch ((true as boolean)) {
			case ($.sliceLen(b) == 1) && ($.arrayIndex(b!, 0) == 0):
			{
				return [(p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Set(NewP521Point()) : P521Point.prototype.Set.call(p, NewP521Point())), null]
				break
			}
			case ($.sliceLen(b) == 133) && ($.arrayIndex(b!, 0) == 4):
			{
				let __goscriptTuple0: any = fiat.P521Element.prototype.SetBytes.call(new fiat.P521Element(), $.goSlice(b, 1, 1 + 66))
				let x: fiat.P521Element | $.VarRef<fiat.P521Element> | null = __goscriptTuple0[0]
				let err = __goscriptTuple0[1]
				if (err != null) {
					return [null, err]
				}
				let __goscriptTuple1: any = fiat.P521Element.prototype.SetBytes.call(new fiat.P521Element(), $.goSlice(b, 1 + 66, undefined))
				let y: fiat.P521Element | $.VarRef<fiat.P521Element> | null = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [null, err]
				}
				{
					let __goscriptShadow0 = await p521CheckOnCurve(x, y)
					if (__goscriptShadow0 != null) {
						return [null, __goscriptShadow0]
					}
				}
				fiat.P521Element.prototype.Set.call((p$ as P521Point).x, x)
				fiat.P521Element.prototype.Set.call((p$ as P521Point).y, y)
				fiat.P521Element.prototype.One.call((p$ as P521Point).z)
				return [p, null]
				break
			}
			case ($.sliceLen(b) == 67) && (($.arrayIndex(b!, 0) == 2) || ($.arrayIndex(b!, 0) == 3)):
			{
				let __goscriptTuple2: any = fiat.P521Element.prototype.SetBytes.call(new fiat.P521Element(), $.goSlice(b, 1, undefined))
				let x: fiat.P521Element | $.VarRef<fiat.P521Element> | null = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}

				// y² = x³ - 3x + b
				let y: fiat.P521Element | $.VarRef<fiat.P521Element> | null = await p521Polynomial(new fiat.P521Element(), x)
				if (!p521Sqrt(y, y)) {
					return [null, errors.New("invalid P521 compressed point encoding")]
				}

				// Select the positive or negative root, as indicated by the least
				// significant bit, based on the encoding type byte.
				let otherRoot: fiat.P521Element | $.VarRef<fiat.P521Element> | null = new fiat.P521Element()
				void (otherRoot !== null && (otherRoot as any).__isVarRef !== true && (otherRoot as any).__goValue === undefined ? ((otherRoot as any) as fiat.P521Element).Sub(otherRoot, y) : fiat.P521Element.prototype.Sub.call(otherRoot, otherRoot, y))
				let cond = $.uint(($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(y))!, 66 - 1) & 1) ^ ($.arrayIndex(b!, 0) & 1), 8)
				void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P521Element).Select(otherRoot, y, $.int(cond)) : fiat.P521Element.prototype.Select.call(y, otherRoot, y, $.int(cond)))

				fiat.P521Element.prototype.Set.call((p$ as P521Point).x, x)
				fiat.P521Element.prototype.Set.call((p$ as P521Point).y, y)
				fiat.P521Element.prototype.One.call((p$ as P521Point).z)
				return [p, null]
				break
			}
			default:
			{
				return [null, errors.New("invalid P521 point encoding")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SetGenerator(): P521Point | $.VarRef<P521Point> | null {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		fiat.P521Element.prototype.SetBytes.call((p$ as P521Point).x, new Uint8Array([0, 198, 133, 142, 6, 183, 4, 4, 233, 205, 158, 62, 203, 102, 35, 149, 180, 66, 156, 100, 129, 57, 5, 63, 181, 33, 248, 40, 175, 96, 107, 77, 61, 186, 161, 75, 94, 119, 239, 231, 89, 40, 254, 29, 193, 39, 162, 255, 168, 222, 51, 72, 179, 193, 133, 106, 66, 155, 249, 126, 126, 49, 194, 229, 189, 102]) as $.Slice<number>)
		fiat.P521Element.prototype.SetBytes.call((p$ as P521Point).y, new Uint8Array([1, 24, 57, 41, 106, 120, 154, 59, 192, 4, 92, 138, 95, 180, 44, 125, 27, 217, 152, 245, 68, 73, 87, 155, 68, 104, 23, 175, 189, 23, 39, 62, 102, 44, 151, 238, 114, 153, 94, 244, 38, 64, 197, 80, 185, 1, 63, 173, 7, 97, 53, 60, 112, 134, 162, 114, 194, 64, 136, 190, 148, 118, 159, 209, 102, 80]) as $.Slice<number>)
		fiat.P521Element.prototype.One.call((p$ as P521Point).z)
		return p
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		if (fiat.P521Element.prototype.IsZero.call((p$ as P521Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Invert.call(new fiat.P521Element(), (p$ as P521Point).z)
		let x: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).x, zinv)
		let y: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).y, zinv)

		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(4, 8), $.byteSliceHint)
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(x)), $.byteSliceHint)
		buf = $.appendSlice(buf, (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(y)), $.byteSliceHint)
		return buf
	}

	public bytesCompressed(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		if (fiat.P521Element.prototype.IsZero.call((p$ as P521Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Invert.call(new fiat.P521Element(), (p$ as P521Point).z)
		let x: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).x, zinv)
		let y: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).y, zinv)

		// Encode the sign of the y coordinate (indicated by the least significant
		// bit) as the encoding type (2 or 3).
		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(2, 8), $.byteSliceHint)
		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = $.sliceElems(buf!)[$.sliceSlot(buf!, 0)] | ($.uint($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(y))!, 66 - 1) & 1, 8))
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(x)), $.byteSliceHint)
		return buf
	}

	public bytesX(out: $.VarRef<Uint8Array> | null): [$.Slice<number>, $.GoError] {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		const p$: P521Point = p == null ? $.pointerTarget<P521Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P521Point>(p)
		if (fiat.P521Element.prototype.IsZero.call((p$ as P521Point).z) == 1) {
			return [null, errors.New("P521 point is the point at infinity")]
		}

		let zinv: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Invert.call(new fiat.P521Element(), (p$ as P521Point).z)
		let x: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Mul.call(new fiat.P521Element(), (p$ as P521Point).x, zinv)

		return [$.appendSlice($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P521Element).Bytes() : fiat.P521Element.prototype.Bytes.call(x)), $.byteSliceHint), null]
	}

	public async generatorTable(): globalThis.Promise<$.VarRef<p521Table[]> | null> {
		const p: P521Point | $.VarRef<P521Point> | null = this;
		await p521GeneratorTableOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			p521GeneratorTable = $.varRef<p521Table[]>($.arrayValue(globalThis.Array.from({ length: 132 }, () => $.arrayValue(globalThis.Array.from({ length: 15 }, () => null))), /* @__PURE__ */ $.arrayType("nistec.p521Table", 132)))
			let base: P521Point | $.VarRef<P521Point> | null = P521Point.prototype.SetGenerator.call(NewP521Point())
			for (let i = 0; i < 132; i++) {
				$.arrayIndex($.pointerValue<p521Table[]>(p521GeneratorTable), i)[0] = P521Point.prototype.Set.call(NewP521Point(), base)
				for (let j = 1; j < 15; j++) {
					$.arrayIndex($.pointerValue<p521Table[]>(p521GeneratorTable), i)[j] = await P521Point.prototype.Add.call(NewP521Point(), $.arrayIndex($.arrayIndex($.pointerValue<p521Table[]>(p521GeneratorTable), i), j - 1), base)
				}
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P521Point).Double(base) : P521Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P521Point).Double(base) : P521Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P521Point).Double(base) : P521Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P521Point).Double(base) : P521Point.prototype.Double.call(base, base))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p521GeneratorTable
	}

	static __typeInfo = $.registerStructType(
		"nistec.P521Point",
		() => new P521Point(),
		() => [$.methodSignature("Add", [["p1", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P521Point")]], [/* @__PURE__ */ $.pointerType("nistec.P521Point")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesCompressed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Double", [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")]], [/* @__PURE__ */ $.pointerType("nistec.P521Point")], true), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P521Point"), "error"], true), $.methodSignature("ScalarMult", [["q", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P521Point"), "error"], true), $.methodSignature("Select", [["p1", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P521Point")], true), $.methodSignature("Set", [["q", /* @__PURE__ */ $.pointerType("nistec.P521Point")]], [/* @__PURE__ */ $.pointerType("nistec.P521Point")], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P521Point"), "error"], true), $.methodSignature("SetGenerator", [], [/* @__PURE__ */ $.pointerType("nistec.P521Point")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 133))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesCompressed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 67))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesX", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 66))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("generatorTable", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType("nistec.p521Table", 132))], true)],
		P521Point,
		() => [/* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.pointerType("fiat.P521Element"), [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("y", /* @__PURE__ */ $.pointerType("fiat.P521Element"), [1], 8, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("z", /* @__PURE__ */ $.pointerType("fiat.P521Element"), [2], 16, false, { pkgPath: "crypto/internal/fips140/nistec" })]
	)
}

export const p521ElementLength: number = 66

export function NewP521Point(): P521Point | $.VarRef<P521Point> | null {
	return (() => { const __goscriptLiteralField0 = fiat.P521Element.prototype.One.call(new fiat.P521Element()); return new P521Point({x: new fiat.P521Element(), y: __goscriptLiteralField0, z: new fiat.P521Element()}) })()
}

export let _p521B: fiat.P521Element | $.VarRef<fiat.P521Element> | null = null! as fiat.P521Element | $.VarRef<fiat.P521Element> | null

export function __goscript_set__p521B(__goscriptValue: fiat.P521Element | $.VarRef<fiat.P521Element> | null): void {
	_p521B = __goscriptValue
}

export let _p521BOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set__p521BOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(_p521BOnce.value, __goscriptValue)
}

export async function p521B(): globalThis.Promise<fiat.P521Element | $.VarRef<fiat.P521Element> | null> {
	await _p521BOnce.value.Do($.functionValue((): void => {
		let __goscriptTuple3: any = fiat.P521Element.prototype.SetBytes.call(new fiat.P521Element(), new Uint8Array([0, 81, 149, 62, 185, 97, 142, 28, 154, 31, 146, 154, 33, 160, 182, 133, 64, 238, 162, 218, 114, 91, 153, 179, 21, 243, 184, 180, 137, 145, 142, 241, 9, 225, 86, 25, 57, 81, 236, 126, 147, 123, 22, 82, 192, 189, 59, 177, 191, 7, 53, 115, 223, 136, 61, 44, 52, 241, 239, 69, 31, 212, 107, 80, 63, 0]) as $.Slice<number>)
		_p521B = __goscriptTuple3[0]
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return _p521B
}

export async function p521Polynomial(y2: fiat.P521Element | $.VarRef<fiat.P521Element> | null, x: fiat.P521Element | $.VarRef<fiat.P521Element> | null): globalThis.Promise<fiat.P521Element | $.VarRef<fiat.P521Element> | null> {
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P521Element).Square(x) : fiat.P521Element.prototype.Square.call(y2, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P521Element).Mul(y2, x) : fiat.P521Element.prototype.Mul.call(y2, y2, x))

	let threeX: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Add.call(new fiat.P521Element(), x, x)
	void (threeX !== null && (threeX as any).__isVarRef !== true && (threeX as any).__goValue === undefined ? ((threeX as any) as fiat.P521Element).Add(threeX, x) : fiat.P521Element.prototype.Add.call(threeX, threeX, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P521Element).Sub(y2, threeX) : fiat.P521Element.prototype.Sub.call(y2, y2, threeX))

	return (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P521Element).Add(y2, await p521B()) : fiat.P521Element.prototype.Add.call(y2, y2, await p521B()))
}

export async function p521CheckOnCurve(x: fiat.P521Element | $.VarRef<fiat.P521Element> | null, y: fiat.P521Element | $.VarRef<fiat.P521Element> | null): globalThis.Promise<$.GoError> {
	// y² = x³ - 3x + b
	let rhs: fiat.P521Element | $.VarRef<fiat.P521Element> | null = await p521Polynomial(new fiat.P521Element(), x)
	let lhs: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Square.call(new fiat.P521Element(), y)
	if ((rhs !== null && (rhs as any).__isVarRef !== true && (rhs as any).__goValue === undefined ? ((rhs as any) as fiat.P521Element).Equal(lhs) : fiat.P521Element.prototype.Equal.call(rhs, lhs)) != 1) {
		return errors.New("P521 point not on curve")
	}
	return null
}

export function p521Table_Select(table: $.VarRef<p521Table> | null, p: P521Point | $.VarRef<P521Point> | null, n: number): void {
	if (n >= 16) {
		$.panic("nistec: internal error: p521Table called with out-of-bounds value")
	}
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Set(NewP521Point()) : P521Point.prototype.Set.call(p, NewP521Point()))
	for (let i = 1; i < 16; i = ((i + 1) & 0xff)) {
		let cond = constanttime.ByteEq(i, n)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P521Point).Select($.arrayIndex($.pointerValue<(P521Point | $.VarRef<P521Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond) : P521Point.prototype.Select.call(p, $.arrayIndex($.pointerValue<(P521Point | $.VarRef<P521Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond))
	}
}

export let p521GeneratorTable: $.VarRef<p521Table[]> | null = null! as $.VarRef<p521Table[]> | null

export function __goscript_set_p521GeneratorTable(__goscriptValue: $.VarRef<p521Table[]> | null): void {
	p521GeneratorTable = __goscriptValue
}

export let p521GeneratorTableOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_p521GeneratorTableOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(p521GeneratorTableOnce.value, __goscriptValue)
}

export function p521Sqrt(e: fiat.P521Element | $.VarRef<fiat.P521Element> | null, x: fiat.P521Element | $.VarRef<fiat.P521Element> | null): boolean {
	let isSquare: boolean = false
	let candidate: fiat.P521Element | $.VarRef<fiat.P521Element> | null = new fiat.P521Element()
	p521SqrtCandidate(candidate, x)
	let square: fiat.P521Element | $.VarRef<fiat.P521Element> | null = fiat.P521Element.prototype.Square.call(new fiat.P521Element(), candidate)
	if ((square !== null && (square as any).__isVarRef !== true && (square as any).__goValue === undefined ? ((square as any) as fiat.P521Element).Equal(x) : fiat.P521Element.prototype.Equal.call(square, x)) != 1) {
		return false
	}
	void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P521Element).Set(candidate) : fiat.P521Element.prototype.Set.call(e, candidate))
	return true
}

export function p521SqrtCandidate(z: fiat.P521Element | $.VarRef<fiat.P521Element> | null, x: fiat.P521Element | $.VarRef<fiat.P521Element> | null): void {
	// Since p = 3 mod 4, exponentiation by (p + 1) / 4 yields a square root candidate.
	//
	// The sequence of 0 multiplications and 519 squarings is derived from the
	// following addition chain generated with github.com/mmcloughlin/addchain v0.4.0.
	//
	//	return  1 << 519
	//

	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P521Element).Square(x) : fiat.P521Element.prototype.Square.call(z, x))
	for (let s = 1; s < 519; s++) {
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P521Element).Square(z) : fiat.P521Element.prototype.Square.call(z, z))
	}
}
