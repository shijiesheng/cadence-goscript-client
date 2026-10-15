// Generated file based on codec_map.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_map_go112 from "./codec_map_go112.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_convert_map from "./convert_map.gs.ts"

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
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_map_go112.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./convert.gs.ts"
import "./convert_map.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.mapInfo"])

export class mapInfo {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get keyWiretag(): bigint {
		return this._fields.keyWiretag
	}

	public set keyWiretag(value: bigint) {
		this._fields.keyWiretag = value
	}

	public get valWiretag(): bigint {
		return this._fields.valWiretag
	}

	public set valWiretag(value: bigint) {
		this._fields.valWiretag = value
	}

	public get keyFuncs(): __goscript_codec_tables.valueCoderFuncs {
		return this._fields.keyFuncs
	}

	public set keyFuncs(value: __goscript_codec_tables.valueCoderFuncs) {
		this._fields.keyFuncs = value
	}

	public get valFuncs(): __goscript_codec_tables.valueCoderFuncs {
		return this._fields.valFuncs
	}

	public set valFuncs(value: __goscript_codec_tables.valueCoderFuncs) {
		this._fields.valFuncs = value
	}

	public get keyZero(): protoreflect.Value {
		return this._fields.keyZero
	}

	public set keyZero(value: protoreflect.Value) {
		this._fields.keyZero = value
	}

	public get keyKind(): protoreflect.Kind {
		return this._fields.keyKind
	}

	public set keyKind(value: protoreflect.Kind) {
		this._fields.keyKind = value
	}

	public get conv(): __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null {
		return this._fields.conv
	}

	public set conv(value: __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null) {
		this._fields.conv = value
	}

	public _fields: {
		goType: reflect.Type | null
		keyWiretag: bigint
		valWiretag: bigint
		keyFuncs: __goscript_codec_tables.valueCoderFuncs
		valFuncs: __goscript_codec_tables.valueCoderFuncs
		keyZero: protoreflect.Value
		keyKind: protoreflect.Kind
		conv: __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, keyWiretag?: bigint, valWiretag?: bigint, keyFuncs?: __goscript_codec_tables.valueCoderFuncs, valFuncs?: __goscript_codec_tables.valueCoderFuncs, keyZero?: protoreflect.Value, keyKind?: protoreflect.Kind, conv?: __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			keyWiretag: init?.keyWiretag ?? (0n as bigint),
			valWiretag: init?.valWiretag ?? (0n as bigint),
			keyFuncs: init?.keyFuncs ? init.keyFuncs.clone() : new __goscript_codec_tables.valueCoderFuncs(undefined, true),
			valFuncs: init?.valFuncs ? init.valFuncs.clone() : new __goscript_codec_tables.valueCoderFuncs(undefined, true),
			keyZero: init?.keyZero ? init.keyZero.clone() : new protoreflect.Value(undefined, true),
			keyKind: init?.keyKind ?? (0 as protoreflect.Kind),
			conv: init?.conv ?? (null! as __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapInfo {
		return new mapInfo(this, true)
	}

	public __goscriptAssign(source: mapInfo): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		target.keyWiretag = values.keyWiretag
		target.valWiretag = values.valWiretag
		$.assignStruct(target.keyFuncs, values.keyFuncs)
		$.assignStruct(target.valFuncs, values.valFuncs)
		$.assignStruct(target.keyZero, values.keyZero)
		target.keyKind = values.keyKind
		target.conv = values.conv
	}

	static __typeInfo = $.registerStructType(
		"impl.mapInfo",
		() => new mapInfo(),
		() => [],
		mapInfo,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "keyWiretag", key: "keyWiretag", type: /* @__PURE__ */ $.basicType("uint64") }, { name: "valWiretag", key: "valWiretag", type: /* @__PURE__ */ $.basicType("uint64") }, { name: "keyFuncs", key: "keyFuncs", type: "impl.valueCoderFuncs" }, { name: "valFuncs", key: "valFuncs", type: "impl.valueCoderFuncs" }, { name: "keyZero", key: "keyZero", type: "protoreflect.Value" }, { name: "keyKind", key: "keyKind", type: /* @__PURE__ */ $.basicType("int8", "protoreflect.Kind") }, { name: "conv", key: "conv", type: /* @__PURE__ */ $.pointerType("impl.mapConverter") }]
	)
}

