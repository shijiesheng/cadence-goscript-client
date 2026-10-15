// Generated file based on metric.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./desc.gs.ts"
import "./labels.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Metric", "prometheus.Opts", "prometheus.labelPairSorter", "prometheus.invalidMetric", "prometheus.timestampedMetric"])

export type Metric = {
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.Metric",
	null,
	[$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export type labelPairSorter = $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>

$.registerNamedType("prometheus.labelPairSorter", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")));

$.registerNamedValueType(
	"prometheus.labelPairSorter",
	{Len: (receiver: any, ...args: any[]) => (labelPairSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (labelPairSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (labelPairSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*prometheus.labelPairSorter",
	{Len: (receiver: any, ...args: any[]) => (labelPairSorter_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (labelPairSorter_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (labelPairSorter_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Opts {
	// Namespace, Subsystem, and Name are components of the fully-qualified
	// name of the Metric (created by joining these components with
	// "_"). Only Name is mandatory, the others merely help structuring the
	// name. Note that the fully-qualified name of the metric must be a
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

	// Help provides information about this metric.
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

	public clone(): Opts {
		return new Opts(this, true)
	}

	public __goscriptAssign(source: Opts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
	}

	static __typeInfo = $.registerStructType(
		"prometheus.Opts",
		() => new Opts(),
		() => [],
		Opts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true)]
	)
}

export class invalidMetric {
	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		err: $.GoError
	}

	constructor(init?: Partial<{desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invalidMetric {
		return new invalidMetric(this, true)
	}

	public __goscriptAssign(source: invalidMetric): void {
		const target = this._fields
		const values = source._fields
		target.desc = values.desc
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const m: invalidMetric | $.VarRef<invalidMetric> | null = this;
		return $.pointerValue<invalidMetric>(m).desc
	}

	public Write(_p0: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError {
		const m: invalidMetric | $.VarRef<invalidMetric> | null = this;
		return $.pointerValue<invalidMetric>(m).err
	}

	static __typeInfo = $.registerStructType(
		"prometheus.invalidMetric",
		() => new invalidMetric(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"], true)],
		invalidMetric,
		() => [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class timestampedMetric {
	public get Metric(): Metric | null {
		return this._fields.Metric
	}

	public set Metric(value: Metric | null) {
		this._fields.Metric = value
	}

	public get t(): time.Time {
		return this._fields.t
	}

	public set t(value: time.Time) {
		this._fields.t = value
	}

	public _fields: {
		Metric: Metric | null
		t: time.Time
	}

	constructor(init?: Partial<{Metric?: Metric | null, t?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Metric: init?.Metric ?? (null! as Metric | null),
			t: init?.t ? $.markAsStructValue($.cloneStructValue(init.t)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timestampedMetric {
		return new timestampedMetric(this, true)
	}

	public __goscriptAssign(source: timestampedMetric): void {
		const target = this._fields
		const values = source._fields
		target.Metric = $.assignFieldValue(target.Metric, values.Metric, "prometheus.Metric")
		$.assignStruct(target.t, values.t)
	}

	public async Write(pb: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const m = this;
		let e = (__goscriptAwait = $.pointerValue<Exclude<Metric, null>>(m.Metric).Write(pb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.pointerValue<dto.Metric>(pb).TimestampMs = proto.Int64($.int64Add(($.int64Mul($.markAsStructValue($.cloneStructValue(m.t)).Unix(), 1000n)), $.int64(globalThis.Math.trunc($.markAsStructValue($.cloneStructValue(m.t)).Nanosecond() / 1000000))))
		return e
	}

	public async Desc(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Metric | null, null>>(this.Metric).Desc()
	}

	static __typeInfo = $.registerStructType(
		"prometheus.timestampedMetric",
		() => new timestampedMetric(),
		() => [$.methodSignature("Write", [["pb", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")])],
		timestampedMetric,
		() => [/* @__PURE__ */ $.structField("Metric", "prometheus.Metric", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("t", "time.Time", [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export var separatorByteSlice: $.Slice<number>

export function __goscript_init_separatorByteSlice(): void {
	if (((separatorByteSlice) as any) === undefined) {
		separatorByteSlice = new Uint8Array([255]) as $.Slice<number>
	}
}

export function __goscript_get_separatorByteSlice(): $.Slice<number> {
	if (((separatorByteSlice) as any) === undefined) {
		__goscript_init_separatorByteSlice()
	}
	return separatorByteSlice
}

export function __goscript_set_separatorByteSlice(__goscriptValue: $.Slice<number>): void {
	separatorByteSlice = __goscriptValue
}

export function BuildFQName(_namespace: string, subsystem: string, name: string): string {
	if ($.stringEqual(name, "")) {
		return ""
	}
	switch ((true as boolean)) {
		case (!$.stringEqual(_namespace, "")) && (!$.stringEqual(subsystem, "")):
		{
			return strings.Join($.arrayToSlice<string>([_namespace, subsystem, name]), "_")
			break
		}
		case !$.stringEqual(_namespace, ""):
		{
			return strings.Join($.arrayToSlice<string>([_namespace, name]), "_")
			break
		}
		case !$.stringEqual(subsystem, ""):
		{
			return strings.Join($.arrayToSlice<string>([subsystem, name]), "_")
			break
		}
	}
	return name
}

export function labelPairSorter_Len(s: labelPairSorter): number {
	return $.sliceLen((s as labelPairSorter))
}

export function labelPairSorter_Swap(s: labelPairSorter, i: number, j: number): void {
	let __goscriptAssign0_0: dto.LabelPair | $.VarRef<dto.LabelPair> | null = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: dto.LabelPair | $.VarRef<dto.LabelPair> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function labelPairSorter_Less(s: labelPairSorter, i: number, j: number): boolean {
	return $.stringCompare(dto.LabelPair.prototype.GetName.call($.arrayIndex(s!, i)), dto.LabelPair.prototype.GetName.call($.arrayIndex(s!, j))) < 0
}

export function NewInvalidMetric(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, err: $.GoError): Metric | null {
	return $.interfaceValue<Metric | null>(new invalidMetric({desc: desc, err: err}), "*prometheus.invalidMetric", /* @__PURE__ */ $.pointerType("prometheus.invalidMetric"))
}

export function NewMetricWithTimestamp(t: time.Time, m: Metric | null): Metric | null {
	return $.interfaceValue<Metric | null>(new timestampedMetric({Metric: m, t: $.markAsStructValue($.cloneStructValue(t))}, true), "prometheus.timestampedMetric", "prometheus.timestampedMetric")
}

var __goscriptAwait: any
