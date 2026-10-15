// Generated file based on merge.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.mergeOptions"])

export class mergeOptions {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mergeOptions {
		return new mergeOptions(this, true)
	}

	public __goscriptAssign(source: mergeOptions): void {
	}

	public Merge(dst: proto.Message | null, src: proto.Message | null): void {
		const o = this;
		proto.Merge(dst, src)
	}

	static __typeInfo = $.registerStructType(
		"impl.mergeOptions",
		() => new mergeOptions(),
		() => [{ name: "Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }],
		mergeOptions,
		() => []
	)
}

export function mergeScalarValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): protoreflect.Value {
	return (src).clone()
}

export function mergeBytesValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): protoreflect.Value {
	return protoreflect.ValueOfBytes($.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), $.markAsStructValue($.cloneStructValue(src)).Bytes(), $.byteSliceHint))
}

export async function mergeListValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): globalThis.Promise<protoreflect.Value> {
	let dstl = $.markAsStructValue($.cloneStructValue(dst)).List()
	let srcl = $.markAsStructValue($.cloneStructValue(src)).List()
	for (let i = 0, llen = (__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		void (__goscriptAwait = (dstl !== null && (dstl as any).__isVarRef !== true && (dstl as any).__goValue === undefined ? (dstl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dstl)).Append((((__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return (dst).clone()
}

export async function mergeBytesListValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): globalThis.Promise<protoreflect.Value> {
	let dstl = $.markAsStructValue($.cloneStructValue(dst)).List()
	let srcl = $.markAsStructValue($.cloneStructValue(src)).List()
	for (let i = 0, llen = (__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let sb: $.Slice<number> = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Bytes()
		let db: $.Slice<number> = $.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), sb, $.byteSliceHint)
		void (__goscriptAwait = (dstl !== null && (dstl as any).__isVarRef !== true && (dstl as any).__goValue === undefined ? (dstl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dstl)).Append(protoreflect.ValueOfBytes(db)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return (dst).clone()
}

export async function mergeMessageListValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): globalThis.Promise<protoreflect.Value> {
	let dstl = $.markAsStructValue($.cloneStructValue(dst)).List()
	let srcl = $.markAsStructValue($.cloneStructValue(src)).List()
	for (let i = 0, llen = (__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let sm = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (srcl !== null && (srcl as any).__isVarRef !== true && (srcl as any).__goValue === undefined ? (srcl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(srcl)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message()
		let dm = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(proto.Clone((__goscriptAwait = (sm !== null && (sm as any).__isVarRef !== true && (sm as any).__goValue === undefined ? (sm as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(sm)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (dstl !== null && (dstl as any).__isVarRef !== true && (dstl as any).__goValue === undefined ? (dstl as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dstl)).Append(protoreflect.ValueOfMessage(dm)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return (dst).clone()
}

export async function mergeMessageValue(dst: protoreflect.Value, src: protoreflect.Value, opts: mergeOptions): globalThis.Promise<protoreflect.Value> {
	opts.Merge((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>($.markAsStructValue($.cloneStructValue(dst)).Message()).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>($.markAsStructValue($.cloneStructValue(src)).Message()).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	return (dst).clone()
}

export async function mergeMessage(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: mergeOptions): globalThis.Promise<void> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if ((f$ as __goscript_codec_message.coderFieldInfo).mi != null) {
		if ($.markAsStructValue($.cloneStructValue(dst.Elem())).IsNil()) {
			dst.SetPointer(__goscript_pointer_reflect.pointerOfValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		}
		await __goscript_message.MessageInfo.prototype.mergePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, dst.Elem(), src.Elem(), opts)
	} else {
		let dm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await dst.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
		let sm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await src.AsValueOf((f$ as __goscript_codec_message.coderFieldInfo).ft)))).Elem()))
		if ($.markAsStructValue($.cloneStructValue(dm)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(dm)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as __goscript_codec_message.coderFieldInfo).ft).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
		}
		opts.Merge(await __goscript_codec_field.asMessage(dm), await __goscript_codec_field.asMessage(sm))
	}
}

export async function mergeMessageSlice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: mergeOptions): globalThis.Promise<void> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	for (let __goscriptRangeTarget0 = src.PointerSlice(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let sp = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let dm = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as __goscript_codec_message.coderFieldInfo).ft).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		if ((f$ as __goscript_codec_message.coderFieldInfo).mi != null) {
			await __goscript_message.MessageInfo.prototype.mergePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, __goscript_pointer_reflect.pointerOfValue(dm), (sp).clone(), opts)
		} else {
			opts.Merge(await __goscript_codec_field.asMessage(dm), await __goscript_codec_field.asMessage(await $.markAsStructValue($.cloneStructValue(sp)).AsValueOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as __goscript_codec_message.coderFieldInfo).ft).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))))
		}
		dst.AppendPointerSlice(__goscript_pointer_reflect.pointerOfValue(dm))
	}
}

export function mergeBytes(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: mergeOptions): void {
	dst.Bytes()!.value = $.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), $.pointerValue<$.Slice<number>>(src.Bytes()), $.byteSliceHint)
}

export function mergeBytesNoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: mergeOptions): void {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(src.Bytes())
	if ($.sliceLen(v) > 0) {
		dst.Bytes()!.value = $.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), v, $.byteSliceHint)
	}
}

export function mergeBytesSlice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: mergeOptions): void {
	let ds = dst.BytesSlice()
	for (let __goscriptRangeTarget1 = $.pointerValue<$.Slice<$.Slice<number>>>(src.BytesSlice()), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
		ds!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(ds), $.appendSlice($.goSlice(__goscript_codec_gen.emptyBuf, undefined, undefined), v, $.byteSliceHint), $.appendZeros.nil)
	}
}

var __goscriptAwait: any
