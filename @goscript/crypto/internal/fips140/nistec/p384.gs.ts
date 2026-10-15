// Generated file based on p384.go
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

$.registerTypePackagePath("crypto/internal/fips140/nistec", ["nistec.P384Point", "nistec.p384Table"])

export type p384Table = (P384Point | $.VarRef<P384Point> | null)[]

$.registerNamedType("nistec.p384Table", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("nistec.P384Point"), 15));

$.registerNamedValueType(
	"*nistec.p384Table",
	{Select: (receiver: any, ...args: any[]) => (p384Table_Select as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Select", [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["n", /* @__PURE__ */ $.basicType("uint8")]])]
);

export class P384Point {
	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get x(): fiat.P384Element | $.VarRef<fiat.P384Element> | null {
		return this._fields.x
	}

	public set x(value: fiat.P384Element | $.VarRef<fiat.P384Element> | null) {
		this._fields.x = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get y(): fiat.P384Element | $.VarRef<fiat.P384Element> | null {
		return this._fields.y
	}

	public set y(value: fiat.P384Element | $.VarRef<fiat.P384Element> | null) {
		this._fields.y = value
	}

	// The point is represented in projective coordinates (X:Y:Z),
	// where x = X/Z and y = Y/Z.
	public get z(): fiat.P384Element | $.VarRef<fiat.P384Element> | null {
		return this._fields.z
	}

	public set z(value: fiat.P384Element | $.VarRef<fiat.P384Element> | null) {
		this._fields.z = value
	}

	public _fields: {
		x: fiat.P384Element | $.VarRef<fiat.P384Element> | null
		y: fiat.P384Element | $.VarRef<fiat.P384Element> | null
		z: fiat.P384Element | $.VarRef<fiat.P384Element> | null
	}

	constructor(init?: Partial<{x?: fiat.P384Element | $.VarRef<fiat.P384Element> | null, y?: fiat.P384Element | $.VarRef<fiat.P384Element> | null, z?: fiat.P384Element | $.VarRef<fiat.P384Element> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ?? (null! as fiat.P384Element | $.VarRef<fiat.P384Element> | null),
			y: init?.y ?? (null! as fiat.P384Element | $.VarRef<fiat.P384Element> | null),
			z: init?.z ?? (null! as fiat.P384Element | $.VarRef<fiat.P384Element> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P384Point {
		return new P384Point(this, true)
	}

	public __goscriptAssign(source: P384Point): void {
		const target = this._fields
		const values = source._fields
		target.x = values.x
		target.y = values.y
		target.z = values.z
	}

	public async Add(p1: P384Point | $.VarRef<P384Point> | null, p2: P384Point | $.VarRef<P384Point> | null): globalThis.Promise<P384Point | $.VarRef<P384Point> | null> {
		const q: P384Point | $.VarRef<P384Point> | null = this;
		const q$: P384Point = q == null ? $.pointerTarget<P384Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P384Point>(q)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), $.pointerValue<P384Point>(p1).x, $.pointerValue<P384Point>(p2).x)
		let t1: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), $.pointerValue<P384Point>(p1).y, $.pointerValue<P384Point>(p2).y)
		let t2: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), $.pointerValue<P384Point>(p1).z, $.pointerValue<P384Point>(p2).z)
		let t3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), $.pointerValue<P384Point>(p1).x, $.pointerValue<P384Point>(p1).y)
		let t4: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), $.pointerValue<P384Point>(p2).x, $.pointerValue<P384Point>(p2).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Mul(t3, t4) : fiat.P384Element.prototype.Mul.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P384Element).Add(t0, t1) : fiat.P384Element.prototype.Add.call(t4, t0, t1))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Sub(t3, t4) : fiat.P384Element.prototype.Sub.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P384Element).Add($.pointerValue<P384Point>(p1).y, $.pointerValue<P384Point>(p1).z) : fiat.P384Element.prototype.Add.call(t4, $.pointerValue<P384Point>(p1).y, $.pointerValue<P384Point>(p1).z))
		let x3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), $.pointerValue<P384Point>(p2).y, $.pointerValue<P384Point>(p2).z)
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P384Element).Mul(t4, x3) : fiat.P384Element.prototype.Mul.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Add(t1, t2) : fiat.P384Element.prototype.Add.call(x3, t1, t2))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P384Element).Sub(t4, x3) : fiat.P384Element.prototype.Sub.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Add($.pointerValue<P384Point>(p1).x, $.pointerValue<P384Point>(p1).z) : fiat.P384Element.prototype.Add.call(x3, $.pointerValue<P384Point>(p1).x, $.pointerValue<P384Point>(p1).z))
		let y3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), $.pointerValue<P384Point>(p2).x, $.pointerValue<P384Point>(p2).z)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Mul(x3, y3) : fiat.P384Element.prototype.Mul.call(x3, x3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(t0, t2) : fiat.P384Element.prototype.Add.call(y3, t0, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Sub(x3, y3) : fiat.P384Element.prototype.Sub.call(y3, x3, y3))
		let z3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), await p384B(), t2)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Sub(y3, z3) : fiat.P384Element.prototype.Sub.call(x3, y3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(x3, x3) : fiat.P384Element.prototype.Add.call(z3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Add(x3, z3) : fiat.P384Element.prototype.Add.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Sub(t1, x3) : fiat.P384Element.prototype.Sub.call(z3, t1, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Add(t1, x3) : fiat.P384Element.prototype.Add.call(x3, t1, x3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Mul(await p384B(), y3) : fiat.P384Element.prototype.Mul.call(y3, await p384B(), y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Add(t2, t2) : fiat.P384Element.prototype.Add.call(t1, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Add(t1, t2) : fiat.P384Element.prototype.Add.call(t2, t1, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Sub(y3, t2) : fiat.P384Element.prototype.Sub.call(y3, y3, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Sub(y3, t0) : fiat.P384Element.prototype.Sub.call(y3, y3, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Add(y3, y3) : fiat.P384Element.prototype.Add.call(t1, y3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(t1, y3) : fiat.P384Element.prototype.Add.call(y3, t1, y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Add(t0, t0) : fiat.P384Element.prototype.Add.call(t1, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Add(t1, t0) : fiat.P384Element.prototype.Add.call(t0, t1, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Sub(t0, t2) : fiat.P384Element.prototype.Sub.call(t0, t0, t2))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t4, y3) : fiat.P384Element.prototype.Mul.call(t1, t4, y3))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Mul(t0, y3) : fiat.P384Element.prototype.Mul.call(t2, t0, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Mul(x3, z3) : fiat.P384Element.prototype.Mul.call(y3, x3, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(y3, t2) : fiat.P384Element.prototype.Add.call(y3, y3, t2))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Mul(t3, x3) : fiat.P384Element.prototype.Mul.call(x3, t3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Sub(x3, t1) : fiat.P384Element.prototype.Sub.call(x3, x3, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Mul(t4, z3) : fiat.P384Element.prototype.Mul.call(z3, t4, z3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t3, t0) : fiat.P384Element.prototype.Mul.call(t1, t3, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(z3, t1) : fiat.P384Element.prototype.Add.call(z3, z3, t1))

		fiat.P384Element.prototype.Set.call((q$ as P384Point).x, x3)
		fiat.P384Element.prototype.Set.call((q$ as P384Point).y, y3)
		fiat.P384Element.prototype.Set.call((q$ as P384Point).z, z3)
		return q
	}

	public Bytes(): $.Slice<number> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(97)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).bytes(out) : P384Point.prototype.bytes.call(p, out))
	}

	public BytesCompressed(): $.Slice<number> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(49)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).bytesCompressed(out) : P384Point.prototype.bytesCompressed.call(p, out))
	}

	public BytesX(): [$.Slice<number>, $.GoError] {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(48)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).bytesX(out) : P384Point.prototype.bytesX.call(p, out))
	}

	public async Double(p: P384Point | $.VarRef<P384Point> | null): globalThis.Promise<P384Point | $.VarRef<P384Point> | null> {
		const q: P384Point | $.VarRef<P384Point> | null = this;
		const q$: P384Point = q == null ? $.pointerTarget<P384Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P384Point>(q)
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Square.call(new fiat.P384Element(), (p$ as P384Point).x)
		let t1: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Square.call(new fiat.P384Element(), (p$ as P384Point).y)
		let t2: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Square.call(new fiat.P384Element(), (p$ as P384Point).z)
		let t3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).x, (p$ as P384Point).y)
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Add(t3, t3) : fiat.P384Element.prototype.Add.call(t3, t3, t3))
		let z3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).x, (p$ as P384Point).z)
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(z3, z3) : fiat.P384Element.prototype.Add.call(z3, z3, z3))
		let y3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), await p384B(), t2)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Sub(y3, z3) : fiat.P384Element.prototype.Sub.call(y3, y3, z3))
		let x3: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), y3, y3)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(x3, y3) : fiat.P384Element.prototype.Add.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Sub(t1, y3) : fiat.P384Element.prototype.Sub.call(x3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(t1, y3) : fiat.P384Element.prototype.Add.call(y3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Mul(x3, y3) : fiat.P384Element.prototype.Mul.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Mul(x3, t3) : fiat.P384Element.prototype.Mul.call(x3, x3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Add(t2, t2) : fiat.P384Element.prototype.Add.call(t3, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Add(t2, t3) : fiat.P384Element.prototype.Add.call(t2, t2, t3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Mul(await p384B(), z3) : fiat.P384Element.prototype.Mul.call(z3, await p384B(), z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Sub(z3, t2) : fiat.P384Element.prototype.Sub.call(z3, z3, t2))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Sub(z3, t0) : fiat.P384Element.prototype.Sub.call(z3, z3, t0))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Add(z3, z3) : fiat.P384Element.prototype.Add.call(t3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(z3, t3) : fiat.P384Element.prototype.Add.call(z3, z3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P384Element).Add(t0, t0) : fiat.P384Element.prototype.Add.call(t3, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Add(t3, t0) : fiat.P384Element.prototype.Add.call(t0, t3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Sub(t0, t2) : fiat.P384Element.prototype.Sub.call(t0, t0, t2))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Mul(t0, z3) : fiat.P384Element.prototype.Mul.call(t0, t0, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P384Element).Add(y3, t0) : fiat.P384Element.prototype.Add.call(y3, y3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Mul((p$ as P384Point).y, (p$ as P384Point).z) : fiat.P384Element.prototype.Mul.call(t0, (p$ as P384Point).y, (p$ as P384Point).z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Add(t0, t0) : fiat.P384Element.prototype.Add.call(t0, t0, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Mul(t0, z3) : fiat.P384Element.prototype.Mul.call(z3, t0, z3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P384Element).Sub(x3, z3) : fiat.P384Element.prototype.Sub.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Mul(t0, t1) : fiat.P384Element.prototype.Mul.call(z3, t0, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(z3, z3) : fiat.P384Element.prototype.Add.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P384Element).Add(z3, z3) : fiat.P384Element.prototype.Add.call(z3, z3, z3))

		fiat.P384Element.prototype.Set.call((q$ as P384Point).x, x3)
		fiat.P384Element.prototype.Set.call((q$ as P384Point).y, y3)
		fiat.P384Element.prototype.Set.call((q$ as P384Point).z, z3)
		return q
	}

	public async ScalarBaseMult(scalar: $.Slice<number>): globalThis.Promise<[P384Point | $.VarRef<P384Point> | null, $.GoError]> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		if ($.sliceLen(scalar) != 48) {
			return [null, errors.New("invalid scalar length")]
		}
		let tables: $.VarRef<p384Table[]> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).generatorTable() : P384Point.prototype.generatorTable.call(p))

		// This is also a scalar multiplication with a four-bit window like in
		// ScalarMult, but in this case the doublings are precomputed. The value
		// [windowValue]G added at iteration k would normally get doubled
		// (totIterations-k)×4 times, but with a larger precomputation we can
		// instead add [2^((totIterations-k)×4)][windowValue]G and avoid the
		// doublings between iterations.
		let t: P384Point | $.VarRef<P384Point> | null = NewP384Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Set(NewP384Point()) : P384Point.prototype.Set.call(p, NewP384Point()))
		let tableIndex = 95
		for (let __goscriptRangeTarget0 = scalar, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let byte = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p384Table_Select($.indexRef($.pointerValue<p384Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Add(p, t) : P384Point.prototype.Add.call(p, p, t))
			tableIndex--

			windowValue = $.uint(byte & 0b1111, 8)
			p384Table_Select($.indexRef($.pointerValue<p384Table[]>(tables), tableIndex), t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Add(p, t) : P384Point.prototype.Add.call(p, p, t))
			tableIndex--
		}

		return [p, null]
	}

	public async ScalarMult(q: P384Point | $.VarRef<P384Point> | null, scalar: $.Slice<number>): globalThis.Promise<[P384Point | $.VarRef<P384Point> | null, $.GoError]> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		// Compute a p384Table for the base point q. The explicit NewP384Point
		// calls get inlined, letting the allocations live on the stack.
		let table: $.VarRef<p384Table> = $.varRef($.arrayValue([NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point(), NewP384Point()]))
		P384Point.prototype.Set.call($.arrayIndex(table.value, 0), q)
		for (let i = 1; i < 15; i = i + (2)) {
			await P384Point.prototype.Double.call($.arrayIndex(table.value, i), $.arrayIndex(table.value, globalThis.Math.trunc(i / 2)))
			await P384Point.prototype.Add.call($.arrayIndex(table.value, i + 1), $.arrayIndex(table.value, i), q)
		}

		// Instead of doing the classic double-and-add chain, we do it with a
		// four-bit window: we double four times, and then add [0-15]P.
		let t: P384Point | $.VarRef<P384Point> | null = NewP384Point()
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Set(NewP384Point()) : P384Point.prototype.Set.call(p, NewP384Point()))
		for (let __goscriptRangeTarget1 = scalar, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let byte = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
			// No need to double on the first iteration, as p is the identity at
			// this point, and [N]∞ = ∞.
			if (i != 0) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
			}

			let windowValue = $.uint($.uintShr(byte, 4, 8), 8)
			p384Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Add(p, t) : P384Point.prototype.Add.call(p, p, t))

			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Double(p) : P384Point.prototype.Double.call(p, p))

			windowValue = $.uint(byte & 0b1111, 8)
			p384Table_Select(table, t, windowValue)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Add(p, t) : P384Point.prototype.Add.call(p, p, t))
		}

		return [p, null]
	}

	public Select(p1: P384Point | $.VarRef<P384Point> | null, p2: P384Point | $.VarRef<P384Point> | null, cond: number): P384Point | $.VarRef<P384Point> | null {
		const q: P384Point | $.VarRef<P384Point> | null = this;
		const q$: P384Point = q == null ? $.pointerTarget<P384Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P384Point>(q)
		fiat.P384Element.prototype.Select.call((q$ as P384Point).x, $.pointerValue<P384Point>(p1).x, $.pointerValue<P384Point>(p2).x, cond)
		fiat.P384Element.prototype.Select.call((q$ as P384Point).y, $.pointerValue<P384Point>(p1).y, $.pointerValue<P384Point>(p2).y, cond)
		fiat.P384Element.prototype.Select.call((q$ as P384Point).z, $.pointerValue<P384Point>(p1).z, $.pointerValue<P384Point>(p2).z, cond)
		return q
	}

	public Set(q: P384Point | $.VarRef<P384Point> | null): P384Point | $.VarRef<P384Point> | null {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		const q$: P384Point = q == null ? $.pointerTarget<P384Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P384Point>(q)
		fiat.P384Element.prototype.Set.call((p$ as P384Point).x, (q$ as P384Point).x)
		fiat.P384Element.prototype.Set.call((p$ as P384Point).y, (q$ as P384Point).y)
		fiat.P384Element.prototype.Set.call((p$ as P384Point).z, (q$ as P384Point).z)
		return p
	}

	public async SetBytes(b: $.Slice<number>): globalThis.Promise<[P384Point | $.VarRef<P384Point> | null, $.GoError]> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		switch ((true as boolean)) {
			case ($.sliceLen(b) == 1) && ($.arrayIndex(b!, 0) == 0):
			{
				return [(p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Set(NewP384Point()) : P384Point.prototype.Set.call(p, NewP384Point())), null]
				break
			}
			case ($.sliceLen(b) == 97) && ($.arrayIndex(b!, 0) == 4):
			{
				let __goscriptTuple0: any = fiat.P384Element.prototype.SetBytes.call(new fiat.P384Element(), $.goSlice(b, 1, 1 + 48))
				let x: fiat.P384Element | $.VarRef<fiat.P384Element> | null = __goscriptTuple0[0]
				let err = __goscriptTuple0[1]
				if (err != null) {
					return [null, err]
				}
				let __goscriptTuple1: any = fiat.P384Element.prototype.SetBytes.call(new fiat.P384Element(), $.goSlice(b, 1 + 48, undefined))
				let y: fiat.P384Element | $.VarRef<fiat.P384Element> | null = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [null, err]
				}
				{
					let __goscriptShadow0 = await p384CheckOnCurve(x, y)
					if (__goscriptShadow0 != null) {
						return [null, __goscriptShadow0]
					}
				}
				fiat.P384Element.prototype.Set.call((p$ as P384Point).x, x)
				fiat.P384Element.prototype.Set.call((p$ as P384Point).y, y)
				fiat.P384Element.prototype.One.call((p$ as P384Point).z)
				return [p, null]
				break
			}
			case ($.sliceLen(b) == 49) && (($.arrayIndex(b!, 0) == 2) || ($.arrayIndex(b!, 0) == 3)):
			{
				let __goscriptTuple2: any = fiat.P384Element.prototype.SetBytes.call(new fiat.P384Element(), $.goSlice(b, 1, undefined))
				let x: fiat.P384Element | $.VarRef<fiat.P384Element> | null = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}

				// y² = x³ - 3x + b
				let y: fiat.P384Element | $.VarRef<fiat.P384Element> | null = await p384Polynomial(new fiat.P384Element(), x)
				if (!p384Sqrt(y, y)) {
					return [null, errors.New("invalid P384 compressed point encoding")]
				}

				// Select the positive or negative root, as indicated by the least
				// significant bit, based on the encoding type byte.
				let otherRoot: fiat.P384Element | $.VarRef<fiat.P384Element> | null = new fiat.P384Element()
				void (otherRoot !== null && (otherRoot as any).__isVarRef !== true && (otherRoot as any).__goValue === undefined ? ((otherRoot as any) as fiat.P384Element).Sub(otherRoot, y) : fiat.P384Element.prototype.Sub.call(otherRoot, otherRoot, y))
				let cond = $.uint(($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(y))!, 48 - 1) & 1) ^ ($.arrayIndex(b!, 0) & 1), 8)
				void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P384Element).Select(otherRoot, y, $.int(cond)) : fiat.P384Element.prototype.Select.call(y, otherRoot, y, $.int(cond)))

				fiat.P384Element.prototype.Set.call((p$ as P384Point).x, x)
				fiat.P384Element.prototype.Set.call((p$ as P384Point).y, y)
				fiat.P384Element.prototype.One.call((p$ as P384Point).z)
				return [p, null]
				break
			}
			default:
			{
				return [null, errors.New("invalid P384 point encoding")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SetGenerator(): P384Point | $.VarRef<P384Point> | null {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		fiat.P384Element.prototype.SetBytes.call((p$ as P384Point).x, new Uint8Array([170, 135, 202, 34, 190, 139, 5, 55, 142, 177, 199, 30, 243, 32, 173, 116, 110, 29, 59, 98, 139, 167, 155, 152, 89, 247, 65, 224, 130, 84, 42, 56, 85, 2, 242, 93, 191, 85, 41, 108, 58, 84, 94, 56, 114, 118, 10, 183]) as $.Slice<number>)
		fiat.P384Element.prototype.SetBytes.call((p$ as P384Point).y, new Uint8Array([54, 23, 222, 74, 150, 38, 44, 111, 93, 158, 152, 191, 146, 146, 220, 41, 248, 244, 29, 189, 40, 154, 20, 124, 233, 218, 49, 19, 181, 240, 184, 192, 10, 96, 177, 206, 29, 126, 129, 157, 122, 67, 29, 124, 144, 234, 14, 95]) as $.Slice<number>)
		fiat.P384Element.prototype.One.call((p$ as P384Point).z)
		return p
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		if (fiat.P384Element.prototype.IsZero.call((p$ as P384Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Invert.call(new fiat.P384Element(), (p$ as P384Point).z)
		let x: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).x, zinv)
		let y: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).y, zinv)

		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(4, 8), $.byteSliceHint)
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(x)), $.byteSliceHint)
		buf = $.appendSlice(buf, (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(y)), $.byteSliceHint)
		return buf
	}

	public bytesCompressed(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		if (fiat.P384Element.prototype.IsZero.call((p$ as P384Point).z) == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Invert.call(new fiat.P384Element(), (p$ as P384Point).z)
		let x: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).x, zinv)
		let y: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).y, zinv)

		// Encode the sign of the y coordinate (indicated by the least significant
		// bit) as the encoding type (2 or 3).
		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(2, 8), $.byteSliceHint)
		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = $.sliceElems(buf!)[$.sliceSlot(buf!, 0)] | ($.uint($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(y))!, 48 - 1) & 1, 8))
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(x)), $.byteSliceHint)
		return buf
	}

	public bytesX(out: $.VarRef<Uint8Array> | null): [$.Slice<number>, $.GoError] {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		const p$: P384Point = p == null ? $.pointerTarget<P384Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P384Point>(p)
		if (fiat.P384Element.prototype.IsZero.call((p$ as P384Point).z) == 1) {
			return [null, errors.New("P384 point is the point at infinity")]
		}

		let zinv: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Invert.call(new fiat.P384Element(), (p$ as P384Point).z)
		let x: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Mul.call(new fiat.P384Element(), (p$ as P384Point).x, zinv)

		return [$.appendSlice($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P384Element).Bytes() : fiat.P384Element.prototype.Bytes.call(x)), $.byteSliceHint), null]
	}

	public async generatorTable(): globalThis.Promise<$.VarRef<p384Table[]> | null> {
		const p: P384Point | $.VarRef<P384Point> | null = this;
		await p384GeneratorTableOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			p384GeneratorTable = $.varRef<p384Table[]>($.arrayValue(globalThis.Array.from({ length: 96 }, () => $.arrayValue(globalThis.Array.from({ length: 15 }, () => null))), /* @__PURE__ */ $.arrayType("nistec.p384Table", 96)))
			let base: P384Point | $.VarRef<P384Point> | null = P384Point.prototype.SetGenerator.call(NewP384Point())
			for (let i = 0; i < 96; i++) {
				$.arrayIndex($.pointerValue<p384Table[]>(p384GeneratorTable), i)[0] = P384Point.prototype.Set.call(NewP384Point(), base)
				for (let j = 1; j < 15; j++) {
					$.arrayIndex($.pointerValue<p384Table[]>(p384GeneratorTable), i)[j] = await P384Point.prototype.Add.call(NewP384Point(), $.arrayIndex($.arrayIndex($.pointerValue<p384Table[]>(p384GeneratorTable), i), j - 1), base)
				}
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P384Point).Double(base) : P384Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P384Point).Double(base) : P384Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P384Point).Double(base) : P384Point.prototype.Double.call(base, base))
				await (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? ((base as any) as P384Point).Double(base) : P384Point.prototype.Double.call(base, base))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p384GeneratorTable
	}

	static __typeInfo = $.registerStructType(
		"nistec.P384Point",
		() => new P384Point(),
		() => [$.methodSignature("Add", [["p1", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P384Point")]], [/* @__PURE__ */ $.pointerType("nistec.P384Point")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesCompressed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Double", [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")]], [/* @__PURE__ */ $.pointerType("nistec.P384Point")], true), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P384Point"), "error"], true), $.methodSignature("ScalarMult", [["q", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P384Point"), "error"], true), $.methodSignature("Select", [["p1", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P384Point")], true), $.methodSignature("Set", [["q", /* @__PURE__ */ $.pointerType("nistec.P384Point")]], [/* @__PURE__ */ $.pointerType("nistec.P384Point")], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P384Point"), "error"], true), $.methodSignature("SetGenerator", [], [/* @__PURE__ */ $.pointerType("nistec.P384Point")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 97))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesCompressed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 49))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesX", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 48))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("generatorTable", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType("nistec.p384Table", 96))], true)],
		P384Point,
		() => [/* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.pointerType("fiat.P384Element"), [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("y", /* @__PURE__ */ $.pointerType("fiat.P384Element"), [1], 8, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("z", /* @__PURE__ */ $.pointerType("fiat.P384Element"), [2], 16, false, { pkgPath: "crypto/internal/fips140/nistec" })]
	)
}

