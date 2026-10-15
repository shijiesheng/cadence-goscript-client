// Generated file based on message_reflect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import type * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.reflectMessageInfo", "impl.extensionMap", "impl.MessageState", "impl.messageState", "impl.messageDataType", "impl.messageReflectWrapper", "impl.messageIfaceWrapper"])

export type extensionMap = globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null

$.registerNamedType("impl.extensionMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField"));

$.registerNamedValueType(
	"*impl.extensionMap",
	{Clear: (receiver: any, ...args: any[]) => (extensionMap_Clear as any)(receiver, ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (extensionMap_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (extensionMap_Has as any)(receiver, ...$.stripGenericTypeArgs(args)), Mutable: (receiver: any, ...args: any[]) => (extensionMap_Mutable as any)(receiver, ...$.stripGenericTypeArgs(args)), Range: (receiver: any, ...args: any[]) => (extensionMap_Range as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (extensionMap_Set as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Clear", [["xd", "protoreflect.ExtensionTypeDescriptor"]]), $.methodSignature("Get", [["xd", "protoreflect.ExtensionTypeDescriptor"]], ["protoreflect.Value"]), $.methodSignature("Has", [["xd", "protoreflect.ExtensionTypeDescriptor"]], [["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Mutable", [["xd", "protoreflect.ExtensionTypeDescriptor"]], ["protoreflect.Value"]), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Set", [["xd", "protoreflect.ExtensionTypeDescriptor"], ["v", "protoreflect.Value"]])]
);

export class reflectMessageInfo {
	public get fields(): globalThis.Map<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> | null {
		return this._fields.fields
	}

	public set fields(value: globalThis.Map<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> | null) {
		this._fields.fields = value
	}

	public get oneofs(): globalThis.Map<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null> | null {
		return this._fields.oneofs
	}

	public set oneofs(value: globalThis.Map<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null> | null) {
		this._fields.oneofs = value
	}

	// fieldTypes contains the zero value of an enum or message field.
	// For lists, it contains the element type.
	// For maps, it contains the entry value type.
	public get fieldTypes(): globalThis.Map<protoreflect.FieldNumber, any> | null {
		return this._fields.fieldTypes
	}

	public set fieldTypes(value: globalThis.Map<protoreflect.FieldNumber, any> | null) {
		this._fields.fieldTypes = value
	}

	// denseFields is a subset of fields where:
	// 	0 < fieldDesc.Number() < len(denseFields)
	// It provides faster access to the fieldInfo, but may be incomplete.
	public get denseFields(): $.Slice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> {
		return this._fields.denseFields
	}

	public set denseFields(value: $.Slice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>) {
		this._fields.denseFields = value
	}

	// rangeInfos is a list of all fields (not belonging to a oneof) and oneofs.
	public get rangeInfos(): $.Slice<any> {
		return this._fields.rangeInfos
	}

	public set rangeInfos(value: $.Slice<any>) {
		this._fields.rangeInfos = value
	}

	public get getUnknown(): ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.RawFields | globalThis.Promise<protoreflect.RawFields>) | null {
		return this._fields.getUnknown
	}

	public set getUnknown(value: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.RawFields | globalThis.Promise<protoreflect.RawFields>) | null) {
		this._fields.getUnknown = value
	}

	public get setUnknown(): ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields) => void) | null {
		return this._fields.setUnknown
	}

	public set setUnknown(value: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields) => void) | null) {
		this._fields.setUnknown = value
	}

	public get extensionMap(): ((_p0: __goscript_pointer_reflect.pointer) => $.VarRef<extensionMap> | null | globalThis.Promise<$.VarRef<extensionMap> | null>) | null {
		return this._fields.extensionMap
	}

	public set extensionMap(value: ((_p0: __goscript_pointer_reflect.pointer) => $.VarRef<extensionMap> | null | globalThis.Promise<$.VarRef<extensionMap> | null>) | null) {
		this._fields.extensionMap = value
	}

	public get nilMessage(): __goscript_pointer_reflect.atomicNilMessage {
		return this._fields.nilMessage
	}

	public set nilMessage(value: __goscript_pointer_reflect.atomicNilMessage) {
		this._fields.nilMessage = value
	}

	public _fields: {
		fields: globalThis.Map<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> | null
		oneofs: globalThis.Map<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null> | null
		fieldTypes: globalThis.Map<protoreflect.FieldNumber, any> | null
		denseFields: $.Slice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>
		rangeInfos: $.Slice<any>
		getUnknown: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.RawFields | globalThis.Promise<protoreflect.RawFields>) | null
		setUnknown: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields) => void) | null
		extensionMap: ((_p0: __goscript_pointer_reflect.pointer) => $.VarRef<extensionMap> | null | globalThis.Promise<$.VarRef<extensionMap> | null>) | null
		nilMessage: __goscript_pointer_reflect.atomicNilMessage
	}

	constructor(init?: Partial<{fields?: globalThis.Map<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> | null, oneofs?: globalThis.Map<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null> | null, fieldTypes?: globalThis.Map<protoreflect.FieldNumber, any> | null, denseFields?: $.Slice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>, rangeInfos?: $.Slice<any>, getUnknown?: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.RawFields | globalThis.Promise<protoreflect.RawFields>) | null, setUnknown?: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields) => void) | null, extensionMap?: ((_p0: __goscript_pointer_reflect.pointer) => $.VarRef<extensionMap> | null | globalThis.Promise<$.VarRef<extensionMap> | null>) | null, nilMessage?: __goscript_pointer_reflect.atomicNilMessage}>, __goscriptValue?: boolean) {
		this._fields = {
			fields: init?.fields ?? (null! as globalThis.Map<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null> | null),
			oneofs: init?.oneofs ?? (null! as globalThis.Map<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null> | null),
			fieldTypes: init?.fieldTypes ?? (null! as globalThis.Map<protoreflect.FieldNumber, any> | null),
			denseFields: init?.denseFields ?? (null! as $.Slice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>),
			rangeInfos: init?.rangeInfos ?? (null! as $.Slice<any>),
			getUnknown: init?.getUnknown ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.RawFields | globalThis.Promise<protoreflect.RawFields>) | null),
			setUnknown: init?.setUnknown ?? (null! as ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields) => void) | null),
			extensionMap: init?.extensionMap ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => $.VarRef<extensionMap> | null | globalThis.Promise<$.VarRef<extensionMap> | null>) | null),
			nilMessage: init?.nilMessage ? init.nilMessage.clone() : new __goscript_pointer_reflect.atomicNilMessage(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reflectMessageInfo {
		return new reflectMessageInfo(this, true)
	}

	public __goscriptAssign(source: reflectMessageInfo): void {
		const target = this._fields
		const values = source._fields
		target.fields = values.fields
		target.oneofs = values.oneofs
		target.fieldTypes = values.fieldTypes
		target.denseFields = values.denseFields
		target.rangeInfos = values.rangeInfos
		target.getUnknown = values.getUnknown
		target.setUnknown = values.setUnknown
		target.extensionMap = values.extensionMap
		$.assignStruct(target.nilMessage, values.nilMessage)
	}

	static __typeInfo = $.registerStructType(
		"impl.reflectMessageInfo",
		() => new reflectMessageInfo(),
		() => [],
		reflectMessageInfo,
		() => [{ name: "fields", key: "fields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.pointerType("impl.fieldInfo")) }, { name: "oneofs", key: "oneofs", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("impl.oneofInfo")) }, { name: "fieldTypes", key: "fieldTypes", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), { kind: $.TypeKind.Interface, methods: [] }) }, { name: "denseFields", key: "denseFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("impl.fieldInfo")) }, { name: "rangeInfos", key: "rangeInfos", type: /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }) }, { name: "getUnknown", key: "getUnknown", type: ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")] } as $.FunctionTypeInfo) }, { name: "setUnknown", key: "setUnknown", type: ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")], results: [] } as $.FunctionTypeInfo) }, { name: "extensionMap", key: "extensionMap", type: ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.pointerType("impl.extensionMap")] } as $.FunctionTypeInfo) }, { name: "nilMessage", key: "nilMessage", type: "impl.atomicNilMessage" }]
	)
}

