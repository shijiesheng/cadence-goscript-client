// Generated file based on histograms.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as slices from "@goscript/slices/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/slices/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/metrics", ["metrics.SubsettableHistogram"])

export class SubsettableHistogram {
	public get tallyBuckets(): tally.DurationBuckets {
		return this._fields.tallyBuckets
	}

	public set tallyBuckets(value: tally.DurationBuckets) {
		this._fields.tallyBuckets = value
	}

	public get scale(): number {
		return this._fields.scale
	}

	public set scale(value: number) {
		this._fields.scale = value
	}

	public _fields: {
		tallyBuckets: tally.DurationBuckets
		scale: number
	}

	constructor(init?: Partial<{tallyBuckets?: tally.DurationBuckets, scale?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			tallyBuckets: init?.tallyBuckets ?? (null! as tally.DurationBuckets),
			scale: init?.scale ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubsettableHistogram {
		return new SubsettableHistogram(this, true)
	}

	public __goscriptAssign(source: SubsettableHistogram): void {
		const target = this._fields
		const values = source._fields
		target.tallyBuckets = values.tallyBuckets
		target.scale = values.scale
	}

	public Buckets(): tally.DurationBuckets {
		const s = this;
		return (s.tallyBuckets as tally.DurationBuckets)
	}

	public async subsetTo(newScale: number): globalThis.Promise<SubsettableHistogram> {
		const s = this;
		if (newScale >= s.scale) {
			$.panic(await fmt.Sprintf("scale %v is not less than the current scale %v", $.basicInterfaceValue(newScale, "int"), $.basicInterfaceValue(s.scale, "int")))
		}
		if (newScale < 0) {
			$.panic(await fmt.Sprintf("negative scales (%v) are not supported yet", $.basicInterfaceValue(newScale, "int")))
		}

		let dup = (() => { const __goscriptLiteralField0 = (slices.Clone((s.tallyBuckets as tally.DurationBuckets)) as tally.DurationBuckets); return new SubsettableHistogram({tallyBuckets: __goscriptLiteralField0, scale: s.scale}, true) })()

		// Compress every other bucket per -1 scale
		while (dup.scale > newScale) {
			if ((($.sliceLen((dup.tallyBuckets as tally.DurationBuckets)) - 2) % 2) != 0) {
				$.panic(await fmt.Sprintf("cannot subset from scale %v to %v, %v buckets is not divisible by 2", $.basicInterfaceValue(dup.scale, "int"), $.basicInterfaceValue(dup.scale - 1, "int"), $.basicInterfaceValue($.sliceLen((dup.tallyBuckets as tally.DurationBuckets)) - 2, "int")))
			}
			if ($.sliceLen((dup.tallyBuckets as tally.DurationBuckets)) <= 3) {
				$.panic(await fmt.Sprintf("not enough buckets to subset from scale %d to %d, only have %d", $.basicInterfaceValue(dup.scale, "int"), $.basicInterfaceValue(dup.scale - 1, "int"), $.basicInterfaceValue($.sliceLen((dup.tallyBuckets as tally.DurationBuckets)), "int")))
			}

			// Keep first and last buckets, compress the rest
			let bucketsToCompress: tally.DurationBuckets = ($.goSlice(dup.tallyBuckets, 1, $.sliceLen((dup.tallyBuckets as tally.DurationBuckets)) - 1) as tally.DurationBuckets)

			let half: tally.DurationBuckets = ($.makeSlice<time.Duration>(0, (globalThis.Math.trunc($.sliceLen((bucketsToCompress as tally.DurationBuckets)) / 2)) + 2, "number") as tally.DurationBuckets)
			half = ($.appendOne((half as tally.DurationBuckets), $.arrayIndex(dup.tallyBuckets!, 0)) as tally.DurationBuckets)
			for (let __goscriptSliceWindow0 = $.sliceRange(bucketsToCompress), i = 0; i < __goscriptSliceWindow0.length; i = i + (2)) {
				half = ($.appendOne((half as tally.DurationBuckets), ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as time.Duration)) as tally.DurationBuckets)
			}
			half = ($.appendOne((half as tally.DurationBuckets), $.arrayIndex(dup.tallyBuckets!, $.sliceLen((dup.tallyBuckets as tally.DurationBuckets)) - 1)) as tally.DurationBuckets)

			dup.tallyBuckets = (half as tally.DurationBuckets)
			dup.scale--
		}
		return (dup).clone()
	}

	static __typeInfo = $.registerStructType(
		"metrics.SubsettableHistogram",
		() => new SubsettableHistogram(),
		() => [$.methodSignature("Buckets", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets")]), $.methodSignature("subsetTo", [["newScale", /* @__PURE__ */ $.basicType("int")]], ["metrics.SubsettableHistogram"])],
		SubsettableHistogram,
		() => [/* @__PURE__ */ $.structField("tallyBuckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("scale", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export let Default1ms100s: SubsettableHistogram = await makeSubsettableHistogram(2, 1000000n, 100000000000n, 80)

export function __goscript_set_Default1ms100s(__goscriptValue: SubsettableHistogram): void {
	$.assignStruct(Default1ms100s, __goscriptValue)
}

export let Low1ms100s: SubsettableHistogram = await $.markAsStructValue($.cloneStructValue(Default1ms100s)).subsetTo(1)

export function __goscript_set_Low1ms100s(__goscriptValue: SubsettableHistogram): void {
	$.assignStruct(Low1ms100s, __goscriptValue)
}

export let High1ms24h: SubsettableHistogram = await makeSubsettableHistogram(2, 1000000n, 86400000000000n, 112)

export function __goscript_set_High1ms24h(__goscriptValue: SubsettableHistogram): void {
	$.assignStruct(High1ms24h, __goscriptValue)
}

export let Mid1ms24h: SubsettableHistogram = await $.markAsStructValue($.cloneStructValue(High1ms24h)).subsetTo(1)

export function __goscript_set_Mid1ms24h(__goscriptValue: SubsettableHistogram): void {
	$.assignStruct(Mid1ms24h, __goscriptValue)
}

export async function makeSubsettableHistogram(scale: number, start: time.Duration, end: time.Duration, length: number): globalThis.Promise<SubsettableHistogram> {
	if ((scale < 0) || (scale > 3)) {
		$.panic(await fmt.Sprintf("scale must be between 0 (grows by *2) and 3 (grows by *2^1/8), got: %v", $.basicInterfaceValue(scale, "int")))
	}
	if (start <= 0n) {
		$.panic(await fmt.Sprintf("start must be greater than 0, got %v", $.namedValueInterfaceValue<any>(start, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}
	if (start >= end) {
		$.panic(await fmt.Sprintf("start must be less than end (%v < %v)", $.namedValueInterfaceValue<any>(start, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(end, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}
	if ((length < 12) || (length > 160)) {
		$.panic(await fmt.Sprintf("length must be between 12 and 160, got %d", $.basicInterfaceValue(length, "int")))
	}

	// Ensure buckets complete a full "row" (power of 2 alignment)
	let powerOfTwoWidth = $.int(math.Pow(2, scale))
	let missing = length % powerOfTwoWidth
	if (missing != 0) {
		$.panic(await fmt.Sprintf("number of buckets must end at a power of 2. got %d, raise to %d", $.basicInterfaceValue(length, "int"), $.basicInterfaceValue(length + missing, "int")))
	}

	let buckets: tally.DurationBuckets = null! as tally.DurationBuckets
	for (let i = 0; i < length; i++) {
		buckets = ($.appendOne((buckets as tally.DurationBuckets), nextBucket(start, $.sliceLen((buckets as tally.DurationBuckets)), scale)) as tally.DurationBuckets)
	}
	// Add one more to reach the next power of 2
	buckets = ($.appendOne((buckets as tally.DurationBuckets), nextBucket(start, $.sliceLen((buckets as tally.DurationBuckets)), scale)) as tally.DurationBuckets)

	if (last(__goscriptStatic3(), (buckets as tally.DurationBuckets)) < ($.int64Mul(end, 2n))) {
		$.panic(await fmt.Sprintf($.concatString("not enough buckets (%d) to exceed the end target (%v) by at least 2x. ", "last bucket: %v. Consider increasing length or reducing end."), $.basicInterfaceValue(length, "int"), $.namedValueInterfaceValue<any>(end, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(last(__goscriptStatic3(), (buckets as tally.DurationBuckets)), "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}

	return new SubsettableHistogram({tallyBuckets: ($.appendSlice(($.arrayToSlice<time.Duration>([0n]) as tally.DurationBuckets), buckets) as tally.DurationBuckets), scale: scale}, true)
}

export function nextBucket(start: time.Duration, num: number, scale: number): time.Duration {
	// Formula: start × 2^(num / 2^scale)
	return $.int64(globalThis.Number(start) * math.Pow(2, num / math.Pow(2, scale)))
}

export async function RecordHistogram(scope: tally.Scope | null, name: string, duration: time.Duration, buckets: SubsettableHistogram): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Histogram($.concatString(name, "_ns"), $.namedValueInterfaceValue<tally.Buckets | null>(buckets.Buckets(), "tally.DurationBuckets", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic6())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).RecordDuration(duration), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function StartHistogram(scope: tally.Scope | null, name: string, buckets: SubsettableHistogram): globalThis.Promise<tally.Stopwatch> {
	return (((__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Histogram($.concatString(name, "_ns"), $.namedValueInterfaceValue<tally.Buckets | null>(buckets.Buckets(), "tally.DurationBuckets", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic6())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as tally.Stopwatch)).clone()
}

export function last(__typeArgs: $.GenericTypeArgs | undefined, s: any): any {
	return $.copyElement($.arrayIndex(s!, $.len(s) - 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int64", "time.Duration"), zero: () => 0n, methods: {Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])] }, X: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"), zero: () => null, methods: {AsDurations: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])] }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