export const mapKeyTagSize: number = 1

export const mapValTagSize: number = 1

export async function encoderFuncsForMap(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<[__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, __goscript_codec_tables.pointerCoderFuncs]> {
	let valueMessage: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	let funcs: __goscript_codec_tables.pointerCoderFuncs = new __goscript_codec_tables.pointerCoderFuncs(undefined, true)
	// TODO: Consider generating specialized map coders.
	let keyField = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let valField = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let keyWiretag = protowire.EncodeTag(1, $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (keyField !== null && (keyField as any).__isVarRef !== true && (keyField as any).__goValue === undefined ? (keyField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(keyField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0])
	let valWiretag = protowire.EncodeTag(2, $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0])
	let keyFuncs = await __goscript_codec_tables.encoderFuncsForValue(keyField)
	let valFuncs = await __goscript_codec_tables.encoderFuncsForValue(valField)
	let conv: __goscript_convert_map.mapConverter | $.VarRef<__goscript_convert_map.mapConverter> | null = await __goscript_convert_map.newMapConverter(ft, fd)

	let mapi: mapInfo | $.VarRef<mapInfo> | null = (await (async () => { const __goscriptLiteralField0 = ((__goscriptAwait = (keyField !== null && (keyField as any).__isVarRef !== true && (keyField as any).__goValue === undefined ? (keyField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(keyField)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); const __goscriptLiteralField1 = (__goscriptAwait = (keyField !== null && (keyField as any).__isVarRef !== true && (keyField as any).__goValue === undefined ? (keyField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(keyField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new mapInfo({goType: ft, keyWiretag: keyWiretag, valWiretag: valWiretag, keyFuncs: keyFuncs, valFuncs: valFuncs, keyZero: __goscriptLiteralField0, keyKind: __goscriptLiteralField1, conv: conv}) })())
	if ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
		valueMessage = await __goscript_message.getMessageInfo((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	funcs = $.assignStruct(funcs, new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
		return await sizeMap($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())), mapi, f, opts)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		return await appendMap(b, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())), mapi, f, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
		let mp = await p.AsValueOf(ft)
		if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(mp)).Elem())).IsNil()) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(mp)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.pointerValue<mapInfo>(mapi).goType)!))))
		}
		if ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).mi == null) {
			return await consumeMap(b, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(mp)).Elem())), wtyp, mapi, f, opts)
		} else {
			return await consumeMapOfMessage(b, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(mp)).Elem())), wtyp, mapi, f, opts)
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo))}, true))
	switch ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.MessageKind:
		{
			funcs.merge = mergeMapOfMessage
			break
		}
		case protoreflect.BytesKind:
		{
			funcs.merge = mergeMapOfBytes
			break
		}
		default:
		{
			funcs.merge = mergeMap
			break
		}
	}
	if (valFuncs.isInit != null) {
		funcs.isInit = $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
			return await isInitMap($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())), mapi, f)
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo))
	}
	return [valueMessage, (funcs).clone()]
}

export async function sizeMap(mapv: reflect.Value, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	const mapi$: mapInfo = mapi == null ? $.pointerTarget<mapInfo>(mapi) : (mapi as any).__isVarRef === true ? (mapi as any).value : (mapi as any).__goValue === undefined ? (mapi as any) : $.pointerTarget<mapInfo>(mapi)
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if ($.markAsStructValue($.cloneStructValue(mapv)).Len() == 0) {
		return 0
	}
	let n = 0
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(mapv)
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		let key = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).keyConv).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).MapKey()
		let keySize = (__goscriptAwait = (mapi$ as mapInfo).keyFuncs.size!($.markAsStructValue($.cloneStructValue(key)).Value(), 1, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let valSize: number = 0
		let value = (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).valConv).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		if ((f$ as __goscript_codec_message.coderFieldInfo).mi == null) {
			valSize = (__goscriptAwait = (mapi$ as mapInfo).valFuncs.size!((value).clone(), 1, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			let p = __goscript_pointer_reflect.pointerOfValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))
			valSize = valSize + (1)
			valSize = valSize + (protowire.SizeBytes(await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, p, opts)))
		}
		n = n + ((f$ as __goscript_codec_message.coderFieldInfo).tagsize + protowire.SizeBytes(keySize + valSize))
	}
	return n
}

