// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import type * as __goscript_mldsa from "./mldsa.gs.ts"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("crypto/internal/fips140/mldsa", ["mldsa.fieldElement", "mldsa.ringElement", "mldsa.nttElement"])

export type fieldElement = number

export type ringElement = fieldElement[]

$.registerNamedType("mldsa.ringElement", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32", "mldsa.fieldElement"), 256));

export type nttElement = fieldElement[]

$.registerNamedType("mldsa.nttElement", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32", "mldsa.fieldElement"), 256));

export const q: number = 8380417

export const R: number = 4294967296

export const RR: number = 2365951

export const qNegInv: number = 4236238847

export const one: number = 4193792

export const minusOne: number = 4186625

export const n: number = 256

export let errUnreducedFieldElement: $.GoError = errors.New("mldsa: unreduced field element")

export function __goscript_set_errUnreducedFieldElement(__goscriptValue: $.GoError): void {
	errUnreducedFieldElement = __goscriptValue
}

export function fieldToMontgomery(a: number): [fieldElement, $.GoError] {
	if (a >= 8380417) {
		return [0, errUnreducedFieldElement]
	}
	// a * R² * R⁻¹ ≡ a * R (mod q)
	return [fieldMontgomeryMul($.uint(a, 32), 2365951), null]
}

export function fieldSubToMontgomery(a: number, b: number): fieldElement {
	let x = $.uint((((((a - b) >>> 0)) + 8380417) >>> 0), 32)
	return fieldMontgomeryMul($.uint(x, 32), 2365951)
}

export function fieldFromMontgomery(a: fieldElement): number {
	// (a * R) * 1 * R⁻¹ ≡ a (mod q)
	return $.uint(fieldMontgomeryReduce($.uint64(a)), 32)
}

export function fieldCenteredMod(r: fieldElement): number {
	let x = $.int(fieldFromMontgomery(r), 32)
	// x <= q / 2 ? x : x - q
	return constantTimeSelectLessOrEqual(x, 4190208, x, $.int(((x - 8380417) | 0), 32))
}

export function fieldInfinityNorm(r: fieldElement): number {
	let x = $.int(fieldFromMontgomery(r), 32)
	// x <= q / 2 ? x : |x - q|
	// |x - q| = -(x - q) = q - x because x < q => x - q < 0
	return $.uint(constantTimeSelectLessOrEqual(x, 4190208, x, $.int(((8380417 - x) | 0), 32)), 32)
}

export function fieldReduceOnce(a: number): fieldElement {
	let [x, b] = bits.Sub64($.uint64(a), 8380417n, 0n)
	return $.uint($.uint64Add(x, ($.uint64Mul(b, 8380417n))), 32)
}

export function fieldAdd(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint($.uint(((a + b) >>> 0), 32), 32)
	return fieldReduceOnce(x)
}

export function fieldSub(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint($.uint((((((a - b) >>> 0)) + 8380417) >>> 0), 32), 32)
	return fieldReduceOnce(x)
}

export function fieldMontgomeryMul(a: fieldElement, b: fieldElement): fieldElement {
	let x = $.uint64Mul($.uint64(a), $.uint64(b))
	return fieldMontgomeryReduce(x)
}

export function fieldMontgomeryReduce(x: bigint): fieldElement {
	let t = $.uint(globalThis.Math.imul($.uint(x, 32), 4236238847) >>> 0, 32)
	let u = $.uint64Shr(($.uint64Add(x, ($.uint64Mul($.uint64(t), 8380417n)))), 32n)
	return fieldReduceOnce($.uint(u, 32))
}

export function fieldMontgomeryMulSub(a: fieldElement, b: fieldElement, c: fieldElement): fieldElement {
	let x = $.uint64Mul($.uint64(a), $.uint64($.uint((((((b - c) >>> 0)) + 8380417) >>> 0), 32)))
	return fieldMontgomeryReduce(x)
}

export function fieldMontgomeryAddMul(a: fieldElement, b: fieldElement, c: fieldElement, d: fieldElement): fieldElement {
	let x = $.uint64Mul($.uint64(a), $.uint64(b))
	x = $.uint64Add(x, $.uint64Mul($.uint64(c), $.uint64(d)))
	return fieldMontgomeryReduce(x)
}

export function polyAdd(__typeArgs: $.GenericTypeArgs | undefined, a: any, b: any): any {
	let s: any = $.genericZero(__typeArgs, "T", null)
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(s as fieldElement[])[i] = fieldAdd($.arrayIndex((a as fieldElement[]), i), $.arrayIndex((b as fieldElement[]), i))
	}
	return $.copyElement(s)
}

export function polySub(__typeArgs: $.GenericTypeArgs | undefined, a: any, b: any): any {
	let s: any = $.genericZero(__typeArgs, "T", null)
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(s as fieldElement[])[i] = fieldSub($.arrayIndex((a as fieldElement[]), i), $.arrayIndex((b as fieldElement[]), i))
	}
	return $.copyElement(s)
}

