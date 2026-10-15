// Generated file based on any.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as filetype from "@goscript/google.golang.org/protobuf/internal/filetype/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/filetype/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/types/known/anypb", ["anypb.Any", "anypb.x"])

export class Any {
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

	// A URL/resource name that uniquely identifies the type of the serialized
	// protocol buffer message. This string must contain at least
	// one "/" character. The last segment of the URL's path must represent
	// the fully qualified name of the type (as in
	// `path/google.protobuf.Duration`). The name should be in a canonical form
	// (e.g., leading "." is not accepted).
	//
	// In practice, teams usually precompile into the binary all types that they
	// expect it to use in the context of Any. However, for URLs which use the
	// scheme `http`, `https`, or no scheme, one can optionally set up a type
	// server that maps type URLs to message definitions as follows:
	//
	//   - If no scheme is provided, `https` is assumed.
	//   - An HTTP GET on the URL must yield a [google.protobuf.Type][]
	//     value in binary format, or produce an error.
	//   - Applications are allowed to cache lookup results based on the
	//     URL, or have them precompiled into a binary to avoid any
	//     lookup. Therefore, binary compatibility needs to be preserved
	//     on changes to types. (Use versioned type names to manage
	//     breaking changes.)
	//
	// Note: this functionality is not currently available in the official
	// protobuf release, and it is not used for type URLs beginning with
	// type.googleapis.com. As of May 2023, there are no widely used type server
	// implementations and no plans to implement one.
	//
	// Schemes other than `http`, `https` (or the empty scheme) might be
	// used with implementation specific semantics.
	public get TypeUrl(): string {
		return this._fields.TypeUrl
	}

	public set TypeUrl(value: string) {
		this._fields.TypeUrl = value
	}

	// Must be a valid serialized protocol buffer of the above specified type.
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
		TypeUrl: string
		Value: $.Slice<number>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, TypeUrl?: string, Value?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			TypeUrl: init?.TypeUrl ?? ("" as string),
			Value: init?.Value ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Any {
		return new Any(this, true)
	}

	public __goscriptAssign(source: Any): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.TypeUrl = values.TypeUrl
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_any_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetTypeUrl(): string {
		const x: Any | $.VarRef<Any> | null = this;
		if (x != null) {
			return $.pointerValue<Any>(x).TypeUrl
		}
		return ""
	}

	public GetValue(): $.Slice<number> {
		const x: Any | $.VarRef<Any> | null = this;
		if (x != null) {
			return $.pointerValue<Any>(x).Value
		}
		return null
	}

	public async MarshalFrom(m: proto.Message | null): globalThis.Promise<$.GoError> {
		const x: Any | $.VarRef<Any> | null = this;
		return MarshalFrom(x, m, new proto.MarshalOptions(undefined, true))
	}