export class MessageState {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	public get DoNotCompare(): pragma.DoNotCompare {
		return this._fields.DoNotCompare
	}

	public set DoNotCompare(value: pragma.DoNotCompare) {
		this._fields.DoNotCompare = value
	}

	public get DoNotCopy(): pragma.DoNotCopy {
		return this._fields.DoNotCopy
	}

	public set DoNotCopy(value: pragma.DoNotCopy) {
		this._fields.DoNotCopy = value
	}

	public get atomicMessageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.atomicMessageInfo
	}

	public set atomicMessageInfo(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.atomicMessageInfo = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		DoNotCompare: pragma.DoNotCompare
		DoNotCopy: pragma.DoNotCopy
		atomicMessageInfo: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, DoNotCompare?: pragma.DoNotCompare, DoNotCopy?: pragma.DoNotCopy, atomicMessageInfo?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			DoNotCompare: init?.DoNotCompare !== undefined ? $.cloneArrayValue(init.DoNotCompare, "pragma.DoNotCompare") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			DoNotCopy: init?.DoNotCopy !== undefined ? $.cloneArrayValue(init.DoNotCopy, "pragma.DoNotCopy") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => $.markAsStructValue(new sync.Mutex())), /* @__PURE__ */ $.arrayType("sync.Mutex", 0)),
			atomicMessageInfo: init?.atomicMessageInfo ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MessageState {
		return new MessageState(this, true)
	}

	public __goscriptAssign(source: MessageState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.DoNotCompare = $.assignFieldValue(target.DoNotCompare, values.DoNotCompare, "pragma.DoNotCompare")
		target.DoNotCopy = $.assignFieldValue(target.DoNotCopy, values.DoNotCopy, "pragma.DoNotCopy")
		target.atomicMessageInfo = values.atomicMessageInfo
	}

	static __typeInfo = $.registerStructType(
		"impl.MessageState",
		() => new MessageState(),
		() => [],
		MessageState,
		() => [{ name: "NoUnkeyedLiterals", key: "NoUnkeyedLiterals", type: "pragma.NoUnkeyedLiterals", anonymous: true }, { name: "DoNotCompare", key: "DoNotCompare", type: "pragma.DoNotCompare", anonymous: true }, { name: "DoNotCopy", key: "DoNotCopy", type: "pragma.DoNotCopy", anonymous: true }, { name: "atomicMessageInfo", key: "atomicMessageInfo", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }]
	)
}

