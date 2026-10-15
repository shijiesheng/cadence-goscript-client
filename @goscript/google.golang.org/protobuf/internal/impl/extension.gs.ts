// Generated file based on extension.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as ptag from "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as __goscript_api_export from "./api_export.gs.ts"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_legacy_enum from "./legacy_enum.gs.ts"

import * as __goscript_legacy_export from "./legacy_export.gs.ts"

import * as __goscript_legacy_extension from "./legacy_extension.gs.ts"

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
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "./api_export.gs.ts"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./convert.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./legacy_enum.gs.ts"
import "./legacy_export.gs.ts"
import "./legacy_extension.gs.ts"
import "./legacy_message.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.ExtensionInfo", "impl.extensionTypeDescriptor"])

export class extensionTypeDescriptor {
	public get ExtensionDescriptor(): protoreflect.ExtensionDescriptor | null {
		return this._fields.ExtensionDescriptor
	}

	public set ExtensionDescriptor(value: protoreflect.ExtensionDescriptor | null) {
		this._fields.ExtensionDescriptor = value
	}

	public get xi(): ExtensionInfo | $.VarRef<ExtensionInfo> | null {
		return this._fields.xi
	}

	public set xi(value: ExtensionInfo | $.VarRef<ExtensionInfo> | null) {
		this._fields.xi = value
	}

	public _fields: {
		ExtensionDescriptor: protoreflect.ExtensionDescriptor | null
		xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null
	}

	constructor(init?: Partial<{ExtensionDescriptor?: protoreflect.ExtensionDescriptor | null, xi?: ExtensionInfo | $.VarRef<ExtensionInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExtensionDescriptor: init?.ExtensionDescriptor ?? (null! as protoreflect.ExtensionDescriptor | null),
			xi: init?.xi ?? (null! as ExtensionInfo | $.VarRef<ExtensionInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): extensionTypeDescriptor {
		return new extensionTypeDescriptor(this, true)
	}

	public __goscriptAssign(source: extensionTypeDescriptor): void {
		const target = this._fields
		const values = source._fields
		target.ExtensionDescriptor = $.assignFieldValue(target.ExtensionDescriptor, values.ExtensionDescriptor, "protoreflect.FieldDescriptor")
		target.xi = values.xi
	}

	public Descriptor(): protoreflect.ExtensionDescriptor | null {
		const xtd: extensionTypeDescriptor | $.VarRef<extensionTypeDescriptor> | null = this;
		return $.pointerValue<extensionTypeDescriptor>(xtd).ExtensionDescriptor
	}

	public Type(): protoreflect.ExtensionType | null {
		const xtd: extensionTypeDescriptor | $.VarRef<extensionTypeDescriptor> | null = this;
		return $.interfaceValue<protoreflect.ExtensionType | null>($.pointerValue<extensionTypeDescriptor>(xtd).xi, "*impl.ExtensionInfo", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))
	}

	public Cardinality(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Cardinality()
	}

	public ContainingMessage(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).ContainingMessage()
	}