	public async MessageIs(m: proto.Message | null): globalThis.Promise<boolean> {
		const x: Any | $.VarRef<Any> | null = this;
		if (m == null) {
			return false
		}
		let url = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Any).GetTypeUrl() : Any.prototype.GetTypeUrl.call(x))
		let name = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!strings.HasSuffix(url, name)) {
			return false
		}
		return ($.stringLen(url) == $.stringLen(name)) || ($.indexString(url, ($.stringLen(url) - $.stringLen(name)) - 1) == 47)
	}

	public MessageName(): protoreflect.FullName {
		const x: Any | $.VarRef<Any> | null = this;
		let url = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Any).GetTypeUrl() : Any.prototype.GetTypeUrl.call(x))
		let name = url
		{
			let i = strings.LastIndexByte(url, 47)
			if (i >= 0) {
				name = $.sliceStringOrBytes(name, i + 1, undefined)
			}
		}
		if (!protoreflect.FullName_IsValid(name)) {
			return ""
		}
		return name
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Any | $.VarRef<Any> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_google_protobuf_any_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any"))))
	}

	public Reset(): void {
		let x: Any | $.VarRef<Any> | null = this;
		$.assignStruct($.pointerValue<Any>(x), $.markAsStructValue(new Any()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_google_protobuf_any_proto_msgTypes!, 0)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Any | $.VarRef<Any> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any")))
	}

	public async UnmarshalNew(): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const x: Any | $.VarRef<Any> | null = this;
		return UnmarshalNew(x, new proto.UnmarshalOptions(undefined, true))
	}

	public async UnmarshalTo(m: proto.Message | null): globalThis.Promise<$.GoError> {
		const x: Any | $.VarRef<Any> | null = this;
		return UnmarshalTo(x, m, new proto.UnmarshalOptions(undefined, true))
	}

	static __typeInfo = $.registerStructType(
		"anypb.Any",
		() => new Any(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetTypeUrl", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("MarshalFrom", [["m", "protoreflect.ProtoMessage"]], ["error"], true), $.methodSignature("MessageIs", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MessageName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("UnmarshalNew", [], ["protoreflect.ProtoMessage", "error"], true), $.methodSignature("UnmarshalTo", [["m", "protoreflect.ProtoMessage"]], ["error"], true)],
		Any,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "google.golang.org/protobuf/types/known/anypb" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/protobuf/types/known/anypb" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/protobuf/types/known/anypb" }), /* @__PURE__ */ $.structField("TypeUrl", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=type_url,json=typeUrl,proto3\" json:\"type_url,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 56, true, { tag: "protobuf:\"bytes,2,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export async function New(src: proto.Message | null): globalThis.Promise<[Any | $.VarRef<Any> | null, $.GoError]> {
	let dst: Any | $.VarRef<Any> | null = new Any()
	{
		let err = await (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? ((dst as any) as Any).MarshalFrom(src) : Any.prototype.MarshalFrom.call(dst, src))
		if (err != null) {
			return [null, err]
		}
	}
	return [dst, null]
}

export async function MarshalFrom(dst: Any | $.VarRef<Any> | null, src: proto.Message | null, opts: proto.MarshalOptions): globalThis.Promise<$.GoError> {
	const dst$: Any = dst == null ? $.pointerTarget<Any>(dst) : (dst as any).__isVarRef === true ? (dst as any).value : (dst as any).__goValue === undefined ? (dst as any) : $.pointerTarget<Any>(dst)
	const urlPrefix: string = "type.googleapis.com/"
	if (src == null) {
		return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("invalid nil source message", null)
	}
	let __goscriptTuple0: any = await opts.Marshal(src)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return err
	}
	;(dst$ as Any).TypeUrl = $.concatString("type.googleapis.com/", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(src)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait));
	;(dst$ as Any).Value = b
	return null
}

export async function UnmarshalTo(src: Any | $.VarRef<Any> | null, dst: proto.Message | null, opts: proto.UnmarshalOptions): globalThis.Promise<$.GoError> {
	if (src == null) {
		return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("invalid nil source message", null)
	}
	if (!await (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).MessageIs(dst) : Any.prototype.MessageIs.call(src, dst))) {
		let got = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(dst)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let want = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).MessageName() : Any.prototype.MessageName.call(src))
		return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("mismatched message type: got %q, want %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(got, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(want, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
	}
	return $.markAsStructValue($.cloneStructValue(opts)).Unmarshal((src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).GetValue() : Any.prototype.GetValue.call(src)), dst)
}

export async function UnmarshalNew(src: Any | $.VarRef<Any> | null, opts: proto.UnmarshalOptions): globalThis.Promise<[proto.Message | null, $.GoError]> {
	let dst: proto.Message | null = null! as proto.Message | null
	let err: $.GoError = null! as $.GoError
	if ($.stringEqual((src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).GetTypeUrl() : Any.prototype.GetTypeUrl.call(src)), "")) {
		return [null, await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("invalid empty type URL", null)]
	}
	if (opts.Resolver == null) {
		opts.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
	}
	let [r, ok] = $.typeAssertTuple<protoregistry.MessageTypeResolver | null>(opts.Resolver, "protoregistry.MessageTypeResolver")
	if (!ok) {
		return [null, protoregistry.NotFound]
	}
	let __goscriptTuple1: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<protoregistry.MessageTypeResolver, null>) : $.pointerValue<Exclude<protoregistry.MessageTypeResolver, null>>(r)).FindMessageByURL((src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).GetTypeUrl() : Any.prototype.GetTypeUrl.call(src)))
	let mt = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		if ($.comparableEqual(err, protoregistry.NotFound)) {
			return [null, err]
		}
		return [null, await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).NewError("could not resolve %q: %v", $.arrayToSlice<any>([(src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).GetTypeUrl() : Any.prototype.GetTypeUrl.call(src)), (err as any)]))]
	}
	dst = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [dst, await $.markAsStructValue($.cloneStructValue(opts)).Unmarshal((src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as Any).GetValue() : Any.prototype.GetValue.call(src)), dst)]
}

