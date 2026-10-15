// Generated file based on scope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_counter from "./counter.gs.ts"

import * as __goscript_gauge from "./gauge.gs.ts"

import * as __goscript_histogram from "./histogram.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_spec from "./spec.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./core.gs.ts"
import "./counter.gs.ts"
import "./gauge.gs.ts"
import "./histogram.gs.ts"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./snapshot.gs.ts"
import "./spec.gs.ts"
import "./tag.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Scope"])

export class Scope {
	public get core(): __goscript_core.core | $.VarRef<__goscript_core.core> | null {
		return this._fields.core
	}

	public set core(value: __goscript_core.core | $.VarRef<__goscript_core.core> | null) {
		this._fields.core = value
	}

	public get constTags(): __goscript_tag.Tags {
		return this._fields.constTags
	}

	public set constTags(value: __goscript_tag.Tags) {
		this._fields.constTags = value
	}

	public _fields: {
		core: __goscript_core.core | $.VarRef<__goscript_core.core> | null
		constTags: __goscript_tag.Tags
	}

	constructor(init?: Partial<{core?: __goscript_core.core | $.VarRef<__goscript_core.core> | null, constTags?: __goscript_tag.Tags}>, __goscriptValue?: boolean) {
		this._fields = {
			core: init?.core ?? (null! as __goscript_core.core | $.VarRef<__goscript_core.core> | null),
			constTags: init?.constTags ?? (null! as __goscript_tag.Tags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Scope {
		return new Scope(this, true)
	}

	public __goscriptAssign(source: Scope): void {
		const target = this._fields
		const values = source._fields
		target.core = values.core
		target.constTags = values.constTags
	}

	public async Counter(spec: __goscript_spec.Spec): globalThis.Promise<[__goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		spec = $.assignStruct(spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec).clone()) : Scope.prototype.addConstTags.call(s, (spec).clone())))
		{
			let err = spec.validateScalar()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec).clone())
		if (err != null) {
			return [null, err]
		}
		let c: __goscript_counter.Counter | $.VarRef<__goscript_counter.Counter> | null = await __goscript_counter.newCounter(meta)
		{
			let __goscriptShadow0 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(c, "*metrics.Counter", /* @__PURE__ */ $.pointerType("metrics.Counter")))
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}
		return [c, null]
	}

	public async CounterVector(spec: __goscript_spec.Spec): globalThis.Promise<[__goscript_counter.CounterVector | $.VarRef<__goscript_counter.CounterVector> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		spec = $.assignStruct(spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec).clone()) : Scope.prototype.addConstTags.call(s, (spec).clone())))
		{
			let err = spec.validateVector()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec).clone())
		if (err != null) {
			return [null, err]
		}
		let cv: __goscript_counter.CounterVector | $.VarRef<__goscript_counter.CounterVector> | null = __goscript_counter.newCounterVector(meta)
		{
			let __goscriptShadow1 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(cv, "*metrics.CounterVector", /* @__PURE__ */ $.pointerType("metrics.CounterVector")))
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
		}
		return [cv, null]
	}

	public async Gauge(spec: __goscript_spec.Spec): globalThis.Promise<[__goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		spec = $.assignStruct(spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec).clone()) : Scope.prototype.addConstTags.call(s, (spec).clone())))
		{
			let err = spec.validateScalar()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec).clone())
		if (err != null) {
			return [null, err]
		}
		let g: __goscript_gauge.Gauge | $.VarRef<__goscript_gauge.Gauge> | null = await __goscript_gauge.newGauge(meta)
		{
			let __goscriptShadow2 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(g, "*metrics.Gauge", /* @__PURE__ */ $.pointerType("metrics.Gauge")))
			if (__goscriptShadow2 != null) {
				return [null, __goscriptShadow2]
			}
		}
		return [g, null]
	}

	public async GaugeVector(spec: __goscript_spec.Spec): globalThis.Promise<[__goscript_gauge.GaugeVector | $.VarRef<__goscript_gauge.GaugeVector> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		spec = $.assignStruct(spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec).clone()) : Scope.prototype.addConstTags.call(s, (spec).clone())))
		{
			let err = spec.validateVector()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec).clone())
		if (err != null) {
			return [null, err]
		}
		let gv: __goscript_gauge.GaugeVector | $.VarRef<__goscript_gauge.GaugeVector> | null = __goscript_gauge.newGaugeVector(meta)
		{
			let __goscriptShadow3 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(gv, "*metrics.GaugeVector", /* @__PURE__ */ $.pointerType("metrics.GaugeVector")))
			if (__goscriptShadow3 != null) {
				return [null, __goscriptShadow3]
			}
		}
		return [gv, null]
	}

	public async Histogram(spec: __goscript_spec.HistogramSpec): globalThis.Promise<[__goscript_histogram.Histogram | $.VarRef<__goscript_histogram.Histogram> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		$.assignStruct(spec.Spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec.Spec).clone()) : Scope.prototype.addConstTags.call(s, (spec.Spec).clone())))
		{
			let err = spec.validateScalar()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec.Spec).clone())
		if (err != null) {
			return [null, err]
		}
		let h: __goscript_histogram.Histogram | $.VarRef<__goscript_histogram.Histogram> | null = await __goscript_histogram.newHistogram(meta, spec.Unit, spec.Buckets)
		{
			let __goscriptShadow4 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(h, "*metrics.Histogram", /* @__PURE__ */ $.pointerType("metrics.Histogram")))
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
		}
		return [h, null]
	}

	public async HistogramVector(spec: __goscript_spec.HistogramSpec): globalThis.Promise<[__goscript_histogram.HistogramVector | $.VarRef<__goscript_histogram.HistogramVector> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		if (s == null) {
			return [null, null]
		}
		$.assignStruct(spec.Spec, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).addConstTags((spec.Spec).clone()) : Scope.prototype.addConstTags.call(s, (spec.Spec).clone())))
		{
			let err = spec.validateVector()
			if (err != null) {
				return [null, err]
			}
		}
		let [meta, err] = await __goscript_metadata.newMetadata((spec.Spec).clone())
		if (err != null) {
			return [null, err]
		}
		let hv: __goscript_histogram.HistogramVector | $.VarRef<__goscript_histogram.HistogramVector> | null = __goscript_histogram.newHistogramVector(meta, spec.Unit, spec.Buckets)
		{
			let __goscriptShadow5 = await __goscript_core.core.prototype.register.call($.pointerValue<Scope>(s).core, $.interfaceValue<__goscript_metrics.metric | null>(hv, "*metrics.HistogramVector", /* @__PURE__ */ $.pointerType("metrics.HistogramVector")))
			if (__goscriptShadow5 != null) {
				return [null, __goscriptShadow5]
			}
		}
		return [hv, null]
	}

	public async Tagged(tags: __goscript_tag.Tags): globalThis.Promise<Scope | $.VarRef<Scope> | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		if (s == null) {
			return null
		}
		let newTags: __goscript_tag.Tags = $.makeMap<string, string>()
		for (let [k, v] of (s$ as Scope).constTags?.entries() ?? []) {
			$.mapSet(newTags, k, v)
		}
		for (let [k, v] of tags?.entries() ?? []) {
			$.mapSet(newTags, await __goscript_tag.scrubName(k), await __goscript_tag.scrubTagValue(v))
		}
		return newScope((s$ as Scope).core, newTags)
	}

	public addConstTags(spec: __goscript_spec.Spec): __goscript_spec.Spec {
		const s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		if ($.len((s$ as Scope).constTags) == 0) {
			return (spec).clone()
		}
		let tags: __goscript_tag.Tags = $.makeMap<string, string>()
		for (let [k, v] of (s$ as Scope).constTags?.entries() ?? []) {
			$.mapSet(tags, k, v)
		}
		for (let [k, v] of spec.ConstTags?.entries() ?? []) {
			$.mapSet(tags, k, v)
		}
		spec.ConstTags = tags
		return (spec).clone()
	}

	static __typeInfo = $.registerStructType(
		"metrics.Scope",
		() => new Scope(),
		() => [$.methodSignature("Counter", [["spec", "metrics.Spec"]], [/* @__PURE__ */ $.pointerType("metrics.Counter"), "error"], true), $.methodSignature("CounterVector", [["spec", "metrics.Spec"]], [/* @__PURE__ */ $.pointerType("metrics.CounterVector"), "error"], true), $.methodSignature("Gauge", [["spec", "metrics.Spec"]], [/* @__PURE__ */ $.pointerType("metrics.Gauge"), "error"], true), $.methodSignature("GaugeVector", [["spec", "metrics.Spec"]], [/* @__PURE__ */ $.pointerType("metrics.GaugeVector"), "error"], true), $.methodSignature("Histogram", [["spec", "metrics.HistogramSpec"]], [/* @__PURE__ */ $.pointerType("metrics.Histogram"), "error"], true), $.methodSignature("HistogramVector", [["spec", "metrics.HistogramSpec"]], [/* @__PURE__ */ $.pointerType("metrics.HistogramVector"), "error"], true), $.methodSignature("Tagged", [["tags", "metrics.Tags"]], [/* @__PURE__ */ $.pointerType("metrics.Scope")], true), $.methodSignature("addConstTags", [["spec", "metrics.Spec"]], ["metrics.Spec"], true)],
		Scope,
		() => [/* @__PURE__ */ $.structField("core", /* @__PURE__ */ $.pointerType("metrics.core"), [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("constTags", "metrics.Tags", [1], 8, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export function newScope(c: __goscript_core.core | $.VarRef<__goscript_core.core> | null, tags: __goscript_tag.Tags): Scope | $.VarRef<Scope> | null {
	return new Scope({core: c, constTags: tags})
}