export let zetas: fieldElement[] = $.arrayValue([4193792, 25847, 5771523, 7861508, 237124, 7602457, 7504169, 466468, 1826347, 2353451, 8021166, 6288512, 3119733, 5495562, 3111497, 2680103, 2725464, 1024112, 7300517, 3585928, 7830929, 7260833, 2619752, 6271868, 6262231, 4520680, 6980856, 5102745, 1757237, 8360995, 4010497, 280005, 2706023, 95776, 3077325, 3530437, 6718724, 4788269, 5842901, 3915439, 4519302, 5336701, 3574422, 5512770, 3539968, 8079950, 2348700, 7841118, 6681150, 6736599, 3505694, 4558682, 3507263, 6239768, 6779997, 3699596, 811944, 531354, 954230, 3881043, 3900724, 5823537, 2071892, 5582638, 4450022, 6851714, 4702672, 5339162, 6927966, 3475950, 2176455, 6795196, 7122806, 1939314, 4296819, 7380215, 5190273, 5223087, 4747489, 126922, 3412210, 7396998, 2147896, 2715295, 5412772, 4686924, 7969390, 5903370, 7709315, 7151892, 8357436, 7072248, 7998430, 1349076, 1852771, 6949987, 5037034, 264944, 508951, 3097992, 44288, 7280319, 904516, 3958618, 4656075, 8371839, 1653064, 5130689, 2389356, 8169440, 759969, 7063561, 189548, 4827145, 3159746, 6529015, 5971092, 8202977, 1315589, 1341330, 1285669, 6795489, 7567685, 6940675, 5361315, 4499357, 4751448, 3839961, 2091667, 3407706, 2316500, 3817976, 5037939, 2244091, 5933984, 4817955, 266997, 2434439, 7144689, 3513181, 4860065, 4621053, 7183191, 5187039, 900702, 1859098, 909542, 819034, 495491, 6767243, 8337157, 7857917, 7725090, 5257975, 2031748, 3207046, 4823422, 7855319, 7611795, 4784579, 342297, 286988, 5942594, 4108315, 3437287, 5038140, 1735879, 203044, 2842341, 2691481, 5790267, 1265009, 4055324, 1247620, 2486353, 1595974, 4613401, 1250494, 2635921, 4832145, 5386378, 1869119, 1903435, 7329447, 7047359, 1237275, 5062207, 6950192, 7929317, 1312455, 3306115, 6417775, 7100756, 1917081, 5834105, 7005614, 1500165, 777191, 2235880, 3406031, 7838005, 5548557, 6709241, 6533464, 5796124, 4656147, 594136, 4603424, 6366809, 2432395, 2454455, 8215696, 1957272, 3369112, 185531, 7173032, 5196991, 162844, 1616392, 3014001, 810149, 1652634, 4686184, 6581310, 5341501, 3523897, 3866901, 269760, 2213111, 7404533, 1717735, 472078, 7953734, 1723600, 6577327, 1910376, 6712985, 7276084, 8119771, 4546524, 5441381, 6144432, 7959518, 6094090, 183443, 7403526, 1612842, 4834730, 7826001, 3919660, 8332111, 7018208, 3937738, 1400424, 7534263, 1976782])

export function __goscript_set_zetas(__goscriptValue: fieldElement[]): void {
	zetas = __goscriptValue
}