export let File_google_protobuf_any_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_protobuf_any_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_protobuf_any_proto = __goscriptValue
}

export let file_google_protobuf_any_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 25, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 97, 110, 121, 46, 112, 114, 111, 116, 111, 18, 15, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 34, 54, 10, 3, 65, 110, 121, 18, 25, 10, 8, 116, 121, 112, 101, 95, 117, 114, 108, 24, 1, 32, 1, 40, 9, 82, 7, 116, 121, 112, 101, 85, 114, 108, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 12, 82, 5, 118, 97, 108, 117, 101, 66, 118, 10, 19, 99, 111, 109, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 66, 8, 65, 110, 121, 80, 114, 111, 116, 111, 80, 1, 90, 44, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 121, 112, 101, 115, 47, 107, 110, 111, 119, 110, 47, 97, 110, 121, 112, 98, 162, 2, 3, 71, 80, 66, 170, 2, 30, 71, 111, 111, 103, 108, 101, 46, 80, 114, 111, 116, 111, 98, 117, 102, 46, 87, 101, 108, 108, 75, 110, 111, 119, 110, 84, 121, 112, 101, 115, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_google_protobuf_any_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_any_proto_rawDesc = __goscriptValue
}

export let file_google_protobuf_any_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_protobuf_any_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_protobuf_any_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_protobuf_any_proto_rawDescData: $.Slice<number> = file_google_protobuf_any_proto_rawDesc

export function __goscript_set_file_google_protobuf_any_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_any_proto_rawDescData = __goscriptValue
}

export async function file_google_protobuf_any_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_protobuf_any_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_protobuf_any_proto_rawDescData = $.pointerValue<impl.Export>(protoimpl.X).CompressGZIP(file_google_protobuf_any_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_protobuf_any_proto_rawDescData
}

export let file_google_protobuf_any_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(1, undefined, undefined, () => new impl.MessageInfo(undefined, true))

export function __goscript_set_file_google_protobuf_any_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_protobuf_any_proto_msgTypes = __goscriptValue
}

export let file_google_protobuf_any_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(null, "*anypb.Any", /* @__PURE__ */ $.pointerType("anypb.Any"))])

export function __goscript_set_file_google_protobuf_any_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_protobuf_any_proto_goTypes = __goscriptValue
}

export let file_google_protobuf_any_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([0, 0, 0, 0, 0])

export function __goscript_set_file_google_protobuf_any_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_any_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_protobuf_any_proto_init()
}

export async function file_google_protobuf_any_proto_init(): globalThis.Promise<void> {
	if (File_google_protobuf_any_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_protobuf_any_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Any | $.VarRef<Any> | null = ((v as any)?.__goType === "*anypb.Any" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Any | $.VarRef<Any> | null) : $.mustTypeAssert<Any | $.VarRef<Any> | null>(v, /* @__PURE__ */ $.pointerType("anypb.Any")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Any>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Any>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Any>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
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
			"anypb.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new filetype.Builder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "anypb.x", "anypb.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new filedesc.Builder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_google_protobuf_any_proto_rawDesc, NumEnums: 0, NumMessages: 1, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_google_protobuf_any_proto_goTypes, DependencyIndexes: file_google_protobuf_any_proto_depIdxs, MessageInfos: file_google_protobuf_any_proto_msgTypes}, true))).Build()
	File_google_protobuf_any_proto = out.File
	file_google_protobuf_any_proto_rawDesc = null
	file_google_protobuf_any_proto_goTypes = null
	file_google_protobuf_any_proto_depIdxs = null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptAwait: any

await __goscriptInit0()
