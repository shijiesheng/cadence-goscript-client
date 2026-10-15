// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as time from "@goscript/time/index.js"

import * as stacktrace from "@goscript/go.uber.org/zap/internal/stacktrace/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_array from "./array.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/internal/stacktrace/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./array.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.dictObject", "zap.anyFieldC"])

export type Field = zapcore.Field

export type dictObject = $.Slice<Field>

$.registerNamedType("zap.dictObject", /* @__PURE__ */ $.sliceType("zapcore.Field"));

$.registerNamedValueType(
	"zap.dictObject",
	{MarshalLogObject: (receiver: any, ...args: any[]) => (dictObject_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.dictObject",
	{MarshalLogObject: (receiver: any, ...args: any[]) => (dictObject_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])]
);

export type anyFieldC = ((_p0: string, _p1: any) => Field | globalThis.Promise<Field>) | null

export let _minTimeInt64: time.Time = $.markAsStructValue($.cloneStructValue(time.Unix(0n, -9223372036854775808n)))

export function __goscript_set__minTimeInt64(__goscriptValue: time.Time): void {
	$.assignStruct(_minTimeInt64, __goscriptValue)
}

export let _maxTimeInt64: time.Time = $.markAsStructValue($.cloneStructValue(time.Unix(0n, 9223372036854775807n)))

export function __goscript_set__maxTimeInt64(__goscriptValue: time.Time): void {
	$.assignStruct(_maxTimeInt64, __goscriptValue)
}

export function Skip(): Field {
	return new zapcore.Field({Type: 27}, true)
}

export function nilField(key: string): Field {
	return Reflect(key, null)
}

export function Binary(key: string, val: $.Slice<number>): Field {
	return new zapcore.Field({Key: key, Type: 3, Interface: $.interfaceValue(val, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))}, true)
}

export function Bool(key: string, val: boolean): Field {
	let ival: bigint = 0n
	if (val) {
		ival = 1n
	}
	return new zapcore.Field({Key: key, Type: 4, Integer: ival}, true)
}

export function Boolp(key: string, val: $.VarRef<boolean> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Bool(key, $.pointerValue<boolean>(val))
}

export function ByteString(key: string, val: $.Slice<number>): Field {
	return new zapcore.Field({Key: key, Type: 5, Interface: $.interfaceValue(val, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))}, true)
}

export function Complex128(key: string, val: $.Complex): Field {
	return new zapcore.Field({Key: key, Type: 6, Interface: $.basicInterfaceValue(val, "complex128")}, true)
}

export function Complex128p(key: string, val: $.VarRef<$.Complex> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Complex128(key, $.pointerValue<$.Complex>(val))
}

export function Complex64(key: string, val: $.Complex): Field {
	return new zapcore.Field({Key: key, Type: 7, Interface: $.basicInterfaceValue(val, "complex64")}, true)
}

export function Complex64p(key: string, val: $.VarRef<$.Complex> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Complex64(key, $.complex64($.pointerValue<$.Complex>(val)))
}

export function Float64(key: string, val: number): Field {
	return (() => { const __goscriptLiteralField0 = $.int64(math.Float64bits(val)); return new zapcore.Field({Key: key, Type: 9, Integer: __goscriptLiteralField0}, true) })()
}

export function Float64p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Float64(key, $.pointerValue<number>(val))
}

export function Float32(key: string, val: number): Field {
	return (() => { const __goscriptLiteralField1 = $.int64(math.Float32bits(val)); return new zapcore.Field({Key: key, Type: 10, Integer: __goscriptLiteralField1}, true) })()
}

export function Float32p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Float32(key, $.pointerValue<number>(val))
}

export function Int(key: string, val: number): Field {
	return Int64(key, $.int64(val))
}

export function Intp(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Int(key, $.pointerValue<number>(val))
}

export function Int64(key: string, val: bigint): Field {
	return new zapcore.Field({Key: key, Type: 11, Integer: val}, true)
}

export function Int64p(key: string, val: $.VarRef<bigint> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Int64(key, $.pointerValue<bigint>(val))
}

export function Int32(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 12, Integer: $.int64(val)}, true)
}

export function Int32p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Int32(key, $.pointerValue<number>(val))
}

export function Int16(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 13, Integer: $.int64(val)}, true)
}

export function Int16p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Int16(key, $.pointerValue<number>(val))
}

export function Int8(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 14, Integer: $.int64(val)}, true)
}

export function Int8p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Int8(key, $.pointerValue<number>(val))
}

export function String(key: string, val: string): Field {
	return new zapcore.Field({Key: key, Type: 15, String: val}, true)
}

export function Stringp(key: string, val: $.VarRef<string> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return String(key, $.pointerValue<string>(val))
}

export function Uint(key: string, val: number): Field {
	return Uint64(key, $.uint64(val))
}

export function Uintp(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uint(key, $.pointerValue<number>(val))
}

export function Uint64(key: string, val: bigint): Field {
	return new zapcore.Field({Key: key, Type: 18, Integer: $.int64(val)}, true)
}

export function Uint64p(key: string, val: $.VarRef<bigint> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uint64(key, $.pointerValue<bigint>(val))
}

export function Uint32(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 19, Integer: $.int64(val)}, true)
}

