// Generated file based on order.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/order", ["order.FieldOrder", "order.KeyOrder"])

export type FieldOrder = ((x: protoreflect.FieldDescriptor | null, y: protoreflect.FieldDescriptor | null) => boolean | globalThis.Promise<boolean>) | null

export type KeyOrder = ((x: protoreflect.MapKey, y: protoreflect.MapKey) => boolean | globalThis.Promise<boolean>) | null

export let AnyFieldOrder: FieldOrder | null = (null as FieldOrder | null)

export function __goscript_set_AnyFieldOrder(__goscriptValue: FieldOrder | null): void {
	AnyFieldOrder = __goscriptValue
}

export let LegacyFieldOrder: FieldOrder | null = $.functionValue(async (x: protoreflect.FieldDescriptor | null, y: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> => {
	let ox = (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let oy = (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let inOneof: ((od: protoreflect.OneofDescriptor | null) => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (od: protoreflect.OneofDescriptor | null): globalThis.Promise<boolean> => {
		return (od != null) && !(__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).IsSynthetic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.OneofDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

	// Extension fields sort before non-extension fields.
	if ((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !(__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	// Fields not within a oneof sort before those within a oneof.
	if ((__goscriptAwait = inOneof!(ox), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = inOneof!(oy), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return !(__goscriptAwait = inOneof!(ox), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = inOneof!(oy), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	// Fields in disjoint oneof sets are sorted by declaration index.
	if (((__goscriptAwait = inOneof!(ox), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = inOneof!(oy), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (!$.comparableEqual(ox, oy))) {
		return (__goscriptAwait = (ox !== null && (ox as any).__isVarRef !== true && (ox as any).__goValue === undefined ? (ox as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(ox)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < (__goscriptAwait = (oy !== null && (oy as any).__isVarRef !== true && (oy as any).__goValue === undefined ? (oy as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(oy)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	// Fields sorted by field number.
	return (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.FieldDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_LegacyFieldOrder(__goscriptValue: FieldOrder | null): void {
	LegacyFieldOrder = __goscriptValue
}

export let NumberFieldOrder: FieldOrder | null = $.functionValue(async (x: protoreflect.FieldDescriptor | null, y: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> => {
	return (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.FieldDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_NumberFieldOrder(__goscriptValue: FieldOrder | null): void {
	NumberFieldOrder = __goscriptValue
}

export let IndexNameFieldOrder: FieldOrder | null = $.functionValue(async (x: protoreflect.FieldDescriptor | null, y: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> => {
	// Non-extension fields sort before extension fields.
	if ((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return !(__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	// Extensions sorted by fullname.
	if ((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return $.stringCompare((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) < 0
	}
	// Non-extensions sorted by declaration index.
	return (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(x)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(y)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.FieldDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_IndexNameFieldOrder(__goscriptValue: FieldOrder | null): void {
	IndexNameFieldOrder = __goscriptValue
}

export let AnyKeyOrder: KeyOrder | null = (null as KeyOrder | null)

export function __goscript_set_AnyKeyOrder(__goscriptValue: KeyOrder | null): void {
	AnyKeyOrder = __goscriptValue
}

export let GenericKeyOrder: KeyOrder | null = $.functionValue(async (x: protoreflect.MapKey, y: protoreflect.MapKey): globalThis.Promise<boolean> => {
	{
		const __goscriptTypeSwitchValue = await x.Interface()
		switch (true) {
			case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
				{
					return !await x.Bool() && await y.Bool()
				}
				break
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")):
				{
					return await x.Int() < await y.Int()
				}
				break
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")):
				{
					return await x.Uint() < await y.Uint()
				}
				break
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					return $.stringCompare(await x.String(), await y.String()) < 0
				}
				break
			default:
				{
					$.panic("invalid map key type")
				}
				break
		}
	}
}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.MapKey"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_GenericKeyOrder(__goscriptValue: KeyOrder | null): void {
	GenericKeyOrder = __goscriptValue
}

var __goscriptAwait: any
