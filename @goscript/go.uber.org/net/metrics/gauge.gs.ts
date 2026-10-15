// Generated file based on gauge.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as push2 from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import type * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/sync/index.js"
import "./core.gs.ts"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./tag.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Gauge", "metrics.GaugeVector"])

export class Gauge {
	public get val(): __goscript_value.value {
		return this._fields.val
	}

	public set val(value: __goscript_value.value) {
		this._fields.val = value
	}

	public get pusher(): push2.Gauge | null {
		return this._fields.pusher
	}

	public set pusher(value: push2.Gauge | null) {
		this._fields.pusher = value
	}

	public _fields: {
		val: __goscript_value.value
		pusher: push2.Gauge | null
	}

	constructor(init?: Partial<{val?: __goscript_value.value, pusher?: push2.Gauge | null}>, __goscriptValue?: boolean) {
		this._fields = {
			val: init?.val ? init.val.clone() : new __goscript_value.value(undefined, true),
			pusher: init?.pusher ?? (null! as push2.Gauge | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Gauge {
		return new Gauge(this, true)
	}

	public __goscriptAssign(source: Gauge): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.val, values.val)
		target.pusher = $.assignFieldValue(target.pusher, values.pusher, "push.Gauge")
	}

	public Add(n: bigint): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g == null) {
			return 0n
		}
		return $.pointerValue<Gauge>(g).val.Int64.Add(n)
	}

	public CAS(old: bigint, _new: bigint): boolean {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g == null) {
			return true
		}
		return $.pointerValue<Gauge>(g).val.Int64.CAS(old, _new)
	}

	public Dec(): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		return (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Gauge).Sub(1n) : Gauge.prototype.Sub.call(g, 1n))
	}

	public Inc(): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		return (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Gauge).Add(1n) : Gauge.prototype.Add.call(g, 1n))
	}

	public Load(): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g == null) {
			return 0n
		}
		return $.pointerValue<Gauge>(g).val.Int64.Load()
	}

	public Store(n: bigint): void {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g != null) {
			$.pointerValue<Gauge>(g).val.Int64.Store(n)
		}
	}

	public Sub(n: bigint): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g == null) {
			return 0n
		}
		return $.pointerValue<Gauge>(g).val.Int64.Sub(n)
	}

	public Swap(n: bigint): bigint {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		if (g == null) {
			return 0n
		}
		return $.pointerValue<Gauge>(g).val.Int64.Swap(n)
	}

	public describe(): __goscript_metadata.metadata {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		return ($.pointerValue<Gauge>(g).val.meta).clone()
	}

	public metric(): promproto.Metric | $.VarRef<promproto.Metric> | null {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		const g$: Gauge = g == null ? $.pointerTarget<Gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Gauge>(g)
		let n = $.varRef(globalThis.Number((g$ as Gauge).val.Int64.Load()))
		return new promproto.Metric({Label: (g$ as Gauge).val.tagPairs, Gauge: new promproto.Gauge({Value: n})})
	}

	public proto(): promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		const g$: Gauge = g == null ? $.pointerTarget<Gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Gauge>(g)
		return (() => { const __goscriptLiteralField0 = promproto.MetricType_Enum(promproto.MetricType_GAUGE); return new promproto.MetricFamily({Name: (g$ as Gauge).val.meta.Name, Help: (g$ as Gauge).val.meta.Help, Type: __goscriptLiteralField0, Metric: $.arrayToSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>([(g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Gauge).metric() : Gauge.prototype.metric.call(g))])}) })()
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		let g: Gauge | $.VarRef<Gauge> | null = this;
		const g$: Gauge = g == null ? $.pointerTarget<Gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Gauge>(g)
		if ((g$ as Gauge).val.meta.DisablePush) {
			return
		}
		if ((g$ as Gauge).pusher == null) {
			;(g$ as Gauge).pusher = (__goscriptAwait = (target !== null && (target as any).__isVarRef !== true && (target as any).__goValue === undefined ? (target as Exclude<push2.Target, null>) : $.pointerValue<Exclude<push2.Target, null>>(target)).NewGauge((() => { const __goscriptLiteralField1 = __goscript_tag.zip((g$ as Gauge).val.tagPairs); return new push2.Spec({Name: $.pointerValue<string>((g$ as Gauge).val.meta.Name), Tags: __goscriptLiteralField1}, true) })()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<push2.Gauge, null>>((g$ as Gauge).pusher).Set((g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Gauge).Load() : Gauge.prototype.Load.call(g))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public snapshot(): __goscript_snapshot.Snapshot {
		const g: Gauge | $.VarRef<Gauge> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<Gauge>(g).val)).snapshot()
	}

	static __typeInfo = $.registerStructType(
		"metrics.Gauge",
		() => new Gauge(),
		() => [$.methodSignature("Add", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Store", [["n", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Sub", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Swap", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("metric", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], ["metrics.Snapshot"], true)],
		Gauge,
		() => [/* @__PURE__ */ $.structField("val", "metrics.value", [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("pusher", "push.Gauge", [1], 120, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export class GaugeVector {
	public get vector(): __goscript_value.vector {
		return this._fields.vector
	}

	public set vector(value: __goscript_value.vector) {
		this._fields.vector = value
	}

	public _fields: {
		vector: __goscript_value.vector
	}

	constructor(init?: Partial<{vector?: __goscript_value.vector}>, __goscriptValue?: boolean) {
		this._fields = {
			vector: init?.vector ? init.vector.clone() : new __goscript_value.vector(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GaugeVector {
		return new GaugeVector(this, true)
	}

	public __goscriptAssign(source: GaugeVector): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.vector, values.vector)
	}

	public async Get(variableTagPairs: $.Slice<string>): globalThis.Promise<[Gauge | $.VarRef<Gauge> | null, $.GoError]> {
		const gv: GaugeVector | $.VarRef<GaugeVector> | null = this;
		if (gv == null) {
			return [null, null]
		}
		let [m, err] = await $.pointerValue<GaugeVector>(gv).vector.getOrCreate(variableTagPairs)
		if (err != null) {
			return [null, err]
		}
		return [((m as any)?.__goType === "*metrics.Gauge" && (m as any).__goValue === undefined && (m as any).__isTypedNil !== true ? ((m as any) as Gauge | $.VarRef<Gauge> | null) : $.mustTypeAssert<Gauge | $.VarRef<Gauge> | null>(m, /* @__PURE__ */ $.pointerType("metrics.Gauge"))), null]
	}

	public async MustGet(variableTagPairs: $.Slice<string>): globalThis.Promise<Gauge | $.VarRef<Gauge> | null> {
		const gv: GaugeVector | $.VarRef<GaugeVector> | null = this;
		if (gv == null) {
			return null
		}
		let __goscriptTuple0: any = await (gv !== null && (gv as any).__isVarRef !== true && (gv as any).__goValue === undefined ? ((gv as any) as GaugeVector).Get(variableTagPairs) : GaugeVector.prototype.Get.call(gv, variableTagPairs))
		let g: Gauge | $.VarRef<Gauge> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic(await fmt.Sprintf("failed to get gauge: %v", (err as any)))
		}
		return g
	}

	public describe(): __goscript_metadata.metadata {
		const gv: GaugeVector | $.VarRef<GaugeVector> | null = this;
		return ($.pointerValue<GaugeVector>(gv).vector.meta).clone()
	}

	public async proto(): globalThis.Promise<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null> {
		const gv: GaugeVector | $.VarRef<GaugeVector> | null = this;
		const gv$: GaugeVector = gv == null ? $.pointerTarget<GaugeVector>(gv) : (gv as any).__isVarRef === true ? (gv as any).value : (gv as any).__goValue === undefined ? (gv as any) : $.pointerTarget<GaugeVector>(gv)
		let mf: promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null = (() => { const __goscriptLiteralField4 = promproto.MetricType_Enum(promproto.MetricType_GAUGE); return new promproto.MetricFamily({Name: (gv$ as GaugeVector).vector.meta.Name, Help: (gv$ as GaugeVector).vector.meta.Help, Type: __goscriptLiteralField4}) })()
		await (gv$ as GaugeVector).vector.metricsMu.RLock()
		let protos: $.Slice<promproto.Metric | $.VarRef<promproto.Metric> | null> = $.makeSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>(0, $.len((gv$ as GaugeVector).vector.metrics))
		for (let __goscriptRangeTarget0 = (gv$ as GaugeVector).vector.metricsStorage, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let metric = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_metrics.metric | null)
			protos = $.appendOne(protos, Gauge.prototype.metric.call(((metric as any)?.__goType === "*metrics.Gauge" && (metric as any).__goValue === undefined && (metric as any).__isTypedNil !== true ? ((metric as any) as Gauge | $.VarRef<Gauge> | null) : $.mustTypeAssert<Gauge | $.VarRef<Gauge> | null>(metric, /* @__PURE__ */ $.pointerType("metrics.Gauge")))), $.appendZeros.nil)
		}
		void (gv$ as GaugeVector).vector.metricsMu.RUnlock()
		sort.Slice($.interfaceValue(protos, "[]*io_prometheus_client.Metric", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"))), $.functionValue((i: number, j: number): boolean => {
			return $.stringCompare(promproto.Metric.prototype.String.call($.arrayIndex(protos!, i)), promproto.Metric.prototype.String.call($.arrayIndex(protos!, j))) < 0
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		$.pointerValue<promproto.MetricFamily>(mf).Metric = protos
		return mf
	}

	public async getOrCreate(variableTagPairs: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_value.vector>(this.vector).getOrCreate(variableTagPairs)
	}

	public async newValue(key: any, variableTagPairs: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_value.vector>(this.vector).newValue(key, variableTagPairs)
	}

	public async push(target: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_value.vector>(this.vector).push(target)
	}

	public async snapshot(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_value.vector>(this.vector).snapshot()
	}

	static __typeInfo = $.registerStructType(
		"metrics.GaugeVector",
		() => new GaugeVector(),
		() => [$.methodSignature("Get", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Gauge"), "error"], true), $.methodSignature("MustGet", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Gauge")], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("getOrCreate", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("newValue", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.sliceType("metrics.Snapshot")], true)],
		GaugeVector,
		() => [/* @__PURE__ */ $.structField("vector", "metrics.vector", [0], 0, false, { pkgPath: "go.uber.org/net/metrics", anonymous: true })]
	)
}

export async function newGauge(m: __goscript_metadata.metadata): globalThis.Promise<Gauge | $.VarRef<Gauge> | null> {
	return (await (async () => { const __goscriptLiteralField2 = await __goscript_value.newValue(m); return new Gauge({val: __goscriptLiteralField2}) })())
}

export async function newDynamicGauge(m: __goscript_metadata.metadata, variableTagPairs: $.Slice<string>): globalThis.Promise<__goscript_metrics.metric | null> {
	return $.interfaceValue<__goscript_metrics.metric | null>((await (async () => { const __goscriptLiteralField3 = await __goscript_value.newDynamicValue(m, variableTagPairs); return new Gauge({val: __goscriptLiteralField3}) })()), "*metrics.Gauge", /* @__PURE__ */ $.pointerType("metrics.Gauge"))
}

export function newGaugeVector(m: __goscript_metadata.metadata): GaugeVector | $.VarRef<GaugeVector> | null {
	return new GaugeVector({vector: new __goscript_value.vector({meta: m, factory: newDynamicGauge, metrics: $.makeMap<string, number>(), metricsStorage: $.makeSlice<__goscript_metrics.metric | null>(0, 128)}, true)})
}

var __goscriptAwait: any
