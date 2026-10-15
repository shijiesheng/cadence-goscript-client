// Generated file based on options.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_field from "./field.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import type * as __goscript_sugar from "./sugar.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./logger.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.Option", "zap.optionFunc"])

export type Option = {
	apply(_p0: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void
}

$.registerInterfaceType(
	"zap.Option",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("zap.Logger")])]
);

export type optionFunc = ((_p0: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null) => void) | null

$.registerNamedValueType(
	"zap.optionFunc",
	{apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["log", /* @__PURE__ */ $.pointerType("zap.Logger")]])]
);

$.registerNamedValueType(
	"*zap.optionFunc",
	{apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["log", /* @__PURE__ */ $.pointerType("zap.Logger")]])]
);

export async function optionFunc_apply(f: optionFunc | null, log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<void> {
	void (__goscriptAwait = f!(log), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function WrapCore(f: ((_p0: zapcore.Core | null) => zapcore.Core | null | globalThis.Promise<zapcore.Core | null>) | null): globalThis.Promise<Option | null> {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue(async (log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<void> => {
		$.pointerValue<__goscript_logger.Logger>(log).core = (__goscriptAwait = f!($.pointerValue<__goscript_logger.Logger>(log).core), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function Hooks(hooks: $.Slice<((_p0: zapcore.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).core = zapcore.RegisterHooks($.pointerValue<__goscript_logger.Logger>(log).core, hooks)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function Fields(fs: $.Slice<__goscript_field.Field>): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue(async (log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<void> => {
		$.pointerValue<__goscript_logger.Logger>(log).core = (__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>($.pointerValue<__goscript_logger.Logger>(log).core).With(fs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function ErrorOutput(w: zapcore.WriteSyncer | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).errorOutput = w
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function Development(): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).development = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function AddCaller(): Option | null {
	return WithCaller(true)
}

export function WithCaller(enabled: boolean): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).addCaller = enabled
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function AddCallerSkip(skip: number): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).callerSkip = $.pointerValue<__goscript_logger.Logger>(log).callerSkip + (skip)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function AddStacktrace(lvl: zapcore.LevelEnabler | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).addStack = lvl
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function IncreaseLevel(lvl: zapcore.LevelEnabler | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue(async (log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<void> => {
		let __goscriptTuple0: any = await zapcore.NewIncreaseLevelCore($.pointerValue<__goscript_logger.Logger>(log).core, lvl)
		let core = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			await fmt.Fprintf($.pointerValueOrNil(($.pointerValue<__goscript_logger.Logger>(log).errorOutput as io.Writer | null))!, "failed to IncreaseLevel: %v\n", (err as any))
		} else {
			$.pointerValue<__goscript_logger.Logger>(log).core = core
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function WithPanicHook(hook: zapcore.CheckWriteHook | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).onPanic = hook
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function OnFatal(action: zapcore.CheckWriteAction): Option | null {
	return WithFatalHook($.namedValueInterfaceValue<zapcore.CheckWriteHook | null>(action, "zapcore.CheckWriteAction", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export function WithFatalHook(hook: zapcore.CheckWriteHook | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).onFatal = hook
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function WithClock(clock: zapcore.Clock | null): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.namedFunction($.functionValue((log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void => {
		$.pointerValue<__goscript_logger.Logger>(log).clock = clock
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", ({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo)), "zap.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "zap.optionFunc", params: [/* @__PURE__ */ $.pointerType("zap.Logger")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("apply", [["log", /* @__PURE__ */ $.pointerType("zap.Logger")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({OnWrite: (receiver: any, ...args: any[]) => (zapcore.CheckWriteAction_OnWrite as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint8", "zapcore.CheckWriteAction"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("OnWrite", [["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]])])
}

var __goscriptAwait: any
