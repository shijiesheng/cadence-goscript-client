// Generated file based on observer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as __goscript_collector from "./collector.gs.ts"

import type * as __goscript_desc from "./desc.gs.ts"

import type * as __goscript_labels from "./labels.gs.ts"

import type * as __goscript_metric from "./metric.gs.ts"
import "@goscript/github.com/prometheus/client_model/go/index.js"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Observer", "prometheus.ObserverFunc", "prometheus.ObserverVec", "prometheus.ExemplarObserver"])

export type Observer = {
	Observe(_p0: number): void
}

$.registerInterfaceType(
	"prometheus.Observer",
	null,
	[$.methodSignature("Observe", [/* @__PURE__ */ $.basicType("float64")])]
);

export type ObserverFunc = ((_p0: number) => void) | null

$.registerNamedValueType(
	"prometheus.ObserverFunc",
	{Observe: (receiver: any, ...args: any[]) => (ObserverFunc_Observe as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Observe", [["value", /* @__PURE__ */ $.basicType("float64")]])]
);

$.registerNamedValueType(
	"*prometheus.ObserverFunc",
	{Observe: (receiver: any, ...args: any[]) => (ObserverFunc_Observe as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Observe", [["value", /* @__PURE__ */ $.basicType("float64")]])]
);

export type ObserverVec = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	CurryWith(_p0: __goscript_labels.Labels): [ObserverVec | null, $.GoError]
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	GetMetricWith(_p0: __goscript_labels.Labels): [Observer | null, $.GoError] | globalThis.Promise<[Observer | null, $.GoError]>
	GetMetricWithLabelValues(lvs: $.Slice<string>): [Observer | null, $.GoError] | globalThis.Promise<[Observer | null, $.GoError]>
	MustCurryWith(_p0: __goscript_labels.Labels): ObserverVec | null
	With(_p0: __goscript_labels.Labels): Observer | null | globalThis.Promise<Observer | null>
	WithLabelValues(_p0: $.Slice<string>): Observer | null | globalThis.Promise<Observer | null>
}

$.registerInterfaceType(
	"prometheus.ObserverVec",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("CurryWith", ["prometheus.Labels"], ["prometheus.ObserverVec", "error"]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("GetMetricWith", ["prometheus.Labels"], ["prometheus.Observer", "error"]), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Observer", "error"]), $.methodSignature("MustCurryWith", ["prometheus.Labels"], ["prometheus.ObserverVec"]), $.methodSignature("With", ["prometheus.Labels"], ["prometheus.Observer"]), $.methodSignature("WithLabelValues", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["prometheus.Observer"])]
);

export type ExemplarObserver = {
	ObserveWithExemplar(value: number, exemplar: __goscript_labels.Labels): void
}

$.registerInterfaceType(
	"prometheus.ExemplarObserver",
	null,
	[$.methodSignature("ObserveWithExemplar", [["value", /* @__PURE__ */ $.basicType("float64")], ["exemplar", "prometheus.Labels"]])]
);

export async function ObserverFunc_Observe(f: ObserverFunc | null, value: number): globalThis.Promise<void> {
	void (__goscriptAwait = f!(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
