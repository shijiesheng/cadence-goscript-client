// Generated file based on status.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

$.registerTypePackagePath("google.golang.org/genproto/googleapis/rpc/status", ["status.Status", "status.x"])

export class Status {
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

	// The status code, which should be an enum value of
	// [google.rpc.Code][google.rpc.Code].
	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	// A developer-facing error message, which should be in English. Any
	// user-facing error message should be localized and sent in the
	// [google.rpc.Status.details][google.rpc.Status.details] field, or localized
	// by the client.
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	// A list of messages that carry the error details.  There is a common set of
	// message types for APIs to use.
	public get Details(): $.Slice<anypb.Any | $.VarRef<anypb.Any> | null> {
		return this._fields.Details
	}

	public set Details(value: $.Slice<anypb.Any | $.VarRef<anypb.Any> | null>) {
		this._fields.Details = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Code: number
		Message: string
		Details: $.Slice<anypb.Any | $.VarRef<anypb.Any> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Code?: number, Message?: string, Details?: $.Slice<anypb.Any | $.VarRef<anypb.Any> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Code: init?.Code ?? (0 as number),
			Message: init?.Message ?? ("" as string),
			Details: init?.Details ?? (null! as $.Slice<anypb.Any | $.VarRef<anypb.Any> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Status {
		return new Status(this, true)
	}

	public __goscriptAssign(source: Status): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Code = values.Code
		target.Message = values.Message
		target.Details = values.Details
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_rpc_status_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetCode(): number {
		const x: Status | $.VarRef<Status> | null = this;
		if (x != null) {
			return $.pointerValue<Status>(x).Code
		}
		return 0
	}

	public GetDetails(): $.Slice<anypb.Any | $.VarRef<anypb.Any> | null> {
		const x: Status | $.VarRef<Status> | null = this;
		if (x != null) {
			return $.pointerValue<Status>(x).Details
		}
		return null
	}

	public GetMessage(): string {
		const x: Status | $.VarRef<Status> | null = this;
		if (x != null) {
			return $.pointerValue<Status>(x).Message
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: Status | $.VarRef<Status> | null = this;
		let mi: any = $.indexRef(file_google_rpc_status_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
	}

	public Reset(): void {
		let x: Status | $.VarRef<Status> | null = this;
		$.assignStruct($.pointerValue<Status>(x), $.markAsStructValue(new Status()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_rpc_status_proto_msgTypes!, 0)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Status | $.VarRef<Status> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
	}

	static __typeInfo = $.registerStructType(
		"status.Status",
		() => new Status(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCode", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("anypb.Any")) }], pointerReceiver: true }, { name: "GetMessage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		Status,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Code", key: "Code", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,1,opt,name=code,proto3\" json:\"code,omitempty\"" }, { name: "Message", key: "Message", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=message,proto3\" json:\"message,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("anypb.Any")), tag: "protobuf:\"bytes,3,rep,name=details,proto3\" json:\"details,omitempty\"" }]
	)
}

export let File_google_rpc_status_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_rpc_status_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_rpc_status_proto = __goscriptValue
}

export let file_google_rpc_status_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 23, 103, 111, 111, 103, 108, 101, 47, 114, 112, 99, 47, 115, 116, 97, 116, 117, 115, 46, 112, 114, 111, 116, 111, 18, 10, 103, 111, 111, 103, 108, 101, 46, 114, 112, 99, 26, 25, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 97, 110, 121, 46, 112, 114, 111, 116, 111, 34, 102, 10, 6, 83, 116, 97, 116, 117, 115, 18, 18, 10, 4, 99, 111, 100, 101, 24, 1, 32, 1, 40, 5, 82, 4, 99, 111, 100, 101, 18, 24, 10, 7, 109, 101, 115, 115, 97, 103, 101, 24, 2, 32, 1, 40, 9, 82, 7, 109, 101, 115, 115, 97, 103, 101, 18, 46, 10, 7, 100, 101, 116, 97, 105, 108, 115, 24, 3, 32, 3, 40, 11, 50, 20, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 65, 110, 121, 82, 7, 100, 101, 116, 97, 105, 108, 115, 66, 97, 10, 14, 99, 111, 109, 46, 103, 111, 111, 103, 108, 101, 46, 114, 112, 99, 66, 11, 83, 116, 97, 116, 117, 115, 80, 114, 111, 116, 111, 80, 1, 90, 55, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 103, 101, 110, 112, 114, 111, 116, 111, 47, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 47, 114, 112, 99, 47, 115, 116, 97, 116, 117, 115, 59, 115, 116, 97, 116, 117, 115, 248, 1, 1, 162, 2, 3, 82, 80, 67, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_google_rpc_status_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_rpc_status_proto_rawDesc = __goscriptValue
}

export let file_google_rpc_status_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_rpc_status_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_rpc_status_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_rpc_status_proto_rawDescData: $.Slice<number> = file_google_rpc_status_proto_rawDesc

export function __goscript_set_file_google_rpc_status_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_rpc_status_proto_rawDescData = __goscriptValue
}

export async function file_google_rpc_status_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_rpc_status_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_rpc_status_proto_rawDescData = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).CompressGZIP(file_google_rpc_status_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_rpc_status_proto_rawDescData
}

export let file_google_rpc_status_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(1, undefined, undefined, () => new protoimpl.MessageInfo(undefined, true))

export function __goscript_set_file_google_rpc_status_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_rpc_status_proto_msgTypes = __goscriptValue
}

export let file_google_rpc_status_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(null, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")), $.interfaceValue(null, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any"))])

export function __goscript_set_file_google_rpc_status_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_rpc_status_proto_goTypes = __goscriptValue
}

export let file_google_rpc_status_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([1, 1, 1, 1, 1, 0])

export function __goscript_set_file_google_rpc_status_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_rpc_status_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_rpc_status_proto_init()
}

export async function file_google_rpc_status_proto_init(): globalThis.Promise<void> {
	if (File_google_rpc_status_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_rpc_status_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Status | $.VarRef<Status> | null = ((v as any)?.__goType === "*status.Status" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Status | $.VarRef<Status> | null) : $.mustTypeAssert<Status | $.VarRef<Status> | null>(v, /* @__PURE__ */ $.pointerType("status.Status")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Status>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Status>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Status>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
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
			"status.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new protoimpl.TypeBuilder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "status.x", "status.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new protoimpl.DescBuilder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_google_rpc_status_proto_rawDesc, NumEnums: 0, NumMessages: 1, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_google_rpc_status_proto_goTypes, DependencyIndexes: file_google_rpc_status_proto_depIdxs, MessageInfos: file_google_rpc_status_proto_msgTypes}, true))).Build()
	File_google_rpc_status_proto = out.File
	file_google_rpc_status_proto_rawDesc = null
	file_google_rpc_status_proto_goTypes = null
	file_google_rpc_status_proto_depIdxs = null
}

var __goscriptAwait: any

await __goscriptInit0()
