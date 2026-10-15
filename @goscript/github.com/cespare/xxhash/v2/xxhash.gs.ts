// Generated file based on xxhash.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_xxhash_other from "./xxhash_other.gs.ts"

import * as __goscript_xxhash_unsafe from "./xxhash_unsafe.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/unsafe/index.js"
import "./xxhash_other.gs.ts"
import "./xxhash_unsafe.gs.ts"

$.registerTypePackagePath("github.com/cespare/xxhash/v2", ["xxhash.Digest"])

export class Digest {
	public get v1(): bigint {
		return this._fields.v1
	}

	public set v1(value: bigint) {
		this._fields.v1 = value
	}

	public get v2(): bigint {
		return this._fields.v2
	}

	public set v2(value: bigint) {
		this._fields.v2 = value
	}

	public get v3(): bigint {
		return this._fields.v3
	}

	public set v3(value: bigint) {
		this._fields.v3 = value
	}

	public get v4(): bigint {
		return this._fields.v4
	}

	public set v4(value: bigint) {
		this._fields.v4 = value
	}

	public get total(): bigint {
		return this._fields.total
	}

	public set total(value: bigint) {
		this._fields.total = value
	}

	public get mem(): Uint8Array {
		return this._fields.mem
	}

	public set mem(value: Uint8Array) {
		this._fields.mem = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public _fields: {
		v1: bigint
		v2: bigint
		v3: bigint
		v4: bigint
		total: bigint
		mem: Uint8Array
		n: number
	}

	constructor(init?: Partial<{v1?: bigint, v2?: bigint, v3?: bigint, v4?: bigint, total?: bigint, mem?: Uint8Array, n?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			v1: init?.v1 ?? (0n as bigint),
			v2: init?.v2 ?? (0n as bigint),
			v3: init?.v3 ?? (0n as bigint),
			v4: init?.v4 ?? (0n as bigint),
			total: init?.total ?? (0n as bigint),
			mem: init?.mem !== undefined ? $.cloneArrayValue(init.mem, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			n: init?.n ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Digest {
		return new Digest(this, true)
	}

	public __goscriptAssign(source: Digest): void {
		const target = this._fields
		const values = source._fields
		target.v1 = values.v1
		target.v2 = values.v2
		target.v3 = values.v3
		target.v4 = values.v4
		target.total = values.total
		target.mem = $.assignFieldValue(target.mem, values.mem, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target.n = values.n
	}

	public BlockSize(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return 32
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		let b: $.Slice<number> = $.makeSlice<number>(0, 76, "byte")
		b = $.appendSlice(b, $.stringToBytes("xxh\x06"), $.byteSliceHint)
		b = appendUint64(b, (d$ as Digest).v1)
		b = appendUint64(b, (d$ as Digest).v2)
		b = appendUint64(b, (d$ as Digest).v3)
		b = appendUint64(b, (d$ as Digest).v4)
		b = appendUint64(b, (d$ as Digest).total)
		b = $.appendSlice(b, $.goSlice((d$ as Digest).mem, undefined, (d$ as Digest).n), $.byteSliceHint)
		b = $.goSlice(b, undefined, ($.sliceLen(b) + $.len((d$ as Digest).mem)) - (d$ as Digest).n)
		return [b, null]
	}

	public Reset(): void {
		const d: Digest | $.VarRef<Digest> | null = this;
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).ResetWithSeed(0n) : Digest.prototype.ResetWithSeed.call(d, 0n))
	}

	public ResetWithSeed(seed: bigint): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d);
		;(d$ as Digest).v1 = $.uint64Add(($.uint64Add(seed, 11400714785074694791n)), 14029467366897019727n);
		;(d$ as Digest).v2 = $.uint64Add(seed, 14029467366897019727n);
		;(d$ as Digest).v3 = seed;
		;(d$ as Digest).v4 = $.uint64Sub(seed, 11400714785074694791n);
		;(d$ as Digest).total = 0n;
		;(d$ as Digest).n = 0
	}

	public Size(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return 8
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		let s = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Sum64() : Digest.prototype.Sum64.call(d))
		return $.append(b, $.uint($.uint($.uint64Shr(s, 56n), 8), 8), $.uint($.uint($.uint64Shr(s, 48n), 8), 8), $.uint($.uint($.uint64Shr(s, 40n), 8), 8), $.uint($.uint($.uint64Shr(s, 32n), 8), 8), $.uint($.uint($.uint64Shr(s, 24n), 8), 8), $.uint($.uint($.uint64Shr(s, 16n), 8), 8), $.uint($.uint($.uint64Shr(s, 8n), 8), 8), $.uint($.uint(s, 8), 8), $.byteSliceHint)
	}

