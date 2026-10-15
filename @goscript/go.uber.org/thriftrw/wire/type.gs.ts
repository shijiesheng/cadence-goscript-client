// Generated file based on type.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_type_string from "./type_string.gs.ts"
import "@goscript/strconv/index.js"
import "./type_string.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/wire", ["wire.Type"])

export type Type = number

$.registerNamedValueType(
	"wire.Type",
	{String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*wire.Type",
	{String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const TBool: Type = 2

export const TI8: Type = 3

export const TDouble: Type = 4

export const TI16: Type = 6

export const TI32: Type = 8

export const TI64: Type = 10

export const TBinary: Type = 11

export const TStruct: Type = 12

export const TMap: Type = 13

export const TSet: Type = 14

export const TList: Type = 15
