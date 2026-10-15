// Generated file based on conversions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as base642 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_accessors from "./accessors.gs.ts"

import * as __goscript_map from "./map.gs.ts"

import * as __goscript_mutations from "./mutations.gs.ts"

import * as __goscript_security from "./security.gs.ts"

import * as __goscript_tests from "./tests.gs.ts"

import * as __goscript_type_specific from "./type_specific.gs.ts"

import * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/io/index.js"
import "./accessors.gs.ts"
import "./map.gs.ts"
import "./mutations.gs.ts"
import "./security.gs.ts"
import "./tests.gs.ts"
import "./type_specific.gs.ts"
import "./type_specific_codegen.gs.ts"
import "./value.gs.ts"

export const SignatureSeparator: string = "_"

export const URLValuesSliceKeySuffixEmpty: string = ""

export const URLValuesSliceKeySuffixArray: string = "[]"

export const URLValuesSliceKeySuffixIndex: string = "[i]"

export let urlValuesSliceKeySuffix: string = "[]"

export function __goscript_set_urlValuesSliceKeySuffix(__goscriptValue: string): void {
	urlValuesSliceKeySuffix = __goscriptValue
}

export function SetURLValuesSliceKeySuffix(s: string): $.GoError {
	if ((($.stringEqual(s, "")) || ($.stringEqual(s, "[]"))) || ($.stringEqual(s, "[i]"))) {
		urlValuesSliceKeySuffix = s
		return null
	}

	return errors.New("objx: Invalid URLValuesSliceKeySuffix provided.")
}

export async function Map_JSON(m: __goscript_map.Map): globalThis.Promise<[string, $.GoError]> {
	for (let [k, v] of m?.entries() ?? []) {
		$.mapSet(m, k, await cleanUp(v))
	}

	let __goscriptTuple0: any = await json.Marshal($.namedValueInterfaceValue<any>(m, "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	let result: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		err = errors.New($.concatString("objx: JSON encode failed with: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return [$.bytesToString(result), err]
}

export async function cleanUpInterfaceArray(_in: $.Slice<any>): globalThis.Promise<$.Slice<any>> {
	let result: $.Slice<any> = $.makeSlice<any>($.sliceLen(_in))
	for (let __goscriptRangeTarget0 = _in, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(result), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await cleanUp(v)
	}
	return result
}

export async function cleanUpInterfaceMap(_in: globalThis.Map<any, any> | null): globalThis.Promise<__goscript_map.Map> {
	let result: __goscript_map.Map = $.makeMap<string, any>([])
	for (let [k, v] of _in?.entries() ?? []) {
		$.mapSet(result, await fmt.Sprintf("%v", k), await cleanUp(v))
	}
	return result
}

export async function cleanUpStringMap(_in: globalThis.Map<string, any> | null): globalThis.Promise<__goscript_map.Map> {
	let result: __goscript_map.Map = $.makeMap<string, any>([])
	for (let [k, v] of _in?.entries() ?? []) {
		$.mapSet(result, k, await cleanUp(v))
	}
	return result
}

export async function cleanUpMSIArray(_in: $.Slice<globalThis.Map<string, any> | null>): globalThis.Promise<$.Slice<__goscript_map.Map>> {
	let result: $.Slice<__goscript_map.Map> = $.makeSlice<__goscript_map.Map>($.sliceLen(_in))
	for (let __goscriptRangeTarget1 = _in, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(result), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as globalThis.Map<string, any> | null);
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = await cleanUpStringMap(v)
	}
	return result
}

export async function cleanUpMapArray(_in: $.Slice<__goscript_map.Map>): globalThis.Promise<$.Slice<__goscript_map.Map>> {
	let result: $.Slice<__goscript_map.Map> = $.makeSlice<__goscript_map.Map>($.sliceLen(_in))
	for (let __goscriptRangeTarget2 = _in, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(result), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let v = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as __goscript_map.Map);
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = await cleanUpStringMap(v)
	}
	return result
}

