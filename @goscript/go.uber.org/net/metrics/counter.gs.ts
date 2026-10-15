// Generated file based on counter.go
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

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Counter", "metrics.CounterVector"])

export class Counter {
	public get val(): __goscript_value.value {
		return this._fields.val
	}

	public set val(value: __goscript_value.value) {
		this._fields.val = value
	}

	public get pusher(): push2.Counter | null {
		return this._fields.pusher
	}

	public set pusher(value: push2.Counter | null) {
		this._fields.pusher = value
	}

	public _fields: {
		val: __goscript_value.value
		pusher: push2.Counter | null
	}

	constructor(init?: Partial<{val?: __goscript_value.value, pusher?: push2.Counter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			val: init?.val ? init.val.clone() : new __goscript_value.value(undefined, true),
			pusher: init?.pusher ?? (null! as push2.Counter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Counter {
		return new Counter(this, true)
	}

	public __goscriptAssign(source: Counter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.val, values.val)
		target.pusher = $.assignFieldValue(target.pusher, values.pusher, "push.Counter")
	}

	public Add(n: bigint): bigint {
		const c: Counter | $.VarRef<Counter> | null = this;
		const c$: Counter = c == null ? $.pointerTarget<Counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Counter>(c)
		if (c == null) {
			return 0n
		}
		if (n <= 0n) {
			return (c$ as Counter).val.Int64.Load()
		}
		return (c$ as Counter).val.Int64.Add(n)
	}

	public Inc(): bigint {
		const c: Counter | $.VarRef<Counter> | null = this;
		if (c == null) {
			return 0n
		}
		return $.pointerValue<Counter>(c).val.Int64.Inc()
	}

	public Load(): bigint {
		const c: Counter | $.VarRef<Counter> | null = this;
		if (c == null) {
			return 0n
		}
		return $.pointerValue<Counter>(c).val.Int64.Load()
	}

	public describe(): __goscript_metadata.metadata {
		const c: Counter | $.VarRef<Counter> | null = this;
		return ($.pointerValue<Counter>(c).val.meta).clone()
	}

	public metric(): promproto.Metric | $.VarRef<promproto.Metric> | null {
		const c: Counter | $.VarRef<Counter> | null = this;
		const c$: Counter = c == null ? $.pointerTarget<Counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Counter>(c)
		let n = $.varRef(globalThis.Number((c$ as Counter).val.Int64.Load()))
		return new promproto.Metric({Label: (c$ as Counter).val.tagPairs, Counter: new promproto.Counter({Value: n})})
	}

	public proto(): promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null {
		const c: Counter | $.VarRef<Counter> | null = this;
		const c$: Counter = c == null ? $.pointerTarget<Counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Counter>(c)
		return (() => { const __goscriptLiteralField0 = promproto.MetricType_Enum(promproto.MetricType_COUNTER); return new promproto.MetricFamily({Name: (c$ as Counter).val.meta.Name, Help: (c$ as Counter).val.meta.Help, Type: __goscriptLiteralField0, Metric: $.arrayToSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>([(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Counter).metric() : Counter.prototype.metric.call(c))])}) })()
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		let c: Counter | $.VarRef<Counter> | null = this;
		const c$: Counter = c == null ? $.pointerTarget<Counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Counter>(c)
		if ((c$ as Counter).val.meta.DisablePush) {
			return
		}
		if ((c$ as Counter).pusher == null) {
			;(c$ as Counter).pusher = (__goscriptAwait = (target !== null && (target as any).__isVarRef !== true && (target as any).__goValue === undefined ? (target as Exclude<push2.Target, null>) : $.pointerValue<Exclude<push2.Target, null>>(target)).NewCounter((() => { const __goscriptLiteralField1 = __goscript_tag.zip((c$ as Counter).val.tagPairs); return new push2.Spec({Name: $.pointerValue<string>((c$ as Counter).val.meta.Name), Tags: __goscriptLiteralField1}, true) })()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<push2.Counter, null>>((c$ as Counter).pusher).Set((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Counter).Load() : Counter.prototype.Load.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public snapshot(): __goscript_snapshot.Snapshot {
		const c: Counter | $.VarRef<Counter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<Counter>(c).val)).snapshot()
	}

	static __typeInfo = $.registerStructType(
		"metrics.Counter",
		() => new Counter(),
		() => [$.methodSignature("Add", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("metric", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], ["metrics.Snapshot"], true)],
		Counter,
		() => [/* @__PURE__ */ $.structField("val", "metrics.value", [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("pusher", "push.Counter", [1], 120, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export class CounterVector {
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

	public clone(): CounterVector {
		return new CounterVector(this, true)
	}

	public __goscriptAssign(source: CounterVector): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.vector, values.vector)
	}

	public async Get(variableTagPairs: $.Slice<string>): globalThis.Promise<[Counter | $.VarRef<Counter> | null, $.GoError]> {
		const cv: CounterVector | $.VarRef<CounterVector> | null = this;
		if (cv == null) {
			return [null, null]
		}
		let [m, err] = await $.pointerValue<CounterVector>(cv).vector.getOrCreate(variableTagPairs)
		if (err != null) {
			return [null, err]
		}
		return [((m as any)?.__goType === "*metrics.Counter" && (m as any).__goValue === undefined && (m as any).__isTypedNil !== true ? ((m as any) as Counter | $.VarRef<Counter> | null) : $.mustTypeAssert<Counter | $.VarRef<Counter> | null>(m, /* @__PURE__ */ $.pointerType("metrics.Counter"))), null]
	}

	public async MustGet(variableTagPairs: $.Slice<string>): globalThis.Promise<Counter | $.VarRef<Counter> | null> {
		const cv: CounterVector | $.VarRef<CounterVector> | null = this;
		if (cv == null) {
			return null
		}
		let __goscriptTuple0: any = await (cv !== null && (cv as any).__isVarRef !== true && (cv as any).__goValue === undefined ? ((cv as any) as CounterVector).Get(variableTagPairs) : CounterVector.prototype.Get.call(cv, variableTagPairs))
		let c: Counter | $.VarRef<Counter> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic(await fmt.Sprintf("failed to get counter: %v", (err as any)))
		}
		return c
	}

	public describe(): __goscript_metadata.metadata {
		const cv: CounterVector | $.VarRef<CounterVector> | null = this;
		return ($.pointerValue<CounterVector>(cv).vector.meta).clone()
	}

	public async proto(): globalThis.Promise<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null> {
		const cv: CounterVector | $.VarRef<CounterVector> | null = this;
		const cv$: CounterVector = cv == null ? $.pointerTarget<CounterVector>(cv) : (cv as any).__isVarRef === true ? (cv as any).value : (cv as any).__goValue === undefined ? (cv as any) : $.pointerTarget<CounterVector>(cv)
		let mf: promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null = (() => { const __goscriptLiteralField4 = promproto.MetricType_Enum(promproto.MetricType_COUNTER); return new promproto.MetricFamily({Name: (cv$ as CounterVector).vector.meta.Name, Help: (cv$ as CounterVector).vector.meta.Help, Type: __goscriptLiteralField4}) })()
		await (cv$ as CounterVector).vector.metricsMu.RLock()
		let protos: $.Slice<promproto.Metric | $.VarRef<promproto.Metric> | null> = $.makeSlice<promproto.Metric | $.VarRef<promproto.Metric> | null>(0, $.len((cv$ as CounterVector).vector.metrics))
		for (let __goscriptRangeTarget0 = (cv$ as CounterVector).vector.metricsStorage, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let metric = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_metrics.metric | null)
			protos = $.appendOne(protos, Counter.prototype.metric.call(((metric as any)?.__goType === "*metrics.Counter" && (metric as any).__goValue === undefined && (metric as any).__isTypedNil !== true ? ((metric as any) as Counter | $.VarRef<Counter> | null) : $.mustTypeAssert<Counter | $.VarRef<Counter> | null>(metric, /* @__PURE__ */ $.pointerType("metrics.Counter")))), $.appendZeros.nil)
		}
		void (cv$ as CounterVector).vector.metricsMu.RUnlock()
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
		"metrics.CounterVector",
		() => new CounterVector(),
		() => [$.methodSignature("Get", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Counter"), "error"], true), $.methodSignature("MustGet", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("metrics.Counter")], true), $.methodSignature("describe", [], ["metrics.metadata"], true), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], true), $.methodSignature("getOrCreate", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("newValue", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.sliceType("metrics.Snapshot")], true)],
		CounterVector,
		() => [/* @__PURE__ */ $.structField("vector", "metrics.vector", [0], 0, false, { pkgPath: "go.uber.org/net/metrics", anonymous: true })]
	)
}

export async function newCounter(m: __goscript_metadata.metadata): globalThis.Promise<Counter | $.VarRef<Counter> | null> {
	return (await (async () => { const __goscriptLiteralField2 = await __goscript_value.newValue(m); return new Counter({val: __goscriptLiteralField2}) })())
}

export async function newDynamicCounter(m: __goscript_metadata.metadata, variableTagPairs: $.Slice<string>): globalThis.Promise<__goscript_metrics.metric | null> {
	return $.interfaceValue<__goscript_metrics.metric | null>((await (async () => { const __goscriptLiteralField3 = await __goscript_value.newDynamicValue(m, variableTagPairs); return new Counter({val: __goscriptLiteralField3}) })()), "*metrics.Counter", /* @__PURE__ */ $.pointerType("metrics.Counter"))
}

export function newCounterVector(m: __goscript_metadata.metadata): CounterVector | $.VarRef<CounterVector> | null {
	return new CounterVector({vector: new __goscript_value.vector({meta: m, factory: newDynamicCounter, metrics: $.makeMap<string, number>(), metricsStorage: $.makeSlice<__goscript_metrics.metric | null>(0, 128)}, true)})
}

var __goscriptAwait: any
