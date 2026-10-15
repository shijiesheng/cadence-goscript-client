// Generated file based on metrics.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as maps from "@goscript/maps/index.js"

import * as __goscript_metricregistry from "./metricregistry.gs.ts"
import "@goscript/maps/index.js"
import "./metricregistry.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/experimental/stats", ["stats.MetricsRecorder", "stats.Metric", "stats.Metrics"])

export type MetricsRecorder = {
	RecordFloat64Count(handle: __goscript_metricregistry.Float64CountHandle | $.VarRef<__goscript_metricregistry.Float64CountHandle> | null, incr: number, labels: $.Slice<string>): void
	RecordFloat64Histo(handle: __goscript_metricregistry.Float64HistoHandle | $.VarRef<__goscript_metricregistry.Float64HistoHandle> | null, incr: number, labels: $.Slice<string>): void
	RecordInt64Count(handle: __goscript_metricregistry.Int64CountHandle | $.VarRef<__goscript_metricregistry.Int64CountHandle> | null, incr: bigint, labels: $.Slice<string>): void
	RecordInt64Gauge(handle: __goscript_metricregistry.Int64GaugeHandle | $.VarRef<__goscript_metricregistry.Int64GaugeHandle> | null, incr: bigint, labels: $.Slice<string>): void
	RecordInt64Histo(handle: __goscript_metricregistry.Int64HistoHandle | $.VarRef<__goscript_metricregistry.Int64HistoHandle> | null, incr: bigint, labels: $.Slice<string>): void
}

$.registerInterfaceType(
	"stats.MetricsRecorder",
	null,
	[$.methodSignature("RecordFloat64Count", [["handle", /* @__PURE__ */ $.pointerType("stats.Float64CountHandle")], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("RecordFloat64Histo", [["handle", /* @__PURE__ */ $.pointerType("stats.Float64HistoHandle")], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("RecordInt64Count", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64CountHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("RecordInt64Gauge", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64GaugeHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("RecordInt64Histo", [["handle", /* @__PURE__ */ $.pointerType("stats.Int64HistoHandle")], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]])]
);

export type Metric = string

export class Metrics {
	// metrics are the set of metrics to initialize.
	public get metrics(): globalThis.Map<Metric, boolean> | null {
		return this._fields.metrics
	}

	public set metrics(value: globalThis.Map<Metric, boolean> | null) {
		this._fields.metrics = value
	}

	public _fields: {
		metrics: globalThis.Map<Metric, boolean> | null
	}

	constructor(init?: Partial<{metrics?: globalThis.Map<Metric, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			metrics: init?.metrics ?? (null! as globalThis.Map<Metric, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Metrics {
		return new Metrics(this, true)
	}

	public __goscriptAssign(source: Metrics): void {
		const target = this._fields
		const values = source._fields
		target.metrics = values.metrics
	}

	public Add(metrics: $.Slice<Metric>): Metrics | $.VarRef<Metrics> | null {
		const m: Metrics | $.VarRef<Metrics> | null = this;
		let newMetrics: globalThis.Map<Metric, boolean> | null = $.makeMap<Metric, boolean>()
		for (let [metric, __rangeValue] of $.pointerValue<Metrics>(m).metrics?.entries() ?? []) {
			$.mapSet(newMetrics, metric, true)
		}

		for (let __goscriptRangeTarget0 = metrics, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let metric = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Metric)
			$.mapSet(newMetrics, metric, true)
		}
		return new Metrics({metrics: newMetrics})
	}

	public Join(metrics: Metrics | $.VarRef<Metrics> | null): Metrics | $.VarRef<Metrics> | null {
		const m: Metrics | $.VarRef<Metrics> | null = this;
		let newMetrics: globalThis.Map<Metric, boolean> | null = $.makeMap<Metric, boolean>()
		maps.Copy(newMetrics, $.pointerValue<Metrics>(m).metrics)
		maps.Copy(newMetrics, $.pointerValue<Metrics>(metrics).metrics)
		return new Metrics({metrics: newMetrics})
	}

	public Metrics(): globalThis.Map<Metric, boolean> | null {
		const m: Metrics | $.VarRef<Metrics> | null = this;
		return $.pointerValue<Metrics>(m).metrics
	}

	public Remove(metrics: $.Slice<Metric>): Metrics | $.VarRef<Metrics> | null {
		const m: Metrics | $.VarRef<Metrics> | null = this;
		let newMetrics: globalThis.Map<Metric, boolean> | null = $.makeMap<Metric, boolean>()
		for (let [metric, __rangeValue] of $.pointerValue<Metrics>(m).metrics?.entries() ?? []) {
			$.mapSet(newMetrics, metric, true)
		}

		for (let __goscriptRangeTarget1 = metrics, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let metric = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Metric)
			$.deleteMapEntry(newMetrics, metric)
		}
		return new Metrics({metrics: newMetrics})
	}

	static __typeInfo = $.registerStructType(
		"stats.Metrics",
		() => new Metrics(),
		() => [$.methodSignature("Add", [["metrics", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "stats.Metric"))]], [/* @__PURE__ */ $.pointerType("stats.Metrics")], true), $.methodSignature("Join", [["metrics", /* @__PURE__ */ $.pointerType("stats.Metrics")]], [/* @__PURE__ */ $.pointerType("stats.Metrics")], true), $.methodSignature("Metrics", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "stats.Metric"), /* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("Remove", [["metrics", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "stats.Metric"))]], [/* @__PURE__ */ $.pointerType("stats.Metrics")], true)],
		Metrics,
		() => [/* @__PURE__ */ $.structField("metrics", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "stats.Metric"), /* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "google.golang.org/grpc/experimental/stats" })]
	)
}

export function NewMetrics(metrics: $.Slice<Metric>): Metrics | $.VarRef<Metrics> | null {
	let newMetrics: globalThis.Map<Metric, boolean> | null = $.makeMap<Metric, boolean>()
	for (let __goscriptRangeTarget2 = metrics, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let metric = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Metric)
		$.mapSet(newMetrics, metric, true)
	}
	return new Metrics({metrics: newMetrics})
}
