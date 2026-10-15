// Generated file based on tos.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_tos_string from "./tos_string.gs.ts"
import "@goscript/fmt/index.js"
import "./tos_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go/tos", ["tos.ToS"])

export type ToS = number

$.registerNamedValueType(
	"tos.ToS",
	{MarshalText: (receiver: any, ...args: any[]) => (__goscript_tos_string.ToS_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

$.registerNamedValueType(
	"*tos.ToS",
	{MarshalText: (receiver: any, ...args: any[]) => (__goscript_tos_string.ToS_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (__goscript_tos_string.ToS_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("UnmarshalText", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export const CS3: ToS = 24

export const CS4: ToS = 32

export const CS5: ToS = 40

export const CS6: ToS = 48

export const CS7: ToS = 56

export const AF11: ToS = 10

export const AF12: ToS = 12

export const AF13: ToS = 14

export const AF21: ToS = 18

export const AF22: ToS = 20

export const AF23: ToS = 22

export const AF31: ToS = 26

export const AF32: ToS = 28

export const AF33: ToS = 30

export const AF41: ToS = 34

export const AF42: ToS = 36

export const AF43: ToS = 38

export const EF: ToS = 46

export const Lowdelay: ToS = 16

export const Throughput: ToS = 8

export const Reliability: ToS = 4

export const Lowcost: ToS = 2
