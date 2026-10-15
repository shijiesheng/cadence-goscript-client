// Generated file based on array.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_field from "./field.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./error.gs.ts"
import "./field.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.objects", "zap.ObjectMarshalerPtr", "zap.objectValues", "zap.stringers", "zap.bools", "zap.byteStringsArray", "zap.complex128s", "zap.complex64s", "zap.durations", "zap.float64s", "zap.float32s", "zap.ints", "zap.int64s", "zap.int32s", "zap.int16s", "zap.int8s", "zap.stringArray", "zap.times", "zap.uints", "zap.uint64s", "zap.uint32s", "zap.uint16s", "zap.uint8s", "zap.uintptrs"])

export type objects = $.Slice<any>

export type ObjectMarshalerPtr = {
	MarshalLogObject(_p0: zapcore.ObjectEncoder | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"zap.ObjectMarshalerPtr",
	null,
	[$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])]
);

export type objectValues = $.Slice<any>

export type stringers = $.Slice<any>

export type bools = $.Slice<boolean>

$.registerNamedType("zap.bools", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")));

$.registerNamedValueType(
	"zap.bools",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (bools_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.bools",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (bools_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type byteStringsArray = $.Slice<$.Slice<number>>

$.registerNamedType("zap.byteStringsArray", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))));

$.registerNamedValueType(
	"zap.byteStringsArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (byteStringsArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.byteStringsArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (byteStringsArray_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type complex128s = $.Slice<$.Complex>

$.registerNamedType("zap.complex128s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")));

$.registerNamedValueType(
	"zap.complex128s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (complex128s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.complex128s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (complex128s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type complex64s = $.Slice<$.Complex>

$.registerNamedType("zap.complex64s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")));

$.registerNamedValueType(
	"zap.complex64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (complex64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.complex64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (complex64s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type durations = $.Slice<time.Duration>

$.registerNamedType("zap.durations", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")));

$.registerNamedValueType(
	"zap.durations",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (durations_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.durations",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (durations_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type float64s = $.Slice<number>

$.registerNamedType("zap.float64s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")));

$.registerNamedValueType(
	"zap.float64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (float64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.float64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (float64s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type float32s = $.Slice<number>

$.registerNamedType("zap.float32s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")));

$.registerNamedValueType(
	"zap.float32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (float32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.float32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (float32s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type ints = $.Slice<number>

$.registerNamedType("zap.ints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")));

$.registerNamedValueType(
	"zap.ints",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (ints_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.ints",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (ints_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type int64s = $.Slice<bigint>

$.registerNamedType("zap.int64s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")));

$.registerNamedValueType(
	"zap.int64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.int64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int64s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type int32s = $.Slice<number>

$.registerNamedType("zap.int32s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"zap.int32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.int32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int32s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type int16s = $.Slice<number>

$.registerNamedType("zap.int16s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")));

$.registerNamedValueType(
	"zap.int16s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int16s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.int16s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int16s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type int8s = $.Slice<number>

$.registerNamedType("zap.int8s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")));

$.registerNamedValueType(
	"zap.int8s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int8s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.int8s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (int8s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type stringArray = $.Slice<string>

$.registerNamedType("zap.stringArray", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"zap.stringArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (stringArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.stringArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (stringArray_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type times = $.Slice<time.Time>

$.registerNamedType("zap.times", /* @__PURE__ */ $.sliceType("time.Time"));

$.registerNamedValueType(
	"zap.times",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (times_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.times",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (times_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uints = $.Slice<number>

$.registerNamedType("zap.uints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")));

$.registerNamedValueType(
	"zap.uints",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uints_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uints",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uints_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uint64s = $.Slice<bigint>

$.registerNamedType("zap.uint64s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")));

$.registerNamedValueType(
	"zap.uint64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uint64s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint64s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uint32s = $.Slice<number>

$.registerNamedType("zap.uint32s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")));

$.registerNamedValueType(
	"zap.uint32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uint32s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint32s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uint16s = $.Slice<number>

$.registerNamedType("zap.uint16s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")));

$.registerNamedValueType(
	"zap.uint16s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint16s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uint16s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint16s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uint8s = $.Slice<number>

$.registerNamedType("zap.uint8s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"zap.uint8s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint8s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uint8s",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uint8s_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export type uintptrs = $.Slice<number>

$.registerNamedType("zap.uintptrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")));

