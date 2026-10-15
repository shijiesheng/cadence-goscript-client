// Generated file based on binarylog.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as durationpb from "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"

import * as timestamppb from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as filetype from "@goscript/google.golang.org/protobuf/internal/filetype/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"
import "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/filetype/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("google.golang.org/grpc/binarylog/grpc_binarylog_v1", ["grpc_binarylog_v1.GrpcLogEntry_EventType", "grpc_binarylog_v1.GrpcLogEntry_Logger", "grpc_binarylog_v1.Address_Type", "grpc_binarylog_v1.GrpcLogEntry", "grpc_binarylog_v1.isGrpcLogEntry_Payload", "grpc_binarylog_v1.GrpcLogEntry_ClientHeader", "grpc_binarylog_v1.GrpcLogEntry_ServerHeader", "grpc_binarylog_v1.GrpcLogEntry_Message", "grpc_binarylog_v1.GrpcLogEntry_Trailer", "grpc_binarylog_v1.ClientHeader", "grpc_binarylog_v1.ServerHeader", "grpc_binarylog_v1.Trailer", "grpc_binarylog_v1.Message", "grpc_binarylog_v1.Metadata", "grpc_binarylog_v1.MetadataEntry", "grpc_binarylog_v1.Address", "grpc_binarylog_v1.x"])

export type GrpcLogEntry_EventType = number

