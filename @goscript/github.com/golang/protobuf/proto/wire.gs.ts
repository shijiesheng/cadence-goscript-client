// Generated file based on wire.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoV2 from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_deprecated from "./deprecated.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./deprecated.gs.ts"
import "./proto.gs.ts"

export async function Size(m: __goscript_proto.Message | null): globalThis.Promise<number> {
	if (m == null) {
		return 0
	}
	let mi = await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null))
	return protoV2.Size(mi)
}

export async function Marshal(m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple0: any = await marshalAppend(null, m, false)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (b == null) {
		b = zeroBytes
	}
	return [b, err]
}

export let zeroBytes: $.Slice<number> = $.makeSlice<number>(0, 0, "byte")

export function __goscript_set_zeroBytes(__goscriptValue: $.Slice<number>): void {
	zeroBytes = __goscriptValue
}

export async function marshalAppend(buf: $.Slice<number>, m: __goscript_proto.Message | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (m == null) {
		return [null, __goscript_deprecated.ErrNil]
	}
	let mi = await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null))
	let __goscriptTuple1: any = await $.markAsStructValue($.cloneStructValue(new protoV2.MarshalOptions({Deterministic: deterministic, AllowPartial: true}, true))).MarshalAppend(buf, mi)
	let nbuf: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [buf, err]
	}
	if ($.sliceLen(buf) == $.sliceLen(nbuf)) {
		if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? (mi as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mi)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [buf, __goscript_deprecated.ErrNil]
		}
	}
	return [nbuf, await __goscript_proto.checkRequiredNotSet(mi)]
}

export async function Unmarshal(b: $.Slice<number>, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoiface.MessageV1, null>) : $.pointerValue<Exclude<protoiface.MessageV1, null>>(m)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return UnmarshalMerge(b, m)
}

export async function UnmarshalMerge(b: $.Slice<number>, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	let mi = await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null))
	let [out, err] = await $.markAsStructValue($.cloneStructValue(new protoV2.UnmarshalOptions({AllowPartial: true, Merge: true}, true))).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: (__goscriptAwait = (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? (mi as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mi)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Buf: b, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	if (err != null) {
		return err
	}
	if ($.uint((out.Flags & protoiface.UnmarshalInitialized), 8) > 0) {
		return null
	}
	return __goscript_proto.checkRequiredNotSet(mi)
}

var __goscriptAwait: any
