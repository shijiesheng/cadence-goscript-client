// Generated file based on header.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_reader from "./reader.gs.ts"
import "./reader.gs.ts"

$.registerTypePackagePath("net/textproto", ["textproto.MIMEHeader"])

export type MIMEHeader = globalThis.Map<string, $.Slice<string>> | null

$.registerNamedType("textproto.MIMEHeader", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))));

$.registerNamedValueType(
	"textproto.MIMEHeader",
	{Add: (receiver: any, ...args: any[]) => (MIMEHeader_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Del: (receiver: any, ...args: any[]) => (MIMEHeader_Del as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (MIMEHeader_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (MIMEHeader_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (MIMEHeader_Values as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Del", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Values", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])]
);

$.registerNamedValueType(
	"*textproto.MIMEHeader",
	{Add: (receiver: any, ...args: any[]) => (MIMEHeader_Add as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Del: (receiver: any, ...args: any[]) => (MIMEHeader_Del as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (MIMEHeader_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (MIMEHeader_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (MIMEHeader_Values as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Del", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Values", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])]
);

export async function MIMEHeader_Add(h: MIMEHeader, key: string, value: string): globalThis.Promise<void> {
	key = await __goscript_reader.CanonicalMIMEHeaderKey(key)
	$.mapSet(h, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(h, key, null)[0], value))
}

export async function MIMEHeader_Set(h: MIMEHeader, key: string, value: string): globalThis.Promise<void> {
	$.mapSet(h, await __goscript_reader.CanonicalMIMEHeaderKey(key), $.arrayToSlice<string>([value]))
}

export async function MIMEHeader_Get(h: MIMEHeader, key: string): globalThis.Promise<string> {
	if (h == null) {
		return ""
	}
	let v: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, await __goscript_reader.CanonicalMIMEHeaderKey(key), null)[0]
	if ($.sliceLen(v) == 0) {
		return ""
	}
	return $.arrayIndex(v!, 0)
}

export async function MIMEHeader_Values(h: MIMEHeader, key: string): globalThis.Promise<$.Slice<string>> {
	if (h == null) {
		return null
	}
	return $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, await __goscript_reader.CanonicalMIMEHeaderKey(key), null)[0]
}

export async function MIMEHeader_Del(h: MIMEHeader, key: string): globalThis.Promise<void> {
	$.deleteMapEntry(h, await __goscript_reader.CanonicalMIMEHeaderKey(key))
}
