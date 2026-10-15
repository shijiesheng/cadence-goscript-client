// Generated file based on tag.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as defval from "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

export let byteType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(0, 8), "byte", "uint8"))

export function __goscript_set_byteType(__goscriptValue: reflect.Type | null): void {
	byteType = __goscriptValue
}

export async function Unmarshal(tag: string, goType: reflect.Type | null, evs: protoreflect.EnumValueDescriptors | null): globalThis.Promise<protoreflect.FieldDescriptor | null> {
	let f: filedesc.Field | $.VarRef<filedesc.Field> | null = new filedesc.Field()
	let f$: filedesc.Field = f == null ? $.pointerTarget<filedesc.Field>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<filedesc.Field>(f);
	;(f$ as filedesc.Field).Base.L0.ParentFile = filedesc.__goscript_get_SurrogateProto2()
	$.assignStruct((f$ as filedesc.Field).L1.EditionFeatures, $.pointerValue<filedesc.File>((f$ as filedesc.Field).Base.L0.ParentFile).L1.EditionFeatures)
	while ($.stringLen(tag) > 0) {
		let i: number = strings.IndexByte(tag, 44)
		if (i < 0) {
			i = $.stringLen(tag)
		}
		{
			let s = $.sliceStringOrBytes(tag, undefined, i)
			switch ((true as boolean)) {
				case strings.HasPrefix(s, "name="):
				{
					;(f$ as filedesc.Field).Base.L0.FullName = $.sliceStringOrBytes(s, 5, undefined)
					break
				}
				case $.stringEqual(strings.Trim(s, "0123456789"), ""):
				{
					let [n, ] = strconv.ParseUint(s, 10, 32);
					;(f$ as filedesc.Field).L1.Number = $.int(n, 32)
					break
				}
				case $.stringEqual(s, "opt"):
				{
					;(f$ as filedesc.Field).L1.Cardinality = 1
					break
				}
				case $.stringEqual(s, "req"):
				{
					;(f$ as filedesc.Field).L1.Cardinality = 2
					break
				}
				case $.stringEqual(s, "rep"):
				{
					;(f$ as filedesc.Field).L1.Cardinality = 3
					break
				}
				case $.stringEqual(s, "varint"):
				{
					switch ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						case reflect.Bool:
						{
							;(f$ as filedesc.Field).L1.Kind = 8
							break
						}
						case reflect.Int32:
						{
							;(f$ as filedesc.Field).L1.Kind = 5
							break
						}
						case reflect.Int64:
						{
							;(f$ as filedesc.Field).L1.Kind = 3
							break
						}
						case reflect.Uint32:
						{
							;(f$ as filedesc.Field).L1.Kind = 13
							break
						}
						case reflect.Uint64:
						{
							;(f$ as filedesc.Field).L1.Kind = 4
							break
						}
					}
					break
				}
				case $.stringEqual(s, "zigzag32"):
				{
					if ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						;(f$ as filedesc.Field).L1.Kind = 17
					}
					break
				}
				case $.stringEqual(s, "zigzag64"):
				{
					if ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						;(f$ as filedesc.Field).L1.Kind = 18
					}
					break
				}
				case $.stringEqual(s, "fixed32"):
				{
					switch ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						case reflect.Int32:
						{
							;(f$ as filedesc.Field).L1.Kind = 15
							break
						}
						case reflect.Uint32:
						{
							;(f$ as filedesc.Field).L1.Kind = 7
							break
						}
						case reflect.Float32:
						{
							;(f$ as filedesc.Field).L1.Kind = 2
							break
						}
					}
					break
				}
				case $.stringEqual(s, "fixed64"):
				{
					switch ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						case reflect.Int64:
						{
							;(f$ as filedesc.Field).L1.Kind = 16
							break
						}
						case reflect.Uint64:
						{
							;(f$ as filedesc.Field).L1.Kind = 6
							break
						}
						case reflect.Float64:
						{
							;(f$ as filedesc.Field).L1.Kind = 1
							break
						}
					}
					break
				}
				case $.stringEqual(s, "bytes"):
				{
					switch ((true as boolean)) {
						case (__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24:
						{
							;(f$ as filedesc.Field).L1.Kind = 9
							break
						}
						case ((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ($.comparableEqual((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), byteType)):
						{
							;(f$ as filedesc.Field).L1.Kind = 12
							break
						}
						default:
						{
							;(f$ as filedesc.Field).L1.Kind = 11
							break
						}
					}
					break
				}
				case $.stringEqual(s, "group"):
				{
					;(f$ as filedesc.Field).L1.Kind = 10
					break
				}
				case strings.HasPrefix(s, "enum="):
				{
					;(f$ as filedesc.Field).L1.Kind = 14
					break
				}
				case strings.HasPrefix(s, "json="):
				{
					let jsonName = $.sliceStringOrBytes(s, 5, undefined)
					if (!$.stringEqual(jsonName, strs.JSONCamelCase(protoreflect.FullName_Name((f$ as filedesc.Field).Base.L0.FullName)))) {
						void (f$ as filedesc.Field).L1.StringName.InitJSON(jsonName)
					}
					break
				}
				case $.stringEqual(s, "packed"):
				{
					;(f$ as filedesc.Field).L1.EditionFeatures.IsPacked = true
					break
				}
				case strings.HasPrefix(s, "weak="):
				{
					;(f$ as filedesc.Field).L1.IsWeak = true;
					;(f$ as filedesc.Field).L1.Message = $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>($.sliceStringOrBytes(s, 5, undefined), "filedesc.PlaceholderMessage", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
					break
				}
				case strings.HasPrefix(s, "def="):
				{
					let __goscriptAssign0_0: string = $.sliceStringOrBytes(tag, 4, undefined)
					let __goscriptAssign0_1: number = $.stringLen(tag)
					s = __goscriptAssign0_0
					i = __goscriptAssign0_1
					let [v, ev, ] = await defval.Unmarshal(s, (f$ as filedesc.Field).L1.Kind, evs, 2)
					$.assignStruct((f$ as filedesc.Field).L1.Default, await filedesc.DefaultValue(v, ev))
					break
				}
				case $.stringEqual(s, "proto3"):
				{
					;(f$ as filedesc.Field).Base.L0.ParentFile = filedesc.__goscript_get_SurrogateProto3()
					break
				}
			}
		}
		tag = strings.TrimPrefix($.sliceStringOrBytes(tag, i, undefined), ",")
	}

	// The generator uses the group message name instead of the field name.
	// We obtain the real field name by lowercasing the group name.
	if ((f$ as filedesc.Field).L1.Kind == 10) {
		;(f$ as filedesc.Field).Base.L0.FullName = strings.ToLower((f$ as filedesc.Field).Base.L0.FullName)
	}
	return $.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
}

