// Generated file based on p384.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_p384_fiat64 from "./p384_fiat64.gs.ts"

import * as __goscript_p384_invert from "./p384_invert.gs.ts"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "./p384_fiat64.gs.ts"
import "./p384_invert.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/nistec/fiat", ["fiat.P384Element"])

export type p384UntypedFieldElement = bigint[]

export class P384Element {
	// Values are represented internally always in the Montgomery domain, and
	// converted in Bytes and SetBytes.
	public get x(): __goscript_p384_fiat64.p384MontgomeryDomainFieldElement {
		return this._fields.x
	}

	public set x(value: __goscript_p384_fiat64.p384MontgomeryDomainFieldElement) {
		this._fields.x = value
	}

	public _fields: {
		x: __goscript_p384_fiat64.p384MontgomeryDomainFieldElement
	}

	constructor(init?: Partial<{x?: __goscript_p384_fiat64.p384MontgomeryDomainFieldElement}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, "fiat.p384MontgomeryDomainFieldElement") : $.arrayValue(globalThis.Array.from({ length: 6 }, () => 0n))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P384Element {
		return new P384Element(this, true)
	}

	public __goscriptAssign(source: P384Element): void {
		const target = this._fields
		const values = source._fields
		target.x = $.assignFieldValue(target.x, values.x, "fiat.p384MontgomeryDomainFieldElement")
	}