export function ntt(f: ringElement): nttElement {
	let m: number = 0

	for (let len = 128; len >= 8; len = globalThis.Math.trunc(len / 2)) {
		for (let start = 0; start < 256; start = start + (2 * len)) {
			m = ((m + 1) & 0xff)
			let zeta = $.arrayIndex(zetas, m)

			// Bounds check elimination hint.
			let __goscriptShadow0 = f
			let __goscriptShadow1: $.Slice<fieldElement> = $.goSlice(__goscriptShadow0, start, start + len)
			let flen: $.Slice<fieldElement> = $.goSlice(__goscriptShadow0, start + len, (start + len) + len)
			for (let __goscriptSliceWindow0 = $.sliceRange(flen), __goscriptSliceWindow1 = $.sliceRange(__goscriptShadow1), j = 0; j < len; j = j + (2)) {
				let t = fieldMontgomeryMul(zeta, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as fieldElement));
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = fieldSub(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as fieldElement), t);
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] = fieldAdd(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as fieldElement), t)

				// Unroll by 2 for performance.
				t = fieldMontgomeryMul(zeta, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] as fieldElement));
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] = fieldSub(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j + 1)] as fieldElement), t);
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j + 1)] = fieldAdd(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j + 1)] as fieldElement), t)
			}
		}
	}

	// Unroll len = 4, 2, and 1.
	for (let start = 0; start < 256; start = start + (8)) {
		m = ((m + 1) & 0xff)
		let zeta = $.arrayIndex(zetas, m)

		let t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 4))
		f[start + 4] = fieldSub($.arrayIndex(f, start), t)
		f[start] = fieldAdd($.arrayIndex(f, start), t)

		t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 5))
		f[start + 5] = fieldSub($.arrayIndex(f, start + 1), t)
		f[start + 1] = fieldAdd($.arrayIndex(f, start + 1), t)

		t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 6))
		f[start + 6] = fieldSub($.arrayIndex(f, start + 2), t)
		f[start + 2] = fieldAdd($.arrayIndex(f, start + 2), t)

		t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 7))
		f[start + 7] = fieldSub($.arrayIndex(f, start + 3), t)
		f[start + 3] = fieldAdd($.arrayIndex(f, start + 3), t)
	}
	for (let start = 0; start < 256; start = start + (4)) {
		m = ((m + 1) & 0xff)
		let zeta = $.arrayIndex(zetas, m)

		let t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 2))
		f[start + 2] = fieldSub($.arrayIndex(f, start), t)
		f[start] = fieldAdd($.arrayIndex(f, start), t)

		t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 3))
		f[start + 3] = fieldSub($.arrayIndex(f, start + 1), t)
		f[start + 1] = fieldAdd($.arrayIndex(f, start + 1), t)
	}
	for (let start = 0; start < 256; start = start + (2)) {
		m = ((m + 1) & 0xff)
		let zeta = $.arrayIndex(zetas, m)

		let t = fieldMontgomeryMul(zeta, $.arrayIndex(f, start + 1))
		f[start + 1] = fieldSub($.arrayIndex(f, start), t)
		f[start] = fieldAdd($.arrayIndex(f, start), t)
	}

	return $.cloneArrayValue(f, "mldsa.nttElement")
}

export function inverseNTT(f: nttElement): ringElement {
	let m: number = 255

	// Unroll len = 1, 2, and 4.
	for (let start = 0; start < 256; start = start + (2)) {
		let zeta = $.arrayIndex(zetas, m)
		m = ((m - 1) & 0xff)

		let t = $.arrayIndex(f, start)
		f[start] = fieldAdd(t, $.arrayIndex(f, start + 1))
		f[start + 1] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 1), t)
	}
	for (let start = 0; start < 256; start = start + (4)) {
		let zeta = $.arrayIndex(zetas, m)
		m = ((m - 1) & 0xff)

		let t = $.arrayIndex(f, start)
		f[start] = fieldAdd(t, $.arrayIndex(f, start + 2))
		f[start + 2] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 2), t)

		t = $.arrayIndex(f, start + 1)
		f[start + 1] = fieldAdd(t, $.arrayIndex(f, start + 3))
		f[start + 3] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 3), t)
	}
	for (let start = 0; start < 256; start = start + (8)) {
		let zeta = $.arrayIndex(zetas, m)
		m = ((m - 1) & 0xff)

		let t = $.arrayIndex(f, start)
		f[start] = fieldAdd(t, $.arrayIndex(f, start + 4))
		f[start + 4] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 4), t)

		t = $.arrayIndex(f, start + 1)
		f[start + 1] = fieldAdd(t, $.arrayIndex(f, start + 5))
		f[start + 5] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 5), t)

		t = $.arrayIndex(f, start + 2)
		f[start + 2] = fieldAdd(t, $.arrayIndex(f, start + 6))
		f[start + 6] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 6), t)

		t = $.arrayIndex(f, start + 3)
		f[start + 3] = fieldAdd(t, $.arrayIndex(f, start + 7))
		f[start + 7] = fieldMontgomeryMulSub(zeta, $.arrayIndex(f, start + 7), t)
	}

	for (let len = 8; len < 256; len = len * (2)) {
		for (let start = 0; start < 256; start = start + (2 * len)) {
			let zeta = $.arrayIndex(zetas, m)
			m = ((m - 1) & 0xff)

			// Bounds check elimination hint.
			let __goscriptShadow2 = f
			let __goscriptShadow3: $.Slice<fieldElement> = $.goSlice(__goscriptShadow2, start, start + len)
			let flen: $.Slice<fieldElement> = $.goSlice(__goscriptShadow2, start + len, (start + len) + len)
			for (let __goscriptSliceWindow2 = $.sliceRange(__goscriptShadow3), __goscriptSliceWindow3 = $.sliceRange(flen), j = 0; j < len; j = j + (2)) {
				let t = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as fieldElement);
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] = fieldAdd(t, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] as fieldElement));
				// -z * (t - flen[j]) = z * (flen[j] - t)
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] = fieldMontgomeryMulSub(zeta, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] as fieldElement), t)

				// Unroll by 2 for performance.
				t = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j + 1)] as fieldElement);
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j + 1)] = fieldAdd(t, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j + 1)] as fieldElement));
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j + 1)] = fieldMontgomeryMulSub(zeta, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j + 1)] as fieldElement), t)
			}
		}
	}

	for (let __goscriptRangeTarget2 = f, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		f[i] = fieldMontgomeryMul($.arrayIndex(f, i), 16382)
	}
	return $.cloneArrayValue(f, "mldsa.ringElement")
}

