// Generated file based on legacy_message.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as ptag from "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

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

import * as __goscript_legacy_file from "./legacy_file.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/tag/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
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
import "./legacy_file.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.placeholderEnumValues", "impl.legacyMarshaler", "impl.legacyUnmarshaler", "impl.legacyMerger", "impl.aberrantMessageType", "impl.aberrantMessage"])

export type legacyMarshaler = {
	Marshal(): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"impl.legacyMarshaler",
	null,
	[{ name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }] }]
);

export type legacyUnmarshaler = {
	Unmarshal(_p0: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"impl.legacyUnmarshaler",
	null,
	[{ name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }]
);

export type legacyMerger = {
	Merge(_p0: protoiface.MessageV1 | null): void
}

$.registerInterfaceType(
	"impl.legacyMerger",
	null,
	[{ name: "Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export class placeholderEnumValues {
	public get EnumValueDescriptors(): protoreflect.EnumValueDescriptors | null {
		return this._fields.EnumValueDescriptors
	}

	public set EnumValueDescriptors(value: protoreflect.EnumValueDescriptors | null) {
		this._fields.EnumValueDescriptors = value
	}

	public _fields: {
		EnumValueDescriptors: protoreflect.EnumValueDescriptors | null
	}

	constructor(init?: Partial<{EnumValueDescriptors?: protoreflect.EnumValueDescriptors | null}>, __goscriptValue?: boolean) {
		this._fields = {
			EnumValueDescriptors: init?.EnumValueDescriptors ?? (null! as protoreflect.EnumValueDescriptors | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): placeholderEnumValues {
		return new placeholderEnumValues(this, true)
	}

	public __goscriptAssign(source: placeholderEnumValues): void {
		const target = this._fields
		const values = source._fields
		target.EnumValueDescriptors = $.assignFieldValue(target.EnumValueDescriptors, values.EnumValueDescriptors, "protoreflect.EnumValueDescriptors")
	}

	public async ByNumber(n: protoreflect.EnumNumber): globalThis.Promise<protoreflect.EnumValueDescriptor | null> {
		return $.namedValueInterfaceValue<protoreflect.EnumValueDescriptor | null>(await fmt.Sprintf("UNKNOWN_%d", $.namedValueInterfaceValue<any>(n, "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))), "filedesc.PlaceholderEnumValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
	}

	public ByName(s: any): any {
		return $.pointerValue<Exclude<protoreflect.EnumValueDescriptors | null, null>>(this.EnumValueDescriptors).ByName(s)
	}

	public Get(i: any): any {
		return $.pointerValue<Exclude<protoreflect.EnumValueDescriptors | null, null>>(this.EnumValueDescriptors).Get(i)
	}

	public Len(): any {
		return $.pointerValue<Exclude<protoreflect.EnumValueDescriptors | null, null>>(this.EnumValueDescriptors).Len()
	}

	public ProtoInternal(_p0: any): any {
		return $.pointerValue<Exclude<protoreflect.EnumValueDescriptors | null, null>>(this.EnumValueDescriptors).ProtoInternal(_p0)
	}

	static __typeInfo = $.registerStructType(
		"impl.placeholderEnumValues",
		() => new placeholderEnumValues(),
		() => [{ name: "ByNumber", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumValueDescriptor" }] }, { name: "ByName", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumValueDescriptor" }] }, { name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumValueDescriptor" }] }, { name: "Len", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "ProtoInternal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }],
		placeholderEnumValues,
		() => [{ name: "EnumValueDescriptors", key: "EnumValueDescriptors", type: "protoreflect.EnumValueDescriptors", anonymous: true }]
	)
}

export class aberrantMessageType {
	public get t(): reflect.Type | null {
		return this._fields.t
	}

	public set t(value: reflect.Type | null) {
		this._fields.t = value
	}

	public _fields: {
		t: reflect.Type | null
	}

	constructor(init?: Partial<{t?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): aberrantMessageType {
		return new aberrantMessageType(this, true)
	}

	public __goscriptAssign(source: aberrantMessageType): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
	}

	public async Descriptor(): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const mt = this;
		return LegacyLoadMessageDesc(mt.t)
	}

	public GoType(): reflect.Type | null {
		const mt = this;
		return mt.t
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const mt = this;
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(mt.t).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			return $.interfaceValue<protoreflect.Message | null>((await (async () => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(mt.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))); return new aberrantMessage({v: __goscriptLiteralField1}, true) })()), "impl.aberrantMessage", "impl.aberrantMessage")
		}
		return $.interfaceValue<protoreflect.Message | null>((() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(mt.t)!))); return new aberrantMessage({v: __goscriptLiteralField2}, true) })(), "impl.aberrantMessage", "impl.aberrantMessage")
	}

	public Zero(): protoreflect.Message | null {
		const mt = this;
		return $.interfaceValue<protoreflect.Message | null>((() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(mt.t)!))); return new aberrantMessage({v: __goscriptLiteralField3}, true) })(), "impl.aberrantMessage", "impl.aberrantMessage")
	}

	static __typeInfo = $.registerStructType(
		"impl.aberrantMessageType",
		() => new aberrantMessageType(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }] }, { name: "GoType", args: [], returns: [{ type: "reflect.Type" }] }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }] }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Message" }] }],
		aberrantMessageType,
		() => [{ name: "t", key: "t", type: "reflect.Type" }]
	)
}

