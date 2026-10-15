// Generated file based on signature.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as __goscript_fingerprinting from "./fingerprinting.gs.ts"

import * as __goscript_fnv from "./fnv.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import type * as __goscript_labelset from "./labelset.gs.ts"

import type * as __goscript_metric from "./metric.gs.ts"
import "@goscript/sort/index.js"
import "./fingerprinting.gs.ts"
import "./fnv.gs.ts"
import "./labels.gs.ts"

export const SeparatorByte: number = 255

export var emptyLabelSignature: bigint

export function __goscript_init_emptyLabelSignature(): void {
	if (((emptyLabelSignature) as any) === undefined) {
		emptyLabelSignature = __goscript_fnv.hashNew()
	}
}

export function __goscript_get_emptyLabelSignature(): bigint {
	if (((emptyLabelSignature) as any) === undefined) {
		__goscript_init_emptyLabelSignature()
	}
	return emptyLabelSignature
}

export function __goscript_set_emptyLabelSignature(__goscriptValue: bigint): void {
	emptyLabelSignature = __goscriptValue
}

export function LabelsToSignature(labels: globalThis.Map<string, string> | null): bigint {
	if ($.len(labels) == 0) {
		return __goscript_get_emptyLabelSignature()
	}

	let labelNames: $.Slice<string> = $.makeSlice<string>(0, $.len(labels), "string")
	for (const [labelName, __rangeValue] of labels?.entries() ?? []) {
		labelNames = $.appendOne(labelNames, labelName)
	}
	sort.Strings(labelNames)

	let sum = __goscript_fnv.hashNew()
	for (let __goscriptRangeTarget0 = labelNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		sum = __goscript_fnv.hashAdd(sum, labelName)
		sum = __goscript_fnv.hashAddByte(sum, 255)
		sum = __goscript_fnv.hashAdd(sum, $.mapGet<string, string, string>(labels, labelName, "")[0])
		sum = __goscript_fnv.hashAddByte(sum, 255)
	}
	return sum
}

export async function labelSetToFingerprint(ls: __goscript_labelset.LabelSet): globalThis.Promise<__goscript_fingerprinting.Fingerprint> {
	if ($.len(ls) == 0) {
		return $.uint64(__goscript_get_emptyLabelSignature())
	}

	let labelNames: __goscript_labels.LabelNames = ($.makeSlice<__goscript_labels.LabelName>(0, $.len(ls), "string") as __goscript_labels.LabelNames)
	for (const [labelName, __rangeValue] of ls?.entries() ?? []) {
		labelNames = ($.appendOne((labelNames as __goscript_labels.LabelNames), labelName) as __goscript_labels.LabelNames)
	}
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(labelNames, "model.LabelNames", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

	let sum = __goscript_fnv.hashNew()
	for (let __goscriptRangeTarget1 = labelNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_labels.LabelName)
		sum = __goscript_fnv.hashAdd(sum, labelName)
		sum = __goscript_fnv.hashAddByte(sum, 255)
		sum = __goscript_fnv.hashAdd(sum, $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(ls, labelName, "")[0])
		sum = __goscript_fnv.hashAddByte(sum, 255)
	}
	return $.uint64(sum)
}

export function labelSetToFastFingerprint(ls: __goscript_labelset.LabelSet): __goscript_fingerprinting.Fingerprint {
	if ($.len(ls) == 0) {
		return $.uint64(__goscript_get_emptyLabelSignature())
	}

	let result: bigint = 0n
	for (const [labelName, labelValue] of ls?.entries() ?? []) {
		let sum = __goscript_fnv.hashNew()
		sum = __goscript_fnv.hashAdd(sum, labelName)
		sum = __goscript_fnv.hashAddByte(sum, 255)
		sum = __goscript_fnv.hashAdd(sum, labelValue)
		result = $.uint64Xor(result, sum)
	}
	return $.uint64(result)
}

export async function SignatureForLabels(m: __goscript_metric.Metric, labels: $.Slice<__goscript_labels.LabelName>): globalThis.Promise<bigint> {
	if ($.sliceLen(labels) == 0) {
		return __goscript_get_emptyLabelSignature()
	}

	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((labels as __goscript_labels.LabelNames), "model.LabelNames", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

	let sum = __goscript_fnv.hashNew()
	for (let __goscriptRangeTarget2 = labels, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let label = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_labels.LabelName)
		sum = __goscript_fnv.hashAdd(sum, label)
		sum = __goscript_fnv.hashAddByte(sum, 255)
		sum = __goscript_fnv.hashAdd(sum, $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(m, label, "")[0])
		sum = __goscript_fnv.hashAddByte(sum, 255)
	}
	return sum
}

export async function SignatureWithoutLabels(m: __goscript_metric.Metric, labels: globalThis.Map<__goscript_labels.LabelName, {}> | null): globalThis.Promise<bigint> {
	if ($.len(m) == 0) {
		return __goscript_get_emptyLabelSignature()
	}

	let labelNames: __goscript_labels.LabelNames = ($.makeSlice<__goscript_labels.LabelName>(0, $.len(m), "string") as __goscript_labels.LabelNames)
	for (const [labelName, __rangeValue] of m?.entries() ?? []) {
		{
			let [, exclude] = $.mapGet<__goscript_labels.LabelName, {}, {}>(labels, labelName, {})
			if (!exclude) {
				labelNames = ($.appendOne((labelNames as __goscript_labels.LabelNames), labelName) as __goscript_labels.LabelNames)
			}
		}
	}
	if ($.sliceLen((labelNames as __goscript_labels.LabelNames)) == 0) {
		return __goscript_get_emptyLabelSignature()
	}
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(labelNames, "model.LabelNames", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

	let sum = __goscript_fnv.hashNew()
	for (let __goscriptRangeTarget3 = labelNames, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_labels.LabelName)
		sum = __goscript_fnv.hashAdd(sum, labelName)
		sum = __goscript_fnv.hashAddByte(sum, 255)
		sum = __goscript_fnv.hashAdd(sum, $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(m, labelName, "")[0])
		sum = __goscript_fnv.hashAddByte(sum, 255)
	}
	return sum
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "model.LabelName"), "model.LabelNames"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
