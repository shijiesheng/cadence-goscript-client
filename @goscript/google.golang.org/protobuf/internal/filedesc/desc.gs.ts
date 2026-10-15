// Generated file based on desc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as descfmt from "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as defval from "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"

import * as __goscript_editions from "./editions.gs.ts"

import * as __goscript_placeholder from "./placeholder.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "./build.gs.ts"
import "./desc_init.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"
import "./editions.gs.ts"
import "./placeholder.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.Edition", "filedesc.File", "filedesc.FileL1", "filedesc.FileL2", "filedesc.EditionFeatures", "filedesc.Enum", "filedesc.EnumL1", "filedesc.EnumL2", "filedesc.EnumValue", "filedesc.EnumValueL1", "filedesc.Message", "filedesc.MessageL1", "filedesc.MessageL2", "filedesc.Field", "filedesc.FieldL1", "filedesc.Oneof", "filedesc.OneofL1", "filedesc.Extension", "filedesc.ExtensionL1", "filedesc.ExtensionL2", "filedesc.Service", "filedesc.ServiceL1", "filedesc.ServiceL2", "filedesc.Method", "filedesc.MethodL1", "filedesc.Base", "filedesc.BaseL0", "filedesc.stringName", "filedesc.defaultValue"])

export type Edition = number

export class EditionFeatures {
	// IsFieldPresence is true if field_presence is EXPLICIT
	// https://protobuf.dev/editions/features/#field_presence
	public get IsFieldPresence(): boolean {
		return this._fields.IsFieldPresence
	}

	public set IsFieldPresence(value: boolean) {
		this._fields.IsFieldPresence = value
	}

	// IsFieldPresence is true if field_presence is LEGACY_REQUIRED
	// https://protobuf.dev/editions/features/#field_presence
	public get IsLegacyRequired(): boolean {
		return this._fields.IsLegacyRequired
	}

	public set IsLegacyRequired(value: boolean) {
		this._fields.IsLegacyRequired = value
	}

	// IsOpenEnum is true if enum_type is OPEN
	// https://protobuf.dev/editions/features/#enum_type
	public get IsOpenEnum(): boolean {
		return this._fields.IsOpenEnum
	}

	public set IsOpenEnum(value: boolean) {
		this._fields.IsOpenEnum = value
	}

	// IsPacked is true if repeated_field_encoding is PACKED
	// https://protobuf.dev/editions/features/#repeated_field_encoding
	public get IsPacked(): boolean {
		return this._fields.IsPacked
	}

	public set IsPacked(value: boolean) {
		this._fields.IsPacked = value
	}

	// IsUTF8Validated is true if utf_validation is VERIFY
	// https://protobuf.dev/editions/features/#utf8_validation
	public get IsUTF8Validated(): boolean {
		return this._fields.IsUTF8Validated
	}

	public set IsUTF8Validated(value: boolean) {
		this._fields.IsUTF8Validated = value
	}

	// IsDelimitedEncoded is true if message_encoding is DELIMITED
	// https://protobuf.dev/editions/features/#message_encoding
	public get IsDelimitedEncoded(): boolean {
		return this._fields.IsDelimitedEncoded
	}

	public set IsDelimitedEncoded(value: boolean) {
		this._fields.IsDelimitedEncoded = value
	}

	// IsJSONCompliant is true if json_format is ALLOW
	// https://protobuf.dev/editions/features/#json_format
	public get IsJSONCompliant(): boolean {
		return this._fields.IsJSONCompliant
	}

	public set IsJSONCompliant(value: boolean) {
		this._fields.IsJSONCompliant = value
	}

	// GenerateLegacyUnmarshalJSON determines if the plugin generates the
	// UnmarshalJSON([]byte) error method for enums.
	public get GenerateLegacyUnmarshalJSON(): boolean {
		return this._fields.GenerateLegacyUnmarshalJSON
	}

	public set GenerateLegacyUnmarshalJSON(value: boolean) {
		this._fields.GenerateLegacyUnmarshalJSON = value
	}

	public _fields: {
		IsFieldPresence: boolean
		IsLegacyRequired: boolean
		IsOpenEnum: boolean
		IsPacked: boolean
		IsUTF8Validated: boolean
		IsDelimitedEncoded: boolean
		IsJSONCompliant: boolean
		GenerateLegacyUnmarshalJSON: boolean
	}

