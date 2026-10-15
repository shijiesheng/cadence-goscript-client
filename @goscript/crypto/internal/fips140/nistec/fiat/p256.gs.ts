// Generated file based on p256.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_p256_fiat64 from "./p256_fiat64.gs.ts"

import * as __goscript_p256_invert from "./p256_invert.gs.ts"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "./p256_fiat64.gs.ts"
import "./p256_invert.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/nistec/fiat", ["fiat.P256Element"])

export type p256UntypedFieldElement = bigint[]

export class P256Element {
	// Values are represented internally always in the Montgomery domain, and
	// converted in Bytes and SetBytes.
	public get x(): __goscript_p256_fiat64.p256MontgomeryDomainFieldElement {
		return this._fields.x
	}

	public set x(value: __goscript_p256_fiat64.p256MontgomeryDomainFieldElement) {
		this._fields.x = value
	}

	public _fields: {
		x: __goscript_p256_fiat64.p256MontgomeryDomainFieldElement
	}

	constructor(init?: Partial<{x?: __goscript_p256_fiat64.p256MontgomeryDomainFieldElement}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, "fiat.p256MontgomeryDomainFieldElement") : $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): P256Element {
		return new P256Element(this, true)
	}

	public __goscriptAssign(source: P256Element): void {
		const target = this._fields
		const values = source._fields
		target.x = $.assignFieldValue(target.x, values.x, "fiat.p256MontgomeryDomainFieldElement")
	}

	public Add(t1: P256Element | $.VarRef<P256Element> | null, t2: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256Add($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t2)._fields, "x"))
		return e
	}

	public Bytes(): $.Slice<number> {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		// This function is outlined to make the allocations inline in the caller
		// rather than happen on the heap.
		let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P256Element).bytes(out) : P256Element.prototype.bytes.call(e, out))
	}

	public Equal(t: P256Element | $.VarRef<P256Element> | null): number {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P256Element).Bytes() : P256Element.prototype.Bytes.call(e))
		let tBytes: $.Slice<number> = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as P256Element).Bytes() : P256Element.prototype.Bytes.call(t))
		return subtle.ConstantTimeCompare(eBytes, tBytes)
	}

	public Invert(x: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;

		// P256Element is an integer modulo 2^256 - 2^224 + 2^192 + 2^96 - 1.
		//
		// The zero value is a valid zero element.

		// Values are represented internally always in the Montgomery domain, and
		// converted in Bytes and SetBytes.

		// One sets e = 1, and returns e.

		let z: P256Element | $.VarRef<P256Element> | null = P256Element.prototype.Set.call(new P256Element(), e)
		let t0: P256Element | $.VarRef<P256Element> | null = new P256Element()
		let t1: P256Element | $.VarRef<P256Element> | null = new P256Element()

		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Square(x) : P256Element.prototype.Square.call(z, x))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(x, z) : P256Element.prototype.Mul.call(z, x, z))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Square(z) : P256Element.prototype.Square.call(z, z))
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(x, z) : P256Element.prototype.Mul.call(z, x, z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(z) : P256Element.prototype.Square.call(t0, z))
		for (let s = 1; s < 3; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(z, t0) : P256Element.prototype.Mul.call(t0, z, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t1, t0))
		for (let s = 1; s < 6; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P256Element).Square(t1) : P256Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(t0, t1) : P256Element.prototype.Mul.call(t0, t0, t1))
		for (let s = 0; s < 3; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(z, t0) : P256Element.prototype.Mul.call(z, z, t0))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(z) : P256Element.prototype.Square.call(t0, z))
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(x, t0) : P256Element.prototype.Mul.call(t0, x, t0))
		void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t1, t0))
		for (let s = 1; s < 16; s++) {
			void (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? ((t1 as any) as P256Element).Square(t1) : P256Element.prototype.Square.call(t1, t1))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(t0, t1) : P256Element.prototype.Mul.call(t0, t0, t1))
		for (let s = 0; s < 15; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(z, t0) : P256Element.prototype.Mul.call(z, z, t0))
		for (let s = 0; s < 17; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(x, t0) : P256Element.prototype.Mul.call(t0, x, t0))
		for (let s = 0; s < 143; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Mul(z, t0) : P256Element.prototype.Mul.call(t0, z, t0))
		for (let s = 0; s < 47; s++) {
			void (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as P256Element).Square(t0) : P256Element.prototype.Square.call(t0, t0))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(z, t0) : P256Element.prototype.Mul.call(z, z, t0))
		for (let s = 0; s < 2; s++) {
			void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Square(z) : P256Element.prototype.Square.call(z, z))
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as P256Element).Mul(x, z) : P256Element.prototype.Mul.call(z, x, z))

		return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P256Element).Set(z) : P256Element.prototype.Set.call(e, z))
	}

	public IsZero(): number {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		let zero: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
		let eBytes: $.Slice<number> = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as P256Element).Bytes() : P256Element.prototype.Bytes.call(e))
		return subtle.ConstantTimeCompare(eBytes, zero)
	}

	public Mul(t1: P256Element | $.VarRef<P256Element> | null, t2: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256Mul($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t2)._fields, "x"))
		return e
	}

	public One(): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256SetOne($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"))
		return e
	}

	public Select(a: P256Element | $.VarRef<P256Element> | null, b: P256Element | $.VarRef<P256Element> | null, cond: number): P256Element | $.VarRef<P256Element> | null {
		const v: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256Selectznz($.unsafePointerCast<$.VarRef<p256UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p256_fiat64.p256MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P256Element>(v)._fields, "x"), 4, 32, 8)), $.uint64(cond), $.unsafePointerCast<$.VarRef<p256UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p256_fiat64.p256MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P256Element>(b)._fields, "x"), 4, 32, 8)), $.unsafePointerCast<$.VarRef<p256UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p256_fiat64.p256MontgomeryDomainFieldElement>($.fieldRef($.pointerValue<P256Element>(a)._fields, "x"), 4, 32, 8)))
		return v
	}

	public Set(t: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		let e: P256Element | $.VarRef<P256Element> | null = this;
		$.pointerValue<P256Element>(e).x = $.cloneArrayValue($.pointerValue<P256Element>(t).x, "fiat.p256MontgomeryDomainFieldElement")
		return e
	}

	public SetBytes(v: $.Slice<number>): [P256Element | $.VarRef<P256Element> | null, $.GoError] {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		if ($.sliceLen(v) != 32) {
			return [null, errors.New("invalid P256Element encoding")]
		}

		// Check for non-canonical encodings (p + k, 2p + k, etc.) by comparing to
		// the encoding of -1 mod p, so p - 1, the highest canonical encoding.
		let minusOneEncoding: $.Slice<number> = P256Element.prototype.Bytes.call(P256Element.prototype.Sub.call(new P256Element(), new P256Element(), P256Element.prototype.One.call(new P256Element())))
		if (subtle.ConstantTimeLessOrEqBytes(v, minusOneEncoding) == 0) {
			return [null, errors.New("invalid P256Element encoding")]
		}

		let _in: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		$.copy($.goSlice(_in.value, undefined, undefined), v)
		p256InvertEndianness($.goSlice(_in.value, undefined, undefined))
		let tmp: $.VarRef<__goscript_p256_fiat64.p256NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n)))
		__goscript_p256_fiat64.p256FromBytes($.unsafePointerCast<$.VarRef<p256UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p256_fiat64.p256NonMontgomeryDomainFieldElement>(tmp, 4, 32, 8)), _in)
		__goscript_p256_fiat64.p256ToMontgomery($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"), tmp)
		return [e, null]
	}

	public Square(t: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256Square($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t)._fields, "x"))
		return e
	}

	public Sub(t1: P256Element | $.VarRef<P256Element> | null, t2: P256Element | $.VarRef<P256Element> | null): P256Element | $.VarRef<P256Element> | null {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		__goscript_p256_fiat64.p256Sub($.fieldRef($.pointerValue<P256Element>(e)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t1)._fields, "x"), $.fieldRef($.pointerValue<P256Element>(t2)._fields, "x"))
		return e
	}

	public bytes(out: $.VarRef<Uint8Array> | null): $.Slice<number> {
		const e: P256Element | $.VarRef<P256Element> | null = this;
		let tmp: $.VarRef<__goscript_p256_fiat64.p256NonMontgomeryDomainFieldElement> = $.varRef($.arrayValue(globalThis.Array.from({ length: 4 }, () => 0n)))
		__goscript_p256_fiat64.p256FromMontgomery(tmp, $.fieldRef($.pointerValue<P256Element>(e)._fields, "x"))
		__goscript_p256_fiat64.p256ToBytes(out, $.unsafePointerCast<$.VarRef<p256UntypedFieldElement> | null>($.arrayPointerFromIndexRef<__goscript_p256_fiat64.p256NonMontgomeryDomainFieldElement>(tmp, 4, 32, 8)))
		p256InvertEndianness($.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined))
		return $.goSlice($.pointerValue<Uint8Array>(out), undefined, undefined)
	}

	static __typeInfo = $.registerStructType(
		"fiat.P256Element",
		() => new P256Element(),
		() => [$.methodSignature("Add", [["t1", /* @__PURE__ */ $.pointerType("fiat.P256Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["t", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Invert", [["x", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Mul", [["t1", /* @__PURE__ */ $.pointerType("fiat.P256Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("One", [], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("Select", [["a", /* @__PURE__ */ $.pointerType("fiat.P256Element")], ["b", /* @__PURE__ */ $.pointerType("fiat.P256Element")], ["cond", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("Set", [["t", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("SetBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("fiat.P256Element"), "error"], true), $.methodSignature("Square", [["t", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("Sub", [["t1", /* @__PURE__ */ $.pointerType("fiat.P256Element")], ["t2", /* @__PURE__ */ $.pointerType("fiat.P256Element")]], [/* @__PURE__ */ $.pointerType("fiat.P256Element")], true), $.methodSignature("bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		P256Element,
		() => [/* @__PURE__ */ $.structField("x", "fiat.p256MontgomeryDomainFieldElement", [0], 0, false, { pkgPath: "crypto/internal/fips140/nistec/fiat" })]
	)
}

export const p256ElementLen: number = 32

export function p256InvertEndianness(v: $.Slice<number>): void {
	for (let __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < (globalThis.Math.trunc(__goscriptSliceWindow0.length / 2)); i++) {
		let __goscriptAssign0_0: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] as number)
		let __goscriptAssign0_1: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptAssign0_0;
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] = __goscriptAssign0_1
	}
}