export async function Marshal(fd: protoreflect.FieldDescriptor | null, enumName: string): globalThis.Promise<string> {
	let tag: $.Slice<string> = null! as $.Slice<string>
	switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.BoolKind:
		case protoreflect.EnumKind:
		case protoreflect.Int32Kind:
		case protoreflect.Uint32Kind:
		case protoreflect.Int64Kind:
		case protoreflect.Uint64Kind:
		{
			tag = $.appendOne(tag, "varint")
			break
		}
		case protoreflect.Sint32Kind:
		{
			tag = $.appendOne(tag, "zigzag32")
			break
		}
		case protoreflect.Sint64Kind:
		{
			tag = $.appendOne(tag, "zigzag64")
			break
		}
		case protoreflect.Sfixed32Kind:
		case protoreflect.Fixed32Kind:
		case protoreflect.FloatKind:
		{
			tag = $.appendOne(tag, "fixed32")
			break
		}
		case protoreflect.Sfixed64Kind:
		case protoreflect.Fixed64Kind:
		case protoreflect.DoubleKind:
		{
			tag = $.appendOne(tag, "fixed64")
			break
		}
		case protoreflect.StringKind:
		case protoreflect.BytesKind:
		case protoreflect.MessageKind:
		{
			tag = $.appendOne(tag, "bytes")
			break
		}
		case protoreflect.GroupKind:
		{
			tag = $.appendOne(tag, "group")
			break
		}
	}
	tag = $.appendOne(tag, strconv.Itoa($.int((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))))
	switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.Optional:
		{
			tag = $.appendOne(tag, "opt")
			break
		}
		case protoreflect.Required:
		{
			tag = $.appendOne(tag, "req")
			break
		}
		case protoreflect.Repeated:
		{
			tag = $.appendOne(tag, "rep")
			break
		}
	}
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		tag = $.appendOne(tag, "packed")
	}
	let name = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
		// The name of the FieldDescriptor for a group field is
		// lowercased. To find the original capitalization, we
		// look in the field's MessageType.
		name = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	tag = $.appendOne(tag, $.concatString("name=", name))
	{
		let jsonName = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).JSONName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (((!$.stringEqual(jsonName, "")) && (!$.stringEqual(jsonName, name))) && !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			// NOTE: The jsonName != name condition is suspect, but it preserve
			// the exact same semantics from the previous generator.
			tag = $.appendOne(tag, $.concatString("json=", jsonName))
		}
	}
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		tag = $.appendOne(tag, $.concatString("weak=", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	// The previous implementation does not tag extension fields as proto3,
	// even when the field is defined in a proto3 file. Match that behavior
	// for consistency.
	if (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Syntax(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) && !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		tag = $.appendOne(tag, "proto3")
	}
	if (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) && (!$.stringEqual(enumName, ""))) {
		tag = $.appendOne(tag, $.concatString("enum=", enumName))
	}
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
		tag = $.appendOne(tag, "oneof")
	}
	// This must appear last in the tag, since commas in strings aren't escaped.
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasDefault(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		let [def, ] = await defval.Marshal((((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).DefaultEnumValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 2)
		tag = $.appendOne(tag, $.concatString("def=", def))
	}
	return strings.Join(tag, ",")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Enums: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRangeOptions: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ExtensionRangeOptions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRanges: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ExtensionRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Fields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMapEntry: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_IsMapEntry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Oneofs: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Oneofs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RequiredNumbers: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_RequiredNumbers as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderMessage"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptAwait: any
