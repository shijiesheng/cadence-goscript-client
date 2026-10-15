// Generated file based on sum_generic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_poly1305 from "./poly1305.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/math/bits/index.js"
import "./poly1305.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/internal/poly1305", ["poly1305.macState", "poly1305.macGeneric", "poly1305.uint128"])

export class macState {
	// h is the main accumulator. It is to be interpreted modulo 2¹³⁰ - 5, but
	// can grow larger during and after rounds. It must, however, remain below
	// 2 * (2¹³⁰ - 5).
	public get h(): bigint[] {
		return this._fields.h
	}

	public set h(value: bigint[]) {
		this._fields.h = value
	}

	// r and s are the private key components.
	public get r(): bigint[] {
		return this._fields.r
	}

	public set r(value: bigint[]) {
		this._fields.r = value
	}

	public get s(): bigint[] {
		return this._fields.s
	}

	public set s(value: bigint[]) {
		this._fields.s = value
	}

	public _fields: {
		h: bigint[]
		r: bigint[]
		s: bigint[]
	}

	constructor(init?: Partial<{h?: bigint[], r?: bigint[], s?: bigint[]}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h !== undefined ? $.cloneArrayValue(init.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0n)),
			r: init?.r !== undefined ? $.cloneArrayValue(init.r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2)) : $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0n)),
			s: init?.s !== undefined ? $.cloneArrayValue(init.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2)) : $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0n))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): macState {
		return new macState(this, true)
	}

	public __goscriptAssign(source: macState): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 3))
		target.r = $.assignFieldValue(target.r, values.r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2))
		target.s = $.assignFieldValue(target.s, values.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2))
	}

	static __typeInfo = $.registerStructType(
		"poly1305.macState",
		() => new macState(),
		() => [],
		macState,
		() => [/* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 3), [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" }), /* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2), [1], 24, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 2), [2], 40, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" })]
	)
}

export class macGeneric {
	public get macState(): macState {
		return this._fields.macState
	}

	public set macState(value: macState) {
		this._fields.macState = value
	}

	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public _fields: {
		macState: macState
		buffer: Uint8Array
		offset: number
	}

	constructor(init?: Partial<{macState?: macState, buffer?: Uint8Array, offset?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			macState: init?.macState ? init.macState.clone() : new macState(undefined, true),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			offset: init?.offset ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): macGeneric {
		return new macGeneric(this, true)
	}

	public __goscriptAssign(source: macGeneric): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.macState, values.macState)
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		target.offset = values.offset
	}

	public Sum(out: $.VarRef<Uint8Array> | null): void {
		const h: macGeneric | $.VarRef<macGeneric> | null = this;
		const h$: macGeneric = h == null ? $.pointerTarget<macGeneric>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<macGeneric>(h)
		let state = $.varRef(((h$ as macGeneric).macState).clone())
		if ((h$ as macGeneric).offset > 0) {
			updateGeneric(state, $.goSlice((h$ as macGeneric).buffer, undefined, (h$ as macGeneric).offset))
		}
		finalize(out, $.fieldRef(state.value._fields, "h"), $.fieldRef(state.value._fields, "s"))
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let h: macGeneric | $.VarRef<macGeneric> | null = this;
		const h$: macGeneric = h == null ? $.pointerTarget<macGeneric>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<macGeneric>(h)
		let nn = $.sliceLen(p)
		if ((h$ as macGeneric).offset > 0) {
			let n: number = $.copy($.goSlice((h$ as macGeneric).buffer, (h$ as macGeneric).offset, undefined), p)
			if (((h$ as macGeneric).offset + n) < 16) {
				;(h$ as macGeneric).offset = (h$ as macGeneric).offset + (n)
				return [nn, null]
			}
			p = $.goSlice(p, n, undefined);
			;(h$ as macGeneric).offset = 0
			updateGeneric($.fieldRef((h$ as macGeneric)._fields, "macState"), $.goSlice((h$ as macGeneric).buffer, undefined, undefined))
		}
		{
			let n: number = $.sliceLen(p) - ($.sliceLen(p) % 16)
			if (n > 0) {
				updateGeneric($.fieldRef((h$ as macGeneric)._fields, "macState"), $.goSlice(p, undefined, n))
				p = $.goSlice(p, n, undefined)
			}
		}
		if ($.sliceLen(p) > 0) {
			;(h$ as macGeneric).offset = (h$ as macGeneric).offset + ($.copy($.goSlice((h$ as macGeneric).buffer, (h$ as macGeneric).offset, undefined), p))
		}
		return [nn, null]
	}

	static __typeInfo = $.registerStructType(
		"poly1305.macGeneric",
		() => new macGeneric(),
		() => [$.methodSignature("Sum", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		macGeneric,
		() => [/* @__PURE__ */ $.structField("macState", "poly1305.macState", [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305", anonymous: true }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [1], 56, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [2], 72, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" })]
	)
}

