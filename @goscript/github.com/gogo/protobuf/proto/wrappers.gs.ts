// Generated file based on wrappers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"

import * as __goscript_wrappers_gogo from "./wrappers_gogo.gs.ts"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./pointer_reflect_gogo.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./table_unmarshal.gs.ts"
import "./wrappers_gogo.gs.ts"

export function makeStdDoubleValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
		let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
		let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple0: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
		let buf: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdDoubleValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
		let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
		let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple1: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
		let buf: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdDoubleValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("float64"))
			let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("float64"))
			let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			let __goscriptTuple2: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			let buf: $.Slice<number> = __goscriptTuple2[0]
			let err = __goscriptTuple2[1]
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

export function makeStdDoubleValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
			let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
			let v: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			let __goscriptTuple3: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			let buf: $.Slice<number> = __goscriptTuple3[0]
			let err = __goscriptTuple3[1]
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

export function makeStdDoubleValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.float64Value>(m).Value, "float64")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdDoubleValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.float64Value>(m)._fields, "Value"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdDoubleValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.float64Value>(m)._fields, "Value"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdDoubleValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float64Value | $.VarRef<__goscript_wrappers_gogo.float64Value> | null = new __goscript_wrappers_gogo.float64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.float64Value>(m).Value, "float64")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdFloatValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
		let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
		let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple4: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
		let buf: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdFloatValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
		let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
		let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple5: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
		let buf: $.Slice<number> = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdFloatValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("float32"))
			let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("float32"))
			let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			let __goscriptTuple6: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			let buf: $.Slice<number> = __goscriptTuple6[0]
			let err = __goscriptTuple6[1]
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

export function makeStdFloatValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
			let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
			let v: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			let __goscriptTuple7: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			let buf: $.Slice<number> = __goscriptTuple7[0]
			let err = __goscriptTuple7[1]
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

export function makeStdFloatValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.float32Value>(m).Value, "float32")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdFloatValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.float32Value>(m)._fields, "Value"), "*float32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdFloatValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.float32Value>(m)._fields, "Value"), "*float32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdFloatValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.float32Value | $.VarRef<__goscript_wrappers_gogo.float32Value> | null = new __goscript_wrappers_gogo.float32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.float32Value>(m).Value, "float32")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt64ValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
		let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
		let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
		let __goscriptTuple8: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
		let buf: $.Slice<number> = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdInt64ValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
		let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
		let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
		let __goscriptTuple9: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
		let buf: $.Slice<number> = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdInt64ValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int64"))
			let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int64"))
			let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			let __goscriptTuple10: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			let buf: $.Slice<number> = __goscriptTuple10[0]
			let err = __goscriptTuple10[1]
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

export function makeStdInt64ValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
			let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
			let v: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value({Value: $.pointerValue<bigint>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			let __goscriptTuple11: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			let buf: $.Slice<number> = __goscriptTuple11[0]
			let err = __goscriptTuple11[1]
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

export function makeStdInt64ValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.int64Value>(m).Value, "int64")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt64ValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.int64Value>(m)._fields, "Value"), "*int64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt64ValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.int64Value>(m)._fields, "Value"), "*int64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt64ValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int64Value | $.VarRef<__goscript_wrappers_gogo.int64Value> | null = new __goscript_wrappers_gogo.int64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.int64Value>(m).Value, "int64")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt64ValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
		let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
		let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
		let __goscriptTuple12: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
		let buf: $.Slice<number> = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdUInt64ValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
		let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
		let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
		let __goscriptTuple13: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
		let buf: $.Slice<number> = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdUInt64ValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("uint64"))
			let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("uint64"))
			let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			let __goscriptTuple14: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			let buf: $.Slice<number> = __goscriptTuple14[0]
			let err = __goscriptTuple14[1]
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

