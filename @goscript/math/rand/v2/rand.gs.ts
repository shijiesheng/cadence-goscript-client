// Generated file based on rand.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_exp from "./exp.gs.ts"

import * as __goscript_normal from "./normal.gs.ts"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./exp.gs.ts"
import "./normal.gs.ts"

$.registerTypePackagePath("math/rand/v2", ["rand.Source", "rand.Rand", "rand.runtimeSource", "rand.intType"])

export type Source = {
	Uint64(): bigint | globalThis.Promise<bigint>
}

$.registerInterfaceType(
	"rand.Source",
	null,
	[$.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")])]
);

export type intType = any

$.registerInterfaceType(
	"rand.intType",
	null,
	[]
);

export class Rand {
	public get src(): Source | null {
		return this._fields.src
	}

	public set src(value: Source | null) {
		this._fields.src = value
	}

	public _fields: {
		src: Source | null
	}

	constructor(init?: Partial<{src?: Source | null}>, __goscriptValue?: boolean) {
		this._fields = {
			src: init?.src ?? (null! as Source | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Rand {
		return new Rand(this, true)
	}

	public __goscriptAssign(source: Rand): void {
		const target = this._fields
		const values = source._fields
		target.src = $.assignFieldValue(target.src, values.src, "rand.Source")
	}

	public async ExpFloat64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		while (true) {
			let u = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r))
			let j = $.uint(u, 32)
			let i = $.uint($.uint64Shr(u, 32n), 8)
			let x = j * $.arrayIndex(__goscript_exp.we, i)
			if (j < $.arrayIndex(__goscript_exp.ke, i)) {
				return x
			}
			if (i == 0) {
				return 192427936753276243/25000000000000000 - math.Log(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r)))
			}
			if ((globalThis.Math.fround($.arrayIndex(__goscript_exp.fe, i) + (globalThis.Math.fround(globalThis.Math.fround(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r))) * (globalThis.Math.fround($.arrayIndex(__goscript_exp.fe, ((i - 1) & 0xff)) - $.arrayIndex(__goscript_exp.fe, i))))))) < globalThis.Math.fround(math.Exp(-x))) {
				return x
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float32(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		// There are exactly 1<<24 float32s in [0,1). Use Intn(1<<24) / (1<<24).
		return globalThis.Math.fround(globalThis.Math.fround(($.uintShr((((await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint32() : Rand.prototype.Uint32.call(r)) << 8) >>> 0)), 8, 32))) / 1.6777216e+07)
	}

	public async Float64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		// There are exactly 1<<53 float64s in [0,1). Use Intn(1<<53) / (1<<53).
		return globalThis.Number($.uint64Shr(($.uint64Shl(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r)), 11n)), 11n)) / (9007199254740992)
	}

	public async Int(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.int($.uint($.uint64Shr(($.uint($.uint64Shl($.uint((__goscriptAwait = $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 64), 1n), 64)), 1n), 64))
	}

	public async Int32(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.int($.uint64Shr((__goscriptAwait = $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 33n), 32)
	}

	public async Int32N(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0) {
			$.panic("invalid argument to Int32N")
		}
		return $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))), 32)
	}

	public async Int64(): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.int64($.uint64AndNot((__goscriptAwait = $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 9223372036854775808n))
	}

	public async Int64N(n: bigint): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0n) {
			$.panic("invalid argument to Int64N")
		}
		return $.int64(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))))
	}

	public async IntN(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0) {
			$.panic("invalid argument to IntN")
		}
		return $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))))
	}

	public async N(__typeArgs: $.GenericTypeArgs | undefined, n: any): globalThis.Promise<any> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if ((n as any) <= (0 as any)) {
			$.panic("invalid argument to N")
		}
		return $.genericConvert<any>(__typeArgs, "Int", await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))))
	}

	public async NormFloat64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		while (true) {
			let u = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r))
			let j = $.int(u, 32)
			let i = $.uint64And(($.uint64Shr(u, 32n)), 127n)
			let x = j * $.arrayIndex(__goscript_normal.wn, globalThis.Number(i))
			if (__goscript_normal.absInt32(j) < $.arrayIndex(__goscript_normal.kn, globalThis.Number(i))) {

				return x
			}
			// Int64 returns a non-negative pseudo-random 63-bit integer as an int64.
			if (i == 0n) {

				while (true) {
					x = -math.Log(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r))) * (1.0 / 3442619855899/1000000000000)
					let y = -math.Log(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r)))
					if ((y + y) >= (x * x)) {
						break
					}
				}
				if (j > 0) {
					return 3442619855899/1000000000000 + x
				}
				return -3442619855899/1000000000000 - x
			}
			if ((globalThis.Math.fround($.arrayIndex(__goscript_normal.fn, globalThis.Number(i)) + (globalThis.Math.fround(globalThis.Math.fround(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r))) * (globalThis.Math.fround($.arrayIndex(__goscript_normal.fn, globalThis.Number($.uint64Sub(i, 1n))) - $.arrayIndex(__goscript_normal.fn, globalThis.Number(i)))))))) < globalThis.Math.fround(math.Exp((-.5 * x) * x))) {
				return x
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Perm(n: number): globalThis.Promise<$.Slice<number>> {
		const r: Rand | $.VarRef<Rand> | null = this;
		let p: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
		for (let __goscriptRangeTarget0 = p, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = i
		}
		await Rand.prototype.Shuffle.call(r, $.sliceLen(p), $.functionValue((i: number, j: number): void => {
			let __goscriptAssign0_0: number = $.arrayIndex(p!, j)
			let __goscriptAssign0_1: number = $.arrayIndex(p!, i)
			$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign0_0
			$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign0_1
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	public async Shuffle(n: number, swap: ((i: number, j: number) => void) | null): globalThis.Promise<void> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n < 0) {
			$.panic("invalid argument to Shuffle")
		}

		// Fisher-Yates shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
		// Shuffle really ought not be called with n that doesn't fit in 32 bits.
		// Not only will it take a very long time, but with 2³¹! possible permutations,
		// there's no way that any PRNG can have a big enough internal state to
		// generate even a minuscule percentage of the possible permutations.
		// Nevertheless, the right API signature accepts an int n, so handle it as best we can.
		for (let i = n - 1; i > 0; i--) {
			let j = $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(i + 1)) : Rand.prototype.uint64n.call(r, $.uint64(i + 1))))
			void (__goscriptAwait = swap!(i, j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Uint(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.uint((__goscriptAwait = $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 64)
	}

	public async Uint32(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.uint($.uint64Shr((__goscriptAwait = $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32n), 32)
	}

	public async Uint32N(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n == 0) {
			$.panic("invalid argument to Uint32N")
		}
		return $.uint(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))), 32)
	}

	public async Uint64(): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Uint64()
	}

	public async Uint64N(n: bigint): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n == 0n) {
			$.panic("invalid argument to Uint64N")
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n(n) : Rand.prototype.uint64n.call(r, n))
	}

	public async UintN(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n == 0) {
			$.panic("invalid argument to UintN")
		}
		return $.uint(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint64n($.uint64(n)) : Rand.prototype.uint64n.call(r, $.uint64(n))), 64)
	}

	public async uint32n(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if ($.uint((n & (((n - 1) >>> 0))), 32) == 0) {
			return $.uint($.uint(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r)), 32) & (((n - 1) >>> 0)), 32)
		}
		// On 64-bit systems we still use the uint64 code below because
		// the probability of a random uint64 lo being < a uint32 n is near zero,
		// meaning the unbiasing loop almost never runs.
		// On 32-bit systems, here we need to implement that same logic in 32-bit math,
		// both to preserve the exact output sequence observed on 64-bit machines
		// and to preserve the optimization that the unbiasing loop almost never runs.
		//
		// We want to compute
		// 	hi, lo := bits.Mul64(r.Uint64(), n)
		// In terms of 32-bit halves, this is:
		// 	x1:x0 := r.Uint64()
		// 	0:hi, lo1:lo0 := bits.Mul64(x1:x0, 0:n)
		// Writing out the multiplication in terms of bits.Mul32 allows
		// using direct hardware instructions and avoiding
		// the computations involving these zeros.
		let x = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r))
		let [lo1a, lo0] = bits.Mul32($.uint(x, 32), n)
		let [hi, lo1b] = bits.Mul32($.uint($.uint64Shr(x, 32n), 32), n)
		let [lo1, c] = bits.Add32(lo1a, lo1b, 0)
		hi = $.uint(hi + (c), 32)
		if ((lo1 == 0) && (lo0 < $.uint(n, 32))) {
			let n64 = $.uint64(n)
			let thresh = $.uint($.uint64Mod(-n64, n64), 32)
			while ((lo1 == 0) && (lo0 < thresh)) {
				let __goscriptShadow0 = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r))
				let __goscriptTuple0: any = bits.Mul32($.uint(__goscriptShadow0, 32), n)
				lo1a = __goscriptTuple0[0]
				lo0 = __goscriptTuple0[1]
				let __goscriptTuple1: any = bits.Mul32($.uint($.uint64Shr(__goscriptShadow0, 32n), 32), n)
				hi = __goscriptTuple1[0]
				lo1b = __goscriptTuple1[1]
				let __goscriptTuple2: any = bits.Add32(lo1a, lo1b, 0)
				lo1 = __goscriptTuple2[0]
				c = __goscriptTuple2[1]
				hi = $.uint(hi + (c), 32)
			}
		}
		return hi
	}

	public async uint64n(n: bigint): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (false && ($.uint64($.uint(n, 32)) == n)) {
			return $.uint64(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).uint32n($.uint(n, 32)) : Rand.prototype.uint32n.call(r, $.uint(n, 32))))
		}
		if (($.uint64And(n, ($.uint64Sub(n, 1n)))) == 0n) {
			return $.uint64And(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r)), ($.uint64Sub(n, 1n)))
		}

		// Suppose we have a uint64 x uniform in the range [0,2⁶⁴)
		// and want to reduce it to the range [0,n) preserving exact uniformity.
		// We can simulate a scaling arbitrary precision x * (n/2⁶⁴) by
		// the high bits of a double-width multiply of x*n, meaning (x*n)/2⁶⁴.
		// Since there are 2⁶⁴ possible inputs x and only n possible outputs,
		// the output is necessarily biased if n does not divide 2⁶⁴.
		// In general (x*n)/2⁶⁴ = k for x*n in [k*2⁶⁴,(k+1)*2⁶⁴).
		// There are either floor(2⁶⁴/n) or ceil(2⁶⁴/n) possible products
		// in that range, depending on k.
		// But suppose we reject the sample and try again when
		// x*n is in [k*2⁶⁴, k*2⁶⁴+(2⁶⁴%n)), meaning rejecting fewer than n possible
		// outcomes out of the 2⁶⁴.
		// Now there are exactly floor(2⁶⁴/n) possible ways to produce
		// each output value k, so we've restored uniformity.
		// To get valid uint64 math, 2⁶⁴ % n = (2⁶⁴ - n) % n = -n % n,
		// so the direct implementation of this algorithm would be:
		//
		//	hi, lo := bits.Mul64(r.Uint64(), n)
		//	thresh := -n % n
		//	for lo < thresh {
		//		hi, lo = bits.Mul64(r.Uint64(), n)
		//	}
		//
		// That still leaves an expensive 64-bit division that we would rather avoid.
		// We know that thresh < n, and n is usually much less than 2⁶⁴, so we can
		// avoid the last four lines unless lo < n.
		//
		// See also:
		// https://lemire.me/blog/2016/06/27/a-fast-alternative-to-the-modulo-reduction
		// https://lemire.me/blog/2016/06/30/fast-random-shuffling
		let [hi, lo] = bits.Mul64(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r)), n)
		if (lo < n) {
			let thresh = $.uint64Mod(-n, n)
			while (lo < thresh) {
				let __goscriptTuple3: any = bits.Mul64(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint64() : Rand.prototype.Uint64.call(r)), n)
				hi = __goscriptTuple3[0]
				lo = __goscriptTuple3[1]
			}
		}
		return hi
	}

	static __typeInfo = $.registerStructType(
		"rand.Rand",
		() => new Rand(),
		() => [$.methodSignature("ExpFloat64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")], true), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Int32", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int32N", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Int64N", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("IntN", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("N", [["n", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("NormFloat64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Perm", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Shuffle", [["n", /* @__PURE__ */ $.basicType("int")], ["swap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Uint", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Uint32N", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("Uint64N", [["n", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("UintN", [["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("uint32n", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("uint64n", [["n", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64")], true)],
		Rand,
		() => [/* @__PURE__ */ $.structField("src", "rand.Source", [0], 0, false, { pkgPath: "math/rand/v2" })]
	)
}

export class runtimeSource {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): runtimeSource {
		return new runtimeSource(this, true)
	}

	public __goscriptAssign(source: runtimeSource): void {
	}

	public Uint64(): bigint {
		return runtime_rand()
	}

	static __typeInfo = $.registerStructType(
		"rand.runtimeSource",
		() => new runtimeSource(),
		() => [$.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")])],
		runtimeSource,
		() => []
	)
}

export const is32bit: boolean = false

export function New(src: Source | null): Rand | $.VarRef<Rand> | null {
	return new Rand({src: src})
}

export let globalRand: Rand | $.VarRef<Rand> | null = new Rand({src: $.interfaceValue<Source | null>(new runtimeSource(undefined, true), "rand.runtimeSource", "rand.runtimeSource")})

export function __goscript_set_globalRand(__goscriptValue: Rand | $.VarRef<Rand> | null): void {
	globalRand = __goscriptValue
}

export function runtime_rand(): bigint {
	return globalThis.crypto.getRandomValues(new globalThis.BigUint64Array(1))[0]
}

export async function Int64(): globalThis.Promise<bigint> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Int64() : Rand.prototype.Int64.call(globalRand))
}

export async function Uint32(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Uint32() : Rand.prototype.Uint32.call(globalRand))
}

export async function Uint64N(n: bigint): globalThis.Promise<bigint> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Uint64N(n) : Rand.prototype.Uint64N.call(globalRand, n))
}

