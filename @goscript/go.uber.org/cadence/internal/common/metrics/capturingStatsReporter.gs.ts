// Generated file based on capturingStatsReporter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_scope from "./scope.gs.ts"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/sync/index.js"
import "./scope.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/metrics", ["metrics.realClock", "metrics.CapturingStatsReporter", "metrics.CapturedCount", "metrics.CapturedGauge", "metrics.CapturedTimer", "metrics.CapturedHistogramValueSamples", "metrics.CapturedHistogramDurationSamples"])

export class realClock {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): realClock {
		return new realClock(this, true)
	}

	public __goscriptAssign(source: realClock): void {
	}

	public Now(): time.Time {
		const c: realClock | $.VarRef<realClock> | null = this;
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	static __typeInfo = $.registerStructType(
		"metrics.realClock",
		() => new realClock(),
		() => [$.methodSignature("Now", [], ["time.Time"], true)],
		realClock,
		() => []
	)
}

export class CapturingStatsReporter {
	public get counts(): $.Slice<CapturedCount> {
		return this._fields.counts
	}

	public set counts(value: $.Slice<CapturedCount>) {
		this._fields.counts = value
	}

	public get gauges(): $.Slice<CapturedGauge> {
		return this._fields.gauges
	}

	public set gauges(value: $.Slice<CapturedGauge>) {
		this._fields.gauges = value
	}

	public get timers(): $.Slice<CapturedTimer> {
		return this._fields.timers
	}

	public set timers(value: $.Slice<CapturedTimer>) {
		this._fields.timers = value
	}

	public get histogramValueSamples(): $.Slice<CapturedHistogramValueSamples> {
		return this._fields.histogramValueSamples
	}

	public set histogramValueSamples(value: $.Slice<CapturedHistogramValueSamples>) {
		this._fields.histogramValueSamples = value
	}

	public get histogramDurationSamples(): $.Slice<CapturedHistogramDurationSamples> {
		return this._fields.histogramDurationSamples
	}

	public set histogramDurationSamples(value: $.Slice<CapturedHistogramDurationSamples>) {
		this._fields.histogramDurationSamples = value
	}

	public get capabilities(): number {
		return this._fields.capabilities
	}

	public set capabilities(value: number) {
		this._fields.capabilities = value
	}

	public get flush(): number {
		return this._fields.flush
	}

	public set flush(value: number) {
		this._fields.flush = value
	}

	public _fields: {
		counts: $.Slice<CapturedCount>
		gauges: $.Slice<CapturedGauge>
		timers: $.Slice<CapturedTimer>
		histogramValueSamples: $.Slice<CapturedHistogramValueSamples>
		histogramDurationSamples: $.Slice<CapturedHistogramDurationSamples>
		capabilities: number
		flush: number
	}

