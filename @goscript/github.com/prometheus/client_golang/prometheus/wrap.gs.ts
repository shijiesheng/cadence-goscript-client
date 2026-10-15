// Generated file based on wrap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./registry.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.wrappingRegisterer", "prometheus.wrappingCollector", "prometheus.wrappingMetric"])

export class wrappingRegisterer {
	public get wrappedRegisterer(): __goscript_registry.Registerer | null {
		return this._fields.wrappedRegisterer
	}

	public set wrappedRegisterer(value: __goscript_registry.Registerer | null) {
		this._fields.wrappedRegisterer = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
	}

	public get labels(): __goscript_labels.Labels {
		return this._fields.labels
	}

	public set labels(value: __goscript_labels.Labels) {
		this._fields.labels = value
	}

	public _fields: {
		wrappedRegisterer: __goscript_registry.Registerer | null
		prefix: string
		labels: __goscript_labels.Labels
	}

	constructor(init?: Partial<{wrappedRegisterer?: __goscript_registry.Registerer | null, prefix?: string, labels?: __goscript_labels.Labels}>, __goscriptValue?: boolean) {
		this._fields = {
			wrappedRegisterer: init?.wrappedRegisterer ?? (null! as __goscript_registry.Registerer | null),
			prefix: init?.prefix ?? ("" as string),
			labels: init?.labels ?? (null! as __goscript_labels.Labels)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wrappingRegisterer {
		return new wrappingRegisterer(this, true)
	}

	public __goscriptAssign(source: wrappingRegisterer): void {
		const target = this._fields
		const values = source._fields
		target.wrappedRegisterer = $.assignFieldValue(target.wrappedRegisterer, values.wrappedRegisterer, "prometheus.Registerer")
		target.prefix = values.prefix
		target.labels = values.labels
	}

	public async MustRegister(cs: $.Slice<__goscript_collector.Collector | null>): globalThis.Promise<void> {
		const r: wrappingRegisterer | $.VarRef<wrappingRegisterer> | null = this;
		if ($.pointerValue<wrappingRegisterer>(r).wrappedRegisterer == null) {
			return
		}
		for (let __goscriptRangeTarget0 = cs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_collector.Collector | null)
			{
				let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as wrappingRegisterer).Register(c) : wrappingRegisterer.prototype.Register.call(r, c))
				if (err != null) {
					$.panic((err as any))
				}
			}
		}
	}

	public async Register(c: __goscript_collector.Collector | null): globalThis.Promise<$.GoError> {
		const r: wrappingRegisterer | $.VarRef<wrappingRegisterer> | null = this;
		const r$: wrappingRegisterer = r == null ? $.pointerTarget<wrappingRegisterer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<wrappingRegisterer>(r)
		if ((r$ as wrappingRegisterer).wrappedRegisterer == null) {
			return null
		}
		return $.pointerValue<Exclude<__goscript_registry.Registerer, null>>((r$ as wrappingRegisterer).wrappedRegisterer).Register($.interfaceValue<__goscript_collector.Collector | null>(new wrappingCollector({wrappedCollector: c, prefix: (r$ as wrappingRegisterer).prefix, labels: (r$ as wrappingRegisterer).labels}), "*prometheus.wrappingCollector", /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")))
	}

	public async Unregister(c: __goscript_collector.Collector | null): globalThis.Promise<boolean> {
		const r: wrappingRegisterer | $.VarRef<wrappingRegisterer> | null = this;
		const r$: wrappingRegisterer = r == null ? $.pointerTarget<wrappingRegisterer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<wrappingRegisterer>(r)
		if ((r$ as wrappingRegisterer).wrappedRegisterer == null) {
			return false
		}
		return $.pointerValue<Exclude<__goscript_registry.Registerer, null>>((r$ as wrappingRegisterer).wrappedRegisterer).Unregister($.interfaceValue<__goscript_collector.Collector | null>(new wrappingCollector({wrappedCollector: c, prefix: (r$ as wrappingRegisterer).prefix, labels: (r$ as wrappingRegisterer).labels}), "*prometheus.wrappingCollector", /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")))
	}

	static __typeInfo = $.registerStructType(
		"prometheus.wrappingRegisterer",
		() => new wrappingRegisterer(),
		() => [$.methodSignature("MustRegister", [["cs", /* @__PURE__ */ $.sliceType("prometheus.Collector")]], [], true), $.methodSignature("Register", [["c", "prometheus.Collector"]], ["error"], true), $.methodSignature("Unregister", [["c", "prometheus.Collector"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		wrappingRegisterer,
		() => [/* @__PURE__ */ $.structField("wrappedRegisterer", "prometheus.Registerer", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labels", "prometheus.Labels", [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class wrappingCollector {
	public get wrappedCollector(): __goscript_collector.Collector | null {
		return this._fields.wrappedCollector
	}

	public set wrappedCollector(value: __goscript_collector.Collector | null) {
		this._fields.wrappedCollector = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
	}

	public get labels(): __goscript_labels.Labels {
		return this._fields.labels
	}

	public set labels(value: __goscript_labels.Labels) {
		this._fields.labels = value
	}

	public _fields: {
		wrappedCollector: __goscript_collector.Collector | null
		prefix: string
		labels: __goscript_labels.Labels
	}

	constructor(init?: Partial<{wrappedCollector?: __goscript_collector.Collector | null, prefix?: string, labels?: __goscript_labels.Labels}>, __goscriptValue?: boolean) {
		this._fields = {
			wrappedCollector: init?.wrappedCollector ?? (null! as __goscript_collector.Collector | null),
			prefix: init?.prefix ?? ("" as string),
			labels: init?.labels ?? (null! as __goscript_labels.Labels)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wrappingCollector {
		return new wrappingCollector(this, true)
	}

	public __goscriptAssign(source: wrappingCollector): void {
		const target = this._fields
		const values = source._fields
		target.wrappedCollector = $.assignFieldValue(target.wrappedCollector, values.wrappedCollector, "prometheus.Collector")
		target.prefix = values.prefix
		target.labels = values.labels
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const c: wrappingCollector | $.VarRef<wrappingCollector> | null = this;
		const c$: wrappingCollector = c == null ? $.pointerTarget<wrappingCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<wrappingCollector>(c)
		let wrappedCh: $.Channel<__goscript_metric.Metric | null> | null = $.makeChannel<__goscript_metric.Metric | null>(0, null! as __goscript_metric.Metric | null, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_collector.Collector, null>>((c$ as wrappingCollector).wrappedCollector).Collect(wrappedCh), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			wrappedCh!.close()
		})() })
		while (true) {
			let __goscriptRange0 = await $.chanRecvWithOk(wrappedCh)
			if (!__goscriptRange0.ok) {
				break
			}
			let m = __goscriptRange0.value
			await $.chanSend(ch, $.interfaceValue<__goscript_metric.Metric | null>(new wrappingMetric({wrappedMetric: m, prefix: (c$ as wrappingCollector).prefix, labels: (c$ as wrappingCollector).labels}), "*prometheus.wrappingMetric", /* @__PURE__ */ $.pointerType("prometheus.wrappingMetric")))
		}
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const c: wrappingCollector | $.VarRef<wrappingCollector> | null = this;
		const c$: wrappingCollector = c == null ? $.pointerTarget<wrappingCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<wrappingCollector>(c)
		let wrappedCh: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null = $.makeChannel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>(0, null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_collector.Collector, null>>((c$ as wrappingCollector).wrappedCollector).Describe(wrappedCh), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			wrappedCh!.close()
		})() })
		while (true) {
			let __goscriptRange1 = await $.chanRecvWithOk(wrappedCh)
			if (!__goscriptRange1.ok) {
				break
			}
			let desc = __goscriptRange1.value
			await $.chanSend(ch, await wrapDesc(desc, (c$ as wrappingCollector).prefix, (c$ as wrappingCollector).labels))
		}
	}

	public unwrapRecursively(): __goscript_collector.Collector | null {
		const c: wrappingCollector | $.VarRef<wrappingCollector> | null = this;
		{
			const __goscriptTypeSwitchValue = $.pointerValue<wrappingCollector>(c).wrappedCollector
			switch (true) {
				case $.typeAssert<wrappingCollector | $.VarRef<wrappingCollector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")).ok:
					{
						let wc: wrappingCollector | $.VarRef<wrappingCollector> | null = $.typeAssert<wrappingCollector | $.VarRef<wrappingCollector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")).value
						return (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as wrappingCollector).unwrapRecursively() : wrappingCollector.prototype.unwrapRecursively.call(wc))
					}
					break
				default:
					{
						let wc: any = __goscriptTypeSwitchValue
						return wc
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"prometheus.wrappingCollector",
		() => new wrappingCollector(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("unwrapRecursively", [], ["prometheus.Collector"], true)],
		wrappingCollector,
		() => [/* @__PURE__ */ $.structField("wrappedCollector", "prometheus.Collector", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labels", "prometheus.Labels", [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class wrappingMetric {
	public get wrappedMetric(): __goscript_metric.Metric | null {
		return this._fields.wrappedMetric
	}

	public set wrappedMetric(value: __goscript_metric.Metric | null) {
		this._fields.wrappedMetric = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
	}

	public get labels(): __goscript_labels.Labels {
		return this._fields.labels
	}

	public set labels(value: __goscript_labels.Labels) {
		this._fields.labels = value
	}

	public _fields: {
		wrappedMetric: __goscript_metric.Metric | null
		prefix: string
		labels: __goscript_labels.Labels
	}

	constructor(init?: Partial<{wrappedMetric?: __goscript_metric.Metric | null, prefix?: string, labels?: __goscript_labels.Labels}>, __goscriptValue?: boolean) {
		this._fields = {
			wrappedMetric: init?.wrappedMetric ?? (null! as __goscript_metric.Metric | null),
			prefix: init?.prefix ?? ("" as string),
			labels: init?.labels ?? (null! as __goscript_labels.Labels)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wrappingMetric {
		return new wrappingMetric(this, true)
	}

	public __goscriptAssign(source: wrappingMetric): void {
		const target = this._fields
		const values = source._fields
		target.wrappedMetric = $.assignFieldValue(target.wrappedMetric, values.wrappedMetric, "prometheus.Metric")
		target.prefix = values.prefix
		target.labels = values.labels
	}

	public async Desc(): globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> {
		const m: wrappingMetric | $.VarRef<wrappingMetric> | null = this;
		const m$: wrappingMetric = m == null ? $.pointerTarget<wrappingMetric>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<wrappingMetric>(m)
		return wrapDesc(((__goscriptAwait = $.pointerValue<Exclude<__goscript_metric.Metric, null>>((m$ as wrappingMetric).wrappedMetric).Desc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null), (m$ as wrappingMetric).prefix, (m$ as wrappingMetric).labels)
	}

	public async Write(out: dto.Metric | $.VarRef<dto.Metric> | null): globalThis.Promise<$.GoError> {
		const m: wrappingMetric | $.VarRef<wrappingMetric> | null = this;
		const m$: wrappingMetric = m == null ? $.pointerTarget<wrappingMetric>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<wrappingMetric>(m)
		const out$: dto.Metric = out == null ? $.pointerTarget<dto.Metric>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<dto.Metric>(out)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_metric.Metric, null>>((m$ as wrappingMetric).wrappedMetric).Write(out), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		if ($.len((m$ as wrappingMetric).labels) == 0) {
			// No wrapping labels.
			return null
		}
		for (const [ln, lv] of (m$ as wrappingMetric).labels?.entries() ?? []) {
			;(out$ as dto.Metric).Label = $.appendOne((out$ as dto.Metric).Label, (() => { const __goscriptLiteralField0 = proto.String(ln); const __goscriptLiteralField1 = proto.String(lv); return new dto.LabelPair({Name: __goscriptLiteralField0, Value: __goscriptLiteralField1}) })(), $.appendZeros.nil)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(((out$ as dto.Metric).Label as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		return null
	}

	static __typeInfo = $.registerStructType(
		"prometheus.wrappingMetric",
		() => new wrappingMetric(),
		() => [$.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")], true), $.methodSignature("Write", [["out", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")]], ["error"], true)],
		wrappingMetric,
		() => [/* @__PURE__ */ $.structField("wrappedMetric", "prometheus.Metric", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("labels", "prometheus.Labels", [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export function WrapRegistererWith(labels: __goscript_labels.Labels, reg: __goscript_registry.Registerer | null): __goscript_registry.Registerer | null {
	return $.interfaceValue<__goscript_registry.Registerer | null>(new wrappingRegisterer({wrappedRegisterer: reg, labels: labels}), "*prometheus.wrappingRegisterer", /* @__PURE__ */ $.pointerType("prometheus.wrappingRegisterer"))
}

export function WrapRegistererWithPrefix(prefix: string, reg: __goscript_registry.Registerer | null): __goscript_registry.Registerer | null {
	return $.interfaceValue<__goscript_registry.Registerer | null>(new wrappingRegisterer({wrappedRegisterer: reg, prefix: prefix}), "*prometheus.wrappingRegisterer", /* @__PURE__ */ $.pointerType("prometheus.wrappingRegisterer"))
}

export async function wrapDesc(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, prefix: string, labels: __goscript_labels.Labels): globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> {
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	let constLabels: __goscript_labels.Labels = $.makeMap<string, string>([])
	for (let __goscriptRangeTarget1 = (desc$ as __goscript_desc.Desc).constLabelPairs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		$.mapSet(constLabels, $.pointerValue<string>($.pointerValue<dto.LabelPair>(lp).Name), $.pointerValue<string>($.pointerValue<dto.LabelPair>(lp).Value))
	}
	for (let [ln, lv] of labels?.entries() ?? []) {
		{
			let [, alreadyUsed] = $.mapGet<string, string, string>(constLabels, ln, "")
			if (alreadyUsed) {
				return (() => { const __goscriptLiteralField2 = fmt.Errorf("attempted wrapping with already existing label name %q", ln); return new __goscript_desc.Desc({fqName: (desc$ as __goscript_desc.Desc).fqName, help: (desc$ as __goscript_desc.Desc).help, variableLabels: (desc$ as __goscript_desc.Desc).variableLabels, constLabelPairs: (desc$ as __goscript_desc.Desc).constLabelPairs, err: __goscriptLiteralField2}) })()
			}
		}
		$.mapSet(constLabels, ln, lv)
	}
	// NewDesc will do remaining validations.
	let newDesc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = await __goscript_desc.NewDesc($.concatString(prefix, (desc$ as __goscript_desc.Desc).fqName), (desc$ as __goscript_desc.Desc).help, (desc$ as __goscript_desc.Desc).variableLabels, constLabels)
	// Propagate errors if there was any. This will override any errer
	// created by NewDesc above, i.e. earlier errors get precedence.
	if ((desc$ as __goscript_desc.Desc).err != null) {
		$.pointerValue<__goscript_desc.Desc>(newDesc).err = (desc$ as __goscript_desc.Desc).err
	}
	return newDesc
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
