// Generated file based on gauge.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_value from "./value.gs.ts"

import * as __goscript_vec from "./vec.gs.ts"
import "@goscript/math/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/sync/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./value.gs.ts"
import "./vec.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Gauge", "prometheus.GaugeOpts", "prometheus.gauge", "prometheus.GaugeVec", "prometheus.GaugeFunc"])

export type Gauge = {
	Add(_p0: number): void
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Dec(): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Inc(): void
	Set(_p0: number): void
	SetToCurrentTime(): void
	Sub(_p0: number): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.Gauge",
	null,
	[$.methodSignature("Add", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Dec"), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Inc"), $.methodSignature("Set", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("SetToCurrentTime"), $.methodSignature("Sub", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export type GaugeFunc = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.GaugeFunc",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export class GaugeOpts {
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

	public get Help(): string {
		return this._fields.Help
	}

	public set Help(value: string) {
		this._fields.Help = value
	}

	public get ConstLabels(): __goscript_labels.Labels {
		return this._fields.ConstLabels
	}

	public set ConstLabels(value: __goscript_labels.Labels) {
		this._fields.ConstLabels = value
	}

	public _fields: {
		Namespace: string
		Subsystem: string
		Name: string
		Help: string
		ConstLabels: __goscript_labels.Labels
	}

	constructor(init?: Partial<{Namespace?: string, Subsystem?: string, Name?: string, Help?: string, ConstLabels?: __goscript_labels.Labels}>, __goscriptValue?: boolean) {
		this._fields = {
			Namespace: init?.Namespace ?? ("" as string),
			Subsystem: init?.Subsystem ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Help: init?.Help ?? ("" as string),
			ConstLabels: init?.ConstLabels ?? (null! as __goscript_labels.Labels)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GaugeOpts {
		return new GaugeOpts(this, true)
	}

	public __goscriptAssign(source: GaugeOpts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
	}

	static __typeInfo = $.registerStructType(
		"prometheus.GaugeOpts",
		() => new GaugeOpts(),
		() => [],
		GaugeOpts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true)]
	)
}

export class gauge {
	// valBits contains the bits of the represented float64 value. It has
	// to go first in the struct to guarantee alignment for atomic
	// operations.  http://golang.org/pkg/sync/atomic/#pkg-note-BUG
	public get valBits(): bigint {
		return this._fields.valBits
	}

	public set valBits(value: bigint) {
		this._fields.valBits = value
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

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public _fields: {
		valBits: bigint
		selfCollector: __goscript_collector.selfCollector
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{valBits?: bigint, selfCollector?: __goscript_collector.selfCollector, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			valBits: init?.valBits ?? (0n as bigint),
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gauge {
		return new gauge(this, true)
	}

	public __goscriptAssign(source: gauge): void {
		const target = this._fields
		const values = source._fields
		target.valBits = values.valBits
		$.assignStruct(target.selfCollector, values.selfCollector)
		target.desc = values.desc
		target.labelPairs = values.labelPairs
	}

	public Add(val: number): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		const g$: gauge = g == null ? $.pointerTarget<gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<gauge>(g)
		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((g$ as gauge)._fields, "valBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + val)
			if (atomic.CompareAndSwapUint64($.fieldRef((g$ as gauge)._fields, "valBits"), oldBits, newBits)) {
				return
			}
		}
	}

	public Dec(): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).Add(-1) : gauge.prototype.Add.call(g, -1))
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const g: gauge | $.VarRef<gauge> | null = this;
		return $.pointerValue<gauge>(g).desc
	}

	public Inc(): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).Add(1) : gauge.prototype.Add.call(g, 1))
	}

	public Set(val: number): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		atomic.StoreUint64($.fieldRef($.pointerValue<gauge>(g)._fields, "valBits"), math.Float64bits(val))
	}

	public SetToCurrentTime(): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).Set(globalThis.Number($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()) / 1e9) : gauge.prototype.Set.call(g, globalThis.Number($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()) / 1e9))
	}

	public Sub(val: number): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).Add(val * -1) : gauge.prototype.Add.call(g, val * -1))
	}

	public Write(out: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError {
		const g: gauge | $.VarRef<gauge> | null = this;
		const g$: gauge = g == null ? $.pointerTarget<gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<gauge>(g)
		let val = math.Float64frombits(atomic.LoadUint64($.fieldRef((g$ as gauge)._fields, "valBits")))
		return __goscript_value.populateMetric(2, val, (g$ as gauge).labelPairs, null, out)
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
		"prometheus.gauge",
		() => new gauge(),
		() => [$.methodSignature("Add", [["val", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Dec", [], [], true), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Inc", [], [], true), $.methodSignature("Set", [["val", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("SetToCurrentTime", [], [], true), $.methodSignature("Sub", [["val", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		gauge,
		() => [/* @__PURE__ */ $.structField("valBits", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class GaugeVec {
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

	public clone(): GaugeVec {
		return new GaugeVec(this, true)
	}

	public __goscriptAssign(source: GaugeVec): void {
		const target = this._fields
		const values = source._fields
		target.MetricVec = values.MetricVec
	}

	public CurryWith(labels: __goscript_labels.Labels): [GaugeVec | $.VarRef<GaugeVec> | null, $.GoError] {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let __goscriptTuple0: any = __goscript_vec.MetricVec.prototype.CurryWith.call($.pointerValue<GaugeVec>(v).MetricVec, labels)
		let vec: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (vec != null) {
			return [new GaugeVec({MetricVec: vec}), err]
		}
		return [null, err]
	}

	public async GetMetricWith(labels: __goscript_labels.Labels): globalThis.Promise<[Gauge | null, $.GoError]> {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWith.call($.pointerValue<GaugeVec>(v).MetricVec, labels)
		if (metric != null) {
			return [$.mustTypeAssert<Gauge | null>(metric, "prometheus.Gauge"), err]
		}
		return [null, err]
	}

	public async GetMetricWithLabelValues(lvs: $.Slice<string>): globalThis.Promise<[Gauge | null, $.GoError]> {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWithLabelValues.call($.pointerValue<GaugeVec>(v).MetricVec, lvs)
		if (metric != null) {
			return [$.mustTypeAssert<Gauge | null>(metric, "prometheus.Gauge"), err]
		}
		return [null, err]
	}

	public MustCurryWith(labels: __goscript_labels.Labels): GaugeVec | $.VarRef<GaugeVec> | null {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let __goscriptTuple1: any = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as GaugeVec).CurryWith(labels) : GaugeVec.prototype.CurryWith.call(v, labels))
		let vec: GaugeVec | $.VarRef<GaugeVec> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			$.panic((err as any))
		}
		return vec
	}

	public async With(labels: __goscript_labels.Labels): globalThis.Promise<Gauge | null> {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let [g, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as GaugeVec).GetMetricWith(labels) : GaugeVec.prototype.GetMetricWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return g
	}

	public async WithLabelValues(lvs: $.Slice<string>): globalThis.Promise<Gauge | null> {
		const v: GaugeVec | $.VarRef<GaugeVec> | null = this;
		let [g, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as GaugeVec).GetMetricWithLabelValues(lvs) : GaugeVec.prototype.GetMetricWithLabelValues.call(v, lvs))
		if (err != null) {
			$.panic((err as any))
		}
		return g
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
		"prometheus.GaugeVec",
		() => new GaugeVec(),
		() => [$.methodSignature("CurryWith", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.pointerType("prometheus.GaugeVec"), "error"], true), $.methodSignature("GetMetricWith", [["labels", "prometheus.Labels"]], ["prometheus.Gauge", "error"], true), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Gauge", "error"], true), $.methodSignature("MustCurryWith", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.pointerType("prometheus.GaugeVec")], true), $.methodSignature("With", [["labels", "prometheus.Labels"]], ["prometheus.Gauge"], true), $.methodSignature("WithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Gauge"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]]), $.methodSignature("Delete", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("DeleteLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]]), $.methodSignature("Reset"), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("hashLabelValues", [["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("uint64"), "error"]), $.methodSignature("hashLabels", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("uint64"), "error"])],
		GaugeVec,
		() => [/* @__PURE__ */ $.structField("MetricVec", /* @__PURE__ */ $.pointerType("prometheus.MetricVec"), [0], 0, true, { anonymous: true })]
	)
}

export async function NewGauge(opts: GaugeOpts): globalThis.Promise<Gauge | null> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels)
	let result: gauge | $.VarRef<gauge> | null = new gauge({desc: desc, labelPairs: $.pointerValue<__goscript_desc.Desc>(desc).constLabelPairs})
	$.pointerValue<gauge>(result).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.gauge", /* @__PURE__ */ $.pointerType("prometheus.gauge")))
	return $.interfaceValue<Gauge | null>(result, "*prometheus.gauge", /* @__PURE__ */ $.pointerType("prometheus.gauge"))
}

export async function NewGaugeVec(opts: GaugeOpts, labelNames: $.Slice<string>): globalThis.Promise<GaugeVec | $.VarRef<GaugeVec> | null> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, labelNames, opts.ConstLabels)
	let desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	return (await (async () => { const __goscriptLiteralField1 = await __goscript_vec.NewMetricVec(desc, $.functionValue(async (lvs: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> => {
		if ($.sliceLen(lvs) != $.sliceLen((desc$ as __goscript_desc.Desc).variableLabels)) {
			$.panic((__goscript_labels.makeInconsistentCardinalityError((desc$ as __goscript_desc.Desc).fqName, (desc$ as __goscript_desc.Desc).variableLabels, lvs) as any))
		}
		let result: gauge | $.VarRef<gauge> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_value.MakeLabelPairs(desc, lvs); return new gauge({desc: desc, labelPairs: __goscriptLiteralField0}) })())
		$.pointerValue<gauge>(result).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.gauge", /* @__PURE__ */ $.pointerType("prometheus.gauge")))
		return $.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.gauge", /* @__PURE__ */ $.pointerType("prometheus.gauge"))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["prometheus.Metric"], isVariadic: true } as $.FunctionTypeInfo))); return new GaugeVec({MetricVec: __goscriptLiteralField1}) })())
}

export async function NewGaugeFunc(opts: GaugeOpts, _function: (() => number | globalThis.Promise<number>) | null): globalThis.Promise<GaugeFunc | null> {
	return $.interfaceValue<GaugeFunc | null>(await __goscript_value.newValueFunc(await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels), 2, _function), "*prometheus.valueFunc", /* @__PURE__ */ $.pointerType("prometheus.valueFunc"))
}
