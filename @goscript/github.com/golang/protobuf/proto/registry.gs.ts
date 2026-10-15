// Generated file based on registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protodesc from "@goscript/google.golang.org/protobuf/reflect/protodesc/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_wire from "./wire.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/compress/gzip/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protodesc/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "./extensions.gs.ts"
import "./proto.gs.ts"
import "./wire.gs.ts"

export type filePath = string

export type fileDescGZIP = $.Slice<number>

export type enumName = string

export type enumsByName = globalThis.Map<string, number> | null

export type enumsByNumber = globalThis.Map<number, string> | null

export type messageName = string

export type extensionsByNumber = globalThis.Map<number, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null> | null

export let fileCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_fileCache(__goscriptValue: sync.Map): void {
	$.assignStruct(fileCache.value, __goscriptValue)
}

export async function RegisterFile(s: filePath, d: fileDescGZIP): globalThis.Promise<void> {
	// Decompress the descriptor.
	let __goscriptTuple0: any = await gzip.NewReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader(d), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!)
	let zr: gzip.Reader | $.VarRef<gzip.Reader> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic(await fmt.Sprintf("proto: invalid compressed file descriptor: %v", (err as any)))
	}
	let __goscriptTuple1: any = await ioutil.ReadAll($.interfaceValue<io.Reader | null>(zr, "*gzip.Reader", /* @__PURE__ */ $.pointerType("gzip.Reader")))
	let b: $.Slice<number> = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		$.panic(await fmt.Sprintf("proto: invalid compressed file descriptor: %v", (err as any)))
	}

	// Construct a protoreflect.FileDescriptor from the raw descriptor.
	// Note that DescBuilder.Build automatically registers the constructed
	// file descriptor with the v2 registry.
	await $.markAsStructValue($.cloneStructValue(new filedesc.Builder({RawDescriptor: b}, true))).Build()

	// Locally cache the raw descriptor form for the file.
	await fileCache.value.Store(s, $.interfaceValue(d, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}

export async function FileDescriptor(s: filePath): globalThis.Promise<fileDescGZIP> {
	{
		let [v, ok] = await fileCache.value.Load(s)
		if (ok) {
			return $.mustTypeAssert<fileDescGZIP>(v, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		}
	}

	// Find the descriptor in the v2 registry.
	let b: $.Slice<number> = null! as $.Slice<number>
	{
		let [fd, ] = await protoregistry.Files.prototype.FindFileByPath.call(protoregistry.GlobalFiles, s)
		if (fd != null) {
			let __goscriptTuple2: any = await __goscript_wire.Marshal($.interfaceValue<__goscript_proto.Message | null>(await protodesc.ToFileDescriptorProto(fd), "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
			b = __goscriptTuple2[0]
		}
	}

	// Locally cache the raw descriptor form for the file.
	if ($.sliceLen(b) > 0) {
		let [v, ] = await fileCache.value.LoadOrStore(s, $.interfaceValue($.pointerValue<impl.Export>(protoimpl.X).CompressGZIP(b), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		return $.mustTypeAssert<fileDescGZIP>(v, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	}
	return null
}

export let enumCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_enumCache(__goscriptValue: sync.Map): void {
	$.assignStruct(enumCache.value, __goscriptValue)
}

export let numFilesCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_numFilesCache(__goscriptValue: sync.Map): void {
	$.assignStruct(numFilesCache.value, __goscriptValue)
}

export async function RegisterEnum(s: enumName, _p1: enumsByNumber, m: enumsByName): globalThis.Promise<void> {
	{
		let [, ok] = await enumCache.value.Load(s)
		if (ok) {
			$.panic($.concatString("proto: duplicate enum registered: ", s))
		}
	}
	await enumCache.value.Store(s, $.interfaceValue(m, "map[string]int32", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32"))))
}

export async function EnumValueMap(s: enumName): globalThis.Promise<enumsByName> {
	{
		let [v, ok] = await enumCache.value.Load(s)
		if (ok) {
			return $.mustTypeAssert<enumsByName>(v, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32")))
		}
	}

	// Check whether the cache is stale. If the number of files in the current
	// package differs, then it means that some enums may have been recently
	// registered upstream that we do not know about.
	let protoPkg: protoreflect.FullName = ""
	{
		let i = strings.LastIndexByte(s, 46)
		if (i >= 0) {
			protoPkg = $.sliceStringOrBytes(s, undefined, i)
		}
	}
	let [v, ] = await numFilesCache.value.Load($.namedValueInterfaceValue<any>(protoPkg, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	let [numFiles, ] = $.typeAssertTuple<number>(v, /* @__PURE__ */ $.basicType("int"))
	if (await protoregistry.Files.prototype.NumFilesByPackage.call(protoregistry.GlobalFiles, protoPkg) == numFiles) {
		return null
	}

	// Update the enum cache for all enums declared in the given proto package.
	numFiles = 0
	await protoregistry.Files.prototype.RangeFilesByPackage.call(protoregistry.GlobalFiles, protoPkg, $.functionValue(async (fd: protoreflect.FileDescriptor | null): globalThis.Promise<boolean> => {
		await walkEnums((fd as any), $.functionValue(async (ed: protoreflect.EnumDescriptor | null): globalThis.Promise<void> => {
			let name = await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).LegacyEnumName(ed)
			{
				let [, ok] = await enumCache.value.Load(name)
				if (!ok) {
					let m: enumsByName = $.makeMap<string, number>()
					let evs = (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					for (let i = (__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
						let ev = (__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						$.mapSet(m, (__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.int((__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32))
					}
					await enumCache.value.LoadOrStore(name, $.interfaceValue(m, "map[string]int32", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32"))))
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.EnumDescriptor"], results: [] } as $.FunctionTypeInfo)))
		numFiles++
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FileDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	await numFilesCache.value.Store($.namedValueInterfaceValue<any>(protoPkg, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(numFiles, "int"))

	// Check cache again for enum map.
	{
		let [__goscriptShadow0, ok] = await enumCache.value.Load(s)
		if (ok) {
			return $.mustTypeAssert<enumsByName>(__goscriptShadow0, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32")))
		}
	}
	return null
}

export async function walkEnums(d: any, f: ((_p0: protoreflect.EnumDescriptor | null) => void) | null): globalThis.Promise<void> {
	let eds = (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as any) : $.pointerValue<any>(d)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (eds !== null && (eds as any).__isVarRef !== true && (eds as any).__goValue === undefined ? (eds as Exclude<protoreflect.EnumDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>(eds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		void (__goscriptAwait = f!((__goscriptAwait = (eds !== null && (eds as any).__isVarRef !== true && (eds as any).__goValue === undefined ? (eds as Exclude<protoreflect.EnumDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>(eds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let mds = (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as any) : $.pointerValue<any>(d)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (mds !== null && (mds as any).__isVarRef !== true && (mds as any).__goValue === undefined ? (mds as Exclude<protoreflect.MessageDescriptors, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>(mds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		await walkEnums(((__goscriptAwait = (mds !== null && (mds as any).__isVarRef !== true && (mds as any).__goValue === undefined ? (mds as Exclude<protoreflect.MessageDescriptors, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>(mds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), f)
	}
}

export let messageTypeCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_messageTypeCache(__goscriptValue: sync.Map): void {
	$.assignStruct(messageTypeCache.value, __goscriptValue)
}

export async function RegisterType(m: __goscript_proto.Message | null, s: messageName): globalThis.Promise<void> {
	let mt = await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).LegacyMessageTypeOf(m, s)
	{
		let err = await protoregistry.Types.prototype.RegisterMessage.call(protoregistry.GlobalTypes, mt)
		if (err != null) {
			$.panic((err as any))
		}
	}
	await messageTypeCache.value.Store(s, (reflect.TypeOf((m as any)) as any))
}

export async function RegisterMapType(m: any, s: messageName): globalThis.Promise<void> {
	let t = reflect.TypeOf(m)
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21) {
		$.panic(await fmt.Sprintf("invalid map kind: %v", (t as any)))
	}
	{
		let [, ok] = await messageTypeCache.value.Load(s)
		if (ok) {
			$.panic((fmt.Errorf("proto: duplicate proto message registered: %s", s) as any))
		}
	}
	await messageTypeCache.value.Store(s, (t as any))
}

export async function MessageType(s: messageName): globalThis.Promise<reflect.Type | null> {
	{
		let [v, ok] = await messageTypeCache.value.Load(s)
		if (ok) {
			return $.mustTypeAssert<reflect.Type | null>(v, "reflect.Type")
		}
	}

	// Derive the message type from the v2 registry.
	let t: reflect.Type | null = null! as reflect.Type | null
	{
		let [mt, ] = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, s)
		if (mt != null) {
			t = await messageGoType(mt)
		}
	}

	// If we could not get a concrete type, it is possible that it is a
	// pseudo-message for a map entry.
	if (t == null) {
		let [d, ] = await protoregistry.Files.prototype.FindDescriptorByName.call(protoregistry.GlobalFiles, s)
		{
			let [md, ] = $.typeAssertTuple<protoreflect.MessageDescriptor | null>(d, "protoreflect.MessageDescriptor")
			if ((md != null) && (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).IsMapEntry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				let kt = await goTypeForField((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				let vt = await goTypeForField((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				t = reflect.MapOf($.pointerValueOrNil(kt)!, $.pointerValueOrNil(vt)!)
			}
		}
	}

	// Locally cache the message type for the given name.
	if (t != null) {
		let [v, ] = await messageTypeCache.value.LoadOrStore(s, (t as any))
		return $.mustTypeAssert<reflect.Type | null>(v, "reflect.Type")
	}
	return null
}

export async function goTypeForField(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<reflect.Type | null> {
	{
		let k = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (k) {
			case protoreflect.EnumKind:
			{
				{
					let [et, ] = await protoregistry.Types.prototype.FindEnumByName.call(protoregistry.GlobalTypes, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					if (et != null) {
						return enumGoType(et)
					}
				}
				return reflect.TypeOf($.namedValueInterfaceValue<any>(0, "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")))
				break
			}
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				{
					let [mt, ] = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					if (mt != null) {
						return messageGoType(mt)
					}
				}
				return $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*protoreflect.Message", /* @__PURE__ */ $.pointerType("protoreflect.Message")))).Elem()
				break
			}
			default:
			{
				return reflect.TypeOf(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Interface())
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function enumGoType(et: protoreflect.EnumType | null): globalThis.Promise<reflect.Type | null> {
	return reflect.TypeOf(((__goscriptAwait = (et !== null && (et as any).__isVarRef !== true && (et as any).__goValue === undefined ? (et as Exclude<protoreflect.EnumType, null>) : $.pointerValue<Exclude<protoreflect.EnumType, null>>(et)).New(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
}

export async function messageGoType(mt: protoreflect.MessageType | null): globalThis.Promise<reflect.Type | null> {
	return reflect.TypeOf((await __goscript_proto.MessageV1(((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_proto.GeneratedMessage | null)) as any))
}

export async function MessageName(m: __goscript_proto.Message | null): globalThis.Promise<messageName> {
	if (m == null) {
		return ""
	}
	let __goscriptShadow1 = m
	{
		let __goscriptTuple3: any = $.typeAssertTuple<any>(__goscriptShadow1, { kind: $.TypeKind.Interface, methods: [{ name: "XXX_MessageName", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("string") }] }] })
		let __goscriptShadow2 = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			return (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as any) : $.pointerValue<any>(__goscriptShadow2)).XXX_MessageName()
		}
	}
	return $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageDescriptorOf((m as impl.message | null)))).FullName()
}

export async function RegisterExtension(d: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null): globalThis.Promise<void> {
	{
		let err = await protoregistry.Types.prototype.RegisterExtension.call(protoregistry.GlobalTypes, $.interfaceValue<protoreflect.ExtensionType | null>(d, "*impl.ExtensionInfo", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo")))
		if (err != null) {
			$.panic((err as any))
		}
	}
}

export let extensionCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_extensionCache(__goscriptValue: sync.Map): void {
	$.assignStruct(extensionCache.value, __goscriptValue)
}

export async function RegisteredExtensions(m: __goscript_proto.Message | null): globalThis.Promise<extensionsByNumber> {
	// Check whether the cache is stale. If the number of extensions for
	// the given message differs, then it means that some extensions were
	// recently registered upstream that we do not know about.
	let s = await MessageName(m)
	let [v, ] = await extensionCache.value.Load(s)
	let __goscriptTuple4: any = $.typeAssertTuple<extensionsByNumber>(v, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("impl.ExtensionInfo")))
	let xs: extensionsByNumber = __goscriptTuple4[0]
	if (await protoregistry.Types.prototype.NumExtensionsByMessage.call(protoregistry.GlobalTypes, s) == $.len(xs)) {
		return xs
	}

	// Cache is stale, re-compute the extensions map.
	xs = $.makeMap<number, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>()
	await protoregistry.Types.prototype.RangeExtensionsByMessage.call(protoregistry.GlobalTypes, s, $.functionValue(async (xt: protoreflect.ExtensionType | null): globalThis.Promise<boolean> => {
		{
			let __goscriptTuple5: any = $.typeAssertTuple<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>(xt, /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))
			let xd: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				$.mapSet(xs, $.int((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), xd)
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.ExtensionType"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	await extensionCache.value.Store(s, $.interfaceValue(xs, "map[int32]*impl.ExtensionInfo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))))
	return xs
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