	public ContainingOneof(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).ContainingOneof()
	}

	public async Default(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Default()
	}

	public async DefaultEnumValue(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).DefaultEnumValue()
	}

	public async Enum(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Enum()
	}

	public FullName(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).FullName()
	}

	public async HasDefault(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).HasDefault()
	}

	public async HasJSONName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).HasJSONName()
	}

	public async HasOptionalKeyword(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).HasOptionalKeyword()
	}

	public HasPresence(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).HasPresence()
	}

	public Index(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Index()
	}

	public IsExtension(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsExtension()
	}

	public async IsList(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsList()
	}

	public async IsMap(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsMap()
	}

	public IsPacked(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsPacked()
	}

	public IsPlaceholder(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsPlaceholder()
	}

	public IsWeak(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).IsWeak()
	}

	public async JSONName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).JSONName()
	}

	public Kind(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Kind()
	}

	public async MapKey(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).MapKey()
	}

	public async MapValue(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).MapValue()
	}

	public async Message(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Message()
	}

	public Name(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Name()
	}

	public Number(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Number()
	}

	public async Options(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Options()
	}

	public Parent(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Parent()
	}

	public ParentFile(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).ParentFile()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).ProtoInternal(_p0)
	}

	public ProtoType(_p0: any): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).ProtoType(_p0)
	}

	public Syntax(): any {
		return $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).Syntax()
	}

	public async TextName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.ExtensionDescriptor | null, null>>(this.ExtensionDescriptor).TextName()
	}

	static __typeInfo = $.registerStructType(
		"impl.extensionTypeDescriptor",
		() => new extensionTypeDescriptor(),
		() => [$.methodSignature("Descriptor", [], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Type", [], ["protoreflect.ExtensionType"], true), $.methodSignature("Cardinality", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality")]), $.methodSignature("ContainingMessage", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("ContainingOneof", [], ["protoreflect.OneofDescriptor"]), $.methodSignature("Default", [], ["protoreflect.Value"]), $.methodSignature("DefaultEnumValue", [], ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Enum", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("HasDefault", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasJSONName", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasOptionalKeyword", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasPresence", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsExtension", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsList", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMap", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPacked", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsWeak", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("JSONName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")]), $.methodSignature("MapKey", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("MapValue", [], ["protoreflect.FieldDescriptor"]), $.methodSignature("Message", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FieldDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("TextName", [], [/* @__PURE__ */ $.basicType("string")])],
		extensionTypeDescriptor,
		() => [/* @__PURE__ */ $.structField("ExtensionDescriptor", "protoreflect.FieldDescriptor", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("xi", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"), [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class ExtensionInfo {
	// An ExtensionInfo may exist in several stages of initialization.
	//
	// extensionInfoUninitialized: Some or all of the legacy exported
	// fields may be set, but none of the unexported fields have been
	// initialized. This is the starting state for an ExtensionInfo
	// in legacy generated code.
	//
	// extensionInfoDescInit: The desc field is set, but other unexported fields
	// may not be initialized. Legacy exported fields may or may not be set.
	// This is the starting state for an ExtensionInfo in newly generated code.
	//
	// extensionInfoFullInit: The ExtensionInfo is fully initialized.
	// This state is only entered after lazy initialization is complete.
	public get init(): number {
		return this._fields.init
	}

	public set init(value: number) {
		this._fields.init = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get desc(): extensionTypeDescriptor {
		return this._fields.desc
	}

	public set desc(value: extensionTypeDescriptor) {
		this._fields.desc = value
	}

	public get conv(): __goscript_convert.Converter | null {
		return this._fields.conv
	}

	public set conv(value: __goscript_convert.Converter | null) {
		this._fields.conv = value
	}

	public get info(): __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null {
		return this._fields.info
	}

	public set info(value: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null) {
		this._fields.info = value
	}

	// ExtendedType is a typed nil-pointer to the parent message type that
	// is being extended. It is possible for this to be unpopulated in v2
	// since the message may no longer implement the MessageV1 interface.
	//
	// Deprecated: Use the ExtendedType method instead.
	public get ExtendedType(): protoiface.MessageV1 | null {
		return this._fields.ExtendedType
	}

	public set ExtendedType(value: protoiface.MessageV1 | null) {
		this._fields.ExtendedType = value
	}

	// ExtensionType is the zero value of the extension type.
	//
	// For historical reasons, reflect.TypeOf(ExtensionType) and the
	// type returned by InterfaceOf may not be identical.
	//
	// Deprecated: Use InterfaceOf(xt.Zero()) instead.
	public get ExtensionType(): any {
		return this._fields.ExtensionType
	}

	public set ExtensionType(value: any) {
		this._fields.ExtensionType = value
	}

	// Field is the field number of the extension.
	//
	// Deprecated: Use the Descriptor().Number method instead.
	public get Field(): number {
		return this._fields.Field
	}

	public set Field(value: number) {
		this._fields.Field = value
	}

	// Name is the fully qualified name of extension.
	//
	// Deprecated: Use the Descriptor().FullName method instead.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Tag is the protobuf struct tag used in the v1 API.
	//
	// Deprecated: Do not use.
	public get Tag(): string {
		return this._fields.Tag
	}

	public set Tag(value: string) {
		this._fields.Tag = value
	}

	// Filename is the proto filename in which the extension is defined.
	//
	// Deprecated: Use Descriptor().ParentFile().Path() instead.
	public get Filename(): string {
		return this._fields.Filename
	}

	public set Filename(value: string) {
		this._fields.Filename = value
	}

	public _fields: {
		init: number
		mu: sync.Mutex
		goType: reflect.Type | null
		desc: extensionTypeDescriptor
		conv: __goscript_convert.Converter | null
		info: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null
		ExtendedType: protoiface.MessageV1 | null
		ExtensionType: any
		Field: number
		Name: string
		Tag: string
		Filename: string
	}

	constructor(init?: Partial<{init?: number, mu?: sync.Mutex, goType?: reflect.Type | null, desc?: extensionTypeDescriptor, conv?: __goscript_convert.Converter | null, info?: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null, ExtendedType?: protoiface.MessageV1 | null, ExtensionType?: any, Field?: number, Name?: string, Tag?: string, Filename?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			init: init?.init ?? (0 as number),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			goType: init?.goType ?? (null! as reflect.Type | null),
			desc: init?.desc ? init.desc.clone() : new extensionTypeDescriptor(undefined, true),
			conv: init?.conv ?? (null! as __goscript_convert.Converter | null),
			info: init?.info ?? (null! as __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null),
			ExtendedType: init?.ExtendedType ?? (null! as protoiface.MessageV1 | null),
			ExtensionType: init?.ExtensionType ?? (null! as any),
			Field: init?.Field ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			Tag: init?.Tag ?? ("" as string),
			Filename: init?.Filename ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionInfo {
		return new ExtensionInfo(this, true)
	}

	public __goscriptAssign(source: ExtensionInfo): void {
		const target = this._fields
		const values = source._fields
		target.init = values.init
		$.assignStruct(target.mu, values.mu)
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.desc, values.desc)
		target.conv = $.assignFieldValue(target.conv, values.conv, "impl.Converter")
		target.info = values.info
		target.ExtendedType = $.assignFieldValue(target.ExtendedType, values.ExtendedType, "protoiface.MessageV1")
		target.ExtensionType = $.assignFieldValue(target.ExtensionType, values.ExtensionType, { kind: $.TypeKind.Interface, methods: [] })
		target.Field = values.Field
		target.Name = values.Name
		target.Tag = values.Tag
		target.Filename = values.Filename
	}

	public async InterfaceOf(v: protoreflect.Value): globalThis.Promise<any> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))).Interface()
	}

	public async IsValidInterface(v: any): globalThis.Promise<boolean> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).IsValidGo($.markAsStructValue($.cloneStructValue(reflect.ValueOf(v))))
	}

	public async IsValidValue(v: protoreflect.Value): globalThis.Promise<boolean> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).IsValidPB((v).clone())
	}

	public async New(): globalThis.Promise<protoreflect.Value> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async TypeDescriptor(): globalThis.Promise<protoreflect.ExtensionTypeDescriptor | null> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi)
		if (atomic.LoadUint32($.fieldRef((xi$ as ExtensionInfo)._fields, "init")) < 1) {
			await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInitSlow() : ExtensionInfo.prototype.lazyInitSlow.call(xi))
		}
		return $.interfaceValue<protoreflect.ExtensionTypeDescriptor | null>($.fieldRef((xi$ as ExtensionInfo)._fields, "desc"), "*impl.extensionTypeDescriptor", /* @__PURE__ */ $.pointerType("impl.extensionTypeDescriptor"))
	}

	public async ValueOf(v: any): globalThis.Promise<protoreflect.Value> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async Zero(): globalThis.Promise<protoreflect.Value> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInit() : ExtensionInfo.prototype.lazyInit.call(xi)))).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async initFromLegacy(): globalThis.Promise<void> {
		let xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi)

		if (((xi$ as ExtensionInfo).ExtendedType == null) || ((xi$ as ExtensionInfo).ExtensionType == null)) {
			let xd = new __goscript_legacy_extension.placeholderExtension({name: (xi$ as ExtensionInfo).Name, _number: $.int((xi$ as ExtensionInfo).Field, 32)}, true)
			$.assignStruct((xi$ as ExtensionInfo).desc, new extensionTypeDescriptor({ExtensionDescriptor: $.interfaceValue<protoreflect.ExtensionDescriptor | null>((xd).clone(), "impl.placeholderExtension", "impl.placeholderExtension"), xi: xi}, true))
			return
		}

		let ed: protoreflect.EnumDescriptor | null = null! as protoreflect.EnumDescriptor | null
		let md: protoreflect.MessageDescriptor | null = null! as protoreflect.MessageDescriptor | null
		let t = reflect.TypeOf((xi$ as ExtensionInfo).ExtensionType)
		let isOptional = ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)
		let isRepeated = ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)
		if (isOptional || isRepeated) {
			t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
			switch (true) {
				case $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").ok:
					{
						let v: protoreflect.Enum | null = $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").value
						ed = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.Enum, null>) : $.pointerValue<Exclude<protoreflect.Enum, null>>(v)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<__goscript_legacy_file.enumV1 | null>(__goscriptTypeSwitchValue, "impl.enumV1").ok:
					{
						let v: __goscript_legacy_file.enumV1 | null = $.typeAssert<__goscript_legacy_file.enumV1 | null>(__goscriptTypeSwitchValue, "impl.enumV1").value
						ed = await __goscript_legacy_enum.LegacyLoadEnumDesc(t)
					}
					break
				case $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
					{
						let v: protoreflect.ProtoMessage | null = $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
						md = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(v)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<__goscript_legacy_file.messageV1 | null>(__goscriptTypeSwitchValue, "impl.messageV1").ok:
					{
						let v: __goscript_legacy_file.messageV1 | null = $.typeAssert<__goscript_legacy_file.messageV1 | null>(__goscriptTypeSwitchValue, "impl.messageV1").value
						md = await __goscript_legacy_message.LegacyLoadMessageDesc(t)
					}
					break
			}
		}

		let evs: protoreflect.EnumValueDescriptors | null = null! as protoreflect.EnumValueDescriptors | null
		if (ed != null) {
			evs = (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let fd: filedesc.Field | $.VarRef<filedesc.Field> | null = $.mustTypeAssert<filedesc.Field | $.VarRef<filedesc.Field> | null>(await ptag.Unmarshal((xi$ as ExtensionInfo).Tag, t, evs), /* @__PURE__ */ $.pointerType("filedesc.Field"))
		let fd$: filedesc.Field = fd == null ? $.pointerTarget<filedesc.Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<filedesc.Field>(fd)

		let xd: filedesc.Extension | $.VarRef<filedesc.Extension> | null = new filedesc.Extension({L2: new filedesc.ExtensionL2()})
		let xd$: filedesc.Extension = xd == null ? $.pointerTarget<filedesc.Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<filedesc.Extension>(xd);
		;(xd$ as filedesc.Extension).Base.L0.ParentFile = filedesc.__goscript_get_SurrogateProto2();
		;(xd$ as filedesc.Extension).Base.L0.FullName = (xi$ as ExtensionInfo).Name;
		;(xd$ as filedesc.Extension).L1.Number = $.int((xi$ as ExtensionInfo).Field, 32);
		;(xd$ as filedesc.Extension).L1.Cardinality = (fd$ as filedesc.Field).L1.Cardinality;
		;(xd$ as filedesc.Extension).L1.Kind = (fd$ as filedesc.Field).L1.Kind
		$.assignStruct((xd$ as filedesc.Extension).L1.EditionFeatures, (fd$ as filedesc.Field).L1.EditionFeatures)
		$.assignStruct($.pointerValue<filedesc.ExtensionL2>((xd$ as filedesc.Extension).L2).Default, (fd$ as filedesc.Field).L1.Default);
		;(xd$ as filedesc.Extension).L1.Extendee = await $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).MessageDescriptorOf(((xi$ as ExtensionInfo).ExtendedType as __goscript_api_export.message | null))
		$.pointerValue<filedesc.ExtensionL2>((xd$ as filedesc.Extension).L2).Enum = ed
		$.pointerValue<filedesc.ExtensionL2>((xd$ as filedesc.Extension).L2).Message = md

		if (await messageset.IsMessageSet((xd$ as filedesc.Extension).L1.Extendee) && ($.stringEqual((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (xd$ as filedesc.Extension).Base.L0.FullName))) {
			;(xd$ as filedesc.Extension).Base.L0.FullName = protoreflect.FullName_Append((xd$ as filedesc.Extension).Base.L0.FullName, messageset.ExtensionName)
		}

		let tt = reflect.TypeOf((xi$ as ExtensionInfo).ExtensionType)
		if (isOptional) {
			tt = (__goscriptAwait = (tt !== null && (tt as any).__isVarRef !== true && (tt as any).__goValue === undefined ? (tt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(xi$ as ExtensionInfo).goType = tt
		$.assignStruct((xi$ as ExtensionInfo).desc, new extensionTypeDescriptor({ExtensionDescriptor: $.interfaceValue<protoreflect.ExtensionDescriptor | null>(xd, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")), xi: xi}, true))
	}

	public async initToLegacy(): globalThis.Promise<void> {
		let xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi)
		let xd = ((xi$ as ExtensionInfo).desc).clone()
		let parent: protoiface.MessageV1 | null = null! as protoiface.MessageV1 | null
		let messageName = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>($.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).ContainingMessage()).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [mt, ] = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, messageName)
			if (mt != null) {

				let mv = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let t = reflect.TypeOf((mv as any))
				let __goscriptShadow0 = mv
				{
					let __goscriptTuple0: any = $.typeAssertTuple<__goscript_convert.unwrapper | null>(__goscriptShadow0, "impl.unwrapper")
					let __goscriptShadow1 = __goscriptTuple0[0]
					let ok = __goscriptTuple0[1]
					if (ok) {
						t = reflect.TypeOf((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_convert.unwrapper, null>) : $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>(__goscriptShadow1)).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
				}

				let mz = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
				let __goscriptShadow2 = mz
				{
					let __goscriptTuple1: any = $.typeAssertTuple<protoiface.MessageV1 | null>(__goscriptShadow2, "protoiface.MessageV1")
					let __goscriptShadow3 = __goscriptTuple1[0]
					let ok = __goscriptTuple1[1]
					if (ok) {
						parent = __goscriptShadow3
					}
				}
			}
		}

		let extType = (xi$ as ExtensionInfo).goType
		switch ((__goscriptAwait = (extType !== null && (extType as any).__isVarRef !== true && (extType as any).__goValue === undefined ? (extType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(extType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Bool:
			case reflect.Int32:
			case reflect.Int64:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Float32:
			case reflect.Float64:
			case reflect.String:
			{
				extType = reflect.PtrTo($.pointerValueOrNil(extType)!)
				break
			}
		}

		let enumName: string = ""
		if ($.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).Kind() == 14) {
			enumName = await __goscript_legacy_enum.legacyEnumName(await $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).Enum())
		}

		let filename: string = ""
		{
			let fd = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).ParentFile()
			if (fd != null) {
				filename = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let name = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).FullName()
		if (await messageset.IsMessageSetExtension($.interfaceValue<protoreflect.FieldDescriptor | null>((xd).clone(), "impl.extensionTypeDescriptor", "impl.extensionTypeDescriptor"))) {
			name = protoreflect.FullName_Parent(name)
		}

		;(xi$ as ExtensionInfo).ExtendedType = parent;
		;(xi$ as ExtensionInfo).ExtensionType = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(extType)!))).Interface();
		;(xi$ as ExtensionInfo).Field = $.int($.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd.ExtensionDescriptor).Number(), 32);
		;(xi$ as ExtensionInfo).Name = name;
		;(xi$ as ExtensionInfo).Tag = await ptag.Marshal($.interfaceValue<protoreflect.FieldDescriptor | null>((xd).clone(), "impl.extensionTypeDescriptor", "impl.extensionTypeDescriptor"), enumName);
		;(xi$ as ExtensionInfo).Filename = filename
	}

	public async lazyInit(): globalThis.Promise<__goscript_convert.Converter | null> {
		const xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi)
		if (atomic.LoadUint32($.fieldRef((xi$ as ExtensionInfo)._fields, "init")) < 2) {
			await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).lazyInitSlow() : ExtensionInfo.prototype.lazyInitSlow.call(xi))
		}
		return (xi$ as ExtensionInfo).conv
	}

	public async lazyInitSlow(): globalThis.Promise<void> {
		let xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null = this;
		using __defer = new $.DisposableStack()
		const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi)
		await (xi$ as ExtensionInfo).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((xi$ as ExtensionInfo).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if ((xi$ as ExtensionInfo).init == 2) {
			return
		}
		const __goscriptDeferArg0 = $.fieldRef((xi$ as ExtensionInfo)._fields, "init")
		__defer.defer(() => { atomic.StoreUint32(__goscriptDeferArg0, 2) })

		if ((xi$ as ExtensionInfo).desc.ExtensionDescriptor == null) {
			await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).initFromLegacy() : ExtensionInfo.prototype.initFromLegacy.call(xi))
		}
		if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((xi$ as ExtensionInfo).desc.ExtensionDescriptor).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if ((xi$ as ExtensionInfo).ExtensionType == null) {
				await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as ExtensionInfo).initToLegacy() : ExtensionInfo.prototype.initToLegacy.call(xi))
			}
			;(xi$ as ExtensionInfo).conv = await __goscript_convert.NewConverter((xi$ as ExtensionInfo).goType, (xi$ as ExtensionInfo).desc.ExtensionDescriptor);
			;(xi$ as ExtensionInfo).info = await __goscript_codec_extension.makeExtensionFieldInfo((xi$ as ExtensionInfo).desc.ExtensionDescriptor)
			$.assignStruct($.pointerValue<__goscript_codec_extension.extensionFieldInfo>((xi$ as ExtensionInfo).info).validation, await __goscript_validate.newValidationInfo((xi$ as ExtensionInfo).desc.ExtensionDescriptor, (xi$ as ExtensionInfo).goType))
		}
	}

	static __typeInfo = $.registerStructType(
		"impl.ExtensionInfo",
		() => new ExtensionInfo(),
		() => [$.methodSignature("InterfaceOf", [["v", "protoreflect.Value"]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("IsValidInterface", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsValidValue", [["v", "protoreflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("New", [], ["protoreflect.Value"], true), $.methodSignature("TypeDescriptor", [], ["protoreflect.ExtensionTypeDescriptor"], true), $.methodSignature("ValueOf", [["v", { kind: $.TypeKind.Interface, methods: [] }]], ["protoreflect.Value"], true), $.methodSignature("Zero", [], ["protoreflect.Value"], true), $.methodSignature("initFromLegacy", [], [], true), $.methodSignature("initToLegacy", [], [], true), $.methodSignature("lazyInit", [], ["impl.Converter"], true), $.methodSignature("lazyInitSlow", [], [], true)],
		ExtensionInfo,
		() => [/* @__PURE__ */ $.structField("init", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 4, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("goType", "reflect.Type", [2], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("desc", "impl.extensionTypeDescriptor", [3], 32, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("conv", "impl.Converter", [4], 56, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("info", /* @__PURE__ */ $.pointerType("impl.extensionFieldInfo"), [5], 72, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("ExtendedType", "protoiface.MessageV1", [6], 80, true), /* @__PURE__ */ $.structField("ExtensionType", { kind: $.TypeKind.Interface, methods: [] }, [7], 96, true), /* @__PURE__ */ $.structField("Field", /* @__PURE__ */ $.basicType("int32"), [8], 112, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [9], 120, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("string"), [10], 136, true), /* @__PURE__ */ $.structField("Filename", /* @__PURE__ */ $.basicType("string"), [11], 152, true)]
	)
}

export const extensionInfoUninitialized: number = 0

export const extensionInfoDescInit: number = 1

export const extensionInfoFullInit: number = 2

export function InitExtensionInfo(xi: ExtensionInfo | $.VarRef<ExtensionInfo> | null, xd: protoreflect.ExtensionDescriptor | null, goType: reflect.Type | null): void {
	const xi$: ExtensionInfo = xi == null ? $.pointerTarget<ExtensionInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<ExtensionInfo>(xi);
	;(xi$ as ExtensionInfo).goType = goType
	$.assignStruct((xi$ as ExtensionInfo).desc, new extensionTypeDescriptor({ExtensionDescriptor: xd, xi: xi}, true));
	;(xi$ as ExtensionInfo).init = 1
}

var __goscriptAwait: any
