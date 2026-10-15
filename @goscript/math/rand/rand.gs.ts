// Generated file based on rand.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_exp from "./exp.gs.ts"

import * as __goscript_normal from "./normal.gs.ts"

import * as __goscript_rng from "./rng.gs.ts"
import "@goscript/math/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./exp.gs.ts"
import "./normal.gs.ts"
import "./rng.gs.ts"

$.registerTypePackagePath("math/rand", ["rand.Source", "rand.Source64", "rand.Rand", "rand.runtimeSource", "rand.lockedSource"])

export type Source = {
	Int63(): bigint | globalThis.Promise<bigint>
	Seed(seed: bigint): void
}

$.registerInterfaceType(
	"rand.Source",
	null,
	[$.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.basicType("int64")]])]
);

export type Source64 = {
	Int63(): bigint | globalThis.Promise<bigint>
	Seed(seed: bigint): void
	Uint64(): bigint | globalThis.Promise<bigint>
}

$.registerInterfaceType(
	"rand.Source64",
	null,
	[$.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")])]
);

export class Rand {
	public get src(): Source | null {
		return this._fields.src
	}

	public set src(value: Source | null) {
		this._fields.src = value
	}

	public get s64(): Source64 | null {
		return this._fields.s64
	}

	public set s64(value: Source64 | null) {
		this._fields.s64 = value
	}

	// readVal contains remainder of 63-bit integer used for bytes
	// generation during most recent Read call.
	// It is saved so next Read call can start where the previous
	// one finished.
	public get readVal(): bigint {
		return this._fields.readVal
	}

	public set readVal(value: bigint) {
		this._fields.readVal = value
	}

	// readPos indicates the number of low-order bytes of readVal
	// that are still valid.
	public get readPos(): number {
		return this._fields.readPos
	}

	public set readPos(value: number) {
		this._fields.readPos = value
	}

	public _fields: {
		src: Source | null
		s64: Source64 | null
		readVal: bigint
		readPos: number
	}

	constructor(init?: Partial<{src?: Source | null, s64?: Source64 | null, readVal?: bigint, readPos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			src: init?.src ?? (null! as Source | null),
			s64: init?.s64 ?? (null! as Source64 | null),
			readVal: init?.readVal ?? (0n as bigint),
			readPos: init?.readPos ?? (0 as number)
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
		target.s64 = $.assignFieldValue(target.s64, values.s64, "rand.Source64")
		target.readVal = values.readVal
		target.readPos = values.readPos
	}

	public async ExpFloat64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		while (true) {
			let j = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint32() : Rand.prototype.Uint32.call(r))
			let i = $.uint(j & 0xFF, 32)
			let x = j * $.arrayIndex(__goscript_exp.we, i)
			if (j < $.arrayIndex(__goscript_exp.ke, i)) {
				return x
			}
			if (i == 0) {
				return 192427936753276243/25000000000000000 - math.Log(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r)))
			}
			if ((globalThis.Math.fround($.arrayIndex(__goscript_exp.fe, i) + (globalThis.Math.fround(globalThis.Math.fround(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r))) * (globalThis.Math.fround($.arrayIndex(__goscript_exp.fe, ((i - 1) >>> 0)) - $.arrayIndex(__goscript_exp.fe, i))))))) < globalThis.Math.fround(math.Exp(-x))) {
				return x
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float32(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		// Same rationale as in Float64: we want to preserve the Go 1 value
		// stream except we want to fix it not to return 1.0
		// This only happens 1/2²⁴ of the time (plus the 1/2⁵³ of the time in Float64).
		again: while (true) {
			var f = globalThis.Math.fround(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r)))

			if (f == 1) {
				continue again
			}
			return f
			break
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		// A clearer, simpler implementation would be:
		//	return float64(r.Int63n(1<<53)) / (1<<53)
		// However, Go 1 shipped with
		//	return float64(r.Int63()) / (1 << 63)
		// and we want to preserve that value stream.
		//
		// There is one bug in the value stream: r.Int63() may be so close
		// to 1<<63 that the division rounds up to 1.0, and we've guaranteed
		// that the result is always less than 1.0.
		//
		// We tried to fix this by mapping 1.0 back to 0.0, but since float64
		// values near 0 are much denser than near 1, mapping 1 to 0 caused
		// a theoretically significant overshoot in the probability of returning 0.
		// Instead of that, if we round up to 1, just try again.
		// Getting 1 only happens 1/2⁵³ of the time, so most clients
		// will not observe it anyway.
		again: while (true) {
			var f = globalThis.Number(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r))) / (9223372036854775808)

			if (f == 1) {
				continue again
			}
			return f
			break
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Int(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		let u = $.uint(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r)), 64)
		return $.int($.uint($.uint64Shr(($.uint($.uint64Shl(u, 1n), 64)), 1n), 64))
	}

	public async Int31(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.int($.int64Shr(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r)), 32n), 32)
	}

	public async Int31n(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0) {
			$.panic("invalid argument to Int31n")
		}
		if ($.int((n & (((n - 1) | 0))), 32) == 0) {
			return $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int31() : Rand.prototype.Int31.call(r)) & (((n - 1) | 0)), 32)
		}
		let max = $.int($.uint(((((((2147483648) - 1) >>> 0)) - ((2147483648) % $.uint(n, 32))) >>> 0), 32), 32)
		let v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int31() : Rand.prototype.Int31.call(r))
		while (v > max) {
			v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int31() : Rand.prototype.Int31.call(r))
		}
		return $.int(v % n, 32)
	}

	public async Int63(): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.pointerValue<Exclude<Source, null>>($.pointerValue<Rand>(r).src).Int63()
	}

	public async Int63n(n: bigint): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0n) {
			$.panic("invalid argument to Int63n")
		}
		if (($.int64And(n, ($.int64Sub(n, 1n)))) == 0n) {
			return $.int64And(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r)), ($.int64Sub(n, 1n)))
		}
		let max = $.int64($.uint64Sub(9223372036854775807n, ($.uint64Mod(9223372036854775808n, $.uint64(n)))))
		let v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r))
		while (v > max) {
			v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r))
		}
		return $.int64Mod(v, n)
	}

	public async Intn(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		if (n <= 0) {
			$.panic("invalid argument to Intn")
		}
		if (n <= 2147483647) {
			return $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int31n($.int(n, 32)) : Rand.prototype.Int31n.call(r, $.int(n, 32))))
		}
		return $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63n($.int64(n)) : Rand.prototype.Int63n.call(r, $.int64(n))))
	}

	public async NormFloat64(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		while (true) {
			let j = $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint32() : Rand.prototype.Uint32.call(r)), 32)
			let i = $.int(j & 0x7F, 32)
			let x = j * $.arrayIndex(__goscript_normal.wn, i)
			if (__goscript_normal.absInt32(j) < $.arrayIndex(__goscript_normal.kn, i)) {

				return x
			}

			if (i == 0) {

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
			if ((globalThis.Math.fround($.arrayIndex(__goscript_normal.fn, i) + (globalThis.Math.fround(globalThis.Math.fround(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Float64() : Rand.prototype.Float64.call(r))) * (globalThis.Math.fround($.arrayIndex(__goscript_normal.fn, ((i - 1) | 0)) - $.arrayIndex(__goscript_normal.fn, i))))))) < globalThis.Math.fround(math.Exp((-.5 * x) * x))) {
				return x
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Perm(n: number): globalThis.Promise<$.Slice<number>> {
		const r: Rand | $.VarRef<Rand> | null = this;
		let m: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
		// In the following loop, the iteration when i=0 always swaps m[0] with m[0].
		// A change to remove this useless iteration is to assign 1 to i in the init
		// statement. But Perm also effects r. Making this change will affect
		// the final state of r. So this change can't be made for compatibility
		// reasons for Go 1.
		for (let __goscriptSliceWindow0 = $.sliceRange(m), i = 0; i < n; i++) {
			let j = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Intn(i + 1) : Rand.prototype.Intn.call(r, i + 1));
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = i
		}
		return m
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const r: Rand | $.VarRef<Rand> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: Rand = r == null ? $.pointerTarget<Rand>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Rand>(r)
		{
			const __goscriptTypeSwitchValue = (r$ as Rand).src
			switch (true) {
				case $.typeAssert<lockedSource | $.VarRef<lockedSource> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rand.lockedSource")).ok:
					{
						let src: lockedSource | $.VarRef<lockedSource> | null = $.typeAssert<lockedSource | $.VarRef<lockedSource> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rand.lockedSource")).value
						return (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as lockedSource).read(p, $.fieldRef((r$ as Rand)._fields, "readVal"), $.fieldRef((r$ as Rand)._fields, "readPos")) : lockedSource.prototype.read.call(src, p, $.fieldRef((r$ as Rand)._fields, "readVal"), $.fieldRef((r$ as Rand)._fields, "readPos")))
					}
					break
				case $.typeAssert<runtimeSource | $.VarRef<runtimeSource> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rand.runtimeSource")).ok:
					{
						let src: runtimeSource | $.VarRef<runtimeSource> | null = $.typeAssert<runtimeSource | $.VarRef<runtimeSource> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rand.runtimeSource")).value
						return (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as runtimeSource).read(p, $.fieldRef((r$ as Rand)._fields, "readVal"), $.fieldRef((r$ as Rand)._fields, "readPos")) : runtimeSource.prototype.read.call(src, p, $.fieldRef((r$ as Rand)._fields, "readVal"), $.fieldRef((r$ as Rand)._fields, "readPos")))
					}
					break
			}
		}
		return read(p, (r$ as Rand).src, $.fieldRef((r$ as Rand)._fields, "readVal"), $.fieldRef((r$ as Rand)._fields, "readPos"))
	}

	public async Seed(seed: bigint): globalThis.Promise<void> {
		let r: Rand | $.VarRef<Rand> | null = this;
		const r$: Rand = r == null ? $.pointerTarget<Rand>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Rand>(r)
		{
			let __goscriptTuple0: any = $.typeAssertTuple<lockedSource | $.VarRef<lockedSource> | null>((r$ as Rand).src, /* @__PURE__ */ $.pointerType("rand.lockedSource"))
			let lk: lockedSource | $.VarRef<lockedSource> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				await (lk !== null && (lk as any).__isVarRef !== true && (lk as any).__goValue === undefined ? ((lk as any) as lockedSource).seedPos(seed, $.fieldRef((r$ as Rand)._fields, "readPos")) : lockedSource.prototype.seedPos.call(lk, seed, $.fieldRef((r$ as Rand)._fields, "readPos")))
				return
			}
		}

		void (__goscriptAwait = $.pointerValue<Exclude<Source, null>>((r$ as Rand).src).Seed(seed), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(r$ as Rand).readPos = 0
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
		let i = n - 1
		for (; i > 2147483646; i--) {
			let j = $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63n($.int64(i + 1)) : Rand.prototype.Int63n.call(r, $.int64(i + 1))))
			void (__goscriptAwait = swap!(i, j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		for (; i > 0; i--) {
			let j = $.int(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).int31n($.int(i + 1, 32)) : Rand.prototype.int31n.call(r, $.int(i + 1, 32))))
			void (__goscriptAwait = swap!(i, j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Uint32(): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		return $.uint($.int64Shr(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r)), 31n), 32)
	}

	public async Uint64(): globalThis.Promise<bigint> {
		const r: Rand | $.VarRef<Rand> | null = this;
		const r$: Rand = r == null ? $.pointerTarget<Rand>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Rand>(r)
		if ((r$ as Rand).s64 != null) {
			return $.pointerValue<Exclude<Source64, null>>((r$ as Rand).s64).Uint64()
		}
		return $.uint64Or(($.uint64Shr($.uint64(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r))), 31n)), ($.uint64Mul(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Int63() : Rand.prototype.Int63.call(r)), (2 ** 32))))
	}

	public async int31n(n: number): globalThis.Promise<number> {
		const r: Rand | $.VarRef<Rand> | null = this;
		let v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint32() : Rand.prototype.Uint32.call(r))
		let prod = $.uint64Mul($.uint64(v), $.uint64(n))
		let low = $.uint(prod, 32)
		if (low < $.uint(n, 32)) {
			let thresh = $.uint($.uint($.int(-n, 32), 32) % $.uint(n, 32), 32)
			while (low < thresh) {
				v = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Uint32() : Rand.prototype.Uint32.call(r))
				prod = $.uint64Mul($.uint64(v), $.uint64(n))
				low = $.uint(prod, 32)
			}
		}
		return $.int($.uint64Shr(prod, 32n), 32)
	}

	static __typeInfo = $.registerStructType(
		"rand.Rand",
		() => new Rand(),
		() => [$.methodSignature("ExpFloat64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")], true), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Int31", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int31n", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Int63n", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Intn", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NormFloat64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Perm", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Shuffle", [["n", /* @__PURE__ */ $.basicType("int")], ["swap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("int31n", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true)],
		Rand,
		() => [/* @__PURE__ */ $.structField("src", "rand.Source", [0], 0, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("s64", "rand.Source64", [1], 16, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("readVal", /* @__PURE__ */ $.basicType("int64"), [2], 32, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("readPos", /* @__PURE__ */ $.basicType("int8"), [3], 40, false, { pkgPath: "math/rand" })]
	)
}

export class runtimeSource {
	// The mutex is used to avoid race conditions in Read.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public _fields: {
		mu: sync.Mutex
	}

	constructor(init?: Partial<{mu?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): runtimeSource {
		return new runtimeSource(this, true)
	}

	public __goscriptAssign(source: runtimeSource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
	}

	public Int63(): bigint {
		return $.int64($.uint64And(runtime_rand(), 9223372036854775807n))
	}

	public Seed(_p0: bigint): void {
		$.panic("internal error: call to runtimeSource.Seed")
	}

	public Uint64(): bigint {
		return runtime_rand()
	}

	public async read(p: $.Slice<number>, readVal: $.VarRef<bigint> | null, readPos: $.VarRef<number> | null): globalThis.Promise<[number, $.GoError]> {
		const fs: runtimeSource | $.VarRef<runtimeSource> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const fs$: runtimeSource = fs == null ? $.pointerTarget<runtimeSource>(fs) : (fs as any).__isVarRef === true ? (fs as any).value : (fs as any).__goValue === undefined ? (fs as any) : $.pointerTarget<runtimeSource>(fs)
		await (fs$ as runtimeSource).mu.Lock()
		let __goscriptTuple2: any = await read(p, $.interfaceValue<Source | null>(fs, "*rand.runtimeSource", /* @__PURE__ */ $.pointerType("rand.runtimeSource")), readVal, readPos)
		n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		void (fs$ as runtimeSource).mu.Unlock()
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"rand.runtimeSource",
		() => new runtimeSource(),
		() => [$.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Seed", [/* @__PURE__ */ $.basicType("int64")], [], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["readVal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], ["readPos", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		runtimeSource,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "math/rand" })]
	)
}

export class lockedSource {
	public get lk(): sync.Mutex {
		return this._fields.lk
	}

	public set lk(value: sync.Mutex) {
		this._fields.lk = value
	}

	public get s(): __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null {
		return this._fields.s
	}

	public set s(value: __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null) {
		this._fields.s = value
	}

	public _fields: {
		lk: sync.Mutex
		s: __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null
	}

	constructor(init?: Partial<{lk?: sync.Mutex, s?: __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lk: init?.lk ? $.markAsStructValue($.cloneStructValue(init.lk)) : $.markAsStructValue(new sync.Mutex()),
			s: init?.s ?? (null! as __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lockedSource {
		return new lockedSource(this, true)
	}

	public __goscriptAssign(source: lockedSource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.lk, values.lk)
		target.s = values.s
	}

	public async Int63(): globalThis.Promise<bigint> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		let n: bigint = 0n
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		await (r$ as lockedSource).lk.Lock()
		n = __goscript_rng.rngSource.prototype.Int63.call((r$ as lockedSource).s)
		void (r$ as lockedSource).lk.Unlock()
		return n
	}

	public async Seed(seed: bigint): globalThis.Promise<void> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		await (r$ as lockedSource).lk.Lock()
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as lockedSource).seed(seed) : lockedSource.prototype.seed.call(r, seed))
		void (r$ as lockedSource).lk.Unlock()
	}

	public async Uint64(): globalThis.Promise<bigint> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		let n: bigint = 0n
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		await (r$ as lockedSource).lk.Lock()
		n = __goscript_rng.rngSource.prototype.Uint64.call((r$ as lockedSource).s)
		void (r$ as lockedSource).lk.Unlock()
		return n
	}

	public async read(p: $.Slice<number>, readVal: $.VarRef<bigint> | null, readPos: $.VarRef<number> | null): globalThis.Promise<[number, $.GoError]> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		await (r$ as lockedSource).lk.Lock()
		let __goscriptTuple3: any = await read(p, $.interfaceValue<Source | null>((r$ as lockedSource).s, "*rand.rngSource", /* @__PURE__ */ $.pointerType("rand.rngSource")), readVal, readPos)
		n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		void (r$ as lockedSource).lk.Unlock()
		return [n, err]
	}

	public seed(seed: bigint): void {
		let r: lockedSource | $.VarRef<lockedSource> | null = this;
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		if ((r$ as lockedSource).s == null) {
			;(r$ as lockedSource).s = newSource(seed)
		} else {
			__goscript_rng.rngSource.prototype.Seed.call((r$ as lockedSource).s, seed)
		}
	}

	public async seedPos(seed: bigint, readPos: $.VarRef<number> | null): globalThis.Promise<void> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		const r$: lockedSource = r == null ? $.pointerTarget<lockedSource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<lockedSource>(r)
		await (r$ as lockedSource).lk.Lock()
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as lockedSource).seed(seed) : lockedSource.prototype.seed.call(r, seed))
		readPos!.value = 0
		void (r$ as lockedSource).lk.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"rand.lockedSource",
		() => new lockedSource(),
		() => [$.methodSignature("Int63", [], [["n", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Uint64", [], [["n", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["readVal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], ["readPos", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("seed", [["seed", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("seedPos", [["seed", /* @__PURE__ */ $.basicType("int64")], ["readPos", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))]], [], true)],
		lockedSource,
		() => [/* @__PURE__ */ $.structField("lk", "sync.Mutex", [0], 0, false, { pkgPath: "math/rand" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("rand.rngSource"), [1], 8, false, { pkgPath: "math/rand" })]
	)
}

export function NewSource(seed: bigint): Source | null {
	return $.interfaceValue<Source | null>(newSource(seed), "*rand.rngSource", /* @__PURE__ */ $.pointerType("rand.rngSource"))
}

export function newSource(seed: bigint): __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null {
	let rng: $.VarRef<__goscript_rng.rngSource> = $.varRef(new __goscript_rng.rngSource(undefined, true))
	rng.value.Seed(seed)
	return rng
}

export function New(src: Source | null): Rand | $.VarRef<Rand> | null {
	let [s64, ] = $.typeAssertTuple<Source64 | null>(src, "rand.Source64")
	return new Rand({src: src, s64: s64})
}

export async function read(p: $.Slice<number>, src: Source | null, readVal: $.VarRef<bigint> | null, readPos: $.VarRef<number> | null): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let pos = $.pointerValue<number>(readPos)
	let val = $.pointerValue<bigint>(readVal)
	let __goscriptTuple1: any = $.typeAssertTuple<__goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null>(src, /* @__PURE__ */ $.pointerType("rand.rngSource"))
	let rng: __goscript_rng.rngSource | $.VarRef<__goscript_rng.rngSource> | null = __goscriptTuple1[0]
	for (n = 0; n < $.sliceLen(p); n++) {
		if (pos == 0) {
			if (rng != null) {
				val = (rng !== null && (rng as any).__isVarRef !== true && (rng as any).__goValue === undefined ? ((rng as any) as __goscript_rng.rngSource).Int63() : __goscript_rng.rngSource.prototype.Int63.call(rng))
			} else {
				val = (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<Source, null>) : $.pointerValue<Exclude<Source, null>>(src)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			pos = 7
		}
		$.sliceElems(p!)[$.sliceSlot(p!, n)] = $.uint(val, 8)
		val = $.int64Shr(val, 8n)
		pos = ((pos - 1) << 24 >> 24)
	}
	readPos!.value = pos
	readVal!.value = val
	return [n, err]
}

export let globalRandGenerator: $.VarRef<atomic.Pointer<Rand>> = $.varRef($.markAsStructValue(new atomic.Pointer<Rand>()))

export function __goscript_set_globalRandGenerator(__goscriptValue: atomic.Pointer<Rand>): void {
	$.assignStruct(globalRandGenerator.value, __goscriptValue)
}

export let randautoseed: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("randautoseed")

export function __goscript_set_randautoseed(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	randautoseed = __goscriptValue
}

export let randseednop: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("randseednop")

export function __goscript_set_randseednop(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	randseednop = __goscriptValue
}

export async function globalRand(): globalThis.Promise<Rand | $.VarRef<Rand> | null> {
	{
		let r: Rand | $.VarRef<Rand> | null = (globalRandGenerator.value.Load() as Rand | $.VarRef<Rand> | null)
		if (r != null) {
			return r
		}
	}

	// This is the first call. Initialize based on GODEBUG.
	let r: Rand | $.VarRef<Rand> | null = null! as Rand | $.VarRef<Rand> | null
	if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(randautoseed)), "0")) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(randautoseed))
		r = New($.interfaceValue<Source | null>(new lockedSource(), "*rand.lockedSource", /* @__PURE__ */ $.pointerType("rand.lockedSource")))
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Seed(1n) : Rand.prototype.Seed.call(r, 1n))
	} else {
		r = new Rand({src: $.interfaceValue<Source | null>(new runtimeSource(), "*rand.runtimeSource", /* @__PURE__ */ $.pointerType("rand.runtimeSource")), s64: $.interfaceValue<Source64 | null>(new runtimeSource(), "*rand.runtimeSource", /* @__PURE__ */ $.pointerType("rand.runtimeSource"))})
	}

	if (!globalRandGenerator.value.CompareAndSwap(null, r)) {
		// Two different goroutines called some top-level
		// function at the same time. While the results in
		// that case are unpredictable, if we just use r here,
		// and we are using a seed, we will most likely return
		// the same value for both calls. That doesn't seem ideal.
		// Just use the first one to get in.
		return (globalRandGenerator.value.Load() as Rand | $.VarRef<Rand> | null)
	}

	return r
}

