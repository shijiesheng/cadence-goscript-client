// Generated file based on global.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_sugar from "./sugar.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./level.gs.ts"
import "./logger.gs.ts"
import "./options.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.loggerWriter"])

export class loggerWriter {
	public get logFunc(): ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null {
		return this._fields.logFunc
	}

	public set logFunc(value: ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null) {
		this._fields.logFunc = value
	}

	public _fields: {
		logFunc: ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null
	}

	constructor(init?: Partial<{logFunc?: ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logFunc: init?.logFunc ?? (null! as ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): loggerWriter {
		return new loggerWriter(this, true)
	}

	public __goscriptAssign(source: loggerWriter): void {
		const target = this._fields
		const values = source._fields
		target.logFunc = values.logFunc
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const l: loggerWriter | $.VarRef<loggerWriter> | null = this;
		p = bytes.TrimSpace(p)
		void (__goscriptAwait = $.pointerValue<loggerWriter>(l).logFunc!($.bytesToString(p), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [$.sliceLen(p), null]
	}

	static __typeInfo = $.registerStructType(
		"zap.loggerWriter",
		() => new loggerWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		loggerWriter,
		() => [/* @__PURE__ */ $.structField("logFunc", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export const _stdLogDefaultDepth: number = 1

export const _loggerWriterDepth: number = 2

export const _programmerErrorTemplate: string = "You've found a bug in zap! Please file a bug at https://github.com/uber-go/zap/issues/new and reference this error: %v"

export let _globalMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set__globalMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(_globalMu.value, __goscriptValue)
}

export var _globalL: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null

export function __goscript_init__globalL(): void {
	if (((_globalL) as any) === undefined) {
		_globalL = __goscript_logger.NewNop()
	}
}

export function __goscript_get__globalL(): __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null {
	if (((_globalL) as any) === undefined) {
		__goscript_init__globalL()
	}
	return _globalL
}

export function __goscript_set__globalL(__goscriptValue: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): void {
	_globalL = __goscriptValue
}

export var _globalS: __goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null

export function __goscript_init__globalS(): void {
	if (((_globalS) as any) === undefined) {
		_globalS = __goscript_logger.Logger.prototype.Sugar.call(__goscript_get__globalL())
	}
}

export function __goscript_get__globalS(): __goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null {
	if (((_globalS) as any) === undefined) {
		__goscript_init__globalS()
	}
	return _globalS
}

export function __goscript_set__globalS(__goscriptValue: __goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null): void {
	_globalS = __goscriptValue
}

export async function L(): globalThis.Promise<__goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null> {
	await _globalMu.value.RLock()
	let l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = __goscript_get__globalL()
	_globalMu.value.RUnlock()
	return l
}

export async function S(): globalThis.Promise<__goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null> {
	await _globalMu.value.RLock()
	let s: __goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null = __goscript_get__globalS()
	_globalMu.value.RUnlock()
	return s
}

export async function ReplaceGlobals(logger: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<(() => void) | null> {
	await _globalMu.value.Lock()
	let prev: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = __goscript_get__globalL()
	__goscript_set__globalL(logger)
	__goscript_set__globalS((logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as __goscript_logger.Logger).Sugar() : __goscript_logger.Logger.prototype.Sugar.call(logger)))
	_globalMu.value.Unlock()
	return $.functionValue(async (): globalThis.Promise<void> => {
		await ReplaceGlobals(prev)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

export async function NewStdLog(l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<log.Logger | $.VarRef<log.Logger> | null> {
	let logger: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as __goscript_logger.Logger).WithOptions($.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])) : __goscript_logger.Logger.prototype.WithOptions.call(l, $.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])))
	let f: ((msg: string, fields: $.Slice<__goscript_field.Field>) => void) | null = $.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Info(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Info-fm")
	return log.New($.interfaceValue<io.Writer | null>(new loggerWriter({logFunc: f}), "*zap.loggerWriter", /* @__PURE__ */ $.pointerType("zap.loggerWriter")), "", 0)
}

export async function NewStdLogAt(l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null, level: zapcore.Level): globalThis.Promise<[log.Logger | $.VarRef<log.Logger> | null, $.GoError]> {
	let logger: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as __goscript_logger.Logger).WithOptions($.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])) : __goscript_logger.Logger.prototype.WithOptions.call(l, $.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])))
	let [logFunc, err] = levelToFunc(logger, level)
	if (err != null) {
		return [null, err]
	}
	return [await log.New($.interfaceValue<io.Writer | null>(new loggerWriter({logFunc: logFunc}), "*zap.loggerWriter", /* @__PURE__ */ $.pointerType("zap.loggerWriter")), "", 0), null]
}

export async function RedirectStdLog(l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null): globalThis.Promise<(() => void) | null> {
	let [f, err] = await redirectStdLogAt(l, 0)
	if (err != null) {
		// Can't get here, since passing InfoLevel to redirectStdLogAt always
		// works.
		$.panic(await fmt.Sprintf("You've found a bug in zap! Please file a bug at https://github.com/uber-go/zap/issues/new and reference this error: %v", (err as any)))
	}
	return f
}

export async function RedirectStdLogAt(l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null, level: zapcore.Level): globalThis.Promise<[(() => void) | null, $.GoError]> {
	return redirectStdLogAt(l, level)
}

export async function redirectStdLogAt(l: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null, level: zapcore.Level): globalThis.Promise<[(() => void) | null, $.GoError]> {
	let flags = log.Flags()
	let prefix = log.Prefix()
	log.SetFlags(0)
	log.SetPrefix("")
	let logger: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as __goscript_logger.Logger).WithOptions($.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])) : __goscript_logger.Logger.prototype.WithOptions.call(l, $.arrayToSlice<__goscript_options.Option | null>([__goscript_options.AddCallerSkip(3)])))
	let [logFunc, err] = levelToFunc(logger, level)
	if (err != null) {
		return [(null as (() => void) | null), err]
	}
	await log.SetOutput($.interfaceValue<io.Writer | null>(new loggerWriter({logFunc: logFunc}), "*zap.loggerWriter", /* @__PURE__ */ $.pointerType("zap.loggerWriter")))
	return [$.functionValue(async (): globalThis.Promise<void> => {
		log.SetFlags(flags)
		log.SetPrefix(prefix)
		await log.SetOutput($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), null]
}

export function levelToFunc(logger: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null, lvl: zapcore.Level): [((_p0: string, _p1: $.Slice<__goscript_field.Field>) => void) | null, $.GoError] {
	switch (lvl) {
		case -1:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Debug(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Debug-fm"), null]
			break
		}
		case 0:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Info(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Info-fm"), null]
			break
		}
		case 1:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Warn(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Warn-fm"), null]
			break
		}
		case 2:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Error(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Error-fm"), null]
			break
		}
		case 3:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.DPanic(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).DPanic-fm"), null]
			break
		}
		case 4:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Panic(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Panic-fm"), null]
			break
		}
		case 5:
		{
			return [$.functionValue(((__receiver) => (msg: string, fields: $.Slice<__goscript_field.Field>) => __receiver.Fatal(msg, fields))($.pointerValue<__goscript_logger.Logger>(logger)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("zapcore.Field")], results: [], isVariadic: true } as $.FunctionTypeInfo), "go.uber.org/zap.(*Logger).Fatal-fm"), null]
			break
		}
	}
	return [(null as ((_p0: string, _p1: $.Slice<__goscript_field.Field>) => void) | null), fmt.Errorf("unrecognized level: %q", $.namedValueInterfaceValue<any>(lvl, "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (zapcore.Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (zapcore.Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (zapcore.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
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