export async function consumeMap(b: $.Slice<number>, mapv: reflect.Value, wtyp: protowire.Type, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	const mapi$: mapInfo = mapi == null ? $.pointerTarget<mapInfo>(mapi) : (mapi as any).__isVarRef === true ? (mapi as any).value : (mapi as any).__goValue === undefined ? (mapi as any) : $.pointerTarget<mapInfo>(mapi)
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple0: any = protowire.ConsumeBytes(b)
	b = __goscriptTuple0[0]
	let n = __goscriptTuple0[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let key: protoreflect.Value = ((mapi$ as mapInfo).keyZero).clone()
	let val: protoreflect.Value = (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).valConv).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	while ($.sliceLen(b) > 0) {
		let [num, __goscriptShadow0, __goscriptShadow1] = protowire.ConsumeTag(b)
		if (__goscriptShadow1 < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		if (num > 536870911) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		b = $.goSlice(b, __goscriptShadow1, undefined)
		let __goscriptShadow2: $.GoError = __goscript_decode.errUnknown
		switch (num) {
			case genid.MapEntry_Key_field_number:
			{
				let v: protoreflect.Value = new protoreflect.Value(undefined, true)
				let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
				let __goscriptTuple1: any = await (mapi$ as mapInfo).keyFuncs.unmarshal!(b, (key).clone(), num, __goscriptShadow0, (opts).clone())
				v = $.assignStruct(v, __goscriptTuple1[0])
				o = $.assignStruct(o, __goscriptTuple1[1])
				__goscriptShadow2 = __goscriptTuple1[2]
				if (__goscriptShadow2 != null) {
					break
				}
				key = $.assignStruct(key, v)
				__goscriptShadow1 = o.n
				break
			}
			case genid.MapEntry_Value_field_number:
			{
				let v: protoreflect.Value = new protoreflect.Value(undefined, true)
				let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
				let __goscriptTuple2: any = await (mapi$ as mapInfo).valFuncs.unmarshal!(b, (val).clone(), num, __goscriptShadow0, (opts).clone())
				v = $.assignStruct(v, __goscriptTuple2[0])
				o = $.assignStruct(o, __goscriptTuple2[1])
				__goscriptShadow2 = __goscriptTuple2[2]
				if (__goscriptShadow2 != null) {
					break
				}
				val = $.assignStruct(val, v)
				__goscriptShadow1 = o.n
				break
			}
		}
		if ($.comparableEqual(__goscriptShadow2, __goscript_decode.errUnknown)) {
			__goscriptShadow1 = protowire.ConsumeFieldValue(num, __goscriptShadow0, b)
			if (__goscriptShadow1 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
		} else {
			if (__goscriptShadow2 != null) {
				return [(out).clone(), __goscriptShadow2]
			}
		}
		b = $.goSlice(b, __goscriptShadow1, undefined)
	}
	$.markAsStructValue($.cloneStructValue(mapv)).SetMapIndex($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).keyConv).GoValueOf((key).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))), $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).valConv).GoValueOf((val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
	out.n = n
	return [(out).clone(), null]
}

export async function consumeMapOfMessage(b: $.Slice<number>, mapv: reflect.Value, wtyp: protowire.Type, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	const mapi$: mapInfo = mapi == null ? $.pointerTarget<mapInfo>(mapi) : (mapi as any).__isVarRef === true ? (mapi as any).value : (mapi as any).__goValue === undefined ? (mapi as any) : $.pointerTarget<mapInfo>(mapi)
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple3: any = protowire.ConsumeBytes(b)
	b = __goscriptTuple3[0]
	let n = __goscriptTuple3[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let key: protoreflect.Value = ((mapi$ as mapInfo).keyZero).clone()
	let val: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	while ($.sliceLen(b) > 0) {
		let [num, __goscriptShadow3, __goscriptShadow4] = protowire.ConsumeTag(b)
		if (__goscriptShadow4 < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		if (num > 536870911) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		b = $.goSlice(b, __goscriptShadow4, undefined)
		let __goscriptShadow5: $.GoError = __goscript_decode.errUnknown
		switch (num) {
			case 1:
			{
				let v: protoreflect.Value = new protoreflect.Value(undefined, true)
				let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
				let __goscriptTuple4: any = await (mapi$ as mapInfo).keyFuncs.unmarshal!(b, (key).clone(), num, __goscriptShadow3, (opts).clone())
				v = $.assignStruct(v, __goscriptTuple4[0])
				o = $.assignStruct(o, __goscriptTuple4[1])
				__goscriptShadow5 = __goscriptTuple4[2]
				if (__goscriptShadow5 != null) {
					break
				}
				key = $.assignStruct(key, v)
				__goscriptShadow4 = o.n
				break
			}
			case 2:
			{
				if (__goscriptShadow3 != 2) {
					break
				}
				let v: $.Slice<number> = null! as $.Slice<number>
				let __goscriptTuple5: any = protowire.ConsumeBytes(b)
				v = __goscriptTuple5[0]
				__goscriptShadow4 = __goscriptTuple5[1]
				if (__goscriptShadow4 < 0) {
					return [(out).clone(), __goscript_decode.errDecode]
				}
				let o: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
				let __goscriptTuple6: any = await __goscript_message.MessageInfo.prototype.unmarshalPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, v, __goscript_pointer_reflect.pointerOfValue(val), 0, (opts).clone())
				o = $.assignStruct(o, __goscriptTuple6[0])
				__goscriptShadow5 = __goscriptTuple6[1]
				if (o.initialized) {
					// Consider this map item initialized so long as we see
					// an initialized value.
					out.initialized = true
				}
				break
			}
		}
		if ($.comparableEqual(__goscriptShadow5, __goscript_decode.errUnknown)) {
			__goscriptShadow4 = protowire.ConsumeFieldValue(num, __goscriptShadow3, b)
			if (__goscriptShadow4 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
		} else {
			if (__goscriptShadow5 != null) {
				return [(out).clone(), __goscriptShadow5]
			}
		}
		b = $.goSlice(b, __goscriptShadow4, undefined)
	}
	$.markAsStructValue($.cloneStructValue(mapv)).SetMapIndex($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).keyConv).GoValueOf((key).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))), $.markAsStructValue($.cloneStructValue(val)))
	out.n = n
	return [(out).clone(), null]
}

