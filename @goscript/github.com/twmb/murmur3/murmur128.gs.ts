// Generated file based on murmur128.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hash from "@goscript/hash/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_murmur from "./murmur.gs.ts"
import "@goscript/hash/index.js"
import "@goscript/math/bits/index.js"
import "./murmur.gs.ts"

$.registerTypePackagePath("github.com/twmb/murmur3", ["murmur3.Hash128", "murmur3.digest128"])

export type Hash128 = {
	BlockSize(): number | globalThis.Promise<number>
	Reset(): void
	Size(): number | globalThis.Promise<number>
	Sum(b: $.Slice<number>): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	Sum128(): [bigint, bigint]
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"murmur3.Hash128",
	null,
	[$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Sum128", [], [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class digest128 {
	public get digest(): __goscript_murmur.digest {
		return this._fields.digest
	}

	public set digest(value: __goscript_murmur.digest) {
		this._fields.digest = value
	}

	public get seed1(): bigint {
		return this._fields.seed1
	}

	public set seed1(value: bigint) {
		this._fields.seed1 = value
	}

	public get seed2(): bigint {
		return this._fields.seed2
	}

	public set seed2(value: bigint) {
		this._fields.seed2 = value
	}

	public get h1(): bigint {
		return this._fields.h1
	}

	public set h1(value: bigint) {
		this._fields.h1 = value
	}

	public get h2(): bigint {
		return this._fields.h2
	}

	public set h2(value: bigint) {
		this._fields.h2 = value
	}

	public _fields: {
		digest: __goscript_murmur.digest
		seed1: bigint
		seed2: bigint
		h1: bigint
		h2: bigint
	}

	constructor(init?: Partial<{digest?: __goscript_murmur.digest, seed1?: bigint, seed2?: bigint, h1?: bigint, h2?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			digest: init?.digest ? init.digest.clone() : new __goscript_murmur.digest(undefined, true),
			seed1: init?.seed1 ?? (0n as bigint),
			seed2: init?.seed2 ?? (0n as bigint),
			h1: init?.h1 ?? (0n as bigint),
			h2: init?.h2 ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digest128 {
		return new digest128(this, true)
	}

	public __goscriptAssign(source: digest128): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.digest, values.digest)
		target.seed1 = values.seed1
		target.seed2 = values.seed2
		target.h1 = values.h1
		target.h2 = values.h2
	}

	public Size(): number {
		const d: digest128 | $.VarRef<digest128> | null = this;
		return 16
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const d: digest128 | $.VarRef<digest128> | null = this;
		let [h1, h2] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest128).Sum128() : digest128.prototype.Sum128.call(d))
		return $.append(b, $.uint($.uint($.uint64Shr(h1, 56n), 8), 8), $.uint($.uint($.uint64Shr(h1, 48n), 8), 8), $.uint($.uint($.uint64Shr(h1, 40n), 8), 8), $.uint($.uint($.uint64Shr(h1, 32n), 8), 8), $.uint($.uint($.uint64Shr(h1, 24n), 8), 8), $.uint($.uint($.uint64Shr(h1, 16n), 8), 8), $.uint($.uint($.uint64Shr(h1, 8n), 8), 8), $.uint($.uint(h1, 8), 8), $.uint($.uint($.uint64Shr(h2, 56n), 8), 8), $.uint($.uint($.uint64Shr(h2, 48n), 8), 8), $.uint($.uint($.uint64Shr(h2, 40n), 8), 8), $.uint($.uint($.uint64Shr(h2, 32n), 8), 8), $.uint($.uint($.uint64Shr(h2, 24n), 8), 8), $.uint($.uint($.uint64Shr(h2, 16n), 8), 8), $.uint($.uint($.uint64Shr(h2, 8n), 8), 8), $.uint($.uint(h2, 8), 8), $.byteSliceHint)
	}

	public Sum128(): [bigint, bigint] {
		const d: digest128 | $.VarRef<digest128> | null = this;
		let h1: bigint = 0n
		let h2: bigint = 0n
		const d$: digest128 = d == null ? $.pointerTarget<digest128>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest128>(d)

		let __goscriptAssign0_0: bigint = (d$ as digest128).h1
		let __goscriptAssign0_1: bigint = (d$ as digest128).h2
		h1 = __goscriptAssign0_0
		h2 = __goscriptAssign0_1

		let k1: bigint = 0n
		let k2: bigint = 0n
		switch ($.sliceLen((d$ as digest128).digest.tail) & 15) {
			case 15:
			{
				k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 14)), (2 ** 48)))
			}
			case 14:
			{
				k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 13)), (2 ** 40)))
			}
			case 13:
			{
				k2 = $.uint64Xor(k2, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 12)), (2 ** 32)))
			}
			case 12:
			{
				k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 11)), 24n))
			}
			case 11:
			{
				k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 10)), 16n))
			}
			case 10:
			{
				k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 9)), 8n))
			}
			case 9:
			{
				k2 = $.uint64Xor(k2, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 8)), 0n))

				k2 = $.uint64Mul(k2, 5545529020109919103n)
				k2 = bits.RotateLeft64(k2, 33)
				k2 = $.uint64Mul(k2, 9782798678568883157n)
				h2 = $.uint64Xor(h2, k2)
			}
			case 8:
			{
				k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 7)), (2 ** 56)))
			}
			case 7:
			{
				k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 6)), (2 ** 48)))
			}
			case 6:
			{
				k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 5)), (2 ** 40)))
			}
			case 5:
			{
				k1 = $.uint64Xor(k1, $.uint64Mul($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 4)), (2 ** 32)))
			}
			case 4:
			{
				k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 3)), 24n))
			}
			case 3:
			{
				k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 2)), 16n))
			}
			case 2:
			{
				k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 1)), 8n))
			}
			case 1:
			{
				k1 = $.uint64Xor(k1, $.uint64Shl($.uint64($.arrayIndex((d$ as digest128).digest.tail!, 0)), 0n))
				k1 = $.uint64Mul(k1, 9782798678568883157n)
				k1 = bits.RotateLeft64(k1, 31)
				k1 = $.uint64Mul(k1, 5545529020109919103n)
				h1 = $.uint64Xor(h1, k1)
				break
			}
		}

		h1 = $.uint64Xor(h1, $.uint64((d$ as digest128).digest.clen))
		h2 = $.uint64Xor(h2, $.uint64((d$ as digest128).digest.clen))

		h1 = $.uint64Add(h1, h2)
		h2 = $.uint64Add(h2, h1)

		h1 = fmix64(h1)
		h2 = fmix64(h2)

		h1 = $.uint64Add(h1, h2)
		h2 = $.uint64Add(h2, h1)

		return [h1, h2]
	}

	public bmix(p: $.Slice<number>): $.Slice<number> {
		let d: digest128 | $.VarRef<digest128> | null = this;
		let tail: $.Slice<number> = null! as $.Slice<number>
		const d$: digest128 = d == null ? $.pointerTarget<digest128>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest128>(d)
		let h1 = (d$ as digest128).h1
		let h2 = (d$ as digest128).h2

		while ($.sliceLen(p) >= 16) {
			let k1 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(p!, 0)), ($.uint64Shl($.uint64($.arrayIndex(p!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(p!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(p!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(p!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 7)), (2 ** 56))))
			let k2 = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(p!, 8)), ($.uint64Shl($.uint64($.arrayIndex(p!, 9)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(p!, 10)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(p!, 11)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(p!, 12)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 13)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 14)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(p!, 15)), (2 ** 56))))
			p = $.goSlice(p, 16, undefined)

			k1 = $.uint64Mul(k1, 9782798678568883157n)
			k1 = bits.RotateLeft64(k1, 31)
			k1 = $.uint64Mul(k1, 5545529020109919103n)
			h1 = $.uint64Xor(h1, k1)

			h1 = bits.RotateLeft64(h1, 27)
			h1 = $.uint64Add(h1, h2)
			h1 = $.uint64Add(($.uint64Mul(h1, 5n)), 1390208809n)

			k2 = $.uint64Mul(k2, 5545529020109919103n)
			k2 = bits.RotateLeft64(k2, 33)
			k2 = $.uint64Mul(k2, 9782798678568883157n)
			h2 = $.uint64Xor(h2, k2)

			h2 = bits.RotateLeft64(h2, 31)
			h2 = $.uint64Add(h2, h1)
			h2 = $.uint64Add(($.uint64Mul(h2, 5n)), 944331445n)
		}
		let __goscriptAssign1_0: bigint = h1
		let __goscriptAssign1_1: bigint = h2;
		;(d$ as digest128).h1 = __goscriptAssign1_0;
		;(d$ as digest128).h2 = __goscriptAssign1_1
		return p
	}

	public reset(): void {
		let d: digest128 | $.VarRef<digest128> | null = this;
		const d$: digest128 = d == null ? $.pointerTarget<digest128>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest128>(d)
		let __goscriptAssign2_0: bigint = (d$ as digest128).seed1
		let __goscriptAssign2_1: bigint = (d$ as digest128).seed2;
		;(d$ as digest128).h1 = __goscriptAssign2_0;
		;(d$ as digest128).h2 = __goscriptAssign2_1
	}

	public BlockSize(): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).BlockSize()
	}

	public Reset(): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).Reset()
	}

	public Write(p: any): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"murmur3.digest128",
		() => new digest128(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Sum128", [], [["h1", /* @__PURE__ */ $.basicType("uint64")], ["h2", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("bmix", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("reset", [], [], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		digest128,
		() => [/* @__PURE__ */ $.structField("digest", "murmur3.digest", [0], 0, false, { pkgPath: "github.com/twmb/murmur3", anonymous: true }), /* @__PURE__ */ $.structField("seed1", /* @__PURE__ */ $.basicType("uint64"), [1], 64, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("seed2", /* @__PURE__ */ $.basicType("uint64"), [2], 72, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("h1", /* @__PURE__ */ $.basicType("uint64"), [3], 80, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("h2", /* @__PURE__ */ $.basicType("uint64"), [4], 88, false, { pkgPath: "github.com/twmb/murmur3" })]
	)
}

export const c1_128: number = 9782798678568883157

export const c2_128: number = 5545529020109919103

export function SeedNew128(seed1: bigint, seed2: bigint): Hash128 | null {
	let d: digest128 | $.VarRef<digest128> | null = new digest128({seed1: seed1, seed2: seed2})
	$.pointerValue<digest128>(d).digest.bmixer = $.interfaceValue<__goscript_murmur.bmixer | null>(d, "*murmur3.digest128", /* @__PURE__ */ $.pointerType("murmur3.digest128"))
	$.pointerValue<digest128>(d).digest.Reset()
	return $.interfaceValue<Hash128 | null>(d, "*murmur3.digest128", /* @__PURE__ */ $.pointerType("murmur3.digest128"))
}

export function New128(): Hash128 | null {
	return SeedNew128(0n, 0n)
}

export function fmix64(k: bigint): bigint {
	k = $.uint64Xor(k, $.uint64Shr(k, 33n))
	k = $.uint64Mul(k, 18397679294719823053n)
	k = $.uint64Xor(k, $.uint64Shr(k, 33n))
	k = $.uint64Mul(k, 14181476777654086739n)
	k = $.uint64Xor(k, $.uint64Shr(k, 33n))
	return k
}
