// Generated file based on go_features.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/types/gofeaturespb", ["gofeaturespb.GoFeatures", "gofeaturespb.x"])

export class GoFeatures {
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

	// Whether or not to generate the deprecated UnmarshalJSON method for enums.
	public get LegacyUnmarshalJsonEnum(): $.VarRef<boolean> | null {
		return this._fields.LegacyUnmarshalJsonEnum
	}

	public set LegacyUnmarshalJsonEnum(value: $.VarRef<boolean> | null) {
		this._fields.LegacyUnmarshalJsonEnum = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		LegacyUnmarshalJsonEnum: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, LegacyUnmarshalJsonEnum?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			LegacyUnmarshalJsonEnum: init?.LegacyUnmarshalJsonEnum ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GoFeatures {
		return new GoFeatures(this, true)
	}

	public __goscriptAssign(source: GoFeatures): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.LegacyUnmarshalJsonEnum = values.LegacyUnmarshalJsonEnum
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_go_features_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetLegacyUnmarshalJsonEnum(): boolean {
		const x: GoFeatures | $.VarRef<GoFeatures> | null = this;
		const x$: GoFeatures = x == null ? $.pointerTarget<GoFeatures>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GoFeatures>(x)
		if ((x != null) && ((x$ as GoFeatures).LegacyUnmarshalJsonEnum != null)) {
			return $.pointerValue<boolean>((x$ as GoFeatures).LegacyUnmarshalJsonEnum)
		}
		return false
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: GoFeatures | $.VarRef<GoFeatures> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_go_features_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")))
	}

	public Reset(): void {
		let x: GoFeatures | $.VarRef<GoFeatures> | null = this;
		$.assignStruct($.pointerValue<GoFeatures>(x), $.markAsStructValue(new GoFeatures()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_go_features_proto_msgTypes!, 0)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: GoFeatures | $.VarRef<GoFeatures> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")))
	}

	static __typeInfo = $.registerStructType(
		"gofeaturespb.GoFeatures",
		() => new GoFeatures(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetLegacyUnmarshalJsonEnum", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		GoFeatures,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "LegacyUnmarshalJsonEnum", key: "LegacyUnmarshalJsonEnum", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,1,opt,name=legacy_unmarshal_json_enum,json=legacyUnmarshalJsonEnum\" json:\"legacy_unmarshal_json_enum,omitempty\"" }]
	)
}

export let file_google_protobuf_go_features_proto_extTypes: $.Slice<protoimpl.ExtensionInfo> = $.arrayToSlice<protoimpl.ExtensionInfo>([new protoimpl.ExtensionInfo({ExtendedType: $.interfaceValue(null, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")), ExtensionType: $.interfaceValue(null, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")), Field: 1002, Name: "pb.go", Tag: "bytes,1002,opt,name=go", Filename: "google/protobuf/go_features.proto"}, true)])

export function __goscript_set_file_google_protobuf_go_features_proto_extTypes(__goscriptValue: $.Slice<protoimpl.ExtensionInfo>): void {
	file_google_protobuf_go_features_proto_extTypes = __goscriptValue
}

export let E_Go: any = $.indexRef(file_google_protobuf_go_features_proto_extTypes!, 0)

export function __goscript_set_E_Go(__goscriptValue: any): void {
	E_Go = __goscriptValue
}

export let File_google_protobuf_go_features_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_protobuf_go_features_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_protobuf_go_features_proto = __goscriptValue
}

