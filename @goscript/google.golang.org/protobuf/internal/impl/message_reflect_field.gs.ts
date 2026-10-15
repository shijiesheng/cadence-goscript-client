// Generated file based on message_reflect_field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./convert.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.fieldInfo", "impl.oneofInfo"])

export class fieldInfo {
	public get fieldDesc(): protoreflect.FieldDescriptor | null {
		return this._fields.fieldDesc
	}

	public set fieldDesc(value: protoreflect.FieldDescriptor | null) {
		this._fields.fieldDesc = value
	}

	// These fields are used for protobuf reflection support.
	public get has(): ((_p0: __goscript_pointer_reflect.pointer) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.has
	}

	public set has(value: ((_p0: __goscript_pointer_reflect.pointer) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.has = value
	}

	public get clear(): ((_p0: __goscript_pointer_reflect.pointer) => void) | null {
		return this._fields.clear
	}

	public set clear(value: ((_p0: __goscript_pointer_reflect.pointer) => void) | null) {
		this._fields.clear = value
	}

	public get _get(): ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null {
		return this._fields._get
	}

	public set _get(value: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null) {
		this._fields._get = value
	}

	public get _set(): ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.Value) => void) | null {
		return this._fields._set
	}

	public set _set(value: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.Value) => void) | null) {
		this._fields._set = value
	}

	public get mutable(): ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null {
		return this._fields.mutable
	}

	public set mutable(value: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null) {
		this._fields.mutable = value
	}

	public get newMessage(): (() => protoreflect.Message | null | globalThis.Promise<protoreflect.Message | null>) | null {
		return this._fields.newMessage
	}

	public set newMessage(value: (() => protoreflect.Message | null | globalThis.Promise<protoreflect.Message | null>) | null) {
		this._fields.newMessage = value
	}

	public get newField(): (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null {
		return this._fields.newField
	}

	public set newField(value: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null) {
		this._fields.newField = value
	}

	public _fields: {
		fieldDesc: protoreflect.FieldDescriptor | null
		has: ((_p0: __goscript_pointer_reflect.pointer) => boolean | globalThis.Promise<boolean>) | null
		clear: ((_p0: __goscript_pointer_reflect.pointer) => void) | null
		_get: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null
		_set: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.Value) => void) | null
		mutable: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null
		newMessage: (() => protoreflect.Message | null | globalThis.Promise<protoreflect.Message | null>) | null
		newField: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null
	}

	constructor(init?: Partial<{fieldDesc?: protoreflect.FieldDescriptor | null, has?: ((_p0: __goscript_pointer_reflect.pointer) => boolean | globalThis.Promise<boolean>) | null, clear?: ((_p0: __goscript_pointer_reflect.pointer) => void) | null, _get?: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null, _set?: ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.Value) => void) | null, mutable?: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null, newMessage?: (() => protoreflect.Message | null | globalThis.Promise<protoreflect.Message | null>) | null, newField?: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fieldDesc: init?.fieldDesc ?? (null! as protoreflect.FieldDescriptor | null),
			has: init?.has ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => boolean | globalThis.Promise<boolean>) | null),
			clear: init?.clear ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => void) | null),
			_get: init?._get ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null),
			_set: init?._set ?? (null! as ((_p0: __goscript_pointer_reflect.pointer, _p1: protoreflect.Value) => void) | null),
			mutable: init?.mutable ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null),
			newMessage: init?.newMessage ?? (null! as (() => protoreflect.Message | null | globalThis.Promise<protoreflect.Message | null>) | null),
			newField: init?.newField ?? (null! as (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fieldInfo {
		return new fieldInfo(this, true)
	}

	public __goscriptAssign(source: fieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.fieldDesc = $.assignFieldValue(target.fieldDesc, values.fieldDesc, "protoreflect.FieldDescriptor")
		target.has = values.has
		target.clear = values.clear
		target._get = values._get
		target._set = values._set
		target.mutable = values.mutable
		target.newMessage = values.newMessage
		target.newField = values.newField
	}

	static __typeInfo = $.registerStructType(
		"impl.fieldInfo",
		() => new fieldInfo(),
		() => [],
		fieldInfo,
		() => [/* @__PURE__ */ $.structField("fieldDesc", "protoreflect.FieldDescriptor", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("has", ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("clear", ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("get", ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo), [3], 32, false, { key: "_get", pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("set", ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo), [4], 40, false, { key: "_set", pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("mutable", ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo), [5], 48, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("newMessage", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Message"] } as $.FunctionTypeInfo), [6], 56, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("newField", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo), [7], 64, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class oneofInfo {
	public get oneofDesc(): protoreflect.OneofDescriptor | null {
		return this._fields.oneofDesc
	}

	public set oneofDesc(value: protoreflect.OneofDescriptor | null) {
		this._fields.oneofDesc = value
	}

	public get which(): ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.FieldNumber | globalThis.Promise<protoreflect.FieldNumber>) | null {
		return this._fields.which
	}

	public set which(value: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.FieldNumber | globalThis.Promise<protoreflect.FieldNumber>) | null) {
		this._fields.which = value
	}

	public _fields: {
		oneofDesc: protoreflect.OneofDescriptor | null
		which: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.FieldNumber | globalThis.Promise<protoreflect.FieldNumber>) | null
	}

	constructor(init?: Partial<{oneofDesc?: protoreflect.OneofDescriptor | null, which?: ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.FieldNumber | globalThis.Promise<protoreflect.FieldNumber>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			oneofDesc: init?.oneofDesc ?? (null! as protoreflect.OneofDescriptor | null),
			which: init?.which ?? (null! as ((_p0: __goscript_pointer_reflect.pointer) => protoreflect.FieldNumber | globalThis.Promise<protoreflect.FieldNumber>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): oneofInfo {
		return new oneofInfo(this, true)
	}

	public __goscriptAssign(source: oneofInfo): void {
		const target = this._fields
		const values = source._fields
		target.oneofDesc = $.assignFieldValue(target.oneofDesc, values.oneofDesc, "protoreflect.OneofDescriptor")
		target.which = values.which
	}

	static __typeInfo = $.registerStructType(
		"impl.oneofInfo",
		() => new oneofInfo(),
		() => [],
		oneofInfo,
		() => [/* @__PURE__ */ $.structField("oneofDesc", "protoreflect.OneofDescriptor", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("which", ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("int32", "protowire.Number")] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export function fieldInfoForMissing(fd: protoreflect.FieldDescriptor | null): fieldInfo {
	// This never occurs for generated message types.
	// It implies that a hand-crafted type has missing Go fields
	// for specific protobuf message fields.
	return new fieldInfo({fieldDesc: fd, has: $.functionValue((p: __goscript_pointer_reflect.pointer): boolean => {
		return false
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newMessage: $.functionValue(async (): globalThis.Promise<protoreflect.Message | null> => {
		$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Message"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		{
			let v = (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			if (v.IsValid()) {
				return (v).clone()
			}
		}
		$.panic($.concatString("missing Go struct field for ", (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function fieldInfoForOneof(fd: protoreflect.FieldDescriptor | null, fs: reflect.StructField, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null, ot: reflect.Type | null): globalThis.Promise<fieldInfo> {
	let ft = fs.Type
	if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20) {
		$.panic(await fmt.Sprintf("field %v has invalid type: got %v, want interface kind", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (ft as any)))
	}
	if ((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
		$.panic(await fmt.Sprintf("field %v has invalid type: got %v, want struct kind", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (ot as any)))
	}
	if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(ot)!)).Implements($.pointerValueOrNil(ft)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		$.panic(await fmt.Sprintf("field %v has invalid type: %v does not implement %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (ot as any), (ft as any)))
	}
	let conv = await __goscript_convert.NewConverter(((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type, fd)
	let isMessage = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null

	// TODO: Implement unsafe fast path?
	let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (($.markAsStructValue($.cloneStructValue(rv)).IsNil() || (!$.comparableEqual($.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Type()).Elem(), ot))) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).IsNil()) {
			return false
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if ($.markAsStructValue($.cloneStructValue(rv)).IsNil() || (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ot))) {
			// NOTE: We intentionally don't check for rv.Elem().IsNil()
			// so that (*OneofWrapperType)(nil) gets cleared to nil.
			return
		}
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (p.IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (($.markAsStructValue($.cloneStructValue(rv)).IsNil() || (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ot))) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Elem())).Field(0))
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (($.markAsStructValue($.cloneStructValue(rv)).IsNil() || (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ot))) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).IsNil()) {
			$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(ot)!))))
		}
		rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Elem())).Field(0))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (!isMessage) {
			$.panic(await fmt.Sprintf("field %v with invalid Mutable call on field with non-composite type", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (($.markAsStructValue($.cloneStructValue(rv)).IsNil() || (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ot))) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).IsNil()) {
			$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(ot)!))))
		}
		rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Elem())).Field(0))
		if (($.markAsStructValue($.cloneStructValue(rv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf(protoreflect.ValueOfMessage(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newMessage: $.functionValue(async (): globalThis.Promise<protoreflect.Message | null> => {
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Message"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function fieldInfoForMap(fd: protoreflect.FieldDescriptor | null, fs: reflect.StructField, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<fieldInfo> {
	let ft = fs.Type
	if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21) {
		$.panic(await fmt.Sprintf("field %v has invalid type: got %v, want map kind", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (ft as any)))
	}
	let conv = await __goscript_convert.NewConverter(ft, fd)

	// TODO: Implement unsafe fast path?
	let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		return $.markAsStructValue($.cloneStructValue(rv)).Len() > 0
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (p.IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if ($.markAsStructValue($.cloneStructValue(rv)).Len() == 0) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		let pv = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		if ($.markAsStructValue($.cloneStructValue(pv)).IsNil()) {
			$.panic(await fmt.Sprintf("map field %v cannot be set with read-only value", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(pv)))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(fs.Type)!))))
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function fieldInfoForList(fd: protoreflect.FieldDescriptor | null, fs: reflect.StructField, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<fieldInfo> {
	let ft = fs.Type
	if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
		$.panic(await fmt.Sprintf("field %v has invalid type: got %v, want slice kind", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (ft as any)))
	}
	let conv = await __goscript_convert.NewConverter(reflect.PtrTo($.pointerValueOrNil(ft)!), fd)

	// TODO: Implement unsafe fast path?
	let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		return $.markAsStructValue($.cloneStructValue(rv)).Len() > 0
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (p.IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		let rv = await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)
		if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Len() == 0) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		let pv = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		if ($.markAsStructValue($.cloneStructValue(pv)).IsNil()) {
			$.panic(await fmt.Sprintf("list field %v cannot be set with read-only value", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(pv)).Elem())))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		let v = await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export let nilBytes: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))))

export function __goscript_set_nilBytes(__goscriptValue: reflect.Value): void {
	$.assignStruct(nilBytes, __goscriptValue)
}

export let emptyBytes: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new Uint8Array([]) as $.Slice<number>, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))))

export function __goscript_set_emptyBytes(__goscriptValue: reflect.Value): void {
	$.assignStruct(emptyBytes, __goscriptValue)
}

export async function fieldInfoForScalar(fd: protoreflect.FieldDescriptor | null, fs: reflect.StructField, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<fieldInfo> {
	let ft = fs.Type
	let nullable = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasPresence(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let isBytes = ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)
	if (nullable) {
		if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) && ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23)) {
			// This never occurs for generated message types.
			// Despite the protobuf type system specifying presence,
			// the Go field type cannot represent it.
			nullable = false
		}
		if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			ft = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let conv = await __goscript_convert.NewConverter(ft, fd)

	// TODO: Implement unsafe fast path?
	let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (nullable) {
			return !$.markAsStructValue($.cloneStructValue(rv)).IsNil()
		}
		switch ($.markAsStructValue($.cloneStructValue(rv)).Kind()) {
			case reflect.Bool:
			{
				return $.markAsStructValue($.cloneStructValue(rv)).Bool()
				break
			}
			case reflect.Int32:
			case reflect.Int64:
			{
				return $.markAsStructValue($.cloneStructValue(rv)).Int() != 0n
				break
			}
			case reflect.Uint32:
			case reflect.Uint64:
			{
				return $.markAsStructValue($.cloneStructValue(rv)).Uint() != 0n
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				return ($.markAsStructValue($.cloneStructValue(rv)).Float() != 0) || math.Signbit($.markAsStructValue($.cloneStructValue(rv)).Float())
				break
			}
			case reflect.String:
			case reflect.Slice:
			{
				return $.markAsStructValue($.cloneStructValue(rv)).Len() > 0
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("field %v has invalid type: %v", $.namedValueInterfaceValue<any>((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), ($.markAsStructValue($.cloneStructValue(rv)).Type() as any)))
				break
			}
		}
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (p.IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (nullable) {
			if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			}
			if ($.markAsStructValue($.cloneStructValue(rv)).Kind() == 22) {
				rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(rv)).Elem())
			}
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (nullable && ($.markAsStructValue($.cloneStructValue(rv)).Kind() == 22)) {
			if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(ft)!))))
			}
			rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(rv)).Elem())
		}
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
		if (isBytes && ($.markAsStructValue($.cloneStructValue(rv)).Len() == 0)) {
			if (nullable) {
				$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(emptyBytes)))
			} else {
				$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(nilBytes)))
			}
		}
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function fieldInfoForWeakMessage(fd: protoreflect.FieldDescriptor | null, weakOffset: __goscript_pointer_reflect.offset): globalThis.Promise<fieldInfo> {
	if (!flags.ProtoLegacy) {
		$.panic("no support for proto1 weak fields")
	}

	let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))
	let messageType: protoreflect.MessageType | null = null! as protoreflect.MessageType | null
	let lazyInit: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
		await once.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			let messageName = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let __goscriptTuple0: any = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, messageName)
			messageType = __goscriptTuple0[0]
			if (messageType == null) {
				$.panic(await fmt.Sprintf("weak message %v for field %v is not linked in", $.namedValueInterfaceValue<any>(messageName, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

	let num = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let [, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>($.markAsStructValue($.cloneStructValue((await p.Apply((weakOffset).clone())))).WeakFields()), num)
		return ok
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		__goscript_weak.weakFields_clear($.markAsStructValue($.cloneStructValue((await p.Apply((weakOffset).clone())))).WeakFields(), num)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (p.IsNil()) {
			return protoreflect.ValueOfMessage((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>($.markAsStructValue($.cloneStructValue((await p.Apply((weakOffset).clone())))).WeakFields()), num)
		if (!ok) {
			return protoreflect.ValueOfMessage((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return protoreflect.ValueOfMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let m = await v.Message()
		if (!$.comparableEqual((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			{
				let got = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let want = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (!$.stringEqual(got, want)) {
					$.panic(await fmt.Sprintf("field %v has mismatching message descriptor: got %v, want %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(got, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(want, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				}
			}
			$.panic(await fmt.Sprintf("field %v has mismatching message descriptor: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		__goscript_weak.weakFields__set($.markAsStructValue($.cloneStructValue((await p.Apply((weakOffset).clone())))).WeakFields(), num, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fs: $.VarRef<__goscript_weak.weakFields> | null = $.markAsStructValue($.cloneStructValue((await p.Apply((weakOffset).clone())))).WeakFields()
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(fs), num)
		if (!ok) {
			m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscript_weak.weakFields__set(fs, num, m)
		}
		return protoreflect.ValueOfMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newMessage: $.functionValue(async (): globalThis.Promise<protoreflect.Message | null> => {
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).New()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Message"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return protoreflect.ValueOfMessage((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function fieldInfoForMessage(fd: protoreflect.FieldDescriptor | null, fs: reflect.StructField, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<fieldInfo> {
	let ft = fs.Type
	let conv = await __goscript_convert.NewConverter(ft, fd)

	// TODO: Implement unsafe fast path?
	let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x)
	return new fieldInfo({fieldDesc: fd, has: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<boolean> => {
		if (p.IsNil()) {
			return false
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fs.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return !isZero(rv)
		}
		return !$.markAsStructValue($.cloneStructValue(rv)).IsNil()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), clear: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!))))
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [] } as $.FunctionTypeInfo)), _get: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		if (p.IsNil()) {
			return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		}
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), _set: $.functionValue(async (p: __goscript_pointer_reflect.pointer, v: protoreflect.Value): globalThis.Promise<void> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
		if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fs.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && $.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			$.panic(await fmt.Sprintf("field %v has invalid nil pointer", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "protoreflect.Value"], results: [] } as $.FunctionTypeInfo)), mutable: $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.Value> => {
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
		if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fs.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && $.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(rv)).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).GoValueOf((((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
		}
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo)), newMessage: $.functionValue(async (): globalThis.Promise<protoreflect.Message | null> => {
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Message"] } as $.FunctionTypeInfo)), newField: $.functionValue(async (): globalThis.Promise<protoreflect.Value> => {
		return (((__goscriptAwait = (conv !== null && (conv as any).__isVarRef !== true && (conv as any).__goValue === undefined ? (conv as Exclude<__goscript_convert.Converter, null>) : $.pointerValue<Exclude<__goscript_convert.Converter, null>>(conv)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))}, true)
}

export async function makeOneofInfo(od: protoreflect.OneofDescriptor | null, si: __goscript_message.structInfo, x: ((v: any, i: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<oneofInfo | $.VarRef<oneofInfo> | null> {
	let oi: oneofInfo | $.VarRef<oneofInfo> | null = new oneofInfo({oneofDesc: od})
	let oi$: oneofInfo = oi == null ? $.pointerTarget<oneofInfo>(oi) : (oi as any).__isVarRef === true ? (oi as any).value : (oi as any).__goValue === undefined ? (oi as any) : $.pointerTarget<oneofInfo>(oi)
	if ((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.FieldNumber, reflect.StructField, reflect.StructField>(si.fieldsByNumber, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
		let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x);
		;(oi$ as oneofInfo).which = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.FieldNumber> => {
			if (p.IsNil()) {
				return 0
			}
			let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
			if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				return 0
			}
			return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("int32", "protowire.Number")] } as $.FunctionTypeInfo))
	} else {
		let fs = $.markAsStructValue($.cloneStructValue($.mapGet<protoreflect.Name, reflect.StructField, reflect.StructField>(si.oneofsByName, (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.markAsStructValue(new reflect.StructField()))[0]))
		let fieldOffset = __goscript_pointer_reflect.offsetOf(fs, x);
		;(oi$ as oneofInfo).which = $.functionValue(async (p: __goscript_pointer_reflect.pointer): globalThis.Promise<protoreflect.FieldNumber> => {
			if (p.IsNil()) {
				return 0
			}
			let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await $.markAsStructValue($.cloneStructValue((await p.Apply((fieldOffset).clone())))).AsValueOf(fs.Type)))).Elem()))
			if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				return 0
			}
			rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(rv)).Elem())
			if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				return 0
			}
			return $.mapGet<reflect.Type | null, protoreflect.FieldNumber, protoreflect.FieldNumber>(si.oneofWrappersByType, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0]
		}, ({ kind: $.TypeKind.Function, params: ["impl.pointer"], results: [/* @__PURE__ */ $.basicType("int32", "protowire.Number")] } as $.FunctionTypeInfo))
	}
	return oi
}

export function isZero(v: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Bool:
		{
			return !$.markAsStructValue($.cloneStructValue(v)).Bool()
			break
		}
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Int() == 0n
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Uint() == 0n
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return math.Float64bits($.markAsStructValue($.cloneStructValue(v)).Float()) == 0n
			break
		}
		case reflect.Complex64:
		case reflect.Complex128:
		{
			let c = $.markAsStructValue($.cloneStructValue(v)).Complex()
			return (math.Float64bits($.real(c)) == 0n) && (math.Float64bits($.imag(c)) == 0n)
			break
		}
		case reflect.Array:
		{
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).Len(); i++) {
				if (!isZero($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))))) {
					return false
				}
			}
			return true
			break
		}
		case reflect.Chan:
		case reflect.Func:
		case reflect.Interface:
		case reflect.Map:
		case reflect.Ptr:
		case reflect.Slice:
		case reflect.UnsafePointer:
		{
			return $.markAsStructValue($.cloneStructValue(v)).IsNil()
			break
		}
		case reflect.String:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Len() == 0
			break
		}
		case reflect.Struct:
		{
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).NumField(); i++) {
				if (!isZero($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i))))) {
					return false
				}
			}
			return true
			break
		}
		default:
		{
			$.panic($.interfaceValue((() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(v)).Kind(); return new reflect.ValueError({Method: "reflect.Value.IsZero", Kind: __goscriptLiteralField0}) })(), "*reflect.ValueError", /* @__PURE__ */ $.pointerType("reflect.ValueError")))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
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

var __goscriptAwait: any