	constructor(init?: Partial<{IsFieldPresence?: boolean, IsLegacyRequired?: boolean, IsOpenEnum?: boolean, IsPacked?: boolean, IsUTF8Validated?: boolean, IsDelimitedEncoded?: boolean, IsJSONCompliant?: boolean, GenerateLegacyUnmarshalJSON?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			IsFieldPresence: init?.IsFieldPresence ?? (false as boolean),
			IsLegacyRequired: init?.IsLegacyRequired ?? (false as boolean),
			IsOpenEnum: init?.IsOpenEnum ?? (false as boolean),
			IsPacked: init?.IsPacked ?? (false as boolean),
			IsUTF8Validated: init?.IsUTF8Validated ?? (false as boolean),
			IsDelimitedEncoded: init?.IsDelimitedEncoded ?? (false as boolean),
			IsJSONCompliant: init?.IsJSONCompliant ?? (false as boolean),
			GenerateLegacyUnmarshalJSON: init?.GenerateLegacyUnmarshalJSON ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EditionFeatures {
		return new EditionFeatures(this, true)
	}

	public __goscriptAssign(source: EditionFeatures): void {
		const target = this._fields
		const values = source._fields
		target.IsFieldPresence = values.IsFieldPresence
		target.IsLegacyRequired = values.IsLegacyRequired
		target.IsOpenEnum = values.IsOpenEnum
		target.IsPacked = values.IsPacked
		target.IsUTF8Validated = values.IsUTF8Validated
		target.IsDelimitedEncoded = values.IsDelimitedEncoded
		target.IsJSONCompliant = values.IsJSONCompliant
		target.GenerateLegacyUnmarshalJSON = values.GenerateLegacyUnmarshalJSON
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EditionFeatures",
		() => new EditionFeatures(),
		() => [],
		EditionFeatures,
		() => [/* @__PURE__ */ $.structField("IsFieldPresence", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("IsLegacyRequired", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("IsOpenEnum", /* @__PURE__ */ $.basicType("bool"), [2], 2, true), /* @__PURE__ */ $.structField("IsPacked", /* @__PURE__ */ $.basicType("bool"), [3], 3, true), /* @__PURE__ */ $.structField("IsUTF8Validated", /* @__PURE__ */ $.basicType("bool"), [4], 4, true), /* @__PURE__ */ $.structField("IsDelimitedEncoded", /* @__PURE__ */ $.basicType("bool"), [5], 5, true), /* @__PURE__ */ $.structField("IsJSONCompliant", /* @__PURE__ */ $.basicType("bool"), [6], 6, true), /* @__PURE__ */ $.structField("GenerateLegacyUnmarshalJSON", /* @__PURE__ */ $.basicType("bool"), [7], 7, true)]
	)
}

export class FileL1 {
	public get Syntax(): protoreflect.Syntax {
		return this._fields.Syntax
	}

	public set Syntax(value: protoreflect.Syntax) {
		this._fields.Syntax = value
	}

	public get Edition(): Edition {
		return this._fields.Edition
	}

	public set Edition(value: Edition) {
		this._fields.Edition = value
	}

	public get Path(): string {
		return this._fields.Path
	}

	public set Path(value: string) {
		this._fields.Path = value
	}

	public get Package(): protoreflect.FullName {
		return this._fields.Package
	}

	public set Package(value: protoreflect.FullName) {
		this._fields.Package = value
	}

	public get Enums(): __goscript_desc_list_gen.Enums {
		return this._fields.Enums
	}

	public set Enums(value: __goscript_desc_list_gen.Enums) {
		this._fields.Enums = value
	}

	public get Messages(): __goscript_desc_list_gen.Messages {
		return this._fields.Messages
	}

	public set Messages(value: __goscript_desc_list_gen.Messages) {
		this._fields.Messages = value
	}

	public get Extensions(): __goscript_desc_list_gen.Extensions {
		return this._fields.Extensions
	}

	public set Extensions(value: __goscript_desc_list_gen.Extensions) {
		this._fields.Extensions = value
	}

	public get Services(): __goscript_desc_list_gen.Services {
		return this._fields.Services
	}

	public set Services(value: __goscript_desc_list_gen.Services) {
		this._fields.Services = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		Syntax: protoreflect.Syntax
		Edition: Edition
		Path: string
		Package: protoreflect.FullName
		Enums: __goscript_desc_list_gen.Enums
		Messages: __goscript_desc_list_gen.Messages
		Extensions: __goscript_desc_list_gen.Extensions
		Services: __goscript_desc_list_gen.Services
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{Syntax?: protoreflect.Syntax, Edition?: Edition, Path?: string, Package?: protoreflect.FullName, Enums?: __goscript_desc_list_gen.Enums, Messages?: __goscript_desc_list_gen.Messages, Extensions?: __goscript_desc_list_gen.Extensions, Services?: __goscript_desc_list_gen.Services, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			Syntax: init?.Syntax ?? (0 as protoreflect.Syntax),
			Edition: init?.Edition ?? (0 as Edition),
			Path: init?.Path ?? ("" as string),
			Package: init?.Package ?? ("" as protoreflect.FullName),
			Enums: init?.Enums ? init.Enums.clone() : new __goscript_desc_list_gen.Enums(undefined, true),
			Messages: init?.Messages ? init.Messages.clone() : new __goscript_desc_list_gen.Messages(undefined, true),
			Extensions: init?.Extensions ? init.Extensions.clone() : new __goscript_desc_list_gen.Extensions(undefined, true),
			Services: init?.Services ? init.Services.clone() : new __goscript_desc_list_gen.Services(undefined, true),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileL1 {
		return new FileL1(this, true)
	}

	public __goscriptAssign(source: FileL1): void {
		const target = this._fields
		const values = source._fields
		target.Syntax = values.Syntax
		target.Edition = values.Edition
		target.Path = values.Path
		target.Package = values.Package
		$.assignStruct(target.Enums, values.Enums)
		$.assignStruct(target.Messages, values.Messages)
		$.assignStruct(target.Extensions, values.Extensions)
		$.assignStruct(target.Services, values.Services)
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.FileL1",
		() => new FileL1(),
		() => [],
		FileL1,
		() => [/* @__PURE__ */ $.structField("Syntax", /* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax"), [0], 0, true), /* @__PURE__ */ $.structField("Edition", /* @__PURE__ */ $.basicType("int32", "filedesc.Edition"), [1], 4, true), /* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.basicType("string"), [2], 8, true), /* @__PURE__ */ $.structField("Package", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), [3], 24, true), /* @__PURE__ */ $.structField("Enums", "filedesc.Enums", [4], 40, true), /* @__PURE__ */ $.structField("Messages", "filedesc.Messages", [5], 88, true), /* @__PURE__ */ $.structField("Extensions", "filedesc.Extensions", [6], 136, true), /* @__PURE__ */ $.structField("Services", "filedesc.Services", [7], 184, true), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [8], 232, true)]
	)
}

export class File {
	public get fileRaw(): __goscript_desc_init.fileRaw {
		return this._fields.fileRaw
	}

	public set fileRaw(value: __goscript_desc_init.fileRaw) {
		this._fields.fileRaw = value
	}

	public get L1(): FileL1 {
		return this._fields.L1
	}

	public set L1(value: FileL1) {
		this._fields.L1 = value
	}

	public get once(): number {
		return this._fields.once
	}

	public set once(value: number) {
		this._fields.once = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get L2(): FileL2 | $.VarRef<FileL2> | null {
		return this._fields.L2
	}

	public set L2(value: FileL2 | $.VarRef<FileL2> | null) {
		this._fields.L2 = value
	}

	public _fields: {
		fileRaw: __goscript_desc_init.fileRaw
		L1: FileL1
		once: number
		mu: sync.Mutex
		L2: FileL2 | $.VarRef<FileL2> | null
	}

	constructor(init?: Partial<{fileRaw?: __goscript_desc_init.fileRaw, L1?: FileL1, once?: number, mu?: sync.Mutex, L2?: FileL2 | $.VarRef<FileL2> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fileRaw: init?.fileRaw ? init.fileRaw.clone() : new __goscript_desc_init.fileRaw(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new FileL1(undefined, true),
			once: init?.once ?? (0 as number),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			L2: init?.L2 ?? (null! as FileL2 | $.VarRef<FileL2> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): File {
		return new File(this, true)
	}

	public __goscriptAssign(source: File): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.fileRaw, values.fileRaw)
		$.assignStruct(target.L1, values.L1)
		target.once = values.once
		$.assignStruct(target.mu, values.mu)
		target.L2 = values.L2
	}

	public Edition(): number {
		const fd: File | $.VarRef<File> | null = this;
		return $.int($.pointerValue<File>(fd).L1.Edition, 32)
	}

	public Enums(): protoreflect.EnumDescriptors | null {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.EnumDescriptors | null>($.fieldRef($.pointerValue<File>(fd).L1._fields, "Enums"), "*filedesc.Enums", /* @__PURE__ */ $.pointerType("filedesc.Enums"))
	}

	public Extensions(): protoreflect.ExtensionDescriptors | null {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.ExtensionDescriptors | null>($.fieldRef($.pointerValue<File>(fd).L1._fields, "Extensions"), "*filedesc.Extensions", /* @__PURE__ */ $.pointerType("filedesc.Extensions"))
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const fd: File | $.VarRef<File> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")))
	}

	public FullName(): protoreflect.FullName {
		const fd: File | $.VarRef<File> | null = this;
		return $.pointerValue<File>(fd).L1.Package
	}

	public GoPackagePath(): string {
		const fd: File | $.VarRef<File> | null = this;
		return $.pointerValue<File>(fd).fileRaw.builder.GoPackagePath
	}

	public async Imports(): globalThis.Promise<protoreflect.FileImports | null> {
		const fd: File | $.VarRef<File> | null = this;
		return $.namedValueInterfaceValue<protoreflect.FileImports | null>($.fieldRef($.pointerValue<FileL2>(await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).lazyInit() : File.prototype.lazyInit.call(fd)))._fields, "Imports"), "*filedesc.FileImports", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}

	public Index(): number {
		const fd: File | $.VarRef<File> | null = this;
		return 0
	}

	public IsPlaceholder(): boolean {
		const fd: File | $.VarRef<File> | null = this;
		return false
	}

	public Messages(): protoreflect.MessageDescriptors | null {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.MessageDescriptors | null>($.fieldRef($.pointerValue<File>(fd).L1._fields, "Messages"), "*filedesc.Messages", /* @__PURE__ */ $.pointerType("filedesc.Messages"))
	}

	public Name(): protoreflect.Name {
		const fd: File | $.VarRef<File> | null = this;
		return protoreflect.FullName_Name($.pointerValue<File>(fd).L1.Package)
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const fd: File | $.VarRef<File> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<FileL2>(await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).lazyInit() : File.prototype.lazyInit.call(fd))).Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.File.value
	}

	public Package(): protoreflect.FullName {
		const fd: File | $.VarRef<File> | null = this;
		return $.pointerValue<File>(fd).L1.Package
	}

	public Parent(): protoreflect.Descriptor | null {
		const fd: File | $.VarRef<File> | null = this;
		return null
	}

	public ParentFile(): protoreflect.FileDescriptor | null {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.FileDescriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File"))
	}

	public Path(): string {
		const fd: File | $.VarRef<File> | null = this;
		return $.pointerValue<File>(fd).L1.Path
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const fd: File | $.VarRef<File> | null = this;
	}

	public ProtoType(_p0: protoreflect.FileDescriptor | null): void {
		const fd: File | $.VarRef<File> | null = this;
	}

	public Services(): protoreflect.ServiceDescriptors | null {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.ServiceDescriptors | null>($.fieldRef($.pointerValue<File>(fd).L1._fields, "Services"), "*filedesc.Services", /* @__PURE__ */ $.pointerType("filedesc.Services"))
	}

	public async SourceLocations(): globalThis.Promise<protoreflect.SourceLocations | null> {
		const fd: File | $.VarRef<File> | null = this;
		return $.interfaceValue<protoreflect.SourceLocations | null>($.fieldRef($.pointerValue<FileL2>(await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).lazyInit() : File.prototype.lazyInit.call(fd)))._fields, "Locations"), "*filedesc.SourceLocations", /* @__PURE__ */ $.pointerType("filedesc.SourceLocations"))
	}

	public Syntax(): protoreflect.Syntax {
		const fd: File | $.VarRef<File> | null = this;
		return $.pointerValue<File>(fd).L1.Syntax
	}

	public allocEnums(n: number): $.Slice<Enum> {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let total = $.sliceLen((fd$ as File).fileRaw.allEnums)
		let es: $.Slice<Enum> = $.goSlice((fd$ as File).fileRaw.allEnums, total, total + n);
		;(fd$ as File).fileRaw.allEnums = $.goSlice((fd$ as File).fileRaw.allEnums, undefined, total + n)
		return es
	}

	public allocExtensions(n: number): $.Slice<Extension> {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let total = $.sliceLen((fd$ as File).fileRaw.allExtensions)
		let xs: $.Slice<Extension> = $.goSlice((fd$ as File).fileRaw.allExtensions, total, total + n);
		;(fd$ as File).fileRaw.allExtensions = $.goSlice((fd$ as File).fileRaw.allExtensions, undefined, total + n)
		return xs
	}

	public allocMessages(n: number): $.Slice<Message> {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let total = $.sliceLen((fd$ as File).fileRaw.allMessages)
		let ms: $.Slice<Message> = $.goSlice((fd$ as File).fileRaw.allMessages, total, total + n);
		;(fd$ as File).fileRaw.allMessages = $.goSlice((fd$ as File).fileRaw.allMessages, undefined, total + n)
		return ms
	}

	public allocServices(n: number): $.Slice<Service> {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let total = $.sliceLen((fd$ as File).fileRaw.allServices)
		let xs: $.Slice<Service> = $.goSlice((fd$ as File).fileRaw.allServices, total, total + n);
		;(fd$ as File).fileRaw.allServices = $.goSlice((fd$ as File).fileRaw.allServices, undefined, total + n)
		return xs
	}

	public checkDecls(): void {
		const fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		switch ((true as boolean)) {
			case $.sliceLen((fd$ as File).fileRaw.allEnums) != $.cap((fd$ as File).fileRaw.allEnums):
			{
				break
			}
			case $.sliceLen((fd$ as File).fileRaw.allMessages) != $.cap((fd$ as File).fileRaw.allMessages):
			{
				break
			}
			case $.sliceLen((fd$ as File).fileRaw.allExtensions) != $.cap((fd$ as File).fileRaw.allExtensions):
			{
				break
			}
			case $.sliceLen((fd$ as File).fileRaw.allServices) != $.cap((fd$ as File).fileRaw.allServices):
			{
				break
			}
			default:
			{
				return
				break
			}
		}
		$.panic("mismatching cardinality")
	}

	public initDecls(numEnums: number, numMessages: number, numExtensions: number, numServices: number): void {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd);
		;(fd$ as File).fileRaw.allEnums = $.makeSlice<Enum>(0, numEnums, undefined, () => new Enum(undefined, true));
		;(fd$ as File).fileRaw.allMessages = $.makeSlice<Message>(0, numMessages, undefined, () => new Message(undefined, true));
		;(fd$ as File).fileRaw.allExtensions = $.makeSlice<Extension>(0, numExtensions, undefined, () => new Extension(undefined, true));
		;(fd$ as File).fileRaw.allServices = $.makeSlice<Service>(0, numServices, undefined, () => new Service(undefined, true))
	}

	public async lazyInit(): globalThis.Promise<FileL2 | $.VarRef<FileL2> | null> {
		const fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		if (atomic.LoadUint32($.fieldRef((fd$ as File)._fields, "once")) == 0) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).lazyInitOnce() : File.prototype.lazyInitOnce.call(fd))
		}
		return (fd$ as File).L2
	}

	public async lazyInitOnce(): globalThis.Promise<void> {
		const fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		await (fd$ as File).mu.Lock()
		if ((fd$ as File).L2 == null) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).lazyRawInit() : File.prototype.lazyRawInit.call(fd))
		}
		atomic.StoreUint32($.fieldRef((fd$ as File)._fields, "once"), 1)
		void (fd$ as File).mu.Unlock()
	}

	public async lazyRawInit(): globalThis.Promise<void> {
		const fd: File | $.VarRef<File> | null = this;
		await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).unmarshalFull($.pointerValue<File>(fd).fileRaw.builder.RawDescriptor) : File.prototype.unmarshalFull.call(fd, $.pointerValue<File>(fd).fileRaw.builder.RawDescriptor))
		await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).resolveMessages() : File.prototype.resolveMessages.call(fd))
		await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).resolveExtensions() : File.prototype.resolveExtensions.call(fd))
		await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).resolveServices() : File.prototype.resolveServices.call(fd))
	}

	public async resolveEnumDependency(ed: protoreflect.EnumDescriptor | null, i: number, j: number): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		const file: File | $.VarRef<File> | null = this;
		const file$: File = file == null ? $.pointerTarget<File>(file) : (file as any).__isVarRef === true ? (file as any).value : (file as any).__goValue === undefined ? (file as any) : $.pointerTarget<File>(file)
		let r = (file$ as File).fileRaw.builder.FileRegistry
		let __goscriptShadow0 = r
		{
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_build.resolverByIndex | null>(__goscriptShadow0, "filedesc.resolverByIndex")
			let __goscriptShadow1 = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				{
					let ed2 = (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_build.resolverByIndex, null>) : $.pointerValue<Exclude<__goscript_build.resolverByIndex, null>>(__goscriptShadow1)).FindEnumByIndex(i, j, (file$ as File).fileRaw.allEnums, (file$ as File).fileRaw.allMessages), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (ed2 != null) {
						return ed2
					}
				}
			}
		}
		for (let __goscriptRangeTarget0 = (file$ as File).fileRaw.allEnums, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			{
				let ed2: Enum | $.VarRef<Enum> | null = $.indexRef((file$ as File).fileRaw.allEnums!, i)
				if ($.stringEqual($.pointerValue<Enum>(ed2).Base.L0.FullName, (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
					return $.interfaceValue<protoreflect.EnumDescriptor | null>(ed2, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))
				}
			}
		}
		{
			let [d, ] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as any) : $.pointerValue<any>(r)).FindDescriptorByName((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (d != null) {
				return $.mustTypeAssert<protoreflect.EnumDescriptor | null>(d, "protoreflect.EnumDescriptor")
			}
		}
		return ed
	}

	public async resolveExtensions(): globalThis.Promise<void> {
		const file: File | $.VarRef<File> | null = this;
		const file$: File = file == null ? $.pointerTarget<File>(file) : (file as any).__isVarRef === true ? (file as any).value : (file as any).__goValue === undefined ? (file as any) : $.pointerTarget<File>(file)
		let depIdx: number = 0
		for (let __goscriptRangeTarget1 = (file$ as File).fileRaw.allExtensions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let xd: Extension | $.VarRef<Extension> | null = $.indexRef((file$ as File).fileRaw.allExtensions!, i)
			let xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)

			switch ((xd$ as Extension).L1.Kind) {
				case protoreflect.EnumKind:
				{
					$.pointerValue<ExtensionL2>((xd$ as Extension).L2).Enum = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveEnumDependency($.pointerValue<ExtensionL2>((xd$ as Extension).L2).Enum, 2, depIdx) : File.prototype.resolveEnumDependency.call(file, $.pointerValue<ExtensionL2>((xd$ as Extension).L2).Enum, 2, depIdx))
					depIdx = ((depIdx + 1) | 0)
					break
				}
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					$.pointerValue<ExtensionL2>((xd$ as Extension).L2).Message = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveMessageDependency($.pointerValue<ExtensionL2>((xd$ as Extension).L2).Message, 2, depIdx) : File.prototype.resolveMessageDependency.call(file, $.pointerValue<ExtensionL2>((xd$ as Extension).L2).Message, 2, depIdx))
					depIdx = ((depIdx + 1) | 0)
					break
				}
			}

			{
				let v = ($.pointerValue<ExtensionL2>((xd$ as Extension).L2).Default.val).clone()
				if (v.IsValid()) {
					$.assignStruct($.pointerValue<ExtensionL2>((xd$ as Extension).L2).Default, await unmarshalDefault(await $.markAsStructValue($.cloneStructValue(v)).Bytes(), (xd$ as Extension).L1.Kind, file, $.pointerValue<ExtensionL2>((xd$ as Extension).L2).Enum))
				}
			}
		}
	}

	public async resolveMessageDependency(md: protoreflect.MessageDescriptor | null, i: number, j: number): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const file: File | $.VarRef<File> | null = this;
		const file$: File = file == null ? $.pointerTarget<File>(file) : (file as any).__isVarRef === true ? (file as any).value : (file as any).__goValue === undefined ? (file as any) : $.pointerTarget<File>(file)
		let r = (file$ as File).fileRaw.builder.FileRegistry
		let __goscriptShadow2 = r
		{
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_build.resolverByIndex | null>(__goscriptShadow2, "filedesc.resolverByIndex")
			let __goscriptShadow3 = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				{
					let md2 = (__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<__goscript_build.resolverByIndex, null>) : $.pointerValue<Exclude<__goscript_build.resolverByIndex, null>>(__goscriptShadow3)).FindMessageByIndex(i, j, (file$ as File).fileRaw.allEnums, (file$ as File).fileRaw.allMessages), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (md2 != null) {
						return md2
					}
				}
			}
		}
		for (let __goscriptRangeTarget2 = (file$ as File).fileRaw.allMessages, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			{
				let md2: Message | $.VarRef<Message> | null = $.indexRef((file$ as File).fileRaw.allMessages!, i)
				if ($.stringEqual($.pointerValue<Message>(md2).Base.L0.FullName, (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
					return $.interfaceValue<protoreflect.MessageDescriptor | null>(md2, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
				}
			}
		}
		{
			let [d, ] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as any) : $.pointerValue<any>(r)).FindDescriptorByName((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (d != null) {
				return $.mustTypeAssert<protoreflect.MessageDescriptor | null>(d, "protoreflect.MessageDescriptor")
			}
		}
		return md
	}

	public async resolveMessages(): globalThis.Promise<void> {
		const file: File | $.VarRef<File> | null = this;
		const file$: File = file == null ? $.pointerTarget<File>(file) : (file as any).__isVarRef === true ? (file as any).value : (file as any).__goValue === undefined ? (file as any) : $.pointerTarget<File>(file)
		let depIdx: number = 0
		for (let __goscriptRangeTarget4 = (file$ as File).fileRaw.allMessages, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let md: Message | $.VarRef<Message> | null = $.indexRef((file$ as File).fileRaw.allMessages!, i)
			let md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md)

			for (let __goscriptRangeTarget3 = $.pointerValue<MessageL2>((md$ as Message).L2).Fields.List, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), j = 0; j < __goscriptRangeWindow4.length; j++) {
				let fd: Field | $.VarRef<Field> | null = $.indexRef($.pointerValue<MessageL2>((md$ as Message).L2).Fields.List!, j)
				let fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)

				if ((fd$ as Field).L1.IsWeak) {
					continue
				}

				switch ((fd$ as Field).L1.Kind) {
					case protoreflect.EnumKind:
					{
						;(fd$ as Field).L1.Enum = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveEnumDependency((fd$ as Field).L1.Enum, 0, depIdx) : File.prototype.resolveEnumDependency.call(file, (fd$ as Field).L1.Enum, 0, depIdx))
						depIdx = ((depIdx + 1) | 0)
						break
					}
					case protoreflect.MessageKind:
					case protoreflect.GroupKind:
					{
						;(fd$ as Field).L1.Message = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveMessageDependency((fd$ as Field).L1.Message, 0, depIdx) : File.prototype.resolveMessageDependency.call(file, (fd$ as Field).L1.Message, 0, depIdx))
						depIdx = ((depIdx + 1) | 0)
						if (((fd$ as Field).L1.Kind == 10) && (await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsMap() : Field.prototype.IsMap.call(fd)) || await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsMapEntry() : Field.prototype.IsMapEntry.call(fd)))) {

							;(fd$ as Field).L1.Kind = 11
						}
						break
					}
				}

				{
					let v = ((fd$ as Field).L1.Default.val).clone()
					if (v.IsValid()) {
						$.assignStruct((fd$ as Field).L1.Default, await unmarshalDefault(await $.markAsStructValue($.cloneStructValue(v)).Bytes(), (fd$ as Field).L1.Kind, file, (fd$ as Field).L1.Enum))
					}
				}
			}
		}
	}

	public async resolveServices(): globalThis.Promise<void> {
		const file: File | $.VarRef<File> | null = this;
		const file$: File = file == null ? $.pointerTarget<File>(file) : (file as any).__isVarRef === true ? (file as any).value : (file as any).__goValue === undefined ? (file as any) : $.pointerTarget<File>(file)
		let depIdx: number = 0
		for (let __goscriptRangeTarget6 = (file$ as File).fileRaw.allServices, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let sd: Service | $.VarRef<Service> | null = $.indexRef((file$ as File).fileRaw.allServices!, i)
			let sd$: Service = sd == null ? $.pointerTarget<Service>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<Service>(sd)

			for (let __goscriptRangeTarget5 = $.pointerValue<ServiceL2>((sd$ as Service).L2).Methods.List, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), j = 0; j < __goscriptRangeWindow6.length; j++) {
				let md: Method | $.VarRef<Method> | null = $.indexRef($.pointerValue<ServiceL2>((sd$ as Service).L2).Methods.List!, j)
				let md$: Method = md == null ? $.pointerTarget<Method>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Method>(md);
				;(md$ as Method).L1.Input = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveMessageDependency((md$ as Method).L1.Input, 3, depIdx) : File.prototype.resolveMessageDependency.call(file, (md$ as Method).L1.Input, 3, depIdx));
				;(md$ as Method).L1.Output = await (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? ((file as any) as File).resolveMessageDependency((md$ as Method).L1.Output, 4, depIdx) : File.prototype.resolveMessageDependency.call(file, (md$ as Method).L1.Output, 4, depIdx))
				depIdx = ((depIdx + 1) | 0)
			}
		}
	}

	public async unmarshalFull(b: $.Slice<number>): globalThis.Promise<void> {
		let fd: File | $.VarRef<File> | null = this;
		using __defer = new $.DisposableStack()
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let sb: strs.Builder | $.VarRef<strs.Builder> | null = await __goscript_desc_init.getBuilder()
		const __goscriptDeferArg0 = sb
		__defer.defer(() => { __goscript_desc_init.putBuilder(__goscriptDeferArg0) })

		let enumIdx: number = 0
		let messageIdx: number = 0
		let extensionIdx: number = 0
		let serviceIdx: number = 0
		let rawOptions: $.Slice<number> = null! as $.Slice<number>;
		;(fd$ as File).L2 = new FileL2()
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FileDescriptorProto_PublicDependency_field_number:
						{
							$.arrayIndex($.pointerValue<FileL2>((fd$ as File).L2).Imports!, globalThis.Number(v)).IsPublic = true
							break
						}
						case genid.FileDescriptorProto_WeakDependency_field_number:
						{
							$.arrayIndex($.pointerValue<FileL2>((fd$ as File).L2).Imports!, globalThis.Number(v)).IsWeak = true
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple2: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple2[0]
					let m = __goscriptTuple2[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FileDescriptorProto_Dependency_field_number:
						{
							let path = (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v))
							let [imp, ] = await $.pointerValue<any>((fd$ as File).fileRaw.builder.FileRegistry).FindFileByPath(path)
							if (imp == null) {
								imp = $.namedValueInterfaceValue<protoreflect.FileDescriptor | null>(path, "filedesc.PlaceholderFile", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
							}
							$.pointerValue<FileL2>((fd$ as File).L2).Imports = ($.appendOne(($.pointerValue<FileL2>((fd$ as File).L2).Imports as __goscript_desc_list.FileImports), new protoreflect.FileImport({FileDescriptor: imp}, true)) as __goscript_desc_list.FileImports)
							break
						}
						case genid.FileDescriptorProto_EnumType_field_number:
						{
							await $.arrayIndex((fd$ as File).L1.Enums.List!, enumIdx).unmarshalFull(v, sb)
							enumIdx++
							break
						}
						case genid.FileDescriptorProto_MessageType_field_number:
						{
							await $.arrayIndex((fd$ as File).L1.Messages.List!, messageIdx).unmarshalFull(v, sb)
							messageIdx++
							break
						}
						case genid.FileDescriptorProto_Extension_field_number:
						{
							$.arrayIndex((fd$ as File).L1.Extensions.List!, extensionIdx).unmarshalFull(v, sb)
							extensionIdx++
							break
						}
						case genid.FileDescriptorProto_Service_field_number:
						{
							await $.arrayIndex((fd$ as File).L1.Services.List!, serviceIdx).unmarshalFull(v, sb)
							serviceIdx++
							break
						}
						case genid.FileDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		$.pointerValue<FileL2>((fd$ as File).L2).Options = (fd$ as File).fileRaw.builder.optionsUnmarshaler(descopts.File, rawOptions)
	}

	public async unmarshalSeed(b: $.Slice<number>): globalThis.Promise<void> {
		let fd: File | $.VarRef<File> | null = this;
		using __defer = new $.DisposableStack()
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		let sb: strs.Builder | $.VarRef<strs.Builder> | null = await __goscript_desc_init.getBuilder()
		const __goscriptDeferArg1 = sb
		__defer.defer(() => { __goscript_desc_init.putBuilder(__goscriptDeferArg1) })

		let prevField: protoreflect.FieldNumber = 0
		let numEnums: number = 0
		let numMessages: number = 0
		let numExtensions: number = 0
		let numServices: number = 0
		let posEnums: number = 0
		let posMessages: number = 0
		let posExtensions: number = 0
		let posServices: number = 0
		let options: $.Slice<number> = null! as $.Slice<number>
		let b0: $.Slice<number> = b
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple3: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple3[0]
					let m = __goscriptTuple3[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FileDescriptorProto_Syntax_field_number:
						{
							switch ($.bytesToString(v)) {
								case "proto2":
								{
									;(fd$ as File).L1.Syntax = 2;
									;(fd$ as File).L1.Edition = 998
									break
								}
								case "proto3":
								{
									;(fd$ as File).L1.Syntax = 3;
									;(fd$ as File).L1.Edition = 999
									break
								}
								case "editions":
								{
									;(fd$ as File).L1.Syntax = 4
									break
								}
								default:
								{
									$.panic("invalid syntax")
									break
								}
							}
							break
						}
						case genid.FileDescriptorProto_Name_field_number:
						{
							;(fd$ as File).L1.Path = (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v))
							break
						}
						case genid.FileDescriptorProto_Package_field_number:
						{
							;(fd$ as File).L1.Package = (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v))
							break
						}
						case genid.FileDescriptorProto_Options_field_number:
						{
							options = v
							break
						}
						case genid.FileDescriptorProto_EnumType_field_number:
						{
							if (prevField != 5) {
								if (numEnums > 0) {
									$.panic("non-contiguous repeated field")
								}
								posEnums = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numEnums++
							break
						}
						case genid.FileDescriptorProto_MessageType_field_number:
						{
							if (prevField != 4) {
								if (numMessages > 0) {
									$.panic("non-contiguous repeated field")
								}
								posMessages = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numMessages++
							break
						}
						case genid.FileDescriptorProto_Extension_field_number:
						{
							if (prevField != 7) {
								if (numExtensions > 0) {
									$.panic("non-contiguous repeated field")
								}
								posExtensions = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numExtensions++
							break
						}
						case genid.FileDescriptorProto_Service_field_number:
						{
							if (prevField != 6) {
								if (numServices > 0) {
									$.panic("non-contiguous repeated field")
								}
								posServices = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numServices++
							break
						}
					}
					prevField = num
					break
				}
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FileDescriptorProto_Edition_field_number:
						{
							;(fd$ as File).L1.Edition = $.int(v, 32)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					prevField = -1
					break
				}
			}
		}

		if ((fd$ as File).L1.Syntax == 0) {
			;(fd$ as File).L1.Syntax = 2;
			;(fd$ as File).L1.Edition = 998
		}

		$.assignStruct((fd$ as File).L1.EditionFeatures, await __goscript_editions.getFeaturesFor((fd$ as File).L1.Edition))

		if (options != null) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).unmarshalSeedOptions(options) : File.prototype.unmarshalSeedOptions.call(fd, options))
		}

		if (numEnums > 0) {
			;(fd$ as File).L1.Enums.List = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).allocEnums(numEnums) : File.prototype.allocEnums.call(fd, numEnums))
		}
		if (numMessages > 0) {
			;(fd$ as File).L1.Messages.List = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).allocMessages(numMessages) : File.prototype.allocMessages.call(fd, numMessages))
		}
		if (numExtensions > 0) {
			;(fd$ as File).L1.Extensions.List = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).allocExtensions(numExtensions) : File.prototype.allocExtensions.call(fd, numExtensions))
		}
		if (numServices > 0) {
			;(fd$ as File).L1.Services.List = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).allocServices(numServices) : File.prototype.allocServices.call(fd, numServices))
		}
		// implicitly initializes L2
		if (numEnums > 0) {
			let __goscriptShadow4: $.Slice<number> = $.goSlice(b0, posEnums, undefined)
			for (let __goscriptRangeTarget7 = (fd$ as File).L1.Enums.List, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow4)
				let __goscriptTuple4: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow4, n, undefined))
				let v: $.Slice<number> = __goscriptTuple4[0]
				let m = __goscriptTuple4[1]
				await $.arrayIndex((fd$ as File).L1.Enums.List!, i).unmarshalSeed(v, sb, fd, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), i)
				__goscriptShadow4 = $.goSlice(__goscriptShadow4, n + m, undefined)
			}
		}
		if (numMessages > 0) {
			let __goscriptShadow5: $.Slice<number> = $.goSlice(b0, posMessages, undefined)
			for (let __goscriptRangeTarget8 = (fd$ as File).L1.Messages.List, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow5)
				let __goscriptTuple5: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow5, n, undefined))
				let v: $.Slice<number> = __goscriptTuple5[0]
				let m = __goscriptTuple5[1]
				await $.arrayIndex((fd$ as File).L1.Messages.List!, i).unmarshalSeed(v, sb, fd, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), i)
				__goscriptShadow5 = $.goSlice(__goscriptShadow5, n + m, undefined)
			}
		}
		if (numExtensions > 0) {
			let __goscriptShadow6: $.Slice<number> = $.goSlice(b0, posExtensions, undefined)
			for (let __goscriptRangeTarget9 = (fd$ as File).L1.Extensions.List, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow6)
				let __goscriptTuple6: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow6, n, undefined))
				let v: $.Slice<number> = __goscriptTuple6[0]
				let m = __goscriptTuple6[1]
				await $.arrayIndex((fd$ as File).L1.Extensions.List!, i).unmarshalSeed(v, sb, fd, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), i)
				__goscriptShadow6 = $.goSlice(__goscriptShadow6, n + m, undefined)
			}
		}
		if (numServices > 0) {
			let __goscriptShadow7: $.Slice<number> = $.goSlice(b0, posServices, undefined)
			for (let __goscriptRangeTarget10 = (fd$ as File).L1.Services.List, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow7)
				let __goscriptTuple7: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow7, n, undefined))
				let v: $.Slice<number> = __goscriptTuple7[0]
				let m = __goscriptTuple7[1]
				await $.arrayIndex((fd$ as File).L1.Services.List!, i).unmarshalSeed(v, sb, fd, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), i)
				__goscriptShadow7 = $.goSlice(__goscriptShadow7, n + m, undefined)
			}
		}
	}

	public async unmarshalSeedOptions(b: $.Slice<number>): globalThis.Promise<void> {
		let fd: File | $.VarRef<File> | null = this;
		const fd$: File = fd == null ? $.pointerTarget<File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<File>(fd)
		{
			let __goscriptShadow8 = b
			for (let __goscriptShadow9: $.Slice<number> = __goscriptShadow8; $.sliceLen(__goscriptShadow9) > 0; ) {
				let [num, typ, n] = protowire.ConsumeTag(__goscriptShadow9)
				__goscriptShadow9 = $.goSlice(__goscriptShadow9, n, undefined)
				switch (typ) {
					case protowire.BytesType:
					{
						let __goscriptTuple8: any = protowire.ConsumeBytes(__goscriptShadow9)
						let v: $.Slice<number> = __goscriptTuple8[0]
						let m = __goscriptTuple8[1]
						__goscriptShadow9 = $.goSlice(__goscriptShadow9, m, undefined)
						switch (num) {
							case genid.FileOptions_Features_field_number:
							{
								if ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).Syntax() : File.prototype.Syntax.call(fd)) != 4) {
									$.panic(await fmt.Sprintf("invalid descriptor: using edition features in a proto with syntax %s", $.namedValueInterfaceValue<any>((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as File).Syntax() : File.prototype.Syntax.call(fd)), "protoreflect.Syntax", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())))
								}
								$.assignStruct((fd$ as File).L1.EditionFeatures, await __goscript_editions.unmarshalFeatureSet(v, ((fd$ as File).L1.EditionFeatures).clone()))
								break
							}
						}
						break
					}
					default:
					{
						let m = protowire.ConsumeFieldValue(num, typ, __goscriptShadow9)
						__goscriptShadow9 = $.goSlice(__goscriptShadow9, m, undefined)
						break
					}
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"filedesc.File",
		() => new File(),
		() => [$.methodSignature("Edition", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"], true), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("GoPackagePath", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Imports", [], ["protoreflect.FileImports"], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"], [], true), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"], true), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true), $.methodSignature("allocEnums", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("filedesc.Enum")], true), $.methodSignature("allocExtensions", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("filedesc.Extension")], true), $.methodSignature("allocMessages", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("filedesc.Message")], true), $.methodSignature("allocServices", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("filedesc.Service")], true), $.methodSignature("checkDecls", [], [], true), $.methodSignature("initDecls", [["numEnums", /* @__PURE__ */ $.basicType("int32")], ["numMessages", /* @__PURE__ */ $.basicType("int32")], ["numExtensions", /* @__PURE__ */ $.basicType("int32")], ["numServices", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.FileL2")], true), $.methodSignature("lazyInitOnce", [], [], true), $.methodSignature("lazyRawInit", [], [], true), $.methodSignature("resolveEnumDependency", [["ed", "protoreflect.EnumDescriptor"], ["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")]], ["protoreflect.EnumDescriptor"], true), $.methodSignature("resolveExtensions", [], [], true), $.methodSignature("resolveMessageDependency", [["md", "protoreflect.MessageDescriptor"], ["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")]], ["protoreflect.MessageDescriptor"], true), $.methodSignature("resolveMessages", [], [], true), $.methodSignature("resolveServices", [], [], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("unmarshalSeed", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("unmarshalSeedOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		File,
		() => [/* @__PURE__ */ $.structField("fileRaw", "filedesc.fileRaw", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc", anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.FileL1", [1], 184, true), /* @__PURE__ */ $.structField("once", /* @__PURE__ */ $.basicType("uint32"), [2], 424, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 428, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("L2", /* @__PURE__ */ $.pointerType("filedesc.FileL2"), [4], 440, true)]
	)
}

export class FileL2 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Imports(): __goscript_desc_list.FileImports {
		return this._fields.Imports
	}

	public set Imports(value: __goscript_desc_list.FileImports) {
		this._fields.Imports = value
	}

	public get Locations(): __goscript_desc_list.SourceLocations {
		return this._fields.Locations
	}

	public set Locations(value: __goscript_desc_list.SourceLocations) {
		this._fields.Locations = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Imports: __goscript_desc_list.FileImports
		Locations: __goscript_desc_list.SourceLocations
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Imports?: __goscript_desc_list.FileImports, Locations?: __goscript_desc_list.SourceLocations}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Imports: init?.Imports ?? (null! as __goscript_desc_list.FileImports),
			Locations: init?.Locations ? init.Locations.clone() : new __goscript_desc_list.SourceLocations(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileL2 {
		return new FileL2(this, true)
	}

	public __goscriptAssign(source: FileL2): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		target.Imports = values.Imports
		$.assignStruct(target.Locations, values.Locations)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.FileL2",
		() => new FileL2(),
		() => [],
		FileL2,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Imports", /* @__PURE__ */ $.sliceType("protoreflect.FileImport", "filedesc.FileImports"), [1], 8, true), /* @__PURE__ */ $.structField("Locations", "filedesc.SourceLocations", [2], 32, true)]
	)
}

export class BaseL0 {
	public get FullName(): protoreflect.FullName {
		return this._fields.FullName
	}

	public set FullName(value: protoreflect.FullName) {
		this._fields.FullName = value
	}

	public get ParentFile(): File | $.VarRef<File> | null {
		return this._fields.ParentFile
	}

	public set ParentFile(value: File | $.VarRef<File> | null) {
		this._fields.ParentFile = value
	}

	public get Parent(): protoreflect.Descriptor | null {
		return this._fields.Parent
	}

	public set Parent(value: protoreflect.Descriptor | null) {
		this._fields.Parent = value
	}

	public get Index(): number {
		return this._fields.Index
	}

	public set Index(value: number) {
		this._fields.Index = value
	}

	public _fields: {
		FullName: protoreflect.FullName
		ParentFile: File | $.VarRef<File> | null
		Parent: protoreflect.Descriptor | null
		Index: number
	}

	constructor(init?: Partial<{FullName?: protoreflect.FullName, ParentFile?: File | $.VarRef<File> | null, Parent?: protoreflect.Descriptor | null, Index?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FullName: init?.FullName ?? ("" as protoreflect.FullName),
			ParentFile: init?.ParentFile ?? (null! as File | $.VarRef<File> | null),
			Parent: init?.Parent ?? (null! as protoreflect.Descriptor | null),
			Index: init?.Index ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BaseL0 {
		return new BaseL0(this, true)
	}

	public __goscriptAssign(source: BaseL0): void {
		const target = this._fields
		const values = source._fields
		target.FullName = values.FullName
		target.ParentFile = values.ParentFile
		target.Parent = $.assignFieldValue(target.Parent, values.Parent, "protoreflect.Descriptor")
		target.Index = values.Index
	}

	static __typeInfo = $.registerStructType(
		"filedesc.BaseL0",
		() => new BaseL0(),
		() => [],
		BaseL0,
		() => [/* @__PURE__ */ $.structField("FullName", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), [0], 0, true), /* @__PURE__ */ $.structField("ParentFile", /* @__PURE__ */ $.pointerType("filedesc.File"), [1], 16, true), /* @__PURE__ */ $.structField("Parent", "protoreflect.Descriptor", [2], 24, true), /* @__PURE__ */ $.structField("Index", /* @__PURE__ */ $.basicType("int"), [3], 40, true)]
	)
}

export class Base {
	public get L0(): BaseL0 {
		return this._fields.L0
	}

	public set L0(value: BaseL0) {
		this._fields.L0 = value
	}

	public _fields: {
		L0: BaseL0
	}

	constructor(init?: Partial<{L0?: BaseL0}>, __goscriptValue?: boolean) {
		this._fields = {
			L0: init?.L0 ? init.L0.clone() : new BaseL0(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Base {
		return new Base(this, true)
	}

	public __goscriptAssign(source: Base): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.L0, values.L0)
	}

	public FullName(): protoreflect.FullName {
		const d: Base | $.VarRef<Base> | null = this;
		return $.pointerValue<Base>(d).L0.FullName
	}

	public Index(): number {
		const d: Base | $.VarRef<Base> | null = this;
		return $.pointerValue<Base>(d).L0.Index
	}

	public IsPlaceholder(): boolean {
		const d: Base | $.VarRef<Base> | null = this;
		return false
	}

	public Name(): protoreflect.Name {
		const d: Base | $.VarRef<Base> | null = this;
		return protoreflect.FullName_Name($.pointerValue<Base>(d).L0.FullName)
	}

	public Parent(): protoreflect.Descriptor | null {
		const d: Base | $.VarRef<Base> | null = this;
		return $.pointerValue<Base>(d).L0.Parent
	}

	public ParentFile(): protoreflect.FileDescriptor | null {
		const d: Base | $.VarRef<Base> | null = this;
		const d$: Base = d == null ? $.pointerTarget<Base>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Base>(d)
		if (($.pointerEqual((d$ as Base).L0.ParentFile, __goscript_get_SurrogateProto2())) || ($.pointerEqual((d$ as Base).L0.ParentFile, __goscript_get_SurrogateProto3()))) {
			return null
		}
		return $.interfaceValue<protoreflect.FileDescriptor | null>((d$ as Base).L0.ParentFile, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File"))
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const d: Base | $.VarRef<Base> | null = this;
	}

	public Syntax(): protoreflect.Syntax {
		const d: Base | $.VarRef<Base> | null = this;
		return File.prototype.Syntax.call($.pointerValue<Base>(d).L0.ParentFile)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Base",
		() => new Base(),
		() => [$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Base,
		() => [/* @__PURE__ */ $.structField("L0", "filedesc.BaseL0", [0], 0, true)]
	)
}

export class EnumL1 {
	public get eagerValues(): boolean {
		return this._fields.eagerValues
	}

	public set eagerValues(value: boolean) {
		this._fields.eagerValues = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		eagerValues: boolean
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{eagerValues?: boolean, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			eagerValues: init?.eagerValues ?? (false as boolean),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumL1 {
		return new EnumL1(this, true)
	}

	public __goscriptAssign(source: EnumL1): void {
		const target = this._fields
		const values = source._fields
		target.eagerValues = values.eagerValues
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumL1",
		() => new EnumL1(),
		() => [],
		EnumL1,
		() => [/* @__PURE__ */ $.structField("eagerValues", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [1], 1, true)]
	)
}

export class Enum {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): EnumL1 {
		return this._fields.L1
	}

	public set L1(value: EnumL1) {
		this._fields.L1 = value
	}

	public get L2(): EnumL2 | $.VarRef<EnumL2> | null {
		return this._fields.L2
	}

	public set L2(value: EnumL2 | $.VarRef<EnumL2> | null) {
		this._fields.L2 = value
	}

	public _fields: {
		Base: Base
		L1: EnumL1
		L2: EnumL2 | $.VarRef<EnumL2> | null
	}

	constructor(init?: Partial<{Base?: Base, L1?: EnumL1, L2?: EnumL2 | $.VarRef<EnumL2> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new EnumL1(undefined, true),
			L2: init?.L2 ?? (null! as EnumL2 | $.VarRef<EnumL2> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Enum {
		return new Enum(this, true)
	}

	public __goscriptAssign(source: Enum): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
		target.L2 = values.L2
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(ed, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")))
	}

	public IsClosed(): boolean {
		const ed: Enum | $.VarRef<Enum> | null = this;
		return !$.pointerValue<Enum>(ed).L1.EditionFeatures.IsOpenEnum
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<EnumL2>(await (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as Enum).lazyInit() : Enum.prototype.lazyInit.call(ed))).Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Enum.value
	}

	public ProtoType(_p0: protoreflect.EnumDescriptor | null): void {
		const ed: Enum | $.VarRef<Enum> | null = this;
	}

	public async ReservedNames(): globalThis.Promise<protoreflect.Names | null> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		return $.interfaceValue<protoreflect.Names | null>($.fieldRef($.pointerValue<EnumL2>(await (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as Enum).lazyInit() : Enum.prototype.lazyInit.call(ed)))._fields, "ReservedNames"), "*filedesc.Names", /* @__PURE__ */ $.pointerType("filedesc.Names"))
	}

	public async ReservedRanges(): globalThis.Promise<protoreflect.EnumRanges | null> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		return $.interfaceValue<protoreflect.EnumRanges | null>($.fieldRef($.pointerValue<EnumL2>(await (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as Enum).lazyInit() : Enum.prototype.lazyInit.call(ed)))._fields, "ReservedRanges"), "*filedesc.EnumRanges", /* @__PURE__ */ $.pointerType("filedesc.EnumRanges"))
	}

	public async Values(): globalThis.Promise<protoreflect.EnumValueDescriptors | null> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		const ed$: Enum = ed == null ? $.pointerTarget<Enum>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<Enum>(ed)
		if ((ed$ as Enum).L1.eagerValues) {
			return $.interfaceValue<protoreflect.EnumValueDescriptors | null>($.fieldRef($.pointerValue<EnumL2>((ed$ as Enum).L2)._fields, "Values"), "*filedesc.EnumValues", /* @__PURE__ */ $.pointerType("filedesc.EnumValues"))
		}
		return $.interfaceValue<protoreflect.EnumValueDescriptors | null>($.fieldRef($.pointerValue<EnumL2>(await (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as Enum).lazyInit() : Enum.prototype.lazyInit.call(ed)))._fields, "Values"), "*filedesc.EnumValues", /* @__PURE__ */ $.pointerType("filedesc.EnumValues"))
	}

	public async lazyInit(): globalThis.Promise<EnumL2 | $.VarRef<EnumL2> | null> {
		const ed: Enum | $.VarRef<Enum> | null = this;
		const ed$: Enum = ed == null ? $.pointerTarget<Enum>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<Enum>(ed)
		await File.prototype.lazyInit.call((ed$ as Enum).Base.L0.ParentFile)
		return (ed$ as Enum).L2
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<void> {
		let ed: Enum | $.VarRef<Enum> | null = this;
		const ed$: Enum = ed == null ? $.pointerTarget<Enum>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<Enum>(ed)
		let rawValues: $.Slice<$.Slice<number>> = null! as $.Slice<$.Slice<number>>
		let rawOptions: $.Slice<number> = null! as $.Slice<number>
		if (!(ed$ as Enum).L1.eagerValues) {
			;(ed$ as Enum).L2 = new EnumL2()
		}
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple9: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple9[0]
					let m = __goscriptTuple9[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.EnumDescriptorProto_Value_field_number:
						{
							rawValues = $.appendOne(rawValues, v, $.appendZeros.nil)
							break
						}
						case genid.EnumDescriptorProto_ReservedName_field_number:
						{
							$.pointerValue<EnumL2>((ed$ as Enum).L2).ReservedNames.List = $.appendOne($.pointerValue<EnumL2>((ed$ as Enum).L2).ReservedNames.List, (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v)))
							break
						}
						case genid.EnumDescriptorProto_ReservedRange_field_number:
						{
							$.pointerValue<EnumL2>((ed$ as Enum).L2).ReservedRanges.List = $.appendOne($.pointerValue<EnumL2>((ed$ as Enum).L2).ReservedRanges.List, __goscript_desc_lazy.unmarshalEnumReservedRange(v))
							break
						}
						case genid.EnumDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		if (!(ed$ as Enum).L1.eagerValues && ($.sliceLen(rawValues) > 0)) {
			$.pointerValue<EnumL2>((ed$ as Enum).L2).Values.List = $.makeSlice<EnumValue>($.sliceLen(rawValues), undefined, undefined, () => new EnumValue(undefined, true))
			for (let __goscriptRangeTarget11 = rawValues, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
				let b = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as $.Slice<number>)
				await $.arrayIndex($.pointerValue<EnumL2>((ed$ as Enum).L2).Values.List!, i).unmarshalFull(b, sb, (ed$ as Enum).Base.L0.ParentFile, $.interfaceValue<protoreflect.Descriptor | null>(ed, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")), i)
			}
		}
		$.pointerValue<EnumL2>((ed$ as Enum).L2).Options = $.pointerValue<File>((ed$ as Enum).Base.L0.ParentFile).fileRaw.builder.optionsUnmarshaler(descopts.Enum, rawOptions)
	}

	public async unmarshalSeed(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let ed: Enum | $.VarRef<Enum> | null = this;
		const ed$: Enum = ed == null ? $.pointerTarget<Enum>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<Enum>(ed);
		;(ed$ as Enum).Base.L0.ParentFile = pf;
		;(ed$ as Enum).Base.L0.Parent = pd;
		;(ed$ as Enum).Base.L0.Index = i
		$.assignStruct((ed$ as Enum).L1.EditionFeatures, await __goscript_editions.featuresFromParentDesc((ed$ as Enum).Base.Parent()))

		let numValues: number = 0
		{
			let __goscriptShadow10 = b
			for (let __goscriptShadow11: $.Slice<number> = __goscriptShadow10; $.sliceLen(__goscriptShadow11) > 0; ) {
				let [num, typ, n] = protowire.ConsumeTag(__goscriptShadow11)
				__goscriptShadow11 = $.goSlice(__goscriptShadow11, n, undefined)
				switch (typ) {
					case protowire.BytesType:
					{
						let __goscriptTuple10: any = protowire.ConsumeBytes(__goscriptShadow11)
						let v: $.Slice<number> = __goscriptTuple10[0]
						let m = __goscriptTuple10[1]
						__goscriptShadow11 = $.goSlice(__goscriptShadow11, m, undefined)
						switch (num) {
							case genid.EnumDescriptorProto_Name_field_number:
							{
								;(ed$ as Enum).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
								break
							}
							case genid.EnumDescriptorProto_Value_field_number:
							{
								numValues++
								break
							}
						}
						break
					}
					default:
					{
						let m = protowire.ConsumeFieldValue(num, typ, __goscriptShadow11)
						__goscriptShadow11 = $.goSlice(__goscriptShadow11, m, undefined)
						break
					}
				}
			}
		}

		if (!$.comparableEqual(pd, $.interfaceValue<protoreflect.Descriptor | null>(pf, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")))) {
			return
		}
		;(ed$ as Enum).L1.eagerValues = true;
		;(ed$ as Enum).L2 = new EnumL2()
		$.pointerValue<EnumL2>((ed$ as Enum).L2).Values.List = $.makeSlice<EnumValue>(numValues, undefined, undefined, () => new EnumValue(undefined, true))
		for (let __goscriptShadow12 = 0; $.sliceLen(b) > 0; ) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple11: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple11[0]
					let m = __goscriptTuple11[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.EnumDescriptorProto_Value_field_number:
						{
							await $.arrayIndex($.pointerValue<EnumL2>((ed$ as Enum).L2).Values.List!, __goscriptShadow12).unmarshalFull(v, sb, pf, $.interfaceValue<protoreflect.Descriptor | null>(ed, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")), __goscriptShadow12)
							__goscriptShadow12++
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Base>(this.Base).ProtoInternal(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Enum",
		() => new Enum(),
		() => [$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"], [], true), $.methodSignature("ReservedNames", [], ["protoreflect.Names"], true), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"], true), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.EnumL2")], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [], true), $.methodSignature("unmarshalSeed", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Enum,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.EnumL1", [1], 48, true), /* @__PURE__ */ $.structField("L2", /* @__PURE__ */ $.pointerType("filedesc.EnumL2"), [2], 64, true)]
	)
}

export class EnumL2 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Values(): __goscript_desc_list_gen.EnumValues {
		return this._fields.Values
	}

	public set Values(value: __goscript_desc_list_gen.EnumValues) {
		this._fields.Values = value
	}

	public get ReservedNames(): __goscript_desc_list.Names {
		return this._fields.ReservedNames
	}

	public set ReservedNames(value: __goscript_desc_list.Names) {
		this._fields.ReservedNames = value
	}

	public get ReservedRanges(): __goscript_desc_list.EnumRanges {
		return this._fields.ReservedRanges
	}

	public set ReservedRanges(value: __goscript_desc_list.EnumRanges) {
		this._fields.ReservedRanges = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Values: __goscript_desc_list_gen.EnumValues
		ReservedNames: __goscript_desc_list.Names
		ReservedRanges: __goscript_desc_list.EnumRanges
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Values?: __goscript_desc_list_gen.EnumValues, ReservedNames?: __goscript_desc_list.Names, ReservedRanges?: __goscript_desc_list.EnumRanges}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Values: init?.Values ? init.Values.clone() : new __goscript_desc_list_gen.EnumValues(undefined, true),
			ReservedNames: init?.ReservedNames ? init.ReservedNames.clone() : new __goscript_desc_list.Names(undefined, true),
			ReservedRanges: init?.ReservedRanges ? init.ReservedRanges.clone() : new __goscript_desc_list.EnumRanges(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumL2 {
		return new EnumL2(this, true)
	}

	public __goscriptAssign(source: EnumL2): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		$.assignStruct(target.Values, values.Values)
		$.assignStruct(target.ReservedNames, values.ReservedNames)
		$.assignStruct(target.ReservedRanges, values.ReservedRanges)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumL2",
		() => new EnumL2(),
		() => [],
		EnumL2,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Values", "filedesc.EnumValues", [1], 8, true), /* @__PURE__ */ $.structField("ReservedNames", "filedesc.Names", [2], 64, true), /* @__PURE__ */ $.structField("ReservedRanges", "filedesc.EnumRanges", [3], 112, true)]
	)
}

export class EnumValueL1 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Number(): protoreflect.EnumNumber {
		return this._fields.Number
	}

	public set Number(value: protoreflect.EnumNumber) {
		this._fields.Number = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Number: protoreflect.EnumNumber
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Number?: protoreflect.EnumNumber}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Number: init?.Number ?? (0 as protoreflect.EnumNumber)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValueL1 {
		return new EnumValueL1(this, true)
	}

	public __goscriptAssign(source: EnumValueL1): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		target.Number = values.Number
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumValueL1",
		() => new EnumValueL1(),
		() => [],
		EnumValueL1,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Number", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), [1], 8, true)]
	)
}

export class EnumValue {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): EnumValueL1 {
		return this._fields.L1
	}

	public set L1(value: EnumValueL1) {
		this._fields.L1 = value
	}

	public _fields: {
		Base: Base
		L1: EnumValueL1
	}

	constructor(init?: Partial<{Base?: Base, L1?: EnumValueL1}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new EnumValueL1(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValue {
		return new EnumValue(this, true)
	}

	public __goscriptAssign(source: EnumValue): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const ed: EnumValue | $.VarRef<EnumValue> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(ed, "*filedesc.EnumValue", /* @__PURE__ */ $.pointerType("filedesc.EnumValue")))
	}

	public Number(): protoreflect.EnumNumber {
		const ed: EnumValue | $.VarRef<EnumValue> | null = this;
		return $.pointerValue<EnumValue>(ed).L1.Number
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const ed: EnumValue | $.VarRef<EnumValue> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<EnumValue>(ed).L1.Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.EnumValue.value
	}

	public ProtoType(_p0: protoreflect.EnumValueDescriptor | null): void {
		const ed: EnumValue | $.VarRef<EnumValue> | null = this;
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let vd: EnumValue | $.VarRef<EnumValue> | null = this;
		const vd$: EnumValue = vd == null ? $.pointerTarget<EnumValue>(vd) : (vd as any).__isVarRef === true ? (vd as any).value : (vd as any).__goValue === undefined ? (vd as any) : $.pointerTarget<EnumValue>(vd);
		;(vd$ as EnumValue).Base.L0.ParentFile = pf;
		;(vd$ as EnumValue).Base.L0.Parent = pd;
		;(vd$ as EnumValue).Base.L0.Index = i

		let rawOptions: $.Slice<number> = null! as $.Slice<number>
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.EnumValueDescriptorProto_Number_field_number:
						{
							;(vd$ as EnumValue).L1.Number = $.int(v, 32)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple12: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple12[0]
					let m = __goscriptTuple12[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.EnumValueDescriptorProto_Name_field_number:
						{
							;(vd$ as EnumValue).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>((__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.EnumValueDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		;(vd$ as EnumValue).L1.Options = $.pointerValue<File>(pf).fileRaw.builder.optionsUnmarshaler(descopts.EnumValue, rawOptions)
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Base>(this.Base).ProtoInternal(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumValue",
		() => new EnumValue(),
		() => [$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"], [], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		EnumValue,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.EnumValueL1", [1], 48, true)]
	)
}

export class MessageL1 {
	public get Enums(): __goscript_desc_list_gen.Enums {
		return this._fields.Enums
	}

	public set Enums(value: __goscript_desc_list_gen.Enums) {
		this._fields.Enums = value
	}

	public get Messages(): __goscript_desc_list_gen.Messages {
		return this._fields.Messages
	}

	public set Messages(value: __goscript_desc_list_gen.Messages) {
		this._fields.Messages = value
	}

	public get Extensions(): __goscript_desc_list_gen.Extensions {
		return this._fields.Extensions
	}

	public set Extensions(value: __goscript_desc_list_gen.Extensions) {
		this._fields.Extensions = value
	}

	public get IsMapEntry(): boolean {
		return this._fields.IsMapEntry
	}

	public set IsMapEntry(value: boolean) {
		this._fields.IsMapEntry = value
	}

	public get IsMessageSet(): boolean {
		return this._fields.IsMessageSet
	}

	public set IsMessageSet(value: boolean) {
		this._fields.IsMessageSet = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		Enums: __goscript_desc_list_gen.Enums
		Messages: __goscript_desc_list_gen.Messages
		Extensions: __goscript_desc_list_gen.Extensions
		IsMapEntry: boolean
		IsMessageSet: boolean
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{Enums?: __goscript_desc_list_gen.Enums, Messages?: __goscript_desc_list_gen.Messages, Extensions?: __goscript_desc_list_gen.Extensions, IsMapEntry?: boolean, IsMessageSet?: boolean, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			Enums: init?.Enums ? init.Enums.clone() : new __goscript_desc_list_gen.Enums(undefined, true),
			Messages: init?.Messages ? init.Messages.clone() : new __goscript_desc_list_gen.Messages(undefined, true),
			Extensions: init?.Extensions ? init.Extensions.clone() : new __goscript_desc_list_gen.Extensions(undefined, true),
			IsMapEntry: init?.IsMapEntry ?? (false as boolean),
			IsMessageSet: init?.IsMessageSet ?? (false as boolean),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MessageL1 {
		return new MessageL1(this, true)
	}

	public __goscriptAssign(source: MessageL1): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Enums, values.Enums)
		$.assignStruct(target.Messages, values.Messages)
		$.assignStruct(target.Extensions, values.Extensions)
		target.IsMapEntry = values.IsMapEntry
		target.IsMessageSet = values.IsMessageSet
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.MessageL1",
		() => new MessageL1(),
		() => [],
		MessageL1,
		() => [/* @__PURE__ */ $.structField("Enums", "filedesc.Enums", [0], 0, true), /* @__PURE__ */ $.structField("Messages", "filedesc.Messages", [1], 48, true), /* @__PURE__ */ $.structField("Extensions", "filedesc.Extensions", [2], 96, true), /* @__PURE__ */ $.structField("IsMapEntry", /* @__PURE__ */ $.basicType("bool"), [3], 144, true), /* @__PURE__ */ $.structField("IsMessageSet", /* @__PURE__ */ $.basicType("bool"), [4], 145, true), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [5], 146, true)]
	)
}

export class Message {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): MessageL1 {
		return this._fields.L1
	}

	public set L1(value: MessageL1) {
		this._fields.L1 = value
	}

	public get L2(): MessageL2 | $.VarRef<MessageL2> | null {
		return this._fields.L2
	}

	public set L2(value: MessageL2 | $.VarRef<MessageL2> | null) {
		this._fields.L2 = value
	}

	public _fields: {
		Base: Base
		L1: MessageL1
		L2: MessageL2 | $.VarRef<MessageL2> | null
	}

	constructor(init?: Partial<{Base?: Base, L1?: MessageL1, L2?: MessageL2 | $.VarRef<MessageL2> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new MessageL1(undefined, true),
			L2: init?.L2 ?? (null! as MessageL2 | $.VarRef<MessageL2> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Message {
		return new Message(this, true)
	}

	public __goscriptAssign(source: Message): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
		target.L2 = values.L2
	}

	public Enums(): protoreflect.EnumDescriptors | null {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.EnumDescriptors | null>($.fieldRef($.pointerValue<Message>(md).L1._fields, "Enums"), "*filedesc.Enums", /* @__PURE__ */ $.pointerType("filedesc.Enums"))
	}

	public async ExtensionRangeOptions(i: number): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const md: Message | $.VarRef<Message> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.arrayIndex($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md))).ExtensionRangeOptions!, i)
			if (f != null) {
				return f!()
			}
		}
		return descopts.ExtensionRange.value
	}

	public async ExtensionRanges(): globalThis.Promise<protoreflect.FieldRanges | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.FieldRanges | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "ExtensionRanges"), "*filedesc.FieldRanges", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges"))
	}

	public Extensions(): protoreflect.ExtensionDescriptors | null {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.ExtensionDescriptors | null>($.fieldRef($.pointerValue<Message>(md).L1._fields, "Extensions"), "*filedesc.Extensions", /* @__PURE__ */ $.pointerType("filedesc.Extensions"))
	}

	public async Fields(): globalThis.Promise<protoreflect.FieldDescriptors | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.FieldDescriptors | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "Fields"), "*filedesc.Fields", /* @__PURE__ */ $.pointerType("filedesc.Fields"))
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const md: Message | $.VarRef<Message> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")))
	}

	public IsMapEntry(): boolean {
		const md: Message | $.VarRef<Message> | null = this;
		return $.pointerValue<Message>(md).L1.IsMapEntry
	}

	public IsMessageSet(): boolean {
		const md: Message | $.VarRef<Message> | null = this;
		return $.pointerValue<Message>(md).L1.IsMessageSet
	}

	public Messages(): protoreflect.MessageDescriptors | null {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.MessageDescriptors | null>($.fieldRef($.pointerValue<Message>(md).L1._fields, "Messages"), "*filedesc.Messages", /* @__PURE__ */ $.pointerType("filedesc.Messages"))
	}

	public async Oneofs(): globalThis.Promise<protoreflect.OneofDescriptors | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.OneofDescriptors | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "Oneofs"), "*filedesc.Oneofs", /* @__PURE__ */ $.pointerType("filedesc.Oneofs"))
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const md: Message | $.VarRef<Message> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md))).Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Message.value
	}

	public ProtoType(_p0: protoreflect.MessageDescriptor | null): void {
		const md: Message | $.VarRef<Message> | null = this;
	}

	public async RequiredNumbers(): globalThis.Promise<protoreflect.FieldNumbers | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.FieldNumbers | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "RequiredNumbers"), "*filedesc.FieldNumbers", /* @__PURE__ */ $.pointerType("filedesc.FieldNumbers"))
	}

	public async ReservedNames(): globalThis.Promise<protoreflect.Names | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.Names | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "ReservedNames"), "*filedesc.Names", /* @__PURE__ */ $.pointerType("filedesc.Names"))
	}

	public async ReservedRanges(): globalThis.Promise<protoreflect.FieldRanges | null> {
		const md: Message | $.VarRef<Message> | null = this;
		return $.interfaceValue<protoreflect.FieldRanges | null>($.fieldRef($.pointerValue<MessageL2>(await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).lazyInit() : Message.prototype.lazyInit.call(md)))._fields, "ReservedRanges"), "*filedesc.FieldRanges", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges"))
	}

	public async lazyInit(): globalThis.Promise<MessageL2 | $.VarRef<MessageL2> | null> {
		const md: Message | $.VarRef<Message> | null = this;
		const md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md)
		await File.prototype.lazyInit.call((md$ as Message).Base.L0.ParentFile)
		return (md$ as Message).L2
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<void> {
		let md: Message | $.VarRef<Message> | null = this;
		const md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md)
		let rawFields: $.Slice<$.Slice<number>> = null! as $.Slice<$.Slice<number>>
		let rawOneofs: $.Slice<$.Slice<number>> = null! as $.Slice<$.Slice<number>>
		let enumIdx: number = 0
		let messageIdx: number = 0
		let extensionIdx: number = 0
		let rawOptions: $.Slice<number> = null! as $.Slice<number>;
		;(md$ as Message).L2 = new MessageL2()
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple13: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple13[0]
					let m = __goscriptTuple13[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.DescriptorProto_Field_field_number:
						{
							rawFields = $.appendOne(rawFields, v, $.appendZeros.nil)
							break
						}
						case genid.DescriptorProto_OneofDecl_field_number:
						{
							rawOneofs = $.appendOne(rawOneofs, v, $.appendZeros.nil)
							break
						}
						case genid.DescriptorProto_ReservedName_field_number:
						{
							$.pointerValue<MessageL2>((md$ as Message).L2).ReservedNames.List = $.appendOne($.pointerValue<MessageL2>((md$ as Message).L2).ReservedNames.List, (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v)))
							break
						}
						case genid.DescriptorProto_ReservedRange_field_number:
						{
							$.pointerValue<MessageL2>((md$ as Message).L2).ReservedRanges.List = $.appendOne($.pointerValue<MessageL2>((md$ as Message).L2).ReservedRanges.List, __goscript_desc_lazy.unmarshalMessageReservedRange(v))
							break
						}
						case genid.DescriptorProto_ExtensionRange_field_number:
						{
							let __goscriptTuple14: any = __goscript_desc_lazy.unmarshalMessageExtensionRange(v)
							let r = __goscriptTuple14[0]
							let __goscriptShadow13: $.Slice<number> = __goscriptTuple14[1]
							let opts: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<File>((md$ as Message).Base.L0.ParentFile).fileRaw.builder.optionsUnmarshaler(descopts.ExtensionRange, __goscriptShadow13)
							$.pointerValue<MessageL2>((md$ as Message).L2).ExtensionRanges.List = $.appendOne($.pointerValue<MessageL2>((md$ as Message).L2).ExtensionRanges.List, $.cloneArrayValue(r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)))
							$.pointerValue<MessageL2>((md$ as Message).L2).ExtensionRangeOptions = $.appendOne($.pointerValue<MessageL2>((md$ as Message).L2).ExtensionRangeOptions, opts, $.appendZeros.nil)
							break
						}
						case genid.DescriptorProto_EnumType_field_number:
						{
							await $.arrayIndex((md$ as Message).L1.Enums.List!, enumIdx).unmarshalFull(v, sb)
							enumIdx++
							break
						}
						case genid.DescriptorProto_NestedType_field_number:
						{
							await $.arrayIndex((md$ as Message).L1.Messages.List!, messageIdx).unmarshalFull(v, sb)
							messageIdx++
							break
						}
						case genid.DescriptorProto_Extension_field_number:
						{
							$.arrayIndex((md$ as Message).L1.Extensions.List!, extensionIdx).unmarshalFull(v, sb)
							extensionIdx++
							break
						}
						case genid.DescriptorProto_Options_field_number:
						{
							void (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).unmarshalOptions(v) : Message.prototype.unmarshalOptions.call(md, v))
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		if (($.sliceLen(rawFields) > 0) || ($.sliceLen(rawOneofs) > 0)) {
			$.pointerValue<MessageL2>((md$ as Message).L2).Fields.List = $.makeSlice<Field>($.sliceLen(rawFields), undefined, undefined, () => new Field(undefined, true))
			$.pointerValue<MessageL2>((md$ as Message).L2).Oneofs.List = $.makeSlice<Oneof>($.sliceLen(rawOneofs), undefined, undefined, () => new Oneof(undefined, true))
			for (let __goscriptRangeTarget12 = rawFields, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
				let b = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + i] as $.Slice<number>)
				let fd: Field | $.VarRef<Field> | null = $.indexRef($.pointerValue<MessageL2>((md$ as Message).L2).Fields.List!, i)
				let fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
				await Field.prototype.unmarshalFull.call(fd, b, sb, (md$ as Message).Base.L0.ParentFile, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), i)
				if ((fd$ as Field).L1.Cardinality == 2) {
					$.pointerValue<MessageL2>((md$ as Message).L2).RequiredNumbers.List = $.appendOne($.pointerValue<MessageL2>((md$ as Message).L2).RequiredNumbers.List, $.int((fd$ as Field).L1.Number, 32))
				}
			}
			for (let __goscriptRangeTarget13 = rawOneofs, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
				let b = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + i] as $.Slice<number>)
				let od: Oneof | $.VarRef<Oneof> | null = $.indexRef($.pointerValue<MessageL2>((md$ as Message).L2).Oneofs.List!, i)
				await Oneof.prototype.unmarshalFull.call(od, b, sb, (md$ as Message).Base.L0.ParentFile, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), i)
			}
		}
		$.pointerValue<MessageL2>((md$ as Message).L2).Options = $.pointerValue<File>((md$ as Message).Base.L0.ParentFile).fileRaw.builder.optionsUnmarshaler(descopts.Message, rawOptions)
	}

	public unmarshalOptions(b: $.Slice<number>): void {
		let md: Message | $.VarRef<Message> | null = this;
		const md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md)
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.MessageOptions_MapEntry_field_number:
						{
							;(md$ as Message).L1.IsMapEntry = protowire.DecodeBool(v)
							break
						}
						case genid.MessageOptions_MessageSetWireFormat_field_number:
						{
							;(md$ as Message).L1.IsMessageSet = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public async unmarshalSeed(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let md: Message | $.VarRef<Message> | null = this;
		const md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md);
		;(md$ as Message).Base.L0.ParentFile = pf;
		;(md$ as Message).Base.L0.Parent = pd;
		;(md$ as Message).Base.L0.Index = i
		$.assignStruct((md$ as Message).L1.EditionFeatures, await __goscript_editions.featuresFromParentDesc((md$ as Message).Base.Parent()))

		let prevField: protoreflect.FieldNumber = 0
		let numEnums: number = 0
		let numMessages: number = 0
		let numExtensions: number = 0
		let posEnums: number = 0
		let posMessages: number = 0
		let posExtensions: number = 0
		let b0: $.Slice<number> = b
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple15: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple15[0]
					let m = __goscriptTuple15[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.DescriptorProto_Name_field_number:
						{
							;(md$ as Message).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.DescriptorProto_EnumType_field_number:
						{
							if (prevField != 4) {
								if (numEnums > 0) {
									$.panic("non-contiguous repeated field")
								}
								posEnums = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numEnums++
							break
						}
						case genid.DescriptorProto_NestedType_field_number:
						{
							if (prevField != 3) {
								if (numMessages > 0) {
									$.panic("non-contiguous repeated field")
								}
								posMessages = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numMessages++
							break
						}
						case genid.DescriptorProto_Extension_field_number:
						{
							if (prevField != 6) {
								if (numExtensions > 0) {
									$.panic("non-contiguous repeated field")
								}
								posExtensions = (($.sliceLen(b0) - $.sliceLen(b)) - n) - m
							}
							numExtensions++
							break
						}
						case genid.DescriptorProto_Options_field_number:
						{
							await (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as Message).unmarshalSeedOptions(v) : Message.prototype.unmarshalSeedOptions.call(md, v))
							break
						}
					}
					prevField = num
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					prevField = -1
					break
				}
			}
		}

		if (numEnums > 0) {
			;(md$ as Message).L1.Enums.List = (pf !== null && (pf as any).__isVarRef !== true && (pf as any).__goValue === undefined ? ((pf as any) as File).allocEnums(numEnums) : File.prototype.allocEnums.call(pf, numEnums))
		}
		if (numMessages > 0) {
			;(md$ as Message).L1.Messages.List = (pf !== null && (pf as any).__isVarRef !== true && (pf as any).__goValue === undefined ? ((pf as any) as File).allocMessages(numMessages) : File.prototype.allocMessages.call(pf, numMessages))
		}
		if (numExtensions > 0) {
			;(md$ as Message).L1.Extensions.List = (pf !== null && (pf as any).__isVarRef !== true && (pf as any).__goValue === undefined ? ((pf as any) as File).allocExtensions(numExtensions) : File.prototype.allocExtensions.call(pf, numExtensions))
		}

		if (numEnums > 0) {
			let __goscriptShadow14: $.Slice<number> = $.goSlice(b0, posEnums, undefined)
			for (let __goscriptRangeTarget14 = (md$ as Message).L1.Enums.List, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow14)
				let __goscriptTuple16: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow14, n, undefined))
				let v: $.Slice<number> = __goscriptTuple16[0]
				let m = __goscriptTuple16[1]
				await $.arrayIndex((md$ as Message).L1.Enums.List!, i).unmarshalSeed(v, sb, pf, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), i)
				__goscriptShadow14 = $.goSlice(__goscriptShadow14, n + m, undefined)
			}
		}
		if (numMessages > 0) {
			let __goscriptShadow15: $.Slice<number> = $.goSlice(b0, posMessages, undefined)
			for (let __goscriptRangeTarget15 = (md$ as Message).L1.Messages.List, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow15.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow15)
				let __goscriptTuple17: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow15, n, undefined))
				let v: $.Slice<number> = __goscriptTuple17[0]
				let m = __goscriptTuple17[1]
				await $.arrayIndex((md$ as Message).L1.Messages.List!, i).unmarshalSeed(v, sb, pf, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), i)
				__goscriptShadow15 = $.goSlice(__goscriptShadow15, n + m, undefined)
			}
		}
		if (numExtensions > 0) {
			let __goscriptShadow16: $.Slice<number> = $.goSlice(b0, posExtensions, undefined)
			for (let __goscriptRangeTarget16 = (md$ as Message).L1.Extensions.List, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), i = 0; i < __goscriptRangeWindow16.length; i++) {
				let [, n] = protowire.ConsumeVarint(__goscriptShadow16)
				let __goscriptTuple18: any = protowire.ConsumeBytes($.goSlice(__goscriptShadow16, n, undefined))
				let v: $.Slice<number> = __goscriptTuple18[0]
				let m = __goscriptTuple18[1]
				await $.arrayIndex((md$ as Message).L1.Extensions.List!, i).unmarshalSeed(v, sb, pf, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), i)
				__goscriptShadow16 = $.goSlice(__goscriptShadow16, n + m, undefined)
			}
		}
	}

	public async unmarshalSeedOptions(b: $.Slice<number>): globalThis.Promise<void> {
		let md: Message | $.VarRef<Message> | null = this;
		const md$: Message = md == null ? $.pointerTarget<Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Message>(md)
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.MessageOptions_MapEntry_field_number:
						{
							;(md$ as Message).L1.IsMapEntry = protowire.DecodeBool(v)
							break
						}
						case genid.MessageOptions_MessageSetWireFormat_field_number:
						{
							;(md$ as Message).L1.IsMessageSet = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple19: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple19[0]
					let m = __goscriptTuple19[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.MessageOptions_Features_field_number:
						{
							$.assignStruct((md$ as Message).L1.EditionFeatures, await __goscript_editions.unmarshalFeatureSet(v, ((md$ as Message).L1.EditionFeatures).clone()))
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Base>(this.Base).ProtoInternal(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Message",
		() => new Message(),
		() => [$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"], true), $.methodSignature("ExtensionRangeOptions", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.ProtoMessage"], true), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"], true), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"], true), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMessageSet", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"], true), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"], [], true), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"], true), $.methodSignature("ReservedNames", [], ["protoreflect.Names"], true), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.MessageL2")], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [], true), $.methodSignature("unmarshalOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("unmarshalSeed", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("unmarshalSeedOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Message,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.MessageL1", [1], 48, true), /* @__PURE__ */ $.structField("L2", /* @__PURE__ */ $.pointerType("filedesc.MessageL2"), [2], 208, true)]
	)
}

