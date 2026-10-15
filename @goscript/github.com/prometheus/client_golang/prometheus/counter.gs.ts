// Generated file based on counter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

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
import "@goscript/errors/index.js"
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

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Counter", "prometheus.ExemplarAdder", "prometheus.CounterOpts", "prometheus.counter", "prometheus.CounterVec", "prometheus.CounterFunc"])

export type Counter = {
	Add(_p0: number): void
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Inc(): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.Counter",
	null,
	[$.methodSignature("Add", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Inc"), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export type ExemplarAdder = {
	AddWithExemplar(value: number, exemplar: __goscript_labels.Labels): void
}

$.registerInterfaceType(
	"prometheus.ExemplarAdder",
	null,
	[$.methodSignature("AddWithExemplar", [["value", /* @__PURE__ */ $.basicType("float64")], ["exemplar", "prometheus.Labels"]])]
);

export type CounterFunc = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.CounterFunc",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export class CounterOpts {
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

	public clone(): CounterOpts {
		return new CounterOpts(this, true)
	}

	public __goscriptAssign(source: CounterOpts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
	}

	static __typeInfo = $.registerStructType(
		"prometheus.CounterOpts",
		() => new CounterOpts(),
		() => [],
		CounterOpts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true)]
	)
}

export class counter {
	// valBits contains the bits of the represented float64 value, while
	// valInt stores values that are exact integers. Both have to go first
	// in the struct to guarantee alignment for atomic operations.
	// http://golang.org/pkg/sync/atomic/#pkg-note-BUG
	public get valBits(): bigint {
		return this._fields.valBits
	}

	public set valBits(value: bigint) {
		this._fields.valBits = value
	}

	public get valInt(): bigint {
		return this._fields.valInt
	}