export function nttMul(a: nttElement, b: nttElement): nttElement {
	let p: nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptRangeTarget3 = p, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		p[i] = fieldMontgomeryMul($.arrayIndex(a, i), $.arrayIndex(b, i))
	}
	return $.cloneArrayValue(p, "mldsa.nttElement")
}

export function sampleNTT(rho: $.Slice<number>, s: number, r: number): nttElement {
	let G: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake128()
	void (G !== null && (G as any).__isVarRef !== true && (G as any).__goValue === undefined ? ((G as any) as sha3.SHAKE).Write(rho) : sha3.SHAKE.prototype.Write.call(G, rho))
	void (G !== null && (G as any).__isVarRef !== true && (G as any).__goValue === undefined ? ((G as any) as sha3.SHAKE).Write(new Uint8Array([s, r]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(G, new Uint8Array([s, r]) as $.Slice<number>))

	let a: nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	let j: number = 0
	let buf: Uint8Array = $.arrayValue(new Uint8Array(168))
	let off = 168
	while (j < 256) {
		if (off >= 168) {
			void (G !== null && (G as any).__isVarRef !== true && (G as any).__goValue === undefined ? ((G as any) as sha3.SHAKE).Read($.goSlice(buf, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(G, $.goSlice(buf, undefined, undefined)))
			off = 0
		}
		let v = $.uint(($.uint($.arrayIndex(buf, off), 32) | ((($.uint($.arrayIndex(buf, off + 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(buf, off + 2), 32) << 16) >>> 0)), 32)
		off = off + (3)
		let [f, err] = fieldToMontgomery($.uint(v & 0b01111111_11111111_11111111, 32))
		if (err != null) {
			continue
		}
		a[j] = f
		j++
	}
	return $.cloneArrayValue(a, "mldsa.nttElement")
}

export function sampleBoundedPoly(rho: $.Slice<number>, r: number, p: __goscript_mldsa.parameters): ringElement {
	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(rho) : sha3.SHAKE.prototype.Write.call(H, rho))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([r, 0]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([r, 0]) as $.Slice<number>))

	let a: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	let j: number = 0
	let buf: Uint8Array = $.arrayValue(new Uint8Array(136))
	let off = 136
	while (true) {
		if (off >= 136) {
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read($.goSlice(buf, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(H, $.goSlice(buf, undefined, undefined)))
			off = 0
		}
		let z0 = $.uint($.arrayIndex(buf, off) & 0x0F, 8)
		let z1 = $.uint($.uintShr($.arrayIndex(buf, off), 4, 8), 8)
		off++
		let [coeff, ok] = coeffFromHalfByte(z0, p)
		if (ok) {
			a[j] = coeff
			j++
		}
		if (j >= 256) {
			break
		}
		let __goscriptTuple0: any = coeffFromHalfByte(z1, p)
		coeff = __goscriptTuple0[0]
		ok = __goscriptTuple0[1]
		if (ok) {
			a[j] = coeff
			j++
		}
		if (j >= 256) {
			break
		}
	}
	return $.cloneArrayValue(a, "mldsa.ringElement")
}

export function sampleInBall(rho: $.Slice<number>, p: __goscript_mldsa.parameters): ringElement {
	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(rho) : sha3.SHAKE.prototype.Write.call(H, rho))
	let s: $.Slice<number> = $.makeSlice<number>(8, undefined, "byte")
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(s) : sha3.SHAKE.prototype.Read.call(H, s))

	let c: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptSliceWindow4 = $.sliceRange(s), i = 256 - p._u3c4; i < 256; i++) {
		let j: $.Slice<number> = $.makeSlice<number>(1, undefined, "byte")
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(j) : sha3.SHAKE.prototype.Read.call(H, j))
		for (let __goscriptSliceWindow5 = $.sliceRange(j); ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, 0)] as number) > $.uint(i, 8); ) {
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(j) : sha3.SHAKE.prototype.Read.call(H, j))
		}
		c[i] = $.arrayIndex(c, $.arrayIndex(j!, 0))
		// c[j] = (−1) ^ h[i+τ−256], where h are the bits in s in little-endian.
		// That is, -1⁰ = 1 if the bit is 0, -1¹ = -1 if it is 1.
		let bitIdx = (i + p._u3c4) - 256
		let bit = $.uint(($.uintShr(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, globalThis.Math.trunc(bitIdx / 8))] as number), (bitIdx % 8), 8)) & 1, 8)
		if (bit == 0) {
			c[$.arrayIndex(j!, 0)] = 4193792
		} else {
			c[$.arrayIndex(j!, 0)] = 4186625
		}
	}

	return $.cloneArrayValue(c, "mldsa.ringElement")
}

