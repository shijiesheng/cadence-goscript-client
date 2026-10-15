// Generated file based on snapshot.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort2 from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_counter from "./counter.gs.ts"

import * as __goscript_gauge from "./gauge.gs.ts"

import * as __goscript_histogram from "./histogram.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/sync/index.js"
import "./counter.gs.ts"
import "./gauge.gs.ts"
import "./histogram.gs.ts"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./tag.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Snapshot", "metrics.HistogramSnapshot", "metrics.RootSnapshot"])

export class Snapshot {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Tags(): __goscript_tag.Tags {
		return this._fields.Tags
	}

	public set Tags(value: __goscript_tag.Tags) {
		this._fields.Tags = value
	}

	public get Value(): bigint {
		return this._fields.Value
	}

	public set Value(value: bigint) {
		this._fields.Value = value
	}

	public _fields: {
		Name: string
		Tags: __goscript_tag.Tags
		Value: bigint
	}

	constructor(init?: Partial<{Name?: string, Tags?: __goscript_tag.Tags, Value?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Tags: init?.Tags ?? (null! as __goscript_tag.Tags),
			Value: init?.Value ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Snapshot {
		return new Snapshot(this, true)
	}

	public __goscriptAssign(source: Snapshot): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Tags = values.Tags
		target.Value = values.Value
	}

	public async less(other: Snapshot): globalThis.Promise<boolean> {
		const s = this;
		if (!$.stringEqual(s.Name, other.Name)) {
			return $.stringCompare(s.Name, other.Name) < 0
		}
		return __goscript_tag.Tags_less(s.Tags, other.Tags)
	}

	static __typeInfo = $.registerStructType(
		"metrics.Snapshot",
		() => new Snapshot(),
		() => [$.methodSignature("less", [["other", "metrics.Snapshot"]], [/* @__PURE__ */ $.basicType("bool")])],
		Snapshot,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Tags", "metrics.Tags", [1], 16, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("int64"), [2], 24, true)]
	)
}

export class HistogramSnapshot {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Tags(): __goscript_tag.Tags {
		return this._fields.Tags
	}

	public set Tags(value: __goscript_tag.Tags) {
		this._fields.Tags = value
	}

	public get Unit(): time.Duration {
		return this._fields.Unit
	}

	public set Unit(value: time.Duration) {
		this._fields.Unit = value
	}

	public get Values(): $.Slice<bigint> {
		return this._fields.Values
	}

	public set Values(value: $.Slice<bigint>) {
		this._fields.Values = value
	}

	public _fields: {
		Name: string
		Tags: __goscript_tag.Tags
		Unit: time.Duration
		Values: $.Slice<bigint>
	}

