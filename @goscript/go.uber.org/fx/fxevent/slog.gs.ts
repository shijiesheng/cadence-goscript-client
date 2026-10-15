// Generated file based on slog.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as slog from "@goscript/log/slog/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as os from "@goscript/os/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_event from "./event.gs.ts"

import type * as __goscript_logger from "./logger.gs.ts"
import "@goscript/context/index.js"
import "@goscript/log/slog/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/os/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/fx/fxevent", ["fxevent.SlogLogger", "fxevent.slogFieldSkip"])

export class SlogLogger {
	public get Logger(): slog.Logger | $.VarRef<slog.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: slog.Logger | $.VarRef<slog.Logger> | null) {
		this._fields.Logger = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get logLevel(): slog.Level {
		return this._fields.logLevel
	}

	public set logLevel(value: slog.Level) {
		this._fields.logLevel = value
	}

	public get errorLevel(): $.VarRef<slog.Level> | null {
		return this._fields.errorLevel
	}

	public set errorLevel(value: $.VarRef<slog.Level> | null) {
		this._fields.errorLevel = value
	}

	public _fields: {
		Logger: slog.Logger | $.VarRef<slog.Logger> | null
		ctx: context.Context | null
		logLevel: slog.Level
		errorLevel: $.VarRef<slog.Level> | null
	}

	constructor(init?: Partial<{Logger?: slog.Logger | $.VarRef<slog.Logger> | null, ctx?: context.Context | null, logLevel?: slog.Level, errorLevel?: $.VarRef<slog.Level> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Logger: init?.Logger ?? (null! as slog.Logger | $.VarRef<slog.Logger> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			logLevel: init?.logLevel ?? (0 as slog.Level),
			errorLevel: init?.errorLevel ?? (null! as $.VarRef<slog.Level> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SlogLogger {
		return new SlogLogger(this, true)
	}

	public __goscriptAssign(source: SlogLogger): void {
		const target = this._fields
		const values = source._fields
		target.Logger = values.Logger
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.logLevel = values.logLevel
		target.errorLevel = values.errorLevel
	}

	public async LogEvent(event: __goscript_event.Event | null): globalThis.Promise<void> {
		const l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		{
			const __goscriptTypeSwitchValue = event
			switch (true) {
				case $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).ok:
					{
						let e: __goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null = $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).value
						await SlogLogger.prototype.logEvent.call(l, "OnStart hook executing", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStartExecuting>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStartExecuting>(e).CallerName), "slog.Attr", "slog.Attr")]))
					}
					break
				case $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).ok:
					{
						let e: __goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null = $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).value
						if ($.pointerValue<__goscript_event.OnStartExecuted>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "OnStart hook failed", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.OnStartExecuted>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await SlogLogger.prototype.logEvent.call(l, "OnStart hook executed", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("runtime", time.Duration_String($.pointerValue<__goscript_event.OnStartExecuted>(e).Runtime)), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).ok:
					{
						let e: __goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null = $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).value
						await SlogLogger.prototype.logEvent.call(l, "OnStop hook executing", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStopExecuting>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStopExecuting>(e).CallerName), "slog.Attr", "slog.Attr")]))
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).ok:
					{
						let e: __goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null = $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).value
						if ($.pointerValue<__goscript_event.OnStopExecuted>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "OnStop hook failed", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.OnStopExecuted>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await SlogLogger.prototype.logEvent.call(l, "OnStop hook executed", $.arrayToSlice<any>([$.interfaceValue(slog.String("callee", $.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("caller", $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("runtime", time.Duration_String($.pointerValue<__goscript_event.OnStopExecuted>(e).Runtime)), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).ok:
					{
						let e: __goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null = $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).value
						if ($.pointerValue<__goscript_event.Supplied>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<any>([$.interfaceValue(slog.String("type", $.pointerValue<__goscript_event.Supplied>(e).TypeName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Supplied>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Supplied>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Supplied>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.Supplied>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await SlogLogger.prototype.logEvent.call(l, "supplied", $.arrayToSlice<any>([$.interfaceValue(slog.String("type", $.pointerValue<__goscript_event.Supplied>(e).TypeName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Supplied>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Supplied>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Supplied>(e).ModuleName), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).ok:
					{
						let e: __goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null = $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).value
						for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_event.Provided>(e).OutputTypeNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
							await SlogLogger.prototype.logEvent.call(l, "provided", $.arrayToSlice<any>([$.interfaceValue(slog.String("constructor", $.pointerValue<__goscript_event.Provided>(e).ConstructorName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Provided>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Provided>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Provided>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("type", rtype), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeBool("private", $.pointerValue<__goscript_event.Provided>(e).Private), "slog.Attr", "slog.Attr")]))
						}
						if ($.pointerValue<__goscript_event.Provided>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<any>([$.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Provided>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Provided>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Provided>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.Provided>(e).Err), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).ok:
					{
						let e: __goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null = $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).value
						for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_event.Replaced>(e).OutputTypeNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
							await SlogLogger.prototype.logEvent.call(l, "replaced", $.arrayToSlice<any>([$.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Replaced>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Replaced>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Replaced>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("type", rtype), "slog.Attr", "slog.Attr")]))
						}
						if ($.pointerValue<__goscript_event.Replaced>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "error encountered while replacing", $.arrayToSlice<any>([$.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Replaced>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Replaced>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Replaced>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.Replaced>(e).Err), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).ok:
					{
						let e: __goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null = $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).value
						for (let __goscriptRangeTarget2 = $.pointerValue<__goscript_event.Decorated>(e).OutputTypeNames, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
							await SlogLogger.prototype.logEvent.call(l, "decorated", $.arrayToSlice<any>([$.interfaceValue(slog.String("decorator", $.pointerValue<__goscript_event.Decorated>(e).DecoratorName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Decorated>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Decorated>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Decorated>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("type", rtype), "slog.Attr", "slog.Attr")]))
						}
						if ($.pointerValue<__goscript_event.Decorated>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "error encountered while applying options", $.arrayToSlice<any>([$.interfaceValue(slogStrings("stacktrace", $.pointerValue<__goscript_event.Decorated>(e).StackTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogStrings("moduletrace", $.pointerValue<__goscript_event.Decorated>(e).ModuleTrace), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Decorated>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.Decorated>(e).Err), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).ok:
					{
						let e: __goscript_event.Run | $.VarRef<__goscript_event.Run> | null = $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).value
						if ($.pointerValue<__goscript_event.Run>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "error returned", $.arrayToSlice<any>([$.interfaceValue(slog.String("name", $.pointerValue<__goscript_event.Run>(e).Name), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("kind", $.pointerValue<__goscript_event.Run>(e).Kind), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Run>(e).ModuleName), "slog.Attr", "slog.Attr"), $.interfaceValue(await slogErr($.pointerValue<__goscript_event.Run>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await SlogLogger.prototype.logEvent.call(l, "run", $.arrayToSlice<any>([$.interfaceValue(slog.String("name", $.pointerValue<__goscript_event.Run>(e).Name), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("kind", $.pointerValue<__goscript_event.Run>(e).Kind), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Run>(e).ModuleName), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).ok:
					{
						let e: __goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null = $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).value
						await SlogLogger.prototype.logEvent.call(l, "invoking", $.arrayToSlice<any>([$.interfaceValue(slog.String("function", $.pointerValue<__goscript_event.Invoking>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Invoking>(e).ModuleName), "slog.Attr", "slog.Attr")]))
					}
					break
				case $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).ok:
					{
						let e: __goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null = $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).value
						if ($.pointerValue<__goscript_event.Invoked>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "invoke failed", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.Invoked>(e).Err), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("stack", $.pointerValue<__goscript_event.Invoked>(e).Trace), "slog.Attr", "slog.Attr"), $.interfaceValue(slog.String("function", $.pointerValue<__goscript_event.Invoked>(e).FunctionName), "slog.Attr", "slog.Attr"), $.interfaceValue(slogMaybeModuleField($.pointerValue<__goscript_event.Invoked>(e).ModuleName), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).ok:
					{
						let e: __goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null = $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).value
						await SlogLogger.prototype.logEvent.call(l, "received signal", $.arrayToSlice<any>([$.interfaceValue(slog.String("signal", strings.ToUpper((__goscriptAwait = $.pointerValue<Exclude<os.Signal, null>>($.pointerValue<__goscript_event.Stopping>(e).Signal).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), "slog.Attr", "slog.Attr")]))
					}
					break
				case $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).ok:
					{
						let e: __goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null = $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).value
						if ($.pointerValue<__goscript_event.Stopped>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "stop failed", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.Stopped>(e).Err), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).ok:
					{
						let e: __goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null = $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).value
						await SlogLogger.prototype.logError.call(l, "start failed, rolling back", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.RollingBack>(e).StartErr), "slog.Attr", "slog.Attr")]))
					}
					break
				case $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).ok:
					{
						let e: __goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null = $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).value
						if ($.pointerValue<__goscript_event.RolledBack>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "rollback failed", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.RolledBack>(e).Err), "slog.Attr", "slog.Attr")]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).ok:
					{
						let e: __goscript_event.Started | $.VarRef<__goscript_event.Started> | null = $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).value
						if ($.pointerValue<__goscript_event.Started>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "start failed", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.Started>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as SlogLogger).logEvent("started", null) : SlogLogger.prototype.logEvent.call(l, "started", null))
						}
					}
					break
				case $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).ok:
					{
						let e: __goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null = $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).value
						if ($.pointerValue<__goscript_event.LoggerInitialized>(e).Err != null) {
							await SlogLogger.prototype.logError.call(l, "custom logger initialization failed", $.arrayToSlice<any>([$.interfaceValue(await slogErr($.pointerValue<__goscript_event.LoggerInitialized>(e).Err), "slog.Attr", "slog.Attr")]))
						} else {
							await SlogLogger.prototype.logEvent.call(l, "initialized custom fxevent.Logger", $.arrayToSlice<any>([$.interfaceValue(slog.String("function", $.pointerValue<__goscript_event.LoggerInitialized>(e).ConstructorName), "slog.Attr", "slog.Attr")]))
						}
					}
					break
			}
		}
	}

	public UseContext(ctx: context.Context | null): void {
		let l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		$.pointerValue<SlogLogger>(l).ctx = ctx
	}

	public UseErrorLevel(__goscriptParam0: slog.Level): void {
		let l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		let level: $.VarRef<slog.Level> = $.varRef(__goscriptParam0)
		$.pointerValue<SlogLogger>(l).errorLevel = level
	}

	public UseLogLevel(level: slog.Level): void {
		let l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		$.pointerValue<SlogLogger>(l).logLevel = level
	}

	public async filter(fields: $.Slice<any>): globalThis.Promise<$.Slice<any>> {
		const l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		let filtered: $.Slice<any> = $.arrayToSlice<any>([])

		for (let __goscriptRangeTarget3 = fields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let field = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as any)
			let __goscriptShadow0 = field
			{
				let __goscriptTuple0: any = $.typeAssertTuple<slog.Attr>(__goscriptShadow0, "slog.Attr")
				let __goscriptShadow1 = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					{
						let [, __goscriptShadow2] = $.typeAssertTuple<slogFieldSkip>(await __goscriptShadow1.Value.Any(), "fxevent.slogFieldSkip")
						if (__goscriptShadow2) {
							continue
						}
					}
				}
			}

			filtered = $.appendOne(filtered, field, $.appendZeros.nil)
		}

		return filtered
	}

	public async logError(msg: string, fields: $.Slice<any>): globalThis.Promise<void> {
		const l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		const l$: SlogLogger = l == null ? $.pointerTarget<SlogLogger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<SlogLogger>(l)
		let lvl = 8
		if ((l$ as SlogLogger).errorLevel != null) {
			lvl = $.pointerValue<slog.Level>((l$ as SlogLogger).errorLevel)
		}

		await slog.Logger.prototype.Log.call((l$ as SlogLogger).Logger, (l$ as SlogLogger).ctx, lvl, msg, await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as SlogLogger).filter(fields) : SlogLogger.prototype.filter.call(l, fields)))
	}

	public async logEvent(msg: string, fields: $.Slice<any>): globalThis.Promise<void> {
		const l: SlogLogger | $.VarRef<SlogLogger> | null = this;
		const l$: SlogLogger = l == null ? $.pointerTarget<SlogLogger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<SlogLogger>(l)
		await slog.Logger.prototype.Log.call((l$ as SlogLogger).Logger, (l$ as SlogLogger).ctx, (l$ as SlogLogger).logLevel, msg, await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as SlogLogger).filter(fields) : SlogLogger.prototype.filter.call(l, fields)))
	}

	static __typeInfo = $.registerStructType(
		"fxevent.SlogLogger",
		() => new SlogLogger(),
		() => [$.methodSignature("LogEvent", [["event", "fxevent.Event"]], [], true), $.methodSignature("UseContext", [["ctx", "context.Context"]], [], true), $.methodSignature("UseErrorLevel", [["level", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [], true), $.methodSignature("UseLogLevel", [["level", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [], true), $.methodSignature("filter", [["fields", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("logError", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("logEvent", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		SlogLogger,
		() => [/* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("slog.Logger"), [0], 0, true), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "go.uber.org/fx/fxevent" }), /* @__PURE__ */ $.structField("logLevel", /* @__PURE__ */ $.basicType("int", "slog.Level"), [2], 24, false, { pkgPath: "go.uber.org/fx/fxevent" }), /* @__PURE__ */ $.structField("errorLevel", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "slog.Level")), [3], 32, false, { pkgPath: "go.uber.org/fx/fxevent" })]
	)
}

export class slogFieldSkip {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): slogFieldSkip {
		return new slogFieldSkip(this, true)
	}

	public __goscriptAssign(source: slogFieldSkip): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.slogFieldSkip",
		() => new slogFieldSkip(),
		() => [],
		slogFieldSkip,
		() => []
	)
}

export function slogMaybeModuleField(name: string): slog.Attr {
	if ($.stringLen(name) == 0) {
		return slog.Any("module", $.interfaceValue(new slogFieldSkip(undefined, true), "fxevent.slogFieldSkip", "fxevent.slogFieldSkip"))
	}
	return slog.String("module", name)
}

export function slogMaybeBool(name: string, b: boolean): slog.Attr {
	if (!b) {
		return slog.Any(name, $.interfaceValue(new slogFieldSkip(undefined, true), "fxevent.slogFieldSkip", "fxevent.slogFieldSkip"))
	}
	return slog.Bool(name, true)
}

export async function slogErr(err: $.GoError): globalThis.Promise<slog.Attr> {
	return slog.String("error", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export function slogStrings(key: string, str: $.Slice<string>): slog.Attr {
	let attrs: $.Slice<any> = $.makeSlice<any>($.sliceLen(str))
	for (let __goscriptRangeTarget4 = str, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow0 = $.sliceRange(attrs), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let val = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as string);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.interfaceValue(slog.String(strconv.Itoa(i), val), "slog.Attr", "slog.Attr")
	}
	return slog.Group(key, attrs)
}

var __goscriptAwait: any
