// Generated file based on codec_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

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

import * as __goscript_merge_gen from "./merge_gen.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/math/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
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
import "./merge_gen.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

export function sizeBool(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<boolean>(p.Bool())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeBool(v))
}

export function appendBool(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<boolean>(p.Bool())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeBool(v))
	return [b, null]
}

export function consumeBool(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple0: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple0[0]
			n = __goscriptTuple0[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Bool()!.value = protowire.DecodeBool(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderBool: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBool(): void {
	if (((coderBool) as any) === undefined) {
		coderBool = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBool, marshal: appendBool, unmarshal: consumeBool, merge: __goscript_merge_gen.mergeBool}, true)
	}
}

export function __goscript_get_coderBool(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBool) as any) === undefined) {
		__goscript_init_coderBool()
	}
	return coderBool
}

export function __goscript_set_coderBool(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBool, __goscriptValue)
}

export function sizeBoolNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<boolean>(p.Bool())
	if (v == false) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeBool(v))
}

export function appendBoolNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<boolean>(p.Bool())
	if (v == false) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeBool(v))
	return [b, null]
}

export var coderBoolNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBoolNoZero(): void {
	if (((coderBoolNoZero) as any) === undefined) {
		coderBoolNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBoolNoZero, marshal: appendBoolNoZero, unmarshal: consumeBool, merge: __goscript_merge_gen.mergeBoolNoZero}, true)
	}
}

export function __goscript_get_coderBoolNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBoolNoZero) as any) === undefined) {
		__goscript_init_coderBoolNoZero()
	}
	return coderBoolNoZero
}

export function __goscript_set_coderBoolNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBoolNoZero, __goscriptValue)
}

export function sizeBoolPtr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<boolean>($.pointerValue<$.VarRef<boolean> | null>(p.BoolPtr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeBool(v))
}

export function appendBoolPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<boolean>($.pointerValue<$.VarRef<boolean> | null>(p.BoolPtr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeBool(v))
	return [b, null]
}

export function consumeBoolPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple1: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple1[0]
			n = __goscriptTuple1[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.BoolPtr()
	if ($.pointerValue<$.VarRef<boolean> | null>(vp) == null) {
		vp!.value = $.varRef<boolean>(false)
	}
	$.pointerValue<$.VarRef<boolean> | null>(vp)!.value = protowire.DecodeBool(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderBoolPtr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBoolPtr(): void {
	if (((coderBoolPtr) as any) === undefined) {
		coderBoolPtr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBoolPtr, marshal: appendBoolPtr, unmarshal: consumeBoolPtr, merge: __goscript_merge_gen.mergeBoolPtr}, true)
	}
}

export function __goscript_get_coderBoolPtr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBoolPtr) as any) === undefined) {
		__goscript_init_coderBoolPtr()
	}
	return coderBoolPtr
}

export function __goscript_set_coderBoolPtr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBoolPtr, __goscriptValue)
}

export function sizeBoolSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(p.BoolSlice())
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as boolean)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeBool(v)))
	}
	return size
}

export function appendBoolSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(p.BoolSlice())
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as boolean)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeBool(v))
	}
	return [b, null]
}

export function consumeBoolSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.BoolSlice()
	if (wtyp == 2) {
		let __goscriptShadow0 = b
		let __goscriptTuple2: any = protowire.ConsumeBytes(__goscriptShadow0)
		let __goscriptShadow1: $.Slice<number> = __goscriptTuple2[0]
		let n = __goscriptTuple2[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget2 = __goscriptShadow1, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growBoolSlice(count)
		}
		let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(sp)
		while ($.sliceLen(__goscriptShadow1) > 0) {
			let v: bigint = 0n
			let __goscriptShadow2: number = 0
			if (($.sliceLen(__goscriptShadow1) >= 1) && ($.arrayIndex(__goscriptShadow1!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow1!, 0))
				__goscriptShadow2 = 1
			} else {
				if (($.sliceLen(__goscriptShadow1) >= 2) && ($.arrayIndex(__goscriptShadow1!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow1!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow1!, 1)), 7n)))
					__goscriptShadow2 = 2
				} else {
					let __goscriptTuple3: any = protowire.ConsumeVarint(__goscriptShadow1)
					v = __goscriptTuple3[0]
					__goscriptShadow2 = __goscriptTuple3[1]
				}
			}
			if (__goscriptShadow2 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, protowire.DecodeBool(v))
			__goscriptShadow1 = $.goSlice(__goscriptShadow1, __goscriptShadow2, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple4: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple4[0]
			n = __goscriptTuple4[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<boolean>>(sp), protowire.DecodeBool(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderBoolSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBoolSlice(): void {
	if (((coderBoolSlice) as any) === undefined) {
		coderBoolSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBoolSlice, marshal: appendBoolSlice, unmarshal: consumeBoolSlice, merge: __goscript_merge_gen.mergeBoolSlice}, true)
	}
}

export function __goscript_get_coderBoolSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBoolSlice) as any) === undefined) {
		__goscript_init_coderBoolSlice()
	}
	return coderBoolSlice
}

export function __goscript_set_coderBoolSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBoolSlice, __goscriptValue)
}

export function sizeBoolPackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(p.BoolSlice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget3 = s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as boolean)
		n = n + (protowire.SizeVarint(protowire.EncodeBool(v)))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendBoolPackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(p.BoolSlice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget4 = s, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as boolean)
		n = n + (protowire.SizeVarint(protowire.EncodeBool(v)))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget5 = s, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as boolean)
		b = protowire.AppendVarint(b, protowire.EncodeBool(v))
	}
	return [b, null]
}

export var coderBoolPackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBoolPackedSlice(): void {
	if (((coderBoolPackedSlice) as any) === undefined) {
		coderBoolPackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBoolPackedSlice, marshal: appendBoolPackedSlice, unmarshal: consumeBoolSlice, merge: __goscript_merge_gen.mergeBoolSlice}, true)
	}
}

export function __goscript_get_coderBoolPackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBoolPackedSlice) as any) === undefined) {
		__goscript_init_coderBoolPackedSlice()
	}
	return coderBoolPackedSlice
}

export function __goscript_set_coderBoolPackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBoolPackedSlice, __goscriptValue)
}

export function sizeBoolValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint(protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool()))
}

export function appendBoolValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool()))
	return [b, null]
}

export function consumeBoolValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple5: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple5[0]
			n = __goscriptTuple5[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfBool(protowire.DecodeBool(v)), (out).clone(), null]
}

export var coderBoolValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderBoolValue(): void {
	if (((coderBoolValue) as any) === undefined) {
		coderBoolValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeBoolValue, marshal: appendBoolValue, unmarshal: consumeBoolValue, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderBoolValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderBoolValue) as any) === undefined) {
		__goscript_init_coderBoolValue()
	}
	return coderBoolValue
}

export function __goscript_set_coderBoolValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderBoolValue, __goscriptValue)
}

export async function sizeBoolSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint(protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool())))
	}
	return size
}

export async function appendBoolSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool()))
	}
	return [b, null]
}

export async function consumeBoolSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow3 = b
		let __goscriptTuple6: any = protowire.ConsumeBytes(__goscriptShadow3)
		let __goscriptShadow4: $.Slice<number> = __goscriptTuple6[0]
		let n = __goscriptTuple6[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow4) > 0) {
			let v: bigint = 0n
			let __goscriptShadow5: number = 0
			if (($.sliceLen(__goscriptShadow4) >= 1) && ($.arrayIndex(__goscriptShadow4!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow4!, 0))
				__goscriptShadow5 = 1
			} else {
				if (($.sliceLen(__goscriptShadow4) >= 2) && ($.arrayIndex(__goscriptShadow4!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow4!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow4!, 1)), 7n)))
					__goscriptShadow5 = 2
				} else {
					let __goscriptTuple7: any = protowire.ConsumeVarint(__goscriptShadow4)
					v = __goscriptTuple7[0]
					__goscriptShadow5 = __goscriptTuple7[1]
				}
			}
			if (__goscriptShadow5 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBool(protowire.DecodeBool(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow4 = $.goSlice(__goscriptShadow4, __goscriptShadow5, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple8: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple8[0]
			n = __goscriptTuple8[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBool(protowire.DecodeBool(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderBoolSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderBoolSliceValue(): void {
	if (((coderBoolSliceValue) as any) === undefined) {
		coderBoolSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeBoolSliceValue, marshal: appendBoolSliceValue, unmarshal: consumeBoolSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderBoolSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderBoolSliceValue) as any) === undefined) {
		__goscript_init_coderBoolSliceValue()
	}
	return coderBoolSliceValue
}

export function __goscript_set_coderBoolSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderBoolSliceValue, __goscriptValue)
}

export async function sizeBoolPackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow6 = llen
		for (let i = 0, __goscriptShadow7 = __goscriptShadow6; i < __goscriptShadow7; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint(protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool())))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendBoolPackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint(protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool())))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, protowire.EncodeBool($.markAsStructValue($.cloneStructValue(v)).Bool()))
	}
	return [b, null]
}

export var coderBoolPackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderBoolPackedSliceValue(): void {
	if (((coderBoolPackedSliceValue) as any) === undefined) {
		coderBoolPackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeBoolPackedSliceValue, marshal: appendBoolPackedSliceValue, unmarshal: consumeBoolSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderBoolPackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderBoolPackedSliceValue) as any) === undefined) {
		__goscript_init_coderBoolPackedSliceValue()
	}
	return coderBoolPackedSliceValue
}

export function __goscript_set_coderBoolPackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderBoolPackedSliceValue, __goscriptValue)
}

export function sizeEnumValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Enum()))
}

export function appendEnumValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Enum()))
	return [b, null]
}

export function consumeEnumValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple9: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple9[0]
			n = __goscriptTuple9[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfEnum($.int(v, 32)), (out).clone(), null]
}

export var coderEnumValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderEnumValue(): void {
	if (((coderEnumValue) as any) === undefined) {
		coderEnumValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeEnumValue, marshal: appendEnumValue, unmarshal: consumeEnumValue, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderEnumValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderEnumValue) as any) === undefined) {
		__goscript_init_coderEnumValue()
	}
	return coderEnumValue
}

export function __goscript_set_coderEnumValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderEnumValue, __goscriptValue)
}

export async function sizeEnumSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Enum())))
	}
	return size
}

export async function appendEnumSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Enum()))
	}
	return [b, null]
}

export async function consumeEnumSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow8 = b
		let __goscriptTuple10: any = protowire.ConsumeBytes(__goscriptShadow8)
		let __goscriptShadow9: $.Slice<number> = __goscriptTuple10[0]
		let n = __goscriptTuple10[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow9) > 0) {
			let v: bigint = 0n
			let __goscriptShadow10: number = 0
			if (($.sliceLen(__goscriptShadow9) >= 1) && ($.arrayIndex(__goscriptShadow9!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow9!, 0))
				__goscriptShadow10 = 1
			} else {
				if (($.sliceLen(__goscriptShadow9) >= 2) && ($.arrayIndex(__goscriptShadow9!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow9!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow9!, 1)), 7n)))
					__goscriptShadow10 = 2
				} else {
					let __goscriptTuple11: any = protowire.ConsumeVarint(__goscriptShadow9)
					v = __goscriptTuple11[0]
					__goscriptShadow10 = __goscriptTuple11[1]
				}
			}
			if (__goscriptShadow10 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfEnum($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow9 = $.goSlice(__goscriptShadow9, __goscriptShadow10, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple12: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple12[0]
			n = __goscriptTuple12[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfEnum($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderEnumSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderEnumSliceValue(): void {
	if (((coderEnumSliceValue) as any) === undefined) {
		coderEnumSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeEnumSliceValue, marshal: appendEnumSliceValue, unmarshal: consumeEnumSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderEnumSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderEnumSliceValue) as any) === undefined) {
		__goscript_init_coderEnumSliceValue()
	}
	return coderEnumSliceValue
}

export function __goscript_set_coderEnumSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderEnumSliceValue, __goscriptValue)
}

export async function sizeEnumPackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow11 = llen
		for (let i = 0, __goscriptShadow12 = __goscriptShadow11; i < __goscriptShadow12; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Enum())))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendEnumPackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Enum())))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Enum()))
	}
	return [b, null]
}

export var coderEnumPackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderEnumPackedSliceValue(): void {
	if (((coderEnumPackedSliceValue) as any) === undefined) {
		coderEnumPackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeEnumPackedSliceValue, marshal: appendEnumPackedSliceValue, unmarshal: consumeEnumSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderEnumPackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderEnumPackedSliceValue) as any) === undefined) {
		__goscript_init_coderEnumPackedSliceValue()
	}
	return coderEnumPackedSliceValue
}

export function __goscript_set_coderEnumPackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderEnumPackedSliceValue, __goscriptValue)
}

export function sizeInt32(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeInt32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple13: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple13[0]
			n = __goscriptTuple13[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int32()!.value = $.int(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderInt32: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt32(): void {
	if (((coderInt32) as any) === undefined) {
		coderInt32 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt32, marshal: appendInt32, unmarshal: consumeInt32, merge: __goscript_merge_gen.mergeInt32}, true)
	}
}

export function __goscript_get_coderInt32(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt32) as any) === undefined) {
		__goscript_init_coderInt32()
	}
	return coderInt32
}

export function __goscript_set_coderInt32(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt32, __goscriptValue)
}

export function sizeInt32NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt32NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export var coderInt32NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt32NoZero(): void {
	if (((coderInt32NoZero) as any) === undefined) {
		coderInt32NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt32NoZero, marshal: appendInt32NoZero, unmarshal: consumeInt32, merge: __goscript_merge_gen.mergeInt32NoZero}, true)
	}
}

export function __goscript_get_coderInt32NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt32NoZero) as any) === undefined) {
		__goscript_init_coderInt32NoZero()
	}
	return coderInt32NoZero
}

export function __goscript_set_coderInt32NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt32NoZero, __goscriptValue)
}

export function sizeInt32Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Int32Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Int32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeInt32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple14: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple14[0]
			n = __goscriptTuple14[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = $.int(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderInt32Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt32Ptr(): void {
	if (((coderInt32Ptr) as any) === undefined) {
		coderInt32Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt32Ptr, marshal: appendInt32Ptr, unmarshal: consumeInt32Ptr, merge: __goscript_merge_gen.mergeInt32Ptr}, true)
	}
}

export function __goscript_get_coderInt32Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt32Ptr) as any) === undefined) {
		__goscript_init_coderInt32Ptr()
	}
	return coderInt32Ptr
}

export function __goscript_set_coderInt32Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt32Ptr, __goscriptValue)
}

export function sizeInt32Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	for (let __goscriptRangeTarget6 = s, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 32)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v)))
	}
	return size
}

export function appendInt32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	for (let __goscriptRangeTarget7 = s, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function consumeInt32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int32Slice()
	if (wtyp == 2) {
		let __goscriptShadow13 = b
		let __goscriptTuple15: any = protowire.ConsumeBytes(__goscriptShadow13)
		let __goscriptShadow14: $.Slice<number> = __goscriptTuple15[0]
		let n = __goscriptTuple15[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget8 = __goscriptShadow14, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growInt32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow14) > 0) {
			let v: bigint = 0n
			let __goscriptShadow15: number = 0
			if (($.sliceLen(__goscriptShadow14) >= 1) && ($.arrayIndex(__goscriptShadow14!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow14!, 0))
				__goscriptShadow15 = 1
			} else {
				if (($.sliceLen(__goscriptShadow14) >= 2) && ($.arrayIndex(__goscriptShadow14!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow14!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow14!, 1)), 7n)))
					__goscriptShadow15 = 2
				} else {
					let __goscriptTuple16: any = protowire.ConsumeVarint(__goscriptShadow14)
					v = __goscriptTuple16[0]
					__goscriptShadow15 = __goscriptTuple16[1]
				}
			}
			if (__goscriptShadow15 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.int($.int(v, 32), 32))
			__goscriptShadow14 = $.goSlice(__goscriptShadow14, __goscriptShadow15, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple17: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple17[0]
			n = __goscriptTuple17[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), $.int($.int(v, 32), 32))
	out.n = n
	return [(out).clone(), null]
}

export var coderInt32Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt32Slice(): void {
	if (((coderInt32Slice) as any) === undefined) {
		coderInt32Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt32Slice, marshal: appendInt32Slice, unmarshal: consumeInt32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderInt32Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt32Slice) as any) === undefined) {
		__goscript_init_coderInt32Slice()
	}
	return coderInt32Slice
}

