// Generated file based on legacy_extension.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as ptag from "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_api_export from "./api_export.gs.ts"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extension from "./extension.gs.ts"

import * as __goscript_legacy_enum from "./legacy_enum.gs.ts"

import * as __goscript_legacy_export from "./legacy_export.gs.ts"

import type * as __goscript_legacy_file from "./legacy_file.gs.ts"

import * as __goscript_legacy_message from "./legacy_message.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/sync/index.js"
import "./api_export.gs.ts"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./convert.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./extension.gs.ts"
import "./legacy_enum.gs.ts"
import "./legacy_export.gs.ts"
import "./legacy_message.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.placeholderExtension"])

export class placeholderExtension {
	public get name(): protoreflect.FullName {
		return this._fields.name
	}

	public set name(value: protoreflect.FullName) {
		this._fields.name = value
	}

	public get _number(): protoreflect.FieldNumber {
		return this._fields._number
	}

	public set _number(value: protoreflect.FieldNumber) {
		this._fields._number = value
	}

	public _fields: {
		name: protoreflect.FullName
		_number: protoreflect.FieldNumber
	}

	constructor(init?: Partial<{name?: protoreflect.FullName, _number?: protoreflect.FieldNumber}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as protoreflect.FullName),
			_number: init?._number ?? (0 as protoreflect.FieldNumber)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): placeholderExtension {
		return new placeholderExtension(this, true)
	}

	public __goscriptAssign(source: placeholderExtension): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target._number = values._number
	}

	public Cardinality(): protoreflect.Cardinality {
		const x = this;
		return 0
	}

	public ContainingMessage(): protoreflect.MessageDescriptor | null {
		const x = this;
		return null
	}

	public ContainingOneof(): protoreflect.OneofDescriptor | null {
		const x = this;
		return null
	}

	public Default(): protoreflect.Value {
		const x = this;
		return new protoreflect.Value(undefined, true)
	}

	public DefaultEnumValue(): protoreflect.EnumValueDescriptor | null {
		const x = this;
		return null
	}

	public Enum(): protoreflect.EnumDescriptor | null {
		const x = this;
		return null
	}

	public FullName(): protoreflect.FullName {
		const x = this;
		return x.name
	}

	public HasDefault(): boolean {
		const x = this;
		return false
	}

	public HasJSONName(): boolean {
		const x = this;
		return false
	}

	public HasOptionalKeyword(): boolean {
		const x = this;
		return false
	}

	public HasPresence(): boolean {
		const x = this;
		return false
	}

	public Index(): number {
		const x = this;
		return 0
	}

	public IsExtension(): boolean {
		const x = this;
		return true
	}

	public IsList(): boolean {
		const x = this;
		return false
	}

	public IsMap(): boolean {
		const x = this;
		return false
	}

	public IsPacked(): boolean {
		const x = this;
		return false
	}

	public IsPlaceholder(): boolean {
		const x = this;
		return true
	}

	public IsWeak(): boolean {
		const x = this;
		return false
	}

	public JSONName(): string {
		const x = this;
		return $.concatString(($.concatString("[", x.name)), "]")
	}

	public Kind(): protoreflect.Kind {
		const x = this;
		return 0
	}

	public MapKey(): protoreflect.FieldDescriptor | null {
		const x = this;
		return null
	}

	public MapValue(): protoreflect.FieldDescriptor | null {
		const x = this;
		return null
	}

	public Message(): protoreflect.MessageDescriptor | null {
		const x = this;
		return null
	}

	public Name(): protoreflect.Name {
		const x = this;
		return protoreflect.FullName_Name(x.name)
	}

	public Number(): protoreflect.FieldNumber {
		const x = this;
		return x._number
	}

	public Options(): protoreflect.ProtoMessage | null {
		const x = this;
		return descopts.Field.value
	}

	public Parent(): protoreflect.Descriptor | null {
		const x = this;
		return null
	}

	public ParentFile(): protoreflect.FileDescriptor | null {
		const x = this;
		return null
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const x = this;
		return
	}

	public ProtoType(_p0: protoreflect.FieldDescriptor | null): void {
		const x = this;
		return
	}

	public Syntax(): protoreflect.Syntax {
		const x = this;
		return 0
	}

	public TextName(): string {
		const x = this;
		return $.concatString(($.concatString("[", x.name)), "]")
	}

	static __typeInfo = $.registerStructType(
		"impl.placeholderExtension",
		() => new placeholderExtension(),
		() => [$.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")]), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"]), $.methodSignature("Default", [], ["protoreflect.Value"]), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")]), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")])],
		placeholderExtension,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("number", /* @__PURE__ */ $.basicType("int32", "protowire.Number"), [1], 16, false, { key: "_number", pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}