	public set valInt(value: bigint) {
		this._fields.valInt = value
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

	public get exemplar(): atomic.Value {
		return this._fields.exemplar
	}

	public set exemplar(value: atomic.Value) {
		this._fields.exemplar = value
	}

	public get now(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.now
	}

	public set now(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.now = value
	}

	public _fields: {
		valBits: bigint
		valInt: bigint
		selfCollector: __goscript_collector.selfCollector
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
		exemplar: atomic.Value
		now: (() => time.Time | globalThis.Promise<time.Time>) | null
	}

	constructor(init?: Partial<{valBits?: bigint, valInt?: bigint, selfCollector?: __goscript_collector.selfCollector, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, exemplar?: atomic.Value, now?: (() => time.Time | globalThis.Promise<time.Time>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			valBits: init?.valBits ?? (0n as bigint),
			valInt: init?.valInt ?? (0n as bigint),
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>),
			exemplar: init?.exemplar ? $.markAsStructValue($.cloneStructValue(init.exemplar)) : $.markAsStructValue(new atomic.Value()),
			now: init?.now ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): counter {
		return new counter(this, true)
	}

	public __goscriptAssign(source: counter): void {
		const target = this._fields
		const values = source._fields
		target.valBits = values.valBits
		target.valInt = values.valInt
		$.assignStruct(target.selfCollector, values.selfCollector)
		target.desc = values.desc
		target.labelPairs = values.labelPairs
		$.assignStruct(target.exemplar, values.exemplar)
		target.now = values.now
	}

	public Add(v: number): void {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		if (v < 0) {
			$.panic((errors.New("counter cannot decrease in value") as any))
		}

		let ival = $.uint64(v)
		if (globalThis.Number(ival) == v) {
			atomic.AddUint64($.fieldRef((c$ as counter)._fields, "valInt"), ival)
			return
		}

		while (true) {
			let oldBits = atomic.LoadUint64($.fieldRef((c$ as counter)._fields, "valBits"))
			let newBits = math.Float64bits(math.Float64frombits(oldBits) + v)
			if (atomic.CompareAndSwapUint64($.fieldRef((c$ as counter)._fields, "valBits"), oldBits, newBits)) {
				return
			}
		}
	}

	public async AddWithExemplar(v: number, e: __goscript_labels.Labels): globalThis.Promise<void> {
		const c: counter | $.VarRef<counter> | null = this;
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as counter).Add(v) : counter.prototype.Add.call(c, v))
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as counter).updateExemplar(v, e) : counter.prototype.updateExemplar.call(c, v, e))
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const c: counter | $.VarRef<counter> | null = this;
		return $.pointerValue<counter>(c).desc
	}

	public Inc(): void {
		const c: counter | $.VarRef<counter> | null = this;
		atomic.AddUint64($.fieldRef($.pointerValue<counter>(c)._fields, "valInt"), 1n)
	}

	public Write(out: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		let fval = math.Float64frombits(atomic.LoadUint64($.fieldRef((c$ as counter)._fields, "valBits")))
		let ival = atomic.LoadUint64($.fieldRef((c$ as counter)._fields, "valInt"))
		let val = fval + globalThis.Number(ival)

		let exemplar: dto.Exemplar | $.VarRef<dto.Exemplar> | null = null! as dto.Exemplar | $.VarRef<dto.Exemplar> | null
		{
			let e = (c$ as counter).exemplar.Load()
			if (e != null) {
				exemplar = ((e as any)?.__goType === "*io_prometheus_client.Exemplar" && (e as any).__goValue === undefined && (e as any).__isTypedNil !== true ? ((e as any) as dto.Exemplar | $.VarRef<dto.Exemplar> | null) : $.mustTypeAssert<dto.Exemplar | $.VarRef<dto.Exemplar> | null>(e, /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
			}
		}

		return __goscript_value.populateMetric(1, val, (c$ as counter).labelPairs, exemplar, out)
	}

	public async updateExemplar(v: number, l: __goscript_labels.Labels): globalThis.Promise<void> {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		if (l == null) {
			return
		}
		let __goscriptTuple0: any = __goscript_value.newExemplar(v, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as counter).now!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))), l)
		let e: dto.Exemplar | $.VarRef<dto.Exemplar> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic((err as any))
		}
		void (c$ as counter).exemplar.Store($.interfaceValue(e, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
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
		"prometheus.counter",
		() => new counter(),
		() => [$.methodSignature("Add", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("AddWithExemplar", [["v", /* @__PURE__ */ $.basicType("float64")], ["e", "prometheus.Labels"]], [], true), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Inc", [], [], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("updateExemplar", [["v", /* @__PURE__ */ $.basicType("float64")], ["l", "prometheus.Labels"]], [], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		counter,
		() => [/* @__PURE__ */ $.structField("valBits", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valInt", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("exemplar", "atomic.Value", [5], 64, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("now", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [6], 80, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class CounterVec {
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

	public clone(): CounterVec {
		return new CounterVec(this, true)
	}

	public __goscriptAssign(source: CounterVec): void {
		const target = this._fields
		const values = source._fields
		target.MetricVec = values.MetricVec
	}

	public CurryWith(labels: __goscript_labels.Labels): [CounterVec | $.VarRef<CounterVec> | null, $.GoError] {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let __goscriptTuple1: any = __goscript_vec.MetricVec.prototype.CurryWith.call($.pointerValue<CounterVec>(v).MetricVec, labels)
		let vec: __goscript_vec.MetricVec | $.VarRef<__goscript_vec.MetricVec> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (vec != null) {
			return [new CounterVec({MetricVec: vec}), err]
		}
		return [null, err]
	}

	public async GetMetricWith(labels: __goscript_labels.Labels): globalThis.Promise<[Counter | null, $.GoError]> {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWith.call($.pointerValue<CounterVec>(v).MetricVec, labels)
		if (metric != null) {
			return [$.mustTypeAssert<Counter | null>(metric, "prometheus.Counter"), err]
		}
		return [null, err]
	}

	public async GetMetricWithLabelValues(lvs: $.Slice<string>): globalThis.Promise<[Counter | null, $.GoError]> {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let [metric, err] = await __goscript_vec.MetricVec.prototype.GetMetricWithLabelValues.call($.pointerValue<CounterVec>(v).MetricVec, lvs)
		if (metric != null) {
			return [$.mustTypeAssert<Counter | null>(metric, "prometheus.Counter"), err]
		}
		return [null, err]
	}

	public MustCurryWith(labels: __goscript_labels.Labels): CounterVec | $.VarRef<CounterVec> | null {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let __goscriptTuple2: any = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CounterVec).CurryWith(labels) : CounterVec.prototype.CurryWith.call(v, labels))
		let vec: CounterVec | $.VarRef<CounterVec> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			$.panic((err as any))
		}
		return vec
	}

	public async With(labels: __goscript_labels.Labels): globalThis.Promise<Counter | null> {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let [c, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CounterVec).GetMetricWith(labels) : CounterVec.prototype.GetMetricWith.call(v, labels))
		if (err != null) {
			$.panic((err as any))
		}
		return c
	}

	public async WithLabelValues(lvs: $.Slice<string>): globalThis.Promise<Counter | null> {
		const v: CounterVec | $.VarRef<CounterVec> | null = this;
		let [c, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CounterVec).GetMetricWithLabelValues(lvs) : CounterVec.prototype.GetMetricWithLabelValues.call(v, lvs))
		if (err != null) {
			$.panic((err as any))
		}
		return c
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
		"prometheus.CounterVec",
		() => new CounterVec(),
		() => [$.methodSignature("CurryWith", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.pointerType("prometheus.CounterVec"), "error"], true), $.methodSignature("GetMetricWith", [["labels", "prometheus.Labels"]], ["prometheus.Counter", "error"], true), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Counter", "error"], true), $.methodSignature("MustCurryWith", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.pointerType("prometheus.CounterVec")], true), $.methodSignature("With", [["labels", "prometheus.Labels"]], ["prometheus.Counter"], true), $.methodSignature("WithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Counter"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]]), $.methodSignature("Delete", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("DeleteLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]]), $.methodSignature("Reset"), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("hashLabelValues", [["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("uint64"), "error"]), $.methodSignature("hashLabels", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("uint64"), "error"])],
		CounterVec,
		() => [/* @__PURE__ */ $.structField("MetricVec", /* @__PURE__ */ $.pointerType("prometheus.MetricVec"), [0], 0, true, { anonymous: true })]
	)
}

export async function NewCounter(opts: CounterOpts): globalThis.Promise<Counter | null> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels)
	let result: counter | $.VarRef<counter> | null = new counter({desc: desc, labelPairs: $.pointerValue<__goscript_desc.Desc>(desc).constLabelPairs, now: time.Now})
	$.pointerValue<counter>(result).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.counter", /* @__PURE__ */ $.pointerType("prometheus.counter")))
	return $.interfaceValue<Counter | null>(result, "*prometheus.counter", /* @__PURE__ */ $.pointerType("prometheus.counter"))
}

