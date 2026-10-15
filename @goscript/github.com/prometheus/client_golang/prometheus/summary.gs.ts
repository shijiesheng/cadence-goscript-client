// Generated file based on summary.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as quantile from "@goscript/github.com/beorn7/perks/quantile/index.js"

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
import "@goscript/github.com/beorn7/perks/quantile/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./observer.gs.ts"
import "./value.gs.ts"
import "./vec.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Summary", "prometheus.SummaryOpts", "prometheus.summary", "prometheus.summaryCounts", "prometheus.noObjectivesSummary", "prometheus.quantSort", "prometheus.SummaryVec", "prometheus.constSummary"])

export type Summary = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Observe(_p0: number): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.Summary",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Observe", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export type quantSort = $.Slice<dto.Quantile | $.VarRef<dto.Quantile> | null>

$.registerNamedType("prometheus.quantSort", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")));

$.registerNamedValueType(
	"prometheus.quantSort",
	{Len: (receiver: any, ...args: any[]) => (quantSort_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (quantSort_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (quantSort_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*prometheus.quantSort",
	{Len: (receiver: any, ...args: any[]) => (quantSort_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (quantSort_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (quantSort_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class SummaryOpts {
	// Namespace, Subsystem, and Name are components of the fully-qualified
	// name of the Summary (created by joining these components with
	// "_"). Only Name is mandatory, the others merely help structuring the
	// name. Note that the fully-qualified name of the Summary must be a
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

	// Help provides information about this Summary.
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
	// Due to the way a Summary is represented in the Prometheus text format
	// and how it is handled by the Prometheus server internally, “quantile”
	// is an illegal label name. Construction of a Summary or SummaryVec
	// will panic if this label name is used in ConstLabels.
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

	// Objectives defines the quantile rank estimates with their respective
	// absolute error. If Objectives[q] = e, then the value reported for q
	// will be the φ-quantile value for some φ between q-e and q+e.  The
	// default value is an empty map, resulting in a summary without
	// quantiles.
	public get Objectives(): globalThis.Map<number, number> | null {
		return this._fields.Objectives
	}

	public set Objectives(value: globalThis.Map<number, number> | null) {
		this._fields.Objectives = value
	}

	// MaxAge defines the duration for which an observation stays relevant
	// for the summary. Only applies to pre-calculated quantiles, does not
	// apply to _sum and _count. Must be positive. The default value is
	// DefMaxAge.
	public get MaxAge(): time.Duration {
		return this._fields.MaxAge
	}

	public set MaxAge(value: time.Duration) {
		this._fields.MaxAge = value
	}

	// AgeBuckets is the number of buckets used to exclude observations that
	// are older than MaxAge from the summary. A higher number has a
	// resource penalty, so only increase it if the higher resolution is
	// really required. For very high observation rates, you might want to
	// reduce the number of age buckets. With only one age bucket, you will
	// effectively see a complete reset of the summary each time MaxAge has
	// passed. The default value is DefAgeBuckets.
	public get AgeBuckets(): number {
		return this._fields.AgeBuckets
	}

	public set AgeBuckets(value: number) {
		this._fields.AgeBuckets = value
	}

	// BufCap defines the default sample stream buffer size.  The default
	// value of DefBufCap should suffice for most uses. If there is a need
	// to increase the value, a multiple of 500 is recommended (because that
	// is the internal buffer size of the underlying package
	// "github.com/bmizerany/perks/quantile").
	public get BufCap(): number {
		return this._fields.BufCap
	}

	public set BufCap(value: number) {
		this._fields.BufCap = value
	}

	public _fields: {
		Namespace: string
		Subsystem: string
		Name: string
		Help: string
		ConstLabels: __goscript_labels.Labels
		Objectives: globalThis.Map<number, number> | null
		MaxAge: time.Duration
		AgeBuckets: number
		BufCap: number
	}

	constructor(init?: Partial<{Namespace?: string, Subsystem?: string, Name?: string, Help?: string, ConstLabels?: __goscript_labels.Labels, Objectives?: globalThis.Map<number, number> | null, MaxAge?: time.Duration, AgeBuckets?: number, BufCap?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Namespace: init?.Namespace ?? ("" as string),
			Subsystem: init?.Subsystem ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Help: init?.Help ?? ("" as string),
			ConstLabels: init?.ConstLabels ?? (null! as __goscript_labels.Labels),
			Objectives: init?.Objectives ?? (null! as globalThis.Map<number, number> | null),
			MaxAge: init?.MaxAge ?? (0n as time.Duration),
			AgeBuckets: init?.AgeBuckets ?? (0 as number),
			BufCap: init?.BufCap ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SummaryOpts {
		return new SummaryOpts(this, true)
	}

	public __goscriptAssign(source: SummaryOpts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
		target.Objectives = values.Objectives
		target.MaxAge = values.MaxAge
		target.AgeBuckets = values.AgeBuckets
		target.BufCap = values.BufCap
	}

	static __typeInfo = $.registerStructType(
		"prometheus.SummaryOpts",
		() => new SummaryOpts(),
		() => [],
		SummaryOpts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true), /* @__PURE__ */ $.structField("Objectives", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("float64")), [5], 72, true), /* @__PURE__ */ $.structField("MaxAge", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 80, true), /* @__PURE__ */ $.structField("AgeBuckets", /* @__PURE__ */ $.basicType("uint32"), [7], 88, true), /* @__PURE__ */ $.structField("BufCap", /* @__PURE__ */ $.basicType("uint32"), [8], 92, true)]
	)
}

export class summary {
	public get selfCollector(): __goscript_collector.selfCollector {
		return this._fields.selfCollector
	}

	public set selfCollector(value: __goscript_collector.selfCollector) {
		this._fields.selfCollector = value
	}

	public get bufMtx(): sync.Mutex {
		return this._fields.bufMtx
	}

	public set bufMtx(value: sync.Mutex) {
		this._fields.bufMtx = value
	}

	public get mtx(): sync.Mutex {
		return this._fields.mtx
	}

	public set mtx(value: sync.Mutex) {
		this._fields.mtx = value
	}

	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get objectives(): globalThis.Map<number, number> | null {
		return this._fields.objectives
	}

	public set objectives(value: globalThis.Map<number, number> | null) {
		this._fields.objectives = value
	}

	public get sortedObjectives(): $.Slice<number> {
		return this._fields.sortedObjectives
	}

	public set sortedObjectives(value: $.Slice<number>) {
		this._fields.sortedObjectives = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public get sum(): number {
		return this._fields.sum
	}

	public set sum(value: number) {
		this._fields.sum = value
	}

	public get cnt(): bigint {
		return this._fields.cnt
	}

	public set cnt(value: bigint) {
		this._fields.cnt = value
	}

	public get hotBuf(): $.Slice<number> {
		return this._fields.hotBuf
	}

	public set hotBuf(value: $.Slice<number>) {
		this._fields.hotBuf = value
	}

	public get coldBuf(): $.Slice<number> {
		return this._fields.coldBuf
	}

	public set coldBuf(value: $.Slice<number>) {
		this._fields.coldBuf = value
	}

	public get streams(): $.Slice<quantile.Stream | $.VarRef<quantile.Stream> | null> {
		return this._fields.streams
	}

	public set streams(value: $.Slice<quantile.Stream | $.VarRef<quantile.Stream> | null>) {
		this._fields.streams = value
	}

	public get streamDuration(): time.Duration {
		return this._fields.streamDuration
	}

	public set streamDuration(value: time.Duration) {
		this._fields.streamDuration = value
	}

	public get headStream(): quantile.Stream | $.VarRef<quantile.Stream> | null {
		return this._fields.headStream
	}

	public set headStream(value: quantile.Stream | $.VarRef<quantile.Stream> | null) {
		this._fields.headStream = value
	}

	public get headStreamIdx(): number {
		return this._fields.headStreamIdx
	}

	public set headStreamIdx(value: number) {
		this._fields.headStreamIdx = value
	}

	public get headStreamExpTime(): time.Time {
		return this._fields.headStreamExpTime
	}

	public set headStreamExpTime(value: time.Time) {
		this._fields.headStreamExpTime = value
	}

	public get hotBufExpTime(): time.Time {
		return this._fields.hotBufExpTime
	}

	public set hotBufExpTime(value: time.Time) {
		this._fields.hotBufExpTime = value
	}

	public _fields: {
		selfCollector: __goscript_collector.selfCollector
		bufMtx: sync.Mutex
		mtx: sync.Mutex
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		objectives: globalThis.Map<number, number> | null
		sortedObjectives: $.Slice<number>
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
		sum: number
		cnt: bigint
		hotBuf: $.Slice<number>
		coldBuf: $.Slice<number>
		streams: $.Slice<quantile.Stream | $.VarRef<quantile.Stream> | null>
		streamDuration: time.Duration
		headStream: quantile.Stream | $.VarRef<quantile.Stream> | null
		headStreamIdx: number
		headStreamExpTime: time.Time
		hotBufExpTime: time.Time
	}

	constructor(init?: Partial<{selfCollector?: __goscript_collector.selfCollector, bufMtx?: sync.Mutex, mtx?: sync.Mutex, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, objectives?: globalThis.Map<number, number> | null, sortedObjectives?: $.Slice<number>, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, sum?: number, cnt?: bigint, hotBuf?: $.Slice<number>, coldBuf?: $.Slice<number>, streams?: $.Slice<quantile.Stream | $.VarRef<quantile.Stream> | null>, streamDuration?: time.Duration, headStream?: quantile.Stream | $.VarRef<quantile.Stream> | null, headStreamIdx?: number, headStreamExpTime?: time.Time, hotBufExpTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			bufMtx: init?.bufMtx ? $.markAsStructValue($.cloneStructValue(init.bufMtx)) : $.markAsStructValue(new sync.Mutex()),
			mtx: init?.mtx ? $.markAsStructValue($.cloneStructValue(init.mtx)) : $.markAsStructValue(new sync.Mutex()),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			objectives: init?.objectives ?? (null! as globalThis.Map<number, number> | null),
			sortedObjectives: init?.sortedObjectives ?? (null! as $.Slice<number>),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>),
			sum: init?.sum ?? (0 as number),
			cnt: init?.cnt ?? (0n as bigint),
			hotBuf: init?.hotBuf ?? (null! as $.Slice<number>),
			coldBuf: init?.coldBuf ?? (null! as $.Slice<number>),
			streams: init?.streams ?? (null! as $.Slice<quantile.Stream | $.VarRef<quantile.Stream> | null>),
			streamDuration: init?.streamDuration ?? (0n as time.Duration),
			headStream: init?.headStream ?? (null! as quantile.Stream | $.VarRef<quantile.Stream> | null),
			headStreamIdx: init?.headStreamIdx ?? (0 as number),
			headStreamExpTime: init?.headStreamExpTime ? $.markAsStructValue($.cloneStructValue(init.headStreamExpTime)) : $.markAsStructValue(new time.Time()),
			hotBufExpTime: init?.hotBufExpTime ? $.markAsStructValue($.cloneStructValue(init.hotBufExpTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): summary {
		return new summary(this, true)
	}

	public __goscriptAssign(source: summary): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.selfCollector, values.selfCollector)
		$.assignStruct(target.bufMtx, values.bufMtx)
		$.assignStruct(target.mtx, values.mtx)
		target.desc = values.desc
		target.objectives = values.objectives
		target.sortedObjectives = values.sortedObjectives
		target.labelPairs = values.labelPairs
		target.sum = values.sum
		target.cnt = values.cnt
		target.hotBuf = values.hotBuf
		target.coldBuf = values.coldBuf
		target.streams = values.streams
		target.streamDuration = values.streamDuration
		target.headStream = values.headStream
		target.headStreamIdx = values.headStreamIdx
		$.assignStruct(target.headStreamExpTime, values.headStreamExpTime)
		$.assignStruct(target.hotBufExpTime, values.hotBufExpTime)
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const s: summary | $.VarRef<summary> | null = this;
		return $.pointerValue<summary>(s).desc
	}

	public async Observe(v: number): globalThis.Promise<void> {
		let s: summary | $.VarRef<summary> | null = this;
		using __defer = new $.DisposableStack()
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		await (s$ as summary).bufMtx.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as summary).bufMtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		if ($.markAsStructValue($.cloneStructValue(now)).After($.markAsStructValue($.cloneStructValue((s$ as summary).hotBufExpTime)))) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).asyncFlush($.markAsStructValue($.cloneStructValue(now))) : summary.prototype.asyncFlush.call(s, $.markAsStructValue($.cloneStructValue(now))))
		}
		;(s$ as summary).hotBuf = $.appendOne((s$ as summary).hotBuf, v)
		if ($.sliceLen((s$ as summary).hotBuf) == $.cap((s$ as summary).hotBuf)) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).asyncFlush($.markAsStructValue($.cloneStructValue(now))) : summary.prototype.asyncFlush.call(s, $.markAsStructValue($.cloneStructValue(now))))
		}
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const s: summary | $.VarRef<summary> | null = this;
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		let sum: dto.Summary | $.VarRef<dto.Summary> | null = new dto.Summary()
		let sum$: dto.Summary = sum == null ? $.pointerTarget<dto.Summary>(sum) : (sum as any).__isVarRef === true ? (sum as any).value : (sum as any).__goValue === undefined ? (sum as any) : $.pointerTarget<dto.Summary>(sum)
		let qs: $.Slice<dto.Quantile | $.VarRef<dto.Quantile> | null> = $.makeSlice<dto.Quantile | $.VarRef<dto.Quantile> | null>(0, $.len((s$ as summary).objectives))

		await (s$ as summary).bufMtx.Lock()
		await (s$ as summary).mtx.Lock()
		// Swap bufs even if hotBuf is empty to set new hotBufExpTime.
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).swapBufs($.markAsStructValue($.cloneStructValue(time.Now()))) : summary.prototype.swapBufs.call(s, $.markAsStructValue($.cloneStructValue(time.Now()))))
		void (s$ as summary).bufMtx.Unlock()

		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).flushColdBuf() : summary.prototype.flushColdBuf.call(s));
		;(sum$ as dto.Summary).SampleCount = proto.Uint64((s$ as summary).cnt);
		;(sum$ as dto.Summary).SampleSum = proto.Float64((s$ as summary).sum)

		for (let __goscriptRangeTarget2 = (s$ as summary).sortedObjectives, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let rank = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number)
			let q: number = 0
			if (quantile.Stream.prototype.Count.call((s$ as summary).headStream) == 0) {
				q = math.NaN()
			} else {
				q = await quantile.Stream.prototype.Query.call((s$ as summary).headStream, rank)
			}
			qs = $.appendOne(qs, (() => { const __goscriptLiteralField2 = proto.Float64(rank); const __goscriptLiteralField3 = proto.Float64(q); return new dto.Quantile({Quantile: __goscriptLiteralField2, Value: __goscriptLiteralField3}) })(), $.appendZeros.nil)
		}

		void (s$ as summary).mtx.Unlock()

		if ($.sliceLen(qs) > 0) {
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((qs as quantSort), "prometheus.quantSort", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))!)
		}
		;(sum$ as dto.Summary).Quantile = qs;

		;(out$ as dto.Metric).Summary = sum;
		;(out$ as dto.Metric).Label = (s$ as summary).labelPairs
		return null
	}

	public async asyncFlush(now: time.Time): globalThis.Promise<void> {
		const s: summary | $.VarRef<summary> | null = this;
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		await (s$ as summary).mtx.Lock()
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).swapBufs(now) : summary.prototype.swapBufs.call(s, now))

		// Unblock the original goroutine that was responsible for the mutation
		// that triggered the compaction.  But hold onto the global non-buffer
		// state mutex until the operation finishes.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).flushColdBuf() : summary.prototype.flushColdBuf.call(s))
			void (s$ as summary).mtx.Unlock()
		})() })
	}

	public async flushColdBuf(): globalThis.Promise<void> {
		let s: summary | $.VarRef<summary> | null = this;
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		for (let __goscriptRangeTarget4 = (s$ as summary).coldBuf, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number)
			for (let __goscriptRangeTarget3 = (s$ as summary).streams, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let stream = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as quantile.Stream | $.VarRef<quantile.Stream> | null)
				await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as quantile.Stream).Insert(v) : quantile.Stream.prototype.Insert.call(stream, v))
			}
			;(s$ as summary).cnt++;
			;(s$ as summary).sum = (s$ as summary).sum + (v)
		}
		;(s$ as summary).coldBuf = $.goSlice((s$ as summary).coldBuf, 0, 0)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).maybeRotateStreams() : summary.prototype.maybeRotateStreams.call(s))
	}

	public maybeRotateStreams(): void {
		let s: summary | $.VarRef<summary> | null = this;
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		while (!$.markAsStructValue($.cloneStructValue((s$ as summary).hotBufExpTime)).Equal($.markAsStructValue($.cloneStructValue((s$ as summary).headStreamExpTime)))) {
			quantile.Stream.prototype.Reset.call((s$ as summary).headStream);
			;(s$ as summary).headStreamIdx++
			if ((s$ as summary).headStreamIdx >= $.sliceLen((s$ as summary).streams)) {
				;(s$ as summary).headStreamIdx = 0
			}
			;(s$ as summary).headStream = $.arrayIndex((s$ as summary).streams!, (s$ as summary).headStreamIdx)
			$.assignStruct((s$ as summary).headStreamExpTime, $.markAsStructValue($.cloneStructValue((s$ as summary).headStreamExpTime)).Add((s$ as summary).streamDuration))
		}
	}

	public newStream(): quantile.Stream | $.VarRef<quantile.Stream> | null {
		const s: summary | $.VarRef<summary> | null = this;
		return quantile.NewTargeted($.pointerValue<summary>(s).objectives)
	}

	public swapBufs(now: time.Time): void {
		let s: summary | $.VarRef<summary> | null = this;
		const s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
		if ($.sliceLen((s$ as summary).coldBuf) != 0) {
			$.panic("coldBuf is not empty")
		}
		let __goscriptAssign0_0: $.Slice<number> = (s$ as summary).coldBuf
		let __goscriptAssign0_1: $.Slice<number> = (s$ as summary).hotBuf;
		;(s$ as summary).hotBuf = __goscriptAssign0_0;
		;(s$ as summary).coldBuf = __goscriptAssign0_1
		// hotBuf is now empty and gets new expiration set.
		while ($.markAsStructValue($.cloneStructValue(now)).After($.markAsStructValue($.cloneStructValue((s$ as summary).hotBufExpTime)))) {
			$.assignStruct((s$ as summary).hotBufExpTime, $.markAsStructValue($.cloneStructValue((s$ as summary).hotBufExpTime)).Add((s$ as summary).streamDuration))
		}
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
		"prometheus.summary",
		() => new summary(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Observe", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("asyncFlush", [["now", "time.Time"]], [], true), $.methodSignature("flushColdBuf", [], [], true), $.methodSignature("maybeRotateStreams", [], [], true), $.methodSignature("newStream", [], [/* @__PURE__ */ $.pointerType("quantile.Stream")], true), $.methodSignature("swapBufs", [["now", "time.Time"]], [], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		summary,
		() => [/* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("bufMtx", "sync.Mutex", [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("mtx", "sync.Mutex", [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("objectives", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("float64")), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("sortedObjectives", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [5], 48, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [6], 72, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("sum", /* @__PURE__ */ $.basicType("float64"), [7], 96, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("cnt", /* @__PURE__ */ $.basicType("uint64"), [8], 104, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("hotBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [9], 112, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("coldBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [10], 136, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("streams", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("quantile.Stream")), [11], 160, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("streamDuration", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [12], 184, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("headStream", /* @__PURE__ */ $.pointerType("quantile.Stream"), [13], 192, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("headStreamIdx", /* @__PURE__ */ $.basicType("int"), [14], 200, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("headStreamExpTime", "time.Time", [15], 208, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("hotBufExpTime", "time.Time", [16], 232, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class summaryCounts {
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

	public _fields: {
		sumBits: bigint
		count: bigint
	}

	constructor(init?: Partial<{sumBits?: bigint, count?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			sumBits: init?.sumBits ?? (0n as bigint),
			count: init?.count ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): summaryCounts {
		return new summaryCounts(this, true)
	}

	public __goscriptAssign(source: summaryCounts): void {
		const target = this._fields
		const values = source._fields
		target.sumBits = values.sumBits
		target.count = values.count
	}

	static __typeInfo = $.registerStructType(
		"prometheus.summaryCounts",
		() => new summaryCounts(),
		() => [],
		summaryCounts,
		() => [/* @__PURE__ */ $.structField("sumBits", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class noObjectivesSummary {
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
	public get counts(): (summaryCounts | $.VarRef<summaryCounts> | null)[] {
		return this._fields.counts
	}

	public set counts(value: (summaryCounts | $.VarRef<summaryCounts> | null)[]) {
		this._fields.counts = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public _fields: {
		countAndHotIdx: bigint
		selfCollector: __goscript_collector.selfCollector
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		writeMtx: sync.Mutex
		counts: (summaryCounts | $.VarRef<summaryCounts> | null)[]
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{countAndHotIdx?: bigint, selfCollector?: __goscript_collector.selfCollector, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, writeMtx?: sync.Mutex, counts?: (summaryCounts | $.VarRef<summaryCounts> | null)[], labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			countAndHotIdx: init?.countAndHotIdx ?? (0n as bigint),
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			writeMtx: init?.writeMtx ? $.markAsStructValue($.cloneStructValue(init.writeMtx)) : $.markAsStructValue(new sync.Mutex()),
			counts: init?.counts !== undefined ? $.cloneArrayValue(init.counts, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.summaryCounts"), 2)) : $.arrayValue(globalThis.Array.from({ length: 2 }, () => null)),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noObjectivesSummary {
		return new noObjectivesSummary(this, true)
	}

	public __goscriptAssign(source: noObjectivesSummary): void {
		const target = this._fields
		const values = source._fields
		target.countAndHotIdx = values.countAndHotIdx
		$.assignStruct(target.selfCollector, values.selfCollector)
		target.desc = values.desc
		$.assignStruct(target.writeMtx, values.writeMtx)
		target.counts = $.assignFieldValue(target.counts, values.counts, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.summaryCounts"), 2))
		target.labelPairs = values.labelPairs
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const s: noObjectivesSummary | $.VarRef<noObjectivesSummary> | null = this;
		return $.pointerValue<noObjectivesSummary>(s).desc
	}

	public Observe(v: number): void {
		const s: noObjectivesSummary | $.VarRef<noObjectivesSummary> | null = this;
		const s$: noObjectivesSummary = s == null ? $.pointerTarget<noObjectivesSummary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<noObjectivesSummary>(s)
		// We increment h.countAndHotIdx so that the counter in the lower
		// 63 bits gets incremented. At the same time, we get the new value
		// back, which we can use to find the currently-hot counts.
		let n = atomic.AddUint64($.fieldRef((s$ as noObjectivesSummary)._fields, "countAndHotIdx"), 1n)
		let hotCounts: summaryCounts | $.VarRef<summaryCounts> | null = $.arrayIndex((s$ as noObjectivesSummary).counts, globalThis.Number($.uint64Shr(n, 63n)))
		let hotCounts$: summaryCounts = hotCounts == null ? $.pointerTarget<summaryCounts>(hotCounts) : (hotCounts as any).__isVarRef === true ? (hotCounts as any).value : (hotCounts as any).__goValue === undefined ? (hotCounts as any) : $.pointerTarget<summaryCounts>(hotCounts)

		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "sumBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + v)
			if (atomic.CompareAndSwapUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "sumBits"), oldBits, newBits)) {
				break
			}
		}
		// Increment count last as we take it as a signal that the observation
		// is complete.
		atomic.AddUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "count"), 1n)
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const s: noObjectivesSummary | $.VarRef<noObjectivesSummary> | null = this;
		using __defer = new $.DisposableStack()
		const s$: noObjectivesSummary = s == null ? $.pointerTarget<noObjectivesSummary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<noObjectivesSummary>(s)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		// For simplicity, we protect this whole method by a mutex. It is not in
		// the hot path, i.e. Observe is called much more often than Write. The
		// complication of making Write lock-free isn't worth it, if possible at
		// all.
		await (s$ as noObjectivesSummary).writeMtx.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as noObjectivesSummary).writeMtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		// Adding 1<<63 switches the hot index (from 0 to 1 or from 1 to 0)
		// without touching the count bits. See the struct comments for a full
		// description of the algorithm.
		let n = atomic.AddUint64($.fieldRef((s$ as noObjectivesSummary)._fields, "countAndHotIdx"), 9223372036854775808n)
		// count is contained unchanged in the lower 63 bits.
		let count = $.uint64And(n, 9223372036854775807n)
		// The most significant bit tells us which counts is hot. The complement
		// is thus the cold one.
		let hotCounts: summaryCounts | $.VarRef<summaryCounts> | null = $.arrayIndex((s$ as noObjectivesSummary).counts, globalThis.Number($.uint64Shr(n, 63n)))
		let hotCounts$: summaryCounts = hotCounts == null ? $.pointerTarget<summaryCounts>(hotCounts) : (hotCounts as any).__isVarRef === true ? (hotCounts as any).value : (hotCounts as any).__goValue === undefined ? (hotCounts as any) : $.pointerTarget<summaryCounts>(hotCounts)
		let coldCounts: summaryCounts | $.VarRef<summaryCounts> | null = $.arrayIndex((s$ as noObjectivesSummary).counts, globalThis.Number($.uint64Shr(($.uint64Xor(n, -1n)), 63n)))
		let coldCounts$: summaryCounts = coldCounts == null ? $.pointerTarget<summaryCounts>(coldCounts) : (coldCounts as any).__isVarRef === true ? (coldCounts as any).value : (coldCounts as any).__goValue === undefined ? (coldCounts as any) : $.pointerTarget<summaryCounts>(coldCounts)

		// Await cooldown.
		while (count != atomic.LoadUint64($.fieldRef((coldCounts$ as summaryCounts)._fields, "count"))) {
			runtime.Gosched()
		}

		let sum: dto.Summary | $.VarRef<dto.Summary> | null = (() => { const __goscriptLiteralField4 = proto.Uint64(count); const __goscriptLiteralField5 = proto.Float64(math.Float64frombits(atomic.LoadUint64($.fieldRef((coldCounts$ as summaryCounts)._fields, "sumBits")))); return new dto.Summary({SampleCount: __goscriptLiteralField4, SampleSum: __goscriptLiteralField5}) })();

		;(out$ as dto.Metric).Summary = sum;
		;(out$ as dto.Metric).Label = (s$ as noObjectivesSummary).labelPairs

		// Finally add all the cold counts to the new hot counts and reset the cold counts.
		atomic.AddUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "count"), count)
		atomic.StoreUint64($.fieldRef((coldCounts$ as summaryCounts)._fields, "count"), 0n)
		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "sumBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + (sum !== null && (sum as any).__isVarRef !== true && (sum as any).__goValue === undefined ? ((sum as any) as dto.Summary).GetSampleSum() : dto.Summary.prototype.GetSampleSum.call(sum)))
			if (atomic.CompareAndSwapUint64($.fieldRef((hotCounts$ as summaryCounts)._fields, "sumBits"), oldBits, newBits)) {
				atomic.StoreUint64($.fieldRef((coldCounts$ as summaryCounts)._fields, "sumBits"), 0n)
				break
			}
		}
		return null
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
		"prometheus.noObjectivesSummary",
		() => new noObjectivesSummary(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Observe", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		noObjectivesSummary,
		() => [/* @__PURE__ */ $.structField("countAndHotIdx", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("writeMtx", "sync.Mutex", [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("counts", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("prometheus.summaryCounts"), 2), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [5], 56, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class SummaryVec {
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

	public clone(): SummaryVec {
		return new SummaryVec(this, true)
	}

	public __goscriptAssign(source: SummaryVec): void {
		const target = this._fields
		const values = source._fields
		target.MetricVec = values.MetricVec
	}

	public CurryWith(labels: __goscript_labels.Labels): [__goscript_observer.ObserverVec | null, $.GoError] {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let __goscriptTuple0: any = __goscript_vec.MetricVec.prototype.CurryWith.call($.pointerValue<SummaryVec>(v).MetricVec, labels)
		let vec: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (vec != null) {
			return [$.interfaceValue<__goscript_observer.ObserverVec | null>(new SummaryVec({MetricVec: vec}), "*prometheus.SummaryVec", /* @__PURE__ */ $.pointerType("prometheus.SummaryVec")), err]
		}
		return [null, err]
	}

	public async GetMetricWith(labels: __goscript_labels.Labels): globalThis.Promise<[__goscript_observer.Observer | null, $.GoError]> {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWith.call($.pointerValue<SummaryVec>(v).MetricVec, labels)
		if (metric != null) {
			return [$.mustTypeAssert<__goscript_observer.Observer | null>(metric, "prometheus.Observer"), err]
		}
		return [null, err]
	}

	public async GetMetricWithLabelValues(lvs: $.Slice<string>): globalThis.Promise<[__goscript_observer.Observer | null, $.GoError]> {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWithLabelValues.call($.pointerValue<SummaryVec>(v).MetricVec, lvs)
		if (metric != null) {
			return [$.mustTypeAssert<__goscript_observer.Observer | null>(metric, "prometheus.Observer"), err]
		}
		return [null, err]
	}

	public MustCurryWith(labels: __goscript_labels.Labels): __goscript_observer.ObserverVec | null {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let [vec, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as SummaryVec).CurryWith(labels) : SummaryVec.prototype.CurryWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return vec
	}

	public async With(labels: __goscript_labels.Labels): globalThis.Promise<__goscript_observer.Observer | null> {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let [s, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as SummaryVec).GetMetricWith(labels) : SummaryVec.prototype.GetMetricWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return s
	}

	public async WithLabelValues(lvs: $.Slice<string>): globalThis.Promise<__goscript_observer.Observer | null> {
		const v: SummaryVec | $.VarRef<SummaryVec> | null = this;
		let [s, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as SummaryVec).GetMetricWithLabelValues(lvs) : SummaryVec.prototype.GetMetricWithLabelValues.call(v, lvs))
		if (err != null) {
			$.panic((err as any))
		}
		return s
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
		"prometheus.SummaryVec",
		() => new SummaryVec(),
		() => [$.methodSignature("CurryWith", [["labels", "prometheus.Labels"]], ["prometheus.ObserverVec", "error"], true), $.methodSignature("GetMetricWith", [["labels", "prometheus.Labels"]], ["prometheus.Observer", "error"], true), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Observer", "error"], true), $.methodSignature("MustCurryWith", [["labels", "prometheus.Labels"]], ["prometheus.ObserverVec"], true), $.methodSignature("With", [["labels", "prometheus.Labels"]], ["prometheus.Observer"], true), $.methodSignature("WithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Observer"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]]), $.methodSignature("Delete", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("DeleteLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]]), $.methodSignature("Reset"), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("hashLabelValues", [["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("uint64"), "error"]), $.methodSignature("hashLabels", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("uint64"), "error"])],
		SummaryVec,
		() => [/* @__PURE__ */ $.structField("MetricVec", /* @__PURE__ */ $.pointerType("prometheus.MetricVec"), [0], 0, true, { anonymous: true })]
	)
}

export class constSummary {
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

	public get quantiles(): globalThis.Map<number, number> | null {
		return this._fields.quantiles
	}

	public set quantiles(value: globalThis.Map<number, number> | null) {
		this._fields.quantiles = value
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
		quantiles: globalThis.Map<number, number> | null
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count?: bigint, sum?: number, quantiles?: globalThis.Map<number, number> | null, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			count: init?.count ?? (0n as bigint),
			sum: init?.sum ?? (0 as number),
			quantiles: init?.quantiles ?? (null! as globalThis.Map<number, number> | null),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constSummary {
		return new constSummary(this, true)
	}

	public __goscriptAssign(source: constSummary): void {
		const target = this._fields
		const values = source._fields
		target.desc = values.desc
		target.count = values.count
		target.sum = values.sum
		target.quantiles = values.quantiles
		target.labelPairs = values.labelPairs
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const s: constSummary | $.VarRef<constSummary> | null = this;
		return $.pointerValue<constSummary>(s).desc
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const s: constSummary | $.VarRef<constSummary> | null = this;
		const s$: constSummary = s == null ? $.pointerTarget<constSummary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<constSummary>(s)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		let sum: dto.Summary | $.VarRef<dto.Summary> | null = new dto.Summary()
		let sum$: dto.Summary = sum == null ? $.pointerTarget<dto.Summary>(sum) : (sum as any).__isVarRef === true ? (sum as any).value : (sum as any).__goValue === undefined ? (sum as any) : $.pointerTarget<dto.Summary>(sum)
		let qs: $.Slice<dto.Quantile | $.VarRef<dto.Quantile> | null> = $.makeSlice<dto.Quantile | $.VarRef<dto.Quantile> | null>(0, $.len((s$ as constSummary).quantiles));

		;(sum$ as dto.Summary).SampleCount = proto.Uint64((s$ as constSummary).count);
		;(sum$ as dto.Summary).SampleSum = proto.Float64((s$ as constSummary).sum)

		for (const [rank, q] of (s$ as constSummary).quantiles?.entries() ?? []) {
			qs = $.appendOne(qs, (() => { const __goscriptLiteralField7 = proto.Float64(rank); const __goscriptLiteralField8 = proto.Float64(q); return new dto.Quantile({Quantile: __goscriptLiteralField7, Value: __goscriptLiteralField8}) })(), $.appendZeros.nil)
		}

		if ($.sliceLen(qs) > 0) {
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((qs as quantSort), "prometheus.quantSort", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))!)
		}
		;(sum$ as dto.Summary).Quantile = qs;

		;(out$ as dto.Metric).Summary = sum;
		;(out$ as dto.Metric).Label = (s$ as constSummary).labelPairs

		return null
	}

	static __typeInfo = $.registerStructType(
		"prometheus.constSummary",
		() => new constSummary(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true)],
		constSummary,
		() => [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("sum", /* @__PURE__ */ $.basicType("float64"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("quantiles", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("float64")), [3], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [4], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export const quantileLabel: string = "quantile"

export const DefMaxAge: time.Duration = 600000000000n

export const DefAgeBuckets: number = 5

export const DefBufCap: number = 500

export let errQuantileLabelNotAllowed: $.GoError = fmt.Errorf("%q is not allowed as label name in summaries", "quantile")

export function __goscript_set_errQuantileLabelNotAllowed(__goscriptValue: $.GoError): void {
	errQuantileLabelNotAllowed = __goscriptValue
}

export async function NewSummary(opts: SummaryOpts): globalThis.Promise<Summary | null> {
	return newSummary(await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels), (opts).clone(), null)
}

export async function newSummary(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, opts: SummaryOpts, labelValues: $.Slice<string>): globalThis.Promise<Summary | null> {
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	if ($.sliceLen((desc$ as __goscript_desc.Desc).variableLabels) != $.sliceLen(labelValues)) {
		$.panic((__goscript_labels.makeInconsistentCardinalityError((desc$ as __goscript_desc.Desc).fqName, (desc$ as __goscript_desc.Desc).variableLabels, labelValues) as any))
	}

	for (let __goscriptRangeTarget0 = (desc$ as __goscript_desc.Desc).variableLabels, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if ($.stringEqual(n, "quantile")) {
			$.panic((errQuantileLabelNotAllowed as any))
		}
	}
	for (let __goscriptRangeTarget1 = (desc$ as __goscript_desc.Desc).constLabelPairs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		if ($.stringEqual((lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)), "quantile")) {
			$.panic((errQuantileLabelNotAllowed as any))
		}
	}

	if (opts.Objectives == null) {
		opts.Objectives = $.makeMap<number, number>([])
	}

	if (opts.MaxAge < 0n) {
		$.panic((fmt.Errorf("illegal max age MaxAge=%v", $.namedValueInterfaceValue<any>(opts.MaxAge, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())) as any))
	}
	if (opts.MaxAge == 0n) {
		opts.MaxAge = 600000000000n
	}

	if (opts.AgeBuckets == 0) {
		opts.AgeBuckets = 5
	}

	if (opts.BufCap == 0) {
		opts.BufCap = 500
	}

	if ($.len(opts.Objectives) == 0) {
		// Use the lock-free implementation of a Summary without objectives.
		let s: noObjectivesSummary | $.VarRef<noObjectivesSummary> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_value.MakeLabelPairs(desc, labelValues); return new noObjectivesSummary({desc: desc, labelPairs: __goscriptLiteralField0, counts: $.arrayValue([new summaryCounts(), new summaryCounts()])}) })())
		$.pointerValue<noObjectivesSummary>(s).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(s, "*prometheus.noObjectivesSummary", /* @__PURE__ */ $.pointerType("prometheus.noObjectivesSummary")))
		return $.interfaceValue<Summary | null>(s, "*prometheus.noObjectivesSummary", /* @__PURE__ */ $.pointerType("prometheus.noObjectivesSummary"))
	}

	let s: summary | $.VarRef<summary> | null = (await (async () => { const __goscriptLiteralField1 = await __goscript_value.MakeLabelPairs(desc, labelValues); return new summary({desc: desc, objectives: opts.Objectives, sortedObjectives: $.makeSlice<number>(0, $.len(opts.Objectives), "number"), labelPairs: __goscriptLiteralField1, hotBuf: $.makeSlice<number>(0, opts.BufCap, "number"), coldBuf: $.makeSlice<number>(0, opts.BufCap, "number"), streamDuration: $.int64Div(opts.MaxAge, $.int64(opts.AgeBuckets))}) })())
	let s$: summary = s == null ? $.pointerTarget<summary>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<summary>(s)
	$.assignStruct((s$ as summary).headStreamExpTime, $.markAsStructValue($.cloneStructValue(time.Now())).Add((s$ as summary).streamDuration))
	$.assignStruct((s$ as summary).hotBufExpTime, (s$ as summary).headStreamExpTime)

	for (let i = 0; i < opts.AgeBuckets; i = ((i + 1) >>> 0)) {
		;(s$ as summary).streams = $.appendOne((s$ as summary).streams, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as summary).newStream() : summary.prototype.newStream.call(s)), $.appendZeros.nil)
	}
	;(s$ as summary).headStream = $.arrayIndex((s$ as summary).streams!, 0)

	for (const [qu, __rangeValue] of (s$ as summary).objectives?.entries() ?? []) {
		;(s$ as summary).sortedObjectives = $.appendOne((s$ as summary).sortedObjectives, qu)
	}
	sort.Float64s((s$ as summary).sortedObjectives)

	void (s$ as summary).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(s, "*prometheus.summary", /* @__PURE__ */ $.pointerType("prometheus.summary")))
	return $.interfaceValue<Summary | null>(s, "*prometheus.summary", /* @__PURE__ */ $.pointerType("prometheus.summary"))
}

export function quantSort_Len(s: quantSort): number {
	return $.sliceLen((s as quantSort))
}

export function quantSort_Swap(s: quantSort, i: number, j: number): void {
	let __goscriptAssign1_0: dto.Quantile | $.VarRef<dto.Quantile> | null = $.arrayIndex(s!, j)
	let __goscriptAssign1_1: dto.Quantile | $.VarRef<dto.Quantile> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign1_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign1_1
}

export function quantSort_Less(s: quantSort, i: number, j: number): boolean {
	return dto.Quantile.prototype.GetQuantile.call($.arrayIndex(s!, i)) < dto.Quantile.prototype.GetQuantile.call($.arrayIndex(s!, j))
}

export async function NewSummaryVec(opts: SummaryOpts, labelNames: $.Slice<string>): globalThis.Promise<SummaryVec | $.VarRef<SummaryVec> | null> {
	for (let __goscriptRangeTarget5 = labelNames, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let ln = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
		if ($.stringEqual(ln, "quantile")) {
			$.panic((errQuantileLabelNotAllowed as any))
		}
	}
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, labelNames, opts.ConstLabels)
	return (await (async () => { const __goscriptLiteralField6 = await __goscript_vec.NewMetricVec(desc, $.functionValue(async (lvs: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> => {
		return (await newSummary(desc, (opts).clone(), lvs) as __goscript_metric.Metric | null)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["prometheus.Metric"], isVariadic: true } as $.FunctionTypeInfo))); return new SummaryVec({MetricVec: __goscriptLiteralField6}) })())
}

export async function NewConstSummary(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count: bigint, sum: number, quantiles: globalThis.Map<number, number> | null, labelValues: $.Slice<string>): globalThis.Promise<[__goscript_metric.Metric | null, $.GoError]> {
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
	return [$.interfaceValue<__goscript_metric.Metric | null>((await (async () => { const __goscriptLiteralField9 = await __goscript_value.MakeLabelPairs(desc, labelValues); return new constSummary({desc: desc, count: count, sum: sum, quantiles: quantiles, labelPairs: __goscriptLiteralField9}) })()), "*prometheus.constSummary", /* @__PURE__ */ $.pointerType("prometheus.constSummary")), null]
}

export async function MustNewConstSummary(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, count: bigint, sum: number, quantiles: globalThis.Map<number, number> | null, labelValues: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> {
	let [m, err] = await NewConstSummary(desc, count, sum, quantiles, labelValues)
	if (err != null) {
		$.panic((err as any))
	}
	return m
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
	return __goscriptStatic3$value ??= ({Len: (receiver: any, ...args: any[]) => (quantSort_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (quantSort_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (quantSort_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile"), "prometheus.quantSort"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
