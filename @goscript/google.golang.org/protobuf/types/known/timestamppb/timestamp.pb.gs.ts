// Generated file based on timestamp.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as filetype from "@goscript/google.golang.org/protobuf/internal/filetype/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/filetype/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/types/known/timestamppb", ["timestamppb.Timestamp", "timestamppb.x"])

export class Timestamp {
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

	// Represents seconds of UTC time since Unix epoch
	// 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
	// 9999-12-31T23:59:59Z inclusive.
	public get Seconds(): bigint {
		return this._fields.Seconds
	}

	public set Seconds(value: bigint) {
		this._fields.Seconds = value
	}

	// Non-negative fractions of a second at nanosecond resolution. Negative
	// second values with fractions must still have non-negative nanos values
	// that count forward in time. Must be from 0 to 999,999,999
	// inclusive.
	public get Nanos(): number {
		return this._fields.Nanos
	}

	public set Nanos(value: number) {
		this._fields.Nanos = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Seconds: bigint
		Nanos: number
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Seconds?: bigint, Nanos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Seconds: init?.Seconds ?? (0n as bigint),
			Nanos: init?.Nanos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Timestamp {
		return new Timestamp(this, true)
	}

	public __goscriptAssign(source: Timestamp): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
	}

	public AsTime(): time.Time {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Unix($.int64((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).GetSeconds() : Timestamp.prototype.GetSeconds.call(x))), $.int64((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).GetNanos() : Timestamp.prototype.GetNanos.call(x)))))).UTC()))
	}

	public async CheckValid(): globalThis.Promise<$.GoError> {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		switch ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).check() : Timestamp.prototype.check.call(x))) {
			case 1:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("invalid nil Timestamp", null)
				break
			}
			case 2:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("timestamp (%v) before 0001-01-01", $.arrayToSlice<any>([$.interfaceValue(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))]))
				break
			}
			case 3:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("timestamp (%v) after 9999-12-31", $.arrayToSlice<any>([$.interfaceValue(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))]))
				break
			}
			case 4:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("timestamp (%v) has out-of-range nanos", $.arrayToSlice<any>([$.interfaceValue(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))]))
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_timestamp_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetNanos(): number {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		if (x != null) {
			return $.pointerValue<Timestamp>(x).Nanos
		}
		return 0
	}

	public GetSeconds(): bigint {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		if (x != null) {
			return $.pointerValue<Timestamp>(x).Seconds
		}
		return 0n
	}

	public IsValid(): boolean {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).check() : Timestamp.prototype.check.call(x)) == 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_google_protobuf_timestamp_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))))
	}

	public Reset(): void {
		let x: Timestamp | $.VarRef<Timestamp> | null = this;
		$.assignStruct($.pointerValue<Timestamp>(x), $.markAsStructValue(new Timestamp()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_google_protobuf_timestamp_proto_msgTypes!, 0)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
	}

	public check(): number {
		const x: Timestamp | $.VarRef<Timestamp> | null = this;
		const minTimestamp: number = -62135596800
		const maxTimestamp: number = 253402300799
		let secs = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).GetSeconds() : Timestamp.prototype.GetSeconds.call(x))
		let nanos = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Timestamp).GetNanos() : Timestamp.prototype.GetNanos.call(x))
		switch ((true as boolean)) {
			case x == null:
			{
				return 1
				break
			}
			case secs < -62135596800n:
			{
				return 2
				break
			}
			case secs > 253402300799n:
			{
				return 3
				break
			}
			case (nanos < 0) || (nanos >= 1000000000):
			{
				return 4
				break
			}
			default:
			{
				return 0
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"timestamppb.Timestamp",
		() => new Timestamp(),
		() => [$.methodSignature("AsTime", [], ["time.Time"], true), $.methodSignature("CheckValid", [], ["error"], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetNanos", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetSeconds", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("check", [], [/* @__PURE__ */ $.basicType("uint")], true)],
		Timestamp,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/protobuf/types/known/timestamppb" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/protobuf/types/known/timestamppb" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/protobuf/types/known/timestamppb" }), /* @__PURE__ */ $.structField("Seconds", /* @__PURE__ */ $.basicType("int64"), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }), /* @__PURE__ */ $.structField("Nanos", /* @__PURE__ */ $.basicType("int32"), [4], 48, true, { tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" })]
	)
}

export const invalidNil: number = 1

export const invalidUnderflow: number = 2

export const invalidOverflow: number = 3

export const invalidNanos: number = 4

export function Now(): Timestamp | $.VarRef<Timestamp> | null {
	return New($.markAsStructValue($.cloneStructValue(time.Now())))
}