export function coeffFromHalfByte(b: number, p: __goscript_mldsa.parameters): [fieldElement, boolean] {
	if (b > 15) {
		$.panic("internal error: half-byte out of range")
	}
	switch (p._u3b7) {
		case 2:
		{
			if (b > 14) {
				return [0, false]
			}
			// Calculate b % 5 with Barrett reduction, to avoid a potentially
			// variable-time division.
			const barrettMultiplier: number = 13108
			const barrettShift: number = 16
			let quotient = $.uint($.uintShr((globalThis.Math.imul($.uint(b, 32), 13108) >>> 0), 16, 32), 32)
			let remainder = $.uint((($.uint(b, 32) - (globalThis.Math.imul(quotient, 5) >>> 0)) >>> 0), 32)
			return [fieldSubToMontgomery(2, remainder), true]
			break
		}
		case 4:
		{
			if (b > 8) {
				return [0, false]
			}
			return [fieldSubToMontgomery(4, $.uint(b, 32)), true]
			break
		}
		default:
		{
			$.panic("internal error: unsupported \xce\xb7")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function power2Round(r: fieldElement): [number, fieldElement] {
	let hi: number = 0
	let lo: fieldElement = 0
	let rr = fieldFromMontgomery(r)
	// Add 2¹² - 1 to round up r1 by one if r0 > 2¹².
	// r is at most 2²³ - 2¹³ + 1, so rr + (2¹² - 1) won't overflow 23 bits.
	let r1 = $.uint((((((rr + (4096)) >>> 0)) - 1) >>> 0), 32)
	r1 = (r1 >>> (13)) >>> 0
	// r1 <= 2¹⁰ - 1
	// r1 * 2¹³ <= (2¹⁰ - 1) * 2¹³ = 2²³ - 2¹³ < q
	let r0 = fieldSubToMontgomery(rr, $.uint(((r1 << 13) >>> 0), 32))
	return [$.uint(r1, 16), r0]
}

export function highBits(r: ringElement, p: __goscript_mldsa.parameters): Uint8Array {
	let w: Uint8Array = $.arrayValue(new Uint8Array(256))
	switch (p._u3b32) {
		case 32:
		{
			for (let i = 0; i < 256; i++) {
				w[i] = highBits32(fieldFromMontgomery($.arrayIndex(r, i)))
			}
			break
		}
		case 88:
		{
			for (let i = 0; i < 256; i++) {
				w[i] = highBits88(fieldFromMontgomery($.arrayIndex(r, i)))
			}
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb32")
			break
		}
	}
	return $.cloneArrayValue(w, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256))
}

export function useHint(r: ringElement, h: Uint8Array, p: __goscript_mldsa.parameters): Uint8Array {
	let w: Uint8Array = $.arrayValue(new Uint8Array(256))
	switch (p._u3b32) {
		case 32:
		{
			for (let i = 0; i < 256; i++) {
				w[i] = useHint32($.arrayIndex(r, i), $.arrayIndex(h, i))
			}
			break
		}
		case 88:
		{
			for (let i = 0; i < 256; i++) {
				w[i] = useHint88($.arrayIndex(r, i), $.arrayIndex(h, i))
			}
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb32")
			break
		}
	}
	return $.cloneArrayValue(w, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256))
}

export function makeHint(ct0: ringElement, w: ringElement, cs2: ringElement, p: __goscript_mldsa.parameters): [Uint8Array, number] {
	let h: Uint8Array = $.arrayValue(new Uint8Array(256))
	let count1s: number = 0
	switch (p._u3b32) {
		case 32:
		{
			for (let i = 0; i < 256; i++) {
				h[i] = makeHint32($.arrayIndex(ct0, i), $.arrayIndex(w, i), $.arrayIndex(cs2, i))
				count1s = count1s + ($.int($.arrayIndex(h, i)))
			}
			break
		}
		case 88:
		{
			for (let i = 0; i < 256; i++) {
				h[i] = makeHint88($.arrayIndex(ct0, i), $.arrayIndex(w, i), $.arrayIndex(cs2, i))
				count1s = count1s + ($.int($.arrayIndex(h, i)))
			}
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb32")
			break
		}
	}
	return [$.cloneArrayValue(h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256)), count1s]
}

