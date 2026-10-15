// Generated file based on console.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as os from "@goscript/os/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_event from "./event.gs.ts"

import type * as __goscript_logger from "./logger.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/os/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/fx/fxevent", ["fxevent.ConsoleLogger"])

export class ConsoleLogger {
	public get W(): io.Writer | null {
		return this._fields.W
	}

	public set W(value: io.Writer | null) {
		this._fields.W = value
	}

	public _fields: {
		W: io.Writer | null
	}

	constructor(init?: Partial<{W?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			W: init?.W ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConsoleLogger {
		return new ConsoleLogger(this, true)
	}

	public __goscriptAssign(source: ConsoleLogger): void {
		const target = this._fields
		const values = source._fields
		target.W = $.assignFieldValue(target.W, values.W, "io.Writer")
	}

	public async LogEvent(event: __goscript_event.Event | null): globalThis.Promise<void> {
		const l: ConsoleLogger | $.VarRef<ConsoleLogger> | null = this;
		{
			const __goscriptTypeSwitchValue = event
			switch (true) {
				case $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).ok:
					{
						let e: __goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null = $.typeAssert<__goscript_event.OnStartExecuting | $.VarRef<__goscript_event.OnStartExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting")).value
						await ConsoleLogger.prototype.logf.call(l, "HOOK OnStart\t\t%s executing (caller: %s)", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStartExecuting>(e).FunctionName, $.pointerValue<__goscript_event.OnStartExecuting>(e).CallerName]))
					}
					break
				case $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).ok:
					{
						let e: __goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null = $.typeAssert<__goscript_event.OnStartExecuted | $.VarRef<__goscript_event.OnStartExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted")).value
						if ($.pointerValue<__goscript_event.OnStartExecuted>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "HOOK OnStart\t\t%s called by %s failed in %s: %+v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName, $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName, $.namedValueInterfaceValue<any>($.pointerValue<__goscript_event.OnStartExecuted>(e).Runtime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), ($.pointerValue<__goscript_event.OnStartExecuted>(e).Err as any)]))
						} else {
							await ConsoleLogger.prototype.logf.call(l, "HOOK OnStart\t\t%s called by %s ran successfully in %s", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStartExecuted>(e).FunctionName, $.pointerValue<__goscript_event.OnStartExecuted>(e).CallerName, $.namedValueInterfaceValue<any>($.pointerValue<__goscript_event.OnStartExecuted>(e).Runtime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
						}
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).ok:
					{
						let e: __goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null = $.typeAssert<__goscript_event.OnStopExecuting | $.VarRef<__goscript_event.OnStopExecuting> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting")).value
						await ConsoleLogger.prototype.logf.call(l, "HOOK OnStop\t\t%s executing (caller: %s)", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStopExecuting>(e).FunctionName, $.pointerValue<__goscript_event.OnStopExecuting>(e).CallerName]))
					}
					break
				case $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).ok:
					{
						let e: __goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null = $.typeAssert<__goscript_event.OnStopExecuted | $.VarRef<__goscript_event.OnStopExecuted> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted")).value
						if ($.pointerValue<__goscript_event.OnStopExecuted>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "HOOK OnStop\t\t%s called by %s failed in %s: %+v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName, $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName, $.namedValueInterfaceValue<any>($.pointerValue<__goscript_event.OnStopExecuted>(e).Runtime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), ($.pointerValue<__goscript_event.OnStopExecuted>(e).Err as any)]))
						} else {
							await ConsoleLogger.prototype.logf.call(l, "HOOK OnStop\t\t%s called by %s ran successfully in %s", $.arrayToSlice<any>([$.pointerValue<__goscript_event.OnStopExecuted>(e).FunctionName, $.pointerValue<__goscript_event.OnStopExecuted>(e).CallerName, $.namedValueInterfaceValue<any>($.pointerValue<__goscript_event.OnStopExecuted>(e).Runtime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).ok:
					{
						let e: __goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null = $.typeAssert<__goscript_event.Supplied | $.VarRef<__goscript_event.Supplied> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Supplied")).value
						if ($.pointerValue<__goscript_event.Supplied>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "ERROR\tFailed to supply %v: %+v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Supplied>(e).TypeName, ($.pointerValue<__goscript_event.Supplied>(e).Err as any)]))
						} else {
							if (!$.stringEqual($.pointerValue<__goscript_event.Supplied>(e).ModuleName, "")) {
								await ConsoleLogger.prototype.logf.call(l, "SUPPLY\t%v from module %q", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Supplied>(e).TypeName, $.pointerValue<__goscript_event.Supplied>(e).ModuleName]))
							} else {
								await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("SUPPLY\t%v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Supplied>(e).TypeName])) : ConsoleLogger.prototype.logf.call(l, "SUPPLY\t%v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Supplied>(e).TypeName])))
							}
						}
					}
					break
				case $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).ok:
					{
						let e: __goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null = $.typeAssert<__goscript_event.Provided | $.VarRef<__goscript_event.Provided> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Provided")).value
						let privateStr: string = ""
						if ($.pointerValue<__goscript_event.Provided>(e).Private) {
							privateStr = " (PRIVATE)"
						}
						for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_event.Provided>(e).OutputTypeNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
							if (!$.stringEqual($.pointerValue<__goscript_event.Provided>(e).ModuleName, "")) {
								await ConsoleLogger.prototype.logf.call(l, "PROVIDE%v\t%v <= %v from module %q", $.arrayToSlice<any>([privateStr, rtype, $.pointerValue<__goscript_event.Provided>(e).ConstructorName, $.pointerValue<__goscript_event.Provided>(e).ModuleName]))
							} else {
								await ConsoleLogger.prototype.logf.call(l, "PROVIDE%v\t%v <= %v", $.arrayToSlice<any>([privateStr, rtype, $.pointerValue<__goscript_event.Provided>(e).ConstructorName]))
							}
						}
						if ($.pointerValue<__goscript_event.Provided>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "Error after options were applied: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Provided>(e).Err as any)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).ok:
					{
						let e: __goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null = $.typeAssert<__goscript_event.Replaced | $.VarRef<__goscript_event.Replaced> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Replaced")).value
						for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_event.Replaced>(e).OutputTypeNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
							if (!$.stringEqual($.pointerValue<__goscript_event.Replaced>(e).ModuleName, "")) {
								await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("REPLACE\t%v from module %q", $.arrayToSlice<any>([rtype, $.pointerValue<__goscript_event.Replaced>(e).ModuleName])) : ConsoleLogger.prototype.logf.call(l, "REPLACE\t%v from module %q", $.arrayToSlice<any>([rtype, $.pointerValue<__goscript_event.Replaced>(e).ModuleName])))
							} else {
								await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("REPLACE\t%v", $.arrayToSlice<any>([rtype])) : ConsoleLogger.prototype.logf.call(l, "REPLACE\t%v", $.arrayToSlice<any>([rtype])))
							}
						}
						if ($.pointerValue<__goscript_event.Replaced>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("ERROR\tFailed to replace: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Replaced>(e).Err as any)])) : ConsoleLogger.prototype.logf.call(l, "ERROR\tFailed to replace: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Replaced>(e).Err as any)])))
						}
					}
					break
				case $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).ok:
					{
						let e: __goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null = $.typeAssert<__goscript_event.Decorated | $.VarRef<__goscript_event.Decorated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Decorated")).value
						for (let __goscriptRangeTarget2 = $.pointerValue<__goscript_event.Decorated>(e).OutputTypeNames, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let rtype = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
							if (!$.stringEqual($.pointerValue<__goscript_event.Decorated>(e).ModuleName, "")) {
								await ConsoleLogger.prototype.logf.call(l, "DECORATE\t%v <= %v from module %q", $.arrayToSlice<any>([rtype, $.pointerValue<__goscript_event.Decorated>(e).DecoratorName, $.pointerValue<__goscript_event.Decorated>(e).ModuleName]))
							} else {
								await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("DECORATE\t%v <= %v", $.arrayToSlice<any>([rtype, $.pointerValue<__goscript_event.Decorated>(e).DecoratorName])) : ConsoleLogger.prototype.logf.call(l, "DECORATE\t%v <= %v", $.arrayToSlice<any>([rtype, $.pointerValue<__goscript_event.Decorated>(e).DecoratorName])))
							}
						}
						if ($.pointerValue<__goscript_event.Decorated>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "Error after options were applied: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Decorated>(e).Err as any)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).ok:
					{
						let e: __goscript_event.Run | $.VarRef<__goscript_event.Run> | null = $.typeAssert<__goscript_event.Run | $.VarRef<__goscript_event.Run> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Run")).value
						let moduleStr: string = ""
						if (!$.stringEqual($.pointerValue<__goscript_event.Run>(e).ModuleName, "")) {
							moduleStr = await fmt.Sprintf(" from module %q", $.pointerValue<__goscript_event.Run>(e).ModuleName)
						}
						await ConsoleLogger.prototype.logf.call(l, "RUN\t%v: %v%v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Run>(e).Kind, $.pointerValue<__goscript_event.Run>(e).Name, moduleStr]))
						if ($.pointerValue<__goscript_event.Run>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("Error returned: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Run>(e).Err as any)])) : ConsoleLogger.prototype.logf.call(l, "Error returned: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Run>(e).Err as any)])))
						}
					}
					break
				case $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).ok:
					{
						let e: __goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null = $.typeAssert<__goscript_event.Invoking | $.VarRef<__goscript_event.Invoking> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoking")).value
						if (!$.stringEqual($.pointerValue<__goscript_event.Invoking>(e).ModuleName, "")) {
							await ConsoleLogger.prototype.logf.call(l, "INVOKE\t\t%s from module %q", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Invoking>(e).FunctionName, $.pointerValue<__goscript_event.Invoking>(e).ModuleName]))
						} else {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("INVOKE\t\t%s", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Invoking>(e).FunctionName])) : ConsoleLogger.prototype.logf.call(l, "INVOKE\t\t%s", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Invoking>(e).FunctionName])))
						}
					}
					break
				case $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).ok:
					{
						let e: __goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null = $.typeAssert<__goscript_event.Invoked | $.VarRef<__goscript_event.Invoked> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Invoked")).value
						if ($.pointerValue<__goscript_event.Invoked>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "ERROR\t\tfx.Invoke(%v) called from:\n%+vFailed: %+v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.Invoked>(e).FunctionName, $.pointerValue<__goscript_event.Invoked>(e).Trace, ($.pointerValue<__goscript_event.Invoked>(e).Err as any)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).ok:
					{
						let e: __goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null = $.typeAssert<__goscript_event.Stopping | $.VarRef<__goscript_event.Stopping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopping")).value
						await ConsoleLogger.prototype.logf.call(l, "%v", $.arrayToSlice<any>([strings.ToUpper((__goscriptAwait = $.pointerValue<Exclude<os.Signal, null>>($.pointerValue<__goscript_event.Stopping>(e).Signal).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
					}
					break
				case $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).ok:
					{
						let e: __goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null = $.typeAssert<__goscript_event.Stopped | $.VarRef<__goscript_event.Stopped> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Stopped")).value
						if ($.pointerValue<__goscript_event.Stopped>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("ERROR\t\tFailed to stop cleanly: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Stopped>(e).Err as any)])) : ConsoleLogger.prototype.logf.call(l, "ERROR\t\tFailed to stop cleanly: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Stopped>(e).Err as any)])))
						}
					}
					break
				case $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).ok:
					{
						let e: __goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null = $.typeAssert<__goscript_event.RollingBack | $.VarRef<__goscript_event.RollingBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RollingBack")).value
						await ConsoleLogger.prototype.logf.call(l, "ERROR\t\tStart failed, rolling back: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.RollingBack>(e).StartErr as any)]))
					}
					break
				case $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).ok:
					{
						let e: __goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null = $.typeAssert<__goscript_event.RolledBack | $.VarRef<__goscript_event.RolledBack> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.RolledBack")).value
						if ($.pointerValue<__goscript_event.RolledBack>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "ERROR\t\tCouldn't roll back cleanly: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.RolledBack>(e).Err as any)]))
						}
					}
					break
				case $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).ok:
					{
						let e: __goscript_event.Started | $.VarRef<__goscript_event.Started> | null = $.typeAssert<__goscript_event.Started | $.VarRef<__goscript_event.Started> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.Started")).value
						if ($.pointerValue<__goscript_event.Started>(e).Err != null) {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("ERROR\t\tFailed to start: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Started>(e).Err as any)])) : ConsoleLogger.prototype.logf.call(l, "ERROR\t\tFailed to start: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.Started>(e).Err as any)])))
						} else {
							await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ConsoleLogger).logf("RUNNING", null) : ConsoleLogger.prototype.logf.call(l, "RUNNING", null))
						}
					}
					break
				case $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).ok:
					{
						let e: __goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null = $.typeAssert<__goscript_event.LoggerInitialized | $.VarRef<__goscript_event.LoggerInitialized> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized")).value
						if ($.pointerValue<__goscript_event.LoggerInitialized>(e).Err != null) {
							await ConsoleLogger.prototype.logf.call(l, "ERROR\t\tFailed to initialize custom logger: %+v", $.arrayToSlice<any>([($.pointerValue<__goscript_event.LoggerInitialized>(e).Err as any)]))
						} else {
							await ConsoleLogger.prototype.logf.call(l, "LOGGER\tInitialized custom logger from %v", $.arrayToSlice<any>([$.pointerValue<__goscript_event.LoggerInitialized>(e).ConstructorName]))
						}
					}
					break
			}
		}
	}

	public async logf(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: ConsoleLogger | $.VarRef<ConsoleLogger> | null = this;
		await fmt.Fprintf($.pointerValueOrNil($.pointerValue<ConsoleLogger>(l).W)!, $.concatString(($.concatString("[Fx] ", msg)), "\n"), ...(args ?? []))
	}

	static __typeInfo = $.registerStructType(
		"fxevent.ConsoleLogger",
		() => new ConsoleLogger(),
		() => [$.methodSignature("LogEvent", [["event", "fxevent.Event"]], [], true), $.methodSignature("logf", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		ConsoleLogger,
		() => [/* @__PURE__ */ $.structField("W", "io.Writer", [0], 0, true)]
	)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
