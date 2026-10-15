// Generated file based on metricregistry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as maps from "@goscript/maps/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_metrics from "./metrics.gs.ts"
import "@goscript/maps/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./metrics.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/experimental/stats", ["stats.MetricDescriptor", "stats.MetricType", "stats.Int64CountHandle", "stats.Float64CountHandle", "stats.Int64HistoHandle", "stats.Float64HistoHandle", "stats.Int64GaugeHandle"])

export type MetricType = number

export class MetricDescriptor {
	// The name of this metric. This name must be unique across the whole binary
	// (including any per call metrics). See
	// https://github.com/grpc/proposal/blob/master/A79-non-per-call-metrics-architecture.md#metric-instrument-naming-conventions
	// for metric naming conventions.
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	// The description of this metric.
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	// The unit (e.g. entries, seconds) of this metric.
	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	// The required label keys for this metric. These are intended to
	// metrics emitted from a stats handler.
	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	// The optional label keys for this metric. These are intended to attached
	// to metrics emitted from a stats handler if configured.
	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	// Whether this metric is on by default.
	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	// The type of metric. This is set by the metric registry, and not intended
	// to be set by a component registering a metric.
	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	// Bounds are the bounds of this metric. This only applies to histogram
	// metrics. If unset or set with length 0, stats handlers will fall back to
	// default bounds.
	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetricDescriptor {
		return new MetricDescriptor(this, true)
	}