export function highBits32(x: number): number {
	// The implementation is based on the reference implementation and on
	// BoringSSL. There are exhaustive tests in TestDecompose that compare it to
	// a straightforward implementation of Decompose from the spec, so for our
	// purposes it only has to work and be constant-time.
	let r1 = $.uint($.uintShr((((x + 127) >>> 0)), 7, 32), 32)
	r1 = $.uint($.uintShr(((((globalThis.Math.imul(r1, 1025) >>> 0) + (2097152)) >>> 0)), 22, 32), 32)
	r1 = r1 & (0b1111)
	return $.uint(r1, 8)
}

export function decompose32(r: fieldElement): [number, number] {
	let r1: number = 0
	let r0: number = 0
	let x = fieldFromMontgomery(r)
	r1 = highBits32(x)

	// r - r1 * (2 * γ2) mod± q
	r0 = $.int((($.int(x, 32) - (globalThis.Math.trunc((globalThis.Math.imul((globalThis.Math.imul($.int(r1, 32), 2)), (((8380417 - 1) | 0)))) / 32))) | 0), 32)
	r0 = constantTimeSelectLessOrEqual(4190209, r0, $.int(((r0 - 8380417) | 0), 32), r0)

	return [r1, r0]
}

export function useHint32(r: fieldElement, hint: number): number {
	const m: number = 16
	let [r1, r0] = decompose32(r)
	if (hint == 1) {
		if (r0 > 0) {
			r1 = $.uint((((r1 + 1) & 0xff)) % 16, 8)
		} else {
			// Underflow is safe, because it operates modulo 256 (since the type
			// is byte), which is a multiple of m.
			r1 = $.uint((((r1 - 1) & 0xff)) % 16, 8)
		}
	}
	return r1
}

export function makeHint32(ct0: fieldElement, w: fieldElement, cs2: fieldElement): number {
	// v1 = HighBits(r + z) = HighBits(w - cs2 + ct0 - ct0) = HighBits(w - cs2)
	let rPlusZ = fieldSub(w, cs2)
	let v1 = highBits32(fieldFromMontgomery(rPlusZ))
	// r1 = HighBits(r) = HighBits(w - cs2 + ct0)
	let r1 = highBits32(fieldFromMontgomery(fieldAdd(rPlusZ, ct0)))

	return $.uint(constanttime.ByteEq(v1, r1) ^ 1, 8)
}

export function highBits88(x: number): number {
	// Like highBits32, this is exhaustively tested in TestDecompose.
	let r1 = $.uint($.uintShr((((x + 127) >>> 0)), 7, 32), 32)
	r1 = $.uint($.uintShr(((((globalThis.Math.imul(r1, 11275) >>> 0) + (8388608)) >>> 0)), 24, 32), 32)
	r1 = constantTimeSelectEqual(r1, 44, 0, r1)
	return $.uint(r1, 8)
}

export function decompose88(r: fieldElement): [number, number] {
	let r1: number = 0
	let r0: number = 0
	let x = fieldFromMontgomery(r)
	r1 = highBits88(x)

	// r - r1 * (2 * γ2) mod± q
	r0 = $.int((($.int(x, 32) - (globalThis.Math.trunc((globalThis.Math.imul((globalThis.Math.imul($.int(r1, 32), 2)), (((8380417 - 1) | 0)))) / 88))) | 0), 32)
	r0 = constantTimeSelectLessOrEqual(4190209, r0, $.int(((r0 - 8380417) | 0), 32), r0)

	return [r1, r0]
}

export function useHint88(r: fieldElement, hint: number): number {
	const m: number = 44
	let [r1, r0] = decompose88(r)
	if (hint == 1) {
		if (r0 > 0) {
			// (r1 + 1) mod m, for r1 in [0, m-1]
			if (r1 == 43) {
				r1 = 0
			} else {
				r1 = ((r1 + 1) & 0xff)
			}
		} else {
			// (r1 - 1) % m, for r1 in [0, m-1]
			if (r1 == 0) {
				r1 = 43
			} else {
				r1 = ((r1 - 1) & 0xff)
			}
		}
	}
	return r1
}

