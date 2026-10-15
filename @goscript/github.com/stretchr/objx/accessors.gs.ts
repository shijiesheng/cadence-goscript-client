// Generated file based on accessors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as url from "@goscript/net/url/index.js"

import * as __goscript_conversions from "./conversions.gs.ts"

import * as __goscript_map from "./map.gs.ts"

import * as __goscript_mutations from "./mutations.gs.ts"

import * as __goscript_tests from "./tests.gs.ts"

import * as __goscript_type_specific from "./type_specific.gs.ts"

import * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./conversions.gs.ts"
import "./map.gs.ts"
import "./mutations.gs.ts"
import "./tests.gs.ts"
import "./type_specific.gs.ts"
import "./type_specific_codegen.gs.ts"
import "./value.gs.ts"

export const PathSeparator: string = "."

export const arrayAccessRegexString: string = "^(.+)\\[([0-9]+)\\]$"

export const mapAccessRegexString: string = "^([^\\[]*)\\[([^\\]]+)\\](.*)$"

export let arrayAccessRegex: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^(.+)\\[([0-9]+)\\]$")

export function __goscript_set_arrayAccessRegex(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	arrayAccessRegex = __goscriptValue
}

export let mapAccessRegex: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^([^\\[]*)\\[([^\\]]+)\\](.*)$")

export function __goscript_set_mapAccessRegex(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	mapAccessRegex = __goscriptValue
}