export const p384ElementLength: number = 48

export function NewP384Point(): P384Point | $.VarRef<P384Point> | null {
	return (() => { const __goscriptLiteralField0 = fiat.P384Element.prototype.One.call(new fiat.P384Element()); return new P384Point({x: new fiat.P384Element(), y: __goscriptLiteralField0, z: new fiat.P384Element()}) })()
}

export let _p384B: fiat.P384Element | $.VarRef<fiat.P384Element> | null = null! as fiat.P384Element | $.VarRef<fiat.P384Element> | null

export function __goscript_set__p384B(__goscriptValue: fiat.P384Element | $.VarRef<fiat.P384Element> | null): void {
	_p384B = __goscriptValue
}

export let _p384BOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set__p384BOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(_p384BOnce.value, __goscriptValue)
}

export async function p384B(): globalThis.Promise<fiat.P384Element | $.VarRef<fiat.P384Element> | null> {
	await _p384BOnce.value.Do($.functionValue((): void => {
		let __goscriptTuple3: any = fiat.P384Element.prototype.SetBytes.call(new fiat.P384Element(), new Uint8Array([179, 49, 47, 167, 226, 62, 231, 228, 152, 142, 5, 107, 227, 248, 45, 25, 24, 29, 156, 110, 254, 129, 65, 18, 3, 20, 8, 143, 80, 19, 135, 90, 198, 86, 57, 141, 138, 46, 209, 157, 42, 133, 200, 237, 211, 236, 42, 239]) as $.Slice<number>)
		_p384B = __goscriptTuple3[0]
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return _p384B
}

export async function p384Polynomial(y2: fiat.P384Element | $.VarRef<fiat.P384Element> | null, x: fiat.P384Element | $.VarRef<fiat.P384Element> | null): globalThis.Promise<fiat.P384Element | $.VarRef<fiat.P384Element> | null> {
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P384Element).Square(x) : fiat.P384Element.prototype.Square.call(y2, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P384Element).Mul(y2, x) : fiat.P384Element.prototype.Mul.call(y2, y2, x))

	let threeX: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Add.call(new fiat.P384Element(), x, x)
	void (threeX !== null && (threeX as any).__isVarRef !== true && (threeX as any).__goValue === undefined ? ((threeX as any) as fiat.P384Element).Add(threeX, x) : fiat.P384Element.prototype.Add.call(threeX, threeX, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P384Element).Sub(y2, threeX) : fiat.P384Element.prototype.Sub.call(y2, y2, threeX))

	return (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P384Element).Add(y2, await p384B()) : fiat.P384Element.prototype.Add.call(y2, y2, await p384B()))
}

