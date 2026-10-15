// Generated file based on message.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as sort from "@goscript/sort/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as flags2 from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as math from "@goscript/math/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as piface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_api_export from "./api_export.gs.ts"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_messageset from "./codec_messageset.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_legacy_export from "./legacy_export.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/sort/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./api_export.gs.ts"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_message.gs.ts"
import "./codec_messageset.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./legacy_export.gs.ts"
import "./merge.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.MessageInfo", "impl.exporter", "impl.structInfo", "impl.mapEntryType"])

export type exporter = ((v: any, i: number) => any | globalThis.Promise<any>) | null

export type SizeCache = number

export type WeakFields = globalThis.Map<number, protoreflect.ProtoMessage | null> | null

export type UnknownFields = unknownFieldsA

export type unknownFieldsA = $.Slice<number>

export type unknownFieldsB = $.VarRef<$.Slice<number>> | null

export type ExtensionFields = globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null

export class MessageInfo {
	// GoReflectType is the underlying message Go type and must be populated.
	public get GoReflectType(): reflect.Type | null {
		return this._fields.GoReflectType
	}

	public set GoReflectType(value: reflect.Type | null) {
		this._fields.GoReflectType = value
	}

	// Desc is the underlying message descriptor type and must be populated.
	public get Desc(): protoreflect.MessageDescriptor | null {
		return this._fields.Desc
	}

	public set Desc(value: protoreflect.MessageDescriptor | null) {
		this._fields.Desc = value
	}

	// Exporter must be provided in a purego environment in order to provide
	// access to unexported fields.
	public get Exporter(): ((v: any, i: number) => any | globalThis.Promise<any>) | null {
		return this._fields.Exporter
	}

	public set Exporter(value: ((v: any, i: number) => any | globalThis.Promise<any>) | null) {
		this._fields.Exporter = value
	}

	// OneofWrappers is list of pointers to oneof wrapper struct types.
	public get OneofWrappers(): $.Slice<any> {
		return this._fields.OneofWrappers
	}

	public set OneofWrappers(value: $.Slice<any>) {
		this._fields.OneofWrappers = value
	}

	public get initMu(): sync.Mutex {
		return this._fields.initMu
	}

	public set initMu(value: sync.Mutex) {
		this._fields.initMu = value
	}

	public get initDone(): number {
		return this._fields.initDone
	}

	public set initDone(value: number) {
		this._fields.initDone = value
	}

	public get reflectMessageInfo(): __goscript_message_reflect.reflectMessageInfo {
		return this._fields.reflectMessageInfo
	}

	public set reflectMessageInfo(value: __goscript_message_reflect.reflectMessageInfo) {
		this._fields.reflectMessageInfo = value
	}

	public get coderMessageInfo(): __goscript_codec_message.coderMessageInfo {
		return this._fields.coderMessageInfo
	}

	public set coderMessageInfo(value: __goscript_codec_message.coderMessageInfo) {
		this._fields.coderMessageInfo = value
	}

	public _fields: {
		GoReflectType: reflect.Type | null
		Desc: protoreflect.MessageDescriptor | null
		Exporter: ((v: any, i: number) => any | globalThis.Promise<any>) | null
		OneofWrappers: $.Slice<any>
		initMu: sync.Mutex
		initDone: number
		reflectMessageInfo: __goscript_message_reflect.reflectMessageInfo
		coderMessageInfo: __goscript_codec_message.coderMessageInfo
	}