export function runtime_rand(): bigint {
	return globalThis.crypto.getRandomValues(new globalThis.BigUint64Array(1))[0]
}

export async function Seed(seed: bigint): globalThis.Promise<void> {
	if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(randseednop)), "0")) {
		return
	}
	godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(randseednop))

	let orig: Rand | $.VarRef<Rand> | null = (globalRandGenerator.value.Load() as Rand | $.VarRef<Rand> | null)

	// If we are already using a lockedSource, we can just re-seed it.
	if (orig != null) {
		{
			let [, ok] = $.typeAssertTuple<lockedSource | $.VarRef<lockedSource> | null>($.pointerValue<Rand>(orig).src, /* @__PURE__ */ $.pointerType("rand.lockedSource"))
			if (ok) {
				await (orig !== null && (orig as any).__isVarRef !== true && (orig as any).__goValue === undefined ? ((orig as any) as Rand).Seed(seed) : Rand.prototype.Seed.call(orig, seed))
				return
			}
		}
	}

	// Otherwise either
	// 1) orig == nil, which is the normal case when Seed is the first
	// top-level function to be called, or
	// 2) orig is already a runtimeSource, in which case we need to change
	// to a lockedSource.
	// Either way we do the same thing.

	let r: Rand | $.VarRef<Rand> | null = New($.interfaceValue<Source | null>(new lockedSource(), "*rand.lockedSource", /* @__PURE__ */ $.pointerType("rand.lockedSource")))
	await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Rand).Seed(seed) : Rand.prototype.Seed.call(r, seed))

	if (!globalRandGenerator.value.CompareAndSwap(orig, r)) {
		// Something changed underfoot. Retry to be safe.
		await Seed(seed)
	}
}