$.registerNamedValueType(
	"grpc_binarylog_v1.GrpcLogEntry_EventType",
	{Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*grpc_binarylog_v1.GrpcLogEntry_EventType",
	{Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

export type GrpcLogEntry_Logger = number

$.registerNamedValueType(
	"grpc_binarylog_v1.GrpcLogEntry_Logger",
	{Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*grpc_binarylog_v1.GrpcLogEntry_Logger",
	{Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

export type Address_Type = number

$.registerNamedValueType(
	"grpc_binarylog_v1.Address_Type",
	{Descriptor: (receiver: any, ...args: any[]) => (Address_Type_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Address_Type_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Address_Type_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Address_Type_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Address_Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Address_Type_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*grpc_binarylog_v1.Address_Type",
	{Descriptor: (receiver: any, ...args: any[]) => (Address_Type_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Address_Type_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Address_Type_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Address_Type_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Address_Type_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Address_Type_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

export type isGrpcLogEntry_Payload = {
	isGrpcLogEntry_Payload(): void
}

$.registerInterfaceType(
	"grpc_binarylog_v1.isGrpcLogEntry_Payload",
	null,
	[$.methodSignature("isGrpcLogEntry_Payload")]
);

export class GrpcLogEntry {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// The timestamp of the binary log message
	public get Timestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		return this._fields.Timestamp
	}

	public set Timestamp(value: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null) {
		this._fields.Timestamp = value
	}

	// Uniquely identifies a call. The value must not be 0 in order to disambiguate
	// from an unset value.
	// Each call may have several log entries, they will all have the same call_id.
	// Nothing is guaranteed about their value other than they are unique across
	// different RPCs in the same gRPC process.
	public get CallId(): bigint {
		return this._fields.CallId
	}

	public set CallId(value: bigint) {
		this._fields.CallId = value
	}

	// The entry sequence id for this call. The first GrpcLogEntry has a
	// value of 1, to disambiguate from an unset value. The purpose of
	// this field is to detect missing entries in environments where
	// durability or ordering is not guaranteed.
	public get SequenceIdWithinCall(): bigint {
		return this._fields.SequenceIdWithinCall
	}

	public set SequenceIdWithinCall(value: bigint) {
		this._fields.SequenceIdWithinCall = value
	}

	public get Type(): GrpcLogEntry_EventType {
		return this._fields.Type
	}

	public set Type(value: GrpcLogEntry_EventType) {
		this._fields.Type = value
	}

	public get Logger(): GrpcLogEntry_Logger {
		return this._fields.Logger
	}

	public set Logger(value: GrpcLogEntry_Logger) {
		this._fields.Logger = value
	}

	// The logger uses one of the following fields to record the payload,
	// according to the type of the log entry.
	//
	// Types that are assignable to Payload:
	//
	// 	*GrpcLogEntry_ClientHeader
	// 	*GrpcLogEntry_ServerHeader
	// 	*GrpcLogEntry_Message
	// 	*GrpcLogEntry_Trailer
	public get Payload(): isGrpcLogEntry_Payload | null {
		return this._fields.Payload
	}

	public set Payload(value: isGrpcLogEntry_Payload | null) {
		this._fields.Payload = value
	}

	// true if payload does not represent the full message or metadata.
	public get PayloadTruncated(): boolean {
		return this._fields.PayloadTruncated
	}

	public set PayloadTruncated(value: boolean) {
		this._fields.PayloadTruncated = value
	}

	// Peer address information, will only be recorded on the first
	// incoming event. On client side, peer is logged on
	// EVENT_TYPE_SERVER_HEADER normally or EVENT_TYPE_SERVER_TRAILER in
	// the case of trailers-only. On server side, peer is always
	// logged on EVENT_TYPE_CLIENT_HEADER.
	public get Peer(): Address | $.VarRef<Address> | null {
		return this._fields.Peer
	}

	public set Peer(value: Address | $.VarRef<Address> | null) {
		this._fields.Peer = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Timestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null
		CallId: bigint
		SequenceIdWithinCall: bigint
		Type: GrpcLogEntry_EventType
		Logger: GrpcLogEntry_Logger
		Payload: isGrpcLogEntry_Payload | null
		PayloadTruncated: boolean
		Peer: Address | $.VarRef<Address> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Timestamp?: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null, CallId?: bigint, SequenceIdWithinCall?: bigint, Type?: GrpcLogEntry_EventType, Logger?: GrpcLogEntry_Logger, Payload?: isGrpcLogEntry_Payload | null, PayloadTruncated?: boolean, Peer?: Address | $.VarRef<Address> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Timestamp: init?.Timestamp ?? (null! as timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null),
			CallId: init?.CallId ?? (0n as bigint),
			SequenceIdWithinCall: init?.SequenceIdWithinCall ?? (0n as bigint),
			Type: init?.Type ?? (0 as GrpcLogEntry_EventType),
			Logger: init?.Logger ?? (0 as GrpcLogEntry_Logger),
			Payload: init?.Payload ?? (null! as isGrpcLogEntry_Payload | null),
			PayloadTruncated: init?.PayloadTruncated ?? (false as boolean),
			Peer: init?.Peer ?? (null! as Address | $.VarRef<Address> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GrpcLogEntry {
		return new GrpcLogEntry(this, true)
	}

	public __goscriptAssign(source: GrpcLogEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Timestamp = values.Timestamp
		target.CallId = values.CallId
		target.SequenceIdWithinCall = values.SequenceIdWithinCall
		target.Type = values.Type
		target.Logger = values.Logger
		target.Payload = $.assignFieldValue(target.Payload, values.Payload, "grpc_binarylog_v1.isGrpcLogEntry_Payload")
		target.PayloadTruncated = values.PayloadTruncated
		target.Peer = values.Peer
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetCallId(): bigint {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).CallId
		}
		return 0n
	}

	public GetClientHeader(): ClientHeader | $.VarRef<ClientHeader> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		let __goscriptShadow0 = x
		{
			let __goscriptTuple0: any = $.typeAssertTuple<GrpcLogEntry_ClientHeader | $.VarRef<GrpcLogEntry_ClientHeader> | null>((__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as GrpcLogEntry).GetPayload() : GrpcLogEntry.prototype.GetPayload.call(__goscriptShadow0)), /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ClientHeader"))
			let __goscriptShadow1: GrpcLogEntry_ClientHeader | $.VarRef<GrpcLogEntry_ClientHeader> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return $.pointerValue<GrpcLogEntry_ClientHeader>(__goscriptShadow1).ClientHeader
			}
		}
		return null
	}

	public GetLogger(): GrpcLogEntry_Logger {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).Logger
		}
		return 0
	}

	public GetMessage(): Message | $.VarRef<Message> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		let __goscriptShadow2 = x
		{
			let __goscriptTuple1: any = $.typeAssertTuple<GrpcLogEntry_Message | $.VarRef<GrpcLogEntry_Message> | null>((__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? ((__goscriptShadow2 as any) as GrpcLogEntry).GetPayload() : GrpcLogEntry.prototype.GetPayload.call(__goscriptShadow2)), /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message"))
			let __goscriptShadow3: GrpcLogEntry_Message | $.VarRef<GrpcLogEntry_Message> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.pointerValue<GrpcLogEntry_Message>(__goscriptShadow3).Message
			}
		}
		return null
	}

	public GetPayload(): isGrpcLogEntry_Payload | null {
		const m: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (m != null) {
			return $.pointerValue<GrpcLogEntry>(m).Payload
		}
		return null
	}

	public GetPayloadTruncated(): boolean {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).PayloadTruncated
		}
		return false
	}

	public GetPeer(): Address | $.VarRef<Address> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).Peer
		}
		return null
	}

	public GetSequenceIdWithinCall(): bigint {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).SequenceIdWithinCall
		}
		return 0n
	}

	public GetServerHeader(): ServerHeader | $.VarRef<ServerHeader> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		let __goscriptShadow4 = x
		{
			let __goscriptTuple2: any = $.typeAssertTuple<GrpcLogEntry_ServerHeader | $.VarRef<GrpcLogEntry_ServerHeader> | null>((__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? ((__goscriptShadow4 as any) as GrpcLogEntry).GetPayload() : GrpcLogEntry.prototype.GetPayload.call(__goscriptShadow4)), /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ServerHeader"))
			let __goscriptShadow5: GrpcLogEntry_ServerHeader | $.VarRef<GrpcLogEntry_ServerHeader> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return $.pointerValue<GrpcLogEntry_ServerHeader>(__goscriptShadow5).ServerHeader
			}
		}
		return null
	}

	public GetTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).Timestamp
		}
		return null
	}

	public GetTrailer(): Trailer | $.VarRef<Trailer> | null {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		let __goscriptShadow6 = x
		{
			let __goscriptTuple3: any = $.typeAssertTuple<GrpcLogEntry_Trailer | $.VarRef<GrpcLogEntry_Trailer> | null>((__goscriptShadow6 !== null && (__goscriptShadow6 as any).__isVarRef !== true && (__goscriptShadow6 as any).__goValue === undefined ? ((__goscriptShadow6 as any) as GrpcLogEntry).GetPayload() : GrpcLogEntry.prototype.GetPayload.call(__goscriptShadow6)), /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Trailer"))
			let __goscriptShadow7: GrpcLogEntry_Trailer | $.VarRef<GrpcLogEntry_Trailer> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return $.pointerValue<GrpcLogEntry_Trailer>(__goscriptShadow7).Trailer
			}
		}
		return null
	}

	public GetType(): GrpcLogEntry_EventType {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		if (x != null) {
			return $.pointerValue<GrpcLogEntry>(x).Type
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry"))))
	}

	public Reset(): void {
		let x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		$.assignStruct($.pointerValue<GrpcLogEntry>(x), $.markAsStructValue(new GrpcLogEntry()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 0)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.GrpcLogEntry",
		() => new GrpcLogEntry(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCallId", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetClientHeader", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")], true), $.methodSignature("GetLogger", [], [/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger")], true), $.methodSignature("GetMessage", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")], true), $.methodSignature("GetPayload", [], ["grpc_binarylog_v1.isGrpcLogEntry_Payload"], true), $.methodSignature("GetPayloadTruncated", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetPeer", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")], true), $.methodSignature("GetSequenceIdWithinCall", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetServerHeader", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")], true), $.methodSignature("GetTimestamp", [], [/* @__PURE__ */ $.pointerType("timestamppb.Timestamp")], true), $.methodSignature("GetTrailer", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")], true), $.methodSignature("GetType", [], [/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		GrpcLogEntry,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=timestamp,proto3\" json:\"timestamp,omitempty\"" }), /* @__PURE__ */ $.structField("CallId", /* @__PURE__ */ $.basicType("uint64"), [4], 48, true, { tag: "protobuf:\"varint,2,opt,name=call_id,json=callId,proto3\" json:\"call_id,omitempty\"" }), /* @__PURE__ */ $.structField("SequenceIdWithinCall", /* @__PURE__ */ $.basicType("uint64"), [5], 56, true, { tag: "protobuf:\"varint,3,opt,name=sequence_id_within_call,json=sequenceIdWithinCall,proto3\" json:\"sequence_id_within_call,omitempty\"" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType"), [6], 64, true, { tag: "protobuf:\"varint,4,opt,name=type,proto3,enum=grpc.binarylog.v1.GrpcLogEntry_EventType\" json:\"type,omitempty\"" }), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger"), [7], 68, true, { tag: "protobuf:\"varint,5,opt,name=logger,proto3,enum=grpc.binarylog.v1.GrpcLogEntry_Logger\" json:\"logger,omitempty\"" }), /* @__PURE__ */ $.structField("Payload", "grpc_binarylog_v1.isGrpcLogEntry_Payload", [8], 72, true, { tag: "protobuf_oneof:\"payload\"" }), /* @__PURE__ */ $.structField("PayloadTruncated", /* @__PURE__ */ $.basicType("bool"), [9], 88, true, { tag: "protobuf:\"varint,10,opt,name=payload_truncated,json=payloadTruncated,proto3\" json:\"payload_truncated,omitempty\"" }), /* @__PURE__ */ $.structField("Peer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address"), [10], 96, true, { tag: "protobuf:\"bytes,11,opt,name=peer,proto3\" json:\"peer,omitempty\"" })]
	)
}

export class GrpcLogEntry_ClientHeader {
	public get ClientHeader(): ClientHeader | $.VarRef<ClientHeader> | null {
		return this._fields.ClientHeader
	}

	public set ClientHeader(value: ClientHeader | $.VarRef<ClientHeader> | null) {
		this._fields.ClientHeader = value
	}

	public _fields: {
		ClientHeader: ClientHeader | $.VarRef<ClientHeader> | null
	}

	constructor(init?: Partial<{ClientHeader?: ClientHeader | $.VarRef<ClientHeader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientHeader: init?.ClientHeader ?? (null! as ClientHeader | $.VarRef<ClientHeader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GrpcLogEntry_ClientHeader {
		return new GrpcLogEntry_ClientHeader(this, true)
	}

	public __goscriptAssign(source: GrpcLogEntry_ClientHeader): void {
		const target = this._fields
		const values = source._fields
		target.ClientHeader = values.ClientHeader
	}

	public isGrpcLogEntry_Payload(): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.GrpcLogEntry_ClientHeader",
		() => new GrpcLogEntry_ClientHeader(),
		() => [$.methodSignature("isGrpcLogEntry_Payload", [], [], true)],
		GrpcLogEntry_ClientHeader,
		() => [/* @__PURE__ */ $.structField("ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader"), [0], 0, true, { tag: "protobuf:\"bytes,6,opt,name=client_header,json=clientHeader,proto3,oneof\"" })]
	)
}

export class GrpcLogEntry_ServerHeader {
	public get ServerHeader(): ServerHeader | $.VarRef<ServerHeader> | null {
		return this._fields.ServerHeader
	}

