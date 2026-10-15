// Generated file based on metric.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus/internal", ["internal.metricSorter"])

export type metricSorter = $.Slice<dto.Metric | $.VarRef<dto.Metric> | null>

$.registerNamedType("internal.metricSorter", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")));

$.registerNamedValueType(
	"internal.metricSorter",
	{Len: (receiver: any, ...args: any[]) => (metricSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (metricSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (metricSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*internal.metricSorter",
	{Len: (receiver: any, ...args: any[]) => (metricSorter_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (metricSorter_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (metricSorter_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export function metricSorter_Len(s: metricSorter): number {
	return $.sliceLen((s as metricSorter))
}

export function metricSorter_Swap(s: metricSorter, i: number, j: number): void {
	let __goscriptAssign0_0: dto.Metric | $.VarRef<dto.Metric> | null = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: dto.Metric | $.VarRef<dto.Metric> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function metricSorter_Less(s: metricSorter, i: number, j: number): boolean {
	if ($.sliceLen($.pointerValue<dto.Metric>($.arrayIndex(s!, i)).Label) != $.sliceLen($.pointerValue<dto.Metric>($.arrayIndex(s!, j)).Label)) {
		// This should not happen. The metrics are
		// inconsistent. However, we have to deal with the fact, as
		// people might use custom collectors or metric family injection
		// to create inconsistent metrics. So let's simply compare the
		// number of labels in this case. That will still yield
		// reproducible sorting.
		return $.sliceLen($.pointerValue<dto.Metric>($.arrayIndex(s!, i)).Label) < $.sliceLen($.pointerValue<dto.Metric>($.arrayIndex(s!, j)).Label)
	}
	for (let __goscriptRangeTarget0 = $.pointerValue<dto.Metric>($.arrayIndex(s!, i)).Label, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(s), n = 0; n < __goscriptRangeWindow0.length; n++) {
		let lp = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + n] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let vi = (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lp))
		let vj = dto.LabelPair.prototype.GetValue.call($.arrayIndex($.pointerValue<dto.Metric>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as dto.Metric | $.VarRef<dto.Metric> | null)).Label!, n))
		if (!$.stringEqual(vi, vj)) {
			return $.stringCompare(vi, vj) < 0
		}
	}

	// We should never arrive here. Multiple metrics with the same
	// label set in the same scrape will lead to undefined ingestion
	// behavior. However, as above, we have to provide stable sorting
	// here, even for inconsistent metrics. So sort equal metrics
	// by their timestamp, with missing timestamps (implying "now")
	// coming last.
	if ($.pointerValue<dto.Metric>($.arrayIndex(s!, i)).TimestampMs == null) {
		return false
	}
	if ($.pointerValue<dto.Metric>($.arrayIndex(s!, j)).TimestampMs == null) {
		return true
	}
	return dto.Metric.prototype.GetTimestampMs.call($.arrayIndex(s!, i)) < dto.Metric.prototype.GetTimestampMs.call($.arrayIndex(s!, j))
}

export async function NormalizeMetricFamilies(metricFamiliesByName: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null): globalThis.Promise<$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>> {
	for (const [__rangeKey, mf] of metricFamiliesByName?.entries() ?? []) {
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(($.pointerValue<dto.MetricFamily>(mf).Metric as metricSorter), "internal.metricSorter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	}
	let names: $.Slice<string> = $.makeSlice<string>(0, $.len(metricFamiliesByName), "string")
	for (const [name, mf] of metricFamiliesByName?.entries() ?? []) {
		if ($.sliceLen($.pointerValue<dto.MetricFamily>(mf).Metric) > 0) {
			names = $.appendOne(names, name)
		}
	}
	sort.Strings(names)
	let result: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> = $.makeSlice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(0, $.sliceLen(names))
	for (let __goscriptRangeTarget1 = names, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let name = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		result = $.appendOne(result, $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(metricFamiliesByName, name, null)[0], $.appendZeros.nil)
	}
	return result
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (metricSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (metricSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (metricSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"), "internal.metricSorter"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