export let file_google_protobuf_go_features_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 33, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 103, 111, 95, 102, 101, 97, 116, 117, 114, 101, 115, 46, 112, 114, 111, 116, 111, 18, 2, 112, 98, 26, 32, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 46, 112, 114, 111, 116, 111, 34, 205, 1, 10, 10, 71, 111, 70, 101, 97, 116, 117, 114, 101, 115, 18, 190, 1, 10, 26, 108, 101, 103, 97, 99, 121, 95, 117, 110, 109, 97, 114, 115, 104, 97, 108, 95, 106, 115, 111, 110, 95, 101, 110, 117, 109, 24, 1, 32, 1, 40, 8, 66, 128, 1, 136, 1, 1, 152, 1, 6, 152, 1, 1, 162, 1, 9, 18, 4, 116, 114, 117, 101, 24, 132, 7, 162, 1, 10, 18, 5, 102, 97, 108, 115, 101, 24, 231, 7, 178, 1, 91, 8, 232, 7, 16, 232, 7, 26, 83, 84, 104, 101, 32, 108, 101, 103, 97, 99, 121, 32, 85, 110, 109, 97, 114, 115, 104, 97, 108, 74, 83, 79, 78, 32, 65, 80, 73, 32, 105, 115, 32, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 98, 101, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 97, 32, 102, 117, 116, 117, 114, 101, 32, 101, 100, 105, 116, 105, 111, 110, 46, 82, 23, 108, 101, 103, 97, 99, 121, 85, 110, 109, 97, 114, 115, 104, 97, 108, 74, 115, 111, 110, 69, 110, 117, 109, 58, 60, 10, 2, 103, 111, 18, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 24, 234, 7, 32, 1, 40, 11, 50, 14, 46, 112, 98, 46, 71, 111, 70, 101, 97, 116, 117, 114, 101, 115, 82, 2, 103, 111, 66, 47, 90, 45, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 121, 112, 101, 115, 47, 103, 111, 102, 101, 97, 116, 117, 114, 101, 115, 112, 98]) as $.Slice<number>

export function __goscript_set_file_google_protobuf_go_features_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_go_features_proto_rawDesc = __goscriptValue
}

export let file_google_protobuf_go_features_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_protobuf_go_features_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_protobuf_go_features_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_protobuf_go_features_proto_rawDescData: $.Slice<number> = file_google_protobuf_go_features_proto_rawDesc

export function __goscript_set_file_google_protobuf_go_features_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_go_features_proto_rawDescData = __goscriptValue
}

export async function file_google_protobuf_go_features_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_protobuf_go_features_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_protobuf_go_features_proto_rawDescData = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).CompressGZIP(file_google_protobuf_go_features_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_protobuf_go_features_proto_rawDescData
}

export let file_google_protobuf_go_features_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(1, undefined, undefined, () => new protoimpl.MessageInfo(undefined, true))

export function __goscript_set_file_google_protobuf_go_features_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_protobuf_go_features_proto_msgTypes = __goscriptValue
}

export let file_google_protobuf_go_features_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(null, "*gofeaturespb.GoFeatures", /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")), $.interfaceValue(null, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"))])

export function __goscript_set_file_google_protobuf_go_features_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_protobuf_go_features_proto_goTypes = __goscriptValue
}

export let file_google_protobuf_go_features_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([1, 0, 2, 2, 1, 0, 0])

export function __goscript_set_file_google_protobuf_go_features_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_go_features_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_protobuf_go_features_proto_init()
}

export async function file_google_protobuf_go_features_proto_init(): globalThis.Promise<void> {
	if (File_google_protobuf_go_features_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_protobuf_go_features_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: GoFeatures | $.VarRef<GoFeatures> | null = ((v as any)?.__goType === "*gofeaturespb.GoFeatures" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as GoFeatures | $.VarRef<GoFeatures> | null) : $.mustTypeAssert<GoFeatures | $.VarRef<GoFeatures> | null>(v, /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GoFeatures>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GoFeatures>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GoFeatures>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
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
			"gofeaturespb.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new protoimpl.TypeBuilder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "gofeaturespb.x", "gofeaturespb.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new protoimpl.DescBuilder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_google_protobuf_go_features_proto_rawDesc, NumEnums: 0, NumMessages: 1, NumExtensions: 1, NumServices: 0}, true) })()), GoTypes: file_google_protobuf_go_features_proto_goTypes, DependencyIndexes: file_google_protobuf_go_features_proto_depIdxs, MessageInfos: file_google_protobuf_go_features_proto_msgTypes, ExtensionInfos: file_google_protobuf_go_features_proto_extTypes}, true))).Build()
	File_google_protobuf_go_features_proto = out.File
	file_google_protobuf_go_features_proto_rawDesc = null
	file_google_protobuf_go_features_proto_goTypes = null
	file_google_protobuf_go_features_proto_depIdxs = null
}

var __goscriptAwait: any

await __goscriptInit0()
