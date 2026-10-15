// Generated file based on type.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as __goscript_methods from "./methods.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"

import type * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import type * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value_pure.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.Descriptor", "protoreflect.FileDescriptor", "protoreflect.isFileDescriptor", "protoreflect.FileImports", "protoreflect.FileImport", "protoreflect.MessageDescriptor", "protoreflect.isMessageDescriptor", "protoreflect.MessageType", "protoreflect.MessageFieldTypes", "protoreflect.MessageDescriptors", "protoreflect.FieldDescriptor", "protoreflect.isFieldDescriptor", "protoreflect.FieldDescriptors", "protoreflect.OneofDescriptor", "protoreflect.isOneofDescriptor", "protoreflect.OneofDescriptors", "protoreflect.ExtensionTypeDescriptor", "protoreflect.ExtensionDescriptors", "protoreflect.ExtensionType", "protoreflect.EnumDescriptor", "protoreflect.isEnumDescriptor", "protoreflect.EnumType", "protoreflect.EnumDescriptors", "protoreflect.EnumValueDescriptor", "protoreflect.isEnumValueDescriptor", "protoreflect.EnumValueDescriptors", "protoreflect.ServiceDescriptor", "protoreflect.isServiceDescriptor", "protoreflect.ServiceDescriptors", "protoreflect.MethodDescriptor", "protoreflect.isMethodDescriptor", "protoreflect.MethodDescriptors"])