export function Uint32p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uint32(key, $.pointerValue<number>(val))
}

export function Uint16(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 20, Integer: $.int64(val)}, true)
}

export function Uint16p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uint16(key, $.pointerValue<number>(val))
}

export function Uint8(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 21, Integer: $.int64(val)}, true)
}

export function Uint8p(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uint8(key, $.pointerValue<number>(val))
}

export function Uintptr(key: string, val: number): Field {
	return new zapcore.Field({Key: key, Type: 22, Integer: $.int64(val)}, true)
}

export function Uintptrp(key: string, val: $.VarRef<number> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Uintptr(key, $.pointerValue<number>(val))
}

export function Reflect(key: string, val: any): Field {
	return new zapcore.Field({Key: key, Type: 23, Interface: val}, true)
}

export function Namespace(key: string): Field {
	return new zapcore.Field({Key: key, Type: 24}, true)
}

export function Stringer(key: string, val: fmt.Stringer | null): Field {
	return new zapcore.Field({Key: key, Type: 25, Interface: (val as any)}, true)
}

export function Time(key: string, val: time.Time): Field {
	if ($.markAsStructValue($.cloneStructValue(val)).Before($.markAsStructValue($.cloneStructValue(_minTimeInt64))) || $.markAsStructValue($.cloneStructValue(val)).After($.markAsStructValue($.cloneStructValue(_maxTimeInt64)))) {
		return new zapcore.Field({Key: key, Type: 17, Interface: $.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "time.Time", "time.Time")}, true)
	}
	return (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(val)).UnixNano(); const __goscriptLiteralField3 = $.interfaceValue($.markAsStructValue($.cloneStructValue(val)).Location(), "*time.Location", /* @__PURE__ */ $.pointerType("time.Location")); return new zapcore.Field({Key: key, Type: 16, Integer: __goscriptLiteralField2, Interface: __goscriptLiteralField3}, true) })()
}

export function Timep(key: string, val: time.Time | $.VarRef<time.Time> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Time(key, $.markAsStructValue($.cloneStructValue($.pointerValue<time.Time>(val))))
}

export async function Stack(key: string): globalThis.Promise<Field> {
	return StackSkip(key, 1)
}

export async function StackSkip(key: string, skip: number): globalThis.Promise<Field> {
	// Returning the stacktrace as a string costs an allocation, but saves us
	// from expanding the zapcore.Field union struct to include a byte slice. Since
	// taking a stacktrace is already so expensive (~10us), the extra allocation
	// is okay.
	return String(key, await stacktrace.Take(skip + 1))
}

export function Duration(key: string, val: time.Duration): Field {
	return new zapcore.Field({Key: key, Type: 8, Integer: $.int64(val)}, true)
}

export function Durationp(key: string, val: $.VarRef<time.Duration> | null): Field {
	if (val == null) {
		return nilField(key)
	}
	return Duration(key, $.pointerValue<time.Duration>(val))
}

export function Object(key: string, val: zapcore.ObjectMarshaler | null): Field {
	return new zapcore.Field({Key: key, Type: 2, Interface: (val as any)}, true)
}

export function Inline(val: zapcore.ObjectMarshaler | null): Field {
	return new zapcore.Field({Type: 28, Interface: (val as any)}, true)
}

export function Dict(key: string, val: $.Slice<Field>): Field {
	return dictField(key, val)
}

export function dictField(key: string, val: $.Slice<Field>): Field {
	return Object(key, $.namedValueInterfaceValue<zapcore.ObjectMarshaler | null>((val as dictObject), "zap.dictObject", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function dictObject_MarshalLogObject(d: dictObject, enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget0 = d, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Field)).clone()
		await $.markAsStructValue($.cloneStructValue(f)).AddTo(enc)
	}
	return null
}