$.registerNamedValueType(
	"zap.uintptrs",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uintptrs_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.uintptrs",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (uintptrs_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export function Array(key: string, val: zapcore.ArrayMarshaler | null): __goscript_field.Field {
	return new zapcore.Field({Key: key, Type: 1, Interface: (val as any)}, true)
}

export function Bools(key: string, bs: $.Slice<boolean>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((bs as bools), "zap.bools", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export function ByteStrings(key: string, bss: $.Slice<$.Slice<number>>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((bss as byteStringsArray), "zap.byteStringsArray", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
}

export function Complex128s(key: string, nums: $.Slice<$.Complex>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as complex128s), "zap.complex128s", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()))
}

export function Complex64s(key: string, nums: $.Slice<$.Complex>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as complex64s), "zap.complex64s", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2()))
}

export function Durations(key: string, ds: $.Slice<time.Duration>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((ds as durations), "zap.durations", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()))
}

export function Float64s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as float64s), "zap.float64s", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic2()))
}

export function Float32s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as float32s), "zap.float32s", __goscriptStatic13(), __goscriptStatic14(), __goscriptStatic2()))
}

export function Ints(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as ints), "zap.ints", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic2()))
}

export function Int64s(key: string, nums: $.Slice<bigint>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as int64s), "zap.int64s", __goscriptStatic17(), __goscriptStatic18(), __goscriptStatic2()))
}

export function Int32s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as int32s), "zap.int32s", __goscriptStatic19(), __goscriptStatic20(), __goscriptStatic2()))
}

export function Int16s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as int16s), "zap.int16s", __goscriptStatic21(), __goscriptStatic22(), __goscriptStatic2()))
}

export function Int8s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as int8s), "zap.int8s", __goscriptStatic23(), __goscriptStatic24(), __goscriptStatic2()))
}

export function Objects<T>(__typeArgs: $.GenericTypeArgs | undefined, key: string, values: $.Slice<T>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((values as objects), "zap.objects", {MarshalLogArray: (receiver: any, ...args: any[]) => (objects_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])] }, "zap.objects"), [$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]))
}

export async function objects_MarshalLogArray(os: objects, __typeArgs: $.GenericTypeArgs | undefined, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget0 = os, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let o = $.copyElement((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any))
		{
			let err = (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendObject($.typeParamInterfaceValue<zapcore.ObjectMarshaler | null>(o, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])] }, zero: () => null })), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function ObjectValues<T>(__typeArgs: $.GenericTypeArgs | undefined, key: string, values: $.Slice<T>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((values as objectValues), "zap.objectValues", {MarshalLogArray: (receiver: any, ...args: any[]) => (objectValues_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "zap.objectValues"), [$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]))
}

export async function objectValues_MarshalLogArray(os: objectValues, __typeArgs: $.GenericTypeArgs | undefined, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget1 = os, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		// It is necessary for us to explicitly reference the "P" type.
		// We cannot simply pass "&os[i]" to AppendObject because its type
		// is "*T", which the type system does not consider as
		// implementing ObjectMarshaler.
		// Only the type "P" satisfies ObjectMarshaler, which we have
		// to convert "*T" to explicitly.
		let p: any = $.interfaceValue($.indexRef(os!, i), "*T", /* @__PURE__ */ $.pointerType(__typeArgs?.["T"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))
		{
			let err = (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendObject($.typeParamInterfaceValue<zapcore.ObjectMarshaler | null>(p, __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])] }, zero: () => null })), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function Strings(key: string, ss: $.Slice<string>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((ss as stringArray), "zap.stringArray", __goscriptStatic25(), __goscriptStatic26(), __goscriptStatic2()))
}

export function Stringers<T>(__typeArgs: $.GenericTypeArgs | undefined, key: string, values: $.Slice<T>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((values as stringers), "zap.stringers", {MarshalLogArray: (receiver: any, ...args: any[]) => (stringers_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }, "zap.stringers"), [$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]))
}