	public set ServerHeader(value: ServerHeader | $.VarRef<ServerHeader> | null) {
		this._fields.ServerHeader = value
	}

	public _fields: {
		ServerHeader: ServerHeader | $.VarRef<ServerHeader> | null
	}

	constructor(init?: Partial<{ServerHeader?: ServerHeader | $.VarRef<ServerHeader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ServerHeader: init?.ServerHeader ?? (null! as ServerHeader | $.VarRef<ServerHeader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GrpcLogEntry_ServerHeader {
		return new GrpcLogEntry_ServerHeader(this, true)
	}

	public __goscriptAssign(source: GrpcLogEntry_ServerHeader): void {
		const target = this._fields
		const values = source._fields
		target.ServerHeader = values.ServerHeader
	}

	public isGrpcLogEntry_Payload(): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.GrpcLogEntry_ServerHeader",
		() => new GrpcLogEntry_ServerHeader(),
		() => [$.methodSignature("isGrpcLogEntry_Payload", [], [], true)],
		GrpcLogEntry_ServerHeader,
		() => [/* @__PURE__ */ $.structField("ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader"), [0], 0, true, { tag: "protobuf:\"bytes,7,opt,name=server_header,json=serverHeader,proto3,oneof\"" })]
	)
}

export class GrpcLogEntry_Message {
	// Used by EVENT_TYPE_CLIENT_MESSAGE, EVENT_TYPE_SERVER_MESSAGE
	public get Message(): Message | $.VarRef<Message> | null {
		return this._fields.Message
	}

	public set Message(value: Message | $.VarRef<Message> | null) {
		this._fields.Message = value
	}

	public _fields: {
		Message: Message | $.VarRef<Message> | null
	}

	constructor(init?: Partial<{Message?: Message | $.VarRef<Message> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as Message | $.VarRef<Message> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GrpcLogEntry_Message {
		return new GrpcLogEntry_Message(this, true)
	}

	public __goscriptAssign(source: GrpcLogEntry_Message): void {
		const target = this._fields
		const values = source._fields
		target.Message = values.Message
	}

	public isGrpcLogEntry_Payload(): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.GrpcLogEntry_Message",
		() => new GrpcLogEntry_Message(),
		() => [$.methodSignature("isGrpcLogEntry_Payload", [], [], true)],
		GrpcLogEntry_Message,
		() => [/* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message"), [0], 0, true, { tag: "protobuf:\"bytes,8,opt,name=message,proto3,oneof\"" })]
	)
}

export class GrpcLogEntry_Trailer {
	public get Trailer(): Trailer | $.VarRef<Trailer> | null {
		return this._fields.Trailer
	}

	public set Trailer(value: Trailer | $.VarRef<Trailer> | null) {
		this._fields.Trailer = value
	}

	public _fields: {
		Trailer: Trailer | $.VarRef<Trailer> | null
	}

	constructor(init?: Partial<{Trailer?: Trailer | $.VarRef<Trailer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Trailer: init?.Trailer ?? (null! as Trailer | $.VarRef<Trailer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GrpcLogEntry_Trailer {
		return new GrpcLogEntry_Trailer(this, true)
	}

	public __goscriptAssign(source: GrpcLogEntry_Trailer): void {
		const target = this._fields
		const values = source._fields
		target.Trailer = values.Trailer
	}

	public isGrpcLogEntry_Payload(): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.GrpcLogEntry_Trailer",
		() => new GrpcLogEntry_Trailer(),
		() => [$.methodSignature("isGrpcLogEntry_Payload", [], [], true)],
		GrpcLogEntry_Trailer,
		() => [/* @__PURE__ */ $.structField("Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer"), [0], 0, true, { tag: "protobuf:\"bytes,9,opt,name=trailer,proto3,oneof\"" })]
	)
}

export class ClientHeader {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// This contains only the metadata from the application.
	public get Metadata(): Metadata | $.VarRef<Metadata> | null {
		return this._fields.Metadata
	}

	public set Metadata(value: Metadata | $.VarRef<Metadata> | null) {
		this._fields.Metadata = value
	}

	// The name of the RPC method, which looks something like:
	// /<service>/<method>
	// Note the leading "/" character.
	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	// A single process may be used to run multiple virtual
	// servers with different identities.
	// The authority is the name of such a server identity.
	// It is typically a portion of the URI in the form of
	// <host> or <host>:<port> .
	public get Authority(): string {
		return this._fields.Authority
	}

	public set Authority(value: string) {
		this._fields.Authority = value
	}

	// the RPC timeout
	public get Timeout(): durationpb.Duration | $.VarRef<durationpb.Duration> | null {
		return this._fields.Timeout
	}

	public set Timeout(value: durationpb.Duration | $.VarRef<durationpb.Duration> | null) {
		this._fields.Timeout = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Metadata: Metadata | $.VarRef<Metadata> | null
		MethodName: string
		Authority: string
		Timeout: durationpb.Duration | $.VarRef<durationpb.Duration> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Metadata?: Metadata | $.VarRef<Metadata> | null, MethodName?: string, Authority?: string, Timeout?: durationpb.Duration | $.VarRef<durationpb.Duration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Metadata: init?.Metadata ?? (null! as Metadata | $.VarRef<Metadata> | null),
			MethodName: init?.MethodName ?? ("" as string),
			Authority: init?.Authority ?? ("" as string),
			Timeout: init?.Timeout ?? (null! as durationpb.Duration | $.VarRef<durationpb.Duration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientHeader {
		return new ClientHeader(this, true)
	}

	public __goscriptAssign(source: ClientHeader): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Metadata = values.Metadata
		target.MethodName = values.MethodName
		target.Authority = values.Authority
		target.Timeout = values.Timeout
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([1])]
	}

	public GetAuthority(): string {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		if (x != null) {
			return $.pointerValue<ClientHeader>(x).Authority
		}
		return ""
	}

	public GetMetadata(): Metadata | $.VarRef<Metadata> | null {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		if (x != null) {
			return $.pointerValue<ClientHeader>(x).Metadata
		}
		return null
	}

	public GetMethodName(): string {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		if (x != null) {
			return $.pointerValue<ClientHeader>(x).MethodName
		}
		return ""
	}

	public GetTimeout(): durationpb.Duration | $.VarRef<durationpb.Duration> | null {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		if (x != null) {
			return $.pointerValue<ClientHeader>(x).Timeout
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 1)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader"))))
	}

	public Reset(): void {
		let x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		$.assignStruct($.pointerValue<ClientHeader>(x), $.markAsStructValue(new ClientHeader()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 1)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ClientHeader | $.VarRef<ClientHeader> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.ClientHeader",
		() => new ClientHeader(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetAuthority", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetMetadata", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")], true), $.methodSignature("GetMethodName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetTimeout", [], [/* @__PURE__ */ $.pointerType("durationpb.Duration")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ClientHeader,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=metadata,proto3\" json:\"metadata,omitempty\"" }), /* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=method_name,json=methodName,proto3\" json:\"method_name,omitempty\"" }), /* @__PURE__ */ $.structField("Authority", /* @__PURE__ */ $.basicType("string"), [5], 64, true, { tag: "protobuf:\"bytes,3,opt,name=authority,proto3\" json:\"authority,omitempty\"" }), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.pointerType("durationpb.Duration"), [6], 80, true, { tag: "protobuf:\"bytes,4,opt,name=timeout,proto3\" json:\"timeout,omitempty\"" })]
	)
}

