// Generated file based on histogram.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "./stats.gs.ts"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.ValueBuckets", "tally.DurationBuckets", "tally.bucketPair"])

export type ValueBuckets = $.Slice<number>

$.registerNamedType("tally.ValueBuckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")));

$.registerNamedValueType(
	"tally.ValueBuckets",
	{AsDurations: (receiver: any, ...args: any[]) => (ValueBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (ValueBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (ValueBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (ValueBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ValueBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (ValueBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*tally.ValueBuckets",
	{AsDurations: (receiver: any, ...args: any[]) => (ValueBuckets_AsDurations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (ValueBuckets_AsValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (ValueBuckets_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (ValueBuckets_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ValueBuckets_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (ValueBuckets_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type DurationBuckets = $.Slice<time.Duration>

$.registerNamedType("tally.DurationBuckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")));

$.registerNamedValueType(
	"tally.DurationBuckets",
	{AsDurations: (receiver: any, ...args: any[]) => (DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*tally.DurationBuckets",
	{AsDurations: (receiver: any, ...args: any[]) => (DurationBuckets_AsDurations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (DurationBuckets_AsValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (DurationBuckets_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (DurationBuckets_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DurationBuckets_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (DurationBuckets_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class bucketPair {
	public get lowerBoundValue(): number {
		return this._fields.lowerBoundValue
	}

	public set lowerBoundValue(value: number) {
		this._fields.lowerBoundValue = value
	}

	public get upperBoundValue(): number {
		return this._fields.upperBoundValue
	}

	public set upperBoundValue(value: number) {
		this._fields.upperBoundValue = value
	}

	public get lowerBoundDuration(): time.Duration {
		return this._fields.lowerBoundDuration
	}

	public set lowerBoundDuration(value: time.Duration) {
		this._fields.lowerBoundDuration = value
	}

	public get upperBoundDuration(): time.Duration {
		return this._fields.upperBoundDuration
	}

	public set upperBoundDuration(value: time.Duration) {
		this._fields.upperBoundDuration = value
	}

	public _fields: {
		lowerBoundValue: number
		upperBoundValue: number
		lowerBoundDuration: time.Duration
		upperBoundDuration: time.Duration
	}

	constructor(init?: Partial<{lowerBoundValue?: number, upperBoundValue?: number, lowerBoundDuration?: time.Duration, upperBoundDuration?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			lowerBoundValue: init?.lowerBoundValue ?? (0 as number),
			upperBoundValue: init?.upperBoundValue ?? (0 as number),
			lowerBoundDuration: init?.lowerBoundDuration ?? (0n as time.Duration),
			upperBoundDuration: init?.upperBoundDuration ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucketPair {
		return new bucketPair(this, true)
	}

	public __goscriptAssign(source: bucketPair): void {
		const target = this._fields
		const values = source._fields
		target.lowerBoundValue = values.lowerBoundValue
		target.upperBoundValue = values.upperBoundValue
		target.lowerBoundDuration = values.lowerBoundDuration
		target.upperBoundDuration = values.upperBoundDuration
	}

	public LowerBoundDuration(): time.Duration {
		const p = this;
		return p.lowerBoundDuration
	}

	public LowerBoundValue(): number {
		const p = this;
		return p.lowerBoundValue
	}

	public UpperBoundDuration(): time.Duration {
		const p = this;
		return p.upperBoundDuration
	}

	public UpperBoundValue(): number {
		const p = this;
		return p.upperBoundValue
	}

	static __typeInfo = $.registerStructType(
		"tally.bucketPair",
		() => new bucketPair(),
		() => [{ name: "LowerBoundDuration", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }] }, { name: "LowerBoundValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "UpperBoundDuration", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }] }, { name: "UpperBoundValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }],
		bucketPair,
		() => [{ name: "lowerBoundValue", key: "lowerBoundValue", type: /* @__PURE__ */ $.basicType("float64") }, { name: "upperBoundValue", key: "upperBoundValue", type: /* @__PURE__ */ $.basicType("float64") }, { name: "lowerBoundDuration", key: "lowerBoundDuration", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }, { name: "upperBoundDuration", key: "upperBoundDuration", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }]
	)
}

export let DefaultBuckets: __goscript_types.Buckets | null = null! as __goscript_types.Buckets | null

export function __goscript_set_DefaultBuckets(__goscriptValue: __goscript_types.Buckets | null): void {
	DefaultBuckets = __goscriptValue
}

export let errBucketsCountNeedsGreaterThanZero: $.GoError = errors.New("n needs to be > 0")

export function __goscript_set_errBucketsCountNeedsGreaterThanZero(__goscriptValue: $.GoError): void {
	errBucketsCountNeedsGreaterThanZero = __goscriptValue
}

export let errBucketsStartNeedsGreaterThanZero: $.GoError = errors.New("start needs to be > 0")

export function __goscript_set_errBucketsStartNeedsGreaterThanZero(__goscriptValue: $.GoError): void {
	errBucketsStartNeedsGreaterThanZero = __goscriptValue
}

export let errBucketsFactorNeedsGreaterThanOne: $.GoError = errors.New("factor needs to be > 1")

export function __goscript_set_errBucketsFactorNeedsGreaterThanOne(__goscriptValue: $.GoError): void {
	errBucketsFactorNeedsGreaterThanOne = __goscriptValue
}

export let _singleBucket: bucketPair = new bucketPair({lowerBoundDuration: -9223372036854775808n, upperBoundDuration: 9223372036854775807n, lowerBoundValue: -math.MaxFloat64, upperBoundValue: math.MaxFloat64}, true)

export function __goscript_set__singleBucket(__goscriptValue: bucketPair): void {
	$.assignStruct(_singleBucket, __goscriptValue)
}

export function ValueBuckets_Len(v: ValueBuckets): number {
	return $.sliceLen((v as ValueBuckets))
}

export function ValueBuckets_Swap(v: ValueBuckets, i: number, j: number): void {
	let __goscriptAssign0_0: number = $.arrayIndex(v!, j)
	let __goscriptAssign0_1: number = $.arrayIndex(v!, i)
	$.sliceElems(v!)[$.sliceSlot(v!, i)] = __goscriptAssign0_0
	$.sliceElems(v!)[$.sliceSlot(v!, j)] = __goscriptAssign0_1
}

export function ValueBuckets_Less(v: ValueBuckets, i: number, j: number): boolean {
	return $.arrayIndex(v!, i) < $.arrayIndex(v!, j)
}

export async function ValueBuckets_String(v: ValueBuckets): globalThis.Promise<string> {
	let values: $.Slice<string> = $.makeSlice<string>($.sliceLen((v as ValueBuckets)), undefined, "string")
	for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = await fmt.Sprintf("%f", $.basicInterfaceValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number), "float64"))
	}
	return fmt.Sprint($.interfaceValue(values, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

export function ValueBuckets_AsValues(v: ValueBuckets): $.Slice<number> {
	return v
}

export function ValueBuckets_AsDurations(v: ValueBuckets): $.Slice<time.Duration> {
	let values: $.Slice<time.Duration> = $.makeSlice<time.Duration>($.sliceLen((v as ValueBuckets)), undefined, "number")
	for (let __goscriptRangeTarget1 = values, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = $.int64(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number) * globalThis.Number(time.Second))
	}
	return values
}

export function DurationBuckets_Len(v: DurationBuckets): number {
	return $.sliceLen((v as DurationBuckets))
}

export function DurationBuckets_Swap(v: DurationBuckets, i: number, j: number): void {
	let __goscriptAssign1_0: time.Duration = $.arrayIndex(v!, j)
	let __goscriptAssign1_1: time.Duration = $.arrayIndex(v!, i)
	$.sliceElems(v!)[$.sliceSlot(v!, i)] = __goscriptAssign1_0
	$.sliceElems(v!)[$.sliceSlot(v!, j)] = __goscriptAssign1_1
}

export function DurationBuckets_Less(v: DurationBuckets, i: number, j: number): boolean {
	return $.arrayIndex(v!, i) < $.arrayIndex(v!, j)
}

export async function DurationBuckets_String(v: DurationBuckets): globalThis.Promise<string> {
	let values: $.Slice<string> = $.makeSlice<string>($.sliceLen((v as DurationBuckets)), undefined, "string")
	for (let __goscriptRangeTarget2 = values, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow2.length; i++) {
		;(__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] = time.Duration_String(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as time.Duration))
	}
	return fmt.Sprintf("%v", $.interfaceValue(values, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

export function DurationBuckets_AsValues(v: DurationBuckets): $.Slice<number> {
	let values: $.Slice<number> = $.makeSlice<number>($.sliceLen((v as DurationBuckets)), undefined, "number")
	for (let __goscriptRangeTarget3 = values, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow3 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow3.length; i++) {
		;(__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] = globalThis.Number(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as time.Duration)) / globalThis.Number(time.Second)
	}
	return values
}

export function DurationBuckets_AsDurations(v: DurationBuckets): $.Slice<time.Duration> {
	return v
}

export function bucketsEqual(x: __goscript_types.Buckets | null, y: __goscript_types.Buckets | null): boolean {
	{
		const __goscriptTypeSwitchValue = x
		switch (true) {
			case $.typeAssert<DurationBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets")).ok:
				{
					let b1: DurationBuckets = $.typeAssert<DurationBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets")).value
					let __goscriptTuple0: any = $.typeAssertTuple<DurationBuckets>(y, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
					let b2: DurationBuckets = (__goscriptTuple0[0] as DurationBuckets)
					let ok = __goscriptTuple0[1]
					if (!ok) {
						return false
					}
					if ($.sliceLen((b1 as DurationBuckets)) != $.sliceLen((b2 as DurationBuckets))) {
						return false
					}
					for (let __goscriptSliceWindow4 = $.sliceRange(b1), __goscriptSliceWindow5 = $.sliceRange(b2), i = 0; i < __goscriptSliceWindow4.length; i++) {
						if (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as time.Duration) != ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as time.Duration)) {
							return false
						}
					}
				}
				break
			case $.typeAssert<ValueBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets")).ok:
				{
					let b1: ValueBuckets = $.typeAssert<ValueBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets")).value
					let __goscriptTuple1: any = $.typeAssertTuple<ValueBuckets>(y, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets"))
					let b2: ValueBuckets = (__goscriptTuple1[0] as ValueBuckets)
					let ok = __goscriptTuple1[1]
					if (!ok) {
						return false
					}
					if ($.sliceLen((b1 as ValueBuckets)) != $.sliceLen((b2 as ValueBuckets))) {
						return false
					}
					for (let __goscriptSliceWindow6 = $.sliceRange(b1), __goscriptSliceWindow7 = $.sliceRange(b2), i = 0; i < __goscriptSliceWindow6.length; i++) {
						if (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as number) != ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number)) {
							return false
						}
					}
				}
				break
		}
	}

	return true
}

export async function newBucketPair(htype: __goscript_stats.histogramType, durations: $.Slice<time.Duration>, values: $.Slice<number>, upperBoundIndex: number, prev: __goscript_types.BucketPair | null): globalThis.Promise<bucketPair> {
	let pair: bucketPair = new bucketPair(undefined, true)

	switch (htype) {
		case 1:
		{
			pair = $.assignStruct(pair, (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (prev !== null && (prev as any).__isVarRef !== true && (prev as any).__goValue === undefined ? (prev as Exclude<__goscript_types.BucketPair, null>) : $.pointerValue<Exclude<__goscript_types.BucketPair, null>>(prev)).UpperBoundDuration(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new bucketPair({lowerBoundDuration: __goscriptLiteralField0, upperBoundDuration: $.arrayIndex(durations!, upperBoundIndex)}, true) })()))
			break
		}
		case 0:
		{
			pair = $.assignStruct(pair, (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (prev !== null && (prev as any).__isVarRef !== true && (prev as any).__goValue === undefined ? (prev as Exclude<__goscript_types.BucketPair, null>) : $.pointerValue<Exclude<__goscript_types.BucketPair, null>>(prev)).UpperBoundValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new bucketPair({lowerBoundValue: __goscriptLiteralField1, upperBoundValue: $.arrayIndex(values!, upperBoundIndex)}, true) })()))
			break
		}
		default:
		{
			break
		}
	}

	return (pair).clone()
}

export async function BucketPairs(buckets: __goscript_types.Buckets | null): globalThis.Promise<$.Slice<__goscript_types.BucketPair | null>> {
	let htype = 0
	{
		let [, ok] = $.typeAssertTuple<DurationBuckets>(buckets, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
		if (ok) {
			htype = 1
		}
	}

	if ((buckets == null) || ((__goscriptAwait = (buckets !== null && (buckets as any).__isVarRef !== true && (buckets as any).__goValue === undefined ? (buckets as Exclude<__goscript_types.Buckets, null>) : $.pointerValue<Exclude<__goscript_types.Buckets, null>>(buckets)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < 1)) {
		return $.arrayToSlice<__goscript_types.BucketPair | null>([$.interfaceValue<__goscript_types.BucketPair | null>((_singleBucket).clone(), "tally.bucketPair", "tally.bucketPair")])
	}

	let values: $.Slice<number> = null! as $.Slice<number>
	let durations: $.Slice<time.Duration> = null! as $.Slice<time.Duration>
	let pairs: $.Slice<__goscript_types.BucketPair | null> = $.makeSlice<__goscript_types.BucketPair | null>(0, (__goscriptAwait = (buckets !== null && (buckets as any).__isVarRef !== true && (buckets as any).__goValue === undefined ? (buckets as Exclude<__goscript_types.Buckets, null>) : $.pointerValue<Exclude<__goscript_types.Buckets, null>>(buckets)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 2)
	let pair: bucketPair = new bucketPair(undefined, true)

	switch (htype) {
		case 1:
		{
			durations = await copyAndSortDurations(((__goscriptAwait = (buckets !== null && (buckets as any).__isVarRef !== true && (buckets as any).__goValue === undefined ? (buckets as Exclude<__goscript_types.Buckets, null>) : $.pointerValue<Exclude<__goscript_types.Buckets, null>>(buckets)).AsDurations(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<time.Duration>))
			pair.lowerBoundDuration = _singleBucket.lowerBoundDuration
			pair.upperBoundDuration = $.arrayIndex(durations!, 0)
			break
		}
		case 0:
		{
			values = await copyAndSortValues(((__goscriptAwait = (buckets !== null && (buckets as any).__isVarRef !== true && (buckets as any).__goValue === undefined ? (buckets as Exclude<__goscript_types.Buckets, null>) : $.pointerValue<Exclude<__goscript_types.Buckets, null>>(buckets)).AsValues(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
			pair.lowerBoundValue = _singleBucket.lowerBoundValue
			pair.upperBoundValue = $.arrayIndex(values!, 0)
			break
		}
		default:
		{
			$.panic("unsupported histogram type")
			break
		}
	}

	pairs = $.appendOne(pairs, $.interfaceValue<__goscript_types.BucketPair | null>((pair).clone(), "tally.bucketPair", "tally.bucketPair"), $.appendZeros.nil)
	for (let i = 1; i < (__goscriptAwait = (buckets !== null && (buckets as any).__isVarRef !== true && (buckets as any).__goValue === undefined ? (buckets as Exclude<__goscript_types.Buckets, null>) : $.pointerValue<Exclude<__goscript_types.Buckets, null>>(buckets)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		pairs = $.appendOne(pairs, $.interfaceValue<__goscript_types.BucketPair | null>(await newBucketPair(htype, durations, values, i, $.arrayIndex(pairs!, i - 1)), "tally.bucketPair", "tally.bucketPair"), $.appendZeros.nil)
	}

	switch (htype) {
		case 1:
		{
			pair.lowerBoundDuration = (__goscriptAwait = $.pointerValue<Exclude<__goscript_types.BucketPair, null>>($.arrayIndex(pairs!, $.sliceLen(pairs) - 1)).UpperBoundDuration(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			pair.upperBoundDuration = _singleBucket.upperBoundDuration
			break
		}
		case 0:
		{
			pair.lowerBoundValue = (__goscriptAwait = $.pointerValue<Exclude<__goscript_types.BucketPair, null>>($.arrayIndex(pairs!, $.sliceLen(pairs) - 1)).UpperBoundValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			pair.upperBoundValue = _singleBucket.upperBoundValue
			break
		}
	}
	pairs = $.appendOne(pairs, $.interfaceValue<__goscript_types.BucketPair | null>((pair).clone(), "tally.bucketPair", "tally.bucketPair"), $.appendZeros.nil)

	return pairs
}

export async function copyAndSortValues(values: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	let valuesCopy: $.Slice<number> = $.makeSlice<number>($.sliceLen(values), undefined, "number")
	$.copy(valuesCopy, values)
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((valuesCopy as ValueBuckets), "tally.ValueBuckets", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	return valuesCopy
}

export async function copyAndSortDurations(durations: $.Slice<time.Duration>): globalThis.Promise<$.Slice<time.Duration>> {
	let durationsCopy: $.Slice<time.Duration> = $.makeSlice<time.Duration>($.sliceLen(durations), undefined, "number")
	$.copy(durationsCopy, durations)
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((durationsCopy as DurationBuckets), "tally.DurationBuckets", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))!)
	return durationsCopy
}

export function LinearValueBuckets(start: number, width: number, n: number): [ValueBuckets, $.GoError] {
	if (n <= 0) {
		return [(null as ValueBuckets), errBucketsCountNeedsGreaterThanZero]
	}
	let buckets: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
	for (let __goscriptRangeTarget4 = buckets, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = start + (i * width)
	}
	return [(buckets as ValueBuckets), null]
}

export function MustMakeLinearValueBuckets(start: number, width: number, n: number): ValueBuckets {
	let __goscriptTuple2: any = LinearValueBuckets(start, width, n)
	let buckets: ValueBuckets = (__goscriptTuple2[0] as ValueBuckets)
	let err = __goscriptTuple2[1]
	if (err != null) {
		$.panic((err as any))
	}
	return (buckets as ValueBuckets)
}

export function LinearDurationBuckets(start: time.Duration, width: time.Duration, n: number): [DurationBuckets, $.GoError] {
	if (n <= 0) {
		return [(null as DurationBuckets), errBucketsCountNeedsGreaterThanZero]
	}
	let buckets: $.Slice<time.Duration> = $.makeSlice<time.Duration>(n, undefined, "number")
	for (let __goscriptRangeTarget5 = buckets, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		;(__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] = $.int64Add(start, ($.int64Mul($.int64(i), width)))
	}
	return [(buckets as DurationBuckets), null]
}

export function MustMakeLinearDurationBuckets(start: time.Duration, width: time.Duration, n: number): DurationBuckets {
	let __goscriptTuple3: any = LinearDurationBuckets(start, width, n)
	let buckets: DurationBuckets = (__goscriptTuple3[0] as DurationBuckets)
	let err = __goscriptTuple3[1]
	if (err != null) {
		$.panic((err as any))
	}
	return (buckets as DurationBuckets)
}

export function ExponentialValueBuckets(start: number, factor: number, n: number): [ValueBuckets, $.GoError] {
	if (n <= 0) {
		return [(null as ValueBuckets), errBucketsCountNeedsGreaterThanZero]
	}
	if (start <= 0) {
		return [(null as ValueBuckets), errBucketsStartNeedsGreaterThanZero]
	}
	if (factor <= 1) {
		return [(null as ValueBuckets), errBucketsFactorNeedsGreaterThanOne]
	}
	let buckets: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
	let curr = start
	for (let __goscriptRangeTarget6 = buckets, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
		;(__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] = curr
		curr = curr * (factor)
	}
	return [(buckets as ValueBuckets), null]
}

export function MustMakeExponentialValueBuckets(start: number, factor: number, n: number): ValueBuckets {
	let __goscriptTuple4: any = ExponentialValueBuckets(start, factor, n)
	let buckets: ValueBuckets = (__goscriptTuple4[0] as ValueBuckets)
	let err = __goscriptTuple4[1]
	if (err != null) {
		$.panic((err as any))
	}
	return (buckets as ValueBuckets)
}

export function ExponentialDurationBuckets(start: time.Duration, factor: number, n: number): [DurationBuckets, $.GoError] {
	if (n <= 0) {
		return [(null as DurationBuckets), errBucketsCountNeedsGreaterThanZero]
	}
	if (start <= 0n) {
		return [(null as DurationBuckets), errBucketsStartNeedsGreaterThanZero]
	}
	if (factor <= 1) {
		return [(null as DurationBuckets), errBucketsFactorNeedsGreaterThanOne]
	}
	let buckets: $.Slice<time.Duration> = $.makeSlice<time.Duration>(n, undefined, "number")
	let curr = start
	for (let __goscriptRangeTarget7 = buckets, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
		;(__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] = curr
		curr = $.int64(globalThis.Number(curr) * factor)
	}
	return [(buckets as DurationBuckets), null]
}

export function MustMakeExponentialDurationBuckets(start: time.Duration, factor: number, n: number): DurationBuckets {
	let __goscriptTuple5: any = ExponentialDurationBuckets(start, factor, n)
	let buckets: DurationBuckets = (__goscriptTuple5[0] as DurationBuckets)
	let err = __goscriptTuple5[1]
	if (err != null) {
		$.panic((err as any))
	}
	return (buckets as DurationBuckets)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (ValueBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (ValueBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (ValueBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (ValueBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ValueBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (ValueBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
}

var __goscriptAwait: any