export async function stringers_MarshalLogArray(os: stringers, __typeArgs: $.GenericTypeArgs | undefined, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget2 = os, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let o = $.copyElement((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as any))
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendString((__goscriptAwait = $.callGenericMethod(__typeArgs, "T", "String", o), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export function Times(key: string, ts: $.Slice<time.Time>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((ts as times), "zap.times", __goscriptStatic27(), __goscriptStatic28(), __goscriptStatic2()))
}

export function Uints(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as uints), "zap.uints", __goscriptStatic29(), __goscriptStatic30(), __goscriptStatic2()))
}

export function Uint64s(key: string, nums: $.Slice<bigint>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as uint64s), "zap.uint64s", __goscriptStatic31(), __goscriptStatic32(), __goscriptStatic2()))
}

export function Uint32s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as uint32s), "zap.uint32s", __goscriptStatic33(), __goscriptStatic34(), __goscriptStatic2()))
}

export function Uint16s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as uint16s), "zap.uint16s", __goscriptStatic35(), __goscriptStatic36(), __goscriptStatic2()))
}

export function Uint8s(key: string, nums: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((nums as uint8s), "zap.uint8s", __goscriptStatic37(), __goscriptStatic38(), __goscriptStatic2()))
}

export function Uintptrs(key: string, us: $.Slice<number>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((us as uintptrs), "zap.uintptrs", __goscriptStatic39(), __goscriptStatic40(), __goscriptStatic2()))
}

export function Errors(key: string, errs: $.Slice<$.GoError>): __goscript_field.Field {
	return Array(key, $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>((errs as __goscript_error.errArray), "zap.errArray", __goscriptStatic41(), __goscriptStatic42(), __goscriptStatic2()))
}