export async function Uint32N(n: number): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Uint32N(n) : Rand.prototype.Uint32N.call(globalRand, n))
}

export async function Uint64(): globalThis.Promise<bigint> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Uint64() : Rand.prototype.Uint64.call(globalRand))
}

export async function Int32(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Int32() : Rand.prototype.Int32.call(globalRand))
}

export async function Int(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Int() : Rand.prototype.Int.call(globalRand))
}

export async function Uint(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Uint() : Rand.prototype.Uint.call(globalRand))
}

export async function Int64N(n: bigint): globalThis.Promise<bigint> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Int64N(n) : Rand.prototype.Int64N.call(globalRand, n))
}

export async function Int32N(n: number): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Int32N(n) : Rand.prototype.Int32N.call(globalRand, n))
}

export async function IntN(n: number): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).IntN(n) : Rand.prototype.IntN.call(globalRand, n))
}

export async function UintN(n: number): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).UintN(n) : Rand.prototype.UintN.call(globalRand, n))
}

export async function N(__typeArgs: $.GenericTypeArgs | undefined, n: any): globalThis.Promise<any> {
	return (await Rand.prototype.N.call(globalRand, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Int: __typeArgs?.["Int"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, n) as any)
}

export async function Float64(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Float64() : Rand.prototype.Float64.call(globalRand))
}

export async function Float32(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Float32() : Rand.prototype.Float32.call(globalRand))
}

export async function Perm(n: number): globalThis.Promise<$.Slice<number>> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Perm(n) : Rand.prototype.Perm.call(globalRand, n))
}

export async function Shuffle(n: number, swap: ((i: number, j: number) => void) | null): globalThis.Promise<void> {
	await (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).Shuffle(n, swap) : Rand.prototype.Shuffle.call(globalRand, n, swap))
}

export async function NormFloat64(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).NormFloat64() : Rand.prototype.NormFloat64.call(globalRand))
}

export async function ExpFloat64(): globalThis.Promise<number> {
	return (globalRand !== null && (globalRand as any).__isVarRef !== true && (globalRand as any).__goValue === undefined ? ((globalRand as any) as Rand).ExpFloat64() : Rand.prototype.ExpFloat64.call(globalRand))
}

var __goscriptAwait: any
