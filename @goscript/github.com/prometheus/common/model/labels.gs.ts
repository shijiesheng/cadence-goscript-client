// Generated file based on labels.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.LabelName", "model.LabelNames", "model.LabelValue", "model.LabelValues", "model.LabelPair", "model.LabelPairs"])

export type LabelName = string

$.registerNamedValueType(
	"model.LabelName",
	{IsValid: (receiver: any, ...args: any[]) => (LabelName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*model.LabelName",
	{IsValid: (receiver: any, ...args: any[]) => (LabelName_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (LabelName_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalYAML: (receiver: any, ...args: any[]) => (LabelName_UnmarshalYAML as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalYAML", [["unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export type LabelNames = $.Slice<LabelName>

$.registerNamedType("model.LabelNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "model.LabelName")));

$.registerNamedValueType(
	"model.LabelNames",
	{Len: (receiver: any, ...args: any[]) => (LabelNames_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelNames_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (LabelNames_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelNames_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.LabelNames",
	{Len: (receiver: any, ...args: any[]) => (LabelNames_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelNames_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (LabelNames_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelNames_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type LabelValue = string

$.registerNamedValueType(
	"model.LabelValue",
	{IsValid: (receiver: any, ...args: any[]) => (LabelValue_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*model.LabelValue",
	{IsValid: (receiver: any, ...args: any[]) => (LabelValue_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type LabelValues = $.Slice<LabelValue>

$.registerNamedType("model.LabelValues", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "model.LabelValue")));

$.registerNamedValueType(
	"model.LabelValues",
	{Len: (receiver: any, ...args: any[]) => (LabelValues_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelValues_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelValues_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.LabelValues",
	{Len: (receiver: any, ...args: any[]) => (LabelValues_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelValues_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelValues_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type LabelPairs = $.Slice<LabelPair | $.VarRef<LabelPair> | null>

$.registerNamedType("model.LabelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.LabelPair")));

$.registerNamedValueType(
	"model.LabelPairs",
	{Len: (receiver: any, ...args: any[]) => (LabelPairs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelPairs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelPairs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.LabelPairs",
	{Len: (receiver: any, ...args: any[]) => (LabelPairs_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (LabelPairs_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (LabelPairs_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class LabelPair {
	public get Name(): LabelName {
		return this._fields.Name
	}

	public set Name(value: LabelName) {
		this._fields.Name = value
	}

	public get Value(): LabelValue {
		return this._fields.Value
	}

	public set Value(value: LabelValue) {
		this._fields.Value = value
	}

	public _fields: {
		Name: LabelName
		Value: LabelValue
	}

	constructor(init?: Partial<{Name?: LabelName, Value?: LabelValue}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as LabelName),
			Value: init?.Value ?? ("" as LabelValue)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LabelPair {
		return new LabelPair(this, true)
	}

	public __goscriptAssign(source: LabelPair): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Value = values.Value
	}

	static __typeInfo = $.registerStructType(
		"model.LabelPair",
		() => new LabelPair(),
		() => [],
		LabelPair,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "model.LabelName"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string", "model.LabelValue"), [1], 16, true)]
	)
}

export const AlertNameLabel: string = "alertname"

export const ExportedLabelPrefix: string = "exported_"

export const MetricNameLabel: string = "__name__"

export const SchemeLabel: string = "__scheme__"

export const AddressLabel: string = "__address__"

export const MetricsPathLabel: string = "__metrics_path__"

export const ScrapeIntervalLabel: string = "__scrape_interval__"

export const ScrapeTimeoutLabel: string = "__scrape_timeout__"

export const ReservedLabelPrefix: string = "__"

export const MetaLabelPrefix: string = "__meta_"

export const TmpLabelPrefix: string = "__tmp_"

export const ParamLabelPrefix: string = "__param_"

export const JobLabel: string = "job"

export const InstanceLabel: string = "instance"

export const BucketLabel: string = "le"

export const QuantileLabel: string = "quantile"

export let LabelNameRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^[a-zA-Z_][a-zA-Z0-9_]*$")

export function __goscript_set_LabelNameRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	LabelNameRE = __goscriptValue
}

export function LabelName_IsValid(ln: LabelName): boolean {
	if ($.stringLen(ln) == 0) {
		return false
	}
	for (let __goscriptRunes0 = $.stringRunes(ln); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		const b = __goscriptRunes0.rune
		if (!(((((b >= 97) && (b <= 122)) || ((b >= 65) && (b <= 90))) || (b == 95)) || (((b >= 48) && (b <= 57)) && (i > 0)))) {
			return false
		}
	}
	return true
}

export async function LabelName_UnmarshalYAML(ln: $.VarRef<LabelName> | null, unmarshal: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = (__goscriptAwait = unmarshal!($.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
	}
	if (!LabelName_IsValid(s.value)) {
		return fmt.Errorf("%q is not a valid label name", s.value)
	}
	ln!.value = s.value
	return null
}

export async function LabelName_UnmarshalJSON(ln: $.VarRef<LabelName> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = await json.Unmarshal(b, $.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
		if (err != null) {
			return err
		}
	}
	if (!LabelName_IsValid(s.value)) {
		return fmt.Errorf("%q is not a valid label name", s.value)
	}
	ln!.value = s.value
	return null
}

export function LabelNames_Len(l: LabelNames): number {
	return $.sliceLen((l as LabelNames))
}

export function LabelNames_Less(l: LabelNames, i: number, j: number): boolean {
	return $.stringCompare($.arrayIndex(l!, i), $.arrayIndex(l!, j)) < 0
}

export function LabelNames_Swap(l: LabelNames, i: number, j: number): void {
	let __goscriptAssign0_0: LabelName = $.arrayIndex(l!, j)
	let __goscriptAssign0_1: LabelName = $.arrayIndex(l!, i)
	$.sliceElems(l!)[$.sliceSlot(l!, i)] = __goscriptAssign0_0
	$.sliceElems(l!)[$.sliceSlot(l!, j)] = __goscriptAssign0_1
}

export function LabelNames_String(l: LabelNames): string {
	let labelStrings: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen((l as LabelNames)), "string")
	for (let __goscriptRangeTarget0 = l, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let label = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as LabelName)
		labelStrings = $.appendOne(labelStrings, label)
	}
	return strings.Join(labelStrings, ", ")
}

export function LabelValue_IsValid(lv: LabelValue): boolean {
	return utf8.ValidString(lv)
}

export function LabelValues_Len(l: LabelValues): number {
	return $.sliceLen((l as LabelValues))
}

export function LabelValues_Less(l: LabelValues, i: number, j: number): boolean {
	return $.stringCompare($.arrayIndex(l!, i), $.arrayIndex(l!, j)) < 0
}

export function LabelValues_Swap(l: LabelValues, i: number, j: number): void {
	let __goscriptAssign1_0: LabelValue = $.arrayIndex(l!, j)
	let __goscriptAssign1_1: LabelValue = $.arrayIndex(l!, i)
	$.sliceElems(l!)[$.sliceSlot(l!, i)] = __goscriptAssign1_0
	$.sliceElems(l!)[$.sliceSlot(l!, j)] = __goscriptAssign1_1
}

export function LabelPairs_Len(l: LabelPairs): number {
	return $.sliceLen((l as LabelPairs))
}

export function LabelPairs_Less(l: LabelPairs, i: number, j: number): boolean {
	switch ((true as boolean)) {
		case $.stringCompare($.pointerValue<LabelPair>($.arrayIndex(l!, i)).Name, $.pointerValue<LabelPair>($.arrayIndex(l!, j)).Name) > 0:
		{
			return false
			break
		}
		case $.stringCompare($.pointerValue<LabelPair>($.arrayIndex(l!, i)).Name, $.pointerValue<LabelPair>($.arrayIndex(l!, j)).Name) < 0:
		{
			return true
			break
		}
		case $.stringCompare($.pointerValue<LabelPair>($.arrayIndex(l!, i)).Value, $.pointerValue<LabelPair>($.arrayIndex(l!, j)).Value) > 0:
		{
			return false
			break
		}
		case $.stringCompare($.pointerValue<LabelPair>($.arrayIndex(l!, i)).Value, $.pointerValue<LabelPair>($.arrayIndex(l!, j)).Value) < 0:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function LabelPairs_Swap(l: LabelPairs, i: number, j: number): void {
	let __goscriptAssign2_0: LabelPair | $.VarRef<LabelPair> | null = $.arrayIndex(l!, j)
	let __goscriptAssign2_1: LabelPair | $.VarRef<LabelPair> | null = $.arrayIndex(l!, i)
	$.sliceElems(l!)[$.sliceSlot(l!, i)] = __goscriptAssign2_0
	$.sliceElems(l!)[$.sliceSlot(l!, j)] = __goscriptAssign2_1
}

var __goscriptAwait: any
