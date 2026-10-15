// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as push2 from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as __goscript_counter from "./counter.gs.ts"

import * as __goscript_gauge from "./gauge.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "./counter.gs.ts"
import "./gauge.gs.ts"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./snapshot.gs.ts"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.value", "metrics.vector"])

export class value {
	public get Int64(): atomic.Int64 {
		return this._fields.Int64
	}

	public set Int64(value: atomic.Int64) {
		this._fields.Int64 = value
	}

	public get meta(): __goscript_metadata.metadata {
		return this._fields.meta
	}

	public set meta(value: __goscript_metadata.metadata) {
		this._fields.meta = value
	}

	public get tagPairs(): $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null> {
		return this._fields.tagPairs
	}

	public set tagPairs(value: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>) {
		this._fields.tagPairs = value
	}

	public _fields: {
		Int64: atomic.Int64
		meta: __goscript_metadata.metadata
		tagPairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>
	}

	constructor(init?: Partial<{Int64?: atomic.Int64, meta?: __goscript_metadata.metadata, tagPairs?: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Int64: init?.Int64 ? init.Int64.clone() : new atomic.Int64(undefined, true),
			meta: init?.meta ? init.meta.clone() : new __goscript_metadata.metadata(undefined, true),
			tagPairs: init?.tagPairs ?? (null! as $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): value {
		return new value(this, true)
	}

	public __goscriptAssign(source: value): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Int64, values.Int64)
		$.assignStruct(target.meta, values.meta)
		target.tagPairs = values.tagPairs
	}

