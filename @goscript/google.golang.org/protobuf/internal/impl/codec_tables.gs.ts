// Generated file based on codec_tables.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_map from "./codec_map.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_reflect from "./codec_reflect.gs.ts"

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
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_map.gs.ts"
import "./codec_message.gs.ts"
import "./codec_reflect.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.pointerCoderFuncs", "impl.valueCoderFuncs"])

export class pointerCoderFuncs {
	public get mi(): __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null {
		return this._fields.mi
	}

	public set mi(value: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null) {
		this._fields.mi = value
	}

	public get size(): ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null {
		return this._fields.size
	}

	public set size(value: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null) {
		this._fields.size = value
	}

	public get marshal(): ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.marshal
	}

	public set marshal(value: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.marshal = value
	}

	public get unmarshal(): ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions) => [__goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]>) | null {
		return this._fields.unmarshal
	}

	public set unmarshal(value: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions) => [__goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]>) | null) {
		this._fields.unmarshal = value
	}

	public get isInit(): ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.isInit
	}

	public set isInit(value: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.isInit = value
	}

	public get merge(): ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions) => void) | null {
		return this._fields.merge
	}

	public set merge(value: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions) => void) | null) {
		this._fields.merge = value
	}

	public _fields: {
		mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
		size: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null
		marshal: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		unmarshal: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions) => [__goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]>) | null
		isInit: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		merge: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions) => void) | null
	}

	constructor(init?: Partial<{mi?: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, size?: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null, marshal?: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, unmarshal?: ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions) => [__goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]>) | null, isInit?: ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, merge?: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mi: init?.mi ?? (null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null),
			size: init?.size ?? (null! as ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null),
			marshal: init?.marshal ?? (null! as ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			unmarshal: init?.unmarshal ?? (null! as ((b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions) => [__goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]>) | null),
			isInit: init?.isInit ?? (null! as ((p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			merge: init?.merge ?? (null! as ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pointerCoderFuncs {
		return new pointerCoderFuncs(this, true)
	}

	public __goscriptAssign(source: pointerCoderFuncs): void {
		const target = this._fields
		const values = source._fields
		target.mi = values.mi
		target.size = values.size
		target.marshal = values.marshal
		target.unmarshal = values.unmarshal
		target.isInit = values.isInit
		target.merge = values.merge
	}

	static __typeInfo = $.registerStructType(
		"impl.pointerCoderFuncs",
		() => new pointerCoderFuncs(),
		() => [],
		pointerCoderFuncs,
		() => [/* @__PURE__ */ $.structField("mi", /* @__PURE__ */ $.pointerType("impl.MessageInfo"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("size", ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("marshal", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("unmarshal", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("isInit", ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("merge", ({ kind: $.TypeKind.Function, params: ["impl.pointer", "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.mergeOptions"], results: [] } as $.FunctionTypeInfo), [5], 40, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class valueCoderFuncs {
	public get size(): ((v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null {
		return this._fields.size
	}

	public set size(value: ((v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null) {
		this._fields.size = value
	}

	public get marshal(): ((b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.marshal
	}

	public set marshal(value: ((b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.marshal = value
	}

	public get unmarshal(): ((b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions) => [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]>) | null {
		return this._fields.unmarshal
	}

	public set unmarshal(value: ((b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions) => [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]>) | null) {
		this._fields.unmarshal = value
	}

	public get isInit(): ((v: protoreflect.Value) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.isInit
	}

	public set isInit(value: ((v: protoreflect.Value) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.isInit = value
	}

	public get merge(): ((dst: protoreflect.Value, src: protoreflect.Value, opts: __goscript_merge.mergeOptions) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null {
		return this._fields.merge
	}

	public set merge(value: ((dst: protoreflect.Value, src: protoreflect.Value, opts: __goscript_merge.mergeOptions) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null) {
		this._fields.merge = value
	}

	public _fields: {
		size: ((v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null
		marshal: ((b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		unmarshal: ((b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions) => [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]>) | null
		isInit: ((v: protoreflect.Value) => $.GoError | globalThis.Promise<$.GoError>) | null
		merge: ((dst: protoreflect.Value, src: protoreflect.Value, opts: __goscript_merge.mergeOptions) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null
	}

	constructor(init?: Partial<{size?: ((v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null, marshal?: ((b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, unmarshal?: ((b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions) => [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]>) | null, isInit?: ((v: protoreflect.Value) => $.GoError | globalThis.Promise<$.GoError>) | null, merge?: ((dst: protoreflect.Value, src: protoreflect.Value, opts: __goscript_merge.mergeOptions) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (null! as ((v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions) => number | globalThis.Promise<number>) | null),
			marshal: init?.marshal ?? (null! as ((b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			unmarshal: init?.unmarshal ?? (null! as ((b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions) => [protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError] | globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]>) | null),
			isInit: init?.isInit ?? (null! as ((v: protoreflect.Value) => $.GoError | globalThis.Promise<$.GoError>) | null),
			merge: init?.merge ?? (null! as ((dst: protoreflect.Value, src: protoreflect.Value, opts: __goscript_merge.mergeOptions) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): valueCoderFuncs {
		return new valueCoderFuncs(this, true)
	}

	public __goscriptAssign(source: valueCoderFuncs): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
		target.marshal = values.marshal
		target.unmarshal = values.unmarshal
		target.isInit = values.isInit
		target.merge = values.merge
	}

	static __typeInfo = $.registerStructType(
		"impl.valueCoderFuncs",
		() => new valueCoderFuncs(),
		() => [],
		valueCoderFuncs,
		() => [/* @__PURE__ */ $.structField("size", ({ kind: $.TypeKind.Function, params: ["protoreflect.Value", /* @__PURE__ */ $.basicType("int"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("marshal", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "protoreflect.Value", /* @__PURE__ */ $.basicType("uint64"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("unmarshal", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "protoreflect.Value", /* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.basicType("int8", "protowire.Type"), "impl.unmarshalOptions"], results: ["protoreflect.Value", "impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("isInit", ({ kind: $.TypeKind.Function, params: ["protoreflect.Value"], results: ["error"] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("merge", ({ kind: $.TypeKind.Function, params: ["protoreflect.Value", "protoreflect.Value", "impl.mergeOptions"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export async function fieldCoder(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<[__goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null, pointerCoderFuncs]> {
	switch ((true as boolean)) {
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return __goscript_codec_map.encoderFuncsForMap(fd, ft)
			break
		}
		case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) && !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
				break
			}
			let __goscriptShadow0 = ft
			let __goscriptShadow1 = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBoolSlice()).clone()]
					}
					break
				}
				case protoreflect.EnumKind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_reflect.__goscript_get_coderEnumSlice()).clone()]
					}
					break
				}
				case protoreflect.Int32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt32Slice()).clone()]
					}
					break
				}
				case protoreflect.Sint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint32Slice()).clone()]
					}
					break
				}
				case protoreflect.Uint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint32Slice()).clone()]
					}
					break
				}
				case protoreflect.Int64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt64Slice()).clone()]
					}
					break
				}
				case protoreflect.Sint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint64Slice()).clone()]
					}
					break
				}
				case protoreflect.Uint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint64Slice()).clone()]
					}
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed32Slice()).clone()]
					}
					break
				}
				case protoreflect.Fixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed32Slice()).clone()]
					}
					break
				}
				case protoreflect.FloatKind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFloatSlice()).clone()]
					}
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed64Slice()).clone()]
					}
					break
				}
				case protoreflect.Fixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed64Slice()).clone()]
					}
					break
				}
				case protoreflect.DoubleKind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
						return [null, (__goscript_codec_gen.__goscript_get_coderDoubleSlice()).clone()]
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringSliceValidateUTF8()).clone()]
					}
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringSlice()).clone()]
					}
					if ((((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesSliceValidateUTF8()).clone()]
					}
					if (((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesSlice()).clone()]
					}
					break
				}
				case protoreflect.BytesKind:
				{
					if ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringSlice()).clone()]
					}
					if (((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesSlice()).clone()]
					}
					break
				}
				case protoreflect.MessageKind:
				{
					return [await __goscript_message.getMessageInfo(__goscriptShadow1), await __goscript_codec_field.makeMessageSliceFieldCoder(fd, __goscriptShadow1)]
					break
				}
				case protoreflect.GroupKind:
				{
					return [await __goscript_message.getMessageInfo(__goscriptShadow1), await __goscript_codec_field.makeGroupSliceFieldCoder(fd, __goscriptShadow1)]
					break
				}
			}
			break
		}
		case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) && (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
				break
			}
			let __goscriptShadow2 = ft
			let __goscriptShadow3 = (__goscriptAwait = (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow2)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBoolPackedSlice()).clone()]
					}
					break
				}
				case protoreflect.EnumKind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_reflect.__goscript_get_coderEnumPackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Int32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt32PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Sint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint32PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Uint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint32PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Int64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt64PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Sint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint64PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Uint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint64PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed32PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Fixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed32PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.FloatKind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFloatPackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed64PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.Fixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed64PackedSlice()).clone()]
					}
					break
				}
				case protoreflect.DoubleKind:
				{
					if ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
						return [null, (__goscript_codec_gen.__goscript_get_coderDoublePackedSlice()).clone()]
					}
					break
				}
			}
			break
		}
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11:
		{
			return [await __goscript_message.getMessageInfo(ft), await __goscript_codec_field.makeMessageFieldCoder(fd, ft)]
			break
		}
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10:
		{
			return [await __goscript_message.getMessageInfo(ft), await __goscript_codec_field.makeGroupFieldCoder(fd, ft)]
			break
		}
		case !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasPresence(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null):
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBoolNoZero()).clone()]
					}
					break
				}
				case protoreflect.EnumKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_reflect.__goscript_get_coderEnumNoZero()).clone()]
					}
					break
				}
				case protoreflect.Int32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt32NoZero()).clone()]
					}
					break
				}
				case protoreflect.Sint32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint32NoZero()).clone()]
					}
					break
				}
				case protoreflect.Uint32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint32NoZero()).clone()]
					}
					break
				}
				case protoreflect.Int64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt64NoZero()).clone()]
					}
					break
				}
				case protoreflect.Sint64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint64NoZero()).clone()]
					}
					break
				}
				case protoreflect.Uint64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint64NoZero()).clone()]
					}
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed32NoZero()).clone()]
					}
					break
				}
				case protoreflect.Fixed32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed32NoZero()).clone()]
					}
					break
				}
				case protoreflect.FloatKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFloatNoZero()).clone()]
					}
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed64NoZero()).clone()]
					}
					break
				}
				case protoreflect.Fixed64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed64NoZero()).clone()]
					}
					break
				}
				case protoreflect.DoubleKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
						return [null, (__goscript_codec_gen.__goscript_get_coderDoubleNoZero()).clone()]
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringNoZeroValidateUTF8()).clone()]
					}
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringNoZero()).clone()]
					}
					if ((((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesNoZeroValidateUTF8()).clone()]
					}
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesNoZero()).clone()]
					}
					break
				}
				case protoreflect.BytesKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringNoZero()).clone()]
					}
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesNoZero()).clone()]
					}
					break
				}
			}
			break
		}
		case (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22:
		{
			let __goscriptShadow4 = ft
			let __goscriptShadow5 = (__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow4)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBoolPtr()).clone()]
					}
					break
				}
				case protoreflect.EnumKind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_reflect.__goscript_get_coderEnumPtr()).clone()]
					}
					break
				}
				case protoreflect.Int32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt32Ptr()).clone()]
					}
					break
				}
				case protoreflect.Sint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint32Ptr()).clone()]
					}
					break
				}
				case protoreflect.Uint32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint32Ptr()).clone()]
					}
					break
				}
				case protoreflect.Int64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt64Ptr()).clone()]
					}
					break
				}
				case protoreflect.Sint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint64Ptr()).clone()]
					}
					break
				}
				case protoreflect.Uint64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint64Ptr()).clone()]
					}
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed32Ptr()).clone()]
					}
					break
				}
				case protoreflect.Fixed32Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed32Ptr()).clone()]
					}
					break
				}
				case protoreflect.FloatKind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFloatPtr()).clone()]
					}
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed64Ptr()).clone()]
					}
					break
				}
				case protoreflect.Fixed64Kind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed64Ptr()).clone()]
					}
					break
				}
				case protoreflect.DoubleKind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
						return [null, (__goscript_codec_gen.__goscript_get_coderDoublePtr()).clone()]
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringPtrValidateUTF8()).clone()]
					}
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringPtr()).clone()]
					}
					break
				}
				case protoreflect.BytesKind:
				{
					if ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow5)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringPtr()).clone()]
					}
					break
				}
			}
			break
		}
		default:
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBool()).clone()]
					}
					break
				}
				case protoreflect.EnumKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_reflect.__goscript_get_coderEnum()).clone()]
					}
					break
				}
				case protoreflect.Int32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt32()).clone()]
					}
					break
				}
				case protoreflect.Sint32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint32()).clone()]
					}
					break
				}
				case protoreflect.Uint32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint32()).clone()]
					}
					break
				}
				case protoreflect.Int64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderInt64()).clone()]
					}
					break
				}
				case protoreflect.Sint64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSint64()).clone()]
					}
					break
				}
				case protoreflect.Uint64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderUint64()).clone()]
					}
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed32()).clone()]
					}
					break
				}
				case protoreflect.Fixed32Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed32()).clone()]
					}
					break
				}
				case protoreflect.FloatKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFloat()).clone()]
					}
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
						return [null, (__goscript_codec_gen.__goscript_get_coderSfixed64()).clone()]
					}
					break
				}
				case protoreflect.Fixed64Kind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
						return [null, (__goscript_codec_gen.__goscript_get_coderFixed64()).clone()]
					}
					break
				}
				case protoreflect.DoubleKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
						return [null, (__goscript_codec_gen.__goscript_get_coderDouble()).clone()]
					}
					break
				}
				case protoreflect.StringKind:
				{
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderStringValidateUTF8()).clone()]
					}
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderString()).clone()]
					}
					if ((((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) && await strs.EnforceUTF8(fd)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytesValidateUTF8()).clone()]
					}
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytes()).clone()]
					}
					break
				}
				case protoreflect.BytesKind:
				{
					if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						return [null, (__goscript_codec_gen.__goscript_get_coderString()).clone()]
					}
					if (((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
						return [null, (__goscript_codec_gen.__goscript_get_coderBytes()).clone()]
					}
					break
				}
			}
			break
		}
	}
	$.panic(await fmt.Sprintf("invalid type: no encoder for %v %v %v/%v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Cardinality", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5()), (ft as any)))
	throw new globalThis.Error("goscript: unreachable return")
}

export async function encoderFuncsForValue(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<valueCoderFuncs> {
	switch ((true as boolean)) {
		case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) && !(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderBoolSliceValue()).clone()
					break
				}
				case protoreflect.EnumKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderEnumSliceValue()).clone()
					break
				}
				case protoreflect.Int32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt32SliceValue()).clone()
					break
				}
				case protoreflect.Sint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint32SliceValue()).clone()
					break
				}
				case protoreflect.Uint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint32SliceValue()).clone()
					break
				}
				case protoreflect.Int64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt64SliceValue()).clone()
					break
				}
				case protoreflect.Sint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint64SliceValue()).clone()
					break
				}
				case protoreflect.Uint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint64SliceValue()).clone()
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed32SliceValue()).clone()
					break
				}
				case protoreflect.Fixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed32SliceValue()).clone()
					break
				}
				case protoreflect.FloatKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFloatSliceValue()).clone()
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed64SliceValue()).clone()
					break
				}
				case protoreflect.Fixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed64SliceValue()).clone()
					break
				}
				case protoreflect.DoubleKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderDoubleSliceValue()).clone()
					break
				}
				case protoreflect.StringKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderStringSliceValue()).clone()
					break
				}
				case protoreflect.BytesKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderBytesSliceValue()).clone()
					break
				}
				case protoreflect.MessageKind:
				{
					return (__goscript_codec_field.__goscript_get_coderMessageSliceValue()).clone()
					break
				}
				case protoreflect.GroupKind:
				{
					return (__goscript_codec_field.__goscript_get_coderGroupSliceValue()).clone()
					break
				}
			}
			break
		}
		case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) && (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.BoolKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderBoolPackedSliceValue()).clone()
					break
				}
				case protoreflect.EnumKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderEnumPackedSliceValue()).clone()
					break
				}
				case protoreflect.Int32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt32PackedSliceValue()).clone()
					break
				}
				case protoreflect.Sint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint32PackedSliceValue()).clone()
					break
				}
				case protoreflect.Uint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint32PackedSliceValue()).clone()
					break
				}
				case protoreflect.Int64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt64PackedSliceValue()).clone()
					break
				}
				case protoreflect.Sint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint64PackedSliceValue()).clone()
					break
				}
				case protoreflect.Uint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint64PackedSliceValue()).clone()
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed32PackedSliceValue()).clone()
					break
				}
				case protoreflect.Fixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed32PackedSliceValue()).clone()
					break
				}
				case protoreflect.FloatKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFloatPackedSliceValue()).clone()
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed64PackedSliceValue()).clone()
					break
				}
				case protoreflect.Fixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed64PackedSliceValue()).clone()
					break
				}
				case protoreflect.DoubleKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderDoublePackedSliceValue()).clone()
					break
				}
			}
			break
		}
		default:
		{
			switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				default:
				{
					break
				}
				case protoreflect.BoolKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderBoolValue()).clone()
					break
				}
				case protoreflect.EnumKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderEnumValue()).clone()
					break
				}
				case protoreflect.Int32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt32Value()).clone()
					break
				}
				case protoreflect.Sint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint32Value()).clone()
					break
				}
				case protoreflect.Uint32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint32Value()).clone()
					break
				}
				case protoreflect.Int64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderInt64Value()).clone()
					break
				}
				case protoreflect.Sint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSint64Value()).clone()
					break
				}
				case protoreflect.Uint64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderUint64Value()).clone()
					break
				}
				case protoreflect.Sfixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed32Value()).clone()
					break
				}
				case protoreflect.Fixed32Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed32Value()).clone()
					break
				}
				case protoreflect.FloatKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFloatValue()).clone()
					break
				}
				case protoreflect.Sfixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderSfixed64Value()).clone()
					break
				}
				case protoreflect.Fixed64Kind:
				{
					return (__goscript_codec_gen.__goscript_get_coderFixed64Value()).clone()
					break
				}
				case protoreflect.DoubleKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderDoubleValue()).clone()
					break
				}
				case protoreflect.StringKind:
				{
					if (await strs.EnforceUTF8(fd)) {
						return (__goscript_codec_gen.__goscript_get_coderStringValueValidateUTF8()).clone()
					}
					return (__goscript_codec_gen.__goscript_get_coderStringValue()).clone()
					break
				}
				case protoreflect.BytesKind:
				{
					return (__goscript_codec_gen.__goscript_get_coderBytesValue()).clone()
					break
				}
				case protoreflect.MessageKind:
				{
					return (__goscript_codec_field.__goscript_get_coderMessageValue()).clone()
					break
				}
				case protoreflect.GroupKind:
				{
					return (__goscript_codec_field.__goscript_get_coderGroupValue()).clone()
					break
				}
			}
			break
		}
	}
	$.panic(await fmt.Sprintf("invalid field: no encoder for %v %v %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Cardinality", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())))
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptAwait: any
