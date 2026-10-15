// Generated file based on p224.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_p224_fiat64 from "./p224_fiat64.gs.ts"

import * as __goscript_p224_invert from "./p224_invert.gs.ts"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "./p224_fiat64.gs.ts"
import "./p224_invert.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/nistec/fiat", ["fiat.P224Element"])

export type p224UntypedFieldElement = bigint[]

export class P224Element {
	// Values are represented internally always in the Montgomery domain, and
	// converted in Bytes and SetBytes.
	public get x(): __goscript_p224_fiat64.p224MontgomeryDomainFieldElement {
		return this._fields.x
	}

	public set x(value: __goscript_p224_fiat64.p224MontgomeryDomainFieldElement) {
		this._fields.x = value
	}

	public _fields: {
		x: __goscript_p224_fiat64.p224MontgomeryDomainFieldElement
	}

	constructor(init?: Partial<{x?: __goscript_p224_fiat64.p224MontgomeryDomainFieldElement}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, "fiat.p224MontgomeryDomainFieldElement") : $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P224Element {
		return new P224Element(this, true)
	}

	public __goscriptAssign(source: P224Element): void {
		const target = this._fields
		const values = source._fields
		target.x = $.assignFieldValue(target.x, values.x, "fiat.p224MontgomeryDomainFieldElement")
	}

