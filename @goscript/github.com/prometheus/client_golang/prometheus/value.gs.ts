// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as ptypes from "@goscript/github.com/golang/protobuf/ptypes/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as timestamp from "@goscript/github.com/golang/protobuf/ptypes/timestamp/index.js"

import type * as timestamppb from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.ValueType", "prometheus.valueFunc", "prometheus.constMetric"])

export type ValueType = number

export class valueFunc {
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

	public get valType(): ValueType {
		return this._fields.valType
	}

	public set valType(value: ValueType) {
		this._fields.valType = value
	}

	public get _function(): (() => number | globalThis.Promise<number>) | null {
		return this._fields._function
	}

	public set _function(value: (() => number | globalThis.Promise<number>) | null) {
		this._fields._function = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public _fields: {
		selfCollector: __goscript_collector.selfCollector
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		valType: ValueType
		_function: (() => number | globalThis.Promise<number>) | null
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{selfCollector?: __goscript_collector.selfCollector, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, valType?: ValueType, _function?: (() => number | globalThis.Promise<number>) | null, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			selfCollector: init?.selfCollector ? init.selfCollector.clone() : new __goscript_collector.selfCollector(undefined, true),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			valType: init?.valType ?? (0 as ValueType),
			_function: init?._function ?? (null! as (() => number | globalThis.Promise<number>) | null),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): valueFunc {
		return new valueFunc(this, true)
	}

	public __goscriptAssign(source: valueFunc): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.selfCollector, values.selfCollector)
		target.desc = values.desc
		target.valType = values.valType
		target._function = values._function
		target.labelPairs = values.labelPairs
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const v: valueFunc | $.VarRef<valueFunc> | null = this;
		return $.pointerValue<valueFunc>(v).desc
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const v: valueFunc | $.VarRef<valueFunc> | null = this;
		const v$: valueFunc = v == null ? $.pointerTarget<valueFunc>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<valueFunc>(v)
		return populateMetric((v$ as valueFunc).valType, (__goscriptAwait = (v$ as valueFunc)._function!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (v$ as valueFunc).labelPairs, null, out)
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
		"prometheus.valueFunc",
		() => new valueFunc(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true), $.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		valueFunc,
		() => [/* @__PURE__ */ $.structField("selfCollector", "prometheus.selfCollector", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("function", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [3], 32, false, { key: "_function", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class constMetric {
	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get valType(): ValueType {
		return this._fields.valType
	}

	public set valType(value: ValueType) {
		this._fields.valType = value
	}

	public get val(): number {
		return this._fields.val
	}

	public set val(value: number) {
		this._fields.val = value
	}

	public get labelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.labelPairs
	}

	public set labelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.labelPairs = value
	}

	public _fields: {
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		valType: ValueType
		val: number
		labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
	}

	constructor(init?: Partial<{desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, valType?: ValueType, val?: number, labelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			valType: init?.valType ?? (0 as ValueType),
			val: init?.val ?? (0 as number),
			labelPairs: init?.labelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constMetric {
		return new constMetric(this, true)
	}

	public __goscriptAssign(source: constMetric): void {
		const target = this._fields
		const values = source._fields
		target.desc = values.desc
		target.valType = values.valType
		target.val = values.val
		target.labelPairs = values.labelPairs
	}

	public Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		const m: constMetric | $.VarRef<constMetric> | null = this;
		return $.pointerValue<constMetric>(m).desc
	}

	public Write(out: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError {
		const m: constMetric | $.VarRef<constMetric> | null = this;
		const m$: constMetric = m == null ? $.pointerTarget<constMetric>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<constMetric>(m)
		return populateMetric((m$ as constMetric).valType, (m$ as constMetric).val, (m$ as constMetric).labelPairs, null, out)
	}

	static __typeInfo = $.registerStructType(
		"prometheus.constMetric",
		() => new constMetric(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true)],
		constMetric,
		() => [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("val", /* @__PURE__ */ $.basicType("float64"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [3], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export const CounterValue: ValueType = 1

export const GaugeValue: ValueType = 2

export const UntypedValue: ValueType = 3

export const ExemplarMaxRunes: number = 64

export async function newValueFunc(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, valueType: ValueType, _function: (() => number | globalThis.Promise<number>) | null): globalThis.Promise<valueFunc | $.VarRef<valueFunc> | null> {
	let result: valueFunc | $.VarRef<valueFunc> | null = (await (async () => { const __goscriptLiteralField0 = await MakeLabelPairs(desc, null); return new valueFunc({desc: desc, valType: valueType, _function: _function, labelPairs: __goscriptLiteralField0}) })())
	$.pointerValue<valueFunc>(result).selfCollector.init($.interfaceValue<__goscript_metric.Metric | null>(result, "*prometheus.valueFunc", /* @__PURE__ */ $.pointerType("prometheus.valueFunc")))
	return result
}

export async function NewConstMetric(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, valueType: ValueType, value: number, labelValues: $.Slice<string>): globalThis.Promise<[__goscript_metric.Metric | null, $.GoError]> {
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
	return [$.interfaceValue<__goscript_metric.Metric | null>((await (async () => { const __goscriptLiteralField1 = await MakeLabelPairs(desc, labelValues); return new constMetric({desc: desc, valType: valueType, val: value, labelPairs: __goscriptLiteralField1}) })()), "*prometheus.constMetric", /* @__PURE__ */ $.pointerType("prometheus.constMetric")), null]
}

export async function MustNewConstMetric(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, valueType: ValueType, value: number, labelValues: $.Slice<string>): globalThis.Promise<__goscript_metric.Metric | null> {
	let [m, err] = await NewConstMetric(desc, valueType, value, labelValues)
	if (err != null) {
		$.panic((err as any))
	}
	return m
}

export function populateMetric(t: ValueType, v: number, labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, e: dto.Exemplar | $.VarRef<dto.Exemplar> | null, m: dto.Metric | $.VarRef<dto.Metric> | null): $.GoError {
	const m$: dto.Metric = m == null ? $.pointerTarget<dto.Metric>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<dto.Metric>(m);
	;(m$ as dto.Metric).Label = labelPairs
	switch (t) {
		case 1:
		{
			;(m$ as dto.Metric).Counter = (() => { const __goscriptLiteralField2 = proto.Float64(v); return new dto.Counter({Value: __goscriptLiteralField2, Exemplar: e}) })()
			break
		}
		case 2:
		{
			;(m$ as dto.Metric).Gauge = (() => { const __goscriptLiteralField3 = proto.Float64(v); return new dto.Gauge({Value: __goscriptLiteralField3}) })()
			break
		}
		case 3:
		{
			;(m$ as dto.Metric).Untyped = (() => { const __goscriptLiteralField4 = proto.Float64(v); return new dto.Untyped({Value: __goscriptLiteralField4}) })()
			break
		}
		default:
		{
			return fmt.Errorf("encountered unknown type %v", $.namedValueInterfaceValue<any>(t, "prometheus.ValueType", {}, /* @__PURE__ */ $.basicType("int", "prometheus.ValueType")))
			break
		}
	}
	return null
}

export async function MakeLabelPairs(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, labelValues: $.Slice<string>): globalThis.Promise<$.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>> {
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	let totalLen = $.sliceLen((desc$ as __goscript_desc.Desc).variableLabels) + $.sliceLen((desc$ as __goscript_desc.Desc).constLabelPairs)
	if (totalLen == 0) {
		// Super fast path.
		return null
	}
	if ($.sliceLen((desc$ as __goscript_desc.Desc).variableLabels) == 0) {
		// Moderately fast path.
		return (desc$ as __goscript_desc.Desc).constLabelPairs
	}
	let labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> = $.makeSlice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>(0, totalLen)
	for (let __goscriptRangeTarget0 = (desc$ as __goscript_desc.Desc).variableLabels, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(labelValues), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let n = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
		labelPairs = $.appendOne(labelPairs, (() => { const __goscriptLiteralField5 = proto.String(n); const __goscriptLiteralField6 = proto.String(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)); return new dto.LabelPair({Name: __goscriptLiteralField5, Value: __goscriptLiteralField6}) })(), $.appendZeros.nil)
	}
	labelPairs = $.appendSlice(labelPairs, (desc$ as __goscript_desc.Desc).constLabelPairs, $.appendZeros.nil)
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((labelPairs as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	return labelPairs
}

export function newExemplar(value: number, ts: time.Time, l: __goscript_labels.Labels): [dto.Exemplar | $.VarRef<dto.Exemplar> | null, $.GoError] {
	let e: dto.Exemplar | $.VarRef<dto.Exemplar> | null = new dto.Exemplar()
	let e$: dto.Exemplar = e == null ? $.pointerTarget<dto.Exemplar>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<dto.Exemplar>(e);
	;(e$ as dto.Exemplar).Value = proto.Float64(value)
	let __goscriptTuple0: any = ptypes.TimestampProto(ts)
	let tsProto: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	;(e$ as dto.Exemplar).Timestamp = tsProto
	let labelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> = $.makeSlice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>(0, $.len(l))
	let runes: number = 0
	for (const [name, value] of l?.entries() ?? []) {
		if (!__goscript_labels.checkLabelName(name)) {
			return [null, fmt.Errorf("exemplar label name %q is invalid", name)]
		}
		runes = runes + (utf8.RuneCountInString(name))
		if (!utf8.ValidString(value)) {
			return [null, fmt.Errorf("exemplar label value %q is not valid UTF-8", value)]
		}
		runes = runes + (utf8.RuneCountInString(value))
		labelPairs = $.appendOne(labelPairs, (() => { const __goscriptLiteralField7 = proto.String(name); const __goscriptLiteralField8 = proto.String(value); return new dto.LabelPair({Name: __goscriptLiteralField7, Value: __goscriptLiteralField8}) })(), $.appendZeros.nil)
	}
	if (runes > 64) {
		return [null, fmt.Errorf("exemplar labels have %d runes, exceeding the limit of %d", $.basicInterfaceValue(runes, "int"), $.basicInterfaceValue(64, "int"))]
	}
	;(e$ as dto.Exemplar).Label = labelPairs
	return [e, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"), "prometheus.labelPairSorter"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