export function __goscript_set_coderInt32Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt32Slice, __goscriptValue)
}

export function sizeInt32PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget9 = s, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendInt32PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget10 = s, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget11 = s, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export var coderInt32PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt32PackedSlice(): void {
	if (((coderInt32PackedSlice) as any) === undefined) {
		coderInt32PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt32PackedSlice, marshal: appendInt32PackedSlice, unmarshal: consumeInt32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderInt32PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt32PackedSlice) as any) === undefined) {
		__goscript_init_coderInt32PackedSlice()
	}
	return coderInt32PackedSlice
}

export function __goscript_set_coderInt32PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt32PackedSlice, __goscriptValue)
}

export function sizeInt32Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint($.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
}

export function appendInt32Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
	return [b, null]
}

export function consumeInt32Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple18: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple18[0]
			n = __goscriptTuple18[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt32($.int(v, 32)), (out).clone(), null]
}

export var coderInt32Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt32Value(): void {
	if (((coderInt32Value) as any) === undefined) {
		coderInt32Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt32Value, marshal: appendInt32Value, unmarshal: consumeInt32Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderInt32Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt32Value) as any) === undefined) {
		__goscript_init_coderInt32Value()
	}
	return coderInt32Value
}

export function __goscript_set_coderInt32Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt32Value, __goscriptValue)
}

export async function sizeInt32SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint($.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
	}
	return size
}

export async function appendInt32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, $.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
	}
	return [b, null]
}

export async function consumeInt32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow16 = b
		let __goscriptTuple19: any = protowire.ConsumeBytes(__goscriptShadow16)
		let __goscriptShadow17: $.Slice<number> = __goscriptTuple19[0]
		let n = __goscriptTuple19[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow17) > 0) {
			let v: bigint = 0n
			let __goscriptShadow18: number = 0
			if (($.sliceLen(__goscriptShadow17) >= 1) && ($.arrayIndex(__goscriptShadow17!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow17!, 0))
				__goscriptShadow18 = 1
			} else {
				if (($.sliceLen(__goscriptShadow17) >= 2) && ($.arrayIndex(__goscriptShadow17!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow17!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow17!, 1)), 7n)))
					__goscriptShadow18 = 2
				} else {
					let __goscriptTuple20: any = protowire.ConsumeVarint(__goscriptShadow17)
					v = __goscriptTuple20[0]
					__goscriptShadow18 = __goscriptTuple20[1]
				}
			}
			if (__goscriptShadow18 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow17 = $.goSlice(__goscriptShadow17, __goscriptShadow18, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple21: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple21[0]
			n = __goscriptTuple21[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderInt32SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt32SliceValue(): void {
	if (((coderInt32SliceValue) as any) === undefined) {
		coderInt32SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt32SliceValue, marshal: appendInt32SliceValue, unmarshal: consumeInt32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderInt32SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt32SliceValue) as any) === undefined) {
		__goscript_init_coderInt32SliceValue()
	}
	return coderInt32SliceValue
}

export function __goscript_set_coderInt32SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt32SliceValue, __goscriptValue)
}

export async function sizeInt32PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow19 = llen
		for (let i = 0, __goscriptShadow20 = __goscriptShadow19; i < __goscriptShadow20; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint($.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendInt32PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint($.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, $.uint64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
	}
	return [b, null]
}

export var coderInt32PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt32PackedSliceValue(): void {
	if (((coderInt32PackedSliceValue) as any) === undefined) {
		coderInt32PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt32PackedSliceValue, marshal: appendInt32PackedSliceValue, unmarshal: consumeInt32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderInt32PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt32PackedSliceValue) as any) === undefined) {
		__goscript_init_coderInt32PackedSliceValue()
	}
	return coderInt32PackedSliceValue
}

export function __goscript_set_coderInt32PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt32PackedSliceValue, __goscriptValue)
}

export function sizeSint32(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64(v)))
}

export function appendSint32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64(v)))
	return [b, null]
}

export function consumeSint32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple22: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple22[0]
			n = __goscriptTuple22[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int32()!.value = $.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderSint32: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint32(): void {
	if (((coderSint32) as any) === undefined) {
		coderSint32 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint32, marshal: appendSint32, unmarshal: consumeSint32, merge: __goscript_merge_gen.mergeInt32}, true)
	}
}

export function __goscript_get_coderSint32(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint32) as any) === undefined) {
		__goscript_init_coderSint32()
	}
	return coderSint32
}

export function __goscript_set_coderSint32(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint32, __goscriptValue)
}

export function sizeSint32NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64(v)))
}

export function appendSint32NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64(v)))
	return [b, null]
}

export var coderSint32NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint32NoZero(): void {
	if (((coderSint32NoZero) as any) === undefined) {
		coderSint32NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint32NoZero, marshal: appendSint32NoZero, unmarshal: consumeSint32, merge: __goscript_merge_gen.mergeInt32NoZero}, true)
	}
}

export function __goscript_get_coderSint32NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint32NoZero) as any) === undefined) {
		__goscript_init_coderSint32NoZero()
	}
	return coderSint32NoZero
}

export function __goscript_set_coderSint32NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint32NoZero, __goscriptValue)
}

export function sizeSint32Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Int32Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64(v)))
}

export function appendSint32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Int32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64(v)))
	return [b, null]
}

export function consumeSint32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple23: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple23[0]
			n = __goscriptTuple23[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = $.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderSint32Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint32Ptr(): void {
	if (((coderSint32Ptr) as any) === undefined) {
		coderSint32Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint32Ptr, marshal: appendSint32Ptr, unmarshal: consumeSint32Ptr, merge: __goscript_merge_gen.mergeInt32Ptr}, true)
	}
}

export function __goscript_get_coderSint32Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint32Ptr) as any) === undefined) {
		__goscript_init_coderSint32Ptr()
	}
	return coderSint32Ptr
}

export function __goscript_set_coderSint32Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint32Ptr, __goscriptValue)
}

export function sizeSint32Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	for (let __goscriptRangeTarget12 = s, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as number), 32)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64(v))))
	}
	return size
}

export function appendSint32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	for (let __goscriptRangeTarget13 = s, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64(v)))
	}
	return [b, null]
}

export function consumeSint32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int32Slice()
	if (wtyp == 2) {
		let __goscriptShadow21 = b
		let __goscriptTuple24: any = protowire.ConsumeBytes(__goscriptShadow21)
		let __goscriptShadow22: $.Slice<number> = __goscriptTuple24[0]
		let n = __goscriptTuple24[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget14 = __goscriptShadow22, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growInt32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow22) > 0) {
			let v: bigint = 0n
			let __goscriptShadow23: number = 0
			if (($.sliceLen(__goscriptShadow22) >= 1) && ($.arrayIndex(__goscriptShadow22!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow22!, 0))
				__goscriptShadow23 = 1
			} else {
				if (($.sliceLen(__goscriptShadow22) >= 2) && ($.arrayIndex(__goscriptShadow22!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow22!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow22!, 1)), 7n)))
					__goscriptShadow23 = 2
				} else {
					let __goscriptTuple25: any = protowire.ConsumeVarint(__goscriptShadow22)
					v = __goscriptTuple25[0]
					__goscriptShadow23 = __goscriptTuple25[1]
				}
			}
			if (__goscriptShadow23 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.int($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32), 32))
			__goscriptShadow22 = $.goSlice(__goscriptShadow22, __goscriptShadow23, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple26: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple26[0]
			n = __goscriptTuple26[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), $.int($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32), 32))
	out.n = n
	return [(out).clone(), null]
}

export var coderSint32Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint32Slice(): void {
	if (((coderSint32Slice) as any) === undefined) {
		coderSint32Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint32Slice, marshal: appendSint32Slice, unmarshal: consumeSint32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderSint32Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint32Slice) as any) === undefined) {
		__goscript_init_coderSint32Slice()
	}
	return coderSint32Slice
}

export function __goscript_set_coderSint32Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint32Slice, __goscriptValue)
}

export function sizeSint32PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget15 = s, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.int64(v))))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendSint32PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget16 = s, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.int64(v))))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget17 = s, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64(v)))
	}
	return [b, null]
}

export var coderSint32PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint32PackedSlice(): void {
	if (((coderSint32PackedSlice) as any) === undefined) {
		coderSint32PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint32PackedSlice, marshal: appendSint32PackedSlice, unmarshal: consumeSint32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderSint32PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint32PackedSlice) as any) === undefined) {
		__goscript_init_coderSint32PackedSlice()
	}
	return coderSint32PackedSlice
}

export function __goscript_set_coderSint32PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint32PackedSlice, __goscriptValue)
}

export function sizeSint32Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
}

export function appendSint32Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
	return [b, null]
}

export function consumeSint32Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple27: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple27[0]
			n = __goscriptTuple27[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32)), (out).clone(), null]
}

export var coderSint32Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint32Value(): void {
	if (((coderSint32Value) as any) === undefined) {
		coderSint32Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint32Value, marshal: appendSint32Value, unmarshal: consumeSint32Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderSint32Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint32Value) as any) === undefined) {
		__goscript_init_coderSint32Value()
	}
	return coderSint32Value
}

export function __goscript_set_coderSint32Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint32Value, __goscriptValue)
}

export async function sizeSint32SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))))
	}
	return size
}

export async function appendSint32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
	}
	return [b, null]
}

export async function consumeSint32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow24 = b
		let __goscriptTuple28: any = protowire.ConsumeBytes(__goscriptShadow24)
		let __goscriptShadow25: $.Slice<number> = __goscriptTuple28[0]
		let n = __goscriptTuple28[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow25) > 0) {
			let v: bigint = 0n
			let __goscriptShadow26: number = 0
			if (($.sliceLen(__goscriptShadow25) >= 1) && ($.arrayIndex(__goscriptShadow25!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow25!, 0))
				__goscriptShadow26 = 1
			} else {
				if (($.sliceLen(__goscriptShadow25) >= 2) && ($.arrayIndex(__goscriptShadow25!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow25!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow25!, 1)), 7n)))
					__goscriptShadow26 = 2
				} else {
					let __goscriptTuple29: any = protowire.ConsumeVarint(__goscriptShadow25)
					v = __goscriptTuple29[0]
					__goscriptShadow26 = __goscriptTuple29[1]
				}
			}
			if (__goscriptShadow26 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow25 = $.goSlice(__goscriptShadow25, __goscriptShadow26, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple30: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple30[0]
			n = __goscriptTuple30[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderSint32SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint32SliceValue(): void {
	if (((coderSint32SliceValue) as any) === undefined) {
		coderSint32SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint32SliceValue, marshal: appendSint32SliceValue, unmarshal: consumeSint32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSint32SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint32SliceValue) as any) === undefined) {
		__goscript_init_coderSint32SliceValue()
	}
	return coderSint32SliceValue
}

export function __goscript_set_coderSint32SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint32SliceValue, __goscriptValue)
}

export async function sizeSint32PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow27 = llen
		for (let i = 0, __goscriptShadow28 = __goscriptShadow27; i < __goscriptShadow28; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendSint32PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)))))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
	}
	return [b, null]
}

export var coderSint32PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint32PackedSliceValue(): void {
	if (((coderSint32PackedSliceValue) as any) === undefined) {
		coderSint32PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint32PackedSliceValue, marshal: appendSint32PackedSliceValue, unmarshal: consumeSint32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSint32PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint32PackedSliceValue) as any) === undefined) {
		__goscript_init_coderSint32PackedSliceValue()
	}
	return coderSint32PackedSliceValue
}

export function __goscript_set_coderSint32PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint32PackedSliceValue, __goscriptValue)
}

export function sizeUint32(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendUint32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeUint32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple31: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple31[0]
			n = __goscriptTuple31[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Uint32()!.value = $.uint(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderUint32: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint32(): void {
	if (((coderUint32) as any) === undefined) {
		coderUint32 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint32, marshal: appendUint32, unmarshal: consumeUint32, merge: __goscript_merge_gen.mergeUint32}, true)
	}
}

export function __goscript_get_coderUint32(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint32) as any) === undefined) {
		__goscript_init_coderUint32()
	}
	return coderUint32
}

export function __goscript_set_coderUint32(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint32, __goscriptValue)
}

export function sizeUint32NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	if (v == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendUint32NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export var coderUint32NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint32NoZero(): void {
	if (((coderUint32NoZero) as any) === undefined) {
		coderUint32NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint32NoZero, marshal: appendUint32NoZero, unmarshal: consumeUint32, merge: __goscript_merge_gen.mergeUint32NoZero}, true)
	}
}

export function __goscript_get_coderUint32NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint32NoZero) as any) === undefined) {
		__goscript_init_coderUint32NoZero()
	}
	return coderUint32NoZero
}

export function __goscript_set_coderUint32NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint32NoZero, __goscriptValue)
}

export function sizeUint32Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Uint32Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendUint32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Uint32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeUint32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple32: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple32[0]
			n = __goscriptTuple32[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Uint32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = $.uint(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderUint32Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint32Ptr(): void {
	if (((coderUint32Ptr) as any) === undefined) {
		coderUint32Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint32Ptr, marshal: appendUint32Ptr, unmarshal: consumeUint32Ptr, merge: __goscript_merge_gen.mergeUint32Ptr}, true)
	}
}

export function __goscript_get_coderUint32Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint32Ptr) as any) === undefined) {
		__goscript_init_coderUint32Ptr()
	}
	return coderUint32Ptr
}

export function __goscript_set_coderUint32Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint32Ptr, __goscriptValue)
}

export function sizeUint32Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	for (let __goscriptRangeTarget18 = s, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as number), 32)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v)))
	}
	return size
}

export function appendUint32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	for (let __goscriptRangeTarget19 = s, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function consumeUint32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Uint32Slice()
	if (wtyp == 2) {
		let __goscriptShadow29 = b
		let __goscriptTuple33: any = protowire.ConsumeBytes(__goscriptShadow29)
		let __goscriptShadow30: $.Slice<number> = __goscriptTuple33[0]
		let n = __goscriptTuple33[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget20 = __goscriptShadow30, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growUint32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow30) > 0) {
			let v: bigint = 0n
			let __goscriptShadow31: number = 0
			if (($.sliceLen(__goscriptShadow30) >= 1) && ($.arrayIndex(__goscriptShadow30!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow30!, 0))
				__goscriptShadow31 = 1
			} else {
				if (($.sliceLen(__goscriptShadow30) >= 2) && ($.arrayIndex(__goscriptShadow30!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow30!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow30!, 1)), 7n)))
					__goscriptShadow31 = 2
				} else {
					let __goscriptTuple34: any = protowire.ConsumeVarint(__goscriptShadow30)
					v = __goscriptTuple34[0]
					__goscriptShadow31 = __goscriptTuple34[1]
				}
			}
			if (__goscriptShadow31 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.uint($.uint(v, 32), 32))
			__goscriptShadow30 = $.goSlice(__goscriptShadow30, __goscriptShadow31, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple35: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple35[0]
			n = __goscriptTuple35[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), $.uint($.uint(v, 32), 32))
	out.n = n
	return [(out).clone(), null]
}

export var coderUint32Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint32Slice(): void {
	if (((coderUint32Slice) as any) === undefined) {
		coderUint32Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint32Slice, marshal: appendUint32Slice, unmarshal: consumeUint32Slice, merge: __goscript_merge_gen.mergeUint32Slice}, true)
	}
}

export function __goscript_get_coderUint32Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint32Slice) as any) === undefined) {
		__goscript_init_coderUint32Slice()
	}
	return coderUint32Slice
}

export function __goscript_set_coderUint32Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint32Slice, __goscriptValue)
}

export function sizeUint32PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget21 = s, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendUint32PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget22 = s, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as number), 32)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget23 = s, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export var coderUint32PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint32PackedSlice(): void {
	if (((coderUint32PackedSlice) as any) === undefined) {
		coderUint32PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint32PackedSlice, marshal: appendUint32PackedSlice, unmarshal: consumeUint32Slice, merge: __goscript_merge_gen.mergeUint32Slice}, true)
	}
}

export function __goscript_get_coderUint32PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint32PackedSlice) as any) === undefined) {
		__goscript_init_coderUint32PackedSlice()
	}
	return coderUint32PackedSlice
}

export function __goscript_set_coderUint32PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint32PackedSlice, __goscriptValue)
}

export function sizeUint32Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint($.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
}

export function appendUint32Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
	return [b, null]
}

export function consumeUint32Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple36: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple36[0]
			n = __goscriptTuple36[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfUint32($.uint(v, 32)), (out).clone(), null]
}

