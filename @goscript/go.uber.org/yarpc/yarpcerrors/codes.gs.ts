// Generated file based on codes.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/yarpcerrors", ["yarpcerrors.Code"])

export type Code = number

$.registerNamedValueType(
	"yarpcerrors.Code",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Code_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Code_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*yarpcerrors.Code",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Code_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Code_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Code_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Code_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Code_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export const CodeOK: Code = 0

export const CodeCancelled: Code = 1

export const CodeUnknown: Code = 2

export const CodeInvalidArgument: Code = 3

export const CodeDeadlineExceeded: Code = 4

export const CodeNotFound: Code = 5

export const CodeAlreadyExists: Code = 6

export const CodePermissionDenied: Code = 7

export const CodeResourceExhausted: Code = 8

export const CodeFailedPrecondition: Code = 9

export const CodeAborted: Code = 10

export const CodeOutOfRange: Code = 11

export const CodeUnimplemented: Code = 12

export const CodeInternal: Code = 13

export const CodeUnavailable: Code = 14

export const CodeDataLoss: Code = 15

export const CodeUnauthenticated: Code = 16

export let _codeToString: globalThis.Map<Code, string> | null = $.makeMap<Code, string>([[0, "ok"], [1, "cancelled"], [2, "unknown"], [3, "invalid-argument"], [4, "deadline-exceeded"], [5, "not-found"], [6, "already-exists"], [7, "permission-denied"], [8, "resource-exhausted"], [9, "failed-precondition"], [10, "aborted"], [11, "out-of-range"], [12, "unimplemented"], [13, "internal"], [14, "unavailable"], [15, "data-loss"], [16, "unauthenticated"]])

export function __goscript_set__codeToString(__goscriptValue: globalThis.Map<Code, string> | null): void {
	_codeToString = __goscriptValue
}

export let _stringToCode: globalThis.Map<string, Code> | null = $.makeMap<string, Code>([["ok", 0], ["cancelled", 1], ["unknown", 2], ["invalid-argument", 3], ["deadline-exceeded", 4], ["not-found", 5], ["already-exists", 6], ["permission-denied", 7], ["resource-exhausted", 8], ["failed-precondition", 9], ["aborted", 10], ["out-of-range", 11], ["unimplemented", 12], ["internal", 13], ["unavailable", 14], ["data-loss", 15], ["unauthenticated", 16]])

export function __goscript_set__stringToCode(__goscriptValue: globalThis.Map<string, Code> | null): void {
	_stringToCode = __goscriptValue
}

export function Code_String(c: Code): string {
	let [s, ok] = $.mapGet<Code, string, string>(_codeToString, c, "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(c))
}

export function Code_MarshalText(c: Code): [$.Slice<number>, $.GoError] {
	let [s, ok] = $.mapGet<Code, string, string>(_codeToString, c, "")
	if (ok) {
		return [$.stringToBytes(s), null]
	}
	return [null, fmt.Errorf("unknown code: %d", $.basicInterfaceValue($.int(c), "int"))]
}

export function Code_UnmarshalText(c: $.VarRef<Code> | null, text: $.Slice<number>): $.GoError {
	let [i, ok] = $.mapGet<string, Code, Code>(_stringToCode, strings.ToLower($.bytesToString(text)), 0)
	if (!ok) {
		return fmt.Errorf("unknown code string: %s", $.bytesToString(text))
	}
	c!.value = i
	return null
}

export function Code_MarshalJSON(c: Code): [$.Slice<number>, $.GoError] {
	let [s, ok] = $.mapGet<Code, string, string>(_codeToString, c, "")
	if (ok) {
		return [$.stringToBytes($.concatString(($.concatString("\"", s)), "\"")), null]
	}
	return [null, fmt.Errorf("unknown code: %d", $.basicInterfaceValue($.int(c), "int"))]
}

export function Code_UnmarshalJSON(c: $.VarRef<Code> | null, text: $.Slice<number>): $.GoError {
	let s = $.bytesToString(text)
	if ((($.stringLen(s) < 3) || ($.indexString(s, 0) != 34)) || ($.indexString(s, $.stringLen(s) - 1) != 34)) {
		return fmt.Errorf("invalid code string: %s", s)
	}
	let [i, ok] = $.mapGet<string, Code, Code>(_stringToCode, strings.ToLower($.sliceStringOrBytes(s, 1, $.stringLen(s) - 1)), 0)
	if (!ok) {
		return fmt.Errorf("unknown code string: %s", s)
	}
	c!.value = i
	return null
}