export class MessageL2 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Fields(): __goscript_desc_list_gen.Fields {
		return this._fields.Fields
	}

	public set Fields(value: __goscript_desc_list_gen.Fields) {
		this._fields.Fields = value
	}

	public get Oneofs(): __goscript_desc_list_gen.Oneofs {
		return this._fields.Oneofs
	}

	public set Oneofs(value: __goscript_desc_list_gen.Oneofs) {
		this._fields.Oneofs = value
	}

	public get ReservedNames(): __goscript_desc_list.Names {
		return this._fields.ReservedNames
	}

	public set ReservedNames(value: __goscript_desc_list.Names) {
		this._fields.ReservedNames = value
	}

	public get ReservedRanges(): __goscript_desc_list.FieldRanges {
		return this._fields.ReservedRanges
	}

	public set ReservedRanges(value: __goscript_desc_list.FieldRanges) {
		this._fields.ReservedRanges = value
	}

	public get RequiredNumbers(): __goscript_desc_list.FieldNumbers {
		return this._fields.RequiredNumbers
	}

	public set RequiredNumbers(value: __goscript_desc_list.FieldNumbers) {
		this._fields.RequiredNumbers = value
	}

	public get ExtensionRanges(): __goscript_desc_list.FieldRanges {
		return this._fields.ExtensionRanges
	}

	public set ExtensionRanges(value: __goscript_desc_list.FieldRanges) {
		this._fields.ExtensionRanges = value
	}

	public get ExtensionRangeOptions(): $.Slice<(() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null> {
		return this._fields.ExtensionRangeOptions
	}

	public set ExtensionRangeOptions(value: $.Slice<(() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null>) {
		this._fields.ExtensionRangeOptions = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Fields: __goscript_desc_list_gen.Fields
		Oneofs: __goscript_desc_list_gen.Oneofs
		ReservedNames: __goscript_desc_list.Names
		ReservedRanges: __goscript_desc_list.FieldRanges
		RequiredNumbers: __goscript_desc_list.FieldNumbers
		ExtensionRanges: __goscript_desc_list.FieldRanges
		ExtensionRangeOptions: $.Slice<(() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null>
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Fields?: __goscript_desc_list_gen.Fields, Oneofs?: __goscript_desc_list_gen.Oneofs, ReservedNames?: __goscript_desc_list.Names, ReservedRanges?: __goscript_desc_list.FieldRanges, RequiredNumbers?: __goscript_desc_list.FieldNumbers, ExtensionRanges?: __goscript_desc_list.FieldRanges, ExtensionRangeOptions?: $.Slice<(() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Fields: init?.Fields ? init.Fields.clone() : new __goscript_desc_list_gen.Fields(undefined, true),
			Oneofs: init?.Oneofs ? init.Oneofs.clone() : new __goscript_desc_list_gen.Oneofs(undefined, true),
			ReservedNames: init?.ReservedNames ? init.ReservedNames.clone() : new __goscript_desc_list.Names(undefined, true),
			ReservedRanges: init?.ReservedRanges ? init.ReservedRanges.clone() : new __goscript_desc_list.FieldRanges(undefined, true),
			RequiredNumbers: init?.RequiredNumbers ? init.RequiredNumbers.clone() : new __goscript_desc_list.FieldNumbers(undefined, true),
			ExtensionRanges: init?.ExtensionRanges ? init.ExtensionRanges.clone() : new __goscript_desc_list.FieldRanges(undefined, true),
			ExtensionRangeOptions: init?.ExtensionRangeOptions ?? (null! as $.Slice<(() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MessageL2 {
		return new MessageL2(this, true)
	}

	public __goscriptAssign(source: MessageL2): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		$.assignStruct(target.Fields, values.Fields)
		$.assignStruct(target.Oneofs, values.Oneofs)
		$.assignStruct(target.ReservedNames, values.ReservedNames)
		$.assignStruct(target.ReservedRanges, values.ReservedRanges)
		$.assignStruct(target.RequiredNumbers, values.RequiredNumbers)
		$.assignStruct(target.ExtensionRanges, values.ExtensionRanges)
		target.ExtensionRangeOptions = values.ExtensionRangeOptions
	}

	static __typeInfo = $.registerStructType(
		"filedesc.MessageL2",
		() => new MessageL2(),
		() => [],
		MessageL2,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Fields", "filedesc.Fields", [1], 8, true), /* @__PURE__ */ $.structField("Oneofs", "filedesc.Oneofs", [2], 80, true), /* @__PURE__ */ $.structField("ReservedNames", "filedesc.Names", [3], 128, true), /* @__PURE__ */ $.structField("ReservedRanges", "filedesc.FieldRanges", [4], 176, true), /* @__PURE__ */ $.structField("RequiredNumbers", "filedesc.FieldNumbers", [5], 240, true), /* @__PURE__ */ $.structField("ExtensionRanges", "filedesc.FieldRanges", [6], 288, true), /* @__PURE__ */ $.structField("ExtensionRangeOptions", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo)), [7], 352, true)]
	)
}

export class stringName {
	public get hasJSON(): boolean {
		return this._fields.hasJSON
	}

	public set hasJSON(value: boolean) {
		this._fields.hasJSON = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get nameJSON(): string {
		return this._fields.nameJSON
	}

	public set nameJSON(value: string) {
		this._fields.nameJSON = value
	}

	public get nameText(): string {
		return this._fields.nameText
	}

	public set nameText(value: string) {
		this._fields.nameText = value
	}

	public _fields: {
		hasJSON: boolean
		once: sync.Once
		nameJSON: string
		nameText: string
	}

	constructor(init?: Partial<{hasJSON?: boolean, once?: sync.Once, nameJSON?: string, nameText?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			hasJSON: init?.hasJSON ?? (false as boolean),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			nameJSON: init?.nameJSON ?? ("" as string),
			nameText: init?.nameText ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stringName {
		return new stringName(this, true)
	}

	public __goscriptAssign(source: stringName): void {
		const target = this._fields
		const values = source._fields
		target.hasJSON = values.hasJSON
		$.assignStruct(target.once, values.once)
		target.nameJSON = values.nameJSON
		target.nameText = values.nameText
	}

	public InitJSON(name: string): void {
		let s: stringName | $.VarRef<stringName> | null = this;
		const s$: stringName = s == null ? $.pointerTarget<stringName>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stringName>(s);
		;(s$ as stringName).hasJSON = true;
		;(s$ as stringName).nameJSON = name
	}

	public async getJSON(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<string> {
		const s: stringName | $.VarRef<stringName> | null = this;
		return $.pointerValue<stringName>(await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as stringName).lazyInit(fd) : stringName.prototype.lazyInit.call(s, fd))).nameJSON
	}

	public async getText(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<string> {
		const s: stringName | $.VarRef<stringName> | null = this;
		return $.pointerValue<stringName>(await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as stringName).lazyInit(fd) : stringName.prototype.lazyInit.call(s, fd))).nameText
	}

	public async lazyInit(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<stringName | $.VarRef<stringName> | null> {
		const s: stringName | $.VarRef<stringName> | null = this;
		const s$: stringName = s == null ? $.pointerTarget<stringName>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stringName>(s)
		await (s$ as stringName).once.Do($.functionValue(async (): globalThis.Promise<void> => {
			if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				// For extensions, JSON and text are formatted the same way.
				let name: string = ""
				if (await messageset.IsMessageSetExtension(fd)) {
					name = ($.concatString(($.concatString("[", protoreflect.FullName_Parent((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))), "]"))
				} else {
					name = ($.concatString(($.concatString("[", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), "]"))
				}
				;(s$ as stringName).nameJSON = name;
				;(s$ as stringName).nameText = name
			} else {
				// Format the JSON name.
				if (!(s$ as stringName).hasJSON) {
					;(s$ as stringName).nameJSON = strs.JSONCamelCase((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}

				// Format the text name.
				;(s$ as stringName).nameText = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (await isGroupLike(fd)) {
					;(s$ as stringName).nameText = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return s
	}

	static __typeInfo = $.registerStructType(
		"filedesc.stringName",
		() => new stringName(),
		() => [$.methodSignature("InitJSON", [["name", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("getJSON", [["fd", "protoreflect.FieldDescriptor"]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("getText", [["fd", "protoreflect.FieldDescriptor"]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("lazyInit", [["fd", "protoreflect.FieldDescriptor"]], [/* @__PURE__ */ $.pointerType("filedesc.stringName")], true)],
		stringName,
		() => [/* @__PURE__ */ $.structField("hasJSON", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 4, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("nameJSON", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("nameText", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class defaultValue {
	public get has(): boolean {
		return this._fields.has
	}

	public set has(value: boolean) {
		this._fields.has = value
	}

	public get val(): protoreflect.Value {
		return this._fields.val
	}

	public set val(value: protoreflect.Value) {
		this._fields.val = value
	}

	public get _enum(): protoreflect.EnumValueDescriptor | null {
		return this._fields._enum
	}

	public set _enum(value: protoreflect.EnumValueDescriptor | null) {
		this._fields._enum = value
	}

	public get bytes(): $.Slice<number> {
		return this._fields.bytes
	}

	public set bytes(value: $.Slice<number>) {
		this._fields.bytes = value
	}

	public _fields: {
		has: boolean
		val: protoreflect.Value
		_enum: protoreflect.EnumValueDescriptor | null
		bytes: $.Slice<number>
	}

	constructor(init?: Partial<{has?: boolean, val?: protoreflect.Value, _enum?: protoreflect.EnumValueDescriptor | null, bytes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			has: init?.has ?? (false as boolean),
			val: init?.val ? init.val.clone() : new protoreflect.Value(undefined, true),
			_enum: init?._enum ?? (null! as protoreflect.EnumValueDescriptor | null),
			bytes: init?.bytes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): defaultValue {
		return new defaultValue(this, true)
	}

	public __goscriptAssign(source: defaultValue): void {
		const target = this._fields
		const values = source._fields
		target.has = values.has
		$.assignStruct(target.val, values.val)
		target._enum = $.assignFieldValue(target._enum, values._enum, "protoreflect.EnumValueDescriptor")
		target.bytes = values.bytes
	}

	public async ["get"](fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const dv: defaultValue | $.VarRef<defaultValue> | null = this;
		const dv$: defaultValue = dv == null ? $.pointerTarget<defaultValue>(dv) : (dv as any).__isVarRef === true ? (dv as any).value : (dv as any).__goValue === undefined ? (dv as any) : $.pointerTarget<defaultValue>(dv)
		// Return the zero value as the default if unpopulated.
		if (!(dv$ as defaultValue).has) {
			if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) {
				return new protoreflect.Value(undefined, true)
			}
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					return protoreflect.ValueOfBool(false)
					break
				}
				case protoreflect.Int32Kind:
				case protoreflect.Sint32Kind:
				case protoreflect.Sfixed32Kind:
				{
					return protoreflect.ValueOfInt32(0)
					break
				}
				case protoreflect.Int64Kind:
				case protoreflect.Sint64Kind:
				case protoreflect.Sfixed64Kind:
				{
					return protoreflect.ValueOfInt64(0n)
					break
				}
				case protoreflect.Uint32Kind:
				case protoreflect.Fixed32Kind:
				{
					return protoreflect.ValueOfUint32(0)
					break
				}
				case protoreflect.Uint64Kind:
				case protoreflect.Fixed64Kind:
				{
					return protoreflect.ValueOfUint64(0n)
					break
				}
				case protoreflect.FloatKind:
				{
					return protoreflect.ValueOfFloat32(0)
					break
				}
				case protoreflect.DoubleKind:
				{
					return protoreflect.ValueOfFloat64(0)
					break
				}
				case protoreflect.StringKind:
				{
					return protoreflect.ValueOfString("")
					break
				}
				case protoreflect.BytesKind:
				{
					return protoreflect.ValueOfBytes(null)
					break
				}
				case protoreflect.EnumKind:
				{
					{
						let evs = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if ((__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
							return protoreflect.ValueOfEnum((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>((__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
					}
					return protoreflect.ValueOfEnum(0)
					break
				}
			}
		}

		if (($.sliceLen((dv$ as defaultValue).bytes) > 0) && !bytes2.Equal((dv$ as defaultValue).bytes, await $.markAsStructValue($.cloneStructValue((dv$ as defaultValue).val)).Bytes())) {
			// TODO: Avoid panic if we're running with the race detector
			// and instead spawn a goroutine that periodically resets
			// this value back to the original to induce a race.
			$.panic(await fmt.Sprintf("detected mutation on the default bytes for %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic18(), __goscriptStatic19(), __goscriptStatic20())))
		}
		return ((dv$ as defaultValue).val).clone()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.defaultValue",
		() => new defaultValue(),
		() => [$.methodSignature("get", [["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.Value"], true)],
		defaultValue,
		() => [/* @__PURE__ */ $.structField("has", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("val", "protoreflect.Value", [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("enum", "protoreflect.EnumValueDescriptor", [2], 80, false, { key: "_enum", pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 96, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class FieldL1 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Number(): protoreflect.FieldNumber {
		return this._fields.Number
	}

	public set Number(value: protoreflect.FieldNumber) {
		this._fields.Number = value
	}

	public get Cardinality(): protoreflect.Cardinality {
		return this._fields.Cardinality
	}

	public set Cardinality(value: protoreflect.Cardinality) {
		this._fields.Cardinality = value
	}

	public get Kind(): protoreflect.Kind {
		return this._fields.Kind
	}

	public set Kind(value: protoreflect.Kind) {
		this._fields.Kind = value
	}

	public get StringName(): stringName {
		return this._fields.StringName
	}

	public set StringName(value: stringName) {
		this._fields.StringName = value
	}

	public get IsProto3Optional(): boolean {
		return this._fields.IsProto3Optional
	}

	public set IsProto3Optional(value: boolean) {
		this._fields.IsProto3Optional = value
	}

	public get IsWeak(): boolean {
		return this._fields.IsWeak
	}

	public set IsWeak(value: boolean) {
		this._fields.IsWeak = value
	}

	public get Default(): defaultValue {
		return this._fields.Default
	}

	public set Default(value: defaultValue) {
		this._fields.Default = value
	}

	public get ContainingOneof(): protoreflect.OneofDescriptor | null {
		return this._fields.ContainingOneof
	}

	public set ContainingOneof(value: protoreflect.OneofDescriptor | null) {
		this._fields.ContainingOneof = value
	}

	public get Enum(): protoreflect.EnumDescriptor | null {
		return this._fields.Enum
	}

	public set Enum(value: protoreflect.EnumDescriptor | null) {
		this._fields.Enum = value
	}

	public get Message(): protoreflect.MessageDescriptor | null {
		return this._fields.Message
	}

	public set Message(value: protoreflect.MessageDescriptor | null) {
		this._fields.Message = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Number: protoreflect.FieldNumber
		Cardinality: protoreflect.Cardinality
		Kind: protoreflect.Kind
		StringName: stringName
		IsProto3Optional: boolean
		IsWeak: boolean
		Default: defaultValue
		ContainingOneof: protoreflect.OneofDescriptor | null
		Enum: protoreflect.EnumDescriptor | null
		Message: protoreflect.MessageDescriptor | null
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Number?: protoreflect.FieldNumber, Cardinality?: protoreflect.Cardinality, Kind?: protoreflect.Kind, StringName?: stringName, IsProto3Optional?: boolean, IsWeak?: boolean, Default?: defaultValue, ContainingOneof?: protoreflect.OneofDescriptor | null, Enum?: protoreflect.EnumDescriptor | null, Message?: protoreflect.MessageDescriptor | null, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Number: init?.Number ?? (0 as protoreflect.FieldNumber),
			Cardinality: init?.Cardinality ?? (0 as protoreflect.Cardinality),
			Kind: init?.Kind ?? (0 as protoreflect.Kind),
			StringName: init?.StringName ? init.StringName.clone() : new stringName(undefined, true),
			IsProto3Optional: init?.IsProto3Optional ?? (false as boolean),
			IsWeak: init?.IsWeak ?? (false as boolean),
			Default: init?.Default ? init.Default.clone() : new defaultValue(undefined, true),
			ContainingOneof: init?.ContainingOneof ?? (null! as protoreflect.OneofDescriptor | null),
			Enum: init?.Enum ?? (null! as protoreflect.EnumDescriptor | null),
			Message: init?.Message ?? (null! as protoreflect.MessageDescriptor | null),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldL1 {
		return new FieldL1(this, true)
	}

	public __goscriptAssign(source: FieldL1): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		target.Number = values.Number
		target.Cardinality = values.Cardinality
		target.Kind = values.Kind
		$.assignStruct(target.StringName, values.StringName)
		target.IsProto3Optional = values.IsProto3Optional
		target.IsWeak = values.IsWeak
		$.assignStruct(target.Default, values.Default)
		target.ContainingOneof = $.assignFieldValue(target.ContainingOneof, values.ContainingOneof, "protoreflect.OneofDescriptor")
		target.Enum = $.assignFieldValue(target.Enum, values.Enum, "protoreflect.EnumDescriptor")
		target.Message = $.assignFieldValue(target.Message, values.Message, "protoreflect.MessageDescriptor")
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.FieldL1",
		() => new FieldL1(),
		() => [],
		FieldL1,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Number", /* @__PURE__ */ $.basicType("int32", "protowire.Number"), [1], 8, true), /* @__PURE__ */ $.structField("Cardinality", /* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality"), [2], 12, true), /* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"), [3], 13, true), /* @__PURE__ */ $.structField("StringName", "filedesc.stringName", [4], 16, true), /* @__PURE__ */ $.structField("IsProto3Optional", /* @__PURE__ */ $.basicType("bool"), [5], 64, true), /* @__PURE__ */ $.structField("IsWeak", /* @__PURE__ */ $.basicType("bool"), [6], 65, true), /* @__PURE__ */ $.structField("Default", "filedesc.defaultValue", [7], 72, true), /* @__PURE__ */ $.structField("ContainingOneof", "protoreflect.OneofDescriptor", [8], 192, true), /* @__PURE__ */ $.structField("Enum", "protoreflect.EnumDescriptor", [9], 208, true), /* @__PURE__ */ $.structField("Message", "protoreflect.MessageDescriptor", [10], 224, true), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [11], 240, true)]
	)
}

export class Field {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): FieldL1 {
		return this._fields.L1
	}

	public set L1(value: FieldL1) {
		this._fields.L1 = value
	}

	public _fields: {
		Base: Base
		L1: FieldL1
	}

	constructor(init?: Partial<{Base?: Base, L1?: FieldL1}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new FieldL1(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Field {
		return new Field(this, true)
	}

	public __goscriptAssign(source: Field): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
	}

	public Cardinality(): protoreflect.Cardinality {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Cardinality
	}

	public ContainingMessage(): protoreflect.MessageDescriptor | null {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.mustTypeAssert<protoreflect.MessageDescriptor | null>($.pointerValue<Field>(fd).Base.L0.Parent, "protoreflect.MessageDescriptor")
	}

	public ContainingOneof(): protoreflect.OneofDescriptor | null {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.ContainingOneof
	}

	public async Default(): globalThis.Promise<protoreflect.Value> {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Default.get($.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
	}

	public DefaultEnumValue(): protoreflect.EnumValueDescriptor | null {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Default._enum
	}

	public EnforceUTF8(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.EditionFeatures.IsUTF8Validated
	}

	public Enum(): protoreflect.EnumDescriptor | null {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Enum
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const fd: Field | $.VarRef<Field> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
	}

	public HasDefault(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Default.has
	}

	public HasJSONName(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.StringName.hasJSON
	}

	public HasOptionalKeyword(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
		return ((($.pointerValue<File>((fd$ as Field).Base.L0.ParentFile).L1.Syntax == 2) && ((fd$ as Field).L1.Cardinality == 1)) && ((fd$ as Field).L1.ContainingOneof == null)) || (fd$ as Field).L1.IsProto3Optional
	}

	public HasPresence(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
		if ((fd$ as Field).L1.Cardinality == 3) {
			return false
		}
		return (((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsExtension() : Field.prototype.IsExtension.call(fd)) || (fd$ as Field).L1.EditionFeatures.IsFieldPresence) || ((fd$ as Field).L1.Message != null)) || ((fd$ as Field).L1.ContainingOneof != null)
	}

	public IsExtension(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		return false
	}

	public async IsList(): globalThis.Promise<boolean> {
		const fd: Field | $.VarRef<Field> | null = this;
		return ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).Cardinality() : Field.prototype.Cardinality.call(fd)) == 3) && !await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsMap() : Field.prototype.IsMap.call(fd))
	}

	public async IsMap(): globalThis.Promise<boolean> {
		const fd: Field | $.VarRef<Field> | null = this;
		return (await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).Message() : Field.prototype.Message.call(fd)) != null) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).Message() : Field.prototype.Message.call(fd)))).IsMapEntry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async IsMapEntry(): globalThis.Promise<boolean> {
		const fd: Field | $.VarRef<Field> | null = this;
		let [parent, ok] = $.typeAssertTuple<protoreflect.MessageDescriptor | null>($.pointerValue<Field>(fd).Base.L0.Parent, "protoreflect.MessageDescriptor")
		return ok && (__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(parent)).IsMapEntry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public IsPacked(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
		if ((fd$ as Field).L1.Cardinality != 3) {
			return false
		}
		switch ((fd$ as Field).L1.Kind) {
			case protoreflect.StringKind:
			case protoreflect.BytesKind:
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				return false
				break
			}
		}
		return (fd$ as Field).L1.EditionFeatures.IsPacked
	}

	public IsWeak(): boolean {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.IsWeak
	}

	public async JSONName(): globalThis.Promise<string> {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.StringName.getJSON($.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
	}

	public Kind(): protoreflect.Kind {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Kind
	}

	public async MapKey(): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const fd: Field | $.VarRef<Field> | null = this;
		if (!await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsMap() : Field.prototype.IsMap.call(fd))) {
			return null
		}
		return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).Message() : Field.prototype.Message.call(fd)))).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async MapValue(): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const fd: Field | $.VarRef<Field> | null = this;
		if (!await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).IsMap() : Field.prototype.IsMap.call(fd))) {
			return null
		}
		return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).Message() : Field.prototype.Message.call(fd)))).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Message(): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
		if ((fd$ as Field).L1.IsWeak) {
			{
				let [d, ] = await protoregistry.Files.prototype.FindDescriptorByName.call(protoregistry.GlobalFiles, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((fd$ as Field).L1.Message).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				if (d != null) {
					return $.mustTypeAssert<protoreflect.MessageDescriptor | null>(d, "protoreflect.MessageDescriptor")
				}
			}
		}
		return (fd$ as Field).L1.Message
	}

	public Number(): protoreflect.FieldNumber {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.Number
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const fd: Field | $.VarRef<Field> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<Field>(fd).L1.Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Field.value
	}

	public ProtoType(_p0: protoreflect.FieldDescriptor | null): void {
		const fd: Field | $.VarRef<Field> | null = this;
	}

	public async TextName(): globalThis.Promise<string> {
		const fd: Field | $.VarRef<Field> | null = this;
		return $.pointerValue<Field>(fd).L1.StringName.getText($.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd);
		;(fd$ as Field).Base.L0.ParentFile = pf;
		;(fd$ as Field).Base.L0.Parent = pd;
		;(fd$ as Field).Base.L0.Index = i
		$.assignStruct((fd$ as Field).L1.EditionFeatures, await __goscript_editions.featuresFromParentDesc((fd$ as Field).Base.Parent()))

		let rawTypeName: $.Slice<number> = null! as $.Slice<number>
		let rawOptions: $.Slice<number> = null! as $.Slice<number>
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_Number_field_number:
						{
							;(fd$ as Field).L1.Number = $.int(v, 32)
							break
						}
						case genid.FieldDescriptorProto_Label_field_number:
						{
							;(fd$ as Field).L1.Cardinality = $.int(v, 8)
							break
						}
						case genid.FieldDescriptorProto_Type_field_number:
						{
							;(fd$ as Field).L1.Kind = $.int(v, 8)
							break
						}
						case genid.FieldDescriptorProto_OneofIndex_field_number:
						{
							let od: Oneof | $.VarRef<Oneof> | null = $.indexRef($.pointerValue<MessageL2>($.pointerValue<Message>(((pd as any)?.__goType === "*filedesc.Message" && (pd as any).__goValue === undefined && (pd as any).__isTypedNil !== true ? ((pd as any) as Message | $.VarRef<Message> | null) : $.mustTypeAssert<Message | $.VarRef<Message> | null>(pd, /* @__PURE__ */ $.pointerType("filedesc.Message")))).L2).Oneofs.List!, globalThis.Number(v))
							let od$: Oneof = od == null ? $.pointerTarget<Oneof>(od) : (od as any).__isVarRef === true ? (od as any).value : (od as any).__goValue === undefined ? (od as any) : $.pointerTarget<Oneof>(od);
							;(od$ as Oneof).L1.Fields.List = $.appendOne((od$ as Oneof).L1.Fields.List, $.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")), $.appendZeros.nil)
							if ((fd$ as Field).L1.ContainingOneof != null) {
								$.panic("oneof type already set")
							}
							;(fd$ as Field).L1.ContainingOneof = $.interfaceValue<protoreflect.OneofDescriptor | null>(od, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof"))
							break
						}
						case genid.FieldDescriptorProto_Proto3Optional_field_number:
						{
							;(fd$ as Field).L1.IsProto3Optional = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple20: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple20[0]
					let m = __goscriptTuple20[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_Name_field_number:
						{
							;(fd$ as Field).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.FieldDescriptorProto_JsonName_field_number:
						{
							void (fd$ as Field).L1.StringName.InitJSON((sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v)))
							break
						}
						case genid.FieldDescriptorProto_DefaultValue_field_number:
						{
							$.assignStruct((fd$ as Field).L1.Default.val, protoreflect.ValueOfBytes(v))
							break
						}
						case genid.FieldDescriptorProto_TypeName_field_number:
						{
							rawTypeName = v
							break
						}
						case genid.FieldDescriptorProto_Options_field_number:
						{
							await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as Field).unmarshalOptions(v) : Field.prototype.unmarshalOptions.call(fd, v))
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		if (((fd$ as Field).L1.Kind == 11) && (fd$ as Field).L1.EditionFeatures.IsDelimitedEncoded) {
			;(fd$ as Field).L1.Kind = 10
		}
		if ((fd$ as Field).L1.EditionFeatures.IsLegacyRequired) {
			;(fd$ as Field).L1.Cardinality = 2
		}
		if (rawTypeName != null) {
			let name = __goscript_desc_init.makeFullName(sb, rawTypeName)
			switch ((fd$ as Field).L1.Kind) {
				case protoreflect.EnumKind:
				{
					;(fd$ as Field).L1.Enum = $.namedValueInterfaceValue<protoreflect.EnumDescriptor | null>(name, "filedesc.PlaceholderEnum", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())
					break
				}
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					;(fd$ as Field).L1.Message = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(name, "filedesc.PlaceholderMessage", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
					break
				}
			}
		}
		;(fd$ as Field).L1.Options = $.pointerValue<File>(pf).fileRaw.builder.optionsUnmarshaler(descopts.Field, rawOptions)
	}

	public async unmarshalOptions(b: $.Slice<number>): globalThis.Promise<void> {
		let fd: Field | $.VarRef<Field> | null = this;
		const fd$: Field = fd == null ? $.pointerTarget<Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<Field>(fd)
		const FieldOptions_EnforceUTF8: number = 13

		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldOptions_Packed_field_number:
						{
							;(fd$ as Field).L1.EditionFeatures.IsPacked = protowire.DecodeBool(v)
							break
						}
						case genid.FieldOptions_Weak_field_number:
						{
							;(fd$ as Field).L1.IsWeak = protowire.DecodeBool(v)
							break
						}
						case 13:
						{
							;(fd$ as Field).L1.EditionFeatures.IsUTF8Validated = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple21: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple21[0]
					let m = __goscriptTuple21[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldOptions_Features_field_number:
						{
							$.assignStruct((fd$ as Field).L1.EditionFeatures, await __goscript_editions.unmarshalFeatureSet(v, ((fd$ as Field).L1.EditionFeatures).clone()))
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Base>(this.Base).ProtoInternal(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Field",
		() => new Field(),
		() => [$.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")], true), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"], true), $.methodSignature("Default", [], ["protoreflect.Value"], true), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"], true), $.methodSignature("EnforceUTF8", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")], true), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"], true), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"], [], true), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("unmarshalOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Field,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.FieldL1", [1], 48, true)]
	)
}

export class OneofL1 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Fields(): __goscript_desc_list.OneofFields {
		return this._fields.Fields
	}

	public set Fields(value: __goscript_desc_list.OneofFields) {
		this._fields.Fields = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Fields: __goscript_desc_list.OneofFields
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Fields?: __goscript_desc_list.OneofFields, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Fields: init?.Fields ? init.Fields.clone() : new __goscript_desc_list.OneofFields(undefined, true),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OneofL1 {
		return new OneofL1(this, true)
	}

	public __goscriptAssign(source: OneofL1): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		$.assignStruct(target.Fields, values.Fields)
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.OneofL1",
		() => new OneofL1(),
		() => [],
		OneofL1,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Fields", "filedesc.OneofFields", [1], 8, true), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [2], 80, true)]
	)
}

export class Oneof {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): OneofL1 {
		return this._fields.L1
	}

	public set L1(value: OneofL1) {
		this._fields.L1 = value
	}

	public _fields: {
		Base: Base
		L1: OneofL1
	}

	constructor(init?: Partial<{Base?: Base, L1?: OneofL1}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new OneofL1(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Oneof {
		return new Oneof(this, true)
	}

	public __goscriptAssign(source: Oneof): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
	}

	public Fields(): protoreflect.FieldDescriptors | null {
		const od: Oneof | $.VarRef<Oneof> | null = this;
		return $.interfaceValue<protoreflect.FieldDescriptors | null>($.fieldRef($.pointerValue<Oneof>(od).L1._fields, "Fields"), "*filedesc.OneofFields", /* @__PURE__ */ $.pointerType("filedesc.OneofFields"))
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const od: Oneof | $.VarRef<Oneof> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(od, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof")))
	}

	public async IsSynthetic(): globalThis.Promise<boolean> {
		const od: Oneof | $.VarRef<Oneof> | null = this;
		const od$: Oneof = od == null ? $.pointerTarget<Oneof>(od) : (od as any).__isVarRef === true ? (od as any).value : (od as any).__goValue === undefined ? (od as any) : $.pointerTarget<Oneof>(od)
		return (($.pointerValue<File>((od$ as Oneof).Base.L0.ParentFile).L1.Syntax == 3) && ($.sliceLen((od$ as Oneof).L1.Fields.List) == 1)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>($.arrayIndex((od$ as Oneof).L1.Fields.List!, 0)).HasOptionalKeyword(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const od: Oneof | $.VarRef<Oneof> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<Oneof>(od).L1.Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Oneof.value
	}

	public ProtoType(_p0: protoreflect.OneofDescriptor | null): void {
		const od: Oneof | $.VarRef<Oneof> | null = this;
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let od: Oneof | $.VarRef<Oneof> | null = this;
		const od$: Oneof = od == null ? $.pointerTarget<Oneof>(od) : (od as any).__isVarRef === true ? (od as any).value : (od as any).__goValue === undefined ? (od as any) : $.pointerTarget<Oneof>(od);
		;(od$ as Oneof).Base.L0.ParentFile = pf;
		;(od$ as Oneof).Base.L0.Parent = pd;
		;(od$ as Oneof).Base.L0.Index = i

		let rawOptions: $.Slice<number> = null! as $.Slice<number>
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple22: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple22[0]
					let m = __goscriptTuple22[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.OneofDescriptorProto_Name_field_number:
						{
							;(od$ as Oneof).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.OneofDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		;(od$ as Oneof).L1.Options = $.pointerValue<File>(pf).fileRaw.builder.optionsUnmarshaler(descopts.Oneof, rawOptions)
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Base>(this.Base).ProtoInternal(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Oneof",
		() => new Oneof(),
		() => [$.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("IsSynthetic", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoType", ["protoreflect.OneofDescriptor"], [], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Oneof,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.OneofL1", [1], 48, true)]
	)
}

export class ExtensionL1 {
	public get Number(): protoreflect.FieldNumber {
		return this._fields.Number
	}

	public set Number(value: protoreflect.FieldNumber) {
		this._fields.Number = value
	}

	public get Extendee(): protoreflect.MessageDescriptor | null {
		return this._fields.Extendee
	}

	public set Extendee(value: protoreflect.MessageDescriptor | null) {
		this._fields.Extendee = value
	}

	public get Cardinality(): protoreflect.Cardinality {
		return this._fields.Cardinality
	}

	public set Cardinality(value: protoreflect.Cardinality) {
		this._fields.Cardinality = value
	}

	public get Kind(): protoreflect.Kind {
		return this._fields.Kind
	}

	public set Kind(value: protoreflect.Kind) {
		this._fields.Kind = value
	}

	public get EditionFeatures(): EditionFeatures {
		return this._fields.EditionFeatures
	}

	public set EditionFeatures(value: EditionFeatures) {
		this._fields.EditionFeatures = value
	}

	public _fields: {
		Number: protoreflect.FieldNumber
		Extendee: protoreflect.MessageDescriptor | null
		Cardinality: protoreflect.Cardinality
		Kind: protoreflect.Kind
		EditionFeatures: EditionFeatures
	}

	constructor(init?: Partial<{Number?: protoreflect.FieldNumber, Extendee?: protoreflect.MessageDescriptor | null, Cardinality?: protoreflect.Cardinality, Kind?: protoreflect.Kind, EditionFeatures?: EditionFeatures}>, __goscriptValue?: boolean) {
		this._fields = {
			Number: init?.Number ?? (0 as protoreflect.FieldNumber),
			Extendee: init?.Extendee ?? (null! as protoreflect.MessageDescriptor | null),
			Cardinality: init?.Cardinality ?? (0 as protoreflect.Cardinality),
			Kind: init?.Kind ?? (0 as protoreflect.Kind),
			EditionFeatures: init?.EditionFeatures ? init.EditionFeatures.clone() : new EditionFeatures(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionL1 {
		return new ExtensionL1(this, true)
	}

	public __goscriptAssign(source: ExtensionL1): void {
		const target = this._fields
		const values = source._fields
		target.Number = values.Number
		target.Extendee = $.assignFieldValue(target.Extendee, values.Extendee, "protoreflect.MessageDescriptor")
		target.Cardinality = values.Cardinality
		target.Kind = values.Kind
		$.assignStruct(target.EditionFeatures, values.EditionFeatures)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.ExtensionL1",
		() => new ExtensionL1(),
		() => [],
		ExtensionL1,
		() => [/* @__PURE__ */ $.structField("Number", /* @__PURE__ */ $.basicType("int32", "protowire.Number"), [0], 0, true), /* @__PURE__ */ $.structField("Extendee", "protoreflect.MessageDescriptor", [1], 8, true), /* @__PURE__ */ $.structField("Cardinality", /* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality"), [2], 24, true), /* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"), [3], 25, true), /* @__PURE__ */ $.structField("EditionFeatures", "filedesc.EditionFeatures", [4], 26, true)]
	)
}

export class Extension {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): ExtensionL1 {
		return this._fields.L1
	}

	public set L1(value: ExtensionL1) {
		this._fields.L1 = value
	}

	public get L2(): ExtensionL2 | $.VarRef<ExtensionL2> | null {
		return this._fields.L2
	}

	public set L2(value: ExtensionL2 | $.VarRef<ExtensionL2> | null) {
		this._fields.L2 = value
	}

	public _fields: {
		Base: Base
		L1: ExtensionL1
		L2: ExtensionL2 | $.VarRef<ExtensionL2> | null
	}

	constructor(init?: Partial<{Base?: Base, L1?: ExtensionL1, L2?: ExtensionL2 | $.VarRef<ExtensionL2> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new ExtensionL1(undefined, true),
			L2: init?.L2 ?? (null! as ExtensionL2 | $.VarRef<ExtensionL2> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Extension {
		return new Extension(this, true)
	}

	public __goscriptAssign(source: Extension): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
		target.L2 = values.L2
	}

	public Cardinality(): protoreflect.Cardinality {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<Extension>(xd).L1.Cardinality
	}

	public ContainingMessage(): protoreflect.MessageDescriptor | null {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<Extension>(xd).L1.Extendee
	}

	public ContainingOneof(): protoreflect.OneofDescriptor | null {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return null
	}

	public async Default(): globalThis.Promise<protoreflect.Value> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Default.get($.interfaceValue<protoreflect.FieldDescriptor | null>(xd, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))
	}

	public async DefaultEnumValue(): globalThis.Promise<protoreflect.EnumValueDescriptor | null> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Default._enum
	}

	public async Enum(): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Enum
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(xd, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))
	}

	public async HasDefault(): globalThis.Promise<boolean> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Default.has
	}

	public async HasJSONName(): globalThis.Promise<boolean> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).StringName.hasJSON
	}

	public async HasOptionalKeyword(): globalThis.Promise<boolean> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)
		return (($.pointerValue<File>((xd$ as Extension).Base.L0.ParentFile).L1.Syntax == 2) && ((xd$ as Extension).L1.Cardinality == 1)) || $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).IsProto3Optional
	}

	public HasPresence(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<Extension>(xd).L1.Cardinality != 3
	}

	public IsExtension(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return true
	}

	public IsList(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).Cardinality() : Extension.prototype.Cardinality.call(xd)) == 3
	}

	public IsMap(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return false
	}

	public IsPacked(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)
		if ((xd$ as Extension).L1.Cardinality != 3) {
			return false
		}
		switch ((xd$ as Extension).L1.Kind) {
			case protoreflect.StringKind:
			case protoreflect.BytesKind:
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				return false
				break
			}
		}
		return (xd$ as Extension).L1.EditionFeatures.IsPacked
	}

	public IsWeak(): boolean {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return false
	}

	public async JSONName(): globalThis.Promise<string> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).StringName.getJSON($.interfaceValue<protoreflect.FieldDescriptor | null>(xd, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))
	}

	public Kind(): protoreflect.Kind {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<Extension>(xd).L1.Kind
	}

	public MapKey(): protoreflect.FieldDescriptor | null {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return null
	}

	public MapValue(): protoreflect.FieldDescriptor | null {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return null
	}

	public async Message(): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Message
	}

	public Number(): protoreflect.FieldNumber {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<Extension>(xd).L1.Number
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Field.value
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const xd: Extension | $.VarRef<Extension> | null = this;
	}

	public ProtoType(_p0: protoreflect.FieldDescriptor | null): void {
		const xd: Extension | $.VarRef<Extension> | null = this;
	}

	public async TextName(): globalThis.Promise<string> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		return $.pointerValue<ExtensionL2>(await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).lazyInit() : Extension.prototype.lazyInit.call(xd))).StringName.getText($.interfaceValue<protoreflect.FieldDescriptor | null>(xd, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))
	}

	public async lazyInit(): globalThis.Promise<ExtensionL2 | $.VarRef<ExtensionL2> | null> {
		const xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)
		await File.prototype.lazyInit.call((xd$ as Extension).Base.L0.ParentFile)
		return (xd$ as Extension).L2
	}

	public unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null): void {
		let xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)
		let rawTypeName: $.Slice<number> = null! as $.Slice<number>
		let rawOptions: $.Slice<number> = null! as $.Slice<number>;
		;(xd$ as Extension).L2 = new ExtensionL2()
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_Proto3Optional_field_number:
						{
							$.pointerValue<ExtensionL2>((xd$ as Extension).L2).IsProto3Optional = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple23: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple23[0]
					let m = __goscriptTuple23[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_JsonName_field_number:
						{
							$.pointerValue<ExtensionL2>((xd$ as Extension).L2).StringName.InitJSON((sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString(v) : strs.Builder.prototype.MakeString.call(sb, v)))
							break
						}
						case genid.FieldDescriptorProto_DefaultValue_field_number:
						{
							$.assignStruct($.pointerValue<ExtensionL2>((xd$ as Extension).L2).Default.val, protoreflect.ValueOfBytes(v))
							break
						}
						case genid.FieldDescriptorProto_TypeName_field_number:
						{
							rawTypeName = v
							break
						}
						case genid.FieldDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		if (rawTypeName != null) {
			let name = __goscript_desc_init.makeFullName(sb, rawTypeName)
			switch ((xd$ as Extension).L1.Kind) {
				case protoreflect.EnumKind:
				{
					$.pointerValue<ExtensionL2>((xd$ as Extension).L2).Enum = $.namedValueInterfaceValue<protoreflect.EnumDescriptor | null>(name, "filedesc.PlaceholderEnum", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())
					break
				}
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					$.pointerValue<ExtensionL2>((xd$ as Extension).L2).Message = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(name, "filedesc.PlaceholderMessage", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
					break
				}
			}
		}
		$.pointerValue<ExtensionL2>((xd$ as Extension).L2).Options = $.pointerValue<File>((xd$ as Extension).Base.L0.ParentFile).fileRaw.builder.optionsUnmarshaler(descopts.Field, rawOptions)
	}

	public async unmarshalOptions(b: $.Slice<number>): globalThis.Promise<void> {
		let xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd)
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldOptions_Packed_field_number:
						{
							;(xd$ as Extension).L1.EditionFeatures.IsPacked = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple24: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple24[0]
					let m = __goscriptTuple24[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldOptions_Features_field_number:
						{
							$.assignStruct((xd$ as Extension).L1.EditionFeatures, await __goscript_editions.unmarshalFeatureSet(v, ((xd$ as Extension).L1.EditionFeatures).clone()))
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public async unmarshalSeed(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let xd: Extension | $.VarRef<Extension> | null = this;
		const xd$: Extension = xd == null ? $.pointerTarget<Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<Extension>(xd);
		;(xd$ as Extension).Base.L0.ParentFile = pf;
		;(xd$ as Extension).Base.L0.Parent = pd;
		;(xd$ as Extension).Base.L0.Index = i
		$.assignStruct((xd$ as Extension).L1.EditionFeatures, await __goscript_editions.featuresFromParentDesc(pd))

		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_Number_field_number:
						{
							;(xd$ as Extension).L1.Number = $.int(v, 32)
							break
						}
						case genid.FieldDescriptorProto_Label_field_number:
						{
							;(xd$ as Extension).L1.Cardinality = $.int(v, 8)
							break
						}
						case genid.FieldDescriptorProto_Type_field_number:
						{
							;(xd$ as Extension).L1.Kind = $.int(v, 8)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple25: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple25[0]
					let m = __goscriptTuple25[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.FieldDescriptorProto_Name_field_number:
						{
							;(xd$ as Extension).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.FieldDescriptorProto_Extendee_field_number:
						{
							;(xd$ as Extension).L1.Extendee = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(__goscript_desc_init.makeFullName(sb, v), "filedesc.PlaceholderMessage", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
							break
						}
						case genid.FieldDescriptorProto_Options_field_number:
						{
							await (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as Extension).unmarshalOptions(v) : Extension.prototype.unmarshalOptions.call(xd, v))
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}

		if (((xd$ as Extension).L1.Kind == 11) && (xd$ as Extension).L1.EditionFeatures.IsDelimitedEncoded) {
			;(xd$ as Extension).L1.Kind = 10
		}
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Extension",
		() => new Extension(),
		() => [$.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")], true), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"], true), $.methodSignature("Default", [], ["protoreflect.Value"], true), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"], true), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")], true), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"], true), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"], [], true), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.ExtensionL2")], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [], true), $.methodSignature("unmarshalOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("unmarshalSeed", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Extension,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.ExtensionL1", [1], 48, true), /* @__PURE__ */ $.structField("L2", /* @__PURE__ */ $.pointerType("filedesc.ExtensionL2"), [2], 88, true)]
	)
}

export class ExtensionL2 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get StringName(): stringName {
		return this._fields.StringName
	}

	public set StringName(value: stringName) {
		this._fields.StringName = value
	}

	public get IsProto3Optional(): boolean {
		return this._fields.IsProto3Optional
	}

	public set IsProto3Optional(value: boolean) {
		this._fields.IsProto3Optional = value
	}

	public get Default(): defaultValue {
		return this._fields.Default
	}

	public set Default(value: defaultValue) {
		this._fields.Default = value
	}

	public get Enum(): protoreflect.EnumDescriptor | null {
		return this._fields.Enum
	}

	public set Enum(value: protoreflect.EnumDescriptor | null) {
		this._fields.Enum = value
	}

	public get Message(): protoreflect.MessageDescriptor | null {
		return this._fields.Message
	}

	public set Message(value: protoreflect.MessageDescriptor | null) {
		this._fields.Message = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		StringName: stringName
		IsProto3Optional: boolean
		Default: defaultValue
		Enum: protoreflect.EnumDescriptor | null
		Message: protoreflect.MessageDescriptor | null
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, StringName?: stringName, IsProto3Optional?: boolean, Default?: defaultValue, Enum?: protoreflect.EnumDescriptor | null, Message?: protoreflect.MessageDescriptor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			StringName: init?.StringName ? init.StringName.clone() : new stringName(undefined, true),
			IsProto3Optional: init?.IsProto3Optional ?? (false as boolean),
			Default: init?.Default ? init.Default.clone() : new defaultValue(undefined, true),
			Enum: init?.Enum ?? (null! as protoreflect.EnumDescriptor | null),
			Message: init?.Message ?? (null! as protoreflect.MessageDescriptor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionL2 {
		return new ExtensionL2(this, true)
	}

	public __goscriptAssign(source: ExtensionL2): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		$.assignStruct(target.StringName, values.StringName)
		target.IsProto3Optional = values.IsProto3Optional
		$.assignStruct(target.Default, values.Default)
		target.Enum = $.assignFieldValue(target.Enum, values.Enum, "protoreflect.EnumDescriptor")
		target.Message = $.assignFieldValue(target.Message, values.Message, "protoreflect.MessageDescriptor")
	}

	static __typeInfo = $.registerStructType(
		"filedesc.ExtensionL2",
		() => new ExtensionL2(),
		() => [],
		ExtensionL2,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("StringName", "filedesc.stringName", [1], 8, true), /* @__PURE__ */ $.structField("IsProto3Optional", /* @__PURE__ */ $.basicType("bool"), [2], 56, true), /* @__PURE__ */ $.structField("Default", "filedesc.defaultValue", [3], 64, true), /* @__PURE__ */ $.structField("Enum", "protoreflect.EnumDescriptor", [4], 184, true), /* @__PURE__ */ $.structField("Message", "protoreflect.MessageDescriptor", [5], 200, true)]
	)
}

export class ServiceL1 {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceL1 {
		return new ServiceL1(this, true)
	}

	public __goscriptAssign(source: ServiceL1): void {
	}

	static __typeInfo = $.registerStructType(
		"filedesc.ServiceL1",
		() => new ServiceL1(),
		() => [],
		ServiceL1,
		() => []
	)
}

export class Service {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): ServiceL1 {
		return this._fields.L1
	}

	public set L1(value: ServiceL1) {
		this._fields.L1 = value
	}

	public get L2(): ServiceL2 | $.VarRef<ServiceL2> | null {
		return this._fields.L2
	}

	public set L2(value: ServiceL2 | $.VarRef<ServiceL2> | null) {
		this._fields.L2 = value
	}

	public _fields: {
		Base: Base
		L1: ServiceL1
		L2: ServiceL2 | $.VarRef<ServiceL2> | null
	}

	constructor(init?: Partial<{Base?: Base, L1?: ServiceL1, L2?: ServiceL2 | $.VarRef<ServiceL2> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new ServiceL1(undefined, true),
			L2: init?.L2 ?? (null! as ServiceL2 | $.VarRef<ServiceL2> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Service {
		return new Service(this, true)
	}

	public __goscriptAssign(source: Service): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
		target.L2 = values.L2
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const sd: Service | $.VarRef<Service> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(sd, "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service")))
	}

	public async Methods(): globalThis.Promise<protoreflect.MethodDescriptors | null> {
		const sd: Service | $.VarRef<Service> | null = this;
		return $.interfaceValue<protoreflect.MethodDescriptors | null>($.fieldRef($.pointerValue<ServiceL2>(await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as Service).lazyInit() : Service.prototype.lazyInit.call(sd)))._fields, "Methods"), "*filedesc.Methods", /* @__PURE__ */ $.pointerType("filedesc.Methods"))
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const sd: Service | $.VarRef<Service> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<ServiceL2>(await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as Service).lazyInit() : Service.prototype.lazyInit.call(sd))).Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Service.value
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const sd: Service | $.VarRef<Service> | null = this;
	}

	public ProtoType(_p0: protoreflect.ServiceDescriptor | null): void {
		const sd: Service | $.VarRef<Service> | null = this;
	}

	public async lazyInit(): globalThis.Promise<ServiceL2 | $.VarRef<ServiceL2> | null> {
		const sd: Service | $.VarRef<Service> | null = this;
		const sd$: Service = sd == null ? $.pointerTarget<Service>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<Service>(sd)
		await File.prototype.lazyInit.call((sd$ as Service).Base.L0.ParentFile)
		return (sd$ as Service).L2
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<void> {
		let sd: Service | $.VarRef<Service> | null = this;
		const sd$: Service = sd == null ? $.pointerTarget<Service>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<Service>(sd)
		let rawMethods: $.Slice<$.Slice<number>> = null! as $.Slice<$.Slice<number>>
		let rawOptions: $.Slice<number> = null! as $.Slice<number>;
		;(sd$ as Service).L2 = new ServiceL2()
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple26: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple26[0]
					let m = __goscriptTuple26[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.ServiceDescriptorProto_Method_field_number:
						{
							rawMethods = $.appendOne(rawMethods, v, $.appendZeros.nil)
							break
						}
						case genid.ServiceDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		if ($.sliceLen(rawMethods) > 0) {
			$.pointerValue<ServiceL2>((sd$ as Service).L2).Methods.List = $.makeSlice<Method>($.sliceLen(rawMethods), undefined, undefined, () => new Method(undefined, true))
			for (let __goscriptRangeTarget17 = rawMethods, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
				let b = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + i] as $.Slice<number>)
				await $.arrayIndex($.pointerValue<ServiceL2>((sd$ as Service).L2).Methods.List!, i).unmarshalFull(b, sb, (sd$ as Service).Base.L0.ParentFile, $.interfaceValue<protoreflect.Descriptor | null>(sd, "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service")), i)
			}
		}
		$.pointerValue<ServiceL2>((sd$ as Service).L2).Options = $.pointerValue<File>((sd$ as Service).Base.L0.ParentFile).fileRaw.builder.optionsUnmarshaler(descopts.Service, rawOptions)
	}

	public async unmarshalSeed(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let sd: Service | $.VarRef<Service> | null = this;
		const sd$: Service = sd == null ? $.pointerTarget<Service>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<Service>(sd);
		;(sd$ as Service).Base.L0.ParentFile = pf;
		;(sd$ as Service).Base.L0.Parent = pd;
		;(sd$ as Service).Base.L0.Index = i

		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.BytesType:
				{
					let __goscriptTuple27: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple27[0]
					let m = __goscriptTuple27[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.ServiceDescriptorProto_Name_field_number:
						{
							;(sd$ as Service).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Service",
		() => new Service(),
		() => [$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Methods", [], ["protoreflect.MethodDescriptors"], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("ProtoType", ["protoreflect.ServiceDescriptor"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.ServiceL2")], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [], true), $.methodSignature("unmarshalSeed", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Service,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.ServiceL1", [1], 48, true), /* @__PURE__ */ $.structField("L2", /* @__PURE__ */ $.pointerType("filedesc.ServiceL2"), [2], 48, true)]
	)
}

export class ServiceL2 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Methods(): __goscript_desc_list_gen.Methods {
		return this._fields.Methods
	}

	public set Methods(value: __goscript_desc_list_gen.Methods) {
		this._fields.Methods = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Methods: __goscript_desc_list_gen.Methods
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Methods?: __goscript_desc_list_gen.Methods}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Methods: init?.Methods ? init.Methods.clone() : new __goscript_desc_list_gen.Methods(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceL2 {
		return new ServiceL2(this, true)
	}

	public __goscriptAssign(source: ServiceL2): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		$.assignStruct(target.Methods, values.Methods)
	}

	static __typeInfo = $.registerStructType(
		"filedesc.ServiceL2",
		() => new ServiceL2(),
		() => [],
		ServiceL2,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Methods", "filedesc.Methods", [1], 8, true)]
	)
}

export class MethodL1 {
	public get Options(): (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null {
		return this._fields.Options
	}

	public set Options(value: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null) {
		this._fields.Options = value
	}

	public get Input(): protoreflect.MessageDescriptor | null {
		return this._fields.Input
	}

	public set Input(value: protoreflect.MessageDescriptor | null) {
		this._fields.Input = value
	}

	public get Output(): protoreflect.MessageDescriptor | null {
		return this._fields.Output
	}

	public set Output(value: protoreflect.MessageDescriptor | null) {
		this._fields.Output = value
	}

	public get IsStreamingClient(): boolean {
		return this._fields.IsStreamingClient
	}

	public set IsStreamingClient(value: boolean) {
		this._fields.IsStreamingClient = value
	}

	public get IsStreamingServer(): boolean {
		return this._fields.IsStreamingServer
	}

	public set IsStreamingServer(value: boolean) {
		this._fields.IsStreamingServer = value
	}

	public _fields: {
		Options: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
		Input: protoreflect.MessageDescriptor | null
		Output: protoreflect.MessageDescriptor | null
		IsStreamingClient: boolean
		IsStreamingServer: boolean
	}

	constructor(init?: Partial<{Options?: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null, Input?: protoreflect.MessageDescriptor | null, Output?: protoreflect.MessageDescriptor | null, IsStreamingClient?: boolean, IsStreamingServer?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null),
			Input: init?.Input ?? (null! as protoreflect.MessageDescriptor | null),
			Output: init?.Output ?? (null! as protoreflect.MessageDescriptor | null),
			IsStreamingClient: init?.IsStreamingClient ?? (false as boolean),
			IsStreamingServer: init?.IsStreamingServer ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodL1 {
		return new MethodL1(this, true)
	}

	public __goscriptAssign(source: MethodL1): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
		target.Input = $.assignFieldValue(target.Input, values.Input, "protoreflect.MessageDescriptor")
		target.Output = $.assignFieldValue(target.Output, values.Output, "protoreflect.MessageDescriptor")
		target.IsStreamingClient = values.IsStreamingClient
		target.IsStreamingServer = values.IsStreamingServer
	}

	static __typeInfo = $.registerStructType(
		"filedesc.MethodL1",
		() => new MethodL1(),
		() => [],
		MethodL1,
		() => [/* @__PURE__ */ $.structField("Options", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Input", "protoreflect.MessageDescriptor", [1], 8, true), /* @__PURE__ */ $.structField("Output", "protoreflect.MessageDescriptor", [2], 24, true), /* @__PURE__ */ $.structField("IsStreamingClient", /* @__PURE__ */ $.basicType("bool"), [3], 40, true), /* @__PURE__ */ $.structField("IsStreamingServer", /* @__PURE__ */ $.basicType("bool"), [4], 41, true)]
	)
}

export class Method {
	public get Base(): Base {
		return this._fields.Base
	}

	public set Base(value: Base) {
		this._fields.Base = value
	}

	public get L1(): MethodL1 {
		return this._fields.L1
	}

	public set L1(value: MethodL1) {
		this._fields.L1 = value
	}

	public _fields: {
		Base: Base
		L1: MethodL1
	}

	constructor(init?: Partial<{Base?: Base, L1?: MethodL1}>, __goscriptValue?: boolean) {
		this._fields = {
			Base: init?.Base ? init.Base.clone() : new Base(undefined, true),
			L1: init?.L1 ? init.L1.clone() : new MethodL1(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Method {
		return new Method(this, true)
	}

	public __goscriptAssign(source: Method): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Base, values.Base)
		$.assignStruct(target.L1, values.L1)
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const md: Method | $.VarRef<Method> | null = this;
		await descfmt.FormatDesc(s, r, $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Method", /* @__PURE__ */ $.pointerType("filedesc.Method")))
	}

	public Input(): protoreflect.MessageDescriptor | null {
		const md: Method | $.VarRef<Method> | null = this;
		return $.pointerValue<Method>(md).L1.Input
	}

	public IsStreamingClient(): boolean {
		const md: Method | $.VarRef<Method> | null = this;
		return $.pointerValue<Method>(md).L1.IsStreamingClient
	}

	public IsStreamingServer(): boolean {
		const md: Method | $.VarRef<Method> | null = this;
		return $.pointerValue<Method>(md).L1.IsStreamingServer
	}

	public async Options(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const md: Method | $.VarRef<Method> | null = this;
		{
			let f: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = $.pointerValue<Method>(md).L1.Options
			if (f != null) {
				return f!()
			}
		}
		return descopts.Method.value
	}

	public Output(): protoreflect.MessageDescriptor | null {
		const md: Method | $.VarRef<Method> | null = this;
		return $.pointerValue<Method>(md).L1.Output
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const md: Method | $.VarRef<Method> | null = this;
	}

	public ProtoType(_p0: protoreflect.MethodDescriptor | null): void {
		const md: Method | $.VarRef<Method> | null = this;
	}

	public async unmarshalFull(b: $.Slice<number>, sb: strs.Builder | $.VarRef<strs.Builder> | null, pf: File | $.VarRef<File> | null, pd: protoreflect.Descriptor | null, i: number): globalThis.Promise<void> {
		let md: Method | $.VarRef<Method> | null = this;
		const md$: Method = md == null ? $.pointerTarget<Method>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<Method>(md);
		;(md$ as Method).Base.L0.ParentFile = pf;
		;(md$ as Method).Base.L0.Parent = pd;
		;(md$ as Method).Base.L0.Index = i
		// Format the JSON name.
		let rawOptions: $.Slice<number> = null! as $.Slice<number>
		while ($.sliceLen(b) > 0) {
			let [num, typ, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			switch (typ) {
				case protowire.VarintType:
				{
					let [v, m] = protowire.ConsumeVarint(b)
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.MethodDescriptorProto_ClientStreaming_field_number:
						{
							;(md$ as Method).L1.IsStreamingClient = protowire.DecodeBool(v)
							break
						}
						case genid.MethodDescriptorProto_ServerStreaming_field_number:
						{
							;(md$ as Method).L1.IsStreamingServer = protowire.DecodeBool(v)
							break
						}
					}
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple28: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple28[0]
					let m = __goscriptTuple28[1]
					b = $.goSlice(b, m, undefined)
					switch (num) {
						case genid.MethodDescriptorProto_Name_field_number:
						{
							;(md$ as Method).Base.L0.FullName = __goscript_desc_init.appendFullName(sb, (__goscriptAwait = (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? (pd as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(pd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v)
							break
						}
						case genid.MethodDescriptorProto_InputType_field_number:
						{
							;(md$ as Method).L1.Input = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(__goscript_desc_init.makeFullName(sb, v), "filedesc.PlaceholderMessage", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
							break
						}
						case genid.MethodDescriptorProto_OutputType_field_number:
						{
							;(md$ as Method).L1.Output = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(__goscript_desc_init.makeFullName(sb, v), "filedesc.PlaceholderMessage", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
							break
						}
						case genid.MethodDescriptorProto_Options_field_number:
						{
							rawOptions = __goscript_desc_lazy.appendOptions(rawOptions, v)
							break
						}
					}
					break
				}
				default:
				{
					let m = protowire.ConsumeFieldValue(num, typ, b)
					b = $.goSlice(b, m, undefined)
					break
				}
			}
		}
		;(md$ as Method).L1.Options = $.pointerValue<File>(pf).fileRaw.builder.optionsUnmarshaler(descopts.Method, rawOptions)
	}

	public FullName(): any {
		return $.pointerValue<Base>(this.Base).FullName()
	}

	public Index(): any {
		return $.pointerValue<Base>(this.Base).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Base>(this.Base).IsPlaceholder()
	}

	public Name(): any {
		return $.pointerValue<Base>(this.Base).Name()
	}

	public Parent(): any {
		return $.pointerValue<Base>(this.Base).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Base>(this.Base).ParentFile()
	}

	public Syntax(): any {
		return $.pointerValue<Base>(this.Base).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Method",
		() => new Method(),
		() => [$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Input", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("IsStreamingClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsStreamingServer", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"], true), $.methodSignature("Output", [], ["protoreflect.MessageDescriptor"], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("ProtoType", ["protoreflect.MethodDescriptor"], [], true), $.methodSignature("unmarshalFull", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")], ["pf", /* @__PURE__ */ $.pointerType("filedesc.File")], ["pd", "protoreflect.Descriptor"], ["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Parent", [], ["protoreflect.Descriptor"], true), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"], true), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")], true)],
		Method,
		() => [/* @__PURE__ */ $.structField("Base", "filedesc.Base", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("L1", "filedesc.MethodL1", [1], 48, true)]
	)
}

export const EditionUnknown: Edition = 0

export const EditionProto2: Edition = 998

export const EditionProto3: Edition = 999

export const Edition2023: Edition = 1000

export const EditionUnsupported: Edition = 100000

export var SurrogateProto2: File | $.VarRef<File> | null

export function __goscript_init_SurrogateProto2(): void {
	if (((SurrogateProto2) as any) === undefined) {
		SurrogateProto2 = new File({L1: new FileL1({Syntax: 2}, true), L2: new FileL2()})
	}
}

export function __goscript_get_SurrogateProto2(): File | $.VarRef<File> | null {
	if (((SurrogateProto2) as any) === undefined) {
		__goscript_init_SurrogateProto2()
	}
	return SurrogateProto2
}

export function __goscript_set_SurrogateProto2(__goscriptValue: File | $.VarRef<File> | null): void {
	SurrogateProto2 = __goscriptValue
}

export var SurrogateProto3: File | $.VarRef<File> | null

export function __goscript_init_SurrogateProto3(): void {
	if (((SurrogateProto3) as any) === undefined) {
		SurrogateProto3 = new File({L1: new FileL1({Syntax: 3}, true), L2: new FileL2()})
	}
}

export function __goscript_get_SurrogateProto3(): File | $.VarRef<File> | null {
	if (((SurrogateProto3) as any) === undefined) {
		__goscript_init_SurrogateProto3()
	}
	return SurrogateProto3
}

export function __goscript_set_SurrogateProto3(__goscriptValue: File | $.VarRef<File> | null): void {
	SurrogateProto3 = __goscriptValue
}

export var SurrogateEdition2023: File | $.VarRef<File> | null

export function __goscript_init_SurrogateEdition2023(): void {
	if (((SurrogateEdition2023) as any) === undefined) {
		SurrogateEdition2023 = new File({L1: new FileL1({Syntax: 4, Edition: 1000}, true), L2: new FileL2()})
	}
}

export function __goscript_get_SurrogateEdition2023(): File | $.VarRef<File> | null {
	if (((SurrogateEdition2023) as any) === undefined) {
		__goscript_init_SurrogateEdition2023()
	}
	return SurrogateEdition2023
}

export function __goscript_set_SurrogateEdition2023(__goscriptValue: File | $.VarRef<File> | null): void {
	SurrogateEdition2023 = __goscriptValue
}

export async function isGroupLike(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	// Groups are always group types.
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 10) {
		return false
	}

	// Group fields are always the lowercase type name.
	if (!$.stringEqual(strings.ToLower((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return false
	}

	// Groups could only be defined in the same file they're used.
	if (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return false
	}

	// Group messages are always defined in the same scope as the field.  File
	// level extensions will compare NULL == NULL here, which is why the file
	// comparison above is necessary to ensure both come from the same file.
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return $.comparableEqual((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return $.comparableEqual((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function DefaultValue(v: protoreflect.Value, ev: protoreflect.EnumValueDescriptor | null): globalThis.Promise<defaultValue> {
	let dv = (() => { const __goscriptLiteralField0 = v.IsValid(); return new defaultValue({has: __goscriptLiteralField0, val: v, _enum: ev}, true) })()
	{
		let __goscriptTuple29: any = $.typeAssertTuple<$.Slice<number>>(await v.Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		let b: $.Slice<number> = __goscriptTuple29[0]
		let ok = __goscriptTuple29[1]
		if (ok) {
			// Store a copy of the default bytes, so that we can detect
			// accidental mutations of the original value.
			dv.bytes = $.appendSlice<number>(null, b, $.byteSliceHint)
		}
	}
	return (dv).clone()
}

export async function unmarshalDefault(b: $.Slice<number>, k: protoreflect.Kind, pf: File | $.VarRef<File> | null, ed: protoreflect.EnumDescriptor | null): globalThis.Promise<defaultValue> {
	let evs: protoreflect.EnumValueDescriptors | null = null! as protoreflect.EnumValueDescriptors | null
	if (k == 14) {
		// If the enum is declared within the same file, be careful not to
		// blindly call the Values method, lest we bind ourselves in a deadlock.
		{
			let __goscriptTuple30: any = $.typeAssertTuple<Enum | $.VarRef<Enum> | null>(ed, /* @__PURE__ */ $.pointerType("filedesc.Enum"))
			let e: Enum | $.VarRef<Enum> | null = __goscriptTuple30[0]
			let ok = __goscriptTuple30[1]
			if (ok && ($.pointerEqual($.pointerValue<Enum>(e).Base.L0.ParentFile, pf))) {
				evs = $.interfaceValue<protoreflect.EnumValueDescriptors | null>($.fieldRef($.pointerValue<EnumL2>($.pointerValue<Enum>(e).L2)._fields, "Values"), "*filedesc.EnumValues", /* @__PURE__ */ $.pointerType("filedesc.EnumValues"))
			} else {
				evs = (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		// If we are unable to resolve the enum dependency, use a placeholder
		// enum value since we will not be able to parse the default value.
		if ((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && protoreflect.Name_IsValid($.bytesToString(b))) {
			let v = protoreflect.ValueOfEnum(0)
			let ev = protoreflect.FullName_Append(protoreflect.FullName_Parent((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.bytesToString(b))
			return DefaultValue(v, $.namedValueInterfaceValue<protoreflect.EnumValueDescriptor | null>(ev, "filedesc.PlaceholderEnumValue", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic17()))
		}
	}

	let [v, ev, err] = await defval.Unmarshal($.bytesToString(b), k, evs, 1)
	if (err != null) {
		$.panic((err as any))
	}
	return DefaultValue(v, ev)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Format: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Format as any)(receiver, ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_ProtoInternal as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("protoreflect.FileImport", "filedesc.FileImports")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FileImport"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Enums: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Imports: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Imports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Package: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Package as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Path: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Path as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Services: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Services as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SourceLocations: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_SourceLocations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderFile_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderFile"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Syntax_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Syntax_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({FullName: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsClosed: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_IsClosed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnum_Values as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderEnum"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({Enums: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRangeOptions: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ExtensionRangeOptions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRanges: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ExtensionRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Fields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMapEntry: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_IsMapEntry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Oneofs: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Oneofs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RequiredNumbers: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_RequiredNumbers as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderMessage_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderMessage"))
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({FullName: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (__goscript_placeholder.PlaceholderEnumValue_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderEnumValue"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptAwait: any