export function makeStdUInt64ValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
			let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
			let v: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value({Value: $.pointerValue<bigint>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			let __goscriptTuple15: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			let buf: $.Slice<number> = __goscriptTuple15[0]
			let err = __goscriptTuple15[1]
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

export function makeStdUInt64ValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.uint64Value>(m).Value, "uint64")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt64ValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.uint64Value>(m)._fields, "Value"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt64ValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.uint64Value>(m)._fields, "Value"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt64ValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint64Value | $.VarRef<__goscript_wrappers_gogo.uint64Value> | null = new __goscript_wrappers_gogo.uint64Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.uint64Value>(m).Value, "uint64")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt32ValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
		let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
		let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple16: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
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

export function makeStdInt32ValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
		let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
		let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple17: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
		let buf: $.Slice<number> = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdInt32ValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int32")), 32)
			let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("int32")), 32)
			let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			let __goscriptTuple18: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
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

export function makeStdInt32ValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
			let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
			let v: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			let __goscriptTuple19: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			let buf: $.Slice<number> = __goscriptTuple19[0]
			let err = __goscriptTuple19[1]
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

export function makeStdInt32ValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.int32Value>(m).Value, "int32")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt32ValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.int32Value>(m)._fields, "Value"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt32ValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.int32Value>(m)._fields, "Value"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdInt32ValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.int32Value | $.VarRef<__goscript_wrappers_gogo.int32Value> | null = new __goscript_wrappers_gogo.int32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.int32Value>(m).Value, "int32")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt32ValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
		let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
		let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple20: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
		let buf: $.Slice<number> = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdUInt32ValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
		let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
		let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
		let __goscriptTuple21: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
		let buf: $.Slice<number> = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdUInt32ValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("uint32")), 32)
			let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("uint32")), 32)
			let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			let __goscriptTuple22: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			let buf: $.Slice<number> = __goscriptTuple22[0]
			let err = __goscriptTuple22[1]
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

export function makeStdUInt32ValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
			let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
			let v: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value({Value: $.pointerValue<number>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			let __goscriptTuple23: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			let buf: $.Slice<number> = __goscriptTuple23[0]
			let err = __goscriptTuple23[1]
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

export function makeStdUInt32ValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.uint32Value>(m).Value, "uint32")))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt32ValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.uint32Value>(m)._fields, "Value"), "*uint32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt32ValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.uint32Value>(m)._fields, "Value"), "*uint32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdUInt32ValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.uint32Value | $.VarRef<__goscript_wrappers_gogo.uint32Value> | null = new __goscript_wrappers_gogo.uint32Value()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.pointerValue<__goscript_wrappers_gogo.uint32Value>(m).Value, "uint32")))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBoolValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
		let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
		let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
		let __goscriptTuple24: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
		let buf: $.Slice<number> = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdBoolValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
		let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
		let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
		let __goscriptTuple25: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
		let buf: $.Slice<number> = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdBoolValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<boolean>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("bool"))
			let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<boolean>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("bool"))
			let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			let __goscriptTuple26: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			let buf: $.Slice<number> = __goscriptTuple26[0]
			let err = __goscriptTuple26[1]
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

export function makeStdBoolValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
			let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
			let v: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue({Value: $.pointerValue<boolean>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			let __goscriptTuple27: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			let buf: $.Slice<number> = __goscriptTuple27[0]
			let err = __goscriptTuple27[1]
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

export function makeStdBoolValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<__goscript_wrappers_gogo.boolValue>(m).Value))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBoolValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.boolValue>(m)._fields, "Value"), "*bool", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBoolValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.boolValue>(m)._fields, "Value"), "*bool", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBoolValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.boolValue | $.VarRef<__goscript_wrappers_gogo.boolValue> | null = new __goscript_wrappers_gogo.boolValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<__goscript_wrappers_gogo.boolValue>(m).Value))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdStringValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
		let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
		let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
		let __goscriptTuple28: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
		let buf: $.Slice<number> = __goscriptTuple28[0]
		let err = __goscriptTuple28[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdStringValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
		let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
		let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
		let __goscriptTuple29: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
		let buf: $.Slice<number> = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdStringValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("string"))
			let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.basicType("string"))
			let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			let __goscriptTuple30: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			let buf: $.Slice<number> = __goscriptTuple30[0]
			let err = __goscriptTuple30[1]
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

