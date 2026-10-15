// Generated file based on zap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as os from "@goscript/os/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_event from "./event.gs.ts"

import type * as __goscript_logger from "./logger.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/os/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/fx/fxevent", ["fxevent.ZapLogger"])

export class ZapLogger {
	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public get logLevel(): zapcore.Level {
		return this._fields.logLevel
	}

	public set logLevel(value: zapcore.Level) {
		this._fields.logLevel = value
	}

	public get errorLevel(): $.VarRef<zapcore.Level> | null {
		return this._fields.errorLevel
	}

	public set errorLevel(value: $.VarRef<zapcore.Level> | null) {
		this._fields.errorLevel = value
	}

	public _fields: {
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		logLevel: zapcore.Level
		errorLevel: $.VarRef<zapcore.Level> | null
	}

	constructor(init?: Partial<{Logger?: zap.Logger | $.VarRef<zap.Logger> | null, logLevel?: zapcore.Level, errorLevel?: $.VarRef<zapcore.Level> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			logLevel: init?.logLevel ?? (0 as zapcore.Level),
			errorLevel: init?.errorLevel ?? (null! as $.VarRef<zapcore.Level> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ZapLogger {
		return new ZapLogger(this, true)
	}

	public __goscriptAssign(source: ZapLogger): void {
		const target = this._fields
		const values = source._fields
		target.Logger = values.Logger
		target.logLevel = values.logLevel
		target.errorLevel = values.errorLevel
	}

	public async LogEvent(event: __goscript_event.Event | null): globalThis.Promise<void> {
		const l: ZapLogger | $.VarRef<ZapLogger> | null = this;
		{
			const __goscriptTypeSwitchValue = event
			switch (true) {
				case $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).ok:
					{
						let e: __goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null = $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).value
						await ZapLogger.prototype.logEvent.call(l, "OnStart hook executing", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStartExecuting>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStartExecuting>(e).CallerName)]))
					}
					break
				case $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).ok:
					{
						let e: __goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null = $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).value
						if ($.pointerValue<__goscript_event.OnStartExecuted>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "OnStart hook failed", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName), zap.Error($.pointerValue<__goscript_event.OnStartExecuted>(e).Err)]))
						} else {
							await ZapLogger.prototype.logEvent.call(l, "OnStart hook executed", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName), zap.String("runtime", time.Duration_String($.pointerValue<__goscript_event.OnStartExecuted>(e).Runtime))]))
						}
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).ok:
					{
						let e: __goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null = $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).value
						await ZapLogger.prototype.logEvent.call(l, "OnStop hook executing", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStopExecuting>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStopExecuting>(e).CallerName)]))
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).ok:
					{
						let e: __goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null = $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).value
						if ($.pointerValue<__goscript_event.OnStopExecuted>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "OnStop hook failed", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName), zap.Error($.pointerValue<__goscript_event.OnStopExecuted>(e).Err)]))
						} else {
							await ZapLogger.prototype.logEvent.call(l, "OnStop hook executed", $.arrayToSlice<zap.Field>([zap.String("callee", $.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName), zap.String("caller", $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName), zap.String("runtime", time.Duration_String($.pointerValue<__goscript_event.OnStopExecuted>(e).Runtime))]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).ok:
					{
						let e: __goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null = $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).value
						if ($.pointerValue<__goscript_event.Supplied>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<zap.Field>([zap.String("type", $.pointerValue<__goscript_event.Supplied>(e).TypeName), zap.Strings("stacktrace", $.pointerValue<__goscript_event.Supplied>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Supplied>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Supplied>(e).ModuleName), zap.Error($.pointerValue<__goscript_event.Supplied>(e).Err)]))
						} else {
							await ZapLogger.prototype.logEvent.call(l, "supplied", $.arrayToSlice<zap.Field>([zap.String("type", $.pointerValue<__goscript_event.Supplied>(e).TypeName), zap.Strings("stacktrace", $.pointerValue<__goscript_event.Supplied>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Supplied>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Supplied>(e).ModuleName)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).ok:
					{
						let e: __goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null = $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).value
						for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_event.Provided>(e).OutputTypeNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
							await ZapLogger.prototype.logEvent.call(l, "provided", $.arrayToSlice<zap.Field>([zap.String("constructor", $.pointerValue<__goscript_event.Provided>(e).ConstructorName), zap.Strings("stacktrace", $.pointerValue<__goscript_event.Provided>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Provided>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Provided>(e).ModuleName), zap.String("type", rtype), maybeBool("private", $.pointerValue<__goscript_event.Provided>(e).Private)]))
						}
						if ($.pointerValue<__goscript_event.Provided>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<zap.Field>([moduleField($.pointerValue<__goscript_event.Provided>(e).ModuleName), zap.Strings("stacktrace", $.pointerValue<__goscript_event.Provided>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Provided>(e).ModuleTrace), zap.Error($.pointerValue<__goscript_event.Provided>(e).Err)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).ok:
					{
						let e: __goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null = $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).value
						for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_event.Replaced>(e).OutputTypeNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
							await ZapLogger.prototype.logEvent.call(l, "replaced", $.arrayToSlice<zap.Field>([zap.Strings("stacktrace", $.pointerValue<__goscript_event.Replaced>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Replaced>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Replaced>(e).ModuleName), zap.String("type", rtype)]))
						}
						if ($.pointerValue<__goscript_event.Replaced>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "error encountered while replacing", $.arrayToSlice<zap.Field>([zap.Strings("stacktrace", $.pointerValue<__goscript_event.Replaced>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Replaced>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Replaced>(e).ModuleName), zap.Error($.pointerValue<__goscript_event.Replaced>(e).Err)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).ok:
					{
						let e: __goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null = $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).value
						for (let __goscriptRangeTarget2 = $.pointerValue<__goscript_event.Decorated>(e).OutputTypeNames, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
							await ZapLogger.prototype.logEvent.call(l, "decorated", $.arrayToSlice<zap.Field>([zap.String("decorator", $.pointerValue<__goscript_event.Decorated>(e).DecoratorName), zap.Strings("stacktrace", $.pointerValue<__goscript_event.Decorated>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Decorated>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Decorated>(e).ModuleName), zap.String("type", rtype)]))
						}
						if ($.pointerValue<__goscript_event.Decorated>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<zap.Field>([zap.Strings("stacktrace", $.pointerValue<__goscript_event.Decorated>(e).StackTrace), zap.Strings("moduletrace", $.pointerValue<__goscript_event.Decorated>(e).ModuleTrace), moduleField($.pointerValue<__goscript_event.Decorated>(e).ModuleName), zap.Error($.pointerValue<__goscript_event.Decorated>(e).Err)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).ok:
					{
						let e: __goscript_event.Run | $.VarRef<__goscript_event.Run> | null = $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).value
						if ($.pointerValue<__goscript_event.Run>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "error returned", $.arrayToSlice<zap.Field>([zap.String("name", $.pointerValue<__goscript_event.Run>(e).Name), zap.String("kind", $.pointerValue<__goscript_event.Run>(e).Kind), moduleField($.pointerValue<__goscript_event.Run>(e).ModuleName), zap.Error($.pointerValue<__goscript_event.Run>(e).Err)]))
						} else {
							await ZapLogger.prototype.logEvent.call(l, "run", $.arrayToSlice<zap.Field>([zap.String("name", $.pointerValue<__goscript_event.Run>(e).Name), zap.String("kind", $.pointerValue<__goscript_event.Run>(e).Kind), moduleField($.pointerValue<__goscript_event.Run>(e).ModuleName)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).ok:
					{
						let e: __goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null = $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).value
						await ZapLogger.prototype.logEvent.call(l, "invoking", $.arrayToSlice<zap.Field>([zap.String("function", $.pointerValue<__goscript_event.Invoking>(e).FunctionName), moduleField($.pointerValue<__goscript_event.Invoking>(e).ModuleName)]))
					}
					break
				case $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).ok:
					{
						let e: __goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null = $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).value
						if ($.pointerValue<__goscript_event.Invoked>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "invoke failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.Invoked>(e).Err), zap.String("stack", $.pointerValue<__goscript_event.Invoked>(e).Trace), zap.String("function", $.pointerValue<__goscript_event.Invoked>(e).FunctionName), moduleField($.pointerValue<__goscript_event.Invoked>(e).ModuleName)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).ok:
					{
						let e: __goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null = $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).value
						await ZapLogger.prototype.logEvent.call(l, "received signal", $.arrayToSlice<zap.Field>([zap.String("signal", strings.ToUpper((__goscriptAwait = $.pointerValue<Exclude<os.Signal, null>>($.pointerValue<__goscript_event.Stopping>(e).Signal).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]))
					}
					break
				case $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).ok:
					{
						let e: __goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null = $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).value
						if ($.pointerValue<__goscript_event.Stopped>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ZapLogger).logError("stop failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.Stopped>(e).Err)])) : ZapLogger.prototype.logError.call(l, "stop failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.Stopped>(e).Err)])))
						}
					}
					break
				case $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).ok:
					{
						let e: __goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null = $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).value
						await ZapLogger.prototype.logError.call(l, "start failed, rolling back", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.RollingBack>(e).StartErr)]))
					}
					break
				case $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).ok:
					{
						let e: __goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null = $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).value
						if ($.pointerValue<__goscript_event.RolledBack>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ZapLogger).logError("rollback failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.RolledBack>(e).Err)])) : ZapLogger.prototype.logError.call(l, "rollback failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.RolledBack>(e).Err)])))
						}
					}
					break
				case $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).ok:
					{
						let e: __goscript_event.Started | $.VarRef<__goscript_event.Started> | null = $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).value
						if ($.pointerValue<__goscript_event.Started>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ZapLogger).logError("start failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.Started>(e).Err)])) : ZapLogger.prototype.logError.call(l, "start failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.Started>(e).Err)])))
						} else {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ZapLogger).logEvent("started", null) : ZapLogger.prototype.logEvent.call(l, "started", null))
						}
					}
					break
				case $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).ok:
					{
						let e: __goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null = $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).value
						if ($.pointerValue<__goscript_event.LoggerInitialized>(e).Err != null) {
							await ZapLogger.prototype.logError.call(l, "custom logger initialization failed", $.arrayToSlice<zap.Field>([zap.Error($.pointerValue<__goscript_event.LoggerInitialized>(e).Err)]))
						} else {
							await ZapLogger.prototype.logEvent.call(l, "initialized custom fxevent.Logger", $.arrayToSlice<zap.Field>([zap.String("function", $.pointerValue<__goscript_event.LoggerInitialized>(e).ConstructorName)]))
						}
					}
					break
			}
		}
	}

	public UseErrorLevel(__goscriptParam0: zapcore.Level): void {
		let l: ZapLogger | $.VarRef<ZapLogger> | null = this;
		let level: $.VarRef<zapcore.Level> = $.varRef(__goscriptParam0)
		$.pointerValue<ZapLogger>(l).errorLevel = level
	}

	public UseLogLevel(level: zapcore.Level): void {
		let l: ZapLogger | $.VarRef<ZapLogger> | null = this;
		$.pointerValue<ZapLogger>(l).logLevel = level
	}

	public async logError(msg: string, fields: $.Slice<zap.Field>): globalThis.Promise<void> {
		const l: ZapLogger | $.VarRef<ZapLogger> | null = this;
		const l$: ZapLogger = l == null ? $.pointerTarget<ZapLogger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<ZapLogger>(l)
		let lvl = 2
		if ((l$ as ZapLogger).errorLevel != null) {
			lvl = $.pointerValue<zapcore.Level>((l$ as ZapLogger).errorLevel)
		}
		await zap.Logger.prototype.Log.call((l$ as ZapLogger).Logger, lvl, msg, fields)
	}

	public async logEvent(msg: string, fields: $.Slice<zap.Field>): globalThis.Promise<void> {
		const l: ZapLogger | $.VarRef<ZapLogger> | null = this;
		const l$: ZapLogger = l == null ? $.pointerTarget<ZapLogger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<ZapLogger>(l)
		await zap.Logger.prototype.Log.call((l$ as ZapLogger).Logger, (l$ as ZapLogger).logLevel, msg, fields)
	}

	static __typeInfo = $.registerStructType(
		"fxevent.ZapLogger",
		() => new ZapLogger(),
		() => [$.methodSignature("LogEvent", [["event", "fxevent.Event"]], [], true), $.methodSignature("UseErrorLevel", [["level", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [], true), $.methodSignature("UseLogLevel", [["level", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [], true), $.methodSignature("logError", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("logEvent", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true)],
		ZapLogger,
		() => [/* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, true), /* @__PURE__ */ $.structField("logLevel", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [1], 8, false, { pkgPath: "go.uber.org/fx/fxevent" }), /* @__PURE__ */ $.structField("errorLevel", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [2], 16, false, { pkgPath: "go.uber.org/fx/fxevent" })]
	)
}

export function moduleField(name: string): zap.Field {
	if ($.stringLen(name) == 0) {
		return zap.Skip()
	}
	return zap.String("module", name)
}

export function maybeBool(name: string, b: boolean): zap.Field {
	if (b) {
		return zap.Bool(name, true)
	}
	return zap.Skip()
}

var __goscriptAwait: any