export class ServerHeader {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// This contains only the metadata from the application.
	public get Metadata(): Metadata | $.VarRef<Metadata> | null {
		return this._fields.Metadata
	}

	public set Metadata(value: Metadata | $.VarRef<Metadata> | null) {
		this._fields.Metadata = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Metadata: Metadata | $.VarRef<Metadata> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Metadata?: Metadata | $.VarRef<Metadata> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Metadata: init?.Metadata ?? (null! as Metadata | $.VarRef<Metadata> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerHeader {
		return new ServerHeader(this, true)
	}

	public __goscriptAssign(source: ServerHeader): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Metadata = values.Metadata
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([2])]
	}

	public GetMetadata(): Metadata | $.VarRef<Metadata> | null {
		const x: ServerHeader | $.VarRef<ServerHeader> | null = this;
		if (x != null) {
			return $.pointerValue<ServerHeader>(x).Metadata
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: ServerHeader | $.VarRef<ServerHeader> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 2)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader"))))
	}

	public Reset(): void {
		let x: ServerHeader | $.VarRef<ServerHeader> | null = this;
		$.assignStruct($.pointerValue<ServerHeader>(x), $.markAsStructValue(new ServerHeader()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 2)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ServerHeader | $.VarRef<ServerHeader> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.ServerHeader",
		() => new ServerHeader(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetMetadata", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ServerHeader,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=metadata,proto3\" json:\"metadata,omitempty\"" })]
	)
}

export class Trailer {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// This contains only the metadata from the application.
	public get Metadata(): Metadata | $.VarRef<Metadata> | null {
		return this._fields.Metadata
	}

	public set Metadata(value: Metadata | $.VarRef<Metadata> | null) {
		this._fields.Metadata = value
	}

	// The gRPC status code.
	public get StatusCode(): number {
		return this._fields.StatusCode
	}

	public set StatusCode(value: number) {
		this._fields.StatusCode = value
	}

	// An original status message before any transport specific
	// encoding.
	public get StatusMessage(): string {
		return this._fields.StatusMessage
	}

	public set StatusMessage(value: string) {
		this._fields.StatusMessage = value
	}

	// The value of the 'grpc-status-details-bin' metadata key. If
	// present, this is always an encoded 'google.rpc.Status' message.
	public get StatusDetails(): $.Slice<number> {
		return this._fields.StatusDetails
	}

	public set StatusDetails(value: $.Slice<number>) {
		this._fields.StatusDetails = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Metadata: Metadata | $.VarRef<Metadata> | null
		StatusCode: number
		StatusMessage: string
		StatusDetails: $.Slice<number>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Metadata?: Metadata | $.VarRef<Metadata> | null, StatusCode?: number, StatusMessage?: string, StatusDetails?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Metadata: init?.Metadata ?? (null! as Metadata | $.VarRef<Metadata> | null),
			StatusCode: init?.StatusCode ?? (0 as number),
			StatusMessage: init?.StatusMessage ?? ("" as string),
			StatusDetails: init?.StatusDetails ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Trailer {
		return new Trailer(this, true)
	}

	public __goscriptAssign(source: Trailer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Metadata = values.Metadata
		target.StatusCode = values.StatusCode
		target.StatusMessage = values.StatusMessage
		target.StatusDetails = values.StatusDetails
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([3])]
	}

	public GetMetadata(): Metadata | $.VarRef<Metadata> | null {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		if (x != null) {
			return $.pointerValue<Trailer>(x).Metadata
		}
		return null
	}

	public GetStatusCode(): number {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		if (x != null) {
			return $.pointerValue<Trailer>(x).StatusCode
		}
		return 0
	}

	public GetStatusDetails(): $.Slice<number> {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		if (x != null) {
			return $.pointerValue<Trailer>(x).StatusDetails
		}
		return null
	}

	public GetStatusMessage(): string {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		if (x != null) {
			return $.pointerValue<Trailer>(x).StatusMessage
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 3)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer"))))
	}

	public Reset(): void {
		let x: Trailer | $.VarRef<Trailer> | null = this;
		$.assignStruct($.pointerValue<Trailer>(x), $.markAsStructValue(new Trailer()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 3)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Trailer | $.VarRef<Trailer> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.Trailer",
		() => new Trailer(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetMetadata", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")], true), $.methodSignature("GetStatusCode", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("GetStatusDetails", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetStatusMessage", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Trailer,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=metadata,proto3\" json:\"metadata,omitempty\"" }), /* @__PURE__ */ $.structField("StatusCode", /* @__PURE__ */ $.basicType("uint32"), [4], 48, true, { tag: "protobuf:\"varint,2,opt,name=status_code,json=statusCode,proto3\" json:\"status_code,omitempty\"" }), /* @__PURE__ */ $.structField("StatusMessage", /* @__PURE__ */ $.basicType("string"), [5], 56, true, { tag: "protobuf:\"bytes,3,opt,name=status_message,json=statusMessage,proto3\" json:\"status_message,omitempty\"" }), /* @__PURE__ */ $.structField("StatusDetails", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 72, true, { tag: "protobuf:\"bytes,4,opt,name=status_details,json=statusDetails,proto3\" json:\"status_details,omitempty\"" })]
	)
}

export class Message {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// Length of the message. It may not be the same as the length of the
	// data field, as the logging payload can be truncated or omitted.
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	// May be truncated or omitted.
	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Length: number
		Data: $.Slice<number>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Length?: number, Data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Length: init?.Length ?? (0 as number),
			Data: init?.Data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Message {
		return new Message(this, true)
	}

	public __goscriptAssign(source: Message): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Length = values.Length
		target.Data = values.Data
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([4])]
	}

	public GetData(): $.Slice<number> {
		const x: Message | $.VarRef<Message> | null = this;
		if (x != null) {
			return $.pointerValue<Message>(x).Data
		}
		return null
	}

	public GetLength(): number {
		const x: Message | $.VarRef<Message> | null = this;
		if (x != null) {
			return $.pointerValue<Message>(x).Length
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Message | $.VarRef<Message> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 4)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message"))))
	}

	public Reset(): void {
		let x: Message | $.VarRef<Message> | null = this;
		$.assignStruct($.pointerValue<Message>(x), $.markAsStructValue(new Message()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 4)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Message | $.VarRef<Message> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.Message",
		() => new Message(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetLength", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Message,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("uint32"), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=length,proto3\" json:\"length,omitempty\"" }), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=data,proto3\" json:\"data,omitempty\"" })]
	)
}

export class Metadata {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Entry(): $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null> {
		return this._fields.Entry
	}

	public set Entry(value: $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null>) {
		this._fields.Entry = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Entry: $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Entry?: $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Entry: init?.Entry ?? (null! as $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Metadata {
		return new Metadata(this, true)
	}

	public __goscriptAssign(source: Metadata): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Entry = values.Entry
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([5])]
	}

	public GetEntry(): $.Slice<MetadataEntry | $.VarRef<MetadataEntry> | null> {
		const x: Metadata | $.VarRef<Metadata> | null = this;
		if (x != null) {
			return $.pointerValue<Metadata>(x).Entry
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Metadata | $.VarRef<Metadata> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 5)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata"))))
	}

