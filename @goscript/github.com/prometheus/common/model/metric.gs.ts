// Generated file based on metric.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as __goscript_fingerprinting from "./fingerprinting.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_labelset from "./labelset.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "./labels.gs.ts"
import "./labelset.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.Metric"])

export type Metric = globalThis.Map<__goscript_labels.LabelName, __goscript_labels.LabelValue> | null

$.registerNamedType("model.Metric", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "model.LabelName"), /* @__PURE__ */ $.basicType("string", "model.LabelValue")));

$.registerNamedValueType(
	"model.Metric",
	{Before: (receiver: any, ...args: any[]) => (Metric_Before as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (Metric_Clone as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (Metric_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FastFingerprint: (receiver: any, ...args: any[]) => (Metric_FastFingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fingerprint: (receiver: any, ...args: any[]) => (Metric_Fingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Metric_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Before", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clone", [], ["model.Metric"]), $.methodSignature("Equal", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FastFingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*model.Metric",
	{Before: (receiver: any, ...args: any[]) => (Metric_Before as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (Metric_Clone as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (Metric_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FastFingerprint: (receiver: any, ...args: any[]) => (Metric_FastFingerprint as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Fingerprint: (receiver: any, ...args: any[]) => (Metric_Fingerprint as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Metric_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Before", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clone", [], ["model.Metric"]), $.methodSignature("Equal", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FastFingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export let MetricNameRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^[a-zA-Z_:][a-zA-Z0-9_:]*$")

export function __goscript_set_MetricNameRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	MetricNameRE = __goscriptValue
}

export function Metric_Equal(m: Metric, o: Metric): boolean {
	return __goscript_labelset.LabelSet_Equal(m, o)
}

export async function Metric_Before(m: Metric, o: Metric): globalThis.Promise<boolean> {
	return __goscript_labelset.LabelSet_Before(m, o)
}

export function Metric_Clone(m: Metric): Metric {
	let clone: Metric = $.makeMap<__goscript_labels.LabelName, __goscript_labels.LabelValue>()
	for (let [k, v] of m?.entries() ?? []) {
		$.mapSet(clone, k, v)
	}
	return clone
}

export async function Metric_String(m: Metric): globalThis.Promise<string> {
	let [metricName, hasName] = $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(m, "__name__", "")
	let numLabels = $.len(m) - 1
	if (!hasName) {
		numLabels = $.len(m)
	}
	let labelStrings: $.Slice<string> = $.makeSlice<string>(0, numLabels, "string")
	for (const [label, value] of m?.entries() ?? []) {
		if (!$.stringEqual(label, "__name__")) {
			labelStrings = $.appendOne(labelStrings, await fmt.Sprintf("%s=%q", $.namedValueInterfaceValue<any>(label, "model.LabelName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(value, "model.LabelValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
		}
	}

	switch (numLabels) {
		case 0:
		{
			if (hasName) {
				return metricName
			}
			return "{}"
			break
		}
		default:
		{
			sort.Strings(labelStrings)
			return fmt.Sprintf("%s{%s}", $.namedValueInterfaceValue<any>(metricName, "model.LabelValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), strings.Join(labelStrings, ", "))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Metric_Fingerprint(m: Metric): globalThis.Promise<__goscript_fingerprinting.Fingerprint> {
	return __goscript_labelset.LabelSet_Fingerprint(m)
}

export function Metric_FastFingerprint(m: Metric): __goscript_fingerprinting.Fingerprint {
	return __goscript_labelset.LabelSet_FastFingerprint(m)
}

export function IsValidMetricName(n: __goscript_labels.LabelValue): boolean {
	if ($.stringLen(n) == 0) {
		return false
	}
	for (let __goscriptRunes0 = $.stringRunes(n); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		const b = __goscriptRunes0.rune
		if (!((((((b >= 97) && (b <= 122)) || ((b >= 65) && (b <= 90))) || (b == 95)) || (b == 58)) || (((b >= 48) && (b <= 57)) && (i > 0)))) {
			return false
		}
	}
	return true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (__goscript_labels.LabelName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "model.LabelName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (__goscript_labels.LabelValue_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "model.LabelValue"))
}
