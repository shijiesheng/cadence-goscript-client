// Generated file based on api_export.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as prototext from "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as crc32 from "@goscript/hash/crc32/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

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

import * as __goscript_legacy_message from "./legacy_message.gs.ts"

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
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/hash/crc32/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
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
import "./legacy_message.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.Export", "impl.legacyMessageWrapper"])

export type enumValue = any

export type message = any

export class Export {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Export {
		return new Export(this, true)
	}

	public __goscriptAssign(source: Export): void {
	}

	public ClearWeak(w: $.VarRef<__goscript_message.WeakFields> | null, num: protoreflect.FieldNumber): void {
		$.deleteMapEntry($.pointerValue<__goscript_message.WeakFields>(w), $.int(num, 32))
	}

	public CompressGZIP(_in: $.Slice<number>): $.Slice<number> {
		let out: $.Slice<number> = null! as $.Slice<number>

		let gzipHeader: Uint8Array = $.arrayValue(new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]))

		let blockHeader: Uint8Array = $.arrayValue(new Uint8Array(5))
		const maxBlockSize: number = 65535
		let numBlocks = 1 + (globalThis.Math.trunc($.sliceLen(_in) / 65535))

		let gzipFooter: Uint8Array = $.arrayValue(new Uint8Array(8))
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(gzipFooter, 0, 4), crc32.ChecksumIEEE(_in))
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(gzipFooter, 4, 8), $.uint($.sliceLen(_in), 32))

		out = $.makeSlice<number>(0, (($.len(gzipHeader) + ($.len(blockHeader) * numBlocks)) + $.sliceLen(_in)) + $.len(gzipFooter), "byte")
		out = $.appendSlice(out, $.goSlice(gzipHeader, undefined, undefined), $.byteSliceHint)
		while ($.arrayIndex(blockHeader, 0) == 0) {
			let blockSize = 65535
			if (blockSize > $.sliceLen(_in)) {
				blockHeader[0] = 0x01
				blockSize = $.sliceLen(_in)
			}
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint16($.goSlice(blockHeader, 1, 3), $.uint(blockSize, 16))
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint16($.goSlice(blockHeader, 3, 5), $.uint($.uint(~$.uint(blockSize, 16), 16), 16))
			out = $.appendSlice(out, $.goSlice(blockHeader, undefined, undefined), $.byteSliceHint)
			out = $.appendSlice(out, $.goSlice(_in, undefined, blockSize), $.byteSliceHint)
			_in = $.goSlice(_in, blockSize, undefined)
		}
		out = $.appendSlice(out, $.goSlice(gzipFooter, undefined, undefined), $.byteSliceHint)
		return out
	}

	public async EnumDescriptorOf(e: enumValue | null): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let e: any = __goscriptTypeSwitchValue
						return null
					}
					break
				case $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").ok:
					{
						let e: protoreflect.Enum | null = $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<protoreflect.Enum, null>) : $.pointerValue<Exclude<protoreflect.Enum, null>>(e)).Descriptor()
					}
					break
				default:
					{
						let e: any = __goscriptTypeSwitchValue
						return __goscript_legacy_enum.LegacyLoadEnumDesc(reflect.TypeOf(e))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async EnumOf(e: enumValue | null): globalThis.Promise<protoreflect.Enum | null> {
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let e: any = __goscriptTypeSwitchValue
						return null
					}
					break
				case $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").ok:
					{
						let e: protoreflect.Enum | null = $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").value
						return e
					}
					break
				default:
					{
						let e: any = __goscriptTypeSwitchValue
						return __goscript_legacy_enum.legacyWrapEnum($.markAsStructValue($.cloneStructValue(reflect.ValueOf(e))))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async EnumStringOf(ed: protoreflect.EnumDescriptor | null, n: protoreflect.EnumNumber): globalThis.Promise<string> {
		let ev = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (ev != null) {
			return (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Name()
		}
		return strconv.Itoa($.int(n))
	}

	public async EnumTypeOf(e: enumValue | null): globalThis.Promise<protoreflect.EnumType | null> {
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let e: any = __goscriptTypeSwitchValue
						return null
					}
					break
				case $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").ok:
					{
						let e: protoreflect.Enum | null = $.typeAssert<protoreflect.Enum | null>(__goscriptTypeSwitchValue, "protoreflect.Enum").value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<protoreflect.Enum, null>) : $.pointerValue<Exclude<protoreflect.Enum, null>>(e)).Type()
					}
					break
				default:
					{
						let e: any = __goscriptTypeSwitchValue
						return __goscript_legacy_enum.legacyLoadEnumType(reflect.TypeOf(e))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async GetWeak(w: __goscript_message.WeakFields, num: protoreflect.FieldNumber, name: protoreflect.FullName): globalThis.Promise<protoreflect.ProtoMessage | null> {
		{
			let [m, ok] = $.mapGet<number, protoreflect.ProtoMessage | null, protoreflect.ProtoMessage | null>(w, $.int(num, 32), null)
			if (ok) {
				return m
			}
		}
		let [mt, ] = protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, name)
		if (mt == null) {
			$.panic(await fmt.Sprintf("message %v for weak field is not linked in", $.namedValueInterfaceValue<any>(name, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public HasWeak(w: __goscript_message.WeakFields, num: protoreflect.FieldNumber): boolean {
		let [, ok] = $.mapGet<number, protoreflect.ProtoMessage | null, protoreflect.ProtoMessage | null>(w, $.int(num, 32), null)
		return ok
	}

	public async LegacyEnumName(ed: protoreflect.EnumDescriptor | null): globalThis.Promise<string> {
		return __goscript_legacy_enum.legacyEnumName(ed)
	}

	public async LegacyMessageTypeOf(m: protoiface.MessageV1 | null, name: protoreflect.FullName): globalThis.Promise<protoreflect.MessageType | null> {
		{
			let mv = await $.markAsStructValue($.cloneStructValue((new Export(undefined, true)))).protoMessageV2Of((m as message | null))
			if (mv != null) {
				return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mv)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_legacy_message.legacyLoadMessageType(reflect.TypeOf((m as any)), name)
	}

	public async MessageDescriptorOf(m: message | null): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		if (m == null) {
			return null
		}
		{
			let mv = await $.markAsStructValue($.cloneStructValue((new Export(undefined, true)))).protoMessageV2Of(m)
			if (mv != null) {
				return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mv)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_legacy_message.LegacyLoadMessageDesc(reflect.TypeOf(m))
	}

	public async MessageOf(m: message | null): globalThis.Promise<protoreflect.Message | null> {
		if (m == null) {
			return null
		}
		{
			let mv = await $.markAsStructValue($.cloneStructValue((new Export(undefined, true)))).protoMessageV2Of(m)
			if (mv != null) {
				return (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mv)).ProtoReflect()
			}
		}
		return __goscript_legacy_message.legacyWrapMessage($.markAsStructValue($.cloneStructValue(reflect.ValueOf(m))))
	}

	public MessageStateOf(p: __goscript_pointer_reflect.Pointer | null): __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null {
		$.panic("not supported")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public MessageStringOf(m: protoreflect.ProtoMessage | null): string {
		return $.markAsStructValue($.cloneStructValue(new prototext.MarshalOptions({Multiline: false}, true))).Format(m)
	}

	public async MessageTypeOf(m: message | null): globalThis.Promise<protoreflect.MessageType | null> {
		if (m == null) {
			return null
		}
		{
			let mv = await $.markAsStructValue($.cloneStructValue((new Export(undefined, true)))).protoMessageV2Of(m)
			if (mv != null) {
				return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mv)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_legacy_message.legacyLoadMessageType(reflect.TypeOf(m), "")
	}

	public NewError(f: string, x: $.Slice<any>): $.GoError {
		return errors.New(f, x)
	}

	public async ProtoMessageV1Of(m: message | null): globalThis.Promise<protoiface.MessageV1 | null> {
		{
			const __goscriptTypeSwitchValue = m
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let mv: any = __goscriptTypeSwitchValue
						return null
					}
					break
				case $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").ok:
					{
						let mv: protoiface.MessageV1 | null = $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").value
						return mv
					}
					break
				case $.typeAssert<__goscript_convert.unwrapper | null>(__goscriptTypeSwitchValue, "impl.unwrapper").ok:
					{
						let mv: __goscript_convert.unwrapper | null = $.typeAssert<__goscript_convert.unwrapper | null>(__goscriptTypeSwitchValue, "impl.unwrapper").value
						return $.markAsStructValue($.cloneStructValue(new Export(undefined, true))).ProtoMessageV1Of((__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<__goscript_convert.unwrapper, null>) : $.pointerValue<Exclude<__goscript_convert.unwrapper, null>>(mv)).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					break
				case $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
					{
						let mv: protoreflect.ProtoMessage | null = $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
						return $.interfaceValue<protoiface.MessageV1 | null>(new legacyMessageWrapper({m: mv}, true), "impl.legacyMessageWrapper", "impl.legacyMessageWrapper")
					}
					break
				default:
					{
						let mv: any = __goscriptTypeSwitchValue
						$.panic(await fmt.Sprintf("message %T is neither a v1 or v2 Message", m))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ProtoMessageV2Of(m: message | null): globalThis.Promise<protoreflect.ProtoMessage | null> {
		if (m == null) {
			return null
		}
		{
			let mv = await $.markAsStructValue($.cloneStructValue((new Export(undefined, true)))).protoMessageV2Of(m)
			if (mv != null) {
				return mv
			}
		}
		return $.pointerValue<Exclude<protoreflect.Message, null>>((await __goscript_legacy_message.legacyWrapMessage($.markAsStructValue($.cloneStructValue(reflect.ValueOf(m)))))).Interface()
	}

	public async SetWeak(w: $.VarRef<__goscript_message.WeakFields> | null, num: protoreflect.FieldNumber, name: protoreflect.FullName, m: protoreflect.ProtoMessage | null): globalThis.Promise<void> {
		if (m != null) {
			let [mt, ] = protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, name)
			if (mt == null) {
				$.panic(await fmt.Sprintf("message %v for weak field is not linked in", $.namedValueInterfaceValue<any>(name, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			if (!$.comparableEqual(mt, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				$.panic(await fmt.Sprintf("invalid message type for weak field: got %T, want %T", (m as any), ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
			}
		}
		if ((m == null) || !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			$.deleteMapEntry($.pointerValue<__goscript_message.WeakFields>(w), $.int(num, 32))
			return
		}
		if ($.pointerValue<__goscript_message.WeakFields>(w) == null) {
			w!.value = $.makeMap<number, protoreflect.ProtoMessage | null>()
		}
		$.mapSet(($.pointerValue<__goscript_message.WeakFields>(w)), $.int(num, 32), m)
	}

	public async UnmarshalJSONEnum(ed: protoreflect.EnumDescriptor | null, b: $.Slice<number>): globalThis.Promise<[protoreflect.EnumNumber, $.GoError]> {
		if ($.arrayIndex(b!, 0) == 34) {
			let name: $.VarRef<protoreflect.Name> = $.varRef("")
			{
				let err = json.Unmarshal(b, $.namedValueInterfaceValue<any>(name, "*protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
				if (err != null) {
					return [0, errors.New("invalid input for enum %v: %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
				}
			}
			let ev = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name.value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (ev == null) {
				return [0, errors.New("invalid value for enum %v: %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(name.value, "protoreflect.Name", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))]
			}
			return [(__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
		} else {
			let num: $.VarRef<protoreflect.EnumNumber> = $.varRef(0)
			{
				let err = json.Unmarshal(b, $.interfaceValue(num, "*protoreflect.EnumNumber", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))))
				if (err != null) {
					return [0, errors.New("invalid input for enum %v: %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
				}
			}
			return [num.value, null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async protoMessageV2Of(m: message | null): globalThis.Promise<protoreflect.ProtoMessage | null> {
		{
			const __goscriptTypeSwitchValue = m
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let mv: any = __goscriptTypeSwitchValue
						return null
					}
					break
				case $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
					{
						let mv: protoreflect.ProtoMessage | null = $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
						return mv
					}
					break
				case $.typeAssert<legacyMessageWrapper>(__goscriptTypeSwitchValue, "impl.legacyMessageWrapper").ok:
					{
						let mv: legacyMessageWrapper = $.markAsStructValue($.cloneStructValue($.typeAssert<legacyMessageWrapper>(__goscriptTypeSwitchValue, "impl.legacyMessageWrapper").value))
						return mv.m
					}
					break
				case $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").ok:
					{
						let mv: protoiface.MessageV1 | null = $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").value
						return null
					}
					break
				default:
					{
						let mv: any = __goscriptTypeSwitchValue
						$.panic(await fmt.Sprintf("message %T is neither a v1 or v2 Message", m))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"impl.Export",
		() => new Export(),
		() => [{ name: "ClearWeak", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "CompressGZIP", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }] }, { name: "EnumDescriptorOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumDescriptor" }] }, { name: "EnumOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Enum" }] }, { name: "EnumStringOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "EnumTypeOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.EnumType" }] }, { name: "GetWeak", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.ProtoMessage" }] }, { name: "HasWeak", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "LegacyEnumName", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "LegacyMessageTypeOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.MessageType" }] }, { name: "MessageDescriptorOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.MessageDescriptor" }] }, { name: "MessageOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Message" }] }, { name: "MessageStateOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("impl.messageState") }] }, { name: "MessageStringOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "MessageTypeOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.MessageType" }] }, { name: "NewError", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "ProtoMessageV1Of", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoiface.MessageV1" }] }, { name: "ProtoMessageV2Of", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.ProtoMessage" }] }, { name: "SetWeak", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "UnmarshalJSONEnum", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber") }, { type: "error" }] }, { name: "protoMessageV2Of", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.ProtoMessage" }] }],
		Export,
		() => []
	)
}

export class legacyMessageWrapper {
	public get m(): protoreflect.ProtoMessage | null {
		return this._fields.m
	}

	public set m(value: protoreflect.ProtoMessage | null) {
		this._fields.m = value
	}

	public _fields: {
		m: protoreflect.ProtoMessage | null
	}

	constructor(init?: Partial<{m?: protoreflect.ProtoMessage | null}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ?? (null! as protoreflect.ProtoMessage | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): legacyMessageWrapper {
		return new legacyMessageWrapper(this, true)
	}

	public __goscriptAssign(source: legacyMessageWrapper): void {
		const target = this._fields
		const values = source._fields
		target.m = $.assignFieldValue(target.m, values.m, "protoreflect.ProtoMessage")
	}

	public ProtoMessage(): void {
		const m = this;
	}

	public Reset(): void {
		const m = this;
		proto.Reset(m.m)
	}

	public String(): string {
		const m = this;
		return new Export(undefined, true).MessageStringOf(m.m)
	}

	static __typeInfo = $.registerStructType(
		"impl.legacyMessageWrapper",
		() => new legacyMessageWrapper(),
		() => [{ name: "ProtoMessage", args: [], returns: [] }, { name: "Reset", args: [], returns: [] }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		legacyMessageWrapper,
		() => [{ name: "m", key: "m", type: "protoreflect.ProtoMessage" }]
	)
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
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptAwait: any
