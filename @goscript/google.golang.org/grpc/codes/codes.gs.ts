// Generated file based on codes.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_code_string from "./code_string.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/fmt/index.js"
import "./code_string.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/codes", ["codes.Code"])

export type Code = number

$.registerNamedValueType(
	"codes.Code",
	{String: (receiver: any, ...args: any[]) => (__goscript_code_string.Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*codes.Code",
	{String: (receiver: any, ...args: any[]) => (__goscript_code_string.Code_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Code_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export const OK: Code = 0

export const Canceled: Code = 1

export const Unknown: Code = 2

export const InvalidArgument: Code = 3

export const DeadlineExceeded: Code = 4

export const NotFound: Code = 5

export const AlreadyExists: Code = 6

export const PermissionDenied: Code = 7

export const ResourceExhausted: Code = 8

export const FailedPrecondition: Code = 9

export const Aborted: Code = 10

export const OutOfRange: Code = 11

export const Unimplemented: Code = 12

export const Internal: Code = 13

export const Unavailable: Code = 14

export const DataLoss: Code = 15

export const Unauthenticated: Code = 16

export const _maxCode: number = 17

export let strToCode: globalThis.Map<string, Code> | null = $.makeMap<string, Code>([["\"OK\"", 0], ["\"CANCELLED\"", 1], ["\"UNKNOWN\"", 2], ["\"INVALID_ARGUMENT\"", 3], ["\"DEADLINE_EXCEEDED\"", 4], ["\"NOT_FOUND\"", 5], ["\"ALREADY_EXISTS\"", 6], ["\"PERMISSION_DENIED\"", 7], ["\"RESOURCE_EXHAUSTED\"", 8], ["\"FAILED_PRECONDITION\"", 9], ["\"ABORTED\"", 10], ["\"OUT_OF_RANGE\"", 11], ["\"UNIMPLEMENTED\"", 12], ["\"INTERNAL\"", 13], ["\"UNAVAILABLE\"", 14], ["\"DATA_LOSS\"", 15], ["\"UNAUTHENTICATED\"", 16]])

export function __goscript_set_strToCode(__goscriptValue: globalThis.Map<string, Code> | null): void {
	strToCode = __goscriptValue
}

export function Code_UnmarshalJSON(c: $.VarRef<Code> | null, b: $.Slice<number>): $.GoError {
	// From json.Unmarshaler: By convention, to approximate the behavior of
	// Unmarshal itself, Unmarshalers implement UnmarshalJSON([]byte("null")) as
	// a no-op.
	if ($.stringEqual($.bytesToString(b), "null")) {
		return null
	}
	if (c == null) {
		return fmt.Errorf("nil receiver passed to UnmarshalJSON")
	}

	{
		let [ci, err] = strconv.ParseUint($.bytesToString(b), 10, 32)
		if (err == null) {
			if (ci >= 17n) {
				return fmt.Errorf("invalid code: %d", $.basicInterfaceValue(ci, "uint64"))
			}

			c!.value = $.uint(ci, 32)
			return null
		}
	}

	{
		let [jc, ok] = $.mapGet<string, Code, Code>(strToCode, $.bytesToString(b), 0)
		if (ok) {
			c!.value = jc
			return null
		}
	}
	return fmt.Errorf("invalid code: %q", $.bytesToString(b))
}