	constructor(init?: Partial<{GoReflectType?: reflect.Type | null, Desc?: protoreflect.MessageDescriptor | null, Exporter?: ((v: any, i: number) => any | globalThis.Promise<any>) | null, OneofWrappers?: $.Slice<any>, initMu?: sync.Mutex, initDone?: number, reflectMessageInfo?: __goscript_message_reflect.reflectMessageInfo, coderMessageInfo?: __goscript_codec_message.coderMessageInfo}>, __goscriptValue?: boolean) {
		this._fields = {
			GoReflectType: init?.GoReflectType ?? (null! as reflect.Type | null),
			Desc: init?.Desc ?? (null! as protoreflect.MessageDescriptor | null),
			Exporter: init?.Exporter ?? (null! as ((v: any, i: number) => any | globalThis.Promise<any>) | null),
			OneofWrappers: init?.OneofWrappers ?? (null! as $.Slice<any>),
			initMu: init?.initMu ? $.markAsStructValue($.cloneStructValue(init.initMu)) : $.markAsStructValue(new sync.Mutex()),
			initDone: init?.initDone ?? (0 as number),
			reflectMessageInfo: init?.reflectMessageInfo ? init.reflectMessageInfo.clone() : new __goscript_message_reflect.reflectMessageInfo(undefined, true),
			coderMessageInfo: init?.coderMessageInfo ? init.coderMessageInfo.clone() : new __goscript_codec_message.coderMessageInfo(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MessageInfo {
		return new MessageInfo(this, true)
	}

	public __goscriptAssign(source: MessageInfo): void {
		const target = this._fields
		const values = source._fields
		target.GoReflectType = $.assignFieldValue(target.GoReflectType, values.GoReflectType, "reflect.Type")
		target.Desc = $.assignFieldValue(target.Desc, values.Desc, "protoreflect.MessageDescriptor")
		target.Exporter = values.Exporter
		target.OneofWrappers = values.OneofWrappers
		$.assignStruct(target.initMu, values.initMu)
		target.initDone = values.initDone
		$.assignStruct(target.reflectMessageInfo, values.reflectMessageInfo)
		$.assignStruct(target.coderMessageInfo, values.coderMessageInfo)
	}

	public Descriptor(): protoreflect.MessageDescriptor | null {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		return $.pointerValue<MessageInfo>(mi).Desc
	}

	public async Enum(i: number): globalThis.Promise<protoreflect.EnumType | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).EnumTypeOf($.mapGet<protoreflect.FieldNumber, any, any>((mi$ as MessageInfo).reflectMessageInfo.fieldTypes, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0])
	}

	public async Message(i: number): globalThis.Promise<protoreflect.MessageType | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				let [mt, ] = protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return mt
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.interfaceValue<protoreflect.MessageType | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = $.mapGet<protoreflect.FieldNumber, any, any>((mi$ as MessageInfo).reflectMessageInfo.fieldTypes, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]; return new mapEntryType({desc: __goscriptLiteralField0, valType: __goscriptLiteralField1}, true) })()), "impl.mapEntryType", "impl.mapEntryType")
				break
			}
			default:
			{
				return $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).MessageTypeOf($.mapGet<protoreflect.FieldNumber, any, any>((mi$ as MessageInfo).reflectMessageInfo.fieldTypes, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0])
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async MessageOf(m: any): globalThis.Promise<protoreflect.Message | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		if (!$.comparableEqual(reflect.TypeOf(m), (mi$ as MessageInfo).GoReflectType)) {
			$.panic(await fmt.Sprintf("type mismatch: got %T, want %v", m, ((mi$ as MessageInfo).GoReflectType as any)))
		}
		let p = __goscript_pointer_reflect.pointerOfIface(m)
		if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
			return $.interfaceValue<protoreflect.Message | null>(await (mi$ as MessageInfo).reflectMessageInfo.nilMessage.Init(mi), "*impl.messageReflectWrapper", /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))
		}
		return $.interfaceValue<protoreflect.Message | null>(new __goscript_message_reflect.messageReflectWrapper({p: p, mi: mi}), "*impl.messageReflectWrapper", /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let m = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<MessageInfo>(mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface()
		{
			let [r, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>(m, "protoreflect.ProtoMessage")
			if (ok) {
				return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(r)).ProtoReflect()
			}
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).MessageOf(m) : MessageInfo.prototype.MessageOf.call(mi, m))
	}

	public async Zero(): globalThis.Promise<protoreflect.Message | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		return MessageInfo.prototype.MessageOf.call(mi, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<MessageInfo>(mi).GoReflectType)!))).Interface())
	}

	public async appendExtensions(b: $.Slice<number>, ext: $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		if (ext == null) {
			return [b, null]
		}

		switch ($.len($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext))) {
			case 0:
			{
				return [b, null]
				break
			}
			case 1:
			{
				let err: $.GoError = null! as $.GoError
				for (const [__rangeKey, __goscriptRangeValue0] of $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)?.entries() ?? []) {
					let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue0).clone())
					let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
					let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
					if (__goscript_encode.fullyLazyExtensions(opts)) {

						{
							let lb: $.Slice<number> = await x.value.lazyBuffer()
							if (lb != null) {
								b = $.appendSlice(b, lb, $.byteSliceHint)
								continue
							}
						}
					}
					let __goscriptTuple0: any = await (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.marshal!(b, await x.value.Value(), (xi$ as __goscript_codec_extension.extensionFieldInfo).wiretag, (opts).clone())
					b = __goscriptTuple0[0]
					err = __goscriptTuple0[1]
				}
				return [b, err]
				break
			}
			default:
			{
				let keys: $.Slice<number> = $.makeSlice<number>(0, $.len($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)), "number")
				for (const [k, __rangeValue] of $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)?.entries() ?? []) {
					keys = $.appendOne(keys, $.int(k))
				}
				sort.Ints(keys)
				let err: $.GoError = null! as $.GoError
				for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
					let x = $.varRef(($.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)), $.int(k, 32), new __goscript_codec_extension.ExtensionField(undefined, true))[0]).clone())
					let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
					let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
					if (__goscript_encode.fullyLazyExtensions(opts)) {

						{
							let lb: $.Slice<number> = await x.value.lazyBuffer()
							if (lb != null) {
								b = $.appendSlice(b, lb, $.byteSliceHint)
								continue
							}
						}
					}
					let __goscriptTuple1: any = await (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.marshal!(b, await x.value.Value(), (xi$ as __goscript_codec_extension.extensionFieldInfo).wiretag, (opts).clone())
					b = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						return [b, err]
					}
				}
				return [b, null]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async checkField(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, protoreflect.ExtensionTypeDescriptor | null]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		let fi: __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null = null! as __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null
		{
			let n = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((0 < n) && ($.int(n) < $.sliceLen((mi$ as MessageInfo).reflectMessageInfo.denseFields))) {
				fi = $.arrayIndex((mi$ as MessageInfo).reflectMessageInfo.denseFields!, n)
			} else {
				fi = $.mapGet<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((mi$ as MessageInfo).reflectMessageInfo.fields, n, null)[0]
			}
		}
		if (fi != null) {
			if (!$.comparableEqual($.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).fieldDesc, fd)) {
				{
					let got = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let want = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>($.pointerValue<__goscript_message_reflect_field.fieldInfo>(fi).fieldDesc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (!$.stringEqual(got, want)) {
						$.panic(await fmt.Sprintf("mismatching field: got %v, want %v", $.namedValueInterfaceValue<any>(got, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(want, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
					}
				}
				$.panic(await fmt.Sprintf("mismatching field: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			return [fi, null]
		}

		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				let got = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let want = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (!$.stringEqual(got, want)) {

					$.panic(await fmt.Sprintf("extension %v has mismatching containing message: got %v, want %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(got, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(want, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				}
			}
			if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				$.panic(await fmt.Sprintf("extension %v extends %v outside the extension range", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			let [xtd, ok] = $.typeAssertTuple<protoreflect.ExtensionTypeDescriptor | null>(fd, "protoreflect.ExtensionTypeDescriptor")
			if (!ok) {
				$.panic(await fmt.Sprintf("extension %v does not implement protoreflect.ExtensionTypeDescriptor", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			return [null, xtd]
		}
		$.panic(await fmt.Sprintf("field %v is invalid", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async checkInitialized(_in: piface.CheckInitializedInput): globalThis.Promise<[piface.CheckInitializedOutput, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
		{
			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageState"))
			let ms: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				p = $.assignStruct(p, (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(ms)))
			} else {
				p = $.assignStruct(p, __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call($.mustTypeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))))
			}
		}
		return [$.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }), await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).checkInitializedPointer((p).clone()) : MessageInfo.prototype.checkInitializedPointer.call(mi, (p).clone()))]
	}

	public async checkInitializedPointer(p: __goscript_pointer_reflect.pointer): globalThis.Promise<$.GoError> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		if (!(mi$ as MessageInfo).coderMessageInfo.needsInitCheck) {
			return null
		}
		if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
			for (let __goscriptRangeTarget1 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let f = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
				if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isRequired) {
					return errors.RequiredNotSet((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}
			}
			return null
		}
		if ((mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
			let e = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()
			{
				let err = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).isInitExtensions(e) : MessageInfo.prototype.isInitExtensions.call(mi, e))
				if (err != null) {
					return err
				}
			}
		}
		for (let __goscriptRangeTarget2 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if (!$.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isRequired && ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.isInit == null)) {
				continue
			}
			let fptr = await $.markAsStructValue($.cloneStructValue(p)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone())
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fptr)).Elem())).IsNil()) {
				if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isRequired) {
					return errors.RequiredNotSet((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}
				continue
			}
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.isInit == null) {
				continue
			}
			{
				let err = (__goscriptAwait = $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.isInit!((fptr).clone(), f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public getPointer(m: protoreflect.Message | null): [__goscript_pointer_reflect.pointer, boolean] {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
		let ok: boolean = false
		{
			const __goscriptTypeSwitchValue = m
			switch (true) {
				case $.typeAssert<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageState")).ok:
					{
						let m: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = $.typeAssert<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageState")).value
						return [(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(m)), $.pointerEqual((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageState).messageInfo() : __goscript_message_reflect.messageState.prototype.messageInfo.call(m)), mi)]
					}
					break
				case $.typeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper")).ok:
					{
						let m: __goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null = $.typeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper")).value
						return [(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageReflectWrapper).pointer() : __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call(m)), $.pointerEqual((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageReflectWrapper).messageInfo() : __goscript_message_reflect.messageReflectWrapper.prototype.messageInfo.call(m)), mi)]
					}
					break
			}
		}
		return [new __goscript_pointer_reflect.pointer(undefined, true), false]
	}

	public async getUnknownBytes(p: __goscript_pointer_reflect.pointer): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		if ((mi$ as MessageInfo).coderMessageInfo.unknownPtrKind) {
			return $.pointerValue<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).BytesPtr())
		} else {
			return $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).Bytes()
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async init(): globalThis.Promise<void> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		// This function is called in the hot path. Inline the sync.Once logic,
		// since allocating a closure for Once.Do is expensive.
		// Keep init small to ensure that it can be inlined.
		if (atomic.LoadUint32($.fieldRef($.pointerValue<MessageInfo>(mi)._fields, "initDone")) == 0) {
			await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).initOnce() : MessageInfo.prototype.initOnce.call(mi))
		}
	}

	public async initOnce(): globalThis.Promise<void> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		using __defer = new $.DisposableStack()
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi$ as MessageInfo).initMu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mi$ as MessageInfo).initMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((mi$ as MessageInfo).initDone == 1) {
			return
		}

		let t = (mi$ as MessageInfo).GoReflectType
		if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
			$.panic(await fmt.Sprintf("got %v, want *struct kind", (t as any)))
		}
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let si = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeStructInfo(t) : MessageInfo.prototype.makeStructInfo.call(mi, t))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeReflectFuncs(t, si) : MessageInfo.prototype.makeReflectFuncs.call(mi, t, si))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeCoderMethods(t, si) : MessageInfo.prototype.makeCoderMethods.call(mi, t, si))

		atomic.StoreUint32($.fieldRef((mi$ as MessageInfo)._fields, "initDone"), 1)
	}

	public async initOneofFieldCoders(od: protoreflect.OneofDescriptor | null, si: structInfo): globalThis.Promise<void> {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.Name, reflect.StructField, reflect.StructField>(si.oneofsByName, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
		let ft = fs.Type
		let oneofFields: globalThis.Map<reflect.Type | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null> | null = $.makeMap<reflect.Type | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>()
		let needIsInit = false
		let fields = (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0, lim = (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < lim; i++) {
			let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let num = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			// for reflection implementation
			// for fast-path method implementations

			let cf = $.varRef(($.pointerValue<__goscript_codec_message.coderFieldInfo>($.mapGet<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>((mi$ as MessageInfo).coderMessageInfo.coderFields, num, null)[0])).clone())
			let ot = $.mapGet<protoreflect.FieldNumber, reflect.Type | null, reflect.Type | null>(si.oneofWrappersByNumber, num, null)[0]
			cf.value.ft = ((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type
			let __goscriptTuple3: any = await __goscript_codec_tables.fieldCoder(fd, cf.value.ft)
			cf.value.mi = __goscriptTuple3[0]
			$.assignStruct(cf.value.funcs, __goscriptTuple3[1])
			$.mapSet(oneofFields, ot, cf)
			if (cf.value.funcs.isInit != null) {
				needIsInit = true
			}
			$.pointerValue<__goscript_codec_message.coderFieldInfo>($.mapGet<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>((mi$ as MessageInfo).coderMessageInfo.coderFields, num, null)[0]).funcs.unmarshal = $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
				let vw: reflect.Value = $.markAsStructValue(new reflect.Value())
				let vi = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).AsValueOf(ft)))).Elem()))
				if ((!$.markAsStructValue($.cloneStructValue(vi)).IsNil() && !$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vi)).Elem())).IsNil()) && ($.comparableEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vi)).Elem())).Elem())).Type(), ot))) {
					vw = $.assignStruct(vw, $.markAsStructValue($.cloneStructValue(vi)).Elem())
				} else {
					vw = $.assignStruct(vw, reflect.New($.pointerValueOrNil(ot)!))
				}
				let [out, err] = await cf.value.funcs.unmarshal!(b, await $.markAsStructValue($.cloneStructValue(__goscript_pointer_reflect.pointerOfValue(vw))).Apply((__goscript_pointer_reflect.__goscript_get_zeroOffset()).clone()), wtyp, cf, (opts).clone())
				if (err != null) {
					return [(out).clone(), err]
				}
				$.markAsStructValue($.cloneStructValue(vi)).Set($.markAsStructValue($.cloneStructValue(vw)))
				return [(out).clone(), null]
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo))
		}
		let getInfo: ((p: __goscript_pointer_reflect.pointer) => [__goscript_pointer_reflect.pointer, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null] | globalThis.Promise<[__goscript_pointer_reflect.pointer, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null]>) | null = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<[__goscript_pointer_reflect.pointer, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null]> => {
			let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).AsValueOf(ft)))).Elem()))
			if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
				return [new __goscript_pointer_reflect.pointer(undefined, true), null]
			}
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
			if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
				return [new __goscript_pointer_reflect.pointer(undefined, true), null]
			}
			return [await $.markAsStructValue($.cloneStructValue(__goscript_pointer_reflect.pointerOfValue(v))).Apply((__goscript_pointer_reflect.__goscript_get_zeroOffset()).clone()), $.mapGet<reflect.Type | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>(oneofFields, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Type(), null)[0]]
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")] } as $.FunctionTypeInfo))
		let first: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = $.mapGet<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>((mi$ as MessageInfo).coderMessageInfo.coderFields, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
		let first$: __goscript_codec_message.coderFieldInfo = first == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(first) : (first as any).__isVarRef === true ? (first as any).value : (first as any).__goValue === undefined ? (first as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(first);
		;(first$ as __goscript_codec_message.coderFieldInfo).funcs.size = $.functionValue(async (p: __goscript_pointer_reflect.pointer, _p1: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
			let __goscriptTuple4: any = await getInfo!((p).clone())
			p = $.assignStruct(p, __goscriptTuple4[0])
			let info: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = __goscriptTuple4[1]
			let info$: __goscript_codec_message.coderFieldInfo = info == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info)
			if ((info == null) || ((info$ as __goscript_codec_message.coderFieldInfo).funcs.size == null)) {
				return 0
			}
			return (info$ as __goscript_codec_message.coderFieldInfo).funcs.size!((p).clone(), info, (opts).clone())
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo));
		;(first$ as __goscript_codec_message.coderFieldInfo).funcs.marshal = $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			let __goscriptTuple5: any = await getInfo!((p).clone())
			p = $.assignStruct(p, __goscriptTuple5[0])
			let info: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = __goscriptTuple5[1]
			let info$: __goscript_codec_message.coderFieldInfo = info == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info)
			if ((info == null) || ((info$ as __goscript_codec_message.coderFieldInfo).funcs.marshal == null)) {
				return [b, null]
			}
			return (info$ as __goscript_codec_message.coderFieldInfo).funcs.marshal!(b, (p).clone(), info, (opts).clone())
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo));
		;(first$ as __goscript_codec_message.coderFieldInfo).funcs.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> => {
			let __goscriptTuple6: any = await getInfo!((src).clone())
			let srcp = __goscriptTuple6[0]
			let srcinfo: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = __goscriptTuple6[1]
			let srcinfo$: __goscript_codec_message.coderFieldInfo = srcinfo == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(srcinfo) : (srcinfo as any).__isVarRef === true ? (srcinfo as any).value : (srcinfo as any).__goValue === undefined ? (srcinfo as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(srcinfo)
			if ((srcinfo == null) || ((srcinfo$ as __goscript_codec_message.coderFieldInfo).funcs.merge == null)) {
				return
			}
			let __goscriptTuple7: any = await getInfo!((dst).clone())
			let dstp = __goscriptTuple7[0]
			let dstinfo: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = __goscriptTuple7[1]
			if (!$.pointerEqual(dstinfo, srcinfo)) {
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(dst)).AsValueOf(ft)))).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(src)).AsValueOf(ft)))).Elem())).Elem())).Elem())).Type())!))))
				dstp = $.assignStruct(dstp, await $.markAsStructValue($.cloneStructValue(__goscript_pointer_reflect.pointerOfValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(dst)).AsValueOf(ft)))).Elem())).Elem()))).Apply((__goscript_pointer_reflect.__goscript_get_zeroOffset()).clone()))
			}
			void (__goscriptAwait = (srcinfo$ as __goscript_codec_message.coderFieldInfo).funcs.merge!((dstp).clone(), (srcp).clone(), srcinfo, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.mergeOptions"], results: [] } as $.FunctionTypeInfo))
		if (needIsInit) {
			;(first$ as __goscript_codec_message.coderFieldInfo).funcs.isInit = $.functionValue(async (p: __goscript_pointer_reflect.pointer, _p1: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
				let __goscriptTuple8: any = await getInfo!((p).clone())
				p = $.assignStruct(p, __goscriptTuple8[0])
				let info: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = __goscriptTuple8[1]
				let info$: __goscript_codec_message.coderFieldInfo = info == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(info)
				if ((info == null) || ((info$ as __goscript_codec_message.coderFieldInfo).funcs.isInit == null)) {
					return null
				}
				return (info$ as __goscript_codec_message.coderFieldInfo).funcs.isInit!((p).clone(), info)
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo))
		}
	}

	public async isInitExtensions(ext: $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null): globalThis.Promise<$.GoError> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		if (ext == null) {
			return null
		}
		for (const [__rangeKey, __goscriptRangeValue1] of $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)?.entries() ?? []) {
			let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue1).clone())
			let ei: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
			let ei$: __goscript_codec_extension.extensionFieldInfo = ei == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(ei)
			if (((ei$ as __goscript_codec_extension.extensionFieldInfo).funcs.isInit == null) || x.value.isUnexpandedLazy()) {
				continue
			}
			let v = await x.value.Value()
			if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
				continue
			}
			{
				let err = (__goscriptAwait = (ei$ as __goscript_codec_extension.extensionFieldInfo).funcs.isInit!((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async makeCoderMethods(t: reflect.Type | null, si: structInfo): globalThis.Promise<void> {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		$.assignStruct((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset, __goscript_pointer_reflect.__goscript_get_invalidOffset())
		$.assignStruct((mi$ as MessageInfo).coderMessageInfo.unknownOffset, __goscript_pointer_reflect.__goscript_get_invalidOffset())
		$.assignStruct((mi$ as MessageInfo).coderMessageInfo.extensionOffset, __goscript_pointer_reflect.__goscript_get_invalidOffset())

		if (si.sizecacheOffset.IsValid() && ($.comparableEqual(si.sizecacheType, sizecacheType))) {
			$.assignStruct((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset, si.sizecacheOffset)
		}
		if (si.unknownOffset.IsValid() && (($.comparableEqual(si.unknownType, unknownFieldsAType)) || ($.comparableEqual(si.unknownType, unknownFieldsBType)))) {
			$.assignStruct((mi$ as MessageInfo).coderMessageInfo.unknownOffset, si.unknownOffset);
			;(mi$ as MessageInfo).coderMessageInfo.unknownPtrKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(si.unknownType).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22
		}
		if (si.extensionOffset.IsValid() && ($.comparableEqual(si.extensionType, extensionFieldsType))) {
			$.assignStruct((mi$ as MessageInfo).coderMessageInfo.extensionOffset, si.extensionOffset)
		}

		;(mi$ as MessageInfo).coderMessageInfo.coderFields = $.makeMap<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>()
		let fields = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let preallocFields: $.Slice<__goscript_codec_message.coderFieldInfo> = $.makeSlice<__goscript_codec_message.coderFieldInfo>((__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, undefined, () => new __goscript_codec_message.coderFieldInfo(undefined, true))
		for (let i = 0; i < (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let fd = (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.FieldNumber, reflect.StructField, reflect.StructField>(si.fieldsByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
			let isOneof = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (isOneof) {
				fs = $.assignStruct(fs, $.mapGet<protoreflect.Name, reflect.StructField, reflect.StructField>(si.oneofsByName, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0])
			}
			let ft = fs.Type
			let wiretag: bigint = 0n
			if (!(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				wiretag = protowire.EncodeTag((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0])
			} else {
				wiretag = protowire.EncodeTag((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 2)
			}
			let fieldOffset: __goscript_pointer_reflect.offset = new __goscript_pointer_reflect.offset(undefined, true)
			let funcs: __goscript_codec_tables.pointerCoderFuncs = new __goscript_codec_tables.pointerCoderFuncs(undefined, true)
			let childMessage: MessageInfo | $.VarRef<MessageInfo> | null = null! as MessageInfo | $.VarRef<MessageInfo> | null
			switch ((true as boolean)) {
				case ft == null:
				{
					funcs = $.assignStruct(funcs, new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number => {
						return 0
					}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] => {
						return [null, null]
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
						$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
						$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> => {
						$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.mergeOptions"], results: [] } as $.FunctionTypeInfo))}, true))
					break
				}
				case isOneof:
				{
					fieldOffset = $.assignStruct(fieldOffset, __goscript_pointer_reflect.offsetOf(fs, (mi$ as MessageInfo).Exporter))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					fieldOffset = $.assignStruct(fieldOffset, si.weakOffset)
					funcs = $.assignStruct(funcs, __goscript_codec_field.makeWeakMessageFieldCoder(fd))
					break
				}
				default:
				{
					fieldOffset = $.assignStruct(fieldOffset, __goscript_pointer_reflect.offsetOf(fs, (mi$ as MessageInfo).Exporter))
					let __goscriptTuple9: any = await __goscript_codec_tables.fieldCoder(fd, ft)
					childMessage = __goscriptTuple9[0]
					funcs = $.assignStruct(funcs, __goscriptTuple9[1])
					break
				}
			}
			let cf: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = $.indexRef(preallocFields!, i)
			$.assignStruct($.pointerValue<__goscript_codec_message.coderFieldInfo>(cf), (await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = protowire.SizeVarint(wiretag); const __goscriptLiteralField4 = await __goscript_validate.newFieldValidationInfo(mi, (si).clone(), fd, ft); const __goscriptLiteralField5 = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) || (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasPresence(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField6 = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2; return new __goscript_codec_message.coderFieldInfo({num: __goscriptLiteralField2, offset: fieldOffset, wiretag: wiretag, ft: ft, tagsize: __goscriptLiteralField3, funcs: funcs, mi: childMessage, validation: __goscriptLiteralField4, isPointer: __goscriptLiteralField5, isRequired: __goscriptLiteralField6}, true) })()));
			;(mi$ as MessageInfo).coderMessageInfo.orderedCoderFields = $.appendOne((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, cf, $.appendZeros.nil)
			$.mapSet((mi$ as MessageInfo).coderMessageInfo.coderFields, $.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num, cf)
		}
		for (let i = 0, oneofs = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < (__goscriptAwait = (oneofs !== null && (oneofs as any).__isVarRef !== true && (oneofs as any).__goValue === undefined ? (oneofs as Exclude<protoreflect.OneofDescriptors, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>(oneofs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			{
				let od = (__goscriptAwait = (oneofs !== null && (oneofs as any).__isVarRef !== true && (oneofs as any).__goValue === undefined ? (oneofs as Exclude<protoreflect.OneofDescriptors, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>(oneofs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (!(__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).initOneofFieldCoders(od, (si).clone()) : MessageInfo.prototype.initOneofFieldCoders.call(mi, od, (si).clone()))
				}
			}
		}
		if (await messageset.IsMessageSet((mi$ as MessageInfo).Desc)) {
			if (!(mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
				$.panic(await fmt.Sprintf("%v: MessageSet with no extensions field", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			if (!(mi$ as MessageInfo).coderMessageInfo.unknownOffset.IsValid()) {
				$.panic(await fmt.Sprintf("%v: MessageSet with no unknown field", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			;(mi$ as MessageInfo).coderMessageInfo.isMessageSet = true
		}
		sort.Slice($.interfaceValue((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, "[]*impl.coderFieldInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("impl.coderFieldInfo"))), $.functionValue((i: number, j: number): boolean => {
			return $.pointerValue<__goscript_codec_message.coderFieldInfo>($.arrayIndex((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields!, i)).num < $.pointerValue<__goscript_codec_message.coderFieldInfo>($.arrayIndex((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields!, j)).num
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		let maxDense: protoreflect.FieldNumber = 0
		for (let __goscriptRangeTarget3 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let cf = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if (($.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num >= 16) && ($.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num >= $.int((globalThis.Math.imul(2, maxDense)), 32))) {
				break
			}
			maxDense = $.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num
		}
		;(mi$ as MessageInfo).coderMessageInfo.denseCoderFields = $.makeSlice<__goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>(((maxDense + 1) | 0))
		for (let __goscriptRangeTarget4 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let cf = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if ($.int($.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num) >= $.sliceLen((mi$ as MessageInfo).coderMessageInfo.denseCoderFields)) {
				break
			}
			$.sliceElems((mi$ as MessageInfo).coderMessageInfo.denseCoderFields!)[$.sliceSlot((mi$ as MessageInfo).coderMessageInfo.denseCoderFields!, $.pointerValue<__goscript_codec_message.coderFieldInfo>(cf).num)] = cf
		}

		if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
			await sort.Slice($.interfaceValue((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, "[]*impl.coderFieldInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("impl.coderFieldInfo"))), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
				let fi = (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).ByNumber($.pointerValue<__goscript_codec_message.coderFieldInfo>($.arrayIndex((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields!, i)).num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let fj = (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).ByNumber($.pointerValue<__goscript_codec_message.coderFieldInfo>($.arrayIndex((mi$ as MessageInfo).coderMessageInfo.orderedCoderFields!, j)).num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return order.LegacyFieldOrder!(fi, fj)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		}

		;(mi$ as MessageInfo).coderMessageInfo.needsInitCheck = await __goscript_checkinit.needsInitCheck((mi$ as MessageInfo).Desc)
		if (((mi$ as MessageInfo).coderMessageInfo.methods.Marshal == null) && ((mi$ as MessageInfo).coderMessageInfo.methods.Size == null)) {
			;(mi$ as MessageInfo).coderMessageInfo.methods.Flags = $.uint64Or((mi$ as MessageInfo).coderMessageInfo.methods.Flags, 1n);
			;(mi$ as MessageInfo).coderMessageInfo.methods.Marshal = $.functionValue(((__receiver) => (_in: piface.MarshalInput) => __receiver.marshal(_in))((mi$ as MessageInfo)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/impl.(*MessageInfo).marshal-fm");
			;(mi$ as MessageInfo).coderMessageInfo.methods.Size = $.functionValue(((__receiver) => (_in: piface.SizeInput) => __receiver.size(_in))((mi$ as MessageInfo)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/impl.(*MessageInfo).size-fm")
		}
		if ((mi$ as MessageInfo).coderMessageInfo.methods.Unmarshal == null) {
			;(mi$ as MessageInfo).coderMessageInfo.methods.Flags = $.uint64Or((mi$ as MessageInfo).coderMessageInfo.methods.Flags, 2n);
			;(mi$ as MessageInfo).coderMessageInfo.methods.Unmarshal = $.functionValue(((__receiver) => (_in: piface.UnmarshalInput) => __receiver.unmarshal(_in))((mi$ as MessageInfo)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/impl.(*MessageInfo).unmarshal-fm")
		}
		if ((mi$ as MessageInfo).coderMessageInfo.methods.CheckInitialized == null) {
			;(mi$ as MessageInfo).coderMessageInfo.methods.CheckInitialized = $.functionValue(((__receiver) => (_in: piface.CheckInitializedInput) => __receiver.checkInitialized(_in))((mi$ as MessageInfo)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/impl.(*MessageInfo).checkInitialized-fm")
		}
		if ((mi$ as MessageInfo).coderMessageInfo.methods.Merge == null) {
			;(mi$ as MessageInfo).coderMessageInfo.methods.Merge = $.functionValue(((__receiver) => (_in: piface.MergeInput) => __receiver.merge(_in))((mi$ as MessageInfo)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/impl.(*MessageInfo).merge-fm")
		}
	}

	public makeExtensionFieldsFunc(t: reflect.Type | null, si: structInfo): void {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		if (si.extensionOffset.IsValid()) {
			;(mi$ as MessageInfo).reflectMessageInfo.extensionMap = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<$.VarRef<__goscript_message_reflect.extensionMap> | null> => {
				if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
					return null
				}
				let v = await $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply((si.extensionOffset).clone())))).AsValueOf(extensionFieldsType)
				return $.mustTypeAssert<$.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.pointerType("impl.extensionMap")] } as $.FunctionTypeInfo))
		} else {
			;(mi$ as MessageInfo).reflectMessageInfo.extensionMap = $.functionValue((_p0: __goscript_pointer_reflect.pointer): $.VarRef<__goscript_message_reflect.extensionMap> | null => {
				return null
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.pointerType("impl.extensionMap")] } as $.FunctionTypeInfo))
		}
	}

	public async makeFieldTypes(si: structInfo): globalThis.Promise<void> {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		let md = (mi$ as MessageInfo).Desc
		let fds = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let ft: reflect.Type | null = null! as reflect.Type | null
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.FieldNumber, reflect.StructField, reflect.StructField>(si.fieldsByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
			let isOneof = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (isOneof) {
				fs = $.assignStruct(fs, $.mapGet<protoreflect.Name, reflect.StructField, reflect.StructField>(si.oneofsByName, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0])
			}
			let isMessage: boolean = false
			switch ((true as boolean)) {
				case fs.Type == null:
				{
					continue
					break
				}
				case isOneof:
				{
					if (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) {
						ft = ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.mapGet<protoreflect.FieldNumber, reflect.Type | null, reflect.Type | null>(si.oneofWrappersByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type
					}
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					if (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) {
						ft = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fs.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					isMessage = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					if (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) {
						ft = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fs.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					isMessage = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
				{
					ft = fs.Type
					if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasPresence(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22)) {
						ft = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
				{
					ft = fs.Type
					if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						ft = null
					}
					isMessage = true
					break
				}
			}
			if ((isMessage && (ft != null)) && ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22)) {
				ft = reflect.PtrTo($.pointerValueOrNil(ft)!)
			}
			if (ft != null) {
				if ((mi$ as MessageInfo).reflectMessageInfo.fieldTypes == null) {
					;(mi$ as MessageInfo).reflectMessageInfo.fieldTypes = $.makeMap<protoreflect.FieldNumber, any>()
				}
				$.mapSet((mi$ as MessageInfo).reflectMessageInfo.fieldTypes, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(ft)!))).Interface())
			}
		}
	}

	public async makeKnownFieldsFunc(si: structInfo): globalThis.Promise<void> {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi);
		;(mi$ as MessageInfo).reflectMessageInfo.fields = $.makeMap<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>([])
		let md = (mi$ as MessageInfo).Desc
		let fds = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.FieldNumber, reflect.StructField, reflect.StructField>(si.fieldsByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
			let isOneof = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (isOneof) {
				fs = $.assignStruct(fs, $.mapGet<protoreflect.Name, reflect.StructField, reflect.StructField>(si.oneofsByName, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0])
			}
			let fi: $.VarRef<__goscript_message_reflect_field.fieldInfo> = $.varRef(new __goscript_message_reflect_field.fieldInfo(undefined, true))
			switch ((true as boolean)) {
				case fs.Type == null:
				{
					fi.value = $.assignStruct(fi.value, __goscript_message_reflect_field.fieldInfoForMissing(fd))
					break
				}
				case isOneof:
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForOneof(fd, $.markAsStructValue($.cloneStructValue(fs)), (mi$ as MessageInfo).Exporter, $.mapGet<protoreflect.FieldNumber, reflect.Type | null, reflect.Type | null>(si.oneofWrappersByNumber, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForMap(fd, $.markAsStructValue($.cloneStructValue(fs)), (mi$ as MessageInfo).Exporter))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForList(fd, $.markAsStructValue($.cloneStructValue(fs)), (mi$ as MessageInfo).Exporter))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForWeakMessage(fd, (si.weakOffset).clone()))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForMessage(fd, $.markAsStructValue($.cloneStructValue(fs)), (mi$ as MessageInfo).Exporter))
					break
				}
				default:
				{
					fi.value = $.assignStruct(fi.value, await __goscript_message_reflect_field.fieldInfoForScalar(fd, $.markAsStructValue($.cloneStructValue(fs)), (mi$ as MessageInfo).Exporter))
					break
				}
			}
			$.mapSet((mi$ as MessageInfo).reflectMessageInfo.fields, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), fi)
		}

		;(mi$ as MessageInfo).reflectMessageInfo.oneofs = $.makeMap<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>([])
		for (let i = 0; i < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let od = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.mapSet((mi$ as MessageInfo).reflectMessageInfo.oneofs, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), await __goscript_message_reflect_field.makeOneofInfo(od, (si).clone(), (mi$ as MessageInfo).Exporter))
		}

		;(mi$ as MessageInfo).reflectMessageInfo.denseFields = $.makeSlice<__goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * 2)
		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			{
				let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ($.int((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) < $.sliceLen((mi$ as MessageInfo).reflectMessageInfo.denseFields)) {
					$.sliceElems((mi$ as MessageInfo).reflectMessageInfo.denseFields!)[$.sliceSlot((mi$ as MessageInfo).reflectMessageInfo.denseFields!, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))] = $.mapGet<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((mi$ as MessageInfo).reflectMessageInfo.fields, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
				}
			}
		}

		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); ) {
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let od = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((od != null) && !(__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					;(mi$ as MessageInfo).reflectMessageInfo.rangeInfos = $.appendOne((mi$ as MessageInfo).reflectMessageInfo.rangeInfos, $.interfaceValue($.mapGet<protoreflect.Name, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null, __goscript_message_reflect_field.oneofInfo | $.VarRef<__goscript_message_reflect_field.oneofInfo> | null>((mi$ as MessageInfo).reflectMessageInfo.oneofs, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0], "*impl.oneofInfo", /* @__PURE__ */ $.pointerType("impl.oneofInfo")), $.appendZeros.nil)
					i = i + ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				} else {
					;(mi$ as MessageInfo).reflectMessageInfo.rangeInfos = $.appendOne((mi$ as MessageInfo).reflectMessageInfo.rangeInfos, $.interfaceValue($.mapGet<protoreflect.FieldNumber, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null, __goscript_message_reflect_field.fieldInfo | $.VarRef<__goscript_message_reflect_field.fieldInfo> | null>((mi$ as MessageInfo).reflectMessageInfo.fields, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0], "*impl.fieldInfo", /* @__PURE__ */ $.pointerType("impl.fieldInfo")), $.appendZeros.nil)
					i++
				}
			}
		}

		if (($.sliceLen((mi$ as MessageInfo).reflectMessageInfo.rangeInfos) > 1) && detrand.Bool()) {
			let i = detrand.Intn($.sliceLen((mi$ as MessageInfo).reflectMessageInfo.rangeInfos) - 1)
			let __goscriptAssign0_0: any = $.arrayIndex((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!, i + 1)
			let __goscriptAssign0_1: any = $.arrayIndex((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!, i)
			$.sliceElems((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!)[$.sliceSlot((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!, i)] = __goscriptAssign0_0
			$.sliceElems((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!)[$.sliceSlot((mi$ as MessageInfo).reflectMessageInfo.rangeInfos!, i + 1)] = __goscriptAssign0_1
		}
	}

	public async makeReflectFuncs(t: reflect.Type | null, si: structInfo): globalThis.Promise<void> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeKnownFieldsFunc((si).clone()) : MessageInfo.prototype.makeKnownFieldsFunc.call(mi, (si).clone()))
		void (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeUnknownFieldsFunc(t, (si).clone()) : MessageInfo.prototype.makeUnknownFieldsFunc.call(mi, t, (si).clone()))
		void (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeExtensionFieldsFunc(t, (si).clone()) : MessageInfo.prototype.makeExtensionFieldsFunc.call(mi, t, (si).clone()))
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).makeFieldTypes((si).clone()) : MessageInfo.prototype.makeFieldTypes.call(mi, (si).clone()))
	}

	public async makeStructInfo(t: reflect.Type | null): globalThis.Promise<structInfo> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		let si = new structInfo({sizecacheOffset: __goscript_pointer_reflect.__goscript_get_invalidOffset(), weakOffset: __goscript_pointer_reflect.__goscript_get_invalidOffset(), unknownOffset: __goscript_pointer_reflect.__goscript_get_invalidOffset(), extensionOffset: __goscript_pointer_reflect.__goscript_get_invalidOffset(), fieldsByNumber: $.makeMap<protoreflect.FieldNumber, reflect.StructField>([]), oneofsByName: $.makeMap<protoreflect.Name, reflect.StructField>([]), oneofWrappersByType: $.makeMap<reflect.Type | null, protoreflect.FieldNumber>([]), oneofWrappersByNumber: $.makeMap<protoreflect.FieldNumber, reflect.Type | null>([])}, true)

		fieldLoop: for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			{
				let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				switch (f.Name) {
					case genid.SizeCache_goname:
					case genid.SizeCacheA_goname:
					{
						if ($.comparableEqual(f.Type, sizecacheType)) {
							$.assignStruct(si.sizecacheOffset, __goscript_pointer_reflect.offsetOf(f, (mi$ as MessageInfo).Exporter))
							si.sizecacheType = f.Type
						}
						break
					}
					case genid.WeakFields_goname:
					case genid.WeakFieldsA_goname:
					{
						if ($.comparableEqual(f.Type, weakFieldsType)) {
							$.assignStruct(si.weakOffset, __goscript_pointer_reflect.offsetOf(f, (mi$ as MessageInfo).Exporter))
							si.weakType = f.Type
						}
						break
					}
					case genid.UnknownFields_goname:
					case genid.UnknownFieldsA_goname:
					{
						if (($.comparableEqual(f.Type, unknownFieldsAType)) || ($.comparableEqual(f.Type, unknownFieldsBType))) {
							$.assignStruct(si.unknownOffset, __goscript_pointer_reflect.offsetOf(f, (mi$ as MessageInfo).Exporter))
							si.unknownType = f.Type
						}
						break
					}
					case genid.ExtensionFields_goname:
					case genid.ExtensionFieldsA_goname:
					case genid.ExtensionFieldsB_goname:
					{
						if ($.comparableEqual(f.Type, extensionFieldsType)) {
							$.assignStruct(si.extensionOffset, __goscript_pointer_reflect.offsetOf(f, (mi$ as MessageInfo).Exporter))
							si.extensionType = f.Type
						}
						break
					}
					default:
					{
						for (let __goscriptRangeTarget5 = strings.Split(reflect.StructTag_Get(f.Tag, "protobuf"), ","), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
							let s = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
							if (($.stringLen(s) > 0) && ($.stringEqual(strings.Trim(s, "0123456789"), ""))) {
								let [n, ] = strconv.ParseUint(s, 10, 64)
								$.mapSet(si.fieldsByNumber, $.int(n, 32), $.markAsStructValue($.cloneStructValue(f)))
								continue fieldLoop
							}
						}
						{
							let s = reflect.StructTag_Get(f.Tag, "protobuf_oneof")
							if ($.stringLen(s) > 0) {
								$.mapSet(si.oneofsByName, s, $.markAsStructValue($.cloneStructValue(f)))
								continue fieldLoop
							}
						}
						break
					}
				}
			}
		}

		// Derive a mapping of oneof wrappers to fields.
		let oneofWrappers: $.Slice<any> = (mi$ as MessageInfo).OneofWrappers
		let methods: $.Slice<reflect.Method> = $.makeSlice<reflect.Method>(0, 2, undefined, () => $.markAsStructValue(new reflect.Method()))
		{
			let [m, ok] = await $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).MethodByName("XXX_OneofFuncs")
			if (ok) {
				methods = $.appendOne(methods, $.markAsStructValue($.cloneStructValue(m)))
			}
		}
		{
			let [m, ok] = await $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).MethodByName("XXX_OneofWrappers")
			if (ok) {
				methods = $.appendOne(methods, $.markAsStructValue($.cloneStructValue(m)))
			}
		}
		for (let __goscriptRangeTarget7 = methods, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let fn = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as reflect.Method)))
			for (let __goscriptRangeTarget6 = await $.markAsStructValue($.cloneStructValue(fn.Func)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fn.Type).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))])), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let v = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as reflect.Value)))
				{
					let __goscriptTuple10: any = $.typeAssertTuple<$.Slice<any>>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
					let vs: $.Slice<any> = __goscriptTuple10[0]
					let ok = __goscriptTuple10[1]
					if (ok) {
						oneofWrappers = vs
					}
				}
			}
		}
		for (let __goscriptRangeTarget9 = oneofWrappers, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as any)
			let tf = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(v)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
			for (let __goscriptRangeTarget8 = strings.Split(reflect.StructTag_Get(f.Tag, "protobuf"), ","), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as string)
				if (($.stringLen(s) > 0) && ($.stringEqual(strings.Trim(s, "0123456789"), ""))) {
					let [n, ] = strconv.ParseUint(s, 10, 64)
					$.mapSet(si.oneofWrappersByType, tf, $.int(n, 32))
					$.mapSet(si.oneofWrappersByNumber, $.int(n, 32), tf)
					break
				}
			}
		}

		return (si).clone()
	}

	public makeUnknownFieldsFunc(t: reflect.Type | null, si: structInfo): void {
		let mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		switch ((true as boolean)) {
			case si.unknownOffset.IsValid() && ($.comparableEqual(si.unknownType, unknownFieldsAType)):
			{
				;(mi$ as MessageInfo).reflectMessageInfo.getUnknown = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.RawFields> => {
					if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
						return (null as protoreflect.RawFields)
					}
					return ($.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).Bytes()) as protoreflect.RawFields)
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")] } as $.FunctionTypeInfo));
				;(mi$ as MessageInfo).reflectMessageInfo.setUnknown = $.functionValue(async (p: __goscript_pointer_reflect.pointer, b: protoreflect.RawFields): globalThis.Promise<void> => {
					if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
						$.panic("invalid SetUnknown on nil Message")
					}
					$.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).Bytes()!.value = b
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")], results: [] } as $.FunctionTypeInfo))
				break
			}
			case si.unknownOffset.IsValid() && ($.comparableEqual(si.unknownType, unknownFieldsBType)):
			{
				;(mi$ as MessageInfo).reflectMessageInfo.getUnknown = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.RawFields> => {
					if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
						return (null as protoreflect.RawFields)
					}
					let bp = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).BytesPtr()
					if ($.pointerValue<$.VarRef<$.Slice<number>> | null>(bp) == null) {
						return (null as protoreflect.RawFields)
					}
					return ($.pointerValue<$.Slice<number>>($.pointerValue<$.VarRef<$.Slice<number>> | null>(bp)) as protoreflect.RawFields)
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")] } as $.FunctionTypeInfo));
				;(mi$ as MessageInfo).reflectMessageInfo.setUnknown = $.functionValue(async (p: __goscript_pointer_reflect.pointer, b: protoreflect.RawFields): globalThis.Promise<void> => {
					if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
						$.panic("invalid SetUnknown on nil Message")
					}
					let bp = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).BytesPtr()
					if ($.pointerValue<$.VarRef<$.Slice<number>> | null>(bp) == null) {
						bp!.value = $.varRef<$.Slice<number>>(null! as $.Slice<number>)
					}
					$.pointerValue<$.VarRef<$.Slice<number>> | null>(bp)!.value = b
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")], results: [] } as $.FunctionTypeInfo))
				break
			}
			default:
			{
				;(mi$ as MessageInfo).reflectMessageInfo.getUnknown = $.functionValue((_p0: __goscript_pointer_reflect.pointer): protoreflect.RawFields => {
					return (null as protoreflect.RawFields)
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")] } as $.FunctionTypeInfo));
				;(mi$ as MessageInfo).reflectMessageInfo.setUnknown = $.functionValue((p: __goscript_pointer_reflect.pointer, _p1: protoreflect.RawFields): void => {
					if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
						$.panic("invalid SetUnknown on nil Message")
					}
				}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")], results: [] } as $.FunctionTypeInfo))
				break
			}
		}
	}

	public async marshal(_in: piface.MarshalInput): globalThis.Promise<[piface.MarshalOutput, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let out: piface.MarshalOutput = $.anonymousStructValue({"NoUnkeyedLiterals": new pragma.NoUnkeyedLiterals(undefined, true), "Buf": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] })
		let err: $.GoError = null! as $.GoError
		let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
		{
			let __goscriptTuple11: any = $.typeAssertTuple<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageState"))
			let ms: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (ok) {
				p = $.assignStruct(p, (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(ms)))
			} else {
				p = $.assignStruct(p, __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call($.mustTypeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))))
			}
		}
		let __goscriptTuple12: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).marshalAppendPointer(_in.Buf, (p).clone(), new __goscript_encode.marshalOptions({flags: _in.Flags}, true)) : MessageInfo.prototype.marshalAppendPointer.call(mi, _in.Buf, (p).clone(), new __goscript_encode.marshalOptions({flags: _in.Flags}, true)))
		let b: $.Slice<number> = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		return [$.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Buf: b}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }), err]
	}

	public async marshalAppendPointer(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
			return [b, null]
		}
		if (flags2.ProtoLegacy && (mi$ as MessageInfo).coderMessageInfo.isMessageSet) {
			return __goscript_codec_messageset.marshalMessageSet(mi, b, (p).clone(), (opts).clone())
		}
		let err: $.GoError = null! as $.GoError

		if ((mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
			let e = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()

			let __goscriptTuple13: any = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).appendExtensions(b, e, (opts).clone()) : MessageInfo.prototype.appendExtensions.call(mi, b, e, (opts).clone()))
			b = __goscriptTuple13[0]
			err = __goscriptTuple13[1]
			if (err != null) {
				return [b, err]
			}
		}
		for (let __goscriptRangeTarget10 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.marshal == null) {
				continue
			}
			let fptr = await $.markAsStructValue($.cloneStructValue(p)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone())
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fptr)).Elem())).IsNil()) {
				continue
			}
			let __goscriptTuple14: any = await $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.marshal!(b, (fptr).clone(), f, (opts).clone())
			b = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			if (err != null) {
				return [b, err]
			}
		}
		if ((mi$ as MessageInfo).coderMessageInfo.unknownOffset.IsValid() && !(mi$ as MessageInfo).coderMessageInfo.isMessageSet) {
			{
				let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).getUnknownBytes((p).clone()) : MessageInfo.prototype.getUnknownBytes.call(mi, (p).clone()))
				if (u != null) {
					b = $.appendSlice(b, ($.pointerValue<$.Slice<number>>(u)), $.byteSliceHint)
				}
			}
		}
		return [b, null]
	}

	public async merge(_in: piface.MergeInput): globalThis.Promise<piface.MergeOutput> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let [dp, ok] = (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).getPointer(_in.Destination) : MessageInfo.prototype.getPointer.call(mi, _in.Destination))
		if (!ok) {
			return $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Flags: (0 as piface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
		}
		let __goscriptTuple15: any = (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).getPointer(_in.Source) : MessageInfo.prototype.getPointer.call(mi, _in.Source))
		let sp = __goscriptTuple15[0]
		ok = __goscriptTuple15[1]
		if (!ok) {
			return $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Flags: (0 as piface.MergeOutputFlags)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
		}
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).mergePointer((dp).clone(), (sp).clone(), new __goscript_merge.mergeOptions(undefined, true)) : MessageInfo.prototype.mergePointer.call(mi, (dp).clone(), (sp).clone(), new __goscript_merge.mergeOptions(undefined, true)))
		return $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Flags: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
	}

	public async mergePointer(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		if ($.markAsStructValue($.cloneStructValue(dst)).IsNil()) {
			$.panic(await fmt.Sprintf("invalid value: merging into nil message"))
		}
		if ($.markAsStructValue($.cloneStructValue(src)).IsNil()) {
			return
		}
		for (let __goscriptRangeTarget11 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.merge == null) {
				continue
			}
			let sfptr = await $.markAsStructValue($.cloneStructValue(src)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone())
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sfptr)).Elem())).IsNil()) {
				continue
			}
			void (__goscriptAwait = $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.merge!(await $.markAsStructValue($.cloneStructValue(dst)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone()), (sfptr).clone(), f, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
			let sext = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(src)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()
			let dext = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(dst)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()
			if ($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(dext) == null) {
				dext!.value = $.makeMap<number, __goscript_codec_extension.ExtensionField>()
			}
			for (let [num, __goscriptRangeValue2] of $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(sext)?.entries() ?? []) {
				let sx: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue2).clone())
				let xt = sx.value.Type()
				let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(xt)
				let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
				if ((xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.merge == null) {
					continue
				}
				let dx = $.varRef(($.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(dext)), num, new __goscript_codec_extension.ExtensionField(undefined, true))[0]).clone())
				let dv: protoreflect.Value = new protoreflect.Value(undefined, true)
				if ($.comparableEqual(dx.value.Type(), sx.value.Type())) {
					dv = $.assignStruct(dv, await dx.value.Value())
				}
				if (!$.markAsStructValue($.cloneStructValue(dv)).IsValid() && (xi$ as __goscript_codec_extension.extensionFieldInfo).unmarshalNeedsValue) {
					dv = $.assignStruct(dv, ((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				}
				dv = $.assignStruct(dv, ((__goscriptAwait = (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.merge!((dv).clone(), await sx.value.Value(), (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				dx.value.Set(sx.value.Type(), (dv).clone())
				$.mapSet(($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(dext)), num, (dx.value).clone())
			}
		}
		if ((mi$ as MessageInfo).coderMessageInfo.unknownOffset.IsValid()) {
			let su = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).getUnknownBytes((src).clone()) : MessageInfo.prototype.getUnknownBytes.call(mi, (src).clone()))
			if ((su != null) && ($.sliceLen($.pointerValue<$.Slice<number>>(su)) > 0)) {
				let du = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).mutableUnknownBytes((dst).clone()) : MessageInfo.prototype.mutableUnknownBytes.call(mi, (dst).clone()))
				du!.value = $.appendSlice($.pointerValue<$.Slice<number>>(du), $.pointerValue<$.Slice<number>>(su), $.byteSliceHint)
			}
		}
	}

	public async mutableUnknownBytes(p: __goscript_pointer_reflect.pointer): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		if ((mi$ as MessageInfo).coderMessageInfo.unknownPtrKind) {
			let bp = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).BytesPtr()
			if ($.pointerValue<$.VarRef<$.Slice<number>> | null>(bp) == null) {
				bp!.value = $.varRef<$.Slice<number>>(null! as $.Slice<number>)
			}
			return $.pointerValue<$.VarRef<$.Slice<number>> | null>(bp)
		} else {
			return $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.unknownOffset).clone())))).Bytes()
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async size(_in: piface.SizeInput): globalThis.Promise<piface.SizeOutput> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
		{
			let __goscriptTuple16: any = $.typeAssertTuple<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageState"))
			let ms: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = __goscriptTuple16[0]
			let ok = __goscriptTuple16[1]
			if (ok) {
				p = $.assignStruct(p, (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(ms)))
			} else {
				p = $.assignStruct(p, __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call($.mustTypeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))))
			}
		}
		let size = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).sizePointer((p).clone(), new __goscript_encode.marshalOptions({flags: _in.Flags}, true)) : MessageInfo.prototype.sizePointer.call(mi, (p).clone(), new __goscript_encode.marshalOptions({flags: _in.Flags}, true)))
		return $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Size: size}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] })
	}

	public async sizeExtensions(ext: $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let n: number = 0
		if (ext == null) {
			return 0
		}
		for (const [__rangeKey, __goscriptRangeValue3] of $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ext)?.entries() ?? []) {
			let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue3).clone())
			let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
			let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
			if ((xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.size == null) {
				continue
			}
			if (__goscript_encode.fullyLazyExtensions(opts)) {

				{
					let lb: $.Slice<number> = await x.value.lazyBuffer()
					if (lb != null) {

						n = n + ($.sliceLen(lb))
						continue
					}
				}
			}
			n = n + ((__goscriptAwait = (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.size!(await x.value.Value(), (xi$ as __goscript_codec_extension.extensionFieldInfo).tagsize, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return n
	}

	public async sizePointer(p: __goscript_pointer_reflect.pointer, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let size: number = 0
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		if ($.markAsStructValue($.cloneStructValue(p)).IsNil()) {
			return 0
		}
		if (opts.UseCachedSize() && (mi$ as MessageInfo).coderMessageInfo.sizecacheOffset.IsValid()) {
			// getMessageInfo returns the MessageInfo for any message type that
			// is generated by our implementation of protoc-gen-go (for v2 and on).
			// If it is unable to obtain a MessageInfo, it returns nil.
			{
				let __goscriptShadow0 = atomic.LoadInt32($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset).clone())))).Int32())
				if (__goscriptShadow0 > 0) {
					return $.int($.int(((__goscriptShadow0 - 1) | 0), 32))
				}
			}
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).sizePointerSlow((p).clone(), (opts).clone()) : MessageInfo.prototype.sizePointerSlow.call(mi, (p).clone(), (opts).clone()))
	}

	public async sizePointerSlow(p: __goscript_pointer_reflect.pointer, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let size: number = 0
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		if (flags2.ProtoLegacy && (mi$ as MessageInfo).coderMessageInfo.isMessageSet) {
			size = await __goscript_codec_messageset.sizeMessageSet(mi, (p).clone(), (opts).clone())
			if ((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset.IsValid()) {
				atomic.StoreInt32($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset).clone())))).Int32(), $.int(size + 1, 32))
			}
			return size
		}
		if ((mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
			let e = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()
			size = size + (await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).sizeExtensions(e, (opts).clone()) : MessageInfo.prototype.sizeExtensions.call(mi, e, (opts).clone())))
		}
		for (let __goscriptRangeTarget12 = (mi$ as MessageInfo).coderMessageInfo.orderedCoderFields, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null)
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.size == null) {
				continue
			}
			let fptr = await $.markAsStructValue($.cloneStructValue(p)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone())
			if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fptr)).Elem())).IsNil()) {
				continue
			}
			size = size + ((__goscriptAwait = $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.size!((fptr).clone(), f, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if ((mi$ as MessageInfo).coderMessageInfo.unknownOffset.IsValid()) {
			{
				let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).getUnknownBytes((p).clone()) : MessageInfo.prototype.getUnknownBytes.call(mi, (p).clone()))
				if (u != null) {
					size = size + ($.sliceLen($.pointerValue<$.Slice<number>>(u)))
				}
			}
		}
		if ((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset.IsValid()) {
			if (size > 2147483646) {

				atomic.StoreInt32($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset).clone())))).Int32(), 0)
			} else {
				// getPointer returns the pointer for a message, which should be of
				// the type of the MessageInfo. If the message is of a different type,
				// it returns ok==false.
				atomic.StoreInt32($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.sizecacheOffset).clone())))).Int32(), $.int(size + 1, 32))
			}
		}
		return size
	}

	public async unmarshal(_in: piface.UnmarshalInput): globalThis.Promise<[piface.UnmarshalOutput, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
		{
			let __goscriptTuple17: any = $.typeAssertTuple<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageState"))
			let ms: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = __goscriptTuple17[0]
			let ok = __goscriptTuple17[1]
			if (ok) {
				p = $.assignStruct(p, (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(ms)))
			} else {
				p = $.assignStruct(p, __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call($.mustTypeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(_in.Message, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper"))))
			}
		}
		let [out, err] = await MessageInfo.prototype.unmarshalPointer.call(mi, _in.Buf, (p).clone(), 0, new __goscript_decode.unmarshalOptions({flags: _in.Flags, resolver: _in.Resolver, depth: _in.Depth}, true))
		let __goscriptShadow1: piface.UnmarshalOutputFlags = 0
		if (out.initialized) {
			__goscriptShadow1 = __goscriptShadow1 | (1)
		}
		return [$.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Flags: __goscriptShadow1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }), err]
	}

	public async unmarshalExtension(b: $.Slice<number>, num: protowire.Number, wtyp: protowire.Type, exts: globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
		let err: $.GoError = null! as $.GoError
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		let x = $.varRef(($.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(exts, $.int(num, 32), new __goscript_codec_extension.ExtensionField(undefined, true))[0]).clone())
		let xt = x.value.Type()
		if (xt == null) {
			let __goscriptShadow2: $.GoError = null! as $.GoError
			let __goscriptTuple18: any = await $.pointerValue<any>(opts.resolver).FindExtensionByNumber((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), num)
			xt = __goscriptTuple18[0]
			__goscriptShadow2 = __goscriptTuple18[1]
			if (__goscriptShadow2 != null) {
				if ($.comparableEqual(__goscriptShadow2, protoregistry.NotFound)) {
					return [(out).clone(), __goscript_decode.errUnknown]
				}
				return [(out).clone(), errors.New("%v: unable to resolve extension %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((mi$ as MessageInfo).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (__goscriptShadow2 as any)]))]
			}
		}
		let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(xt)
		let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
		if ((xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.unmarshal == null) {
			return [(out).clone(), __goscript_decode.errUnknown]
		}
		if (flags2.LazyUnmarshalExtensions) {
			if (opts.IsDefault() && x.value.canLazy(xt)) {
				let [__goscriptShadow3, valid] = await __goscript_decode.skipExtension(b, xi, num, wtyp, (opts).clone())
				switch (valid) {
					case 3:
					{
						if (__goscriptShadow3.initialized) {
							x.value.appendLazyBytes(xt, xi, num, wtyp, $.goSlice(b, undefined, __goscriptShadow3.n))
							$.mapSet(exts, $.int(num, 32), (x.value).clone())
							return [(__goscriptShadow3).clone(), null]
						}
						break
					}
					case 2:
					{
						return [(__goscriptShadow3).clone(), __goscript_decode.errDecode]
						break
					}
					case 1:
					{
						break
					}
				}
			}
		}
		let ival = await x.value.Value()
		if (!$.markAsStructValue($.cloneStructValue(ival)).IsValid() && (xi$ as __goscript_codec_extension.extensionFieldInfo).unmarshalNeedsValue) {

			ival = $.assignStruct(ival, ((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
		}
		let __goscriptTuple19: any = await (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.unmarshal!(b, (ival).clone(), num, wtyp, (opts).clone())
		let v = __goscriptTuple19[0]
		out = $.assignStruct(out, __goscriptTuple19[1])
		err = __goscriptTuple19[2]
		if (err != null) {
			return [(out).clone(), err]
		}
		if ((xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.isInit == null) {
			out.initialized = true
		}
		x.value.Set(xt, (v).clone())
		$.mapSet(exts, $.int(num, 32), (x.value).clone())
		return [(out).clone(), null]
	}

	public async unmarshalPointer(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, groupTag: protowire.Number, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
		let err: $.GoError = null! as $.GoError
		const mi$: MessageInfo = mi == null ? $.pointerTarget<MessageInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<MessageInfo>(mi)
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		opts.depth--
		if (opts.depth < 0) {
			return [(out).clone(), __goscript_decode.errRecursionDepth]
		}
		if (flags2.ProtoLegacy && (mi$ as MessageInfo).coderMessageInfo.isMessageSet) {
			return __goscript_codec_messageset.unmarshalMessageSet(mi, b, (p).clone(), (opts).clone())
		}
		let initialized = true
		let requiredMask: bigint = 0n
		let exts: $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null = null! as $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null
		let start = $.sliceLen(b)
		while ($.sliceLen(b) > 0) {

			let tag: bigint = 0n
			if ($.arrayIndex(b!, 0) < 0x80) {
				tag = $.uint64($.arrayIndex(b!, 0))
				b = $.goSlice(b, 1, undefined)
			} else {
				if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
					tag = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
					b = $.goSlice(b, 2, undefined)
				} else {
					let n: number = 0
					let __goscriptTuple20: any = protowire.ConsumeVarint(b)
					tag = __goscriptTuple20[0]
					n = __goscriptTuple20[1]
					if (n < 0) {
						return [(out).clone(), __goscript_decode.errDecode]
					}
					b = $.goSlice(b, n, undefined)
				}
			}
			let num: protowire.Number = 0
			{
				let n = $.uint64Shr(tag, 3n)
				if ((n < 1n) || (n > 536870911n)) {
					return [(out).clone(), __goscript_decode.errDecode]
				} else {
					num = $.int(n, 32)
				}
			}
			let wtyp = $.int($.uint64And(tag, 7n), 8)

			if (wtyp == 4) {
				if (num != groupTag) {
					return [(out).clone(), __goscript_decode.errDecode]
				}
				groupTag = 0
				break
			}

			let f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = null! as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null
			if ($.int(num) < $.sliceLen((mi$ as MessageInfo).coderMessageInfo.denseCoderFields)) {
				f = $.arrayIndex((mi$ as MessageInfo).coderMessageInfo.denseCoderFields!, num)
			} else {
				f = $.mapGet<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>((mi$ as MessageInfo).coderMessageInfo.coderFields, num, null)[0]
			}
			let n: number = 0
			let __goscriptShadow4: $.GoError = __goscript_decode.errUnknown
			switch ((true as boolean)) {
				case f != null:
				{
					if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.unmarshal == null) {
						break
					}
					let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
					let __goscriptTuple21: any = await $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.unmarshal!(b, await $.markAsStructValue($.cloneStructValue(p)).Apply(($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).offset).clone()), wtyp, f, (opts).clone())
					o = $.assignStruct(o, __goscriptTuple21[0])
					__goscriptShadow4 = __goscriptTuple21[1]
					n = o.n
					if (__goscriptShadow4 != null) {
						break
					}
					requiredMask = $.uint64Or(requiredMask, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).validation.requiredBit)
					if (($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).funcs.isInit != null) && !o.initialized) {
						initialized = false
					}
					break
				}
				default:
				{
					if ((exts == null) && (mi$ as MessageInfo).coderMessageInfo.extensionOffset.IsValid()) {
						exts = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(((mi$ as MessageInfo).coderMessageInfo.extensionOffset).clone())))).Extensions()
						if ($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(exts) == null) {
							exts!.value = $.makeMap<number, __goscript_codec_extension.ExtensionField>()
						}
					}
					if (exts == null) {
						break
					}
					let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
					let __goscriptTuple22: any = await MessageInfo.prototype.unmarshalExtension.call(mi, b, num, wtyp, $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(exts), (opts).clone())
					o = $.assignStruct(o, __goscriptTuple22[0])
					__goscriptShadow4 = __goscriptTuple22[1]
					if (__goscriptShadow4 != null) {
						break
					}
					n = o.n
					if (!o.initialized) {
						initialized = false
					}
					break
				}
			}
			if (__goscriptShadow4 != null) {
				if (!$.comparableEqual(__goscriptShadow4, __goscript_decode.errUnknown)) {
					return [(out).clone(), __goscriptShadow4]
				}
				n = protowire.ConsumeFieldValue(num, wtyp, b)
				if (n < 0) {
					return [(out).clone(), __goscript_decode.errDecode]
				}
				if (!opts.DiscardUnknown() && (mi$ as MessageInfo).coderMessageInfo.unknownOffset.IsValid()) {
					let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).mutableUnknownBytes((p).clone()) : MessageInfo.prototype.mutableUnknownBytes.call(mi, (p).clone()))
					u!.value = protowire.AppendTag($.pointerValue<$.Slice<number>>(u), num, wtyp)
					u!.value = $.appendSlice($.pointerValue<$.Slice<number>>(u), $.goSlice(b, undefined, n), $.byteSliceHint)
				}
			}
			b = $.goSlice(b, n, undefined)
		}
		if (groupTag != 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		if (((mi$ as MessageInfo).coderMessageInfo.numRequiredFields > 0) && (bits.OnesCount64(requiredMask) != $.int((mi$ as MessageInfo).coderMessageInfo.numRequiredFields))) {
			initialized = false
		}
		if (initialized) {
			out.initialized = true
		}
		out.n = start - $.sliceLen(b)
		return [(out).clone(), null]
	}

	public async validate(b: $.Slice<number>, groupTag: protowire.Number, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, __goscript_validate.ValidationStatus]> {
		const mi: MessageInfo | $.VarRef<MessageInfo> | null = this;
		let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
		let result: __goscript_validate.ValidationStatus = 0
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as MessageInfo).init() : MessageInfo.prototype.init.call(mi))
		class validationState {
			public get typ(): __goscript_validate.validationType {
				return this._fields.typ
			}

			public set typ(value: __goscript_validate.validationType) {
				this._fields.typ = value
			}

			public get keyType(): __goscript_validate.validationType {
				return this._fields.keyType
			}

			public set keyType(value: __goscript_validate.validationType) {
				this._fields.keyType = value
			}

			public get valType(): __goscript_validate.validationType {
				return this._fields.valType
			}

			public set valType(value: __goscript_validate.validationType) {
				this._fields.valType = value
			}

			public get endGroup(): protowire.Number {
				return this._fields.endGroup
			}

			public set endGroup(value: protowire.Number) {
				this._fields.endGroup = value
			}

			public get mi(): MessageInfo | $.VarRef<MessageInfo> | null {
				return this._fields.mi
			}

			public set mi(value: MessageInfo | $.VarRef<MessageInfo> | null) {
				this._fields.mi = value
			}

			public get tail(): $.Slice<number> {
				return this._fields.tail
			}

			public set tail(value: $.Slice<number>) {
				this._fields.tail = value
			}

			public get requiredMask(): bigint {
				return this._fields.requiredMask
			}

			public set requiredMask(value: bigint) {
				this._fields.requiredMask = value
			}

			public _fields: {
				typ: __goscript_validate.validationType
				keyType: __goscript_validate.validationType
				valType: __goscript_validate.validationType
				endGroup: protowire.Number
				mi: MessageInfo | $.VarRef<MessageInfo> | null
				tail: $.Slice<number>
				requiredMask: bigint
			}

			constructor(init?: Partial<{typ?: __goscript_validate.validationType, keyType?: __goscript_validate.validationType, valType?: __goscript_validate.validationType, endGroup?: protowire.Number, mi?: MessageInfo | $.VarRef<MessageInfo> | null, tail?: $.Slice<number>, requiredMask?: bigint}>, __goscriptValue?: boolean) {
				this._fields = {
					typ: init?.typ ?? (0 as __goscript_validate.validationType),
					keyType: init?.keyType ?? (0 as __goscript_validate.validationType),
					valType: init?.valType ?? (0 as __goscript_validate.validationType),
					endGroup: init?.endGroup ?? (0 as protowire.Number),
					mi: init?.mi ?? (null! as MessageInfo | $.VarRef<MessageInfo> | null),
					tail: init?.tail ?? (null! as $.Slice<number>),
					requiredMask: init?.requiredMask ?? (0n as bigint)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): validationState {
				return new validationState(this, true)
			}

			public __goscriptAssign(source: validationState): void {
				const target = this._fields
				const values = source._fields
				target.typ = values.typ
				target.keyType = values.keyType
				target.valType = values.valType
				target.endGroup = values.endGroup
				target.mi = values.mi
				target.tail = values.tail
				target.requiredMask = values.requiredMask
			}

			static __typeInfo = $.registerStructType(
				"impl.validationState",
				() => new validationState(),
				() => [],
				validationState,
				() => [{ name: "typ", key: "typ", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "keyType", key: "keyType", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "valType", key: "valType", type: /* @__PURE__ */ $.basicType("uint8", "impl.validationType") }, { name: "endGroup", key: "endGroup", type: /* @__PURE__ */ $.basicType("int32", "protowire.Number") }, { name: "mi", key: "mi", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }, { name: "tail", key: "tail", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "requiredMask", key: "requiredMask", type: /* @__PURE__ */ $.basicType("uint64") }]
			)
		}

		let states: $.Slice<validationState> = $.makeSlice<validationState>(0, 16, undefined, () => $.markAsStructValue(new validationState()))
		states = $.appendOne(states, $.markAsStructValue(new validationState({typ: 1, mi: mi})))
		if (groupTag > 0) {
			$.arrayIndex(states!, 0).typ = 2
			$.arrayIndex(states!, 0).endGroup = groupTag
		}
		let initialized = true
		let start = $.sliceLen(b)
		State: while ($.sliceLen(states) > 0) {
			let st: validationState | $.VarRef<validationState> | null = $.indexRef(states!, $.sliceLen(states) - 1)
			PopState: {
				while ($.sliceLen(b) > 0) {

					let tag: bigint = 0n
					if ($.arrayIndex(b!, 0) < 0x80) {
						tag = $.uint64($.arrayIndex(b!, 0))
						b = $.goSlice(b, 1, undefined)
					} else {
						if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
							tag = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
							b = $.goSlice(b, 2, undefined)
						} else {
							let n: number = 0
							let __goscriptTuple23: any = protowire.ConsumeVarint(b)
							tag = __goscriptTuple23[0]
							n = __goscriptTuple23[1]
							if (n < 0) {
								return [(out).clone(), 2]
							}
							b = $.goSlice(b, n, undefined)
						}
					}
					let num: protowire.Number = 0
					{
						let n = $.uint64Shr(tag, 3n)
						if ((n < 1n) || (n > 536870911n)) {
							return [(out).clone(), 2]
						} else {
							num = $.int(n, 32)
						}
					}
					let wtyp = $.int($.uint64And(tag, 7n), 8)

					if (wtyp == 4) {
						if ($.pointerValue<validationState>(st).endGroup == num) {
							break PopState
						}
						return [(out).clone(), 2]
					}
					let vi: __goscript_validate.validationInfo = new __goscript_validate.validationInfo(undefined, true)
					switch ((true as boolean)) {
						case $.pointerValue<validationState>(st).typ == 3:
						{
							switch (num) {
								case genid.MapEntry_Key_field_number:
								{
									vi.typ = $.pointerValue<validationState>(st).keyType
									break
								}
								case genid.MapEntry_Value_field_number:
								{
									vi.typ = $.pointerValue<validationState>(st).valType
									vi.mi = $.pointerValue<validationState>(st).mi
									vi.requiredBit = 1n
									break
								}
							}
							break
						}
						case flags2.ProtoLegacy && $.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.isMessageSet:
						{
							switch (num) {
								case messageset.FieldItem:
								{
									vi.typ = 12
									break
								}
							}
							break
						}
						default:
						{
							let f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null = null! as __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null
							if ($.int(num) < $.sliceLen($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.denseCoderFields)) {
								f = $.arrayIndex($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.denseCoderFields!, num)
							} else {
								f = $.mapGet<protowire.Number, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null>($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.coderFields, num, null)[0]
							}
							if (f != null) {
								vi = $.assignStruct(vi, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).validation)
								if ((vi.typ == 1) && (vi.mi == null)) {

									let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).Desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									if ((fd == null) || !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										break
									}
									let messageName = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									let [messageType, err] = protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, messageName)
									{
										let __goscriptSwitch0 = err
										switch ((true as boolean)) {
											case $.comparableEqual(__goscriptSwitch0, null):
											{
												let __goscriptTuple24: any = $.typeAssertTuple<MessageInfo | $.VarRef<MessageInfo> | null>(messageType, /* @__PURE__ */ $.pointerType("impl.MessageInfo"))
												vi.mi = __goscriptTuple24[0]
												break
											}
											case $.comparableEqual(__goscriptSwitch0, protoregistry.NotFound):
											{
												vi.typ = 10
												break
											}
											default:
											{
												return [(out).clone(), 1]
												break
											}
										}
									}
								}
								break
							}

							let [xt, err] = await $.pointerValue<any>(opts.resolver).FindExtensionByNumber((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), num)
							if ((err != null) && (!$.comparableEqual(err, protoregistry.NotFound))) {
								return [(out).clone(), 1]
							}
							if (err == null) {
								vi = $.assignStruct(vi, $.pointerValue<__goscript_codec_extension.extensionFieldInfo>(await __goscript_codec_extension.getExtensionFieldInfo(xt)).validation)
							}
							break
						}
					}
					if (vi.requiredBit != 0n) {

						let ok = false
						switch (vi.typ) {
							case 7:
							{
								ok = wtyp == 0
								break
							}
							case 8:
							{
								ok = wtyp == 5
								break
							}
							case 9:
							{
								ok = wtyp == 1
								break
							}
							case 10:
							case 11:
							case 1:
							{
								ok = wtyp == 2
								break
							}
							case 2:
							{
								ok = wtyp == 3
								break
							}
						}
						if (ok) {
							$.pointerValue<validationState>(st).requiredMask = $.uint64Or($.pointerValue<validationState>(st).requiredMask, vi.requiredBit)
						}
					}

					switch (wtyp) {
						case protowire.VarintType:
						{
							if ($.sliceLen(b) >= 10) {
								switch ((true as boolean)) {
									case $.arrayIndex(b!, 0) < 0x80:
									{
										b = $.goSlice(b, 1, undefined)
										break
									}
									case $.arrayIndex(b!, 1) < 0x80:
									{
										b = $.goSlice(b, 2, undefined)
										break
									}
									case $.arrayIndex(b!, 2) < 0x80:
									{
										b = $.goSlice(b, 3, undefined)
										break
									}
									case $.arrayIndex(b!, 3) < 0x80:
									{
										b = $.goSlice(b, 4, undefined)
										break
									}
									case $.arrayIndex(b!, 4) < 0x80:
									{
										b = $.goSlice(b, 5, undefined)
										break
									}
									case $.arrayIndex(b!, 5) < 0x80:
									{
										b = $.goSlice(b, 6, undefined)
										break
									}
									case $.arrayIndex(b!, 6) < 0x80:
									{
										b = $.goSlice(b, 7, undefined)
										break
									}
									case $.arrayIndex(b!, 7) < 0x80:
									{
										b = $.goSlice(b, 8, undefined)
										break
									}
									case $.arrayIndex(b!, 8) < 0x80:
									{
										b = $.goSlice(b, 9, undefined)
										break
									}
									case ($.arrayIndex(b!, 9) < 0x80) && ($.arrayIndex(b!, 9) < 2):
									{
										b = $.goSlice(b, 10, undefined)
										break
									}
									default:
									{
										return [(out).clone(), 2]
										break
									}
								}
							} else {
								switch ((true as boolean)) {
									case ($.sliceLen(b) > 0) && ($.arrayIndex(b!, 0) < 0x80):
									{
										b = $.goSlice(b, 1, undefined)
										break
									}
									case ($.sliceLen(b) > 1) && ($.arrayIndex(b!, 1) < 0x80):
									{
										b = $.goSlice(b, 2, undefined)
										break
									}
									case ($.sliceLen(b) > 2) && ($.arrayIndex(b!, 2) < 0x80):
									{
										b = $.goSlice(b, 3, undefined)
										break
									}
									case ($.sliceLen(b) > 3) && ($.arrayIndex(b!, 3) < 0x80):
									{
										b = $.goSlice(b, 4, undefined)
										break
									}
									case ($.sliceLen(b) > 4) && ($.arrayIndex(b!, 4) < 0x80):
									{
										b = $.goSlice(b, 5, undefined)
										break
									}
									case ($.sliceLen(b) > 5) && ($.arrayIndex(b!, 5) < 0x80):
									{
										b = $.goSlice(b, 6, undefined)
										break
									}
									case ($.sliceLen(b) > 6) && ($.arrayIndex(b!, 6) < 0x80):
									{
										b = $.goSlice(b, 7, undefined)
										break
									}
									case ($.sliceLen(b) > 7) && ($.arrayIndex(b!, 7) < 0x80):
									{
										b = $.goSlice(b, 8, undefined)
										break
									}
									case ($.sliceLen(b) > 8) && ($.arrayIndex(b!, 8) < 0x80):
									{
										b = $.goSlice(b, 9, undefined)
										break
									}
									case ($.sliceLen(b) > 9) && ($.arrayIndex(b!, 9) < 2):
									{
										b = $.goSlice(b, 10, undefined)
										break
									}
									default:
									{
										return [(out).clone(), 2]
										break
									}
								}
							}
							continue State
							break
						}
						case protowire.BytesType:
						{
							let size: bigint = 0n
							if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
								size = $.uint64($.arrayIndex(b!, 0))
								b = $.goSlice(b, 1, undefined)
							} else {
								if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
									size = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
									b = $.goSlice(b, 2, undefined)
								} else {
									let n: number = 0
									let __goscriptTuple25: any = protowire.ConsumeVarint(b)
									size = __goscriptTuple25[0]
									n = __goscriptTuple25[1]
									if (n < 0) {
										return [(out).clone(), 2]
									}
									b = $.goSlice(b, n, undefined)
								}
							}
							if (size > $.uint64($.sliceLen(b))) {
								return [(out).clone(), 2]
							}
							let v: $.Slice<number> = $.goSlice(b, undefined, globalThis.Number(size))
							b = $.goSlice(b, globalThis.Number(size), undefined)
							switch (vi.typ) {
								case 1:
								{
									if (vi.mi == null) {
										return [(out).clone(), 1]
									}
									await MessageInfo.prototype.init.call(vi.mi)
								}
								case 3:
								{
									if (vi.mi != null) {
										await MessageInfo.prototype.init.call(vi.mi)
									}
									states = $.appendOne(states, $.markAsStructValue(new validationState({typ: vi.typ, keyType: vi.keyType, valType: vi.valType, mi: vi.mi, tail: b})))
									b = v
									continue State
									break
								}
								case 4:
								{
									while ($.sliceLen(v) > 0) {
										let [, n] = protowire.ConsumeVarint(v)
										if (n < 0) {
											return [(out).clone(), 2]
										}
										v = $.goSlice(v, n, undefined)
									}
									break
								}
								case 5:
								{
									if (($.sliceLen(v) % 4) != 0) {
										return [(out).clone(), 2]
									}
									break
								}
								case 6:
								{
									if (($.sliceLen(v) % 8) != 0) {
										return [(out).clone(), 2]
									}
									break
								}
								case 11:
								{
									if (!utf8.Valid(v)) {
										return [(out).clone(), 2]
									}
									break
								}
							}
							break
						}
						case protowire.Fixed32Type:
						{
							if ($.sliceLen(b) < 4) {
								return [(out).clone(), 2]
							}
							b = $.goSlice(b, 4, undefined)
							break
						}
						case protowire.Fixed64Type:
						{
							if ($.sliceLen(b) < 8) {
								return [(out).clone(), 2]
							}
							b = $.goSlice(b, 8, undefined)
							break
						}
						case protowire.StartGroupType:
						{
							switch ((true as boolean)) {
								case vi.typ == 2:
								{
									if (vi.mi == null) {
										return [(out).clone(), 1]
									}
									await MessageInfo.prototype.init.call(vi.mi)
									states = $.appendOne(states, $.markAsStructValue(new validationState({typ: 2, mi: vi.mi, endGroup: num})))
									continue State
									break
								}
								case flags2.ProtoLegacy && (vi.typ == 12):
								{
									let __goscriptTuple26: any = messageset.ConsumeFieldValue(b, false)
									let typeid = __goscriptTuple26[0]
									let v: $.Slice<number> = __goscriptTuple26[1]
									let n = __goscriptTuple26[2]
									let err = __goscriptTuple26[3]
									if (err != null) {
										return [(out).clone(), 2]
									}
									let __goscriptTuple27: any = await $.pointerValue<any>(opts.resolver).FindExtensionByNumber((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).Desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), typeid)
									let xt = __goscriptTuple27[0]
									err = __goscriptTuple27[1]
									switch ((true as boolean)) {
										case $.comparableEqual(err, protoregistry.NotFound):
										{
											b = $.goSlice(b, n, undefined)
											break
										}
										case err != null:
										{
											return [(out).clone(), 1]
											break
										}
										default:
										{
											let xvi = ($.pointerValue<__goscript_codec_extension.extensionFieldInfo>(await __goscript_codec_extension.getExtensionFieldInfo(xt)).validation).clone()
											if (xvi.mi != null) {
												await MessageInfo.prototype.init.call(xvi.mi)
											}
											states = $.appendOne(states, $.markAsStructValue(new validationState({typ: xvi.typ, mi: xvi.mi, tail: $.goSlice(b, n, undefined)})))
											b = v
											continue State
											break
										}
									}
									break
								}
								default:
								{
									let n = protowire.ConsumeFieldValue(num, wtyp, b)
									if (n < 0) {
										return [(out).clone(), 2]
									}
									b = $.goSlice(b, n, undefined)
									break
								}
							}
							break
						}
						default:
						{
							return [(out).clone(), 2]
							break
						}
					}
				}
				if ($.pointerValue<validationState>(st).endGroup != 0) {
					return [(out).clone(), 2]
				}
				if ($.sliceLen(b) != 0) {
					return [(out).clone(), 2]
				}
				b = $.pointerValue<validationState>(st).tail
			}
			let numRequiredFields = 0
			switch ($.pointerValue<validationState>(st).typ) {
				case 1:
				case 2:
				{
					numRequiredFields = $.int($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.numRequiredFields)
					break
				}
				case 3:
				{
					if (($.pointerValue<validationState>(st).mi != null) && ($.pointerValue<MessageInfo>($.pointerValue<validationState>(st).mi).coderMessageInfo.numRequiredFields > 0)) {
						numRequiredFields = 1
					}
					break
				}
			}

			if ((numRequiredFields > 0) && (bits.OnesCount64($.pointerValue<validationState>(st).requiredMask) != numRequiredFields)) {
				initialized = false
			}
			states = $.goSlice(states, undefined, $.sliceLen(states) - 1)
		}
		out.n = start - $.sliceLen(b)
		if (initialized) {
			out.initialized = true
		}
		return [(out).clone(), 3]
	}

	static __typeInfo = $.registerStructType(
		"impl.MessageInfo",
		() => new MessageInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }], pointerReceiver: true }, { name: "Enum", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumType" }], pointerReceiver: true }, { name: "Message", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.MessageType" }], pointerReceiver: true }, { name: "MessageOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "appendExtensions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "checkField", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.fieldInfo") }, { type: "protoreflect.ExtensionTypeDescriptor" }], pointerReceiver: true }, { name: "checkInitialized", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] } }, { type: "error" }], pointerReceiver: true }, { name: "checkInitializedPointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "getPointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "impl.pointer" }, { type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "getUnknownBytes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))) }], pointerReceiver: true }, { name: "init", args: [], returns: [], pointerReceiver: true }, { name: "initOnce", args: [], returns: [], pointerReceiver: true }, { name: "initOneofFieldCoders", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "isInitExtensions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "makeCoderMethods", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "makeExtensionFieldsFunc", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "makeFieldTypes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "makeKnownFieldsFunc", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "makeReflectFuncs", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "makeStructInfo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "impl.structInfo" }], pointerReceiver: true }, { name: "makeUnknownFieldsFunc", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] } }, { type: "error" }], pointerReceiver: true }, { name: "marshalAppendPointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] } }], pointerReceiver: true }, { name: "mergePointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "mutableUnknownBytes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))) }], pointerReceiver: true }, { name: "size", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] } }], pointerReceiver: true }, { name: "sizeExtensions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "sizePointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "sizePointerSlow", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] } }, { type: "error" }], pointerReceiver: true }, { name: "unmarshalExtension", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "impl.unmarshalOutput" }, { type: "error" }], pointerReceiver: true }, { name: "unmarshalPointer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "impl.unmarshalOutput" }, { type: "error" }], pointerReceiver: true }, { name: "validate", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "impl.unmarshalOutput" }, { type: /* @__PURE__ */ $.basicType("int", "impl.ValidationStatus") }], pointerReceiver: true }],
		MessageInfo,
		() => [{ name: "GoReflectType", key: "GoReflectType", type: "reflect.Type" }, { name: "Desc", key: "Desc", type: "protoreflect.MessageDescriptor" }, { name: "Exporter", key: "Exporter", type: ({ kind: $.TypeKind.Function, name: "impl.exporter", params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo) }, { name: "OneofWrappers", key: "OneofWrappers", type: /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }) }, { name: "initMu", key: "initMu", type: "sync.Mutex" }, { name: "initDone", key: "initDone", type: /* @__PURE__ */ $.basicType("uint32") }, { name: "reflectMessageInfo", key: "reflectMessageInfo", type: "impl.reflectMessageInfo", anonymous: true }, { name: "coderMessageInfo", key: "coderMessageInfo", type: "impl.coderMessageInfo", anonymous: true }]
	)
}

