// Generated file based on murmur32.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hash from "@goscript/hash/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_murmur from "./murmur.gs.ts"
import "@goscript/hash/index.js"
import "@goscript/math/bits/index.js"
import "./murmur.gs.ts"

$.registerTypePackagePath("github.com/twmb/murmur3", ["murmur3.digest32"])

export class digest32 {
	public get digest(): __goscript_murmur.digest {
		return this._fields.digest
	}

	public set digest(value: __goscript_murmur.digest) {
		this._fields.digest = value
	}

	public get seed(): number {
		return this._fields.seed
	}

	public set seed(value: number) {
		this._fields.seed = value
	}

	public get h1(): number {
		return this._fields.h1
	}

	public set h1(value: number) {
		this._fields.h1 = value
	}

	public _fields: {
		digest: __goscript_murmur.digest
		seed: number
		h1: number
	}

	constructor(init?: Partial<{digest?: __goscript_murmur.digest, seed?: number, h1?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			digest: init?.digest ? init.digest.clone() : new __goscript_murmur.digest(undefined, true),
			seed: init?.seed ?? (0 as number),
			h1: init?.h1 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digest32 {
		return new digest32(this, true)
	}

	public __goscriptAssign(source: digest32): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.digest, values.digest)
		target.seed = values.seed
		target.h1 = values.h1
	}

	public Size(): number {
		const d: digest32 | $.VarRef<digest32> | null = this;
		return 4
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const d: digest32 | $.VarRef<digest32> | null = this;
		let h = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest32).Sum32() : digest32.prototype.Sum32.call(d))
		return $.append(b, $.uint($.uint($.uintShr(h, 24, 32), 8), 8), $.uint($.uint($.uintShr(h, 16, 32), 8), 8), $.uint($.uint($.uintShr(h, 8, 32), 8), 8), $.uint($.uint(h, 8), 8), $.byteSliceHint)
	}

	public Sum32(): number {
		const d: digest32 | $.VarRef<digest32> | null = this;
		let h1: number = 0
		const d$: digest32 = d == null ? $.pointerTarget<digest32>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest32>(d)

		h1 = (d$ as digest32).h1
		let k1: number = 0
		switch ($.sliceLen((d$ as digest32).digest.tail) & 3) {
			case 3:
			{
				k1 = k1 ^ ($.uint((($.uint($.arrayIndex((d$ as digest32).digest.tail!, 2), 32) << 16) >>> 0), 32))
			}
			case 2:
			{
				k1 = k1 ^ ($.uint((($.uint($.arrayIndex((d$ as digest32).digest.tail!, 1), 32) << 8) >>> 0), 32))
			}
			case 1:
			{
				k1 = k1 ^ ($.uint($.arrayIndex((d$ as digest32).digest.tail!, 0), 32))
				k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
				k1 = bits.RotateLeft32(k1, 15)
				k1 = globalThis.Math.imul(k1, 461845907) >>> 0
				h1 = h1 ^ (k1)
				break
			}
		}

		h1 = h1 ^ ($.uint((d$ as digest32).digest.clen, 32))

		h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))
		h1 = globalThis.Math.imul(h1, 0x85ebca6b) >>> 0
		h1 = h1 ^ ($.uint($.uintShr(h1, 13, 32), 32))
		h1 = globalThis.Math.imul(h1, 0xc2b2ae35) >>> 0
		h1 = h1 ^ ($.uint($.uintShr(h1, 16, 32), 32))

		return h1
	}

	public bmix(p: $.Slice<number>): $.Slice<number> {
		let d: digest32 | $.VarRef<digest32> | null = this;
		let tail: $.Slice<number> = null! as $.Slice<number>
		const d$: digest32 = d == null ? $.pointerTarget<digest32>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest32>(d)
		let h1 = (d$ as digest32).h1

		while ($.sliceLen(p) >= 4) {
			let k1 = $.uint((($.uint($.arrayIndex(p!, 0), 32) | ((($.uint($.arrayIndex(p!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(p!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(p!, 3), 32) << 24) >>> 0)), 32)
			p = $.goSlice(p, 4, undefined)

			k1 = globalThis.Math.imul(k1, 3432918353) >>> 0
			k1 = bits.RotateLeft32(k1, 15)
			k1 = globalThis.Math.imul(k1, 461845907) >>> 0

			h1 = h1 ^ (k1)
			h1 = bits.RotateLeft32(h1, 13)
			h1 = $.uint((((globalThis.Math.imul(h1, 5) >>> 0) + 0xe6546b64) >>> 0), 32)
		}
		;(d$ as digest32).h1 = h1
		return p
	}

	public reset(): void {
		let d: digest32 | $.VarRef<digest32> | null = this;
		const d$: digest32 = d == null ? $.pointerTarget<digest32>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest32>(d);
		;(d$ as digest32).h1 = (d$ as digest32).seed
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
		"murmur3.digest32",
		() => new digest32(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Sum32", [], [["h1", /* @__PURE__ */ $.basicType("uint32")]], true), $.methodSignature("bmix", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("reset", [], [], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		digest32,
		() => [/* @__PURE__ */ $.structField("digest", "murmur3.digest", [0], 0, false, { pkgPath: "github.com/twmb/murmur3", anonymous: true }), /* @__PURE__ */ $.structField("seed", /* @__PURE__ */ $.basicType("uint32"), [1], 64, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("h1", /* @__PURE__ */ $.basicType("uint32"), [2], 68, false, { pkgPath: "github.com/twmb/murmur3" })]
	)
}

export const c1_32: number = 3432918353

export const c2_32: number = 461845907

export function SeedNew32(seed: number): hash.Hash32 | null {
	let d: digest32 | $.VarRef<digest32> | null = new digest32({seed: seed})
	$.pointerValue<digest32>(d).digest.bmixer = $.interfaceValue<__goscript_murmur.bmixer | null>(d, "*murmur3.digest32", /* @__PURE__ */ $.pointerType("murmur3.digest32"))
	$.pointerValue<digest32>(d).digest.Reset()
	return $.interfaceValue<hash.Hash32 | null>(d, "*murmur3.digest32", /* @__PURE__ */ $.pointerType("murmur3.digest32"))
}

export function New32(): hash.Hash32 | null {
	return SeedNew32(0)
}
