// Generated file based on table_unmarshal_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_custom_gogo from "./custom_gogo.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./custom_gogo.gs.ts"
import "./decode.gs.ts"
import "./duration.gs.ts"
import "./duration_gogo.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./pointer_reflect_gogo.gs.ts"
import "./properties.gs.ts"
import "./table_unmarshal.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp_gogo.gs.ts"

export function makeUnmarshalMessage(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		// First read the message field to see if something is there.
		// The semantics of multiple submessages are weird.  Instead of
		// the last one winning (as it is for all other fields), multiple
		// submessages are merged.
		let v = (f).clone()
		if (v.isNil()) {
			v = $.assignStruct(v, __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))
			f.setPointer(v)
		}
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as __goscript_table_unmarshal.unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, globalThis.Number(x))) : __goscript_table_unmarshal.unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, globalThis.Number(x))))
		if (err != null) {
			{
				let __goscriptTuple0: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		return [$.goSlice(b, globalThis.Number(x), undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalMessageSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	const sub$: __goscript_table_unmarshal.unmarshalInfo = sub == null ? $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub) : (sub as any).__isVarRef === true ? (sub as any).value : (sub as any).__goValue === undefined ? (sub as any) : $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub)
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let v = __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil((sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)!))
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as __goscript_table_unmarshal.unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, globalThis.Number(x))) : __goscript_table_unmarshal.unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, globalThis.Number(x))))
		if (err != null) {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		f.appendRef(v, (sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)
		return [$.goSlice(b, globalThis.Number(x), undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalCustomPtr(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	const sub$: __goscript_table_unmarshal.unmarshalInfo = sub == null ? $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub) : (sub as any).__isVarRef === true ? (sub as any).value : (sub as any).__goValue === undefined ? (sub as any) : $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub)
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}

		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil((sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)!))))
		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue(s)).Interface(), "proto.custom")
		{
			let err = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Unmarshal($.goSlice(b, undefined, globalThis.Number(x))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalCustomSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	const sub$: __goscript_table_unmarshal.unmarshalInfo = sub == null ? $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub) : (sub as any).__isVarRef === true ? (sub as any).value : (sub as any).__goValue === undefined ? (sub as any) : $.pointerTarget<__goscript_table_unmarshal.unmarshalInfo>(sub)
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)!)))
		let c = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue(m)).Interface(), "proto.custom")
		{
			let err = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(c)).Unmarshal($.goSlice(b, undefined, globalThis.Number(x))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		let v = __goscript_pointer_reflect.valToPointer(m)
		f.appendRef(v, (sub$ as __goscript_table_unmarshal.unmarshalInfo).typ)
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalCustom(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}

		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Interface(), "proto.custom")
		{
			let err = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Unmarshal($.goSlice(b, undefined, globalThis.Number(x))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalTime(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			if (err != null) {
				return [null, err]
			}
		}
		let [t, err] = __goscript_timestamp.timestampFromProto(m)
		if (err != null) {
			return [null, err]
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalTimePtr(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple2: any = __goscript_timestamp.timestampFromProto(m)
		let t = $.varRef(__goscriptTuple2[0])
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(t, "*time.Time", /* @__PURE__ */ $.pointerType("time.Time"))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalTimePtrSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple3: any = __goscript_timestamp.timestampFromProto(m)
		let t = $.varRef(__goscriptTuple3[0])
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(t, "*time.Time", /* @__PURE__ */ $.pointerType("time.Time"))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalTimeSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			if (err != null) {
				return [null, err]
			}
		}
		let [t, err] = __goscript_timestamp.timestampFromProto(m)
		if (err != null) {
			return [null, err]
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalDurationPtr(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = new __goscript_duration_gogo.duration()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple4: any = __goscript_duration.durationFromProto(m)
		let d = $.varRef(__goscriptTuple4[0])
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(d, "*time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalDuration(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = new __goscript_duration_gogo.duration()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			if (err != null) {
				return [null, err]
			}
		}
		let [d, err] = __goscript_duration.durationFromProto(m)
		if (err != null) {
			return [null, err]
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(d, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalDurationPtrSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = new __goscript_duration_gogo.duration()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple5: any = __goscript_duration.durationFromProto(m)
		let d = $.varRef(__goscriptTuple5[0])
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(d, "*time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalDurationSlice(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [null, __goscript_table_unmarshal.errInternalBadWireType]
		}
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let m: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = new __goscript_duration_gogo.duration()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			if (err != null) {
				return [null, err]
			}
		}
		let [d, err] = __goscript_duration.durationFromProto(m)
		if (err != null) {
			return [null, err]
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(d, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptAwait: any