	public Sum64(): bigint {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		let h: bigint = 0n

		if ((d$ as Digest).total >= 32n) {
			let v1 = (d$ as Digest).v1
			let v2 = (d$ as Digest).v2
			let v3 = (d$ as Digest).v3
			let v4 = (d$ as Digest).v4
			h = $.uint64Add(($.uint64Add(($.uint64Add(rol1(v1), rol7(v2))), rol12(v3))), rol18(v4))
			h = mergeRound(h, v1)
			h = mergeRound(h, v2)
			h = mergeRound(h, v3)
			h = mergeRound(h, v4)
		} else {
			h = $.uint64Add((d$ as Digest).v3, 2870177450012600261n)
		}

		h = $.uint64Add(h, (d$ as Digest).total)

		let b: $.Slice<number> = $.goSlice((d$ as Digest).mem, undefined, (d$ as Digest).n & ($.len((d$ as Digest).mem) - 1))
		for (; $.sliceLen(b) >= 8; b = $.goSlice(b, 8, undefined)) {
			let k1 = round(0n, u64($.goSlice(b, undefined, 8)))
			h = $.uint64Xor(h, k1)
			h = $.uint64Add(($.uint64Mul(rol27(h), 11400714785074694791n)), 9650029242287828579n)
		}
		if ($.sliceLen(b) >= 4) {
			h = $.uint64Xor(h, $.uint64Mul($.uint64(u32($.goSlice(b, undefined, 4))), 11400714785074694791n))
			h = $.uint64Add(($.uint64Mul(rol23(h), 14029467366897019727n)), 1609587929392839161n)
			b = $.goSlice(b, 4, undefined)
		}
		for (; $.sliceLen(b) > 0; b = $.goSlice(b, 1, undefined)) {
			h = $.uint64Xor(h, $.uint64Mul($.uint64($.arrayIndex(b!, 0)), 2870177450012600261n))
			h = $.uint64Mul(rol11(h), 11400714785074694791n)
		}

		h = $.uint64Xor(h, $.uint64Shr(h, 33n))
		h = $.uint64Mul(h, 14029467366897019727n)
		h = $.uint64Xor(h, $.uint64Shr(h, 29n))
		h = $.uint64Mul(h, 1609587929392839161n)
		h = $.uint64Xor(h, $.uint64Shr(h, 32n))

		return h
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if (($.sliceLen(b) < 4) || (!$.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "xxh\x06"))) {
			return errors.New("xxhash: invalid hash state identifier")
		}
		if ($.sliceLen(b) != 76) {
			return errors.New("xxhash: invalid hash state size")
		}
		b = $.goSlice(b, 4, undefined)
		let __goscriptTuple0: any = consumeUint64(b)
		b = __goscriptTuple0[0];
		;(d$ as Digest).v1 = __goscriptTuple0[1]
		let __goscriptTuple1: any = consumeUint64(b)
		b = __goscriptTuple1[0];
		;(d$ as Digest).v2 = __goscriptTuple1[1]
		let __goscriptTuple2: any = consumeUint64(b)
		b = __goscriptTuple2[0];
		;(d$ as Digest).v3 = __goscriptTuple2[1]
		let __goscriptTuple3: any = consumeUint64(b)
		b = __goscriptTuple3[0];
		;(d$ as Digest).v4 = __goscriptTuple3[1]
		let __goscriptTuple4: any = consumeUint64(b)
		b = __goscriptTuple4[0];
		;(d$ as Digest).total = __goscriptTuple4[1]
		$.copy($.goSlice((d$ as Digest).mem, undefined, undefined), b);
		;(d$ as Digest).n = $.int($.uint64Mod((d$ as Digest).total, 32n))
		return null
	}

	public Write(b: $.Slice<number>): [number, $.GoError] {
		let d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		n = $.sliceLen(b);
		;(d$ as Digest).total = $.uint64Add((d$ as Digest).total, $.uint64(n))

		let memleft: $.Slice<number> = $.goSlice((d$ as Digest).mem, (d$ as Digest).n & ($.len((d$ as Digest).mem) - 1), undefined)

		if (((d$ as Digest).n + n) < 32) {
			// This new data doesn't even fill the current block.
			$.copy(memleft, b);
			;(d$ as Digest).n = (d$ as Digest).n + (n)
			return [n, err]
		}

		if ((d$ as Digest).n > 0) {
			// Finish off the partial block.
			let c: number = $.copy(memleft, b);
			;(d$ as Digest).v1 = round((d$ as Digest).v1, u64($.goSlice((d$ as Digest).mem, 0, 8)));
			;(d$ as Digest).v2 = round((d$ as Digest).v2, u64($.goSlice((d$ as Digest).mem, 8, 16)));
			;(d$ as Digest).v3 = round((d$ as Digest).v3, u64($.goSlice((d$ as Digest).mem, 16, 24)));
			;(d$ as Digest).v4 = round((d$ as Digest).v4, u64($.goSlice((d$ as Digest).mem, 24, 32)))
			b = $.goSlice(b, c, undefined);
			;(d$ as Digest).n = 0
		}

		if ($.sliceLen(b) >= 32) {
			// One or more full blocks left.
			let nw: number = __goscript_xxhash_other.writeBlocks(d, b)
			b = $.goSlice(b, nw, undefined)
		}

		// Store any remaining partial block.
		$.copy($.goSlice((d$ as Digest).mem, undefined, undefined), b);
		;(d$ as Digest).n = $.sliceLen(b)

		return [n, err]
	}

	public WriteString(s: string): [number, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Write($.stringToBytes(s)) : Digest.prototype.Write.call(d, $.stringToBytes(s)))

		return [$.stringLen(s), null]
	}

	static __typeInfo = $.registerStructType(
		"xxhash.Digest",
		() => new Digest(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("ResetWithSeed", [["seed", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Sum64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		Digest,
		() => [/* @__PURE__ */ $.structField("v1", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("v2", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("v3", /* @__PURE__ */ $.basicType("uint64"), [2], 16, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("v4", /* @__PURE__ */ $.basicType("uint64"), [3], 24, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("total", /* @__PURE__ */ $.basicType("uint64"), [4], 32, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("mem", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [5], 40, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [6], 72, false, { pkgPath: "github.com/cespare/xxhash/v2" })]
	)
}

export const prime1: bigint = 11400714785074694791n

export const prime2: bigint = 14029467366897019727n

export const prime3: bigint = 1609587929392839161n

export const prime4: bigint = 9650029242287828579n

export const prime5: bigint = 2870177450012600261n

export const magic: string = "xxh\x06"

export const marshaledSize: number = 76

export let primes: bigint[] = $.arrayValue([11400714785074694791n, 14029467366897019727n, 1609587929392839161n, 9650029242287828579n, 2870177450012600261n])

export function __goscript_set_primes(__goscriptValue: bigint[]): void {
	primes = __goscriptValue
}

export function New(): Digest | $.VarRef<Digest> | null {
	return NewWithSeed(0n)
}

export function NewWithSeed(seed: bigint): Digest | $.VarRef<Digest> | null {
	let d: $.VarRef<Digest> = $.varRef(new Digest(undefined, true))
	d.value.ResetWithSeed(seed)
	return d
}

export function appendUint64(b: $.Slice<number>, x: bigint): $.Slice<number> {
	let a: Uint8Array = $.arrayValue(new Uint8Array(8))
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64($.goSlice(a, undefined, undefined), x)
	return $.appendSlice(b, $.goSlice(a, undefined, undefined), $.byteSliceHint)
}

export function consumeUint64(b: $.Slice<number>): [$.Slice<number>, bigint] {
	let x = u64(b)
	return [$.goSlice(b, 8, undefined), x]
}

export function u64(b: $.Slice<number>): bigint {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64(b)
}

export function u32(b: $.Slice<number>): number {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32(b)
}

export function round(acc: bigint, input: bigint): bigint {
	acc = $.uint64Add(acc, $.uint64Mul(input, 14029467366897019727n))
	acc = rol31(acc)
	acc = $.uint64Mul(acc, 11400714785074694791n)
	return acc
}

export function mergeRound(acc: bigint, val: bigint): bigint {
	val = round(0n, val)
	acc = $.uint64Xor(acc, val)
	acc = $.uint64Add(($.uint64Mul(acc, 11400714785074694791n)), 9650029242287828579n)
	return acc
}

export function rol1(x: bigint): bigint {
	return bits.RotateLeft64(x, 1)
}

export function rol7(x: bigint): bigint {
	return bits.RotateLeft64(x, 7)
}

export function rol11(x: bigint): bigint {
	return bits.RotateLeft64(x, 11)
}

export function rol12(x: bigint): bigint {
	return bits.RotateLeft64(x, 12)
}

export function rol18(x: bigint): bigint {
	return bits.RotateLeft64(x, 18)
}

export function rol23(x: bigint): bigint {
	return bits.RotateLeft64(x, 23)
}

export function rol27(x: bigint): bigint {
	return bits.RotateLeft64(x, 27)
}

export function rol31(x: bigint): bigint {
	return bits.RotateLeft64(x, 31)
}
