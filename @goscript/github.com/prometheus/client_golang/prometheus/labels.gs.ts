// Generated file based on labels.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Labels"])

export type Labels = globalThis.Map<string, string> | null

$.registerNamedType("prometheus.Labels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

export const reservedLabelPrefix: string = "__"

export let errInconsistentCardinality: $.GoError = errors.New("inconsistent label cardinality")

export function __goscript_set_errInconsistentCardinality(__goscriptValue: $.GoError): void {
	errInconsistentCardinality = __goscriptValue
}

export function makeInconsistentCardinalityError(fqName: string, labels: $.Slice<string>, labelValues: $.Slice<string>): $.GoError {
	return fmt.Errorf("%s: %q has %d variable labels named %q but %d values %q were provided", (errInconsistentCardinality as any), fqName, $.basicInterfaceValue($.sliceLen(labels), "int"), $.interfaceValue(labels, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), $.basicInterfaceValue($.sliceLen(labelValues), "int"), $.interfaceValue(labelValues, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

export function validateValuesInLabels(labels: Labels, expectedNumberOfValues: number): $.GoError {
	if ($.len(labels) != expectedNumberOfValues) {
		return fmt.Errorf("%s: expected %d label values but got %d in %#v", (errInconsistentCardinality as any), $.basicInterfaceValue(expectedNumberOfValues, "int"), $.basicInterfaceValue($.len(labels), "int"), $.interfaceValue(labels, "prometheus.Labels", "prometheus.Labels"))
	}

	for (const [name, val] of labels?.entries() ?? []) {
		if (!utf8.ValidString(val)) {
			return fmt.Errorf("label %s: value %q is not valid UTF-8", name, val)
		}
	}

	return null
}

export function validateLabelValues(vals: $.Slice<string>, expectedNumberOfValues: number): $.GoError {
	if ($.sliceLen(vals) != expectedNumberOfValues) {
		return fmt.Errorf("%s: expected %d label values but got %d in %#v", (errInconsistentCardinality as any), $.basicInterfaceValue(expectedNumberOfValues, "int"), $.basicInterfaceValue($.sliceLen(vals), "int"), $.interfaceValue(vals, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	for (let __goscriptRangeTarget0 = vals, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let val = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if (!utf8.ValidString(val)) {
			return fmt.Errorf("label value %q is not valid UTF-8", val)
		}
	}

	return null
}

export function checkLabelName(l: string): boolean {
	return model.LabelName_IsValid(l) && !strings.HasPrefix(l, "__")
}