	public Add(t1: P384Element | $.VarRef<P384Element> | null, t2: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384Add($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t2)._fields, "x"))
		return e
	}

	public Bytes(): $.Slice<number> {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(48)))
		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P384Element).bytes(out) : P384Element.prototype.bytes.call(e, out))
	}

	public Equal(t: P384Element | $.VarRef<P384Element> | null): number {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P384Element).Bytes() : P384Element.prototype.Bytes.call(e))
		let tBytes: $.Slice<number> = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as P384Element).Bytes() : P384Element.prototype.Bytes.call(t))
		return subtle.ConstantTimeCompare(eBytes, tBytes)
	}

	public Invert(x: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;

		// P384Element is an integer modulo 2^384 - 2^128 - 2^96 + 2^32 - 1.
		//
		// The zero value is a valid zero element.

		// Values are represented internally always in the Montgomery domain, and
		// converted in Bytes and SetBytes.

		// One sets e = 1, and returns e.

		// Equal returns 1 if e == t, and zero otherwise.

		let z: P384Element | $.VarRef<P384Element> | null = P384Element.prototype.Set.call(new P384Element(), e)
		let t0: P384Element | $.VarRef<P384Element> | null = new P384Element()
		let t1: P384Element | $.VarRef<P384Element> | null = new P384Element()
		let t2: P384Element | $.VarRef<P384Element> | null = new P384Element()
		let t3: P384Element | $.VarRef<P384Element> | null = new P384Element()

		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Square(x) : P384Element.prototype.Square.call(z, x))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Mul(x, z) : P384Element.prototype.Mul.call(z, x, z))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Square(z) : P384Element.prototype.Square.call(z, z))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P384Element).Mul(x, z) : P384Element.prototype.Mul.call(t1, x, z))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Square(t1) : P384Element.prototype.Square.call(z, t1))
		for (let s = 1; s < 3; s++) {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Square(z) : P384Element.prototype.Square.call(z, z))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Mul(t1, z) : P384Element.prototype.Mul.call(z, t1, z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(z) : P384Element.prototype.Square.call(t0, z))
		for (let s = 1; s < 6; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(t0) : P384Element.prototype.Square.call(t0, t0))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Mul(z, t0) : P384Element.prototype.Mul.call(t0, z, t0))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Square(t0) : P384Element.prototype.Square.call(t2, t0))
		for (let s = 1; s < 12; s++) {
			void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Square(t2) : P384Element.prototype.Square.call(t2, t2))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Mul(t0, t2) : P384Element.prototype.Mul.call(t0, t0, t2))
		for (let s = 0; s < 6; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(t0) : P384Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Mul(z, t0) : P384Element.prototype.Mul.call(z, z, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(z) : P384Element.prototype.Square.call(t0, z))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Mul(x, t0) : P384Element.prototype.Mul.call(t2, x, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(t2) : P384Element.prototype.Square.call(t0, t2))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Mul(x, t0) : P384Element.prototype.Mul.call(t0, x, t0))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t0) : P384Element.prototype.Square.call(t3, t0))
		for (let s = 1; s < 31; s++) {
			void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t3) : P384Element.prototype.Square.call(t3, t3))
		}
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Mul(t2, t3) : P384Element.prototype.Mul.call(t2, t2, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t2) : P384Element.prototype.Square.call(t3, t2))
		for (let s = 1; s < 63; s++) {
			void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t3) : P384Element.prototype.Square.call(t3, t3))
		}
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Mul(t2, t3) : P384Element.prototype.Mul.call(t2, t2, t3))
		void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t2) : P384Element.prototype.Square.call(t3, t2))
		for (let s = 1; s < 126; s++) {
			void (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? ((t3 as any) as P384Element).Square(t3) : P384Element.prototype.Square.call(t3, t3))
		}
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Mul(t2, t3) : P384Element.prototype.Mul.call(t2, t2, t3))
		for (let s = 0; s < 3; s++) {
			void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P384Element).Square(t2) : P384Element.prototype.Square.call(t2, t2))
		}
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P384Element).Mul(t1, t2) : P384Element.prototype.Mul.call(t1, t1, t2))
		for (let s = 0; s < 33; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P384Element).Square(t1) : P384Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Mul(t0, t1) : P384Element.prototype.Mul.call(t0, t0, t1))
		for (let s = 0; s < 94; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P384Element).Square(t0) : P384Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Mul(z, t0) : P384Element.prototype.Mul.call(z, z, t0))
		for (let s = 0; s < 2; s++) {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Square(z) : P384Element.prototype.Square.call(z, z))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P384Element).Mul(x, z) : P384Element.prototype.Mul.call(z, x, z))
		// Sub sets e = t1 - t2, and returns e.
		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P384Element).Set(z) : P384Element.prototype.Set.call(e, z))
	}

	public IsZero(): number {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		let zero: $.Slice<number> = $.makeSlice<number>(48, undefined, "byte")
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P384Element).Bytes() : P384Element.prototype.Bytes.call(e))
		return subtle.ConstantTimeCompare(eBytes, zero)
	}

	public Mul(t1: P384Element | $.VarRef<P384Element> | null, t2: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384Mul($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t2)._fields, "x"))
		return e
	}

	public One(): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384SetOne($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"))
		return e
	}

	public Select(a: P384Element | $.VarRef<P384Element> | null, b: P384Element | $.VarRef<P384Element> | null, cond: number): P384Element | $.VarRef<P384Element> | null {
		const v: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384Selectznz($.unsafePointerCast<$.VarRef<p384UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p384_fiat64.p384MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P384Element>(v)._fields, "x"), 6, 48, 8)), $.uint64(cond), $.unsafePointerCast<$.VarRef<p384UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p384_fiat64.p384MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P384Element>(b)._fields, "x"), 6, 48, 8)), $.unsafePointerCast<$.VarRef<p384UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p384_fiat64.p384MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P384Element>(a)._fields, "x"), 6, 48, 8)))
		return v
	}

	public Set(t: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		let e: P384Element | $.VarRef<P384Element> | null = this;
		$.pointerValue<P384Element>(e).x = $.cloneArrayValue($.pointerValue<P384Element>(t).x, "fiat.p384MontgomeryDomainFieldElement")
		return e
	}

	public SetBytes(v: $.Slice<number>): [P384Element | $.VarRef<P384Element> | null, $.GoError] {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		if ($.sliceLen(v) != 48) {
			return [null, errors.New("invalid P384Element encoding")]
		}

		// Check for non-canonical encodings (p + k, 2p + k, etc.) by comparing to
		// the encoding of -1 mod p, so p - 1, the highest canonical encoding.
		let minusOneEncoding: $.Slice<number> = P384Element.prototype.Bytes.call(P384Element.prototype.Sub.call(new P384Element(), new P384Element(), P384Element.prototype.One.call(new P384Element())))
		if (subtle.ConstantTimeLessOrEqBytes(v, minusOneEncoding) == 0) {
			return [null, errors.New("invalid P384Element encoding")]
		}

		let _in: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(48)))
		$.copy($.goSlice(_in.value, undefined, undefined), v)
		p384InvertEndianness($.goSlice(_in.value, undefined, undefined))
		let tmp: $.VarRef<__goscript_p384_fiat64.p384NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 6 }, () => 0n)))
		__goscript_p384_fiat64.p384FromBytes($.unsafePointerCast<$.VarRef<p384UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p384_fiat64.p384NonMontgomeryDomainFieldElement>(tmp, 6, 48, 8)), _in)
		__goscript_p384_fiat64.p384ToMontgomery($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"), tmp)
		return [e, null]
	}

	public Square(t: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384Square($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t)._fields, "x"))
		return e
	}

	public Sub(t1: P384Element | $.VarRef<P384Element> | null, t2: P384Element | $.VarRef<P384Element> | null): P384Element | $.VarRef<P384Element> | null {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		__goscript_p384_fiat64.p384Sub($.fieldRef($.pointerValue<P384Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P384Element>(t2)._fields, "x"))
		return e
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const e: P384Element | $.VarRef<P384Element> | null = this;
		let tmp: $.VarRef<__goscript_p384_fiat64.p384NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 6 }, () => 0n)))
		__goscript_p384_fiat64.p384FromMontgomery(tmp, $.fieldRef($.pointerValue<P384Element>(e)._fields, "x"))
		__goscript_p384_fiat64.p384ToBytes(out, $.unsafePointerCast<$.VarRef<p384UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p384_fiat64.p384NonMontgomeryDomainFieldElement>(tmp, 6, 48, 8)))
		p384InvertEndianness($.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined))
		return $.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined)
	}

	static __typeInfo = $.registerStructType(
		"fiat.P384Element",
		() => new P384Element(),
		() => [$.methodSignature("Add", [["t1", /* @__PURE__ */ $.pointerType("fiat.P384Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["t", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Invert", [["x", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Mul", [["t1", /* @__PURE__ */ $.pointerType("fiat.P384Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("One", [], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("Select", [["a", /* @__PURE__ */ $.pointerType("fiat.P384Element")], ["b", /* @__PURE__ */ $.pointerType("fiat.P384Element")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("Set", [["t", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("SetBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("fiat.P384Element"), "error"], true), $.methodSignature("Square", [["t", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("Sub", [["t1", /* @__PURE__ */ $.pointerType("fiat.P384Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P384Element")]], [/* @__PURE__ */ $.pointerType("fiat.P384Element")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 48))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		P384Element,
		() => [/* @__PURE__ */ $.structField("x", "fiat.p384MontgomeryDomainFieldElement", [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec/fiat" })]
	)
}

export const p384ElementLen: number = 48

export function p384InvertEndianness(v: $.Slice<number>): void {
	for (let __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < (globalThis.Math.trunc(__goscriptSliceWindow0.length / 2)); i++) {
		let __goscriptAssign0_0: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] as number)
		let __goscriptAssign0_1: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptAssign0_0;
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] = __goscriptAssign0_1
	}
}
