// Generated file based on histogram.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as push2 from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "./core.gs.ts"
import "./metadata.gs.ts"
import "./snapshot.gs.ts"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.bucket", "metrics.buckets", "metrics.Histogram", "metrics.HistogramVector"])

export type buckets = $.Slice<bucket | $.VarRef<bucket> | null>

$.registerNamedType("metrics.buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("metrics.bucket")));

$.registerNamedValueType(
	"metrics.buckets",
	{get: (receiver: any, ...args: any[]) => (buckets__get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [["val", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("metrics.bucket")])]
);

$.registerNamedValueType(
	"*metrics.buckets",
	{get: (receiver: any, ...args: any[]) => (buckets__get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [["val", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("metrics.bucket")])]
);

export class bucket {
	public get Int64(): atomic.Int64 {
		return this._fields.Int64
	}

	public set Int64(value: atomic.Int64) {
		this._fields.Int64 = value
	}

	public get upper(): bigint {
		return this._fields.upper
	}

	public set upper(value: bigint) {
		this._fields.upper = value
	}

	public _fields: {
		Int64: atomic.Int64
		upper: bigint
	}

	constructor(init?: Partial<{Int64?: atomic.Int64, upper?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Int64: init?.Int64 ? init.Int64.clone() : new atomic.Int64(undefined, true),
			upper: init?.upper ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucket {
		return new bucket(this, true)
	}

	public __goscriptAssign(source: bucket): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Int64, values.Int64)
		target.upper = values.upper
	}

	public Add(delta: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Add(delta)
	}

	public CAS(old: any, _new: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).CAS(old, _new)
	}

	public CompareAndSwap(old: any, _new: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).CompareAndSwap(old, _new)
	}

	public Dec(): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Dec()
	}

	public Inc(): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Inc()
	}

	public Load(): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Load()
	}

	public async MarshalJSON(): globalThis.Promise<any> {
		return await $.pointerValue<atomic.Int64>(this.Int64).MarshalJSON()
	}

	public Store(val: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Store(val)
	}

	public String(): any {
		return $.pointerValue<atomic.Int64>(this.Int64).String()
	}

	public Sub(delta: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Sub(delta)
	}

	public Swap(val: any): any {
		return $.pointerValue<atomic.Int64>(this.Int64).Swap(val)
	}

	public async UnmarshalJSON(b: any): globalThis.Promise<any> {
		return await $.pointerValue<atomic.Int64>(this.Int64).UnmarshalJSON(b)
	}

	static __typeInfo = $.registerStructType(
		"metrics.bucket",
		() => new bucket(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("int64")]], [["old", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		bucket,
		() => [/* @__PURE__ */ $.structField("Int64", "atomic.Int64", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("upper", /* @__PURE__ */ $.basicType("int64"), [1], 8, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export class Histogram {
	public get meta(): __goscript_metadata.metadata {
		return this._fields.meta
	}

	public set meta(value: __goscript_metadata.metadata) {
		this._fields.meta = value
	}

	public get unit(): time.Duration {
		return this._fields.unit
	}

	public set unit(value: time.Duration) {
		this._fields.unit = value
	}

	public get bounds(): $.Slice<bigint> {
		return this._fields.bounds
	}

	public set bounds(value: $.Slice<bigint>) {
		this._fields.bounds = value
	}

	public get buckets(): buckets {
		return this._fields.buckets
	}

	public set buckets(value: buckets) {
		this._fields.buckets = value
	}

	public get sum(): atomic.Int64 {
		return this._fields.sum
	}

	public set sum(value: atomic.Int64) {
		this._fields.sum = value
	}

	public get pusher(): push2.Histogram | null {
		return this._fields.pusher
	}

	public set pusher(value: push2.Histogram | null) {
		this._fields.pusher = value
	}

	public get tagPairs(): $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null> {
		return this._fields.tagPairs
	}

	public set tagPairs(value: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>) {
		this._fields.tagPairs = value
	}

	public _fields: {
		meta: __goscript_metadata.metadata
		unit: time.Duration
		bounds: $.Slice<bigint>
		buckets: buckets
		sum: atomic.Int64
		pusher: push2.Histogram | null
		tagPairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>
	}

	constructor(init?: Partial<{meta?: __goscript_metadata.metadata, unit?: time.Duration, bounds?: $.Slice<bigint>, buckets?: buckets, sum?: atomic.Int64, pusher?: push2.Histogram | null, tagPairs?: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			meta: init?.meta ? init.meta.clone() : new __goscript_metadata.metadata(undefined, true),
			unit: init?.unit ?? (0n as time.Duration),
			bounds: init?.bounds ?? (null! as $.Slice<bigint>),
			buckets: init?.buckets ?? (null! as buckets),
			sum: init?.sum ? init.sum.clone() : new atomic.Int64(undefined, true),
			pusher: init?.pusher ?? (null! as push2.Histogram | null),
			tagPairs: init?.tagPairs ?? (null! as $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Histogram {
		return new Histogram(this, true)
	}

	public __goscriptAssign(source: Histogram): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.meta, values.meta)
		target.unit = values.unit
		target.bounds = values.bounds
		target.buckets = values.buckets
		$.assignStruct(target.sum, values.sum)
		target.pusher = $.assignFieldValue(target.pusher, values.pusher, "push.Histogram")
		target.tagPairs = values.tagPairs
	}

	public IncBucket(n: bigint): void {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		const h$: Histogram = h == null ? $.pointerTarget<Histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Histogram>(h)
		if (h == null) {
			return
		}
		let __goscriptShadow0: bucket | $.VarRef<bucket> | null = buckets__get((h$ as Histogram).buckets, n)
		$.pointerValue<bucket>(__goscriptShadow0).Int64.Inc()
		void (h$ as Histogram).sum.Add(n)
	}

	public Observe(d: time.Duration): void {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		if (h == null) {
			return
		}
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Histogram).IncBucket($.int64($.int64Div(d, $.pointerValue<Histogram>(h).unit))) : Histogram.prototype.IncBucket.call(h, $.int64($.int64Div(d, $.pointerValue<Histogram>(h).unit))))
	}

	public describe(): __goscript_metadata.metadata {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		return ($.pointerValue<Histogram>(h).meta).clone()
	}

	public metric(): promproto.Metric | $.VarRef<promproto.Metric> | null {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		const h$: Histogram = h == null ? $.pointerTarget<Histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Histogram>(h)
		let n = $.varRef(0n)
		let promBuckets: $.Slice<promproto.Bucket | $.VarRef<promproto.Bucket> | null> = $.makeSlice<promproto.Bucket | $.VarRef<promproto.Bucket> | null>(0, $.sliceLen(((h$ as Histogram).buckets as buckets)) - 1)
		for (let __goscriptRangeTarget1 = (h$ as Histogram).buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let b = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as bucket | $.VarRef<bucket> | null)
			n.value = $.uint64Add(n.value, $.uint64($.pointerValue<bucket>(b).Int64.Load()))
			if ($.pointerValue<bucket>(b).upper == 9223372036854775807n) {
				// Prometheus doesn't want us to export the final catch-all bucket.
				continue
			}
			let cumulativeCount = $.varRef(n.value)
			let upper = $.varRef(globalThis.Number($.pointerValue<bucket>(b).upper))
			promBuckets = $.appendOne(promBuckets, new promproto.Bucket({CumulativeCount: cumulativeCount, UpperBound: upper}), $.appendZeros.nil)
		}

		let sum = $.varRef(globalThis.Number((h$ as Histogram).sum.Load()))
		return new promproto.Metric({Label: (h$ as Histogram).tagPairs, Histogram: new promproto.Histogram({SampleCount: n, SampleSum: sum, Bucket: promBuckets})})
	}

	public observations(): $.Slice<bigint> {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		let obs: $.Slice<bigint> = null! as $.Slice<bigint>
		for (let __goscriptRangeTarget2 = $.pointerValue<Histogram>(h).buckets, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let b = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as bucket | $.VarRef<bucket> | null)
			let n = $.pointerValue<bucket>(b).Int64.Load()
			for (let i = 0n; i < n; i++) {
				obs = $.appendOne(obs, $.pointerValue<bucket>(b).upper)
			}
		}
		return obs
	}

	public proto(): promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		const h$: Histogram = h == null ? $.pointerTarget<Histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Histogram>(h)
		return (() => { const __goscriptLiteralField0 = promproto.MetricType_Enum(promproto.MetricType_HISTOGRAM); return new promproto.MetricFamily({Name: (h$ as Histogram).meta.Name, Help: (h$ as Histogram).meta.Help, Type: __goscriptLiteralField0, Metric: $.arrayToSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>([(h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Histogram).metric() : Histogram.prototype.metric.call(h))])}) })()
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		let h: Histogram | $.VarRef<Histogram> | null = this;
		const h$: Histogram = h == null ? $.pointerTarget<Histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Histogram>(h)
		if ((h$ as Histogram).meta.DisablePush) {
			return
		}
		if ((h$ as Histogram).pusher == null) {
			;(h$ as Histogram).pusher = (__goscriptAwait = (target !== null && (target as any).__isVarRef !== true && (target as any).__goValue === undefined ? (target as Exclude<push2.Target, null>) : $.pointerValue<Exclude<push2.Target, null>>(target)).NewHistogram(new push2.HistogramSpec({Spec: (() => { const __goscriptLiteralField1 = __goscript_tag.zip((h$ as Histogram).tagPairs); return new push2.Spec({Name: $.pointerValue<string>((h$ as Histogram).meta.Name), Tags: __goscriptLiteralField1}, true) })(), Buckets: (h$ as Histogram).bounds}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		for (let __goscriptRangeTarget3 = (h$ as Histogram).buckets, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), index = 0; index < __goscriptRangeWindow3.length; index++) {
			let bucket = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + index] as bucket | $.VarRef<bucket> | null)
			void (__goscriptAwait = $.pointerValue<Exclude<push2.Histogram, null>>((h$ as Histogram).pusher).SetIndex(index, $.pointerValue<bucket>(bucket).upper, $.pointerValue<bucket>(bucket).Int64.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public snapshot(): __goscript_snapshot.HistogramSnapshot {
		const h: Histogram | $.VarRef<Histogram> | null = this;
		const h$: Histogram = h == null ? $.pointerTarget<Histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Histogram>(h)
		return (() => { const __goscriptLiteralField2 = __goscript_tag.zip((h$ as Histogram).tagPairs); const __goscriptLiteralField3 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Histogram).observations() : Histogram.prototype.observations.call(h)); return new __goscript_snapshot.HistogramSnapshot({Name: $.pointerValue<string>((h$ as Histogram).meta.Name), Tags: __goscriptLiteralField2, Unit: (h$ as Histogram).unit, Values: __goscriptLiteralField3}, true) })()
	}

	static __typeInfo = $.registerStructType(
		"metrics.Histogram",
		() => new Histogram(),
		() => [$.methodSignature("IncBucket", [["n", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Observe", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("metric", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], true), $.methodSignature("observations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], ["metrics.HistogramSnapshot"], true)],
		Histogram,
		() => [/* @__PURE__ */ $.structField("meta", "metrics.metadata", [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("unit", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 88, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [2], 96, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("metrics.bucket"), "metrics.buckets"), [3], 120, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("sum", "atomic.Int64", [4], 144, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("pusher", "push.Histogram", [5], 152, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("tagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [6], 168, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export class HistogramVector {
	public get meta(): __goscript_metadata.metadata {
		return this._fields.meta
	}

	public set meta(value: __goscript_metadata.metadata) {
		this._fields.meta = value
	}

	public get unit(): time.Duration {
		return this._fields.unit
	}

	public set unit(value: time.Duration) {
		this._fields.unit = value
	}

	public get bounds(): $.Slice<bigint> {
		return this._fields.bounds
	}

	public set bounds(value: $.Slice<bigint>) {
		this._fields.bounds = value
	}

	public get histogramsMu(): sync.RWMutex {
		return this._fields.histogramsMu
	}

	public set histogramsMu(value: sync.RWMutex) {
		this._fields.histogramsMu = value
	}

	public get histograms(): globalThis.Map<string, number> | null {
		return this._fields.histograms
	}

	public set histograms(value: globalThis.Map<string, number> | null) {
		this._fields.histograms = value
	}

	public get histogramStorage(): $.Slice<Histogram | $.VarRef<Histogram> | null> {
		return this._fields.histogramStorage
	}

	public set histogramStorage(value: $.Slice<Histogram | $.VarRef<Histogram> | null>) {
		this._fields.histogramStorage = value
	}

	public _fields: {
		meta: __goscript_metadata.metadata
		unit: time.Duration
		bounds: $.Slice<bigint>
		histogramsMu: sync.RWMutex
		histograms: globalThis.Map<string, number> | null
		histogramStorage: $.Slice<Histogram | $.VarRef<Histogram> | null>
	}

	constructor(init?: Partial<{meta?: __goscript_metadata.metadata, unit?: time.Duration, bounds?: $.Slice<bigint>, histogramsMu?: sync.RWMutex, histograms?: globalThis.Map<string, number> | null, histogramStorage?: $.Slice<Histogram | $.VarRef<Histogram> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			meta: init?.meta ? init.meta.clone() : new __goscript_metadata.metadata(undefined, true),
			unit: init?.unit ?? (0n as time.Duration),
			bounds: init?.bounds ?? (null! as $.Slice<bigint>),
			histogramsMu: init?.histogramsMu ? $.markAsStructValue($.cloneStructValue(init.histogramsMu)) : $.markAsStructValue(new sync.RWMutex()),
			histograms: init?.histograms ?? (null! as globalThis.Map<string, number> | null),
			histogramStorage: init?.histogramStorage ?? (null! as $.Slice<Histogram | $.VarRef<Histogram> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramVector {
		return new HistogramVector(this, true)
	}

	public __goscriptAssign(source: HistogramVector): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.meta, values.meta)
		target.unit = values.unit
		target.bounds = values.bounds
		$.assignStruct(target.histogramsMu, values.histogramsMu)
		target.histograms = values.histograms
		target.histogramStorage = values.histogramStorage
	}

	public async Get(variableTagPairs: $.Slice<string>): globalThis.Promise<[Histogram | $.VarRef<Histogram> | null, $.GoError]> {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		const hv$: HistogramVector = hv == null ? $.pointerTarget<HistogramVector>(hv) : (hv as any).__isVarRef === true ? (hv as any).value : (hv as any).__goValue === undefined ? (hv as any) : $.pointerTarget<HistogramVector>(hv)
		if (hv == null) {
			return [null, null]
		}
		{
			let err = (hv$ as HistogramVector).meta.ValidateVariableTags(variableTagPairs)
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptShadow1: __goscript_tag.digester | $.VarRef<__goscript_tag.digester> | null = await __goscript_tag.newDigester()
		for (let __goscriptSliceWindow1 = $.sliceRange(variableTagPairs), i = 0; i < (globalThis.Math.trunc(__goscriptSliceWindow1.length / 2)); i++) {
			__goscript_tag.digester.prototype.add.call(__goscriptShadow1, "", await __goscript_tag.scrubTagValue(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (i * 2) + 1)] as string)))
		}

		await (hv$ as HistogramVector).histogramsMu.RLock()
		let [hIndex, ok] = $.mapGet<string, number, number>((hv$ as HistogramVector).histograms, $.bytesToString((__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(__goscriptShadow1))), 0)
		if (ok) {
			let h: Histogram | $.VarRef<Histogram> | null = $.arrayIndex((hv$ as HistogramVector).histogramStorage!, hIndex)
			void (hv$ as HistogramVector).histogramsMu.RUnlock()
			void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(__goscriptShadow1))
			return [h, null]
		}
		void (hv$ as HistogramVector).histogramsMu.RUnlock()

		await (hv$ as HistogramVector).histogramsMu.Lock()
		let __goscriptTuple0: any = await HistogramVector.prototype.newHistogram.call(hv, (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(__goscriptShadow1)), variableTagPairs)
		let h: Histogram | $.VarRef<Histogram> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		void (hv$ as HistogramVector).histogramsMu.Unlock()
		void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(__goscriptShadow1))

		return [h, err]
	}

	public async MustGet(variableTagPairs: $.Slice<string>): globalThis.Promise<Histogram | $.VarRef<Histogram> | null> {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		if (hv == null) {
			return null
		}
		let __goscriptTuple1: any = await (hv !== null && (hv as any).__isVarRef !== true && (hv as any).__goValue === undefined ? ((hv as any) as HistogramVector).Get(variableTagPairs) : HistogramVector.prototype.Get.call(hv, variableTagPairs))
		let h: Histogram | $.VarRef<Histogram> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			$.panic(await fmt.Sprintf("failed to get histogram: %v", (err as any)))
		}
		return h
	}

	public describe(): __goscript_metadata.metadata {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		return ($.pointerValue<HistogramVector>(hv).meta).clone()
	}

	public async newHistogram(key: $.Slice<number>, variableTagPairs: $.Slice<string>): globalThis.Promise<[Histogram | $.VarRef<Histogram> | null, $.GoError]> {
		let hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		const hv$: HistogramVector = hv == null ? $.pointerTarget<HistogramVector>(hv) : (hv as any).__isVarRef === true ? (hv as any).value : (hv as any).__goValue === undefined ? (hv as any) : $.pointerTarget<HistogramVector>(hv)
		let [hIndex, ok] = $.mapGet<string, number, number>((hv$ as HistogramVector).histograms, $.bytesToString(key), 0)
		if (ok) {
			return [$.arrayIndex((hv$ as HistogramVector).histogramStorage!, hIndex), null]
		}
		let h: Histogram | $.VarRef<Histogram> | null = (await (async () => { const __goscriptLiteralField6 = (newBuckets((hv$ as HistogramVector).bounds) as buckets); const __goscriptLiteralField7 = await $.markAsStructValue($.cloneStructValue((hv$ as HistogramVector).meta)).MergeTags(variableTagPairs); return new Histogram({buckets: __goscriptLiteralField6, meta: (hv$ as HistogramVector).meta, unit: (hv$ as HistogramVector).unit, bounds: (hv$ as HistogramVector).bounds, tagPairs: __goscriptLiteralField7}) })())
		$.mapSet((hv$ as HistogramVector).histograms, $.bytesToString(key), $.uint($.sliceLen((hv$ as HistogramVector).histogramStorage), 32));
		;(hv$ as HistogramVector).histogramStorage = $.appendOne((hv$ as HistogramVector).histogramStorage, h, $.appendZeros.nil)
		return [h, null]
	}

	public async proto(): globalThis.Promise<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null> {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		const hv$: HistogramVector = hv == null ? $.pointerTarget<HistogramVector>(hv) : (hv as any).__isVarRef === true ? (hv as any).value : (hv as any).__goValue === undefined ? (hv as any) : $.pointerTarget<HistogramVector>(hv)
		await (hv$ as HistogramVector).histogramsMu.RLock()
		let protos: $.Slice<promproto.Metric | $.VarRef<promproto.Metric> | null> = $.makeSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>(0, $.len((hv$ as HistogramVector).histograms))
		for (let __goscriptRangeTarget4 = (hv$ as HistogramVector).histogramStorage, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let h = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Histogram | $.VarRef<Histogram> | null)
			protos = $.appendOne(protos, (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Histogram).metric() : Histogram.prototype.metric.call(h)), $.appendZeros.nil)
		}
		void (hv$ as HistogramVector).histogramsMu.RUnlock()
		sort.Slice($.interfaceValue(protos, "[]*io_prometheus_client.Metric", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"))), $.functionValue((i: number, j: number): boolean => {
			return $.stringCompare(promproto.Metric.prototype.String.call($.arrayIndex(protos!, i)), promproto.Metric.prototype.String.call($.arrayIndex(protos!, j))) < 0
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		return (() => { const __goscriptLiteralField8 = promproto.MetricType_Enum(promproto.MetricType_HISTOGRAM); return new promproto.MetricFamily({Name: (hv$ as HistogramVector).meta.Name, Help: (hv$ as HistogramVector).meta.Help, Type: __goscriptLiteralField8, Metric: protos}) })()
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		const hv$: HistogramVector = hv == null ? $.pointerTarget<HistogramVector>(hv) : (hv as any).__isVarRef === true ? (hv as any).value : (hv as any).__goValue === undefined ? (hv as any) : $.pointerTarget<HistogramVector>(hv)
		await (hv$ as HistogramVector).histogramsMu.RLock()
		for (let __goscriptRangeTarget5 = (hv$ as HistogramVector).histogramStorage, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Histogram | $.VarRef<Histogram> | null)
			await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Histogram).push(target) : Histogram.prototype.push.call(m, target))
		}
		void (hv$ as HistogramVector).histogramsMu.RUnlock()
	}

	public async snapshot(): globalThis.Promise<$.Slice<__goscript_snapshot.HistogramSnapshot>> {
		const hv: HistogramVector | $.VarRef<HistogramVector> | null = this;
		using __defer = new $.DisposableStack()
		const hv$: HistogramVector = hv == null ? $.pointerTarget<HistogramVector>(hv) : (hv as any).__isVarRef === true ? (hv as any).value : (hv as any).__goValue === undefined ? (hv as any) : $.pointerTarget<HistogramVector>(hv)
		await (hv$ as HistogramVector).histogramsMu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((hv$ as HistogramVector).histogramsMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let snaps: $.Slice<__goscript_snapshot.HistogramSnapshot> = $.makeSlice<__goscript_snapshot.HistogramSnapshot>(0, $.len((hv$ as HistogramVector).histograms), undefined, () => new __goscript_snapshot.HistogramSnapshot(undefined, true))
		for (let __goscriptRangeTarget6 = (hv$ as HistogramVector).histogramStorage, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let h = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Histogram | $.VarRef<Histogram> | null)
			snaps = $.appendOne(snaps, (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Histogram).snapshot() : Histogram.prototype.snapshot.call(h)))
		}
		return snaps
	}

	static __typeInfo = $.registerStructType(
		"metrics.HistogramVector",
		() => new HistogramVector(),
		() => [$.methodSignature("Get", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Histogram"), "error"], true), $.methodSignature("MustGet", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Histogram")], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("newHistogram", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Histogram"), "error"], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.sliceType("metrics.HistogramSnapshot")], true)],
		HistogramVector,
		() => [/* @__PURE__ */ $.structField("meta", "metrics.metadata", [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("unit", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 88, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("bounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [2], 96, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("histogramsMu", "sync.RWMutex", [3], 120, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("histograms", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint32")), [4], 144, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("histogramStorage", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("metrics.Histogram")), [5], 152, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export function newBuckets(upperBounds: $.Slice<bigint>): buckets {
	let bs: buckets = ($.makeSlice<bucket | $.VarRef<bucket> | null>(0, $.sliceLen(upperBounds) + 1) as buckets)
	for (let __goscriptRangeTarget0 = upperBounds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let upper = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as bigint)
		bs = ($.appendOne((bs as buckets), new bucket({upper: upper}), $.appendZeros.nil) as buckets)
	}
	if ($.arrayIndex(upperBounds!, $.sliceLen(upperBounds) - 1) != 9223372036854775807n) {
		bs = ($.appendOne((bs as buckets), new bucket({upper: 9223372036854775807n}), $.appendZeros.nil) as buckets)
	}
	return (bs as buckets)
}

export function buckets__get(bs: buckets, val: bigint): bucket | $.VarRef<bucket> | null {
	// Binary search to find the correct bucket for this observation. Bucket
	// upper bounds are inclusive.
	let i = 0
	let j = $.sliceLen((bs as buckets))
	for (let __goscriptSliceWindow0 = $.sliceRange(bs); i < j; ) {
		let h: number = i + (globalThis.Math.trunc((j - i) / 2))
		if (val > $.pointerValue<bucket>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, h)] as bucket | $.VarRef<bucket> | null)).upper) {
			i = h + 1
		} else {
			j = h
		}
	}
	return $.arrayIndex(bs!, i)
}

export async function newHistogram(m: __goscript_metadata.metadata, unit: time.Duration, uppers: $.Slice<bigint>): globalThis.Promise<Histogram | $.VarRef<Histogram> | null> {
	return (await (async () => { const __goscriptLiteralField4 = (newBuckets(uppers) as buckets); const __goscriptLiteralField5 = await m.MergeTags(null); return new Histogram({buckets: __goscriptLiteralField4, meta: m, unit: unit, bounds: uppers, tagPairs: __goscriptLiteralField5}) })())
}

export function newHistogramVector(m: __goscript_metadata.metadata, unit: time.Duration, uppers: $.Slice<bigint>): HistogramVector | $.VarRef<HistogramVector> | null {
	return new HistogramVector({meta: m, unit: unit, bounds: uppers, histograms: $.makeMap<string, number>(), histogramStorage: $.makeSlice<Histogram | $.VarRef<Histogram> | null>(0, 128)})
}

var __goscriptAwait: any