export class uint128 {
	public get lo(): bigint {
		return this._fields.lo
	}

	public set lo(value: bigint) {
		this._fields.lo = value
	}

	public get hi(): bigint {
		return this._fields.hi
	}

	public set hi(value: bigint) {
		this._fields.hi = value
	}

	public _fields: {
		lo: bigint
		hi: bigint
	}

	constructor(init?: Partial<{lo?: bigint, hi?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			lo: init?.lo ?? (0n as bigint),
			hi: init?.hi ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): uint128 {
		return new uint128(this, true)
	}

	public __goscriptAssign(source: uint128): void {
		const target = this._fields
		const values = source._fields
		target.lo = values.lo
		target.hi = values.hi
	}

	static __typeInfo = $.registerStructType(
		"poly1305.uint128",
		() => new uint128(),
		() => [],
		uint128,
		() => [/* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" }), /* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "vendor/golang.org/x/crypto/internal/poly1305" })]
	)
}

export const rMask0: number = 1152921487695413247

export const rMask1: number = 1152921487695413244

export const maskLow2Bits: bigint = 3n

export const maskNotLow2Bits: bigint = 18446744073709551612n

export const p0: number = 18446744073709551611

export const p1: number = 18446744073709551615

export const p2: number = 3

export function sumGeneric(out: $.VarRef<Uint8Array> | null, msg: $.Slice<number>, key: $.VarRef<Uint8Array> | null): void {
	let h = $.varRef(newMACGeneric(key))
	h.value.Write(msg)
	h.value.Sum(out)
}

export function newMACGeneric(key: $.VarRef<Uint8Array> | null): macGeneric {
	let m = new macGeneric(undefined, true)
	initialize(key, $.fieldRef(m._fields, "macState"))
	return (m).clone()
}

export function initialize(key: $.VarRef<Uint8Array> | null, m: macState | $.VarRef<macState> | null): void {
	const m$: macState = m == null ? $.pointerTarget<macState>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<macState>(m);
	;(m$ as macState).r[0] = $.uint64And($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice($.pointerValue<Uint8Array>(key), 0, 8)), 1152921487695413247n);
	;(m$ as macState).r[1] = $.uint64And($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice($.pointerValue<Uint8Array>(key), 8, 16)), 1152921487695413244n);
	;(m$ as macState).s[0] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice($.pointerValue<Uint8Array>(key), 16, 24));
	;(m$ as macState).s[1] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice($.pointerValue<Uint8Array>(key), 24, 32))
}

export function mul64(a: bigint, b: bigint): uint128 {
	let [hi, lo] = bits.Mul64(a, b)
	return new uint128({lo: lo, hi: hi}, true)
}

export function add128(a: uint128, b: uint128): uint128 {
	let __goscriptTuple0: any = bits.Add64(a.lo, b.lo, 0n)
	let lo = __goscriptTuple0[0]
	let c = __goscriptTuple0[1]
	let __goscriptTuple1: any = bits.Add64(a.hi, b.hi, c)
	let hi = __goscriptTuple1[0]
	c = __goscriptTuple1[1]
	if (c != 0n) {
		$.panic("poly1305: unexpected overflow")
	}
	return new uint128({lo: lo, hi: hi}, true)
}

export function shiftRightBy2(a: uint128): uint128 {
	a.lo = $.uint64Or(($.uint64Shr(a.lo, 2n)), ($.uint64Mul(($.uint64And(a.hi, 3n)), (2 ** 62))))
	a.hi = $.uint64Shr(a.hi, 2n)
	return (a).clone()
}

export function updateGeneric(state: macState | $.VarRef<macState> | null, msg: $.Slice<number>): void {
	const state$: macState = state == null ? $.pointerTarget<macState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<macState>(state)
	let h0 = $.arrayIndex((state$ as macState).h, 0)
	let h1 = $.arrayIndex((state$ as macState).h, 1)
	let h2 = $.arrayIndex((state$ as macState).h, 2)
	let r0 = $.arrayIndex((state$ as macState).r, 0)
	let r1 = $.arrayIndex((state$ as macState).r, 1)

	while ($.sliceLen(msg) > 0) {
		let c: bigint = 0n

		// For the first step, h + m, we use a chain of bits.Add64 intrinsics.
		// The resulting value of h might exceed 2¹³⁰ - 5, but will be partially
		// reduced at the end of the multiplication below.
		//
		// The spec requires us to set a bit just above the message size, not to
		// hide leading zeroes. For full chunks, that's 1 << 128, so we can just
		// add 1 to the most significant (2¹²⁸) limb, h2.
		if ($.sliceLen(msg) >= 16) {
			let __goscriptTuple2: any = bits.Add64(h0, $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice(msg, 0, 8)), 0n)
			h0 = __goscriptTuple2[0]
			c = __goscriptTuple2[1]
			let __goscriptTuple3: any = bits.Add64(h1, $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice(msg, 8, 16)), c)
			h1 = __goscriptTuple3[0]
			c = __goscriptTuple3[1]
			h2 = $.uint64Add(h2, $.uint64Add(c, 1n))

			msg = $.goSlice(msg, 16, undefined)
		} else {
			let buf: Uint8Array = $.arrayValue(new Uint8Array(16))
			$.copy($.goSlice(buf, undefined, undefined), msg)
			buf[$.sliceLen(msg)] = 1

			let __goscriptTuple4: any = bits.Add64(h0, $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice(buf, 0, 8)), 0n)
			h0 = __goscriptTuple4[0]
			c = __goscriptTuple4[1]
			let __goscriptTuple5: any = bits.Add64(h1, $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64($.goSlice(buf, 8, 16)), c)
			h1 = __goscriptTuple5[0]
			c = __goscriptTuple5[1]
			h2 = $.uint64Add(h2, c)

			msg = null
		}

		// Multiplication of big number limbs is similar to elementary school
		// columnar multiplication. Instead of digits, there are 64-bit limbs.
		//
		// We are multiplying a 3 limbs number, h, by a 2 limbs number, r.
		//
		//                        h2    h1    h0  x
		//                              r1    r0  =
		//                       ----------------
		//                      h2r0  h1r0  h0r0     <-- individual 128-bit products
		//            +   h2r1  h1r1  h0r1
		//               ------------------------
		//                 m3    m2    m1    m0      <-- result in 128-bit overlapping limbs
		//               ------------------------
		//         m3.hi m2.hi m1.hi m0.hi           <-- carry propagation
		//     +         m3.lo m2.lo m1.lo m0.lo
		//        -------------------------------
		//           t4    t3    t2    t1    t0      <-- final result in 64-bit limbs
		//
		// The main difference from pen-and-paper multiplication is that we do
		// carry propagation in a separate step, as if we wrote two digit sums
		// at first (the 128-bit limbs), and then carried the tens all at once.

		let h0r0 = mul64(h0, r0)
		let h1r0 = mul64(h1, r0)
		let h2r0 = mul64(h2, r0)
		let h0r1 = mul64(h0, r1)
		let h1r1 = mul64(h1, r1)
		let h2r1 = mul64(h2, r1)

		// Since h2 is known to be at most 7 (5 + 1 + 1), and r0 and r1 have their
		// top 4 bits cleared by rMask{0,1}, we know that their product is not going
		// to overflow 64 bits, so we can ignore the high part of the products.
		//
		// This also means that the product doesn't have a fifth limb (t4).
		if (h2r0.hi != 0n) {
			$.panic("poly1305: unexpected overflow")
		}
		if (h2r1.hi != 0n) {
			$.panic("poly1305: unexpected overflow")
		}

		let m0 = (h0r0).clone()
		let m1 = add128(h1r0, h0r1)
		let m2 = add128(h2r0, h1r1)
		let m3 = (h2r1).clone()

		let t0 = m0.lo
		let __goscriptTuple6: any = bits.Add64(m1.lo, m0.hi, 0n)
		let t1 = __goscriptTuple6[0]
		c = __goscriptTuple6[1]
		let __goscriptTuple7: any = bits.Add64(m2.lo, m1.hi, c)
		let t2 = __goscriptTuple7[0]
		c = __goscriptTuple7[1]
		let [t3, ] = bits.Add64(m3.lo, m2.hi, c)

		// Now we have the result as 4 64-bit limbs, and we need to reduce it
		// modulo 2¹³⁰ - 5. The special shape of this Crandall prime lets us do
		// a cheap partial reduction according to the reduction identity
		//
		//     c * 2¹³⁰ + n  =  c * 5 + n  mod  2¹³⁰ - 5
		//
		// because 2¹³⁰ = 5 mod 2¹³⁰ - 5. Partial reduction since the result is
		// likely to be larger than 2¹³⁰ - 5, but still small enough to fit the
		// assumptions we make about h in the rest of the code.
		//
		// See also https://speakerdeck.com/gtank/engineering-prime-numbers?slide=23

		// We split the final result at the 2¹³⁰ mark into h and cc, the carry.
		// Note that the carry bits are effectively shifted left by 2, in other
		// words, cc = c * 4 for the c in the reduction identity.
		let __goscriptAssign0_0: bigint = t0
		let __goscriptAssign0_1: bigint = t1
		let __goscriptAssign0_2: bigint = $.uint64And(t2, 3n)
		h0 = __goscriptAssign0_0
		h1 = __goscriptAssign0_1
		h2 = __goscriptAssign0_2
		let cc = new uint128({lo: $.uint64And(t2, 18446744073709551612n), hi: t3}, true)

		// To add c * 5 to h, we first add cc = c * 4, and then add (cc >> 2) = c.

		let __goscriptTuple8: any = bits.Add64(h0, cc.lo, 0n)
		h0 = __goscriptTuple8[0]
		c = __goscriptTuple8[1]
		let __goscriptTuple9: any = bits.Add64(h1, cc.hi, c)
		h1 = __goscriptTuple9[0]
		c = __goscriptTuple9[1]
		h2 = $.uint64Add(h2, c)

		cc = $.assignStruct(cc, shiftRightBy2((cc).clone()))

		let __goscriptTuple10: any = bits.Add64(h0, cc.lo, 0n)
		h0 = __goscriptTuple10[0]
		c = __goscriptTuple10[1]
		let __goscriptTuple11: any = bits.Add64(h1, cc.hi, c)
		h1 = __goscriptTuple11[0]
		c = __goscriptTuple11[1]
		h2 = $.uint64Add(h2, c)
	}

	let __goscriptAssign1_0: bigint = h0
	let __goscriptAssign1_1: bigint = h1
	let __goscriptAssign1_2: bigint = h2;
	;(state$ as macState).h[0] = __goscriptAssign1_0;
	;(state$ as macState).h[1] = __goscriptAssign1_1;
	;(state$ as macState).h[2] = __goscriptAssign1_2
}

export function select64(v: bigint, x: bigint, y: bigint): bigint {
	return $.uint64Or(($.uint64And($.uint64Xor(($.uint64Sub(v, 1n)), -1n), x)), ($.uint64And(($.uint64Sub(v, 1n)), y)))
}

export function finalize(out: $.VarRef<Uint8Array> | null, h: $.VarRef<bigint[]> | null, s: $.VarRef<bigint[]> | null): void {
	let h0 = $.arrayIndex($.pointerValue<bigint[]>(h), 0)
	let h1 = $.arrayIndex($.pointerValue<bigint[]>(h), 1)
	let h2 = $.arrayIndex($.pointerValue<bigint[]>(h), 2)

	// After the partial reduction in updateGeneric, h might be more than
	// 2¹³⁰ - 5, but will be less than 2 * (2¹³⁰ - 5). To complete the reduction
	// in constant time, we compute t = h - (2¹³⁰ - 5), and select h as the
	// result if the subtraction underflows, and t otherwise.

	let [hMinusP0, b] = bits.Sub64(h0, 18446744073709551611n, 0n)
	let __goscriptTuple12: any = bits.Sub64(h1, 18446744073709551615n, b)
	let hMinusP1 = __goscriptTuple12[0]
	b = __goscriptTuple12[1]
	let __goscriptTuple13: any = bits.Sub64(h2, 3n, b)
	b = __goscriptTuple13[1]

	// h = h if h < p else h - p
	h0 = select64(b, h0, hMinusP0)
	h1 = select64(b, h1, hMinusP1)

	// Finally, we compute the last Poly1305 step
	//
	//     tag = h + s  mod  2¹²⁸
	//
	// by just doing a wide addition with the 128 low bits of h and discarding
	// the overflow.
	let __goscriptTuple14: any = bits.Add64(h0, $.arrayIndex($.pointerValue<bigint[]>(s), 0), 0n)
	h0 = __goscriptTuple14[0]
	let c = __goscriptTuple14[1]
	let __goscriptTuple15: any = bits.Add64(h1, $.arrayIndex($.pointerValue<bigint[]>(s), 1), c)
	h1 = __goscriptTuple15[0]

	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64($.goSlice($.pointerValue<Uint8Array>(out), 0, 8), h0)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64($.goSlice($.pointerValue<Uint8Array>(out), 8, 16), h1)
}