export async function NewCounterVec(opts: CounterOpts, labelNames: $.Slice<string>): globalThis.Promise<CounterVec | $.VarRef<CounterVec> | null> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, labelNames, opts.ConstLabels)
	let desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	return (await (async () => { const __goscriptLiteralField1 = await __goscript_vec.NewMetricVec(desc, $.functionValue(async (lvs: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> => {
		if ($.sliceLen(lvs) != $.sliceLen((desc$ as __goscript_desc.Desc).variableLabels)) {
			$.panic((__goscript_labels.makeInconsistentCardinalityError((desc$ as __goscript_desc.Desc).fqName, (desc$ as __goscript_desc.Desc).variableLabels, lvs) as any))
		}
		let result: counter | $.VarRef<counter> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_value.MakeLabelPairs(desc, lvs); return new counter({desc: desc, labelPairs: __goscriptLiteralField0, now: time.Now}) })())
		$.pointerValue<counter>(result).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.counter", /* @__PURE__ */ $.pointerType("prometheus.counter")))
		return $.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.counter", /* @__PURE__ */ $.pointerType("prometheus.counter"))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["prometheus.Metric"], isVariadic: true } as $.FunctionTypeInfo))); return new CounterVec({MetricVec: __goscriptLiteralField1}) })())
}

export async function NewCounterFunc(opts: CounterOpts, _function: (() => number | globalThis.Promise<number>) | null): globalThis.Promise<CounterFunc | null> {
	return $.interfaceValue<CounterFunc | null>(await __goscript_value.newValueFunc(await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels), 1, _function), "*prometheus.valueFunc", /* @__PURE__ */ $.pointerType("prometheus.valueFunc"))
}

var __goscriptAwait: any
