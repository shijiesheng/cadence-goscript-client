// Generated file based on codec_reflect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

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
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
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

export function sizeEnum(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p2: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Int()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendEnum(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Int()
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeEnum(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p4: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeVarint(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).SetInt($.int64(v))
	out.n = n
	return [(out).clone(), null]
}

export function mergeEnum(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem())))
}

export var coderEnum: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderEnum(): void {
	if (((coderEnum) as any) === undefined) {
		coderEnum = new __goscript_codec_tables.pointerCoderFuncs({size: sizeEnum, marshal: appendEnum, unmarshal: consumeEnum, merge: mergeEnum}, true)
	}
}

export function __goscript_get_coderEnum(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderEnum) as any) === undefined) {
		__goscript_init_coderEnum()
	}
	return coderEnum
}

export function __goscript_set_coderEnum(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderEnum, __goscriptValue)
}

export function sizeEnumNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Int() == 0n) {
		return 0
	}
	return sizeEnum(p, f, (opts).clone())
}

export function appendEnumNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Int() == 0n) {
		return [b, null]
	}
	return appendEnum(b, p, f, opts)
}

export function mergeEnumNoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem())).Int() != 0n) {
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem())))
	}
}

export var coderEnumNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderEnumNoZero(): void {
	if (((coderEnumNoZero) as any) === undefined) {
		coderEnumNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeEnumNoZero, marshal: appendEnumNoZero, unmarshal: consumeEnum, merge: mergeEnumNoZero}, true)
	}
}

export function __goscript_get_coderEnumNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderEnumNoZero) as any) === undefined) {
		__goscript_init_coderEnumNoZero()
	}
	return coderEnumNoZero
}

export function __goscript_set_coderEnumNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderEnumNoZero, __goscriptValue)
}

export function sizeEnumPtr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return sizeEnum((() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new __goscript_pointer_reflect.pointer({v: __goscriptLiteralField0}, true) })(), f, (opts).clone())
}

export function appendEnumPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	return appendEnum(b, (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new __goscript_pointer_reflect.pointer({v: __goscriptLiteralField1}, true) })(), f, opts)
}

export async function consumeEnumPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).IsNil()) {
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
	}
	return consumeEnum(b, (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new __goscript_pointer_reflect.pointer({v: __goscriptLiteralField2}, true) })(), wtyp, f, (opts).clone())
}

export async function mergeEnumPtr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): globalThis.Promise<void> {
	if (!$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem())).IsNil()) {
		let v = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(dst.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem())).Elem())))
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))
	}
}

export var coderEnumPtr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderEnumPtr(): void {
	if (((coderEnumPtr) as any) === undefined) {
		coderEnumPtr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeEnumPtr, marshal: appendEnumPtr, unmarshal: consumeEnumPtr, merge: mergeEnumPtr}, true)
	}
}

export function __goscript_get_coderEnumPtr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderEnumPtr) as any) === undefined) {
		__goscript_init_coderEnumPtr()
	}
	return coderEnumPtr
}

export function __goscript_set_coderEnumPtr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderEnumPtr, __goscriptValue)
}

export function sizeEnumSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	for (let i = 0, llen = $.markAsStructValue($.cloneStructValue(s)).Len(); i < llen; i++) {
		size = size + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Int())) + $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize)
	}
	return size
}

export function appendEnumSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	for (let i = 0, llen = $.markAsStructValue($.cloneStructValue(s)).Len(); i < llen; i++) {
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Int()))
	}
	return [b, null]
}

export async function consumeEnumSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	if (wtyp == 2) {
		let __goscriptShadow0 = b
		let __goscriptTuple0: any = protowire.ConsumeBytes(__goscriptShadow0)
		let __goscriptShadow1: $.Slice<number> = __goscriptTuple0[0]
		let n = __goscriptTuple0[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow1) > 0) {
			let [v, __goscriptShadow2] = protowire.ConsumeVarint(__goscriptShadow1)
			if (__goscriptShadow2 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(s)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))
			$.markAsStructValue($.cloneStructValue(rv)).SetInt($.int64(v))
			$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(s)), $.markAsStructValue($.cloneStructValue(rv))))))
			__goscriptShadow1 = $.goSlice(__goscriptShadow1, __goscriptShadow2, undefined)
		}
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeVarint(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(s)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))
	$.markAsStructValue($.cloneStructValue(rv)).SetInt($.int64(v))
	$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(s)), $.markAsStructValue($.cloneStructValue(rv))))))
	out.n = n
	return [(out).clone(), null]
}

export function mergeEnumSlice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.AppendSlice($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.v)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.v)).Elem()))))))
}

export var coderEnumSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderEnumSlice(): void {
	if (((coderEnumSlice) as any) === undefined) {
		coderEnumSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeEnumSlice, marshal: appendEnumSlice, unmarshal: consumeEnumSlice, merge: mergeEnumSlice}, true)
	}
}

export function __goscript_get_coderEnumSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderEnumSlice) as any) === undefined) {
		__goscript_init_coderEnumSlice()
	}
	return coderEnumSlice
}

export function __goscript_set_coderEnumSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderEnumSlice, __goscriptValue)
}

export function sizeEnumPackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	let llen = $.markAsStructValue($.cloneStructValue(s)).Len()
	if (llen == 0) {
		return 0
	}
	let n = 0
	for (let i = 0; i < llen; i++) {
		n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Int())))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendEnumPackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	let llen = $.markAsStructValue($.cloneStructValue(s)).Len()
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Int())))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i))).Int()))
	}
	return [b, null]
}

export var coderEnumPackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderEnumPackedSlice(): void {
	if (((coderEnumPackedSlice) as any) === undefined) {
		coderEnumPackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeEnumPackedSlice, marshal: appendEnumPackedSlice, unmarshal: consumeEnumSlice, merge: mergeEnumSlice}, true)
	}
}

export function __goscript_get_coderEnumPackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderEnumPackedSlice) as any) === undefined) {
		__goscript_init_coderEnumPackedSlice()
	}
	return coderEnumPackedSlice
}

export function __goscript_set_coderEnumPackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderEnumPackedSlice, __goscriptValue)
}

var __goscriptAwait: any
