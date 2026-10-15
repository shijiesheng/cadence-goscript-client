// Generated file based on collector.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./metric.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Collector", "prometheus.selfCollector"])

export type Collector = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
}

$.registerInterfaceType(
	"prometheus.Collector",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")])]
);

export class selfCollector {
	public get self(): __goscript_metric.Metric | null {
		return this._fields.self
	}

	public set self(value: __goscript_metric.Metric | null) {
		this._fields.self = value
	}

	public _fields: {
		self: __goscript_metric.Metric | null
	}

	constructor(init?: Partial<{self?: __goscript_metric.Metric | null}>, __goscriptValue?: boolean) {
		this._fields = {
			self: init?.self ?? (null! as __goscript_metric.Metric | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): selfCollector {
		return new selfCollector(this, true)
	}

	public __goscriptAssign(source: selfCollector): void {
		const target = this._fields
		const values = source._fields
		target.self = $.assignFieldValue(target.self, values.self, "prometheus.Metric")
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const c: selfCollector | $.VarRef<selfCollector> | null = this;
		await $.chanSend(ch, $.pointerValue<selfCollector>(c).self)
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const c: selfCollector | $.VarRef<selfCollector> | null = this;
		await $.chanSend(ch, ((__goscriptAwait = $.pointerValue<Exclude<__goscript_metric.Metric, null>>($.pointerValue<selfCollector>(c).self).Desc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null))
	}

	public init(self: __goscript_metric.Metric | null): void {
		let c: selfCollector | $.VarRef<selfCollector> | null = this;
		$.pointerValue<selfCollector>(c).self = self
	}

	static __typeInfo = $.registerStructType(
		"prometheus.selfCollector",
		() => new selfCollector(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("init", [["self", "prometheus.Metric"]], [], true)],
		selfCollector,
		() => [/* @__PURE__ */ $.structField("self", "prometheus.Metric", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export async function DescribeByCollect(c: Collector | null, descs: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
	let metrics: $.Channel<__goscript_metric.Metric | null> | null = $.makeChannel<__goscript_metric.Metric | null>(0, null! as __goscript_metric.Metric | null, "both")
	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<Collector, null>) : $.pointerValue<Exclude<Collector, null>>(c)).Collect(metrics), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		metrics!.close()
	})() })
	while (true) {
		let __goscriptRange0 = await $.chanRecvWithOk(metrics)
		if (!__goscriptRange0.ok) {
			break
		}
		let m = __goscriptRange0.value
		await $.chanSend(descs, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_metric.Metric, null>) : $.pointerValue<Exclude<__goscript_metric.Metric, null>>(m)).Desc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null))
	}
}

var __goscriptAwait: any
