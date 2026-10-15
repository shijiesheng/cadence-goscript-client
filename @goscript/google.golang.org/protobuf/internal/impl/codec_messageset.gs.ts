// Generated file based on codec_messageset.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

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
import "@goscript/sort/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/reflect/index.js"
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
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

export async function sizeMessageSet(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, p: __goscript_pointer_reflect.pointer, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	if (!flags.ProtoLegacy) {
		return 0
	}

	let ext: globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null = $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>($.markAsStructValue($.cloneStructValue((await p.Apply(($.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo.extensionOffset).clone())))).Extensions())
	for (const [__rangeKey, __goscriptRangeValue0] of ext?.entries() ?? []) {
		let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef((__goscriptRangeValue0).clone())
		let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
		let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
		if ((xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.size == null) {
			continue
		}
		let [num, ] = protowire.DecodeTag((xi$ as __goscript_codec_extension.extensionFieldInfo).wiretag)
		size = size + (messageset.SizeField(num))
		if (__goscript_encode.fullyLazyExtensions(opts)) {
			// Don't expand the extension, instead use the buffer to calculate size
			{
				let lb: $.Slice<number> = await x.value.lazyBuffer()
				if (lb != null) {
					// We got hold of the buffer, so it's still lazy.
					// Don't count the tag size in the extension buffer, it's already added.
					size = size + ((protowire.SizeTag(3) + $.sliceLen(lb)) - (xi$ as __goscript_codec_extension.extensionFieldInfo).tagsize)
					continue
				}
			}
		}
		size = size + ((__goscriptAwait = (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.size!(await x.value.Value(), protowire.SizeTag(3), (opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	{
		let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).getUnknownBytes(p) : __goscript_message.MessageInfo.prototype.getUnknownBytes.call(mi, p))
		if (u != null) {
			size = size + (messageset.SizeUnknown($.pointerValue<$.Slice<number>>(u)))
		}
	}

	return size
}

export async function marshalMessageSet(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (!flags.ProtoLegacy) {
		return [b, errors.New("no support for message_set_wire_format", null)]
	}

	let ext: globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null = $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>($.markAsStructValue($.cloneStructValue((await p.Apply(($.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo.extensionOffset).clone())))).Extensions())
	switch ($.len(ext)) {
		case 0:
		{
			break
		}
		case 1:
		{
			for (const [__rangeKey, x] of ext?.entries() ?? []) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple0: any = await marshalMessageSetField(mi, b, (x).clone(), opts)
				b = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					return [b, err]
				}
			}
			break
		}
		default:
		{
			let keys: $.Slice<number> = $.makeSlice<number>(0, $.len(ext), "number")
			for (const [k, __rangeValue] of ext?.entries() ?? []) {
				keys = $.appendOne(keys, $.int(k))
			}
			sort.Ints(keys)
			for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple1: any = await marshalMessageSetField(mi, b, ($.mapGet<number, __goscript_codec_extension.ExtensionField, __goscript_codec_extension.ExtensionField>(ext, $.int(k, 32), new __goscript_codec_extension.ExtensionField(undefined, true))[0]).clone(), opts)
				b = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [b, err]
				}
			}
			break
		}
	}

	{
		let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).getUnknownBytes(p) : __goscript_message.MessageInfo.prototype.getUnknownBytes.call(mi, p))
		if (u != null) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple2: any = messageset.AppendUnknown(b, $.pointerValue<$.Slice<number>>(u))
			b = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (err != null) {
				return [b, err]
			}
		}
	}

	return [b, null]
}

export async function marshalMessageSetField(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, b: $.Slice<number>, __goscriptParam0: __goscript_codec_extension.ExtensionField, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let x: $.VarRef<__goscript_codec_extension.ExtensionField> = $.varRef(__goscriptParam0)
	let xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null = await __goscript_codec_extension.getExtensionFieldInfo(x.value.Type())
	let xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
	let [num, ] = protowire.DecodeTag((xi$ as __goscript_codec_extension.extensionFieldInfo).wiretag)
	b = messageset.AppendFieldStart(b, num)

	if (__goscript_encode.fullyLazyExtensions(opts)) {
		// Don't expand the extension if it's still in wire format, instead use the buffer content.
		{
			let lb: $.Slice<number> = await x.value.lazyBuffer()
			if (lb != null) {
				// The tag inside the lazy buffer is a different tag (the extension
				// number), but what we need here is the tag for FieldMessage:
				b = protowire.AppendVarint(b, protowire.EncodeTag(3, 2))
				b = $.appendSlice(b, $.goSlice(lb, (xi$ as __goscript_codec_extension.extensionFieldInfo).tagsize, undefined), $.byteSliceHint)
				b = messageset.AppendFieldEnd(b)
				return [b, null]
			}
		}
	}

	let __goscriptTuple3: any = await (xi$ as __goscript_codec_extension.extensionFieldInfo).funcs.marshal!(b, await x.value.Value(), protowire.EncodeTag(3, 2), (opts).clone())
	b = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [b, err]
	}
	b = messageset.AppendFieldEnd(b)
	return [b, null]
}

export async function unmarshalMessageSet(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (!flags.ProtoLegacy) {
		return [(out).clone(), errors.New("no support for message_set_wire_format", null)]
	}

	let ep = $.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue(p)).Apply(($.pointerValue<__goscript_message.MessageInfo>(mi).coderMessageInfo.extensionOffset).clone())))).Extensions()
	if ($.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ep) == null) {
		ep!.value = $.makeMap<number, __goscript_codec_extension.ExtensionField>()
	}
	let ext: globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null = $.pointerValue<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null>(ep)
	let initialized = true
	err = messageset.Unmarshal(b, true, $.functionValue(async (num: protowire.Number, v: $.Slice<number>): globalThis.Promise<$.GoError> => {
		let [o, __goscriptShadow0] = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).unmarshalExtension(v, num, 2, ext, (opts).clone()) : __goscript_message.MessageInfo.prototype.unmarshalExtension.call(mi, v, num, 2, ext, (opts).clone()))
		if ($.comparableEqual(__goscriptShadow0, __goscript_decode.errUnknown)) {
			let u = await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_message.MessageInfo).mutableUnknownBytes((p).clone()) : __goscript_message.MessageInfo.prototype.mutableUnknownBytes.call(mi, (p).clone()))
			u!.value = protowire.AppendTag($.pointerValue<$.Slice<number>>(u), num, 2)
			u!.value = $.appendSlice($.pointerValue<$.Slice<number>>(u), v, $.byteSliceHint)
			return null
		}
		if (!o.initialized) {
			initialized = false
		}
		return __goscriptShadow0
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
	out.n = $.sliceLen(b)
	out.initialized = initialized
	return [(out).clone(), err]
}

var __goscriptAwait: any
