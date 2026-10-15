// Generated file based on map.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as base642 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_accessors from "./accessors.gs.ts"

import * as __goscript_conversions from "./conversions.gs.ts"

import * as __goscript_mutations from "./mutations.gs.ts"

import * as __goscript_security from "./security.gs.ts"

import * as __goscript_tests from "./tests.gs.ts"

import * as __goscript_type_specific from "./type_specific.gs.ts"

import * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/io/index.js"
import "./accessors.gs.ts"
import "./conversions.gs.ts"
import "./mutations.gs.ts"
import "./security.gs.ts"
import "./tests.gs.ts"
import "./type_specific.gs.ts"
import "./type_specific_codegen.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("github.com/stretchr/objx", ["objx.MSIConvertable", "objx.Map"])

export type MSIConvertable = {
	MSI(): globalThis.Map<string, any> | null
}

$.registerInterfaceType(
	"objx.MSIConvertable",
	null,
	[$.methodSignature("MSI", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })])]
);

export type Map = globalThis.Map<string, any> | null

$.registerNamedType("objx.Map", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"objx.Map",
	{Base64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_Base64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_JSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustSignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_SignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLQuery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Map_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_parseURLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Base64", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Copy", [], ["objx.Map"]), $.methodSignature("Exclude", [["exclude", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("Get", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("Has", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSON", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Merge", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MergeHere", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MustBase64", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustJSON", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustSignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["selector", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["objx.Map"]), $.methodSignature("SignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Transform", [["transformer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["objx.Map"]), $.methodSignature("TransformKeys", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("URLQuery", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("URLValues", [], ["url.Values"]), $.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("parseURLValues", [["queryMap", "objx.Map"], ["vals", "url.Values"], ["key", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*objx.Map",
	{Base64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_Base64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_JSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustSignedBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_SignedBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLQuery as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Map_Value as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_parseURLValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Base64", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Copy", [], ["objx.Map"]), $.methodSignature("Exclude", [["exclude", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("Get", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("Has", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSON", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Merge", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MergeHere", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MustBase64", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustJSON", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustSignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["selector", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["objx.Map"]), $.methodSignature("SignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Transform", [["transformer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["objx.Map"]), $.methodSignature("TransformKeys", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("URLQuery", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("URLValues", [], ["url.Values"]), $.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("parseURLValues", [["queryMap", "objx.Map"], ["vals", "url.Values"], ["key", /* @__PURE__ */ $.basicType("string")]])]
);

export function Map_Value(m: Map): __goscript_value.Value | $.VarRef<__goscript_value.Value> | null {
	return new __goscript_value.Value({data: $.namedValueInterfaceValue<any>(m, "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())})
}

export let Nil: Map = await New(null)

export function __goscript_set_Nil(__goscriptValue: Map): void {
	Nil = __goscriptValue
}

export async function New(data: any): globalThis.Promise<Map> {
	{
		let [, ok] = $.typeAssertTuple<globalThis.Map<string, any> | null>(data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
		if (!ok) {
			{
				let [converter, __goscriptShadow0] = $.typeAssertTuple<MSIConvertable | null>(data, "objx.MSIConvertable")
				if (__goscriptShadow0) {
					data = $.interfaceValue(((__goscriptAwait = (converter !== null && (converter as any).__isVarRef !== true && (converter as any).__goValue === undefined ? (converter as Exclude<MSIConvertable, null>) : $.pointerValue<Exclude<MSIConvertable, null>>(converter)).MSI(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, any> | null), "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
				} else {
					return null
				}
			}
		}
	}
	return $.mustTypeAssert<globalThis.Map<string, any> | null>(data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
}

export function MSI(keyAndValuePairs: $.Slice<any>): Map {
	let newMap: Map = $.makeMap<string, any>([])
	let keyAndValuePairsLen = $.sliceLen(keyAndValuePairs)
	if ((keyAndValuePairsLen % 2) != 0) {
		return null
	}
	for (let __goscriptSliceWindow0 = $.sliceRange(keyAndValuePairs), i = 0; i < keyAndValuePairsLen; i = i + 2) {
		let key = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)
		let value = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as any)

		// make sure the key is a string
		let [keyString, keyStringOK] = $.typeAssertTuple<string>(key, /* @__PURE__ */ $.basicType("string"))
		if (!keyStringOK) {
			return null
		}
		$.mapSet(newMap, keyString, value)
	}
	return newMap
}

export async function MustFromJSON(jsonString: string): globalThis.Promise<Map> {
	let __goscriptTuple0: any = await FromJSON(jsonString)
	let o: Map = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic($.concatString("objx: MustFromJSON failed with error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return o
}

export async function MustFromJSONSlice(jsonString: string): globalThis.Promise<$.Slice<Map>> {
	let __goscriptTuple1: any = await FromJSONSlice(jsonString)
	let slice: $.Slice<Map> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		$.panic($.concatString("objx: MustFromJSONSlice failed with error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return slice
}

export async function FromJSON(jsonString: string): globalThis.Promise<[Map, $.GoError]> {
	let m: $.VarRef<Map> = $.varRef(null! as Map)
	let err = await json.Unmarshal($.stringToBytes(jsonString), $.namedValueInterfaceValue<any>(m, "*objx.Map", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
	if (err != null) {
		return [Nil, err]
	}
	return [m.value, null]
}

export async function FromJSONSlice(jsonString: string): globalThis.Promise<[$.Slice<Map>, $.GoError]> {
	let slice: $.VarRef<$.Slice<Map>> = $.varRef(null! as $.Slice<Map>)
	let err = await json.Unmarshal($.stringToBytes(jsonString), $.interfaceValue(slice, "*[]objx.Map", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("objx.Map"))))
	if (err != null) {
		return [null, err]
	}
	return [slice.value, null]
}

export async function FromBase64(base64String: string): globalThis.Promise<[Map, $.GoError]> {
	let decoder = base642.NewDecoder(base642.StdEncoding, $.interfaceValue<io.Reader | null>(strings.NewReader(base64String), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")))
	let __goscriptTuple2: any = await ioutil.ReadAll(decoder)
	let decoded: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return FromJSON($.bytesToString(decoded))
}

export async function MustFromBase64(base64String: string): globalThis.Promise<Map> {
	let __goscriptTuple3: any = await FromBase64(base64String)
	let result: Map = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		$.panic($.concatString("objx: MustFromBase64 failed with error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return result
}

export async function FromSignedBase64(base64String: string, key: string): globalThis.Promise<[Map, $.GoError]> {
	let parts: $.Slice<string> = strings.Split(base64String, "_")
	if ($.sliceLen(parts) != 2) {
		return [null, errors.New("objx: Signed base64 string is malformed")]
	}

	let sig = await __goscript_security.HashWithKey($.arrayIndex(parts!, 0), key)
	if (!$.stringEqual($.arrayIndex(parts!, 1), sig)) {
		return [null, errors.New("objx: Signature for base64 data does not match")]
	}
	return FromBase64($.arrayIndex(parts!, 0))
}

export async function MustFromSignedBase64(base64String: string, key: string): globalThis.Promise<Map> {
	let __goscriptTuple4: any = await FromSignedBase64(base64String, key)
	let result: Map = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		$.panic($.concatString("objx: MustFromSignedBase64 failed with error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return result
}

export function FromURLQuery(query: string): [Map, $.GoError] {
	let __goscriptTuple5: any = url.ParseQuery(query)
	let vals: url.Values = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let m: Map = $.makeMap<string, any>([])
	for (let [k, __goscriptRangeShadow0] of vals?.entries() ?? []) {
		$.mapSet(m, k, $.arrayIndex(__goscriptRangeShadow0!, 0))
	}
	return [m, null]
}

export async function MustFromURLQuery(query: string): globalThis.Promise<Map> {
	let __goscriptTuple6: any = FromURLQuery(query)
	let o: Map = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		$.panic($.concatString("objx: MustFromURLQuery failed with error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return o
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Base64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_Base64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_JSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustSignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_SignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLQuery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Map_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_parseURLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("objx.Map")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Base64", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Copy", [], ["objx.Map"]), $.methodSignature("Exclude", [["exclude", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("Get", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("Has", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSON", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Merge", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MergeHere", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MustBase64", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustJSON", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustSignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["selector", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["objx.Map"]), $.methodSignature("SignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Transform", [["transformer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["objx.Map"]), $.methodSignature("TransformKeys", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("URLQuery", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("URLValues", [], ["url.Values"]), $.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("parseURLValues", [["queryMap", "objx.Map"], ["vals", "url.Values"], ["key", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Base64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_Base64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_JSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_MustSignedBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_SignedBase64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLQuery as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_URLValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Map_Value as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (__goscript_conversions.Map_parseURLValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType("objx.Map"))
}

var __goscriptAwait: any
