// Generated file based on trieval.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as __goscript_core from "./core.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "./core.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/bidi", ["bidi.Class"])

export type Class = number

$.registerNamedValueType(
	"bidi.Class",
	{in: (receiver: any, ...args: any[]) => (__goscript_core.Class__in as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("in", [["set", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*bidi.Class",
	{in: (receiver: any, ...args: any[]) => (__goscript_core.Class__in as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("in", [["set", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [/* @__PURE__ */ $.basicType("bool")])]
);

export const L: Class = 0

export const R: Class = 1

export const EN: Class = 2

export const ES: Class = 3

export const ET: Class = 4

export const AN: Class = 5

export const CS: Class = 6

export const B: Class = 7

export const S: Class = 8

export const WS: Class = 9

export const ON: Class = 10

export const BN: Class = 11

export const NSM: Class = 12

export const AL: Class = 13

export const Control: Class = 14

export const numClass: Class = 15

export const LRO: Class = 16

export const RLO: Class = 17

export const LRE: Class = 18

export const RLE: Class = 19

export const PDF: Class = 20

export const LRI: Class = 21

export const RLI: Class = 22

export const FSI: Class = 23

export const PDI: Class = 24

export const unknownClass: Class = 18446744073709551615

export const openMask: number = 16

export const xorMaskShift: number = 5