export async function cleanUp(v: any): globalThis.Promise<any> {
	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).ok:
				{
					let v: $.Slice<any> = $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).value
					return $.interfaceValue(await cleanUpInterfaceArray(v), "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
				}
				break
			case $.typeAssert<$.Slice<globalThis.Map<string, any> | null>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))).ok:
				{
					let v: $.Slice<globalThis.Map<string, any> | null> = $.typeAssert<$.Slice<globalThis.Map<string, any> | null>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))).value
					return $.interfaceValue(await cleanUpMSIArray(v), "[]objx.Map", /* @__PURE__ */ $.sliceType("objx.Map"))
				}
				break
			case $.typeAssert<globalThis.Map<any, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType({ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] })).ok:
				{
					let v: globalThis.Map<any, any> | null = $.typeAssert<globalThis.Map<any, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType({ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] })).value
					return $.namedValueInterfaceValue<any>(await cleanUpInterfaceMap(v), "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
				}
				break
			case $.typeAssert<__goscript_map.Map>(__goscriptTypeSwitchValue, "objx.Map").ok:
				{
					let v: __goscript_map.Map = $.typeAssert<__goscript_map.Map>(__goscriptTypeSwitchValue, "objx.Map").value
					return $.namedValueInterfaceValue<any>(await cleanUpStringMap(v), "objx.Map", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
				}
				break
			case $.typeAssert<$.Slice<__goscript_map.Map>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("objx.Map")).ok:
				{
					let v: $.Slice<__goscript_map.Map> = $.typeAssert<$.Slice<__goscript_map.Map>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("objx.Map")).value
					return $.interfaceValue(await cleanUpMapArray(v), "[]objx.Map", /* @__PURE__ */ $.sliceType("objx.Map"))
				}
				break
			default:
				{
					let v: any = __goscriptTypeSwitchValue
					return v
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Map_MustJSON(m: __goscript_map.Map): globalThis.Promise<string> {
	let [result, err] = await Map_JSON(m)
	if (err != null) {
		$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return result
}

export async function Map_Base64(m: __goscript_map.Map): globalThis.Promise<[string, $.GoError]> {
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))

	let [jsonData, err] = await Map_JSON(m)
	if (err != null) {
		return ["", err]
	}

	let encoder = base642.NewEncoder(base642.StdEncoding, $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
	await (encoder !== null && (encoder as any).__isVarRef !== true && (encoder as any).__goValue === undefined ? (encoder as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(encoder)).Write($.stringToBytes(jsonData))
	await (encoder !== null && (encoder as any).__isVarRef !== true && (encoder as any).__goValue === undefined ? (encoder as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(encoder)).Close()

	return [buf.value.String(), null]
}

export async function Map_MustBase64(m: __goscript_map.Map): globalThis.Promise<string> {
	let [result, err] = await Map_Base64(m)
	if (err != null) {
		$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return result
}

export async function Map_SignedBase64(m: __goscript_map.Map, key: string): globalThis.Promise<[string, $.GoError]> {
	let [__goscriptShadow0, err] = await Map_Base64(m)
	if (err != null) {
		return ["", err]
	}

	let sig = await __goscript_security.HashWithKey(__goscriptShadow0, key)
	return [$.concatString(($.concatString(__goscriptShadow0, "_")), sig), null]
}

export async function Map_MustSignedBase64(m: __goscript_map.Map, key: string): globalThis.Promise<string> {
	let [result, err] = await Map_SignedBase64(m, key)
	if (err != null) {
		$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return result
}

export async function Map_URLValues(m: __goscript_map.Map): globalThis.Promise<url.Values> {
	let vals: url.Values = $.makeMap<string, $.Slice<string>>()

	await Map_parseURLValues(m, m, vals, "")

	return vals
}

export async function Map_parseURLValues(m: __goscript_map.Map, queryMap: __goscript_map.Map, vals: url.Values, key: string): globalThis.Promise<void> {
	let useSliceIndex = false
	if ($.stringEqual(urlValuesSliceKeySuffix, "[i]")) {
		useSliceIndex = true
	}

	for (const [k, v] of queryMap?.entries() ?? []) {
		let val: __goscript_value.Value | $.VarRef<__goscript_value.Value> | null = new __goscript_value.Value({data: v})
		switch ((true as boolean)) {
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsObjxMap() : __goscript_value.Value.prototype.IsObjxMap.call(val)):
			{
				if ($.stringEqual(key, "")) {
					await Map_parseURLValues(m, await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).ObjxMap(null) : __goscript_value.Value.prototype.ObjxMap.call(val, null)), vals, k)
				} else {
					await Map_parseURLValues(m, await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).ObjxMap(null) : __goscript_value.Value.prototype.ObjxMap.call(val, null)), vals, $.concatString(($.concatString(($.concatString(key, "[")), k)), "]"))
				}
				break
			}
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsObjxMapSlice() : __goscript_value.Value.prototype.IsObjxMapSlice.call(val)):
			{
				let sliceKey = k
				if (!$.stringEqual(key, "")) {
					sliceKey = $.concatString(($.concatString(($.concatString(key, "[")), k)), "]")
				}

				if (useSliceIndex) {
					for (let __goscriptRangeTarget3 = await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).MustObjxMapSlice() : __goscript_value.Value.prototype.MustObjxMapSlice.call(val)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
						let sv = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as __goscript_map.Map)
						let sk = $.concatString(($.concatString(($.concatString(sliceKey, "[")), strconv.FormatInt($.int64(i), 10))), "]")
						await Map_parseURLValues(m, sv, vals, sk)
					}
				} else {
					sliceKey = $.concatString(sliceKey, urlValuesSliceKeySuffix)
					for (let __goscriptRangeTarget4 = await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).MustObjxMapSlice() : __goscript_value.Value.prototype.MustObjxMapSlice.call(val)), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
						let sv = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_map.Map)
						await Map_parseURLValues(m, sv, vals, sliceKey)
					}
				}
				break
			}
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsMSISlice() : __goscript_value.Value.prototype.IsMSISlice.call(val)):
			{
				let sliceKey = k
				if (!$.stringEqual(key, "")) {
					sliceKey = $.concatString(($.concatString(($.concatString(key, "[")), k)), "]")
				}

				if (useSliceIndex) {
					for (let __goscriptRangeTarget5 = await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).MustMSISlice() : __goscript_value.Value.prototype.MustMSISlice.call(val)), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
						let sv = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as globalThis.Map<string, any> | null)
						let sk = $.concatString(($.concatString(($.concatString(sliceKey, "[")), strconv.FormatInt($.int64(i), 10))), "]")
						await Map_parseURLValues(m, await __goscript_map.New($.interfaceValue(sv, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))), vals, sk)
					}
				} else {
					sliceKey = $.concatString(sliceKey, urlValuesSliceKeySuffix)
					for (let __goscriptRangeTarget6 = await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).MustMSISlice() : __goscript_value.Value.prototype.MustMSISlice.call(val)), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
						let sv = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as globalThis.Map<string, any> | null)
						await Map_parseURLValues(m, await __goscript_map.New($.interfaceValue(sv, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))), vals, sliceKey)
					}
				}
				break
			}
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsStrSlice() : __goscript_value.Value.prototype.IsStrSlice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsBoolSlice() : __goscript_value.Value.prototype.IsBoolSlice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsFloat32Slice() : __goscript_value.Value.prototype.IsFloat32Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsFloat64Slice() : __goscript_value.Value.prototype.IsFloat64Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsIntSlice() : __goscript_value.Value.prototype.IsIntSlice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsInt8Slice() : __goscript_value.Value.prototype.IsInt8Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsInt16Slice() : __goscript_value.Value.prototype.IsInt16Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsInt32Slice() : __goscript_value.Value.prototype.IsInt32Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsInt64Slice() : __goscript_value.Value.prototype.IsInt64Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsUintSlice() : __goscript_value.Value.prototype.IsUintSlice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsUint8Slice() : __goscript_value.Value.prototype.IsUint8Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsUint16Slice() : __goscript_value.Value.prototype.IsUint16Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsUint32Slice() : __goscript_value.Value.prototype.IsUint32Slice.call(val)):
			case (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).IsUint64Slice() : __goscript_value.Value.prototype.IsUint64Slice.call(val)):
			{
				let sliceKey = k
				if (!$.stringEqual(key, "")) {
					sliceKey = $.concatString(($.concatString(($.concatString(key, "[")), k)), "]")
				}

				if (useSliceIndex) {
					for (let __goscriptRangeTarget7 = (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).StringSlice(null) : __goscript_value.Value.prototype.StringSlice.call(val, null)), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
						let sv = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as string)
						let sk = $.concatString(($.concatString(($.concatString(sliceKey, "[")), strconv.FormatInt($.int64(i), 10))), "]")
						url.Values_Set(vals, sk, sv)
					}
				} else {
					sliceKey = $.concatString(sliceKey, urlValuesSliceKeySuffix)
					$.mapSet(vals, sliceKey, (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).StringSlice(null) : __goscript_value.Value.prototype.StringSlice.call(val, null)))
				}
				break
			}
			default:
			{
				if ($.stringEqual(key, "")) {
					url.Values_Set(vals, k, await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).String() : __goscript_value.Value.prototype.String.call(val)))
				} else {
					url.Values_Set(vals, $.concatString(($.concatString(($.concatString(key, "[")), k)), "]"), await (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? ((val as any) as __goscript_value.Value).String() : __goscript_value.Value.prototype.String.call(val)))
				}
				break
			}
		}
	}
}