export async function p384CheckOnCurve(x: fiat.P384Element | $.VarRef<fiat.P384Element> | null, y: fiat.P384Element | $.VarRef<fiat.P384Element> | null): globalThis.Promise<$.GoError> {
	// y² = x³ - 3x + b
	let rhs: fiat.P384Element | $.VarRef<fiat.P384Element> | null = await p384Polynomial(new fiat.P384Element(), x)
	let lhs: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Square.call(new fiat.P384Element(), y)
	if ((rhs !== null && (rhs as any).__isVarRef !== true && (rhs as any).__goValue === undefined ? ((rhs as any) as fiat.P384Element).Equal(lhs) : fiat.P384Element.prototype.Equal.call(rhs, lhs)) != 1) {
		return errors.New("P384 point not on curve")
	}
	return null
}

export function p384Table_Select(table: $.VarRef<p384Table> | null, p: P384Point | $.VarRef<P384Point> | null, n: number): void {
	if (n >= 16) {
		$.panic("nistec: internal error: p384Table called with out-of-bounds value")
	}
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Set(NewP384Point()) : P384Point.prototype.Set.call(p, NewP384Point()))
	for (let i = 1; i < 16; i = ((i + 1) & 0xff)) {
		let cond = constanttime.ByteEq(i, n)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P384Point).Select($.arrayIndex($.pointerValue<(P384Point | $.VarRef<P384Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond) : P384Point.prototype.Select.call(p, $.arrayIndex($.pointerValue<(P384Point | $.VarRef<P384Point> | null)[]>(table), ((i - 1) & 0xff)), p, cond))
	}
}