	public snapshot(): __goscript_snapshot.Snapshot {
		const v = $.varRef(this);
		return (() => { const __goscriptLiteralField0 = __goscript_tag.zip(v.value.tagPairs); const __goscriptLiteralField1 = v.value.Int64.Load(); return new __goscript_snapshot.Snapshot({Name: $.pointerValue<string>(v.value.meta.Name), Tags: __goscriptLiteralField0, Value: __goscriptLiteralField1}, true) })()
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
		"metrics.value",
		() => new value(),
		() => [$.methodSignature("snapshot", [], ["metrics.Snapshot"]), $.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("int64")], ["new", /* @__PURE__ */ $.basicType("int64")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Dec", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Inc", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("int64")]], [["old", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		value,
		() => [/* @__PURE__ */ $.structField("Int64", "atomic.Int64", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("meta", "metrics.metadata", [1], 8, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("tagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [2], 96, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export class vector {
	public get meta(): __goscript_metadata.metadata {
		return this._fields.meta
	}

	public set meta(value: __goscript_metadata.metadata) {
		this._fields.meta = value
	}

	// The factory function creates a new metric given the vector's metadata
	// and the variable tag keys and values.
	public get factory(): ((_p0: __goscript_metadata.metadata, _p1: $.Slice<string>) => __goscript_metrics.metric | null | globalThis.Promise<__goscript_metrics.metric | null>) | null {
		return this._fields.factory
	}

	public set factory(value: ((_p0: __goscript_metadata.metadata, _p1: $.Slice<string>) => __goscript_metrics.metric | null | globalThis.Promise<__goscript_metrics.metric | null>) | null) {
		this._fields.factory = value
	}

	public get metricsMu(): sync.RWMutex {
		return this._fields.metricsMu
	}

	public set metricsMu(value: sync.RWMutex) {
		this._fields.metricsMu = value
	}

	// key is variable tag vals, the value is the index to metricsStorage. We do this to reduce GC.
	public get metrics(): globalThis.Map<string, number> | null {
		return this._fields.metrics
	}

	public set metrics(value: globalThis.Map<string, number> | null) {
		this._fields.metrics = value
	}

	// this is needed to reduce overhead of for loop because looping a map is more expensive
	public get metricsStorage(): $.Slice<__goscript_metrics.metric | null> {
		return this._fields.metricsStorage
	}

	public set metricsStorage(value: $.Slice<__goscript_metrics.metric | null>) {
		this._fields.metricsStorage = value
	}

	public _fields: {
		meta: __goscript_metadata.metadata
		factory: ((_p0: __goscript_metadata.metadata, _p1: $.Slice<string>) => __goscript_metrics.metric | null | globalThis.Promise<__goscript_metrics.metric | null>) | null
		metricsMu: sync.RWMutex
		metrics: globalThis.Map<string, number> | null
		metricsStorage: $.Slice<__goscript_metrics.metric | null>
	}

	constructor(init?: Partial<{meta?: __goscript_metadata.metadata, factory?: ((_p0: __goscript_metadata.metadata, _p1: $.Slice<string>) => __goscript_metrics.metric | null | globalThis.Promise<__goscript_metrics.metric | null>) | null, metricsMu?: sync.RWMutex, metrics?: globalThis.Map<string, number> | null, metricsStorage?: $.Slice<__goscript_metrics.metric | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			meta: init?.meta ? init.meta.clone() : new __goscript_metadata.metadata(undefined, true),
			factory: init?.factory ?? (null! as ((_p0: __goscript_metadata.metadata, _p1: $.Slice<string>) => __goscript_metrics.metric | null | globalThis.Promise<__goscript_metrics.metric | null>) | null),
			metricsMu: init?.metricsMu ? $.markAsStructValue($.cloneStructValue(init.metricsMu)) : $.markAsStructValue(new sync.RWMutex()),
			metrics: init?.metrics ?? (null! as globalThis.Map<string, number> | null),
			metricsStorage: init?.metricsStorage ?? (null! as $.Slice<__goscript_metrics.metric | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): vector {
		return new vector(this, true)
	}

	public __goscriptAssign(source: vector): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.meta, values.meta)
		target.factory = values.factory
		$.assignStruct(target.metricsMu, values.metricsMu)
		target.metrics = values.metrics
		target.metricsStorage = values.metricsStorage
	}

	public async getOrCreate(variableTagPairs: $.Slice<string>): globalThis.Promise<[__goscript_metrics.metric | null, $.GoError]> {
		const vec: vector | $.VarRef<vector> | null = this;
		const vec$: vector = vec == null ? $.pointerTarget<vector>(vec) : (vec as any).__isVarRef === true ? (vec as any).value : (vec as any).__goValue === undefined ? (vec as any) : $.pointerTarget<vector>(vec)
		{
			let err = (vec$ as vector).meta.ValidateVariableTags(variableTagPairs)
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptShadow0: __goscript_tag.digester | $.VarRef<__goscript_tag.digester> | null = await __goscript_tag.newDigester()
		for (let __goscriptSliceWindow0 = $.sliceRange(variableTagPairs), i = 0; i < (globalThis.Math.trunc(__goscriptSliceWindow0.length / 2)); i++) {
			__goscript_tag.digester.prototype.add.call(__goscriptShadow0, "", await __goscript_tag.scrubTagValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (i * 2) + 1)] as string)))
		}

		await (vec$ as vector).metricsMu.RLock()
		let [mIndex, ok] = $.mapGet<string, number, number>((vec$ as vector).metrics, $.bytesToString((__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(__goscriptShadow0))), 0)

		if (ok) {
			let m = $.arrayIndex((vec$ as vector).metricsStorage!, mIndex)
			void (vec$ as vector).metricsMu.RUnlock()

			void (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(__goscriptShadow0))
			return [m, null]
		}

		void (vec$ as vector).metricsMu.RUnlock()

		await (vec$ as vector).metricsMu.Lock()
		let [m, err] = await vector.prototype.newValue.call(vec, (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(__goscriptShadow0)), variableTagPairs)
		void (vec$ as vector).metricsMu.Unlock()
		void (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(__goscriptShadow0))

		return [m, err]
	}

	public async newValue(key: $.Slice<number>, variableTagPairs: $.Slice<string>): globalThis.Promise<[__goscript_metrics.metric | null, $.GoError]> {
		let vec: vector | $.VarRef<vector> | null = this;
		const vec$: vector = vec == null ? $.pointerTarget<vector>(vec) : (vec as any).__isVarRef === true ? (vec as any).value : (vec as any).__goValue === undefined ? (vec as any) : $.pointerTarget<vector>(vec)
		let [mIndex, ok] = $.mapGet<string, number, number>((vec$ as vector).metrics, $.bytesToString(key), 0)
		if (ok) {
			let m = $.arrayIndex((vec$ as vector).metricsStorage!, mIndex)
			return [m, null]
		}
		let m = (__goscriptAwait = (vec$ as vector).factory!(((vec$ as vector).meta).clone(), variableTagPairs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.mapSet((vec$ as vector).metrics, $.bytesToString(key), $.uint($.sliceLen((vec$ as vector).metricsStorage), 32));
		;(vec$ as vector).metricsStorage = $.appendOne((vec$ as vector).metricsStorage, m, $.appendZeros.nil)
		return [m, null]
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		const vec: vector | $.VarRef<vector> | null = this;
		const vec$: vector = vec == null ? $.pointerTarget<vector>(vec) : (vec as any).__isVarRef === true ? (vec as any).value : (vec as any).__goValue === undefined ? (vec as any) : $.pointerTarget<vector>(vec)
		await (vec$ as vector).metricsMu.RLock()
		for (let __goscriptRangeTarget0 = (vec$ as vector).metricsStorage, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_metrics.metric | null)
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_metrics.metric, null>) : $.pointerValue<Exclude<__goscript_metrics.metric, null>>(m)).push(target), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (vec$ as vector).metricsMu.RUnlock()
	}

	public async snapshot(): globalThis.Promise<$.Slice<__goscript_snapshot.Snapshot>> {
		const vec: vector | $.VarRef<vector> | null = this;
		using __defer = new $.DisposableStack()
		const vec$: vector = vec == null ? $.pointerTarget<vector>(vec) : (vec as any).__isVarRef === true ? (vec as any).value : (vec as any).__goValue === undefined ? (vec as any) : $.pointerTarget<vector>(vec)
		await (vec$ as vector).metricsMu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((vec$ as vector).metricsMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let snaps: $.Slice<__goscript_snapshot.Snapshot> = $.makeSlice<__goscript_snapshot.Snapshot>(0, $.len((vec$ as vector).metrics), undefined, () => new __goscript_snapshot.Snapshot(undefined, true))
		for (let __goscriptRangeTarget1 = (vec$ as vector).metricsStorage, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_metrics.metric | null)
			{
				const __goscriptTypeSwitchValue = m
				switch (true) {
					case $.typeAssert<__goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Counter")).ok:
						{
							let v: __goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null = $.typeAssert<__goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Counter")).value
							snaps = $.appendOne(snaps, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_counter.Counter).snapshot() : __goscript_counter.Counter.prototype.snapshot.call(v)))
						}
						break
					case $.typeAssert<__goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Gauge")).ok:
						{
							let v: __goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null = $.typeAssert<__goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("metrics.Gauge")).value
							snaps = $.appendOne(snaps, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_gauge.Gauge).snapshot() : __goscript_gauge.Gauge.prototype.snapshot.call(v)))
						}
						break
				}
			}
		}
		return snaps
	}

	static __typeInfo = $.registerStructType(
		"metrics.vector",
		() => new vector(),
		() => [$.methodSignature("getOrCreate", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("newValue", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["metrics.metric", "error"], true), $.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.sliceType("metrics.Snapshot")], true)],
		vector,
		() => [/* @__PURE__ */ $.structField("meta", "metrics.metadata", [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("factory", ({ kind: $.TypeKind.Function, params: ["metrics.metadata", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["metrics.metric"] } as $.FunctionTypeInfo), [1], 88, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("metricsMu", "sync.RWMutex", [2], 96, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("metrics", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint32")), [3], 120, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("metricsStorage", /* @__PURE__ */ $.sliceType("metrics.metric"), [4], 128, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export async function newValue(m: __goscript_metadata.metadata): globalThis.Promise<value> {
	return (await (async () => { const __goscriptLiteralField2 = await m.MergeTags(null); return new value({meta: m, tagPairs: __goscriptLiteralField2}, true) })())
}

export async function newDynamicValue(m: __goscript_metadata.metadata, variableTagPairs: $.Slice<string>): globalThis.Promise<value> {
	return (await (async () => { const __goscriptLiteralField3 = await m.MergeTags(variableTagPairs); return new value({meta: m, tagPairs: __goscriptLiteralField3}, true) })())
}

var __goscriptAwait: any