export class messageState {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	public get DoNotCompare(): pragma.DoNotCompare {
		return this._fields.DoNotCompare
	}

	public set DoNotCompare(value: pragma.DoNotCompare) {
		this._fields.DoNotCompare = value
	}

	public get DoNotCopy(): pragma.DoNotCopy {
		return this._fields.DoNotCopy
	}

	public set DoNotCopy(value: pragma.DoNotCopy) {
		this._fields.DoNotCopy = value
	}

	public get atomicMessageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.atomicMessageInfo
	}

	public set atomicMessageInfo(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.atomicMessageInfo = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		DoNotCompare: pragma.DoNotCompare
		DoNotCopy: pragma.DoNotCopy
		atomicMessageInfo: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, DoNotCompare?: pragma.DoNotCompare, DoNotCopy?: pragma.DoNotCopy, atomicMessageInfo?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			DoNotCompare: init?.DoNotCompare !== undefined ? $.cloneArrayValue(init.DoNotCompare, "pragma.DoNotCompare") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			DoNotCopy: init?.DoNotCopy !== undefined ? $.cloneArrayValue(init.DoNotCopy, "pragma.DoNotCopy") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => $.markAsStructValue(new sync.Mutex())), /* @__PURE__ */ $.arrayType("sync.Mutex", 0)),
			atomicMessageInfo: init?.atomicMessageInfo ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageState {
		return new messageState(this, true)
	}

	public __goscriptAssign(source: messageState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.DoNotCompare = $.assignFieldValue(target.DoNotCompare, values.DoNotCompare, "pragma.DoNotCompare")
		target.DoNotCopy = $.assignFieldValue(target.DoNotCopy, values.DoNotCopy, "pragma.DoNotCopy")
		target.atomicMessageInfo = values.atomicMessageInfo
	}

	public async Clear(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple3: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple3[0]
			let xd = __goscriptTuple3[1]
			if (fi != null) {
				void (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).clear!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await extensionMap_Clear(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
	}

	public Descriptor(): protoreflect.MessageDescriptor | null {
		const m: messageState | $.VarRef<messageState> | null = this;
		return $.pointerValue<__goscript_message.MessageInfo>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))).Desc
	}

	public async Get(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple4: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple4[0]
			let xd = __goscriptTuple4[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return extensionMap_Get(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async GetUnknown(): globalThis.Promise<protoreflect.RawFields> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		return (((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.getUnknown!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)
	}

	public async Has(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple5: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple5[0]
			let xd = __goscriptTuple5[1]
			if (fi != null) {
				return $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).has!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m)))
			} else {
				return extensionMap_Has(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Interface(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const m: messageState | $.VarRef<messageState> | null = this;
		return $.mustTypeAssert<protoreflect.ProtoMessage | null>(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).protoUnwrap() : messageState.prototype.protoUnwrap.call(m)), "protoreflect.ProtoMessage")
	}

	public IsValid(): boolean {
		const m: messageState | $.VarRef<messageState> | null = this;
		return !$.markAsStructValue($.cloneStructValue((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m)))).IsNil()
	}

	public LoadMessageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		const ms: messageState | $.VarRef<messageState> | null = this;
		$.panic("not supported")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Mutable(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple6: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple6[0]
			let xd = __goscriptTuple6[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).mutable!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return extensionMap_Mutable(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const m: messageState | $.VarRef<messageState> | null = this;
		return __goscript_message.MessageInfo.prototype.New.call((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m)))
	}

	public async NewField(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple7: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple7[0]
			let xd = __goscriptTuple7[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).newField!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public ProtoMessageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		const m: messageState | $.VarRef<messageState> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
	}

	public async ProtoMethods(): globalThis.Promise<$.VarRef<protoiface.Methods> | null> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		return $.fieldRef($.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo._fields, "methods")
	}

	public async Range(f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		let mi$: __goscript_message.MessageInfo = mi == null ? $.pointerTarget<__goscript_message.MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<__goscript_message.MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		for (let __goscriptRangeTarget0 = (mi$ as __goscript_message.MessageInfo).reflectMessageInfo.rangeInfos, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let ri = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
			{
				const __goscriptTypeSwitchValue = ri
				switch (true) {
					case $.typeAssert<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.fieldInfo")).ok:
						{
							let ri: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = $.typeAssert<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.fieldInfo")).value
							if ((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri).has!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
								if (!(__goscriptAwait = f!($.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri).fieldDesc, (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
									return
								}
							}
						}
						break
					case $.typeAssert<__goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.oneofInfo")).ok:
						{
							let ri: __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null = $.typeAssert<__goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.oneofInfo")).value
							{
								let n = (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.oneofInfo>(ri).which!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if (n > 0) {
									let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = $.mapGet<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((mi$ as __goscript_message.MessageInfo).reflectMessageInfo.fields, n, null)[0]
									let fi$: __goscript_message_reflect_field.fieldInfo = fi == null ? $.pointerTarget<__goscript_message_reflect_field.fieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<__goscript_message_reflect_field.fieldInfo>(fi)
									if (!(__goscriptAwait = f!((fi$ as __goscript_message_reflect_field.fieldInfo).fieldDesc, (((__goscriptAwait = (fi$ as __goscript_message_reflect_field.fieldInfo)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										return
									}
								}
							}
						}
						break
				}
			}
		}
		await extensionMap_Range(((__goscriptAwait = (mi$ as __goscript_message.MessageInfo).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), f)
	}

	public async Set(fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<void> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple8: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple8[0]
			let xd = __goscriptTuple8[1]
			if (fi != null) {
				void (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi)._set!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m)), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await extensionMap_Set(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd, (v).clone())
			}
		}
	}

	public async SetUnknown(b: protoreflect.RawFields): globalThis.Promise<void> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		void (__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.setUnknown!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m)), (b as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public StoreMessageInfo(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null): void {
		const ms: messageState | $.VarRef<messageState> | null = this;
		$.panic("not supported")
	}

	public Type(): protoreflect.MessageType | null {
		const m: messageState | $.VarRef<messageState> | null = this;
		return $.interfaceValue<protoreflect.MessageType | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m)), "*impl.MessageInfo", /* @__PURE__ */ $.pointerType("impl.MessageInfo"))
	}

	public async WhichOneof(od: protoreflect.OneofDescriptor | null): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const m: messageState | $.VarRef<messageState> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let oi: __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null = $.mapGet<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>($.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.oneofs, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
			if ((oi != null) && ($.comparableEqual($.pointerValue<__goscript_message_reflect_field.oneofInfo>(oi).oneofDesc, od))) {
				return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.oneofInfo>(oi).which!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		$.panic($.concatString(($.concatString(($.concatString("invalid oneof descriptor ", (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), " for message ")), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).Descriptor() : messageState.prototype.Descriptor.call(m))).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public messageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		const ms: messageState | $.VarRef<messageState> | null = this;
		$.panic("not supported")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public pointer(): __goscript_pointer_reflect.pointer {
		const ms: messageState | $.VarRef<messageState> | null = this;
		$.panic("not supported")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async protoUnwrap(): globalThis.Promise<any> {
		const m: messageState | $.VarRef<messageState> | null = this;
		return $.markAsStructValue($.cloneStructValue((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).pointer() : messageState.prototype.pointer.call(m)))).AsIfaceOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageState).messageInfo() : messageState.prototype.messageInfo.call(m))).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"impl.messageState",
		() => new messageState(),
		() => [{ name: "Clear", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }], pointerReceiver: true }, { name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "GetUnknown", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields") }], pointerReceiver: true }, { name: "Has", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Interface", args: [], returns: [{ type: "protoreflect.ProtoMessage" }], pointerReceiver: true }, { name: "IsValid", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "LoadMessageInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }], pointerReceiver: true }, { name: "Mutable", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "NewField", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "ProtoMessageInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }], pointerReceiver: true }, { name: "ProtoMethods", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }) }], pointerReceiver: true }, { name: "Range", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "SetUnknown", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "StoreMessageInfo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Type", args: [], returns: [{ type: "protoreflect.MessageType" }], pointerReceiver: true }, { name: "WhichOneof", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.FieldDescriptor" }], pointerReceiver: true }, { name: "messageInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }], pointerReceiver: true }, { name: "pointer", args: [], returns: [{ type: "impl.pointer" }], pointerReceiver: true }, { name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }], pointerReceiver: true }],
		messageState,
		() => [{ name: "NoUnkeyedLiterals", key: "NoUnkeyedLiterals", type: "pragma.NoUnkeyedLiterals", anonymous: true }, { name: "DoNotCompare", key: "DoNotCompare", type: "pragma.DoNotCompare", anonymous: true }, { name: "DoNotCopy", key: "DoNotCopy", type: "pragma.DoNotCopy", anonymous: true }, { name: "atomicMessageInfo", key: "atomicMessageInfo", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }]
	)
}

