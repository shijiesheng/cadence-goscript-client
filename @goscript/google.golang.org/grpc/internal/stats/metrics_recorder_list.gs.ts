// Generated file based on metrics_recorder_list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as estats from "@goscript/google.golang.org/grpc/experimental/stats/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/experimental/stats/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/stats", ["stats.MetricsRecorderList"])

export class MetricsRecorderList {
	// metricsRecorders are the metrics recorders this list will forward to.
	public get metricsRecorders(): $.Slice<estats.MetricsRecorder | null> {
		return this._fields.metricsRecorders
	}

	public set metricsRecorders(value: $.Slice<estats.MetricsRecorder | null>) {
		this._fields.metricsRecorders = value
	}

	public _fields: {
		metricsRecorders: $.Slice<estats.MetricsRecorder | null>
	}

	constructor(init?: Partial<{metricsRecorders?: $.Slice<estats.MetricsRecorder | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			metricsRecorders: init?.metricsRecorders ?? (null! as $.Slice<estats.MetricsRecorder | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetricsRecorderList {
		return new MetricsRecorderList(this, true)
	}

	public __goscriptAssign(source: MetricsRecorderList): void {
		const target = this._fields
		const values = source._fields
		target.metricsRecorders = values.metricsRecorders
	}

	public async RecordFloat64Count(handle: estats.Float64CountHandle | $.VarRef<estats.Float64CountHandle> | null, incr: number, labels: $.Slice<string>): globalThis.Promise<void> {
		const l: MetricsRecorderList | $.VarRef<MetricsRecorderList> | null = this;
		await verifyLabels((handle !== null && (handle as any).__isVarRef !== true && (handle as any).__goValue === undefined ? ((handle as any) as estats.Float64CountHandle).Descriptor() : estats.Float64CountHandle.prototype.Descriptor.call(handle)), labels)

		for (let __goscriptRangeTarget0 = $.pointerValue<MetricsRecorderList>(l).metricsRecorders, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let metricRecorder = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as estats.MetricsRecorder | null)
			void (__goscriptAwait = (metricRecorder !== null && (metricRecorder as any).__isVarRef !== true && (metricRecorder as any).__goValue === undefined ? (metricRecorder as Exclude<estats.MetricsRecorder, null>) : $.pointerValue<Exclude<estats.MetricsRecorder, null>>(metricRecorder)).RecordFloat64Count(handle, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async RecordFloat64Histo(handle: estats.Float64HistoHandle | $.VarRef<estats.Float64HistoHandle> | null, incr: number, labels: $.Slice<string>): globalThis.Promise<void> {
		const l: MetricsRecorderList | $.VarRef<MetricsRecorderList> | null = this;
		await verifyLabels((handle !== null && (handle as any).__isVarRef !== true && (handle as any).__goValue === undefined ? ((handle as any) as estats.Float64HistoHandle).Descriptor() : estats.Float64HistoHandle.prototype.Descriptor.call(handle)), labels)

		for (let __goscriptRangeTarget1 = $.pointerValue<MetricsRecorderList>(l).metricsRecorders, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let metricRecorder = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as estats.MetricsRecorder | null)
			void (__goscriptAwait = (metricRecorder !== null && (metricRecorder as any).__isVarRef !== true && (metricRecorder as any).__goValue === undefined ? (metricRecorder as Exclude<estats.MetricsRecorder, null>) : $.pointerValue<Exclude<estats.MetricsRecorder, null>>(metricRecorder)).RecordFloat64Histo(handle, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async RecordInt64Count(handle: estats.Int64CountHandle | $.VarRef<estats.Int64CountHandle> | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const l: MetricsRecorderList | $.VarRef<MetricsRecorderList> | null = this;
		await verifyLabels((handle !== null && (handle as any).__isVarRef !== true && (handle as any).__goValue === undefined ? ((handle as any) as estats.Int64CountHandle).Descriptor() : estats.Int64CountHandle.prototype.Descriptor.call(handle)), labels)

		for (let __goscriptRangeTarget2 = $.pointerValue<MetricsRecorderList>(l).metricsRecorders, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let metricRecorder = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as estats.MetricsRecorder | null)
			void (__goscriptAwait = (metricRecorder !== null && (metricRecorder as any).__isVarRef !== true && (metricRecorder as any).__goValue === undefined ? (metricRecorder as Exclude<estats.MetricsRecorder, null>) : $.pointerValue<Exclude<estats.MetricsRecorder, null>>(metricRecorder)).RecordInt64Count(handle, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async RecordInt64Gauge(handle: estats.Int64GaugeHandle | $.VarRef<estats.Int64GaugeHandle> | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const l: MetricsRecorderList | $.VarRef<MetricsRecorderList> | null = this;
		await verifyLabels((handle !== null && (handle as any).__isVarRef !== true && (handle as any).__goValue === undefined ? ((handle as any) as estats.Int64GaugeHandle).Descriptor() : estats.Int64GaugeHandle.prototype.Descriptor.call(handle)), labels)

		for (let __goscriptRangeTarget3 = $.pointerValue<MetricsRecorderList>(l).metricsRecorders, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let metricRecorder = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as estats.MetricsRecorder | null)
			void (__goscriptAwait = (metricRecorder !== null && (metricRecorder as any).__isVarRef !== true && (metricRecorder as any).__goValue === undefined ? (metricRecorder as Exclude<estats.MetricsRecorder, null>) : $.pointerValue<Exclude<estats.MetricsRecorder, null>>(metricRecorder)).RecordInt64Gauge(handle, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async RecordInt64Histo(handle: estats.Int64HistoHandle | $.VarRef<estats.Int64HistoHandle> | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const l: MetricsRecorderList | $.VarRef<MetricsRecorderList> | null = this;
		await verifyLabels((handle !== null && (handle as any).__isVarRef !== true && (handle as any).__goValue === undefined ? ((handle as any) as estats.Int64HistoHandle).Descriptor() : estats.Int64HistoHandle.prototype.Descriptor.call(handle)), labels)

		for (let __goscriptRangeTarget4 = $.pointerValue<MetricsRecorderList>(l).metricsRecorders, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let metricRecorder = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as estats.MetricsRecorder | null)
			void (__goscriptAwait = (metricRecorder !== null && (metricRecorder as any).__isVarRef !== true && (metricRecorder as any).__goValue === undefined ? (metricRecorder as Exclude<estats.MetricsRecorder, null>) : $.pointerValue<Exclude<estats.MetricsRecorder, null>>(metricRecorder)).RecordInt64Histo(handle, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"stats.MetricsRecorderList",
		() => new MetricsRecorderList(),
		() => [$.methodSignature("RecordFloat64Count", [["handle", /* @__PURE__ */ $.pointerType("stats.Float64CountHandle")], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("RecordFloat64Histo", [["handle", /* @__PURE__ */ $.pointerType("stats.Float64HistoHandle")], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("RecordInt64Count", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64CountHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("RecordInt64Gauge", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64GaugeHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("RecordInt64Histo", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64HistoHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		MetricsRecorderList,
		() => [/* @__PURE__ */ $.structField("metricsRecorders", /* @__PURE__ */ $.sliceType("stats.MetricsRecorder"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/stats" })]
	)
}

export function NewMetricsRecorderList(shs: $.Slice<stats.Handler | null>): MetricsRecorderList | $.VarRef<MetricsRecorderList> | null {
	let mrs: $.Slice<estats.MetricsRecorder | null> = null! as $.Slice<estats.MetricsRecorder | null>
	for (let __goscriptRangeTarget5 = shs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let sh = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as stats.Handler | null)
		{
			let [mr, ok] = $.typeAssertTuple<estats.MetricsRecorder | null>(sh, "stats.MetricsRecorder")
			if (ok) {
				mrs = $.appendOne(mrs, mr, $.appendZeros.nil)
			}
		}
	}
	return new MetricsRecorderList({metricsRecorders: mrs})
}

export async function verifyLabels(desc: estats.MetricDescriptor | $.VarRef<estats.MetricDescriptor> | null, labelsRecv: $.Slice<string>): globalThis.Promise<void> {
	const desc$: estats.MetricDescriptor = desc == null ? $.pointerTarget<estats.MetricDescriptor>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<estats.MetricDescriptor>(desc)
	{
		let got = $.sliceLen(labelsRecv)
		let want = $.sliceLen((desc$ as estats.MetricDescriptor).Labels) + $.sliceLen((desc$ as estats.MetricDescriptor).OptionalLabels)
		if (got != want) {
			$.panic(await fmt.Sprintf("Received %d labels in call to record metric %q, but expected %d.", $.basicInterfaceValue(got, "int"), $.namedValueInterfaceValue<any>((desc$ as estats.MetricDescriptor).Name, "stats.Metric", {}, /* @__PURE__ */ $.basicType("string", "stats.Metric")), $.basicInterfaceValue(want, "int")))
		}
	}
}

var __goscriptAwait: any