export var coderUint32Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint32Value(): void {
	if (((coderUint32Value) as any) === undefined) {
		coderUint32Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint32Value, marshal: appendUint32Value, unmarshal: consumeUint32Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderUint32Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint32Value) as any) === undefined) {
		__goscript_init_coderUint32Value()
	}
	return coderUint32Value
}

export function __goscript_set_coderUint32Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint32Value, __goscriptValue)
}

export async function sizeUint32SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint($.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))))
	}
	return size
}

export async function appendUint32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, $.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
	}
	return [b, null]
}

export async function consumeUint32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow32 = b
		let __goscriptTuple37: any = protowire.ConsumeBytes(__goscriptShadow32)
		let __goscriptShadow33: $.Slice<number> = __goscriptTuple37[0]
		let n = __goscriptTuple37[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow33) > 0) {
			let v: bigint = 0n
			let __goscriptShadow34: number = 0
			if (($.sliceLen(__goscriptShadow33) >= 1) && ($.arrayIndex(__goscriptShadow33!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow33!, 0))
				__goscriptShadow34 = 1
			} else {
				if (($.sliceLen(__goscriptShadow33) >= 2) && ($.arrayIndex(__goscriptShadow33!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow33!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow33!, 1)), 7n)))
					__goscriptShadow34 = 2
				} else {
					let __goscriptTuple38: any = protowire.ConsumeVarint(__goscriptShadow33)
					v = __goscriptTuple38[0]
					__goscriptShadow34 = __goscriptTuple38[1]
				}
			}
			if (__goscriptShadow34 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow33 = $.goSlice(__goscriptShadow33, __goscriptShadow34, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple39: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple39[0]
			n = __goscriptTuple39[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderUint32SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint32SliceValue(): void {
	if (((coderUint32SliceValue) as any) === undefined) {
		coderUint32SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint32SliceValue, marshal: appendUint32SliceValue, unmarshal: consumeUint32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderUint32SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint32SliceValue) as any) === undefined) {
		__goscript_init_coderUint32SliceValue()
	}
	return coderUint32SliceValue
}

export function __goscript_set_coderUint32SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint32SliceValue, __goscriptValue)
}

export async function sizeUint32PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow35 = llen
		for (let i = 0, __goscriptShadow36 = __goscriptShadow35; i < __goscriptShadow36; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint($.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendUint32PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint($.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, $.uint64($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
	}
	return [b, null]
}

export var coderUint32PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint32PackedSliceValue(): void {
	if (((coderUint32PackedSliceValue) as any) === undefined) {
		coderUint32PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint32PackedSliceValue, marshal: appendUint32PackedSliceValue, unmarshal: consumeUint32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderUint32PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint32PackedSliceValue) as any) === undefined) {
		__goscript_init_coderUint32PackedSliceValue()
	}
	return coderUint32PackedSliceValue
}

export function __goscript_set_coderUint32PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint32PackedSliceValue, __goscriptValue)
}

export function sizeInt64(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Int64())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeInt64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple40: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple40[0]
			n = __goscriptTuple40[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int64()!.value = $.int64(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderInt64: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt64(): void {
	if (((coderInt64) as any) === undefined) {
		coderInt64 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt64, marshal: appendInt64, unmarshal: consumeInt64, merge: __goscript_merge_gen.mergeInt64}, true)
	}
}

export function __goscript_get_coderInt64(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt64) as any) === undefined) {
		__goscript_init_coderInt64()
	}
	return coderInt64
}

export function __goscript_set_coderInt64(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt64, __goscriptValue)
}

export function sizeInt64NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt64NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export var coderInt64NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt64NoZero(): void {
	if (((coderInt64NoZero) as any) === undefined) {
		coderInt64NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt64NoZero, marshal: appendInt64NoZero, unmarshal: consumeInt64, merge: __goscript_merge_gen.mergeInt64NoZero}, true)
	}
}

export function __goscript_get_coderInt64NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt64NoZero) as any) === undefined) {
		__goscript_init_coderInt64NoZero()
	}
	return coderInt64NoZero
}

export function __goscript_set_coderInt64NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt64NoZero, __goscriptValue)
}

export function sizeInt64Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Int64Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v))
}

export function appendInt64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Int64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, $.uint64(v))
	return [b, null]
}

export function consumeInt64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple41: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple41[0]
			n = __goscriptTuple41[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int64Ptr()
	if ($.pointerValue<$.VarRef<bigint> | null>(vp) == null) {
		vp!.value = $.varRef<bigint>(0n)
	}
	$.pointerValue<$.VarRef<bigint> | null>(vp)!.value = $.int64(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderInt64Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt64Ptr(): void {
	if (((coderInt64Ptr) as any) === undefined) {
		coderInt64Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt64Ptr, marshal: appendInt64Ptr, unmarshal: consumeInt64Ptr, merge: __goscript_merge_gen.mergeInt64Ptr}, true)
	}
}

export function __goscript_get_coderInt64Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt64Ptr) as any) === undefined) {
		__goscript_init_coderInt64Ptr()
	}
	return coderInt64Ptr
}

export function __goscript_set_coderInt64Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt64Ptr, __goscriptValue)
}

export function sizeInt64Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	for (let __goscriptRangeTarget24 = s, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as bigint)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint($.uint64(v)))
	}
	return size
}

export function appendInt64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	for (let __goscriptRangeTarget25 = s, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow25.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function consumeInt64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int64Slice()
	if (wtyp == 2) {
		let __goscriptShadow37 = b
		let __goscriptTuple42: any = protowire.ConsumeBytes(__goscriptShadow37)
		let __goscriptShadow38: $.Slice<number> = __goscriptTuple42[0]
		let n = __goscriptTuple42[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget26 = __goscriptShadow38, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow26.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growInt64Slice(count)
		}
		let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(sp)
		while ($.sliceLen(__goscriptShadow38) > 0) {
			let v: bigint = 0n
			let __goscriptShadow39: number = 0
			if (($.sliceLen(__goscriptShadow38) >= 1) && ($.arrayIndex(__goscriptShadow38!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow38!, 0))
				__goscriptShadow39 = 1
			} else {
				if (($.sliceLen(__goscriptShadow38) >= 2) && ($.arrayIndex(__goscriptShadow38!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow38!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow38!, 1)), 7n)))
					__goscriptShadow39 = 2
				} else {
					let __goscriptTuple43: any = protowire.ConsumeVarint(__goscriptShadow38)
					v = __goscriptTuple43[0]
					__goscriptShadow39 = __goscriptTuple43[1]
				}
			}
			if (__goscriptShadow39 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.int64(v))
			__goscriptShadow38 = $.goSlice(__goscriptShadow38, __goscriptShadow39, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple44: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple44[0]
			n = __goscriptTuple44[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(sp), $.int64(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderInt64Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt64Slice(): void {
	if (((coderInt64Slice) as any) === undefined) {
		coderInt64Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt64Slice, marshal: appendInt64Slice, unmarshal: consumeInt64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderInt64Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt64Slice) as any) === undefined) {
		__goscript_init_coderInt64Slice()
	}
	return coderInt64Slice
}

export function __goscript_set_coderInt64Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt64Slice, __goscriptValue)
}

export function sizeInt64PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget27 = s, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow27.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow27.backing[__goscriptRangeWindow27.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendInt64PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget28 = s, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow28.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint($.uint64(v)))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget29 = s, __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget29), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow29.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export var coderInt64PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderInt64PackedSlice(): void {
	if (((coderInt64PackedSlice) as any) === undefined) {
		coderInt64PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeInt64PackedSlice, marshal: appendInt64PackedSlice, unmarshal: consumeInt64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderInt64PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderInt64PackedSlice) as any) === undefined) {
		__goscript_init_coderInt64PackedSlice()
	}
	return coderInt64PackedSlice
}

export function __goscript_set_coderInt64PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderInt64PackedSlice, __goscriptValue)
}

export function sizeInt64Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
}

export function appendInt64Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	return [b, null]
}

export function consumeInt64Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple45: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple45[0]
			n = __goscriptTuple45[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt64($.int64(v)), (out).clone(), null]
}

export var coderInt64Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt64Value(): void {
	if (((coderInt64Value) as any) === undefined) {
		coderInt64Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt64Value, marshal: appendInt64Value, unmarshal: consumeInt64Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderInt64Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt64Value) as any) === undefined) {
		__goscript_init_coderInt64Value()
	}
	return coderInt64Value
}

export function __goscript_set_coderInt64Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt64Value, __goscriptValue)
}

export async function sizeInt64SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Int())))
	}
	return size
}

export async function appendInt64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export async function consumeInt64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow40 = b
		let __goscriptTuple46: any = protowire.ConsumeBytes(__goscriptShadow40)
		let __goscriptShadow41: $.Slice<number> = __goscriptTuple46[0]
		let n = __goscriptTuple46[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow41) > 0) {
			let v: bigint = 0n
			let __goscriptShadow42: number = 0
			if (($.sliceLen(__goscriptShadow41) >= 1) && ($.arrayIndex(__goscriptShadow41!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow41!, 0))
				__goscriptShadow42 = 1
			} else {
				if (($.sliceLen(__goscriptShadow41) >= 2) && ($.arrayIndex(__goscriptShadow41!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow41!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow41!, 1)), 7n)))
					__goscriptShadow42 = 2
				} else {
					let __goscriptTuple47: any = protowire.ConsumeVarint(__goscriptShadow41)
					v = __goscriptTuple47[0]
					__goscriptShadow42 = __goscriptTuple47[1]
				}
			}
			if (__goscriptShadow42 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow41 = $.goSlice(__goscriptShadow41, __goscriptShadow42, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple48: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple48[0]
			n = __goscriptTuple48[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderInt64SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt64SliceValue(): void {
	if (((coderInt64SliceValue) as any) === undefined) {
		coderInt64SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt64SliceValue, marshal: appendInt64SliceValue, unmarshal: consumeInt64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderInt64SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt64SliceValue) as any) === undefined) {
		__goscript_init_coderInt64SliceValue()
	}
	return coderInt64SliceValue
}

export function __goscript_set_coderInt64SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt64SliceValue, __goscriptValue)
}

export async function sizeInt64PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow43 = llen
		for (let i = 0, __goscriptShadow44 = __goscriptShadow43; i < __goscriptShadow44; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Int())))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendInt64PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint($.uint64($.markAsStructValue($.cloneStructValue(v)).Int())))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export var coderInt64PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderInt64PackedSliceValue(): void {
	if (((coderInt64PackedSliceValue) as any) === undefined) {
		coderInt64PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeInt64PackedSliceValue, marshal: appendInt64PackedSliceValue, unmarshal: consumeInt64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderInt64PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderInt64PackedSliceValue) as any) === undefined) {
		__goscript_init_coderInt64PackedSliceValue()
	}
	return coderInt64PackedSliceValue
}

export function __goscript_set_coderInt64PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderInt64PackedSliceValue, __goscriptValue)
}

export function sizeSint64(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Int64())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag(v))
}

export function appendSint64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag(v))
	return [b, null]
}

export function consumeSint64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple49: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple49[0]
			n = __goscriptTuple49[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int64()!.value = protowire.DecodeZigZag(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderSint64: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint64(): void {
	if (((coderSint64) as any) === undefined) {
		coderSint64 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint64, marshal: appendSint64, unmarshal: consumeSint64, merge: __goscript_merge_gen.mergeInt64}, true)
	}
}

export function __goscript_get_coderSint64(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint64) as any) === undefined) {
		__goscript_init_coderSint64()
	}
	return coderSint64
}

export function __goscript_set_coderSint64(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint64, __goscriptValue)
}

export function sizeSint64NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag(v))
}

export function appendSint64NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag(v))
	return [b, null]
}

export var coderSint64NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint64NoZero(): void {
	if (((coderSint64NoZero) as any) === undefined) {
		coderSint64NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint64NoZero, marshal: appendSint64NoZero, unmarshal: consumeSint64, merge: __goscript_merge_gen.mergeInt64NoZero}, true)
	}
}

export function __goscript_get_coderSint64NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint64NoZero) as any) === undefined) {
		__goscript_init_coderSint64NoZero()
	}
	return coderSint64NoZero
}

export function __goscript_set_coderSint64NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint64NoZero, __goscriptValue)
}

export function sizeSint64Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Int64Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag(v))
}

export function appendSint64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Int64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag(v))
	return [b, null]
}

export function consumeSint64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple50: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple50[0]
			n = __goscriptTuple50[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int64Ptr()
	if ($.pointerValue<$.VarRef<bigint> | null>(vp) == null) {
		vp!.value = $.varRef<bigint>(0n)
	}
	$.pointerValue<$.VarRef<bigint> | null>(vp)!.value = protowire.DecodeZigZag(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderSint64Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint64Ptr(): void {
	if (((coderSint64Ptr) as any) === undefined) {
		coderSint64Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint64Ptr, marshal: appendSint64Ptr, unmarshal: consumeSint64Ptr, merge: __goscript_merge_gen.mergeInt64Ptr}, true)
	}
}

export function __goscript_get_coderSint64Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint64Ptr) as any) === undefined) {
		__goscript_init_coderSint64Ptr()
	}
	return coderSint64Ptr
}

export function __goscript_set_coderSint64Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint64Ptr, __goscriptValue)
}

export function sizeSint64Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	for (let __goscriptRangeTarget30 = s, __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow30.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow30.backing[__goscriptRangeWindow30.offset + __rangeIndex] as bigint)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(protowire.EncodeZigZag(v)))
	}
	return size
}

export function appendSint64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	for (let __goscriptRangeTarget31 = s, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow31.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag(v))
	}
	return [b, null]
}

export function consumeSint64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int64Slice()
	if (wtyp == 2) {
		let __goscriptShadow45 = b
		let __goscriptTuple51: any = protowire.ConsumeBytes(__goscriptShadow45)
		let __goscriptShadow46: $.Slice<number> = __goscriptTuple51[0]
		let n = __goscriptTuple51[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget32 = __goscriptShadow46, __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget32), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow32.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growInt64Slice(count)
		}
		let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(sp)
		while ($.sliceLen(__goscriptShadow46) > 0) {
			let v: bigint = 0n
			let __goscriptShadow47: number = 0
			if (($.sliceLen(__goscriptShadow46) >= 1) && ($.arrayIndex(__goscriptShadow46!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow46!, 0))
				__goscriptShadow47 = 1
			} else {
				if (($.sliceLen(__goscriptShadow46) >= 2) && ($.arrayIndex(__goscriptShadow46!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow46!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow46!, 1)), 7n)))
					__goscriptShadow47 = 2
				} else {
					let __goscriptTuple52: any = protowire.ConsumeVarint(__goscriptShadow46)
					v = __goscriptTuple52[0]
					__goscriptShadow47 = __goscriptTuple52[1]
				}
			}
			if (__goscriptShadow47 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, protowire.DecodeZigZag(v))
			__goscriptShadow46 = $.goSlice(__goscriptShadow46, __goscriptShadow47, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple53: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple53[0]
			n = __goscriptTuple53[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(sp), protowire.DecodeZigZag(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderSint64Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint64Slice(): void {
	if (((coderSint64Slice) as any) === undefined) {
		coderSint64Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint64Slice, marshal: appendSint64Slice, unmarshal: consumeSint64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderSint64Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint64Slice) as any) === undefined) {
		__goscript_init_coderSint64Slice()
	}
	return coderSint64Slice
}

export function __goscript_set_coderSint64Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint64Slice, __goscriptValue)
}

export function sizeSint64PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget33 = s, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget33), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow33.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag(v)))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendSint64PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget34 = s, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow34.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag(v)))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget35 = s, __goscriptRangeWindow35 = $.sliceRange(__goscriptRangeTarget35), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow35.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow35.backing[__goscriptRangeWindow35.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag(v))
	}
	return [b, null]
}

export var coderSint64PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSint64PackedSlice(): void {
	if (((coderSint64PackedSlice) as any) === undefined) {
		coderSint64PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSint64PackedSlice, marshal: appendSint64PackedSlice, unmarshal: consumeSint64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderSint64PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSint64PackedSlice) as any) === undefined) {
		__goscript_init_coderSint64PackedSlice()
	}
	return coderSint64PackedSlice
}

export function __goscript_set_coderSint64PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSint64PackedSlice, __goscriptValue)
}

export function sizeSint64Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int()))
}

export function appendSint64Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int()))
	return [b, null]
}