export class structInfo {
	public get sizecacheOffset(): __goscript_pointer_reflect.offset {
		return this._fields.sizecacheOffset
	}

	public set sizecacheOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.sizecacheOffset = value
	}

	public get sizecacheType(): reflect.Type | null {
		return this._fields.sizecacheType
	}

	public set sizecacheType(value: reflect.Type | null) {
		this._fields.sizecacheType = value
	}

	public get weakOffset(): __goscript_pointer_reflect.offset {
		return this._fields.weakOffset
	}

	public set weakOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.weakOffset = value
	}

	public get weakType(): reflect.Type | null {
		return this._fields.weakType
	}

	public set weakType(value: reflect.Type | null) {
		this._fields.weakType = value
	}

	public get unknownOffset(): __goscript_pointer_reflect.offset {
		return this._fields.unknownOffset
	}

	public set unknownOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.unknownOffset = value
	}

	public get unknownType(): reflect.Type | null {
		return this._fields.unknownType
	}

	public set unknownType(value: reflect.Type | null) {
		this._fields.unknownType = value
	}

	public get extensionOffset(): __goscript_pointer_reflect.offset {
		return this._fields.extensionOffset
	}

	public set extensionOffset(value: __goscript_pointer_reflect.offset) {
		this._fields.extensionOffset = value
	}

	public get extensionType(): reflect.Type | null {
		return this._fields.extensionType
	}

	public set extensionType(value: reflect.Type | null) {
		this._fields.extensionType = value
	}

	public get fieldsByNumber(): globalThis.Map<protoreflect.FieldNumber, reflect.StructField> | null {
		return this._fields.fieldsByNumber
	}

	public set fieldsByNumber(value: globalThis.Map<protoreflect.FieldNumber, reflect.StructField> | null) {
		this._fields.fieldsByNumber = value
	}

	public get oneofsByName(): globalThis.Map<protoreflect.Name, reflect.StructField> | null {
		return this._fields.oneofsByName
	}

	public set oneofsByName(value: globalThis.Map<protoreflect.Name, reflect.StructField> | null) {
		this._fields.oneofsByName = value
	}

	public get oneofWrappersByType(): globalThis.Map<reflect.Type | null, protoreflect.FieldNumber> | null {
		return this._fields.oneofWrappersByType
	}

	public set oneofWrappersByType(value: globalThis.Map<reflect.Type | null, protoreflect.FieldNumber> | null) {
		this._fields.oneofWrappersByType = value
	}

	public get oneofWrappersByNumber(): globalThis.Map<protoreflect.FieldNumber, reflect.Type | null> | null {
		return this._fields.oneofWrappersByNumber
	}

	public set oneofWrappersByNumber(value: globalThis.Map<protoreflect.FieldNumber, reflect.Type | null> | null) {
		this._fields.oneofWrappersByNumber = value
	}

	public _fields: {
		sizecacheOffset: __goscript_pointer_reflect.offset
		sizecacheType: reflect.Type | null
		weakOffset: __goscript_pointer_reflect.offset
		weakType: reflect.Type | null
		unknownOffset: __goscript_pointer_reflect.offset
		unknownType: reflect.Type | null
		extensionOffset: __goscript_pointer_reflect.offset
		extensionType: reflect.Type | null
		fieldsByNumber: globalThis.Map<protoreflect.FieldNumber, reflect.StructField> | null
		oneofsByName: globalThis.Map<protoreflect.Name, reflect.StructField> | null
		oneofWrappersByType: globalThis.Map<reflect.Type | null, protoreflect.FieldNumber> | null
		oneofWrappersByNumber: globalThis.Map<protoreflect.FieldNumber, reflect.Type | null> | null
	}

	constructor(init?: Partial<{sizecacheOffset?: __goscript_pointer_reflect.offset, sizecacheType?: reflect.Type | null, weakOffset?: __goscript_pointer_reflect.offset, weakType?: reflect.Type | null, unknownOffset?: __goscript_pointer_reflect.offset, unknownType?: reflect.Type | null, extensionOffset?: __goscript_pointer_reflect.offset, extensionType?: reflect.Type | null, fieldsByNumber?: globalThis.Map<protoreflect.FieldNumber, reflect.StructField> | null, oneofsByName?: globalThis.Map<protoreflect.Name, reflect.StructField> | null, oneofWrappersByType?: globalThis.Map<reflect.Type | null, protoreflect.FieldNumber> | null, oneofWrappersByNumber?: globalThis.Map<protoreflect.FieldNumber, reflect.Type | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sizecacheOffset: init?.sizecacheOffset ? init.sizecacheOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			sizecacheType: init?.sizecacheType ?? (null! as reflect.Type | null),
			weakOffset: init?.weakOffset ? init.weakOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			weakType: init?.weakType ?? (null! as reflect.Type | null),
			unknownOffset: init?.unknownOffset ? init.unknownOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			unknownType: init?.unknownType ?? (null! as reflect.Type | null),
			extensionOffset: init?.extensionOffset ? init.extensionOffset.clone() : new __goscript_pointer_reflect.offset(undefined, true),
			extensionType: init?.extensionType ?? (null! as reflect.Type | null),
			fieldsByNumber: init?.fieldsByNumber ?? (null! as globalThis.Map<protoreflect.FieldNumber, reflect.StructField> | null),
			oneofsByName: init?.oneofsByName ?? (null! as globalThis.Map<protoreflect.Name, reflect.StructField> | null),
			oneofWrappersByType: init?.oneofWrappersByType ?? (null! as globalThis.Map<reflect.Type | null, protoreflect.FieldNumber> | null),
			oneofWrappersByNumber: init?.oneofWrappersByNumber ?? (null! as globalThis.Map<protoreflect.FieldNumber, reflect.Type | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): structInfo {
		return new structInfo(this, true)
	}

	public __goscriptAssign(source: structInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.sizecacheOffset, values.sizecacheOffset)
		target.sizecacheType = $.assignFieldValue(target.sizecacheType, values.sizecacheType, "reflect.Type")
		$.assignStruct(target.weakOffset, values.weakOffset)
		target.weakType = $.assignFieldValue(target.weakType, values.weakType, "reflect.Type")
		$.assignStruct(target.unknownOffset, values.unknownOffset)
		target.unknownType = $.assignFieldValue(target.unknownType, values.unknownType, "reflect.Type")
		$.assignStruct(target.extensionOffset, values.extensionOffset)
		target.extensionType = $.assignFieldValue(target.extensionType, values.extensionType, "reflect.Type")
		target.fieldsByNumber = values.fieldsByNumber
		target.oneofsByName = values.oneofsByName
		target.oneofWrappersByType = values.oneofWrappersByType
		target.oneofWrappersByNumber = values.oneofWrappersByNumber
	}

	static __typeInfo = $.registerStructType(
		"impl.structInfo",
		() => new structInfo(),
		() => [],
		structInfo,
		() => [{ name: "sizecacheOffset", key: "sizecacheOffset", type: "impl.offset" }, { name: "sizecacheType", key: "sizecacheType", type: "reflect.Type" }, { name: "weakOffset", key: "weakOffset", type: "impl.offset" }, { name: "weakType", key: "weakType", type: "reflect.Type" }, { name: "unknownOffset", key: "unknownOffset", type: "impl.offset" }, { name: "unknownType", key: "unknownType", type: "reflect.Type" }, { name: "extensionOffset", key: "extensionOffset", type: "impl.offset" }, { name: "extensionType", key: "extensionType", type: "reflect.Type" }, { name: "fieldsByNumber", key: "fieldsByNumber", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), "reflect.StructField") }, { name: "oneofsByName", key: "oneofsByName", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), "reflect.StructField") }, { name: "oneofWrappersByType", key: "oneofWrappersByType", type: /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.basicType("int32", "protowire.Number")) }, { name: "oneofWrappersByNumber", key: "oneofWrappersByNumber", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), "reflect.Type") }]
	)
}