	public __goscriptAssign(source: MetricDescriptor): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	static __typeInfo = $.registerStructType(
		"stats.MetricDescriptor",
		() => new MetricDescriptor(),
		() => [],
		MetricDescriptor,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export class Int64CountHandle {
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int64CountHandle {
		return new Int64CountHandle(this, true)
	}

	public __goscriptAssign(source: Int64CountHandle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	public Descriptor(): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
		const h: Int64CountHandle | $.VarRef<Int64CountHandle> | null = this;
		return $.unsafePointerCast<MetricDescriptor | $.VarRef<MetricDescriptor> | null>(h, MetricDescriptor)
	}

	public async Record(recorder: __goscript_metrics.MetricsRecorder | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const h: Int64CountHandle | $.VarRef<Int64CountHandle> | null = this;
		void (__goscriptAwait = (recorder !== null && (recorder as any).__isVarRef !== true && (recorder as any).__goValue === undefined ? (recorder as Exclude<__goscript_metrics.MetricsRecorder, null>) : $.pointerValue<Exclude<__goscript_metrics.MetricsRecorder, null>>(recorder)).RecordInt64Count(h, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"stats.Int64CountHandle",
		() => new Int64CountHandle(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.pointerType("stats.MetricDescriptor")], true), $.methodSignature("Record", [["recorder", "stats.MetricsRecorder"], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Int64CountHandle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export class Float64CountHandle {
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Float64CountHandle {
		return new Float64CountHandle(this, true)
	}

	public __goscriptAssign(source: Float64CountHandle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	public Descriptor(): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
		const h: Float64CountHandle | $.VarRef<Float64CountHandle> | null = this;
		return $.unsafePointerCast<MetricDescriptor | $.VarRef<MetricDescriptor> | null>(h, MetricDescriptor)
	}

	public async Record(recorder: __goscript_metrics.MetricsRecorder | null, incr: number, labels: $.Slice<string>): globalThis.Promise<void> {
		const h: Float64CountHandle | $.VarRef<Float64CountHandle> | null = this;
		void (__goscriptAwait = (recorder !== null && (recorder as any).__isVarRef !== true && (recorder as any).__goValue === undefined ? (recorder as Exclude<__goscript_metrics.MetricsRecorder, null>) : $.pointerValue<Exclude<__goscript_metrics.MetricsRecorder, null>>(recorder)).RecordFloat64Count(h, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"stats.Float64CountHandle",
		() => new Float64CountHandle(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.pointerType("stats.MetricDescriptor")], true), $.methodSignature("Record", [["recorder", "stats.MetricsRecorder"], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Float64CountHandle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export class Int64HistoHandle {
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int64HistoHandle {
		return new Int64HistoHandle(this, true)
	}

	public __goscriptAssign(source: Int64HistoHandle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	public Descriptor(): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
		const h: Int64HistoHandle | $.VarRef<Int64HistoHandle> | null = this;
		return $.unsafePointerCast<MetricDescriptor | $.VarRef<MetricDescriptor> | null>(h, MetricDescriptor)
	}

	public async Record(recorder: __goscript_metrics.MetricsRecorder | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const h: Int64HistoHandle | $.VarRef<Int64HistoHandle> | null = this;
		void (__goscriptAwait = (recorder !== null && (recorder as any).__isVarRef !== true && (recorder as any).__goValue === undefined ? (recorder as Exclude<__goscript_metrics.MetricsRecorder, null>) : $.pointerValue<Exclude<__goscript_metrics.MetricsRecorder, null>>(recorder)).RecordInt64Histo(h, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"stats.Int64HistoHandle",
		() => new Int64HistoHandle(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.pointerType("stats.MetricDescriptor")], true), $.methodSignature("Record", [["recorder", "stats.MetricsRecorder"], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Int64HistoHandle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export class Float64HistoHandle {
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Float64HistoHandle {
		return new Float64HistoHandle(this, true)
	}

	public __goscriptAssign(source: Float64HistoHandle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	public Descriptor(): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
		const h: Float64HistoHandle | $.VarRef<Float64HistoHandle> | null = this;
		return $.unsafePointerCast<MetricDescriptor | $.VarRef<MetricDescriptor> | null>(h, MetricDescriptor)
	}

	public async Record(recorder: __goscript_metrics.MetricsRecorder | null, incr: number, labels: $.Slice<string>): globalThis.Promise<void> {
		const h: Float64HistoHandle | $.VarRef<Float64HistoHandle> | null = this;
		void (__goscriptAwait = (recorder !== null && (recorder as any).__isVarRef !== true && (recorder as any).__goValue === undefined ? (recorder as Exclude<__goscript_metrics.MetricsRecorder, null>) : $.pointerValue<Exclude<__goscript_metrics.MetricsRecorder, null>>(recorder)).RecordFloat64Histo(h, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"stats.Float64HistoHandle",
		() => new Float64HistoHandle(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.pointerType("stats.MetricDescriptor")], true), $.methodSignature("Record", [["recorder", "stats.MetricsRecorder"], ["incr", /* @__PURE__ */ $.basicType("float64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Float64HistoHandle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export class Int64GaugeHandle {
	public get Name(): __goscript_metrics.Metric {
		return this._fields.Name
	}

	public set Name(value: __goscript_metrics.Metric) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get Unit(): string {
		return this._fields.Unit
	}

	public set Unit(value: string) {
		this._fields.Unit = value
	}

	public get Labels(): $.Slice<string> {
		return this._fields.Labels
	}

	public set Labels(value: $.Slice<string>) {
		this._fields.Labels = value
	}

	public get OptionalLabels(): $.Slice<string> {
		return this._fields.OptionalLabels
	}

	public set OptionalLabels(value: $.Slice<string>) {
		this._fields.OptionalLabels = value
	}

	public get Default(): boolean {
		return this._fields.Default
	}

	public set Default(value: boolean) {
		this._fields.Default = value
	}

	public get Type(): MetricType {
		return this._fields.Type
	}

	public set Type(value: MetricType) {
		this._fields.Type = value
	}

	public get Bounds(): $.Slice<number> {
		return this._fields.Bounds
	}

	public set Bounds(value: $.Slice<number>) {
		this._fields.Bounds = value
	}

	public _fields: {
		Name: __goscript_metrics.Metric
		Description: string
		Unit: string
		Labels: $.Slice<string>
		OptionalLabels: $.Slice<string>
		Default: boolean
		Type: MetricType
		Bounds: $.Slice<number>
	}

	constructor(init?: Partial<{Name?: __goscript_metrics.Metric, Description?: string, Unit?: string, Labels?: $.Slice<string>, OptionalLabels?: $.Slice<string>, Default?: boolean, Type?: MetricType, Bounds?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_metrics.Metric),
			Description: init?.Description ?? ("" as string),
			Unit: init?.Unit ?? ("" as string),
			Labels: init?.Labels ?? (null! as $.Slice<string>),
			OptionalLabels: init?.OptionalLabels ?? (null! as $.Slice<string>),
			Default: init?.Default ?? (false as boolean),
			Type: init?.Type ?? (0 as MetricType),
			Bounds: init?.Bounds ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int64GaugeHandle {
		return new Int64GaugeHandle(this, true)
	}

	public __goscriptAssign(source: Int64GaugeHandle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Description = values.Description
		target.Unit = values.Unit
		target.Labels = values.Labels
		target.OptionalLabels = values.OptionalLabels
		target.Default = values.Default
		target.Type = values.Type
		target.Bounds = values.Bounds
	}

	public Descriptor(): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
		const h: Int64GaugeHandle | $.VarRef<Int64GaugeHandle> | null = this;
		return $.unsafePointerCast<MetricDescriptor | $.VarRef<MetricDescriptor> | null>(h, MetricDescriptor)
	}

	public async Record(recorder: __goscript_metrics.MetricsRecorder | null, incr: bigint, labels: $.Slice<string>): globalThis.Promise<void> {
		const h: Int64GaugeHandle | $.VarRef<Int64GaugeHandle> | null = this;
		void (__goscriptAwait = (recorder !== null && (recorder as any).__isVarRef !== true && (recorder as any).__goValue === undefined ? (recorder as Exclude<__goscript_metrics.MetricsRecorder, null>) : $.pointerValue<Exclude<__goscript_metrics.MetricsRecorder, null>>(recorder)).RecordInt64Gauge(h, incr, labels), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"stats.Int64GaugeHandle",
		() => new Int64GaugeHandle(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.pointerType("stats.MetricDescriptor")], true), $.methodSignature("Record", [["recorder", "stats.MetricsRecorder"], ["incr", /* @__PURE__ */ $.basicType("int64")], ["labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Int64GaugeHandle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "stats.Metric"), [0], 0, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Labels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("OptionalLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 72, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("bool"), [5], 96, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "stats.MetricType"), [6], 104, true), /* @__PURE__ */ $.structField("Bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [7], 112, true)]
	)
}

export const MetricTypeIntCount: MetricType = 0

export const MetricTypeFloatCount: MetricType = 1

export const MetricTypeIntHisto: MetricType = 2

export const MetricTypeFloatHisto: MetricType = 3

export const MetricTypeIntGauge: MetricType = 4

function __goscriptInit0(): void {
	internal.__goscript_set_SnapshotMetricRegistryForTesting(snapshotMetricsRegistryForTesting)
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("metrics-registry")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export var DefaultMetrics: __goscript_metrics.Metrics | $.VarRef<__goscript_metrics.Metrics> | null

export function __goscript_init_DefaultMetrics(): void {
	if (((DefaultMetrics) as any) === undefined) {
		DefaultMetrics = __goscript_metrics.NewMetrics(null)
	}
}

export function __goscript_get_DefaultMetrics(): __goscript_metrics.Metrics | $.VarRef<__goscript_metrics.Metrics> | null {
	if (((DefaultMetrics) as any) === undefined) {
		__goscript_init_DefaultMetrics()
	}
	return DefaultMetrics
}

export function __goscript_set_DefaultMetrics(__goscriptValue: __goscript_metrics.Metrics | $.VarRef<__goscript_metrics.Metrics> | null): void {
	DefaultMetrics = __goscriptValue
}

export var registeredMetrics: globalThis.Map<__goscript_metrics.Metric, boolean> | null

export function __goscript_init_registeredMetrics(): void {
	if (((registeredMetrics) as any) === undefined) {
		registeredMetrics = $.makeMap<__goscript_metrics.Metric, boolean>()
	}
}

export function __goscript_get_registeredMetrics(): globalThis.Map<__goscript_metrics.Metric, boolean> | null {
	if (((registeredMetrics) as any) === undefined) {
		__goscript_init_registeredMetrics()
	}
	return registeredMetrics
}

export function __goscript_set_registeredMetrics(__goscriptValue: globalThis.Map<__goscript_metrics.Metric, boolean> | null): void {
	registeredMetrics = __goscriptValue
}

export var metricsRegistry: globalThis.Map<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null> | null

export function __goscript_init_metricsRegistry(): void {
	if (((metricsRegistry) as any) === undefined) {
		metricsRegistry = $.makeMap<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null>()
	}
}

export function __goscript_get_metricsRegistry(): globalThis.Map<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null> | null {
	if (((metricsRegistry) as any) === undefined) {
		__goscript_init_metricsRegistry()
	}
	return metricsRegistry
}

export function __goscript_set_metricsRegistry(__goscriptValue: globalThis.Map<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null> | null): void {
	metricsRegistry = __goscriptValue
}

export function DescriptorForMetric(metric: __goscript_metrics.Metric): MetricDescriptor | $.VarRef<MetricDescriptor> | null {
	return $.mapGet<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null, MetricDescriptor | $.VarRef<MetricDescriptor> | null>(__goscript_get_metricsRegistry(), metric, null)[0]
}

export async function registerMetric(name: __goscript_metrics.Metric, def: boolean): globalThis.Promise<void> {
	if ($.mapGet<__goscript_metrics.Metric, boolean, boolean>(__goscript_get_registeredMetrics(), name, false)[0]) {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Fatalf("metric %v already registered", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "stats.Metric", {}, /* @__PURE__ */ $.basicType("string", "stats.Metric"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	$.mapSet(__goscript_get_registeredMetrics(), name, true)
	if (def) {
		__goscript_set_DefaultMetrics(__goscript_metrics.Metrics.prototype.Add.call(__goscript_get_DefaultMetrics(), $.arrayToSlice<__goscript_metrics.Metric>([name])))
	}
}

export async function RegisterInt64Count(__goscriptParam0: MetricDescriptor): globalThis.Promise<Int64CountHandle | $.VarRef<Int64CountHandle> | null> {
	let descriptor: $.VarRef<MetricDescriptor> = $.varRef(__goscriptParam0)
	await registerMetric(descriptor.value.Name, descriptor.value.Default)
	descriptor.value.Type = 0
	let descPtr: MetricDescriptor | $.VarRef<MetricDescriptor> | null = descriptor
	$.mapSet(__goscript_get_metricsRegistry(), descriptor.value.Name, descPtr)
	return $.unsafePointerCast<Int64CountHandle | $.VarRef<Int64CountHandle> | null>(descPtr, Int64CountHandle)
}

export async function RegisterFloat64Count(__goscriptParam1: MetricDescriptor): globalThis.Promise<Float64CountHandle | $.VarRef<Float64CountHandle> | null> {
	let descriptor: $.VarRef<MetricDescriptor> = $.varRef(__goscriptParam1)
	await registerMetric(descriptor.value.Name, descriptor.value.Default)
	descriptor.value.Type = 1
	let descPtr: MetricDescriptor | $.VarRef<MetricDescriptor> | null = descriptor
	$.mapSet(__goscript_get_metricsRegistry(), descriptor.value.Name, descPtr)
	return $.unsafePointerCast<Float64CountHandle | $.VarRef<Float64CountHandle> | null>(descPtr, Float64CountHandle)
}

export async function RegisterInt64Histo(__goscriptParam2: MetricDescriptor): globalThis.Promise<Int64HistoHandle | $.VarRef<Int64HistoHandle> | null> {
	let descriptor: $.VarRef<MetricDescriptor> = $.varRef(__goscriptParam2)
	await registerMetric(descriptor.value.Name, descriptor.value.Default)
	descriptor.value.Type = 2
	let descPtr: MetricDescriptor | $.VarRef<MetricDescriptor> | null = descriptor
	$.mapSet(__goscript_get_metricsRegistry(), descriptor.value.Name, descPtr)
	return $.unsafePointerCast<Int64HistoHandle | $.VarRef<Int64HistoHandle> | null>(descPtr, Int64HistoHandle)
}

export async function RegisterFloat64Histo(__goscriptParam3: MetricDescriptor): globalThis.Promise<Float64HistoHandle | $.VarRef<Float64HistoHandle> | null> {
	let descriptor: $.VarRef<MetricDescriptor> = $.varRef(__goscriptParam3)
	await registerMetric(descriptor.value.Name, descriptor.value.Default)
	descriptor.value.Type = 3
	let descPtr: MetricDescriptor | $.VarRef<MetricDescriptor> | null = descriptor
	$.mapSet(__goscript_get_metricsRegistry(), descriptor.value.Name, descPtr)
	return $.unsafePointerCast<Float64HistoHandle | $.VarRef<Float64HistoHandle> | null>(descPtr, Float64HistoHandle)
}

export async function RegisterInt64Gauge(__goscriptParam4: MetricDescriptor): globalThis.Promise<Int64GaugeHandle | $.VarRef<Int64GaugeHandle> | null> {
	let descriptor: $.VarRef<MetricDescriptor> = $.varRef(__goscriptParam4)
	await registerMetric(descriptor.value.Name, descriptor.value.Default)
	descriptor.value.Type = 4
	let descPtr: MetricDescriptor | $.VarRef<MetricDescriptor> | null = descriptor
	$.mapSet(__goscript_get_metricsRegistry(), descriptor.value.Name, descPtr)
	return $.unsafePointerCast<Int64GaugeHandle | $.VarRef<Int64GaugeHandle> | null>(descPtr, Int64GaugeHandle)
}

export function snapshotMetricsRegistryForTesting(): (() => void) | null {
	let oldDefaultMetrics: __goscript_metrics.Metrics | $.VarRef<__goscript_metrics.Metrics> | null = __goscript_get_DefaultMetrics()
	let oldRegisteredMetrics: globalThis.Map<__goscript_metrics.Metric, boolean> | null = __goscript_get_registeredMetrics()
	let oldMetricsRegistry: globalThis.Map<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null> | null = __goscript_get_metricsRegistry()

	__goscript_set_registeredMetrics($.makeMap<__goscript_metrics.Metric, boolean>())
	__goscript_set_metricsRegistry($.makeMap<__goscript_metrics.Metric, MetricDescriptor | $.VarRef<MetricDescriptor> | null>())
	maps.Copy(__goscript_get_registeredMetrics(), __goscript_get_registeredMetrics())
	maps.Copy(__goscript_get_metricsRegistry(), __goscript_get_metricsRegistry())

	return $.functionValue((): void => {
		__goscript_set_DefaultMetrics(oldDefaultMetrics)
		__goscript_set_registeredMetrics(oldRegisteredMetrics)
		__goscript_set_metricsRegistry(oldMetricsRegistry)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any

export { __goscriptInit0 }