export function consumeSint64Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple54: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple54[0]
			n = __goscriptTuple54[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt64(protowire.DecodeZigZag(v)), (out).clone(), null]
}

export var coderSint64Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint64Value(): void {
	if (((coderSint64Value) as any) === undefined) {
		coderSint64Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint64Value, marshal: appendSint64Value, unmarshal: consumeSint64Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderSint64Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint64Value) as any) === undefined) {
		__goscript_init_coderSint64Value()
	}
	return coderSint64Value
}

export function __goscript_set_coderSint64Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint64Value, __goscriptValue)
}

export async function sizeSint64SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint(protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int())))
	}
	return size
}

export async function appendSint64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export async function consumeSint64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow48 = b
		let __goscriptTuple55: any = protowire.ConsumeBytes(__goscriptShadow48)
		let __goscriptShadow49: $.Slice<number> = __goscriptTuple55[0]
		let n = __goscriptTuple55[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow49) > 0) {
			let v: bigint = 0n
			let __goscriptShadow50: number = 0
			if (($.sliceLen(__goscriptShadow49) >= 1) && ($.arrayIndex(__goscriptShadow49!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow49!, 0))
				__goscriptShadow50 = 1
			} else {
				if (($.sliceLen(__goscriptShadow49) >= 2) && ($.arrayIndex(__goscriptShadow49!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow49!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow49!, 1)), 7n)))
					__goscriptShadow50 = 2
				} else {
					let __goscriptTuple56: any = protowire.ConsumeVarint(__goscriptShadow49)
					v = __goscriptTuple56[0]
					__goscriptShadow50 = __goscriptTuple56[1]
				}
			}
			if (__goscriptShadow50 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64(protowire.DecodeZigZag(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow49 = $.goSlice(__goscriptShadow49, __goscriptShadow50, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple57: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple57[0]
			n = __goscriptTuple57[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64(protowire.DecodeZigZag(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderSint64SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint64SliceValue(): void {
	if (((coderSint64SliceValue) as any) === undefined) {
		coderSint64SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint64SliceValue, marshal: appendSint64SliceValue, unmarshal: consumeSint64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSint64SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint64SliceValue) as any) === undefined) {
		__goscript_init_coderSint64SliceValue()
	}
	return coderSint64SliceValue
}

export function __goscript_set_coderSint64SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint64SliceValue, __goscriptValue)
}

export async function sizeSint64PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow51 = llen
		for (let i = 0, __goscriptShadow52 = __goscriptShadow51; i < __goscriptShadow52; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int())))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendSint64PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint(protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int())))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, protowire.EncodeZigZag($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export var coderSint64PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSint64PackedSliceValue(): void {
	if (((coderSint64PackedSliceValue) as any) === undefined) {
		coderSint64PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSint64PackedSliceValue, marshal: appendSint64PackedSliceValue, unmarshal: consumeSint64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSint64PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSint64PackedSliceValue) as any) === undefined) {
		__goscript_init_coderSint64PackedSliceValue()
	}
	return coderSint64PackedSliceValue
}

export function __goscript_set_coderSint64PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSint64PackedSliceValue, __goscriptValue)
}

export function sizeUint64(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Uint64())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(v)
}

export function appendUint64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Uint64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, v)
	return [b, null]
}

export function consumeUint64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple58: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple58[0]
			n = __goscriptTuple58[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Uint64()!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderUint64: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint64(): void {
	if (((coderUint64) as any) === undefined) {
		coderUint64 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint64, marshal: appendUint64, unmarshal: consumeUint64, merge: __goscript_merge_gen.mergeUint64}, true)
	}
}

export function __goscript_get_coderUint64(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint64) as any) === undefined) {
		__goscript_init_coderUint64()
	}
	return coderUint64
}

export function __goscript_set_coderUint64(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint64, __goscriptValue)
}

export function sizeUint64NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Uint64())
	if (v == 0n) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(v)
}

export function appendUint64NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Uint64())
	if (v == 0n) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, v)
	return [b, null]
}

export var coderUint64NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint64NoZero(): void {
	if (((coderUint64NoZero) as any) === undefined) {
		coderUint64NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint64NoZero, marshal: appendUint64NoZero, unmarshal: consumeUint64, merge: __goscript_merge_gen.mergeUint64NoZero}, true)
	}
}

export function __goscript_get_coderUint64NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint64NoZero) as any) === undefined) {
		__goscript_init_coderUint64NoZero()
	}
	return coderUint64NoZero
}

export function __goscript_set_coderUint64NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint64NoZero, __goscriptValue)
}

export function sizeUint64Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Uint64Ptr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(v)
}

export function appendUint64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Uint64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendVarint(b, v)
	return [b, null]
}

export function consumeUint64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple59: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple59[0]
			n = __goscriptTuple59[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Uint64Ptr()
	if ($.pointerValue<$.VarRef<bigint> | null>(vp) == null) {
		vp!.value = $.varRef<bigint>(0n)
	}
	$.pointerValue<$.VarRef<bigint> | null>(vp)!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderUint64Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint64Ptr(): void {
	if (((coderUint64Ptr) as any) === undefined) {
		coderUint64Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint64Ptr, marshal: appendUint64Ptr, unmarshal: consumeUint64Ptr, merge: __goscript_merge_gen.mergeUint64Ptr}, true)
	}
}

export function __goscript_get_coderUint64Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint64Ptr) as any) === undefined) {
		__goscript_init_coderUint64Ptr()
	}
	return coderUint64Ptr
}

export function __goscript_set_coderUint64Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint64Ptr, __goscriptValue)
}

export function sizeUint64Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	for (let __goscriptRangeTarget36 = s, __goscriptRangeWindow36 = $.sliceRange(__goscriptRangeTarget36), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow36.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow36.backing[__goscriptRangeWindow36.offset + __rangeIndex] as bigint)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeVarint(v))
	}
	return size
}

export function appendUint64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	for (let __goscriptRangeTarget37 = s, __goscriptRangeWindow37 = $.sliceRange(__goscriptRangeTarget37), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow37.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow37.backing[__goscriptRangeWindow37.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendVarint(b, v)
	}
	return [b, null]
}

export function consumeUint64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Uint64Slice()
	if (wtyp == 2) {
		let __goscriptShadow53 = b
		let __goscriptTuple60: any = protowire.ConsumeBytes(__goscriptShadow53)
		let __goscriptShadow54: $.Slice<number> = __goscriptTuple60[0]
		let n = __goscriptTuple60[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = 0
		for (let __goscriptRangeTarget38 = __goscriptShadow54, __goscriptRangeWindow38 = $.sliceRange(__goscriptRangeTarget38), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow38.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow38.backing[__goscriptRangeWindow38.offset + __rangeIndex] as number), 8)
			if (v < 0x80) {
				count++
			}
		}
		if (count > 0) {
			p.growUint64Slice(count)
		}
		let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(sp)
		while ($.sliceLen(__goscriptShadow54) > 0) {
			let v: bigint = 0n
			let __goscriptShadow55: number = 0
			if (($.sliceLen(__goscriptShadow54) >= 1) && ($.arrayIndex(__goscriptShadow54!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow54!, 0))
				__goscriptShadow55 = 1
			} else {
				if (($.sliceLen(__goscriptShadow54) >= 2) && ($.arrayIndex(__goscriptShadow54!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow54!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow54!, 1)), 7n)))
					__goscriptShadow55 = 2
				} else {
					let __goscriptTuple61: any = protowire.ConsumeVarint(__goscriptShadow54)
					v = __goscriptTuple61[0]
					__goscriptShadow55 = __goscriptTuple61[1]
				}
			}
			if (__goscriptShadow55 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, v)
			__goscriptShadow54 = $.goSlice(__goscriptShadow54, __goscriptShadow55, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 0) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple62: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple62[0]
			n = __goscriptTuple62[1]
		}
	}
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(sp), v)
	out.n = n
	return [(out).clone(), null]
}

export var coderUint64Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint64Slice(): void {
	if (((coderUint64Slice) as any) === undefined) {
		coderUint64Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint64Slice, marshal: appendUint64Slice, unmarshal: consumeUint64Slice, merge: __goscript_merge_gen.mergeUint64Slice}, true)
	}
}

export function __goscript_get_coderUint64Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint64Slice) as any) === undefined) {
		__goscript_init_coderUint64Slice()
	}
	return coderUint64Slice
}

export function __goscript_set_coderUint64Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint64Slice, __goscriptValue)
}

export function sizeUint64PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget39 = s, __goscriptRangeWindow39 = $.sliceRange(__goscriptRangeTarget39), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow39.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow39.backing[__goscriptRangeWindow39.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint(v))
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendUint64PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = 0
	for (let __goscriptRangeTarget40 = s, __goscriptRangeWindow40 = $.sliceRange(__goscriptRangeTarget40), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow40.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow40.backing[__goscriptRangeWindow40.offset + __rangeIndex] as bigint)
		n = n + (protowire.SizeVarint(v))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget41 = s, __goscriptRangeWindow41 = $.sliceRange(__goscriptRangeTarget41), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow41.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow41.backing[__goscriptRangeWindow41.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, v)
	}
	return [b, null]
}

export var coderUint64PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderUint64PackedSlice(): void {
	if (((coderUint64PackedSlice) as any) === undefined) {
		coderUint64PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeUint64PackedSlice, marshal: appendUint64PackedSlice, unmarshal: consumeUint64Slice, merge: __goscript_merge_gen.mergeUint64Slice}, true)
	}
}

export function __goscript_get_coderUint64PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderUint64PackedSlice) as any) === undefined) {
		__goscript_init_coderUint64PackedSlice()
	}
	return coderUint64PackedSlice
}

export function __goscript_set_coderUint64PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderUint64PackedSlice, __goscriptValue)
}

export function sizeUint64Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeVarint($.markAsStructValue($.cloneStructValue(v)).Uint())
}

export function appendUint64Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	return [b, null]
}

export function consumeUint64Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple63: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple63[0]
			n = __goscriptTuple63[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfUint64(v), (out).clone(), null]
}

export var coderUint64Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint64Value(): void {
	if (((coderUint64Value) as any) === undefined) {
		coderUint64Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint64Value, marshal: appendUint64Value, unmarshal: consumeUint64Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderUint64Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint64Value) as any) === undefined) {
		__goscript_init_coderUint64Value()
	}
	return coderUint64Value
}

export function __goscript_set_coderUint64Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint64Value, __goscriptValue)
}

export async function sizeUint64SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeVarint($.markAsStructValue($.cloneStructValue(v)).Uint()))
	}
	return size
}

export async function appendUint64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendVarint(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	}
	return [b, null]
}

export async function consumeUint64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow56 = b
		let __goscriptTuple64: any = protowire.ConsumeBytes(__goscriptShadow56)
		let __goscriptShadow57: $.Slice<number> = __goscriptTuple64[0]
		let n = __goscriptTuple64[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow57) > 0) {
			let v: bigint = 0n
			let __goscriptShadow58: number = 0
			if (($.sliceLen(__goscriptShadow57) >= 1) && ($.arrayIndex(__goscriptShadow57!, 0) < 0x80)) {
				v = $.uint64($.arrayIndex(__goscriptShadow57!, 0))
				__goscriptShadow58 = 1
			} else {
				if (($.sliceLen(__goscriptShadow57) >= 2) && ($.arrayIndex(__goscriptShadow57!, 1) < 128)) {
					v = $.uint64Add($.uint64($.arrayIndex(__goscriptShadow57!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(__goscriptShadow57!, 1)), 7n)))
					__goscriptShadow58 = 2
				} else {
					let __goscriptTuple65: any = protowire.ConsumeVarint(__goscriptShadow57)
					v = __goscriptTuple65[0]
					__goscriptShadow58 = __goscriptTuple65[1]
				}
			}
			if (__goscriptShadow58 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow57 = $.goSlice(__goscriptShadow57, __goscriptShadow58, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let v: bigint = 0n
	let n: number = 0
	if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) < 0x80)) {
		v = $.uint64($.arrayIndex(b!, 0))
		n = 1
	} else {
		if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
			v = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
			n = 2
		} else {
			let __goscriptTuple66: any = protowire.ConsumeVarint(b)
			v = __goscriptTuple66[0]
			n = __goscriptTuple66[1]
		}
	}
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderUint64SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint64SliceValue(): void {
	if (((coderUint64SliceValue) as any) === undefined) {
		coderUint64SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint64SliceValue, marshal: appendUint64SliceValue, unmarshal: consumeUint64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderUint64SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint64SliceValue) as any) === undefined) {
		__goscript_init_coderUint64SliceValue()
	}
	return coderUint64SliceValue
}

export function __goscript_set_coderUint64SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint64SliceValue, __goscriptValue)
}

export async function sizeUint64PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = 0
	{
		let __goscriptShadow59 = llen
		for (let i = 0, __goscriptShadow60 = __goscriptShadow59; i < __goscriptShadow60; i++) {
			let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			n = n + (protowire.SizeVarint($.markAsStructValue($.cloneStructValue(v)).Uint()))
		}
	}
	return tagsize + protowire.SizeBytes(n)
}

export async function appendUint64PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = 0
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		n = n + (protowire.SizeVarint($.markAsStructValue($.cloneStructValue(v)).Uint()))
	}
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	}
	return [b, null]
}

export var coderUint64PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderUint64PackedSliceValue(): void {
	if (((coderUint64PackedSliceValue) as any) === undefined) {
		coderUint64PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeUint64PackedSliceValue, marshal: appendUint64PackedSliceValue, unmarshal: consumeUint64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderUint64PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderUint64PackedSliceValue) as any) === undefined) {
		__goscript_init_coderUint64PackedSliceValue()
	}
	return coderUint64PackedSliceValue
}

export function __goscript_set_coderUint64PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderUint64PackedSliceValue, __goscriptValue)
}

export function sizeSfixed32(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendSfixed32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, $.uint(v, 32))
	return [b, null]
}

export function consumeSfixed32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int32()!.value = $.int(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed32: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed32(): void {
	if (((coderSfixed32) as any) === undefined) {
		coderSfixed32 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed32, marshal: appendSfixed32, unmarshal: consumeSfixed32, merge: __goscript_merge_gen.mergeInt32}, true)
	}
}

export function __goscript_get_coderSfixed32(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed32) as any) === undefined) {
		__goscript_init_coderSfixed32()
	}
	return coderSfixed32
}

export function __goscript_set_coderSfixed32(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed32, __goscriptValue)
}

export function sizeSfixed32NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendSfixed32NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(p.Int32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, $.uint(v, 32))
	return [b, null]
}

export var coderSfixed32NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed32NoZero(): void {
	if (((coderSfixed32NoZero) as any) === undefined) {
		coderSfixed32NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed32NoZero, marshal: appendSfixed32NoZero, unmarshal: consumeSfixed32, merge: __goscript_merge_gen.mergeInt32NoZero}, true)
	}
}

export function __goscript_get_coderSfixed32NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed32NoZero) as any) === undefined) {
		__goscript_init_coderSfixed32NoZero()
	}
	return coderSfixed32NoZero
}

export function __goscript_set_coderSfixed32NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed32NoZero, __goscriptValue)
}

export function sizeSfixed32Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendSfixed32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Int32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, $.uint(v, 32))
	return [b, null]
}

export function consumeSfixed32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = $.int(v, 32)
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed32Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed32Ptr(): void {
	if (((coderSfixed32Ptr) as any) === undefined) {
		coderSfixed32Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed32Ptr, marshal: appendSfixed32Ptr, unmarshal: consumeSfixed32Ptr, merge: __goscript_merge_gen.mergeInt32Ptr}, true)
	}
}

export function __goscript_get_coderSfixed32Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed32Ptr) as any) === undefined) {
		__goscript_init_coderSfixed32Ptr()
	}
	return coderSfixed32Ptr
}

export function __goscript_set_coderSfixed32Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed32Ptr, __goscriptValue)
}

export function sizeSfixed32Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32())
	return size
}

export function appendSfixed32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	for (let __goscriptRangeTarget42 = s, __goscriptRangeWindow42 = $.sliceRange(__goscriptRangeTarget42), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow42.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow42.backing[__goscriptRangeWindow42.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed32(b, $.uint(v, 32))
	}
	return [b, null]
}