export class mapEntryType {
	public get desc(): protoreflect.MessageDescriptor | null {
		return this._fields.desc
	}

	public set desc(value: protoreflect.MessageDescriptor | null) {
		this._fields.desc = value
	}

	public get valType(): any {
		return this._fields.valType
	}

	public set valType(value: any) {
		this._fields.valType = value
	}

	public _fields: {
		desc: protoreflect.MessageDescriptor | null
		valType: any
	}

	constructor(init?: Partial<{desc?: protoreflect.MessageDescriptor | null, valType?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as protoreflect.MessageDescriptor | null),
			valType: init?.valType ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapEntryType {
		return new mapEntryType(this, true)
	}

	public __goscriptAssign(source: mapEntryType): void {
		const target = this._fields
		const values = source._fields
		target.desc = $.assignFieldValue(target.desc, values.desc, "protoreflect.MessageDescriptor")
		target.valType = $.assignFieldValue(target.valType, values.valType, { kind: $.TypeKind.Interface, methods: [] })
	}

	public Descriptor(): protoreflect.MessageDescriptor | null {
		const mt = this;
		return mt.desc
	}

	public async Enum(i: number): globalThis.Promise<protoreflect.EnumType | null> {
		const mt = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(mt.desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
			return null
		}
		return $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).EnumTypeOf(mt.valType)
	}

