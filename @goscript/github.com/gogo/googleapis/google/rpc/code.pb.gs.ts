// Generated file based on code.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("github.com/gogo/googleapis/google/rpc", ["rpc.Code"])

export type Code = number

$.registerNamedValueType(
	"rpc.Code",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Code_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*rpc.Code",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Code_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Code_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const OK: Code = 0

export const CANCELLED: Code = 1

export const UNKNOWN: Code = 2

export const INVALID_ARGUMENT: Code = 3

export const DEADLINE_EXCEEDED: Code = 4

export const NOT_FOUND: Code = 5

export const ALREADY_EXISTS: Code = 6

export const PERMISSION_DENIED: Code = 7

export const UNAUTHENTICATED: Code = 16

export const RESOURCE_EXHAUSTED: Code = 8

export const FAILED_PRECONDITION: Code = 9

export const ABORTED: Code = 10

export const OUT_OF_RANGE: Code = 11

export const UNIMPLEMENTED: Code = 12

export const INTERNAL: Code = 13

export const UNAVAILABLE: Code = 14

export const DATA_LOSS: Code = 15

export let Code_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "OK"], [1, "CANCELLED"], [2, "UNKNOWN"], [3, "INVALID_ARGUMENT"], [4, "DEADLINE_EXCEEDED"], [5, "NOT_FOUND"], [6, "ALREADY_EXISTS"], [7, "PERMISSION_DENIED"], [16, "UNAUTHENTICATED"], [8, "RESOURCE_EXHAUSTED"], [9, "FAILED_PRECONDITION"], [10, "ABORTED"], [11, "OUT_OF_RANGE"], [12, "UNIMPLEMENTED"], [13, "INTERNAL"], [14, "UNAVAILABLE"], [15, "DATA_LOSS"]])

export function __goscript_set_Code_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Code_name = __goscriptValue
}

export let Code_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["OK", 0], ["CANCELLED", 1], ["UNKNOWN", 2], ["INVALID_ARGUMENT", 3], ["DEADLINE_EXCEEDED", 4], ["NOT_FOUND", 5], ["ALREADY_EXISTS", 6], ["PERMISSION_DENIED", 7], ["UNAUTHENTICATED", 16], ["RESOURCE_EXHAUSTED", 8], ["FAILED_PRECONDITION", 9], ["ABORTED", 10], ["OUT_OF_RANGE", 11], ["UNIMPLEMENTED", 12], ["INTERNAL", 13], ["UNAVAILABLE", 14], ["DATA_LOSS", 15]])

export function __goscript_set_Code_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Code_value = __goscriptValue
}

export function Code_EnumDescriptor(recv: Code): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_fe593a732623ccf0, $.arrayToSlice<number>([0])]
}

async function __goscriptInit0(): globalThis.Promise<void> {
	proto.RegisterEnum("google.rpc.Code", Code_name, Code_value)
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/rpc/code.proto", fileDescriptor_fe593a732623ccf0)
}

export let fileDescriptor_fe593a732623ccf0: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 68, 145, 61, 110, 19, 65, 20, 199, 61, 118, 112, 226, 241, 215, 203, 132, 64, 55, 7, 160, 112, 10, 78, 240, 188, 243, 156, 140, 50, 126, 179, 154, 157, 9, 1, 33, 173, 196, 198, 74, 3, 90, 203, 226, 0, 156, 133, 138, 27, 112, 133, 148, 41, 41, 241, 166, 161, 116, 73, 137, 6, 10, 218, 159, 222, 199, 255, 67, 158, 223, 183, 237, 253, 199, 205, 197, 110, 219, 92, 52, 237, 221, 102, 177, 221, 181, 159, 91, 37, 255, 225, 197, 110, 219, 188, 250, 222, 151, 71, 69, 123, 183, 81, 67, 217, 247, 215, 208, 83, 83, 57, 42, 144, 11, 114, 142, 12, 8, 53, 150, 199, 137, 175, 217, 191, 97, 232, 171, 231, 18, 44, 223, 160, 179, 166, 198, 112, 153, 214, 196, 17, 6, 234, 92, 158, 26, 66, 227, 44, 83, 77, 183, 5, 145, 33, 3, 71, 249, 16, 251, 88, 175, 124, 98, 3, 207, 148, 146, 51, 116, 129, 208, 188, 173, 233, 214, 86, 177, 130, 97, 222, 44, 41, 172, 109, 85, 89, 207, 181, 33, 182, 100, 224, 88, 157, 201, 121, 98, 76, 241, 138, 56, 218, 2, 35, 25, 0, 245, 66, 170, 64, 149, 79, 161, 200, 95, 174, 48, 85, 153, 159, 168, 151, 242, 108, 133, 214, 145, 169, 203, 64, 133, 103, 99, 163, 245, 12, 163, 172, 28, 151, 62, 228, 41, 169, 64, 78, 124, 138, 181, 95, 213, 1, 249, 146, 96, 172, 78, 229, 52, 177, 93, 151, 142, 178, 13, 50, 48, 81, 19, 121, 98, 57, 82, 96, 116, 48, 85, 115, 57, 78, 140, 55, 104, 29, 46, 29, 193, 44, 27, 50, 24, 177, 118, 190, 170, 96, 190, 124, 255, 184, 215, 189, 31, 123, 221, 59, 236, 181, 248, 189, 215, 226, 75, 167, 197, 183, 78, 139, 135, 78, 139, 199, 78, 139, 159, 157, 22, 191, 58, 221, 59, 100, 254, 164, 197, 195, 147, 22, 114, 214, 180, 159, 22, 255, 243, 95, 142, 114, 248, 101, 174, 165, 20, 239, 6, 187, 109, 243, 181, 63, 8, 101, 241, 97, 248, 183, 170, 215, 127, 2, 0, 0, 255, 255, 3, 212, 39, 255, 195, 1, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_fe593a732623ccf0(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_fe593a732623ccf0 = __goscriptValue
}

export function Code_String(x: Code): string {
	let [s, ok] = $.mapGet<number, string, string>(Code_name, $.int(x, 32), "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(x))
}

export { __goscriptInit0 }

export { __goscriptInit1 }