export let p384GeneratorTable: $.VarRef<p384Table[]> | null = null! as $.VarRef<p384Table[]> | null

export function __goscript_set_p384GeneratorTable(__goscriptValue: $.VarRef<p384Table[]> | null): void {
	p384GeneratorTable = __goscriptValue
}

export let p384GeneratorTableOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_p384GeneratorTableOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(p384GeneratorTableOnce.value, __goscriptValue)
}

export function p384Sqrt(e: fiat.P384Element | $.VarRef<fiat.P384Element> | null, x: fiat.P384Element | $.VarRef<fiat.P384Element> | null): boolean {
	let isSquare: boolean = false
	let candidate: fiat.P384Element | $.VarRef<fiat.P384Element> | null = new fiat.P384Element()
	p384SqrtCandidate(candidate, x)
	let square: fiat.P384Element | $.VarRef<fiat.P384Element> | null = fiat.P384Element.prototype.Square.call(new fiat.P384Element(), candidate)
	if ((square !== null && (square as any).__isVarRef !== true && (square as any).__goValue === undefined ? ((square as any) as fiat.P384Element).Equal(x) : fiat.P384Element.prototype.Equal.call(square, x)) != 1) {
		return false
	}
	void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P384Element).Set(candidate) : fiat.P384Element.prototype.Set.call(e, candidate))
	return true
}