	public Reset(): void {
		let x: Metadata | $.VarRef<Metadata> | null = this;
		$.assignStruct($.pointerValue<Metadata>(x), $.markAsStructValue(new Metadata()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 5)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Metadata | $.VarRef<Metadata> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.Metadata",
		() => new Metadata(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetEntry", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry"))], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Metadata,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Entry", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")), [3], 40, true, { tag: "protobuf:\"bytes,1,rep,name=entry,proto3\" json:\"entry,omitempty\"" })]
	)
}

export class MetadataEntry {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Value(): $.Slice<number> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<number>) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Key: string
		Value: $.Slice<number>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Key?: string, Value?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Key: init?.Key ?? ("" as string),
			Value: init?.Value ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetadataEntry {
		return new MetadataEntry(this, true)
	}

	public __goscriptAssign(source: MetadataEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Key = values.Key
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([6])]
	}

	public GetKey(): string {
		const x: MetadataEntry | $.VarRef<MetadataEntry> | null = this;
		if (x != null) {
			return $.pointerValue<MetadataEntry>(x).Key
		}
		return ""
	}

	public GetValue(): $.Slice<number> {
		const x: MetadataEntry | $.VarRef<MetadataEntry> | null = this;
		if (x != null) {
			return $.pointerValue<MetadataEntry>(x).Value
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: MetadataEntry | $.VarRef<MetadataEntry> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 6)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.MetadataEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.MetadataEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")))
	}

	public Reset(): void {
		let x: MetadataEntry | $.VarRef<MetadataEntry> | null = this;
		$.assignStruct($.pointerValue<MetadataEntry>(x), $.markAsStructValue(new MetadataEntry()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 6)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.MetadataEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: MetadataEntry | $.VarRef<MetadataEntry> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.MetadataEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.MetadataEntry",
		() => new MetadataEntry(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		MetadataEntry,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=key,proto3\" json:\"key,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 56, true, { tag: "protobuf:\"bytes,2,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class Address {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Type(): Address_Type {
		return this._fields.Type
	}

	public set Type(value: Address_Type) {
		this._fields.Type = value
	}

	public get Address(): string {
		return this._fields.Address
	}

	public set Address(value: string) {
		this._fields.Address = value
	}

	// only for TYPE_IPV4 and TYPE_IPV6
	public get IpPort(): number {
		return this._fields.IpPort
	}

	public set IpPort(value: number) {
		this._fields.IpPort = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Type: Address_Type
		Address: string
		IpPort: number
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Type?: Address_Type, Address?: string, IpPort?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Type: init?.Type ?? (0 as Address_Type),
			Address: init?.Address ?? ("" as string),
			IpPort: init?.IpPort ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Address {
		return new Address(this, true)
	}

	public __goscriptAssign(source: Address): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Type = values.Type
		target.Address = values.Address
		target.IpPort = values.IpPort
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([7])]
	}

	public GetAddress(): string {
		const x: Address | $.VarRef<Address> | null = this;
		if (x != null) {
			return $.pointerValue<Address>(x).Address
		}
		return ""
	}

	public GetIpPort(): number {
		const x: Address | $.VarRef<Address> | null = this;
		if (x != null) {
			return $.pointerValue<Address>(x).IpPort
		}
		return 0
	}

	public GetType(): Address_Type {
		const x: Address | $.VarRef<Address> | null = this;
		if (x != null) {
			return $.pointerValue<Address>(x).Type
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Address | $.VarRef<Address> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 7)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address"))))
	}

	public Reset(): void {
		let x: Address | $.VarRef<Address> | null = this;
		$.assignStruct($.pointerValue<Address>(x), $.markAsStructValue(new Address()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 7)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Address | $.VarRef<Address> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")))
	}

	static __typeInfo = $.registerStructType(
		"grpc_binarylog_v1.Address",
		() => new Address(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetAddress", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIpPort", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("GetType", [], [/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Address,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/grpc/binarylog/grpc_binarylog_v1" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type"), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=type,proto3,enum=grpc.binarylog.v1.Address_Type\" json:\"type,omitempty\"" }), /* @__PURE__ */ $.structField("Address", /* @__PURE__ */ $.basicType("string"), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=address,proto3\" json:\"address,omitempty\"" }), /* @__PURE__ */ $.structField("IpPort", /* @__PURE__ */ $.basicType("uint32"), [5], 64, true, { tag: "protobuf:\"varint,3,opt,name=ip_port,json=ipPort,proto3\" json:\"ip_port,omitempty\"" })]
	)
}

export const GrpcLogEntry_EVENT_TYPE_UNKNOWN: GrpcLogEntry_EventType = 0

export const GrpcLogEntry_EVENT_TYPE_CLIENT_HEADER: GrpcLogEntry_EventType = 1

export const GrpcLogEntry_EVENT_TYPE_SERVER_HEADER: GrpcLogEntry_EventType = 2

export const GrpcLogEntry_EVENT_TYPE_CLIENT_MESSAGE: GrpcLogEntry_EventType = 3

export const GrpcLogEntry_EVENT_TYPE_SERVER_MESSAGE: GrpcLogEntry_EventType = 4

export const GrpcLogEntry_EVENT_TYPE_CLIENT_HALF_CLOSE: GrpcLogEntry_EventType = 5

export const GrpcLogEntry_EVENT_TYPE_SERVER_TRAILER: GrpcLogEntry_EventType = 6

export const GrpcLogEntry_EVENT_TYPE_CANCEL: GrpcLogEntry_EventType = 7

export const GrpcLogEntry_LOGGER_UNKNOWN: GrpcLogEntry_Logger = 0

export const GrpcLogEntry_LOGGER_CLIENT: GrpcLogEntry_Logger = 1

export const GrpcLogEntry_LOGGER_SERVER: GrpcLogEntry_Logger = 2

export const Address_TYPE_UNKNOWN: Address_Type = 0

export const Address_TYPE_IPV4: Address_Type = 1

export const Address_TYPE_IPV6: Address_Type = 2

export const Address_TYPE_UNIX: Address_Type = 3

export let GrpcLogEntry_EventType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "EVENT_TYPE_UNKNOWN"], [1, "EVENT_TYPE_CLIENT_HEADER"], [2, "EVENT_TYPE_SERVER_HEADER"], [3, "EVENT_TYPE_CLIENT_MESSAGE"], [4, "EVENT_TYPE_SERVER_MESSAGE"], [5, "EVENT_TYPE_CLIENT_HALF_CLOSE"], [6, "EVENT_TYPE_SERVER_TRAILER"], [7, "EVENT_TYPE_CANCEL"]])

export function __goscript_set_GrpcLogEntry_EventType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	GrpcLogEntry_EventType_name = __goscriptValue
}

export let GrpcLogEntry_EventType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["EVENT_TYPE_UNKNOWN", 0], ["EVENT_TYPE_CLIENT_HEADER", 1], ["EVENT_TYPE_SERVER_HEADER", 2], ["EVENT_TYPE_CLIENT_MESSAGE", 3], ["EVENT_TYPE_SERVER_MESSAGE", 4], ["EVENT_TYPE_CLIENT_HALF_CLOSE", 5], ["EVENT_TYPE_SERVER_TRAILER", 6], ["EVENT_TYPE_CANCEL", 7]])

export function __goscript_set_GrpcLogEntry_EventType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	GrpcLogEntry_EventType_value = __goscriptValue
}

export function GrpcLogEntry_EventType_Enum(x: GrpcLogEntry_EventType): $.VarRef<GrpcLogEntry_EventType> | null {
	let p: $.VarRef<GrpcLogEntry_EventType> | null = $.varRef<GrpcLogEntry_EventType>(0)
	p!.value = x
	return p
}