export class messageDataType {
	public get p(): __goscript_pointer_reflect.pointer {
		return this._fields.p
	}

	public set p(value: __goscript_pointer_reflect.pointer) {
		this._fields.p = value
	}

	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public _fields: {
		p: __goscript_pointer_reflect.pointer
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	}

	constructor(init?: Partial<{p?: __goscript_pointer_reflect.pointer, mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ? init.p.clone() : new __goscript_pointer_reflect.pointer(undefined, true),
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageDataType {
		return new messageDataType(this, true)
	}

	public __goscriptAssign(source: messageDataType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.p, values.p)
		target.mi = values.mi
	}

	static __typeInfo = $.registerStructType(
		"impl.messageDataType",
		() => new messageDataType(),
		() => [],
		messageDataType,
		() => [{ name: "p", key: "p", type: "impl.pointer" }, { name: "mi", key: "mi", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }]
	)
}

export class messageReflectWrapper {
	public get p(): __goscript_pointer_reflect.pointer {
		return this._fields.p
	}

	public set p(value: __goscript_pointer_reflect.pointer) {
		this._fields.p = value
	}

	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public _fields: {
		p: __goscript_pointer_reflect.pointer
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	}

	constructor(init?: Partial<{p?: __goscript_pointer_reflect.pointer, mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ? init.p.clone() : new __goscript_pointer_reflect.pointer(undefined, true),
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageReflectWrapper {
		return new messageReflectWrapper(this, true)
	}

	public __goscriptAssign(source: messageReflectWrapper): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.p, values.p)
		target.mi = values.mi
	}

