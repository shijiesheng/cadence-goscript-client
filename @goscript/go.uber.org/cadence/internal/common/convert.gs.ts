// Generated file based on convert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/math/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

export function Int32Ceil(v: number): number {
	return $.int(math.Ceil(v), 32)
}

export function Int64Ceil(v: number): bigint {
	return $.int64(math.Ceil(v))
}

export function Int32Ptr(v: number): $.VarRef<number> | null {
	return (PtrOf(__goscriptStatic0(), v) as $.VarRef<number> | null)
}

export function Float64Ptr(v: number): $.VarRef<number> | null {
	return (PtrOf(__goscriptStatic1(), v) as $.VarRef<number> | null)
}

export function Int64Ptr(v: bigint): $.VarRef<bigint> | null {
	return (PtrOf(__goscriptStatic2(), v) as $.VarRef<bigint> | null)
}

export function StringPtr(v: string): $.VarRef<string> | null {
	return (PtrOf(__goscriptStatic3(), v) as $.VarRef<string> | null)
}

export function BoolPtr(v: boolean): $.VarRef<boolean> | null {
	return (PtrOf(__goscriptStatic4(), v) as $.VarRef<boolean> | null)
}

export function TaskListPtr(v: s.TaskList): s.TaskList | $.VarRef<s.TaskList> | null {
	return (PtrOf(__goscriptStatic5(), (v).clone()) as s.TaskList | $.VarRef<s.TaskList> | null)
}

export function DecisionTypePtr(t: s.DecisionType): $.VarRef<s.DecisionType> | null {
	return (PtrOf(__goscriptStatic6(), t) as $.VarRef<s.DecisionType> | null)
}

export function EventTypePtr(t: s.EventType): $.VarRef<s.EventType> | null {
	return (PtrOf(__goscriptStatic7(), t) as $.VarRef<s.EventType> | null)
}

export function QueryTaskCompletedTypePtr(t: s.QueryTaskCompletedType): $.VarRef<s.QueryTaskCompletedType> | null {
	return (PtrOf(__goscriptStatic8(), t) as $.VarRef<s.QueryTaskCompletedType> | null)
}

export function TaskListKindPtr(t: s.TaskListKind): $.VarRef<s.TaskListKind> | null {
	return (PtrOf(__goscriptStatic9(), t) as $.VarRef<s.TaskListKind> | null)
}

export function QueryResultTypePtr(t: s.QueryResultType): $.VarRef<s.QueryResultType> | null {
	return (PtrOf(__goscriptStatic10(), t) as $.VarRef<s.QueryResultType> | null)
}

export function CronOverlapPolicyPtr(t: s.CronOverlapPolicy): $.VarRef<s.CronOverlapPolicy> | null {
	return (PtrOf(__goscriptStatic11(), t) as $.VarRef<s.CronOverlapPolicy> | null)
}

export function PtrOf(__typeArgs: $.GenericTypeArgs | undefined, __goscriptParam0: any): any {
	let v: $.VarRef<any> = $.varRef(__goscriptParam0)
	return v
}

export function ValueFromPtr(__typeArgs: $.GenericTypeArgs | undefined, v: any): any {
	if (v == null) {
		return (Zero({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}) as any)
	}
	return $.copyElement($.pointerValue<any>(v))
}

export function Zero(__typeArgs: $.GenericTypeArgs | undefined): any {
	let zero: any = $.genericZero(__typeArgs, "T", null)
	return $.copyElement(zero)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32"), zero: () => 0 }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("float64"), zero: () => 0 }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int64"), zero: () => 0n }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("bool"), zero: () => false }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "shared.TaskList", zero: () => new s.TaskList(undefined, true) }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.DecisionType"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.DecisionType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.DecisionType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.DecisionType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.DecisionType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.DecisionType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.DecisionType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.DecisionType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.DecisionType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.DecisionType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.DecisionType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.EventType"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.EventType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.EventType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.EventType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.EventType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.EventType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.EventType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.EventType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.EventType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.EventType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EventType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.QueryTaskCompletedType"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.QueryTaskCompletedType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.QueryTaskCompletedType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.QueryTaskCompletedType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.TaskListKind"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.TaskListKind_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.TaskListKind_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.TaskListKind_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.TaskListKind_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.TaskListKind_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.TaskListKind_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.TaskListKind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.TaskListKind_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.TaskListKind")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.TaskListKind"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.QueryResultType"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.QueryResultType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.QueryResultType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.QueryResultType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.QueryResultType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.QueryResultType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.QueryResultType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.QueryResultType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.QueryResultType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.QueryResultType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.QueryResultType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy"), zero: () => 0, methods: {Encode: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.CronOverlapPolicy_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])] }})
}