export async function Int63(): globalThis.Promise<bigint> {
	return Rand.prototype.Int63.call(await globalRand())
}

export async function Uint32(): globalThis.Promise<number> {
	return Rand.prototype.Uint32.call(await globalRand())
}

export async function Uint64(): globalThis.Promise<bigint> {
	return Rand.prototype.Uint64.call(await globalRand())
}

export async function Int31(): globalThis.Promise<number> {
	return Rand.prototype.Int31.call(await globalRand())
}

export async function Int(): globalThis.Promise<number> {
	return Rand.prototype.Int.call(await globalRand())
}

export async function Int63n(n: bigint): globalThis.Promise<bigint> {
	return Rand.prototype.Int63n.call(await globalRand(), n)
}

export async function Int31n(n: number): globalThis.Promise<number> {
	return Rand.prototype.Int31n.call(await globalRand(), n)
}

export async function Intn(n: number): globalThis.Promise<number> {
	return Rand.prototype.Intn.call(await globalRand(), n)
}

export async function Float64(): globalThis.Promise<number> {
	return Rand.prototype.Float64.call(await globalRand())
}

export async function Float32(): globalThis.Promise<number> {
	return Rand.prototype.Float32.call(await globalRand())
}

export async function Perm(n: number): globalThis.Promise<$.Slice<number>> {
	return Rand.prototype.Perm.call(await globalRand(), n)
}

export async function Shuffle(n: number, swap: ((i: number, j: number) => void) | null): globalThis.Promise<void> {
	await Rand.prototype.Shuffle.call(await globalRand(), n, swap)
}

export async function Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return Rand.prototype.Read.call(await globalRand(), p)
}

export async function NormFloat64(): globalThis.Promise<number> {
	return Rand.prototype.NormFloat64.call(await globalRand())
}

export async function ExpFloat64(): globalThis.Promise<number> {
	return Rand.prototype.ExpFloat64.call(await globalRand())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "rand.Rand", zero: () => new Rand(undefined, true) }})
}

var __goscriptAwait: any
