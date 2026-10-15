// Generated file based on trieval.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as bidirule from "@goscript/golang.org/x/text/secure/bidirule/index.js"

import * as bidi from "@goscript/golang.org/x/text/unicode/bidi/index.js"

import * as norm from "@goscript/golang.org/x/text/unicode/norm/index.js"

import * as __goscript_idna10_0_0 from "./idna10.0.0.gs.ts"

import * as __goscript_tables15_0_0 from "./tables15.0.0.gs.ts"

import * as __goscript_trie13_0_0 from "./trie13.0.0.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/text/secure/bidirule/index.js"
import "@goscript/golang.org/x/text/unicode/bidi/index.js"
import "@goscript/golang.org/x/text/unicode/norm/index.js"
import "./idna10.0.0.gs.ts"
import "./tables15.0.0.gs.ts"
import "./trie13.0.0.gs.ts"

$.registerTypePackagePath("golang.org/x/net/idna", ["idna.info", "idna.category"])

export type info = number

$.registerNamedValueType(
	"idna.info",
	{appendMapping: (receiver: any, ...args: any[]) => (__goscript_trie13_0_0.info_appendMapping as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), category: (receiver: any, ...args: any[]) => (info_category as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isBidi: (receiver: any, ...args: any[]) => (__goscript_idna10_0_0.info_isBidi as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isMapped: (receiver: any, ...args: any[]) => (info_isMapped as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isModifier: (receiver: any, ...args: any[]) => (info_isModifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isViramaModifier: (receiver: any, ...args: any[]) => (info_isViramaModifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), joinType: (receiver: any, ...args: any[]) => (info_joinType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("appendMapping", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("category", [], [/* @__PURE__ */ $.basicType("uint16", "idna.category")]), $.methodSignature("isBidi", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isMapped", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isModifier", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isViramaModifier", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("joinType", [], [/* @__PURE__ */ $.basicType("uint16", "idna.info")])]
);

$.registerNamedValueType(
	"*idna.info",
	{appendMapping: (receiver: any, ...args: any[]) => (__goscript_trie13_0_0.info_appendMapping as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), category: (receiver: any, ...args: any[]) => (info_category as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isBidi: (receiver: any, ...args: any[]) => (__goscript_idna10_0_0.info_isBidi as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isMapped: (receiver: any, ...args: any[]) => (info_isMapped as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isModifier: (receiver: any, ...args: any[]) => (info_isModifier as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isViramaModifier: (receiver: any, ...args: any[]) => (info_isViramaModifier as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), joinType: (receiver: any, ...args: any[]) => (info_joinType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("appendMapping", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("category", [], [/* @__PURE__ */ $.basicType("uint16", "idna.category")]), $.methodSignature("isBidi", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isMapped", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isModifier", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isViramaModifier", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("joinType", [], [/* @__PURE__ */ $.basicType("uint16", "idna.info")])]
);

export type category = number

export const catSmallMask: number = 3

export const catBigMask: number = 248

export const indexShift: number = 3

export const xorBit: number = 4

export const inlineXOR: number = 57344

export const joinShift: number = 8

export const joinMask: number = 7

export const attributesMask: number = 6144

export const viramaModifier: number = 6144

export const modifier: number = 4096

export const rtl: number = 2048

export const mayNeedNorm: number = 8192

export const _unknown: category = 0

export const mapped: category = 1

export const disallowedSTD3Mapped: category = 2

export const deviation: category = 3

export const valid: category = 8

export const validNV8: category = 24

export const validXV8: category = 40

export const disallowed: category = 64

export const disallowedSTD3Valid: category = 128

export const ignored: category = 192

export const joiningL: number = 1

export const joiningD: number = 2

export const joiningT: number = 3

export const joiningR: number = 4

export const joinZWJ: number = 5

export const joinZWNJ: number = 6

export const joinVirama: number = 7

export const numJoinTypes: number = 8

export function info_isMapped(c: info): boolean {
	return $.uint((c & 0x3), 16) != 0
}

export function info_category(c: info): category {
	let small = $.uint(c & 3, 16)
	if (small != 0) {
		return $.uint(small, 16)
	}
	return $.uint(c & 248, 16)
}

export function info_joinType(c: info): info {
	if (info_isMapped(c)) {
		return 0
	}
	return $.uint(($.uintShr(c, 8, 16)) & 7, 16)
}

export function info_isModifier(c: info): boolean {
	return $.uint((c & (4096 | 3)), 16) == 4096
}

export function info_isViramaModifier(c: info): boolean {
	return $.uint((c & (6144 | 3)), 16) == 6144
}