export function consumeSfixed32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int32Slice()
	if (wtyp == 2) {
		let __goscriptShadow61 = b
		let __goscriptTuple67: any = protowire.ConsumeBytes(__goscriptShadow61)
		let __goscriptShadow62: $.Slice<number> = __goscriptTuple67[0]
		let n = __goscriptTuple67[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow62) / protowire.SizeFixed32())
		if (count > 0) {
			p.growInt32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow62) > 0) {
			let [v, __goscriptShadow63] = protowire.ConsumeFixed32(__goscriptShadow62)
			if (__goscriptShadow63 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.int($.int(v, 32), 32))
			__goscriptShadow62 = $.goSlice(__goscriptShadow62, __goscriptShadow63, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), $.int($.int(v, 32), 32))
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed32Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed32Slice(): void {
	if (((coderSfixed32Slice) as any) === undefined) {
		coderSfixed32Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed32Slice, marshal: appendSfixed32Slice, unmarshal: consumeSfixed32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderSfixed32Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed32Slice) as any) === undefined) {
		__goscript_init_coderSfixed32Slice()
	}
	return coderSfixed32Slice
}

export function __goscript_set_coderSfixed32Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed32Slice, __goscriptValue)
}

export function sizeSfixed32PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendSfixed32PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Int32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget43 = s, __goscriptRangeWindow43 = $.sliceRange(__goscriptRangeTarget43), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow43.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow43.backing[__goscriptRangeWindow43.offset + __rangeIndex] as number), 32)
		b = protowire.AppendFixed32(b, $.uint(v, 32))
	}
	return [b, null]
}

export var coderSfixed32PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed32PackedSlice(): void {
	if (((coderSfixed32PackedSlice) as any) === undefined) {
		coderSfixed32PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed32PackedSlice, marshal: appendSfixed32PackedSlice, unmarshal: consumeSfixed32Slice, merge: __goscript_merge_gen.mergeInt32Slice}, true)
	}
}

export function __goscript_get_coderSfixed32PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed32PackedSlice) as any) === undefined) {
		__goscript_init_coderSfixed32PackedSlice()
	}
	return coderSfixed32PackedSlice
}

export function __goscript_set_coderSfixed32PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed32PackedSlice, __goscriptValue)
}

export function sizeSfixed32Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed32()
}

export function appendSfixed32Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
	return [b, null]
}

export function consumeSfixed32Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt32($.int(v, 32)), (out).clone(), null]
}

export var coderSfixed32Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed32Value(): void {
	if (((coderSfixed32Value) as any) === undefined) {
		coderSfixed32Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed32Value, marshal: appendSfixed32Value, unmarshal: consumeSfixed32Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderSfixed32Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed32Value) as any) === undefined) {
		__goscript_init_coderSfixed32Value()
	}
	return coderSfixed32Value
}

export function __goscript_set_coderSfixed32Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed32Value, __goscriptValue)
}

export async function sizeSfixed32SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed32())
	return size
}

export async function appendSfixed32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
	}
	return [b, null]
}

export async function consumeSfixed32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow64 = b
		let __goscriptTuple68: any = protowire.ConsumeBytes(__goscriptShadow64)
		let __goscriptShadow65: $.Slice<number> = __goscriptTuple68[0]
		let n = __goscriptTuple68[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow65) > 0) {
			let [v, __goscriptShadow66] = protowire.ConsumeFixed32(__goscriptShadow65)
			if (__goscriptShadow66 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow65 = $.goSlice(__goscriptShadow65, __goscriptShadow66, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderSfixed32SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed32SliceValue(): void {
	if (((coderSfixed32SliceValue) as any) === undefined) {
		coderSfixed32SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed32SliceValue, marshal: appendSfixed32SliceValue, unmarshal: consumeSfixed32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSfixed32SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed32SliceValue) as any) === undefined) {
		__goscript_init_coderSfixed32SliceValue()
	}
	return coderSfixed32SliceValue
}

export function __goscript_set_coderSfixed32SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed32SliceValue, __goscriptValue)
}

export async function sizeSfixed32PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed32()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendSfixed32PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
	}
	return [b, null]
}

export var coderSfixed32PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed32PackedSliceValue(): void {
	if (((coderSfixed32PackedSliceValue) as any) === undefined) {
		coderSfixed32PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed32PackedSliceValue, marshal: appendSfixed32PackedSliceValue, unmarshal: consumeSfixed32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSfixed32PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed32PackedSliceValue) as any) === undefined) {
		__goscript_init_coderSfixed32PackedSliceValue()
	}
	return coderSfixed32PackedSliceValue
}

export function __goscript_set_coderSfixed32PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed32PackedSliceValue, __goscriptValue)
}

export function sizeFixed32(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFixed32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, v)
	return [b, null]
}

export function consumeFixed32(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Uint32()!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed32: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed32(): void {
	if (((coderFixed32) as any) === undefined) {
		coderFixed32 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed32, marshal: appendFixed32, unmarshal: consumeFixed32, merge: __goscript_merge_gen.mergeUint32}, true)
	}
}

export function __goscript_get_coderFixed32(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed32) as any) === undefined) {
		__goscript_init_coderFixed32()
	}
	return coderFixed32
}

export function __goscript_set_coderFixed32(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed32, __goscriptValue)
}

export function sizeFixed32NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	if (v == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFixed32NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(p.Uint32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, v)
	return [b, null]
}

export var coderFixed32NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed32NoZero(): void {
	if (((coderFixed32NoZero) as any) === undefined) {
		coderFixed32NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed32NoZero, marshal: appendFixed32NoZero, unmarshal: consumeFixed32, merge: __goscript_merge_gen.mergeUint32NoZero}, true)
	}
}

export function __goscript_get_coderFixed32NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed32NoZero) as any) === undefined) {
		__goscript_init_coderFixed32NoZero()
	}
	return coderFixed32NoZero
}

export function __goscript_set_coderFixed32NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed32NoZero, __goscriptValue)
}

export function sizeFixed32Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFixed32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Uint32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, v)
	return [b, null]
}

export function consumeFixed32Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Uint32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed32Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed32Ptr(): void {
	if (((coderFixed32Ptr) as any) === undefined) {
		coderFixed32Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed32Ptr, marshal: appendFixed32Ptr, unmarshal: consumeFixed32Ptr, merge: __goscript_merge_gen.mergeUint32Ptr}, true)
	}
}

export function __goscript_get_coderFixed32Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed32Ptr) as any) === undefined) {
		__goscript_init_coderFixed32Ptr()
	}
	return coderFixed32Ptr
}

export function __goscript_set_coderFixed32Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed32Ptr, __goscriptValue)
}

export function sizeFixed32Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32())
	return size
}

export function appendFixed32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	for (let __goscriptRangeTarget44 = s, __goscriptRangeWindow44 = $.sliceRange(__goscriptRangeTarget44), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow44.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow44.backing[__goscriptRangeWindow44.offset + __rangeIndex] as number), 32)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed32(b, v)
	}
	return [b, null]
}

export function consumeFixed32Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Uint32Slice()
	if (wtyp == 2) {
		let __goscriptShadow67 = b
		let __goscriptTuple69: any = protowire.ConsumeBytes(__goscriptShadow67)
		let __goscriptShadow68: $.Slice<number> = __goscriptTuple69[0]
		let n = __goscriptTuple69[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow68) / protowire.SizeFixed32())
		if (count > 0) {
			p.growUint32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow68) > 0) {
			let [v, __goscriptShadow69] = protowire.ConsumeFixed32(__goscriptShadow68)
			if (__goscriptShadow69 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.uint(v, 32))
			__goscriptShadow68 = $.goSlice(__goscriptShadow68, __goscriptShadow69, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), $.uint(v, 32))
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed32Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed32Slice(): void {
	if (((coderFixed32Slice) as any) === undefined) {
		coderFixed32Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed32Slice, marshal: appendFixed32Slice, unmarshal: consumeFixed32Slice, merge: __goscript_merge_gen.mergeUint32Slice}, true)
	}
}

export function __goscript_get_coderFixed32Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed32Slice) as any) === undefined) {
		__goscript_init_coderFixed32Slice()
	}
	return coderFixed32Slice
}

export function __goscript_set_coderFixed32Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed32Slice, __goscriptValue)
}

export function sizeFixed32PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendFixed32PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Uint32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget45 = s, __goscriptRangeWindow45 = $.sliceRange(__goscriptRangeTarget45), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow45.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow45.backing[__goscriptRangeWindow45.offset + __rangeIndex] as number), 32)
		b = protowire.AppendFixed32(b, v)
	}
	return [b, null]
}

export var coderFixed32PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed32PackedSlice(): void {
	if (((coderFixed32PackedSlice) as any) === undefined) {
		coderFixed32PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed32PackedSlice, marshal: appendFixed32PackedSlice, unmarshal: consumeFixed32Slice, merge: __goscript_merge_gen.mergeUint32Slice}, true)
	}
}

export function __goscript_get_coderFixed32PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed32PackedSlice) as any) === undefined) {
		__goscript_init_coderFixed32PackedSlice()
	}
	return coderFixed32PackedSlice
}

export function __goscript_set_coderFixed32PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed32PackedSlice, __goscriptValue)
}

export function sizeFixed32Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed32()
}

export function appendFixed32Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))
	return [b, null]
}

export function consumeFixed32Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfUint32($.uint(v, 32)), (out).clone(), null]
}

export var coderFixed32Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed32Value(): void {
	if (((coderFixed32Value) as any) === undefined) {
		coderFixed32Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed32Value, marshal: appendFixed32Value, unmarshal: consumeFixed32Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderFixed32Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed32Value) as any) === undefined) {
		__goscript_init_coderFixed32Value()
	}
	return coderFixed32Value
}

export function __goscript_set_coderFixed32Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed32Value, __goscriptValue)
}

export async function sizeFixed32SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed32())
	return size
}

export async function appendFixed32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))
	}
	return [b, null]
}

export async function consumeFixed32SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow70 = b
		let __goscriptTuple70: any = protowire.ConsumeBytes(__goscriptShadow70)
		let __goscriptShadow71: $.Slice<number> = __goscriptTuple70[0]
		let n = __goscriptTuple70[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow71) > 0) {
			let [v, __goscriptShadow72] = protowire.ConsumeFixed32(__goscriptShadow71)
			if (__goscriptShadow72 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow71 = $.goSlice(__goscriptShadow71, __goscriptShadow72, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderFixed32SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed32SliceValue(): void {
	if (((coderFixed32SliceValue) as any) === undefined) {
		coderFixed32SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed32SliceValue, marshal: appendFixed32SliceValue, unmarshal: consumeFixed32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFixed32SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed32SliceValue) as any) === undefined) {
		__goscript_init_coderFixed32SliceValue()
	}
	return coderFixed32SliceValue
}

export function __goscript_set_coderFixed32SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed32SliceValue, __goscriptValue)
}

export async function sizeFixed32PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed32()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendFixed32PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed32(b, $.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))
	}
	return [b, null]
}

export var coderFixed32PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed32PackedSliceValue(): void {
	if (((coderFixed32PackedSliceValue) as any) === undefined) {
		coderFixed32PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed32PackedSliceValue, marshal: appendFixed32PackedSliceValue, unmarshal: consumeFixed32SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFixed32PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed32PackedSliceValue) as any) === undefined) {
		__goscript_init_coderFixed32PackedSliceValue()
	}
	return coderFixed32PackedSliceValue
}

export function __goscript_set_coderFixed32PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed32PackedSliceValue, __goscriptValue)
}

export function sizeFloat(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFloat(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>(p.Float32())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, math.Float32bits(v))
	return [b, null]
}

export function consumeFloat(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Float32()!.value = math.Float32frombits(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderFloat: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFloat(): void {
	if (((coderFloat) as any) === undefined) {
		coderFloat = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFloat, marshal: appendFloat, unmarshal: consumeFloat, merge: __goscript_merge_gen.mergeFloat32}, true)
	}
}

export function __goscript_get_coderFloat(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFloat) as any) === undefined) {
		__goscript_init_coderFloat()
	}
	return coderFloat
}

export function __goscript_set_coderFloat(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFloat, __goscriptValue)
}

export function sizeFloatNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<number>(p.Float32())
	if ((v == 0) && !math.Signbit(v)) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFloatNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>(p.Float32())
	if ((v == 0) && !math.Signbit(v)) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, math.Float32bits(v))
	return [b, null]
}

export var coderFloatNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFloatNoZero(): void {
	if (((coderFloatNoZero) as any) === undefined) {
		coderFloatNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFloatNoZero, marshal: appendFloatNoZero, unmarshal: consumeFloat, merge: __goscript_merge_gen.mergeFloat32NoZero}, true)
	}
}

export function __goscript_get_coderFloatNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFloatNoZero) as any) === undefined) {
		__goscript_init_coderFloatNoZero()
	}
	return coderFloatNoZero
}

export function __goscript_set_coderFloatNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFloatNoZero, __goscriptValue)
}

export function sizeFloatPtr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32()
}

export function appendFloatPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Float32Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed32(b, math.Float32bits(v))
	return [b, null]
}

export function consumeFloatPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Float32Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = math.Float32frombits(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderFloatPtr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFloatPtr(): void {
	if (((coderFloatPtr) as any) === undefined) {
		coderFloatPtr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFloatPtr, marshal: appendFloatPtr, unmarshal: consumeFloatPtr, merge: __goscript_merge_gen.mergeFloat32Ptr}, true)
	}
}

export function __goscript_get_coderFloatPtr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFloatPtr) as any) === undefined) {
		__goscript_init_coderFloatPtr()
	}
	return coderFloatPtr
}

export function __goscript_set_coderFloatPtr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFloatPtr, __goscriptValue)
}

export function sizeFloatSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float32Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed32())
	return size
}

export function appendFloatSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float32Slice())
	for (let __goscriptRangeTarget46 = s, __goscriptRangeWindow46 = $.sliceRange(__goscriptRangeTarget46), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow46.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow46.backing[__goscriptRangeWindow46.offset + __rangeIndex] as number)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed32(b, math.Float32bits(v))
	}
	return [b, null]
}

export function consumeFloatSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Float32Slice()
	if (wtyp == 2) {
		let __goscriptShadow73 = b
		let __goscriptTuple71: any = protowire.ConsumeBytes(__goscriptShadow73)
		let __goscriptShadow74: $.Slice<number> = __goscriptTuple71[0]
		let n = __goscriptTuple71[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow74) / protowire.SizeFixed32())
		if (count > 0) {
			p.growFloat32Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow74) > 0) {
			let [v, __goscriptShadow75] = protowire.ConsumeFixed32(__goscriptShadow74)
			if (__goscriptShadow75 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, math.Float32frombits(v))
			__goscriptShadow74 = $.goSlice(__goscriptShadow74, __goscriptShadow75, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 5) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), math.Float32frombits(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderFloatSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFloatSlice(): void {
	if (((coderFloatSlice) as any) === undefined) {
		coderFloatSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFloatSlice, marshal: appendFloatSlice, unmarshal: consumeFloatSlice, merge: __goscript_merge_gen.mergeFloat32Slice}, true)
	}
}

export function __goscript_get_coderFloatSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFloatSlice) as any) === undefined) {
		__goscript_init_coderFloatSlice()
	}
	return coderFloatSlice
}

export function __goscript_set_coderFloatSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFloatSlice, __goscriptValue)
}

export function sizeFloatPackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendFloatPackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget47 = s, __goscriptRangeWindow47 = $.sliceRange(__goscriptRangeTarget47), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow47.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow47.backing[__goscriptRangeWindow47.offset + __rangeIndex] as number)
		b = protowire.AppendFixed32(b, math.Float32bits(v))
	}
	return [b, null]
}

export var coderFloatPackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFloatPackedSlice(): void {
	if (((coderFloatPackedSlice) as any) === undefined) {
		coderFloatPackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFloatPackedSlice, marshal: appendFloatPackedSlice, unmarshal: consumeFloatSlice, merge: __goscript_merge_gen.mergeFloat32Slice}, true)
	}
}

export function __goscript_get_coderFloatPackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFloatPackedSlice) as any) === undefined) {
		__goscript_init_coderFloatPackedSlice()
	}
	return coderFloatPackedSlice
}

export function __goscript_set_coderFloatPackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFloatPackedSlice, __goscriptValue)
}

export function sizeFloatValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed32()
}

export function appendFloatValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed32(b, math.Float32bits(globalThis.Math.fround($.markAsStructValue($.cloneStructValue(v)).Float())))
	return [b, null]
}

export function consumeFloatValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32))), (out).clone(), null]
}