export type Descriptor = {
	FullName(): __goscript_proto.FullName
	Index(): number
	IsPlaceholder(): boolean
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.Descriptor",
	null,
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type FileDescriptor = {
	Enums(): EnumDescriptors | null
	Extensions(): ExtensionDescriptors | null
	FullName(): __goscript_proto.FullName
	Imports(): FileImports | null | globalThis.Promise<FileImports | null>
	Index(): number
	IsPlaceholder(): boolean
	Messages(): MessageDescriptors | null
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Package(): __goscript_proto.FullName
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	Path(): string
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: FileDescriptor | null): void
	Services(): ServiceDescriptors | null
	SourceLocations(): __goscript_source.SourceLocations | null | globalThis.Promise<__goscript_source.SourceLocations | null>
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.FileDescriptor",
	null,
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isFileDescriptor = {
	ProtoType(_p0: FileDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isFileDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.FileDescriptor"])]
);

export type FileImports = {
	Get(i: number): FileImport
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.FileImports",
	null,
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FileImport"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type MessageDescriptor = {
	Enums(): EnumDescriptors | null
	ExtensionRangeOptions(i: number): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	ExtensionRanges(): __goscript_proto.FieldRanges | null | globalThis.Promise<__goscript_proto.FieldRanges | null>
	Extensions(): ExtensionDescriptors | null
	Fields(): FieldDescriptors | null | globalThis.Promise<FieldDescriptors | null>
	FullName(): __goscript_proto.FullName
	Index(): number
	IsMapEntry(): boolean
	IsPlaceholder(): boolean
	Messages(): MessageDescriptors | null
	Name(): __goscript_proto.Name
	Oneofs(): OneofDescriptors | null | globalThis.Promise<OneofDescriptors | null>
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: MessageDescriptor | null): void
	RequiredNumbers(): __goscript_proto.FieldNumbers | null | globalThis.Promise<__goscript_proto.FieldNumbers | null>
	ReservedNames(): __goscript_proto.Names | null | globalThis.Promise<__goscript_proto.Names | null>
	ReservedRanges(): __goscript_proto.FieldRanges | null | globalThis.Promise<__goscript_proto.FieldRanges | null>
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.MessageDescriptor",
	null,
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isMessageDescriptor = {
	ProtoType(_p0: MessageDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isMessageDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"])]
);

export type MessageType = {
	Descriptor(): MessageDescriptor | null | globalThis.Promise<MessageDescriptor | null>
	New(): __goscript_value.Message | null | globalThis.Promise<__goscript_value.Message | null>
	Zero(): __goscript_value.Message | null | globalThis.Promise<__goscript_value.Message | null>
}

$.registerInterfaceType(
	"protoreflect.MessageType",
	null,
	[$.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("Zero", [], ["protoreflect.Message"])]
);

export type MessageFieldTypes = {
	Descriptor(): MessageDescriptor | null | globalThis.Promise<MessageDescriptor | null>
	Enum(i: number): EnumType | null | globalThis.Promise<EnumType | null>
	Message(i: number): MessageType | null | globalThis.Promise<MessageType | null>
	New(): __goscript_value.Message | null | globalThis.Promise<__goscript_value.Message | null>
	Zero(): __goscript_value.Message | null | globalThis.Promise<__goscript_value.Message | null>
}

$.registerInterfaceType(
	"protoreflect.MessageFieldTypes",
	null,
	[$.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Enum", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.EnumType"]), $.methodSignature("Message", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.MessageType"]), $.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("Zero", [], ["protoreflect.Message"])]
);

export type MessageDescriptors = {
	ByName(s: __goscript_proto.Name): MessageDescriptor | null | globalThis.Promise<MessageDescriptor | null>
	Get(i: number): MessageDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.MessageDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.MessageDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.MessageDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type FieldDescriptor = {
	Cardinality(): __goscript_proto.Cardinality
	ContainingMessage(): MessageDescriptor | null
	ContainingOneof(): OneofDescriptor | null
	Default(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	DefaultEnumValue(): EnumValueDescriptor | null | globalThis.Promise<EnumValueDescriptor | null>
	Enum(): EnumDescriptor | null | globalThis.Promise<EnumDescriptor | null>
	FullName(): __goscript_proto.FullName
	HasDefault(): boolean | globalThis.Promise<boolean>
	HasJSONName(): boolean | globalThis.Promise<boolean>
	HasOptionalKeyword(): boolean | globalThis.Promise<boolean>
	HasPresence(): boolean
	Index(): number
	IsExtension(): boolean
	IsList(): boolean | globalThis.Promise<boolean>
	IsMap(): boolean | globalThis.Promise<boolean>
	IsPacked(): boolean
	IsPlaceholder(): boolean
	IsWeak(): boolean
	JSONName(): string | globalThis.Promise<string>
	Kind(): __goscript_proto.Kind
	MapKey(): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	MapValue(): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	Message(): MessageDescriptor | null | globalThis.Promise<MessageDescriptor | null>
	Name(): __goscript_proto.Name
	Number(): __goscript_proto.FieldNumber
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: FieldDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
	TextName(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"protoreflect.FieldDescriptor",
	null,
	[$.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")]), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"]), $.methodSignature("Default", [], ["protoreflect.Value"]), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")]), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type isFieldDescriptor = {
	ProtoType(_p0: FieldDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isFieldDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"])]
);

export type FieldDescriptors = {
	ByJSONName(s: string): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	ByName(s: __goscript_proto.Name): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	ByNumber(n: __goscript_proto.FieldNumber): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	ByTextName(s: string): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	Get(i: number): FieldDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.FieldDescriptors",
	null,
	[$.methodSignature("ByJSONName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("ByNumber", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("ByTextName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type OneofDescriptor = {
	Fields(): FieldDescriptors | null
	FullName(): __goscript_proto.FullName
	Index(): number
	IsPlaceholder(): boolean
	IsSynthetic(): boolean | globalThis.Promise<boolean>
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: OneofDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.OneofDescriptor",
	null,
	[$.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsSynthetic", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.OneofDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isOneofDescriptor = {
	ProtoType(_p0: OneofDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isOneofDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.OneofDescriptor"])]
);

export type OneofDescriptors = {
	ByName(s: __goscript_proto.Name): OneofDescriptor | null | globalThis.Promise<OneofDescriptor | null>
	Get(i: number): OneofDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.OneofDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.OneofDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.OneofDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type ExtensionDescriptor = FieldDescriptor | null

export type ExtensionTypeDescriptor = {
	Cardinality(): __goscript_proto.Cardinality
	ContainingMessage(): MessageDescriptor | null
	ContainingOneof(): OneofDescriptor | null
	Default(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	DefaultEnumValue(): EnumValueDescriptor | null | globalThis.Promise<EnumValueDescriptor | null>
	Descriptor(): ExtensionDescriptor | null
	Enum(): EnumDescriptor | null | globalThis.Promise<EnumDescriptor | null>
	FullName(): __goscript_proto.FullName
	HasDefault(): boolean | globalThis.Promise<boolean>
	HasJSONName(): boolean | globalThis.Promise<boolean>
	HasOptionalKeyword(): boolean | globalThis.Promise<boolean>
	HasPresence(): boolean
	Index(): number
	IsExtension(): boolean
	IsList(): boolean | globalThis.Promise<boolean>
	IsMap(): boolean | globalThis.Promise<boolean>
	IsPacked(): boolean
	IsPlaceholder(): boolean
	IsWeak(): boolean
	JSONName(): string | globalThis.Promise<string>
	Kind(): __goscript_proto.Kind
	MapKey(): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	MapValue(): FieldDescriptor | null | globalThis.Promise<FieldDescriptor | null>
	Message(): MessageDescriptor | null | globalThis.Promise<MessageDescriptor | null>
	Name(): __goscript_proto.Name
	Number(): __goscript_proto.FieldNumber
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: FieldDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
	TextName(): string | globalThis.Promise<string>
	Type(): ExtensionType | null
}

$.registerInterfaceType(
	"protoreflect.ExtensionTypeDescriptor",
	null,
	[$.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")]), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"]), $.methodSignature("Default", [], ["protoreflect.Value"]), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Descriptor", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")]), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.ExtensionType"])]
);

export type ExtensionDescriptors = {
	ByName(s: __goscript_proto.Name): ExtensionDescriptor | null | globalThis.Promise<ExtensionDescriptor | null>
	Get(i: number): ExtensionDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.ExtensionDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FieldDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type ExtensionType = {
	InterfaceOf(_p0: __goscript_value_union.Value): any | globalThis.Promise<any>
	IsValidInterface(_p0: any): boolean | globalThis.Promise<boolean>
	IsValidValue(_p0: __goscript_value_union.Value): boolean | globalThis.Promise<boolean>
	New(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	TypeDescriptor(): ExtensionTypeDescriptor | null | globalThis.Promise<ExtensionTypeDescriptor | null>
	ValueOf(_p0: any): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	Zero(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
}

$.registerInterfaceType(
	"protoreflect.ExtensionType",
	null,
	[$.methodSignature("InterfaceOf", ["protoreflect.Value"], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("IsValidInterface", [{ kind: $.TypeKind.Interface, methods: [] }], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValidValue", ["protoreflect.Value"], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("New", [], ["protoreflect.Value"]), $.methodSignature("TypeDescriptor", [], ["protoreflect.ExtensionTypeDescriptor"]), $.methodSignature("ValueOf", [{ kind: $.TypeKind.Interface, methods: [] }], ["protoreflect.Value"]), $.methodSignature("Zero", [], ["protoreflect.Value"])]
);

export type EnumDescriptor = {
	FullName(): __goscript_proto.FullName
	Index(): number
	IsClosed(): boolean
	IsPlaceholder(): boolean
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: EnumDescriptor | null): void
	ReservedNames(): __goscript_proto.Names | null | globalThis.Promise<__goscript_proto.Names | null>
	ReservedRanges(): __goscript_proto.EnumRanges | null | globalThis.Promise<__goscript_proto.EnumRanges | null>
	Syntax(): __goscript_proto.Syntax
	Values(): EnumValueDescriptors | null | globalThis.Promise<EnumValueDescriptors | null>
}

$.registerInterfaceType(
	"protoreflect.EnumDescriptor",
	null,
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"])]
);

export type isEnumDescriptor = {
	ProtoType(_p0: EnumDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isEnumDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"])]
);

export type EnumType = {
	Descriptor(): EnumDescriptor | null
	New(n: __goscript_proto.EnumNumber): __goscript_value.Enum | null | globalThis.Promise<__goscript_value.Enum | null>
}

$.registerInterfaceType(
	"protoreflect.EnumType",
	null,
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("New", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], ["protoreflect.Enum"])]
);

export type EnumDescriptors = {
	ByName(s: __goscript_proto.Name): EnumDescriptor | null | globalThis.Promise<EnumDescriptor | null>
	Get(i: number): EnumDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.EnumDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.EnumDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.EnumDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type EnumValueDescriptor = {
	FullName(): __goscript_proto.FullName
	Index(): number
	IsPlaceholder(): boolean
	Name(): __goscript_proto.Name
	Number(): __goscript_proto.EnumNumber
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: EnumValueDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.EnumValueDescriptor",
	null,
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isEnumValueDescriptor = {
	ProtoType(_p0: EnumValueDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isEnumValueDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"])]
);

export type EnumValueDescriptors = {
	ByName(s: __goscript_proto.Name): EnumValueDescriptor | null | globalThis.Promise<EnumValueDescriptor | null>
	ByNumber(n: __goscript_proto.EnumNumber): EnumValueDescriptor | null | globalThis.Promise<EnumValueDescriptor | null>
	Get(i: number): EnumValueDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.EnumValueDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("ByNumber", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type ServiceDescriptor = {
	FullName(): __goscript_proto.FullName
	Index(): number
	IsPlaceholder(): boolean
	Methods(): MethodDescriptors | null | globalThis.Promise<MethodDescriptors | null>
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: ServiceDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.ServiceDescriptor",
	null,
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Methods", [], ["protoreflect.MethodDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.ServiceDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isServiceDescriptor = {
	ProtoType(_p0: ServiceDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isServiceDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.ServiceDescriptor"])]
);

export type ServiceDescriptors = {
	ByName(s: __goscript_proto.Name): ServiceDescriptor | null | globalThis.Promise<ServiceDescriptor | null>
	Get(i: number): ServiceDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.ServiceDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.ServiceDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.ServiceDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type MethodDescriptor = {
	FullName(): __goscript_proto.FullName
	Index(): number
	Input(): MessageDescriptor | null
	IsPlaceholder(): boolean
	IsStreamingClient(): boolean
	IsStreamingServer(): boolean
	Name(): __goscript_proto.Name
	Options(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	Output(): MessageDescriptor | null
	Parent(): Descriptor | null
	ParentFile(): FileDescriptor | null
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
	ProtoType(_p0: MethodDescriptor | null): void
	Syntax(): __goscript_proto.Syntax
}

$.registerInterfaceType(
	"protoreflect.MethodDescriptor",
	null,
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Input", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsStreamingClient", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsStreamingServer", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Output", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MethodDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type isMethodDescriptor = {
	ProtoType(_p0: MethodDescriptor | null): void
}

$.registerInterfaceType(
	"protoreflect.isMethodDescriptor",
	null,
	[$.methodSignature("ProtoType", ["protoreflect.MethodDescriptor"])]
);

export type MethodDescriptors = {
	ByName(s: __goscript_proto.Name): MethodDescriptor | null | globalThis.Promise<MethodDescriptor | null>
	Get(i: number): MethodDescriptor | null
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.MethodDescriptors",
	null,
	[$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.MethodDescriptor"]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.MethodDescriptor"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export class FileImport {
	public get FileDescriptor(): FileDescriptor | null {
		return this._fields.FileDescriptor
	}

	public set FileDescriptor(value: FileDescriptor | null) {
		this._fields.FileDescriptor = value
	}

	// IsPublic reports whether this is a public import, which causes this file
	// to alias declarations within the imported file. The intended use cases
	// for this feature is the ability to move proto files without breaking
	// existing dependencies.
	//
	// The current file and the imported file must be within proto package.
	public get IsPublic(): boolean {
		return this._fields.IsPublic
	}

	public set IsPublic(value: boolean) {
		this._fields.IsPublic = value
	}

	// IsWeak reports whether this is a weak import, which does not impose
	// a direct dependency on the target file.
	//
	// Weak imports are a legacy proto1 feature. Equivalent behavior is
	// achieved using proto2 extension fields or proto3 Any messages.
	public get IsWeak(): boolean {
		return this._fields.IsWeak
	}

	public set IsWeak(value: boolean) {
		this._fields.IsWeak = value
	}

	public _fields: {
		FileDescriptor: FileDescriptor | null
		IsPublic: boolean
		IsWeak: boolean
	}

	constructor(init?: Partial<{FileDescriptor?: FileDescriptor | null, IsPublic?: boolean, IsWeak?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FileDescriptor: init?.FileDescriptor ?? (null! as FileDescriptor | null),
			IsPublic: init?.IsPublic ?? (false as boolean),
			IsWeak: init?.IsWeak ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileImport {
		return new FileImport(this, true)
	}

	public __goscriptAssign(source: FileImport): void {
		const target = this._fields
		const values = source._fields
		target.FileDescriptor = $.assignFieldValue(target.FileDescriptor, values.FileDescriptor, "protoreflect.FileDescriptor")
		target.IsPublic = values.IsPublic
		target.IsWeak = values.IsWeak
	}

	public Enums(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Enums()
	}

	public Extensions(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Extensions()
	}

	public FullName(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).FullName()
	}

	public async Imports(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Imports()
	}

	public Index(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Index()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).IsPlaceholder()
	}

	public Messages(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Messages()
	}

	public Name(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Name()
	}

	public async Options(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Options()
	}

	public Package(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Package()
	}

	public Parent(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).ParentFile()
	}

	public Path(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Path()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).ProtoInternal(_p0)
	}

	public ProtoType(_p0: any): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).ProtoType(_p0)
	}

	public Services(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Services()
	}

	public async SourceLocations(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).SourceLocations()
	}

	public Syntax(): any {
		return $.pointerValue<Exclude<FileDescriptor | null, null>>(this.FileDescriptor).Syntax()
	}

	static __typeInfo = $.registerStructType(
		"protoreflect.FileImport",
		() => new FileImport(),
		() => [$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])],
		FileImport,
		() => [/* @__PURE__ */ $.structField("FileDescriptor", "protoreflect.FileDescriptor", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("IsPublic", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("IsWeak", /* @__PURE__ */ $.basicType("bool"), [2], 17, true)]
	)
}