export async function appendMapItem(b: $.Slice<number>, keyrv: reflect.Value, valrv: reflect.Value, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const mapi$: mapInfo = mapi == null ? $.pointerTarget<mapInfo>(mapi) : (mapi as any).__isVarRef === true ? (mapi as any).value : (mapi as any).__goValue === undefined ? (mapi as any) : $.pointerTarget<mapInfo>(mapi)
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if ((f$ as __goscript_codec_message.coderFieldInfo).mi == null) {
		let key = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).keyConv).PBValueOf($.markAsStructValue($.cloneStructValue(keyrv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).MapKey()
		let val = (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).valConv).PBValueOf($.markAsStructValue($.cloneStructValue(valrv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let size = 0
		size = size + ((__goscriptAwait = (mapi$ as mapInfo).keyFuncs.size!($.markAsStructValue($.cloneStructValue(key)).Value(), 1, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		size = size + ((__goscriptAwait = (mapi$ as mapInfo).valFuncs.size!((val).clone(), 1, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		b = protowire.AppendVarint(b, $.uint64(size))
		let before = $.sliceLen(b)
		let __goscriptShadow6 = b
		let __goscriptTuple7: any = await (mapi$ as mapInfo).keyFuncs.marshal!(__goscriptShadow6, $.markAsStructValue($.cloneStructValue(key)).Value(), (mapi$ as mapInfo).keyWiretag, (opts).clone())
		let __goscriptShadow7: $.Slice<number> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple8: any = await (mapi$ as mapInfo).valFuncs.marshal!(__goscriptShadow7, (val).clone(), (mapi$ as mapInfo).valWiretag, (opts).clone())
		__goscriptShadow7 = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		{
			let measuredSize = $.sliceLen(__goscriptShadow7) - before
			if ((size != measuredSize) && (err == null)) {
				return [null, errors.MismatchedSizeCalculation(size, measuredSize)]
			}
		}
		return [__goscriptShadow7, err]
	} else {
		let key = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).keyConv).PBValueOf($.markAsStructValue($.cloneStructValue(keyrv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).MapKey()
		let val = __goscript_pointer_reflect.pointerOfValue(valrv)
		let valSize = await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, val, opts)
		let size = 0
		size = size + ((__goscriptAwait = (mapi$ as mapInfo).keyFuncs.size!($.markAsStructValue($.cloneStructValue(key)).Value(), 1, (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		size = size + (1 + protowire.SizeBytes(valSize))
		b = protowire.AppendVarint(b, $.uint64(size))
		let __goscriptShadow8 = b
		let __goscriptTuple9: any = await (mapi$ as mapInfo).keyFuncs.marshal!(__goscriptShadow8, $.markAsStructValue($.cloneStructValue(key)).Value(), (mapi$ as mapInfo).keyWiretag, (opts).clone())
		let __goscriptShadow9: $.Slice<number> = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		__goscriptShadow9 = protowire.AppendVarint(__goscriptShadow9, (mapi$ as mapInfo).valWiretag)
		__goscriptShadow9 = protowire.AppendVarint(__goscriptShadow9, $.uint64(valSize))
		let before = $.sliceLen(__goscriptShadow9)
		let __goscriptTuple10: any = await __goscript_message.MessageInfo.prototype.marshalAppendPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, __goscriptShadow9, val, opts)
		__goscriptShadow9 = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		{
			let measuredSize = $.sliceLen(__goscriptShadow9) - before
			if ((valSize != measuredSize) && (err == null)) {
				return [null, errors.MismatchedSizeCalculation(valSize, measuredSize)]
			}
		}
		return [__goscriptShadow9, err]
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function appendMap(b: $.Slice<number>, mapv: reflect.Value, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if ($.markAsStructValue($.cloneStructValue(mapv)).Len() == 0) {
		return [b, null]
	}
	if (opts.Deterministic()) {
		return appendMapDeterministic(b, mapv, mapi, f, opts)
	}
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(mapv)
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		let err: $.GoError = null! as $.GoError
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		let __goscriptTuple11: any = await appendMapItem(b, $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter)))), $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))), mapi, f, opts)
		b = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [b, err]
		}
	}
	return [b, null]
}

export async function appendMapDeterministic(b: $.Slice<number>, mapv: reflect.Value, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(mapv)).MapKeys()
	sort.Slice($.interfaceValue(keys, "[]reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")), $.functionValue((i: number, j: number): boolean => {
		switch ($.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Kind()) {
			case reflect.Bool:
			{
				return !$.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Bool() && $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, j))).Bool()
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				return $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Int() < $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, j))).Int()
				break
			}
			case reflect.Uint:
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uintptr:
			{
				return $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Uint() < $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, j))).Uint()
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				return $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Float() < $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, j))).Float()
				break
			}
			case reflect.String:
			{
				return $.stringCompare($.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).String(), $.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, j))).String()) < 0
				break
			}
			default:
			{
				$.panic($.concatString("invalid kind: ", reflect.Kind_String($.markAsStructValue($.cloneStructValue($.arrayIndex(keys!, i))).Kind())))
				break
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
		let err: $.GoError = null! as $.GoError
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		let __goscriptTuple12: any = await appendMapItem(b, $.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(mapv)).MapIndex($.markAsStructValue($.cloneStructValue(key))))), mapi, f, opts)
		b = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [b, err]
		}
	}
	return [b, null]
}

