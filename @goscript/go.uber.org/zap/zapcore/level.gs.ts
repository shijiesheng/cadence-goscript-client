// Generated file based on level.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.Level", "zapcore.leveledEnabler", "zapcore.LevelEnabler"])

export type Level = number

$.registerNamedValueType(
	"zapcore.Level",
	{CapitalString: (receiver: any, ...args: any[]) => (Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*zapcore.Level",
	{CapitalString: (receiver: any, ...args: any[]) => (Level_CapitalString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (Level_Enabled as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (Level_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (Level_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Level_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), unmarshalText: (receiver: any, ...args: any[]) => (Level_unmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("unmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type leveledEnabler = {
	Enabled(_p0: Level): boolean | globalThis.Promise<boolean>
	Level(): Level | globalThis.Promise<Level>
}

$.registerInterfaceType(
	"zapcore.leveledEnabler",
	null,
	[$.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")])]
);

export type LevelEnabler = {
	Enabled(_p0: Level): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"zapcore.LevelEnabler",
	null,
	[$.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")])]
);

export const DebugLevel: Level = -1

export const InfoLevel: Level = 0

export const WarnLevel: Level = 1

export const ErrorLevel: Level = 2

export const DPanicLevel: Level = 3

export const PanicLevel: Level = 4

export const FatalLevel: Level = 5

export const _minLevel: Level = -1

export const _maxLevel: Level = 5

export const InvalidLevel: Level = 6

export let errUnmarshalNilLevel: $.GoError = errors.New("can't unmarshal a nil *Level")

export function __goscript_set_errUnmarshalNilLevel(__goscriptValue: $.GoError): void {
	errUnmarshalNilLevel = __goscriptValue
}

export function ParseLevel(text: string): [Level, $.GoError] {
	let level: $.VarRef<Level> = $.varRef(0)
	let err = Level_UnmarshalText(level, $.stringToBytes(text))
	return [level.value, err]
}

export async function LevelOf(enab: LevelEnabler | null): globalThis.Promise<Level> {
	{
		let [lvler, ok] = $.typeAssertTuple<leveledEnabler | null>(enab, "zapcore.leveledEnabler")
		if (ok) {
			return (lvler !== null && (lvler as any).__isVarRef !== true && (lvler as any).__goValue === undefined ? (lvler as Exclude<leveledEnabler, null>) : $.pointerValue<Exclude<leveledEnabler, null>>(lvler)).Level()
		}
	}

	for (let lvl = -1; lvl <= 5; lvl = ((lvl + 1) << 24 >> 24)) {
		if ((__goscriptAwait = (enab !== null && (enab as any).__isVarRef !== true && (enab as any).__goValue === undefined ? (enab as Exclude<LevelEnabler, null>) : $.pointerValue<Exclude<LevelEnabler, null>>(enab)).Enabled(lvl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return lvl
		}
	}

	return 6
}

export async function Level_String(l: Level): globalThis.Promise<string> {
	switch (l) {
		case -1:
		{
			return "debug"
			break
		}
		case 0:
		{
			return "info"
			break
		}
		case 1:
		{
			return "warn"
			break
		}
		case 2:
		{
			return "error"
			break
		}
		case 3:
		{
			return "dpanic"
			break
		}
		case 4:
		{
			return "panic"
			break
		}
		case 5:
		{
			return "fatal"
			break
		}
		default:
		{
			return fmt.Sprintf("Level(%d)", $.namedValueInterfaceValue<any>(l, "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Level_CapitalString(l: Level): globalThis.Promise<string> {
	// Printing levels in all-caps is common enough that we should export this
	// functionality.
	switch (l) {
		case -1:
		{
			return "DEBUG"
			break
		}
		case 0:
		{
			return "INFO"
			break
		}
		case 1:
		{
			return "WARN"
			break
		}
		case 2:
		{
			return "ERROR"
			break
		}
		case 3:
		{
			return "DPANIC"
			break
		}
		case 4:
		{
			return "PANIC"
			break
		}
		case 5:
		{
			return "FATAL"
			break
		}
		default:
		{
			return fmt.Sprintf("LEVEL(%d)", $.namedValueInterfaceValue<any>(l, "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Level_MarshalText(l: Level): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return [$.stringToBytes(await Level_String(l)), null]
}

export function Level_UnmarshalText(l: $.VarRef<Level> | null, text: $.Slice<number>): $.GoError {
	if (l == null) {
		return errUnmarshalNilLevel
	}
	if (!Level_unmarshalText(l, text) && !Level_unmarshalText(l, bytes.ToLower(text))) {
		return fmt.Errorf("unrecognized level: %q", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}
	return null
}

export function Level_unmarshalText(l: $.VarRef<Level> | null, text: $.Slice<number>): boolean {
	switch ($.bytesToString(text)) {
		case "debug":
		case "DEBUG":
		{
			l!.value = -1
			break
		}
		case "info":
		case "INFO":
		case "":
		{
			l!.value = 0
			break
		}
		case "warn":
		case "WARN":
		{
			l!.value = 1
			break
		}
		case "error":
		case "ERROR":
		{
			l!.value = 2
			break
		}
		case "dpanic":
		case "DPANIC":
		{
			l!.value = 3
			break
		}
		case "panic":
		case "PANIC":
		{
			l!.value = 4
			break
		}
		case "fatal":
		case "FATAL":
		{
			l!.value = 5
			break
		}
		default:
		{
			return false
			break
		}
	}
	return true
}

export function Level_Set(l: $.VarRef<Level> | null, s: string): $.GoError {
	return Level_UnmarshalText(l, $.stringToBytes(s))
}

export function Level_Get(l: $.VarRef<Level> | null): any {
	return $.namedValueInterfaceValue<any>($.pointerValue<Level>(l), "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function Level_Enabled(l: Level, lvl: Level): boolean {
	return lvl >= l
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "zapcore.Level"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