	public async Message(i: number): globalThis.Promise<protoreflect.MessageType | null> {
		const mt = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(mt.desc).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
			return null
		}
		return $.markAsStructValue($.cloneStructValue(new __goscript_api_export.Export(undefined, true))).MessageTypeOf(mt.valType)
	}

	public New(): protoreflect.Message | null {
		const mt = this;
		return null
	}

	public Zero(): protoreflect.Message | null {
		const mt = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"impl.mapEntryType",
		() => new mapEntryType(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: "protoreflect.MessageDescriptor" }] }, { name: "Enum", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumType" }] }, { name: "Message", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.MessageType" }] }, { name: "New", args: [], returns: [{ type: "protoreflect.Message" }] }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Message" }] }],
		mapEntryType,
		() => [{ name: "desc", key: "desc", type: "protoreflect.MessageDescriptor" }, { name: "valType", key: "valType", type: { kind: $.TypeKind.Interface, methods: [] } }]
	)
}

export async function getMessageInfo(mt: reflect.Type | null): globalThis.Promise<MessageInfo | $.VarRef<MessageInfo> | null> {
	let [m, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(mt)!))).Interface(), "protoreflect.ProtoMessage")
	if (!ok) {
		return null
	}
	let __goscriptTuple28: any = $.typeAssertTuple<any>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), { kind: $.TypeKind.Interface, methods: [{ name: "ProtoMessageInfo", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }] }] })
	let mr = __goscriptTuple28[0]
	ok = __goscriptTuple28[1]
	if (!ok) {
		return null
	}
	return (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as any) : $.pointerValue<any>(mr)).ProtoMessageInfo()
}

export let sizecacheType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32"))

export function __goscript_set_sizecacheType(__goscriptValue: reflect.Type | null): void {
	sizecacheType = __goscriptValue
}

export let weakFieldsType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "map[int32]protoreflect.ProtoMessage", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.ProtoMessage")))

export function __goscript_set_weakFieldsType(__goscriptValue: reflect.Type | null): void {
	weakFieldsType = __goscriptValue
}

export let unknownFieldsAType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))

export function __goscript_set_unknownFieldsAType(__goscriptValue: reflect.Type | null): void {
	unknownFieldsAType = __goscriptValue
}

export let unknownFieldsBType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))

export function __goscript_set_unknownFieldsBType(__goscriptValue: reflect.Type | null): void {
	unknownFieldsBType = __goscriptValue
}

export let extensionFieldsType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "map[int32]impl.ExtensionField", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))

export function __goscript_set_extensionFieldsType(__goscriptValue: reflect.Type | null): void {
	extensionFieldsType = __goscriptValue
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
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