export function makeHint88(ct0: fieldElement, w: fieldElement, cs2: fieldElement): number {
	// Same as makeHint32 above.
	let rPlusZ = fieldSub(w, cs2)
	let v1 = highBits88(fieldFromMontgomery(rPlusZ))
	let r1 = highBits88(fieldFromMontgomery(fieldAdd(rPlusZ, ct0)))
	return $.uint(constanttime.ByteEq(v1, r1) ^ 1, 8)
}

export function bitPack(b: $.Slice<number>, r: ringElement, p: __goscript_mldsa.parameters): $.Slice<number> {
	switch (p._u3b31) {
		case 17:
		{
			return bitPack18(b, $.cloneArrayValue(r, "mldsa.ringElement"))
			break
		}
		case 19:
		{
			return bitPack20(b, $.cloneArrayValue(r, "mldsa.ringElement"))
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb31")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function bitPack18(buf: $.Slice<number>, r: ringElement): $.Slice<number> {
	let __goscriptTuple1: any = sliceForAppend(buf, 576)
	let out: $.Slice<number> = __goscriptTuple1[0]
	let v: $.Slice<number> = __goscriptTuple1[1]
	const b: number = 131072
	for (let i = 0; i < 256; i = i + (4)) {
		// b - [−2¹⁷+1, 2¹⁷] = [0, 2²⁸-1]
		let w0 = $.int(((131072 - fieldCenteredMod($.arrayIndex(r, i))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 0)] = $.uint($.int(w0 << 0, 32), 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 1)] = $.uint(w0 >> 8, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 2)] = $.uint(w0 >> 16, 8)
		let w1 = $.int(((131072 - fieldCenteredMod($.arrayIndex(r, i + 1))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 2)] = $.sliceElems(v!)[$.sliceSlot(v!, 2)] | ($.uint($.int(w1 << 2, 32), 8))
		$.sliceElems(v!)[$.sliceSlot(v!, 3)] = $.uint(w1 >> 6, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 4)] = $.uint(w1 >> 14, 8)
		let w2 = $.int(((131072 - fieldCenteredMod($.arrayIndex(r, i + 2))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 4)] = $.sliceElems(v!)[$.sliceSlot(v!, 4)] | ($.uint($.int(w2 << 4, 32), 8))
		$.sliceElems(v!)[$.sliceSlot(v!, 5)] = $.uint(w2 >> 4, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 6)] = $.uint(w2 >> 12, 8)
		let w3 = $.int(((131072 - fieldCenteredMod($.arrayIndex(r, i + 3))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 6)] = $.sliceElems(v!)[$.sliceSlot(v!, 6)] | ($.uint($.int(w3 << 6, 32), 8))
		$.sliceElems(v!)[$.sliceSlot(v!, 7)] = $.uint(w3 >> 2, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 8)] = $.uint(w3 >> 10, 8)
		v = $.goSlice(v, globalThis.Math.trunc((4 * 18) / 8), undefined)
	}
	return out
}

export function bitPack20(buf: $.Slice<number>, r: ringElement): $.Slice<number> {
	let __goscriptTuple2: any = sliceForAppend(buf, 640)
	let out: $.Slice<number> = __goscriptTuple2[0]
	let v: $.Slice<number> = __goscriptTuple2[1]
	const b: number = 524288
	for (let i = 0; i < 256; i = i + (2)) {
		// b - [−2¹⁹+1, 2¹⁹] = [0, 2²⁰-1]
		let w0 = $.int(((524288 - fieldCenteredMod($.arrayIndex(r, i))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 0)] = $.uint($.int(w0 << 0, 32), 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 1)] = $.uint(w0 >> 8, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 2)] = $.uint(w0 >> 16, 8)
		let w1 = $.int(((524288 - fieldCenteredMod($.arrayIndex(r, i + 1))) | 0), 32)
		$.sliceElems(v!)[$.sliceSlot(v!, 2)] = $.sliceElems(v!)[$.sliceSlot(v!, 2)] | ($.uint($.int(w1 << 4, 32), 8))
		$.sliceElems(v!)[$.sliceSlot(v!, 3)] = $.uint(w1 >> 4, 8)
		$.sliceElems(v!)[$.sliceSlot(v!, 4)] = $.uint(w1 >> 12, 8)
		v = $.goSlice(v, globalThis.Math.trunc((2 * 20) / 8), undefined)
	}
	return out
}

