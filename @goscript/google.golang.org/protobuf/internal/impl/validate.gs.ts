// Generated file based on validate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
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

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.ValidationStatus", "impl.validationInfo", "impl.validationType", "impl.validationState"])

export type ValidationStatus = number

$.registerNamedValueType(
	"impl.ValidationStatus",
	{String: (receiver: any, ...args: any[]) => (ValidationStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*impl.ValidationStatus",
	{String: (receiver: any, ...args: any[]) => (ValidationStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type validationType = number

export class validationInfo {
	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public get typ(): validationType {
		return this._fields.typ
	}

	public set typ(value: validationType) {
		this._fields.typ = value
	}

	public get keyType(): validationType {
		return this._fields.keyType
	}

	public set keyType(value: validationType) {
		this._fields.keyType = value
	}

	public get valType(): validationType {
		return this._fields.valType
	}

	public set valType(value: validationType) {
		this._fields.valType = value
	}

	// For non-required fields, requiredBit is 0.
	//
	// For required fields, requiredBit's nth bit is set, where n is a
	// unique index in the range [0, MessageInfo.numRequiredFields).
	//
	// If there are more than 64 required fields, requiredBit is 0.
	public get requiredBit(): bigint {
		return this._fields.requiredBit
	}

	public set requiredBit(value: bigint) {
		this._fields.requiredBit = value
	}

	public _fields: {
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
		typ: validationType
		keyType: validationType
		valType: validationType
		requiredBit: bigint
	}

	constructor(init?: Partial<{mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, typ?: validationType, keyType?: validationType, valType?: validationType, requiredBit?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null),
			typ: init?.typ ?? (0 as validationType),
			keyType: init?.keyType ?? (0 as validationType),
			valType: init?.valType ?? (0 as validationType),
			requiredBit: init?.requiredBit ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): validationInfo {
		return new validationInfo(this, true)
	}

	public __goscriptAssign(source: validationInfo): void {
		const target = this._fields
		const values = source._fields
		target.mi = values.mi
		target.typ = values.typ
		target.keyType = values.keyType
		target.valType = values.valType
		target.requiredBit = values.requiredBit
	}

	static __typeInfo = $.registerStructType(
		"impl.validationInfo",
		() => new validationInfo(),
		() => [],
		validationInfo,
		() => [{ name: "mi", key: "mi", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }, { name: "typ", key: "typ", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "keyType", key: "keyType", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "valType", key: "valType", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "requiredBit", key: "requiredBit", type: /* @__PURE__ */ $.basicType("uint64") }]
	)
}

export const ValidationUnknown: ValidationStatus = 1

export const ValidationInvalid: ValidationStatus = 2

export const ValidationValid: ValidationStatus = 3

export const validationTypeOther: validationType = 0

export const validationTypeMessage: validationType = 1

export const validationTypeGroup: validationType = 2

export const validationTypeMap: validationType = 3

export const validationTypeRepeatedVarint: validationType = 4

export const validationTypeRepeatedFixed32: validationType = 5

export const validationTypeRepeatedFixed64: validationType = 6

export const validationTypeVarint: validationType = 7

export const validationTypeFixed32: validationType = 8

export const validationTypeFixed64: validationType = 9

export const validationTypeBytes: validationType = 10

export const validationTypeUTF8String: validationType = 11

export const validationTypeMessageSetItem: validationType = 12

export async function ValidationStatus_String(v: ValidationStatus): globalThis.Promise<string> {
	switch (v) {
		case 1:
		{
			return "ValidationUnknown"
			break
		}
		case 2:
		{
			return "ValidationInvalid"
			break
		}
		case 3:
		{
			return "ValidationValid"
			break
		}
		default:
		{
			return fmt.Sprintf("ValidationStatus(%d)", $.basicInterfaceValue($.int(v), "int"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Validate(mt: protoreflect.MessageType | null, _in: protoiface.UnmarshalInput): globalThis.Promise<[protoiface.UnmarshalOutput, ValidationStatus]> {
	let out: protoiface.UnmarshalOutput = $.anonymousStructValue({"NoUnkeyedLiterals": undefined as any, "Flags": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	let __goscriptTuple0: any = $.typeAssertTuple<__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null>(mt, /* @__PURE__ */ $.pointerType("impl.MessageInfo"))
	let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		return [$.markAsStructValue($.cloneStructValue(out)), 1]
	}
	if (_in.Resolver == null) {
		_in.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
	}
	let [o, st] = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).validate(_in.Buf, 0, new __goscript_decode.unmarshalOptions({flags: _in.Flags, resolver: _in.Resolver}, true)) : __goscript_message.MessageInfo.prototype.validate.call(mi, _in.Buf, 0, new __goscript_decode.unmarshalOptions({flags: _in.Flags, resolver: _in.Resolver}, true)))
	if (o.initialized) {
		out.Flags = out.Flags | (1)
	}
	return [$.markAsStructValue($.cloneStructValue(out)), st]
}

export async function newFieldValidationInfo(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, si: __goscript_message.structInfo, fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<validationInfo> {
	const mi$: __goscript_message.MessageInfo = mi == null ? $.pointerTarget<__goscript_message.MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<__goscript_message.MessageInfo>(mi)
	let vi: validationInfo = new validationInfo(undefined, true)
	switch ((true as boolean)) {
		case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.MessageKind:
				{
					vi.typ = 1
					{
						let [ot, ok] = $.mapGet<protoreflect.FieldNumber, reflect.Type | null, reflect.Type | null>(si.oneofWrappersByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
						if (ok) {
							vi.mi = await __goscript_message.getMessageInfo(((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type)
						}
					}
					break
				}
				case protoreflect.GroupKind:
				{
					vi.typ = 2
					{
						let [ot, ok] = $.mapGet<protoreflect.FieldNumber, reflect.Type | null, reflect.Type | null>(si.oneofWrappersByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
						if (ok) {
							vi.mi = await __goscript_message.getMessageInfo(((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type)
						}
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (strs.EnforceUTF8(fd)) {
						vi.typ = 11
					}
					break
				}
			}
			break
		}
		default:
		{
			vi = $.assignStruct(vi, await newValidationInfo(fd, ft))
			break
		}
	}
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) {
		// Avoid overflow. The required field check is done with a 64-bit mask, with
		// any message containing more than 64 required fields always reported as
		// potentially uninitialized, so it is not important to get a precise count
		// of the required fields past 64.
		if ((mi$ as __goscript_message.MessageInfo).coderMessageInfo.numRequiredFields < 255) {
			;(mi$ as __goscript_message.MessageInfo).coderMessageInfo.numRequiredFields = (((mi$ as __goscript_message.MessageInfo).coderMessageInfo.numRequiredFields + 1) & 0xff)
			vi.requiredBit = $.uint64Shl(1n, ((((mi$ as __goscript_message.MessageInfo).coderMessageInfo.numRequiredFields - 1) & 0xff)))
		}
	}
	return (vi).clone()
}

export async function newValidationInfo(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<validationInfo> {
	let vi: validationInfo = new validationInfo(undefined, true)
	switch ((true as boolean)) {
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.MessageKind:
				{
					vi.typ = 1
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
						vi.mi = await __goscript_message.getMessageInfo((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					break
				}
				case protoreflect.GroupKind:
				{
					vi.typ = 2
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
						vi.mi = await __goscript_message.getMessageInfo((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					break
				}
				case protoreflect.StringKind:
				{
					vi.typ = 10
					if (strs.EnforceUTF8(fd)) {
						vi.typ = 11
					}
					break
				}
				default:
				{
					switch ($.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0]) {
						case protowire.VarintType:
						{
							vi.typ = 4
							break
						}
						case protowire.Fixed32Type:
						{
							vi.typ = 5
							break
						}
						case protowire.Fixed64Type:
						{
							vi.typ = 6
							break
						}
					}
					break
				}
			}
			break
		}
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			vi.typ = 3
			switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.StringKind:
				{
					if (strs.EnforceUTF8(fd)) {
						vi.keyType = 11
					}
					break
				}
			}
			switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.MessageKind:
				{
					vi.valType = 1
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21) {
						vi.mi = await __goscript_message.getMessageInfo((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (strs.EnforceUTF8(fd)) {
						vi.valType = 11
					}
					break
				}
			}
			break
		}
		default:
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.MessageKind:
				{
					vi.typ = 1
					if (!(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						vi.mi = await __goscript_message.getMessageInfo(ft)
					}
					break
				}
				case protoreflect.GroupKind:
				{
					vi.typ = 2
					vi.mi = await __goscript_message.getMessageInfo(ft)
					break
				}
				case protoreflect.StringKind:
				{
					vi.typ = 10
					if (strs.EnforceUTF8(fd)) {
						vi.typ = 11
					}
					break
				}
				default:
				{
					switch ($.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0]) {
						case protowire.VarintType:
						{
							vi.typ = 7
							break
						}
						case protowire.Fixed32Type:
						{
							vi.typ = 8
							break
						}
						case protowire.Fixed64Type:
						{
							vi.typ = 9
							break
						}
						case protowire.BytesType:
						{
							vi.typ = 10
							break
						}
					}
					break
				}
			}
			break
		}
	}
	return (vi).clone()
}

var __goscriptAwait: any
