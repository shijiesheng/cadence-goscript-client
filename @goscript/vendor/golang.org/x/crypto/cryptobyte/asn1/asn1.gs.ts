// Generated file based on asn1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("vendor/golang.org/x/crypto/cryptobyte/asn1", ["asn1.Tag"])

export type Tag = number

$.registerNamedValueType(
	"asn1.Tag",
	{Constructed: (receiver: any, ...args: any[]) => (Tag_Constructed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ContextSpecific: (receiver: any, ...args: any[]) => (Tag_ContextSpecific as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Constructed", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]), $.methodSignature("ContextSpecific", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")])]
);

$.registerNamedValueType(
	"*asn1.Tag",
	{Constructed: (receiver: any, ...args: any[]) => (Tag_Constructed as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ContextSpecific: (receiver: any, ...args: any[]) => (Tag_ContextSpecific as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Constructed", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]), $.methodSignature("ContextSpecific", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")])]
);

export const classConstructed: number = 32

export const classContextSpecific: number = 128

export const BOOLEAN: Tag = 1

export const INTEGER: Tag = 2

export const BIT_STRING: Tag = 3

export const OCTET_STRING: Tag = 4

export const NULL: Tag = 5

export const OBJECT_IDENTIFIER: Tag = 6

export const ENUM: Tag = 10

export const UTF8String: Tag = 12

export const SEQUENCE: Tag = 48

export const SET: Tag = 49

export const PrintableString: Tag = 19

export const T61String: Tag = 20

export const IA5String: Tag = 22

export const UTCTime: Tag = 23

export const GeneralizedTime: Tag = 24

export const GeneralString: Tag = 27

export function Tag_Constructed(t: Tag): Tag {
	return $.uint(t | 32, 8)
}

export function Tag_ContextSpecific(t: Tag): Tag {
	return $.uint(t | 128, 8)
}