	public async Clear(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple9: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple9[0]
			let xd = __goscriptTuple9[1]
			if (fi != null) {
				void (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).clear!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await extensionMap_Clear(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
	}

	public Descriptor(): protoreflect.MessageDescriptor | null {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return $.pointerValue<__goscript_message.MessageInfo>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))).Desc
	}

	public async Get(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple10: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple10[0]
			let xd = __goscriptTuple10[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return extensionMap_Get(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async GetUnknown(): globalThis.Promise<protoreflect.RawFields> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		return (((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.getUnknown!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)
	}

	public async Has(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple11: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple11[0]
			let xd = __goscriptTuple11[1]
			if (fi != null) {
				return $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).has!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m)))
			} else {
				return extensionMap_Has(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Interface(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let __goscriptShadow0 = m
		{
			let __goscriptTuple12: any = $.typeAssertTuple<protoreflect.ProtoMessage | null>(await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as messageReflectWrapper).protoUnwrap() : messageReflectWrapper.prototype.protoUnwrap.call(__goscriptShadow0)), "protoreflect.ProtoMessage")
			let __goscriptShadow1 = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				return __goscriptShadow1
			}
		}
		return $.interfaceValue<protoreflect.ProtoMessage | null>($.unsafePointerCast<messageIfaceWrapper | $.VarRef<messageIfaceWrapper> | null>(m, messageIfaceWrapper), "*impl.messageIfaceWrapper", /* @__PURE__ */ $.pointerType("impl.messageIfaceWrapper"))
	}

