// Generated file based on table_marshal_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_custom_gogo from "./custom_gogo.gs.ts"

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/sync/index.js"
import "./custom_gogo.gs.ts"
import "./duration.gs.ts"
import "./duration_gogo.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./pointer_reflect_gogo.gs.ts"
import "./table_marshal.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp_gogo.gs.ts"

export function makeMessageRefMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).size(ptr) : __goscript_table_marshal.marshalInfo.prototype.size.call(u, ptr))
		return (siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).cachedsize(ptr) : __goscript_table_marshal.marshalInfo.prototype.cachedsize.call(u, ptr))
		b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
		return await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).marshal(b, ptr, deterministic) : __goscript_table_marshal.marshalInfo.prototype.marshal.call(u, b, ptr, deterministic))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeMessageRefSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let e = $.varRef($.markAsStructValue($.cloneStructValue(elem)).Interface())
			let v = __goscript_pointer_reflect.toAddrPointer(e, false)
			let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).size(v) : __goscript_table_marshal.marshalInfo.prototype.size.call(u, v))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let err: $.GoError = null! as $.GoError
		let errreq: $.GoError = null! as $.GoError
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let e = $.varRef($.markAsStructValue($.cloneStructValue(elem)).Interface())
			let v = __goscript_pointer_reflect.toAddrPointer(e, false)
			b = __goscript_table_marshal.appendVarint(b, wiretag)
			let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).size(v) : __goscript_table_marshal.marshalInfo.prototype.size.call(u, v))
			b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
			let __goscriptTuple0: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).marshal(b, v, deterministic) : __goscript_table_marshal.marshalInfo.prototype.marshal.call(u, b, v, deterministic))
			b = __goscriptTuple0[0]
			err = __goscriptTuple0[1]

			if (err != null) {
				{
					let [, ok] = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
					if (ok) {
						// Required field in submessage is not set.
						// We record the error but keep going, to give a complete marshaling.
						if (errreq == null) {
							errreq = err
						}
						continue
					}
				}
				if ($.comparableEqual(err, __goscript_encode.ErrNil)) {
					err = __goscript_encode.errRepeatedHasNil
				}
				return [b, err]
			}
		}

		return [b, errreq]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeCustomPtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), "proto.custom")
		let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), "proto.custom")
		let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple1: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Marshal()
		let buf: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeCustomMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), "proto.custom")
		let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let m = $.mustTypeAssert<__goscript_custom_gogo.custom | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), "proto.custom")
		let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple2: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_custom_gogo.custom, null>) : $.pointerValue<Exclude<__goscript_custom_gogo.custom, null>>(m)).Marshal()
		let buf: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeTimeMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
		let __goscriptTuple3: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
		let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return 0
		}
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
		let __goscriptTuple4: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
		let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple5: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
		let buf: $.Slice<number> = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeTimePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
		let __goscriptTuple6: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
		let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return 0
		}
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
		let __goscriptTuple7: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
		let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple8: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
		let buf: $.Slice<number> = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeTimeSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.markAsStructValue($.cloneStructValue($.mustTypeAssert<time.Time>($.markAsStructValue($.cloneStructValue(elem)).Interface(), "time.Time")))
			let __goscriptTuple9: any = __goscript_timestamp.timestampProto(t)
			let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple9[0]
			let err = __goscriptTuple9[1]
			if (err != null) {
				return 0
			}
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.markAsStructValue($.cloneStructValue($.mustTypeAssert<time.Time>($.markAsStructValue($.cloneStructValue(elem)).Interface(), "time.Time")))
			let __goscriptTuple10: any = __goscript_timestamp.timestampProto(t)
			let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple10[0]
			let err = __goscriptTuple10[1]
			if (err != null) {
				return [null, err]
			}
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			let __goscriptTuple11: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			let buf: $.Slice<number> = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
			if (err != null) {
				return [null, err]
			}
			b = __goscript_table_marshal.appendVarint(b, wiretag)
			b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
			b = $.appendSlice(b, buf, $.byteSliceHint)
		}

		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeTimePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
			let __goscriptTuple12: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
			let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple12[0]
			let err = __goscriptTuple12[1]
			if (err != null) {
				return 0
			}
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t: time.Time | $.VarRef<time.Time> | null = $.mustTypeAssert<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
			let __goscriptTuple13: any = __goscript_timestamp.timestampProto($.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(t))))
			let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple13[0]
			let err = __goscriptTuple13[1]
			if (err != null) {
				return [null, err]
			}
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			let __goscriptTuple14: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
			let buf: $.Slice<number> = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			if (err != null) {
				return [null, err]
			}
			b = __goscript_table_marshal.appendVarint(b, wiretag)
			b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
			b = $.appendSlice(b, buf, $.byteSliceHint)
		}

		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeDurationMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
		let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
		let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
		let __goscriptTuple15: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
		let buf: $.Slice<number> = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeDurationPtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
		let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
		let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
		let __goscriptTuple16: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
		let buf: $.Slice<number> = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeDurationSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let d = $.mustTypeAssert<time.Duration>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int64", "time.Duration"))
			let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto(d)
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let d = $.mustTypeAssert<time.Duration>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int64", "time.Duration"))
			let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto(d)
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			let __goscriptTuple17: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			let buf: $.Slice<number> = __goscriptTuple17[0]
			let err = __goscriptTuple17[1]
			if (err != null) {
				return [null, err]
			}
			b = __goscript_table_marshal.appendVarint(b, wiretag)
			b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
			b = $.appendSlice(b, buf, $.byteSliceHint)
		}

		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeDurationPtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
			let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let d: $.VarRef<time.Duration> | null = $.mustTypeAssert<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
			let dur: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto($.pointerValue<time.Duration>(d))
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			let __goscriptTuple18: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(dur, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
			let buf: $.Slice<number> = __goscriptTuple18[0]
			let err = __goscriptTuple18[1]
			if (err != null) {
				return [null, err]
			}
			b = __goscript_table_marshal.appendVarint(b, wiretag)
			b = __goscript_table_marshal.appendVarint(b, $.uint64(siz))
			b = $.appendSlice(b, buf, $.byteSliceHint)
		}

		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

var __goscriptAwait: any