export function p384SqrtCandidate(z: fiat.P384Element | $.VarRef<fiat.P384Element> | null, x: fiat.P384Element | $.VarRef<fiat.P384Element> | null): void {
	// Since p = 3 mod 4, exponentiation by (p + 1) / 4 yields a square root candidate.
	//
	// The sequence of 14 multiplications and 381 squarings is derived from the
	// following addition chain generated with github.com/mmcloughlin/addchain v0.4.0.
	//
	//	_10      = 2*1
	//	_11      = 1 + _10
	//	_110     = 2*_11
	//	_111     = 1 + _110
	//	_111000  = _111 << 3
	//	_111111  = _111 + _111000
	//	_1111110 = 2*_111111
	//	_1111111 = 1 + _1111110
	//	x12      = _1111110 << 5 + _111111
	//	x24      = x12 << 12 + x12
	//	x31      = x24 << 7 + _1111111
	//	x32      = 2*x31 + 1
	//	x63      = x32 << 31 + x31
	//	x126     = x63 << 63 + x63
	//	x252     = x126 << 126 + x126
	//	x255     = x252 << 3 + _111
	//	return     ((x255 << 33 + x32) << 64 + 1) << 30
	//
	let t0: fiat.P384Element | $.VarRef<fiat.P384Element> | null = new fiat.P384Element()
	let t1: fiat.P384Element | $.VarRef<fiat.P384Element> | null = new fiat.P384Element()
	let t2: fiat.P384Element | $.VarRef<fiat.P384Element> | null = new fiat.P384Element()

	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(x) : fiat.P384Element.prototype.Square.call(z, x))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Mul(x, z) : fiat.P384Element.prototype.Mul.call(z, x, z))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(z) : fiat.P384Element.prototype.Square.call(z, z))
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Mul(x, z) : fiat.P384Element.prototype.Mul.call(t0, x, z))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(t0) : fiat.P384Element.prototype.Square.call(z, t0))
	for (let s = 1; s < 3; s++) {
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(z) : fiat.P384Element.prototype.Square.call(z, z))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t0, z) : fiat.P384Element.prototype.Mul.call(t1, t0, z))
	void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t2, t1))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Mul(x, t2) : fiat.P384Element.prototype.Mul.call(z, x, t2))
	for (let s = 0; s < 5; s++) {
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t2) : fiat.P384Element.prototype.Square.call(t2, t2))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t1, t2) : fiat.P384Element.prototype.Mul.call(t1, t1, t2))
	void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t2, t1))
	for (let s = 1; s < 12; s++) {
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t2) : fiat.P384Element.prototype.Square.call(t2, t2))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t1, t2) : fiat.P384Element.prototype.Mul.call(t1, t1, t2))
	for (let s = 0; s < 7; s++) {
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t1, t1))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(z, t1) : fiat.P384Element.prototype.Mul.call(t1, z, t1))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(z, t1))
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Mul(x, z) : fiat.P384Element.prototype.Mul.call(z, x, z))
	void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(z) : fiat.P384Element.prototype.Square.call(t2, z))
	for (let s = 1; s < 31; s++) {
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t2) : fiat.P384Element.prototype.Square.call(t2, t2))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t1, t2) : fiat.P384Element.prototype.Mul.call(t1, t1, t2))
	void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t2, t1))
	for (let s = 1; s < 63; s++) {
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t2) : fiat.P384Element.prototype.Square.call(t2, t2))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t1, t2) : fiat.P384Element.prototype.Mul.call(t1, t1, t2))
	void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t2, t1))
	for (let s = 1; s < 126; s++) {
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P384Element).Square(t2) : fiat.P384Element.prototype.Square.call(t2, t2))
	}
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Mul(t1, t2) : fiat.P384Element.prototype.Mul.call(t1, t1, t2))
	for (let s = 0; s < 3; s++) {
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P384Element).Square(t1) : fiat.P384Element.prototype.Square.call(t1, t1))
	}
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Mul(t0, t1) : fiat.P384Element.prototype.Mul.call(t0, t0, t1))
	for (let s = 0; s < 33; s++) {
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P384Element).Square(t0) : fiat.P384Element.prototype.Square.call(t0, t0))
	}
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Mul(z, t0) : fiat.P384Element.prototype.Mul.call(z, z, t0))
	for (let s = 0; s < 64; s++) {
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(z) : fiat.P384Element.prototype.Square.call(z, z))
	}
	void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Mul(x, z) : fiat.P384Element.prototype.Mul.call(z, x, z))
	for (let s = 0; s < 30; s++) {
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as fiat.P384Element).Square(z) : fiat.P384Element.prototype.Square.call(z, z))
	}
}