export class aberrantMessage {
	public get v(): reflect.Value {
		return this._fields.v
	}

	public set v(value: reflect.Value) {
		this._fields.v = value
	}

	public _fields: {
		v: reflect.Value
	}

	constructor(init?: Partial<{v?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): aberrantMessage {
		return new aberrantMessage(this, true)
	}

	public __goscriptAssign(source: aberrantMessage): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
	}

	public async Clear(_p0: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		const m = this;
		$.panic($.concatString("invalid Message.Clear on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}

	public async Descriptor(): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const m = this;
		return LegacyLoadMessageDesc($.markAsStructValue($.cloneStructValue(m.v)).Type())
	}

	public async Get(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m = this;
		if ($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).IsValid()) {
			return (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		$.panic($.concatString("invalid Message.Get on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public GetUnknown(): protoreflect.RawFields {
		const m = this;
		return (null as protoreflect.RawFields)
	}

	public Has(_p0: protoreflect.FieldDescriptor | null): boolean {
		const m = this;
		return false
	}

	public Interface(): protoreflect.ProtoMessage | null {
		const m = this;
		return $.interfaceValue<protoreflect.ProtoMessage | null>((m).clone(), "impl.aberrantMessage", "impl.aberrantMessage")
	}

	public IsValid(): boolean {
		const m = this;
		if ($.markAsStructValue($.cloneStructValue(m.v)).Kind() == 22) {
			return !$.markAsStructValue($.cloneStructValue(m.v)).IsNil()
		}
		return false
	}

	public async Mutable(_p0: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m = this;
		$.panic($.concatString("invalid Message.Mutable on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const m = this;
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(m.v)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			return $.interfaceValue<protoreflect.Message | null>((await (async () => { const __goscriptLiteralField4 = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(m.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))); return new aberrantMessage({v: __goscriptLiteralField4}, true) })()), "impl.aberrantMessage", "impl.aberrantMessage")
		}
		return $.interfaceValue<protoreflect.Message | null>((() => { const __goscriptLiteralField5 = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(m.v)).Type())!))); return new aberrantMessage({v: __goscriptLiteralField5}, true) })(), "impl.aberrantMessage", "impl.aberrantMessage")
	}

	public async NewField(_p0: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m = this;
		$.panic($.concatString("invalid Message.NewField on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public ProtoMethods(): $.VarRef<protoiface.Methods> | null {
		const m = this;
		return aberrantProtoMethods
	}

	public ProtoReflect(): protoreflect.Message | null {
		const m = this;
		return $.interfaceValue<protoreflect.Message | null>((m).clone(), "impl.aberrantMessage", "impl.aberrantMessage")
	}

	public Range(f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): void {
		const m = this;
		return
	}

	public async Reset(): globalThis.Promise<void> {
		const m = this;
		{
			let [mr, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue(m.v)).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "Reset", args: [], returns: [] }] })
			if (ok) {
				void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as any) : $.pointerValue<any>(mr)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		if (($.markAsStructValue($.cloneStructValue(m.v)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(m.v)).IsNil()) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(m.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
		}
	}

	public async Set(_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value): globalThis.Promise<void> {
		const m = this;
		$.panic($.concatString("invalid Message.Set on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}

	public SetUnknown(_p0: protoreflect.RawFields): void {
		const m = this;
	}

	public Type(): protoreflect.MessageType | null {
		const m = this;
		return $.interfaceValue<protoreflect.MessageType | null>((() => { const __goscriptLiteralField6 = $.markAsStructValue($.cloneStructValue(m.v)).Type(); return new aberrantMessageType({t: __goscriptLiteralField6}, true) })(), "impl.aberrantMessageType", "impl.aberrantMessageType")
	}

	public async WhichOneof(_p0: protoreflect.OneofDescriptor | null): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const m = this;
		$.panic($.concatString("invalid Message.WhichOneof descriptor on ", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await m.Descriptor())).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public protoUnwrap(): any {
		const m = this;
		return $.markAsStructValue($.cloneStructValue(m.v)).Interface()
	}

	static __typeInfo = $.registerStructType(
		"impl.aberrantMessage",
		() => new aberrantMessage(),
		() => [{ name: "Clear", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }] }, { name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }] }, { name: "GetUnknown", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields") }] }, { name: "Has", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Interface", args: [], returns: [{ type: "protoreflect.ProtoMessage" }] }, { name: "IsValid", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Mutable", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }] }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }] }, { name: "NewField", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }] }, { name: "ProtoMethods", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }) }] }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }] }, { name: "Range", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Reset", args: [], returns: [] }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "SetUnknown", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Type", args: [], returns: [{ type: "protoreflect.MessageType" }] }, { name: "WhichOneof", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.FieldDescriptor" }] }, { name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }] }],
		aberrantMessage,
		() => [{ name: "v", key: "v", type: "reflect.Value" }]
	)
}

export async function legacyWrapMessage(v: reflect.Value): globalThis.Promise<protoreflect.Message | null> {
	let t = $.markAsStructValue($.cloneStructValue(v)).Type()
	if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
		return $.interfaceValue<protoreflect.Message | null>(new aberrantMessage({v: $.markAsStructValue($.cloneStructValue(v))}, true), "impl.aberrantMessage", "impl.aberrantMessage")
	}
	let mt: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = await legacyLoadMessageInfo(t, "")
	return (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? ((mt as any) as __goscript_message.MessageInfo).MessageOf($.markAsStructValue($.cloneStructValue(v)).Interface()) : __goscript_message.MessageInfo.prototype.MessageOf.call(mt, $.markAsStructValue($.cloneStructValue(v)).Interface()))
}