export function makeStdStringValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
			let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
			let v: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue({Value: $.pointerValue<string>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			let __goscriptTuple31: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			let buf: $.Slice<number> = __goscriptTuple31[0]
			let err = __goscriptTuple31[1]
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

export function makeStdStringValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<__goscript_wrappers_gogo.stringValue>(m).Value))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdStringValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.stringValue>(m)._fields, "Value"), "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdStringValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.stringValue>(m)._fields, "Value"), "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdStringValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.stringValue | $.VarRef<__goscript_wrappers_gogo.stringValue> | null = new __goscript_wrappers_gogo.stringValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<__goscript_wrappers_gogo.stringValue>(m).Value))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBytesValueMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as __goscript_table_marshal.marshalInfo).typ))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
		let __goscriptTuple32: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
		let buf: $.Slice<number> = __goscriptTuple32[0]
		let err = __goscriptTuple32[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdBytesValuePtrMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		if (ptr.isNil()) {
			return 0
		}
		let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
		let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
		return (tagsize + __goscript_encode.SizeVarint($.uint64(siz))) + siz
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (ptr.isNil()) {
			return [b, null]
		}
		let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!)))).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
		let __goscriptTuple33: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
		let buf: $.Slice<number> = __goscriptTuple33[0]
		let err = __goscriptTuple33[1]
		if (err != null) {
			return [null, err]
		}
		b = __goscript_table_marshal.appendVarint(b, wiretag)
		b = __goscript_table_marshal.appendVarint(b, $.uint64($.sliceLen(buf)))
		b = $.appendSlice(b, buf, $.byteSliceHint)
		return [b, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeStdBytesValueSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t: $.Slice<number> = $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice((u$ as __goscript_table_marshal.marshalInfo).typ)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t: $.Slice<number> = $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: t})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			let __goscriptTuple34: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			let buf: $.Slice<number> = __goscriptTuple34[0]
			let err = __goscriptTuple34[1]
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

export function makeStdBytesValuePtrSliceMarshaler(u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): [__goscript_table_marshal.sizer | null, __goscript_table_marshal.marshaler | null] {
	const u$: __goscript_table_marshal.marshalInfo = u == null ? $.pointerTarget<__goscript_table_marshal.marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_table_marshal.marshalInfo>(u)
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		let n = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s = ptr.getSlice(reflect.PtrTo($.pointerValueOrNil((u$ as __goscript_table_marshal.marshalInfo).typ)!))
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).Len(); i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(i)))
			let t = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(elem)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			let v: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue({Value: $.pointerValue<$.Slice<number>>(t)})
			let siz = await __goscript_table_marshal.Size($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			let __goscriptTuple35: any = await __goscript_table_marshal.Marshal($.interfaceValue<__goscript_lib.Message | null>(v, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			let buf: $.Slice<number> = __goscriptTuple35[0]
			let err = __goscriptTuple35[1]
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

export function makeStdBytesValueUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.pointerValue<__goscript_wrappers_gogo.bytesValue>(m).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBytesValuePtrUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!)))).Elem()))
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.bytesValue>(m)._fields, "Value"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))))))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBytesValuePtrSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice(reflect.PtrTo($.pointerValueOrNil($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)!))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.fieldRef($.pointerValue<__goscript_wrappers_gogo.bytesValue>(m)._fields, "Value"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeStdBytesValueSliceUnmarshaler(sub: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, name: string): __goscript_table_unmarshal.unmarshaler | null {
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
		let m: __goscript_wrappers_gogo.bytesValue | $.VarRef<__goscript_wrappers_gogo.bytesValue> | null = new __goscript_wrappers_gogo.bytesValue()
		{
			let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, globalThis.Number(x)), $.interfaceValue<__goscript_lib.Message | null>(m, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")))
			if (err != null) {
				return [null, err]
			}
		}
		let slice = f.getSlice($.pointerValue<__goscript_table_unmarshal.unmarshalInfo>(sub).typ)
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.pointerValue<__goscript_wrappers_gogo.bytesValue>(m).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
		return [$.goSlice(b, globalThis.Number(x), undefined), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}