	public IsValid(): boolean {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return !$.markAsStructValue($.cloneStructValue((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m)))).IsNil()
	}

	public async Mutable(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple13: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple13[0]
			let xd = __goscriptTuple13[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).mutable!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return extensionMap_Mutable(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return __goscript_message.MessageInfo.prototype.New.call((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m)))
	}

	public async NewField(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<protoreflect.Value> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple14: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple14[0]
			let xd = __goscriptTuple14[1]
			if (fi != null) {
				return (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).newField!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			} else {
				return (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public ProtoMessageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
	}

	public async ProtoMethods(): globalThis.Promise<$.VarRef<protoiface.Methods> | null> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		return $.fieldRef($.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo._fields, "methods")
	}

	public async Range(f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		let mi$: __goscript_message.MessageInfo = mi == null ? $.pointerTarget<__goscript_message.MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<__goscript_message.MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		for (let __goscriptRangeTarget1 = (mi$ as __goscript_message.MessageInfo).reflectMessageInfo.rangeInfos, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ri = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any)
			{
				const __goscriptTypeSwitchValue = ri
				switch (true) {
					case $.typeAssert<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.fieldInfo")).ok:
						{
							let ri: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = $.typeAssert<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.fieldInfo")).value
							if ((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri).has!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
								if (!(__goscriptAwait = f!($.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri).fieldDesc, (((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(ri)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
									return
								}
							}
						}
						break
					case $.typeAssert<__goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.oneofInfo")).ok:
						{
							let ri: __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null = $.typeAssert<__goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.oneofInfo")).value
							{
								let n = (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.oneofInfo>(ri).which!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if (n > 0) {
									let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = $.mapGet<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((mi$ as __goscript_message.MessageInfo).reflectMessageInfo.fields, n, null)[0]
									let fi$: __goscript_message_reflect_field.fieldInfo = fi == null ? $.pointerTarget<__goscript_message_reflect_field.fieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<__goscript_message_reflect_field.fieldInfo>(fi)
									if (!(__goscriptAwait = f!((fi$ as __goscript_message_reflect_field.fieldInfo).fieldDesc, (((__goscriptAwait = (fi$ as __goscript_message_reflect_field.fieldInfo)._get!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										return
									}
								}
							}
						}
						break
				}
			}
		}
		await extensionMap_Range(((__goscriptAwait = (mi$ as __goscript_message.MessageInfo).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), f)
	}

	public async Set(fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<void> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let __goscriptTuple15: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkField(fd) : __goscript_message.MessageInfo.prototype.checkField.call(mi, fd))
			let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = __goscriptTuple15[0]
			let xd = __goscriptTuple15[1]
			if (fi != null) {
				void (__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi)._set!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m)), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await extensionMap_Set(((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<extensionMap> | null), xd, (v).clone())
			}
		}
	}

	public async SetUnknown(b: protoreflect.RawFields): globalThis.Promise<void> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		void (__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.setUnknown!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m)), (b as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Type(): protoreflect.MessageType | null {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return $.interfaceValue<protoreflect.MessageType | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m)), "*impl.MessageInfo", /* @__PURE__ */ $.pointerType("impl.MessageInfo"))
	}

	public async WhichOneof(od: protoreflect.OneofDescriptor | null): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
		{
			let oi: __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null = $.mapGet<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>($.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.oneofs, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
			if ((oi != null) && ($.comparableEqual($.pointerValue<__goscript_message_reflect_field.oneofInfo>(oi).oneofDesc, od))) {
				return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber((__goscriptAwait = $.pointerValue<__goscript_message_reflect_field.oneofInfo>(oi).which!((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		$.panic($.concatString(($.concatString(($.concatString("invalid oneof descriptor ", (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), " for message ")), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).Descriptor() : messageReflectWrapper.prototype.Descriptor.call(m))).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public messageInfo(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return $.pointerValue<messageReflectWrapper>(m).mi
	}

	public pointer(): __goscript_pointer_reflect.pointer {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return ($.pointerValue<messageReflectWrapper>(m).p).clone()
	}

	public async protoUnwrap(): globalThis.Promise<any> {
		const m: messageReflectWrapper | $.VarRef<messageReflectWrapper> | null = this;
		return $.markAsStructValue($.cloneStructValue((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).pointer() : messageReflectWrapper.prototype.pointer.call(m)))).AsIfaceOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageReflectWrapper).messageInfo() : messageReflectWrapper.prototype.messageInfo.call(m))).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"impl.messageReflectWrapper",
		() => new messageReflectWrapper(),
		() => [{ name: "Clear", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }], pointerReceiver: true }, { name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "GetUnknown", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields") }], pointerReceiver: true }, { name: "Has", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Interface", args: [], returns: [{ type: "protoreflect.ProtoMessage" }], pointerReceiver: true }, { name: "IsValid", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Mutable", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "NewField", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "ProtoMessageInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }], pointerReceiver: true }, { name: "ProtoMethods", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] }) }], pointerReceiver: true }, { name: "Range", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "SetUnknown", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Type", args: [], returns: [{ type: "protoreflect.MessageType" }], pointerReceiver: true }, { name: "WhichOneof", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.FieldDescriptor" }], pointerReceiver: true }, { name: "messageInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }], pointerReceiver: true }, { name: "pointer", args: [], returns: [{ type: "impl.pointer" }], pointerReceiver: true }, { name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }], pointerReceiver: true }],
		messageReflectWrapper,
		() => [{ name: "p", key: "p", type: "impl.pointer" }, { name: "mi", key: "mi", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }]
	)
}

