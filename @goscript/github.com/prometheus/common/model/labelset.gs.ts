// Generated file based on labelset.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as __goscript_fingerprinting from "./fingerprinting.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_signature from "./signature.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "./labels.gs.ts"
import "./signature.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.LabelSet"])

export type LabelSet = globalThis.Map<__goscript_labels.LabelName, __goscript_labels.LabelValue> | null

$.registerNamedType("model.LabelSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "model.LabelName"), /* @__PURE__ */ $.basicType("string", "model.LabelValue")));

$.registerNamedValueType(
	"model.LabelSet",
	{Before: (receiver: any, ...args: any[]) => (LabelSet_Before as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (LabelSet_Clone as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (LabelSet_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FastFingerprint: (receiver: any, ...args: any[]) => (LabelSet_FastFingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fingerprint: (receiver: any, ...args: any[]) => (LabelSet_Fingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (LabelSet_Merge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (LabelSet_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Validate: (receiver: any, ...args: any[]) => (LabelSet_Validate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Before", [["o", "model.LabelSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clone", [], ["model.LabelSet"]), $.methodSignature("Equal", [["o", "model.LabelSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FastFingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Merge", [["other", "model.LabelSet"]], ["model.LabelSet"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Validate", [], ["error"])]
);

$.registerNamedValueType(
	"*model.LabelSet",
	{Before: (receiver: any, ...args: any[]) => (LabelSet_Before as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (LabelSet_Clone as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (LabelSet_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FastFingerprint: (receiver: any, ...args: any[]) => (LabelSet_FastFingerprint as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Fingerprint: (receiver: any, ...args: any[]) => (LabelSet_Fingerprint as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (LabelSet_Merge as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (LabelSet_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (LabelSet_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), Validate: (receiver: any, ...args: any[]) => (LabelSet_Validate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Before", [["o", "model.LabelSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clone", [], ["model.LabelSet"]), $.methodSignature("Equal", [["o", "model.LabelSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FastFingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Merge", [["other", "model.LabelSet"]], ["model.LabelSet"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("Validate", [], ["error"])]
);

export function LabelSet_Validate(ls: LabelSet): $.GoError {
	for (const [ln, lv] of ls?.entries() ?? []) {
		if (!__goscript_labels.LabelName_IsValid(ln)) {
			return fmt.Errorf("invalid name %q", $.namedValueInterfaceValue<any>(ln, "model.LabelName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		if (!__goscript_labels.LabelValue_IsValid(lv)) {
			return fmt.Errorf("invalid value %q", $.namedValueInterfaceValue<any>(lv, "model.LabelValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
		}
	}
	return null
}

export function LabelSet_Equal(ls: LabelSet, o: LabelSet): boolean {
	if ($.len(ls) != $.len(o)) {
		return false
	}
	for (const [ln, lv] of ls?.entries() ?? []) {
		let [olv, ok] = $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(o, ln, "")
		if (!ok) {
			return false
		}
		if (!$.stringEqual(olv, lv)) {
			return false
		}
	}
	return true
}

export async function LabelSet_Before(ls: LabelSet, o: LabelSet): globalThis.Promise<boolean> {
	if ($.len(ls) < $.len(o)) {
		return true
	}
	if ($.len(ls) > $.len(o)) {
		return false
	}

	let lns: __goscript_labels.LabelNames = ($.makeSlice<__goscript_labels.LabelName>(0, $.len(ls) + $.len(o), "string") as __goscript_labels.LabelNames)
	for (const [ln, __rangeValue] of ls?.entries() ?? []) {
		lns = ($.appendOne((lns as __goscript_labels.LabelNames), ln) as __goscript_labels.LabelNames)
	}
	for (const [ln, __rangeValue] of o?.entries() ?? []) {
		lns = ($.appendOne((lns as __goscript_labels.LabelNames), ln) as __goscript_labels.LabelNames)
	}
	// It's probably not worth it to de-dup lns.
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(lns, "model.LabelNames", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7()))!)
	for (let __goscriptRangeTarget0 = lns, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let ln = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_labels.LabelName)
		let [mlv, ok] = $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(ls, ln, "")
		if (!ok) {
			return true
		}
		let __goscriptTuple0: any = $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>(o, ln, "")
		let olv = __goscriptTuple0[0]
		ok = __goscriptTuple0[1]
		if (!ok) {
			return false
		}
		if ($.stringCompare(mlv, olv) < 0) {
			return true
		}
		if ($.stringCompare(mlv, olv) > 0) {
			return false
		}
	}
	return false
}

export function LabelSet_Clone(ls: LabelSet): LabelSet {
	let lsn: LabelSet = $.makeMap<__goscript_labels.LabelName, __goscript_labels.LabelValue>()
	for (let [ln, lv] of ls?.entries() ?? []) {
		$.mapSet(lsn, ln, lv)
	}
	return lsn
}

export function LabelSet_Merge(l: LabelSet, other: LabelSet): LabelSet {
	let result: LabelSet = $.makeMap<__goscript_labels.LabelName, __goscript_labels.LabelValue>()

	for (let [k, v] of l?.entries() ?? []) {
		$.mapSet(result, k, v)
	}

	for (let [k, v] of other?.entries() ?? []) {
		$.mapSet(result, k, v)
	}

	return result
}

export async function LabelSet_String(l: LabelSet): globalThis.Promise<string> {
	let lstrs: $.Slice<string> = $.makeSlice<string>(0, $.len(l), "string")
	for (const [__goscriptRangeShadow0, v] of l?.entries() ?? []) {
		lstrs = $.appendOne(lstrs, await fmt.Sprintf("%s=%q", $.namedValueInterfaceValue<any>(__goscriptRangeShadow0, "model.LabelName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(v, "model.LabelValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
	}

	sort.Strings(lstrs)
	return fmt.Sprintf("{%s}", strings.Join(lstrs, ", "))
}

export async function LabelSet_Fingerprint(ls: LabelSet): globalThis.Promise<__goscript_fingerprinting.Fingerprint> {
	return __goscript_signature.labelSetToFingerprint(ls)
}

export function LabelSet_FastFingerprint(ls: LabelSet): __goscript_fingerprinting.Fingerprint {
	return __goscript_signature.labelSetToFastFingerprint(ls)
}

export async function LabelSet_UnmarshalJSON(l: $.VarRef<LabelSet> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	let m: $.VarRef<globalThis.Map<__goscript_labels.LabelName, __goscript_labels.LabelValue> | null> = $.varRef(null! as globalThis.Map<__goscript_labels.LabelName, __goscript_labels.LabelValue> | null)
	{
		let err = await json.Unmarshal(b, $.interfaceValue(m, "*map[model.LabelName]model.LabelValue", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "model.LabelName"), /* @__PURE__ */ $.basicType("string", "model.LabelValue")))))
		if (err != null) {
			return err
		}
	}
	// encoding/json only unmarshals maps of the form map[string]T. It treats
	// LabelName as a string and does not call its UnmarshalJSON method.
	// Thus, we have to replicate the behavior here.
	for (const [ln, __rangeValue] of m.value?.entries() ?? []) {
		if (!__goscript_labels.LabelName_IsValid(ln)) {
			return fmt.Errorf("%q is not a valid label name", $.namedValueInterfaceValue<any>(ln, "model.LabelName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
	}
	l!.value = m.value
	return null
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

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_labels.LabelNames_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "model.LabelName"), "model.LabelNames"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