export function bitUnpack(v: $.Slice<number>, p: __goscript_mldsa.parameters): ringElement {
	switch (p._u3b31) {
		case 17:
		{
			return bitUnpack18(v)
			break
		}
		case 19:
		{
			return bitUnpack20(v)
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb31")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function bitUnpack18(v: $.Slice<number>): ringElement {
	if ($.sliceLen(v) != 576) {
		$.panic("mldsa: internal error: invalid bitUnpack18 input length")
	}
	const b: number = 131072
	const mask18: number = 262143
	let r: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let i = 0; i < 256; i = i + (4)) {
		let w0 = $.uint(($.uint($.arrayIndex(v!, 0), 32) | ((($.uint($.arrayIndex(v!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(v!, 2), 32) << 16) >>> 0)), 32)
		r[i + 0] = fieldSubToMontgomery(131072, $.uint(w0 & 262143, 32))
		let w1 = $.uint((($.uintShr($.uint($.arrayIndex(v!, 2), 32), 2, 32)) | ((($.uint($.arrayIndex(v!, 3), 32) << 6) >>> 0))) | ((($.uint($.arrayIndex(v!, 4), 32) << 14) >>> 0)), 32)
		r[i + 1] = fieldSubToMontgomery(131072, $.uint(w1 & 262143, 32))
		let w2 = $.uint((($.uintShr($.uint($.arrayIndex(v!, 4), 32), 4, 32)) | ((($.uint($.arrayIndex(v!, 5), 32) << 4) >>> 0))) | ((($.uint($.arrayIndex(v!, 6), 32) << 12) >>> 0)), 32)
		r[i + 2] = fieldSubToMontgomery(131072, $.uint(w2 & 262143, 32))
		let w3 = $.uint((($.uintShr($.uint($.arrayIndex(v!, 6), 32), 6, 32)) | ((($.uint($.arrayIndex(v!, 7), 32) << 2) >>> 0))) | ((($.uint($.arrayIndex(v!, 8), 32) << 10) >>> 0)), 32)
		r[i + 3] = fieldSubToMontgomery(131072, $.uint(w3 & 262143, 32))
		v = $.goSlice(v, globalThis.Math.trunc((4 * 18) / 8), undefined)
	}
	return $.cloneArrayValue(r, "mldsa.ringElement")
}

export function bitUnpack20(v: $.Slice<number>): ringElement {
	if ($.sliceLen(v) != 640) {
		$.panic("mldsa: internal error: invalid bitUnpack20 input length")
	}
	const b: number = 524288
	const mask20: number = 1048575
	let r: ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let i = 0; i < 256; i = i + (2)) {
		let w0 = $.uint(($.uint($.arrayIndex(v!, 0), 32) | ((($.uint($.arrayIndex(v!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(v!, 2), 32) << 16) >>> 0)), 32)
		r[i + 0] = fieldSubToMontgomery(524288, $.uint(w0 & 1048575, 32))
		let w1 = $.uint((($.uintShr($.uint($.arrayIndex(v!, 2), 32), 4, 32)) | ((($.uint($.arrayIndex(v!, 3), 32) << 4) >>> 0))) | ((($.uint($.arrayIndex(v!, 4), 32) << 12) >>> 0)), 32)
		r[i + 1] = fieldSubToMontgomery(524288, $.uint(w1 & 1048575, 32))
		v = $.goSlice(v, globalThis.Math.trunc((2 * 20) / 8), undefined)
	}
	return $.cloneArrayValue(r, "mldsa.ringElement")
}

export function sliceForAppend(_in: $.Slice<number>, n: number): [$.Slice<number>, $.Slice<number>] {
	let head: $.Slice<number> = null! as $.Slice<number>
	let tail: $.Slice<number> = null! as $.Slice<number>
	{
		let total = $.sliceLen(_in) + n
		if ($.cap(_in) >= total) {
			head = $.goSlice(_in, undefined, total)
		} else {
			head = $.makeSlice<number>(total, undefined, "byte")
			$.copy(head, _in)
		}
	}
	tail = $.goSlice(head, $.sliceLen(_in), undefined)
	return [head, tail]
}

export function constantTimeSelectLessOrEqual(a: number, b: number, yes: number, no: number): number {
	return $.int(constanttime.Select(constanttime.LessOrEq($.int(a), $.int(b)), $.int(yes), $.int(no)), 32)
}

export function constantTimeSelectEqual(a: number, b: number, yes: number, no: number): number {
	return $.uint(constanttime.Select(constanttime.Eq($.int(a, 32), $.int(b, 32)), $.int(yes), $.int(no)), 32)
}

export function constantTimeAbs(x: number): number {
	return $.uint(constantTimeSelectLessOrEqual(0, x, x, $.int(-x, 32)), 32)
}
