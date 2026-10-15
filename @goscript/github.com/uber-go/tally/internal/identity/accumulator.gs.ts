// Generated file based on accumulator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as time from "@goscript/time/index.js"

import * as murmur3 from "@goscript/github.com/twmb/murmur3/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/twmb/murmur3/index.js"

$.registerTypePackagePath("github.com/uber-go/tally/internal/identity", ["identity.Accumulator"])

export type Accumulator = bigint

$.registerNamedValueType(
	"identity.Accumulator",
	{AddString: (receiver: any, ...args: any[]) => (Accumulator_AddString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AddUint64: (receiver: any, ...args: any[]) => (Accumulator_AddUint64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Accumulator_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AddString", [["str", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64", "identity.Accumulator")]), $.methodSignature("AddUint64", [["u64", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64", "identity.Accumulator")]), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("uint64")])]
);

$.registerNamedValueType(
	"*identity.Accumulator",
	{AddString: (receiver: any, ...args: any[]) => (Accumulator_AddString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), AddUint64: (receiver: any, ...args: any[]) => (Accumulator_AddUint64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Accumulator_Value as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AddString", [["str", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64", "identity.Accumulator")]), $.methodSignature("AddUint64", [["u64", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64", "identity.Accumulator")]), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("uint64")])]
);

export const _hashSeed: bigint = 23n

export const _hashFold: bigint = 31n

export function NewAccumulator(): Accumulator {
	return 23n
}

export function NewAccumulatorWithSeed(seed: bigint): Accumulator {
	return $.uint64(seed)
}

export function Accumulator_AddString(a: Accumulator, str: string): Accumulator {
	return $.uint64Add(a, $.uint64($.uint64Mul(murmur3.StringSum64(str), 31n)))
}

export function Accumulator_AddUint64(a: Accumulator, u64: bigint): Accumulator {
	return $.uint64Add(a, $.uint64($.uint64Mul(u64, 31n)))
}

export function Accumulator_Value(a: Accumulator): bigint {
	return $.uint64(a)
}

export function Durations(durs: $.Slice<time.Duration>): bigint {
	if ($.sliceLen(durs) == 0) {
		return 0n
	}

	let acc = NewAccumulator()

	// n.b. Wrapping due to overflow is okay here, since those values cannot be
	//      represented by int64.
	for (let __goscriptRangeTarget0 = durs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let d = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as time.Duration)
		acc = Accumulator_AddUint64(acc, $.uint64(d))
	}

	return Accumulator_Value(acc)
}

export function Int64s(i64s: $.Slice<bigint>): bigint {
	if ($.sliceLen(i64s) == 0) {
		return 0n
	}

	let acc = NewAccumulator()

	// n.b. Wrapping due to overflow is okay here, since those values cannot be
	//      represented by int64.
	for (let __goscriptRangeTarget1 = i64s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let i = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as bigint)
		acc = Accumulator_AddUint64(acc, $.uint64(i))
	}

	return Accumulator_Value(acc)
}

export function Float64s(f64s: $.Slice<number>): bigint {
	if ($.sliceLen(f64s) == 0) {
		return 0n
	}

	// n.b. Wrapping due to overflow is okay here, since those values cannot be
	//      represented by int64.
	let acc = NewAccumulator()

	for (let __goscriptRangeTarget2 = f64s, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number)
		acc = Accumulator_AddUint64(acc, math.Float64bits(f))
	}

	return Accumulator_Value(acc)
}

export function StringStringMap(m: globalThis.Map<string, string> | null): bigint {
	if ($.len(m) == 0) {
		return 0n
	}

	let acc = NewAccumulator()
	for (const [k, v] of m?.entries() ?? []) {
		acc = Accumulator_AddString(acc, $.concatString(($.concatString(k, "=")), v))
	}

	return Accumulator_Value(acc)
}