export var coderFloatValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFloatValue(): void {
	if (((coderFloatValue) as any) === undefined) {
		coderFloatValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFloatValue, marshal: appendFloatValue, unmarshal: consumeFloatValue, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderFloatValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFloatValue) as any) === undefined) {
		__goscript_init_coderFloatValue()
	}
	return coderFloatValue
}

export function __goscript_set_coderFloatValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFloatValue, __goscriptValue)
}

export async function sizeFloatSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed32())
	return size
}

export async function appendFloatSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed32(b, math.Float32bits(globalThis.Math.fround($.markAsStructValue($.cloneStructValue(v)).Float())))
	}
	return [b, null]
}

export async function consumeFloatSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow76 = b
		let __goscriptTuple72: any = protowire.ConsumeBytes(__goscriptShadow76)
		let __goscriptShadow77: $.Slice<number> = __goscriptTuple72[0]
		let n = __goscriptTuple72[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow77) > 0) {
			let [v, __goscriptShadow78] = protowire.ConsumeFixed32(__goscriptShadow77)
			if (__goscriptShadow78 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow77 = $.goSlice(__goscriptShadow77, __goscriptShadow78, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 5) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed32(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderFloatSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFloatSliceValue(): void {
	if (((coderFloatSliceValue) as any) === undefined) {
		coderFloatSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFloatSliceValue, marshal: appendFloatSliceValue, unmarshal: consumeFloatSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFloatSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFloatSliceValue) as any) === undefined) {
		__goscript_init_coderFloatSliceValue()
	}
	return coderFloatSliceValue
}

export function __goscript_set_coderFloatSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFloatSliceValue, __goscriptValue)
}

export async function sizeFloatPackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed32()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendFloatPackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed32()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed32(b, math.Float32bits(globalThis.Math.fround($.markAsStructValue($.cloneStructValue(v)).Float())))
	}
	return [b, null]
}

export var coderFloatPackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFloatPackedSliceValue(): void {
	if (((coderFloatPackedSliceValue) as any) === undefined) {
		coderFloatPackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFloatPackedSliceValue, marshal: appendFloatPackedSliceValue, unmarshal: consumeFloatSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFloatPackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFloatPackedSliceValue) as any) === undefined) {
		__goscript_init_coderFloatPackedSliceValue()
	}
	return coderFloatPackedSliceValue
}

export function __goscript_set_coderFloatPackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFloatPackedSliceValue, __goscriptValue)
}

export function sizeSfixed64(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendSfixed64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, $.uint64(v))
	return [b, null]
}

export function consumeSfixed64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Int64()!.value = $.int64(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed64: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed64(): void {
	if (((coderSfixed64) as any) === undefined) {
		coderSfixed64 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed64, marshal: appendSfixed64, unmarshal: consumeSfixed64, merge: __goscript_merge_gen.mergeInt64}, true)
	}
}

export function __goscript_get_coderSfixed64(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed64) as any) === undefined) {
		__goscript_init_coderSfixed64()
	}
	return coderSfixed64
}

export function __goscript_set_coderSfixed64(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed64, __goscriptValue)
}

export function sizeSfixed64NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendSfixed64NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Int64())
	if (v == 0n) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, $.uint64(v))
	return [b, null]
}

export var coderSfixed64NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed64NoZero(): void {
	if (((coderSfixed64NoZero) as any) === undefined) {
		coderSfixed64NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed64NoZero, marshal: appendSfixed64NoZero, unmarshal: consumeSfixed64, merge: __goscript_merge_gen.mergeInt64NoZero}, true)
	}
}

export function __goscript_get_coderSfixed64NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed64NoZero) as any) === undefined) {
		__goscript_init_coderSfixed64NoZero()
	}
	return coderSfixed64NoZero
}

export function __goscript_set_coderSfixed64NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed64NoZero, __goscriptValue)
}

export function sizeSfixed64Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendSfixed64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Int64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, $.uint64(v))
	return [b, null]
}

export function consumeSfixed64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Int64Ptr()
	if ($.pointerValue<$.VarRef<bigint> | null>(vp) == null) {
		vp!.value = $.varRef<bigint>(0n)
	}
	$.pointerValue<$.VarRef<bigint> | null>(vp)!.value = $.int64(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed64Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed64Ptr(): void {
	if (((coderSfixed64Ptr) as any) === undefined) {
		coderSfixed64Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed64Ptr, marshal: appendSfixed64Ptr, unmarshal: consumeSfixed64Ptr, merge: __goscript_merge_gen.mergeInt64Ptr}, true)
	}
}

export function __goscript_get_coderSfixed64Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed64Ptr) as any) === undefined) {
		__goscript_init_coderSfixed64Ptr()
	}
	return coderSfixed64Ptr
}

export function __goscript_set_coderSfixed64Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed64Ptr, __goscriptValue)
}

export function sizeSfixed64Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64())
	return size
}

export function appendSfixed64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	for (let __goscriptRangeTarget48 = s, __goscriptRangeWindow48 = $.sliceRange(__goscriptRangeTarget48), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow48.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow48.backing[__goscriptRangeWindow48.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed64(b, $.uint64(v))
	}
	return [b, null]
}

export function consumeSfixed64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Int64Slice()
	if (wtyp == 2) {
		let __goscriptShadow79 = b
		let __goscriptTuple73: any = protowire.ConsumeBytes(__goscriptShadow79)
		let __goscriptShadow80: $.Slice<number> = __goscriptTuple73[0]
		let n = __goscriptTuple73[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow80) / protowire.SizeFixed64())
		if (count > 0) {
			p.growInt64Slice(count)
		}
		let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(sp)
		while ($.sliceLen(__goscriptShadow80) > 0) {
			let [v, __goscriptShadow81] = protowire.ConsumeFixed64(__goscriptShadow80)
			if (__goscriptShadow81 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, $.int64(v))
			__goscriptShadow80 = $.goSlice(__goscriptShadow80, __goscriptShadow81, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(sp), $.int64(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderSfixed64Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed64Slice(): void {
	if (((coderSfixed64Slice) as any) === undefined) {
		coderSfixed64Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed64Slice, marshal: appendSfixed64Slice, unmarshal: consumeSfixed64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderSfixed64Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed64Slice) as any) === undefined) {
		__goscript_init_coderSfixed64Slice()
	}
	return coderSfixed64Slice
}

export function __goscript_set_coderSfixed64Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed64Slice, __goscriptValue)
}

export function sizeSfixed64PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendSfixed64PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Int64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget49 = s, __goscriptRangeWindow49 = $.sliceRange(__goscriptRangeTarget49), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow49.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow49.backing[__goscriptRangeWindow49.offset + __rangeIndex] as bigint)
		b = protowire.AppendFixed64(b, $.uint64(v))
	}
	return [b, null]
}

export var coderSfixed64PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderSfixed64PackedSlice(): void {
	if (((coderSfixed64PackedSlice) as any) === undefined) {
		coderSfixed64PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeSfixed64PackedSlice, marshal: appendSfixed64PackedSlice, unmarshal: consumeSfixed64Slice, merge: __goscript_merge_gen.mergeInt64Slice}, true)
	}
}

export function __goscript_get_coderSfixed64PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderSfixed64PackedSlice) as any) === undefined) {
		__goscript_init_coderSfixed64PackedSlice()
	}
	return coderSfixed64PackedSlice
}

export function __goscript_set_coderSfixed64PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderSfixed64PackedSlice, __goscriptValue)
}

export function sizeSfixed64Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed64()
}

export function appendSfixed64Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed64(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	return [b, null]
}

export function consumeSfixed64Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfInt64($.int64(v)), (out).clone(), null]
}

export var coderSfixed64Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed64Value(): void {
	if (((coderSfixed64Value) as any) === undefined) {
		coderSfixed64Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed64Value, marshal: appendSfixed64Value, unmarshal: consumeSfixed64Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderSfixed64Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed64Value) as any) === undefined) {
		__goscript_init_coderSfixed64Value()
	}
	return coderSfixed64Value
}

export function __goscript_set_coderSfixed64Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed64Value, __goscriptValue)
}

export async function sizeSfixed64SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed64())
	return size
}

export async function appendSfixed64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed64(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export async function consumeSfixed64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow82 = b
		let __goscriptTuple74: any = protowire.ConsumeBytes(__goscriptShadow82)
		let __goscriptShadow83: $.Slice<number> = __goscriptTuple74[0]
		let n = __goscriptTuple74[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow83) > 0) {
			let [v, __goscriptShadow84] = protowire.ConsumeFixed64(__goscriptShadow83)
			if (__goscriptShadow84 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow83 = $.goSlice(__goscriptShadow83, __goscriptShadow84, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderSfixed64SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed64SliceValue(): void {
	if (((coderSfixed64SliceValue) as any) === undefined) {
		coderSfixed64SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed64SliceValue, marshal: appendSfixed64SliceValue, unmarshal: consumeSfixed64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSfixed64SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed64SliceValue) as any) === undefined) {
		__goscript_init_coderSfixed64SliceValue()
	}
	return coderSfixed64SliceValue
}

export function __goscript_set_coderSfixed64SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed64SliceValue, __goscriptValue)
}

export async function sizeSfixed64PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed64()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendSfixed64PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed64(b, $.uint64($.markAsStructValue($.cloneStructValue(v)).Int()))
	}
	return [b, null]
}

export var coderSfixed64PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderSfixed64PackedSliceValue(): void {
	if (((coderSfixed64PackedSliceValue) as any) === undefined) {
		coderSfixed64PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeSfixed64PackedSliceValue, marshal: appendSfixed64PackedSliceValue, unmarshal: consumeSfixed64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderSfixed64PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderSfixed64PackedSliceValue) as any) === undefined) {
		__goscript_init_coderSfixed64PackedSliceValue()
	}
	return coderSfixed64PackedSliceValue
}

export function __goscript_set_coderSfixed64PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderSfixed64PackedSliceValue, __goscriptValue)
}

export function sizeFixed64(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendFixed64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Uint64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, v)
	return [b, null]
}

export function consumeFixed64(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Uint64()!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed64: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed64(): void {
	if (((coderFixed64) as any) === undefined) {
		coderFixed64 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed64, marshal: appendFixed64, unmarshal: consumeFixed64, merge: __goscript_merge_gen.mergeUint64}, true)
	}
}

export function __goscript_get_coderFixed64(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed64) as any) === undefined) {
		__goscript_init_coderFixed64()
	}
	return coderFixed64
}

export function __goscript_set_coderFixed64(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed64, __goscriptValue)
}

export function sizeFixed64NoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<bigint>(p.Uint64())
	if (v == 0n) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendFixed64NoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(p.Uint64())
	if (v == 0n) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, v)
	return [b, null]
}

export var coderFixed64NoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed64NoZero(): void {
	if (((coderFixed64NoZero) as any) === undefined) {
		coderFixed64NoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed64NoZero, marshal: appendFixed64NoZero, unmarshal: consumeFixed64, merge: __goscript_merge_gen.mergeUint64NoZero}, true)
	}
}

export function __goscript_get_coderFixed64NoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed64NoZero) as any) === undefined) {
		__goscript_init_coderFixed64NoZero()
	}
	return coderFixed64NoZero
}

export function __goscript_set_coderFixed64NoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed64NoZero, __goscriptValue)
}

export function sizeFixed64Ptr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendFixed64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(p.Uint64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, v)
	return [b, null]
}

export function consumeFixed64Ptr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Uint64Ptr()
	if ($.pointerValue<$.VarRef<bigint> | null>(vp) == null) {
		vp!.value = $.varRef<bigint>(0n)
	}
	$.pointerValue<$.VarRef<bigint> | null>(vp)!.value = v
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed64Ptr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed64Ptr(): void {
	if (((coderFixed64Ptr) as any) === undefined) {
		coderFixed64Ptr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed64Ptr, marshal: appendFixed64Ptr, unmarshal: consumeFixed64Ptr, merge: __goscript_merge_gen.mergeUint64Ptr}, true)
	}
}

export function __goscript_get_coderFixed64Ptr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed64Ptr) as any) === undefined) {
		__goscript_init_coderFixed64Ptr()
	}
	return coderFixed64Ptr
}

export function __goscript_set_coderFixed64Ptr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed64Ptr, __goscriptValue)
}

export function sizeFixed64Slice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64())
	return size
}

export function appendFixed64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	for (let __goscriptRangeTarget50 = s, __goscriptRangeWindow50 = $.sliceRange(__goscriptRangeTarget50), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow50.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow50.backing[__goscriptRangeWindow50.offset + __rangeIndex] as bigint)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed64(b, v)
	}
	return [b, null]
}

export function consumeFixed64Slice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Uint64Slice()
	if (wtyp == 2) {
		let __goscriptShadow85 = b
		let __goscriptTuple75: any = protowire.ConsumeBytes(__goscriptShadow85)
		let __goscriptShadow86: $.Slice<number> = __goscriptTuple75[0]
		let n = __goscriptTuple75[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow86) / protowire.SizeFixed64())
		if (count > 0) {
			p.growUint64Slice(count)
		}
		let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(sp)
		while ($.sliceLen(__goscriptShadow86) > 0) {
			let [v, __goscriptShadow87] = protowire.ConsumeFixed64(__goscriptShadow86)
			if (__goscriptShadow87 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, v)
			__goscriptShadow86 = $.goSlice(__goscriptShadow86, __goscriptShadow87, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(sp), v)
	out.n = n
	return [(out).clone(), null]
}

export var coderFixed64Slice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed64Slice(): void {
	if (((coderFixed64Slice) as any) === undefined) {
		coderFixed64Slice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed64Slice, marshal: appendFixed64Slice, unmarshal: consumeFixed64Slice, merge: __goscript_merge_gen.mergeUint64Slice}, true)
	}
}

export function __goscript_get_coderFixed64Slice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed64Slice) as any) === undefined) {
		__goscript_init_coderFixed64Slice()
	}
	return coderFixed64Slice
}

export function __goscript_set_coderFixed64Slice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed64Slice, __goscriptValue)
}

export function sizeFixed64PackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendFixed64PackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(p.Uint64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget51 = s, __goscriptRangeWindow51 = $.sliceRange(__goscriptRangeTarget51), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow51.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow51.backing[__goscriptRangeWindow51.offset + __rangeIndex] as bigint)
		b = protowire.AppendFixed64(b, v)
	}
	return [b, null]
}

export var coderFixed64PackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderFixed64PackedSlice(): void {
	if (((coderFixed64PackedSlice) as any) === undefined) {
		coderFixed64PackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeFixed64PackedSlice, marshal: appendFixed64PackedSlice, unmarshal: consumeFixed64Slice, merge: __goscript_merge_gen.mergeUint64Slice}, true)
	}
}

export function __goscript_get_coderFixed64PackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderFixed64PackedSlice) as any) === undefined) {
		__goscript_init_coderFixed64PackedSlice()
	}
	return coderFixed64PackedSlice
}

export function __goscript_set_coderFixed64PackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderFixed64PackedSlice, __goscriptValue)
}

export function sizeFixed64Value(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed64()
}

export function appendFixed64Value(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed64(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	return [b, null]
}

export function consumeFixed64Value(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfUint64(v), (out).clone(), null]
}

export var coderFixed64Value: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed64Value(): void {
	if (((coderFixed64Value) as any) === undefined) {
		coderFixed64Value = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed64Value, marshal: appendFixed64Value, unmarshal: consumeFixed64Value, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderFixed64Value(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed64Value) as any) === undefined) {
		__goscript_init_coderFixed64Value()
	}
	return coderFixed64Value
}

export function __goscript_set_coderFixed64Value(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed64Value, __goscriptValue)
}

export async function sizeFixed64SliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed64())
	return size
}

export async function appendFixed64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed64(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	}
	return [b, null]
}

export async function consumeFixed64SliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow88 = b
		let __goscriptTuple76: any = protowire.ConsumeBytes(__goscriptShadow88)
		let __goscriptShadow89: $.Slice<number> = __goscriptTuple76[0]
		let n = __goscriptTuple76[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow89) > 0) {
			let [v, __goscriptShadow90] = protowire.ConsumeFixed64(__goscriptShadow89)
			if (__goscriptShadow90 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow89 = $.goSlice(__goscriptShadow89, __goscriptShadow90, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderFixed64SliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed64SliceValue(): void {
	if (((coderFixed64SliceValue) as any) === undefined) {
		coderFixed64SliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed64SliceValue, marshal: appendFixed64SliceValue, unmarshal: consumeFixed64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFixed64SliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed64SliceValue) as any) === undefined) {
		__goscript_init_coderFixed64SliceValue()
	}
	return coderFixed64SliceValue
}

export function __goscript_set_coderFixed64SliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed64SliceValue, __goscriptValue)
}

