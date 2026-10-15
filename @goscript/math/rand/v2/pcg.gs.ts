// Generated file based on pcg.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as bits from "@goscript/math/bits/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("math/rand/v2", ["rand.PCG"])

export class PCG {
	public get hi(): bigint {
		return this._fields.hi
	}

	public set hi(value: bigint) {
		this._fields.hi = value
	}

	public get lo(): bigint {
		return this._fields.lo
	}

	public set lo(value: bigint) {
		this._fields.lo = value
	}

	public _fields: {
		hi: bigint
		lo: bigint
	}

	constructor(init?: Partial<{hi?: bigint, lo?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			hi: init?.hi ?? (0n as bigint),
			lo: init?.lo ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PCG {
		return new PCG(this, true)
	}

	public __goscriptAssign(source: PCG): void {
		const target = this._fields
		const values = source._fields
		target.hi = values.hi
		target.lo = values.lo
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const p: PCG | $.VarRef<PCG> | null = this;
		const p$: PCG = p == null ? $.pointerTarget<PCG>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PCG>(p)
		b = $.appendSlice(b, $.stringToBytes("pcg:"), $.byteSliceHint)
		b = byteorder.BEAppendUint64(b, (p$ as PCG).hi)
		b = byteorder.BEAppendUint64(b, (p$ as PCG).lo)
		return [b, null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const p: PCG | $.VarRef<PCG> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as PCG).AppendBinary($.makeSlice<number>(0, 20, "byte")) : PCG.prototype.AppendBinary.call(p, $.makeSlice<number>(0, 20, "byte")))
	}

	public Seed(seed1: bigint, seed2: bigint): void {
		let p: PCG | $.VarRef<PCG> | null = this;
		const p$: PCG = p == null ? $.pointerTarget<PCG>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PCG>(p);
		;(p$ as PCG).hi = seed1;
		;(p$ as PCG).lo = seed2
	}

	public Uint64(): bigint {
		const p: PCG | $.VarRef<PCG> | null = this;
		let [hi, lo] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as PCG).next() : PCG.prototype.next.call(p))

		// XSL-RR would be
		//	hi, lo := p.next()
		//	return bits.RotateLeft64(lo^hi, -int(hi>>58))
		// but Numpy uses DXSM and O'Neill suggests doing the same.
		// See https://github.com/golang/go/issues/21835#issuecomment-739065688
		// and following comments.

		// DXSM "double xorshift multiply"
		// https://github.com/imneme/pcg-cpp/blob/428802d1a5/include/pcg_random.hpp#L1015

		// https://github.com/imneme/pcg-cpp/blob/428802d1a5/include/pcg_random.hpp#L176
		const cheapMul: number = 15750249268501108917
		hi = $.uint64Xor(hi, $.uint64Shr(hi, 32n))
		hi = $.uint64Mul(hi, 15750249268501108917n)
		hi = $.uint64Xor(hi, $.uint64Shr(hi, 48n))
		hi = $.uint64Mul(hi, ($.uint64Or(lo, 1n)))
		return hi
	}

	public UnmarshalBinary(data: $.Slice<number>): $.GoError {
		let p: PCG | $.VarRef<PCG> | null = this;
		const p$: PCG = p == null ? $.pointerTarget<PCG>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PCG>(p)
		if (($.sliceLen(data) != 20) || (!$.stringEqual($.bytesToString($.goSlice(data, undefined, 4)), "pcg:"))) {
			return errUnmarshalPCG
		}
		;(p$ as PCG).hi = byteorder.BEUint64($.goSlice(data, 4, undefined));
		;(p$ as PCG).lo = byteorder.BEUint64($.goSlice(data, 4 + 8, undefined))
		return null
	}

	public next(): [bigint, bigint] {
		let p: PCG | $.VarRef<PCG> | null = this;
		let hi: bigint = 0n
		let lo: bigint = 0n
		const p$: PCG = p == null ? $.pointerTarget<PCG>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PCG>(p)
		// https://github.com/imneme/pcg-cpp/blob/428802d1a5/include/pcg_random.hpp#L161
		//
		// Numpy's PCG multiplies by the 64-bit value cheapMul
		// instead of the 128-bit value used here and in the official PCG code.
		// This does not seem worthwhile, at least for Go: not having any high
		// bits in the multiplier reduces the effect of low bits on the highest bits,
		// and it only saves 1 multiply out of 3.
		// (On 32-bit systems, it saves 1 out of 6, since Mul64 is doing 4.)
		const mulHi: number = 2549297995355413924
		const mulLo: number = 4865540595714422341
		const incHi: number = 6364136223846793005
		const incLo: number = 1442695040888963407

		// state = state * mul + inc
		let __goscriptTuple0: any = bits.Mul64((p$ as PCG).lo, 4865540595714422341n)
		hi = __goscriptTuple0[0]
		lo = __goscriptTuple0[1]
		hi = $.uint64Add(hi, $.uint64Add(($.uint64Mul((p$ as PCG).hi, 4865540595714422341n)), ($.uint64Mul((p$ as PCG).lo, 2549297995355413924n))))
		let __goscriptTuple1: any = bits.Add64(lo, 1442695040888963407n, 0n)
		lo = __goscriptTuple1[0]
		let c = __goscriptTuple1[1]
		let __goscriptTuple2: any = bits.Add64(hi, 6364136223846793005n, c)
		hi = __goscriptTuple2[0];
		;(p$ as PCG).lo = lo;
		;(p$ as PCG).hi = hi
		return [hi, lo]
	}

	static __typeInfo = $.registerStructType(
		"rand.PCG",
		() => new PCG(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Seed", [["seed1", /* @__PURE__ */ $.basicType("uint64")], ["seed2", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("next", [], [["hi", /* @__PURE__ */ $.basicType("uint64")], ["lo", /* @__PURE__ */ $.basicType("uint64")]], true)],
		PCG,
		() => [/* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "math/rand/v2" }), /* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "math/rand/v2" })]
	)
}

export function NewPCG(seed1: bigint, seed2: bigint): PCG | $.VarRef<PCG> | null {
	return new PCG({hi: seed1, lo: seed2})
}

export let errUnmarshalPCG: $.GoError = errors.New("invalid PCG encoding")

export function __goscript_set_errUnmarshalPCG(__goscriptValue: $.GoError): void {
	errUnmarshalPCG = __goscriptValue
}
