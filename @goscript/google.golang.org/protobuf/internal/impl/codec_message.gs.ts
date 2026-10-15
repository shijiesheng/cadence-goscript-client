// Generated file based on codec_message.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.coderMessageInfo", "impl.coderFieldInfo"])

export class coderMessageInfo {
	public get methods(): protoiface.Methods {
		return this._fields.methods
	}

	public set methods(value: protoiface.Methods) {
		this._fields.methods = value
	}

	public get orderedCoderFields(): $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null> {
		return this._fields.orderedCoderFields
	}

	public set orderedCoderFields(value: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>) {
		this._fields.orderedCoderFields = value
	}

	public get denseCoderFields(): $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null> {
		return this._fields.denseCoderFields
	}

	public set denseCoderFields(value: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>) {
		this._fields.denseCoderFields = value
	}

	public get coderFields(): globalThis.Map<protowire.Number, coderFieldInfo | $.VarRef<coderFieldInfo> | null> | null {
		return this._fields.coderFields
	}

	public set coderFields(value: globalThis.Map<protowire.Number, coderFieldInfo | $.VarRef<coderFieldInfo> | null> | null) {
		this._fields.coderFields = value
	}

	public get sizecacheOffset(): __goscript_pointer_reflect.offset {
		return this._fields.sizecacheOffset
	}

