// Generated file based on build.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "./desc.gs.ts"
import "./desc_init.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.Builder", "filedesc.resolverByIndex", "filedesc.Out"])

export type resolverByIndex = {
	FindEnumByIndex(_p0: number, _p1: number, _p2: $.Slice<__goscript_desc.Enum>, _p3: $.Slice<__goscript_desc.Message>): protoreflect.EnumDescriptor | null | globalThis.Promise<protoreflect.EnumDescriptor | null>
	FindMessageByIndex(_p0: number, _p1: number, _p2: $.Slice<__goscript_desc.Enum>, _p3: $.Slice<__goscript_desc.Message>): protoreflect.MessageDescriptor | null | globalThis.Promise<protoreflect.MessageDescriptor | null>
}

$.registerInterfaceType(
	"filedesc.resolverByIndex",
	null,
	[$.methodSignature("FindEnumByIndex", [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.sliceType("filedesc.Enum"), /* @__PURE__ */ $.sliceType("filedesc.Message")], ["protoreflect.EnumDescriptor"]), $.methodSignature("FindMessageByIndex", [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.sliceType("filedesc.Enum"), /* @__PURE__ */ $.sliceType("filedesc.Message")], ["protoreflect.MessageDescriptor"])]
);

export class Builder {
	// GoPackagePath is the Go package path that is invoking this builder.
	public get GoPackagePath(): string {
		return this._fields.GoPackagePath
	}

	public set GoPackagePath(value: string) {
		this._fields.GoPackagePath = value
	}

	// RawDescriptor is the wire-encoded bytes of FileDescriptorProto
	// and must be populated.
	public get RawDescriptor(): $.Slice<number> {
		return this._fields.RawDescriptor
	}

	public set RawDescriptor(value: $.Slice<number>) {
		this._fields.RawDescriptor = value
	}

	// NumEnums is the total number of enums declared in the file.
	public get NumEnums(): number {
		return this._fields.NumEnums
	}

	public set NumEnums(value: number) {
		this._fields.NumEnums = value
	}

	// NumMessages is the total number of messages declared in the file.
	// It includes the implicit message declarations for map entries.
	public get NumMessages(): number {
		return this._fields.NumMessages
	}

	public set NumMessages(value: number) {
		this._fields.NumMessages = value
	}

	// NumExtensions is the total number of extensions declared in the file.
	public get NumExtensions(): number {
		return this._fields.NumExtensions
	}

	public set NumExtensions(value: number) {
		this._fields.NumExtensions = value
	}

	// NumServices is the total number of services declared in the file.
	public get NumServices(): number {
		return this._fields.NumServices
	}

	public set NumServices(value: number) {
		this._fields.NumServices = value
	}

	// TypeResolver resolves extension field types for descriptor options.
	// If nil, it uses protoregistry.GlobalTypes.
	public get TypeResolver(): any {
		return this._fields.TypeResolver
	}

	public set TypeResolver(value: any) {
		this._fields.TypeResolver = value
	}

	// FileRegistry is use to lookup file, enum, and message dependencies.
	// Once constructed, the file descriptor is registered here.
	// If nil, it uses protoregistry.GlobalFiles.
	public get FileRegistry(): any {
		return this._fields.FileRegistry
	}

	public set FileRegistry(value: any) {
		this._fields.FileRegistry = value
	}

	public _fields: {
		GoPackagePath: string
		RawDescriptor: $.Slice<number>
		NumEnums: number
		NumMessages: number
		NumExtensions: number
		NumServices: number
		TypeResolver: any
		FileRegistry: any
	}