export async function sizeFixed64PackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed64()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendFixed64PackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed64(b, $.markAsStructValue($.cloneStructValue(v)).Uint())
	}
	return [b, null]
}

export var coderFixed64PackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderFixed64PackedSliceValue(): void {
	if (((coderFixed64PackedSliceValue) as any) === undefined) {
		coderFixed64PackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeFixed64PackedSliceValue, marshal: appendFixed64PackedSliceValue, unmarshal: consumeFixed64SliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderFixed64PackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderFixed64PackedSliceValue) as any) === undefined) {
		__goscript_init_coderFixed64PackedSliceValue()
	}
	return coderFixed64PackedSliceValue
}

export function __goscript_set_coderFixed64PackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderFixed64PackedSliceValue, __goscriptValue)
}

export function sizeDouble(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0

	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendDouble(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>(p.Float64())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, math.Float64bits(v))
	return [b, null]
}

export function consumeDouble(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Float64()!.value = math.Float64frombits(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderDouble: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderDouble(): void {
	if (((coderDouble) as any) === undefined) {
		coderDouble = new __goscript_codec_tables.pointerCoderFuncs({size: sizeDouble, marshal: appendDouble, unmarshal: consumeDouble, merge: __goscript_merge_gen.mergeFloat64}, true)
	}
}

export function __goscript_get_coderDouble(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderDouble) as any) === undefined) {
		__goscript_init_coderDouble()
	}
	return coderDouble
}

export function __goscript_set_coderDouble(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderDouble, __goscriptValue)
}

export function sizeDoubleNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<number>(p.Float64())
	if ((v == 0) && !math.Signbit(v)) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendDoubleNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>(p.Float64())
	if ((v == 0) && !math.Signbit(v)) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, math.Float64bits(v))
	return [b, null]
}

export var coderDoubleNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderDoubleNoZero(): void {
	if (((coderDoubleNoZero) as any) === undefined) {
		coderDoubleNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeDoubleNoZero, marshal: appendDoubleNoZero, unmarshal: consumeDouble, merge: __goscript_merge_gen.mergeFloat64NoZero}, true)
	}
}

export function __goscript_get_coderDoubleNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderDoubleNoZero) as any) === undefined) {
		__goscript_init_coderDoubleNoZero()
	}
	return coderDoubleNoZero
}

export function __goscript_set_coderDoubleNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderDoubleNoZero, __goscriptValue)
}

export function sizeDoublePtr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64()
}

export function appendDoublePtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(p.Float64Ptr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendFixed64(b, math.Float64bits(v))
	return [b, null]
}

export function consumeDoublePtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.Float64Ptr()
	if ($.pointerValue<$.VarRef<number> | null>(vp) == null) {
		vp!.value = $.varRef<number>(0)
	}
	$.pointerValue<$.VarRef<number> | null>(vp)!.value = math.Float64frombits(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderDoublePtr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderDoublePtr(): void {
	if (((coderDoublePtr) as any) === undefined) {
		coderDoublePtr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeDoublePtr, marshal: appendDoublePtr, unmarshal: consumeDoublePtr, merge: __goscript_merge_gen.mergeFloat64Ptr}, true)
	}
}

export function __goscript_get_coderDoublePtr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderDoublePtr) as any) === undefined) {
		__goscript_init_coderDoublePtr()
	}
	return coderDoublePtr
}

export function __goscript_set_coderDoublePtr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderDoublePtr, __goscriptValue)
}

export function sizeDoubleSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float64Slice())
	size = $.sliceLen(s) * ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeFixed64())
	return size
}

export function appendDoubleSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float64Slice())
	for (let __goscriptRangeTarget52 = s, __goscriptRangeWindow52 = $.sliceRange(__goscriptRangeTarget52), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow52.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow52.backing[__goscriptRangeWindow52.offset + __rangeIndex] as number)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendFixed64(b, math.Float64bits(v))
	}
	return [b, null]
}

export function consumeDoubleSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.Float64Slice()
	if (wtyp == 2) {
		let __goscriptShadow91 = b
		let __goscriptTuple77: any = protowire.ConsumeBytes(__goscriptShadow91)
		let __goscriptShadow92: $.Slice<number> = __goscriptTuple77[0]
		let n = __goscriptTuple77[1]
		if (n < 0) {
			return [(out).clone(), __goscript_decode.errDecode]
		}
		let count = globalThis.Math.trunc($.sliceLen(__goscriptShadow92) / protowire.SizeFixed64())
		if (count > 0) {
			p.growFloat64Slice(count)
		}
		let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(sp)
		while ($.sliceLen(__goscriptShadow92) > 0) {
			let [v, __goscriptShadow93] = protowire.ConsumeFixed64(__goscriptShadow92)
			if (__goscriptShadow93 < 0) {
				return [(out).clone(), __goscript_decode.errDecode]
			}
			s = $.appendOne(s, math.Float64frombits(v))
			__goscriptShadow92 = $.goSlice(__goscriptShadow92, __goscriptShadow93, undefined)
		}
		sp!.value = s
		out.n = n
		return [(out).clone(), null]
	}
	if (wtyp != 1) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<number>>(sp), math.Float64frombits(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderDoubleSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderDoubleSlice(): void {
	if (((coderDoubleSlice) as any) === undefined) {
		coderDoubleSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeDoubleSlice, marshal: appendDoubleSlice, unmarshal: consumeDoubleSlice, merge: __goscript_merge_gen.mergeFloat64Slice}, true)
	}
}

export function __goscript_get_coderDoubleSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderDoubleSlice) as any) === undefined) {
		__goscript_init_coderDoubleSlice()
	}
	return coderDoubleSlice
}

export function __goscript_set_coderDoubleSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderDoubleSlice, __goscriptValue)
}

export function sizeDoublePackedSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes(n)
}

export function appendDoublePackedSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Float64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	let n = $.sliceLen(s) * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget53 = s, __goscriptRangeWindow53 = $.sliceRange(__goscriptRangeTarget53), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow53.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow53.backing[__goscriptRangeWindow53.offset + __rangeIndex] as number)
		b = protowire.AppendFixed64(b, math.Float64bits(v))
	}
	return [b, null]
}

export var coderDoublePackedSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderDoublePackedSlice(): void {
	if (((coderDoublePackedSlice) as any) === undefined) {
		coderDoublePackedSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeDoublePackedSlice, marshal: appendDoublePackedSlice, unmarshal: consumeDoubleSlice, merge: __goscript_merge_gen.mergeFloat64Slice}, true)
	}
}

export function __goscript_get_coderDoublePackedSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderDoublePackedSlice) as any) === undefined) {
		__goscript_init_coderDoublePackedSlice()
	}
	return coderDoublePackedSlice
}

export function __goscript_set_coderDoublePackedSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderDoublePackedSlice, __goscriptValue)
}

export function sizeDoubleValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeFixed64()
}

export function appendDoubleValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendFixed64(b, math.Float64bits($.markAsStructValue($.cloneStructValue(v)).Float()))
	return [b, null]
}

export function consumeDoubleValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfFloat64(math.Float64frombits(v)), (out).clone(), null]
}

export var coderDoubleValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderDoubleValue(): void {
	if (((coderDoubleValue) as any) === undefined) {
		coderDoubleValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeDoubleValue, marshal: appendDoubleValue, unmarshal: consumeDoubleValue, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderDoubleValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderDoubleValue) as any) === undefined) {
		__goscript_init_coderDoubleValue()
	}
	return coderDoubleValue
}

export function __goscript_set_coderDoubleValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderDoubleValue, __goscriptValue)
}

export async function sizeDoubleSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * (tagsize + protowire.SizeFixed64())
	return size
}

export async function appendDoubleSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendFixed64(b, math.Float64bits($.markAsStructValue($.cloneStructValue(v)).Float()))
	}
	return [b, null]
}

export async function consumeDoubleSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp == 2) {
		let __goscriptShadow94 = b
		let __goscriptTuple78: any = protowire.ConsumeBytes(__goscriptShadow94)
		let __goscriptShadow95: $.Slice<number> = __goscriptTuple78[0]
		let n = __goscriptTuple78[1]
		if (n < 0) {
			return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
		}
		while ($.sliceLen(__goscriptShadow95) > 0) {
			let [v, __goscriptShadow96] = protowire.ConsumeFixed64(__goscriptShadow95)
			if (__goscriptShadow96 < 0) {
				return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat64(math.Float64frombits(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscriptShadow95 = $.goSlice(__goscriptShadow95, __goscriptShadow96, undefined)
		}
		out.n = n
		return [(listv).clone(), (out).clone(), null]
	}
	if (wtyp != 1) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let [v, n] = protowire.ConsumeFixed64(b)
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat64(math.Float64frombits(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderDoubleSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderDoubleSliceValue(): void {
	if (((coderDoubleSliceValue) as any) === undefined) {
		coderDoubleSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeDoubleSliceValue, marshal: appendDoubleSliceValue, unmarshal: consumeDoubleSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderDoubleSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderDoubleSliceValue) as any) === undefined) {
		__goscript_init_coderDoubleSliceValue()
	}
	return coderDoubleSliceValue
}

export function __goscript_set_coderDoubleSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderDoubleSliceValue, __goscriptValue)
}

export async function sizeDoublePackedSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return 0
	}
	let n = llen * protowire.SizeFixed64()
	return tagsize + protowire.SizeBytes(n)
}

export async function appendDoublePackedSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	let llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (llen == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, wiretag)
	let n = llen * protowire.SizeFixed64()
	b = protowire.AppendVarint(b, $.uint64(n))
	for (let i = 0; i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendFixed64(b, math.Float64bits($.markAsStructValue($.cloneStructValue(v)).Float()))
	}
	return [b, null]
}

export var coderDoublePackedSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderDoublePackedSliceValue(): void {
	if (((coderDoublePackedSliceValue) as any) === undefined) {
		coderDoublePackedSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeDoublePackedSliceValue, marshal: appendDoublePackedSliceValue, unmarshal: consumeDoubleSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderDoublePackedSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderDoublePackedSliceValue) as any) === undefined) {
		__goscript_init_coderDoublePackedSliceValue()
	}
	return coderDoublePackedSliceValue
}

export function __goscript_set_coderDoublePackedSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderDoublePackedSliceValue, __goscriptValue)
}

export function sizeString(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<string>(p.String())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.stringLen(v))
}

export function appendString(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(p.String())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	return [b, null]
}

export function consumeString(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple79: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple79[0]
	let n = __goscriptTuple79[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.String()!.value = $.bytesToString(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderString: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderString(): void {
	if (((coderString) as any) === undefined) {
		coderString = new __goscript_codec_tables.pointerCoderFuncs({size: sizeString, marshal: appendString, unmarshal: consumeString, merge: __goscript_merge_gen.mergeString}, true)
	}
}

export function __goscript_get_coderString(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderString) as any) === undefined) {
		__goscript_init_coderString()
	}
	return coderString
}

export function __goscript_set_coderString(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderString, __goscriptValue)
}

export function appendStringValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(p.String())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	if (!utf8.ValidString(v)) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export function consumeStringValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple80: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple80[0]
	let n = __goscriptTuple80[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	p.String()!.value = $.bytesToString(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderStringValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringValidateUTF8(): void {
	if (((coderStringValidateUTF8) as any) === undefined) {
		coderStringValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeString, marshal: appendStringValidateUTF8, unmarshal: consumeStringValidateUTF8, merge: __goscript_merge_gen.mergeString}, true)
	}
}

export function __goscript_get_coderStringValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringValidateUTF8) as any) === undefined) {
		__goscript_init_coderStringValidateUTF8()
	}
	return coderStringValidateUTF8
}

export function __goscript_set_coderStringValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringValidateUTF8, __goscriptValue)
}

export function sizeStringNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<string>(p.String())
	if ($.stringLen(v) == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.stringLen(v))
}

export function appendStringNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(p.String())
	if ($.stringLen(v) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	return [b, null]
}

export var coderStringNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringNoZero(): void {
	if (((coderStringNoZero) as any) === undefined) {
		coderStringNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringNoZero, marshal: appendStringNoZero, unmarshal: consumeString, merge: __goscript_merge_gen.mergeStringNoZero}, true)
	}
}

export function __goscript_get_coderStringNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringNoZero) as any) === undefined) {
		__goscript_init_coderStringNoZero()
	}
	return coderStringNoZero
}

export function __goscript_set_coderStringNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringNoZero, __goscriptValue)
}

export function appendStringNoZeroValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(p.String())
	if ($.stringLen(v) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	if (!utf8.ValidString(v)) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export var coderStringNoZeroValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringNoZeroValidateUTF8(): void {
	if (((coderStringNoZeroValidateUTF8) as any) === undefined) {
		coderStringNoZeroValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringNoZero, marshal: appendStringNoZeroValidateUTF8, unmarshal: consumeStringValidateUTF8, merge: __goscript_merge_gen.mergeStringNoZero}, true)
	}
}

export function __goscript_get_coderStringNoZeroValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringNoZeroValidateUTF8) as any) === undefined) {
		__goscript_init_coderStringNoZeroValidateUTF8()
	}
	return coderStringNoZeroValidateUTF8
}

export function __goscript_set_coderStringNoZeroValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringNoZeroValidateUTF8, __goscriptValue)
}

export function sizeStringPtr(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v = $.pointerValue<string>($.pointerValue<$.VarRef<string> | null>(p.StringPtr()))
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.stringLen(v))
}

export function appendStringPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>($.pointerValue<$.VarRef<string> | null>(p.StringPtr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	return [b, null]
}

export function consumeStringPtr(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple81: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple81[0]
	let n = __goscriptTuple81[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let vp = p.StringPtr()
	if ($.pointerValue<$.VarRef<string> | null>(vp) == null) {
		vp!.value = $.varRef<string>("")
	}
	$.pointerValue<$.VarRef<string> | null>(vp)!.value = $.bytesToString(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderStringPtr: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringPtr(): void {
	if (((coderStringPtr) as any) === undefined) {
		coderStringPtr = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringPtr, marshal: appendStringPtr, unmarshal: consumeStringPtr, merge: __goscript_merge_gen.mergeStringPtr}, true)
	}
}

export function __goscript_get_coderStringPtr(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringPtr) as any) === undefined) {
		__goscript_init_coderStringPtr()
	}
	return coderStringPtr
}

export function __goscript_set_coderStringPtr(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringPtr, __goscriptValue)
}

export function appendStringPtrValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>($.pointerValue<$.VarRef<string> | null>(p.StringPtr()))
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendString(b, v)
	if (!utf8.ValidString(v)) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export function consumeStringPtrValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple82: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple82[0]
	let n = __goscriptTuple82[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	let vp = p.StringPtr()
	if ($.pointerValue<$.VarRef<string> | null>(vp) == null) {
		vp!.value = $.varRef<string>("")
	}
	$.pointerValue<$.VarRef<string> | null>(vp)!.value = $.bytesToString(v)
	out.n = n
	return [(out).clone(), null]
}

export var coderStringPtrValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringPtrValidateUTF8(): void {
	if (((coderStringPtrValidateUTF8) as any) === undefined) {
		coderStringPtrValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringPtr, marshal: appendStringPtrValidateUTF8, unmarshal: consumeStringPtrValidateUTF8, merge: __goscript_merge_gen.mergeStringPtr}, true)
	}
}

export function __goscript_get_coderStringPtrValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringPtrValidateUTF8) as any) === undefined) {
		__goscript_init_coderStringPtrValidateUTF8()
	}
	return coderStringPtrValidateUTF8
}

export function __goscript_set_coderStringPtrValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringPtrValidateUTF8, __goscriptValue)
}

export function sizeStringSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(p.StringSlice())
	for (let __goscriptRangeTarget54 = s, __goscriptRangeWindow54 = $.sliceRange(__goscriptRangeTarget54), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow54.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow54.backing[__goscriptRangeWindow54.offset + __rangeIndex] as string)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.stringLen(v)))
	}
	return size
}

export function appendStringSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(p.StringSlice())
	for (let __goscriptRangeTarget55 = s, __goscriptRangeWindow55 = $.sliceRange(__goscriptRangeTarget55), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow55.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow55.backing[__goscriptRangeWindow55.offset + __rangeIndex] as string)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendString(b, v)
	}
	return [b, null]
}

