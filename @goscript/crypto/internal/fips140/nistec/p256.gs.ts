// Generated file based on p256.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as fiat from "@goscript/crypto/internal/fips140/nistec/fiat/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as cpu from "@goscript/crypto/internal/fips140deps/cpu/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_p256_table from "./p256_table.gs.ts"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/nistec/fiat/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/crypto/internal/fips140deps/cpu/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/sync/index.js"
import "@goscript/unsafe/index.js"
import "./p256_table.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/nistec", ["nistec.P256Point", "nistec.p256AffinePoint", "nistec.p256OrdElement", "nistec.p256Table", "nistec.p256AffineTable"])

export type p256OrdElement = bigint[]

$.registerNamedType("nistec.p256OrdElement", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 4));

$.registerNamedValueType(
	"*nistec.p256OrdElement",
	{Bytes: (receiver: any, ...args: any[]) => (p256OrdElement_Bytes as any)(receiver, ...$.stripGenericTypeArgs(args)), Rsh: (receiver: any, ...args: any[]) => (p256OrdElement_Rsh as any)(receiver, ...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => (p256OrdElement_SetBytes as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Rsh", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("SetBytes", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.p256OrdElement"), "error"])]
);

export type p256Table = P256Point[]

$.registerNamedType("nistec.p256Table", /* @__PURE__ */ $.arrayType("nistec.P256Point", 16));