export async function Map_Get(m: __goscript_map.Map, selector: string): globalThis.Promise<__goscript_value.Value | $.VarRef<__goscript_value.Value> | null> {
	let rawObj = await access($.namedValueInterfaceValue<any>(m, "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), selector, null, false)
	return new __goscript_value.Value({data: rawObj})
}

export async function Map_Set(m: __goscript_map.Map, selector: string, value: any): globalThis.Promise<__goscript_map.Map> {
	await access($.namedValueInterfaceValue<any>(m, "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), selector, value, true)
	return m
}

export async function getIndex(s: string): globalThis.Promise<[number, string]> {
	let arrayMatches: $.Slice<string> = await (arrayAccessRegex !== null && (arrayAccessRegex as any).__isVarRef !== true && (arrayAccessRegex as any).__goValue === undefined ? ((arrayAccessRegex as any) as regexp.Regexp).FindStringSubmatch(s) : regexp.Regexp.prototype.FindStringSubmatch.call(arrayAccessRegex, s))
	if ($.sliceLen(arrayMatches) > 0) {
		// Get the key into the map
		let selector = $.arrayIndex(arrayMatches!, 1)
		// Get the index into the array at the key
		// We know this can't fail because arrayMatches[2] is an int for sure
		let [index, ] = strconv.Atoi($.arrayIndex(arrayMatches!, 2))
		return [index, selector]
	}
	return [-1, s]
}

export async function getKey(s: string): globalThis.Promise<[string, string]> {
	let selSegs: $.Slice<string> = strings.SplitN(s, ".", 2)
	let thisSel = $.arrayIndex(selSegs!, 0)
	let nextSel = ""

	if ($.sliceLen(selSegs) > 1) {
		nextSel = $.arrayIndex(selSegs!, 1)
	}

	let mapMatches: $.Slice<string> = await (mapAccessRegex !== null && (mapAccessRegex as any).__isVarRef !== true && (mapAccessRegex as any).__goValue === undefined ? ((mapAccessRegex as any) as regexp.Regexp).FindStringSubmatch(s) : regexp.Regexp.prototype.FindStringSubmatch.call(mapAccessRegex, s))
	if ($.sliceLen(mapMatches) > 0) {
		{
			let [, err] = strconv.Atoi($.arrayIndex(mapMatches!, 2))
			if (err != null) {
				thisSel = $.arrayIndex(mapMatches!, 1)
				nextSel = $.concatString(($.concatString(($.concatString("[", $.arrayIndex(mapMatches!, 2))), "]")), $.arrayIndex(mapMatches!, 3))

				if ($.stringEqual(thisSel, "")) {
					thisSel = $.arrayIndex(mapMatches!, 2)
					nextSel = $.arrayIndex(mapMatches!, 3)
				}

				if ($.stringEqual(nextSel, "")) {
					selSegs = $.arrayToSlice<string>(["", ""])
				} else {
					if ($.indexString(nextSel, 0) == 46) {
						nextSel = $.sliceStringOrBytes(nextSel, 1, undefined)
					}
				}
			}
		}
	}

	return [thisSel, nextSel]
}

export async function access(current: any, selector: string, value: any, isSet: boolean): globalThis.Promise<any> {
	let [thisSel, nextSel] = await getKey(selector)

	let indexes: $.Slice<number> = $.arrayToSlice<number>([])
	while (strings.Contains(thisSel, "[")) {
		let prevSel = thisSel
		let index = -1
		let __goscriptTuple0: any = await getIndex(thisSel)
		index = __goscriptTuple0[0]
		thisSel = __goscriptTuple0[1]
		indexes = $.appendOne(indexes, index)
		if ($.stringEqual(prevSel, thisSel)) {
			break
		}
	}

	{
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_map.Map>(current, "objx.Map")
		let curMap: __goscript_map.Map = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (ok) {
			current = $.interfaceValue(curMap, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
		}
	}
	// get the object in question
	{
		const __goscriptTypeSwitchValue = current
		switch (true) {
			case $.typeAssert<globalThis.Map<string, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })).ok:
				{
					let curMSI: globalThis.Map<string, any> | null = $.mustTypeAssert<globalThis.Map<string, any> | null>(current, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
					if (($.stringEqual(nextSel, "")) && isSet) {
						$.mapSet(curMSI, thisSel, value)
						return null
					}

					let [, ok] = $.typeAssertTuple<globalThis.Map<string, any> | null>($.mapGet<string, any, any>(curMSI, thisSel, null)[0], /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
					if (!ok) {
						let __goscriptTuple2: any = $.typeAssertTuple<__goscript_map.Map>($.mapGet<string, any, any>(curMSI, thisSel, null)[0], "objx.Map")
						ok = __goscriptTuple2[1]
					}

					if (((($.mapGet<string, any, any>(curMSI, thisSel, null)[0] == null) || !ok) && ($.sliceLen(indexes) == 0)) && isSet) {
						$.mapSet(curMSI, thisSel, $.interfaceValue($.makeMap<string, any>([]), "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
					}

					current = $.mapGet<string, any, any>(curMSI, thisSel, null)[0]
				}
				break
			default:
				{
					current = null
				}
				break
		}
	}

	// do we need to access the item of an array?
	if ($.sliceLen(indexes) > 0) {
		let num: number = $.sliceLen(indexes)
		while (num > 0) {
			num--
			let index = $.arrayIndex(indexes!, num)
			indexes = $.goSlice(indexes, undefined, num)
			{
				let __goscriptTuple3: any = interSlice(current)
				let array: $.Slice<any> = __goscriptTuple3[0]
				let ok = __goscriptTuple3[1]
				if (ok) {
					if (index < $.sliceLen(array)) {
						current = $.arrayIndex(array!, index)
					} else {
						current = null
						break
					}
				}
			}
		}
	}

	if (!$.stringEqual(nextSel, "")) {
		current = await access(current, nextSel, value, isSet)
	}
	return current
}

export function interSlice(slice: any): [$.Slice<any>, boolean] {
	{
		let __goscriptTuple4: any = $.typeAssertTuple<$.Slice<any>>(slice, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
		let array: $.Slice<any> = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (ok) {
			return [array, ok]
		}
	}

	let s = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(slice)))
	if ($.markAsStructValue($.cloneStructValue(s)).Kind() != 23) {
		return [null, false]
	}

	let ret: $.Slice<any> = $.makeSlice<any>($.markAsStructValue($.cloneStructValue(s)).Len())

	for (let __goscriptSliceWindow0 = $.sliceRange(ret), i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Interface()
	}

	return [ret, true]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Base64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_Base64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (Map_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_JSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustSignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (Map_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_SignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLQuery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (__goscript_map.Map_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_parseURLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("objx.Map")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Base64", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Copy", [], ["objx.Map"]), $.methodSignature("Exclude", [["exclude", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("Get", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("Has", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSON", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Merge", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MergeHere", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MustBase64", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustJSON", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustSignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["selector", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["objx.Map"]), $.methodSignature("SignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Transform", [["transformer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["objx.Map"]), $.methodSignature("TransformKeys", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("URLQuery", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("URLValues", [], ["url.Values"]), $.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("parseURLValues", [["queryMap", "objx.Map"], ["vals", "url.Values"], ["key", /* @__PURE__ */ $.basicType("string")]])])
}