export function consumeStringSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.StringSlice()
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple83: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple83[0]
	let n = __goscriptTuple83[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<string>>(sp), $.bytesToString(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderStringSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringSlice(): void {
	if (((coderStringSlice) as any) === undefined) {
		coderStringSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringSlice, marshal: appendStringSlice, unmarshal: consumeStringSlice, merge: __goscript_merge_gen.mergeStringSlice}, true)
	}
}

export function __goscript_get_coderStringSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringSlice) as any) === undefined) {
		__goscript_init_coderStringSlice()
	}
	return coderStringSlice
}

export function __goscript_set_coderStringSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringSlice, __goscriptValue)
}

export function appendStringSliceValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(p.StringSlice())
	for (let __goscriptRangeTarget56 = s, __goscriptRangeWindow56 = $.sliceRange(__goscriptRangeTarget56), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow56.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow56.backing[__goscriptRangeWindow56.offset + __rangeIndex] as string)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendString(b, v)
		if (!utf8.ValidString(v)) {
			return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
		}
	}
	return [b, null]
}

export function consumeStringSliceValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple84: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple84[0]
	let n = __goscriptTuple84[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	let sp = p.StringSlice()
	sp!.value = $.appendOne($.pointerValue<$.Slice<string>>(sp), $.bytesToString(v))
	out.n = n
	return [(out).clone(), null]
}

export var coderStringSliceValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderStringSliceValidateUTF8(): void {
	if (((coderStringSliceValidateUTF8) as any) === undefined) {
		coderStringSliceValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeStringSlice, marshal: appendStringSliceValidateUTF8, unmarshal: consumeStringSliceValidateUTF8, merge: __goscript_merge_gen.mergeStringSlice}, true)
	}
}

export function __goscript_get_coderStringSliceValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderStringSliceValidateUTF8) as any) === undefined) {
		__goscript_init_coderStringSliceValidateUTF8()
	}
	return coderStringSliceValidateUTF8
}

export function __goscript_set_coderStringSliceValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderStringSliceValidateUTF8, __goscriptValue)
}

export function sizeStringValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeBytes($.stringLen($.markAsStructValue($.cloneStructValue(v)).String()))
}

export function appendStringValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendString(b, $.markAsStructValue($.cloneStructValue(v)).String())
	return [b, null]
}

export function consumeStringValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple85: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple85[0]
	let n = __goscriptTuple85[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfString($.bytesToString(v)), (out).clone(), null]
}

export var coderStringValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderStringValue(): void {
	if (((coderStringValue) as any) === undefined) {
		coderStringValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeStringValue, marshal: appendStringValue, unmarshal: consumeStringValue, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderStringValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderStringValue) as any) === undefined) {
		__goscript_init_coderStringValue()
	}
	return coderStringValue
}

export function __goscript_set_coderStringValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderStringValue, __goscriptValue)
}

export function appendStringValueValidateUTF8(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendString(b, $.markAsStructValue($.cloneStructValue(v)).String())
	if (!utf8.ValidString($.markAsStructValue($.cloneStructValue(v)).String())) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export function consumeStringValueValidateUTF8(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple86: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple86[0]
	let n = __goscriptTuple86[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [new protoreflect.Value(undefined, true), (out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	out.n = n
	return [protoreflect.ValueOfString($.bytesToString(v)), (out).clone(), null]
}

export var coderStringValueValidateUTF8: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderStringValueValidateUTF8(): void {
	if (((coderStringValueValidateUTF8) as any) === undefined) {
		coderStringValueValidateUTF8 = new __goscript_codec_tables.valueCoderFuncs({size: sizeStringValue, marshal: appendStringValueValidateUTF8, unmarshal: consumeStringValueValidateUTF8, merge: __goscript_merge.mergeScalarValue}, true)
	}
}

export function __goscript_get_coderStringValueValidateUTF8(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderStringValueValidateUTF8) as any) === undefined) {
		__goscript_init_coderStringValueValidateUTF8()
	}
	return coderStringValueValidateUTF8
}

export function __goscript_set_coderStringValueValidateUTF8(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderStringValueValidateUTF8, __goscriptValue)
}

export async function sizeStringSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeBytes($.stringLen($.markAsStructValue($.cloneStructValue(v)).String())))
	}
	return size
}

export async function appendStringSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendString(b, $.markAsStructValue($.cloneStructValue(v)).String())
	}
	return [b, null]
}

export async function consumeStringSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple87: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple87[0]
	let n = __goscriptTuple87[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfString($.bytesToString(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderStringSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderStringSliceValue(): void {
	if (((coderStringSliceValue) as any) === undefined) {
		coderStringSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeStringSliceValue, marshal: appendStringSliceValue, unmarshal: consumeStringSliceValue, merge: __goscript_merge.mergeListValue}, true)
	}
}

export function __goscript_get_coderStringSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderStringSliceValue) as any) === undefined) {
		__goscript_init_coderStringSliceValue()
	}
	return coderStringSliceValue
}

export function __goscript_set_coderStringSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderStringSliceValue, __goscriptValue)
}

export function sizeBytes(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.sliceLen(v))
}

export function appendBytes(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendBytes(b, v)
	return [b, null]
}

export function consumeBytes(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple88: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple88[0]
	let n = __goscriptTuple88[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Bytes()!.value = $.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytes: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytes(): void {
	if (((coderBytes) as any) === undefined) {
		coderBytes = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytes, marshal: appendBytes, unmarshal: consumeBytes, merge: __goscript_merge.mergeBytes}, true)
	}
}

export function __goscript_get_coderBytes(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytes) as any) === undefined) {
		__goscript_init_coderBytes()
	}
	return coderBytes
}

export function __goscript_set_coderBytes(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytes, __goscriptValue)
}

export function appendBytesValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendBytes(b, v)
	if (!utf8.Valid(v)) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export function consumeBytesValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple89: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple89[0]
	let n = __goscriptTuple89[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	p.Bytes()!.value = $.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytesValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytesValidateUTF8(): void {
	if (((coderBytesValidateUTF8) as any) === undefined) {
		coderBytesValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytes, marshal: appendBytesValidateUTF8, unmarshal: consumeBytesValidateUTF8, merge: __goscript_merge.mergeBytes}, true)
	}
}

export function __goscript_get_coderBytesValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytesValidateUTF8) as any) === undefined) {
		__goscript_init_coderBytesValidateUTF8()
	}
	return coderBytesValidateUTF8
}

export function __goscript_set_coderBytesValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytesValidateUTF8, __goscriptValue)
}

export function sizeBytesNoZero(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	if ($.sliceLen(v) == 0) {
		return 0
	}
	return $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.sliceLen(v))
}

export function appendBytesNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	if ($.sliceLen(v) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendBytes(b, v)
	return [b, null]
}

export function consumeBytesNoZero(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple90: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple90[0]
	let n = __goscriptTuple90[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	p.Bytes()!.value = $.appendSlice<number>(null, v, $.byteSliceHint)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytesNoZero: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytesNoZero(): void {
	if (((coderBytesNoZero) as any) === undefined) {
		coderBytesNoZero = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytesNoZero, marshal: appendBytesNoZero, unmarshal: consumeBytesNoZero, merge: __goscript_merge.mergeBytesNoZero}, true)
	}
}

export function __goscript_get_coderBytesNoZero(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytesNoZero) as any) === undefined) {
		__goscript_init_coderBytesNoZero()
	}
	return coderBytesNoZero
}

export function __goscript_set_coderBytesNoZero(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytesNoZero, __goscriptValue)
}

export function appendBytesNoZeroValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(p.Bytes())
	if ($.sliceLen(v) == 0) {
		return [b, null]
	}
	b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
	b = protowire.AppendBytes(b, v)
	if (!utf8.Valid(v)) {
		return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	return [b, null]
}

export function consumeBytesNoZeroValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple91: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple91[0]
	let n = __goscriptTuple91[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	p.Bytes()!.value = $.appendSlice<number>(null, v, $.byteSliceHint)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytesNoZeroValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytesNoZeroValidateUTF8(): void {
	if (((coderBytesNoZeroValidateUTF8) as any) === undefined) {
		coderBytesNoZeroValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytesNoZero, marshal: appendBytesNoZeroValidateUTF8, unmarshal: consumeBytesNoZeroValidateUTF8, merge: __goscript_merge.mergeBytesNoZero}, true)
	}
}

export function __goscript_get_coderBytesNoZeroValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytesNoZeroValidateUTF8) as any) === undefined) {
		__goscript_init_coderBytesNoZeroValidateUTF8()
	}
	return coderBytesNoZeroValidateUTF8
}

export function __goscript_set_coderBytesNoZeroValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytesNoZeroValidateUTF8, __goscriptValue)
}

export function sizeBytesSlice(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): number {
	let size: number = 0
	let s: $.Slice<$.Slice<number>> = $.pointerValue<$.Slice<$.Slice<number>>>(p.BytesSlice())
	for (let __goscriptRangeTarget57 = s, __goscriptRangeWindow57 = $.sliceRange(__goscriptRangeTarget57), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow57.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow57.backing[__goscriptRangeWindow57.offset + __rangeIndex] as $.Slice<number>)
		size = size + ($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize + protowire.SizeBytes($.sliceLen(v)))
	}
	return size
}

export function appendBytesSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<$.Slice<number>> = $.pointerValue<$.Slice<$.Slice<number>>>(p.BytesSlice())
	for (let __goscriptRangeTarget58 = s, __goscriptRangeWindow58 = $.sliceRange(__goscriptRangeTarget58), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow58.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow58.backing[__goscriptRangeWindow58.offset + __rangeIndex] as $.Slice<number>)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendBytes(b, v)
	}
	return [b, null]
}

export function consumeBytesSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let sp = p.BytesSlice()
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple92: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple92[0]
	let n = __goscriptTuple92[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	sp!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(sp), $.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint), $.appendZeros.nil)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytesSlice: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytesSlice(): void {
	if (((coderBytesSlice) as any) === undefined) {
		coderBytesSlice = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytesSlice, marshal: appendBytesSlice, unmarshal: consumeBytesSlice, merge: __goscript_merge.mergeBytesSlice}, true)
	}
}

export function __goscript_get_coderBytesSlice(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytesSlice) as any) === undefined) {
		__goscript_init_coderBytesSlice()
	}
	return coderBytesSlice
}

export function __goscript_set_coderBytesSlice(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytesSlice, __goscriptValue)
}

export function appendBytesSliceValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	let s: $.Slice<$.Slice<number>> = $.pointerValue<$.Slice<$.Slice<number>>>(p.BytesSlice())
	for (let __goscriptRangeTarget59 = s, __goscriptRangeWindow59 = $.sliceRange(__goscriptRangeTarget59), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow59.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow59.backing[__goscriptRangeWindow59.offset + __rangeIndex] as $.Slice<number>)
		b = protowire.AppendVarint(b, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag)
		b = protowire.AppendBytes(b, v)
		if (!utf8.Valid(v)) {
			return [b, $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
		}
	}
	return [b, null]
}

export function consumeBytesSliceValidateUTF8(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): [__goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple93: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple93[0]
	let n = __goscriptTuple93[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if (!utf8.Valid(v)) {
		return [(out).clone(), $.interfaceValue<$.GoError>(new __goscript_codec_field.errInvalidUTF8(undefined, true), "impl.errInvalidUTF8", "impl.errInvalidUTF8")]
	}
	let sp = p.BytesSlice()
	sp!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(sp), $.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint), $.appendZeros.nil)
	out.n = n
	return [(out).clone(), null]
}

export var coderBytesSliceValidateUTF8: __goscript_codec_tables.pointerCoderFuncs

export function __goscript_init_coderBytesSliceValidateUTF8(): void {
	if (((coderBytesSliceValidateUTF8) as any) === undefined) {
		coderBytesSliceValidateUTF8 = new __goscript_codec_tables.pointerCoderFuncs({size: sizeBytesSlice, marshal: appendBytesSliceValidateUTF8, unmarshal: consumeBytesSliceValidateUTF8, merge: __goscript_merge.mergeBytesSlice}, true)
	}
}

export function __goscript_get_coderBytesSliceValidateUTF8(): __goscript_codec_tables.pointerCoderFuncs {
	if (((coderBytesSliceValidateUTF8) as any) === undefined) {
		__goscript_init_coderBytesSliceValidateUTF8()
	}
	return coderBytesSliceValidateUTF8
}

export function __goscript_set_coderBytesSliceValidateUTF8(__goscriptValue: __goscript_codec_tables.pointerCoderFuncs): void {
	$.assignStruct(coderBytesSliceValidateUTF8, __goscriptValue)
}

export function sizeBytesValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): number {
	return tagsize + protowire.SizeBytes($.sliceLen($.markAsStructValue($.cloneStructValue(v)).Bytes()))
}

export function appendBytesValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): [$.Slice<number>, $.GoError] {
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendBytes(b, $.markAsStructValue($.cloneStructValue(v)).Bytes())
	return [b, null]
}

export function consumeBytesValue(b: $.Slice<number>, _p1: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple94: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple94[0]
	let n = __goscriptTuple94[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	out.n = n
	return [protoreflect.ValueOfBytes($.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint)), (out).clone(), null]
}

export var coderBytesValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderBytesValue(): void {
	if (((coderBytesValue) as any) === undefined) {
		coderBytesValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeBytesValue, marshal: appendBytesValue, unmarshal: consumeBytesValue, merge: __goscript_merge.mergeBytesValue}, true)
	}
}

export function __goscript_get_coderBytesValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderBytesValue) as any) === undefined) {
		__goscript_init_coderBytesValue()
	}
	return coderBytesValue
}

export function __goscript_set_coderBytesValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderBytesValue, __goscriptValue)
}

export async function sizeBytesSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let size: number = 0
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		size = size + (tagsize + protowire.SizeBytes($.sliceLen($.markAsStructValue($.cloneStructValue(v)).Bytes())))
	}
	return size
}

export async function appendBytesSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let v = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		b = protowire.AppendVarint(b, wiretag)
		b = protowire.AppendBytes(b, $.markAsStructValue($.cloneStructValue(v)).Bytes())
	}
	return [b, null]
}

export async function consumeBytesSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = $.markAsStructValue($.cloneStructValue(listv)).List()
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple95: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple95[0]
	let n = __goscriptTuple95[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBytes($.appendSlice($.goSlice(emptyBuf, undefined, undefined), v, $.byteSliceHint))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	return [(listv).clone(), (out).clone(), null]
}

export var coderBytesSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderBytesSliceValue(): void {
	if (((coderBytesSliceValue) as any) === undefined) {
		coderBytesSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeBytesSliceValue, marshal: appendBytesSliceValue, unmarshal: consumeBytesSliceValue, merge: __goscript_merge.mergeBytesListValue}, true)
	}
}

export function __goscript_get_coderBytesSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderBytesSliceValue) as any) === undefined) {
		__goscript_init_coderBytesSliceValue()
	}
	return coderBytesSliceValue
}

export function __goscript_set_coderBytesSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderBytesSliceValue, __goscriptValue)
}

export let emptyBuf: Uint8Array = $.arrayValue(new Uint8Array(0))

export function __goscript_set_emptyBuf(__goscriptValue: Uint8Array): void {
	emptyBuf = __goscriptValue
}

export var wireTypes: globalThis.Map<protoreflect.Kind, protowire.Type> | null

export function __goscript_init_wireTypes(): void {
	if (((wireTypes) as any) === undefined) {
		wireTypes = $.makeMap<protoreflect.Kind, protowire.Type>([[8, 0], [14, 0], [5, 0], [17, 0], [13, 0], [3, 0], [18, 0], [4, 0], [15, 5], [7, 5], [2, 5], [16, 1], [6, 1], [1, 1], [9, 2], [12, 2], [11, 2], [10, 3]])
	}
}

export function __goscript_get_wireTypes(): globalThis.Map<protoreflect.Kind, protowire.Type> | null {
	if (((wireTypes) as any) === undefined) {
		__goscript_init_wireTypes()
	}
	return wireTypes
}

export function __goscript_set_wireTypes(__goscriptValue: globalThis.Map<protoreflect.Kind, protowire.Type> | null): void {
	wireTypes = __goscriptValue
}

var __goscriptAwait: any
