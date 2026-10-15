// Generated file based on histogram.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_observer from "./observer.gs.ts"

import * as __goscript_value from "./value.gs.ts"

import * as __goscript_vec from "./vec.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./observer.gs.ts"
import "./value.gs.ts"
import "./vec.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Histogram", "prometheus.HistogramOpts", "prometheus.histogramCounts", "prometheus.histogram", "prometheus.HistogramVec", "prometheus.constHistogram", "prometheus.buckSort"])

export type Histogram = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Observe(_p0: number): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.Histogram",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Observe", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export type buckSort = $.Slice<dto.Bucket | $.VarRef<dto.Bucket> | null>

$.registerNamedType("prometheus.buckSort", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")));

$.registerNamedValueType(
	"prometheus.buckSort",
	{Len: (receiver: any, ...args: any[]) => (buckSort_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (buckSort_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (buckSort_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*prometheus.buckSort",
	{Len: (receiver: any, ...args: any[]) => (buckSort_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (buckSort_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (buckSort_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class HistogramOpts {
	// Namespace, Subsystem, and Name are components of the fully-qualified
	// name of the Histogram (created by joining these components with
	// "_"). Only Name is mandatory, the others merely help structuring the
	// name. Note that the fully-qualified name of the Histogram must be a
	// valid Prometheus metric name.
	public get Namespace(): string {
		return this._fields.Namespace
	}

	public set Namespace(value: string) {
		this._fields.Namespace = value
	}

	public get Subsystem(): string {
		return this._fields.Subsystem
	}

	public set Subsystem(value: string) {
		this._fields.Subsystem = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Help provides information about this Histogram.
	//
	// Metrics with the same fully-qualified name must have the same Help
	// string.
	public get Help(): string {
		return this._fields.Help
	}

	public set Help(value: string) {
		this._fields.Help = value
	}

	// ConstLabels are used to attach fixed labels to this metric. Metrics
	// with the same fully-qualified name must have the same label names in
	// their ConstLabels.
	//
	// ConstLabels are only used rarely. In particular, do not use them to
	// attach the same labels to all your metrics. Those use cases are
	// better covered by target labels set by the scraping Prometheus
	// server, or by one specific metric (e.g. a build_info or a
	// machine_role metric). See also
	// https://prometheus.io/docs/instrumenting/writing_exporters/#target-labels-not-static-scraped-labels
	public get ConstLabels(): __goscript_labels.Labels {
		return this._fields.ConstLabels
	}

	public set ConstLabels(value: __goscript_labels.Labels) {
		this._fields.ConstLabels = value
	}

	// Buckets defines the buckets into which observations are counted. Each
	// element in the slice is the upper inclusive bound of a bucket. The
	// values must be sorted in strictly increasing order. There is no need
	// to add a highest bucket with +Inf bound, it will be added
	// implicitly. The default value is DefBuckets.
	public get Buckets(): $.Slice<number> {
		return this._fields.Buckets
	}

	public set Buckets(value: $.Slice<number>) {
		this._fields.Buckets = value
	}

	public _fields: {
		Namespace: string
		Subsystem: string
		Name: string
		Help: string
		ConstLabels: __goscript_labels.Labels
		Buckets: $.Slice<number>
	}

	constructor(init?: Partial<{Namespace?: string, Subsystem?: string, Name?: string, Help?: string, ConstLabels?: __goscript_labels.Labels, Buckets?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Namespace: init?.Namespace ?? ("" as string),
			Subsystem: init?.Subsystem ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Help: init?.Help ?? ("" as string),
			ConstLabels: init?.ConstLabels ?? (null! as __goscript_labels.Labels),
			Buckets: init?.Buckets ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramOpts {
		return new HistogramOpts(this, true)
	}

	public __goscriptAssign(source: HistogramOpts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
		target.Buckets = values.Buckets
	}

	static __typeInfo = $.registerStructType(
		"prometheus.HistogramOpts",
		() => new HistogramOpts(),
		() => [],
		HistogramOpts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true), /* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [5], 72, true)]
	)
}

export class histogramCounts {
	// sumBits contains the bits of the float64 representing the sum of all
	// observations. sumBits and count have to go first in the struct to
	// guarantee alignment for atomic operations.
	// http://golang.org/pkg/sync/atomic/#pkg-note-BUG
	public get sumBits(): bigint {
		return this._fields.sumBits
	}

	public set sumBits(value: bigint) {
		this._fields.sumBits = value
	}

	public get count(): bigint {
		return this._fields.count
	}

	public set count(value: bigint) {
		this._fields.count = value
	}

	public get buckets(): $.Slice<bigint> {
		return this._fields.buckets
	}

	public set buckets(value: $.Slice<bigint>) {
		this._fields.buckets = value
	}

	public _fields: {
		sumBits: bigint
		count: bigint
		buckets: $.Slice<bigint>
	}

	constructor(init?: Partial<{sumBits?: bigint, count?: bigint, buckets?: $.Slice<bigint>}>, __goscriptValue?: boolean) {
		this._fields = {
			sumBits: init?.sumBits ?? (0n as bigint),
			count: init?.count ?? (0n as bigint),
			buckets: init?.buckets ?? (null! as $.Slice<bigint>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogramCounts {
		return new histogramCounts(this, true)
	}

	public __goscriptAssign(source: histogramCounts): void {
		const target = this._fields
		const values = source._fields
		target.sumBits = values.sumBits
		target.count = values.count
		target.buckets = values.buckets
	}

	static __typeInfo = $.registerStructType(
		"prometheus.histogramCounts",
		() => new histogramCounts(),
		() => [],
		histogramCounts,
		() => [/* @__PURE__ */ $.structField("sumBits", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class histogram {
	// countAndHotIdx enables lock-free writes with use of atomic updates.
	// The most significant bit is the hot index [0 or 1] of the count field
	// below. Observe calls update the hot one. All remaining bits count the
	// number of Observe calls. Observe starts by incrementing this counter,
	// and finish by incrementing the count field in the respective
	// histogramCounts, as a marker for completion.
	//
	// Calls of the Write method (which are non-mutating reads from the
	// perspective of the histogram) swap the hot–cold under the writeMtx
	// lock. A cooldown is awaited (while locked) by comparing the number of
	// observations with the initiation count. Once they match, then the
	// last observation on the now cool one has completed. All cool fields must
	// be merged into the new hot before releasing writeMtx.
	//
	// Fields with atomic access first! See alignment constraint:
	// http://golang.org/pkg/sync/atomic/#pkg-note-BUG
	public get countAndHotIdx(): bigint {
		return this._fields.countAndHotIdx
	}

	public set countAndHotIdx(value: bigint) {
		this._fields.countAndHotIdx = value
	}

	public get selfCollector(): __goscript_collector.selfCollector {
		return this._fields.selfCollector
	}

	public set selfCollector(value: __goscript_collector.selfCollector) {
		this._fields.selfCollector = value
	}

	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get writeMtx(): sync.Mutex {
		return this._fields.writeMtx
	}

	public set writeMtx(value: sync.Mutex) {
		this._fields.writeMtx = value
	}

	// Two counts, one is "hot" for lock-free observations, the other is
	// "cold" for writing out a dto.Metric. It has to be an array of
	// pointers to guarantee 64bit alignment of the histogramCounts, see
	// http://golang.org/pkg/sync/atomic/#pkg-note-BUG.
	public get counts(): (histogramCounts | $.VarRef<histogramCounts> | null)[] {
		return this._fields.counts
	}

	public set counts(value: (histogramCounts | $.VarRef<histogramCounts> | null)[]) {
		this._fields.counts = value
	}

	public get upperBounds(): $.Slice<number> {
		return this._fields.upperBounds
	}

	public set upperBounds(value: $.Slice<number>) {
		this._fields.upperBounds = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public get exemplars(): $.Slice<atomic.Value> {
		return this._fields.exemplars
	}

	public set exemplars(value: $.Slice<atomic.Value>) {
		this._fields.exemplars = value
	}

	public get now(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.now
	}

	public set now(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.now = value
	}

	public _fields: {
		countAndHotIdx: bigint
		selfCollector: __goscript_collector.selfCollector
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		writeMtx: sync.Mutex
		counts: (histogramCounts | $.VarRef<histogramCounts> | null)[]
		upperBounds: $.Slice<number>
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
		exemplars: $.Slice<atomic.Value>
		now: (() => time.Time | globalThis.Promise<time.Time>) | null
	}

	constructor(init?: Partial<{countAndHotIdx?: bigint, selfCollector?: __goscript_collector.selfCollector, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, writeMtx?: sync.Mutex, counts?: (histogramCounts | $.VarRef<histogramCounts> | null)[], upperBounds?: $.Slice<number>, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, exemplars?: $.Slice<atomic.Value>, now?: (() => time.Time | globalThis.Promise<time.Time>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			countAndHotIdx: init?.countAndHotIdx ?? (0n as bigint),
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			writeMtx: init?.writeMtx ? $.markAsStructValue($.cloneStructValue(init.writeMtx)) : $.markAsStructValue(new sync.Mutex()),
			counts: init?.counts !== undefined ? $.cloneArrayValue(init.counts, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.histogramCounts"), 2)) : $.arrayValue(globalThis.Array.from({ length: 2 }, () => null)),
			upperBounds: init?.upperBounds ?? (null! as $.Slice<number>),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>),
			exemplars: init?.exemplars ?? (null! as $.Slice<atomic.Value>),
			now: init?.now ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogram {
		return new histogram(this, true)
	}

	public __goscriptAssign(source: histogram): void {
		const target = this._fields
		const values = source._fields
		target.countAndHotIdx = values.countAndHotIdx
		$.assignStruct(target.selfCollector, values.selfCollector)
		target.desc = values.desc
		$.assignStruct(target.writeMtx, values.writeMtx)
		target.counts = $.assignFieldValue(target.counts, values.counts, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.histogramCounts"), 2))
		target.upperBounds = values.upperBounds
		target.labelPairs = values.labelPairs
		target.exemplars = values.exemplars
		target.now = values.now
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const h: histogram | $.VarRef<histogram> | null = this;
		return $.pointerValue<histogram>(h).desc
	}

	public Observe(v: number): void {
		const h: histogram | $.VarRef<histogram> | null = this;
		histogram.prototype.observe.call(h, v, (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).findBucket(v) : histogram.prototype.findBucket.call(h, v)))
	}

	public async ObserveWithExemplar(v: number, e: __goscript_labels.Labels): globalThis.Promise<void> {
		const h: histogram | $.VarRef<histogram> | null = this;
		let i = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).findBucket(v) : histogram.prototype.findBucket.call(h, v))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).observe(v, i) : histogram.prototype.observe.call(h, v, i))
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).updateExemplar(v, i, e) : histogram.prototype.updateExemplar.call(h, v, i, e))
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const h: histogram | $.VarRef<histogram> | null = this;
		using __defer = new $.DisposableStack()
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		// For simplicity, we protect this whole method by a mutex. It is not in
		// the hot path, i.e. Observe is called much more often than Write. The
		// complication of making Write lock-free isn't worth it, if possible at
		// all.
		await (h$ as histogram).writeMtx.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((h$ as histogram).writeMtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		// Adding 1<<63 switches the hot index (from 0 to 1 or from 1 to 0)
		// without touching the count bits. See the struct comments for a full
		// description of the algorithm.
		let n = atomic.AddUint64($.fieldRef((h$ as histogram)._fields, "countAndHotIdx"), 9223372036854775808n)
		// count is contained unchanged in the lower 63 bits.
		let count = $.uint64And(n, 9223372036854775807n)
		// The most significant bit tells us which counts is hot. The complement
		// is thus the cold one.
		let hotCounts: histogramCounts | $.VarRef<histogramCounts> | null = $.arrayIndex((h$ as histogram).counts, globalThis.Number($.uint64Shr(n, 63n)))
		let hotCounts$: histogramCounts = hotCounts == null ? $.pointerTarget<histogramCounts>(hotCounts) : (hotCounts as any).__isVarRef === true ? (hotCounts as any).value : (hotCounts as any).__goValue === undefined ? (hotCounts as any) : $.pointerTarget<histogramCounts>(hotCounts)
		let coldCounts: histogramCounts | $.VarRef<histogramCounts> | null = $.arrayIndex((h$ as histogram).counts, globalThis.Number($.uint64Shr(($.uint64Xor(n, -1n)), 63n)))
		let coldCounts$: histogramCounts = coldCounts == null ? $.pointerTarget<histogramCounts>(coldCounts) : (coldCounts as any).__isVarRef === true ? (coldCounts as any).value : (coldCounts as any).__goValue === undefined ? (coldCounts as any) : $.pointerTarget<histogramCounts>(coldCounts)

		// Await cooldown.
		while (count != atomic.LoadUint64($.fieldRef((coldCounts$ as histogramCounts)._fields, "count"))) {
			runtime.Gosched()
		}

		let his: dto.Histogram | $.VarRef<dto.Histogram> | null = (() => { const __goscriptLiteralField1 = proto.Uint64(count); const __goscriptLiteralField2 = proto.Float64(math.Float64frombits(atomic.LoadUint64($.fieldRef((coldCounts$ as histogramCounts)._fields, "sumBits")))); return new dto.Histogram({Bucket: $.makeSlice<dto.Bucket | $.VarRef<dto.Bucket> | null>($.sliceLen((h$ as histogram).upperBounds)), SampleCount: __goscriptLiteralField1, SampleSum: __goscriptLiteralField2}) })()
		let his$: dto.Histogram = his == null ? $.pointerTarget<dto.Histogram>(his) : (his as any).__isVarRef === true ? (his as any).value : (his as any).__goValue === undefined ? (his as any) : $.pointerTarget<dto.Histogram>(his)
		let cumCount: bigint = 0n
		for (let __goscriptRangeTarget5 = (h$ as histogram).upperBounds, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let upperBound = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as number)
			cumCount = $.uint64Add(cumCount, atomic.LoadUint64($.indexRef((coldCounts$ as histogramCounts).buckets!, i)))
			$.sliceElems((his$ as dto.Histogram).Bucket!)[$.sliceSlot((his$ as dto.Histogram).Bucket!, i)] = (() => { const __goscriptLiteralField3 = proto.Uint64(cumCount); const __goscriptLiteralField4 = proto.Float64(upperBound); return new dto.Bucket({CumulativeCount: __goscriptLiteralField3, UpperBound: __goscriptLiteralField4}) })()
			{
				let e = $.arrayIndex((h$ as histogram).exemplars!, i).Load()
				if (e != null) {
					$.pointerValue<dto.Bucket>($.arrayIndex((his$ as dto.Histogram).Bucket!, i)).Exemplar = ((e as any)?.__goType === "*io_prometheus_client.Exemplar" && (e as any).__goValue === undefined && (e as any).__isTypedNil !== true ? ((e as any) as dto.Exemplar | $.VarRef<dto.Exemplar> | null) : $.mustTypeAssert<dto.Exemplar | $.VarRef<dto.Exemplar> | null>(e, /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
				}
			}
		}
		// If there is an exemplar for the +Inf bucket, we have to add that bucket explicitly.
		{
			let e = $.arrayIndex((h$ as histogram).exemplars!, $.sliceLen((h$ as histogram).upperBounds)).Load()
			if (e != null) {
				let b: dto.Bucket | $.VarRef<dto.Bucket> | null = (() => { const __goscriptLiteralField5 = proto.Uint64(count); const __goscriptLiteralField6 = proto.Float64(math.Inf(1)); return new dto.Bucket({CumulativeCount: __goscriptLiteralField5, UpperBound: __goscriptLiteralField6, Exemplar: ((e as any)?.__goType === "*io_prometheus_client.Exemplar" && (e as any).__goValue === undefined && (e as any).__isTypedNil !== true ? ((e as any) as dto.Exemplar | $.VarRef<dto.Exemplar> | null) : $.mustTypeAssert<dto.Exemplar | $.VarRef<dto.Exemplar> | null>(e, /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))}) })();
				;(his$ as dto.Histogram).Bucket = $.appendOne((his$ as dto.Histogram).Bucket, b, $.appendZeros.nil)
			}
		}

		;(out$ as dto.Metric).Histogram = his;
		;(out$ as dto.Metric).Label = (h$ as histogram).labelPairs

		// Finally add all the cold counts to the new hot counts and reset the cold counts.
		atomic.AddUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "count"), count)
		atomic.StoreUint64($.fieldRef((coldCounts$ as histogramCounts)._fields, "count"), 0n)
		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "sumBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + (his !== null && (his as any).__isVarRef !== true && (his as any).__goValue === undefined ? ((his as any) as dto.Histogram).GetSampleSum() : dto.Histogram.prototype.GetSampleSum.call(his)))
			if (atomic.CompareAndSwapUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "sumBits"), oldBits, newBits)) {
				atomic.StoreUint64($.fieldRef((coldCounts$ as histogramCounts)._fields, "sumBits"), 0n)
				break
			}
		}
		for (let __goscriptRangeTarget6 = (h$ as histogram).upperBounds, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			atomic.AddUint64($.indexRef((hotCounts$ as histogramCounts).buckets!, i), atomic.LoadUint64($.indexRef((coldCounts$ as histogramCounts).buckets!, i)))
			atomic.StoreUint64($.indexRef((coldCounts$ as histogramCounts).buckets!, i), 0n)
		}
		return null
	}

	public findBucket(v: number): number {
		const h: histogram | $.VarRef<histogram> | null = this;
		// TODO(beorn7): For small numbers of buckets (<30), a linear search is
		// slightly faster than the binary search. If we really care, we could
		// switch from one search strategy to the other depending on the number
		// of buckets.
		//
		// Microbenchmarks (BenchmarkHistogramNoLabels):
		// 11 buckets: 38.3 ns/op linear - binary 48.7 ns/op
		// 100 buckets: 78.1 ns/op linear - binary 54.9 ns/op
		// 300 buckets: 154 ns/op linear - binary 61.6 ns/op
		return sort.SearchFloat64s($.pointerValue<histogram>(h).upperBounds, v)
	}

	public observe(v: number, bucket: number): void {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		// We increment h.countAndHotIdx so that the counter in the lower
		// 63 bits gets incremented. At the same time, we get the new value
		// back, which we can use to find the currently-hot counts.
		let n = atomic.AddUint64($.fieldRef((h$ as histogram)._fields, "countAndHotIdx"), 1n)
		let hotCounts: histogramCounts | $.VarRef<histogramCounts> | null = $.arrayIndex((h$ as histogram).counts, globalThis.Number($.uint64Shr(n, 63n)))
		let hotCounts$: histogramCounts = hotCounts == null ? $.pointerTarget<histogramCounts>(hotCounts) : (hotCounts as any).__isVarRef === true ? (hotCounts as any).value : (hotCounts as any).__goValue === undefined ? (hotCounts as any) : $.pointerTarget<histogramCounts>(hotCounts)

		if (bucket < $.sliceLen((h$ as histogram).upperBounds)) {
			atomic.AddUint64($.indexRef((hotCounts$ as histogramCounts).buckets!, bucket), 1n)
		}
		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "sumBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + v)
			if (atomic.CompareAndSwapUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "sumBits"), oldBits, newBits)) {
				break
			}
		}
		// Increment count last as we take it as a signal that the observation
		// is complete.
		atomic.AddUint64($.fieldRef((hotCounts$ as histogramCounts)._fields, "count"), 1n)
	}

	public async updateExemplar(v: number, bucket: number, l: __goscript_labels.Labels): globalThis.Promise<void> {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if (l == null) {
			return
		}
		let __goscriptTuple0: any = __goscript_value.newExemplar(v, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (h$ as histogram).now!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))), l)
		let e: dto.Exemplar | $.VarRef<dto.Exemplar> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic((err as any))
		}
		$.arrayIndex((h$ as histogram).exemplars!, bucket).Store($.interfaceValue(e, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
	}

	public async Collect(ch: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_collector.selfCollector>(this.selfCollector).Collect(ch)
	}

	public async Describe(ch: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_collector.selfCollector>(this.selfCollector).Describe(ch)
	}

	public init(self: any): any {
		return $.pointerValue<__goscript_collector.selfCollector>(this.selfCollector).init(self)
	}

	static __typeInfo = $.registerStructType(
		"prometheus.histogram",
		() => new histogram(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Observe", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("ObserveWithExemplar", [["v", /* @__PURE__ */ $.basicType("float64")], ["e", "prometheus.Labels"]], [], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("findBucket", [["v", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("observe", [["v", /* @__PURE__ */ $.basicType("float64")], ["bucket", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("updateExemplar", [["v", /* @__PURE__ */ $.basicType("float64")], ["bucket", /* @__PURE__ */ $.basicType("int")], ["l", "prometheus.Labels"]], [], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		histogram,
		() => [/* @__PURE__ */ $.structField("countAndHotIdx", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("writeMtx", "sync.Mutex", [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("counts", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.histogramCounts"), 2), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("upperBounds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [5], 56, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [6], 80, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("exemplars", /* @__PURE__ */ $.sliceType("atomic.Value"), [7], 104, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("now", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [8], 128, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class HistogramVec {
	public get MetricVec(): __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null {
		return this._fields.MetricVec
	}

	public set MetricVec(value: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null) {
		this._fields.MetricVec = value
	}

	public _fields: {
		MetricVec: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null
	}

	constructor(init?: Partial<{MetricVec?: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MetricVec: init?.MetricVec ?? (null! as __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramVec {
		return new HistogramVec(this, true)
	}

	public __goscriptAssign(source: HistogramVec): void {
		const target = this._fields
		const values = source._fields
		target.MetricVec = values.MetricVec
	}

	public CurryWith(labels: __goscript_labels.Labels): [__goscript_observer.ObserverVec | null, $.GoError] {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let __goscriptTuple1: any = __goscript_vec.MetricVec.prototype.CurryWith.call($.pointerValue<HistogramVec>(v).MetricVec, labels)
		let vec: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (vec != null) {
			return [$.interfaceValue<__goscript_observer.ObserverVec | null>(new HistogramVec({MetricVec: vec}), "*prometheus.HistogramVec", /* @__PURE__ */ $.pointerType("prometheus.HistogramVec")), err]
		}
		return [null, err]
	}

	public async GetMetricWith(labels: __goscript_labels.Labels): globalThis.Promise<[__goscript_observer.Observer | null, $.GoError]> {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWith.call($.pointerValue<HistogramVec>(v).MetricVec, labels)
		if (metric != null) {
			return [$.mustTypeAssert<__goscript_observer.Observer | null>(metric, "prometheus.Observer"), err]
		}
		return [null, err]
	}

	public async GetMetricWithLabelValues(lvs: $.Slice<string>): globalThis.Promise<[__goscript_observer.Observer | null, $.GoError]> {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWithLabelValues.call($.pointerValue<HistogramVec>(v).MetricVec, lvs)
		if (metric != null) {
			return [$.mustTypeAssert<__goscript_observer.Observer | null>(metric, "prometheus.Observer"), err]
		}
		return [null, err]
	}

	public MustCurryWith(labels: __goscript_labels.Labels): __goscript_observer.ObserverVec | null {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let [vec, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as HistogramVec).CurryWith(labels) : HistogramVec.prototype.CurryWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return vec
	}

	public async With(labels: __goscript_labels.Labels): globalThis.Promise<__goscript_observer.Observer | null> {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let [h, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as HistogramVec).GetMetricWith(labels) : HistogramVec.prototype.GetMetricWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return h
	}

	public async WithLabelValues(lvs: $.Slice<string>): globalThis.Promise<__goscript_observer.Observer | null> {
		const v: HistogramVec | $.VarRef<HistogramVec> | null = this;
		let [h, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as HistogramVec).GetMetricWithLabelValues(lvs) : HistogramVec.prototype.GetMetricWithLabelValues.call(v, lvs))
		if (err != null) {
			$.panic((err as any))
		}
		return h
	}

	public async Collect(ch: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).Collect(ch)
	}

	public async Delete(labels: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).Delete(labels)
	}

	public async DeleteLabelValues(lvs: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).DeleteLabelValues(lvs)
	}

	public async Describe(ch: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).Describe(ch)
	}

	public async Reset(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).Reset()
	}

	public async deleteByHashWithLabelValues(h: any, lvs: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).deleteByHashWithLabelValues(h, lvs, curry)
	}

	public async deleteByHashWithLabels(h: any, labels: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).deleteByHashWithLabels(h, labels, curry)
	}

	public getMetricWithHashAndLabelValues(h: any, lvs: any, curry: any): any {
		return $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).getMetricWithHashAndLabelValues(h, lvs, curry)
	}

	public getMetricWithHashAndLabels(h: any, labels: any, curry: any): any {
		return $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).getMetricWithHashAndLabels(h, labels, curry)
	}

	public async getOrCreateMetricWithLabelValues(hash: any, lvs: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).getOrCreateMetricWithLabelValues(hash, lvs, curry)
	}

	public async getOrCreateMetricWithLabels(hash: any, labels: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).metricMap).getOrCreateMetricWithLabels(hash, labels, curry)
	}

	public async hashLabelValues(vals: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).hashLabelValues(vals)
	}

	public async hashLabels(labels: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_vec.MetricVec>(this.MetricVec).hashLabels(labels)
	}

	static __typeInfo = $.registerStructType(
		"prometheus.HistogramVec",
		() => new HistogramVec(),
		() => [$.methodSignature("CurryWith", [["labels", "prometheus.Labels"]], ["prometheus.ObserverVec", "error"], true), $.methodSignature("GetMetricWith", [["labels", "prometheus.Labels"]], ["prometheus.Observer", "error"], true), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Observer", "error"], true), $.methodSignature("MustCurryWith", [["labels", "prometheus.Labels"]], ["prometheus.ObserverVec"], true), $.methodSignature("With", [["labels", "prometheus.Labels"]], ["prometheus.Observer"], true), $.methodSignature("WithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Observer"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]]), $.methodSignature("Delete", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("DeleteLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]]), $.methodSignature("Reset"), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("hashLabelValues", [["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("uint64"), "error"]), $.methodSignature("hashLabels", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("uint64"), "error"])],
		HistogramVec,
		() => [/* @__PURE__ */ $.structField("MetricVec", /* @__PURE__ */ $.pointerType("prometheus.MetricVec"), [0], 0, true, { anonymous: true })]
	)
}

export class constHistogram {
	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get count(): bigint {
		return this._fields.count
	}

	public set count(value: bigint) {
		this._fields.count = value
	}

	public get sum(): number {
		return this._fields.sum
	}

	public set sum(value: number) {
		this._fields.sum = value
	}

	public get buckets(): globalThis.Map<number, bigint> | null {
		return this._fields.buckets
	}

	public set buckets(value: globalThis.Map<number, bigint> | null) {
		this._fields.buckets = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public _fields: {
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		count: bigint
		sum: number
		buckets: globalThis.Map<number, bigint> | null
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count?: bigint, sum?: number, buckets?: globalThis.Map<number, bigint> | null, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			count: init?.count ?? (0n as bigint),
			sum: init?.sum ?? (0 as number),
			buckets: init?.buckets ?? (null! as globalThis.Map<number, bigint> | null),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constHistogram {
		return new constHistogram(this, true)
	}

	public __goscriptAssign(source: constHistogram): void {
		const target = this._fields
		const values = source._fields
		target.desc = values.desc
		target.count = values.count
		target.sum = values.sum
		target.buckets = values.buckets
		target.labelPairs = values.labelPairs
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const h: constHistogram | $.VarRef<constHistogram> | null = this;
		return $.pointerValue<constHistogram>(h).desc
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const h: constHistogram | $.VarRef<constHistogram> | null = this;
		const h$: constHistogram = h == null ? $.pointerTarget<constHistogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<constHistogram>(h)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		let his: dto.Histogram | $.VarRef<dto.Histogram> | null = new dto.Histogram()
		let his$: dto.Histogram = his == null ? $.pointerTarget<dto.Histogram>(his) : (his as any).__isVarRef === true ? (his as any).value : (his as any).__goValue === undefined ? (his as any) : $.pointerTarget<dto.Histogram>(his)
		let buckets: $.Slice<dto.Bucket | $.VarRef<dto.Bucket> | null> = $.makeSlice<dto.Bucket | $.VarRef<dto.Bucket> | null>(0, $.len((h$ as constHistogram).buckets));

		;(his$ as dto.Histogram).SampleCount = proto.Uint64((h$ as constHistogram).count);
		;(his$ as dto.Histogram).SampleSum = proto.Float64((h$ as constHistogram).sum)

		for (const [upperBound, count] of (h$ as constHistogram).buckets?.entries() ?? []) {
			buckets = $.appendOne(buckets, (() => { const __goscriptLiteralField8 = proto.Uint64(count); const __goscriptLiteralField9 = proto.Float64(upperBound); return new dto.Bucket({CumulativeCount: __goscriptLiteralField8, UpperBound: __goscriptLiteralField9}) })(), $.appendZeros.nil)
		}

		if ($.sliceLen(buckets) > 0) {
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((buckets as buckSort), "prometheus.buckSort", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		}
		;(his$ as dto.Histogram).Bucket = buckets;

		;(out$ as dto.Metric).Histogram = his;
		;(out$ as dto.Metric).Label = (h$ as constHistogram).labelPairs

		return null
	}

	static __typeInfo = $.registerStructType(
		"prometheus.constHistogram",
		() => new constHistogram(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true)],
		constHistogram,
		() => [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("sum", /* @__PURE__ */ $.basicType("float64"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("buckets", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("uint64")), [3], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [4], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export const bucketLabel: string = "le"

export let DefBuckets: $.Slice<number> = $.arrayToSlice<number>([.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10])

export function __goscript_set_DefBuckets(__goscriptValue: $.Slice<number>): void {
	DefBuckets = __goscriptValue
}

export let errBucketLabelNotAllowed: $.GoError = fmt.Errorf("%q is not allowed as label name in histograms", "le")

export function __goscript_set_errBucketLabelNotAllowed(__goscriptValue: $.GoError): void {
	errBucketLabelNotAllowed = __goscriptValue
}

export function LinearBuckets(start: number, width: number, count: number): $.Slice<number> {
	if (count < 1) {
		$.panic("LinearBuckets needs a positive count")
	}
	let buckets: $.Slice<number> = $.makeSlice<number>(count, undefined, "number")
	for (let __goscriptRangeTarget0 = buckets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = start
		start = start + (width)
	}
	return buckets
}

export function ExponentialBuckets(start: number, factor: number, count: number): $.Slice<number> {
	if (count < 1) {
		$.panic("ExponentialBuckets needs a positive count")
	}
	if (start <= 0) {
		$.panic("ExponentialBuckets needs a positive start value")
	}
	if (factor <= 1) {
		$.panic("ExponentialBuckets needs a factor greater than 1")
	}
	let buckets: $.Slice<number> = $.makeSlice<number>(count, undefined, "number")
	for (let __goscriptRangeTarget1 = buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = start
		start = start * (factor)
	}
	return buckets
}

export async function NewHistogram(opts: HistogramOpts): globalThis.Promise<Histogram | null> {
	return newHistogram(await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels), (opts).clone(), null)
}

export async function newHistogram(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, opts: HistogramOpts, labelValues: $.Slice<string>): globalThis.Promise<Histogram | null> {
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	if ($.sliceLen((desc$ as __goscript_desc.Desc).variableLabels) != $.sliceLen(labelValues)) {
		$.panic((__goscript_labels.makeInconsistentCardinalityError((desc$ as __goscript_desc.Desc).fqName, (desc$ as __goscript_desc.Desc).variableLabels, labelValues) as any))
	}

	for (let __goscriptRangeTarget2 = (desc$ as __goscript_desc.Desc).variableLabels, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		if ($.stringEqual(n, "le")) {
			$.panic((errBucketLabelNotAllowed as any))
		}
	}
	for (let __goscriptRangeTarget3 = (desc$ as __goscript_desc.Desc).constLabelPairs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		if ($.stringEqual((lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)), "le")) {
			$.panic((errBucketLabelNotAllowed as any))
		}
	}

	if ($.sliceLen(opts.Buckets) == 0) {
		opts.Buckets = DefBuckets
	}

	let h: histogram | $.VarRef<histogram> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_value.MakeLabelPairs(desc, labelValues); return new histogram({desc: desc, upperBounds: opts.Buckets, labelPairs: __goscriptLiteralField0, counts: $.arrayValue([new histogramCounts(), new histogramCounts()]), now: time.Now}) })())
	let h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
	for (let __goscriptRangeTarget4 = (h$ as histogram).upperBounds, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let upperBound = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as number)
		if (i < ($.sliceLen((h$ as histogram).upperBounds) - 1)) {
			if (upperBound >= $.arrayIndex((h$ as histogram).upperBounds!, i + 1)) {
				$.panic((fmt.Errorf("histogram buckets must be in increasing order: %f >= %f", $.basicInterfaceValue(upperBound, "float64"), $.basicInterfaceValue($.arrayIndex((h$ as histogram).upperBounds!, i + 1), "float64")) as any))
			}
		} else {
			if (math.IsInf(upperBound, 1)) {
				// The +Inf bucket is implicit. Remove it here.
				;(h$ as histogram).upperBounds = $.goSlice((h$ as histogram).upperBounds, undefined, i)
			}
		}
	}
	// Finally we know the final length of h.upperBounds and can make buckets
	// for both counts as well as exemplars:
	$.pointerValue<histogramCounts>($.arrayIndex((h$ as histogram).counts, 0)).buckets = $.makeSlice<bigint>($.sliceLen((h$ as histogram).upperBounds), undefined, "number")
	$.pointerValue<histogramCounts>($.arrayIndex((h$ as histogram).counts, 1)).buckets = $.makeSlice<bigint>($.sliceLen((h$ as histogram).upperBounds), undefined, "number");
	;(h$ as histogram).exemplars = $.makeSlice<atomic.Value>($.sliceLen((h$ as histogram).upperBounds) + 1, undefined, undefined, () => $.markAsStructValue(new atomic.Value()))

	void (h$ as histogram).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(h, "*prometheus.histogram", /* @__PURE__ */ $.pointerType("prometheus.histogram")))
	return $.interfaceValue<Histogram | null>(h, "*prometheus.histogram", /* @__PURE__ */ $.pointerType("prometheus.histogram"))
}

export async function NewHistogramVec(opts: HistogramOpts, labelNames: $.Slice<string>): globalThis.Promise<HistogramVec | $.VarRef<HistogramVec> | null> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, labelNames, opts.ConstLabels)
	return (await (async () => { const __goscriptLiteralField7 = await __goscript_vec.NewMetricVec(desc, $.functionValue(async (lvs: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> => {
		return (await newHistogram(desc, (opts).clone(), lvs) as __goscript_metric.Metric | null)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["prometheus.Metric"], isVariadic: true } as $.FunctionTypeInfo))); return new HistogramVec({MetricVec: __goscriptLiteralField7}) })())
}

export async function NewConstHistogram(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count: bigint, sum: number, buckets: globalThis.Map<number, bigint> | null, labelValues: $.Slice<string>): globalThis.Promise<[__goscript_metric.Metric | null, $.GoError]> {
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	if ((desc$ as __goscript_desc.Desc).err != null) {
		return [null, (desc$ as __goscript_desc.Desc).err]
	}
	{
		let err = __goscript_labels.validateLabelValues(labelValues, $.sliceLen((desc$ as __goscript_desc.Desc).variableLabels))
		if (err != null) {
			return [null, err]
		}
	}
	return [$.interfaceValue<__goscript_metric.Metric | null>((await (async () => { const __goscriptLiteralField10 = await __goscript_value.MakeLabelPairs(desc, labelValues); return new constHistogram({desc: desc, count: count, sum: sum, buckets: buckets, labelPairs: __goscriptLiteralField10}) })()), "*prometheus.constHistogram", /* @__PURE__ */ $.pointerType("prometheus.constHistogram")), null]
}

export async function MustNewConstHistogram(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count: bigint, sum: number, buckets: globalThis.Map<number, bigint> | null, labelValues: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> {
	let [m, err] = await NewConstHistogram(desc, count, sum, buckets, labelValues)
	if (err != null) {
		$.panic((err as any))
	}
	return m
}

export function buckSort_Len(s: buckSort): number {
	return $.sliceLen((s as buckSort))
}

export function buckSort_Swap(s: buckSort, i: number, j: number): void {
	let __goscriptAssign0_0: dto.Bucket | $.VarRef<dto.Bucket> | null = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: dto.Bucket | $.VarRef<dto.Bucket> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function buckSort_Less(s: buckSort, i: number, j: number): boolean {
	return dto.Bucket.prototype.GetUpperBound.call($.arrayIndex(s!, i)) < dto.Bucket.prototype.GetUpperBound.call($.arrayIndex(s!, j))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (buckSort_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (buckSort_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (buckSort_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket"), "prometheus.buckSort"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
