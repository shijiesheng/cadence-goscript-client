// Generated file based on placeholder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import type * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/sync/index.js"
import "./build.gs.ts"
import "./desc.gs.ts"
import "./desc_init.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.PlaceholderFile", "filedesc.PlaceholderEnum", "filedesc.PlaceholderEnumValue", "filedesc.PlaceholderMessage"])

export type PlaceholderFile = string

$.registerNamedValueType(
	"filedesc.PlaceholderFile",
	{Enums: (receiver: any, ...args: any[]) => (PlaceholderFile_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (PlaceholderFile_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (PlaceholderFile_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Imports: (receiver: any, ...args: any[]) => (PlaceholderFile_Imports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderFile_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderFile_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (PlaceholderFile_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderFile_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderFile_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Package: (receiver: any, ...args: any[]) => (PlaceholderFile_Package as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderFile_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderFile_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Path: (receiver: any, ...args: any[]) => (PlaceholderFile_Path as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Services: (receiver: any, ...args: any[]) => (PlaceholderFile_Services as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SourceLocations: (receiver: any, ...args: any[]) => (PlaceholderFile_SourceLocations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderFile_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

$.registerNamedValueType(
	"*filedesc.PlaceholderFile",
	{Enums: (receiver: any, ...args: any[]) => (PlaceholderFile_Enums as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (PlaceholderFile_Extensions as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (PlaceholderFile_FullName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Imports: (receiver: any, ...args: any[]) => (PlaceholderFile_Imports as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderFile_Index as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderFile_IsPlaceholder as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (PlaceholderFile_Messages as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderFile_Name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderFile_Options as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Package: (receiver: any, ...args: any[]) => (PlaceholderFile_Package as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderFile_Parent as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderFile_ParentFile as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Path: (receiver: any, ...args: any[]) => (PlaceholderFile_Path as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoInternal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Services: (receiver: any, ...args: any[]) => (PlaceholderFile_Services as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SourceLocations: (receiver: any, ...args: any[]) => (PlaceholderFile_SourceLocations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderFile_Syntax as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type PlaceholderEnum = string

$.registerNamedValueType(
	"filedesc.PlaceholderEnum",
	{FullName: (receiver: any, ...args: any[]) => (PlaceholderEnum_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderEnum_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsClosed: (receiver: any, ...args: any[]) => (PlaceholderEnum_IsClosed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderEnum_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderEnum_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderEnum_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderEnum_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderEnum_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderEnum_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderEnum_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (PlaceholderEnum_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (PlaceholderEnum_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderEnum_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (PlaceholderEnum_Values as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"])]
);

$.registerNamedValueType(
	"*filedesc.PlaceholderEnum",
	{FullName: (receiver: any, ...args: any[]) => (PlaceholderEnum_FullName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderEnum_Index as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsClosed: (receiver: any, ...args: any[]) => (PlaceholderEnum_IsClosed as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderEnum_IsPlaceholder as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderEnum_Name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderEnum_Options as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderEnum_Parent as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderEnum_ParentFile as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderEnum_ProtoInternal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderEnum_ProtoType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (PlaceholderEnum_ReservedNames as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (PlaceholderEnum_ReservedRanges as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderEnum_Syntax as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (PlaceholderEnum_Values as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"])]
);

export type PlaceholderEnumValue = string

$.registerNamedValueType(
	"filedesc.PlaceholderEnumValue",
	{FullName: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

$.registerNamedValueType(
	"*filedesc.PlaceholderEnumValue",
	{FullName: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_FullName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Index as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_IsPlaceholder as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Options as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Parent as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ParentFile as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ProtoInternal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_ProtoType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderEnumValue_Syntax as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export type PlaceholderMessage = string

$.registerNamedValueType(
	"filedesc.PlaceholderMessage",
	{Enums: (receiver: any, ...args: any[]) => (PlaceholderMessage_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRangeOptions: (receiver: any, ...args: any[]) => (PlaceholderMessage_ExtensionRangeOptions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRanges: (receiver: any, ...args: any[]) => (PlaceholderMessage_ExtensionRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (PlaceholderMessage_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => (PlaceholderMessage_Fields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (PlaceholderMessage_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderMessage_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMapEntry: (receiver: any, ...args: any[]) => (PlaceholderMessage_IsMapEntry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderMessage_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (PlaceholderMessage_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderMessage_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Oneofs: (receiver: any, ...args: any[]) => (PlaceholderMessage_Oneofs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderMessage_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderMessage_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderMessage_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderMessage_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderMessage_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RequiredNumbers: (receiver: any, ...args: any[]) => (PlaceholderMessage_RequiredNumbers as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (PlaceholderMessage_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (PlaceholderMessage_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderMessage_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

$.registerNamedValueType(
	"*filedesc.PlaceholderMessage",
	{Enums: (receiver: any, ...args: any[]) => (PlaceholderMessage_Enums as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ExtensionRangeOptions: (receiver: any, ...args: any[]) => (PlaceholderMessage_ExtensionRangeOptions as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ExtensionRanges: (receiver: any, ...args: any[]) => (PlaceholderMessage_ExtensionRanges as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (PlaceholderMessage_Extensions as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => (PlaceholderMessage_Fields as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (PlaceholderMessage_FullName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderMessage_Index as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsMapEntry: (receiver: any, ...args: any[]) => (PlaceholderMessage_IsMapEntry as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderMessage_IsPlaceholder as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (PlaceholderMessage_Messages as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderMessage_Name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Oneofs: (receiver: any, ...args: any[]) => (PlaceholderMessage_Oneofs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderMessage_Options as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderMessage_Parent as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderMessage_ParentFile as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderMessage_ProtoInternal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderMessage_ProtoType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), RequiredNumbers: (receiver: any, ...args: any[]) => (PlaceholderMessage_RequiredNumbers as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (PlaceholderMessage_ReservedNames as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (PlaceholderMessage_ReservedRanges as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderMessage_Syntax as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])]
);

export var emptyNames: __goscript_desc_list.Names | $.VarRef<__goscript_desc_list.Names> | null

export function __goscript_init_emptyNames(): void {
	if (((emptyNames) as any) === undefined) {
		emptyNames = new __goscript_desc_list.Names()
	}
}

export function __goscript_get_emptyNames(): __goscript_desc_list.Names | $.VarRef<__goscript_desc_list.Names> | null {
	if (((emptyNames) as any) === undefined) {
		__goscript_init_emptyNames()
	}
	return emptyNames
}

export function __goscript_set_emptyNames(__goscriptValue: __goscript_desc_list.Names | $.VarRef<__goscript_desc_list.Names> | null): void {
	emptyNames = __goscriptValue
}

export var emptyEnumRanges: __goscript_desc_list.EnumRanges | $.VarRef<__goscript_desc_list.EnumRanges> | null

export function __goscript_init_emptyEnumRanges(): void {
	if (((emptyEnumRanges) as any) === undefined) {
		emptyEnumRanges = new __goscript_desc_list.EnumRanges()
	}
}

export function __goscript_get_emptyEnumRanges(): __goscript_desc_list.EnumRanges | $.VarRef<__goscript_desc_list.EnumRanges> | null {
	if (((emptyEnumRanges) as any) === undefined) {
		__goscript_init_emptyEnumRanges()
	}
	return emptyEnumRanges
}

export function __goscript_set_emptyEnumRanges(__goscriptValue: __goscript_desc_list.EnumRanges | $.VarRef<__goscript_desc_list.EnumRanges> | null): void {
	emptyEnumRanges = __goscriptValue
}

export var emptyFieldRanges: __goscript_desc_list.FieldRanges | $.VarRef<__goscript_desc_list.FieldRanges> | null

export function __goscript_init_emptyFieldRanges(): void {
	if (((emptyFieldRanges) as any) === undefined) {
		emptyFieldRanges = new __goscript_desc_list.FieldRanges()
	}
}

export function __goscript_get_emptyFieldRanges(): __goscript_desc_list.FieldRanges | $.VarRef<__goscript_desc_list.FieldRanges> | null {
	if (((emptyFieldRanges) as any) === undefined) {
		__goscript_init_emptyFieldRanges()
	}
	return emptyFieldRanges
}

export function __goscript_set_emptyFieldRanges(__goscriptValue: __goscript_desc_list.FieldRanges | $.VarRef<__goscript_desc_list.FieldRanges> | null): void {
	emptyFieldRanges = __goscriptValue
}

export var emptyFieldNumbers: __goscript_desc_list.FieldNumbers | $.VarRef<__goscript_desc_list.FieldNumbers> | null

export function __goscript_init_emptyFieldNumbers(): void {
	if (((emptyFieldNumbers) as any) === undefined) {
		emptyFieldNumbers = new __goscript_desc_list.FieldNumbers()
	}
}

export function __goscript_get_emptyFieldNumbers(): __goscript_desc_list.FieldNumbers | $.VarRef<__goscript_desc_list.FieldNumbers> | null {
	if (((emptyFieldNumbers) as any) === undefined) {
		__goscript_init_emptyFieldNumbers()
	}
	return emptyFieldNumbers
}

export function __goscript_set_emptyFieldNumbers(__goscriptValue: __goscript_desc_list.FieldNumbers | $.VarRef<__goscript_desc_list.FieldNumbers> | null): void {
	emptyFieldNumbers = __goscriptValue
}

export var emptySourceLocations: __goscript_desc_list.SourceLocations | $.VarRef<__goscript_desc_list.SourceLocations> | null

export function __goscript_init_emptySourceLocations(): void {
	if (((emptySourceLocations) as any) === undefined) {
		emptySourceLocations = new __goscript_desc_list.SourceLocations()
	}
}

export function __goscript_get_emptySourceLocations(): __goscript_desc_list.SourceLocations | $.VarRef<__goscript_desc_list.SourceLocations> | null {
	if (((emptySourceLocations) as any) === undefined) {
		__goscript_init_emptySourceLocations()
	}
	return emptySourceLocations
}

export function __goscript_set_emptySourceLocations(__goscriptValue: __goscript_desc_list.SourceLocations | $.VarRef<__goscript_desc_list.SourceLocations> | null): void {
	emptySourceLocations = __goscriptValue
}

export var emptyFiles: $.VarRef<__goscript_desc_list.FileImports> | null

export function __goscript_init_emptyFiles(): void {
	if (((emptyFiles) as any) === undefined) {
		emptyFiles = $.varRef<__goscript_desc_list.FileImports>(null! as __goscript_desc_list.FileImports)
	}
}

export function __goscript_get_emptyFiles(): $.VarRef<__goscript_desc_list.FileImports> | null {
	if (((emptyFiles) as any) === undefined) {
		__goscript_init_emptyFiles()
	}
	return emptyFiles
}

export function __goscript_set_emptyFiles(__goscriptValue: $.VarRef<__goscript_desc_list.FileImports> | null): void {
	emptyFiles = __goscriptValue
}

export var emptyMessages: __goscript_desc_list_gen.Messages | $.VarRef<__goscript_desc_list_gen.Messages> | null

export function __goscript_init_emptyMessages(): void {
	if (((emptyMessages) as any) === undefined) {
		emptyMessages = new __goscript_desc_list_gen.Messages()
	}
}

export function __goscript_get_emptyMessages(): __goscript_desc_list_gen.Messages | $.VarRef<__goscript_desc_list_gen.Messages> | null {
	if (((emptyMessages) as any) === undefined) {
		__goscript_init_emptyMessages()
	}
	return emptyMessages
}

export function __goscript_set_emptyMessages(__goscriptValue: __goscript_desc_list_gen.Messages | $.VarRef<__goscript_desc_list_gen.Messages> | null): void {
	emptyMessages = __goscriptValue
}

export var emptyFields: __goscript_desc_list_gen.Fields | $.VarRef<__goscript_desc_list_gen.Fields> | null

export function __goscript_init_emptyFields(): void {
	if (((emptyFields) as any) === undefined) {
		emptyFields = new __goscript_desc_list_gen.Fields()
	}
}

export function __goscript_get_emptyFields(): __goscript_desc_list_gen.Fields | $.VarRef<__goscript_desc_list_gen.Fields> | null {
	if (((emptyFields) as any) === undefined) {
		__goscript_init_emptyFields()
	}
	return emptyFields
}

export function __goscript_set_emptyFields(__goscriptValue: __goscript_desc_list_gen.Fields | $.VarRef<__goscript_desc_list_gen.Fields> | null): void {
	emptyFields = __goscriptValue
}

export var emptyOneofs: __goscript_desc_list_gen.Oneofs | $.VarRef<__goscript_desc_list_gen.Oneofs> | null

export function __goscript_init_emptyOneofs(): void {
	if (((emptyOneofs) as any) === undefined) {
		emptyOneofs = new __goscript_desc_list_gen.Oneofs()
	}
}

export function __goscript_get_emptyOneofs(): __goscript_desc_list_gen.Oneofs | $.VarRef<__goscript_desc_list_gen.Oneofs> | null {
	if (((emptyOneofs) as any) === undefined) {
		__goscript_init_emptyOneofs()
	}
	return emptyOneofs
}

export function __goscript_set_emptyOneofs(__goscriptValue: __goscript_desc_list_gen.Oneofs | $.VarRef<__goscript_desc_list_gen.Oneofs> | null): void {
	emptyOneofs = __goscriptValue
}

export var emptyEnums: __goscript_desc_list_gen.Enums | $.VarRef<__goscript_desc_list_gen.Enums> | null

export function __goscript_init_emptyEnums(): void {
	if (((emptyEnums) as any) === undefined) {
		emptyEnums = new __goscript_desc_list_gen.Enums()
	}
}

export function __goscript_get_emptyEnums(): __goscript_desc_list_gen.Enums | $.VarRef<__goscript_desc_list_gen.Enums> | null {
	if (((emptyEnums) as any) === undefined) {
		__goscript_init_emptyEnums()
	}
	return emptyEnums
}

export function __goscript_set_emptyEnums(__goscriptValue: __goscript_desc_list_gen.Enums | $.VarRef<__goscript_desc_list_gen.Enums> | null): void {
	emptyEnums = __goscriptValue
}

export var emptyEnumValues: __goscript_desc_list_gen.EnumValues | $.VarRef<__goscript_desc_list_gen.EnumValues> | null

export function __goscript_init_emptyEnumValues(): void {
	if (((emptyEnumValues) as any) === undefined) {
		emptyEnumValues = new __goscript_desc_list_gen.EnumValues()
	}
}

export function __goscript_get_emptyEnumValues(): __goscript_desc_list_gen.EnumValues | $.VarRef<__goscript_desc_list_gen.EnumValues> | null {
	if (((emptyEnumValues) as any) === undefined) {
		__goscript_init_emptyEnumValues()
	}
	return emptyEnumValues
}

export function __goscript_set_emptyEnumValues(__goscriptValue: __goscript_desc_list_gen.EnumValues | $.VarRef<__goscript_desc_list_gen.EnumValues> | null): void {
	emptyEnumValues = __goscriptValue
}

export var emptyExtensions: __goscript_desc_list_gen.Extensions | $.VarRef<__goscript_desc_list_gen.Extensions> | null

export function __goscript_init_emptyExtensions(): void {
	if (((emptyExtensions) as any) === undefined) {
		emptyExtensions = new __goscript_desc_list_gen.Extensions()
	}
}

export function __goscript_get_emptyExtensions(): __goscript_desc_list_gen.Extensions | $.VarRef<__goscript_desc_list_gen.Extensions> | null {
	if (((emptyExtensions) as any) === undefined) {
		__goscript_init_emptyExtensions()
	}
	return emptyExtensions
}

export function __goscript_set_emptyExtensions(__goscriptValue: __goscript_desc_list_gen.Extensions | $.VarRef<__goscript_desc_list_gen.Extensions> | null): void {
	emptyExtensions = __goscriptValue
}

export var emptyServices: __goscript_desc_list_gen.Services | $.VarRef<__goscript_desc_list_gen.Services> | null

export function __goscript_init_emptyServices(): void {
	if (((emptyServices) as any) === undefined) {
		emptyServices = new __goscript_desc_list_gen.Services()
	}
}

export function __goscript_get_emptyServices(): __goscript_desc_list_gen.Services | $.VarRef<__goscript_desc_list_gen.Services> | null {
	if (((emptyServices) as any) === undefined) {
		__goscript_init_emptyServices()
	}
	return emptyServices
}

export function __goscript_set_emptyServices(__goscriptValue: __goscript_desc_list_gen.Services | $.VarRef<__goscript_desc_list_gen.Services> | null): void {
	emptyServices = __goscriptValue
}

export function PlaceholderFile_ParentFile(f: PlaceholderFile): protoreflect.FileDescriptor | null {
	return $.namedValueInterfaceValue<protoreflect.FileDescriptor | null>(f, "filedesc.PlaceholderFile", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function PlaceholderFile_Parent(f: PlaceholderFile): protoreflect.Descriptor | null {
	return null
}

export function PlaceholderFile_Index(f: PlaceholderFile): number {
	return 0
}

export function PlaceholderFile_Syntax(f: PlaceholderFile): protoreflect.Syntax {
	return 0
}

export function PlaceholderFile_Name(f: PlaceholderFile): protoreflect.Name {
	return ""
}

export function PlaceholderFile_FullName(f: PlaceholderFile): protoreflect.FullName {
	return ""
}

export function PlaceholderFile_IsPlaceholder(f: PlaceholderFile): boolean {
	return true
}

export function PlaceholderFile_Options(f: PlaceholderFile): protoreflect.ProtoMessage | null {
	return descopts.File.value
}

export function PlaceholderFile_Path(f: PlaceholderFile): string {
	return f
}

export function PlaceholderFile_Package(f: PlaceholderFile): protoreflect.FullName {
	return ""
}

export function PlaceholderFile_Imports(f: PlaceholderFile): protoreflect.FileImports | null {
	return $.namedValueInterfaceValue<protoreflect.FileImports | null>(__goscript_get_emptyFiles(), "*filedesc.FileImports", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
}

export function PlaceholderFile_Messages(f: PlaceholderFile): protoreflect.MessageDescriptors | null {
	return $.interfaceValue<protoreflect.MessageDescriptors | null>(__goscript_get_emptyMessages(), "*filedesc.Messages", /* @__PURE__ */ $.pointerType("filedesc.Messages"))
}

export function PlaceholderFile_Enums(f: PlaceholderFile): protoreflect.EnumDescriptors | null {
	return $.interfaceValue<protoreflect.EnumDescriptors | null>(__goscript_get_emptyEnums(), "*filedesc.Enums", /* @__PURE__ */ $.pointerType("filedesc.Enums"))
}

export function PlaceholderFile_Extensions(f: PlaceholderFile): protoreflect.ExtensionDescriptors | null {
	return $.interfaceValue<protoreflect.ExtensionDescriptors | null>(__goscript_get_emptyExtensions(), "*filedesc.Extensions", /* @__PURE__ */ $.pointerType("filedesc.Extensions"))
}

export function PlaceholderFile_Services(f: PlaceholderFile): protoreflect.ServiceDescriptors | null {
	return $.interfaceValue<protoreflect.ServiceDescriptors | null>(__goscript_get_emptyServices(), "*filedesc.Services", /* @__PURE__ */ $.pointerType("filedesc.Services"))
}

export function PlaceholderFile_SourceLocations(f: PlaceholderFile): protoreflect.SourceLocations | null {
	return $.interfaceValue<protoreflect.SourceLocations | null>(__goscript_get_emptySourceLocations(), "*filedesc.SourceLocations", /* @__PURE__ */ $.pointerType("filedesc.SourceLocations"))
}

export function PlaceholderFile_ProtoType(f: PlaceholderFile, _p0: protoreflect.FileDescriptor | null): void {
	return
}

export function PlaceholderFile_ProtoInternal(f: PlaceholderFile, _p0: pragma.DoNotImplement | null): void {
	return
}

export function PlaceholderEnum_ParentFile(e: PlaceholderEnum): protoreflect.FileDescriptor | null {
	return null
}

export function PlaceholderEnum_Parent(e: PlaceholderEnum): protoreflect.Descriptor | null {
	return null
}

export function PlaceholderEnum_Index(e: PlaceholderEnum): number {
	return 0
}

export function PlaceholderEnum_Syntax(e: PlaceholderEnum): protoreflect.Syntax {
	return 0
}

export function PlaceholderEnum_Name(e: PlaceholderEnum): protoreflect.Name {
	return protoreflect.FullName_Name(e)
}

export function PlaceholderEnum_FullName(e: PlaceholderEnum): protoreflect.FullName {
	return e
}

export function PlaceholderEnum_IsPlaceholder(e: PlaceholderEnum): boolean {
	return true
}

export function PlaceholderEnum_Options(e: PlaceholderEnum): protoreflect.ProtoMessage | null {
	return descopts.Enum.value
}

export function PlaceholderEnum_Values(e: PlaceholderEnum): protoreflect.EnumValueDescriptors | null {
	return $.interfaceValue<protoreflect.EnumValueDescriptors | null>(__goscript_get_emptyEnumValues(), "*filedesc.EnumValues", /* @__PURE__ */ $.pointerType("filedesc.EnumValues"))
}

export function PlaceholderEnum_ReservedNames(e: PlaceholderEnum): protoreflect.Names | null {
	return $.interfaceValue<protoreflect.Names | null>(__goscript_get_emptyNames(), "*filedesc.Names", /* @__PURE__ */ $.pointerType("filedesc.Names"))
}

export function PlaceholderEnum_ReservedRanges(e: PlaceholderEnum): protoreflect.EnumRanges | null {
	return $.interfaceValue<protoreflect.EnumRanges | null>(__goscript_get_emptyEnumRanges(), "*filedesc.EnumRanges", /* @__PURE__ */ $.pointerType("filedesc.EnumRanges"))
}

export function PlaceholderEnum_IsClosed(e: PlaceholderEnum): boolean {
	return false
}

export function PlaceholderEnum_ProtoType(e: PlaceholderEnum, _p0: protoreflect.EnumDescriptor | null): void {
	return
}

export function PlaceholderEnum_ProtoInternal(e: PlaceholderEnum, _p0: pragma.DoNotImplement | null): void {
	return
}

export function PlaceholderEnumValue_ParentFile(e: PlaceholderEnumValue): protoreflect.FileDescriptor | null {
	return null
}

export function PlaceholderEnumValue_Parent(e: PlaceholderEnumValue): protoreflect.Descriptor | null {
	return null
}

export function PlaceholderEnumValue_Index(e: PlaceholderEnumValue): number {
	return 0
}

export function PlaceholderEnumValue_Syntax(e: PlaceholderEnumValue): protoreflect.Syntax {
	return 0
}

export function PlaceholderEnumValue_Name(e: PlaceholderEnumValue): protoreflect.Name {
	return protoreflect.FullName_Name(e)
}

export function PlaceholderEnumValue_FullName(e: PlaceholderEnumValue): protoreflect.FullName {
	return e
}

export function PlaceholderEnumValue_IsPlaceholder(e: PlaceholderEnumValue): boolean {
	return true
}

export function PlaceholderEnumValue_Options(e: PlaceholderEnumValue): protoreflect.ProtoMessage | null {
	return descopts.EnumValue.value
}

export function PlaceholderEnumValue_Number(e: PlaceholderEnumValue): protoreflect.EnumNumber {
	return 0
}

export function PlaceholderEnumValue_ProtoType(e: PlaceholderEnumValue, _p0: protoreflect.EnumValueDescriptor | null): void {
	return
}

export function PlaceholderEnumValue_ProtoInternal(e: PlaceholderEnumValue, _p0: pragma.DoNotImplement | null): void {
	return
}

export function PlaceholderMessage_ParentFile(m: PlaceholderMessage): protoreflect.FileDescriptor | null {
	return null
}

export function PlaceholderMessage_Parent(m: PlaceholderMessage): protoreflect.Descriptor | null {
	return null
}

export function PlaceholderMessage_Index(m: PlaceholderMessage): number {
	return 0
}

export function PlaceholderMessage_Syntax(m: PlaceholderMessage): protoreflect.Syntax {
	return 0
}

export function PlaceholderMessage_Name(m: PlaceholderMessage): protoreflect.Name {
	return protoreflect.FullName_Name(m)
}

export function PlaceholderMessage_FullName(m: PlaceholderMessage): protoreflect.FullName {
	return m
}

export function PlaceholderMessage_IsPlaceholder(m: PlaceholderMessage): boolean {
	return true
}

export function PlaceholderMessage_Options(m: PlaceholderMessage): protoreflect.ProtoMessage | null {
	return descopts.Message.value
}

export function PlaceholderMessage_IsMapEntry(m: PlaceholderMessage): boolean {
	return false
}

export function PlaceholderMessage_Fields(m: PlaceholderMessage): protoreflect.FieldDescriptors | null {
	return $.interfaceValue<protoreflect.FieldDescriptors | null>(__goscript_get_emptyFields(), "*filedesc.Fields", /* @__PURE__ */ $.pointerType("filedesc.Fields"))
}

export function PlaceholderMessage_Oneofs(m: PlaceholderMessage): protoreflect.OneofDescriptors | null {
	return $.interfaceValue<protoreflect.OneofDescriptors | null>(__goscript_get_emptyOneofs(), "*filedesc.Oneofs", /* @__PURE__ */ $.pointerType("filedesc.Oneofs"))
}

export function PlaceholderMessage_ReservedNames(m: PlaceholderMessage): protoreflect.Names | null {
	return $.interfaceValue<protoreflect.Names | null>(__goscript_get_emptyNames(), "*filedesc.Names", /* @__PURE__ */ $.pointerType("filedesc.Names"))
}

export function PlaceholderMessage_ReservedRanges(m: PlaceholderMessage): protoreflect.FieldRanges | null {
	return $.interfaceValue<protoreflect.FieldRanges | null>(__goscript_get_emptyFieldRanges(), "*filedesc.FieldRanges", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges"))
}

export function PlaceholderMessage_RequiredNumbers(m: PlaceholderMessage): protoreflect.FieldNumbers | null {
	return $.interfaceValue<protoreflect.FieldNumbers | null>(__goscript_get_emptyFieldNumbers(), "*filedesc.FieldNumbers", /* @__PURE__ */ $.pointerType("filedesc.FieldNumbers"))
}

export function PlaceholderMessage_ExtensionRanges(m: PlaceholderMessage): protoreflect.FieldRanges | null {
	return $.interfaceValue<protoreflect.FieldRanges | null>(__goscript_get_emptyFieldRanges(), "*filedesc.FieldRanges", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges"))
}

export function PlaceholderMessage_ExtensionRangeOptions(m: PlaceholderMessage, _p0: number): protoreflect.ProtoMessage | null {
	$.panic("index out of range")
	throw new globalThis.Error("goscript: unreachable return")
}

export function PlaceholderMessage_Messages(m: PlaceholderMessage): protoreflect.MessageDescriptors | null {
	return $.interfaceValue<protoreflect.MessageDescriptors | null>(__goscript_get_emptyMessages(), "*filedesc.Messages", /* @__PURE__ */ $.pointerType("filedesc.Messages"))
}

export function PlaceholderMessage_Enums(m: PlaceholderMessage): protoreflect.EnumDescriptors | null {
	return $.interfaceValue<protoreflect.EnumDescriptors | null>(__goscript_get_emptyEnums(), "*filedesc.Enums", /* @__PURE__ */ $.pointerType("filedesc.Enums"))
}

export function PlaceholderMessage_Extensions(m: PlaceholderMessage): protoreflect.ExtensionDescriptors | null {
	return $.interfaceValue<protoreflect.ExtensionDescriptors | null>(__goscript_get_emptyExtensions(), "*filedesc.Extensions", /* @__PURE__ */ $.pointerType("filedesc.Extensions"))
}

export function PlaceholderMessage_ProtoType(m: PlaceholderMessage, _p0: protoreflect.MessageDescriptor | null): void {
	return
}

export function PlaceholderMessage_ProtoInternal(m: PlaceholderMessage, _p0: pragma.DoNotImplement | null): void {
	return
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Enums: (receiver: any, ...args: any[]) => (PlaceholderFile_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (PlaceholderFile_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (PlaceholderFile_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Imports: (receiver: any, ...args: any[]) => (PlaceholderFile_Imports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (PlaceholderFile_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (PlaceholderFile_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (PlaceholderFile_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (PlaceholderFile_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (PlaceholderFile_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Package: (receiver: any, ...args: any[]) => (PlaceholderFile_Package as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (PlaceholderFile_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (PlaceholderFile_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Path: (receiver: any, ...args: any[]) => (PlaceholderFile_Path as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (PlaceholderFile_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Services: (receiver: any, ...args: any[]) => (PlaceholderFile_Services as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SourceLocations: (receiver: any, ...args: any[]) => (PlaceholderFile_SourceLocations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (PlaceholderFile_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderFile"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Format: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Format as any)(receiver, ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (__goscript_desc_list.FileImports_ProtoInternal as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("protoreflect.FileImport", "filedesc.FileImports")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FileImport"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])])
}
