// Generated file based on uuid.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time2 from "@goscript/time/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_dce from "./dce.gs.ts"

import * as __goscript_json from "./json.gs.ts"

import * as __goscript_node from "./node.gs.ts"

import * as __goscript_sql from "./sql.gs.ts"

import * as __goscript_time from "./time.gs.ts"

import * as __goscript_util from "./util.gs.ts"

import * as __goscript_version4 from "./version4.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "./dce.gs.ts"
import "./json.gs.ts"
import "./node.gs.ts"
import "./sql.gs.ts"
import "./time.gs.ts"
import "./util.gs.ts"
import "./version4.gs.ts"

$.registerTypePackagePath("github.com/pborman/uuid", ["uuid.UUID", "uuid.Version", "uuid.Variant"])

export type UUID = $.Slice<number>

$.registerNamedType("uuid.UUID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"uuid.UUID",
	{ClockSequence: (receiver: any, ...args: any[]) => (__goscript_time.UUID_ClockSequence as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Domain: (receiver: any, ...args: any[]) => (__goscript_dce.UUID_Domain as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Id: (receiver: any, ...args: any[]) => (__goscript_dce.UUID_Id as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_json.UUID_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), NodeID: (receiver: any, ...args: any[]) => (__goscript_node.UUID_NodeID as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (UUID_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (__goscript_time.UUID_Time as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), URN: (receiver: any, ...args: any[]) => (UUID_URN as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Variant: (receiver: any, ...args: any[]) => (UUID_Variant as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Version: (receiver: any, ...args: any[]) => (UUID_Version as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ClockSequence", [], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Domain", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Domain"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Id", [], [/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("NodeID", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Time", [], [/* @__PURE__ */ $.basicType("int64", "uuid.Time"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("URN", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Variant", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Variant")]), $.methodSignature("Version", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Version"), /* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*uuid.UUID",
	{ClockSequence: (receiver: any, ...args: any[]) => (__goscript_time.UUID_ClockSequence as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Domain: (receiver: any, ...args: any[]) => (__goscript_dce.UUID_Domain as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Id: (receiver: any, ...args: any[]) => (__goscript_dce.UUID_Id as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_json.UUID_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), NodeID: (receiver: any, ...args: any[]) => (__goscript_node.UUID_NodeID as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Scan: (receiver: any, ...args: any[]) => (__goscript_sql.UUID_Scan as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (UUID_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (__goscript_time.UUID_Time as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), URN: (receiver: any, ...args: any[]) => (UUID_URN as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (__goscript_json.UUID_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), Variant: (receiver: any, ...args: any[]) => (UUID_Variant as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Version: (receiver: any, ...args: any[]) => (UUID_Version as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ClockSequence", [], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Domain", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Domain"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Id", [], [/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("NodeID", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Scan", [["src", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Time", [], [/* @__PURE__ */ $.basicType("int64", "uuid.Time"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("URN", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("Variant", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Variant")]), $.methodSignature("Version", [], [/* @__PURE__ */ $.basicType("uint8", "uuid.Version"), /* @__PURE__ */ $.basicType("bool")])]
);

export type Version = number

$.registerNamedValueType(
	"uuid.Version",
	{String: (receiver: any, ...args: any[]) => (Version_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*uuid.Version",
	{String: (receiver: any, ...args: any[]) => (Version_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Variant = number

$.registerNamedValueType(
	"uuid.Variant",
	{String: (receiver: any, ...args: any[]) => (Variant_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*uuid.Variant",
	{String: (receiver: any, ...args: any[]) => (Variant_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const Invalid: Variant = 0

export const RFC4122: Variant = 1

export const Reserved: Variant = 2

export const Microsoft: Variant = 3

export const Future: Variant = 4

export let rander: io.Reader | null = rand.Reader

export function __goscript_set_rander(__goscriptValue: io.Reader | null): void {
	rander = __goscriptValue
}

export async function New(): globalThis.Promise<string> {
	return UUID_String((await __goscript_version4.NewRandom()))
}

export function Parse(s: string): UUID {
	if ($.stringLen(s) == 45) {
		if (!$.stringEqual(strings.ToLower($.sliceStringOrBytes(s, undefined, 9)), "urn:uuid:")) {
			return (null as UUID)
		}
		s = $.sliceStringOrBytes(s, 9, undefined)
	} else {
		if ($.stringLen(s) != 36) {
			return (null as UUID)
		}
	}
	if (((($.indexString(s, 8) != 45) || ($.indexString(s, 13) != 45)) || ($.indexString(s, 18) != 45)) || ($.indexString(s, 23) != 45)) {
		return (null as UUID)
	}
	let uuid: Uint8Array = $.arrayValue(new Uint8Array(16))
	for (let __goscriptRangeTarget0 = $.arrayValue([0, 2, 4, 6, 9, 11, 14, 16, 19, 21, 24, 26, 28, 30, 32, 34]), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let x = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number)
		{
			let [v, ok] = __goscript_util.xtob($.sliceStringOrBytes(s, x, undefined))
			if (!ok) {
				return (null as UUID)
			} else {
				uuid[i] = v
			}
		}
	}
	return ($.goSlice(uuid, undefined, undefined) as UUID)
}

export function Equal(uuid1: UUID, uuid2: UUID): boolean {
	return bytes.Equal(uuid1, uuid2)
}

export function UUID_String(uuid: UUID): string {
	if ($.sliceLen((uuid as UUID)) != 16) {
		return ""
	}
	let buf: Uint8Array = $.arrayValue(new Uint8Array(36))
	encodeHex($.goSlice(buf, undefined, undefined), (uuid as UUID))
	return $.bytesToString($.goSlice(buf, undefined, undefined))
}

export function UUID_URN(uuid: UUID): string {
	if ($.sliceLen((uuid as UUID)) != 16) {
		return ""
	}
	let buf: Uint8Array = $.arrayValue(new Uint8Array(45))
	$.copy($.goSlice(buf, undefined, undefined), "urn:uuid:")
	encodeHex($.goSlice(buf, 9, undefined), (uuid as UUID))
	return $.bytesToString($.goSlice(buf, undefined, undefined))
}

export function encodeHex(dst: $.Slice<number>, uuid: UUID): void {
	hex.Encode($.goSlice(dst, undefined, undefined), $.goSlice(uuid, undefined, 4))
	$.sliceElems(dst!)[$.sliceSlot(dst!, 8)] = 45
	hex.Encode($.goSlice(dst, 9, 13), $.goSlice(uuid, 4, 6))
	$.sliceElems(dst!)[$.sliceSlot(dst!, 13)] = 45
	hex.Encode($.goSlice(dst, 14, 18), $.goSlice(uuid, 6, 8))
	$.sliceElems(dst!)[$.sliceSlot(dst!, 18)] = 45
	hex.Encode($.goSlice(dst, 19, 23), $.goSlice(uuid, 8, 10))
	$.sliceElems(dst!)[$.sliceSlot(dst!, 23)] = 45
	hex.Encode($.goSlice(dst, 24, undefined), $.goSlice(uuid, 10, undefined))
}

export function UUID_Variant(uuid: UUID): Variant {
	if ($.sliceLen((uuid as UUID)) != 16) {
		return 0
	}
	switch ((true as boolean)) {
		case $.uint(($.arrayIndex(uuid!, 8) & 0xc0), 8) == 0x80:
		{
			return 1
			break
		}
		case $.uint(($.arrayIndex(uuid!, 8) & 0xe0), 8) == 0xc0:
		{
			return 3
			break
		}
		case $.uint(($.arrayIndex(uuid!, 8) & 0xe0), 8) == 0xe0:
		{
			return 4
			break
		}
		default:
		{
			return 2
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function UUID_Version(uuid: UUID): [Version, boolean] {
	if ($.sliceLen((uuid as UUID)) != 16) {
		return [0, false]
	}
	return [$.uint($.uintShr($.arrayIndex(uuid!, 6), 4, 8), 8), true]
}

export async function Version_String(v: Version): globalThis.Promise<string> {
	if (v > 15) {
		return fmt.Sprintf("BAD_VERSION_%d", $.namedValueInterfaceValue<any>(v, "uuid.Version", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return fmt.Sprintf("VERSION_%d", $.namedValueInterfaceValue<any>(v, "uuid.Version", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function Variant_String(v: Variant): globalThis.Promise<string> {
	switch (v) {
		case 1:
		{
			return "RFC4122"
			break
		}
		case 2:
		{
			return "Reserved"
			break
		}
		case 3:
		{
			return "Microsoft"
			break
		}
		case 4:
		{
			return "Future"
			break
		}
		case 0:
		{
			return "Invalid"
			break
		}
	}
	return fmt.Sprintf("BadVariant%d", $.basicInterfaceValue($.int(v), "int"))
}

export function SetRand(r: io.Reader | null): void {
	if (r == null) {
		rander = rand.Reader
		return
	}
	rander = r
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (Version_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "uuid.Version"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