export function GrpcLogEntry_EventType_String(x: GrpcLogEntry_EventType): string {
	return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).EnumStringOf(GrpcLogEntry_EventType_Descriptor(x), $.int(x, 32))
}

export function GrpcLogEntry_EventType_Descriptor(recv: GrpcLogEntry_EventType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 0).Descriptor()
}

export function GrpcLogEntry_EventType_Type(recv: GrpcLogEntry_EventType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 0), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function GrpcLogEntry_EventType_Number(x: GrpcLogEntry_EventType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export async function GrpcLogEntry_EventType_EnumDescriptor(recv: GrpcLogEntry_EventType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([0, 0])]
}

export let GrpcLogEntry_Logger_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "LOGGER_UNKNOWN"], [1, "LOGGER_CLIENT"], [2, "LOGGER_SERVER"]])

export function __goscript_set_GrpcLogEntry_Logger_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	GrpcLogEntry_Logger_name = __goscriptValue
}

export let GrpcLogEntry_Logger_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["LOGGER_UNKNOWN", 0], ["LOGGER_CLIENT", 1], ["LOGGER_SERVER", 2]])

export function __goscript_set_GrpcLogEntry_Logger_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	GrpcLogEntry_Logger_value = __goscriptValue
}

export function GrpcLogEntry_Logger_Enum(x: GrpcLogEntry_Logger): $.VarRef<GrpcLogEntry_Logger> | null {
	let p: $.VarRef<GrpcLogEntry_Logger> | null = $.varRef<GrpcLogEntry_Logger>(0)
	p!.value = x
	return p
}

export function GrpcLogEntry_Logger_String(x: GrpcLogEntry_Logger): string {
	return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).EnumStringOf(GrpcLogEntry_Logger_Descriptor(x), $.int(x, 32))
}

export function GrpcLogEntry_Logger_Descriptor(recv: GrpcLogEntry_Logger): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 1).Descriptor()
}

export function GrpcLogEntry_Logger_Type(recv: GrpcLogEntry_Logger): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 1), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function GrpcLogEntry_Logger_Number(x: GrpcLogEntry_Logger): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export async function GrpcLogEntry_Logger_EnumDescriptor(recv: GrpcLogEntry_Logger): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([0, 1])]
}

export let Address_Type_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TYPE_UNKNOWN"], [1, "TYPE_IPV4"], [2, "TYPE_IPV6"], [3, "TYPE_UNIX"]])

export function __goscript_set_Address_Type_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Address_Type_name = __goscriptValue
}

export let Address_Type_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TYPE_UNKNOWN", 0], ["TYPE_IPV4", 1], ["TYPE_IPV6", 2], ["TYPE_UNIX", 3]])

export function __goscript_set_Address_Type_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Address_Type_value = __goscriptValue
}

export function Address_Type_Enum(x: Address_Type): $.VarRef<Address_Type> | null {
	let p: $.VarRef<Address_Type> | null = $.varRef<Address_Type>(0)
	p!.value = x
	return p
}

export function Address_Type_String(x: Address_Type): string {
	return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).EnumStringOf(Address_Type_Descriptor(x), $.int(x, 32))
}

export function Address_Type_Descriptor(recv: Address_Type): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 2).Descriptor()
}

export function Address_Type_Type(recv: Address_Type): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_grpc_binlog_v1_binarylog_proto_enumTypes!, 2), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function Address_Type_Number(x: Address_Type): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export async function Address_Type_EnumDescriptor(recv: Address_Type): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(), $.arrayToSlice<number>([7, 0])]
}

export let File_grpc_binlog_v1_binarylog_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_grpc_binlog_v1_binarylog_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_grpc_binlog_v1_binarylog_proto = __goscriptValue
}