export async function bools_MarshalLogArray(bs: bools, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget3 = bs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendBool(((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as boolean)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function byteStringsArray_MarshalLogArray(bss: byteStringsArray, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget4 = bss, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendByteString(((__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] as $.Slice<number>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function complex128s_MarshalLogArray(nums: complex128s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget5 = nums, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendComplex128(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as $.Complex)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function complex64s_MarshalLogArray(nums: complex64s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget6 = nums, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendComplex64($.complex64(((__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] as $.Complex))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function durations_MarshalLogArray(ds: durations, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget7 = ds, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendDuration(((__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] as time.Duration)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function float64s_MarshalLogArray(nums: float64s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget8 = nums, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendFloat64(((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function float32s_MarshalLogArray(nums: float32s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget9 = nums, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendFloat32(((__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function ints_MarshalLogArray(nums: ints, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget10 = nums, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendInt(((__goscriptRangeWindow10.backing as any[])[__goscriptRangeWindow10.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function int64s_MarshalLogArray(nums: int64s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget11 = nums, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendInt64(((__goscriptRangeWindow11.backing as any[])[__goscriptRangeWindow11.offset + i] as bigint)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function int32s_MarshalLogArray(nums: int32s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget12 = nums, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendInt32(((__goscriptRangeWindow12.backing as any[])[__goscriptRangeWindow12.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function int16s_MarshalLogArray(nums: int16s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget13 = nums, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendInt16(((__goscriptRangeWindow13.backing as any[])[__goscriptRangeWindow13.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function int8s_MarshalLogArray(nums: int8s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget14 = nums, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendInt8(((__goscriptRangeWindow14.backing as any[])[__goscriptRangeWindow14.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function stringArray_MarshalLogArray(ss: stringArray, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget15 = ss, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow15.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendString(((__goscriptRangeWindow15.backing as any[])[__goscriptRangeWindow15.offset + i] as string)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function times_MarshalLogArray(ts: times, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget16 = ts, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), i = 0; i < __goscriptRangeWindow16.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendTime($.markAsStructValue($.cloneStructValue(((__goscriptRangeWindow16.backing as any[])[__goscriptRangeWindow16.offset + i] as time.Time)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uints_MarshalLogArray(nums: uints, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget17 = nums, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUint(((__goscriptRangeWindow17.backing as any[])[__goscriptRangeWindow17.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uint64s_MarshalLogArray(nums: uint64s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget18 = nums, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), i = 0; i < __goscriptRangeWindow18.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUint64(((__goscriptRangeWindow18.backing as any[])[__goscriptRangeWindow18.offset + i] as bigint)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uint32s_MarshalLogArray(nums: uint32s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget19 = nums, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), i = 0; i < __goscriptRangeWindow19.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUint32(((__goscriptRangeWindow19.backing as any[])[__goscriptRangeWindow19.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uint16s_MarshalLogArray(nums: uint16s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget20 = nums, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), i = 0; i < __goscriptRangeWindow20.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUint16(((__goscriptRangeWindow20.backing as any[])[__goscriptRangeWindow20.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uint8s_MarshalLogArray(nums: uint8s, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget21 = nums, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), i = 0; i < __goscriptRangeWindow21.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUint8(((__goscriptRangeWindow21.backing as any[])[__goscriptRangeWindow21.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

export async function uintptrs_MarshalLogArray(nums: uintptrs, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget22 = nums, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), i = 0; i < __goscriptRangeWindow22.length; i++) {
		void (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendUintptr(((__goscriptRangeWindow22.backing as any[])[__goscriptRangeWindow22.offset + i] as number)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (bools_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"), "zap.bools"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (byteStringsArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "zap.byteStringsArray"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (complex128s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"), "zap.complex128s"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (complex64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"), "zap.complex64s"))
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (durations_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "zap.durations"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (float64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "zap.float64s"))
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (float32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"), "zap.float32s"))
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (ints_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "zap.ints"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (int64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"), "zap.int64s"))
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (int32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "zap.int32s"))
}

var __goscriptStatic21$value: any
function __goscriptStatic21(): any {
	return __goscriptStatic21$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (int16s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic22$value: any
function __goscriptStatic22(): any {
	return __goscriptStatic22$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"), "zap.int16s"))
}

var __goscriptStatic23$value: any
function __goscriptStatic23(): any {
	return __goscriptStatic23$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (int8s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic24$value: any
function __goscriptStatic24(): any {
	return __goscriptStatic24$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"), "zap.int8s"))
}

var __goscriptStatic25$value: any
function __goscriptStatic25(): any {
	return __goscriptStatic25$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (stringArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic26$value: any
function __goscriptStatic26(): any {
	return __goscriptStatic26$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "zap.stringArray"))
}

var __goscriptStatic27$value: any
function __goscriptStatic27(): any {
	return __goscriptStatic27$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (times_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic28$value: any
function __goscriptStatic28(): any {
	return __goscriptStatic28$value ??= (/* @__PURE__ */ $.sliceType("time.Time", "zap.times"))
}

var __goscriptStatic29$value: any
function __goscriptStatic29(): any {
	return __goscriptStatic29$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uints_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic30$value: any
function __goscriptStatic30(): any {
	return __goscriptStatic30$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"), "zap.uints"))
}

var __goscriptStatic31$value: any
function __goscriptStatic31(): any {
	return __goscriptStatic31$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uint64s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic32$value: any
function __goscriptStatic32(): any {
	return __goscriptStatic32$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"), "zap.uint64s"))
}

var __goscriptStatic33$value: any
function __goscriptStatic33(): any {
	return __goscriptStatic33$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uint32s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic34$value: any
function __goscriptStatic34(): any {
	return __goscriptStatic34$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"), "zap.uint32s"))
}

var __goscriptStatic35$value: any
function __goscriptStatic35(): any {
	return __goscriptStatic35$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uint16s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic36$value: any
function __goscriptStatic36(): any {
	return __goscriptStatic36$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"), "zap.uint16s"))
}

var __goscriptStatic37$value: any
function __goscriptStatic37(): any {
	return __goscriptStatic37$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uint8s_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic38$value: any
function __goscriptStatic38(): any {
	return __goscriptStatic38$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "zap.uint8s"))
}

var __goscriptStatic39$value: any
function __goscriptStatic39(): any {
	return __goscriptStatic39$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (uintptrs_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic40$value: any
function __goscriptStatic40(): any {
	return __goscriptStatic40$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"), "zap.uintptrs"))
}

var __goscriptStatic41$value: any
function __goscriptStatic41(): any {
	return __goscriptStatic41$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (__goscript_error.errArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic42$value: any
function __goscriptStatic42(): any {
	return __goscriptStatic42$value ??= (/* @__PURE__ */ $.sliceType("error", "zap.errArray"))
}

var __goscriptAwait: any
