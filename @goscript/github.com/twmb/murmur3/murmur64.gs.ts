// Generated file based on murmur64.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hash from "@goscript/hash/index.js"

import * as __goscript_murmur from "./murmur.gs.ts"

import * as __goscript_murmur128 from "./murmur128.gs.ts"

import * as __goscript_murmur128_gen from "./murmur128_gen.gs.ts"
import "@goscript/hash/index.js"
import "./murmur.gs.ts"
import "./murmur128.gs.ts"
import "./murmur128_gen.gs.ts"

$.registerTypePackagePath("github.com/twmb/murmur3", ["murmur3.digest64"])

export class digest64 {
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

	public clone(): digest64 {
		return new digest64(this, true)
	}

	public __goscriptAssign(source: digest64): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.digest, values.digest)
		target.seed1 = values.seed1
		target.seed2 = values.seed2
		target.h1 = values.h1
		target.h2 = values.h2
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const d: digest64 | $.VarRef<digest64> | null = this;
		let h1 = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest64).Sum64() : digest64.prototype.Sum64.call(d))
		return $.append(b, $.uint($.uint($.uint64Shr(h1, 56n), 8), 8), $.uint($.uint($.uint64Shr(h1, 48n), 8), 8), $.uint($.uint($.uint64Shr(h1, 40n), 8), 8), $.uint($.uint($.uint64Shr(h1, 32n), 8), 8), $.uint($.uint($.uint64Shr(h1, 24n), 8), 8), $.uint($.uint($.uint64Shr(h1, 16n), 8), 8), $.uint($.uint($.uint64Shr(h1, 8n), 8), 8), $.uint($.uint(h1, 8), 8), $.byteSliceHint)
	}

	public Sum64(): bigint {
		const d: digest64 | $.VarRef<digest64> | null = this;
		let [h1, ] = __goscript_murmur128.digest128.prototype.Sum128.call($.unsafePointerCast<__goscript_murmur128.digest128 | $.VarRef<__goscript_murmur128.digest128> | null>(d, __goscript_murmur128.digest128))
		return h1
	}

	public BlockSize(): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).BlockSize()
	}

	public Reset(): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).Reset()
	}

	public Size(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_murmur.digest>(this.digest).bmixer).Size()
	}

	public Write(p: any): any {
		return $.pointerValue<__goscript_murmur.digest>(this.digest).Write(p)
	}

	public bmix(p: any): any {
		return $.pointerValue<any>($.pointerValue<__goscript_murmur.digest>(this.digest).bmixer).bmix(p)
	}

	public reset(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_murmur.digest>(this.digest).bmixer).reset()
	}

	static __typeInfo = $.registerStructType(
		"murmur3.digest64",
		() => new digest64(),
		() => [$.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Sum64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("bmix", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("reset")],
		digest64,
		() => [/* @__PURE__ */ $.structField("digest", "murmur3.digest", [0], 0, false, { pkgPath: "github.com/twmb/murmur3", anonymous: true }), /* @__PURE__ */ $.structField("seed1", /* @__PURE__ */ $.basicType("uint64"), [1], 64, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("seed2", /* @__PURE__ */ $.basicType("uint64"), [2], 72, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("h1", /* @__PURE__ */ $.basicType("uint64"), [3], 80, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("h2", /* @__PURE__ */ $.basicType("uint64"), [4], 88, false, { pkgPath: "github.com/twmb/murmur3" })]
	)
}

export function SeedNew64(seed: bigint): hash.Hash64 | null {
	return $.interfaceValue<hash.Hash64 | null>($.unsafePointerCast<digest64 | $.VarRef<digest64> | null>($.mustTypeAssert<__goscript_murmur128.digest128 | $.VarRef<__goscript_murmur128.digest128> | null>(__goscript_murmur128.SeedNew128(seed, seed), /* @__PURE__ */ $.pointerType("murmur3.digest128")), digest64), "*murmur3.digest64", /* @__PURE__ */ $.pointerType("murmur3.digest64"))
}

export function New64(): hash.Hash64 | null {
	return SeedNew64(0n)
}

export function Sum64(data: $.Slice<number>): bigint {
	let [h1, ] = __goscript_murmur128_gen.Sum128(data)
	return h1
}

export function SeedSum64(seed: bigint, data: $.Slice<number>): bigint {
	let [h1, ] = __goscript_murmur128_gen.SeedSum128(seed, seed, data)
	return h1
}

export function StringSum64(data: string): bigint {
	let [h1, ] = __goscript_murmur128_gen.StringSum128(data)
	return h1
}

export function SeedStringSum64(seed: bigint, data: string): bigint {
	let [h1, ] = __goscript_murmur128_gen.SeedStringSum128(seed, seed, data)
	return h1
}
