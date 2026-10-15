// Generated file based on weak.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_api_export from "./api_export.gs.ts"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import type * as __goscript_legacy_export from "./legacy_export.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.weakFields"])

export type weakFields = globalThis.Map<number, protoreflect.ProtoMessage | null> | null

$.registerNamedType("impl.weakFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.ProtoMessage"));

$.registerNamedValueType(
	"impl.weakFields",
	{get: (receiver: any, ...args: any[]) => (weakFields__get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ProtoMessage", /* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*impl.weakFields",
	{clear: (receiver: any, ...args: any[]) => (weakFields_clear as any)(receiver, ...$.stripGenericTypeArgs(args)), get: (receiver: any, ...args: any[]) => (weakFields__get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), set: (receiver: any, ...args: any[]) => (weakFields__set as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("clear", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]]), $.methodSignature("get", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ProtoMessage", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("set", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")], ["m", "protoreflect.ProtoMessage"]])]
);

export function weakFields__get(w: weakFields, num: protoreflect.FieldNumber): [protoreflect.ProtoMessage | null, boolean] {
	let [m, ok] = $.mapGet<number, protoreflect.ProtoMessage | null, protoreflect.ProtoMessage | null>(w, $.int(num, 32), null)
	return [m, ok]
}

export function weakFields__set(w: $.VarRef<weakFields> | null, num: protoreflect.FieldNumber, m: protoreflect.ProtoMessage | null): void {
	if ($.pointerValue<weakFields>(w) == null) {
		w!.value = $.makeMap<number, protoreflect.ProtoMessage | null>()
	}
	$.mapSet(($.pointerValue<weakFields>(w)), $.int(num, 32), m)
}

export function weakFields_clear(w: $.VarRef<weakFields> | null, num: protoreflect.FieldNumber): void {
	$.deleteMapEntry($.pointerValue<weakFields>(w), $.int(num, 32))
}