	public Add(t1: P224Element | $.VarRef<P224Element> | null, t2: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224Add($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t2)._fields, "x"))
		return e
	}

	public Bytes(): $.Slice<number> {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(28)))
		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P224Element).bytes(out) : P224Element.prototype.bytes.call(e, out))
	}

	public Equal(t: P224Element | $.VarRef<P224Element> | null): number {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P224Element).Bytes() : P224Element.prototype.Bytes.call(e))
		let tBytes: $.Slice<number> = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as P224Element).Bytes() : P224Element.prototype.Bytes.call(t))
		return subtle.ConstantTimeCompare(eBytes, tBytes)
	}

	public Invert(x: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;

		// P224Element is an integer modulo 2^224 - 2^96 + 1.
		//
		// The zero value is a valid zero element.

		// Values are represented internally always in the Montgomery domain, and
		// converted in Bytes and SetBytes.

		// One sets e = 1, and returns e.

		let z: P224Element | $.VarRef<P224Element> | null = P224Element.prototype.Set.call(new P224Element(), e)
		let t0: P224Element | $.VarRef<P224Element> | null = new P224Element()
		let t1: P224Element | $.VarRef<P224Element> | null = new P224Element()
		let t2: P224Element | $.VarRef<P224Element> | null = new P224Element()

		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Square(x) : P224Element.prototype.Square.call(z, x))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P224Element).Mul(x, z) : P224Element.prototype.Mul.call(t0, x, z))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Square(t0) : P224Element.prototype.Square.call(z, t0))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Mul(x, z) : P224Element.prototype.Mul.call(z, x, z))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(z) : P224Element.prototype.Square.call(t1, z))
		for (let s = 1; s < 3; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Mul(z, t1) : P224Element.prototype.Mul.call(t1, z, t1))
		void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t2, t1))
		for (let s = 1; s < 6; s++) {
			void (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? ((t2 as any) as P224Element).Square(t2) : P224Element.prototype.Square.call(t2, t2))
		}
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Mul(t1, t2) : P224Element.prototype.Mul.call(t1, t1, t2))
		for (let s = 0; s < 2; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P224Element).Mul(t0, t1) : P224Element.prototype.Mul.call(t0, t0, t1))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t0) : P224Element.prototype.Square.call(t1, t0))
		for (let s = 1; s < 3; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Mul(z, t1) : P224Element.prototype.Mul.call(z, z, t1))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(z) : P224Element.prototype.Square.call(t1, z))
		for (let s = 1; s < 14; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P224Element).Mul(t0, t1) : P224Element.prototype.Mul.call(t0, t0, t1))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t0) : P224Element.prototype.Square.call(t1, t0))
		for (let s = 1; s < 17; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Mul(z, t1) : P224Element.prototype.Mul.call(z, z, t1))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(z) : P224Element.prototype.Square.call(t1, z))
		for (let s = 1; s < 48; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Mul(z, t1) : P224Element.prototype.Mul.call(z, z, t1))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(z) : P224Element.prototype.Square.call(t1, z))
		for (let s = 1; s < 31; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P224Element).Square(t1) : P224Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P224Element).Mul(t0, t1) : P224Element.prototype.Mul.call(t0, t0, t1))
		for (let s = 0; s < 97; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P224Element).Square(t0) : P224Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P224Element).Mul(z, t0) : P224Element.prototype.Mul.call(z, z, t0))

		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P224Element).Set(z) : P224Element.prototype.Set.call(e, z))
	}

	public IsZero(): number {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		let zero: $.Slice<number> = $.makeSlice<number>(28, undefined, "byte")
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P224Element).Bytes() : P224Element.prototype.Bytes.call(e))
		return subtle.ConstantTimeCompare(eBytes, zero)
	}

	public Mul(t1: P224Element | $.VarRef<P224Element> | null, t2: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224Mul($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t2)._fields, "x"))
		return e
	}

	public One(): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224SetOne($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"))
		return e
	}

	public Select(a: P224Element | $.VarRef<P224Element> | null, b: P224Element | $.VarRef<P224Element> | null, cond: number): P224Element | $.VarRef<P224Element> | null {
		const v: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224Selectznz($.unsafePointerCast<$.VarRef<p224UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p224_fiat64.p224MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P224Element>(v)._fields, "x"), 4, 32, 8)), $.uint64(cond), $.unsafePointerCast<$.VarRef<p224UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p224_fiat64.p224MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P224Element>(b)._fields, "x"), 4, 32, 8)), $.unsafePointerCast<$.VarRef<p224UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p224_fiat64.p224MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P224Element>(a)._fields, "x"), 4, 32, 8)))
		return v
	}

	public Set(t: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		let e: P224Element | $.VarRef<P224Element> | null = this;
		$.pointerValue<P224Element>(e).x = $.cloneArrayValue($.pointerValue<P224Element>(t).x, "fiat.p224MontgomeryDomainFieldElement")
		return e
	}

	public SetBytes(v: $.Slice<number>): [P224Element | $.VarRef<P224Element> | null, $.GoError] {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		if ($.sliceLen(v) != 28) {
			return [null, errors.New("invalid P224Element encoding")]
		}

		// Check for non-canonical encodings (p + k, 2p + k, etc.) by comparing to
		// the encoding of -1 mod p, so p - 1, the highest canonical encoding.
		let minusOneEncoding: $.Slice<number> = P224Element.prototype.Bytes.call(P224Element.prototype.Sub.call(new P224Element(), new P224Element(), P224Element.prototype.One.call(new P224Element())))
		if (subtle.ConstantTimeLessOrEqBytes(v, minusOneEncoding) == 0) {
			return [null, errors.New("invalid P224Element encoding")]
		}

		let _in: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(28)))
		$.copy($.goSlice(_in.value, undefined, undefined), v)
		p224InvertEndianness($.goSlice(_in.value, undefined, undefined))
		let tmp: $.VarRef<__goscript_p224_fiat64.p224NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n)))
		__goscript_p224_fiat64.p224FromBytes($.unsafePointerCast<$.VarRef<p224UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p224_fiat64.p224NonMontgomeryDomainFieldElement>(tmp, 4, 32, 8)), _in)
		__goscript_p224_fiat64.p224ToMontgomery($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"), tmp)
		return [e, null]
	}

	public Square(t: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224Square($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t)._fields, "x"))
		return e
	}

	public Sub(t1: P224Element | $.VarRef<P224Element> | null, t2: P224Element | $.VarRef<P224Element> | null): P224Element | $.VarRef<P224Element> | null {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		__goscript_p224_fiat64.p224Sub($.fieldRef($.pointerValue<P224Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P224Element>(t2)._fields, "x"))
		return e
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const e: P224Element | $.VarRef<P224Element> | null = this;
		let tmp: $.VarRef<__goscript_p224_fiat64.p224NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n)))
		__goscript_p224_fiat64.p224FromMontgomery(tmp, $.fieldRef($.pointerValue<P224Element>(e)._fields, "x"))
		__goscript_p224_fiat64.p224ToBytes(out, $.unsafePointerCast<$.VarRef<p224UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p224_fiat64.p224NonMontgomeryDomainFieldElement>(tmp, 4, 32, 8)))
		p224InvertEndianness($.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined))
		return $.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined)
	}

	static __typeInfo = $.registerStructType(
		"fiat.P224Element",
		() => new P224Element(),
		() => [$.methodSignature("Add", [["t1", /* @__PURE__ */ $.pointerType("fiat.P224Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["t", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Invert", [["x", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Mul", [["t1", /* @__PURE__ */ $.pointerType("fiat.P224Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("One", [], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("Select", [["a", /* @__PURE__ */ $.pointerType("fiat.P224Element")], ["b", /* @__PURE__ */ $.pointerType("fiat.P224Element")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("Set", [["t", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("SetBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("fiat.P224Element"), "error"], true), $.methodSignature("Square", [["t", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("Sub", [["t1", /* @__PURE__ */ $.pointerType("fiat.P224Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P224Element")]], [/* @__PURE__ */ $.pointerType("fiat.P224Element")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		P224Element,
		() => [/* @__PURE__ */ $.structField("x", "fiat.p224MontgomeryDomainFieldElement", [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec/fiat" })]
	)
}

export const p224ElementLen: number = 28

export function p224InvertEndianness(v: $.Slice<number>): void {
	for (let __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < (globalThis.Math.trunc(__goscriptSliceWindow0.length / 2)); i++) {
		let __goscriptAssign0_0: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] as number)
		let __goscriptAssign0_1: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptAssign0_0;
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] = __goscriptAssign0_1
	}
}