	constructor(init?: Partial<{counts?: $.Slice<CapturedCount>, gauges?: $.Slice<CapturedGauge>, timers?: $.Slice<CapturedTimer>, histogramValueSamples?: $.Slice<CapturedHistogramValueSamples>, histogramDurationSamples?: $.Slice<CapturedHistogramDurationSamples>, capabilities?: number, flush?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			counts: init?.counts ?? (null! as $.Slice<CapturedCount>),
			gauges: init?.gauges ?? (null! as $.Slice<CapturedGauge>),
			timers: init?.timers ?? (null! as $.Slice<CapturedTimer>),
			histogramValueSamples: init?.histogramValueSamples ?? (null! as $.Slice<CapturedHistogramValueSamples>),
			histogramDurationSamples: init?.histogramDurationSamples ?? (null! as $.Slice<CapturedHistogramDurationSamples>),
			capabilities: init?.capabilities ?? (0 as number),
			flush: init?.flush ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturingStatsReporter {
		return new CapturingStatsReporter(this, true)
	}

	public __goscriptAssign(source: CapturingStatsReporter): void {
		const target = this._fields
		const values = source._fields
		target.counts = values.counts
		target.gauges = values.gauges
		target.timers = values.timers
		target.histogramValueSamples = values.histogramValueSamples
		target.histogramDurationSamples = values.histogramDurationSamples
		target.capabilities = values.capabilities
		target.flush = values.flush
	}

	public Capabilities(): tally.Capabilities | null {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c);
		;(c$ as CapturingStatsReporter).capabilities++
		return $.interfaceValue<tally.Capabilities | null>(c, "*metrics.CapturingStatsReporter", /* @__PURE__ */ $.pointerType("metrics.CapturingStatsReporter"))
	}

	public Counts(): $.Slice<CapturedCount> {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return $.pointerValue<CapturingStatsReporter>(c).counts
	}

	public Flush(): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c);
		;(c$ as CapturingStatsReporter).flush++
	}

	public Gauges(): $.Slice<CapturedGauge> {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return $.pointerValue<CapturingStatsReporter>(c).gauges
	}

	public HistogramDurationSamples(): $.Slice<CapturedHistogramDurationSamples> {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return $.pointerValue<CapturingStatsReporter>(c).histogramDurationSamples
	}

	public HistogramValueSamples(): $.Slice<CapturedHistogramValueSamples> {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return $.pointerValue<CapturingStatsReporter>(c).histogramValueSamples
	}

	public ReportCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c);
		;(c$ as CapturingStatsReporter).counts = $.appendOne((c$ as CapturingStatsReporter).counts, new CapturedCount({name: name, tags: tags, value: value}, true))
	}

	public ReportGauge(name: string, tags: globalThis.Map<string, string> | null, value: number): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c);
		;(c$ as CapturingStatsReporter).gauges = $.appendOne((c$ as CapturingStatsReporter).gauges, new CapturedGauge({name: name, tags: tags, value: value}, true))
	}

	public ReportHistogramDurationSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: tally.Buckets | null, bucketLowerBound: time.Duration, bucketUpperBound: time.Duration, samples: bigint): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c)
		let elem = new CapturedHistogramDurationSamples({name: name, tags: tags, bucketLowerBound: bucketLowerBound, bucketUpperBound: bucketUpperBound, samples: samples}, true);
		;(c$ as CapturingStatsReporter).histogramDurationSamples = $.appendOne((c$ as CapturingStatsReporter).histogramDurationSamples, (elem).clone())
	}

	public ReportHistogramValueSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: tally.Buckets | null, bucketLowerBound: number, bucketUpperBound: number, samples: bigint): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c)
		let elem = new CapturedHistogramValueSamples({name: name, tags: tags, bucketLowerBound: bucketLowerBound, bucketUpperBound: bucketUpperBound, samples: samples}, true);
		;(c$ as CapturingStatsReporter).histogramValueSamples = $.appendOne((c$ as CapturingStatsReporter).histogramValueSamples, (elem).clone())
	}

	public ReportTimer(name: string, tags: globalThis.Map<string, string> | null, value: time.Duration): void {
		let c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		const c$: CapturingStatsReporter = c == null ? $.pointerTarget<CapturingStatsReporter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CapturingStatsReporter>(c);
		;(c$ as CapturingStatsReporter).timers = $.appendOne((c$ as CapturingStatsReporter).timers, new CapturedTimer({name: name, tags: tags, value: value}, true))
	}

	public Reporting(): boolean {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return true
	}

	public Tagging(): boolean {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return true
	}

	public Timers(): $.Slice<CapturedTimer> {
		const c: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = this;
		return $.pointerValue<CapturingStatsReporter>(c).timers
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturingStatsReporter",
		() => new CapturingStatsReporter(),
		() => [$.methodSignature("Capabilities", [], ["tally.Capabilities"], true), $.methodSignature("Counts", [], [/* @__PURE__ */ $.sliceType("metrics.CapturedCount")], true), $.methodSignature("Flush", [], [], true), $.methodSignature("Gauges", [], [/* @__PURE__ */ $.sliceType("metrics.CapturedGauge")], true), $.methodSignature("HistogramDurationSamples", [], [/* @__PURE__ */ $.sliceType("metrics.CapturedHistogramDurationSamples")], true), $.methodSignature("HistogramValueSamples", [], [/* @__PURE__ */ $.sliceType("metrics.CapturedHistogramValueSamples")], true), $.methodSignature("ReportCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("ReportGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("ReportHistogramDurationSamples", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["buckets", "tally.Buckets"], ["bucketLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["samples", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("ReportHistogramValueSamples", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["buckets", "tally.Buckets"], ["bucketLowerBound", /* @__PURE__ */ $.basicType("float64")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("float64")], ["samples", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("ReportTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Reporting", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Tagging", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timers", [], [/* @__PURE__ */ $.sliceType("metrics.CapturedTimer")], true)],
		CapturingStatsReporter,
		() => [/* @__PURE__ */ $.structField("counts", /* @__PURE__ */ $.sliceType("metrics.CapturedCount"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("gauges", /* @__PURE__ */ $.sliceType("metrics.CapturedGauge"), [1], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("timers", /* @__PURE__ */ $.sliceType("metrics.CapturedTimer"), [2], 48, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("histogramValueSamples", /* @__PURE__ */ $.sliceType("metrics.CapturedHistogramValueSamples"), [3], 72, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("histogramDurationSamples", /* @__PURE__ */ $.sliceType("metrics.CapturedHistogramDurationSamples"), [4], 96, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("capabilities", /* @__PURE__ */ $.basicType("int"), [5], 120, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("flush", /* @__PURE__ */ $.basicType("int"), [6], 128, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class CapturedCount {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get value(): bigint {
		return this._fields.value
	}

	public set value(value: bigint) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		value: bigint
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, value?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			value: init?.value ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturedCount {
		return new CapturedCount(this, true)
	}

	public __goscriptAssign(source: CapturedCount): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.value = values.value
	}

	public Name(): string {
		const c: CapturedCount | $.VarRef<CapturedCount> | null = this;
		return $.pointerValue<CapturedCount>(c).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const c: CapturedCount | $.VarRef<CapturedCount> | null = this;
		return $.pointerValue<CapturedCount>(c).tags
	}

	public Value(): bigint {
		const c: CapturedCount | $.VarRef<CapturedCount> | null = this;
		return $.pointerValue<CapturedCount>(c).value
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturedCount",
		() => new CapturedCount(),
		() => [$.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Tags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("int64")], true)],
		CapturedCount,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int64"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class CapturedGauge {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get value(): number {
		return this._fields.value
	}

	public set value(value: number) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		value: number
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			value: init?.value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturedGauge {
		return new CapturedGauge(this, true)
	}

	public __goscriptAssign(source: CapturedGauge): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.value = values.value
	}

	public Name(): string {
		const c: CapturedGauge | $.VarRef<CapturedGauge> | null = this;
		return $.pointerValue<CapturedGauge>(c).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const c: CapturedGauge | $.VarRef<CapturedGauge> | null = this;
		return $.pointerValue<CapturedGauge>(c).tags
	}

	public Value(): number {
		const c: CapturedGauge | $.VarRef<CapturedGauge> | null = this;
		return $.pointerValue<CapturedGauge>(c).value
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturedGauge",
		() => new CapturedGauge(),
		() => [$.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Tags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("float64")], true)],
		CapturedGauge,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("float64"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class CapturedTimer {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get value(): time.Duration {
		return this._fields.value
	}

	public set value(value: time.Duration) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		value: time.Duration
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, value?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			value: init?.value ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturedTimer {
		return new CapturedTimer(this, true)
	}

	public __goscriptAssign(source: CapturedTimer): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.value = values.value
	}

	public Name(): string {
		const c: CapturedTimer | $.VarRef<CapturedTimer> | null = this;
		return $.pointerValue<CapturedTimer>(c).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const c: CapturedTimer | $.VarRef<CapturedTimer> | null = this;
		return $.pointerValue<CapturedTimer>(c).tags
	}

	public Value(): time.Duration {
		const c: CapturedTimer | $.VarRef<CapturedTimer> | null = this;
		return $.pointerValue<CapturedTimer>(c).value
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturedTimer",
		() => new CapturedTimer(),
		() => [$.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Tags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true)],
		CapturedTimer,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class CapturedHistogramValueSamples {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get bucketLowerBound(): number {
		return this._fields.bucketLowerBound
	}

	public set bucketLowerBound(value: number) {
		this._fields.bucketLowerBound = value
	}

	public get bucketUpperBound(): number {
		return this._fields.bucketUpperBound
	}

	public set bucketUpperBound(value: number) {
		this._fields.bucketUpperBound = value
	}

	public get samples(): bigint {
		return this._fields.samples
	}

	public set samples(value: bigint) {
		this._fields.samples = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		bucketLowerBound: number
		bucketUpperBound: number
		samples: bigint
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, bucketLowerBound?: number, bucketUpperBound?: number, samples?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			bucketLowerBound: init?.bucketLowerBound ?? (0 as number),
			bucketUpperBound: init?.bucketUpperBound ?? (0 as number),
			samples: init?.samples ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturedHistogramValueSamples {
		return new CapturedHistogramValueSamples(this, true)
	}

	public __goscriptAssign(source: CapturedHistogramValueSamples): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.bucketLowerBound = values.bucketLowerBound
		target.bucketUpperBound = values.bucketUpperBound
		target.samples = values.samples
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturedHistogramValueSamples",
		() => new CapturedHistogramValueSamples(),
		() => [],
		CapturedHistogramValueSamples,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("bucketLowerBound", /* @__PURE__ */ $.basicType("float64"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("bucketUpperBound", /* @__PURE__ */ $.basicType("float64"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("samples", /* @__PURE__ */ $.basicType("int64"), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class CapturedHistogramDurationSamples {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get bucketLowerBound(): time.Duration {
		return this._fields.bucketLowerBound
	}

	public set bucketLowerBound(value: time.Duration) {
		this._fields.bucketLowerBound = value
	}

	public get bucketUpperBound(): time.Duration {
		return this._fields.bucketUpperBound
	}

	public set bucketUpperBound(value: time.Duration) {
		this._fields.bucketUpperBound = value
	}

	public get samples(): bigint {
		return this._fields.samples
	}

	public set samples(value: bigint) {
		this._fields.samples = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		bucketLowerBound: time.Duration
		bucketUpperBound: time.Duration
		samples: bigint
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, bucketLowerBound?: time.Duration, bucketUpperBound?: time.Duration, samples?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			bucketLowerBound: init?.bucketLowerBound ?? (0n as time.Duration),
			bucketUpperBound: init?.bucketUpperBound ?? (0n as time.Duration),
			samples: init?.samples ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CapturedHistogramDurationSamples {
		return new CapturedHistogramDurationSamples(this, true)
	}

	public __goscriptAssign(source: CapturedHistogramDurationSamples): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.bucketLowerBound = values.bucketLowerBound
		target.bucketUpperBound = values.bucketUpperBound
		target.samples = values.samples
	}

	static __typeInfo = $.registerStructType(
		"metrics.CapturedHistogramDurationSamples",
		() => new CapturedHistogramDurationSamples(),
		() => [],
		CapturedHistogramDurationSamples,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("bucketLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("bucketUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("samples", /* @__PURE__ */ $.basicType("int64"), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export async function NewMetricsScope(isReplay: $.VarRef<boolean> | null): globalThis.Promise<[tally.Scope | null, io.Closer | null, CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null]> {
	let reporter: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = new CapturingStatsReporter()
	let opts = new tally.ScopeOptions({Reporter: $.interfaceValue<tally.StatsReporter | null>(reporter, "*metrics.CapturingStatsReporter", /* @__PURE__ */ $.pointerType("metrics.CapturingStatsReporter"))}, true)
	let [scope, closer] = await tally.NewRootScope(opts, 1000000000n)
	return [__goscript_scope.WrapScope(isReplay, scope, $.interfaceValue<__goscript_scope.Clock | null>(new realClock(), "*metrics.realClock", /* @__PURE__ */ $.pointerType("metrics.realClock"))), closer, reporter]
}

export async function NewTaggedMetricsScope(): globalThis.Promise<[__goscript_scope.TaggedScope | $.VarRef<__goscript_scope.TaggedScope> | null, io.Closer | null, CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null]> {
	let isReplay = $.varRef(false)
	let __goscriptTuple0: any = await NewMetricsScope(isReplay)
	let scope = __goscriptTuple0[0]
	let closer = __goscriptTuple0[1]
	let reporter: CapturingStatsReporter | $.VarRef<CapturingStatsReporter> | null = __goscriptTuple0[2]
	return [new __goscript_scope.TaggedScope({Scope: scope}), closer, reporter]
}