export let file_grpc_binlog_v1_binarylog_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 30, 103, 114, 112, 99, 47, 98, 105, 110, 108, 111, 103, 47, 118, 49, 47, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 112, 114, 111, 116, 111, 18, 17, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 26, 30, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 100, 117, 114, 97, 116, 105, 111, 110, 46, 112, 114, 111, 116, 111, 26, 31, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 105, 109, 101, 115, 116, 97, 109, 112, 46, 112, 114, 111, 116, 111, 34, 187, 7, 10, 12, 71, 114, 112, 99, 76, 111, 103, 69, 110, 116, 114, 121, 18, 56, 10, 9, 116, 105, 109, 101, 115, 116, 97, 109, 112, 24, 1, 32, 1, 40, 11, 50, 26, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 84, 105, 109, 101, 115, 116, 97, 109, 112, 82, 9, 116, 105, 109, 101, 115, 116, 97, 109, 112, 18, 23, 10, 7, 99, 97, 108, 108, 95, 105, 100, 24, 2, 32, 1, 40, 4, 82, 6, 99, 97, 108, 108, 73, 100, 18, 53, 10, 23, 115, 101, 113, 117, 101, 110, 99, 101, 95, 105, 100, 95, 119, 105, 116, 104, 105, 110, 95, 99, 97, 108, 108, 24, 3, 32, 1, 40, 4, 82, 20, 115, 101, 113, 117, 101, 110, 99, 101, 73, 100, 87, 105, 116, 104, 105, 110, 67, 97, 108, 108, 18, 61, 10, 4, 116, 121, 112, 101, 24, 4, 32, 1, 40, 14, 50, 41, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 71, 114, 112, 99, 76, 111, 103, 69, 110, 116, 114, 121, 46, 69, 118, 101, 110, 116, 84, 121, 112, 101, 82, 4, 116, 121, 112, 101, 18, 62, 10, 6, 108, 111, 103, 103, 101, 114, 24, 5, 32, 1, 40, 14, 50, 38, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 71, 114, 112, 99, 76, 111, 103, 69, 110, 116, 114, 121, 46, 76, 111, 103, 103, 101, 114, 82, 6, 108, 111, 103, 103, 101, 114, 18, 70, 10, 13, 99, 108, 105, 101, 110, 116, 95, 104, 101, 97, 100, 101, 114, 24, 6, 32, 1, 40, 11, 50, 31, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 67, 108, 105, 101, 110, 116, 72, 101, 97, 100, 101, 114, 72, 0, 82, 12, 99, 108, 105, 101, 110, 116, 72, 101, 97, 100, 101, 114, 18, 70, 10, 13, 115, 101, 114, 118, 101, 114, 95, 104, 101, 97, 100, 101, 114, 24, 7, 32, 1, 40, 11, 50, 31, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 83, 101, 114, 118, 101, 114, 72, 101, 97, 100, 101, 114, 72, 0, 82, 12, 115, 101, 114, 118, 101, 114, 72, 101, 97, 100, 101, 114, 18, 54, 10, 7, 109, 101, 115, 115, 97, 103, 101, 24, 8, 32, 1, 40, 11, 50, 26, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 77, 101, 115, 115, 97, 103, 101, 72, 0, 82, 7, 109, 101, 115, 115, 97, 103, 101, 18, 54, 10, 7, 116, 114, 97, 105, 108, 101, 114, 24, 9, 32, 1, 40, 11, 50, 26, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 84, 114, 97, 105, 108, 101, 114, 72, 0, 82, 7, 116, 114, 97, 105, 108, 101, 114, 18, 43, 10, 17, 112, 97, 121, 108, 111, 97, 100, 95, 116, 114, 117, 110, 99, 97, 116, 101, 100, 24, 10, 32, 1, 40, 8, 82, 16, 112, 97, 121, 108, 111, 97, 100, 84, 114, 117, 110, 99, 97, 116, 101, 100, 18, 46, 10, 4, 112, 101, 101, 114, 24, 11, 32, 1, 40, 11, 50, 26, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 65, 100, 100, 114, 101, 115, 115, 82, 4, 112, 101, 101, 114, 34, 245, 1, 10, 9, 69, 118, 101, 110, 116, 84, 121, 112, 101, 18, 22, 10, 18, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 28, 10, 24, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 67, 76, 73, 69, 78, 84, 95, 72, 69, 65, 68, 69, 82, 16, 1, 18, 28, 10, 24, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 83, 69, 82, 86, 69, 82, 95, 72, 69, 65, 68, 69, 82, 16, 2, 18, 29, 10, 25, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 67, 76, 73, 69, 78, 84, 95, 77, 69, 83, 83, 65, 71, 69, 16, 3, 18, 29, 10, 25, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 83, 69, 82, 86, 69, 82, 95, 77, 69, 83, 83, 65, 71, 69, 16, 4, 18, 32, 10, 28, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 67, 76, 73, 69, 78, 84, 95, 72, 65, 76, 70, 95, 67, 76, 79, 83, 69, 16, 5, 18, 29, 10, 25, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 83, 69, 82, 86, 69, 82, 95, 84, 82, 65, 73, 76, 69, 82, 16, 6, 18, 21, 10, 17, 69, 86, 69, 78, 84, 95, 84, 89, 80, 69, 95, 67, 65, 78, 67, 69, 76, 16, 7, 34, 66, 10, 6, 76, 111, 103, 103, 101, 114, 18, 18, 10, 14, 76, 79, 71, 71, 69, 82, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 17, 10, 13, 76, 79, 71, 71, 69, 82, 95, 67, 76, 73, 69, 78, 84, 16, 1, 18, 17, 10, 13, 76, 79, 71, 71, 69, 82, 95, 83, 69, 82, 86, 69, 82, 16, 2, 66, 9, 10, 7, 112, 97, 121, 108, 111, 97, 100, 34, 187, 1, 10, 12, 67, 108, 105, 101, 110, 116, 72, 101, 97, 100, 101, 114, 18, 55, 10, 8, 109, 101, 116, 97, 100, 97, 116, 97, 24, 1, 32, 1, 40, 11, 50, 27, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 77, 101, 116, 97, 100, 97, 116, 97, 82, 8, 109, 101, 116, 97, 100, 97, 116, 97, 18, 31, 10, 11, 109, 101, 116, 104, 111, 100, 95, 110, 97, 109, 101, 24, 2, 32, 1, 40, 9, 82, 10, 109, 101, 116, 104, 111, 100, 78, 97, 109, 101, 18, 28, 10, 9, 97, 117, 116, 104, 111, 114, 105, 116, 121, 24, 3, 32, 1, 40, 9, 82, 9, 97, 117, 116, 104, 111, 114, 105, 116, 121, 18, 51, 10, 7, 116, 105, 109, 101, 111, 117, 116, 24, 4, 32, 1, 40, 11, 50, 25, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 68, 117, 114, 97, 116, 105, 111, 110, 82, 7, 116, 105, 109, 101, 111, 117, 116, 34, 71, 10, 12, 83, 101, 114, 118, 101, 114, 72, 101, 97, 100, 101, 114, 18, 55, 10, 8, 109, 101, 116, 97, 100, 97, 116, 97, 24, 1, 32, 1, 40, 11, 50, 27, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 77, 101, 116, 97, 100, 97, 116, 97, 82, 8, 109, 101, 116, 97, 100, 97, 116, 97, 34, 177, 1, 10, 7, 84, 114, 97, 105, 108, 101, 114, 18, 55, 10, 8, 109, 101, 116, 97, 100, 97, 116, 97, 24, 1, 32, 1, 40, 11, 50, 27, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 77, 101, 116, 97, 100, 97, 116, 97, 82, 8, 109, 101, 116, 97, 100, 97, 116, 97, 18, 31, 10, 11, 115, 116, 97, 116, 117, 115, 95, 99, 111, 100, 101, 24, 2, 32, 1, 40, 13, 82, 10, 115, 116, 97, 116, 117, 115, 67, 111, 100, 101, 18, 37, 10, 14, 115, 116, 97, 116, 117, 115, 95, 109, 101, 115, 115, 97, 103, 101, 24, 3, 32, 1, 40, 9, 82, 13, 115, 116, 97, 116, 117, 115, 77, 101, 115, 115, 97, 103, 101, 18, 37, 10, 14, 115, 116, 97, 116, 117, 115, 95, 100, 101, 116, 97, 105, 108, 115, 24, 4, 32, 1, 40, 12, 82, 13, 115, 116, 97, 116, 117, 115, 68, 101, 116, 97, 105, 108, 115, 34, 53, 10, 7, 77, 101, 115, 115, 97, 103, 101, 18, 22, 10, 6, 108, 101, 110, 103, 116, 104, 24, 1, 32, 1, 40, 13, 82, 6, 108, 101, 110, 103, 116, 104, 18, 18, 10, 4, 100, 97, 116, 97, 24, 2, 32, 1, 40, 12, 82, 4, 100, 97, 116, 97, 34, 66, 10, 8, 77, 101, 116, 97, 100, 97, 116, 97, 18, 54, 10, 5, 101, 110, 116, 114, 121, 24, 1, 32, 3, 40, 11, 50, 32, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 77, 101, 116, 97, 100, 97, 116, 97, 69, 110, 116, 114, 121, 82, 5, 101, 110, 116, 114, 121, 34, 55, 10, 13, 77, 101, 116, 97, 100, 97, 116, 97, 69, 110, 116, 114, 121, 18, 16, 10, 3, 107, 101, 121, 24, 1, 32, 1, 40, 9, 82, 3, 107, 101, 121, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 12, 82, 5, 118, 97, 108, 117, 101, 34, 184, 1, 10, 7, 65, 100, 100, 114, 101, 115, 115, 18, 51, 10, 4, 116, 121, 112, 101, 24, 1, 32, 1, 40, 14, 50, 31, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 46, 65, 100, 100, 114, 101, 115, 115, 46, 84, 121, 112, 101, 82, 4, 116, 121, 112, 101, 18, 24, 10, 7, 97, 100, 100, 114, 101, 115, 115, 24, 2, 32, 1, 40, 9, 82, 7, 97, 100, 100, 114, 101, 115, 115, 18, 23, 10, 7, 105, 112, 95, 112, 111, 114, 116, 24, 3, 32, 1, 40, 13, 82, 6, 105, 112, 80, 111, 114, 116, 34, 69, 10, 4, 84, 121, 112, 101, 18, 16, 10, 12, 84, 89, 80, 69, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 13, 10, 9, 84, 89, 80, 69, 95, 73, 80, 86, 52, 16, 1, 18, 13, 10, 9, 84, 89, 80, 69, 95, 73, 80, 86, 54, 16, 2, 18, 13, 10, 9, 84, 89, 80, 69, 95, 85, 78, 73, 88, 16, 3, 66, 92, 10, 20, 105, 111, 46, 103, 114, 112, 99, 46, 98, 105, 110, 97, 114, 121, 108, 111, 103, 46, 118, 49, 66, 14, 66, 105, 110, 97, 114, 121, 76, 111, 103, 80, 114, 111, 116, 111, 80, 1, 90, 50, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 103, 114, 112, 99, 47, 98, 105, 110, 97, 114, 121, 108, 111, 103, 47, 103, 114, 112, 99, 95, 98, 105, 110, 97, 114, 121, 108, 111, 103, 95, 118, 49, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_grpc_binlog_v1_binarylog_proto_rawDesc = __goscriptValue
}