export async function legacyLoadMessageType(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.MessageType | null> {
	if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
		return $.interfaceValue<protoreflect.MessageType | null>(new aberrantMessageType({t: t}, true), "impl.aberrantMessageType", "impl.aberrantMessageType")
	}
	return $.interfaceValue<protoreflect.MessageType | null>(await legacyLoadMessageInfo(t, name), "*impl.MessageInfo", /* @__PURE__ */ $.pointerType("impl.MessageInfo"))
}

export var legacyMessageTypeCache: $.VarRef<sync.Map>

export function __goscript_init_legacyMessageTypeCache(): void {
	if (((legacyMessageTypeCache) as any) === undefined) {
		legacyMessageTypeCache = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_legacyMessageTypeCache(): $.VarRef<sync.Map> {
	if (((legacyMessageTypeCache) as any) === undefined) {
		__goscript_init_legacyMessageTypeCache()
	}
	return legacyMessageTypeCache
}

export function __goscript_set_legacyMessageTypeCache(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_legacyMessageTypeCache().value, __goscriptValue)
}

export async function legacyLoadMessageInfo(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null> {
	// Fast-path: check if a MessageInfo is cached for this concrete type.
	{
		let [mt, ok] = await $.pointerValue<sync.Map>(__goscript_get_legacyMessageTypeCache()).Load((t as any))
		if (ok) {
			return ((mt as any)?.__goType === "*impl.MessageInfo" && (mt as any).__goValue === undefined && (mt as any).__isTypedNil !== true ? ((mt as any) as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) : $.mustTypeAssert<__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null>(mt, /* @__PURE__ */ $.pointerType("impl.MessageInfo")))
		}
	}

	// Slow-path: derive message descriptor and initialize MessageInfo.
	let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (await (async () => { const __goscriptLiteralField0 = await legacyLoadMessageDesc(t, name); return new __goscript_message.MessageInfo({Desc: __goscriptLiteralField0, GoReflectType: t}) })())
	let mi$: __goscript_message.MessageInfo = mi == null ? $.pointerTarget<__goscript_message.MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<__goscript_message.MessageInfo>(mi)

	let hasMarshal: boolean = false
	let hasUnmarshal: boolean = false
	let v = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
	{
		let __goscriptTuple0: any = $.typeAssertTuple<legacyMarshaler | null>(v, "impl.legacyMarshaler")
		hasMarshal = __goscriptTuple0[1]
		if (hasMarshal) {
			;(mi$ as __goscript_message.MessageInfo).coderMessageInfo.methods.Marshal = legacyMarshal;

			// We have no way to tell whether the type's Marshal method
			// supports deterministic serialization or not, but this
			// preserves the v1 implementation's behavior of always
			// calling Marshal methods when present.
			;(mi$ as __goscript_message.MessageInfo).coderMessageInfo.methods.Flags = $.uint64Or((mi$ as __goscript_message.MessageInfo).coderMessageInfo.methods.Flags, 1n)
		}
	}
	{
		let __goscriptTuple1: any = $.typeAssertTuple<legacyUnmarshaler | null>(v, "impl.legacyUnmarshaler")
		hasUnmarshal = __goscriptTuple1[1]
		if (hasUnmarshal) {
			;(mi$ as __goscript_message.MessageInfo).coderMessageInfo.methods.Unmarshal = legacyUnmarshal
		}
	}
	{
		let [, hasMerge] = $.typeAssertTuple<legacyMerger | null>(v, "impl.legacyMerger")
		if (hasMerge || (hasMarshal && hasUnmarshal)) {
			;(mi$ as __goscript_message.MessageInfo).coderMessageInfo.methods.Merge = legacyMerge
		}
	}

	let __goscriptShadow0 = mi
	{
		let __goscriptTuple2: any = await $.pointerValue<sync.Map>(__goscript_get_legacyMessageTypeCache()).LoadOrStore((t as any), $.interfaceValue(__goscriptShadow0, "*impl.MessageInfo", /* @__PURE__ */ $.pointerType("impl.MessageInfo")))
		let __goscriptShadow1 = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			return ((__goscriptShadow1 as any)?.__goType === "*impl.MessageInfo" && (__goscriptShadow1 as any).__goValue === undefined && (__goscriptShadow1 as any).__isTypedNil !== true ? ((__goscriptShadow1 as any) as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) : $.mustTypeAssert<__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null>(__goscriptShadow1, /* @__PURE__ */ $.pointerType("impl.MessageInfo")))
		}
	}
	return mi
}

export var legacyMessageDescCache: $.VarRef<sync.Map>

export function __goscript_init_legacyMessageDescCache(): void {
	if (((legacyMessageDescCache) as any) === undefined) {
		legacyMessageDescCache = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_legacyMessageDescCache(): $.VarRef<sync.Map> {
	if (((legacyMessageDescCache) as any) === undefined) {
		__goscript_init_legacyMessageDescCache()
	}
	return legacyMessageDescCache
}

export function __goscript_set_legacyMessageDescCache(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_legacyMessageDescCache().value, __goscriptValue)
}

export async function LegacyLoadMessageDesc(t: reflect.Type | null): globalThis.Promise<protoreflect.MessageDescriptor | null> {
	return legacyLoadMessageDesc(t, "")
}

export async function legacyLoadMessageDesc(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.MessageDescriptor | null> {
	// Fast-path: check if a MessageDescriptor is cached for this concrete type.
	{
		let [mi, ok] = await $.pointerValue<sync.Map>(__goscript_get_legacyMessageDescCache()).Load((t as any))
		if (ok) {
			return $.mustTypeAssert<protoreflect.MessageDescriptor | null>(mi, "protoreflect.MessageDescriptor")
		}
	}

	// Slow-path: initialize MessageDescriptor from the raw descriptor.
	let mv = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
	{
		let [, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>(mv, "protoreflect.ProtoMessage")
		if (ok) {
			$.panic(await fmt.Sprintf("%v already implements proto.Message", (t as any)))
		}
	}
	let [mdV1, ok] = $.typeAssertTuple<__goscript_legacy_file.messageV1 | null>(mv, "impl.messageV1")
	if (!ok) {
		return aberrantLoadMessageDesc(t, name)
	}

	// If this is a dynamic message type where there isn't a 1-1 mapping between
	// Go and protobuf types, calling the Descriptor method on the zero value of
	// the message type isn't likely to work. If it panics, swallow the panic and
	// continue as if the Descriptor method wasn't present.
	let __goscriptTuple3: any = await (async (): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> => {
		const __defer = new $.DisposableStack()
		try {
			__defer.defer(() => { ((): void => {
				$.recover()
			})() })
			return await (mdV1 !== null && (mdV1 as any).__isVarRef !== true && (mdV1 as any).__goValue === undefined ? (mdV1 as Exclude<__goscript_legacy_file.messageV1, null>) : $.pointerValue<Exclude<__goscript_legacy_file.messageV1, null>>(mdV1)).Descriptor()
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [null! as $.Slice<number>, null! as $.Slice<number>]
	})()
	let b: $.Slice<number> = __goscriptTuple3[0]
	let idxs: $.Slice<number> = __goscriptTuple3[1]
	if (b == null) {
		return aberrantLoadMessageDesc(t, name)
	}

	// If the Go type has no fields, then this might be a proto3 empty message
	// from before the size cache was added. If there are any fields, check to
	// see that at least one of them looks like something we generated.
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) {
		{
			let nfield = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (nfield > 0) {
				let hasProtoField = false
				for (let i = 0; i < nfield; i++) {
					let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
					if (((!$.stringEqual(reflect.StructTag_Get(f.Tag, "protobuf"), "")) || (!$.stringEqual(reflect.StructTag_Get(f.Tag, "protobuf_oneof"), ""))) || strings.HasPrefix(f.Name, "XXX_")) {
						hasProtoField = true
						break
					}
				}
				if (!hasProtoField) {
					return aberrantLoadMessageDesc(t, name)
				}
			}
		}
	}

	let md = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((await __goscript_legacy_file.legacyLoadFileDesc(b))).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get($.arrayIndex(idxs!, 0)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let __goscriptRangeTarget0 = $.goSlice(idxs, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let i = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
		md = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ((!$.stringEqual(name, "")) && (!$.stringEqual((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name))) {
		$.panic(await fmt.Sprintf("mismatching message name: got %v, want %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(name, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}
	let __goscriptShadow2 = md
	{
		let __goscriptTuple4: any = await $.pointerValue<sync.Map>(__goscript_get_legacyMessageDescCache()).LoadOrStore((t as any), (__goscriptShadow2 as any))
		let __goscriptShadow3 = __goscriptTuple4[0]
		let __goscriptShadow4 = __goscriptTuple4[1]
		if (__goscriptShadow4) {
			return $.mustTypeAssert<protoreflect.MessageDescriptor | null>(__goscriptShadow3, "protoreflect.MessageDescriptor")
		}
	}
	return md
}

export var aberrantMessageDescLock: $.VarRef<sync.Mutex>

export function __goscript_init_aberrantMessageDescLock(): void {
	if (((aberrantMessageDescLock) as any) === undefined) {
		aberrantMessageDescLock = $.varRef($.markAsStructValue(new sync.Mutex()))
	}
}

export function __goscript_get_aberrantMessageDescLock(): $.VarRef<sync.Mutex> {
	if (((aberrantMessageDescLock) as any) === undefined) {
		__goscript_init_aberrantMessageDescLock()
	}
	return aberrantMessageDescLock
}

export function __goscript_set_aberrantMessageDescLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(__goscript_get_aberrantMessageDescLock().value, __goscriptValue)
}

export var aberrantMessageDescCache: globalThis.Map<reflect.Type | null, protoreflect.MessageDescriptor | null> | null

export function __goscript_init_aberrantMessageDescCache(): void {
	if (((aberrantMessageDescCache) as any) === undefined) {
		aberrantMessageDescCache = null! as globalThis.Map<reflect.Type | null, protoreflect.MessageDescriptor | null> | null
	}
}

export function __goscript_get_aberrantMessageDescCache(): globalThis.Map<reflect.Type | null, protoreflect.MessageDescriptor | null> | null {
	if (((aberrantMessageDescCache) as any) === undefined) {
		__goscript_init_aberrantMessageDescCache()
	}
	return aberrantMessageDescCache
}

export function __goscript_set_aberrantMessageDescCache(__goscriptValue: globalThis.Map<reflect.Type | null, protoreflect.MessageDescriptor | null> | null): void {
	aberrantMessageDescCache = __goscriptValue
}

export async function aberrantLoadMessageDesc(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.MessageDescriptor | null> {
	using __defer = new $.DisposableStack()
	await $.pointerValue<sync.Mutex>(__goscript_get_aberrantMessageDescLock()).Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>(__goscript_get_aberrantMessageDescLock())), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	if (__goscript_get_aberrantMessageDescCache() == null) {
		__goscript_set_aberrantMessageDescCache($.makeMap<reflect.Type | null, protoreflect.MessageDescriptor | null>())
	}
	return await aberrantLoadMessageDescReentrant(t, name)
}

export async function aberrantLoadMessageDescReentrant(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.MessageDescriptor | null> {
	// Fast-path: check if an MessageDescriptor is cached for this concrete type.
	{
		let [md, ok] = $.mapGet<reflect.Type | null, protoreflect.MessageDescriptor | null, protoreflect.MessageDescriptor | null>(__goscript_get_aberrantMessageDescCache(), t, null)
		if (ok) {
			return md
		}
	}

	// Slow-path: construct a descriptor from the Go struct type (best-effort).
	// Cache the MessageDescriptor early on so that we can resolve internal
	// cyclic references.
	let md: filedesc.Message | $.VarRef<filedesc.Message> | null = new filedesc.Message({L2: new filedesc.MessageL2()})
	let md$: filedesc.Message = md == null ? $.pointerTarget<filedesc.Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<filedesc.Message>(md);
	;(md$ as filedesc.Message).Base.L0.FullName = await aberrantDeriveMessageName(t, name);
	;(md$ as filedesc.Message).Base.L0.ParentFile = filedesc.SurrogateProto2
	$.mapSet(__goscript_get_aberrantMessageDescCache(), t, $.interfaceValue<protoreflect.MessageDescriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")))

	if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
		return $.interfaceValue<protoreflect.MessageDescriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
	}

	// Try to determine if the message is using proto3 by checking scalars.
	for (let i = 0; i < (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		{
			let tag = reflect.StructTag_Get(f.Tag, "protobuf")
			if (!$.stringEqual(tag, "")) {
				switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case reflect.Bool:
					case reflect.Int32:
					case reflect.Int64:
					case reflect.Uint32:
					case reflect.Uint64:
					case reflect.Float32:
					case reflect.Float64:
					case reflect.String:
					{
						;(md$ as filedesc.Message).Base.L0.ParentFile = filedesc.SurrogateProto3
						break
					}
				}
				for (let __goscriptRangeTarget1 = strings.Split(tag, ","), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
					if ($.stringEqual(s, "proto3")) {
						;(md$ as filedesc.Message).Base.L0.ParentFile = filedesc.SurrogateProto3
					}
				}
			}
		}
	}

	$.assignStruct((md$ as filedesc.Message).L1.EditionFeatures, $.pointerValue<filedesc.File>((md$ as filedesc.Message).Base.L0.ParentFile).L1.EditionFeatures)
	// Obtain a list of oneof wrapper types.
	let oneofWrappers: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
	let methods: $.Slice<reflect.Method> = $.makeSlice<reflect.Method>(0, 2, undefined, () => $.markAsStructValue(new reflect.Method()))
	{
		let [m, ok] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).MethodByName("XXX_OneofFuncs")
		if (ok) {
			methods = $.appendOne(methods, $.markAsStructValue($.cloneStructValue(m)))
		}
	}
	{
		let [m, ok] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).MethodByName("XXX_OneofWrappers")
		if (ok) {
			methods = $.appendOne(methods, $.markAsStructValue($.cloneStructValue(m)))
		}
	}
	for (let __goscriptRangeTarget4 = methods, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let fn = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Method)))
		for (let __goscriptRangeTarget3 = await $.markAsStructValue($.cloneStructValue(fn.Func)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fn.Type).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))])), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let v = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
			{
				let __goscriptTuple5: any = $.typeAssertTuple<$.Slice<any>>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
				let vs: $.Slice<any> = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (ok) {
					for (let __goscriptRangeTarget2 = vs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
						let v = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as any)
						oneofWrappers = $.appendOne(oneofWrappers, reflect.TypeOf(v), $.appendZeros.nil)
					}
				}
			}
		}
	}

	// Obtain a list of the extension ranges.
	{
		let [fn, ok] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).MethodByName("ExtensionRangeArray")
		if (ok) {
			let vs = $.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(fn.Func)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fn.Type).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))])))!, 0)))
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(vs)).Len(); i++) {
				let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vs)).Index(i)))
				$.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).ExtensionRanges.List = $.appendOne($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).ExtensionRanges.List, $.arrayValue([$.int($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).FieldByName("Start"))).Int(), 32), $.int($.int64Add($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).FieldByName("End"))).Int(), 1n), 32)]))
				$.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).ExtensionRangeOptions = $.appendOne($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).ExtensionRangeOptions, (null as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null), $.appendZeros.nil)
			}
		}
	}

	// Derive the message fields by inspecting the struct fields.
	for (let i = 0; i < (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		{
			let tag = reflect.StructTag_Get(f.Tag, "protobuf")
			if (!$.stringEqual(tag, "")) {
				let tagKey = reflect.StructTag_Get(f.Tag, "protobuf_key")
				let tagVal = reflect.StructTag_Get(f.Tag, "protobuf_val")
				await aberrantAppendField(md, f.Type, tag, tagKey, tagVal)
			}
		}
		{
			let tag = reflect.StructTag_Get(f.Tag, "protobuf_oneof")
			if (!$.stringEqual(tag, "")) {
				let n = $.sliceLen($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Oneofs.List)
				$.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Oneofs.List = $.appendOne($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Oneofs.List, new filedesc.Oneof(undefined, true))
				let od: filedesc.Oneof | $.VarRef<filedesc.Oneof> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Oneofs.List!, n)
				let od$: filedesc.Oneof = od == null ? $.pointerTarget<filedesc.Oneof>(od) : (od as any).__isVarRef === true ? (od as any).value : (od as any).__goValue === undefined ? (od as any) : $.pointerTarget<filedesc.Oneof>(od);
				;(od$ as filedesc.Oneof).Base.L0.FullName = protoreflect.FullName_Append((md$ as filedesc.Message).Base.FullName(), tag);
				;(od$ as filedesc.Oneof).Base.L0.ParentFile = (md$ as filedesc.Message).Base.L0.ParentFile
				$.assignStruct((od$ as filedesc.Oneof).L1.EditionFeatures, (md$ as filedesc.Message).L1.EditionFeatures);
				;(od$ as filedesc.Oneof).Base.L0.Parent = $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"));
				;(od$ as filedesc.Oneof).Base.L0.Index = n

				for (let __goscriptRangeTarget5 = oneofWrappers, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
					let t = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as reflect.Type | null)
					if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(f.Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						let __goscriptShadow5 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
						{
							let __goscriptShadow6 = reflect.StructTag_Get(__goscriptShadow5.Tag, "protobuf")
							if (!$.stringEqual(__goscriptShadow6, "")) {
								await aberrantAppendField(md, __goscriptShadow5.Type, __goscriptShadow6, "", "")
								let fd: filedesc.Field | $.VarRef<filedesc.Field> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List!, $.sliceLen($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List) - 1)
								let fd$: filedesc.Field = fd == null ? $.pointerTarget<filedesc.Field>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<filedesc.Field>(fd);
								;(fd$ as filedesc.Field).L1.ContainingOneof = $.interfaceValue<protoreflect.OneofDescriptor | null>(od, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof"))
								$.assignStruct((fd$ as filedesc.Field).L1.EditionFeatures, (od$ as filedesc.Oneof).L1.EditionFeatures);
								;(od$ as filedesc.Oneof).L1.Fields.List = $.appendOne((od$ as filedesc.Oneof).L1.Fields.List, $.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")), $.appendZeros.nil)
							}
						}
					}
				}
			}
		}
	}

	return $.interfaceValue<protoreflect.MessageDescriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
}