	constructor(init?: Partial<{GoPackagePath?: string, RawDescriptor?: $.Slice<number>, NumEnums?: number, NumMessages?: number, NumExtensions?: number, NumServices?: number, TypeResolver?: any, FileRegistry?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			GoPackagePath: init?.GoPackagePath ?? ("" as string),
			RawDescriptor: init?.RawDescriptor ?? (null! as $.Slice<number>),
			NumEnums: init?.NumEnums ?? (0 as number),
			NumMessages: init?.NumMessages ?? (0 as number),
			NumExtensions: init?.NumExtensions ?? (0 as number),
			NumServices: init?.NumServices ?? (0 as number),
			TypeResolver: init?.TypeResolver ?? (null! as any),
			FileRegistry: init?.FileRegistry ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Builder {
		return new Builder(this, true)
	}

	public __goscriptAssign(source: Builder): void {
		const target = this._fields
		const values = source._fields
		target.GoPackagePath = values.GoPackagePath
		target.RawDescriptor = values.RawDescriptor
		target.NumEnums = values.NumEnums
		target.NumMessages = values.NumMessages
		target.NumExtensions = values.NumExtensions
		target.NumServices = values.NumServices
		target.TypeResolver = $.assignFieldValue(target.TypeResolver, values.TypeResolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] })
		target.FileRegistry = $.assignFieldValue(target.FileRegistry, values.FileRegistry, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindDescriptorByName", [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [/* @__PURE__ */ $.basicType("string")], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("RegisterFile", ["protoreflect.FileDescriptor"], ["error"])] })
	}

	public async Build(): globalThis.Promise<Out> {
		let db = $.varRef(this);
		let out: Out = new Out(undefined, true)
		// Populate the counts if uninitialized.
		if ($.int((((((((((db.value.NumEnums + db.value.NumMessages) | 0)) + db.value.NumExtensions) | 0)) + db.value.NumServices) | 0)), 32) == 0) {
			db.value.unmarshalCounts(db.value.RawDescriptor, true)
		}

		// Initialize resolvers and registries if unpopulated.
		if (db.value.TypeResolver == null) {
			db.value.TypeResolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}
		if (db.value.FileRegistry == null) {
			db.value.FileRegistry = $.interfaceValue(protoregistry.GlobalFiles, "*protoregistry.Files", /* @__PURE__ */ $.pointerType("protoregistry.Files"))
		}

		let fd: __goscript_desc.File | $.VarRef<__goscript_desc.File> | null = await __goscript_desc_init.newRawFile((db.value).clone())
		let fd$: __goscript_desc.File = fd == null ? $.pointerTarget<__goscript_desc.File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_desc.File>(fd)
		out.File = $.interfaceValue<protoreflect.FileDescriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File"))
		out.Enums = (fd$ as __goscript_desc.File).fileRaw.allEnums
		out.Messages = (fd$ as __goscript_desc.File).fileRaw.allMessages
		out.Extensions = (fd$ as __goscript_desc.File).fileRaw.allExtensions
		out.Services = (fd$ as __goscript_desc.File).fileRaw.allServices

		{
			let err = (__goscriptAwait = $.pointerValue<any>(db.value.FileRegistry).RegisterFile($.interfaceValue<protoreflect.FileDescriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				$.panic((err as any))
			}
		}
		return (out).clone()
	}

	public optionsUnmarshaler(p: $.VarRef<protoreflect.ProtoMessage | null> | null, b: $.Slice<number>): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		const db: Builder | $.VarRef<Builder> | null = this;
		if (b == null) {
			return (null as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null)
		}
		let opts: protoreflect.ProtoMessage | null = null! as protoreflect.ProtoMessage | null
		let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))
		return $.functionValue(async (): globalThis.Promise<protoreflect.ProtoMessage | null> => {
			await once.value.Do($.functionValue(async (): globalThis.Promise<void> => {
				if ($.pointerValue<protoreflect.ProtoMessage | null>(p) == null) {
					$.panic("Descriptor.Options called without importing the descriptor package")
				}
				opts = $.mustTypeAssert<protoreflect.ProtoMessage | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(($.pointerValue<protoreflect.ProtoMessage | null>(p) as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface(), "protoreflect.ProtoMessage")
				{
					let err = await $.markAsStructValue($.cloneStructValue((new proto.UnmarshalOptions({AllowPartial: true, Resolver: $.pointerValue<Builder>(db).TypeResolver}, true)))).Unmarshal(b, opts)
					if (err != null) {
						$.panic((err as any))
					}
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return opts
		}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
	}

	public unmarshalCounts(b: $.Slice<number>, isFile: boolean): void {
		let db: Builder | $.VarRef<Builder> | null = this;
		const db$: Builder = db == null ? $.pointerTarget<Builder>(db) : (db as any).__isVarRef === true ? (db as any).value : (db as any).__goValue === undefined ? (db as any) : $.pointerTarget<Builder>(db)
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple0: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple0[0]
					let m = __goscriptTuple0[1]
					b = $.goSlice(b, m, undefined)
					if (isFile) {
						switch (num) {
							case genid.FileDescriptorProto_EnumType_field_number:
							{
								;(db$ as Builder).NumEnums = (((db$ as Builder).NumEnums + 1) | 0)
								break
							}
							case genid.FileDescriptorProto_MessageType_field_number:
							{
								void (db !== null && (db as any).__isVarRef !== true && (db as any).__goValue === undefined ? ((db as any) as Builder).unmarshalCounts(v, false) : Builder.prototype.unmarshalCounts.call(db, v, false));
								;(db$ as Builder).NumMessages = (((db$ as Builder).NumMessages + 1) | 0)
								break
							}
							case genid.FileDescriptorProto_Extension_field_number:
							{
								;(db$ as Builder).NumExtensions = (((db$ as Builder).NumExtensions + 1) | 0)
								break
							}
							case genid.FileDescriptorProto_Service_field_number:
							{
								;(db$ as Builder).NumServices = (((db$ as Builder).NumServices + 1) | 0)
								break
							}
						}
					} else {
						switch (num) {
							case genid.DescriptorProto_EnumType_field_number:
							{
								;(db$ as Builder).NumEnums = (((db$ as Builder).NumEnums + 1) | 0)
								break
							}
							case genid.DescriptorProto_NestedType_field_number:
							{
								void (db !== null && (db as any).__isVarRef !== true && (db as any).__goValue === undefined ? ((db as any) as Builder).unmarshalCounts(v, false) : Builder.prototype.unmarshalCounts.call(db, v, false));
								;(db$ as Builder).NumMessages = (((db$ as Builder).NumMessages + 1) | 0)
								break
							}
							case genid.DescriptorProto_Extension_field_number:
							{
								;(db$ as Builder).NumExtensions = (((db$ as Builder).NumExtensions + 1) | 0)
								break
							}
						}
					}
					break
				}
				default:
				{
					let m: number = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Builder",
		() => new Builder(),
		() => [$.methodSignature("Build", [], [["out", "filedesc.Out"]]), $.methodSignature("optionsUnmarshaler", [["p", /* @__PURE__ */ $.pointerType("protoreflect.ProtoMessage")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo)], true), $.methodSignature("unmarshalCounts", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["isFile", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		Builder,
		() => [/* @__PURE__ */ $.structField("GoPackagePath", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RawDescriptor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, true), /* @__PURE__ */ $.structField("NumEnums", /* @__PURE__ */ $.basicType("int32"), [2], 40, true), /* @__PURE__ */ $.structField("NumMessages", /* @__PURE__ */ $.basicType("int32"), [3], 44, true), /* @__PURE__ */ $.structField("NumExtensions", /* @__PURE__ */ $.basicType("int32"), [4], 48, true), /* @__PURE__ */ $.structField("NumServices", /* @__PURE__ */ $.basicType("int32"), [5], 52, true), /* @__PURE__ */ $.structField("TypeResolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [6], 56, true), /* @__PURE__ */ $.structField("FileRegistry", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindDescriptorByName", [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [/* @__PURE__ */ $.basicType("string")], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("RegisterFile", ["protoreflect.FileDescriptor"], ["error"])] }, [7], 72, true)]
	)
}

export class Out {
	public get File(): protoreflect.FileDescriptor | null {
		return this._fields.File
	}

	public set File(value: protoreflect.FileDescriptor | null) {
		this._fields.File = value
	}

	// Enums is all enum descriptors in "flattened ordering".
	public get Enums(): $.Slice<__goscript_desc.Enum> {
		return this._fields.Enums
	}

	public set Enums(value: $.Slice<__goscript_desc.Enum>) {
		this._fields.Enums = value
	}

	// Messages is all message descriptors in "flattened ordering".
	// It includes the implicit message declarations for map entries.
	public get Messages(): $.Slice<__goscript_desc.Message> {
		return this._fields.Messages
	}

	public set Messages(value: $.Slice<__goscript_desc.Message>) {
		this._fields.Messages = value
	}

	// Extensions is all extension descriptors in "flattened ordering".
	public get Extensions(): $.Slice<__goscript_desc.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<__goscript_desc.Extension>) {
		this._fields.Extensions = value
	}

	// Service is all service descriptors in "flattened ordering".
	public get Services(): $.Slice<__goscript_desc.Service> {
		return this._fields.Services
	}

	public set Services(value: $.Slice<__goscript_desc.Service>) {
		this._fields.Services = value
	}

	public _fields: {
		File: protoreflect.FileDescriptor | null
		Enums: $.Slice<__goscript_desc.Enum>
		Messages: $.Slice<__goscript_desc.Message>
		Extensions: $.Slice<__goscript_desc.Extension>
		Services: $.Slice<__goscript_desc.Service>
	}

	constructor(init?: Partial<{File?: protoreflect.FileDescriptor | null, Enums?: $.Slice<__goscript_desc.Enum>, Messages?: $.Slice<__goscript_desc.Message>, Extensions?: $.Slice<__goscript_desc.Extension>, Services?: $.Slice<__goscript_desc.Service>}>, __goscriptValue?: boolean) {
		this._fields = {
			File: init?.File ?? (null! as protoreflect.FileDescriptor | null),
			Enums: init?.Enums ?? (null! as $.Slice<__goscript_desc.Enum>),
			Messages: init?.Messages ?? (null! as $.Slice<__goscript_desc.Message>),
			Extensions: init?.Extensions ?? (null! as $.Slice<__goscript_desc.Extension>),
			Services: init?.Services ?? (null! as $.Slice<__goscript_desc.Service>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Out {
		return new Out(this, true)
	}

	public __goscriptAssign(source: Out): void {
		const target = this._fields
		const values = source._fields
		target.File = $.assignFieldValue(target.File, values.File, "protoreflect.FileDescriptor")
		target.Enums = values.Enums
		target.Messages = values.Messages
		target.Extensions = values.Extensions
		target.Services = values.Services
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Out",
		() => new Out(),
		() => [],
		Out,
		() => [/* @__PURE__ */ $.structField("File", "protoreflect.FileDescriptor", [0], 0, true), /* @__PURE__ */ $.structField("Enums", /* @__PURE__ */ $.sliceType("filedesc.Enum"), [1], 16, true), /* @__PURE__ */ $.structField("Messages", /* @__PURE__ */ $.sliceType("filedesc.Message"), [2], 40, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("filedesc.Extension"), [3], 64, true), /* @__PURE__ */ $.structField("Services", /* @__PURE__ */ $.sliceType("filedesc.Service"), [4], 88, true)]
	)
}

export const listFieldDeps: number = 0

export const listExtTargets: number = 1

export const listExtDeps: number = 2

export const listMethInDeps: number = 3

export const listMethOutDeps: number = 4

var __goscriptAwait: any