export let file_grpc_binlog_v1_binarylog_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_grpc_binlog_v1_binarylog_proto_rawDescOnce.value, __goscriptValue)
}

export let file_grpc_binlog_v1_binarylog_proto_rawDescData: $.Slice<number> = file_grpc_binlog_v1_binarylog_proto_rawDesc

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_grpc_binlog_v1_binarylog_proto_rawDescData = __goscriptValue
}

export async function file_grpc_binlog_v1_binarylog_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_grpc_binlog_v1_binarylog_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_grpc_binlog_v1_binarylog_proto_rawDescData = $.pointerValue<impl.Export>(protoimpl.X).CompressGZIP(file_grpc_binlog_v1_binarylog_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_grpc_binlog_v1_binarylog_proto_rawDescData
}

export let file_grpc_binlog_v1_binarylog_proto_enumTypes: $.Slice<protoimpl.EnumInfo> = $.makeSlice<protoimpl.EnumInfo>(3, undefined, undefined, () => new impl.EnumInfo(undefined, true))

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_enumTypes(__goscriptValue: $.Slice<protoimpl.EnumInfo>): void {
	file_grpc_binlog_v1_binarylog_proto_enumTypes = __goscriptValue
}

export let file_grpc_binlog_v1_binarylog_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(8, undefined, undefined, () => new impl.MessageInfo(undefined, true))

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_grpc_binlog_v1_binarylog_proto_msgTypes = __goscriptValue
}

export let file_grpc_binlog_v1_binarylog_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(0, "grpc_binarylog_v1.GrpcLogEntry_EventType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(0, "grpc_binarylog_v1.GrpcLogEntry_Logger", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(0, "grpc_binarylog_v1.Address_Type", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.interfaceValue(null, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")), $.interfaceValue(null, "*grpc_binarylog_v1.ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")), $.interfaceValue(null, "*grpc_binarylog_v1.ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")), $.interfaceValue(null, "*grpc_binarylog_v1.Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")), $.interfaceValue(null, "*grpc_binarylog_v1.Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")), $.interfaceValue(null, "*grpc_binarylog_v1.Metadata", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")), $.interfaceValue(null, "*grpc_binarylog_v1.MetadataEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")), $.interfaceValue(null, "*grpc_binarylog_v1.Address", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")), $.interfaceValue(null, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")), $.interfaceValue(null, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))])

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_grpc_binlog_v1_binarylog_proto_goTypes = __goscriptValue
}

export let file_grpc_binlog_v1_binarylog_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([11, 0, 1, 4, 5, 7, 6, 10, 8, 12, 8, 8, 9, 2, 14, 14, 14, 14, 0])

export function __goscript_set_file_grpc_binlog_v1_binarylog_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_grpc_binlog_v1_binarylog_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_grpc_binlog_v1_binarylog_proto_init()
}

export async function file_grpc_binlog_v1_binarylog_proto_init(): globalThis.Promise<void> {
	if (File_grpc_binlog_v1_binarylog_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: GrpcLogEntry | $.VarRef<GrpcLogEntry> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.GrpcLogEntry" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as GrpcLogEntry | $.VarRef<GrpcLogEntry> | null) : $.mustTypeAssert<GrpcLogEntry | $.VarRef<GrpcLogEntry> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GrpcLogEntry>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GrpcLogEntry>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GrpcLogEntry>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 1).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ClientHeader | $.VarRef<ClientHeader> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.ClientHeader" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ClientHeader | $.VarRef<ClientHeader> | null) : $.mustTypeAssert<ClientHeader | $.VarRef<ClientHeader> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ClientHeader")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ClientHeader>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ClientHeader>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ClientHeader>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 2).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ServerHeader | $.VarRef<ServerHeader> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.ServerHeader" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ServerHeader | $.VarRef<ServerHeader> | null) : $.mustTypeAssert<ServerHeader | $.VarRef<ServerHeader> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.ServerHeader")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServerHeader>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServerHeader>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServerHeader>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 3).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Trailer | $.VarRef<Trailer> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.Trailer" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Trailer | $.VarRef<Trailer> | null) : $.mustTypeAssert<Trailer | $.VarRef<Trailer> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Trailer")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Trailer>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Trailer>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Trailer>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 4).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Message | $.VarRef<Message> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.Message" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Message | $.VarRef<Message> | null) : $.mustTypeAssert<Message | $.VarRef<Message> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Message>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Message>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Message>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 5).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Metadata | $.VarRef<Metadata> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.Metadata" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Metadata | $.VarRef<Metadata> | null) : $.mustTypeAssert<Metadata | $.VarRef<Metadata> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metadata>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metadata>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metadata>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 6).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: MetadataEntry | $.VarRef<MetadataEntry> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.MetadataEntry" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as MetadataEntry | $.VarRef<MetadataEntry> | null) : $.mustTypeAssert<MetadataEntry | $.VarRef<MetadataEntry> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.MetadataEntry")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetadataEntry>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetadataEntry>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetadataEntry>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 7).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Address | $.VarRef<Address> | null = ((v as any)?.__goType === "*grpc_binarylog_v1.Address" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Address | $.VarRef<Address> | null) : $.mustTypeAssert<Address | $.VarRef<Address> | null>(v, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Address")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Address>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Address>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Address>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
	}
	$.arrayIndex(file_grpc_binlog_v1_binarylog_proto_msgTypes!, 0).OneofWrappers = $.arrayToSlice<any>([$.interfaceValue(null, "*grpc_binarylog_v1.GrpcLogEntry_ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ClientHeader")), $.interfaceValue(null, "*grpc_binarylog_v1.GrpcLogEntry_ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ServerHeader")), $.interfaceValue(null, "*grpc_binarylog_v1.GrpcLogEntry_Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message")), $.interfaceValue(null, "*grpc_binarylog_v1.GrpcLogEntry_Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Trailer"))])
	class x {
		public _fields: {
		}

		constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
			this._fields = {
			}
			;(this as any)[$.structValueMarker] = __goscriptValue === true
		}

		public clone(): x {
			return new x(this, true)
		}

		public __goscriptAssign(source: x): void {
		}

		static __typeInfo = $.registerStructType(
			"grpc_binarylog_v1.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new filetype.Builder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "grpc_binarylog_v1.x", "grpc_binarylog_v1.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new filedesc.Builder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_grpc_binlog_v1_binarylog_proto_rawDesc, NumEnums: 3, NumMessages: 8, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_grpc_binlog_v1_binarylog_proto_goTypes, DependencyIndexes: file_grpc_binlog_v1_binarylog_proto_depIdxs, EnumInfos: file_grpc_binlog_v1_binarylog_proto_enumTypes, MessageInfos: file_grpc_binlog_v1_binarylog_proto_msgTypes}, true))).Build()
	File_grpc_binlog_v1_binarylog_proto = out.File
	file_grpc_binlog_v1_binarylog_proto_rawDesc = null
	file_grpc_binlog_v1_binarylog_proto_goTypes = null
	file_grpc_binlog_v1_binarylog_proto_depIdxs = null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_EventType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_EventType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GrpcLogEntry_Logger_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.GrpcLogEntry_Logger"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (Address_Type_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Address_Type_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Address_Type_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Address_Type_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Address_Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Address_Type_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "grpc_binarylog_v1.Address_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptAwait: any

await __goscriptInit0()