export async function aberrantDeriveMessageName(t: reflect.Type | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.FullName> {
	if (protoreflect.FullName_IsValid(name)) {
		return name
	}
	await (async (): globalThis.Promise<void> => {
		const __defer = new $.DisposableStack()
		try {
			__defer.defer(() => { ((): void => {
				$.recover()
			})() })
			{
				let [m, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "XXX_MessageName", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("string") }] }] })
				if (ok) {
					name = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as any) : $.pointerValue<any>(m)).XXX_MessageName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	})()
	if (protoreflect.FullName_IsValid(name)) {
		return name
	}
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return __goscript_legacy_enum.AberrantDeriveFullName(t)
}

export async function aberrantAppendField(md: filedesc.Message | $.VarRef<filedesc.Message> | null, goType: reflect.Type | null, tag: string, tagKey: string, tagVal: string): globalThis.Promise<void> {
	const md$: filedesc.Message = md == null ? $.pointerTarget<filedesc.Message>(md) : (md as any).__isVarRef === true ? (md as any).value : (md as any).__goValue === undefined ? (md as any) : $.pointerTarget<filedesc.Message>(md)
	let t: reflect.Type | null = goType
	let isOptional = ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)
	let isRepeated = ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)
	if (isOptional || isRepeated) {
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let fd: filedesc.Field | $.VarRef<filedesc.Field> | null = $.mustTypeAssert<filedesc.Field | $.VarRef<filedesc.Field> | null>(ptag.Unmarshal(tag, t, $.interfaceValue<protoreflect.EnumValueDescriptors | null>(new placeholderEnumValues(undefined, true), "impl.placeholderEnumValues", "impl.placeholderEnumValues")), /* @__PURE__ */ $.pointerType("filedesc.Field"))

	// Append field descriptor to the message.
	let n = $.sliceLen($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List)
	$.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List = $.appendOne($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List, ($.pointerValue<filedesc.Field>(fd)).clone())
	fd = $.indexRef($.pointerValue<filedesc.MessageL2>((md$ as filedesc.Message).L2).Fields.List!, n)
	$.pointerValue<filedesc.Field>(fd).Base.L0.FullName = protoreflect.FullName_Append((md$ as filedesc.Message).Base.FullName(), $.pointerValue<filedesc.Field>(fd).Base.Name())
	$.pointerValue<filedesc.Field>(fd).Base.L0.ParentFile = (md$ as filedesc.Message).Base.L0.ParentFile
	$.pointerValue<filedesc.Field>(fd).Base.L0.Parent = $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
	$.pointerValue<filedesc.Field>(fd).Base.L0.Index = n

	if ($.pointerValue<filedesc.Field>(fd).L1.IsWeak || $.pointerValue<filedesc.Field>(fd).L1.EditionFeatures.IsPacked) {
		$.pointerValue<filedesc.Field>(fd).L1.Options = $.functionValue(async (): globalThis.Promise<protoreflect.ProtoMessage | null> => {
			let opts = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(descopts.Field).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ($.pointerValue<filedesc.Field>(fd).L1.IsWeak) {
				void (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Set((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("weak"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), protoreflect.ValueOfBool(true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ($.pointerValue<filedesc.Field>(fd).L1.EditionFeatures.IsPacked) {
				void (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Set((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("packed"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), protoreflect.ValueOfBool($.pointerValue<filedesc.Field>(fd).L1.EditionFeatures.IsPacked)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Interface()
		}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
	}

	// Populate Enum and Message.
	if (((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(fd)) == null) && ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as filedesc.Field).Kind() : filedesc.Field.prototype.Kind.call(fd)) == 14)) {
		{
			const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
			switch (true) {
				case $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").ok:
					{
						let v: protoreflect.Enum | null = $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").value
						$.pointerValue<filedesc.Field>(fd).L1.Enum = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.Enum, null>) : $.pointerValue<Exclude<protoreflect.Enum, null>>(v)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				default:
					{
						let v: any = __goscriptTypeSwitchValue
						$.pointerValue<filedesc.Field>(fd).L1.Enum = await __goscript_legacy_enum.LegacyLoadEnumDesc(t)
					}
					break
			}
		}
	}
	if (((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as filedesc.Field).Message() : filedesc.Field.prototype.Message.call(fd)) == null) && (((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as filedesc.Field).Kind() : filedesc.Field.prototype.Kind.call(fd)) == 11) || ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as filedesc.Field).Kind() : filedesc.Field.prototype.Kind.call(fd)) == 10))) {
		{
			const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
			switch (true) {
				case $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
					{
						let v: protoreflect.ProtoMessage | null = $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
						$.pointerValue<filedesc.Field>(fd).L1.Message = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(v)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<__goscript_legacy_file.messageV1 | null>(__goscriptTypeSwitchValue, "impl.messageV1").ok:
					{
						let v: __goscript_legacy_file.messageV1 | null = $.typeAssert<__goscript_legacy_file.messageV1 | null>(__goscriptTypeSwitchValue, "impl.messageV1").value
						$.pointerValue<filedesc.Field>(fd).L1.Message = await LegacyLoadMessageDesc(t)
					}
					break
				default:
					{
						let v: any = __goscriptTypeSwitchValue
						if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21) {
							let __goscriptShadow7 = $.sliceLen((md$ as filedesc.Message).L1.Messages.List);
							;(md$ as filedesc.Message).L1.Messages.List = $.appendOne((md$ as filedesc.Message).L1.Messages.List, new filedesc.Message({L2: new filedesc.MessageL2()}, true))
							let md2: filedesc.Message | $.VarRef<filedesc.Message> | null = $.indexRef((md$ as filedesc.Message).L1.Messages.List!, __goscriptShadow7)
							let md2$: filedesc.Message = md2 == null ? $.pointerTarget<filedesc.Message>(md2) : (md2 as any).__isVarRef === true ? (md2 as any).value : (md2 as any).__goValue === undefined ? (md2 as any) : $.pointerTarget<filedesc.Message>(md2);
							;(md2$ as filedesc.Message).Base.L0.FullName = protoreflect.FullName_Append((md$ as filedesc.Message).Base.FullName(), strs.MapEntryName($.pointerValue<filedesc.Field>(fd).Base.Name()));
							;(md2$ as filedesc.Message).Base.L0.ParentFile = (md$ as filedesc.Message).Base.L0.ParentFile;
							;(md2$ as filedesc.Message).Base.L0.Parent = $.interfaceValue<protoreflect.Descriptor | null>(md, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"));
							;(md2$ as filedesc.Message).Base.L0.Index = __goscriptShadow7
							$.assignStruct((md2$ as filedesc.Message).L1.EditionFeatures, (md$ as filedesc.Message).L1.EditionFeatures);

							;(md2$ as filedesc.Message).L1.IsMapEntry = true
							$.pointerValue<filedesc.MessageL2>((md2$ as filedesc.Message).L2).Options = $.functionValue(async (): globalThis.Promise<protoreflect.ProtoMessage | null> => {
								let opts = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(descopts.Message).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								void (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Set((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("map_entry"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), protoreflect.ValueOfBool(true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								return (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(opts)).Interface()
							}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))

							await aberrantAppendField(md2, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), tagKey, "", "")
							await aberrantAppendField(md2, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), tagVal, "", "")

							$.pointerValue<filedesc.Field>(fd).L1.Message = $.interfaceValue<protoreflect.MessageDescriptor | null>(md2, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
							break
						}
						$.pointerValue<filedesc.Field>(fd).L1.Message = await aberrantLoadMessageDescReentrant(t, "")
					}
					break
			}
		}
	}
}

export let aberrantProtoMethods: $.VarRef<protoiface.Methods> | null = $.varRef($.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: 1n, Size: (null as ((_p0: protoiface.SizeInput) => protoiface.SizeOutput | globalThis.Promise<protoiface.SizeOutput>) | null), Marshal: legacyMarshal, Unmarshal: legacyUnmarshal, Merge: legacyMerge, CheckInitialized: (null as ((_p0: protoiface.CheckInitializedInput) => [protoiface.CheckInitializedOutput, $.GoError] | globalThis.Promise<[protoiface.CheckInitializedOutput, $.GoError]>) | null)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }))

export function __goscript_set_aberrantProtoMethods(__goscriptValue: $.VarRef<protoiface.Methods> | null): void {
	aberrantProtoMethods = __goscriptValue
}

export async function legacyMarshal(_in: protoiface.MarshalInput): globalThis.Promise<[protoiface.MarshalOutput, $.GoError]> {
	let v = (__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>($.mustTypeAssert<__goscript_convert.unwrapper | null>(_in.Message, "impl.unwrapper")).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [marshaler, ok] = $.typeAssertTuple<legacyMarshaler | null>(v, "impl.legacyMarshaler")
	if (!ok) {
		return [$.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Buf: (null as $.Slice<number>)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }), errors.New("%T does not implement Marshal", $.arrayToSlice<any>([v]))]
	}
	let __goscriptTuple6: any = await (marshaler !== null && (marshaler as any).__isVarRef !== true && (marshaler as any).__goValue === undefined ? (marshaler as Exclude<legacyMarshaler, null>) : $.pointerValue<Exclude<legacyMarshaler, null>>(marshaler)).Marshal()
	let out: $.Slice<number> = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (_in.Buf != null) {
		out = $.appendSlice(_in.Buf, out, $.byteSliceHint)
	}
	return [$.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Buf: out}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }), err]
}