	public set sizecacheOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.sizecacheOffset = value
	}

	public get unknownOffset(): __goscript_pointer_reflect.offset {
		return this._fields.unknownOffset
	}

	public set unknownOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.unknownOffset = value
	}

	public get unknownPtrKind(): boolean {
		return this._fields.unknownPtrKind
	}

	public set unknownPtrKind(value: boolean) {
		this._fields.unknownPtrKind = value
	}

	public get extensionOffset(): __goscript_pointer_reflect.offset {
		return this._fields.extensionOffset
	}

	public set extensionOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.extensionOffset = value
	}

	public get needsInitCheck(): boolean {
		return this._fields.needsInitCheck
	}

	public set needsInitCheck(value: boolean) {
		this._fields.needsInitCheck = value
	}

	public get isMessageSet(): boolean {
		return this._fields.isMessageSet
	}

	public set isMessageSet(value: boolean) {
		this._fields.isMessageSet = value
	}

	public get numRequiredFields(): number {
		return this._fields.numRequiredFields
	}

	public set numRequiredFields(value: number) {
		this._fields.numRequiredFields = value
	}

	public _fields: {
		methods: protoiface.Methods
		orderedCoderFields: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>
		denseCoderFields: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>
		coderFields: globalThis.Map<protowire.Number, coderFieldInfo | $.VarRef<coderFieldInfo> | null> | null
		sizecacheOffset: __goscript_pointer_reflect.offset
		unknownOffset: __goscript_pointer_reflect.offset
		unknownPtrKind: boolean
		extensionOffset: __goscript_pointer_reflect.offset
		needsInitCheck: boolean
		isMessageSet: boolean
		numRequiredFields: number
	}

	constructor(init?: Partial<{methods?: protoiface.Methods, orderedCoderFields?: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>, denseCoderFields?: $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>, coderFields?: globalThis.Map<protowire.Number, coderFieldInfo | $.VarRef<coderFieldInfo> | null> | null, sizecacheOffset?: __goscript_pointer_reflect.offset, unknownOffset?: __goscript_pointer_reflect.offset, unknownPtrKind?: boolean, extensionOffset?: __goscript_pointer_reflect.offset, needsInitCheck?: boolean, isMessageSet?: boolean, numRequiredFields?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			methods: init?.methods ? $.markAsStructValue($.cloneStructValue(init.methods)) : $.anonymousStructValue({"NoUnkeyedLiterals": new pragma.NoUnkeyedLiterals(undefined, true), "Flags": 0n, "Size": null, "Marshal": null, "Unmarshal": null, "Merge": null, "CheckInitialized": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }),
			orderedCoderFields: init?.orderedCoderFields ?? (null! as $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>),
			denseCoderFields: init?.denseCoderFields ?? (null! as $.Slice<coderFieldInfo | $.VarRef<coderFieldInfo> | null>),
			coderFields: init?.coderFields ?? (null! as globalThis.Map<protowire.Number, coderFieldInfo | $.VarRef<coderFieldInfo> | null> | null),
			sizecacheOffset: init?.sizecacheOffset ? init.sizecacheOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			unknownOffset: init?.unknownOffset ? init.unknownOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			unknownPtrKind: init?.unknownPtrKind ?? (false as boolean),
			extensionOffset: init?.extensionOffset ? init.extensionOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			needsInitCheck: init?.needsInitCheck ?? (false as boolean),
			isMessageSet: init?.isMessageSet ?? (false as boolean),
			numRequiredFields: init?.numRequiredFields ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): coderMessageInfo {
		return new coderMessageInfo(this, true)
	}

	public __goscriptAssign(source: coderMessageInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.methods, values.methods)
		target.orderedCoderFields = values.orderedCoderFields
		target.denseCoderFields = values.denseCoderFields
		target.coderFields = values.coderFields
		$.assignStruct(target.sizecacheOffset, values.sizecacheOffset)
		$.assignStruct(target.unknownOffset, values.unknownOffset)
		target.unknownPtrKind = values.unknownPtrKind
		$.assignStruct(target.extensionOffset, values.extensionOffset)
		target.needsInitCheck = values.needsInitCheck
		target.isMessageSet = values.isMessageSet
		target.numRequiredFields = values.numRequiredFields
	}

	static __typeInfo = $.registerStructType(
		"impl.coderMessageInfo",
		() => new coderMessageInfo(),
		() => [],
		coderMessageInfo,
		() => [/* @__PURE__ */ $.structField("methods", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }, [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("orderedCoderFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("impl.coderFieldInfo")), [1], 48, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("denseCoderFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("impl.coderFieldInfo")), [2], 72, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("coderFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")), [3], 96, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("sizecacheOffset", "impl.offset", [4], 104, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("unknownOffset", "impl.offset", [5], 120, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("unknownPtrKind", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("extensionOffset", "impl.offset", [7], 144, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("needsInitCheck", /* @__PURE__ */ $.basicType("bool"), [8], 160, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("isMessageSet", /* @__PURE__ */ $.basicType("bool"), [9], 161, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("numRequiredFields", /* @__PURE__ */ $.basicType("uint8"), [10], 162, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class coderFieldInfo {
	public get funcs(): __goscript_codec_tables.pointerCoderFuncs {
		return this._fields.funcs
	}

	public set funcs(value: __goscript_codec_tables.pointerCoderFuncs) {
		this._fields.funcs = value
	}

	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public get ft(): reflect.Type | null {
		return this._fields.ft
	}

	public set ft(value: reflect.Type | null) {
		this._fields.ft = value
	}

	public get validation(): __goscript_validate.validationInfo {
		return this._fields.validation
	}

	public set validation(value: __goscript_validate.validationInfo) {
		this._fields.validation = value
	}

	public get num(): protoreflect.FieldNumber {
		return this._fields.num
	}

	public set num(value: protoreflect.FieldNumber) {
		this._fields.num = value
	}

	public get offset(): __goscript_pointer_reflect.offset {
		return this._fields.offset
	}

	public set offset(value: __goscript_pointer_reflect.offset) {
		this._fields.offset = value
	}

	public get wiretag(): bigint {
		return this._fields.wiretag
	}

	public set wiretag(value: bigint) {
		this._fields.wiretag = value
	}

	public get tagsize(): number {
		return this._fields.tagsize
	}

	public set tagsize(value: number) {
		this._fields.tagsize = value
	}

	public get isPointer(): boolean {
		return this._fields.isPointer
	}

	public set isPointer(value: boolean) {
		this._fields.isPointer = value
	}

	public get isRequired(): boolean {
		return this._fields.isRequired
	}

	public set isRequired(value: boolean) {
		this._fields.isRequired = value
	}

	public _fields: {
		funcs: __goscript_codec_tables.pointerCoderFuncs
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
		ft: reflect.Type | null
		validation: __goscript_validate.validationInfo
		num: protoreflect.FieldNumber
		offset: __goscript_pointer_reflect.offset
		wiretag: bigint
		tagsize: number
		isPointer: boolean
		isRequired: boolean
	}

	constructor(init?: Partial<{funcs?: __goscript_codec_tables.pointerCoderFuncs, mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, ft?: reflect.Type | null, validation?: __goscript_validate.validationInfo, num?: protoreflect.FieldNumber, offset?: __goscript_pointer_reflect.offset, wiretag?: bigint, tagsize?: number, isPointer?: boolean, isRequired?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			funcs: init?.funcs ? init.funcs.clone() : new __goscript_codec_tables.pointerCoderFuncs(undefined, true),
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null),
			ft: init?.ft ?? (null! as reflect.Type | null),
			validation: init?.validation ? init.validation.clone() : new __goscript_validate.validationInfo(undefined, true),
			num: init?.num ?? (0 as protoreflect.FieldNumber),
			offset: init?.offset ? init.offset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			wiretag: init?.wiretag ?? (0n as bigint),
			tagsize: init?.tagsize ?? (0 as number),
			isPointer: init?.isPointer ?? (false as boolean),
			isRequired: init?.isRequired ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): coderFieldInfo {
		return new coderFieldInfo(this, true)
	}

	public __goscriptAssign(source: coderFieldInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.funcs, values.funcs)
		target.mi = values.mi
		target.ft = $.assignFieldValue(target.ft, values.ft, "reflect.Type")
		$.assignStruct(target.validation, values.validation)
		target.num = values.num
		$.assignStruct(target.offset, values.offset)
		target.wiretag = values.wiretag
		target.tagsize = values.tagsize
		target.isPointer = values.isPointer
		target.isRequired = values.isRequired
	}

	static __typeInfo = $.registerStructType(
		"impl.coderFieldInfo",
		() => new coderFieldInfo(),
		() => [],
		coderFieldInfo,
		() => [/* @__PURE__ */ $.structField("funcs", "impl.pointerCoderFuncs", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("mi", /* @__PURE__ */ $.pointerType("impl.MessageInfo"), [1], 48, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("ft", "reflect.Type", [2], 56, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("validation", "impl.validationInfo", [3], 72, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("int32", "protowire.Number"), [4], 96, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("offset", "impl.offset", [5], 104, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("wiretag", /* @__PURE__ */ $.basicType("uint64"), [6], 120, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("tagsize", /* @__PURE__ */ $.basicType("int"), [7], 128, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("isPointer", /* @__PURE__ */ $.basicType("bool"), [8], 136, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("isRequired", /* @__PURE__ */ $.basicType("bool"), [9], 137, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}
