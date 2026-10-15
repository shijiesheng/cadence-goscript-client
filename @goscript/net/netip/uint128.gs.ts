// Generated file based on uint128.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("net/netip", ["netip.uint128"])

export class uint128 {
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

	public clone(): uint128 {
		return new uint128(this, true)
	}

	public __goscriptAssign(source: uint128): void {
		const target = this._fields
		const values = source._fields
		target.hi = values.hi
		target.lo = values.lo
	}

	public addOne(): uint128 {
		const u = this;
		let __goscriptTuple0: any = bits.Add64(u.lo, 1n, 0n)
		let lo = __goscriptTuple0[0]
		let carry = __goscriptTuple0[1]
		return new uint128({hi: $.uint64Add(u.hi, carry), lo: lo}, true)
	}

	public and(m: uint128): uint128 {
		const u = this;
		return new uint128({hi: $.uint64And(u.hi, m.hi), lo: $.uint64And(u.lo, m.lo)}, true)
	}

	public bitsClearedFrom(bit: number): uint128 {
		const u = this;
		return u.and(mask6($.int(bit)))
	}

	public bitsSetFrom(bit: number): uint128 {
		const u = this;
		return u.or(mask6($.int(bit)).not())
	}

	public halves(): ($.VarRef<bigint> | null)[] {
		const u: uint128 | $.VarRef<uint128> | null = this;
		const u$: uint128 = u == null ? $.pointerTarget<uint128>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<uint128>(u)
		return $.arrayValue([$.fieldRef((u$ as uint128)._fields, "hi"), $.fieldRef((u$ as uint128)._fields, "lo")])
	}

	public isZero(): boolean {
		const u = this;
		return ($.uint64Or(u.hi, u.lo)) == 0n
	}

	public not(): uint128 {
		const u = this;
		return new uint128({hi: $.uint64Xor(u.hi, -1n), lo: $.uint64Xor(u.lo, -1n)}, true)
	}

	public or(m: uint128): uint128 {
		const u = this;
		return new uint128({hi: $.uint64Or(u.hi, m.hi), lo: $.uint64Or(u.lo, m.lo)}, true)
	}

	public subOne(): uint128 {
		const u = this;
		let __goscriptTuple1: any = bits.Sub64(u.lo, 1n, 0n)
		let lo = __goscriptTuple1[0]
		let borrow = __goscriptTuple1[1]
		return new uint128({hi: $.uint64Sub(u.hi, borrow), lo: lo}, true)
	}

	public xor(m: uint128): uint128 {
		const u = this;
		return new uint128({hi: $.uint64Xor(u.hi, m.hi), lo: $.uint64Xor(u.lo, m.lo)}, true)
	}

	static __typeInfo = $.registerStructType(
		"netip.uint128",
		() => new uint128(),
		() => [$.methodSignature("addOne", [], ["netip.uint128"]), $.methodSignature("and", [["m", "netip.uint128"]], ["netip.uint128"]), $.methodSignature("bitsClearedFrom", [["bit", /* @__PURE__ */ $.basicType("uint8")]], ["netip.uint128"]), $.methodSignature("bitsSetFrom", [["bit", /* @__PURE__ */ $.basicType("uint8")]], ["netip.uint128"]), $.methodSignature("halves", [], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), 2)], true), $.methodSignature("isZero", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("not", [], ["netip.uint128"]), $.methodSignature("or", [["m", "netip.uint128"]], ["netip.uint128"]), $.methodSignature("subOne", [], ["netip.uint128"]), $.methodSignature("xor", [["m", "netip.uint128"]], ["netip.uint128"])],
		uint128,
		() => [/* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "net/netip" }), /* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "net/netip" })]
	)
}

export function mask6(n: number): uint128 {
	return new uint128({hi: $.uint64Xor(($.uint64Shr(18446744073709551615n, n)), -1n), lo: $.uint64Shl(18446744073709551615n, (128 - n))}, true)
}