export function New(t: time.Time): Timestamp | $.VarRef<Timestamp> | null {
	return (() => { const __goscriptLiteralField0 = $.int64($.markAsStructValue($.cloneStructValue(t)).Unix()); const __goscriptLiteralField1 = $.int($.markAsStructValue($.cloneStructValue(t)).Nanosecond(), 32); return new Timestamp({Seconds: __goscriptLiteralField0, Nanos: __goscriptLiteralField1}) })()
}

export let File_google_protobuf_timestamp_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_protobuf_timestamp_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_protobuf_timestamp_proto = __goscriptValue
}

export let file_google_protobuf_timestamp_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 31, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 105, 109, 101, 115, 116, 97, 109, 112, 46, 112, 114, 111, 116, 111, 18, 15, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 34, 59, 10, 9, 84, 105, 109, 101, 115, 116, 97, 109, 112, 18, 24, 10, 7, 115, 101, 99, 111, 110, 100, 115, 24, 1, 32, 1, 40, 3, 82, 7, 115, 101, 99, 111, 110, 100, 115, 18, 20, 10, 5, 110, 97, 110, 111, 115, 24, 2, 32, 1, 40, 5, 82, 5, 110, 97, 110, 111, 115, 66, 133, 1, 10, 19, 99, 111, 109, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 66, 14, 84, 105, 109, 101, 115, 116, 97, 109, 112, 80, 114, 111, 116, 111, 80, 1, 90, 50, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 121, 112, 101, 115, 47, 107, 110, 111, 119, 110, 47, 116, 105, 109, 101, 115, 116, 97, 109, 112, 112, 98, 248, 1, 1, 162, 2, 3, 71, 80, 66, 170, 2, 30, 71, 111, 111, 103, 108, 101, 46, 80, 114, 111, 116, 111, 98, 117, 102, 46, 87, 101, 108, 108, 75, 110, 111, 119, 110, 84, 121, 112, 101, 115, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_google_protobuf_timestamp_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_timestamp_proto_rawDesc = __goscriptValue
}

export let file_google_protobuf_timestamp_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_protobuf_timestamp_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_protobuf_timestamp_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_protobuf_timestamp_proto_rawDescData: $.Slice<number> = file_google_protobuf_timestamp_proto_rawDesc

export function __goscript_set_file_google_protobuf_timestamp_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_timestamp_proto_rawDescData = __goscriptValue
}

export async function file_google_protobuf_timestamp_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_protobuf_timestamp_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_protobuf_timestamp_proto_rawDescData = $.pointerValue<impl.Export>(protoimpl.X).CompressGZIP(file_google_protobuf_timestamp_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_protobuf_timestamp_proto_rawDescData
}

export let file_google_protobuf_timestamp_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(1, undefined, undefined, () => new impl.MessageInfo(undefined, true))

export function __goscript_set_file_google_protobuf_timestamp_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_protobuf_timestamp_proto_msgTypes = __goscriptValue
}

export let file_google_protobuf_timestamp_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(null, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))])

export function __goscript_set_file_google_protobuf_timestamp_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_protobuf_timestamp_proto_goTypes = __goscriptValue
}

export let file_google_protobuf_timestamp_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([0, 0, 0, 0, 0])

export function __goscript_set_file_google_protobuf_timestamp_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_timestamp_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_protobuf_timestamp_proto_init()
}

export async function file_google_protobuf_timestamp_proto_init(): globalThis.Promise<void> {
	if (File_google_protobuf_timestamp_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_protobuf_timestamp_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Timestamp | $.VarRef<Timestamp> | null = ((v as any)?.__goType === "*timestamppb.Timestamp" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Timestamp | $.VarRef<Timestamp> | null) : $.mustTypeAssert<Timestamp | $.VarRef<Timestamp> | null>(v, /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Timestamp>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Timestamp>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Timestamp>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
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
			"timestamppb.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new filetype.Builder({File: (await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "timestamppb.x", "timestamppb.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new filedesc.Builder({GoPackagePath: __goscriptLiteralField2, RawDescriptor: file_google_protobuf_timestamp_proto_rawDesc, NumEnums: 0, NumMessages: 1, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_google_protobuf_timestamp_proto_goTypes, DependencyIndexes: file_google_protobuf_timestamp_proto_depIdxs, MessageInfos: file_google_protobuf_timestamp_proto_msgTypes}, true))).Build()
	File_google_protobuf_timestamp_proto = out.File
	file_google_protobuf_timestamp_proto_rawDesc = null
	file_google_protobuf_timestamp_proto_goTypes = null
	file_google_protobuf_timestamp_proto_depIdxs = null
}

var __goscriptAwait: any

await __goscriptInit0()
