// Generated file based on type.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TType"])

export type TType = number

$.registerNamedValueType(
	"thrift.TType",
	{String: (receiver: any, ...args: any[]) => (TType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*thrift.TType",
	{String: (receiver: any, ...args: any[]) => (TType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const STOP: number = 0

export const VOID: number = 1

export const BOOL: number = 2

export const BYTE: number = 3

export const I08: number = 3

export const DOUBLE: number = 4

export const I16: number = 6

export const I32: number = 8

export const I64: number = 10

export const STRING: number = 11

export const UTF7: number = 11

export const STRUCT: number = 12

export const MAP: number = 13

export const SET: number = 14

export const LIST: number = 15

export const UTF8: number = 16

export const UTF16: number = 17

export let typeNames: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "STOP"], [1, "VOID"], [2, "BOOL"], [3, "BYTE"], [4, "DOUBLE"], [6, "I16"], [8, "I32"], [10, "I64"], [11, "STRING"], [12, "STRUCT"], [13, "MAP"], [14, "SET"], [15, "LIST"], [16, "UTF8"], [17, "UTF16"]])

export function __goscript_set_typeNames(__goscriptValue: globalThis.Map<number, string> | null): void {
	typeNames = __goscriptValue
}

export function TType_String(p: TType): string {
	{
		let [s, ok] = $.mapGet<number, string, string>(typeNames, $.int(p), "")
		if (ok) {
			return s
		}
	}
	return "Unknown"
}