export async function legacyUnmarshal(_in: protoiface.UnmarshalInput): globalThis.Promise<[protoiface.UnmarshalOutput, $.GoError]> {
	let v = (__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>($.mustTypeAssert<__goscript_convert.unwrapper | null>(_in.Message, "impl.unwrapper")).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [unmarshaler, ok] = $.typeAssertTuple<legacyUnmarshaler | null>(v, "impl.legacyUnmarshaler")
	if (!ok) {
		return [$.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.UnmarshalOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }), errors.New("%T does not implement Unmarshal", $.arrayToSlice<any>([v]))]
	}
	return [$.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.UnmarshalOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }), (__goscriptAwait = (unmarshaler !== null && (unmarshaler as any).__isVarRef !== true && (unmarshaler as any).__goValue === undefined ? (unmarshaler as Exclude<legacyUnmarshaler, null>) : $.pointerValue<Exclude<legacyUnmarshaler, null>>(unmarshaler)).Unmarshal(_in.Buf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
}

export async function legacyMerge(_in: protoiface.MergeInput): globalThis.Promise<protoiface.MergeOutput> {
	// Check whether this supports the legacy merger.
	let dstv = (__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>($.mustTypeAssert<__goscript_convert.unwrapper | null>(_in.Destination, "impl.unwrapper")).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [merger, ok] = $.typeAssertTuple<legacyMerger | null>(dstv, "impl.legacyMerger")
	if (ok) {
		void (__goscriptAwait = (merger !== null && (merger as any).__isVarRef !== true && (merger as any).__goValue === undefined ? (merger as Exclude<legacyMerger, null>) : $.pointerValue<Exclude<legacyMerger, null>>(merger)).Merge(await $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).ProtoMessageV1Of((_in.Source as __goscript_api_export.message | null))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}

	// If legacy merger is unavailable, implement merge in terms of
	// a marshal and unmarshal operation.
	let srcv = (__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>($.mustTypeAssert<__goscript_convert.unwrapper | null>(_in.Source, "impl.unwrapper")).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptTuple7: any = $.typeAssertTuple<legacyMarshaler | null>(srcv, "impl.legacyMarshaler")
	let marshaler = __goscriptTuple7[0]
	ok = __goscriptTuple7[1]
	if (!ok) {
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}
	dstv = (__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>($.mustTypeAssert<__goscript_convert.unwrapper | null>(_in.Destination, "impl.unwrapper")).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptTuple8: any = $.typeAssertTuple<legacyUnmarshaler | null>(dstv, "impl.legacyUnmarshaler")
	let unmarshaler = __goscriptTuple8[0]
	ok = __goscriptTuple8[1]
	if (!ok) {
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}
	if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>(_in.Source).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		// Legacy Marshal methods may not function on nil messages.
		// Check for a typed nil source only after we confirm that
		// legacy Marshal/Unmarshal methods are present, for
		// consistency.
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}
	let __goscriptTuple9: any = await (marshaler !== null && (marshaler as any).__isVarRef !== true && (marshaler as any).__goValue === undefined ? (marshaler as Exclude<legacyMarshaler, null>) : $.pointerValue<Exclude<legacyMarshaler, null>>(marshaler)).Marshal()
	let b: $.Slice<number> = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if (err != null) {
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}
	err = (__goscriptAwait = (unmarshaler !== null && (unmarshaler as any).__isVarRef !== true && (unmarshaler as any).__goValue === undefined ? (unmarshaler as Exclude<legacyUnmarshaler, null>) : $.pointerValue<Exclude<legacyUnmarshaler, null>>(unmarshaler)).Unmarshal(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (err != null) {
		return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: (0 as protoiface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}
	return $.anonymousStructValue({NoUnkeyedLiterals: (undefined as any as any), Flags: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderEnumValue"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptAwait: any