	constructor(init?: Partial<{Name?: string, Tags?: __goscript_tag.Tags, Unit?: time.Duration, Values?: $.Slice<bigint>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Tags: init?.Tags ?? (null! as __goscript_tag.Tags),
			Unit: init?.Unit ?? (0n as time.Duration),
			Values: init?.Values ?? (null! as $.Slice<bigint>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramSnapshot {
		return new HistogramSnapshot(this, true)
	}

	public __goscriptAssign(source: HistogramSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Tags = values.Tags
		target.Unit = values.Unit
		target.Values = values.Values
	}

	public async less(other: HistogramSnapshot): globalThis.Promise<boolean> {
		const l = this;
		if (!$.stringEqual(l.Name, other.Name)) {
			return $.stringCompare(l.Name, other.Name) < 0
		}
		return __goscript_tag.Tags_less(l.Tags, other.Tags)
	}

	static __typeInfo = $.registerStructType(
		"metrics.HistogramSnapshot",
		() => new HistogramSnapshot(),
		() => [$.methodSignature("less", [["other", "metrics.HistogramSnapshot"]], [/* @__PURE__ */ $.basicType("bool")])],
		HistogramSnapshot,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Tags", "metrics.Tags", [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, true), /* @__PURE__ */ $.structField("Values", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [3], 32, true)]
	)
}

export class RootSnapshot {
	public get Counters(): $.Slice<Snapshot> {
		return this._fields.Counters
	}

	public set Counters(value: $.Slice<Snapshot>) {
		this._fields.Counters = value
	}

	public get Gauges(): $.Slice<Snapshot> {
		return this._fields.Gauges
	}

	public set Gauges(value: $.Slice<Snapshot>) {
		this._fields.Gauges = value
	}

	public get Histograms(): $.Slice<HistogramSnapshot> {
		return this._fields.Histograms
	}

	public set Histograms(value: $.Slice<HistogramSnapshot>) {
		this._fields.Histograms = value
	}

	public _fields: {
		Counters: $.Slice<Snapshot>
		Gauges: $.Slice<Snapshot>
		Histograms: $.Slice<HistogramSnapshot>
	}

	constructor(init?: Partial<{Counters?: $.Slice<Snapshot>, Gauges?: $.Slice<Snapshot>, Histograms?: $.Slice<HistogramSnapshot>}>, __goscriptValue?: boolean) {
		this._fields = {
			Counters: init?.Counters ?? (null! as $.Slice<Snapshot>),
			Gauges: init?.Gauges ?? (null! as $.Slice<Snapshot>),
			Histograms: init?.Histograms ?? (null! as $.Slice<HistogramSnapshot>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RootSnapshot {
		return new RootSnapshot(this, true)
	}

	public __goscriptAssign(source: RootSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.Counters = values.Counters
		target.Gauges = values.Gauges
		target.Histograms = values.Histograms
	}

	public async add(m: __goscript_metrics.metric | null): globalThis.Promise<void> {
		let s: RootSnapshot | $.VarRef<RootSnapshot> | null = this;
		const s$: RootSnapshot = s == null ? $.pointerTarget<RootSnapshot>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<RootSnapshot>(s)
		{
			const __goscriptTypeSwitchValue = m
			switch (true) {
				case $.typeAssert<__goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Counter")).ok:
					{
						let v: __goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null = $.typeAssert<__goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Counter")).value
						;(s$ as RootSnapshot).Counters = $.appendOne((s$ as RootSnapshot).Counters, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_counter.Counter).snapshot() : __goscript_counter.Counter.prototype.snapshot.call(v)))
					}
					break
				case $.typeAssert<__goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Gauge")).ok:
					{
						let v: __goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null = $.typeAssert<__goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Gauge")).value
						;(s$ as RootSnapshot).Gauges = $.appendOne((s$ as RootSnapshot).Gauges, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_gauge.Gauge).snapshot() : __goscript_gauge.Gauge.prototype.snapshot.call(v)))
					}
					break
				case $.typeAssert<__goscript_histogram.Histogram | $.VarRef<__goscript_histogram.Histogram> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Histogram")).ok:
					{
						let v: __goscript_histogram.Histogram | $.VarRef<__goscript_histogram.Histogram> | null = $.typeAssert<__goscript_histogram.Histogram | $.VarRef<__goscript_histogram.Histogram> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Histogram")).value
						;(s$ as RootSnapshot).Histograms = $.appendOne((s$ as RootSnapshot).Histograms, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_histogram.Histogram).snapshot() : __goscript_histogram.Histogram.prototype.snapshot.call(v)))
					}
					break
				case $.typeAssert<__goscript_counter.CounterVector | $.VarRef<__goscript_counter.CounterVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.CounterVector")).ok:
					{
						let v: __goscript_counter.CounterVector | $.VarRef<__goscript_counter.CounterVector> | null = $.typeAssert<__goscript_counter.CounterVector | $.VarRef<__goscript_counter.CounterVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.CounterVector")).value
						;(s$ as RootSnapshot).Counters = $.appendSlice((s$ as RootSnapshot).Counters, await $.pointerValue<__goscript_counter.CounterVector>(v).vector.snapshot())
					}
					break
				case $.typeAssert<__goscript_gauge.GaugeVector | $.VarRef<__goscript_gauge.GaugeVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.GaugeVector")).ok:
					{
						let v: __goscript_gauge.GaugeVector | $.VarRef<__goscript_gauge.GaugeVector> | null = $.typeAssert<__goscript_gauge.GaugeVector | $.VarRef<__goscript_gauge.GaugeVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.GaugeVector")).value
						;(s$ as RootSnapshot).Gauges = $.appendSlice((s$ as RootSnapshot).Gauges, await $.pointerValue<__goscript_gauge.GaugeVector>(v).vector.snapshot())
					}
					break
				case $.typeAssert<__goscript_histogram.HistogramVector | $.VarRef<__goscript_histogram.HistogramVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.HistogramVector")).ok:
					{
						let v: __goscript_histogram.HistogramVector | $.VarRef<__goscript_histogram.HistogramVector> | null = $.typeAssert<__goscript_histogram.HistogramVector | $.VarRef<__goscript_histogram.HistogramVector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.HistogramVector")).value
						;(s$ as RootSnapshot).Histograms = $.appendSlice((s$ as RootSnapshot).Histograms, await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_histogram.HistogramVector).snapshot() : __goscript_histogram.HistogramVector.prototype.snapshot.call(v)))
					}
					break
			}
		}
	}

	public async sort(): globalThis.Promise<void> {
		const s: RootSnapshot | $.VarRef<RootSnapshot> | null = this;
		const s$: RootSnapshot = s == null ? $.pointerTarget<RootSnapshot>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<RootSnapshot>(s)
		await sort2.Slice($.interfaceValue((s$ as RootSnapshot).Counters, "[]metrics.Snapshot", /* @__PURE__ */ $.sliceType("metrics.Snapshot")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return await $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as RootSnapshot).Counters!, i))).less(($.arrayIndex((s$ as RootSnapshot).Counters!, j)).clone())
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		await sort2.Slice($.interfaceValue((s$ as RootSnapshot).Gauges, "[]metrics.Snapshot", /* @__PURE__ */ $.sliceType("metrics.Snapshot")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return await $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as RootSnapshot).Gauges!, i))).less(($.arrayIndex((s$ as RootSnapshot).Gauges!, j)).clone())
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		await sort2.Slice($.interfaceValue((s$ as RootSnapshot).Histograms, "[]metrics.HistogramSnapshot", /* @__PURE__ */ $.sliceType("metrics.HistogramSnapshot")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return await $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as RootSnapshot).Histograms!, i))).less(($.arrayIndex((s$ as RootSnapshot).Histograms!, j)).clone())
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"metrics.RootSnapshot",
		() => new RootSnapshot(),
		() => [$.methodSignature("add", [["m", "metrics.metric"]], [], true), $.methodSignature("sort", [], [], true)],
		RootSnapshot,
		() => [/* @__PURE__ */ $.structField("Counters", /* @__PURE__ */ $.sliceType("metrics.Snapshot"), [0], 0, true), /* @__PURE__ */ $.structField("Gauges", /* @__PURE__ */ $.sliceType("metrics.Snapshot"), [1], 24, true), /* @__PURE__ */ $.structField("Histograms", /* @__PURE__ */ $.sliceType("metrics.HistogramSnapshot"), [2], 48, true)]
	)
}