export async function anyFieldC_Any(f: anyFieldC | null, __typeArgs: $.GenericTypeArgs | undefined, key: string, val: any): globalThis.Promise<Field> {
	let [v, ] = $.typeAssertTuple<any>(val, __typeArgs?.["T"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })
	// val is guaranteed to be a T, except when it's nil.
	return (((__goscriptAwait = f!(key, $.copyElement(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Field)).clone()
}

export async function Any(key: string, value: any): globalThis.Promise<Field> {
	let c: any = null! as any

	{
		const __goscriptTypeSwitchValue = value
		switch (true) {
			case $.typeAssert<zapcore.ObjectMarshaler | null>(__goscriptTypeSwitchValue, "zapcore.ObjectMarshaler").ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Object, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "zapcore.ObjectMarshaler"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic6())
				}
				break
			case $.typeAssert<zapcore.ArrayMarshaler | null>(__goscriptTypeSwitchValue, "zapcore.ArrayMarshaler").ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Array, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "zapcore.ArrayMarshaler"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<Field>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("zapcore.Field")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(dictField, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic6())
				}
				break
			case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Bool, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic14(), __goscriptStatic15(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<boolean> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Boolp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic17(), __goscriptStatic18(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<boolean>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Bools, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic20(), __goscriptStatic21(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Complex>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("complex128")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Complex128, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("complex128")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic23(), __goscriptStatic24(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<$.Complex> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Complex128p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic26(), __goscriptStatic27(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<$.Complex>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Complex128s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic29(), __goscriptStatic30(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Complex>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("complex64")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Complex64, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("complex64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic32(), __goscriptStatic33(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<$.Complex> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Complex64p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic35(), __goscriptStatic36(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<$.Complex>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Complex64s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic38(), __goscriptStatic39(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Float64, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("float64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic41(), __goscriptStatic42(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Float64p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic44(), __goscriptStatic45(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Float64s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic47(), __goscriptStatic48(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Float32, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("float32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic50(), __goscriptStatic51(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Float32p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic53(), __goscriptStatic54(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Float32s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic56(), __goscriptStatic57(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic59(), __goscriptStatic60(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Intp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic62(), __goscriptStatic63(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Ints, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic65(), __goscriptStatic66(), __goscriptStatic6())
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int64, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic68(), __goscriptStatic69(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<bigint> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int64p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic71(), __goscriptStatic72(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<bigint>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Int64s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic74(), __goscriptStatic75(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int32, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic77(), __goscriptStatic78(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int32p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic80(), __goscriptStatic81(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Int32s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic83(), __goscriptStatic84(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int16, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int16")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic86(), __goscriptStatic87(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int16p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic89(), __goscriptStatic90(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Int16s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic92(), __goscriptStatic93(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int8, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int8")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic95(), __goscriptStatic96(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Int8p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic98(), __goscriptStatic99(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Int8s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic101(), __goscriptStatic102(), __goscriptStatic6())
				}
				break
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(String, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic104(), __goscriptStatic105(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<string> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Stringp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic107(), __goscriptStatic108(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<string>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Strings, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic110(), __goscriptStatic111(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic113(), __goscriptStatic114(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uintp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic116(), __goscriptStatic117(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Uints, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic119(), __goscriptStatic120(), __goscriptStatic6())
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint64, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic122(), __goscriptStatic123(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<bigint> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint64p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic125(), __goscriptStatic126(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<bigint>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Uint64s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic128(), __goscriptStatic129(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint32, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic131(), __goscriptStatic132(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint32p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic134(), __goscriptStatic135(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Uint32s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic137(), __goscriptStatic138(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint16, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic140(), __goscriptStatic141(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint16p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic143(), __goscriptStatic144(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Uint16s, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic146(), __goscriptStatic147(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint8, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint8")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic149(), __goscriptStatic150(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uint8p, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic152(), __goscriptStatic153(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Binary, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic155(), __goscriptStatic156(), __goscriptStatic6())
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uintptr")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uintptr, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uintptr")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic158(), __goscriptStatic159(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<number> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uintptr"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Uintptrp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uintptr"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic161(), __goscriptStatic162(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Uintptrs, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic164(), __goscriptStatic165(), __goscriptStatic6())
				}
				break
			case $.typeAssert<time.Time>(__goscriptTypeSwitchValue, "time.Time").ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Time, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "time.Time"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic167(), __goscriptStatic168(), __goscriptStatic6())
				}
				break
			case $.typeAssert<time.Time | $.VarRef<time.Time> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("time.Time")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Timep, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("time.Time")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic170(), __goscriptStatic171(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<time.Time>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("time.Time")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Times, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("time.Time")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic173(), __goscriptStatic174(), __goscriptStatic6())
				}
				break
			case $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Duration, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64", "time.Duration")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic176(), __goscriptStatic177(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.VarRef<time.Duration> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Durationp, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic179(), __goscriptStatic180(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<time.Duration>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Durations, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic182(), __goscriptStatic183(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.GoError>(__goscriptTypeSwitchValue, "error").ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_error.NamedError, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "error"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic185(), __goscriptStatic186(), __goscriptStatic6())
				}
				break
			case $.typeAssert<$.Slice<$.GoError>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("error")).ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(__goscript_array.Errors, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("error")], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic188(), __goscriptStatic189(), __goscriptStatic6())
				}
				break
			case $.typeAssert<fmt.Stringer | null>(__goscriptTypeSwitchValue, "fmt.Stringer").ok:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Stringer, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "fmt.Stringer"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic191(), __goscriptStatic192(), __goscriptStatic6())
				}
				break
			default:
				{
					c = $.namedValueInterfaceValue<any>($.namedFunction(Reflect, "zap.anyFieldC", ({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "zap.anyFieldC", __goscriptStatic194(), __goscriptStatic195(), __goscriptStatic6())
				}
				break
		}
	}

	return (((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as any) : $.pointerValue<any>(c)).Any(key, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Field)).clone()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalLogObject: (receiver: any, ...args: any[]) => (dictObject_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("zapcore.Field", "zap.dictObject"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "zapcore.ObjectMarshaler", zero: () => null, methods: {MarshalLogObject: (receiver: any, ...args: any[]) => receiver.MarshalLogObject(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic3(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "zapcore.ObjectMarshaler"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("Any", [["key", /* @__PURE__ */ $.basicType("string")], ["val", { kind: $.TypeKind.Interface, methods: [] }]], ["zapcore.Field"])])
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "zapcore.ArrayMarshaler", zero: () => null, methods: {MarshalLogArray: (receiver: any, ...args: any[]) => receiver.MarshalLogArray(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic7(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "zapcore.ArrayMarshaler"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType("zapcore.Field"), zero: () => null }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic10(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("bool"), zero: () => false }})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic13(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), zero: () => null }})
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic16(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")), zero: () => null }})
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic19(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic21$value: any
function __goscriptStatic21(): any {
	return __goscriptStatic21$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic22$value: any
function __goscriptStatic22(): any {
	return __goscriptStatic22$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("complex128"), zero: () => $.complex(0, 0) }})
}

var __goscriptStatic23$value: any
function __goscriptStatic23(): any {
	return __goscriptStatic23$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic22(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic24$value: any
function __goscriptStatic24(): any {
	return __goscriptStatic24$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("complex128")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic25$value: any
function __goscriptStatic25(): any {
	return __goscriptStatic25$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128")), zero: () => null }})
}

var __goscriptStatic26$value: any
function __goscriptStatic26(): any {
	return __goscriptStatic26$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic25(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic27$value: any
function __goscriptStatic27(): any {
	return __goscriptStatic27$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic28$value: any
function __goscriptStatic28(): any {
	return __goscriptStatic28$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")), zero: () => null }})
}

var __goscriptStatic29$value: any
function __goscriptStatic29(): any {
	return __goscriptStatic29$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic28(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic30$value: any
function __goscriptStatic30(): any {
	return __goscriptStatic30$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic31$value: any
function __goscriptStatic31(): any {
	return __goscriptStatic31$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("complex64"), zero: () => $.complex(0, 0) }})
}

var __goscriptStatic32$value: any
function __goscriptStatic32(): any {
	return __goscriptStatic32$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic31(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic33$value: any
function __goscriptStatic33(): any {
	return __goscriptStatic33$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("complex64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic34$value: any
function __goscriptStatic34(): any {
	return __goscriptStatic34$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex64")), zero: () => null }})
}

var __goscriptStatic35$value: any
function __goscriptStatic35(): any {
	return __goscriptStatic35$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic34(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic36$value: any
function __goscriptStatic36(): any {
	return __goscriptStatic36$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic37$value: any
function __goscriptStatic37(): any {
	return __goscriptStatic37$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")), zero: () => null }})
}

var __goscriptStatic38$value: any
function __goscriptStatic38(): any {
	return __goscriptStatic38$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic37(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic39$value: any
function __goscriptStatic39(): any {
	return __goscriptStatic39$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic40$value: any
function __goscriptStatic40(): any {
	return __goscriptStatic40$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("float64"), zero: () => 0 }})
}

var __goscriptStatic41$value: any
function __goscriptStatic41(): any {
	return __goscriptStatic41$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic40(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic42$value: any
function __goscriptStatic42(): any {
	return __goscriptStatic42$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("float64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic43$value: any
function __goscriptStatic43(): any {
	return __goscriptStatic43$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), zero: () => null }})
}

var __goscriptStatic44$value: any
function __goscriptStatic44(): any {
	return __goscriptStatic44$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic43(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic45$value: any
function __goscriptStatic45(): any {
	return __goscriptStatic45$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic46$value: any
function __goscriptStatic46(): any {
	return __goscriptStatic46$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), zero: () => null }})
}

var __goscriptStatic47$value: any
function __goscriptStatic47(): any {
	return __goscriptStatic47$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic46(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic48$value: any
function __goscriptStatic48(): any {
	return __goscriptStatic48$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic49$value: any
function __goscriptStatic49(): any {
	return __goscriptStatic49$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("float32"), zero: () => 0 }})
}

var __goscriptStatic50$value: any
function __goscriptStatic50(): any {
	return __goscriptStatic50$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic49(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic51$value: any
function __goscriptStatic51(): any {
	return __goscriptStatic51$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("float32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic52$value: any
function __goscriptStatic52(): any {
	return __goscriptStatic52$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")), zero: () => null }})
}

var __goscriptStatic53$value: any
function __goscriptStatic53(): any {
	return __goscriptStatic53$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic52(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic54$value: any
function __goscriptStatic54(): any {
	return __goscriptStatic54$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic55$value: any
function __goscriptStatic55(): any {
	return __goscriptStatic55$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")), zero: () => null }})
}

var __goscriptStatic56$value: any
function __goscriptStatic56(): any {
	return __goscriptStatic56$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic55(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic57$value: any
function __goscriptStatic57(): any {
	return __goscriptStatic57$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic58$value: any
function __goscriptStatic58(): any {
	return __goscriptStatic58$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int"), zero: () => 0 }})
}

var __goscriptStatic59$value: any
function __goscriptStatic59(): any {
	return __goscriptStatic59$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic58(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic60$value: any
function __goscriptStatic60(): any {
	return __goscriptStatic60$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic61$value: any
function __goscriptStatic61(): any {
	return __goscriptStatic61$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), zero: () => null }})
}

var __goscriptStatic62$value: any
function __goscriptStatic62(): any {
	return __goscriptStatic62$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic61(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic63$value: any
function __goscriptStatic63(): any {
	return __goscriptStatic63$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic64$value: any
function __goscriptStatic64(): any {
	return __goscriptStatic64$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), zero: () => null }})
}

var __goscriptStatic65$value: any
function __goscriptStatic65(): any {
	return __goscriptStatic65$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic64(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic66$value: any
function __goscriptStatic66(): any {
	return __goscriptStatic66$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic67$value: any
function __goscriptStatic67(): any {
	return __goscriptStatic67$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int64"), zero: () => 0n }})
}

var __goscriptStatic68$value: any
function __goscriptStatic68(): any {
	return __goscriptStatic68$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic67(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic69$value: any
function __goscriptStatic69(): any {
	return __goscriptStatic69$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic70$value: any
function __goscriptStatic70(): any {
	return __goscriptStatic70$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), zero: () => null }})
}

var __goscriptStatic71$value: any
function __goscriptStatic71(): any {
	return __goscriptStatic71$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic70(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic72$value: any
function __goscriptStatic72(): any {
	return __goscriptStatic72$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic73$value: any
function __goscriptStatic73(): any {
	return __goscriptStatic73$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), zero: () => null }})
}

var __goscriptStatic74$value: any
function __goscriptStatic74(): any {
	return __goscriptStatic74$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic73(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic75$value: any
function __goscriptStatic75(): any {
	return __goscriptStatic75$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic76$value: any
function __goscriptStatic76(): any {
	return __goscriptStatic76$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32"), zero: () => 0 }})
}

var __goscriptStatic77$value: any
function __goscriptStatic77(): any {
	return __goscriptStatic77$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic76(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic78$value: any
function __goscriptStatic78(): any {
	return __goscriptStatic78$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic79$value: any
function __goscriptStatic79(): any {
	return __goscriptStatic79$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), zero: () => null }})
}

var __goscriptStatic80$value: any
function __goscriptStatic80(): any {
	return __goscriptStatic80$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic79(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic81$value: any
function __goscriptStatic81(): any {
	return __goscriptStatic81$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic82$value: any
function __goscriptStatic82(): any {
	return __goscriptStatic82$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), zero: () => null }})
}

var __goscriptStatic83$value: any
function __goscriptStatic83(): any {
	return __goscriptStatic83$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic82(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic84$value: any
function __goscriptStatic84(): any {
	return __goscriptStatic84$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic85$value: any
function __goscriptStatic85(): any {
	return __goscriptStatic85$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int16"), zero: () => 0 }})
}

var __goscriptStatic86$value: any
function __goscriptStatic86(): any {
	return __goscriptStatic86$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic85(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic87$value: any
function __goscriptStatic87(): any {
	return __goscriptStatic87$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int16")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic88$value: any
function __goscriptStatic88(): any {
	return __goscriptStatic88$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16")), zero: () => null }})
}

var __goscriptStatic89$value: any
function __goscriptStatic89(): any {
	return __goscriptStatic89$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic88(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic90$value: any
function __goscriptStatic90(): any {
	return __goscriptStatic90$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic91$value: any
function __goscriptStatic91(): any {
	return __goscriptStatic91$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")), zero: () => null }})
}

var __goscriptStatic92$value: any
function __goscriptStatic92(): any {
	return __goscriptStatic92$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic91(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic93$value: any
function __goscriptStatic93(): any {
	return __goscriptStatic93$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic94$value: any
function __goscriptStatic94(): any {
	return __goscriptStatic94$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int8"), zero: () => 0 }})
}

var __goscriptStatic95$value: any
function __goscriptStatic95(): any {
	return __goscriptStatic95$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic94(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic96$value: any
function __goscriptStatic96(): any {
	return __goscriptStatic96$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int8")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic97$value: any
function __goscriptStatic97(): any {
	return __goscriptStatic97$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8")), zero: () => null }})
}

var __goscriptStatic98$value: any
function __goscriptStatic98(): any {
	return __goscriptStatic98$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic97(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic99$value: any
function __goscriptStatic99(): any {
	return __goscriptStatic99$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic100$value: any
function __goscriptStatic100(): any {
	return __goscriptStatic100$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")), zero: () => null }})
}

var __goscriptStatic101$value: any
function __goscriptStatic101(): any {
	return __goscriptStatic101$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic100(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic102$value: any
function __goscriptStatic102(): any {
	return __goscriptStatic102$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic103$value: any
function __goscriptStatic103(): any {
	return __goscriptStatic103$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic104$value: any
function __goscriptStatic104(): any {
	return __goscriptStatic104$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic103(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic105$value: any
function __goscriptStatic105(): any {
	return __goscriptStatic105$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic106$value: any
function __goscriptStatic106(): any {
	return __goscriptStatic106$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), zero: () => null }})
}

var __goscriptStatic107$value: any
function __goscriptStatic107(): any {
	return __goscriptStatic107$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic106(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic108$value: any
function __goscriptStatic108(): any {
	return __goscriptStatic108$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic109$value: any
function __goscriptStatic109(): any {
	return __goscriptStatic109$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), zero: () => null }})
}

var __goscriptStatic110$value: any
function __goscriptStatic110(): any {
	return __goscriptStatic110$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic109(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic111$value: any
function __goscriptStatic111(): any {
	return __goscriptStatic111$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic112$value: any
function __goscriptStatic112(): any {
	return __goscriptStatic112$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint"), zero: () => 0 }})
}

var __goscriptStatic113$value: any
function __goscriptStatic113(): any {
	return __goscriptStatic113$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic112(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic114$value: any
function __goscriptStatic114(): any {
	return __goscriptStatic114$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic115$value: any
function __goscriptStatic115(): any {
	return __goscriptStatic115$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint")), zero: () => null }})
}

var __goscriptStatic116$value: any
function __goscriptStatic116(): any {
	return __goscriptStatic116$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic115(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic117$value: any
function __goscriptStatic117(): any {
	return __goscriptStatic117$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic118$value: any
function __goscriptStatic118(): any {
	return __goscriptStatic118$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")), zero: () => null }})
}

var __goscriptStatic119$value: any
function __goscriptStatic119(): any {
	return __goscriptStatic119$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic118(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic120$value: any
function __goscriptStatic120(): any {
	return __goscriptStatic120$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic121$value: any
function __goscriptStatic121(): any {
	return __goscriptStatic121$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint64"), zero: () => 0n }})
}

var __goscriptStatic122$value: any
function __goscriptStatic122(): any {
	return __goscriptStatic122$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic121(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic123$value: any
function __goscriptStatic123(): any {
	return __goscriptStatic123$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint64")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic124$value: any
function __goscriptStatic124(): any {
	return __goscriptStatic124$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), zero: () => null }})
}

var __goscriptStatic125$value: any
function __goscriptStatic125(): any {
	return __goscriptStatic125$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic124(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic126$value: any
function __goscriptStatic126(): any {
	return __goscriptStatic126$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic127$value: any
function __goscriptStatic127(): any {
	return __goscriptStatic127$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")), zero: () => null }})
}

var __goscriptStatic128$value: any
function __goscriptStatic128(): any {
	return __goscriptStatic128$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic127(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic129$value: any
function __goscriptStatic129(): any {
	return __goscriptStatic129$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic130$value: any
function __goscriptStatic130(): any {
	return __goscriptStatic130$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint32"), zero: () => 0 }})
}

var __goscriptStatic131$value: any
function __goscriptStatic131(): any {
	return __goscriptStatic131$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic130(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic132$value: any
function __goscriptStatic132(): any {
	return __goscriptStatic132$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint32")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic133$value: any
function __goscriptStatic133(): any {
	return __goscriptStatic133$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), zero: () => null }})
}

var __goscriptStatic134$value: any
function __goscriptStatic134(): any {
	return __goscriptStatic134$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic133(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic135$value: any
function __goscriptStatic135(): any {
	return __goscriptStatic135$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic136$value: any
function __goscriptStatic136(): any {
	return __goscriptStatic136$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), zero: () => null }})
}

var __goscriptStatic137$value: any
function __goscriptStatic137(): any {
	return __goscriptStatic137$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic136(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic138$value: any
function __goscriptStatic138(): any {
	return __goscriptStatic138$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic139$value: any
function __goscriptStatic139(): any {
	return __goscriptStatic139$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint16"), zero: () => 0 }})
}

var __goscriptStatic140$value: any
function __goscriptStatic140(): any {
	return __goscriptStatic140$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic139(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic141$value: any
function __goscriptStatic141(): any {
	return __goscriptStatic141$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic142$value: any
function __goscriptStatic142(): any {
	return __goscriptStatic142$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16")), zero: () => null }})
}

var __goscriptStatic143$value: any
function __goscriptStatic143(): any {
	return __goscriptStatic143$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic142(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic144$value: any
function __goscriptStatic144(): any {
	return __goscriptStatic144$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic145$value: any
function __goscriptStatic145(): any {
	return __goscriptStatic145$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), zero: () => null }})
}

var __goscriptStatic146$value: any
function __goscriptStatic146(): any {
	return __goscriptStatic146$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic145(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic147$value: any
function __goscriptStatic147(): any {
	return __goscriptStatic147$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic148$value: any
function __goscriptStatic148(): any {
	return __goscriptStatic148$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uint8"), zero: () => 0 }})
}

var __goscriptStatic149$value: any
function __goscriptStatic149(): any {
	return __goscriptStatic149$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic148(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic150$value: any
function __goscriptStatic150(): any {
	return __goscriptStatic150$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint8")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic151$value: any
function __goscriptStatic151(): any {
	return __goscriptStatic151$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8")), zero: () => null }})
}

var __goscriptStatic152$value: any
function __goscriptStatic152(): any {
	return __goscriptStatic152$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic151(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic153$value: any
function __goscriptStatic153(): any {
	return __goscriptStatic153$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic154$value: any
function __goscriptStatic154(): any {
	return __goscriptStatic154$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), zero: () => null }})
}

var __goscriptStatic155$value: any
function __goscriptStatic155(): any {
	return __goscriptStatic155$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic154(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic156$value: any
function __goscriptStatic156(): any {
	return __goscriptStatic156$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic157$value: any
function __goscriptStatic157(): any {
	return __goscriptStatic157$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("uintptr"), zero: () => 0 }})
}

var __goscriptStatic158$value: any
function __goscriptStatic158(): any {
	return __goscriptStatic158$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic157(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic159$value: any
function __goscriptStatic159(): any {
	return __goscriptStatic159$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uintptr")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic160$value: any
function __goscriptStatic160(): any {
	return __goscriptStatic160$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uintptr")), zero: () => null }})
}

var __goscriptStatic161$value: any
function __goscriptStatic161(): any {
	return __goscriptStatic161$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic160(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic162$value: any
function __goscriptStatic162(): any {
	return __goscriptStatic162$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uintptr"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic163$value: any
function __goscriptStatic163(): any {
	return __goscriptStatic163$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), zero: () => null }})
}

var __goscriptStatic164$value: any
function __goscriptStatic164(): any {
	return __goscriptStatic164$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic163(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic165$value: any
function __goscriptStatic165(): any {
	return __goscriptStatic165$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic166$value: any
function __goscriptStatic166(): any {
	return __goscriptStatic166$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "time.Time", zero: () => $.markAsStructValue(new time.Time()), methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddDate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddDate(...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => $.pointerValue(receiver).After(...$.stripGenericTypeArgs(args)), AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), AppendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFormat(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Before(...$.stripGenericTypeArgs(args)), Clock: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clock(...$.stripGenericTypeArgs(args)), Compare: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Compare(...$.stripGenericTypeArgs(args)), Date: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Date(...$.stripGenericTypeArgs(args)), Day: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Day(...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Equal(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GoString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GoString(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Hour: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Hour(...$.stripGenericTypeArgs(args)), ISOWeek: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ISOWeek(...$.stripGenericTypeArgs(args)), In: (receiver: any, ...args: any[]) => $.pointerValue(receiver).In(...$.stripGenericTypeArgs(args)), IsDST: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsDST(...$.stripGenericTypeArgs(args)), IsZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsZero(...$.stripGenericTypeArgs(args)), Local: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Local(...$.stripGenericTypeArgs(args)), Location: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Location(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Minute: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Minute(...$.stripGenericTypeArgs(args)), Month: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Month(...$.stripGenericTypeArgs(args)), Nanosecond: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Nanosecond(...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Round(...$.stripGenericTypeArgs(args)), Second: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Second(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Truncate(...$.stripGenericTypeArgs(args)), UTC: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UTC(...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unix(...$.stripGenericTypeArgs(args)), UnixMicro: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMicro(...$.stripGenericTypeArgs(args)), UnixMilli: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMilli(...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixNano(...$.stripGenericTypeArgs(args)), Weekday: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Weekday(...$.stripGenericTypeArgs(args)), Year: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Year(...$.stripGenericTypeArgs(args)), YearDay: (receiver: any, ...args: any[]) => $.pointerValue(receiver).YearDay(...$.stripGenericTypeArgs(args)), Zone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Zone(...$.stripGenericTypeArgs(args)), ZoneBounds: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ZoneBounds(...$.stripGenericTypeArgs(args)), absSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).absSec(...$.stripGenericTypeArgs(args)), appendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormat(...$.stripGenericTypeArgs(args)), appendFormatRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormatRFC3339(...$.stripGenericTypeArgs(args)), appendStrictRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendStrictRFC3339(...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendTo(...$.stripGenericTypeArgs(args)), locabs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).locabs(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic167$value: any
function __goscriptStatic167(): any {
	return __goscriptStatic167$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic166(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic168$value: any
function __goscriptStatic168(): any {
	return __goscriptStatic168$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "time.Time"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic169$value: any
function __goscriptStatic169(): any {
	return __goscriptStatic169$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("time.Time"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddDate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddDate(...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => $.pointerValue(receiver).After(...$.stripGenericTypeArgs(args)), AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), AppendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFormat(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Before(...$.stripGenericTypeArgs(args)), Clock: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clock(...$.stripGenericTypeArgs(args)), Compare: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Compare(...$.stripGenericTypeArgs(args)), Date: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Date(...$.stripGenericTypeArgs(args)), Day: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Day(...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Equal(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GoString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GoString(...$.stripGenericTypeArgs(args)), GobDecode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobDecode(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Hour: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Hour(...$.stripGenericTypeArgs(args)), ISOWeek: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ISOWeek(...$.stripGenericTypeArgs(args)), In: (receiver: any, ...args: any[]) => $.pointerValue(receiver).In(...$.stripGenericTypeArgs(args)), IsDST: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsDST(...$.stripGenericTypeArgs(args)), IsZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsZero(...$.stripGenericTypeArgs(args)), Local: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Local(...$.stripGenericTypeArgs(args)), Location: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Location(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Minute: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Minute(...$.stripGenericTypeArgs(args)), Month: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Month(...$.stripGenericTypeArgs(args)), Nanosecond: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Nanosecond(...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Round(...$.stripGenericTypeArgs(args)), Second: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Second(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Truncate(...$.stripGenericTypeArgs(args)), UTC: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UTC(...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unix(...$.stripGenericTypeArgs(args)), UnixMicro: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMicro(...$.stripGenericTypeArgs(args)), UnixMilli: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMilli(...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixNano(...$.stripGenericTypeArgs(args)), UnmarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalBinary(...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalJSON(...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalText(...$.stripGenericTypeArgs(args)), Weekday: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Weekday(...$.stripGenericTypeArgs(args)), Year: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Year(...$.stripGenericTypeArgs(args)), YearDay: (receiver: any, ...args: any[]) => $.pointerValue(receiver).YearDay(...$.stripGenericTypeArgs(args)), Zone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Zone(...$.stripGenericTypeArgs(args)), ZoneBounds: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ZoneBounds(...$.stripGenericTypeArgs(args)), absSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).absSec(...$.stripGenericTypeArgs(args)), addSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).addSec(...$.stripGenericTypeArgs(args)), appendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormat(...$.stripGenericTypeArgs(args)), appendFormatRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormatRFC3339(...$.stripGenericTypeArgs(args)), appendStrictRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendStrictRFC3339(...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendTo(...$.stripGenericTypeArgs(args)), locabs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).locabs(...$.stripGenericTypeArgs(args)), mono: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mono(...$.stripGenericTypeArgs(args)), nsec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).nsec(...$.stripGenericTypeArgs(args)), sec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).sec(...$.stripGenericTypeArgs(args)), setLoc: (receiver: any, ...args: any[]) => $.pointerValue(receiver).setLoc(...$.stripGenericTypeArgs(args)), setMono: (receiver: any, ...args: any[]) => $.pointerValue(receiver).setMono(...$.stripGenericTypeArgs(args)), stripMono: (receiver: any, ...args: any[]) => $.pointerValue(receiver).stripMono(...$.stripGenericTypeArgs(args)), unixSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).unixSec(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic170$value: any
function __goscriptStatic170(): any {
	return __goscriptStatic170$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic169(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic171$value: any
function __goscriptStatic171(): any {
	return __goscriptStatic171$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("time.Time")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic172$value: any
function __goscriptStatic172(): any {
	return __goscriptStatic172$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType("time.Time"), zero: () => null }})
}

var __goscriptStatic173$value: any
function __goscriptStatic173(): any {
	return __goscriptStatic173$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic172(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic174$value: any
function __goscriptStatic174(): any {
	return __goscriptStatic174$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("time.Time")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic175$value: any
function __goscriptStatic175(): any {
	return __goscriptStatic175$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int64", "time.Duration"), zero: () => 0n, methods: {Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])] }})
}

var __goscriptStatic176$value: any
function __goscriptStatic176(): any {
	return __goscriptStatic176$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic175(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic177$value: any
function __goscriptStatic177(): any {
	return __goscriptStatic177$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64", "time.Duration")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic178$value: any
function __goscriptStatic178(): any {
	return __goscriptStatic178$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")), zero: () => null, methods: {Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])] }})
}

var __goscriptStatic179$value: any
function __goscriptStatic179(): any {
	return __goscriptStatic179$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic178(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic180$value: any
function __goscriptStatic180(): any {
	return __goscriptStatic180$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic181$value: any
function __goscriptStatic181(): any {
	return __goscriptStatic181$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")), zero: () => null }})
}

var __goscriptStatic182$value: any
function __goscriptStatic182(): any {
	return __goscriptStatic182$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic181(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic183$value: any
function __goscriptStatic183(): any {
	return __goscriptStatic183$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic184$value: any
function __goscriptStatic184(): any {
	return __goscriptStatic184$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic185$value: any
function __goscriptStatic185(): any {
	return __goscriptStatic185$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic184(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic186$value: any
function __goscriptStatic186(): any {
	return __goscriptStatic186$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "error"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic187$value: any
function __goscriptStatic187(): any {
	return __goscriptStatic187$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType("error"), zero: () => null }})
}

var __goscriptStatic188$value: any
function __goscriptStatic188(): any {
	return __goscriptStatic188$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic187(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic189$value: any
function __goscriptStatic189(): any {
	return __goscriptStatic189$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("error")], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic190$value: any
function __goscriptStatic190(): any {
	return __goscriptStatic190$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "fmt.Stringer", zero: () => null, methods: {String: (receiver: any, ...args: any[]) => receiver.String(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic191$value: any
function __goscriptStatic191(): any {
	return __goscriptStatic191$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic190(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic192$value: any
function __goscriptStatic192(): any {
	return __goscriptStatic192$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), "fmt.Stringer"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptStatic193$value: any
function __goscriptStatic193(): any {
	return __goscriptStatic193$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }})
}

var __goscriptStatic194$value: any
function __goscriptStatic194(): any {
	return __goscriptStatic194$value ??= ({Any: (receiver: any, ...args: any[]) => (anyFieldC_Any as any)(($.isVarRef(receiver) ? receiver.value : receiver), __goscriptStatic193(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic195$value: any
function __goscriptStatic195(): any {
	return __goscriptStatic195$value ??= (({ kind: $.TypeKind.Function, name: "zap.anyFieldC", params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