export async function isInitMap(mapv: reflect.Value, mapi: mapInfo | $.VarRef<mapInfo> | null, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> {
	const mapi$: mapInfo = mapi == null ? $.pointerTarget<mapInfo>(mapi) : (mapi as any).__isVarRef === true ? (mapi as any).value : (mapi as any).__goValue === undefined ? (mapi as any) : $.pointerTarget<mapInfo>(mapi)
	{
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).mi
		if (mi != null) {
			await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).init() : __goscript_message.MessageInfo.prototype.init.call(mi))
			if (!$.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo.needsInitCheck) {
				return null
			}
			let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(mapv)
			while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
				let val = __goscript_pointer_reflect.pointerOfValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))
				{
					let err = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).checkInitializedPointer(val) : __goscript_message.MessageInfo.prototype.checkInitializedPointer.call(mi, val))
					if (err != null) {
						return err
					}
				}
			}
		} else {
			let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(mapv)
			while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
				let val = (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<__goscript_convert_map.mapConverter>((mapi$ as mapInfo).conv).valConv).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				{
					let err = (__goscriptAwait = (mapi$ as mapInfo).valFuncs.isInit!((val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						return err
					}
				}
			}
		}
	}
	return null
}

export async function mergeMap(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let dstm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await dst.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	let srcm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await src.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	if ($.markAsStructValue($.cloneStructValue(srcm)).Len() == 0) {
		return
	}
	if ($.markAsStructValue($.cloneStructValue(dstm)).IsNil()) {
		$.markAsStructValue($.cloneStructValue(dstm)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil((f$ as __goscript_codec_message.coderFieldInfo).ft)!))))
	}
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(srcm)
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		$.markAsStructValue($.cloneStructValue(dstm)).SetMapIndex($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter)))), $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))))
	}
}