export class messageIfaceWrapper {
	public get p(): __goscript_pointer_reflect.pointer {
		return this._fields.p
	}

	public set p(value: __goscript_pointer_reflect.pointer) {
		this._fields.p = value
	}

	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public _fields: {
		p: __goscript_pointer_reflect.pointer
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	}

	constructor(init?: Partial<{p?: __goscript_pointer_reflect.pointer, mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ? init.p.clone() : new __goscript_pointer_reflect.pointer(undefined, true),
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageIfaceWrapper {
		return new messageIfaceWrapper(this, true)
	}

	public __goscriptAssign(source: messageIfaceWrapper): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.p, values.p)
		target.mi = values.mi
	}

	public ProtoReflect(): protoreflect.Message | null {
		const m: messageIfaceWrapper | $.VarRef<messageIfaceWrapper> | null = this;
		return $.interfaceValue<protoreflect.Message | null>($.unsafePointerCast<messageReflectWrapper | $.VarRef<messageReflectWrapper> | null>(m, messageReflectWrapper), "*impl.messageReflectWrapper", /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))
	}

	public async Reset(): globalThis.Promise<void> {
		const m: messageIfaceWrapper | $.VarRef<messageIfaceWrapper> | null = this;
		{
			let [mr, ok] = $.typeAssertTuple<any>(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageIfaceWrapper).protoUnwrap() : messageIfaceWrapper.prototype.protoUnwrap.call(m)), { kind: $.TypeKind.Interface, methods: [{ name: "Reset", args: [], returns: [] }] })
			if (ok) {
				void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as any) : $.pointerValue<any>(mr)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as messageIfaceWrapper).protoUnwrap() : messageIfaceWrapper.prototype.protoUnwrap.call(m)))))
		if (($.markAsStructValue($.cloneStructValue(rv)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
		}
	}

	public async protoUnwrap(): globalThis.Promise<any> {
		const m: messageIfaceWrapper | $.VarRef<messageIfaceWrapper> | null = this;
		const m$: messageIfaceWrapper = m == null ? $.pointerTarget<messageIfaceWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<messageIfaceWrapper>(m)
		return $.markAsStructValue($.cloneStructValue((m$ as messageIfaceWrapper).p)).AsIfaceOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((m$ as messageIfaceWrapper).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"impl.messageIfaceWrapper",
		() => new messageIfaceWrapper(),
		() => [{ name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }], pointerReceiver: true }],
		messageIfaceWrapper,
		() => [{ name: "p", key: "p", type: "impl.pointer" }, { name: "mi", key: "mi", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }]
	)
}

