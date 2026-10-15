// Generated file based on flag.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as flag from "@goscript/flag/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/flag/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"

export async function LevelFlag(name: string, defaultLevel: zapcore.Level, usage: string): globalThis.Promise<$.VarRef<zapcore.Level> | null> {
	let lvl = $.varRef(defaultLevel)
	await flag.Var($.namedValueInterfaceValue<flag.Value | null>(lvl, "*zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), name, usage)
	return lvl
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (zapcore.Level_CapitalString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (zapcore.Level_Enabled as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (zapcore.Level_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (zapcore.Level_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (zapcore.Level_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), unmarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_unmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("unmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")])])
}