$.registerNamedValueType(
	"*nistec.p256Table",
	{Compute: (receiver: any, ...args: any[]) => (p256Table_Compute as any)(receiver, ...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => (p256Table_Select as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Compute", [["q", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [/* @__PURE__ */ $.pointerType("nistec.p256Table")]), $.methodSignature("Select", [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["n", /* @__PURE__ */ $.basicType("uint8")]])]
);

export type p256AffineTable = p256AffinePoint[]

$.registerNamedType("nistec.p256AffineTable", /* @__PURE__ */ $.arrayType("nistec.p256AffinePoint", 32));

$.registerNamedValueType(
	"*nistec.p256AffineTable",
	{Select: (receiver: any, ...args: any[]) => (p256AffineTable_Select as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Select", [["p", /* @__PURE__ */ $.pointerType("nistec.p256AffinePoint")], ["n", /* @__PURE__ */ $.basicType("uint8")]])]
);

export class P256Point {
	// The point is represented in projective coordinates (X:Y:Z), where x = X/Z
	// and y = Y/Z. Infinity is (0:1:0).
	//
	// fiat.P256Element is a base field element in [0, P-1] in the Montgomery
	// domain (with R 2²⁵⁶ and P 2²⁵⁶ - 2²²⁴ + 2¹⁹² + 2⁹⁶ - 1) as four limbs in
	// little-endian order value.
	public get x(): fiat.P256Element {
		return this._fields.x
	}

	public set x(value: fiat.P256Element) {
		this._fields.x = value
	}

	// The point is represented in projective coordinates (X:Y:Z), where x = X/Z
	// and y = Y/Z. Infinity is (0:1:0).
	//
	// fiat.P256Element is a base field element in [0, P-1] in the Montgomery
	// domain (with R 2²⁵⁶ and P 2²⁵⁶ - 2²²⁴ + 2¹⁹² + 2⁹⁶ - 1) as four limbs in
	// little-endian order value.
	public get y(): fiat.P256Element {
		return this._fields.y
	}

	public set y(value: fiat.P256Element) {
		this._fields.y = value
	}

	// The point is represented in projective coordinates (X:Y:Z), where x = X/Z
	// and y = Y/Z. Infinity is (0:1:0).
	//
	// fiat.P256Element is a base field element in [0, P-1] in the Montgomery
	// domain (with R 2²⁵⁶ and P 2²⁵⁶ - 2²²⁴ + 2¹⁹² + 2⁹⁶ - 1) as four limbs in
	// little-endian order value.
	public get z(): fiat.P256Element {
		return this._fields.z
	}

	public set z(value: fiat.P256Element) {
		this._fields.z = value
	}

	public _fields: {
		x: fiat.P256Element
		y: fiat.P256Element
		z: fiat.P256Element
	}

	constructor(init?: Partial<{x?: fiat.P256Element, y?: fiat.P256Element, z?: fiat.P256Element}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ? init.x.clone() : new fiat.P256Element(undefined, true),
			y: init?.y ? init.y.clone() : new fiat.P256Element(undefined, true),
			z: init?.z ? init.z.clone() : new fiat.P256Element(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P256Point {
		return new P256Point(this, true)
	}

	public __goscriptAssign(source: P256Point): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.x, values.x)
		$.assignStruct(target.y, values.y)
		$.assignStruct(target.z, values.z)
	}

	public async Add(p1: P256Point | $.VarRef<P256Point> | null, p2: P256Point | $.VarRef<P256Point> | null): globalThis.Promise<P256Point | $.VarRef<P256Point> | null> {
		const q: P256Point | $.VarRef<P256Point> | null = this;
		const q$: P256Point = q == null ? $.pointerTarget<P256Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P256Point>(q)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "x"))
		let t1: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "y"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "y"))
		let t2: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "z"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "z"))
		let t3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "y"))
		let t4: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "y"))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Mul(t3, t4) : fiat.P256Element.prototype.Mul.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Add(t0, t1) : fiat.P256Element.prototype.Add.call(t4, t0, t1))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Sub(t3, t4) : fiat.P256Element.prototype.Sub.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Add($.fieldRef($.pointerValue<P256Point>(p1)._fields, "y"), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "z")) : fiat.P256Element.prototype.Add.call(t4, $.fieldRef($.pointerValue<P256Point>(p1)._fields, "y"), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "z")))
		let x3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "y"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "z"))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Mul(t4, x3) : fiat.P256Element.prototype.Mul.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add(t1, t2) : fiat.P256Element.prototype.Add.call(x3, t1, t2))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Sub(t4, x3) : fiat.P256Element.prototype.Sub.call(t4, t4, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add($.fieldRef($.pointerValue<P256Point>(p1)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "z")) : fiat.P256Element.prototype.Add.call(x3, $.fieldRef($.pointerValue<P256Point>(p1)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p1)._fields, "z")))
		let y3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "z"))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Mul(x3, y3) : fiat.P256Element.prototype.Mul.call(x3, x3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(t0, t2) : fiat.P256Element.prototype.Add.call(y3, t0, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(x3, y3) : fiat.P256Element.prototype.Sub.call(y3, x3, y3))
		let z3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), await p256B(), t2)
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Sub(y3, z3) : fiat.P256Element.prototype.Sub.call(x3, y3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(x3, x3) : fiat.P256Element.prototype.Add.call(z3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add(x3, z3) : fiat.P256Element.prototype.Add.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Sub(t1, x3) : fiat.P256Element.prototype.Sub.call(z3, t1, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add(t1, x3) : fiat.P256Element.prototype.Add.call(x3, t1, x3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Mul(await p256B(), y3) : fiat.P256Element.prototype.Mul.call(y3, await p256B(), y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add(t2, t2) : fiat.P256Element.prototype.Add.call(t1, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P256Element).Add(t1, t2) : fiat.P256Element.prototype.Add.call(t2, t1, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(y3, t2) : fiat.P256Element.prototype.Sub.call(y3, y3, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(y3, t0) : fiat.P256Element.prototype.Sub.call(y3, y3, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add(y3, y3) : fiat.P256Element.prototype.Add.call(t1, y3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(t1, y3) : fiat.P256Element.prototype.Add.call(y3, t1, y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add(t0, t0) : fiat.P256Element.prototype.Add.call(t1, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Add(t1, t0) : fiat.P256Element.prototype.Add.call(t0, t1, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Sub(t0, t2) : fiat.P256Element.prototype.Sub.call(t0, t0, t2))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Mul(t4, y3) : fiat.P256Element.prototype.Mul.call(t1, t4, y3))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P256Element).Mul(t0, y3) : fiat.P256Element.prototype.Mul.call(t2, t0, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Mul(x3, z3) : fiat.P256Element.prototype.Mul.call(y3, x3, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(y3, t2) : fiat.P256Element.prototype.Add.call(y3, y3, t2))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Mul(t3, x3) : fiat.P256Element.prototype.Mul.call(x3, t3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Sub(x3, t1) : fiat.P256Element.prototype.Sub.call(x3, x3, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Mul(t4, z3) : fiat.P256Element.prototype.Mul.call(z3, t4, z3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Mul(t3, t0) : fiat.P256Element.prototype.Mul.call(t1, t3, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, t1) : fiat.P256Element.prototype.Add.call(z3, z3, t1))

		void (q$ as P256Point).x.Set(x3)
		void (q$ as P256Point).y.Set(y3)
		void (q$ as P256Point).z.Set(z3)
		return q
	}

	public async AddAffine(p1: P256Point | $.VarRef<P256Point> | null, p2: p256AffinePoint | $.VarRef<p256AffinePoint> | null, infinity: number): globalThis.Promise<P256Point | $.VarRef<P256Point> | null> {
		const q: P256Point | $.VarRef<P256Point> | null = this;
		const q$: P256Point = q == null ? $.pointerTarget<P256Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P256Point>(q)
		const p1$: P256Point = p1 == null ? $.pointerTarget<P256Point>(p1) : (p1 as any).__isVarRef === true ? (p1 as any).value : (p1 as any).__goValue === undefined ? (p1 as any) : $.pointerTarget<P256Point>(p1)
		const p2$: p256AffinePoint = p2 == null ? $.pointerTarget<p256AffinePoint>(p2) : (p2 as any).__isVarRef === true ? (p2 as any).value : (p2 as any).__goValue === undefined ? (p2 as any) : $.pointerTarget<p256AffinePoint>(p2)
		// Complete mixed addition formula for a = -3 from "Complete addition
		// formulas for prime order elliptic curves"
		// (https://eprint.iacr.org/2015/1060), Algorithm 5.

		let t0: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p1$ as P256Point)._fields, "x"), $.fieldRef((p2$ as p256AffinePoint)._fields, "x"))
		let t1: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p1$ as P256Point)._fields, "y"), $.fieldRef((p2$ as p256AffinePoint)._fields, "y"))
		let t3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef((p2$ as p256AffinePoint)._fields, "x"), $.fieldRef((p2$ as p256AffinePoint)._fields, "y"))
		let t4: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), $.fieldRef((p1$ as P256Point)._fields, "x"), $.fieldRef((p1$ as P256Point)._fields, "y"))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Mul(t3, t4) : fiat.P256Element.prototype.Mul.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Add(t0, t1) : fiat.P256Element.prototype.Add.call(t4, t0, t1))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Sub(t3, t4) : fiat.P256Element.prototype.Sub.call(t3, t3, t4))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Mul($.fieldRef((p2$ as p256AffinePoint)._fields, "y"), $.fieldRef((p1$ as P256Point)._fields, "z")) : fiat.P256Element.prototype.Mul.call(t4, $.fieldRef((p2$ as p256AffinePoint)._fields, "y"), $.fieldRef((p1$ as P256Point)._fields, "z")))
		void (t4 !== null && (t4 as any).__isVarRef !== true && (t4 as any).__goValue === undefined ? ((t4 as any) as fiat.P256Element).Add(t4, $.fieldRef((p1$ as P256Point)._fields, "y")) : fiat.P256Element.prototype.Add.call(t4, t4, $.fieldRef((p1$ as P256Point)._fields, "y")))
		let y3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p2$ as p256AffinePoint)._fields, "x"), $.fieldRef((p1$ as P256Point)._fields, "z"))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(y3, $.fieldRef((p1$ as P256Point)._fields, "x")) : fiat.P256Element.prototype.Add.call(y3, y3, $.fieldRef((p1$ as P256Point)._fields, "x")))
		let z3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), await p256B(), $.fieldRef((p1$ as P256Point)._fields, "z"))
		let x3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Sub.call(new fiat.P256Element(), y3, z3)
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(x3, x3) : fiat.P256Element.prototype.Add.call(z3, x3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add(x3, z3) : fiat.P256Element.prototype.Add.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Sub(t1, x3) : fiat.P256Element.prototype.Sub.call(z3, t1, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Add(t1, x3) : fiat.P256Element.prototype.Add.call(x3, t1, x3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Mul(await p256B(), y3) : fiat.P256Element.prototype.Mul.call(y3, await p256B(), y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add($.fieldRef((p1$ as P256Point)._fields, "z"), $.fieldRef((p1$ as P256Point)._fields, "z")) : fiat.P256Element.prototype.Add.call(t1, $.fieldRef((p1$ as P256Point)._fields, "z"), $.fieldRef((p1$ as P256Point)._fields, "z")))
		let t2: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), t1, $.fieldRef((p1$ as P256Point)._fields, "z"))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(y3, t2) : fiat.P256Element.prototype.Sub.call(y3, y3, t2))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(y3, t0) : fiat.P256Element.prototype.Sub.call(y3, y3, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add(y3, y3) : fiat.P256Element.prototype.Add.call(t1, y3, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(t1, y3) : fiat.P256Element.prototype.Add.call(y3, t1, y3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Add(t0, t0) : fiat.P256Element.prototype.Add.call(t1, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Add(t1, t0) : fiat.P256Element.prototype.Add.call(t0, t1, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Sub(t0, t2) : fiat.P256Element.prototype.Sub.call(t0, t0, t2))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Mul(t4, y3) : fiat.P256Element.prototype.Mul.call(t1, t4, y3))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P256Element).Mul(t0, y3) : fiat.P256Element.prototype.Mul.call(t2, t0, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Mul(x3, z3) : fiat.P256Element.prototype.Mul.call(y3, x3, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(y3, t2) : fiat.P256Element.prototype.Add.call(y3, y3, t2))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Mul(t3, x3) : fiat.P256Element.prototype.Mul.call(x3, t3, x3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Sub(x3, t1) : fiat.P256Element.prototype.Sub.call(x3, x3, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Mul(t4, z3) : fiat.P256Element.prototype.Mul.call(z3, t4, z3))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Mul(t3, t0) : fiat.P256Element.prototype.Mul.call(t1, t3, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, t1) : fiat.P256Element.prototype.Add.call(z3, z3, t1))

		void (q$ as P256Point).x.Select($.fieldRef((p1$ as P256Point)._fields, "x"), x3, infinity)
		void (q$ as P256Point).y.Select($.fieldRef((p1$ as P256Point)._fields, "y"), y3, infinity)
		void (q$ as P256Point).z.Select($.fieldRef((p1$ as P256Point)._fields, "z"), z3, infinity)
		return q
	}

	public Bytes(): $.Slice<number> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(65)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).bytes(out) : P256Point.prototype.bytes.call(p, out))
	}

	public BytesCompressed(): $.Slice<number> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(33)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).bytesCompressed(out) : P256Point.prototype.bytesCompressed.call(p, out))
	}

	public BytesX(): [$.Slice<number>, $.GoError] {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).bytesX(out) : P256Point.prototype.bytesX.call(p, out))
	}

	public async Double(p: P256Point | $.VarRef<P256Point> | null): globalThis.Promise<P256Point | $.VarRef<P256Point> | null> {
		const q: P256Point | $.VarRef<P256Point> | null = this;
		const q$: P256Point = q == null ? $.pointerTarget<P256Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P256Point>(q)
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		// Complete addition formula for a = -3 from "Complete addition formulas for
		// prime order elliptic curves" (https://eprint.iacr.org/2015/1060), §A.2.

		let t0: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Square.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"))
		let t1: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Square.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "y"))
		let t2: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Square.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "z"))
		let t3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"), $.fieldRef((p$ as P256Point)._fields, "y"))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Add(t3, t3) : fiat.P256Element.prototype.Add.call(t3, t3, t3))
		let z3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"), $.fieldRef((p$ as P256Point)._fields, "z"))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, z3) : fiat.P256Element.prototype.Add.call(z3, z3, z3))
		let y3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), await p256B(), t2)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Sub(y3, z3) : fiat.P256Element.prototype.Sub.call(y3, y3, z3))
		let x3: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), y3, y3)
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(x3, y3) : fiat.P256Element.prototype.Add.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Sub(t1, y3) : fiat.P256Element.prototype.Sub.call(x3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(t1, y3) : fiat.P256Element.prototype.Add.call(y3, t1, y3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Mul(x3, y3) : fiat.P256Element.prototype.Mul.call(y3, x3, y3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Mul(x3, t3) : fiat.P256Element.prototype.Mul.call(x3, x3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Add(t2, t2) : fiat.P256Element.prototype.Add.call(t3, t2, t2))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as fiat.P256Element).Add(t2, t3) : fiat.P256Element.prototype.Add.call(t2, t2, t3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Mul(await p256B(), z3) : fiat.P256Element.prototype.Mul.call(z3, await p256B(), z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Sub(z3, t2) : fiat.P256Element.prototype.Sub.call(z3, z3, t2))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Sub(z3, t0) : fiat.P256Element.prototype.Sub.call(z3, z3, t0))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Add(z3, z3) : fiat.P256Element.prototype.Add.call(t3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, t3) : fiat.P256Element.prototype.Add.call(z3, z3, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as fiat.P256Element).Add(t0, t0) : fiat.P256Element.prototype.Add.call(t3, t0, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Add(t3, t0) : fiat.P256Element.prototype.Add.call(t0, t3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Sub(t0, t2) : fiat.P256Element.prototype.Sub.call(t0, t0, t2))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(t0, z3) : fiat.P256Element.prototype.Mul.call(t0, t0, z3))
		void (y3 !== null && (y3 as any).__isVarRef !== true && (y3 as any).__goValue === undefined ? ((y3 as any) as fiat.P256Element).Add(y3, t0) : fiat.P256Element.prototype.Add.call(y3, y3, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul($.fieldRef((p$ as P256Point)._fields, "y"), $.fieldRef((p$ as P256Point)._fields, "z")) : fiat.P256Element.prototype.Mul.call(t0, $.fieldRef((p$ as P256Point)._fields, "y"), $.fieldRef((p$ as P256Point)._fields, "z")))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Add(t0, t0) : fiat.P256Element.prototype.Add.call(t0, t0, t0))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Mul(t0, z3) : fiat.P256Element.prototype.Mul.call(z3, t0, z3))
		void (x3 !== null && (x3 as any).__isVarRef !== true && (x3 as any).__goValue === undefined ? ((x3 as any) as fiat.P256Element).Sub(x3, z3) : fiat.P256Element.prototype.Sub.call(x3, x3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Mul(t0, t1) : fiat.P256Element.prototype.Mul.call(z3, t0, t1))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, z3) : fiat.P256Element.prototype.Add.call(z3, z3, z3))
		void (z3 !== null && (z3 as any).__isVarRef !== true && (z3 as any).__goValue === undefined ? ((z3 as any) as fiat.P256Element).Add(z3, z3) : fiat.P256Element.prototype.Add.call(z3, z3, z3))

		void (q$ as P256Point).x.Set(x3)
		void (q$ as P256Point).y.Set(y3)
		void (q$ as P256Point).z.Set(z3)
		return q
	}

	public Negate(cond: number): P256Point | $.VarRef<P256Point> | null {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		let negY: fiat.P256Element | $.VarRef<fiat.P256Element> | null = new fiat.P256Element()
		void (negY !== null && (negY as any).__isVarRef !== true && (negY as any).__goValue === undefined ? ((negY as any) as fiat.P256Element).Sub(negY, $.fieldRef((p$ as P256Point)._fields, "y")) : fiat.P256Element.prototype.Sub.call(negY, negY, $.fieldRef((p$ as P256Point)._fields, "y")))
		void (p$ as P256Point).y.Select(negY, $.fieldRef((p$ as P256Point)._fields, "y"), cond)
		return p
	}

	public async ScalarBaseMult(scalar: $.Slice<number>): globalThis.Promise<[P256Point | $.VarRef<P256Point> | null, $.GoError]> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		// This function works like ScalarMult above, but the table is fixed and
		// "pre-doubled" for each iteration, so instead of doubling we move to the
		// next table at each iteration.

		let __goscriptTuple0: any = p256OrdElement_SetBytes($.varRef<p256OrdElement>($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))), scalar)
		let s: $.VarRef<p256OrdElement> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		// Start scanning the window from the most significant bits. We move by
		// 6 bits at a time and need to finish at -1, so -1 + 6 * 42 = 251.
		let index = 251

		let [sel, sign] = boothW6(p256OrdElement_Rsh(s, index))
		// sign is always zero because the boothW6 input here is at
		// most five bits long, so the top bit is never set.
		sign

		let t: p256AffinePoint | $.VarRef<p256AffinePoint> | null = new p256AffinePoint()
		let table: $.VarRef<p256AffineTable> | null = $.indexRef($.pointerValue<p256AffineTable[]>(p256GeneratorTables), globalThis.Math.trunc((index + 1) / 6))
		p256AffineTable_Select(table, t, sel)

		// Select's output is undefined if the selector is zero, when it should be
		// the point at infinity (because infinity can't be represented in affine
		// coordinates). Here we conditionally set p to the infinity if sel is zero.
		// In the loop, that's handled by AddAffine.
		let selIsZero = constanttime.ByteEq(sel, 0)
		P256Point.prototype.Select.call(p, NewP256Point(), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as p256AffinePoint).Projective() : p256AffinePoint.prototype.Projective.call(t)), selIsZero)

		while (index >= 5) {
			index = index - (6)

			if (index >= 0) {
				let __goscriptTuple1: any = boothW6($.uint64And(p256OrdElement_Rsh(s, index), 127n))
				sel = __goscriptTuple1[0]
				sign = __goscriptTuple1[1]
			} else {
				// Booth encoding considers a virtual zero bit at index -1,
				// so we shift left the least significant limb.
				let wvalue = $.uint64And(($.uint64Shl($.arrayIndex($.pointerValue<bigint[]>(s), 0), 1n)), 127n)
				let __goscriptTuple2: any = boothW6(wvalue)
				sel = __goscriptTuple2[0]
				sign = __goscriptTuple2[1]
			}

			let __goscriptShadow0: $.VarRef<p256AffineTable> | null = $.indexRef($.pointerValue<p256AffineTable[]>(p256GeneratorTables), globalThis.Math.trunc((index + 1) / 6))
			p256AffineTable_Select(__goscriptShadow0, t, sel)
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as p256AffinePoint).Negate(sign) : p256AffinePoint.prototype.Negate.call(t, sign))
			let __goscriptShadow1 = constanttime.ByteEq(sel, 0)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).AddAffine(p, t, __goscriptShadow1) : P256Point.prototype.AddAffine.call(p, p, t, __goscriptShadow1))
		}

		return [p, null]
	}

	public async ScalarMult(q: P256Point | $.VarRef<P256Point> | null, scalar: $.Slice<number>): globalThis.Promise<[P256Point | $.VarRef<P256Point> | null, $.GoError]> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		let __goscriptTuple3: any = p256OrdElement_SetBytes($.varRef<p256OrdElement>($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))), scalar)
		let s: $.VarRef<p256OrdElement> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}

		// Start scanning the window from the most significant bits. We move by
		// 5 bits at a time and need to finish at -1, so -1 + 5 * 51 = 254.
		let index = 254

		let [sel, sign] = boothW5(p256OrdElement_Rsh(s, index))
		// sign is always zero because the boothW5 input here is at
		// most two bits long, so the top bit is never set.
		sign

		// Neither Select nor Add have exceptions for the point at infinity /
		// selector zero, so we don't need to check for it here or in the loop.
		let table: $.VarRef<p256Table> | null = await p256Table_Compute($.varRef<p256Table>($.arrayValue(globalThis.Array.from({ length: 16 }, () => new P256Point(undefined, true)), /* @__PURE__ */ $.arrayType("nistec.P256Point", 16))), q)
		p256Table_Select(table, p, sel)

		let t: P256Point | $.VarRef<P256Point> | null = NewP256Point()
		while (index >= 4) {
			index = index - (5)

			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Double(p) : P256Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Double(p) : P256Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Double(p) : P256Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Double(p) : P256Point.prototype.Double.call(p, p))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Double(p) : P256Point.prototype.Double.call(p, p))

			if (index >= 0) {
				let __goscriptTuple4: any = boothW5($.uint64And(p256OrdElement_Rsh(s, index), 63n))
				sel = __goscriptTuple4[0]
				sign = __goscriptTuple4[1]
			} else {
				// Booth encoding considers a virtual zero bit at index -1,
				// so we shift left the least significant limb.
				let wvalue = $.uint64And(($.uint64Shl($.arrayIndex($.pointerValue<bigint[]>(s), 0), 1n)), 63n)
				let __goscriptTuple5: any = boothW5(wvalue)
				sel = __goscriptTuple5[0]
				sign = __goscriptTuple5[1]
			}

			p256Table_Select(table, t, sel)
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as P256Point).Negate(sign) : P256Point.prototype.Negate.call(t, sign))
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Add(p, t) : P256Point.prototype.Add.call(p, p, t))
		}

		return [p, null]
	}

	public Select(p1: P256Point | $.VarRef<P256Point> | null, p2: P256Point | $.VarRef<P256Point> | null, cond: number): P256Point | $.VarRef<P256Point> | null {
		const q: P256Point | $.VarRef<P256Point> | null = this;
		const q$: P256Point = q == null ? $.pointerTarget<P256Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P256Point>(q)
		void (q$ as P256Point).x.Select($.fieldRef($.pointerValue<P256Point>(p1)._fields, "x"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "x"), cond)
		void (q$ as P256Point).y.Select($.fieldRef($.pointerValue<P256Point>(p1)._fields, "y"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "y"), cond)
		void (q$ as P256Point).z.Select($.fieldRef($.pointerValue<P256Point>(p1)._fields, "z"), $.fieldRef($.pointerValue<P256Point>(p2)._fields, "z"), cond)
		return q
	}

	public Set(q: P256Point | $.VarRef<P256Point> | null): P256Point | $.VarRef<P256Point> | null {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		const q$: P256Point = q == null ? $.pointerTarget<P256Point>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<P256Point>(q)
		void (p$ as P256Point).x.Set($.fieldRef((q$ as P256Point)._fields, "x"))
		void (p$ as P256Point).y.Set($.fieldRef((q$ as P256Point)._fields, "y"))
		void (p$ as P256Point).z.Set($.fieldRef((q$ as P256Point)._fields, "z"))
		return p
	}

	public async SetBytes(b: $.Slice<number>): globalThis.Promise<[P256Point | $.VarRef<P256Point> | null, $.GoError]> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		switch ((true as boolean)) {
			case ($.sliceLen(b) == 1) && ($.arrayIndex(b!, 0) == 0):
			{
				return [(p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Set(NewP256Point()) : P256Point.prototype.Set.call(p, NewP256Point())), null]
				break
			}
			case ($.sliceLen(b) == 65) && ($.arrayIndex(b!, 0) == 4):
			{
				let __goscriptTuple6: any = fiat.P256Element.prototype.SetBytes.call(new fiat.P256Element(), $.goSlice(b, 1, 1 + 32))
				let x: fiat.P256Element | $.VarRef<fiat.P256Element> | null = __goscriptTuple6[0]
				let err = __goscriptTuple6[1]
				if (err != null) {
					return [null, err]
				}
				let __goscriptTuple7: any = fiat.P256Element.prototype.SetBytes.call(new fiat.P256Element(), $.goSlice(b, 1 + 32, undefined))
				let y: fiat.P256Element | $.VarRef<fiat.P256Element> | null = __goscriptTuple7[0]
				err = __goscriptTuple7[1]
				if (err != null) {
					return [null, err]
				}
				{
					let __goscriptShadow2 = await p256CheckOnCurve(x, y)
					if (__goscriptShadow2 != null) {
						return [null, __goscriptShadow2]
					}
				}
				void (p$ as P256Point).x.Set(x)
				void (p$ as P256Point).y.Set(y)
				void (p$ as P256Point).z.One()
				return [p, null]
				break
			}
			case ($.sliceLen(b) == 33) && (($.arrayIndex(b!, 0) == 2) || ($.arrayIndex(b!, 0) == 3)):
			{
				let __goscriptTuple8: any = fiat.P256Element.prototype.SetBytes.call(new fiat.P256Element(), $.goSlice(b, 1, undefined))
				let x: fiat.P256Element | $.VarRef<fiat.P256Element> | null = __goscriptTuple8[0]
				let err = __goscriptTuple8[1]
				if (err != null) {
					return [null, err]
				}

				// y² = x³ - 3x + b
				let y: fiat.P256Element | $.VarRef<fiat.P256Element> | null = await p256Polynomial(new fiat.P256Element(), x)
				if (!p256Sqrt(y, y)) {
					return [null, errors.New("invalid P256 compressed point encoding")]
				}

				// Select the positive or negative root, as indicated by the least
				// significant bit, based on the encoding type byte.
				let otherRoot: fiat.P256Element | $.VarRef<fiat.P256Element> | null = new fiat.P256Element()
				void (otherRoot !== null && (otherRoot as any).__isVarRef !== true && (otherRoot as any).__goValue === undefined ? ((otherRoot as any) as fiat.P256Element).Sub(otherRoot, y) : fiat.P256Element.prototype.Sub.call(otherRoot, otherRoot, y))
				let cond = $.uint(($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(y))!, 32 - 1) & 1) ^ ($.arrayIndex(b!, 0) & 1), 8)
				void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P256Element).Select(otherRoot, y, $.int(cond)) : fiat.P256Element.prototype.Select.call(y, otherRoot, y, $.int(cond)))

				void (p$ as P256Point).x.Set(x)
				void (p$ as P256Point).y.Set(y)
				void (p$ as P256Point).z.One()
				return [p, null]
				break
			}
			default:
			{
				return [null, errors.New("invalid P256 point encoding")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SetGenerator(): P256Point | $.VarRef<P256Point> | null {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		void (p$ as P256Point).x.SetBytes(new Uint8Array([107, 23, 209, 242, 225, 44, 66, 71, 248, 188, 230, 229, 99, 164, 64, 242, 119, 3, 125, 129, 45, 235, 51, 160, 244, 161, 57, 69, 216, 152, 194, 150]) as $.Slice<number>)
		void (p$ as P256Point).y.SetBytes(new Uint8Array([79, 227, 66, 226, 254, 26, 127, 155, 142, 231, 235, 74, 124, 15, 158, 22, 43, 206, 51, 87, 107, 49, 94, 206, 203, 182, 64, 104, 55, 191, 81, 245]) as $.Slice<number>)
		void (p$ as P256Point).z.One()
		return p
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		// The SEC 1 representation of the point at infinity is a single zero byte,
		// and only infinity has z = 0.
		if ((p$ as P256Point).z.IsZero() == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Invert.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "z"))
		let x: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"), zinv)
		let y: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "y"), zinv)

		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(4, 8), $.byteSliceHint)
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(x)), $.byteSliceHint)
		buf = $.appendSlice(buf, (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(y)), $.byteSliceHint)
		return buf
	}

	public bytesCompressed(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		if ((p$ as P256Point).z.IsZero() == 1) {
			return $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(0, 8), $.byteSliceHint)
		}

		let zinv: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Invert.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "z"))
		let x: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"), zinv)
		let y: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "y"), zinv)

		// Encode the sign of the y coordinate (indicated by the least significant
		// bit) as the encoding type (2 or 3).
		let buf: $.Slice<number> = $.append($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), $.uint(2, 8), $.byteSliceHint)
		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = $.sliceElems(buf!)[$.sliceSlot(buf!, 0)] | ($.uint($.arrayIndex((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(y))!, 32 - 1) & 1, 8))
		buf = $.appendSlice(buf, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(x)), $.byteSliceHint)
		return buf
	}

	public bytesX(out: $.VarRef<Uint8Array> | null): [$.Slice<number>, $.GoError] {
		const p: P256Point | $.VarRef<P256Point> | null = this;
		const p$: P256Point = p == null ? $.pointerTarget<P256Point>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<P256Point>(p)
		if ((p$ as P256Point).z.IsZero() == 1) {
			return [null, errors.New("P256 point is the point at infinity")]
		}

		let zinv: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Invert.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "z"))
		let x: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Mul.call(new fiat.P256Element(), $.fieldRef((p$ as P256Point)._fields, "x"), zinv)

		return [$.appendSlice($.goSlice($.pointerValue<Uint8Array>(out), undefined, 0), (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as fiat.P256Element).Bytes() : fiat.P256Element.prototype.Bytes.call(x)), $.byteSliceHint), null]
	}

	static __typeInfo = $.registerStructType(
		"nistec.P256Point",
		() => new P256Point(),
		() => [$.methodSignature("Add", [["p1", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("AddAffine", [["p1", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.p256AffinePoint")], ["infinity", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesCompressed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Double", [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("Negate", [["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P256Point"), "error"], true), $.methodSignature("ScalarMult", [["q", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P256Point"), "error"], true), $.methodSignature("Select", [["p1", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["p2", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("Set", [["q", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("nistec.P256Point"), "error"], true), $.methodSignature("SetGenerator", [], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 65))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesCompressed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 33))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("bytesX", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		P256Point,
		() => [/* @__PURE__ */ $.structField("x", "fiat.P256Element", [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("y", "fiat.P256Element", [1], 32, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("z", "fiat.P256Element", [2], 64, false, { pkgPath: "crypto/internal/fips140/nistec" })]
	)
}

export class p256AffinePoint {
	public get x(): fiat.P256Element {
		return this._fields.x
	}

	public set x(value: fiat.P256Element) {
		this._fields.x = value
	}

	public get y(): fiat.P256Element {
		return this._fields.y
	}

	public set y(value: fiat.P256Element) {
		this._fields.y = value
	}

	public _fields: {
		x: fiat.P256Element
		y: fiat.P256Element
	}

	constructor(init?: Partial<{x?: fiat.P256Element, y?: fiat.P256Element}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ? init.x.clone() : new fiat.P256Element(undefined, true),
			y: init?.y ? init.y.clone() : new fiat.P256Element(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): p256AffinePoint {
		return new p256AffinePoint(this, true)
	}

	public __goscriptAssign(source: p256AffinePoint): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.x, values.x)
		$.assignStruct(target.y, values.y)
	}

	public Negate(cond: number): p256AffinePoint | $.VarRef<p256AffinePoint> | null {
		const p: p256AffinePoint | $.VarRef<p256AffinePoint> | null = this;
		const p$: p256AffinePoint = p == null ? $.pointerTarget<p256AffinePoint>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<p256AffinePoint>(p)
		let negY: fiat.P256Element | $.VarRef<fiat.P256Element> | null = new fiat.P256Element()
		void (negY !== null && (negY as any).__isVarRef !== true && (negY as any).__goValue === undefined ? ((negY as any) as fiat.P256Element).Sub(negY, $.fieldRef((p$ as p256AffinePoint)._fields, "y")) : fiat.P256Element.prototype.Sub.call(negY, negY, $.fieldRef((p$ as p256AffinePoint)._fields, "y")))
		void (p$ as p256AffinePoint).y.Select(negY, $.fieldRef((p$ as p256AffinePoint)._fields, "y"), cond)
		return p
	}

	public Projective(): P256Point | $.VarRef<P256Point> | null {
		const p: p256AffinePoint | $.VarRef<p256AffinePoint> | null = this;
		const p$: p256AffinePoint = p == null ? $.pointerTarget<p256AffinePoint>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<p256AffinePoint>(p)
		let pp: P256Point | $.VarRef<P256Point> | null = new P256Point({x: (p$ as p256AffinePoint).x, y: (p$ as p256AffinePoint).y})
		$.pointerValue<P256Point>(pp).z.One()
		return pp
	}

	static __typeInfo = $.registerStructType(
		"nistec.p256AffinePoint",
		() => new p256AffinePoint(),
		() => [$.methodSignature("Negate", [["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("nistec.p256AffinePoint")], true), $.methodSignature("Projective", [], [/* @__PURE__ */ $.pointerType("nistec.P256Point")], true)],
		p256AffinePoint,
		() => [/* @__PURE__ */ $.structField("x", "fiat.P256Element", [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec" }), /* @__PURE__ */ $.structField("y", "fiat.P256Element", [1], 32, false, { pkgPath: "crypto/internal/fips140/nistec" })]
	)
}

export const p256ElementLength: number = 32

export const p256UncompressedLength: number = 65

export const p256CompressedLength: number = 33

export function NewP256Point(): P256Point | $.VarRef<P256Point> | null {
	let p: P256Point | $.VarRef<P256Point> | null = new P256Point()
	$.pointerValue<P256Point>(p).y.One()
	return p
}

export let _p256B: fiat.P256Element | $.VarRef<fiat.P256Element> | null = null! as fiat.P256Element | $.VarRef<fiat.P256Element> | null

export function __goscript_set__p256B(__goscriptValue: fiat.P256Element | $.VarRef<fiat.P256Element> | null): void {
	_p256B = __goscriptValue
}

export let _p256BOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set__p256BOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(_p256BOnce.value, __goscriptValue)
}

export async function p256B(): globalThis.Promise<fiat.P256Element | $.VarRef<fiat.P256Element> | null> {
	await _p256BOnce.value.Do($.functionValue((): void => {
		let __goscriptTuple9: any = fiat.P256Element.prototype.SetBytes.call(new fiat.P256Element(), new Uint8Array([90, 198, 53, 216, 170, 58, 147, 231, 179, 235, 189, 85, 118, 152, 134, 188, 101, 29, 6, 176, 204, 83, 176, 246, 59, 206, 60, 62, 39, 210, 96, 75]) as $.Slice<number>)
		_p256B = __goscriptTuple9[0]
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return _p256B
}

export async function p256Polynomial(y2: fiat.P256Element | $.VarRef<fiat.P256Element> | null, x: fiat.P256Element | $.VarRef<fiat.P256Element> | null): globalThis.Promise<fiat.P256Element | $.VarRef<fiat.P256Element> | null> {
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P256Element).Square(x) : fiat.P256Element.prototype.Square.call(y2, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P256Element).Mul(y2, x) : fiat.P256Element.prototype.Mul.call(y2, y2, x))

	let threeX: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Add.call(new fiat.P256Element(), x, x)
	void (threeX !== null && (threeX as any).__isVarRef !== true && (threeX as any).__goValue === undefined ? ((threeX as any) as fiat.P256Element).Add(threeX, x) : fiat.P256Element.prototype.Add.call(threeX, threeX, x))
	void (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P256Element).Sub(y2, threeX) : fiat.P256Element.prototype.Sub.call(y2, y2, threeX))

	return (y2 !== null && (y2 as any).__isVarRef !== true && (y2 as any).__goValue === undefined ? ((y2 as any) as fiat.P256Element).Add(y2, await p256B()) : fiat.P256Element.prototype.Add.call(y2, y2, await p256B()))
}

export async function p256CheckOnCurve(x: fiat.P256Element | $.VarRef<fiat.P256Element> | null, y: fiat.P256Element | $.VarRef<fiat.P256Element> | null): globalThis.Promise<$.GoError> {
	// y² = x³ - 3x + b
	let rhs: fiat.P256Element | $.VarRef<fiat.P256Element> | null = await p256Polynomial(new fiat.P256Element(), x)
	let lhs: fiat.P256Element | $.VarRef<fiat.P256Element> | null = fiat.P256Element.prototype.Square.call(new fiat.P256Element(), y)
	if ((rhs !== null && (rhs as any).__isVarRef !== true && (rhs as any).__goValue === undefined ? ((rhs as any) as fiat.P256Element).Equal(lhs) : fiat.P256Element.prototype.Equal.call(rhs, lhs)) != 1) {
		return errors.New("P256 point not on curve")
	}
	return null
}

export function p256OrdElement_SetBytes(s: $.VarRef<p256OrdElement> | null, x: $.Slice<number>): [$.VarRef<p256OrdElement> | null, $.GoError] {
	if ($.sliceLen(x) != 32) {
		return [null, errors.New("invalid scalar length")]
	}

	$.pointerValue<bigint[]>(s)[0] = byteorder.BEUint64($.goSlice(x, 24, undefined))
	$.pointerValue<bigint[]>(s)[1] = byteorder.BEUint64($.goSlice(x, 16, undefined))
	$.pointerValue<bigint[]>(s)[2] = byteorder.BEUint64($.goSlice(x, 8, undefined))
	$.pointerValue<bigint[]>(s)[3] = byteorder.BEUint64($.goSlice(x, undefined, undefined))

	// Ensure s is in the range [0, ord(G)-1]. Since 2 * ord(G) > 2²⁵⁶, we can
	// just conditionally subtract ord(G), keeping the result if it doesn't
	// underflow.
	let [t0, b] = bits.Sub64($.arrayIndex($.pointerValue<bigint[]>(s), 0), 17562291160714782033n, 0n)
	let __goscriptTuple10: any = bits.Sub64($.arrayIndex($.pointerValue<bigint[]>(s), 1), 13611842547513532036n, b)
	let t1 = __goscriptTuple10[0]
	b = __goscriptTuple10[1]
	let __goscriptTuple11: any = bits.Sub64($.arrayIndex($.pointerValue<bigint[]>(s), 2), 18446744073709551615n, b)
	let t2 = __goscriptTuple11[0]
	b = __goscriptTuple11[1]
	let __goscriptTuple12: any = bits.Sub64($.arrayIndex($.pointerValue<bigint[]>(s), 3), 18446744069414584320n, b)
	let t3 = __goscriptTuple12[0]
	b = __goscriptTuple12[1]
	let tMask = $.uint64Sub(b, 1n)
	$.pointerValue<bigint[]>(s)[0] = $.uint64Xor($.pointerValue<bigint[]>(s)[0], $.uint64And(($.uint64Xor(t0, $.arrayIndex($.pointerValue<bigint[]>(s), 0))), tMask))
	$.pointerValue<bigint[]>(s)[1] = $.uint64Xor($.pointerValue<bigint[]>(s)[1], $.uint64And(($.uint64Xor(t1, $.arrayIndex($.pointerValue<bigint[]>(s), 1))), tMask))
	$.pointerValue<bigint[]>(s)[2] = $.uint64Xor($.pointerValue<bigint[]>(s)[2], $.uint64And(($.uint64Xor(t2, $.arrayIndex($.pointerValue<bigint[]>(s), 2))), tMask))
	$.pointerValue<bigint[]>(s)[3] = $.uint64Xor($.pointerValue<bigint[]>(s)[3], $.uint64And(($.uint64Xor(t3, $.arrayIndex($.pointerValue<bigint[]>(s), 3))), tMask))

	return [s, null]
}

export function p256OrdElement_Bytes(s: $.VarRef<p256OrdElement> | null): $.Slice<number> {
	let out: Uint8Array = $.arrayValue(new Uint8Array(32))
	byteorder.BEPutUint64($.goSlice(out, 24, undefined), $.arrayIndex($.pointerValue<bigint[]>(s), 0))
	byteorder.BEPutUint64($.goSlice(out, 16, undefined), $.arrayIndex($.pointerValue<bigint[]>(s), 1))
	byteorder.BEPutUint64($.goSlice(out, 8, undefined), $.arrayIndex($.pointerValue<bigint[]>(s), 2))
	byteorder.BEPutUint64($.goSlice(out, undefined, undefined), $.arrayIndex($.pointerValue<bigint[]>(s), 3))
	return $.goSlice(out, undefined, undefined)
}

export function p256OrdElement_Rsh(s: $.VarRef<p256OrdElement> | null, n: number): bigint {
	let i = globalThis.Math.trunc(n / 64)
	n = n % 64
	let res = $.uint64Shr($.arrayIndex($.pointerValue<bigint[]>(s), i), n)
	// Shift in the more significant limb, if present.
	let __goscriptShadow3 = i
	{
		let __goscriptShadow4 = __goscriptShadow3 + 1
		if (__goscriptShadow4 < 4) {
			res = $.uint64Or(res, $.uint64Shl($.arrayIndex($.pointerValue<bigint[]>(s), __goscriptShadow4), (64 - n)))
		}
	}
	return res
}

export function p256Table_Select(table: $.VarRef<p256Table> | null, p: P256Point | $.VarRef<P256Point> | null, n: number): void {
	if (n > 16) {
		$.panic("nistec: internal error: p256Table called with out-of-bounds value")
	}
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Set(NewP256Point()) : P256Point.prototype.Set.call(p, NewP256Point()))
	for (let i = 1; i <= 16; i = ((i + 1) & 0xff)) {
		let cond = constanttime.ByteEq(i, n)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as P256Point).Select($.indexRef($.pointerValue<P256Point[]>(table), ((i - 1) & 0xff)), p, cond) : P256Point.prototype.Select.call(p, $.indexRef($.pointerValue<P256Point[]>(table), ((i - 1) & 0xff)), p, cond))
	}
}

export async function p256Table_Compute(table: $.VarRef<p256Table> | null, q: P256Point | $.VarRef<P256Point> | null): globalThis.Promise<$.VarRef<p256Table> | null> {
	$.arrayIndex($.pointerValue<P256Point[]>(table), 0).Set(q)
	for (let i = 1; i < 16; i = i + (2)) {
		await $.arrayIndex($.pointerValue<P256Point[]>(table), i).Double($.indexRef($.pointerValue<P256Point[]>(table), globalThis.Math.trunc(i / 2)))
		if ((i + 1) < 16) {
			await $.arrayIndex($.pointerValue<P256Point[]>(table), i + 1).Add($.indexRef($.pointerValue<P256Point[]>(table), i), q)
		}
	}
	return table
}

export function boothW5(_in: bigint): [number, number] {
	let s = $.uint64Xor(($.uint64Sub(($.uint64Shr(_in, 5n)), 1n)), -1n)
	let d = $.uint64Sub(($.uint64Sub(64n, _in)), 1n)
	d = $.uint64Or(($.uint64And(d, s)), ($.uint64And(_in, ($.uint64Xor(s, -1n)))))
	d = $.uint64Add(($.uint64Shr(d, 1n)), ($.uint64And(d, 1n)))
	return [$.uint(d, 8), $.int($.uint64And(s, 1n))]
}

export function p256AffineTable_Select(table: $.VarRef<p256AffineTable> | null, p: p256AffinePoint | $.VarRef<p256AffinePoint> | null, n: number): void {
	const p$: p256AffinePoint = p == null ? $.pointerTarget<p256AffinePoint>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<p256AffinePoint>(p)
	if (n > 32) {
		$.panic("nistec: internal error: p256AffineTable.Select called with out-of-bounds value")
	}
	for (let i = 1; i <= 32; i = ((i + 1) & 0xff)) {
		let cond = constanttime.ByteEq(i, n)
		void (p$ as p256AffinePoint).x.Select($.fieldRef($.arrayIndex($.pointerValue<p256AffinePoint[]>(table), ((i - 1) & 0xff))._fields, "x"), $.fieldRef((p$ as p256AffinePoint)._fields, "x"), cond)
		void (p$ as p256AffinePoint).y.Select($.fieldRef($.arrayIndex($.pointerValue<p256AffinePoint[]>(table), ((i - 1) & 0xff))._fields, "y"), $.fieldRef((p$ as p256AffinePoint)._fields, "y"), cond)
	}
}

export let p256GeneratorTables: $.VarRef<p256AffineTable[]> | null = null! as $.VarRef<p256AffineTable[]> | null

export function __goscript_set_p256GeneratorTables(__goscriptValue: $.VarRef<p256AffineTable[]> | null): void {
	p256GeneratorTables = __goscriptValue
}

function __goscriptInit0(): void {
	let p256GeneratorTablesPtr = (__goscript_p256_table.__goscript_get_p256PrecomputedEmbed() as any)
	if (cpu.BigEndian) {
		let newTable: $.VarRef<bigint[]> = $.varRef($.arrayValue(globalThis.Array.from({ length: 11008 }, () => 0n)))
		for (let __goscriptRangeTarget0 = $.pointerValue<Uint8Array[]>(p256GeneratorTablesPtr), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let x = $.cloneArrayValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as Uint8Array), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
			newTable.value[i] = byteorder.LEUint64($.goSlice(x, undefined, undefined))
		}
		p256GeneratorTablesPtr = (newTable as any)
	}
	p256GeneratorTables = p256GeneratorTablesPtr
}

export function boothW6(_in: bigint): [number, number] {
	let s = $.uint64Xor(($.uint64Sub(($.uint64Shr(_in, 6n)), 1n)), -1n)
	let d = $.uint64Sub(($.uint64Sub(128n, _in)), 1n)
	d = $.uint64Or(($.uint64And(d, s)), ($.uint64And(_in, ($.uint64Xor(s, -1n)))))
	d = $.uint64Add(($.uint64Shr(d, 1n)), ($.uint64And(d, 1n)))
	return [$.uint(d, 8), $.int($.uint64And(s, 1n))]
}

export function p256Sqrt(e: fiat.P256Element | $.VarRef<fiat.P256Element> | null, x: fiat.P256Element | $.VarRef<fiat.P256Element> | null): boolean {
	let isSquare: boolean = false
	let t0: fiat.P256Element | $.VarRef<fiat.P256Element> | null = new fiat.P256Element()
	let t1: fiat.P256Element | $.VarRef<fiat.P256Element> | null = new fiat.P256Element()

	// Since p = 3 mod 4, exponentiation by (p + 1) / 4 yields a square root candidate.
	//
	// The sequence of 7 multiplications and 253 squarings is derived from the
	// following addition chain generated with github.com/mmcloughlin/addchain v0.4.0.
	//
	//	_10       = 2*1
	//	_11       = 1 + _10
	//	_1100     = _11 << 2
	//	_1111     = _11 + _1100
	//	_11110000 = _1111 << 4
	//	_11111111 = _1111 + _11110000
	//	x16       = _11111111 << 8 + _11111111
	//	x32       = x16 << 16 + x16
	//	return      ((x32 << 32 + 1) << 96 + 1) << 94
	//
	p256Square(t0, x, 1)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(x, t0) : fiat.P256Element.prototype.Mul.call(t0, x, t0))
	p256Square(t1, t0, 2)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(t0, t1) : fiat.P256Element.prototype.Mul.call(t0, t0, t1))
	p256Square(t1, t0, 4)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(t0, t1) : fiat.P256Element.prototype.Mul.call(t0, t0, t1))
	p256Square(t1, t0, 8)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(t0, t1) : fiat.P256Element.prototype.Mul.call(t0, t0, t1))
	p256Square(t1, t0, 16)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(t0, t1) : fiat.P256Element.prototype.Mul.call(t0, t0, t1))
	p256Square(t0, t0, 32)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(x, t0) : fiat.P256Element.prototype.Mul.call(t0, x, t0))
	p256Square(t0, t0, 96)
	void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as fiat.P256Element).Mul(x, t0) : fiat.P256Element.prototype.Mul.call(t0, x, t0))
	p256Square(t0, t0, 94)

	// Check if the candidate t0 is indeed a square root of x.
	void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Square(t0) : fiat.P256Element.prototype.Square.call(t1, t0))
	if ((t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as fiat.P256Element).Equal(x) : fiat.P256Element.prototype.Equal.call(t1, x)) != 1) {
		return false
	}
	void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P256Element).Set(t0) : fiat.P256Element.prototype.Set.call(e, t0))
	return true
}

export function p256Square(e: fiat.P256Element | $.VarRef<fiat.P256Element> | null, x: fiat.P256Element | $.VarRef<fiat.P256Element> | null, n: number): void {
	void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P256Element).Square(x) : fiat.P256Element.prototype.Square.call(e, x))
	for (let i = 1; i < n; i++) {
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as fiat.P256Element).Square(e) : fiat.P256Element.prototype.Square.call(e, e))
	}
}

export { __goscriptInit0 }