export async function extensionMap_Range(m: $.VarRef<extensionMap> | null, f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
	if (m != null) {
		for (const [__rangeKey, __goscriptRangeValue0] of $.pointerValue<extensionMap>(m)?.entries() ?? []) {
			let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue0).clone())
			let xd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(x.value.Type()).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let v = await x.value.Value()
			if ((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.List, null>>($.markAsStructValue($.cloneStructValue(v)).List()).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
				continue
			}
			if (!(__goscriptAwait = f!((xd as protoreflect.FieldDescriptor | null), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
	}
}

export async function extensionMap_Has(m: $.VarRef<extensionMap> | null, xd: protoreflect.ExtensionTypeDescriptor | null): globalThis.Promise<boolean> {
	let ok: boolean = false
	if (m == null) {
		return false
	}
	let __goscriptTuple0: any = $.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(($.pointerValue<extensionMap>(m)), $.int((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), new __goscript_codec_extension.ExtensionField(undefined, true))
	let x = $.varRef(__goscriptTuple0[0])
	ok = __goscriptTuple0[1]
	if (!ok) {
		return false
	}
	if (x.value.isUnexpandedLazy()) {
		// Avoid calling x.Value(), which triggers a lazy unmarshal.
		return true
	}
	switch ((true as boolean)) {
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.List, null>>($.markAsStructValue($.cloneStructValue((await x.value.Value()))).List()).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Map, null>>($.markAsStructValue($.cloneStructValue((await x.value.Value()))).Map()).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0
			break
		}
	}
	return true
}

export async function extensionMap_Clear(m: $.VarRef<extensionMap> | null, xd: protoreflect.ExtensionTypeDescriptor | null): globalThis.Promise<void> {
	$.deleteMapEntry($.pointerValue<extensionMap>(m), $.int((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32))
}

export async function extensionMap_Get(m: $.VarRef<extensionMap> | null, xd: protoreflect.ExtensionTypeDescriptor | null): globalThis.Promise<protoreflect.Value> {
	if (m != null) {
		{
			let __goscriptTuple1: any = $.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(($.pointerValue<extensionMap>(m)), $.int((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), new __goscript_codec_extension.ExtensionField(undefined, true))
			let x = $.varRef(__goscriptTuple1[0])
			let ok = __goscriptTuple1[1]
			if (ok) {
				return x.value.Value()
			}
		}
	}
	return (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
}

export async function extensionMap_Set(m: $.VarRef<extensionMap> | null, xd: protoreflect.ExtensionTypeDescriptor | null, v: protoreflect.Value): globalThis.Promise<void> {
	let xt = (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let isValid = true
	switch ((true as boolean)) {
		case !(__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).IsValidValue((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			isValid = false
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.List, null>>($.markAsStructValue($.cloneStructValue(v)).List()).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Map, null>>($.markAsStructValue($.cloneStructValue(v)).Map()).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>($.markAsStructValue($.cloneStructValue(v)).Message()).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}
	if (!isValid) {
		$.panic(await fmt.Sprintf("%v: assigning invalid value", $.namedValueInterfaceValue<any>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}

	if ($.pointerValue<extensionMap>(m) == null) {
		m!.value = $.makeMap<number, __goscript_codec_extension.ExtensionField>()
	}
	let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef(new __goscript_codec_extension.ExtensionField(undefined, true))
	x.value.Set(xt, v)
	$.mapSet(($.pointerValue<extensionMap>(m)), $.int((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), (x.value).clone())
}

export async function extensionMap_Mutable(m: $.VarRef<extensionMap> | null, xd: protoreflect.ExtensionTypeDescriptor | null): globalThis.Promise<protoreflect.Value> {
	if (((((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 11) && ((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 10)) && !(__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && !(__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		$.panic("invalid Mutable on field with non-composite type")
	}
	{
		let __goscriptTuple2: any = $.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(($.pointerValue<extensionMap>(m)), $.int((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), new __goscript_codec_extension.ExtensionField(undefined, true))
		let x = $.varRef(__goscriptTuple2[0])
		let ok = __goscriptTuple2[1]
		if (ok) {
			return x.value.Value()
		}
	}
	let v = (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	await extensionMap_Set(m, xd, v)
	return (v).clone()
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
