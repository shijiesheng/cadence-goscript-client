// Generated file based on proto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"

import type * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import type * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value_pure.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.doNotImplement", "protoreflect.ProtoMessage", "protoreflect.Syntax", "protoreflect.syntax", "protoreflect.Cardinality", "protoreflect.cardinality", "protoreflect.Kind", "protoreflect.kind", "protoreflect.FieldNumbers", "protoreflect.FieldRanges", "protoreflect.EnumNumber", "protoreflect.EnumRanges", "protoreflect.Name", "protoreflect.Names", "protoreflect.FullName"])

export type doNotImplement = {
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.doNotImplement",
	null,
	[$.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type ProtoMessage = {
	ProtoReflect(): __goscript_value.Message | null | globalThis.Promise<__goscript_value.Message | null>
}

$.registerInterfaceType(
	"protoreflect.ProtoMessage",
	null,
	[$.methodSignature("ProtoReflect", [], ["protoreflect.Message"])]
);

export type Syntax = number

$.registerNamedValueType(
	"protoreflect.Syntax",
	{GoString: (receiver: any, ...args: any[]) => (Syntax_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Syntax_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*protoreflect.Syntax",
	{GoString: (receiver: any, ...args: any[]) => (Syntax_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Syntax_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type syntax = number

export type Cardinality = number

$.registerNamedValueType(
	"protoreflect.Cardinality",
	{GoString: (receiver: any, ...args: any[]) => (Cardinality_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Cardinality_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*protoreflect.Cardinality",
	{GoString: (receiver: any, ...args: any[]) => (Cardinality_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Cardinality_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Cardinality_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type cardinality = number

export type Kind = number

$.registerNamedValueType(
	"protoreflect.Kind",
	{GoString: (receiver: any, ...args: any[]) => (Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*protoreflect.Kind",
	{GoString: (receiver: any, ...args: any[]) => (Kind_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Kind_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Kind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type kind = number

export type FieldNumber = protowire.Number

export type FieldNumbers = {
	Get(i: number): FieldNumber
	Has(n: FieldNumber): boolean | globalThis.Promise<boolean>
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.FieldNumbers",
	null,
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type FieldRanges = {
	Get(i: number): FieldNumber[]
	Has(n: FieldNumber): boolean | globalThis.Promise<boolean>
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.FieldRanges",
	null,
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)]), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type EnumNumber = number

export type EnumRanges = {
	Get(i: number): EnumNumber[]
	Has(n: EnumNumber): boolean | globalThis.Promise<boolean>
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.EnumRanges",
	null,
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2)]), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type Name = string

$.registerNamedValueType(
	"protoreflect.Name",
	{IsValid: (receiver: any, ...args: any[]) => (Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*protoreflect.Name",
	{IsValid: (receiver: any, ...args: any[]) => (Name_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Names = {
	Get(i: number): Name
	Has(s: Name): boolean | globalThis.Promise<boolean>
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.Names",
	null,
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Has", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type FullName = string

$.registerNamedValueType(
	"protoreflect.FullName",
	{Append: (receiver: any, ...args: any[]) => (FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])]
);

$.registerNamedValueType(
	"*protoreflect.FullName",
	{Append: (receiver: any, ...args: any[]) => (FullName_Append as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (FullName_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (FullName_Name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (FullName_Parent as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])]
);

export const Proto2: Syntax = 2

export const Proto3: Syntax = 3

export const Editions: Syntax = 4

export const Optional: Cardinality = 1

export const Required: Cardinality = 2

export const Repeated: Cardinality = 3

export const BoolKind: Kind = 8

export const EnumKind: Kind = 14

export const Int32Kind: Kind = 5

export const Sint32Kind: Kind = 17

export const Uint32Kind: Kind = 13

export const Int64Kind: Kind = 3

export const Sint64Kind: Kind = 18

export const Uint64Kind: Kind = 4

export const Sfixed32Kind: Kind = 15

export const Fixed32Kind: Kind = 7

export const FloatKind: Kind = 2

export const Sfixed64Kind: Kind = 16

export const Fixed64Kind: Kind = 6

export const DoubleKind: Kind = 1

export const StringKind: Kind = 9

export const BytesKind: Kind = 12

export const MessageKind: Kind = 11

export const GroupKind: Kind = 10

export function Syntax_IsValid(s: Syntax): boolean {
	switch (s) {
		case 2:
		case 3:
		case 4:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Syntax_String(s: Syntax): globalThis.Promise<string> {
	switch (s) {
		case 2:
		{
			return "proto2"
			break
		}
		case 3:
		{
			return "proto3"
			break
		}
		case 4:
		{
			return "editions"
			break
		}
		default:
		{
			return fmt.Sprintf("<unknown:%d>", $.namedValueInterfaceValue<any>(s, "protoreflect.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Syntax_GoString(s: Syntax): globalThis.Promise<string> {
	switch (s) {
		case 2:
		{
			return "Proto2"
			break
		}
		case 3:
		{
			return "Proto3"
			break
		}
		default:
		{
			return fmt.Sprintf("Syntax(%d)", $.namedValueInterfaceValue<any>(s, "protoreflect.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Cardinality_IsValid(c: Cardinality): boolean {
	switch (c) {
		case 1:
		case 2:
		case 3:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Cardinality_String(c: Cardinality): globalThis.Promise<string> {
	switch (c) {
		case 1:
		{
			return "optional"
			break
		}
		case 2:
		{
			return "required"
			break
		}
		case 3:
		{
			return "repeated"
			break
		}
		default:
		{
			return fmt.Sprintf("<unknown:%d>", $.namedValueInterfaceValue<any>(c, "protoreflect.Cardinality", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Cardinality_GoString(c: Cardinality): globalThis.Promise<string> {
	switch (c) {
		case 1:
		{
			return "Optional"
			break
		}
		case 2:
		{
			return "Required"
			break
		}
		case 3:
		{
			return "Repeated"
			break
		}
		default:
		{
			return fmt.Sprintf("Cardinality(%d)", $.namedValueInterfaceValue<any>(c, "protoreflect.Cardinality", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Kind_IsValid(k: Kind): boolean {
	switch (k) {
		case 8:
		case 14:
		case 5:
		case 17:
		case 13:
		case 3:
		case 18:
		case 4:
		case 15:
		case 7:
		case 2:
		case 16:
		case 6:
		case 1:
		case 9:
		case 12:
		case 11:
		case 10:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Kind_String(k: Kind): globalThis.Promise<string> {
	switch (k) {
		case 8:
		{
			return "bool"
			break
		}
		case 14:
		{
			return "enum"
			break
		}
		case 5:
		{
			return "int32"
			break
		}
		case 17:
		{
			return "sint32"
			break
		}
		case 13:
		{
			return "uint32"
			break
		}
		case 3:
		{
			return "int64"
			break
		}
		case 18:
		{
			return "sint64"
			break
		}
		case 4:
		{
			return "uint64"
			break
		}
		case 15:
		{
			return "sfixed32"
			break
		}
		case 7:
		{
			return "fixed32"
			break
		}
		case 2:
		{
			return "float"
			break
		}
		case 16:
		{
			return "sfixed64"
			break
		}
		case 6:
		{
			return "fixed64"
			break
		}
		case 1:
		{
			return "double"
			break
		}
		case 9:
		{
			return "string"
			break
		}
		case 12:
		{
			return "bytes"
			break
		}
		case 11:
		{
			return "message"
			break
		}
		case 10:
		{
			return "group"
			break
		}
		default:
		{
			return fmt.Sprintf("<unknown:%d>", $.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Kind_GoString(k: Kind): globalThis.Promise<string> {
	switch (k) {
		case 8:
		{
			return "BoolKind"
			break
		}
		case 14:
		{
			return "EnumKind"
			break
		}
		case 5:
		{
			return "Int32Kind"
			break
		}
		case 17:
		{
			return "Sint32Kind"
			break
		}
		case 13:
		{
			return "Uint32Kind"
			break
		}
		case 3:
		{
			return "Int64Kind"
			break
		}
		case 18:
		{
			return "Sint64Kind"
			break
		}
		case 4:
		{
			return "Uint64Kind"
			break
		}
		case 15:
		{
			return "Sfixed32Kind"
			break
		}
		case 7:
		{
			return "Fixed32Kind"
			break
		}
		case 2:
		{
			return "FloatKind"
			break
		}
		case 16:
		{
			return "Sfixed64Kind"
			break
		}
		case 6:
		{
			return "Fixed64Kind"
			break
		}
		case 1:
		{
			return "DoubleKind"
			break
		}
		case 9:
		{
			return "StringKind"
			break
		}
		case 12:
		{
			return "BytesKind"
			break
		}
		case 11:
		{
			return "MessageKind"
			break
		}
		case 10:
		{
			return "GroupKind"
			break
		}
		default:
		{
			return fmt.Sprintf("Kind(%d)", $.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Name_IsValid(s: Name): boolean {
	return consumeIdent(s) == $.stringLen(s)
}

export function FullName_IsValid(s: FullName): boolean {
	let i = consumeIdent(s)
	if (i < 0) {
		return false
	}
	while ($.stringLen(s) > i) {
		if ($.indexString(s, i) != 46) {
			return false
		}
		i++
		let n = consumeIdent($.sliceStringOrBytes(s, i, undefined))
		if (n < 0) {
			return false
		}
		i = i + (n)
	}
	return true
}

export function consumeIdent(s: string): number {
	let i: number = 0
	if (($.stringLen(s) == 0) || !isLetter($.indexString(s, i))) {
		return -1
	}
	i++
	while (($.stringLen(s) > i) && isLetterDigit($.indexString(s, i))) {
		i++
	}
	return i
}

export function isLetter(c: number): boolean {
	return ((c == 95) || ((97 <= c) && (c <= 122))) || ((65 <= c) && (c <= 90))
}

export function isLetterDigit(c: number): boolean {
	return isLetter(c) || ((48 <= c) && (c <= 57))
}

export function FullName_Name(n: FullName): Name {
	{
		let i = strings.LastIndexByte(n, 46)
		if (i >= 0) {
			return $.sliceStringOrBytes(n, i + 1, undefined)
		}
	}
	return n
}

export function FullName_Parent(n: FullName): FullName {
	{
		let i = strings.LastIndexByte(n, 46)
		if (i >= 0) {
			return $.sliceStringOrBytes(n, undefined, i)
		}
	}
	return ""
}

export function FullName_Append(n: FullName, s: Name): FullName {
	if ($.stringEqual(n, "")) {
		return s
	}
	return $.concatString(($.concatString(n, ".")), s)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({GoString: (receiver: any, ...args: any[]) => (Syntax_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Syntax_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({GoString: (receiver: any, ...args: any[]) => (Cardinality_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Cardinality_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({GoString: (receiver: any, ...args: any[]) => (Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}