export async function mergeMapOfBytes(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let dstm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await dst.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	let srcm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await src.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	if ($.markAsStructValue($.cloneStructValue(srcm)).Len() == 0) {
		return
	}
	if ($.markAsStructValue($.cloneStructValue(dstm)).IsNil()) {
		$.markAsStructValue($.cloneStructValue(dstm)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil((f$ as __goscript_codec_message.coderFieldInfo).ft)!))))
	}
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(srcm)
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		$.markAsStructValue($.cloneStructValue(dstm)).SetMapIndex($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter)))), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))).Bytes(), $.byteSliceHint), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
	}
}

export async function mergeMapOfMessage(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let dstm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await dst.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	let srcm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await src.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
	if ($.markAsStructValue($.cloneStructValue(srcm)).Len() == 0) {
		return
	}
	if ($.markAsStructValue($.cloneStructValue(dstm)).IsNil()) {
		$.markAsStructValue($.cloneStructValue(dstm)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil((f$ as __goscript_codec_message.coderFieldInfo).ft)!))))
	}
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange(srcm)
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		let val = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as __goscript_codec_message.coderFieldInfo).ft).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		if ((f$ as __goscript_codec_message.coderFieldInfo).mi != null) {
			await __goscript_message.MessageInfo.prototype.mergePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, __goscript_pointer_reflect.pointerOfValue(val), __goscript_pointer_reflect.pointerOfValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter))), opts)
		} else {
			opts.Merge(await __goscript_codec_field.asMessage(val), await __goscript_codec_field.asMessage($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter))))))
		}
		$.markAsStructValue($.cloneStructValue(dstm)).SetMapIndex($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter)))), $.markAsStructValue($.cloneStructValue(val)))
	}
}

var __goscriptAwait: any