export async function Map_URLQuery(m: __goscript_map.Map): globalThis.Promise<[string, $.GoError]> {
	return [url.Values_Encode((await Map_URLValues(m))), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Base64: (receiver: any, ...args: any[]) => (Map_Base64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Exclude: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Exclude as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (__goscript_tests.Map_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), JSON: (receiver: any, ...args: any[]) => (Map_JSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Merge: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Merge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MergeHere: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_MergeHere as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustBase64: (receiver: any, ...args: any[]) => (Map_MustBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustJSON: (receiver: any, ...args: any[]) => (Map_MustJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MustSignedBase64: (receiver: any, ...args: any[]) => (Map_MustSignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_accessors.Map_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SignedBase64: (receiver: any, ...args: any[]) => (Map_SignedBase64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), TransformKeys: (receiver: any, ...args: any[]) => (__goscript_mutations.Map_TransformKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLQuery: (receiver: any, ...args: any[]) => (Map_URLQuery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URLValues: (receiver: any, ...args: any[]) => (Map_URLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (__goscript_map.Map_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseURLValues: (receiver: any, ...args: any[]) => (Map_parseURLValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("objx.Map")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Base64", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Copy", [], ["objx.Map"]), $.methodSignature("Exclude", [["exclude", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("Get", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("Has", [["selector", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSON", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Merge", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MergeHere", [["merge", "objx.Map"]], ["objx.Map"]), $.methodSignature("MustBase64", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustJSON", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MustSignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["selector", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["objx.Map"]), $.methodSignature("SignedBase64", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Transform", [["transformer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["objx.Map"]), $.methodSignature("TransformKeys", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["objx.Map"]), $.methodSignature("URLQuery", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("URLValues", [], ["url.Values"]), $.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("objx.Value")]), $.methodSignature("parseURLValues", [["queryMap", "objx.Map"], ["vals", "url.Values"], ["key", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
